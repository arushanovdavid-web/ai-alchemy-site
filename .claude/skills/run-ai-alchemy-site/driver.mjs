#!/usr/bin/env node
/* Drive the AI Alchemy static site in headless Chrome: serve the checkout, open pages, scroll, run JS, screenshot.
   Run from the root of a checkout (it serves the current directory over http on 127.0.0.1, never file://).

     node .claude/skills/run-ai-alchemy-site/driver.mjs '<json spec>'

   spec: {
     out:     "dir for PNGs" (default ./.shots),   prefix: "name prefix" (default "s"),
     w, h, dpr, mobile, reduced, cpu (throttle rate), nowebgl (true: Chrome runs with WebGL off),
     shots: [{ name, path: "/", scroll: px | "50%" (of scrollable height), wait: ms, js: "expression", clip: "css selector" }],
     sheet: cols (contact sheet of the shots), compare: "image path" (puts that image beside every shot, same size)
   }
   Prints JSON: console errors, failed requests, any non-local request, each shot's js value, the WebGL renderer string. */
import { spawn } from 'node:child_process';
import { createServer } from 'node:http';
import { readFileSync, writeFileSync, mkdirSync, existsSync, statSync } from 'node:fs';
import { resolve, extname, join } from 'node:path';

const spec = JSON.parse(process.argv[2] || '{}');
const root = process.cwd(), out = resolve(spec.out || '.shots'), prefix = spec.prefix || 's';
mkdirSync(out, { recursive: true });
const MIME = { '.html': 'text/html; charset=utf-8', '.css': 'text/css', '.js': 'text/javascript', '.mjs': 'text/javascript', '.json': 'application/json', '.svg': 'image/svg+xml', '.png': 'image/png', '.jpg': 'image/jpeg', '.webp': 'image/webp', '.woff2': 'font/woff2', '.ico': 'image/x-icon', '.txt': 'text/plain', '.xml': 'application/xml', '.webmanifest': 'application/manifest+json', '.mp4': 'video/mp4' };
const extra = new Map();   /* files outside the checkout that a sheet needs (shots, the reference) */
const server = createServer((req, res) => {
  let p = decodeURIComponent(new URL(req.url, 'http://x').pathname);
  if (extra.has(p)) { res.writeHead(200, { 'content-type': MIME[extname(p)] || 'application/octet-stream' }); return res.end(readFileSync(extra.get(p))); }
  let f = join(root, p);
  if (!f.startsWith(root)) { res.writeHead(403); return res.end(); }
  if (existsSync(f) && statSync(f).isDirectory()) f = join(f, 'index.html');
  if (!existsSync(f)) { res.writeHead(404); return res.end('not found'); }
  res.writeHead(200, { 'content-type': MIME[extname(f)] || 'application/octet-stream', 'cache-control': 'no-store' }); res.end(readFileSync(f));
});
await new Promise(r => server.listen(0, '127.0.0.1', r));
const BASE = `http://127.0.0.1:${server.address().port}`, DBG = 9300 + Math.floor(Math.random() * 600);
const profile = resolve(out, '.chrome-' + prefix);
const args = ['--headless=new', '--hide-scrollbars', '--no-first-run', '--mute-audio', '--ignore-gpu-blocklist', `--remote-debugging-port=${DBG}`, `--user-data-dir=${profile}`];
if (spec.nowebgl) args.push('--disable-3d-apis', '--disable-webgl');
const chrome = spawn('/Applications/Google Chrome.app/Contents/MacOS/Google Chrome', [...args, 'about:blank'], { stdio: 'ignore' });
const sleep = ms => new Promise(r => setTimeout(r, ms));
const report = { base: BASE, errors: [], failed: [], external: [], values: {}, files: [] };
try {
  let targets;
  for (let i = 0; i < 60; i++) { try { targets = await (await fetch(`http://127.0.0.1:${DBG}/json`)).json(); if (targets.some(t => t.type === 'page')) break; } catch { } await sleep(150); }
  const ws = new WebSocket(targets.find(t => t.type === 'page').webSocketDebuggerUrl);
  await new Promise(r => ws.addEventListener('open', r));
  let id = 0; const pending = new Map(), waiters = [];
  ws.addEventListener('message', m => {
    const d = JSON.parse(m.data);
    if (d.id) { pending.get(d.id)?.(d); pending.delete(d.id); return; }
    if (d.method === 'Runtime.exceptionThrown') report.errors.push(d.params.exceptionDetails.exception?.description || d.params.exceptionDetails.text);
    if (d.method === 'Runtime.consoleAPICalled' && d.params.type === 'error') report.errors.push(d.params.args.map(a => a.value ?? a.description).join(' '));
    if (d.method === 'Log.entryAdded' && d.params.entry.level === 'error') report.errors.push(d.params.entry.text + ' ' + (d.params.entry.url || ''));
    if (d.method === 'Network.requestWillBeSent') { const u = d.params.request.url; if (!u.startsWith(BASE) && !/^(data:|blob:|about:)/.test(u)) report.external.push(u); }
    if (d.method === 'Network.responseReceived' && d.params.response.status >= 400) report.failed.push(d.params.response.status + ' ' + d.params.response.url);
    if (d.method === 'Network.loadingFailed' && !d.params.canceled) report.failed.push('failed ' + d.params.errorText);
    for (let i = waiters.length - 1; i >= 0; i--) if (waiters[i].m === d.method) waiters.splice(i, 1)[0].r();
  });
  const send = (method, params = {}) => new Promise(r => { pending.set(++id, r); ws.send(JSON.stringify({ id, method, params })); });
  const once = m => new Promise(r => waiters.push({ m, r }));
  const ev = async js => { const r = await send('Runtime.evaluate', { expression: js, awaitPromise: true, returnByValue: true }); return r.result.exceptionDetails ? 'ERR ' + (r.result.exceptionDetails.exception?.description || r.result.exceptionDetails.text) : r.result.result.value; };
  for (const d of ['Page', 'Runtime', 'Log', 'Network']) await send(d + '.enable');
  const W = spec.w || 1440, H = spec.h || 900;
  const metrics = (w, h, dpr = 1, mobile = false) => send('Emulation.setDeviceMetricsOverride', { width: w, height: h, deviceScaleFactor: dpr, mobile });
  await metrics(W, H, spec.dpr || 1, !!spec.mobile);
  await send('Emulation.setFocusEmulationEnabled', { enabled: true });
  if (spec.mobile) await send('Emulation.setTouchEmulationEnabled', { enabled: true, maxTouchPoints: 5 });
  if (spec.cpu) await send('Emulation.setCPUThrottlingRate', { rate: spec.cpu });
  if (spec.reduced) await send('Emulation.setEmulatedMedia', { features: [{ name: 'prefers-reduced-motion', value: 'reduce' }] });
  let current = '';
  for (const s of spec.shots || [{ name: 'home' }]) {
    const url = BASE + (s.path || '/');
    if (url !== current || s.reload) { const loaded = once('Page.loadEventFired'); await send('Page.navigate', { url }); await loaded; current = url; await sleep(400); }
    if (s.scroll !== undefined) {
      const y = typeof s.scroll === 'string' && s.scroll.endsWith('%') ? `(document.documentElement.scrollHeight-innerHeight)*${parseFloat(s.scroll) / 100}` : +s.scroll;
      await ev(`scrollTo(0,${y})`);
    }
    await sleep(s.wait ?? 1200);
    if (s.js) report.values[s.name] = await ev(s.js);
    let opt = { format: 'png' };
    if (s.clip) { const r = await ev(`(()=>{const b=document.querySelector(${JSON.stringify(s.clip)}).getBoundingClientRect();return {x:b.x+scrollX,y:b.y+scrollY,width:b.width,height:b.height}})()`); opt.clip = { ...r, scale: 1 }; }
    const shot = await send('Page.captureScreenshot', opt);
    const file = resolve(out, `${prefix}-${s.name}.png`); writeFileSync(file, Buffer.from(shot.result.data, 'base64')); report.files.push(file);
  }
  report.webgl = await ev(`(()=>{try{const g=document.createElement('canvas').getContext('webgl2');if(!g)return 'none';const e=g.getExtension('WEBGL_debug_renderer_info');return e?g.getParameter(e.UNMASKED_RENDERER_WEBGL):'webgl2'}catch(e){return 'none'}})()`);
  /* contact sheet, optionally with a reference image beside each shot */
  if (spec.sheet || spec.compare) {
    const shots = report.files.map((f, i) => { const k = `/__shot${i}.png`; extra.set(k, f); return k; });
    let ref = ''; if (spec.compare) { ref = '/__ref' + extname(spec.compare); extra.set(ref, resolve(spec.compare)); }
    const cols = spec.compare ? 2 : spec.sheet, tw = Math.min(900, Math.round(1800 / cols)), th = Math.round(H * tw / W);
    const cells = spec.compare ? shots.flatMap(s => [ref, s]) : shots, rows = Math.ceil(cells.length / cols);
    extra.set('/__sheet.html', resolve(out, `${prefix}-sheet.html`));
    writeFileSync(resolve(out, `${prefix}-sheet.html`), `<body style="margin:0;background:#888;display:grid;grid-template-columns:repeat(${cols},${tw}px);gap:6px">` + cells.map(c => `<img src="${c}" style="width:${tw}px;height:${th}px;object-fit:cover">`).join(''));
    await metrics(cols * tw + (cols - 1) * 6, rows * th + (rows - 1) * 6, 1, false);
    const loaded = once('Page.loadEventFired'); await send('Page.navigate', { url: BASE + '/__sheet.html' }); await loaded; await sleep(400);
    const shot = await send('Page.captureScreenshot', { format: 'png' });
    const file = resolve(out, `${prefix}-sheet.png`); writeFileSync(file, Buffer.from(shot.result.data, 'base64')); report.files.push(file);
  }
  ws.close();
} finally { chrome.kill(); server.close(); }
console.log(JSON.stringify(report, null, 1));
process.exit(0);
