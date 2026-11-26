# Lessons for Locai: AI Alchemy Experience Spine, final pass (2026-11-25)

Techniques and lessons from finishing the scroll-driven isometric Spine and the site around it. Written so they can be reused.

## Creative direction

- **Review motion as a dense contact sheet, not as keyframes.** A sheet of 30 or more frames across the whole scroll shows which beats are weak. Here it took one glance to spot the terminal shot: a hold on empty floor. The checkpoint screenshots at 0, 25, 50, 75 and 100 had missed it.
- **Each hold shot should show its sentence.** If the caption says "the line comes up at one terminal", the frame needs the line *and* the terminal. Frame cause and effect together, not the object alone.
- **Portrait framing is its own composition.** When a landscape bookend is cropped for phones, the start and end of the story fall off the edges. Frame the whole chain, even if it renders smaller.
- **One label system, one size.** A reference label that is 11px on the homepage and 17.6px on inner pages reads as two design systems. Audit shared elements across templates, not page by page.

## Engineering

- **The camera is data.** The camera is a list of `[at, anchor, dx, dy, w, h]` shots fed into a Hermite-interpolated `sample(progress)`. Creative fixes become one-line data edits, and the reversibility checks keep passing without changes.
- **A contact-sheet maker with no image tooling.** Drive Chrome over CDP (`Page.captureScreenshot`), write a small HTML grid of the frames, and screenshot that page. No PIL, ImageMagick or ffmpeg is needed.
- **Specificity traps in layered CSS.** An older rule, `.section-head>p:not(.kicker)` at (0,2,1), beat the new `.section-head .sheet-ref` at (0,2,0). When reconciling legacy styles, match or exceed the selector's specificity on purpose, then verify computed values in a fresh browser profile.
- **Cache-free verification.** `python -m http.server` responses are cached heuristically by a long-lived browser tab. Verify CSS changes from a fresh headless profile so you don't misjudge a fix that has actually landed.
- **Viewport-height capture artifacts.** A full-page screenshot taken by resizing the viewport to the page height inflates every `vh`-based padding. Don't treat the empty space this creates as a layout bug.
- **Reuse an existing Playwright install.** Symlink `node_modules` from a sibling project into a scratch folder and copy the test script next to it. ESM resolves `playwright` from there, with no download.

## Process

- Check `git log` on the branch and fast-forward the worktree before reviewing. Here the worktree was three commits behind the PR.
- Keep before and after frames for every creative change in `tools/qa/evidence/final/`, so the owner can judge the change itself and not only the end state.
- Separate "verified" from "not verified" in every report. Here that meant Safari, Firefox, real devices and screen readers.

## Rotating a planar part in isometric (gimbal rings)

- **Do not use a 2D `rotate()` on projected art.** A ring spinning in its own plane is affine after projection, but a single transform still distorts the stroke widths and cannot reorder depth.
- **Recompute and project every frame.** Tag the static artwork with its world parameters: centre, axis, radii, segment count, duty and phase. At run time, rebuild each segment from world coordinates and project it. The ellipses, ring widths and line weights stay exact. About 40 segments cost nothing measurable, even at 4× CPU throttle.
- **Get depth order by drawing twice and clipping.** Draw the ring twice and clip each copy to a half-plane. The boundary is the projected line where the ring's depth equals its centre's depth, so the far copy sits behind the sphere and the near copy in front. Splitting by segment midpoint instead makes segments pop between layers.
- **Keep the static art pixel-identical.** The tags are plain wrapper groups. The poster, no-JS fallback and component library stay unchanged, and the engine only takes over once it binds.
- **Check that the generator is deterministic before regenerating shared artwork.** Generate into a temporary copy and diff it against the committed files first.

## QA tooling

- **A fixed DevTools port can silently serve stale results.** If a QA script crashes before it kills Chrome, the next run's Chrome cannot bind the port. The script then talks to the old Chrome, which still holds the old cache, so CSS fixes appear not to apply. `site-qa.mjs` now refuses to start while the port is in use. When computed styles disagree with the file on disk, check `lsof -iTCP:<port>` first.
- **Measure contrast on the rendered page.** Static detectors flag the colours but not the element. A rendered scan compares each text node's computed colour with its composited ancestor background, and it finds the exact element (here, a button inherited a link colour inside a night section).
