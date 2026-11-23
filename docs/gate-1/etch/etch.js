// Pencil-etching renderer: lit pass + world-normal/depth pass -> hatching, contour and paper post-process.
import * as THREE from './node_modules/three/build/three.module.js';

export function makeRenderer(W, H) {
  const canvas = document.createElement('canvas');
  canvas.width = W; canvas.height = H;
  document.body.appendChild(canvas);
  const r = new THREE.WebGLRenderer({ canvas, antialias: false, preserveDrawingBuffer: true });
  r.setPixelRatio(1); r.setSize(W, H, false);
  r.shadowMap.enabled = true; r.shadowMap.type = THREE.PCFSoftShadowMap;
  return r;
}

const normalMat = new THREE.ShaderMaterial({
  uniforms: { uNear: { value: 1 }, uFar: { value: 400 } },
  vertexShader: `varying vec3 vN; varying float vD; uniform float uNear,uFar;
    void main(){ vN = normalize(mat3(modelMatrix)*normal); vec4 mv = modelViewMatrix*vec4(position,1.); vD = (-mv.z-uNear)/(uFar-uNear); gl_Position = projectionMatrix*mv; }`,
  fragmentShader: `varying vec3 vN; varying float vD; void main(){ vec3 n = normalize(vN); if(!gl_FrontFacing) n=-n; gl_FragColor = vec4(n*.5+.5, max(vD,0.002)); }`,
  side: THREE.DoubleSide,
});

const post = new THREE.ShaderMaterial({
  uniforms: {
    tL: { value: null }, tN: { value: null }, tA: { value: null }, res: { value: new THREE.Vector2() },
    paper: { value: new THREE.Color('#F2EDE3') }, ink: { value: new THREE.Color('#34363A') },
    spacing: { value: 5.0 }, dbg: { value: 0 }, edgeW: { value: 1.0 }, seed: { value: 1.0 }, hatchGain: { value: 1.0 },
  },
  vertexShader: `varying vec2 vUv; void main(){ vUv=uv; gl_Position=vec4(position.xy,0.,1.); }`,
  fragmentShader: `
  precision highp float; varying vec2 vUv;
  uniform sampler2D tL,tN,tA; uniform vec2 res; uniform vec3 paper,ink; uniform float spacing,edgeW,seed,hatchGain,dbg;
  float h21(vec2 p){ p=fract(p*vec2(123.34,456.21)+seed); p+=dot(p,p+45.32); return fract(p.x*p.y); }
  float vn(vec2 p){ vec2 i=floor(p), f=fract(p); f=f*f*(3.-2.*f);
    return mix(mix(h21(i),h21(i+vec2(1,0)),f.x), mix(h21(i+vec2(0,1)),h21(i+vec2(1,1)),f.x), f.y); }
  float fbm(vec2 p){ float a=.5,s=0.; for(int i=0;i<4;i++){ s+=a*vn(p); p*=2.03; a*=.5;} return s; }
  // one hatch layer: angle in radians, returns ink 0..1
  float hatch(vec2 px, float ang, float dark, float sp, float off){
    float c=cos(ang), s=sin(ang); vec2 q = vec2(c*px.x+s*px.y, -s*px.x+c*px.y);
    q.y += (vn(vec2(q.x*0.012, off))-.5)*3.0;           // gentle hand wobble
    float k = q.y/sp + off;
    float d = abs(fract(k)-.5)*sp;                        // distance to line centre in px
    float w = mix(0.16, 0.62, dark);                       // stroke half-width grows with darkness
    float line = 1. - smoothstep(w-.55, w+.55, d);
    float brk = smoothstep(.18,.42, vn(vec2(q.x*0.035, floor(k)*7.13+off)));  // pencil lifts
    float grain = .72 + .28*vn(px*.9);
    return line*brk*grain;
  }
  vec4 N(vec2 o){ return texture2D(tN, vUv + o/res); }
  void main(){
    vec2 px = gl_FragCoord.xy;
    vec4 nd = N(vec2(0)); float bg = step(nd.a, 0.0005);
    vec3 n = nd.rgb*2.-1.;
    float L = texture2D(tL, vUv).r;
    float accent = texture2D(tA, vUv).a;
    vec3 acol = texture2D(tA, vUv).rgb;
    // contour from normal + depth discontinuities, sampled with a slight jitter for a drawn line
    vec2 j = (vec2(vn(px*.05), vn(px*.05+9.))-.5)*1.2;
    float e = 0.;
    for(int i=0;i<4;i++){
      vec2 o = (i==0?vec2(1,0):i==1?vec2(-1,0):i==2?vec2(0,1):vec2(0,-1))*edgeW + j;
      vec4 m = N(o);
      float dn = length(m.rgb - nd.rgb);
      float dd = abs(m.a - nd.a)*180.;
      float b = abs(step(m.a,0.0005) - bg);
      e = max(e, max(smoothstep(.18,.5,dn), max(smoothstep(.25,.9,dd), b)));
    }
    e *= .78 + .22*vn(px*.6);
    // hatching: direction follows the face orientation
    float dark = clamp((1.-L)*hatchGain, 0., 1.);
    vec3 an = abs(n);
    float a1 = an.y>max(an.x,an.z) ? 0.5236 : (an.x>an.z ? 1.5708 : -0.5236);
    float a2 = a1 + 1.5708*0.62;
    float ink1 = 0.;
    if(bg<.5){
      ink1 = hatch(px, a1, dark, spacing, 0.) * smoothstep(.10,.22,dark);
      ink1 = max(ink1, hatch(px, a2, dark, spacing*1.05, 3.7) * smoothstep(.42,.55,dark));
      ink1 = max(ink1, hatch(px, a1+0.35, dark, spacing*.62, 7.1) * smoothstep(.66,.80,dark));
      ink1 = max(ink1, .55*smoothstep(.86,1.,dark));
      ink1 *= .82;
    }
    float inkA = max(e, ink1);
    // paper: warm grain and faint fibres
    float g = fbm(px*.012)*.035 + (h21(px)-.5)*.035;
    vec3 col = paper*(1.-g*.5);
    float tone = bg<.5 ? smoothstep(.05,1.,dark)*.30*(.8+.4*fbm(px*.02)) : 0.;
    col = mix(col, ink, tone);
    col = mix(col, ink, ink1*.80);
    col = mix(col, ink*.8, e*.95);
    // colour accents (coral / verdigris) painted on top like a wash
    col = mix(col, acol*(0.92+0.08*vn(px*.2)), accent*.85);
    gl_FragColor = vec4(col,1.);
    if(dbg>.5) gl_FragColor=vec4(vec3(L),1.);
  }`,
  depthTest: false, depthWrite: false,
});

export function renderEtch(renderer, scene, camera, opts = {}) {
  const W = renderer.domElement.width, H = renderer.domElement.height;
  const rtL = new THREE.WebGLRenderTarget(W, H, { type: THREE.HalfFloatType });
  const rtN = new THREE.WebGLRenderTarget(W, H, { type: THREE.FloatType });
  const rtA = new THREE.WebGLRenderTarget(W, H);
  // lit pass
  renderer.setRenderTarget(rtL); renderer.setClearColor(0xffffff, 1); renderer.render(scene, camera);
  // normal pass
  normalMat.uniforms.uNear.value = camera.near; normalMat.uniforms.uFar.value = camera.far;
  const saved = []; scene.traverse(o => { if (o.isMesh) { saved.push([o, o.material, o.visible]); o.material = normalMat; if (o.userData.accentOnly) o.visible = false; } });
  renderer.setRenderTarget(rtN); renderer.setClearColor(0x000000, 0); renderer.render(scene, camera);
  // accent pass: only meshes with userData.accent colour
  const depthOnly = new THREE.MeshBasicMaterial({ colorWrite: false });
  scene.traverse(o => { if (o.isMesh) { const a = o.userData.accent; o.visible = !o.userData.noAccentOcclude || !!a; o.material = a ? new THREE.MeshBasicMaterial({ color: a, transparent: true, opacity: o.userData.accentAlpha ?? 1 }) : depthOnly; } });
  renderer.setRenderTarget(rtA); renderer.setClearColor(0x000000, 0); renderer.render(scene, camera);
  saved.forEach(([o, m, v]) => { o.material = m; o.visible = v; });
  // composite
  const q = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), post);
  const ps = new THREE.Scene(); ps.add(q); const pc = new THREE.Camera();
  Object.assign(post.uniforms.tL, { value: rtL.texture }); post.uniforms.tN.value = rtN.texture; post.uniforms.tA.value = rtA.texture;
  post.uniforms.res.value.set(W, H);
  for (const k of ['spacing', 'edgeW', 'seed', 'hatchGain', 'dbg']) if (opts[k] != null) post.uniforms[k].value = opts[k];
  if (opts.paper) post.uniforms.paper.value.set(opts.paper);
  renderer.setRenderTarget(null); renderer.render(ps, pc);
}

export { THREE };
