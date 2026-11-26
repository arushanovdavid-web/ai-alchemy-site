# Experience architecture and shot sheet

The camera lives in the coordinate system of the equipment. An endpoint observed in the opening remains the same point at the final scale. A passing junction gives the eye a place to go next. A consequence such as a module seating is easier to read when the camera stops.

## Reference study

In Heron's opening, marks on a monochrome façade draw attention to individual locations. Its introduction holds a frame across changes of message. In Hut 8's power sequence, the caption stays legible while the eye follows a cable bundle across the landscape. This lab uses held mechanical actions and a continuous route. Its board, palette and composition come from the Foundry. [Heron AI](https://heronaiapp.com/) · [Hut 8](https://www.hut8.com/)

## Rendering decision

| Approach | Fit for this board |
|---|---|
| Inline SVG | Retains native paths, text, component IDs, paint order, anchors and scale-independent camera bounds. One instance can show a single fitting or the full sheet. |
| HTML and CSS | Own reading order, typography, stage layout, sticky positioning, clipping and responsive overview. HTML stays outside the camera transform. |
| GSAP | Could sequence independent time-based animations. Here every property is a function of one scroll position, so a small evaluator covers the tracks directly. |
| Canvas 2D | Flattening would discard per-component state and selectable drawing targets. Redrawing the authored board would introduce a second asset pipeline. |
| Three.js | Perspective, lighting and free orbit would require new scene assets. The board already contains projection, depth order and surface treatment. |

## Runtime

`mountSpine(root, assetBundle)` loads the master and anchors, validates the interface and caches target nodes. The HTML host supplies a sticky stage, art viewport, six articles, overview control, navigation and scroll markers, as demonstrated by the lab entry point. It returns a cleanup function. Use one mounted board per document because Foundry IDs are shared across exports.

`prepareFraming(manifest, width, height, leftSpace)` resolves cameras and focus anchors on mount or resize. `sample(progress, framing)` is pure and can be called in either direction. Its output contains camera bounds, draw fractions, component transforms, visibility, activation and the current reading beat. Native scroll events schedule one animation frame. A still page has no running animation loop.

The travel distance is 6.9 small viewport heights. Passive listeners measure the root relative to the document. The camera samples actual scroll position after resize or history restoration. The initial HTML reserves the enhanced scroll extent during asset loading so the browser can restore intermediate offsets. The browser retains its own scrolling behavior. A tab-local, history-entry-specific position covers engines that restore during asset loading. The static HTML and overview image precede enhancement. Reduced motion and very short reading windows use a completed drawing with all text in document flow.

## Shot sheet

| Travel | Composition and action | Held frame |
|---|---|---|
| 0–14% | Frame the four isolated tools. Stagger the proposed routes from their existing plug ends. Delay camera travel until the first route gives it a direction. | Opening cluster, 0–6.5% |
| 14–32% | Keep the collector between the original stubs and the drafting plate. The plate resolves, the four links become solid and the first trunk draws. | Collector and plate, 22.2–26.6% |
| 32–51% | Pass through the junction into the gantry. Keep the trolley, suspended module and target slot in frame. Lower the module 171 master units. | Camera locked, 39.4–47.2% |
| 51–69% | Arrive wide enough to connect the conveyor and platform. Tighten around the core, then transfer the emphasis to the approval gate. | Copper core at 59.5%; gate at 64.1% |
| 69–85% | Widen over the infrastructure, hold the racks and stores, then follow the outbound strand to the small terminal. | Cloud at 73.5–77.1%; terminal at 83.5–85.8% |
| 85–100% | Pull back from the terminal. Center movement follows the change of scale, keeping that endpoint on screen while upstream stations return. The desktop art can occupy the paper above the caption. | Whole system, 96–100% |

Camera centers use monotone cubic segments with shared tangents through passing positions and zero velocity at holds. Width interpolates multiplicatively. On narrow art panes the engine uses portrait camera centers and protected subject bounds, with a tighter crop for the gantry and terminal. The tiny ground-pattern shift is the only parallax. All cable endpoints, shadows and connected components travel in one coordinate system.

Portrait rendering measures scene bounds once and omits groups outside the camera with a 200-unit safety margin. Finished strands use a solid stroke. The engine only updates a segment when its draw fraction changes.
