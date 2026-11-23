/* AI Alchemy: the capabilities tower, scrubbed by scroll.
   Starts on a low skyline knotted with tangled cables (how a business runs today). Each capability takes a bundle
   of that tangle and pulls it into one part of a single tower: 01 Modernize the base, 02 Connect the shaft and the
   links from every building, 03 Automate the main deck, 04 Understand the upper deck, 05 Enable AI the mast.
   The camera rises and pulls back until the whole tower stands. Lines only, in the site's pencil and copper.
   Source for assets/tower3d.js (bundled with tools/tower3d/build.sh). */
import { WebGLRenderer, Scene, PerspectiveCamera, Vector3, Vector2, Mesh, MeshBasicMaterial, LatheGeometry, BoxGeometry, CylinderGeometry } from 'three';
import { LineSegments2 } from 'three/examples/jsm/lines/LineSegments2.js';
import { LineSegmentsGeometry } from 'three/examples/jsm/lines/LineSegmentsGeometry.js';
import { LineMaterial } from 'three/examples/jsm/lines/LineMaterial.js';

const hex = h => [parseInt(h.slice(1, 3), 16) / 255, parseInt(h.slice(3, 5), 16) / 255, parseInt(h.slice(5, 7), 16) / 255];
const INK = hex('#2C3036'), FAINT = hex('#9A9890'), CORAL = hex('#D9805A'), CU = hex('#B5703F'), VERD = hex('#1F6B5C');
const clamp = v => v < 0 ? 0 : v > 1 ? 1 : v;
const ease = t => t * t * (3 - 2 * t);
const mixc = (a, b, t) => [a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t, a[2] + (b[2] - a[2]) * t];
let seed = 7; const rnd = () => (seed = (seed * 16807) % 2147483647) / 2147483647;

/* ---------------- geometry: lists of segments ---------------- */
const SEG = [];          // {a:[x,y,z], b:[x,y,z], part, col, mode, s}
const STATIC = [];       // skyline: [a, b, col]
const add = (a, b, part, col = 'ink', mode = 'morph') => SEG.push({ a, b, part, col, mode, s: 0 });
const poly = (pts, part, col, mode, closed = false) => { for (let i = 0; i < pts.length - (closed ? 0 : 1); i++) add(pts[i], pts[(i + 1) % pts.length], part, col, mode); };
const ring = (y, r, n = 48) => { const p = []; for (let i = 0; i < n; i++) { const a = i / n * Math.PI * 2; p.push([Math.cos(a) * r, y, Math.sin(a) * r]); } return p; };
const at = (r, a, y) => [Math.cos(a) * r, y, Math.sin(a) * r];

/* profile helper: rings at each profile point and meridians between them */
function lathe(prof, part, n, meridians, col = 'ink') {
  prof.forEach(([y, r]) => poly(ring(y, r, n), part, col, 'morph', true));
  for (let m = 0; m < meridians; m++) { const a = m / meridians * Math.PI * 2; poly(prof.map(([y, r]) => at(r, a, y)), part, col); }
}

// 01 Modernize: the base. Three buttress legs on a round plinth, a core between them.
const LEG = [Math.PI / 2, Math.PI / 2 + 2 * Math.PI / 3, Math.PI / 2 + 4 * Math.PI / 3];
poly(ring(0, 13, 64), 1, 'ink', 'morph', true); poly(ring(.8, 13, 64), 1, 'ink', 'morph', true);
for (const a of LEG) {
  const w = .9, nx = -Math.sin(a), nz = Math.cos(a);
  const edge = (r, y, side) => [Math.cos(a) * r + nx * w * side, y, Math.sin(a) * r + nz * w * side];
  for (const side of [-1, 1]) poly([edge(11.5, .8, side), edge(7, 6, side), edge(3.6, 13, side), edge(2.6, 16, side)], 1);
  for (let k = 0; k <= 12; k++) { const t = k / 12, y = .8 + t * 15.2, r = t < .34 ? 11.5 - t / .34 * 4.5 : t < .8 ? 7 - (t - .34) / .46 * 3.4 : 3.6 - (t - .8) / .2 * 1; add(edge(r, y, -1), edge(r, y, 1), 1); add(edge(r, y, 1), edge(2.4, y, 1), 1, 'faint'); }
}
for (let y = .8; y <= 16; y += 2.4) poly(ring(y, 2.9, 24), 1, 'ink', 'morph', true);

// 02 Connect: the shaft, with one copper riser, and copper links reaching it from the buildings around.
const shaftR = y => 2.9 - (y - 16) / 36 * .6;
for (let y = 16; y <= 52; y += 2) poly(ring(y, shaftR(y), 24), 2, 'ink', 'morph', true);
for (let m = 0; m < 6; m++) { const a = m / 6 * Math.PI * 2 + Math.PI / 2; poly([16, 25, 34, 43, 52].map(y => at(shaftR(y), a, y)), 2); }
poly([16, 24, 32, 40, 48, 52].map(y => at(shaftR(y) + .06, Math.PI * 1.75, y)), 2, 'cu');

// skyline: low blocks around the base, never moving. Each keeps a doorway for a copper link.
const BLD = [];
for (let i = 0; i < 30; i++) {
  const a = rnd() * Math.PI * 2, r = 20 + rnd() * 46, w = 4 + rnd() * 7, d = 4 + rnd() * 7, h = 3 + rnd() * rnd() * 16;
  const x = Math.cos(a) * r, z = Math.sin(a) * r;
  if (BLD.some(b => Math.abs(b.x - x) < (b.w + w) / 2 + 1.5 && Math.abs(b.z - z) < (b.d + d) / 2 + 1.5)) continue;
  BLD.push({ x, z, w, d, h });
}
for (const { x, z, w, d, h } of BLD) {
  const X0 = x - w / 2, X1 = x + w / 2, Z0 = z - d / 2, Z1 = z + d / 2;
  const c = [[X0, Z0], [X1, Z0], [X1, Z1], [X0, Z1]];
  for (let i = 0; i < 4; i++) { const [p, q] = c[i], [r2, s2] = c[(i + 1) % 4]; STATIC.push([[p, 0, q], [r2, 0, s2]], [[p, h, q], [r2, h, s2]]); STATIC.push([[p, 0, q], [p, h, q]]); }
  for (let y = 3; y < h - .5; y += 3) for (let i = 0; i < 4; i++) { const [p, q] = c[i], [r2, s2] = c[(i + 1) % 4]; STATIC.push([[p, y, q], [r2, y, s2], .45]); }
}
// links: from the nearer buildings to the plinth, each an L-shaped run on the ground (drawn on, not morphed)
const near = BLD.slice().sort((p, q) => Math.hypot(p.x, p.z) - Math.hypot(q.x, q.z)).slice(0, 9);
near.forEach(({ x, z, h }) => {
  const a = Math.atan2(z, x), r = Math.hypot(x, z);
  const p0 = [x, Math.min(h, 2.4), z], p1 = [x, .25, z], p2 = at(r * .62, a + .12, .25), p3 = at(13.2, a + .05, .25), p4 = at(3, a + .05, 1.4);
  [p0, p1, p2, p3, p4].slice(0, -1).forEach((p, k, arr) => { add(p, [p1, p2, p3, p4][k], 2, 'cu', 'grow'); SEG[SEG.length - 1].k = k; });
});

// 03 Automate: the main deck, where the work turns
const POD = [[52, 2.3], [53.4, 6.2], [54.6, 9.2], [56, 10.6], [57.6, 10.9], [59, 10.4], [60.2, 8], [61.2, 4.6], [62, 2.2]];
lathe(POD, 3, 72, 28);
for (let i = 0; i < 96; i++) { const a = i / 96 * Math.PI * 2; add(at(10.7, a, 56.2), at(10.85, a, 57.4), 3, 'faint'); }
poly(ring(57.6, 10.95, 96), 3, 'cu', 'morph', true);

// 04 Understand: the upper shaft and the lookout deck
const shaft2 = y => 2.2 - (y - 62) / 18 * .5;
for (let y = 62; y <= 80; y += 2) poly(ring(y, shaft2(y), 20), 4, 'ink', 'morph', true);
for (let m = 0; m < 6; m++) { const a = m / 6 * Math.PI * 2 + Math.PI / 2; add(at(shaft2(62), a, 62), at(shaft2(80), a, 80), 4); }
lathe([[78, 1.8], [79, 4], [80.4, 4.6], [81.6, 4.4], [82.4, 3], [83, 1.5]], 4, 48, 18);
poly(ring(80.4, 4.65, 64), 4, 'cu', 'morph', true);

// 05 Enable AI: a lattice mast, and the signal at the top
const mastR = y => 1.5 - (y - 83) / 33 * 1.25, MT = 116;
for (let k = 0; k < 3; k++) { const a = k / 3 * Math.PI * 2 + Math.PI / 2; poly([83, 94, 105, MT].map(y => at(mastR(y), a, y)), 5); }
for (let y = 83; y < MT - 1; y += 2.2) { const p = ring(y, mastR(y), 3).map(([x, , z]) => { const a = Math.atan2(z, x) + Math.PI / 2; return at(mastR(y), a, y); }); poly(p, 5, 'ink', 'morph', true);
  const q = ring(y + 2.2, mastR(y + 2.2), 3).map(([x, , z]) => at(mastR(y + 2.2), Math.atan2(z, x) + Math.PI / 2, y + 2.2)); for (let i = 0; i < 3; i++) add(p[i], q[(i + 1) % 3], 5, 'faint'); }
add([0, 83, 0], [0, MT + 4, 0], 5, 'cu');
for (let i = 0; i < 8; i++) { const a = i / 8 * Math.PI * 2, r0 = .9, r1 = i % 2 ? 2.2 : 3.6; add([Math.cos(a) * r0, MT + 4 + Math.sin(a) * r0, 0], [Math.cos(a) * r1, MT + 4 + Math.sin(a) * r1, 0], 5, 'verd'); }
poly(ring(MT + 4, 1.4, 20).map(([x, , z]) => [x, MT + 4 + z, 0]), 5, 'verd', 'morph', true);

/* ---------------- the tangle: where every morphing segment starts ---------------- */
// Cables strung between the buildings and around the base, sagging and looping. Each part's segments are laid along
// its own bundle of cables in order, so at the start the tower IS the tangle.
function cable(A, B, sag, loops) {
  const pts = [], n = 40, f = 2 + rnd() * 5, ph = rnd() * 6, amp = .6 + rnd() * 1.8;
  for (let i = 0; i <= n; i++) { const t = i / n, w = Math.sin(t * Math.PI);
    pts.push([A[0] + (B[0] - A[0]) * t + Math.cos(t * f * 6.28 + ph) * amp * w * loops, A[1] + (B[1] - A[1]) * t - sag * w + Math.sin(t * f * 9 + ph) * amp * .6 * w, A[2] + (B[2] - A[2]) * t + Math.sin(t * f * 6.28 + ph) * amp * w * loops]); }
  return pts;
}
const anchor = () => { if (rnd() < .3) return at(3 + rnd() * 10, rnd() * 6.28, rnd() * 5); const b = near[Math.floor(rnd() * near.length)] || BLD[0]; return [b.x + (rnd() - .5) * b.w, Math.min(b.h, 1 + rnd() * b.h), b.z + (rnd() - .5) * b.d]; };
for (let part = 1; part <= 5; part++) {
  const segs = SEG.filter(s => s.part === part && s.mode === 'morph');
  const L = segs.reduce((t, s) => t + Math.hypot(s.b[0] - s.a[0], s.b[1] - s.a[1], s.b[2] - s.a[2]), 0);
  const cables = []; let C = 0;
  while (C < 520 || cables.length < 5) { const A = anchor(), B = anchor(); if (Math.hypot(A[0] - B[0], A[2] - B[2]) < 6) continue;
    const c = cable(A, B, 1 + rnd() * 4, .4 + rnd()); for (let i = 1; i < c.length; i++) C += Math.hypot(c[i][0] - c[i - 1][0], c[i][1] - c[i - 1][1], c[i][2] - c[i - 1][2]); cables.push(c); }
  const k = C / L; let ci = 0, pi = 0, rem = 0;
  const step = len => { // walk len along the cables, return the point reached
    let d = len;
    while (true) { const c = cables[ci], p = c[pi], q = c[pi + 1]; const sl = Math.hypot(q[0] - p[0], q[1] - p[1], q[2] - p[2]);
      if (rem + d <= sl) { rem += d; const t = rem / sl; return [p[0] + (q[0] - p[0]) * t, Math.max(.05, p[1] + (q[1] - p[1]) * t), p[2] + (q[2] - p[2]) * t]; }
      d -= sl - rem; rem = 0; pi++; if (pi >= c.length - 1) { pi = 0; ci = (ci + 1) % cables.length; return null; } }
  };
  let cur = cables[0][0];
  const ys = segs.map(s => (s.a[1] + s.b[1]) / 2), y0 = Math.min(...ys), y1 = Math.max(...ys);
  segs.forEach((s, i) => {
    const len = Math.hypot(s.b[0] - s.a[0], s.b[1] - s.a[1], s.b[2] - s.a[2]) * k;
    let nx = step(len); if (!nx) { cur = cables[ci][0]; nx = step(len) || cur; }
    s.a0 = cur; s.b0 = nx; cur = nx;
    s.s = ((ys[i] - y0) / Math.max(1, y1 - y0)) * .7 + rnd() * .3;   // lower first, a little scatter
  });
}

/* ---------------- scene ---------------- */
export function mount(win, chain) {
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  let renderer;
  try { renderer = new WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'low-power' }); } catch (e) { return false; }
  if (!renderer.getContext()) return false;
  renderer.setClearColor(0x000000, 0);
  const cvs = renderer.domElement; cvs.className = 't3-canvas'; cvs.setAttribute('aria-hidden', 'true');
  const scene = new Scene(), cam = new PerspectiveCamera(30, 1, 1, 2000);

  // occluders: paper that is never drawn, so lines behind solids are hidden
  const OCC = new MeshBasicMaterial({ colorWrite: false, polygonOffset: true, polygonOffsetFactor: 2, polygonOffsetUnits: 2 });
  for (const { x, z, w, d, h } of BLD) { const m = new Mesh(new BoxGeometry(w, h, d), OCC); m.position.set(x, h / 2, z); scene.add(m); }
  const occ = [];
  const lath = (prof, part) => { const g = new LatheGeometry(prof.map(([y, r]) => new Vector2(r * .97, y)), 48); const m = new Mesh(g, OCC); m.userData.part = part; scene.add(m); occ.push(m); };
  lath([[0, 2.85], [16, 2.85]], 1); lath([[16, 2.8], [52, 2.2]], 2); lath(POD, 3); lath([[62, 2.15], [80, 1.65]], 4); lath([[78, 1.8], [79, 4], [80.4, 4.6], [81.6, 4.4], [82.4, 3], [83, 1.5]], 4);
  { const m = new Mesh(new CylinderGeometry(13, 13, .8, 64), OCC); m.position.y = .4; m.userData.part = 1; scene.add(m); occ.push(m); }

  // skyline (static)
  const sg = new LineSegmentsGeometry(), sp = [], sc = [];
  for (const [a, b, f = 1] of STATIC) { sp.push(...a, ...b); const c = mixc([.95, .93, .89], FAINT, f); sc.push(...c, ...c); }
  for (const R of [18, 30, 46, 64]) { const p = ring(0, R, 96); for (let i = 0; i < p.length; i++) { const c = mixc([.95, .93, .89], FAINT, .35); sp.push(...p[i], ...p[(i + 1) % p.length]); sc.push(...c, ...c); } }
  sg.setPositions(sp); sg.setColors(sc);
  const smat = new LineMaterial({ vertexColors: true, linewidth: 1 });
  const sky = new LineSegments2(sg, smat); sky.frustumCulled = false; scene.add(sky);

  // the tower (moving)
  const N = SEG.length, mg = new LineSegmentsGeometry();
  mg.setPositions(new Float32Array(N * 6)); mg.setColors(new Float32Array(N * 6));
  const P = mg.attributes.instanceStart.data, Cc = mg.attributes.instanceColorStart.data;
  const mmat = new LineMaterial({ vertexColors: true, linewidth: 1.35 });
  const tow = new LineSegments2(mg, mmat); tow.frustumCulled = false; scene.add(tow);

  // HTML layer: five labels and two captions
  const layer = document.createElement('div'); layer.className = 't3-layer'; layer.setAttribute('aria-hidden', 'true');
  const NAMES = ['Modernize', 'Connect', 'Automate', 'Understand', 'Enable AI'];
  const lbl = NAMES.map((n, i) => { const e = document.createElement('span'); e.className = 't3-lbl'; e.innerHTML = `<b>0${i + 1}</b>${n}`; layer.append(e); return e; });
  const capA = document.createElement('p'); capA.className = 't3-cap t3-cap-a'; capA.textContent = 'Today · systems held together by workarounds';
  const capB = document.createElement('p'); capB.className = 't3-cap t3-cap-b'; capB.innerHTML = 'From legacy to <b>working AI</b>.';
  layer.append(capA, capB);
  const ANCH = [[9.5, 4.5], [shaftR(34), 34], [10.9, 57.6], [4.6, 80.4], [.6, 108]];   // radius, height on the right silhouette
  win.append(cvs, layer); win.classList.add('is-3d');
  win.setAttribute('role', 'img');
  win.setAttribute('aria-label', 'Line drawing that changes as you scroll: low buildings tangled together with cables are pulled, one capability at a time, into a single tower. 01 Modernize forms the base, 02 Connect the shaft and copper links from every building, 03 Automate the main deck, 04 Understand the upper deck, 05 Enable AI the mast. From legacy to working AI.');

  let W = 0, H = 0;
  const size = () => { const r = win.getBoundingClientRect(); W = Math.max(1, Math.round(r.width)); H = Math.max(1, Math.round(r.height));
    const dpr = Math.min(devicePixelRatio || 1, 2); renderer.setPixelRatio(dpr); renderer.setSize(W, H, false);
    cvs.style.width = W + 'px'; cvs.style.height = H + 'px'; cam.aspect = W / H; cam.updateProjectionMatrix();
    smat.resolution.set(W, H); mmat.resolution.set(W, H); };

  // camera keys over f (0..5): look target height, distance, elevation (rad), turn (rad)
  const KEYS = [[0, 6, 86, .2, .5], [1, 12, 92, .17, .62], [2, 28, 118, .12, .78], [3, 50, 132, .08, .92], [4, 66, 160, .06, 1.04], [5, 60, 1, .05, 1.14]];
  const keyAt = f => { const i = Math.min(4, Math.floor(f)), t = ease(f - i), a = KEYS[i], b = KEYS[i + 1]; return a.map((v, j) => v + (b[j] - v) * t); };
  const fitD = () => { const v = Math.tan(cam.fov * Math.PI / 360), hNeed = 132, wNeed = 70; return Math.max(hNeed / 2 / v, wNeed / 2 / (v * cam.aspect)) * 1.04; };

  let ps = [0, 0, 0, 0, 0], fShown = -1, raf = 0;
  const v3 = new Vector3();
  function frame() {
    raf = 0;
    const f = reduce ? 5 : ps.reduce((t, p) => t + p, 0);
    const pp = reduce ? [1, 1, 1, 1, 1] : ps;
    const k = keyAt(f); let dist = k[2];
    if (f > 4) dist = 160 + (fitD() - 160) * ease(f - 4);
    if (f <= 4 && cam.aspect < 1) dist *= 1 + (1 - cam.aspect) * .7;
    const ty = k[1], el = k[3], az = k[4];
    cam.position.set(Math.cos(az) * Math.cos(el) * dist, ty + Math.sin(el) * dist, Math.sin(az) * Math.cos(el) * dist);
    cam.lookAt(0, ty, 0);

    // segments
    const A = P.array, CA = Cc.array;
    for (let i = 0; i < N; i++) {
      const s = SEG[i], p = pp[s.part - 1], o = i * 6;
      const tgt = s.col === 'cu' ? CU : s.col === 'verd' ? VERD : s.col === 'faint' ? FAINT : INK;
      if (s.mode === 'grow') {
        const g = clamp(clamp((p - .1) / .75) * 4 - s.k);
        const e = [s.a[0] + (s.b[0] - s.a[0]) * g, s.a[1] + (s.b[1] - s.a[1]) * g, s.a[2] + (s.b[2] - s.a[2]) * g];
        A.set(s.a, o); A.set(g > 0 ? e : s.a, o + 3);
        const c = g > 0 ? CU : [0, 0, 0]; CA.set(c, o); CA.set(c, o + 3);
        continue;
      }
      const t = ease(clamp((p - s.s * .55) / .45)), lift = Math.sin(t * Math.PI) * 4;
      for (let j = 0; j < 3; j++) { A[o + j] = s.a0[j] + (s.a[j] - s.a0[j]) * t; A[o + 3 + j] = s.b0[j] + (s.b[j] - s.b0[j]) * t; }
      A[o + 1] += lift; A[o + 4] += lift;
      const c = t < .5 ? mixc(CORAL, CU, t * 2) : mixc(CU, tgt, (t - .5) * 2);
      CA.set(c, o); CA.set(c, o + 3);
    }
    P.needsUpdate = true; Cc.needsUpdate = true;
    occ.forEach(m => { const p = pp[m.userData.part - 1]; const sc = ease(clamp((p - .75) / .25)); m.visible = sc > .02; m.scale.set(sc, 1, sc); });

    renderer.render(scene, cam);

    // labels
    const right = new Vector3().subVectors(new Vector3(0, ty, 0), cam.position).cross(cam.up).normalize();
    lbl.forEach((e, i) => {
      const [r, y] = ANCH[i];
      const px = sgn => { v3.set(right.x * r * sgn, y, right.z * r * sgn).project(cam); return [(v3.x * .5 + .5) * W, (-v3.y * .5 + .5) * H]; };
      let [x, yy] = px(1); const flip = x + 14 + e.offsetWidth > W - 4; if (flip) [x, yy] = px(-1);
      const on = pp[i] >= .6 && yy > 8 && yy < H - 8;
      e.style.transform = `translate(${(flip ? x - 12 : x + 12).toFixed(1)}px,${yy.toFixed(1)}px) translate(${flip ? '-100%' : '0'},-50%)`;
      e.classList.toggle('flip', flip); e.classList.toggle('on', on);
    });
    capA.classList.toggle('on', f < .5); capB.classList.toggle('on', f > 4.75);
    fShown = f;
  }
  const req = () => { if (!raf) raf = requestAnimationFrame(frame); };
  chain.addEventListener('chain:progress', e => { ps = e.detail; req(); });
  if (chain.__ps) ps = chain.__ps;
  new ResizeObserver(() => { size(); req(); }).observe(win);
  size(); req();
  return true;
}
