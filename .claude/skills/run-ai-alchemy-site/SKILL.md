---
name: run-ai-alchemy-site
description: Run, serve, screenshot and visually check the AI Alchemy static website (ai-alchemy.ca) in headless Chrome - desktop, tablet and phone sizes, scroll positions, reduced motion, WebGL off, CPU throttling, side-by-side comparison with a reference image. Use to preview a change, verify the Orrery WebGL hero or the homepage field, capture before/after shots, or check console errors and failed or third-party requests.
---

# Run the AI Alchemy site

Static HTML/CSS/vanilla JS, no build step. The agent path is `driver.mjs` in this folder: it serves the
**current directory** over http on a random 127.0.0.1 port (root-relative paths need a server, never `file://`),
drives headless Google Chrome over the DevTools protocol, writes PNGs and prints a JSON report
(console errors, failed requests, any non-local request, each shot's `js` value, the WebGL renderer).

All paths below are relative to the checkout root. Run from the checkout you want to test: a worktree
(`.claude/worktrees/<name>`) serves its own files, not `main`'s.

## Prerequisites

macOS with `/Applications/Google Chrome.app` and Node 22+ (uses the built-in `fetch` and `WebSocket`). Nothing to install.
Image cropping and conversion use the system `sips` (PIL is not installed here).

## Run (agent path)

```bash
node .claude/skills/run-ai-alchemy-site/driver.mjs '{"out":"/tmp/shots","prefix":"home","w":1440,"h":900,"shots":[{"name":"hero","wait":2500}]}'
```

Spec fields: `out` (PNG folder, default `./.shots`, keep it outside the repo), `prefix`, `w`, `h`, `dpr`,
`mobile` (touch + mobile metrics), `reduced` (prefers-reduced-motion), `nowebgl` (Chrome with WebGL off),
`cpu` (throttle rate), `sheet` (contact-sheet columns), `compare` (an image path shown beside every shot).
Each shot: `name`, `path` (default `/`), `scroll` (px or `"50%"` of the page), `wait` (ms, default 1200, applied after
scrolling), `js` (expression, may return a Promise; the screenshot follows it immediately), `clip` (CSS selector).
Shots of the same `path` reuse the loaded page, so a list of `scroll` values is a scroll-down/scroll-up run.

Verified recipes (each ran in this session):

```bash
# hero beside a reference image (writes <prefix>-sheet.png); ?orrery-t=4 freezes the Orrery for a repeatable frame
node .claude/skills/run-ai-alchemy-site/driver.mjs '{"out":"/tmp/shots","prefix":"cmp","w":1440,"h":900,"compare":"/path/to/reference.webp","shots":[{"name":"hero","path":"/?orrery-t=4","wait":2500}]}'

# whole-page scroll story, down and back up, as a 3-column contact sheet
node .claude/skills/run-ai-alchemy-site/driver.mjs '{"out":"/tmp/shots","prefix":"sb","w":1440,"h":900,"sheet":3,"shots":[{"name":"h0","wait":3200},{"name":"h50","scroll":450},{"name":"p25","scroll":"25%"},{"name":"p50","scroll":"50%"},{"name":"p75","scroll":"75%"},{"name":"p100","scroll":"100%"},{"name":"back0","scroll":0,"wait":1500}]}'

# phone, throttled, with a frame-rate probe (returns fps, worst frame, Orrery CPU ms per frame)
node .claude/skills/run-ai-alchemy-site/driver.mjs '{"out":"/tmp/shots","prefix":"mp","w":390,"h":844,"dpr":3,"mobile":true,"cpu":4,"shots":[{"name":"hero","scroll":250,"wait":2500,"js":"new Promise(r=>{let n=0,t0=performance.now(),mx=0,l=t0;const f=t=>{n++;mx=Math.max(mx,t-l);l=t;if(t-t0<3000)requestAnimationFrame(f);else r(JSON.stringify({fps:Math.round(n/((t-t0)/1000)),worstMs:Math.round(mx),cpuMs:window.__orrery.ms}))};requestAnimationFrame(f)})"}]}'

# fallbacks: reduced motion (one still frame, no loop) and no WebGL (poster, .orrery-off)
node .claude/skills/run-ai-alchemy-site/driver.mjs '{"out":"/tmp/shots","prefix":"rm","w":1440,"h":900,"reduced":true,"shots":[{"name":"hero","wait":2500,"js":"JSON.stringify(window.__orrery)"}]}'
node .claude/skills/run-ai-alchemy-site/driver.mjs '{"out":"/tmp/shots","prefix":"ng","w":1440,"h":900,"nowebgl":true,"shots":[{"name":"hero","wait":2000,"js":"document.querySelector(\".hero\").className"}]}'

# an interaction: open the phone menu, wait out its transition inside the js, then shoot
node .claude/skills/run-ai-alchemy-site/driver.mjs '{"out":"/tmp/shots","prefix":"menu","w":390,"h":844,"dpr":2,"mobile":true,"shots":[{"name":"open","wait":2500,"js":"document.querySelector(\"#menu-btn\").click();new Promise(r=>setTimeout(()=>r(document.querySelector(\"#menu-btn\").getAttribute(\"aria-expanded\")),700))"}]}'
```

### Regenerating the Orrery fallback posters

`home/orrery-poster.jpg` (desktop) and `home/orrery-poster-m.jpg` (the phone hero's lower 480 css px) are stills of
the real renderer with the copy hidden:

```bash
node .claude/skills/run-ai-alchemy-site/driver.mjs '{"out":"/tmp/shots","prefix":"fin","w":1440,"h":900,"shots":[{"name":"poster","path":"/?orrery-t=4","wait":2500,"js":"[\"#header\",\".hero-copy\",\".hero-foot\"].forEach(s=>document.querySelector(s).style.visibility=\"hidden\");1"}]}'
sips -s format jpeg -s formatOptions 66 /tmp/shots/fin-poster.png --out home/orrery-poster.jpg
node .claude/skills/run-ai-alchemy-site/driver.mjs '{"out":"/tmp/shots","prefix":"pm3","w":390,"h":844,"dpr":2,"mobile":true,"shots":[{"name":"poster","path":"/?orrery-t=4","wait":2500,"js":"[\"#header\",\".hero-copy\",\".hero-foot\"].forEach(s=>document.querySelector(s).style.visibility=\"hidden\");scrollTo(0,document.querySelector(\".hero\").offsetHeight-innerHeight);1"}]}'
sips -c 956 780 --cropOffset 730 2 /tmp/shots/pm3-poster.png --out /tmp/shots/pm3-crop.png
sips -s format jpeg -s formatOptions 70 /tmp/shots/pm3-crop.png --out home/orrery-poster-m.jpg
```

## Run (human path)

```bash
python3 -m http.server 8159 --bind 127.0.0.1
```

Then open http://127.0.0.1:8159/ in a browser. Pick a free port: other sessions keep servers running (8141 serves
another worktree, 8137 the old preview folder), and the browser pane may not be allowed on every port.

## Review aids built into the pages

- `?orrery-t=<seconds>`: freezes the Orrery hero's time and its scroll alignment, for repeatable comparisons.
  `window.__orrery` reports `{ok, ms (CPU per frame), frames, why}`; `why` says `no webgl2` / `context lost` on fallback.
- `?at=<section-id>:<fraction>` or `?at=y:<px>`: the homepage field's still-capture aid (settles the field, freezes CSS motion).
- `window.__field.ms`: the field's cost per frame.

## Gotchas

- The screenshot is taken right after `js` returns. For anything with a transition (the menu fades in over .25 s), return a
  Promise that resolves after a timeout, or the frame is mid-fade and looks broken.
- A `clip` below the fold renders whatever the compositor had there (it gave the phone poster a parchment half).
  `captureBeyondViewport` is worse: Chrome relays out at the clip height, the hero canvas resizes and the scene reframes.
  Scroll the region into view and take a normal shot instead.
- `sips -c H W --cropOffset Y X` silently returns the uncropped image when `Y + H` equals the image height exactly;
  leave a pixel or two of margin.
- Headless Chrome here uses the real GPU (`ANGLE Metal Renderer: Apple M1`). `cpu` throttling slows JavaScript only, so phone
  frame rates measured this way are optimistic for the GPU-bound Orrery; say so when reporting.
- The homepage field (`#field`) stops drawing while the full-screen Orrery hero covers the viewport (`home/home.js`, the
  `heroEl` check in `targets()`); field shots must scroll past the hero first.
- Duplicate keys in the JSON spec are legal and the last one wins; two `wait`s in one shot means only the second applies.
- Never submit the contact page's brief flow in a test: it opens the visitor's own email client (mailto), and no real
  test emails may be sent.
