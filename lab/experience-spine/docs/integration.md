# Shared Foundry SVG interface

This lab consumes Foundry v1.0.0 at `7245555fcd11b5c3d9323a0eadddb26a32feebc0`. Claude Code owns the illustration, generator, camera manifest and component library. The lab owns the camera edit, DOM binding, transition masks, reading layout and evidence. The source contract is part of the GitHub handoff. [Foundry specification at the pinned revision](https://github.com/arushanovdavid-web/ai-alchemy-site/blob/7245555fcd11b5c3d9323a0eadddb26a32feebc0/illustration/docs/SPEC.md)

| Interface | Consumer behavior |
|---|---|
| Board and cameras | One 5280 × 3300 master in SVG user units. Landscape scene exports are 1760 × 1100. Portrait crops use the per-scene 4:5 rectangles. Both retain master coordinates. The JSON manifest is authoritative for exact bounds and projected anchors. |
| Projection | The master origin is (900, 700). Project world coordinates as x = 900 + (worldX − worldY) × cos(30°), y = 700 + (worldX + worldY) / 2 − worldZ. The engine consumes the supplied two-dimensional coordinates directly. |
| Components and layers | A single inline master supplies `ia-ground`, `ia-scenes`, the five scene groups, scene-local ground and object layers, annotations, titles, sheet and invisible anchors. The component manifest gives local origins, ports and placement transforms for standalone assets. Draw order preserves the rack-front occlusion. |
| Inputs and outputs | Each route supplies `data-from` and `data-to`. Each manifest anchor has an ID, role, scene, world coordinate and projected master coordinate. Junctions j23, j34 and j45 are shared. The engine reads the module's hanging and slot anchors to derive its translation. |
| Draw targets | Seven `.strand` paths in each trunk segment use normalized path length 1. Four source links retain their own authored dash spacing. Temporary masks in the live DOM draw those four paths. |
| States | Scenes and components use `default` and `active`. Links progress through `off`, `proposed`, `built` and `active`. The master initially contains proposed links. The first sampled frame explicitly sets them off. Runtime state drives copper, verdigris and approval gold. |
| Depth | The lab assigns the independent dotted ground up to eight master units of drift. Mechanical parts use authored paint order. Links, plug ends and their equipment share a camera transform. New depth effects belong in the engine's shot data only after checking anchor registration. |
| Reading scale | The lab hides sheet furniture in camera shots, suppresses scene notes on portrait crops, and uses a screen-space weight for active routes at overview scale. HTML carries the full narrative throughout. |

## Replacing the bundle

1. Pin the incoming Foundry Git revision. Copy the master, anchor manifest, component manifest and fallback preview from that same revision. Preserve source bytes. Use the relevant paths in `app.js` and the poster reference in the HTML.
2. Run `python3 qa/check-assets.py` from the lab directory. The check compares the four files with Git objects from the pinned commit and exercises both SVG bindings. Fetch the pinned revision first when using a shallow clone. Review a version change against the source contract before updating the pin.
3. Run both bundles through the browser suite. An incompatible major version, malformed camera, duplicate ID, missing target or invalid endpoint must select the readable fallback. The fixture shares anchor metadata and supplies simple boxes and line segments. Regenerate its SVG with `python3 qa/make-fixture.py`.
4. Recapture the Foundry cut and review module seating, masking, the approval gate, terminal and both overview endpoints at desktop and phone sizes. An art-only revision can change composition and rendering cost even with a compatible interface. Keep the fixture for deterministic regression checks and evaluate the art in its actual browser context.

The Foundry files carry the original colour rules and IDs. Runtime treatments are scoped to the mounted copy. Asset approval and any illustration revisions stay with the artwork owner.
