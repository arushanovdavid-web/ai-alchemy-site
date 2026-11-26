// Renders the raster assets that derive from the illustration: og-image.png (1200x630) and home/spine/poster.jpg (1600x1000).
// Usage: serve the repo root on 127.0.0.1:8737, then: node tools/qa/render-rasters.mjs [baseUrl]
import { spawn } from "node:child_process";
import { mkdirSync, writeFileSync, rmSync } from "node:fs";
import { join } from "node:path";
import { tmpdir } from "node:os";

const BASE = process.argv[2] || "http://127.0.0.1:8737";
const OUT = ".";
const CHROME = process.env.CHROME || "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
const PORT = 9333;
mkdirSync(OUT, { recursive: true });
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

const profile = join(tmpdir(), "aa-qa-" + Date.now());
const chrome = spawn(CHROME, ["--headless=new", "--no-sandbox", "--disable-dev-shm-usage", "--remote-debugging-port=" + PORT, "--user-data-dir=" + profile,
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
const tab = await open();
for (const [url, w, h, out, fmt] of [[BASE + "/tools/qa/og-card.html", 1200, 630, "og-image.png", "png"], [BASE + "/tools/qa/poster-card.html", 1600, 1000, "home/spine/poster.jpg", "jpeg"]]) {
  await tab.size(w, h); await tab.goto(url);
  for (let i = 0; i < 40; i++) { if (await tab.evaluate("document.documentElement.dataset.ready")) break; await sleep(100); }
  await sleep(800);
  const r = await tab.send("Page.captureScreenshot", { format: fmt, ...(fmt === "jpeg" ? { quality: 86 } : {}), clip: { x: 0, y: 0, width: w, height: h, scale: 1 } });
  writeFileSync(join(OUT, out), Buffer.from(r.data, "base64"));
  console.log("wrote", out);
}
chrome.kill(); process.exit(0);
