// AI Alchemy site QA: drives the locally installed Google Chrome over the DevTools protocol (no downloads).
// Usage: serve the repo root (python3 -m http.server 8737 --bind 127.0.0.1), then
//   node tools/qa/site-qa.mjs [baseUrl] [outDir]
// Writes report.json and screenshots/filmstrips into outDir (default tools/qa/evidence).
import { spawn } from "node:child_process";
import { mkdirSync, writeFileSync, rmSync } from "node:fs";
import { join } from "node:path";
import { tmpdir } from "node:os";

const BASE = process.argv[2] || "http://127.0.0.1:8737";
const OUT = process.argv[3] || "tools/qa/evidence";
const CHROME = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
const PORT = 9333;
mkdirSync(OUT, { recursive: true });
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

const profile = join(tmpdir(), "aa-qa-" + Date.now());
const chrome = spawn(CHROME, ["--headless=new", "--remote-debugging-port=" + PORT, "--user-data-dir=" + profile,
  "--no-first-run", "--hide-scrollbars", "--force-color-profile=srgb", "about:blank"], { stdio: "ignore" });

async function json(path, method = "GET") {
  for (let i = 0; i < 50; i++) {
    try { const r = await fetch(`http://127.0.0.1:${PORT}${path}`, { method }); return await r.json(); } catch { await sleep(150); }
  }
  throw Error("Chrome did not start");
}

async function open() {
  const t = await json("/json/new?about:blank", "PUT");
  const ws = new WebSocket(t.webSocketDebuggerUrl);
  await new Promise((r) => ws.addEventListener("open", r, { once: true }));
  let id = 0; const pending = new Map(); const listeners = [];
  ws.addEventListener("message", (m) => {
    const msg = JSON.parse(m.data);
    if (msg.id && pending.has(msg.id)) { const [res, rej] = pending.get(msg.id); pending.delete(msg.id); msg.error ? rej(Error(msg.error.message)) : res(msg.result); }
    else listeners.forEach((f) => f(msg));
  });
  const send = (method, params = {}) => new Promise((res, rej) => { const i = ++id; pending.set(i, [res, rej]); ws.send(JSON.stringify({ id: i, method, params })); });
  const errors = [], failed = [];
  listeners.push((m) => {
    if (m.method === "Runtime.exceptionThrown") errors.push(m.params.exceptionDetails.exception?.description || m.params.exceptionDetails.text);
    if (m.method === "Runtime.consoleAPICalled" && m.params.type === "error") errors.push(m.params.args.map((a) => a.value ?? a.description).join(" "));
    if (m.method === "Log.entryAdded" && m.params.entry.level === "error") errors.push(m.params.entry.text + " " + (m.params.entry.url || ""));
    if (m.method === "Network.loadingFailed" && !m.params.canceled) failed.push(m.params.errorText);
    if (m.method === "Network.responseReceived" && m.params.response.status >= 400) failed.push(m.params.response.status + " " + m.params.response.url);
  });
  await Promise.all(["Runtime.enable", "Log.enable", "Network.enable", "Page.enable"].map((x) => send(x)));
  const evaluate = async (expr) => (await send("Runtime.evaluate", { expression: expr, awaitPromise: true, returnByValue: true })).result.value;
  const goto = async (url) => { await send("Page.navigate", { url }); await sleep(250); for (let i = 0; i < 80; i++) { if ((await evaluate("document.readyState")) === "complete") break; await sleep(100); } await sleep(500); };
  const shot = async (file, clip) => { const r = await send("Page.captureScreenshot", { format: file.endsWith(".png") ? "png" : "jpeg", quality: 80, ...(clip ? { clip } : {}) }); writeFileSync(join(OUT, file), Buffer.from(r.data, "base64")); };
  const size = (w, h) => send("Emulation.setDeviceMetricsOverride", { width: w, height: h, deviceScaleFactor: 1, mobile: w < 768 });
  const close = async () => { ws.close(); try { await fetch(`http://127.0.0.1:${PORT}/json/close/${t.id}`); } catch {} };
  return { send, evaluate, goto, shot, size, close, errors, failed };
}

const spineState = `(() => {
  const r = document.getElementById('experience'), svg = r && r.querySelector('svg.ia');
  if (!r || !svg) return null;
  const vb = (svg.getAttribute('viewBox') || '').split(/\\s+/).map(Number);
  const arts = [...r.querySelectorAll('article')];
  const shown = arts.findIndex(a => getComputedStyle(a).opacity > .5);
  const lit = [...svg.querySelectorAll('.ia-scene')].map(s => s.getAttribute('data-state'));
  const links = [...svg.querySelectorAll('.ia-link[id^="ia-link-"]')].map(l => l.getAttribute('data-state'));
  const transforms = [...svg.querySelectorAll('[transform]')].map(e => e.getAttribute('transform')).filter(t => /NaN|Infinity/.test(t));
  return { mode: r.dataset.mode, chapter: r.dataset.chapter, vb, finite: vb.length === 4 && vb.every(Number.isFinite) && vb[2] > 0, shown, lit, links, badTransforms: transforms.length };
})()`;
const goSpine = (p) => `(() => { const r = document.getElementById('experience'); const top = r.getBoundingClientRect().top + scrollY;
  const range = r.offsetHeight - r.querySelector('.stage').offsetHeight; scrollTo(0, top + ${p} * range); return new Promise(res => requestAnimationFrame(() => requestAnimationFrame(res))); })()`;

const report = { base: BASE, when: new Date().toISOString(), spine: {}, sweep: {}, routes: [], reducedMotion: null, noScript: null, keyboard: null };

// 1. Spine checkpoints, forward and reverse, at three widths
const sizes = [[1440, 900, "desktop"], [768, 1024, "tablet"], [390, 844, "phone"]];
const points = [0, 0.25, 0.5, 0.75, 1, 0.75, 0.5, 0.25, 0];
for (const [w, h, name] of sizes) {
  const tab = await open();
  await tab.size(w, h);
  await tab.goto(BASE + "/?qa=" + name);
  await tab.evaluate("scrollTo(0,0)"); await sleep(600);
  const rows = [];
  for (const [i, p] of points.entries()) {
    await tab.evaluate(goSpine(p)); await sleep(650);
    const s = await tab.evaluate(spineState);
    rows.push({ p, dir: i <= 4 ? "down" : "up", ...s });
    await tab.shot(`spine-${name}-${String(i).padStart(2, "0")}-${Math.round(p * 100)}.jpg`);
  }
  // reversibility: same progress gives the same camera going down and coming back up
  const pairs = [[0, 8], [1, 7], [2, 6], [3, 5]].map(([a, b]) => ({ p: points[a], same: JSON.stringify(rows[a].vb) === JSON.stringify(rows[b].vb), chapterSame: rows[a].chapter === rows[b].chapter }));
  // continuous sweep: 300 steps down and up; record per-step camera movement relative to view width
  const N = 300; let maxMove = 0, maxScale = 0, worstAt = 0, nonFinite = 0; const film = [];
  let prev = null;
  for (let k = 0; k <= 2 * N; k++) {
    const p = k <= N ? k / N : (2 * N - k) / N;
    await tab.evaluate(goSpine(p));
    const s = await tab.evaluate(spineState);
    if (!s.finite) nonFinite++;
    if (prev) {
      const move = Math.hypot(s.vb[0] + s.vb[2] / 2 - (prev[0] + prev[2] / 2), s.vb[1] + s.vb[3] / 2 - (prev[1] + prev[3] / 2)) / s.vb[2];
      const scale = Math.abs(Math.log(s.vb[2] / prev[2]));
      if (move > maxMove) { maxMove = move; worstAt = p; }
      maxScale = Math.max(maxScale, scale);
    }
    prev = s.vb;
    if (k % 25 === 0) { const f = `film-${name}-${String(k).padStart(3, "0")}.jpg`; await tab.shot(f); film.push(f); }
  }
  report.spine[name] = { rows, reversible: pairs, errors: [...tab.errors], failed: [...tab.failed] };
  report.sweep[name] = { steps: 2 * N, maxCentreMovePerStep: +maxMove.toFixed(4), worstAt: +worstAt.toFixed(3), maxLogScalePerStep: +maxScale.toFixed(4), nonFinite, film };
  await tab.close();
}

// 2. Every route at desktop and phone: console, network, overflow, h1, internal links
const routes = ["/", "/services/", "/services/strategy-architecture/", "/services/custom-software-modernization/", "/services/enterprise-ai-automation/",
  "/services/cloud-data/", "/industries/", "/industries/manufacturing-wholesale-logistics/", "/industries/mortgage-insurance/",
  "/industries/hvac-energy-home-improvement/", "/industries/financial-professional-services-non-profits/", "/about/", "/contact/",
  "/contact/thanks/", "/privacy/", "/404.html", "/lab/experience-spine/"];
const linkSet = new Set();
for (const [w, h, name] of [[1440, 900, "desktop"], [390, 844, "phone"]]) {
  for (const route of routes) {
    const tab = await open(); await tab.size(w, h); await tab.goto(BASE + route);
    const info = await tab.evaluate(`({ title: document.title, h1: document.querySelectorAll('h1').length, overflow: document.documentElement.scrollWidth > innerWidth + 1,
      links: [...document.querySelectorAll('a[href^="/"]')].map(a => a.getAttribute('href').split('#')[0]).filter(Boolean),
      imgsBroken: [...document.images].filter(i => i.complete && i.naturalWidth === 0 && i.getAttribute('loading') !== 'lazy').map(i => i.src) })`);
    info.links.forEach((l) => linkSet.add(l));
    if (name === "desktop") await tab.shot(`route-${route.replace(/\W+/g, "_") || "home"}-desktop.jpg`);
    report.routes.push({ route, viewport: name, title: info.title, h1: info.h1, overflow: info.overflow, imgsBroken: info.imgsBroken, errors: [...tab.errors], failed: [...tab.failed] });
    await tab.close();
  }
}
report.links = [];
for (const l of linkSet) { const r = await fetch(BASE + l); report.links.push({ href: l, status: r.status }); }

// 3. Reduced motion, 4. no script, 5. keyboard focus
{
  const tab = await open(); await tab.size(1440, 900);
  await tab.send("Emulation.setEmulatedMedia", { features: [{ name: "prefers-reduced-motion", value: "reduce" }] });
  await tab.goto(BASE + "/");
  report.reducedMotion = await tab.evaluate(`({ mode: document.getElementById('experience').dataset.mode, live: document.getElementById('experience').classList.contains('live'),
    articlesVisible: [...document.querySelectorAll('#experience article')].filter(a => getComputedStyle(a).opacity > .5 && a.getClientRects().length).length,
    linksLit: [...document.querySelectorAll('.ia-link[id^="ia-link-"]')].map(l => l.dataset.state) })`);
  await tab.shot("reduced-motion-desktop.jpg"); await tab.close();
}
{
  const tab = await open(); await tab.size(1440, 900);
  await tab.send("Emulation.setScriptExecutionDisabled", { value: true });
  await tab.goto(BASE + "/");
  report.noScript = await tab.evaluate(`1`).catch(() => null);
  await tab.send("Emulation.setScriptExecutionDisabled", { value: false });
  report.noScript = await tab.evaluate(`({ h1: !!document.querySelector('h1'), articles: document.querySelectorAll('#experience article').length,
    posterVisible: getComputedStyle(document.querySelector('.poster')).visibility, height: document.body.scrollHeight })`);
  await tab.shot("no-script-desktop.jpg"); await tab.close();
}
{
  const tab = await open(); await tab.size(1440, 900); await tab.goto(BASE + "/");
  const stops = [];
  for (let i = 0; i < 14; i++) {
    await tab.send("Input.dispatchKeyEvent", { type: "keyDown", key: "Tab", code: "Tab", windowsVirtualKeyCode: 9 });
    await tab.send("Input.dispatchKeyEvent", { type: "keyUp", key: "Tab", code: "Tab", windowsVirtualKeyCode: 9 });
    await sleep(120);
    stops.push(await tab.evaluate(`(() => { const a = document.activeElement; const cs = getComputedStyle(a);
      return { el: a.tagName + (a.id ? '#' + a.id : '') + ' ' + (a.textContent || '').trim().slice(0, 40), outline: cs.outlineStyle !== 'none' && parseFloat(cs.outlineWidth) > 0 }; })()`));
  }
  report.keyboard = stops; await tab.close();
}

writeFileSync(join(OUT, "report.json"), JSON.stringify(report, null, 2));
chrome.kill(); try { rmSync(profile, { recursive: true, force: true }); } catch {}
const bad = report.routes.filter((r) => r.errors.length || r.failed.length || r.overflow || !r.h1 || r.imgsBroken.length);
console.log(JSON.stringify({
  sweep: report.sweep, reversible: Object.fromEntries(Object.entries(report.spine).map(([k, v]) => [k, v.reversible.every((x) => x.same && x.chapterSame)])),
  spineErrors: Object.fromEntries(Object.entries(report.spine).map(([k, v]) => [k, v.errors.concat(v.failed)])),
  routeProblems: bad, brokenLinks: report.links.filter((l) => l.status >= 400), reducedMotion: report.reducedMotion, noScript: report.noScript,
  keyboardNoOutline: report.keyboard.filter((k) => !k.outline),
}, null, 1));
