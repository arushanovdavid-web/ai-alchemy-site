/* AI Alchemy: the capabilities world, flown through by scroll (after hut8.com's camera journey).
   One continuous line-drawn landscape. At the start every zone is a knot of coral cables: how a business runs today.
   The camera travels along a copper trace from zone to zone; as each capability's card arrives, its zone's tangle is
   pulled into structure and the trace to it draws on:
   01 Modernize, core systems rebuilt   02 Connect, four systems wired to one hub   03 Automate, a work line
   04 Understand, a data tower and a live board   05 Enable AI, a knowledge core feeding everyday tools.
   The trace runs on to the CN Tower, which forms out of the last tangle while the camera pulls back over everything.
   Source for assets/tower3d.js (bundled with tools/tower3d/build.sh). */
import { BufferGeometry, Float32BufferAttribute, DoubleSide, WebGLRenderer, Scene, PerspectiveCamera, Vector3, Vector2, Mesh, MeshBasicMaterial, LatheGeometry, BoxGeometry, CylinderGeometry } from 'three';
import { LineSegments2 } from 'three/examples/jsm/lines/LineSegments2.js';
import { LineSegmentsGeometry } from 'three/examples/jsm/lines/LineSegmentsGeometry.js';
import { LineMaterial } from 'three/examples/jsm/lines/LineMaterial.js';

const hex = h => [parseInt(h.slice(1, 3), 16) / 255, parseInt(h.slice(3, 5), 16) / 255, parseInt(h.slice(5, 7), 16) / 255];
const INK = hex('#2C3036'), FAINT = hex('#9A9890'), CORAL = hex('#D9805A'), CU = hex('#B5703F'), VERD = hex('#1F6B5C'), PAPER = [.95, .93, .89];
const clamp = v => v < 0 ? 0 : v > 1 ? 1 : v;
const ease = t => t * t * (3 - 2 * t);
const lerp = (a, b, t) => a.map((v, i) => v + (b[i] - v) * t);
const mixc = (a, b, t) => [a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t, a[2] + (b[2] - a[2]) * t];
let seed = 7; const rnd = () => (seed = (seed * 16807) % 2147483647) / 2147483647;

/* ---------------- world layout ---------------- */
const Z = [[0, 0], [75, 16], [150, -8], [225, 14], [300, -4]];         // zone centres (x, z), one per capability
const T = [388, -12];                                                   // the tower
const START = [-48, 8];

/* ---------------- geometry: lists of segments ---------------- */
const SEG = [];          // {a, b, part (1..6), col, mode: morph | grow, s, k, n}
const STATIC = [];       // [a, b, strength]
const PINS = [];         // [part, [x,y,z], label]
const OB = [];           // occluding boxes: [cx, cy, cz, w, h, d, part]
const add = (a, b, part, col = 'ink', mode = 'morph') => { const s = { a, b, part, col, mode, s: 0 }; SEG.push(s); return s; };
const poly = (pts, part, col = 'ink', mode = 'morph', closed = false) => { for (let i = 0; i < pts.length - (closed ? 0 : 1); i++) add(pts[i], pts[(i + 1) % pts.length], part, col, mode); };
// a run that draws on in order (copper links and traces)
const run = (pts, part, col = 'cu') => { const n = pts.length - 1; for (let i = 0; i < n; i++) { const s = add(pts[i], pts[i + 1], part, col, 'grow'); s.k = i; s.n = n; } };
const ring = (c, y, r, n = 48) => { const p = []; for (let i = 0; i < n; i++) { const a = i / n * Math.PI * 2; p.push([c[0] + Math.cos(a) * r, y, c[1] + Math.sin(a) * r]); } return p; };
const at = (c, r, a, y) => [c[0] + Math.cos(a) * r, y, c[1] + Math.sin(a) * r];
function boxE(c, x0, z0, w, d, y0, h, part, col = 'ink', floors = 0) {   // a box as edges, optional floor lines on the two front faces
  const X0 = c[0] + x0, Z0 = c[1] + z0, X1 = X0 + w, Z1 = Z0 + d, y1 = y0 + h;
  const q = [[X0, Z0], [X1, Z0], [X1, Z1], [X0, Z1]];
  for (let i = 0; i < 4; i++) { const [a, b] = q[i], [e, f] = q[(i + 1) % 4]; add([a, y0, b], [e, y0, f], part, col); add([a, y1, b], [e, y1, f], part, col); add([a, y0, b], [a, y1, b], part, col); }
  for (let k = 1; k <= floors; k++) { const y = y0 + h * k / (floors + 1); add([X0, y, Z1], [X1, y, Z1], part, 'faint'); add([X1, y, Z0], [X1, y, Z1], part, 'faint'); }
  if (floors) { for (let u = 1.4; u < w - .3; u += 1.4) add([X0 + u, y0, Z1], [X0 + u, y1, Z1], part, 'faint'); for (let u = 1.4; u < d - .3; u += 1.4) add([X1, y0, Z0 + u], [X1, y1, Z0 + u], part, 'faint'); }
  OB.push([X0 + w / 2, y0 + h / 2, Z0 + d / 2, w, h, d, part]);
  return { top: [X0 + w / 2, y1, Z0 + d / 2] };
}
function lathe(c, prof, part, n, meridians, col = 'ink') {
  prof.forEach(([y, r]) => poly(ring(c, y, r, n), part, col, 'morph', true));
  for (let m = 0; m < meridians; m++) { const a = m / meridians * Math.PI * 2; poly(prof.map(([y, r]) => at(c, r, a, y)), part, col); }
}
const Zp = (k, x, y, z) => [Z[k][0] + x, y, Z[k][1] + z];

// 01 Modernize: the core systems, rebuilt on a clean platform
{ const c = Z[0];
  poly([Zp(0, -14, .3, -10), Zp(0, 14, .3, -10), Zp(0, 14, .3, 10), Zp(0, -14, .3, 10)], 1, 'ink', 'morph', true);
  const b = boxE(c, -9, -6, 13, 9, .3, 8, 1, 'ink', 3);
  boxE(c, -6, -4, 4, 3, 8.3, 1.6, 1); boxE(c, -1, -4, 3, 3, 8.3, 1.2, 1);
  for (let i = 0; i < 4; i++) boxE(c, 6 + i * 1.9, -3, 1.4, 2.4, .3, 4.6, 1, 'ink', 4);   // new racks
  poly([Zp(0, 4, .5, -1.8), Zp(0, 6, .5, -1.8)], 1, 'cu');
  boxE(c, -12, 4.5, 7, 4, .3, 2.6, 1, 'ink', 1); boxE(c, -3, 5, 4, 3, .3, 1.6, 1);
  for (let i = 0; i < 3; i++) poly(ring([c[0] + 2 + i * 3.2, c[1] + 6.5], 2.6, 1.1, 16), 1, 'ink', 'morph', true);
  PINS.push([1, b.top, 'Core systems'], [1, Zp(0, 9, 5, -1.8), 'Modern platform']); }

// 02 Connect: four systems wired to one hub
{ const c = Z[1];
  [[0, .3, 3.2], [0, 5.5, 3.2], [0, 6, 2]].forEach(([, y, r]) => poly(ring(c, y, r, 36), 2, 'ink', 'morph', true));
  for (let m = 0; m < 8; m++) { const a = m / 8 * Math.PI * 2; add(at(c, 3.2, a, .3), at(c, 3.2, a, 5.5), 2); }
  const SYS = [[-14, -9, 'CRM', 6], [12, -10, 'ERP', 7.5], [-13, 8, 'Accounting', 5], [13, 7, 'Website', 4.5]];
  for (const [x, z, name, h] of SYS) {
    const b = boxE(c, x - 3, z - 2.5, 6, 5, .3, h, 2, 'ink', Math.round(h / 2.5));
    run([Zp(1, x, .4, z), Zp(1, x, .4, z * .3), Zp(1, x * .3, .4, z * .3), Zp(1, Math.sign(x) * 3.3, .6, Math.sign(z) * .6)], 2);
    PINS.push([2, b.top, name]);
  } }

// 03 Automate: a work line, station to station
{ const c = Z[2];
  poly([Zp(2, -16, .3, -6), Zp(2, 16, .3, -6), Zp(2, 16, .3, 6), Zp(2, -16, .3, 6)], 3, 'ink', 'morph', true);
  for (const z of [-1, 1]) poly([Zp(2, -15, 1.2, z), Zp(2, 15, 1.2, z)], 3);
  for (let i = -15; i <= 15; i += 1.5) add(Zp(2, i, 1.2, -1), Zp(2, i, 1.2, 1), 3, 'faint');
  const X = [-12, -6, 0, 6, 12];
  X.forEach((x, i) => { boxE(c, x - 1.6, -4.5, 3.2, 2.6, .3, 3 + (i % 2), 3, 'ink', 1); boxE(c, x - 1, 2.4, 2, 2, .3, 2, 3); boxE(c, x + 2.2, -.6, .9, 1.2, 1.2, .8, 3); });
  for (let i = 0; i < 6; i++) boxE(c, -16 + i * -2.6, 4, 2, 2, .3, 1.4 + (i % 2) * .8, 3);
  run([Zp(2, -15, 1.5, 0), Zp(2, -9, 1.5, 0), Zp(2, -3, 1.5, 0), Zp(2, 3, 1.5, 0), Zp(2, 9, 1.5, 0), Zp(2, 15, 1.5, 0)], 3);
  PINS.push([3, Zp(2, -12, 4, -3), 'Intake'], [3, Zp(2, 0, 4, -3), 'Approve'], [3, Zp(2, 12, 4, -3), 'Deliver']); }

// 04 Understand: a data tower, one floor per layer, and a live board
{ const c = Z[3];
  for (let f = 0; f < 6; f++) { boxE(c, -4, -4, 8, 8, .3 + f * 3, 2.7, 4); const y = .3 + f * 3 + .6;
    const pts = []; for (let i = 0; i <= 6; i++) pts.push(Zp(3, -3.3 + i * 1.1, y + .3 + Math.abs(Math.sin(i * 1.7 + f)) * 1.3, 4.05)); poly(pts, 4, f > 3 ? 'cu' : 'ink'); }
  boxE(c, -4.6, -4.6, 9.2, 9.2, 18.3, .5, 4);
  // the board: a frame on two legs with bars
  poly([Zp(3, 8, 3, 2), Zp(3, 20, 3, 2), Zp(3, 20, 10, 2), Zp(3, 8, 10, 2)], 4, 'ink', 'morph', true);
  add(Zp(3, 9, 0, 2), Zp(3, 9, 3, 2), 4); add(Zp(3, 19, 0, 2), Zp(3, 19, 3, 2), 4);
  for (let i = 0; i < 7; i++) { const h = 1 + i * .7 + (i % 2) * .6; poly([Zp(3, 9 + i * 1.5, 3.6, 2), Zp(3, 9 + i * 1.5, 3.6 + h, 2), Zp(3, 10 + i * 1.5, 3.6 + h, 2), Zp(3, 10 + i * 1.5, 3.6, 2)], 4, i > 4 ? 'cu' : 'ink'); }
  run([Zp(3, 4, .4, 0), Zp(3, 14, .4, 0), Zp(3, 14, .4, 2)], 4);
  PINS.push([4, Zp(3, 0, 19, 0), 'One trusted source'], [4, Zp(3, 14, 10.5, 2), 'Live reports']); }

// 05 Enable AI: a knowledge core, with paths out to the tools people use every day
{ const c = Z[4];
  lathe(c, [[.3, 4.5], [3, 4.5], [3.4, 3.4], [7, 3.4], [7.4, 2.2], [11, 2.2], [11.4, 1]], 5, 40, 12);
  add(Zp(4, 0, 11.4, 0), Zp(4, 0, 14, 0), 5, 'cu');
  for (let i = 0; i < 6; i++) { const a = i / 6 * Math.PI * 2 + .3, R = 14; const e = at(c, R, a, .3);
    boxE([e[0], e[2]], -1.5, -1.2, 3, 2.4, .3, 1.8, 5);
    run([at(c, 4.7, a, .5), at(c, 9, a + .15, .5), at(c, R - 1.6, a, .5)], 5); }
  PINS.push([5, Zp(4, 0, 12, 0), 'Business knowledge'], [5, at(c, 14, .3, 2.4), 'Everyday tools']); }

// the trace: one copper run from the start, through every zone, to the tower. Faint double rails always there.
const NODES = [START, ...Z, T];
function leg(a, b, n = 24) { const pts = [], mid = [(a[0] + b[0]) / 2, (a[1] + b[1]) / 2 + (b[0] - a[0]) * .12];
  for (let i = 0; i <= n; i++) { const t = i / n, u = 1 - t; pts.push([u * u * a[0] + 2 * u * t * mid[0] + t * t * b[0], .2, u * u * a[1] + 2 * u * t * mid[1] + t * t * b[1]]); } return pts; }
for (let k = 0; k < NODES.length - 1; k++) {
  const pts = leg(NODES[k], NODES[k + 1]);
  run(pts, k + 1);
  for (const o of [-1.4, 1.4]) for (let i = 0; i < pts.length - 1; i++) { const d = [pts[i + 1][0] - pts[i][0], pts[i + 1][2] - pts[i][2]], L = Math.hypot(...d) || 1, n = [-d[1] / L * o, d[0] / L * o];
    STATIC.push([[pts[i][0] + n[0], .05, pts[i][2] + n[1]], [pts[i + 1][0] + n[0], .05, pts[i + 1][2] + n[1]], .55]); }
}

/* ---------------- the CN Tower (part 6), at 1 unit = 4.6 m ---------------- */
const P6 = 6, LEG = [Math.PI / 2, Math.PI / 2 + 2 * Math.PI / 3, Math.PI / 2 + 4 * Math.PI / 3], YT = 71.6;
const wingR = y => 3.5 + 4.1 * Math.pow(1 - Math.min(y, YT) / YT, 1.55), wingW = y => 1.75 - .55 * Math.min(y, YT) / YT;
function ysec(y, sc = 1) { const w = wingW(y), R = wingR(y), ri = w / (2 * Math.tan(Math.PI / 3)), pts = [];
  for (const a of LEG) { const d = [Math.cos(a), Math.sin(a)], n = [-Math.sin(a), Math.cos(a)];
    for (const [r, s2] of [[ri, -1], [R, -1], [R, 1]]) pts.push([T[0] + (d[0] * r + n[0] * w / 2 * s2) * sc, y, T[1] + (d[1] * r + n[1] * w / 2 * s2) * sc]); }
  return pts; }
const YLEV = []; for (let y = 0; y <= YT + .01; y += 2.4) YLEV.push(+y.toFixed(2));
YLEV.forEach(y => poly(ysec(y), P6, 'ink', 'morph', true));
for (let v = 0; v < 9; v++) for (let i = 0; i < YLEV.length - 1; i++) add(ysec(YLEV[i])[v], ysec(YLEV[i + 1])[v], P6, v % 3 === 0 ? 'faint' : 'ink');
for (const a of LEG) for (let i = 0; i < YLEV.length - 1; i++) add(at(T, wingR(YLEV[i]) + .02, a, YLEV[i]), at(T, wingR(YLEV[i + 1]) + .02, a, YLEV[i + 1]), P6, 'faint');
poly(ring(T, 0, 10, 72), P6, 'ink', 'morph', true);
for (const e of [-.42, .42]) poly(YLEV.map(y => { const a = LEG[0], d = [Math.cos(a), Math.sin(a)], n = [-Math.sin(a), Math.cos(a)], R = wingR(y) + .08; return [T[0] + d[0] * R + n[0] * e, y, T[1] + d[1] * R + n[1] * e]; }), P6, 'cu');
const POD = [[71.6, 4.9], [72.5, 6.4], [73.2, 7.05], [74.5, 7.15], [75.3, 6.95], [76.1, 7.05], [77.1, 6.7], [78.1, 5.6], [78.9, 3.9], [79.6, 2.1], [80.4, 1.6]];
lathe(T, POD, P6, 72, 30);
for (const a0 of LEG) for (const da of [-.13, 0, .13]) { const a = a0 + da; poly([[63, wingR(63) * (da ? .8 : 1)], [67, 4.1], [70, 4.6], [72.5, 6.4]].map(([y, r]) => at(T, r, a, y)), P6); }
for (let i = 0; i < 120; i++) { const a = i / 120 * Math.PI * 2; add(at(T, 7.12, a, 73.3), at(T, 7.12, a, 74.4), P6, 'faint'); }
poly(ring(T, 74.5, 7.2, 96), P6, 'cu', 'morph', true);
const shaft2 = y => 1.55 - (y - 80.4) / 14 * .3;
for (let y = 80.4; y <= 94.5; y += 1.4) poly(ring(T, y, shaft2(y), 6), P6, 'ink', 'morph', true);
for (let m = 0; m < 6; m++) { const a = m / 6 * Math.PI * 2; add(at(T, shaft2(80.4), a, 80.4), at(T, shaft2(94.4), a, 94.4), P6); }
const SKY = [[94.4, 1.25], [95, 2.2], [95.9, 2.55], [96.9, 2.45], [97.6, 1.7], [98.2, 1.05]];
lathe(T, SKY, P6, 48, 16);
const MT = 120, antR = y => .95 - (y - 98.2) / (MT - 98.2) * .8;
for (let y = 98.2; y <= MT; y += 1.45) poly(ring(T, y, antR(y), 8), P6, 'ink', 'morph', true);
for (let m = 0; m < 4; m++) { const a = m / 4 * Math.PI * 2 + .4; add(at(T, antR(98.2), a, 98.2), at(T, antR(MT), a, MT), P6); }
add([T[0], 98.2, T[1]], [T[0], MT + 1.6, T[1]], P6, 'cu');
for (let i = 0; i < 8; i++) { const a = i / 8 * Math.PI * 2, r0 = .5, r1 = i % 2 ? 1.2 : 2.1; add([T[0] + Math.cos(a) * r0, MT + 1.6 + Math.sin(a) * r0, T[1]], [T[0] + Math.cos(a) * r1, MT + 1.6 + Math.sin(a) * r1, T[1]], P6, 'verd'); }

/* ---------------- static surroundings ---------------- */
const BLD = [];
const place = (x, z, w, d, h) => { if (BLD.some(b => Math.abs(b.x - x) < (b.w + w) / 2 + 1.5 && Math.abs(b.z - z) < (b.d + d) / 2 + 1.5)) return;
  if (Math.hypot(x - T[0], z - T[1]) < 14) return; for (const c of Z) if (Math.hypot(x - c[0], z - c[1]) < 24) return; BLD.push({ x, z, w, d, h }); };
for (let i = 0; i < 90; i++) { const a = 2.6 + rnd() * 2.6, r = 18 + rnd() * 60; place(T[0] + Math.cos(a) * r, T[1] + Math.sin(a) * r - 10, 4 + rnd() * 6, 4 + rnd() * 6, 10 + rnd() * rnd() * 40); }   // downtown behind the tower
for (let i = 0; i < 70; i++) place(-40 + rnd() * 400, (rnd() < .5 ? -1 : 1) * (26 + rnd() * 40), 4 + rnd() * 7, 4 + rnd() * 7, 2 + rnd() * rnd() * 9);   // low blocks along the way
for (const { x, z, w, d, h } of BLD) {
  const q = [[x - w / 2, z - d / 2], [x + w / 2, z - d / 2], [x + w / 2, z + d / 2], [x - w / 2, z + d / 2]];
  for (let i = 0; i < 4; i++) { const [a, b] = q[i], [e, f] = q[(i + 1) % 4]; STATIC.push([[a, 0, b], [e, 0, f], .8], [[a, h, b], [e, h, f], .8], [[a, 0, b], [a, h, b], .8]); }
  for (let y = 3; y < h - .5; y += h > 14 ? 2 : 3) for (let i = 0; i < 4; i++) { const [a, b] = q[i], [e, f] = q[(i + 1) % 4]; STATIC.push([[a, y, b], [e, y, f], .35]); }
}
for (let x = -60; x <= 440; x += 10) for (let z = -60; z <= 60; z += 10) { STATIC.push([[x - .5, 0, z], [x + .5, 0, z], .3], [[x, 0, z - .5], [x, 0, z + .5], .3]); }   // survey grid
for (let i = 0; i < 90; i++) { const x = T[0] - 60 + rnd() * 140, z = T[1] + 30 + rnd() * 40, L = 1.5 + rnd() * 4; STATIC.push([[x, .02, z], [x + L, .02, z], .45]); }   // the lake

/* ---------------- the tangle: where every morphing segment starts ---------------- */
function cable(A, B, sag, loops) {
  const pts = [], n = 40, f = 2 + rnd() * 5, ph = rnd() * 6, amp = .6 + rnd() * 1.8;
  for (let i = 0; i <= n; i++) { const t = i / n, w = Math.sin(t * Math.PI);
    pts.push([A[0] + (B[0] - A[0]) * t + Math.cos(t * f * 6.28 + ph) * amp * w * loops, A[1] + (B[1] - A[1]) * t - sag * w + Math.sin(t * f * 9 + ph) * amp * .6 * w, A[2] + (B[2] - A[2]) * t + Math.sin(t * f * 6.28 + ph) * amp * w * loops]); }
  return pts;
}
for (let part = 1; part <= 6; part++) {
  const c = part < 6 ? Z[part - 1] : T, R = part < 6 ? 15 : 20;
  const anchor = () => at(c, 2 + rnd() * R, rnd() * 6.28, rnd() * (part < 6 ? 6 : 9));
  const segs = SEG.filter(s => s.part === part && s.mode === 'morph');
  const L = segs.reduce((t, s) => t + Math.hypot(s.b[0] - s.a[0], s.b[1] - s.a[1], s.b[2] - s.a[2]), 0);
  const cables = []; let C = 0;
  while (C < (part < 6 ? 260 : 600) || cables.length < 5) { const A = anchor(), B = anchor(); if (Math.hypot(A[0] - B[0], A[2] - B[2]) < 6) continue;
    const cc = cable(A, B, 1 + rnd() * 3, .4 + rnd()); for (let i = 1; i < cc.length; i++) C += Math.hypot(cc[i][0] - cc[i - 1][0], cc[i][1] - cc[i - 1][1], cc[i][2] - cc[i - 1][2]); cables.push(cc); }
  const k = C / L; let ci = 0, pi = 0, rem = 0;
  const step = len => { let d = len;
    while (true) { const cc = cables[ci], p = cc[pi], q = cc[pi + 1]; const sl = Math.hypot(q[0] - p[0], q[1] - p[1], q[2] - p[2]);
      if (rem + d <= sl) { rem += d; const t = rem / sl; return [p[0] + (q[0] - p[0]) * t, Math.max(.05, p[1] + (q[1] - p[1]) * t), p[2] + (q[2] - p[2]) * t]; }
      d -= sl - rem; rem = 0; pi++; if (pi >= cc.length - 1) { pi = 0; ci = (ci + 1) % cables.length; return null; } } };
  let cur = cables[0][0];
  const ys = segs.map(s => (s.a[1] + s.b[1]) / 2), y0 = Math.min(...ys), y1 = Math.max(...ys);
  segs.forEach((s, i) => {
    const len = Math.hypot(s.b[0] - s.a[0], s.b[1] - s.a[1], s.b[2] - s.a[2]) * k;
    let nx = step(len); if (!nx) { cur = cables[ci][0]; nx = step(len) || cur; }
    s.a0 = cur; s.b0 = nx; cur = nx;
    s.s = ((ys[i] - y0) / Math.max(1, y1 - y0)) * .7 + rnd() * .3;
  });
}

/* ---------------- camera path over f (0..6) ---------------- */
const Y3 = (c, y = 3) => [c[0], y, c[1]];
const KEYS = [[0, [130, 0, 0], [-110, 140, 190]]];
Z.forEach((c, i) => {
  const ty = i === 3 ? 9 : 3, zz = i === 3 ? 1.25 : 1;
  KEYS.push([i + .62, Y3(c, ty), [-26 * zz, 25 * zz, 40 * zz]], [i + .98, Y3(c, ty + .5), [-21 * zz, 22 * zz, 42 * zz]]);
  const nx = i < 4 ? Z[i + 1] : T; const m = lerp(c, nx, .55);
  KEYS.push([i + 1.3, [m[0], 1.5, m[1]], [-22, 10, 22]]);
});
KEYS.push([5.62, [T[0], 34, T[1]], [-62, 8, 74]], [6, [T[0] - 110, 44, T[1] + 6], [-150, 70, 250]]);
function camAt(f) {
  let i = 0; while (i < KEYS.length - 2 && f > KEYS[i + 1][0]) i++;
  const [f0, t0, o0] = KEYS[i], [f1, t1, o1] = KEYS[i + 1], u = ease(clamp((f - f0) / (f1 - f0)));
  return [lerp(t0, t1, u), lerp(o0, o1, u)];
}

/* ---------------- scene ---------------- */
export function mount(win, chain) {
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  let renderer;
  try { renderer = new WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'low-power' }); } catch (e) { return false; }
  if (!renderer.getContext()) return false;
  renderer.setClearColor(0x000000, 0);
  const cvs = renderer.domElement; cvs.className = 't3-canvas'; cvs.setAttribute('aria-hidden', 'true');
  const scene = new Scene(), cam = new PerspectiveCamera(32, 1, 1, 3000);

  // occluders: paper that is never drawn, so lines behind solids are hidden
  const OCC = new MeshBasicMaterial({ colorWrite: false, polygonOffset: true, polygonOffsetFactor: 2, polygonOffsetUnits: 2 });
  const OCC2 = OCC.clone(); OCC2.side = DoubleSide;
  for (const { x, z, w, d, h } of BLD) { const m = new Mesh(new BoxGeometry(w, h, d), OCC); m.position.set(x, h / 2, z); scene.add(m); }
  const occ = [];
  const obm = OB.map(([x, y, z, w, h, d, part]) => { const m = new Mesh(new BoxGeometry(w * .985, h * .985, d * .985), OCC); m.position.set(x, y, z); m.userData.part = part; scene.add(m); return m; });
  const lath = prof => { const g = new LatheGeometry(prof.map(([y, r]) => new Vector2(r * .97, y)), 48); const m = new Mesh(g, OCC); m.position.set(T[0], 0, T[1]); scene.add(m); occ.push(m); };
  { const pos = [];
    for (let i = 0; i < YLEV.length - 1; i++) { const A = ysec(YLEV[i], .96), B = ysec(YLEV[i + 1], .96);
      for (let k = 0; k < 9; k++) { const k2 = (k + 1) % 9; pos.push(...A[k], ...A[k2], ...B[k2], ...A[k], ...B[k2], ...B[k]); } }
    const g = new BufferGeometry(); g.setAttribute('position', new Float32BufferAttribute(pos, 3)); const m = new Mesh(g, OCC2); scene.add(m); occ.push(m); }
  lath(POD); lath([[80.4, 1.5], [94.4, 1.2]]); lath(SKY);

  // surroundings (static)
  const sg = new LineSegmentsGeometry(), sp = [], sc = [];
  for (const [a, b, f = 1] of STATIC) { sp.push(...a, ...b); const c = mixc(PAPER, FAINT, f); sc.push(...c, ...c); }
  sg.setPositions(sp); sg.setColors(sc);
  const smat = new LineMaterial({ vertexColors: true, linewidth: 1 });
  const sky = new LineSegments2(sg, smat); sky.frustumCulled = false; scene.add(sky);

  // everything that moves
  const N = SEG.length, mg = new LineSegmentsGeometry();
  mg.setPositions(new Float32Array(N * 6)); mg.setColors(new Float32Array(N * 6));
  const P = mg.attributes.instanceStart.data, Cc = mg.attributes.instanceColorStart.data;
  const mmat = new LineMaterial({ vertexColors: true, linewidth: 1.6 });
  const live = new LineSegments2(mg, mmat); live.frustumCulled = false; scene.add(live);

  // HTML layer: pins in the scene and two captions
  const layer = document.createElement('div'); layer.className = 't3-layer'; layer.setAttribute('aria-hidden', 'true');
  const pins = PINS.map(([part, p, label]) => { const e = document.createElement('span'); e.className = 't3-pin'; e.innerHTML = `<i></i><span><b>0${part}</b> ${label}</span>`; layer.append(e); return { e, part, p: new Vector3(...p) }; });
  const capA = document.createElement('p'); capA.className = 't3-cap t3-cap-a'; capA.textContent = 'Today · systems held together by workarounds';
  const capB = document.createElement('p'); capB.className = 't3-cap t3-cap-b'; capB.innerHTML = 'From legacy to <b>working AI</b>.';
  layer.append(capA, capB);
  win.append(cvs, layer); win.classList.add('is-3d'); chain.classList.add('t3-world');
  win.setAttribute('role', 'img');
  win.setAttribute('aria-label', 'Line drawing that changes as you scroll: the camera flies along a copper trace across one landscape. Each zone starts as tangled cables and becomes structure as its capability arrives: 01 Modernize rebuilds the core systems, 02 Connect wires CRM, ERP, accounting and the website to one hub, 03 Automate builds a work line from intake to delivery, 04 Understand raises a data tower beside a live report board, 05 Enable AI builds a knowledge core feeding everyday tools. The trace ends at the CN Tower, which forms as the camera pulls back. From legacy to working AI.');

  const outro = chain.querySelector('.stage-outro');
  const prog = el => { if (!el) return 0; const r = el.getBoundingClientRect(); return clamp((innerHeight * .82 - r.top) / (innerHeight * .42)); };

  let W = 0, H = 0, wide = false;
  const size = () => { const r = win.getBoundingClientRect(); W = Math.max(1, Math.round(r.width)); H = Math.max(1, Math.round(r.height));
    const dpr = Math.min(devicePixelRatio || 1, 2); renderer.setPixelRatio(dpr); renderer.setSize(W, H, false);
    cvs.style.width = W + 'px'; cvs.style.height = H + 'px'; cam.aspect = W / H;
    wide = W > 900 && W / H > 1.2;                                                  // text panel over the left of a full-width scene
    if (wide) cam.setViewOffset(W, H, -W * .16, 0, W, H); else cam.clearViewOffset();
    cam.updateProjectionMatrix(); smat.resolution.set(W, H); mmat.resolution.set(W, H); };

  let ps = [0, 0, 0, 0, 0], raf = 0;
  const v3 = new Vector3();
  function frame() {
    raf = 0;
    const p6 = reduce ? 1 : prog(outro);
    const pp = reduce ? [1, 1, 1, 1, 1, 1] : [...ps, p6];
    const f = pp.reduce((t, p) => t + p, 0);
    const [tg, of] = camAt(f), zoom = cam.aspect < 1 ? 1 + (1 - cam.aspect) * 1.1 : wide ? 1 : 1.15;
    cam.position.set(tg[0] + of[0] * zoom, tg[1] + of[1] * zoom, tg[2] + of[2] * zoom); cam.lookAt(tg[0], tg[1], tg[2]);

    const A = P.array, CA = Cc.array;
    for (let i = 0; i < N; i++) {
      const s = SEG[i], p = pp[s.part - 1], o = i * 6;
      const tgt = s.col === 'cu' ? CU : s.col === 'verd' ? VERD : s.col === 'faint' ? FAINT : INK;
      if (s.mode === 'grow') {
        const g = clamp(clamp((p - .05) / .8) * s.n - s.k);
        A.set(s.a, o); A.set(g > 0 ? lerp(s.a, s.b, g) : s.a, o + 3);
        const c = g > 0 ? tgt : PAPER; CA.set(c, o); CA.set(c, o + 3);
        continue;
      }
      const t = ease(clamp((p - s.s * .55) / .45)), lift = Math.sin(t * Math.PI) * 3;
      for (let j = 0; j < 3; j++) { A[o + j] = s.a0[j] + (s.a[j] - s.a0[j]) * t; A[o + 3 + j] = s.b0[j] + (s.b[j] - s.b0[j]) * t; }
      A[o + 1] += lift; A[o + 4] += lift;
      const c = t < .5 ? mixc(CORAL, CU, t * 2) : mixc(CU, tgt, (t - .5) * 2);
      CA.set(c, o); CA.set(c, o + 3);
    }
    P.needsUpdate = true; Cc.needsUpdate = true;
    const sct = ease(clamp((pp[5] - .75) / .25)); occ.forEach(m => { m.visible = sct > .02; m.scale.set(sct, 1, sct); });
    obm.forEach(m => { const v = ease(clamp((pp[m.userData.part - 1] - .8) / .2)); m.visible = v > .02; m.scale.set(v, v, v); });
    renderer.render(scene, cam);

    // pins: shown while the camera is at their zone
    pins.forEach(({ e, part, p }) => {
      v3.copy(p).project(cam); const x = (v3.x * .5 + .5) * W, y = (-v3.y * .5 + .5) * H;
      const near = Math.abs(f - (part - .2)) < .55 && pp[part - 1] > .6;
      const on = near && v3.z < 1 && x > 8 && x < W - 8 && y > 8 && y < H - 8;
      const flip = x + e.offsetWidth > W - 6;
      e.style.transform = `translate(${x.toFixed(1)}px,${y.toFixed(1)}px)` + (flip ? ' translateX(-100%)' : ''); e.classList.toggle('flip', flip); e.classList.toggle('on', on);
    });
    capA.classList.toggle('on', f < .3); capB.classList.toggle('on', pp[5] > .85);
  }
  const req = () => { if (!raf) raf = requestAnimationFrame(frame); };
  chain.addEventListener('chain:progress', e => { ps = e.detail; req(); });
  addEventListener('scroll', req, { passive: true });
  if (chain.__ps) ps = chain.__ps;
  new ResizeObserver(() => { size(); req(); }).observe(win);
  size(); req();
  return true;
}
