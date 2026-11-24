# Experience Spine laboratory

Serve the site root with Python's HTTP server and open /labs/experience-spine/. All rendering runs locally. This route is independent of the published homepage.

## Architecture and storyboard

A sticky stage keeps one coordinate space in view. Native document position divided by scrollable distance gives progress from zero to one. Five equal intervals connect six camera keyframes. Cubic easing produces zero velocity at each keyframe. Scroll, resize and page restoration schedule at most one paint callback per frame. Reversing scroll samples the same geometry. The diagram and text occupy separate layout regions.

| Progress | Composition and action |
|---|---|
| 0% | Close view of three disconnected stacks. Muted surfaces keep their separate silhouettes legible. |
| 20% | Camera pulls back as the foundation settles between the stacks. |
| 40% | Three inbound paths draw toward the platform. The grid moves more slowly than the modules. |
| 60% | Camera travels toward the automation node. The first downstream route draws and colour builds. |
| 80% | The data stack enters on the far side as its upstream routes extend. |
| 100% | Camera recentres around the entire topology. Six modules and six connections remain readable together. |

CSS handles responsive composition and sticky positioning. SVG preserves a single camera transform, addressable artwork and resolution-independent paths. A small JavaScript sampler supports restored positions and synchronized targets. GSAP would add a timeline dependency to a deterministic six-stop sequence. Canvas would require manual drawing, asset rasterization or path replay. Three.js would add a GPU scene and camera pipeline for artwork that needs only planar transforms.

The design prioritizes a persistent landmark, a gradual pullback between close views and colour tied to activation. Live reference-site inspection was blocked by the network proxy. These are independent design choices.

## SVG handoff contract

The logical viewport is 800 × 530 user units, origin at top left, positive y downward. World coordinates remain fixed across layouts. The engine translates and scales the camera group around (400,265). Author local component SVGs around the floor contact point (0,0), with a nominal 92-unit footprint. Preserve master SVGs intact. Mount each using a nested SVG or image inside its art slot, using its original viewBox and a wrapper transform to align its floor anchor. Keep external IDs unique if inlining.

Layer order is grid, wires, modules, followed by HTML captions outside the SVG. Module IDs module-0 through module-5 correspond to Sales, Operations, Finance, Platform, Automation and Cloud data in order. The layout rows in scene.js declare label, floor x/y, entrance phase and test-stack height. Height is fixture metadata only. Grid depth currently uses a 0.23 horizontal camera offset. Modules share one depth plane. All wires currently attach at the floor origin behind the art. For offset ports, map the supplied local point through the asset wrapper and add the module position when constructing the path.

Replace only the contents of each data-slot="art" group in the fixture builder. The outer module owns entrance translation, opacity, inherited currentColor and data-state (hidden, entering, present, active). An inline asset can consume currentColor for active surfaces. External images can supply separate inactive/active variants controlled by wrapper opacity. Connections use normalized pathLength=1 and engine-owned dash offset. Keep IDs, mount positions, caption order and normalized timing stable across artwork swaps. Repeat the evidence run after integration and inspect edge endpoints, overlap and label clearance at all breakpoints.

## Browser evidence and performance

Chromium 156 on the cloud Linux runner served the real lab over HTTP. The evidence folder includes five desktop checkpoints and timestamped compositor captures during continuous forward and reverse scrolling. Tests checked mid-scroll reload and horizontal fit at 390×844, 820×1180 and 1280×800, the reduced-motion final view, six fallback chapters with JavaScript disabled and absence of page errors.

At 1280×800 during a 4.2-second sweep, median requestAnimationFrame intervals were 16.7 ms in each direction. The 95th percentile was 16.8 ms forward and 16.7 ms reverse. The recorder received 253 and 252 frames respectively. These measurements include capture overhead and apply to placeholder geometry. A provisional desktop target is a 95th percentile below 20 ms. Physical mobile devices, Safari, Firefox and production illustration costs still need measurement before setting release budgets.

To reproduce, start the site at port 8000 and run python3 verify.py from this directory with Playwright, system Chromium and ffmpeg available. The script refreshes the evidence files.
