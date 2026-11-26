# Illustration style guide

AI Alchemy's illustration system draws the business as one engineering sheet: an isometric drafting of the
operation, from disconnected tools to one connected system. This guide covers how the drawing is built, so new
pieces match it without anyone redrawing the old ones.

Benchmarks: Heron (heronaiapp.com) for line-weight hierarchy, poché against hairline, and drafting
conventions. Hut 8 (hut8.com) for one continuous isometric board, bundled cable runs with one lit strand, and a
camera that travels across it. The system borrows their discipline, not their motifs.

## 1. Projection and grid

- **True isometric drawing, 30°.** World `x` runs to screen lower-right, `y` to screen lower-left, `z` up.
  `screen_x = OX + (x − y)·cos30°`, `screen_y = OY + (x + y)·0.5 − z`. One world unit is one SVG user unit along
  each axis. The master origin is `OX = 900, OY = 700`.
- **No perspective, no foreshortening, no rotated objects.** Everything sits on the three axes. The survey legs
  and pins are the only non-axis members, and they are cylinders, which stay true in any direction.
- **Module:** 40 units. Footprints and heights are multiples of 10, with major dimensions on the 40 grid. The
  ground dot lattice is the 40-unit grid.
- **Zones:** five zone centres sit on the spine at `x = 0, 1000, 2000, 3000, 4000`, `y = 0`. Each zone's content
  stays inside a ±420-unit square around its centre. That leaves a gap of at least 160 units between zones, so
  every camera can show its neighbours' cable arriving and leaving.

## 2. Line weights

Weights are in user units at `--ia-lw: 1`. That is tuned for a scene camera shown at about 1:1 (1760 units across
about 1440–1760 px). Set `--ia-lw` to 2–2.6 when the master is shown whole or on a phone.

| Class | Weight | Use |
|---|---|---|
| `e-o` | 1.45 | Silhouette of every solid. Always the heaviest line on an object. |
| `e-i` | 0.80 | Inner edges where two visible faces meet; ring segments; panel outlines. |
| `w-v` | 0.85 | Visible edges of wire (massing) models. |
| `d` | 0.62 | Detail: vents, seams, handles, ladders, drawer fronts. |
| `strand` | 0.72 | Cable strands. Outer strands of a bundle 1.15 (`edge`). |
| `ldr` / `dim` | 0.6–0.65 | Leaders and dimension lines. |
| `h` | 0.50, hair colour | Hatching, grids engraved on faces, tick marks. |
| `w-h` | 0.60, dashed 4/3 | Hidden edges, proposed and demolition outlines. |
| `cl` | 0.55, 24/4/3/4 | Centre lines of the structural grid. |
| `poche` | solid fill | Cut walls of the plan on the drafting plate. The only solid ink mass. |

Rule: one object never uses more than four weights. If a detail needs a fifth, the detail is too fine for the
scale. Drop it.

## 3. Faces, shading and shadow

Light comes from the upper left. Each solid uses three tonal planes. Face tone is the only shading. There are no
gradients anywhere.

| Plane | Token | Paper | Night |
|---|---|---|---|
| Top (+z) | `--ia-top` | `#FBF9F4` | `#2F353D` |
| Left face (+y) | `--ia-left` | `#ECE6D9` | `#272C33` |
| Right face (+x) | `--ia-right` + vertical hatch | `#DDD4C2` | `#21252B` |
| Recess (openings, voids) | `--ia-recess` | `#C8BEA9` | `#14171B` |

- **Hatching** (`#ia-hv`, 3.2-unit pitch, hair weight) sits only on right faces. Vertical lines stay vertical in
  isometric, so the hatch is correct on every right face. It is the engraving cue shared with the live site's
  engraved field strokes.
- **Cast shadows** are flat polygons in `--ia-sh`, offset toward +x and slightly −y by about 0.62 × object
  height. Shadows never get hatched or outlined.
- **Iso patterns** (`#ia-perf-l`, `#ia-perf-t`) are sheared to their face, so perforations follow the plane.

## 3a. Material hierarchy (1.1)

There are four materials. Each says something, so none is used for texture alone.

| Material | Tokens | Means | Where |
|---|---|---|---|
| Paper solids | `--ia-top`, `--ia-left`, `--ia-right` | What already exists, and neutral structure | Scene 1 systems, plinths, rails, gantry, tanks, platform |
| **Built (deep)** | `--ia-deep`, `-2`, `-3` | **What AI Alchemy builds** | Collector, new module M8, junction riser, the core's base and crown, cloud rack doors |
| Voids | `--ia-deep` | Openings and recesses (Heron's dark windows) | Pigeonhole cells, reel window, open drawer, rack backplane, raised-floor void |
| Smoked glass | `--ia-glass`, `--ia-ring` | The model, visible and not a black box | The core vessel only |

Rule: one dark anchor per scene, and the anchors tell the story. Scene 1 has none, because nothing is built yet.
Scene 2 has the collector, scene 3 the new module, scene 4 the core, and scene 5 the rack rows.

## 3b. The site

Scenes 2–5 stand on one engineered slab whose top is z = 0. Scene 1's systems sit off it, on loose plinths: being
disconnected is shown as a place. The slab's front edges are cut in section: a finish line at −8, a service
zone, and a structural layer below −30 hatched at 45°. Formwork joints run every 160 units, and an 80-unit site
grid is engraved on top. Four thin charcoal conductors run directly across the slab. One lead takes a restrained copper accent when powered. Plinths float on a 4-unit shadow-gap reveal.

## 3c. The core (signature object)

The Rings mark built as a machine, bottom to top. Heights are world z on the platform, which is at 18.

| Part | z | Radius | Notes |
|---|---|---|---|
| Dais | 18–42 | 124 | 24-bolt circle |
| Finned drum | 42–104 | 88 (+9 fins) | Built material; 40 fins, front half drawn |
| Collar | 104–112 | 98 | |
| Smoked-glass vessel | 112–334 | 84 | Ivory segmented rings (r 72 about x, r 56 about y), core sphere r 34 at z 196, and the spine rising through the base into it |
| Tie rods | 112–334 | at r 94 | Four, on the axes, so none crosses the view of the core |
| Cap, crown, boss | 334–378 | 96 / 62 / 18 | Ribbed dark crown; the boss lamp lights with the scene |

The strategy plate (scene 2) carries a 1:3 wire study of the same profile and the core's footprint in poché, so
scene 2 anticipates scene 4.

## 4. Colour and states

Colour is reserved for meaning. The default drawing is monochrome ink on ground. Four accents appear only in the
active state, and each always means the same thing (the site's Transmutation roles):

| Token | Paper | Night | Means | Where |
|---|---|---|---|---|
| `--ia-active` | `#1F6B5C` verdigris | `#4FA391` | Connected, data flowing | Lead strand, active links |
| `--ia-signal` | `#D06C40` copper | `#E39A72` | The live part, attention | Status lamps, AI core, terminal, open plugs (as a problem) |
| `--ia-approve` | `#9A6F12` gold | `#E2B04A` | Human approval | Boom stripes, lever knob, legend swatch |
| `--ia-ink-2` | `#4C525A` | `#AEB2B8` | Proposed, secondary | Dashed links, notes |

Never fill large planes with an accent. The AI core sphere is the largest accent area allowed.

## 5. Detail density

Benchmarked against Heron's elevations and Hut 8's fins: each scene has one dense focal object, one or two
mid-density objects and quiet ground.

- **Dense, repeated, precise:** vents, rollers, tick marks, perforations, cells, folders. Repeat at a fixed
  pitch (4, 5, 6, 7, 9, 18 units). Never use random spacing. The irregularity in scene 1 (fanned sheets,
  jittered document stacks) is deliberate and authored from a fixed table.
- **Quiet:** plinth tops, platform tops, ground. Leave them empty or give them one engraved system: grid, dial
  ticks or trench.
- **Stencil IDs** (`S-01`, `C-01`, `M1`, `R-03`, `ROW A`) are 7.5 px mono, sheared onto the face they belong to.
  They name things and never state facts.

## 6. Annotation

- **Leader:** 2.1 r dot on the object → straight rise at 58° (or a stated angle) → 16-unit horizontal shoulder →
  label. Labels are flat, never sheared, mono 12.5 px, +0.09em, first line in ink and any second line in ink-2.
- **Wording** is the visitor's own nouns from approved copy: Spreadsheets, Email threads, Paper forms, Legacy
  software, Manager approval. No metrics, no claims, no invented client facts. Dimensions use `EQ`, not invented
  measurements.
- **Detail titles:** numbered bubble, Newsreader title, rule, mono sheet line. Each sits in its camera's
  lower-left safe area.
- All notes live in `#ia-annotations` and all titles in `#ia-titles`, so the page can hide them and use its own
  HTML labels.

## 7. Component proportions

| Component | Footprint (x × y) | Height |
|---|---|---|
| System plinth | 160–240 × 150–200 | 12 |
| Cabinet-class object | 100–200 × 100–160 | 150–222 |
| Software module | 60 × 112 | 50 |
| Rack bay | 70 | 2 levels × 56 |
| Server cabinet | 50 × 96 | 212 |
| Data store | r 46 | 172 |
| Bundle | 4 conductors at 4.5 units = 13.5 between outer centers | flat on ground |
| Clamp | 6 × 23.5 | 4, every 120–160 |

## 8. Don't

- Don't use perspective, rotate objects off axis, or stretch a component.
- Don't use gradients, glows, blur or drop shadows with offset and blur. Depth comes only from tone, hatch and
  the flat cast shadow.
- Don't draw generic tech icons (clouds, brains, gears, padlocks, chat bubbles). Every object is a physical thing
  an engineer could build.
- Don't add a fifth line weight or a new accent hue. Don't use built (deep) material for anything AI Alchemy
  doesn't build.
- Don't use text that claims an outcome or a number. The drawing is labelled "Illustration of the method, not a
  client project."
- Don't put animation, scripts or transitions in the artwork files.
