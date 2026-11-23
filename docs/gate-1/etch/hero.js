import { THREE, makeRenderer, renderEtch } from './etch.js';
import { ctx, wall, desk, rack, tree, rnd, seed } from './scene.js';

const P = new URLSearchParams(location.search);
const W = +(P.get('w') || 2400), H = +(P.get('h') || 1200), state = P.get('state') || 'asbuilt';
const scene = new THREE.Scene();
const C = ctx(scene);
seed(11);

const CORAL = 0xE39A72, VERD = 0x1F6B5C;
const T = .45; // wall thickness
// ground slab and plaza
C.box(-8, -.6, -8, 66, .6, 44, { cast: false });
// ---------- office block x 0..16, z 0..24, two floors ----------
wall(C, 'x', 0, 0, 16, 13.2, T, { y0: 1.6, y1: 5.2, n: 3, pier: .9 });          // back wall (z=0), lower windows
wall(C, 'x', 0, 0, 16, 0, T); // placeholder
C.box(0, 7.4, 0, 16, 0.01, T);
wall(C, 'z', 0, 0, 24, 13.2, T, { y0: 8.4, y1: 12.0, n: 4, pier: .9 });        // left wall (x=0), upper windows
C.box(0, 0, 0, T, 6.6, 24);                                                         // left wall lower solid
// upper floor slab, cut short at the front so the ground floor shows through
C.box(0, 6.6, 0, 16, .5, 17);
C.box(0, 6.6, 17, 16, .5, .01);
// front stub walls (cut section)
C.box(0, 0, 23.55, 16, 1.1, T); C.box(15.55, 0, 0, T, 1.1, 24);
C.box(15.55, 7.1, 0, T, 6.1, 9); // part of partition wall upstairs (back)
// stair
for (let i = 0; i < 12; i++) C.box(12, i * .55, 18 + i * .5, 3, .55, .5);
// ground floor: server closet back-left
C.box(T, 0, 6.5, 5, 6.6, .25); C.box(5.2, 0, T, .25, 6.6, 3.2); C.box(5.2, 0, 5.2, .25, 6.6, 1.55);
rack(C, 1.0, 0, 1.0, 5.4, 12); rack(C, 3.0, 0, 1.0, 5.4, 12);
// ground floor desks and a reception counter
desk(C, 7, 0, 2, 0); desk(C, 10.8, 0, 2, 0); desk(C, 7, 0, 9, Math.PI); desk(C, 2, 0, 12, 0, true);
C.box(6, 0, 15, 6, 2.2, 1.2); C.box(5.8, 2.2, 14.8, 6.4, .15, 1.6);
// cable tray under the upper slab
C.box(1, 6.1, 4.5, 14, .12, .9, { m: C.MAT2 });
// upper floor: desk cluster, meeting table, filing cabinets, legacy terminal
desk(C, 2, 7.1, 2, 0); desk(C, 5.6, 7.1, 2, 0); desk(C, 9.2, 7.1, 2, 0, true);
desk(C, 2, 7.1, 9, Math.PI); desk(C, 5.6, 7.1, 9, Math.PI);
C.box(9.5, 7.1, 9, 5, 1.5, 2.6); C.box(9.3, 8.6, 8.8, 5.4, .12, 3.0);
for (let i = 0; i < 4; i++) C.box(.5, 7.1, 13 + i * 1.0, 1.4, 2.6, .95);
for (let i = 0; i < 4; i++) for (let k = 0; k < 3; k++) C.box(1.9, 7.4 + k * .8, 13.15 + i * 1.0, .05, .08, .6, { m: C.MAT3 });
// paper stacks on the meeting table (manual work)
for (let i = 0; i < 3; i++) C.box(10.2 + i * 1.3, 8.72, 9.6, .9, .1 + i * .12, 1.2);
// ---------- warehouse x 16..40, z 0..24 ----------
wall(C, 'x', 0, 16, 40, 11.5, T, { y0: 8.6, y1: 10.6, n: 6, pier: .6 });
C.box(39.55, 0, 0, T, 1.3, 24);                // front-right stub (cut)
C.box(16, 0, 23.55, 24, 1.3, T);               // front stub
// roof trusses (open roof, a few members)
for (let i = 0; i < 3; i++) { const x = 22 + i * 7; C.box(x, 11.0, 0, .22, .35, 24, { m: C.MAT2 }); }
// pallet racking: 3 rows
for (let r = 0; r < 3; r++) {
  const z = 3 + r * 6.2;
  for (let i = 0; i < 6; i++) { const x = 18 + i * 3.4; C.box(x, 0, z, .18, 9, .18, { m: C.MAT2 }); C.box(x, 0, z + 1.9, .18, 9, .18, { m: C.MAT2 }); for (let b = 1; b < 9; b += 2.2) C.box(x, b, z + .2, .14, .1, 1.7, { m: C.MAT2 }); }
  for (const y of [0, 3, 6]) {
    C.box(18, y + 2.75, z, 17.2, .22, .14, { m: C.MAT2 }); C.box(18, y + 2.75, z + 1.95, 17.2, .22, .14, { m: C.MAT2 });
    for (let i = 0; i < 5; i++) { const x = 18.4 + i * 3.4; C.box(x, y + (y ? 2.97 : 0) , z + .15, 2.7, .25, 1.8);
      const nb = 1 + Math.floor(rnd() * 3);
      for (let b = 0; b < nb; b++) { const bw = .7 + rnd() * .6, bh = .5 + rnd() * 1.4; C.box(x + .1 + b * .9, y + (y ? 3.22 : .25), z + .25 + rnd() * .3, bw, bh, 1.2 + rnd() * .3); }
    }
  }
}
// forklift
C.box(30, .4, 20, 2.2, 1.4, 1.6); C.box(30.2, 1.8, 20.2, 1.4, .1, 1.2); for (const [a, b] of [[30, 20], [31.8, 20], [30, 21.4], [31.8, 21.4]]) C.box(a + .1, 1.8, b, .1, 1.6, .1, { m: C.MAT2 });
C.box(30.1, 3.4, 20, 1.8, .1, 1.6); C.box(29.4, 0, 20.1, .15, 4.2, 1.4, { m: C.MAT2 }); C.box(28.3, .1, 20.3, 1.1, .08, .3, { m: C.MAT2 }); C.box(28.3, .1, 21.0, 1.1, .08, .3, { m: C.MAT2 });
C.cyl(30.5, 0, 20, .4, .25, { rotX: Math.PI / 2, m: C.MAT3 }); C.cyl(31.8, 0, 20, .4, .25, { rotX: Math.PI / 2, m: C.MAT3 });
// loose pallets on the floor (receiving)
for (let i = 0; i < 4; i++) { C.box(34 + (i % 2) * 2.6, 0, 19.5 + Math.floor(i / 2) * 2.2, 2.2, .25, 1.8); C.box(34.2 + (i % 2) * 2.6, .25, 19.7 + Math.floor(i / 2) * 2.2, 1.6, .6 + rnd(), 1.3); }
// truck at the dock, outside right
C.box(41.5, .9, 3, 13, 4.6, 4.4); C.box(55, .9, 3.2, 3.6, 3.4, 4.0); C.box(55.6, 2.6, 7.2, 2.6, 1.3, .05, { m: C.MAT3 });
for (const x of [44, 46.4, 56.5]) { C.cyl(x, .0, 3.0, .9, .4, { rotX: Math.PI / 2, m: C.MAT3 }); C.cyl(x, .0, 7.4, .9, .4, { rotX: Math.PI / 2, m: C.MAT3 }); }
// trees, leafless, like an architect's site plan
tree(C, -5, 4, 15, 5); tree(C, -4, 17, 12, 5); tree(C, 6, -5, 11, 5); tree(C, 30, -5, 14, 5); tree(C, 46, -4, 10, 5);

// ---------- the systems and how they are joined ----------
const accent = (m, c, a = 1) => { m.userData.accent = c; m.userData.accentAlpha = a; return m; };
if (state === 'asbuilt') {
  // tangled hand-made connections: coral
  const mess = [
    [[2, 5.4, 3], [4, 6.2, 5], [8, 6.4, 6], [12, 6.0, 5.5], [15.4, 6.3, 6], [20, 8.8, 4], [26, 9.6, 3.2], [34, 9.8, 3.4]],
    [[3.8, 5.4, 3], [6, 6.5, 8], [7.5, 7.0, 10], [7.5, 8.6, 10.5], [6, 8.0, 3]],
    [[3.0, 2.0, 12.6], [5, 1.5, 14], [9, 2.3, 15.6], [14, 1.0, 13], [17, .3, 12], [24, .3, 15], [31, .5, 19.5]],
    [[10.5, 8.7, 10.2], [12.5, 9.3, 12], [15, 10.5, 11], [18, 11.6, 9], [24, 11.2, 12], [30, 10.2, 10], [36, 10.5, 15]],
    [[9.8, 8.8, 3.0], [12, 9.8, 4], [14.2, 8.5, 6.5], [13, 7.4, 8], [11, 8.0, 6], [9.6, 8.8, 3.3]],
  ];
  mess.forEach((pts, i) => accent(C.tube(pts.map(p => [p[0] + (rnd() - .5) * .4, p[1], p[2] + (rnd() - .5) * .4]), .09), CORAL, .9));
  // loose paper on desks, sticky printouts
  for (let i = 0; i < 9; i++) C.box(2 + rnd() * 11, 8.6 + (i % 2) * .02, 2.2 + rnd() * 1.0, .5, .02, .7);
} else {
  // redrafted: one integration spine (verdigris) along the cable tray, branches to each area
  const spine = [[1.6, 5.8, 3], [8, 6.0, 4.9], [15.4, 6.0, 4.9], [20, 9.6, 2.2], [38, 9.6, 2.2]];
  accent(C.tube(spine, .22, { m: C.MAT }), VERD, 1);
  [[[8, 6.0, 4.9], [8, 6.6, 4.9], [8, 7.2, 3.2], [7, 8.7, 2.6]], [[12, 6.0, 4.9], [12, 6.7, 6], [11.8, 8.7, 9.5]], [[26, 9.6, 2.2], [26, 9.6, 3.6], [26, 9.1, 4]], [[34, 9.6, 2.2], [34, 9.6, 9.5], [34, 9.1, 10]], [[4, 5.8, 3], [3.2, 4, 9], [3, 2.6, 12.6]]]
    .forEach(p => accent(C.tube(p, .12, { m: C.MAT }), VERD, 1));
  // the legacy CRT desk upstairs replaced by a slim screen: overlay marker
}

// lights and camera
scene.add(new THREE.AmbientLight(0xffffff, +(P.get("amb")||1.35)));
const sun = new THREE.DirectionalLight(0xffffff, +(P.get("sun")||4.6)); sun.position.set(-30, 60, 25); sun.target.position.set(20, 0, 12);
sun.castShadow = true; sun.shadow.mapSize.set(4096, 4096); const sc = sun.shadow.camera; sc.left = -50; sc.right = 50; sc.top = 50; sc.bottom = -50; sc.near = 1; sc.far = 200; sun.shadow.bias = -.0006;
scene.add(sun, sun.target);
const fr = +(P.get('fr') || 30), aspect = W / H;
const cam = new THREE.OrthographicCamera(-fr * aspect, fr * aspect, fr, -fr, 1, 400);
const tgt = new THREE.Vector3(+(P.get('tx') || 24), +(P.get('ty') || 4), +(P.get('tz') || 10));
cam.position.copy(tgt).add(new THREE.Vector3(.9, .82, 1.0).normalize().multiplyScalar(160)); cam.lookAt(tgt); cam.updateProjectionMatrix();

const r = makeRenderer(W, H);
renderEtch(r, scene, cam, { spacing: +(P.get('sp') || 5.2), edgeW: 1.3, hatchGain: +(P.get("hg")||1.0), dbg: +(P.get('dbg')||0) });
window.__done = true;
