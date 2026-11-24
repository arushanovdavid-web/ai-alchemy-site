# Asset interface specification (v1.1.0)

**From:** Illustration Foundry (artwork). **For:** Codex, Experience Spine (motion and page).
**Status:** proposed. Review and comment on the pull request. The interface is agreed when Codex approves the PR
or asks for changes there. Nothing here is wired into the site yet.

## Changelog

**1.1.0 (art revision, additive).** Every 1.0 ID, anchor ID, camera, state value and token is kept. One anchor value moved:
`s2.survey.head` is now at world (690, 268, 184), because the survey station moved.

- New: `#ia-site`, the engineered slab under scenes 2–5. Its top is at z = 0, so no object or anchor moves.
  It is drawn after `#ia-ground` and before `#ia-scenes`.
- New: `#ia-s4-core-vessel` (the inside of the core: spine riser, gimbal rings, core), `#ia-s4-reader` and
  `#ia-s4-reader-front` (the reader arch), `#ia-s3-junction` (junction box and rack riser), and
  `#ia-link-migration` (a proposed link from the legacy core to the rack).
- New anchors: `s3.legacy.out`, `s3.riser`, `s4.reader`, `s4.core.crown`.
- New tokens: `--ia-deep`, `--ia-deep-2`, `--ia-deep-3` (built material and voids), `--ia-glass` (smoked glass),
  `--ia-ring` (the ivory rings and the light marks on dark material), `--ia-slab-t` (the site top).
- New components: `module-built`, `junction-riser`, `reader-arch`, `floor-duct` (30 in total).

**1.0.0.** First interface.

This spec covers what the artwork guarantees and what the page may rely on. The artwork contains **no animation
logic**: no `<script>`, no SMIL, no CSS transitions or keyframes. Every motion decision belongs to the Experience
Spine.

## 1. Files

| Path | What it is |
|---|---|
| `illustration/svg/master.svg` | The whole board, 5280 × 3300 user units, all five scenes, notes, titles and sheet furniture. |
| `illustration/svg/scenes/scene-N-<slug>.svg` | One scene each. Same coordinates as the master; the root `viewBox` is the scene camera. |
| `illustration/svg/components/<name>.svg` | 30 reusable parts, each with its own local origin (see `components.json`). |
| `illustration/anchors.json` | Projection, scene cameras (landscape and portrait) and every connection anchor. |
| `illustration/components.json` | Component manifest: origin, viewBox, ports, and the transform that places each part in the master. |
| `illustration/previews/*.png` | Rendered evidence: paper and night, default and active, 1×, 200% crops, portrait crops, library sheet. |
| `illustration/src/` | The generator (`foundry.py`, `iso.py`) and the renderer (`render.py`). Python 3 standard library only. |
| `illustration/docs/STYLE-GUIDE.md` | How the drawing is built. |

**Regenerate:** `python3 illustration/src/foundry.py`. **Render previews:** serve the repository root on port
8164 and run `python3 illustration/src/render.py all` (plus `zoom`, `library`). Do not hand-edit generated SVG.
Change the generator, so the master, scenes and components never drift apart.

## 2. Coordinate system

- One isometric world for every file: `screen_x = 900 + (x − y)·0.8660254`, `screen_y = 700 + (x + y)·0.5 − z`
  in master user units.
- **Scene files reuse master coordinates.** Only their `viewBox` differs. A scene can therefore be swapped for a
  crop of the master with no offset maths, and the anchors are identical in both.
- **Component files** put the component's world origin at (0, 0). To place one in the master, use the
  `place_in_master` transform from `components.json`.

## 3. Cameras

The landscape cameras are 16:10 (1760 × 1100). The portrait cameras are 4:5 and fitted to each scene's measured
content. Panning between consecutive landscape cameras is a pure translation of (+866.03, +500): the board runs
along the isometric x axis.

| Scene | Slug | Landscape viewBox | Portrait viewBox |
|---|---|---|---|
| 1 | disconnected | 20 70 1760 1100 | 208.42 -261.12 1417.79 1772.24 |
| 2 | strategy | 886.03 570 1760 1100 | 1238.9 332.98 1274.83 1593.53 |
| 3 | software | 1752.05 1070 1760 1100 | 2100.85 852.06 1269.5 1586.87 |
| 4 | ai | 2618.08 1570 1760 1100 | 2966.88 1515.04 1062.4 1328 |
| 5 | cloud | 3484.1 2070 1760 1100 | 3790.47 1717.72 1373.25 1716.56 |

On portrait cameras, hide `#ia-titles` and `#ia-annotations` (the labels would render at about 3 px on a phone)
and set `--ia-lw: 2`. Previews: `previews/*-portrait.png`.

## 4. Structure and IDs

Every ID is prefixed `ia-` and unique within a file. The master and scene files share IDs on purpose, so the same
element has the same ID everywhere. **Do not inline the master and a scene file on the same page.**

```
svg.ia  [data-ia-version, data-ia-theme?]
├── defs                      patterns: #ia-hv (hatch), #ia-dots (ground), #ia-perf-l, #ia-perf-t
├── #ia-ground                dotted board (hide it to sit the art on the page's own ground)
├── #ia-site                  the slab under scenes 2–5: section-cut edges, site grid, the spine channel
├── #ia-scenes
│   └── #ia-scene-N  .ia-scene  [data-scene=N][data-slug][data-state]
│       ├── #ia-sN-ground     shadows, grid, spine segment, stubs, links (drawn first for correct occlusion)
│       └── #ia-sN-objects    components back to front: #ia-sN-<part> .ia-component [data-component]
├── #ia-annotations           #ia-sN-notes  .ia-notes [data-scene]   leader + label groups (.ia-note)
├── #ia-titles                #ia-sN-title  numbered detail titles
├── #ia-sheet                 title block, legend, general notes, axis indicator (master only)
└── #ia-anchors               invisible circles, one per anchor, [data-anchor][data-role]
```

Addressable parts:

| Scene | Groups and paths |
|---|---|
| 1 | `#ia-s1-spreadsheets`, `#ia-s1-mail`, `#ia-s1-forms`, `#ia-s1-legacy`; stubs `#ia-s1-stub-*`; links `#ia-link-spreadsheets`, `#ia-link-mail`, `#ia-link-forms`, `#ia-link-legacy` (in `#ia-s1-links`) |
| 2 | `#ia-s2-collector`, `#ia-s2-plate` (plan, massing, rule, set square), `#ia-s2-survey`, `#ia-s2-grid-bubbles`, spine `#ia-spine-s2` |
| 3 | `#ia-s3-junction`, `#ia-link-migration`, `#ia-s3-rails`, `#ia-s3-gantry-leg-back`, `#ia-s3-gantry-leg-front`, `#ia-s3-gantry-beam`, `#ia-s3-hoist` (trolley and hanging module), `#ia-s3-rack`, `#ia-s3-rack-front`, `#ia-s3-legacy-core`, spine `#ia-spine-s3` |
| 4 | `#ia-s4-platform`, `#ia-s4-core` (contains `#ia-s4-core-vessel`), `#ia-s4-reader`, `#ia-s4-reader-front`, `#ia-s4-conveyor`, `#ia-s4-gate`, `#ia-s4-console`, spine `#ia-spine-s4` |
| 5 | `#ia-s5-floor`, `#ia-s5-row-a`, `#ia-s5-row-b`, `#ia-s5-stores`, `#ia-s5-terminal`, spine `#ia-spine-s5` |

**Spine:** each `#ia-spine-sN` holds seven `path.strand` elements, `[data-strand=0..6]`, each with
`pathLength="1"`. Strand 3 also has `.ia-lead`. Segments meet exactly at the junction anchors `spine.j23`,
`spine.j34` and `spine.j45` (x = 1500, 2500, 3500) and carry `data-from` and `data-to`. Drawing s2 → s5 in order
gives one continuous line.

**Links:** the four `path.ia-link` elements run from each scene 1 stub to a collector input, and carry
`data-from` and `data-to` anchor IDs. They are dashed by design, so they carry **no** `pathLength` (it would
rescale the dashes). Use `getTotalLength()` if you draw them on.

## 5. States

The states are attributes. The artwork styles them; the page only sets them, and only the page animates between
them.

| Attribute | On | Values | Effect |
|---|---|---|---|
| `data-state` | `.ia-scene` (or any `.ia-component`) | `default` · `active` | Active: lead strand turns verdigris and heavier; `.ia-lamp` and `.ia-core` turn copper; `.ia-gold` turns gold; `.ia-term` turns copper; `.ia-open` plug rims turn copper. |
| `data-state` | `.ia-link` | `off` · `proposed` · `built` · `active` | Hidden · dashed ink-2 · solid ink · solid verdigris, 1.5 |
| `data-ia-theme` | `svg.ia` or any ancestor | `night` (absent = paper) | Swaps every colour token for the lead/night ground. |
| `hidden` | `.ia-notes`, `.ia-sheet` | present | `display: none` |

Scene 1 standalone ships with its links `off` (the disconnected state). The master ships with them `proposed`.
`#ia-link-migration` (scene 3) uses the same four link states.

Inside the core, `.ia-lead` (the rising lead strand) and `.ia-core` (the sphere) follow the scene's state like
everywhere else. The rings stay ivory in both themes.

Suggested story mapping, for Codex to adopt or replace:

1. **Scene 1:** links `off` → `proposed`.
2. **Scene 2:** links `proposed` → `built`; draw `#ia-spine-s2`.
3. **Scenes 3–5:** draw each `#ia-spine-sN` as the camera arrives, and set the scene to `active`.
4. **End:** all links `active` and every scene `active`.

## 6. Tokens the page may set

All are CSS custom properties on `svg.ia` or any ancestor. They inherit into inline SVG.

| Token | Default (paper) | Purpose |
|---|---|---|
| `--ia-lw` | `1` | Line-weight multiplier. 1 at scene scale; 2–2.6 for the whole master or on phones. Also scales ground dots. |
| `--ia-type` | `1` | Text-size multiplier for notes, titles and the sheet. |
| `--ia-ink`, `--ia-ink-2`, `--ia-hair` | `#1C2026`, `#4C525A`, `rgba(28,32,38,.36)` | Line colours. |
| `--ia-top`, `--ia-left`, `--ia-right`, `--ia-recess`, `--ia-ground` | see style guide | Face tones and the ground. |
| `--ia-active`, `--ia-signal`, `--ia-approve` | `#1F6B5C`, `#D06C40`, `#9A6F12` | State accents. |
| `--ia-deep`, `--ia-deep-2`, `--ia-deep-3` | `#2A2F36`, `#3A4047`, `#22262C` | Built material (what AI Alchemy delivers) and voids. |
| `--ia-glass`, `--ia-ring` | `#2E3840`, `#F7F3EA` | The core's smoked glass, and its ivory rings. |
| `--ia-slab-t` | `#F6F2EA` | Top of the site slab. |
| `--ia-mono`, `--ia-serif` | JetBrains Mono, Newsreader stacks | The site's self-hosted fonts; no font is embedded in the SVG. |

On the kraft section (`#DED0B6`), leave the faces as they are and set `--ia-ground: #DED0B6` so the grid bubbles
and set-square cut-out match the paper.

## 7. Anchors (`anchors.json`)

Each anchor has `id`, `scene`, `role` (`in`, `out`, `junction`, `focus`, `target`, `end`, `camera`),
`world` [x, y, z] and `master` [x, y] in master user units, plus an `#ia-anchor-<id>` circle in the SVG for DOM
lookups. Junctions are shared by two scenes.

| ID | Role | World | Master |
|---|---|---|---|
| `s1.spreadsheets.out` | out | -200, -100, 4.5 | 813.4, 545.5 |
| `s1.mail.out` | out | 200, -126, 4.5 | 1182.32, 732.5 |
| `s1.forms.out` | out | -128, 140, 4.5 | 667.91, 701.5 |
| `s1.legacy.out` | out | 352, 150, 4.5 | 1074.94, 946.5 |
| `s2.collector.in.mail` | in | 606, -45, 0 | 1463.78, 980.5 |
| `s2.collector.in.spreadsheets` | in | 606, -15, 0 | 1437.8, 995.5 |
| `s2.collector.in.forms` | in | 606, 15, 0 | 1411.82, 1010.5 |
| `s2.collector.in.legacy` | in | 606, 45, 0 | 1385.84, 1025.5 |
| `s2.collector.out` | out | 700, 0, 0 | 1506.22, 1050 |
| `s2.plate.centre` | focus | 1020, -270, 16 | 2017.17, 1059 |
| `s2.survey.head` | focus | 690, 268, 184 (moved in 1.1) | 1265.46, 995 |
| `spine.j23` | junction | 1500, 0, 0 | 2199.04, 1450 |
| `s3.rack.in` / `s3.rack.out` | in / out | 1950 / 2250, 0, 0 | 2588.75, 1675 / 2848.56, 1825 |
| `s3.module.hanging` → `s3.module.slot` | focus → target | 2135, 0, 240 → 69 | 2748.96, 1527.5 → 1698.5 |
| `spine.j34` | junction | 2500, 0, 0 | 3065.06, 1950 |
| `s3.legacy.out` → `s3.rack.in` | out → in | 1854, 40, 0 → 1950, 0, 0 | `#ia-link-migration` runs between them |
| `s3.riser` | focus | 2268, 36, 122 | 2832.97, 1730 |
| `s4.core` | focus | 3000, 0, 196 | 3498.08, 2004 |
| `s4.core.crown` | focus | 3000, 0, 378 | 3498.08, 1822 |
| `s4.reader` | focus | 3000, 200, 110 | 3324.87, 2190 |
| `s4.conveyor.in` / `.out` | in / out | 2780 / 3220, 200, 52 | 3134.35, 2138 / 3515.4, 2358 |
| `s4.gate` | focus | 3177, 200, 104 | 3478.16, 2284.5 |
| `s4.console.lever` | focus | 3320, 164, 114 | 3633.18, 2328 |
| `spine.j45` | junction | 3500, 0, 0 | 3931.09, 2450 |
| `s5.floor.in` / `.out` | in / out | 3660 / 4260, 0, 0 | 4069.65, 2530 / 4589.27, 2830 |
| `s5.racks` | focus | 3900, -150, 240 | 4407.4, 2335 |
| `s5.stores` | focus | 3910, 140, 200 | 4164.92, 2525 |
| `s5.terminal` | end | 4600, 0, 5 | 4883.72, 2995 |
| `sN.centre` | camera | 1000·(N−1), 0, 80 | camera centre |

`s3.module.hanging` to `s3.module.slot` is a pure −171 z drop, which in screen space is a translation of
(0, +171). The drawing order is `#ia-s3-rack` → `#ia-s3-hoist` → `#ia-s3-rack-front`, so a seated module sits
correctly behind the front posts with no re-ordering. Inside `#ia-s3-hoist`: `#ia-s3-trolley`, `#ia-s3-hoist-lines`
(two straight paths, trolley to sling), `#ia-s3-module-new` (module plus sling) and `#ia-s3-drop-line` (dashed
guide). Translate `#ia-s3-module-new` by (0, +171) to seat it, and shorten or fade the hoist lines yourself.
Preview: `previews/check-scene-3-module-seated.png`.

## 8. Accessibility and performance

- Each file is `role="img"` with `<title>` and `<desc>` that describe the scene in plain words. When the page
  carries the meaning in HTML, set `aria-hidden="true"` on the inline SVG and keep the HTML copy.
- Reduced motion: the static `default` and `active` states are complete pictures. Show the end state without
  transitions.
- Sizes in 1.1 (uncompressed / gzip): master 254 KB / 57 KB, about 2,250 elements. Scenes 69–114 KB / 20–29 KB,
  400–690 elements; each scene file now includes the whole `#ia-site`, cropped by its camera. No raster images, no external requests, no embedded fonts.
- Hatching and dots are `<pattern>` fills, so they cost nothing per face. Avoid animating `--ia-lw` per frame on
  the master (it restyles every stroke); animate transforms, opacity, `stroke-dashoffset` and `viewBox`.

## 9. Versioning and change requests

`data-ia-version` on the root and `version` in both JSON files follow semver. IDs, anchor IDs, state values and
tokens are the contract: renaming or removing one is a major version. Adding parts or anchors is a minor version.
Art-only changes that keep the interface are a patch. Ask for interface changes as review comments on the PR, or
in a new PR against `illustration/src/`.
