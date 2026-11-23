// Hero, as built: one business floor where each of the five problems is drawn as something you can see.
// A order typed twice into two separate systems   B stock changes waiting on paper
// C a report pieced together from separate printouts, one piece missing   D an old terminal at the counter
// E answers that live in one person's head: a queue at their desk, binders behind them. Coral = where work stalls.
import { makeRenderer, renderEtch } from './etch.js';
import { seed, desk, tree } from './scene.js';
import { THREE, setup, accent, rod, cable, person, camera, lights, rnd, CORAL } from './kit.js';
const P = new URLSearchParams(location.search);
const W = +(P.get('w') || 1600), H = +(P.get('h') || 609);
const { scene, C } = setup(P); seed(17);
const box = C.box, co = m => accent(m, CORAL, .95);
const WIRES = [];
// a loose cable through the given points, with a little slack and wobble; projected later and drawn in coral
function wire(pts, wob = .25) { const out = []; for (let i = 0; i < pts.length - 1; i++) { const a = pts[i], b = pts[i + 1], n = 12;
  for (let k = 0; k < n; k++) { const t = k / n, sag = Math.sin(t * Math.PI) * .25; out.push([a[0] + (b[0] - a[0]) * t + Math.sin(t * 9 + i) * wob, Math.max(.05, a[1] + (b[1] - a[1]) * t - sag), a[2] + (b[2] - a[2]) * t + Math.cos(t * 7 + i) * wob]); } }
  out.push(pts[pts.length - 1]); WIRES.push(out); }

// floor plate with joints, low back walls cut as sections
box(-2, -.5, -2, 64, .5, 28, { cast: false });
box(0, 0, 0, 60, 4.2, .35); box(0, 0, 0, .35, 4.2, 26);
box(18, 0, .35, .3, 2.2, 7); box(35, 0, .35, .3, 2.2, 5);                    // stub partitions

// ---------- C · reports pieced together (back wall, left) ----------
const sheet = (x, y, w, h) => box(x, y, .36, w, h, .05);
sheet(2.2, 1.4, 3.2, 2.3); for (let i = 0; i < 5; i++) box(2.6 + i * .55, 1.6, .42, .35, .4 + i * .32 + rnd() * .3, .04);   // bar chart
sheet(6.0, 1.4, 3.2, 2.3); { const p = []; for (let i = 0; i <= 6; i++) p.push([6.3 + i * .44, 1.8 + Math.abs(Math.sin(i * 1.3)) * 1.3, .45]); C.tube(p, .09); }      // trend
sheet(9.8, 1.4, 3.2, 2.3); for (let r = 0; r < 5; r++) box(10, 1.6 + r * .4, .42, 2.8, .04, .03);                 // table
// the missing piece: an empty frame, in coral
for (const [a, b] of [[[13.6, 1.4], [16.8, 1.4]], [[16.8, 1.4], [16.8, 3.7]], [[16.8, 3.7], [13.6, 3.7]], [[13.6, 3.7], [13.6, 1.4]]]) co(rod(C, [a[0], a[1], .45], [b[0], b[1], .45], .06));
rod(C, [15.2, 2.0, .45], [15.2, 2.9, .45], .05); C.add(new THREE.Mesh(new THREE.SphereGeometry(.09, 8, 6), C.MAT)).position.set(15.2, 1.75, .45);
// meeting table with printouts spread out
box(4, 0, 4.5, 9, 1.5, 3.2); box(3.8, 1.5, 4.3, 9.4, .12, 3.6);
for (let i = 0; i < 10; i++) box(4.3 + rnd() * 8, 1.62 + i * .005, 4.6 + rnd() * 2.6, .9, .02, 1.2);
person(C, 6, 0, 9.2, Math.PI); person(C, 10, 0, 9.4, Math.PI + .3);

// ---------- A · the same order typed twice (two systems, one person) ----------
desk(C, 20, 0, 3, 0); desk(C, 24.6, 0, 3, 0);
box(20.3, 0, 3.2, .7, 1.4, 1.2); box(27.6, 0, 3.2, .7, 1.4, 1.2);            // two separate system boxes
box(23.3, 1.57, 3.8, .9, .02, 1.2); box(23.4, 1.6, 3.9, .7, .02, 1.0);        // the paper order between them
person(C, 23.8, 0, 5.8, Math.PI + .4);
// their cables end apart: the gap is where the order gets retyped
wire([[20.9, .6, 4.4], [22, .1, 5.6], [23.1, .1, 6.2]], .08); wire([[27.9, .6, 4.4], [26.6, .1, 5.6], [25.3, .1, 6.2]], .08);
box(22.9, 0, 6.0, .5, .3, .35); box(25.1, 0, 6.0, .5, .3, .35);                // the two loose plugs

// ---------- E · answers in one person's head (desk, queue, binders) ----------
for (let s = 0; s < 3; s++) box(36.2, s * 1.4, .4, 7, .1, 1.2);
box(36.2, 0, .4, .1, 4.2, 1.2); box(43.1, 0, .4, .1, 4.2, 1.2);
for (let s = 0; s < 3; s++) for (let i = 0; i < 16; i++) box(36.5 + i * .4, s * 1.4 + .1, .55, .3, 1.0 + (i % 3) * .08, .9);
desk(C, 38, 0, 3.5, 0); person(C, 39.5, 0, 5.8, Math.PI);
person(C, 39.8, 0, 9.2, Math.PI); person(C, 40.4, 0, 11.4, Math.PI + .2); person(C, 41.2, 0, 13.6, Math.PI + .1);

// ---------- D · the counter's old terminal ----------
box(4, 0, 17, 13, 2.4, 2.2); box(3.8, 2.4, 16.8, 13.4, .14, 2.6);
// a deep CRT terminal and a beige tower
box(6.2, 2.54, 17.2, 2.4, 2.1, 2.2); box(6.5, 2.85, 19.4, 1.8, 1.5, .08, { m: C.MAT3 }); box(6.6, 2.54, 17.6, 1.6, .5, 1.0);
box(5.4, 2.54, 19.5, 3.2, .1, .9, { m: C.MAT2 });
box(9.5, 2.54, 17.3, 1.1, 2.6, 2.0);
// a dot-matrix printer feeding folded paper to the floor
box(12, 2.54, 17.4, 2.6, .7, 1.6);
for (let i = 0; i < 7; i++) { const y = 2.2 - i * .32; box(12.2, y, 19.3 + (i % 2) * .35, 2.2, .03, .45); }
co(cable(C, [10.5, 3.2, 17.3], [13.3, 3.2, 17.4], .45, .12));                  // taped-together cable
for (let i = 0; i < 3; i++) co(box(11.4 + i * .3, 3.0, 17.25, .12, .4, .2));
person(C, 9, 0, 22.6, Math.PI); person(C, 7.6, 0, 14.8, 0);                     // customer and clerk

// ---------- B · stock changes waiting on paper (warehouse) ----------
for (let r = 0; r < 2; r++) { const z = 5 + r * 6.5; for (let i = 0; i < 4; i++) { const x = 46 + i * 4; rod(C, [x, 0, z], [x, 6.5, z], .1); rod(C, [x, 0, z + 2], [x, 6.5, z + 2], .1); }
  for (const y of [0, 2.2, 4.4]) { box(46, y + .1, z, 12, .16, 2); for (let i = 0; i < 3; i++) for (let b = 0; b < 2; b++) if (rnd() > .2) box(46.4 + i * 4 + b * 1.8, y + .26, z + .25, 1.5, .8 + rnd() * .9, 1.5); } }
// the stand-up table with towers of paper, and a person with a clipboard
box(29, 0, 17, 6, 2.2, 2.4); box(28.8, 2.2, 16.8, 6.4, .12, 2.8);
const stacks = [[29.4, 2.6], [30.7, 1.7], [32, 3.1], [33.3, 2.2]];
for (const [x, h] of stacks) for (let k = 0; k < Math.round(h / .25); k++) box(x + (rnd() - .5) * .12, 2.32 + k * .25, 17.5 + (rnd() - .5) * .12, 1.1, .22, 1.5);
co(box(34.4, 2.32, 18.4, .5, .06, .4));                                         // the slip still waiting
person(C, 38.5, 0, 17.5, -Math.PI / 2 - .2); box(37.8, 2.2, 17.9, .6, .8, .05);
// a pallet waiting to be put away
box(52, 0, 20, 3, .3, 2.4); box(52.3, .3, 20.2, 2.4, 1.8, 2);

// ---------- workarounds: loose cables joining it all (coral) ----------
const loose = [[[21, .45, 6.5], [14, .45, 13], [11, 2.5, 17.2]], [[27.9, .45, 6.5], [33, .45, 9], [38.5, 1.6, 3.6]], [[51, .45, 20.4], [42, .45, 21.5], [35, .45, 19.6]], [[12.8, 1.6, 6.8], [17, .45, 10], [22, .45, 7]], [[26, .45, 7], [27, .45, 13], [29.5, 1.2, 17]]];
loose.forEach(p => wire(p));

window.__anchors = {}; WIRES.forEach((w, i) => w.forEach((p, k) => window.__anchors[`w${i}_${k}`] = p));
Object.assign(window.__anchors, { A: [24.2, .3, 6.2], B: [31.4, 5.8, 17.8], C: [15.2, 2.6, .5], D: [7.4, 4.4, 18.4], E: [40.3, 4.7, 9.4] });
lights(scene, P, [-30, 60, 25], [30, 0, 12], 60);
const cam = camera(P, W, H, { fr: +(P.get('fr') || 12.2), t: [29.5, 2.5, 12], dir: [.34, .62, 1] });
const r = makeRenderer(W, H);
renderEtch(r, scene, cam, { spacing: 4.4, edgeW: 1.1, hatchGain: 1.0 });
window.__done = true;
