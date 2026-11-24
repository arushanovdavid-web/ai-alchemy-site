import { THREE } from './etch.js';

let _s = 7; export const rnd = () => (_s = (_s * 16807) % 2147483647) / 2147483647;
export function seed(n) { _s = n; }
const MAT = new THREE.MeshLambertMaterial({ color: 0xffffff });
const MAT2 = new THREE.MeshLambertMaterial({ color: 0xd8d8d8 }); // slightly darker stock (metal, screens)
const MAT3 = new THREE.MeshLambertMaterial({ color: 0x9a9a9a }); // dark (rubber, screens)

export function ctx(scene) {
  const add = (m, o = {}) => { m.castShadow = o.cast ?? true; m.receiveShadow = true; Object.assign(m.userData, o.ud || {}); scene.add(m); return m; };
  const box = (x, y, z, w, h, d, o = {}) => add(new THREE.Mesh(new THREE.BoxGeometry(w, h, d), o.m || MAT), o).translateX(x + w / 2).translateY(y + h / 2).translateZ(z + d / 2);
  const cyl = (x, y, z, r, h, o = {}) => { const m = add(new THREE.Mesh(new THREE.CylinderGeometry(o.r2 ?? r, r, h, o.seg || 20), o.m || MAT), o); m.position.set(x, y + h / 2, z); if (o.rotX) m.rotation.x = o.rotX; if (o.rotZ) m.rotation.z = o.rotZ; return m; };
  const tube = (pts, r, o = {}) => { const c = new THREE.CatmullRomCurve3(pts.map(p => new THREE.Vector3(...p))); return add(new THREE.Mesh(new THREE.TubeGeometry(c, Math.max(24, pts.length * 14), r, 8, false), o.m || MAT2), o); };
  return { add, box, cyl, tube, MAT, MAT2, MAT3 };
}

// wall along X (at z) or along Z (at x) with a band of windows
export function wall(C, axis, at, from, to, h, t, win) {
  const L = to - from;
  const B = (a, y, b, hh) => axis === 'x' ? C.box(from + a, y, at, b, hh, t) : C.box(at, y, from + a, t, hh, b);
  if (!win) { B(0, 0, L, h); return; }
  const { y0, y1, n, pier } = win; // window band
  B(0, 0, L, y0); B(0, y1, L, h - y1);
  const w = (L - pier * (n + 1)) / n;
  for (let i = 0; i <= n; i++) B(i * (w + pier), y0, pier, y1 - y0);
  // mullions and sills
  for (let i = 0; i < n; i++) {
    const a = pier + i * (w + pier);
    const t2 = t * .35, off = t * .32;
    if (axis === 'x') { C.box(from + a + w / 2 - .04, y0, at + off, .08, y1 - y0, t2, { m: C.MAT2 }); C.box(from + a, (y0 + y1) / 2, at + off, w, .08, t2, { m: C.MAT2 }); }
    else { C.box(at + off, y0, from + a + w / 2 - .04, t2, y1 - y0, .08, { m: C.MAT2 }); C.box(at + off, (y0 + y1) / 2, from + a, t2, .08, w, { m: C.MAT2 }); }
  }
}

export function desk(C, x, y, z, rot, crt) {
  const g = new THREE.Group();
  const s = new THREE.Scene(); const D = ctx(s);
  D.box(0, 1.45, 0, 3, .12, 1.5); D.box(.05, 0, .05, .12, 1.45, 1.4); D.box(2.83, 0, .05, .12, 1.45, 1.4); D.box(.2, .5, 1.2, 2.6, .9, .08);
  if (crt) { D.box(.9, 1.57, .2, 1.2, 1.0, 1.0); D.box(1.05, 1.67, 1.2, .9, .75, .08, { m: D.MAT3 }); D.box(.7, 1.57, .1, .5, .1, .4); D.box(.6, 1.57, 1.0, 1.6, .06, .4, { m: D.MAT2 }); }
  else { D.box(1.2, 1.57, .3, .6, .05, .35, { m: D.MAT2 }); D.box(1.45, 1.6, .45, .1, .5, .08, { m: D.MAT2 }); D.box(.8, 2.0, .45, 1.4, .85, .06, { m: D.MAT3 }); D.box(1.0, 1.57, .95, 1.0, .04, .3, { m: D.MAT2 }); }
  // chair
  D.cyl(1.5, 0, 2.3, .08, .9, { m: D.MAT2 }); D.box(1.05, .9, 1.85, .9, .14, .9); D.box(1.05, 1.0, 2.65, .9, 1.0, .12);
  D.cyl(1.5, 0, 2.3, .5, .06, { m: D.MAT3, seg: 5 });
  for (const c of [...s.children]) g.add(c);
  g.position.set(x, y, z); g.rotation.y = rot || 0; C.add(g, { cast: true });
  g.traverse(o => { if (o.isMesh) { o.castShadow = true; o.receiveShadow = true; } });
  return g;
}

export function rack(C, x, y, z, h, units) {
  C.box(x, y, z, 1.6, h, 2.0, { m: C.MAT2 });
  // front face units
  for (let i = 0; i < units; i++) { const uy = y + .4 + i * ((h - .8) / units); C.box(x + .12, uy, z + 2.0, 1.36, (h - .8) / units * .78, .06, { m: i % 3 === 0 ? C.MAT3 : C.MAT }); }
}

export function tree(C, x, z, h, depth = 5) {
  const branch = (p, dir, len, r, d) => {
    const end = p.clone().addScaledVector(dir, len);
    const m = new THREE.Mesh(new THREE.CylinderGeometry(r * .68, r, len, 6), C.MAT);
    m.position.copy(p).addScaledVector(dir, len / 2); m.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), dir.clone().normalize());
    C.add(m);
    if (d <= 0) return;
    const nb = d > 3 ? 2 : 3;
    for (let i = 0; i < nb; i++) {
      const nd = dir.clone().add(new THREE.Vector3(rnd() - .5, rnd() * .5, rnd() - .5).multiplyScalar(1.3)).normalize();
      if (nd.y < .15) nd.y = .15;
      branch(end, nd.normalize(), len * (.62 + rnd() * .18), r * .6, d - 1);
    }
  };
  branch(new THREE.Vector3(x, 0, z), new THREE.Vector3(0, 1, 0), h * .34, h * .022, depth);
}
