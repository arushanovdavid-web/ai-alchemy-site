// usage: node run.js page.html "query" out.png
const { chromium } = require('playwright');
const http = require('http'), fs = require('fs'), path = require('path');
const root = __dirname;
const srv = http.createServer((q, s) => { const f = path.join(root, decodeURIComponent(q.url.split('?')[0])); fs.readFile(f, (e, d) => { if (e) { s.writeHead(404); return s.end(); } s.writeHead(200, { 'Content-Type': f.endsWith('.js') ? 'text/javascript' : 'text/html' }); s.end(d); }); }).listen(0, async () => {
  const port = srv.address().port;
  const b = await chromium.launch({ args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist'] });
  const [, , page, query, out] = process.argv;
  const p = await b.newPage({ viewport: { width: 800, height: 600 } });
  p.on('console', m => console.log('console:', m.text())); p.on('pageerror', e => console.log('ERR', e.message));
  await p.goto(`http://localhost:${port}/${page}?${query}`);
  await p.waitForFunction(() => window.__done || window.__err, null, { timeout: 280000 });
  const data = await p.evaluate(() => document.querySelector('canvas').toDataURL('image/png'));
  fs.writeFileSync(out, Buffer.from(data.split(',')[1], 'base64'));
  await b.close(); srv.close(); console.log('wrote', out);
});
