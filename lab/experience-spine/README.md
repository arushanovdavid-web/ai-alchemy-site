# AI Alchemy Experience Spine

An isolated, scroll-driven study of five stations on one isometric board. The last shot opens out from the terminal until the whole route fits on the sheet.

## Run the lab

From the repository root, run `python3 -m http.server 8719 --bind 127.0.0.1`, then open [the Foundry experience](http://127.0.0.1:8719/lab/experience-spine/). The page uses native ES modules, local fonts and static assets. The [geometry fixture](http://127.0.0.1:8719/lab/experience-spine/?asset=fixture) runs the same storyboard. Wheel, touch, keyboard and the six chapter links all use document scrolling. **Read overview** displays the completed system and the six explanations together.

![The connected system at the end of the experience](evidence/final/desktop/100.png)

## Production (integration/experience-spine-site)

The engine now ships with the website. `engine.js`, `timeline.js` and `contract.js` live in `/home/spine/` and this lab
re-exports them, so there is one implementation. The homepage mounts it from `/home/spine/app.js` with the Foundry 1.1
bundle at `/illustration/svg/master.svg` and `/illustration/anchors.json`. Additions to Codex's shot sheet, all inside
`sample(progress, framing)`:

- An opening bookend before chapter 1: a crop of the unlit board beside the homepage headline (portrait: the first two
  stations), dollying into the original first shot. The closing reveal returns to the whole board, lit.
- A construction front: the Foundry 1.1 site slab is clipped to a plan-x front that advances with the route.
- Chapter indices shift by one (index 0 is the opening and has no rail link).

The lab page itself still loads its pinned v1.0 assets; the QA scripts here are unchanged. Site-wide checks live in
`tools/qa/site-qa.mjs`.

## Review

- [Architecture and scroll storyboard](docs/architecture.md)
- [Shared SVG interface and asset integration](docs/integration.md)
- [Browser recordings, stills and motion edits](docs/review.md)
- [Performance measurements and device coverage](docs/performance.md)

## Reproduce the checks

Use Node 22 or newer. With the static server running, change into `lab/experience-spine/qa` and run:

```sh
npm ci
PLAYWRIGHT_BROWSERS_PATH="$PWD/node_modules/.browsers" npx playwright install chromium firefox webkit
npm test
npm run capture
npm run profile
(cd .. && python3 qa/report.py)
```

Use a separate profiling run after closing capture and browser tests. `SPINE_URL` can point the runners at another copy of the lab. All routes and asset URLs also work beneath a repository subpath. The QA dependencies are local to this directory.
