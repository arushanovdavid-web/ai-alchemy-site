# Launch readiness: Experience Spine site (PR #6)

Prepared 2026-11-25 on `integration/experience-spine-site`, on top of Codex's mechanical corrections (`b41eb31`). Nothing here is live. Merging and deploying wait for the owner's approval of the preview.

## Final creative refinements (this pass)

| Area | Change | Why |
|---|---|---|
| Spine, chapter 5 → 6 | The terminal shot widens from 720×440 to 1000×620 master units and moves its centre. The racks, the line and the terminal now share one composition. Before, the terminal sat small at the bottom right of an empty slab. | It was the weakest frame of the sequence: the beat "the line comes up at one terminal" did not show the line. |
| Spine, phone bookend | The portrait opening and closing frame now covers the whole chain, from the four systems to the terminal. It was 3300 wide, centred on the collector and data hall. Now it is 4550 wide, centred at (2770, 1760). | On phones, the first and last pictures cut off the four systems (the story's start) and the terminal (its end). |
| Inner pages, section labels | Sheet references ("01 What we solve") now match the homepage. They are 11px mono with 0.12em tracking, set at the right edge of the sheet with no extra rule. Before, they were 17.6px and right-aligned inside an 830px column, so they floated mid-page. | The homepage and inner pages used one label two different ways. |
| Inner pages, night CTA band | The copy column spans the sheet, so the "05 Project brief" reference reaches the right edge. The text keeps its 40rem measure. | Same floating-label defect. The empty grid column was left over from the old needle-field art. |
| Inner pages, inline brief button | Moved inside the section it closes. It is on all 10 service and industry pages. | It sat on its own between two sections, with its bottom edge on the next section's ink rule. |

| AI chamber gimbal rings | The two segmented rings now spin about their own axes. The outer ring turns −300° about world X, and the inner ring counter-rotates +480° about world Y. Both are driven by scroll from chamber power-up (core 0.595) and ease to rest by 0.745, so the rings are already turning before the lever lowers (0.62–0.64). Each frame the engine recomputes the segments in world space and projects them, so the ellipses and line weights stay exact. Each ring is drawn twice, clipped to the halves behind and in front of the sphere, so the depth order stays correct. The housing, fan and other parts are unchanged. | Owner request, 2026-11-25: "an operating gyroscope". |

Codex's mechanics are preserved and re-verified: the conveyor on its rollers, fan rotation, four conductors and reversible captions.

## Illustration craftsmanship pass (2026-11-25)

The motion and composition stay as approved. The detail was added in the generator (`illustration/src/foundry.py`), and every dependent asset was regenerated from it: master, board, scenes, the 30 component SVGs (paper and night), 30 preview PNGs, `home/spine/poster.jpg` and `og-image.png`. The poster and social image are now reproducible with `node tools/qa/render-rasters.mjs`.

| Scene | Added (purposeful, no new colours) |
|---|---|
| 1 Disconnected | **Filing cabinet:** a lock and a telescopic slide with fixings on the open drawer. **Mainframe:** a riveted nameplate, window-panel screws and a door lock. **Pigeonholes:** a slot label tab under each cell. |
| 2 Strategy | **Collector:** panel fixings at the corners of the indicator face. |
| 3 Software | **Gantry:** four anchor bolts per base plate, with the far pair hidden by the column, and a gusset under the beam at each column. **Modules:** rack-mount screws at the front corners. **Junction box:** cover screws. |
| 4 AI | **Approval console:** a service door with hinges and a lock. **Gate post:** a bolted base flange. |
| 5 Cloud | **Server cabinets:** door hinges. **Tanks:** a manway bolt circle and a welded base ring. |

**Unchanged (verified):**
- Every element ID, and every `data-pivot`, `data-travel`, `data-center`, `data-from` and `data-to` value, in master, board and scenes.
- `anchors.json`.
- Component ports and viewBoxes.
- The counts of state-driven elements: strand 53, lamp 48, gold 10, terminal 1. No new detail lights, moves or takes a state.

**Cost:** master.svg grows from 255.7 KB to 276.4 KB raw, and from 58.1 KB to 60.9 KB gzipped. Frame times are unchanged.
- Desktop: p95 17.6–17.7 ms.
- Phone at 4× CPU: p95 25–27 ms, against 25.7–27.4 ms before.

Codex's mechanics suite passes 481/481 samples per viewport, and all 34 route runs are clean.

**Before/after sheets, one per scene:** `tools/qa/evidence/final/craft/scene-1.jpg` to `scene-5.jpg`. Each shows the chapter hold at website size and close-ups from the master drawing.

## Codex visual corrections (c2772e4, 2026-11-26)

Codex made four corrections on top of the approved illustration pass. Its evidence is in `tools/qa/evidence/owner-review/`, and its summary is the PR #6 comment of 26 Nov.

- **Open end:** the label clears the drawer on desktop, and on phones it sits above the cabinet. It used to be hidden there.
- **Transparent study cylinder:** the rims and sides are projected from one axis, so the cylinder reads evenly.
- **Copper activation:** each spine lead lights only after its own reveal reaches the receiving end. S4 used to light at core 0.650, before contact at 0.671.
- **Technology architecture and planning card:** it now shows its own dependency drawing, so it no longer repeats the drafting table.

**Independent re-check by Claude:**
- **Routes:** 34/34 runs clean, with 0 broken links.
- **Spine sweep:** 0 non-finite transforms, and reduced motion shows all 7 chapters.
- **Mechanics:** 481/481 samples per viewport.
- **Contrast:** no text below WCAG AA on the home page, Client Solutions, Strategy & Architecture or an industry page.
- **Preview:** it serves `review-revision` c2772e4 and is `noindex`.

**Still open, according to Codex:** the owner's device, and which cylinder the missing owner screenshot showed. Both need visual confirmation.

## Verification (Chrome 1xx, headless, served from 127.0.0.1:8737)

| Check | Result | Evidence |
|---|---|---|
| Routes: 17 at desktop and 17 at phone | 34/34 have no console errors, failed requests or horizontal overflow, and each has an H1 | `tools/qa/evidence/final/report.json` |
| Internal links | 18 checked, 0 broken | same |
| Spine checkpoints 0→100→0 at 1440×900, 768×1024 and 390×844 | Same camera and chapter in both directions | `spine-*-NN-*.jpg` |
| 600-step continuous sweep | 0 non-finite transforms. Largest per-step move: 0.054 (desktop), 0.054 (tablet), 0.069 (phone) | `report.json` → `sweep` |
| Codex mechanics (Playwright, 481 samples per viewport, forward and reverse) | 0 mismatches and 0 violations on desktop and mobile. Parcel travel 134 units. Rotor axis error 0 | `final/mechanics/sweep.json`, `desktop.webm`, `mobile.webm` |
| Dense visual review | 32 desktop frames and 30 phone frames across the whole Spine | `spine-sweep-desktop-32.jpg`, `spine-sweep-phone-30.jpg` |
| Reduced motion | Completed drawing, all 7 chapter texts visible, all 5 routes lit | `reduced-motion-desktop.jpg` |
| No JavaScript | Headline, 7 chapters and the poster are present | `no-script-desktop.jpg` |
| Keyboard | Every tab stop shows a visible focus outline | `report.json` → `keyboard` |
| Brief builder | Preselect, three steps and a composed `mailto:`. No email was sent | earlier run, unchanged code |
| Gimbal rings | At 14 positions through the chamber sequence, forward and back at 1440×900 and 390×844, all rings stay inside the glass bounds. The reverse frames match the forward ones exactly. The rings are at rest until 0.595 and moving by 0.605, while the lever is still at 0° | `gimbal-rings-sequence.jpg` |
| Performance, home (local server, no network throttling) | Desktop: LCP 140 ms, CLS 0, 614 KB transferred, scroll frames p50 16.7 ms and p95 18.2 ms. Phone at 4× CPU throttle: p50 about 19.5 ms and p95 24–27 ms, the same as the build without rings (19.1–19.2 ms and 25.7–26.6 ms over two runs each) | measured in this pass |
| SEO | Every indexable route has a title, a description, an og:image and a canonical on `https://ai-alchemy.ca/`. The sitemap has 14 URLs, `robots.txt` allows crawling, CNAME is `ai-alchemy.ca`, and `/lab/` is `noindex` | measured in this pass |

## Not verified

- **Safari and Firefox.** Every check ran in Chrome. Firefox is not installed. Safari automation needs `safaridriver --enable`, which needs the owner's password. Before launch, someone should open the preview once in Safari, on a Mac and on an iPhone.
- **Real devices and real networks.** Phone results come from emulation with CPU throttling. No measurements were taken on a real device or over a throttled network.
- **Screen readers.** The landmarks, headings and labels were checked, but no VoiceOver pass was run.

## Release blockers (owner decisions)

1. **Copy approval: done 2026-11-26.** Every line is approved; see `docs/copy/COPY-DECK.md`. The original note follows. `docs/copy/COPY-DECK.md` is still marked DRAFT. The owner must lock every NEW or ADAPTED line. The lines that need a decision:
   - **CS-LK, "Where most projects start".** It needs a true basis. Otherwise drop the label.
   - **PI-B1.** The wording that says what is "separate" about Products & Innovation.
   - **CH4-B.** The AI chapter body.
   - **CH6-B.** The final chapter body.
   - **F-T3.** The approval reassurance.
   - The new meta titles and descriptions.
2. **Lab route: decided 2026-11-26, left out.** `_config.yml` excludes `lab/`, `docs/`, `tools/` and the illustration source, previews and docs from the GitHub Pages (Jekyll) build. They stay in the repository as development material. In a simulated published set (the same files minus the exclusions), 32 route runs were clean, 18 links worked, and `/lab/`, `/docs/` and `/tools/` returned 404. After deploy, confirm the same on ai-alchemy.ca, because Jekyll could not be run locally.
3. **`llms.txt` and the About intro.** Both follow the copy decision.

## Deploy and rollback plan (after approval)

- **Deploy.** Merge PR #6 into `main` with a merge commit. GitHub Pages serves `main`, so the merge commit is the deploy.
- **Rollback.** The current production commit is `b98a905`. Before merging, tag it: `git tag pre-spine-launch b98a905 && git push origin pre-spine-launch`. To roll back, run `git revert -m 1 <merge-sha>` and push. Pages redeploys the previous site within minutes.
- **Post-deploy checks.**
  - Re-run `node tools/qa/site-qa.mjs https://ai-alchemy.ca tools/qa/evidence/production`.
  - Confirm HTTPS, the CNAME and `/sitemap.xml`.
  - Run the brief builder up to the `mailto:` link, without sending.
