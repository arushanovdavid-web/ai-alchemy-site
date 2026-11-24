// "Better tools. Stronger capabilities." One continuous mechanism in five stages.
// on=0..5: how many stages the copper pulse has activated (earlier stages stay active).
import { THREE, makeRenderer, renderEtch } from './etch.js';
import { ctx, desk, rack, seed, rnd } from './scene.js';
const P = new URLSearchParams(location.search);
const W = +(P.get('w') || 2816), H = +(P.get('h') || 1100), ON = +(P.get('on') ?? 5);
const scene = new THREE.Scene();
const G = new THREE.Group(); G.rotation.y = +(P.get('rot') || 0.62); scene.add(G);
let C = ctx(G); seed(3);
const COPPER = 0xB5703F;
const act = (m, stage, a = .95) => { if (stage <= ON) { m.userData.accent = COPPER; m.userData.accentAlpha = a; } return m; };
const sphere = (x, y, z, r, o = {}) => { const m = C.add(new THREE.Mesh(new THREE.SphereGeometry(r, 20, 14), o.m || C.MAT), o); m.position.set(x, y, z); return m; };
const rod = (a, b, r, o = {}) => { const A = new THREE.Vector3(...a), B = new THREE.Vector3(...b), d = B.clone().sub(A); const m = C.add(new THREE.Mesh(new THREE.CylinderGeometry(r, r, d.length(), 10), o.m || C.MAT2), o); m.position.copy(A).addScaledVector(d, .5); m.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), d.normalize()); return m; };
// gear: disc facing +z with teeth
const gear = (x, y, z, r, th, n, o = {}) => {
  const g = C.cyl(x, y - th / 2, z, r, th, { rotX: Math.PI / 2, seg: 40, m: o.m });
  g.position.set(x, y, z + th / 2);
  for (let i = 0; i < n; i++) { const a = i / n * Math.PI * 2; const t = C.box(0, 0, 0, r * .22, r * .2, th, { m: o.m }); t.position.set(x + Math.cos(a) * (r + r * .08), y + Math.sin(a) * (r + r * .08), z + th / 2); t.rotation.z = a; }
  C.cyl(x, y, z + th, r * .22, th * .6, { rotX: Math.PI / 2, m: C.MAT2 }).position.set(x, y, z + th + th * .3);
  return g;
};
const lamp = (x, z, stage) => { rod([x, .6, z], [x, 2.6, z], .06); act(sphere(x, 2.8, z, .26), stage, 1); };

// long plinth and the conduit that carries the pulse
C.box(-2, 0, -2, 70, .6, 12, { cast: false });
C.box(-40, -.6, -40, 140, .6, 100, { cast: false });
const conduit = (x0, x1, stage) => act(C.tube([[x0, 1.0, 8.6], [x1, 1.0, 8.6]], .16, { m: C.MAT2 }), stage);
for (let s = 0; s < 5; s++) { conduit(s * 12.4 - .4, s * 12.4 + (s === 4 ? 16.4 : 12.0), s + 1); if (s === 4) continue; C.box(s * 12.4 + 11.6, .6, 8.1, .9, .9, 1.0); } // junction boxes between stages

// ---- 1 Modernize: an old geared machine, belted to a new motor
C.box(.6, .6, 1.0, 5.0, 3.6, 3.0); C.box(.4, 4.2, .8, 5.4, .2, 3.4);                  // cast housing
for (let i = 0; i < 4; i++) C.box(.9 + i * 1.2, 1.2, 3.98, .8, .5, .06, { m: C.MAT3 });  // vents
gear(3.0, 3.2, 4.0, 1.7, .35, 18); gear(5.9, 1.9, 4.0, .9, .35, 11); gear(6.2, 4.4, 4.0, .6, .3, 9);
C.box(7.6, .6, 2.0, 2.4, 1.8, 2.2); C.cyl(8.8, 1.2, 4.2, .45, .5, { rotX: Math.PI / 2 });       // new motor
act(C.tube([[3.0, 5.05, 4.55], [6.2, 5.15, 4.55], [8.9, 2.1, 4.6], [8.8, 1.0, 4.6], [5.9, .9, 4.55], [3.0, 1.35, 4.55], [1.15, 3.2, 4.55], [3.0, 5.05, 4.55]], .07), 1);
lamp(10.6, 6.6, 1);
act(C.tube([[8.8, 1.6, 3.2], [9.6, 1.1, 6.0], [10.2, 1.0, 8.6]], .08), 1);

// ---- 2 Connect: three systems joined through one hub
const X2 = 12.4;
rack(C, X2 + 1.0, .6, .6, 4.4, 9); C.box(X2 + 4.2, .6, .4, 2.4, 3.0, 1.8); C.box(X2 + 4.4, 2.2, 2.2, 2.0, 1.0, .06, { m: C.MAT3 });
C.box(X2 + 8.0, .6, 2.6, 2.2, 2.4, 1.8); C.box(X2 + 8.2, 1.6, 4.4, 1.8, .8, .06, { m: C.MAT3 });
C.box(X2 + 5.0, .6, 6.0, 1.6, 1.4, 1.6); // hub
for (const [a, b] of [[[X2 + 5.4, 2.0, 6.4], [X2 + 1.8, 2.6, 2.6]], [[X2 + 5.8, 2.0, 6.4], [X2 + 5.4, 2.6, 2.2]], [[X2 + 6.2, 2.0, 6.6], [X2 + 9.0, 2.0, 4.4]]])
  act(C.tube([a, [(a[0] + b[0]) / 2, 3.4, (a[2] + b[2]) / 2], b], .07), 2);
act(C.tube([[X2 + 5.8, .9, 7.6], [X2 + 5.8, 1.0, 8.4]], .09), 2);
lamp(X2 + 11.0, 6.6, 2);

// ---- 3 Automate: a conveyor carries work to the right trays; an arm sorts it
const X3 = 24.8;
C.box(X3 + .4, 1.9, 3.0, 9.0, .25, 1.8, { m: C.MAT2 });
for (let i = 0; i < 10; i++) C.cyl(X3 + .8 + i * .92, 1.75, 3.0, .14, 1.8, { rotX: Math.PI / 2 }).position.set(X3 + .8 + i * .92, 1.8, 3.9);
for (const x of [X3 + .6, X3 + 9.0]) { C.box(x, .6, 3.1, .2, 1.3, .2, { m: C.MAT2 }); C.box(x, .6, 4.5, .2, 1.3, .2, { m: C.MAT2 }); }
for (let i = 0; i < 4; i++) C.box(X3 + 1.0 + i * 2.1, 2.15, 3.3 + rnd() * .3, 1.0 + rnd() * .3, .5 + rnd() * .4, 1.0);
C.cyl(X3 + 6.6, .6, 1.4, .5, .5); rod([X3 + 6.6, 1.1, 1.4], [X3 + 6.6, 3.6, 1.6], .16, { m: C.MAT });
rod([X3 + 6.6, 3.6, 1.6], [X3 + 7.4, 4.0, 3.6], .13, { m: C.MAT }); rod([X3 + 7.4, 4.0, 3.6], [X3 + 7.6, 3.1, 3.9], .1, { m: C.MAT });
sphere(X3 + 6.6, 3.6, 1.6, .24); sphere(X3 + 7.4, 4.0, 3.6, .2); C.box(X3 + 7.3, 2.85, 3.6, .6, .25, .6, { m: C.MAT2 });
for (let t = 0; t < 3; t++) { C.box(X3 + 9.6, .6 + t * .9, 2.0 + t * .0, 1.8, .12, 1.6, { m: C.MAT2 }); for (let k = 0; k < 3; k++) C.box(X3 + 9.7, .72 + t * .9 + k * .05, 2.1, 1.4, .04, 1.2); }
rod([X3 + 9.6, .6, 2.0], [X3 + 9.6, 2.6, 2.0], .05); rod([X3 + 11.4, .6, 2.0], [X3 + 11.4, 2.6, 2.0], .05);
act(C.tube([[X3 + 6.6, .9, 1.9], [X3 + 5.2, .8, 6.0], [X3 + 5.0, 1.0, 8.4]], .08), 3);
act(C.tube([[X3 + 6.7, 3.0, 1.5], [X3 + 7.1, 3.9, 2.6], [X3 + 7.5, 3.7, 3.7]], .05), 3);
lamp(X3 + 11.2, 6.6, 3);

// ---- 4 Understand: the activity resolves into charts on a drafting board
const X4 = 37.2;
const board = new THREE.Group(); board.position.set(X4 + 5.0, .6, 2.2); board.rotation.x = -.32; G.add(board);
const B = ctx(board);
B.box(-4, 1.2, -.12, 8, 5.0, .24);                                   // board
[1.0, 1.6, 1.3, 2.3, 2.0, 3.0, 3.6].forEach((h, i) => B.box(-3.4 + i * .62, 1.7, .12, .42, h * .9, .12, { m: B.MAT2 }));
const line = B.tube([[ .7, 2.4, .26], [1.4, 3.1, .26], [2.0, 2.8, .26], [2.7, 4.0, .26], [3.4, 5.2, .26]], .06); act(line, 4, 1);
B.box(-3.6, 1.55, .12, 3.0, .04, .1, { m: B.MAT3 }); B.box(.5, 1.55, .12, 3.2, .04, .1, { m: B.MAT3 });
rod([X4 + 1.4, .6, 2.0], [X4 + 1.6, 2.0, 2.4], .1); rod([X4 + 8.6, .6, 2.0], [X4 + 8.4, 2.0, 2.4], .1); rod([X4 + 5.0, .6, .4], [X4 + 5.0, 2.2, 1.9], .1);
for (let k = 0; k < 4; k++) C.box(X4 + 2.8 + k * .02, .6 + k * .04, 5.6 + k * .03, 1.6, .04, 2.0); // printed report, now a live view
act(C.tube([[X4 + 5.0, 1.0, 8.4], [X4 + 5.2, 1.2, 5.0], [X4 + 5.0, 2.4, 2.6]], .08), 4);
lamp(X4 + 11.2, 6.6, 4);

// ---- 5 Enable AI: an employee works with the connected knowledge through an assistant
const g5 = new THREE.Group(); g5.position.set(49.6, .6 - .6 * 1.4, 0); g5.scale.setScalar(1.4); G.add(g5); C = ctx(g5);
const X5 = 0;
const pv = new THREE.Group(); pv.position.set(3.5, 0, 2.6); pv.rotation.y = +(P.get('prot') || 0.9); g5.add(pv); const inner = new THREE.Group(); inner.position.set(-3.5, 0, -2.6); pv.add(inner); const C5 = C; C = ctx(inner);
desk(C, X5 + 2.0, .6, 1.4, 0);
C.box(X5 + 2.85, 2.72, 1.95, 1.3, .7, .03); // screen face (chat panel)
[[.15, .5], [.32, .7], [.5, .45]].forEach(([y, w], i) => act(C.box(X5 + 2.95 + (i % 2) * .35, 2.78 + y, 1.99, w, .1, .03, { m: C.MAT }), 5, 1));
// seated person, facing the screen (-z)
const px = X5 + 3.5, pz = 3.8, sy = .6 + 1.04;
C.cyl(px, sy, pz, .34, 1.05, { r2: .3, m: C.MAT }); sphere(px, sy + 1.4, pz - .05, .27, { m: C.MAT });
for (const s of [-1, 1]) {
  rod([px + s * .2, sy + .15, pz], [px + s * .22, sy + .15, pz - .9], .13, { m: C.MAT }); rod([px + s * .22, sy + .15, pz - .9], [px + s * .22, .65, pz - 1.0], .11, { m: C.MAT });
  rod([px + s * .38, sy + .95, pz], [px + s * .42, sy + .45, pz - .35], .09, { m: C.MAT }); rod([px + s * .42, sy + .45, pz - .35], [px + s * .25, sy + .5, pz - 1.05], .08, { m: C.MAT });
}
act(C.tube([[3.5, .65, 2.6], [3.2, .65, 1.4], [3.4, .7, 1.0], [3.5, 2.6, 1.0]], .06), 5);
C = C5;
C.box(X5 + 7.0, .6, 1.0, 1.4, 2.4, 1.4); C.box(X5 + 7.2, 3.0, 1.2, 1.0, .6, 1.0, { m: C.MAT2 }); // shelf of knowledge (binders)
for (let i = 0; i < 5; i++) C.box(X5 + 7.05 + i * .26, 3.0, 1.15, .22, .7 + rnd() * .2, 1.0);
act(C.tube([[X5 + 6.0, .7, 6.1], [X5 + 5.0, .65, 4.2], [X5 + 3.5, .65, 2.6]], .06), 5);
lamp(X5 + 9.6, 5.4, 5);

// light and camera
scene.add(new THREE.AmbientLight(0xffffff, 1.35));
const sun = new THREE.DirectionalLight(0xffffff, 4.6); sun.position.set(-20, 50, 30); sun.target.position.set(22, 0, -8);
sun.castShadow = true; sun.shadow.mapSize.set(4096, 4096); Object.assign(sun.shadow.camera, { left: -55, right: 55, top: 55, bottom: -55, near: 1, far: 200 }); sun.shadow.bias = -.0006;
scene.add(sun, sun.target);
const fr = +(P.get('fr') || 12), a = W / H;
const cam = new THREE.OrthographicCamera(-fr * a, fr * a, fr, -fr, 1, 400);
const tgt = new THREE.Vector3(+(P.get('tx') || 25), +(P.get('ty') || 2), +(P.get('tz') || -14));
cam.position.copy(tgt).add(new THREE.Vector3(.9, .82, 1.0).normalize().multiplyScalar(160)); cam.lookAt(tgt); cam.updateProjectionMatrix();
renderEtch(makeRenderer(W, H), scene, cam, { spacing: +(P.get('sp') || 4.2), edgeW: 1.3, hatchGain: +(P.get('hg') || 1.2) });
window.__done = true;
