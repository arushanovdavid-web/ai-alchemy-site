// Shared modelling kit for the rich architecture-of-software drawings.
import { THREE } from './etch.js';
import { ctx, rnd } from './scene.js';
export { THREE, rnd };

export const CU = 0xB5703F, CORAL = 0xE39A72, VERD = 0x1F6B5C;
export function setup(P) {
  const scene = new THREE.Scene();
  return { scene, C: ctx(scene), P };
}
export const accent = (m, c = CU, a = 1) => { m.userData.accent = c; m.userData.accentAlpha = a; m.userData.copper = true; m.userData.smooth = true; return m; };

/* a rod between two points */
export function rod(C, a, b, r, o = {}) {
  const A = new THREE.Vector3(...a), B = new THREE.Vector3(...b), d = B.clone().sub(A);
  const m = C.add(new THREE.Mesh(new THREE.CylinderGeometry(r, r, d.length(), o.seg || 8), o.m || C.MAT2), o);
  m.position.copy(A).addScaledVector(d, .5); m.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), d.normalize()); return m;
}
export function sphere(C, x, y, z, r, o = {}) { const m = C.add(new THREE.Mesh(new THREE.SphereGeometry(r, 16, 10), o.m || C.MAT), o); m.position.set(x, y, z); return m; }

/* a hanging cable between two points with sag */
export function cable(C, a, b, sag, r = .06, o = {}) {
  const pts = []; for (let i = 0; i <= 10; i++) { const t = i / 10; pts.push([a[0] + (b[0] - a[0]) * t + (rnd() - .5) * .15, a[1] + (b[1] - a[1]) * t - sag * 4 * t * (1 - t), a[2] + (b[2] - a[2]) * t + (rnd() - .5) * .15]); }
  return C.tube(pts, r, o);
}

/* railing along x or z */
export function railing(C, axis, x, y, z, L, h = 1.1, step = 1.2) {
  const B = (a, yy, b, w, hh, d) => axis === 'x' ? C.box(x + a, yy, z + b, w, hh, d, { m: C.MAT2 }) : C.box(x + b, yy, z + a, d, hh, w, { m: C.MAT2 });
  B(0, y + h, 0, L, .07, .07); B(0, y + h * .5, 0, L, .04, .04);
  for (let s = 0; s <= L + .01; s += step) B(Math.min(s, L - .06), y, 0, .06, h, .06);
}

/* a facade grid of windows on a wall face (frontal face at z = zf facing +z, or at x = xf facing +x) */
export function windows(C, face, at, u0, y0, U, Hh, cols, rows, o = {}) {
  const cw = U / cols, rh = Hh / rows, inset = o.inset ?? .18, mull = o.mull ?? .08;
  for (let i = 0; i < cols; i++) for (let j = 0; j < rows; j++) {
    const a = u0 + i * cw + cw * (o.pad ?? .12), w = cw * (1 - 2 * (o.pad ?? .12)), y = y0 + j * rh + rh * (o.vpad ?? .18), h = rh * (1 - 2 * (o.vpad ?? .18));
    if (o.skip && o.skip(i, j)) continue;
    if (face === 'z') {
      C.box(a, y, at - inset, w, h, .05, { m: C.MAT3, ud: { fine: 1 } });                 // glass, recessed
      C.box(a + w / 2 - mull / 2, y, at - inset + .05, mull, h, .06, { m: C.MAT2, ud: { fine: 1 } });
      if (o.transom) C.box(a, y + h * .62, at - inset + .05, w, mull, .06, { m: C.MAT2, ud: { fine: 1 } });
      C.box(a - .05, y - .1, at - .02, w + .1, .1, .22, { m: C.MAT2, ud: { fine: 1 } });  // sill
    } else {
      C.box(at - inset, y, a, .05, h, w, { m: C.MAT3, ud: { fine: 1 } });
      C.box(at - inset + .05, y, a + w / 2 - mull / 2, .06, h, mull, { m: C.MAT2, ud: { fine: 1 } });
      if (o.transom) C.box(at - inset + .05, y + h * .62, a, .06, mull, w, { m: C.MAT2, ud: { fine: 1 } });
      C.box(at - .02, y - .1, a - .05, .22, .1, w + .1, { m: C.MAT2, ud: { fine: 1 } });
    }
  }
}

/* panel joints on a concrete face: thin grooves */
export function joints(C, face, at, u0, y0, U, Hh, nu, nv) {
  for (let i = 1; i < nu; i++) { const u = u0 + U * i / nu; face === 'z' ? C.box(u - .02, y0, at, .04, Hh, .02, { m: C.MAT2, ud: { fine: 1, noLines: 0 } }) : C.box(at, y0, u - .02, .02, Hh, .04, { m: C.MAT2, ud: { fine: 1 } }); }
  for (let j = 1; j < nv; j++) { const y = y0 + Hh * j / nv; face === 'z' ? C.box(u0, y - .02, at, U, .04, .02, { m: C.MAT2, ud: { fine: 1 } }) : C.box(at, y - .02, u0, .02, .04, U, { m: C.MAT2, ud: { fine: 1 } }); }
}

/* circuit-like traces on a face: orthogonal runs with 45-degree bends and via pads */
export function traces(C, face, at, u0, y0, U, Hh, n, o = {}) {
  const lift = o.lift ?? .03, w = o.w ?? .07;
  const seg = (a, b) => { // a,b = [u, y]
    const L = Math.hypot(b[0] - a[0], b[1] - a[1]); if (L < .01) return;
    const mid = [(a[0] + b[0]) / 2, (a[1] + b[1]) / 2], ang = Math.atan2(b[1] - a[1], b[0] - a[0]);
    const m = C.box(0, 0, 0, L + w, w, .03, { m: C.MAT, cast: false });
    m.position.set(0, 0, 0);
    if (face === 'z') { m.position.set(mid[0], mid[1], at + lift); m.rotation.z = ang; }
    else { m.position.set(at + lift, mid[1], mid[0]); m.rotation.y = -Math.PI / 2; m.rotation.z = ang; }
    accent(m, o.color ?? CU);
  };
  const via = p => { const m = C.cyl(0, 0, 0, w * 1.6, .04, { seg: 12, m: C.MAT, cast: false }); if (face === 'z') { m.rotation.x = Math.PI / 2; m.position.set(p[0], p[1], at + lift); } else { m.rotation.z = Math.PI / 2; m.position.set(at + lift, p[1], p[0]); } accent(m, o.color ?? CU); };
  for (let k = 0; k < n; k++) {
    // orthogonal run from the bottom (or top) edge, stepping sideways, with 45-degree chamfers at bends
    let u = u0 + U * (k + .5) / n, y = o.fromTop ? y0 + Hh : y0; const dir = o.fromTop ? -1 : 1;
    const raw = [[u, y]]; const steps = 2 + Math.floor(rnd() * 3);
    for (let s2 = 0; s2 < steps; s2++) {
      y += dir * Hh / (steps + 1) * (.7 + rnd() * .6); raw.push([u, y]);
      const du = (rnd() < .5 ? -1 : 1) * (U / n) * (.6 + rnd() * 1.4); u = Math.max(u0 + .3, Math.min(u0 + U - .3, u + du));
      y += dir * Math.abs(du) * .0; raw.push([u, y + dir * .0001]);
    }
    const end = y + dir * Hh * .08 * rnd(); raw.push([u, Math.max(y0 + .2, Math.min(y0 + Hh - .2, end))]);
    const pts = [raw[0]];
    for (let i = 1; i < raw.length - 1; i++) { const A = raw[i - 1], B = raw[i], Cc = raw[i + 1]; const c = .25;
      const la = Math.hypot(B[0] - A[0], B[1] - A[1]) || 1, lb = Math.hypot(Cc[0] - B[0], Cc[1] - B[1]) || 1;
      pts.push([B[0] - (B[0] - A[0]) / la * Math.min(c, la / 2), B[1] - (B[1] - A[1]) / la * Math.min(c, la / 2)]);
      pts.push([B[0] + (Cc[0] - B[0]) / lb * Math.min(c, lb / 2), B[1] + (Cc[1] - B[1]) / lb * Math.min(c, lb / 2)]); }
    pts.push(raw[raw.length - 1]);
    for (let i = 1; i < pts.length; i++) seg(pts[i - 1], pts[i]);
    via(pts[pts.length - 1]);
  }
}

/* people for scale */
export function person(C, x, y, z, rot = 0) {
  const g = new THREE.Group(); g.position.set(x, y, z); g.rotation.y = rot; C.add(g);
  const D = { ...C, add: (m, o) => { g.add(m); m.castShadow = true; return m; } };
  const Cy = (a, b, r) => rod(D, a, b, r, { m: C.MAT });
  const body = new THREE.Mesh(new THREE.CylinderGeometry(.3, .34, 1.15, 10), C.MAT); body.position.set(0, 2.3, 0); g.add(body);
  const head = new THREE.Mesh(new THREE.SphereGeometry(.26, 12, 8), C.MAT); head.position.set(0, 3.15, 0); g.add(head);
  for (const s of [-1, 1]) { Cy([s * .18, 1.75, 0], [s * .2, .9, 0], .13); Cy([s * .2, .9, 0], [s * .2, .05, 0], .11); Cy([s * .4, 2.75, 0], [s * .45, 1.8, 0], .08); }
  return g;
}

export function camera(P, W, H, def) {
  const fr = +(P.get('fr') || def.fr), aspect = W / H;
  const cam = new THREE.OrthographicCamera(-fr * aspect, fr * aspect, fr, -fr, 1, 600);
  const tgt = new THREE.Vector3(+(P.get('tx') || def.t[0]), +(P.get('ty') || def.t[1]), +(P.get('tz') || def.t[2]));
  const d = def.dir || [.9, .82, 1.0];
  cam.position.copy(tgt).add(new THREE.Vector3(...d).normalize().multiplyScalar(250)); cam.lookAt(tgt); cam.updateProjectionMatrix();
  return cam;
}
export function lights(scene, P, sunPos = [-30, 60, 25], tgt = [0, 0, 0], ext = 80) {
  scene.add(new THREE.AmbientLight(0xffffff, +(P.get('amb') || 1.35)));
  const sun = new THREE.DirectionalLight(0xffffff, +(P.get('sun') || 4.4)); sun.position.set(...sunPos); sun.target.position.set(...tgt);
  sun.castShadow = true; sun.shadow.mapSize.set(4096, 4096); const sc = sun.shadow.camera; sc.left = -ext; sc.right = ext; sc.top = ext; sc.bottom = -ext; sc.near = 1; sc.far = 300; sun.shadow.bias = -.0006;
  scene.add(sun, sun.target);
}
