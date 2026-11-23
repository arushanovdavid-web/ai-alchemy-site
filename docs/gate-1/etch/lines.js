// Vector line extraction for the draw-on illustrations.
// For every mesh: feature edges (crease > ANG), boundary edges and view silhouettes, in world space.
// Hidden-line removal against a float depth buffer rendered from the same orthographic camera.
// Output: visible segments in pixel coordinates, tagged with level, weight (1 = outline, 0 = detail) and copper.
import * as THREE from './node_modules/three/build/three.module.js';

const depthMat = new THREE.ShaderMaterial({
  vertexShader: 'void main(){ gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.); }',
  fragmentShader: 'void main(){ gl_FragColor = vec4(gl_FragCoord.z,0.,0.,1.); }',
  side: THREE.DoubleSide,
});

export function extractLines(renderer, scene, camera, opts = {}) {
  const W = renderer.domElement.width, H = renderer.domElement.height;
  const ANG = Math.cos((opts.crease ?? 28) * Math.PI / 180);
  scene.updateMatrixWorld(true);
  // depth pass (copper-only helper meshes and "ghost" meshes do not occlude)
  const rt = new THREE.WebGLRenderTarget(W, H, { type: THREE.FloatType, format: THREE.RGBAFormat });
  const saved = [];
  scene.traverse(o => { if (o.isMesh) { saved.push([o, o.material, o.visible]); o.material = depthMat; if (o.userData.noOcclude) o.visible = false; } });
  renderer.setRenderTarget(rt); renderer.setClearColor(0xffffff, 1); renderer.clear(); renderer.render(scene, camera);
  const buf = new Float32Array(W * H * 4); renderer.readRenderTargetPixels(rt, 0, 0, W, H, buf);
  saved.forEach(([o, m, v]) => { o.material = m; o.visible = v; });
  renderer.setRenderTarget(null);
  const dAt = (x, y) => { x = Math.round(x); y = Math.round(y); if (x < 0 || y < 0 || x >= W || y >= H) return -1; return buf[((H - 1 - y) * W + x) * 4]; };
  const tol = opts.tol ?? 0.0009;
  const visible = (x, y, z) => {
    let m = -1;
    for (let dy = -1; dy <= 1; dy++) for (let dx = -1; dx <= 1; dx++) { const d = dAt(x + dx, y + dy); if (d > m) m = d; }
    return m >= 0 && z <= m + tol;
  };
  const camDir = new THREE.Vector3(); camera.getWorldDirection(camDir); // points into the scene
  const proj = v => { const p = v.clone().project(camera); return [(p.x + 1) / 2 * W, (1 - p.y) / 2 * H, p.z * .5 + .5]; };
  const segs = [];
  const tagOf = o => { let l = 0, cu = false, ghost = false, smooth = false, fine = false; for (let q = o; q; q = q.parent) { const u = q.userData; if (u.level !== undefined && l === 0) l = u.level; if (u.copper || u.accent) cu = true; if (u.ghost) ghost = true; if (u.smooth) smooth = true; if (u.fine) fine = true; } return { l, cu, ghost, smooth, fine }; };
  scene.traverse(o => {
    if (!o.isMesh || o.userData.noLines) return;
    const t = tagOf(o);
    const g = o.geometry, pos = g.attributes.position, idx = g.index;
    const N = idx ? idx.count : pos.count;
    // weld vertices by rounded world position
    const wp = [], key = new Map(), vid = [];
    const v = new THREE.Vector3();
    for (let i = 0; i < pos.count; i++) {
      v.fromBufferAttribute(pos, i).applyMatrix4(o.matrixWorld);
      const k = `${v.x.toFixed(4)},${v.y.toFixed(4)},${v.z.toFixed(4)}`;
      if (!key.has(k)) { key.set(k, wp.length); wp.push(v.clone()); }
      vid.push(key.get(k));
    }
    const tri = [], nrm = [];
    for (let i = 0; i < N; i += 3) {
      const a = vid[idx ? idx.getX(i) : i], b = vid[idx ? idx.getX(i + 1) : i + 1], c = vid[idx ? idx.getX(i + 2) : i + 2];
      if (a === b || b === c || a === c) continue;
      const n = new THREE.Vector3().subVectors(wp[b], wp[a]).cross(new THREE.Vector3().subVectors(wp[c], wp[a])).normalize();
      tri.push([a, b, c]); nrm.push(n);
    }
    const edges = new Map();
    tri.forEach((tr, ti) => { for (let k = 0; k < 3; k++) { const a = tr[k], b = tr[(k + 1) % 3]; const e = a < b ? `${a}_${b}` : `${b}_${a}`; if (!edges.has(e)) edges.set(e, [a < b ? a : b, a < b ? b : a, []]); edges.get(e)[2].push(ti); } });
    for (const [, [a, b, ts]] of edges) {
      let kind = -1; // 1 outline, 0 crease
      if (ts.length === 1) kind = 1;
      else {
        const n0 = nrm[ts[0]], n1 = nrm[ts[1]];
        const f0 = n0.dot(camDir) < 0, f1 = n1.dot(camDir) < 0;
        if (f0 !== f1) kind = 1;
        else if (!t.smooth && n0.dot(n1) < ANG && (f0 || f1)) kind = 0;
      }
      if (kind < 0) continue;
      if (t.fine) kind = 2;  // 2 = hairline (floor grids, construction lines)
      const A = proj(wp[a]), B = proj(wp[b]);
      const len = Math.hypot(B[0] - A[0], B[1] - A[1]); if (len < .5) continue;
      const n = Math.max(2, Math.ceil(len / 1.25));
      let run = null;
      for (let i = 0; i <= n; i++) {
        const s = i / n, x = A[0] + (B[0] - A[0]) * s, y = A[1] + (B[1] - A[1]) * s, z = A[2] + (B[2] - A[2]) * s;
        const vis = t.ghost || visible(x, y, z);
        if (vis) { if (!run) run = [x, y]; run[2] = x; run[3] = y; }
        if ((!vis || i === n) && run) { if (Math.hypot(run[2] - run[0], run[3] - run[1]) > 1.5) segs.push([+run[0].toFixed(1), +run[1].toFixed(1), +run[2].toFixed(1), +run[3].toFixed(1), t.l, kind, t.cu ? 1 : 0, t.ghost ? 1 : 0]); run = null; }
      }
    }
  });
  const anchors = {};
  for (const [k, p] of Object.entries(opts.anchors || {})) { const q = proj(new THREE.Vector3(...p)); anchors[k] = [+q[0].toFixed(1), +q[1].toFixed(1)]; }
  return { W, H, segs, anchors };
}
