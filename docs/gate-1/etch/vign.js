import { THREE, makeRenderer, renderEtch } from './etch.js';
import { ctx, desk, rack, seed, rnd } from './scene.js';
const P = new URLSearchParams(location.search);
const W = +(P.get('w') || 1400), H = +(P.get('h') || 1400), k = P.get('k') || 'r1';
const scene = new THREE.Scene(); const C = ctx(scene); seed(5);
const CORAL = 0xE39A72;
const acc = m => { m.userData.accent = CORAL; m.userData.accentAlpha = .92; return m; };
const papers = (x, y, z, n) => { for (let i = 0; i < n; i++) C.box(x + (rnd() - .5) * .15, y + i * .035, z + (rnd() - .5) * .15, .85, .03, 1.1); };
C.box(-40, -.3, -40, 90, .3, 90, { cast: false });
if (k === 'r1') { // orders typed twice: two desks, papers carried between
  desk(C, 0, 0, 1, 0); desk(C, 5, 0, 4.5, 0);
  papers(.2, 1.57, 1.1, 6); papers(6.9, 1.57, 4.6, 9);
  acc(C.tube([[1.5, 2.4, 1.5], [2.6, 3.6, 2.5], [4.2, 3.8, 3.2], [6.2, 3.3, 4.3], [6.5, 2.4, 5]], .06));
  acc(C.tube([[6.5, 2.2, 5.1], [5.2, 2.9, 4.0], [3.0, 3.0, 2.8], [1.6, 2.2, 1.7]], .06));
} else if (k === 'r2') { // nightly export: rack, printer output, cable to a desk
  rack(C, .4, 0, .4, 5.6, 12);
  C.box(2.6, 0, .6, 1.6, 1.1, 1.6); C.box(2.8, 1.1, .8, 1.2, .5, 1.2, { m: C.MAT2 }); papers(2.9, 1.6, .9, 14);
  desk(C, 4.6, 0, 3.6, 0);
  acc(C.tube([[1.2, 5.4, 2.4], [2.4, 4.2, 3.0], [3.4, 2.6, 2.4], [3.4, 1.7, 1.4]], .06));
  acc(C.tube([[3.6, 1.7, 1.6], [4.4, 1.0, 3.2], [5.6, 1.2, 4.2], [6.1, 1.7, 4.0]], .06));
} else if (k === 'r3') { // one person knows it: CRT terminal, cabinet, notes
  desk(C, 1.5, 0, 2.5, 0, true);
  for (let i = 0; i < 3; i++) { C.box(.2, 0, .4 + i * 1.0, 1.4, 2.6, .95); for (let j = 0; j < 3; j++) C.box(1.6, .3 + j * .8, .55 + i * 1.0, .05, .08, .6, { m: C.MAT3 }); }
  for (let i = 0; i < 5; i++) C.box(2.2 + rnd() * 1.6, 2.6 + rnd() * .6, 3.69, .32, .32, .02);
  papers(4.0, 1.57, 2.7, 4);
  acc(C.tube([[2.4, 2.1, 2.5], [2.0, 1.2, 1.4], [1.0, .2, 1.0], [-.4, .1, 2.0]], .06));
} else { // work waits in inboxes: desk with stacked trays, pallets waiting
  desk(C, 0, 0, 1.2, 0);
  for (let t = 0; t < 3; t++) { C.box(.3, 1.57 + t * .5, 1.3, 1.0, .06, 1.2, { m: C.MAT2 }); papers(.38, 1.63 + t * .5, 1.35, 6 + t * 3); }
  for (let i = 0; i < 3; i++) { C.box(4.4 + (i % 2) * 2.4, 0, 1 + Math.floor(i / 2) * 2.4, 2.0, .22, 1.8); C.box(4.6 + (i % 2) * 2.4, .22, 1.2 + Math.floor(i / 2) * 2.4, 1.5, .8 + rnd() * .8, 1.3); }
  acc(C.tube([[.8, 3.2, 1.8], [2.2, 3.6, 2.6], [4.0, 3.0, 2.0], [5.2, 2.0, 1.8]], .06));
}
scene.add(new THREE.AmbientLight(0xffffff, 1.35));
const sun = new THREE.DirectionalLight(0xffffff, 4.6); sun.position.set(-12, 24, 10); sun.target.position.set(4, 0, 4);
sun.castShadow = true; sun.shadow.mapSize.set(2048, 2048); Object.assign(sun.shadow.camera, { left: -14, right: 14, top: 14, bottom: -14, near: 1, far: 80 }); sun.shadow.bias = -.0008;
scene.add(sun, sun.target);
const fr = +(P.get('fr') || 5.4), a = W / H;
const cam = new THREE.OrthographicCamera(-fr * a, fr * a, fr, -fr, 1, 400);
const tgt = new THREE.Vector3(+(P.get('tx') || 3.8), +(P.get('ty') || 1.6), +(P.get('tz') || 3.6));
cam.position.copy(tgt).add(new THREE.Vector3(.9, .82, 1.0).normalize().multiplyScalar(160)); cam.lookAt(tgt); cam.updateProjectionMatrix();
renderEtch(makeRenderer(W, H), scene, cam, { spacing: 4.4, edgeW: 1.3 });
window.__done = true;
