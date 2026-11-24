// Four industry drawings, one recognizable workflow each, joined by a verdigris line (the connected flow).
// k = mfg | mortgage | hvac | services
import { THREE, makeRenderer, renderEtch } from './etch.js';
import { ctx, desk, rack, wall, tree, seed, rnd } from './scene.js';
const P = new URLSearchParams(location.search);
const W = +(P.get('w') || 1600), H = +(P.get('h') || 1000), K = P.get('k') || 'mfg';
const scene = new THREE.Scene(); let C = ctx(scene); seed(9);
const VERD = 0x1F6B5C;
const flow = (pts, r = .09) => { const m = C.tube(pts, r, { m: C.MAT }); m.userData.accent = VERD; m.userData.accentAlpha = 1; return m; };
const node = (x, y, z) => { const m = C.add(new THREE.Mesh(new THREE.SphereGeometry(.2, 16, 12), C.MAT)); m.position.set(x, y, z); m.userData.accent = VERD; m.userData.accentAlpha = 1; };
const sphere = (x, y, z, r, m = C.MAT) => { const s = C.add(new THREE.Mesh(new THREE.SphereGeometry(r, 18, 12), m)); s.position.set(x, y, z); return s; };
const rod = (a, b, r, m = C.MAT) => { const A = new THREE.Vector3(...a), B = new THREE.Vector3(...b), d = B.clone().sub(A); const o = C.add(new THREE.Mesh(new THREE.CylinderGeometry(r, r, d.length(), 10), m)); o.position.copy(A).addScaledVector(d, .5); o.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), d.normalize()); return o; };
// people: standing or seated, facing -z in local space, then rotated
function person(x, z, rot = 0, seated = false, y0 = 0) {
  const g = new THREE.Group(); g.position.set(x, y0, z); g.rotation.y = rot; scene.add(g); const S = C; C = ctx(g);
  if (seated) {
    const sy = 1.04; C.cyl(0, sy, 0, .34, 1.05, { r2: .3 }); sphere(0, sy + 1.4, -.05, .27);
    for (const s of [-1, 1]) { rod([s * .2, sy + .15, 0], [s * .22, sy + .15, -.9], .13); rod([s * .22, sy + .15, -.9], [s * .22, .05, -1.0], .11);
      rod([s * .38, sy + .95, 0], [s * .42, sy + .45, -.35], .09); rod([s * .42, sy + .45, -.35], [s * .25, sy + .5, -1.05], .08); }
  } else {
    C.cyl(0, 1.75, 0, .34, 1.15, { r2: .3 }); sphere(0, 3.2, 0, .27);
    for (const s of [-1, 1]) { rod([s * .18, 1.8, 0], [s * .2, .9, -.05], .14); rod([s * .2, .9, -.05], [s * .2, .05, 0], .12);
      rod([s * .4, 2.75, 0], [s * .48, 2.0, -.2], .09); rod([s * .48, 2.0, -.2], [s * .32, 1.9, -.6], .08); }
  }
  C = S; return g;
}
const slab = (x0, z0, w, d) => { C.box(x0, -.5, z0, w, .5, d, { cast: false }); C.box(-60, -1.0, -60, 160, .5, 140, { cast: false }); };
let cam = { tx: 10, ty: 2, tz: 6, fr: 9 };

if (K === 'mfg') { // order desk -> production cell -> racking -> dock
  slab(-2, -7, 36, 15);
  desk(C, 0, 0, 1, 0); person(1.5, 3.3, 0, true);
  // production cell: machine with hopper, conveyor out
  C.box(6, 0, 1, 3.4, 3.0, 2.6); C.box(6.6, 3.0, 1.4, 2.2, .9, 1.8, { m: C.MAT2 }); C.box(6.9, 3.9, 1.6, 1.6, .9, 1.4);
  C.box(6.2, 1.2, 3.62, 1.0, .8, .05, { m: C.MAT3 }); C.cyl(8.6, 1.6, 3.6, .25, .3, { rotX: Math.PI / 2 });
  C.box(9.4, 1.6, 1.6, 6.0, .22, 1.4, { m: C.MAT2 }); for (let i = 0; i < 7; i++) C.cyl(9.7 + i * .9, 1.45, 1.6, .12, 1.4, { rotX: Math.PI / 2 }).position.set(9.7 + i * .9, 1.5, 2.3);
  for (const x of [9.6, 15.0]) { C.box(x, 0, 1.7, .18, 1.6, .18, { m: C.MAT2 }); C.box(x, 0, 2.8, .18, 1.6, .18, { m: C.MAT2 }); }
  for (let i = 0; i < 3; i++) C.box(10 + i * 1.8, 1.82, 1.85, .9, .7, .9);
  // racking
  for (let r = 0; r < 2; r++) { const z = -5.6 + r * 2.6; for (let i = 0; i < 4; i++) { const x = 7 + i * 2.6; C.box(x, 0, z, .16, 5.6, .16, { m: C.MAT2 }); C.box(x, 0, z + 1.6, .16, 5.6, .16, { m: C.MAT2 }); }
    for (const y of [0, 1.9, 3.8]) { C.box(7, y + 1.7, z, 8.0, .18, .12, { m: C.MAT2 }); C.box(7, y + 1.7, z + 1.62, 8.0, .18, .12, { m: C.MAT2 }); for (let i = 0; i < 3; i++) { C.box(7.3 + i * 2.6, y + (y ? 1.88 : 0), z + .1, 2.1, .2, 1.5); C.box(7.5 + i * 2.6, y + (y ? 2.08 : .2), z + .25, .8 + rnd() * .8, .5 + rnd() * .9, 1.1); } } }
  // dock and truck
  C.box(17.5, 0, 1, 4, 1.2, 9); C.box(22, .8, 2, 9, 3.8, 3.6); C.box(31, .8, 2.2, 3, 2.8, 3.2);
  for (const x of [24, 26, 32]) { C.cyl(x, -.4, 2, .75, .35, { rotX: Math.PI / 2, m: C.MAT3 }); C.cyl(x, -.4, 5.6, .75, .35, { rotX: Math.PI / 2, m: C.MAT3 }); }
  for (let i = 0; i < 2; i++) { C.box(18 + i * 1.7, 1.2, 3 + i * 1.5, 1.5, .2, 1.3); C.box(18.2 + i * 1.7, 1.4, 3.2 + i * 1.5, 1.1, .9, .9); }
  person(16.4, 4.2, -1.2); C.box(15.8, 2.1, 3.7, .5, .7, .06, { m: C.MAT3 });
  flow([[2.3, 2.55, 1.2], [4, 3.4, 1.6], [6.0, 3.2, 1.8], [8.6, 4.9, 2.2], [12, 2.9, 2.3], [14.5, 4.6, 0], [11.5, 6.0, -3.3], [16.2, 3.4, -1.0], [19, 2.6, 3.2], [22, 3.0, 3.8]]);
  [[2.3, 2.55, 1.2], [8.6, 4.9, 2.2], [11.5, 6.0, -3.3], [22, 3.0, 3.8]].forEach(p => node(...p));
  cam = { tx: 16, ty: 1.2, tz: 0, fr: 11 };
} else if (K === 'mortgage') { // client meeting -> documents -> underwriting -> keys to the house
  slab(-2, -2, 28, 14);
  C.box(0, 0, 1, 3.4, 1.45, 2.0); C.box(-.1, 1.45, .9, 3.6, .1, 2.2); person(1.7, -.2, Math.PI, true); person(1.0, 4.0, 0, true); person(2.4, 4.0, 0, true);
  C.box(.9, 1.55, 1.4, .9, .05, 1.2); C.box(2.0, 1.55, 1.5, .8, .2, 1.0);
  // documents: scanner, file stack, cabinets
  C.box(6, 0, .6, 2.0, 1.2, 1.4); C.box(6.2, 1.2, .8, 1.6, .3, 1.0, { m: C.MAT2 }); for (let i = 0; i < 6; i++) C.box(6.4 + rnd() * .1, 1.5 + i * .05, .9, 1.1, .04, .8);
  for (let i = 0; i < 3; i++) { C.box(6 + i * 1.1, 0, 3.2, 1.0, 2.6, 1.0); for (let j = 0; j < 3; j++) C.box(6.1 + i * 1.1, .4 + j * .8, 4.22, .8, .1, .04, { m: C.MAT3 }); }
  // underwriting: two desks with screens
  desk(C, 11, 0, .6, 0); desk(C, 14.6, 0, .6, 0); person(12.5, 2.9, 0, true); person(16.1, 2.9, 0, true);
  // the home: a model house on a plinth, keys on the table
  const hx = 20, hz = 1.6; C.box(hx, 0, hz, 4.4, 3.0, 3.6); for (const s of [-1, 1]) { const rf = C.box(0, 0, 0, 4.9, .16, 2.45); rf.position.set(hx + 2.2, 3.62, hz + 1.8 + s * 1.0); rf.rotation.x = s * .62; }
  C.box(hx, 3.0, hz + .05, .12, .01, 3.5); for (const ex of [hx + .02, hx + 4.3]) { const g = C.add(new THREE.Mesh(new THREE.CylinderGeometry(1.25, 1.25, .08, 3), C.MAT)); g.rotation.z = Math.PI / 2; g.rotation.x = Math.PI / 2; g.position.set(ex + .04, 3.62, hz + 1.8); g.scale.set(1, 1, 1.45); g.rotation.y = 0; }
  C.box(hx + 1.7, 0, hz + 3.6, 1.0, 1.9, .06, { m: C.MAT3 }); for (const wx of [hx + .5, hx + 3.1]) C.box(wx, 1.3, hz + 3.6, .9, .8, .06, { m: C.MAT2 });
  C.box(hx + 3.6, 0, hz - .4, .5, 3.6, .5); tree(C, hx + 6, hz + 1, 7, 4); person(hx + 2.2, hz + 5.4, Math.PI);
  flow([[1.4, 1.65, 1.8], [3.6, 2.4, 2.0], [6.8, 2.2, 1.3], [7.6, 3.2, 3.6], [10, 3.0, 2.4], [12.4, 2.4, .9], [16.0, 2.4, .9], [18.6, 2.0, 2.4], [hx + 2.2, 1.0, hz + 3.8]]);
  [[1.4, 1.65, 1.8], [6.8, 2.2, 1.3], [12.4, 2.4, .9], [hx + 2.2, 1.0, hz + 3.8]].forEach(p => node(...p));
  cam = { tx: 11.5, ty: 1.6, tz: 2.5, fr: 10.4 };
} else if (K === 'hvac') { // dispatch -> van -> the home's equipment -> invoice back
  slab(-2, -2, 30, 16);
  desk(C, 0, 0, 1, 0); person(1.5, 3.3, 0, true); C.box(0, 0, 5.2, 3.0, 4.0, .2); for (let i = 0; i < 6; i++) C.box(.2 + (i % 3) * .95, 1.6 + Math.floor(i / 3) * 1.1, 5.4, .8, .8, .03, { m: i % 2 ? C.MAT2 : C.MAT }); // job board
  // service van
  C.box(6, .7, 2, 6.2, 3.0, 2.8); C.box(12.2, .7, 2.2, 2.0, 2.2, 2.4); C.box(12.4, 2.2, 2.3, 1.4, .8, 2.2, { m: C.MAT3 }); C.box(6.4, 3.7, 2.4, 4.0, .2, .2, { m: C.MAT2 }); C.box(6.4, 3.7, 4.2, 4.0, .2, .2, { m: C.MAT2 }); C.box(7, 3.9, 2.6, 2.8, .2, 1.6, { m: C.MAT2 });
  for (const x of [7.4, 12.6]) { C.cyl(x, .0, 2.0, .7, .35, { rotX: Math.PI / 2, m: C.MAT3 }); C.cyl(x, .0, 4.8, .7, .35, { rotX: Math.PI / 2, m: C.MAT3 }); }
  person(11, 6.4, -.6); C.box(10.4, 0, 6.9, .9, .6, .5, { m: C.MAT2 }); // technician with toolbox
  // house cutaway: two walls, a furnace inside, heat pump outside, thermostat
  const hx = 16; C.box(hx, 0, 0, 10, .3, 9); wall(C, 'x', 0, hx, hx + 10, 5.5, .35, { y0: 2.0, y1: 4.0, n: 2, pier: 1.2 }); C.box(hx, 0, 0, .35, 5.5, 9);
  C.box(hx + 1, .3, 1, 1.8, 3.0, 1.6); C.box(hx + 1.2, 3.3, 1.2, 1.4, .6, 1.2, { m: C.MAT2 }); for (let i = 0; i < 5; i++) C.box(hx + 1.15, 1.0 + i * .35, 2.62, 1.5, .08, .04, { m: C.MAT3 });
  rod([hx + 1.9, 3.9, 1.8], [hx + 1.9, 5.0, 1.8], .3, C.MAT2); C.box(hx + 1.9, 4.8, 1.6, 7, .4, .4, { m: C.MAT2 });
  C.box(hx + 6, .3, 1, 3, 1.4, 1.2); C.box(hx + 3.8, 0.3, 6, 3.2, 1.5, 2); // sofa, cabinet
  C.box(hx + 10.6, 0, 3, 2.0, 2.0, 2.0); C.cyl(hx + 11.6, 1.0, 5.0, .7, .1, { rotX: Math.PI / 2, m: C.MAT2 }); // heat pump outside
  C.box(hx + 4.5, 2.6, .36, .3, .45, .06, { m: C.MAT3 }); // thermostat
  flow([[2.3, 2.55, 1.2], [4, 3.6, 3.2], [6, 4.4, 3.4], [12.2, 3.4, 3.4], [14.6, 2.6, 4.6], [hx + 2.0, 2.0, 2.8], [hx + 4.6, 2.8, .5], [hx + 9, 1.6, 3.4], [hx + 10.6, 1.4, 4.0]]);
  [[2.3, 2.55, 1.2], [12.2, 3.4, 3.4], [hx + 2.0, 2.0, 2.8], [hx + 10.6, 1.4, 4.0]].forEach(p => node(...p));
  cam = { tx: 13.5, ty: 1.4, tz: 3.5, fr: 11 };
} else { // financial, professional services, non-profits: meeting -> one shared record -> deadlines -> report
  slab(-2, -2, 28, 14);
  C.box(0, 0, 1, 5.0, 1.45, 2.4); C.box(-.1, 1.45, .9, 5.2, .1, 2.6); person(1.2, -.3, Math.PI, true); person(3.6, -.3, Math.PI, true); person(2.4, 4.4, 0, true);
  for (let i = 0; i < 3; i++) C.box(.6 + i * 1.5, 1.55, 1.5, .8, .05 + i * .02, 1.0);
  // shared record: a single cabinet of client files + server
  rack(C, 7.4, 0, .4, 4.8, 10); for (let i = 0; i < 2; i++) { C.box(9.4 + i * 1.2, 0, .5, 1.1, 3.2, 1.2); for (let j = 0; j < 4; j++) C.box(9.5 + i * 1.2, .3 + j * .75, 1.72, .9, .1, .04, { m: C.MAT3 }); }
  // deadline board with calendar grid
  C.box(13, 0, .4, .2, 4.4, .2, { m: C.MAT2 }); C.box(18.4, 0, .4, .2, 4.4, .2, { m: C.MAT2 }); C.box(13, 1.6, .5, 5.6, 3.4, .14);
  for (let r = 0; r < 3; r++) for (let c = 0; c < 6; c++) C.box(13.3 + c * .88, 2.0 + r * .95, .66, .78, .82, .04, { m: (r * 6 + c) % 5 === 2 ? C.MAT2 : C.MAT });
  person(15.8, 2.6, 0);
  // report: a desk with a screen and a printed report going out (donor / client)
  desk(C, 20.5, 0, 1.5, 0); person(22, 3.8, 0, true); for (let i = 0; i < 4; i++) C.box(23.6, 1.57 + i * .04, 1.7, .9, .03, 1.2);
  flow([[2.4, 1.65, 2.0], [5, 2.6, 2.4], [7.6, 5.0, 2.6], [10.4, 3.6, 2.2], [13.4, 3.2, 1.0], [16, 5.2, 1.0], [18.6, 3.0, 1.2], [21.6, 2.8, 1.8]]);
  [[2.4, 1.65, 2.0], [8.2, 4.9, 2.4], [16, 5.2, 1.0], [21.6, 2.8, 1.8]].forEach(p => node(...p));
  cam = { tx: 11.5, ty: 1.6, tz: 2.5, fr: 9.6 };
}
scene.add(new THREE.AmbientLight(0xffffff, 1.35));
const sun = new THREE.DirectionalLight(0xffffff, 4.6); sun.position.set(-18, 40, 22); sun.target.position.set(cam.tx, 0, cam.tz);
sun.castShadow = true; sun.shadow.mapSize.set(4096, 4096); Object.assign(sun.shadow.camera, { left: -40, right: 40, top: 40, bottom: -40, near: 1, far: 140 }); sun.shadow.bias = -.0006;
scene.add(sun, sun.target);
const fr = +(P.get('fr') || cam.fr), a = W / H;
const cm = new THREE.OrthographicCamera(-fr * a, fr * a, fr, -fr, 1, 400);
const tgt = new THREE.Vector3(+(P.get('tx') || cam.tx), +(P.get('ty') || cam.ty), +(P.get('tz') || cam.tz));
cm.position.copy(tgt).add(new THREE.Vector3(.9, .82, 1.0).normalize().multiplyScalar(160)); cm.lookAt(tgt); cm.updateProjectionMatrix();
renderEtch(makeRenderer(W, H), scene, cm, { spacing: 4.4, edgeW: 1.3, hatchGain: 1.15 });
window.__done = true;
