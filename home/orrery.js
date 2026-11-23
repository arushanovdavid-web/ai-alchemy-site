/* The Orrery: the Rings mark built as a machined instrument. Copper segments on steel rails, the inner ring pinned
   inside the outer one, a polished gold core, a studio of soft lights and a dark polished floor that mirrors it all.
   WebGL2, no libraries, no network requests. Decorative only (aria-hidden); every word stays in the document.
   Fallbacks: no WebGL2 or a lost context shows the still poster (.orrery-off); reduced motion renders one still frame.
   Review aids: ?orrery-t=<seconds> freezes the scene at that time; window.__orrery reports frame cost. */
(() => {
  'use strict';
  const hero = document.querySelector('.hero-orrery'), cv = hero && hero.querySelector('canvas.orrery');
  if (!cv) return;
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  const qT = new URLSearchParams(location.search).get('orrery-t');
  const FIXED_T = qT !== null ? +qT : null;
  const PI = Math.PI, TAU = PI * 2, HALF = PI / 2, D2R = PI / 180;
  const clamp = (v, a = 0, b = 1) => v < a ? a : v > b ? b : v, lerp = (a, b, t) => a + (b - a) * t;
  const ease = t => 1 - Math.pow(1 - t, 3), smooth = t => t * t * (3 - 2 * t);
  const API = window.__orrery = { ok: false, ms: 0, frames: 0, why: '' };
  const off = why => { API.ok = false; API.why = why; hero.classList.add('orrery-off'); hero.classList.remove('orrery-on'); };

  /* ---------- small matrix kit (column-major) ---------- */
  const m4 = () => { const m = new Float32Array(16); m[0] = m[5] = m[10] = m[15] = 1; return m; };
  const mul = (a, b) => { const o = new Float32Array(16); for (let c = 0; c < 4; c++) for (let r = 0; r < 4; r++) { let s = 0; for (let k = 0; k < 4; k++) s += a[k * 4 + r] * b[c * 4 + k]; o[c * 4 + r] = s; } return o; };
  const rx = t => { const m = m4(), c = Math.cos(t), s = Math.sin(t); m[5] = c; m[6] = s; m[9] = -s; m[10] = c; return m; };
  const ry = t => { const m = m4(), c = Math.cos(t), s = Math.sin(t); m[0] = c; m[2] = -s; m[8] = s; m[10] = c; return m; };
  const rz = t => { const m = m4(), c = Math.cos(t), s = Math.sin(t); m[0] = c; m[1] = s; m[4] = -s; m[5] = c; return m; };
  const persp = (fy, asp, n, f, sx, sy) => { const m = new Float32Array(16), t = 1 / Math.tan(fy / 2); m[0] = t / asp; m[5] = t; m[10] = (f + n) / (n - f); m[11] = -1; m[14] = 2 * f * n / (n - f); m[8] = -sx; m[9] = -sy; return m; };
  const sub = (a, b) => [a[0] - b[0], a[1] - b[1], a[2] - b[2]], cross = (a, b) => [a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]];
  const norm = a => { const l = Math.hypot(a[0], a[1], a[2]) || 1; return [a[0] / l, a[1] / l, a[2] / l]; }, dot = (a, b) => a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
  const lookAt = (e, t, u) => { const z = norm(sub(e, t)), x = norm(cross(u, z)), y = cross(z, x), m = m4();
    m[0] = x[0]; m[4] = x[1]; m[8] = x[2]; m[1] = y[0]; m[5] = y[1]; m[9] = y[2]; m[2] = z[0]; m[6] = z[1]; m[10] = z[2];
    m[12] = -dot(x, e); m[13] = -dot(y, e); m[14] = -dot(z, e); return m; };
  const xf = (m, p) => [m[0] * p[0] + m[4] * p[1] + m[8] * p[2] + m[12], m[1] * p[0] + m[5] * p[1] + m[9] * p[2] + m[13], m[2] * p[0] + m[6] * p[1] + m[10] * p[2] + m[14]];

  /* ---------- geometry: every vertex is pos3 nrm3 aux4 (arc length, across, depth, position along block) mat2 (material, variation) ---------- */
  let seed = 7; const rnd = () => (seed = (seed * 16807) % 2147483647) / 2147483647;
  function profile(a, b, c, k) {   /* rounded rectangle cross-section: [r, z, nr, nz] */
    const P = [];
    for (const [cx, cy, a0] of [[a - c, b - c, 0], [c - a, b - c, HALF], [c - a, c - b, PI], [a - c, c - b, PI * 1.5]])
      for (let j = 0; j <= k; j++) { const t = a0 + j / k * HALF, co = Math.cos(t), si = Math.sin(t); P.push([cx + c * co, cy + c * si, co, si]); }
    return P;
  }
  function block(G, R, t0, t1, sec, mat, vr) {   /* a curved bar with rounded edges and rounded ends */
    const { a, b, c } = sec, k = 3, P = profile(a, b, c, k), np = P.length, dth = Math.min(c / R, (t1 - t0) * .25), rows = [];
    for (let j = k; j >= 0; j--) { const f = j / k * HALF; rows.push([t0 + dth - dth * Math.sin(f), c * (1 - Math.cos(f)), -Math.sin(f)]); }
    const n = Math.max(2, Math.ceil((t1 - t0) * R * 34));
    for (let i = 1; i < n; i++) rows.push([t0 + dth + (t1 - t0 - 2 * dth) * i / n, 0, 0]);
    for (let j = 0; j <= k; j++) { const f = j / k * HALF; rows.push([t1 - dth + dth * Math.sin(f), c * (1 - Math.cos(f)), Math.sin(f)]); }
    const base = G.V.length / 12;
    for (const [th, ins, tw] of rows) {
      const ex = Math.cos(th), ey = Math.sin(th), cw = Math.sqrt(Math.max(0, 1 - tw * tw)), s = (th - t0) / (t1 - t0);
      for (const [pr, pz, nr, nz] of P) { const r = R + pr - nr * ins, z = pz - nz * ins;
        G.V.push(ex * r, ey * r, z, ex * nr * cw - ey * tw, ey * nr * cw + ex * tw, nz * cw, th * R, pr / a, pz / b, s, mat, vr); }
    }
    for (let i = 0; i < rows.length - 1; i++) for (let j = 0; j < np; j++) { const a0 = base + i * np + j, a1 = base + i * np + (j + 1) % np; G.I.push(a0, a0 + np, a1, a1, a0 + np, a1 + np); }
    for (const [ri, sg] of [[0, -1], [rows.length - 1, 1]]) {
      const th = rows[ri][0], ex = Math.cos(th), ey = Math.sin(th), c0 = G.V.length / 12, s = sg < 0 ? 0 : 1;
      G.V.push(ex * R, ey * R, 0, -ey * sg, ex * sg, 0, th * R, 0, 0, s, mat, vr);
      for (const [pr, pz, nr, nz] of P) { const r = R + pr - nr * c, z = pz - nz * c; G.V.push(ex * r, ey * r, z, -ey * sg, ex * sg, 0, th * R, pr / a, pz / b, s, mat, vr); }
      for (let j = 0; j < np; j++) G.I.push(c0, c0 + 1 + j, c0 + 1 + (j + 1) % np);
    }
  }
  function rail(G, R, sec, mat) {   /* the continuous steel track the blocks sit on */
    const P = profile(sec.a, sec.b, sec.c, 2), np = P.length, n = 220, base = G.V.length / 12;
    for (let i = 0; i < n; i++) { const th = i / n * TAU, ex = Math.cos(th), ey = Math.sin(th);
      for (const [pr, pz, nr, nz] of P) G.V.push(ex * (R + pr), ey * (R + pr), pz, ex * nr, ey * nr, nz, th * R, pr / sec.a, pz / sec.b, .5, mat, .5); }
    for (let i = 0; i < n; i++) for (let j = 0; j < np; j++) { const i2 = (i + 1) % n, a0 = base + i * np + j, a1 = base + i * np + (j + 1) % np, b0 = base + i2 * np + j, b1 = base + i2 * np + (j + 1) % np; G.I.push(a0, b0, a1, a1, b0, b1); }
  }
  function ring(G, R, n, offset, blk, spc, rl) {
    const per = TAU / n, sh = per * .075, gap = .35 * D2R;
    for (let s = 0; s < n; s++) { const c = offset + s * per;
      block(G, R, c - sh, c + sh, spc, 1, rnd());
      block(G, R, c + sh + gap, c + per - sh - gap, blk, 0, rnd()); }
    rail(G, R, rl, 2);
  }
  function pin(G, x0, x1, r, mat) {   /* a turned steel pin along local x */
    const n = 24, base = G.V.length / 12;
    for (const x of [x0, x1]) for (let i = 0; i < n; i++) { const t = i / n * TAU; G.V.push(x, Math.cos(t) * r, Math.sin(t) * r, 0, Math.cos(t), Math.sin(t), x * 6, Math.cos(t), Math.sin(t), .5, mat, .3); }
    for (let i = 0; i < n; i++) { const j = (i + 1) % n; G.I.push(base + i, base + n + i, base + j, base + j, base + n + i, base + n + j); }
  }
  function sphere(G, r) {
    const la = 56, lo = 96, base = G.V.length / 12;
    for (let i = 0; i <= la; i++) { const v = i / la * PI; for (let j = 0; j <= lo; j++) { const u = j / lo * TAU, x = Math.sin(v) * Math.cos(u), y = Math.cos(v), z = Math.sin(v) * Math.sin(u); G.V.push(x * r, y * r, z * r, x, y, z, 0, 0, 0, .5, 3, 0); } }
    for (let i = 0; i < la; i++) for (let j = 0; j < lo; j++) { const a = base + i * (lo + 1) + j, b = a + lo + 1; G.I.push(a, b, a + 1, a + 1, b, b + 1); }
  }

  /* ---------- the instrument ---------- */
  const RO = 1, RI = .8, CORE_R = .4, FY = -1.105, PSI = -8 * D2R;
  const OUT = { blk: { a: .066, b: .1, c: .016 }, spc: { a: .052, b: .08, c: .01 }, rl: { a: .03, b: .046, c: .012 } };
  const INN = { blk: { a: .05, b: .074, c: .013 }, spc: { a: .043, b: .062, c: .01 }, rl: { a: .024, b: .036, c: .01 } };

  /* ---------- shaders ---------- */
  const COMMON = `precision highp float;
  #define PI 3.14159265
  uniform vec3 uEye, uCore, uGlowP, uGlowC, uL0, uT0, uL1, uT1, uL2, uT2, uL3, uT3;
  uniform float uCoreR, uDim;
  uniform vec2 uC, uRes; uniform float uAsp, uT, uGlow, uObj;
  float sat(float x){return clamp(x,0.,1.);}
  float h21(vec2 p){p=fract(p*vec2(123.34,456.21));p+=dot(p,p+45.32);return fract(p.x*p.y);}
  float vn(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(h21(i),h21(i+vec2(1,0)),f.x),mix(h21(i+vec2(0,1)),h21(i+1.),f.x),f.y);}
  /* a rectangular soft light seen along R, widened and dimmed by roughness: a cheap prefiltered area light */
  vec2 boxq(vec3 R, vec3 L, vec3 T){float d=dot(R,L);return d<=0.?vec2(1e3):vec2(dot(R,T),dot(R,cross(L,T)))/d;}
  float softbox(vec2 q, vec2 hs, float r){float s=.008+r*r*1.4+r*.12;vec2 e=1.-smoothstep(hs-s,hs+s,abs(q));vec2 g=q/(hs+s);return e.x*e.y*(1.-.6*dot(g,g))*(hs.x*hs.y)/((hs.x+s)*(hs.y+s));}
  vec3 env(vec3 R, float r){
    float y=R.y;
    vec3 c=mix(vec3(.004,.006,.013),vec3(.018,.03,.062),smoothstep(-.2,.55,y));
    c+=vec3(.07,.065,.07)*exp(-y*y*22.)+vec3(.03,.02,.012)*sat(-y);
    c+=vec3(6.,5.3,4.5)*softbox(boxq(R,uL0,uT0),vec2(.42,.17),r)+vec3(.3,.25,.2)*softbox(boxq(R,uL0,uT0),vec2(1.,.6),r);          /* overhead key softbox */
    c+=vec3(1.3,1.6,2.1)*softbox(boxq(R,uL1,uT1),vec2(.07,.95),r);          /* cool rim strip, back right */
    c+=vec3(2.4,1.45,.62)*softbox(boxq(R,uL2,uT2),vec2(.055,.85),r);        /* warm kicker strip, back left */
    vec2 q=boxq(R,uL3,uT3);                                                 /* the room in front: a dim wall of tall windows */
    float win=mix(step(.07,fract(q.x*.9+.5))*step(.05,fract(q.y*.8+.2)),.85,sat(r*2.5));
    c+=vec3(.42,.3,.2)*win*softbox(q,vec2(1.5,.32),r);
    c+=vec3(.2,.11,.04)*smoothstep(-.1,-.5,y)*(1.-smoothstep(-.6,-.95,y));   /* the warm pool on the floor below */
    return c;
  }
  /* the gold core as it appears in a reflection from P along R */
  vec3 coreSeen(vec3 P, vec3 R, float r, vec3 e){
    vec3 oc=P-uCore; float b=dot(oc,R); if(b>0.) return e;
    float d=sqrt(max(dot(oc,oc)-b*b,0.)), m=1.-smoothstep(uCoreR*(1.-r*.6),uCoreR*(1.+r*1.4),d);
    vec3 n=normalize(oc+R*(-b-sqrt(max(uCoreR*uCoreR-d*d,0.))));
    vec3 g=vec3(1.,.74,.32)*(env(reflect(R,n),.1)*.9+vec3(.25,.16,.06));
    return mix(e,g,m);
  }
  vec3 backdrop(vec2 uv){
    vec2 p=(uv-uC)*vec2(uAsp,1.); float d0=length(p), d=d0/uObj; vec2 dir=p/max(d0,1e-4);
    vec3 c=mix(vec3(.011,.019,.044),vec3(.003,.005,.013),smoothstep(0.,1.1,d0));
    c+=vec3(.008,.013,.03)*exp(-d*d*4.);
    float ray=vn(dir*13.+uT*.02)*.6+vn(dir*33.+3.1-uT*.015)*.4; ray=pow(ray,5.)*2.2;
    float up=.35+.65*smoothstep(-.5,.9,dir.y);
    c+=vec3(1.,.66,.3)*ray*up*exp(-d*7.5)*uGlow;
    c+=vec3(1.1,.72,.32)*exp(-d*d*50.)*uGlow;
    return c;
  }
  float dGGX(float NoH,float a){float a2=a*a,d=NoH*NoH*(a2-1.)+1.;return a2/(PI*d*d);}
  /* the warm light that hangs behind the core, as a small sphere light */
  vec3 glow(vec3 P, vec3 N, vec3 V, vec3 F0, float r){
    vec3 Ld=uGlowP-P; float d2=dot(Ld,Ld), d=sqrt(d2); vec3 L=Ld/d; float NoL=dot(N,L); if(NoL<=0.) return vec3(0);
    vec3 H=normalize(L+V); float a=max(r*r,.002), a2=sat(a+.22/(2.*d)), NoV=max(dot(N,V),1e-3), k=a*.5;
    float D=dGGX(sat(dot(N,H)),a2)*(a*a)/(a2*a2), Vs=.25/((NoV*(1.-k)+k)*(NoL*(1.-k)+k));
    vec3 F=F0+(1.-F0)*pow(1.-sat(dot(V,H)),5.);
    /* the core stands between the light and anything behind it */
    vec3 oc=P-uCore; float b=dot(oc,L), sh=1.; if(b<0.){float dd=sqrt(max(dot(oc,oc)-b*b,0.)); if(-b<d) sh=smoothstep(uCoreR*.8,uCoreR*1.25,dd);}
    return F*D*Vs*NoL*uGlowC/max(d2,.35)*sh;
  }`;
  const MESH_VS = `#version 300 es
  layout(location=0) in vec3 aP; layout(location=1) in vec3 aN; layout(location=2) in vec4 aA; layout(location=3) in vec2 aM;
  uniform mat4 uModel, uVP, uPost;
  out vec3 vP, vN; out vec4 vA; out vec2 vM;
  void main(){vec4 w=uModel*vec4(aP,1.);vP=w.xyz;vN=mat3(uModel)*aN;vA=aA;vM=aM;gl_Position=uVP*uPost*w;}`;
  const RING_FS = `#version 300 es
  ${COMMON}
  in vec3 vP, vN; in vec4 vA; in vec2 vM; out vec4 o;
  void main(){
    vec3 N=normalize(vN), V=normalize(uEye-vP); if(dot(N,V)<0.) N=normalize(N-V*dot(N,V)*1.02);
    float NoV=max(dot(N,V),1e-3), id=vM.x, vr=vM.y, r; vec3 F0;
    if(id<.5){F0=mix(vec3(.72,.46,.32),vec3(.88,.62,.45),vr);r=.15+vr*.07;}       /* machined copper-bronze */
    else if(id<1.5){F0=vec3(.30,.31,.335);r=.27;}                               /* gunmetal spacers and pins */
    else{F0=vec3(.16,.17,.19);r=.36;}                                          /* the dark rail */
    float across=vA.y*.55+vA.z;
    float st=vn(vec2(vA.x*2.,across*150.))*.5+vn(vec2(vA.x*9.,across*520.))*.5;   /* brushing runs along the arc */
    r=clamp(r+(st-.5)*.08,.05,1.);
    vec3 R=reflect(-V,N);
    vec3 Fe=F0+(max(vec3(1.-r),F0)-F0)*pow(1.-NoV,5.);
    vec3 e=coreSeen(vP,R,r,env(R,r));
    vec3 col=Fe*e*(.9+.2*st);
    col+=glow(vP,N,V,F0,r);
    col+=F0*.012*(.6+.4*N.y);
    float s=vA.w, ao=id<1.5?mix(.5,1.,smoothstep(0.,.07,min(s,1.-s))):.7;
    o=vec4(col*ao*uDim,1.);
  }`;
  const CORE_FS = `#version 300 es
  ${COMMON}
  uniform samplerCube uCube;
  in vec3 vP, vN; in vec4 vA; in vec2 vM; out vec4 o;
  void main(){
    vec3 N=normalize(vN), V=normalize(uEye-vP); float NoV=max(dot(N,V),1e-3);
    vec3 R=reflect(-V,N), F0=vec3(1.,.76,.33);
    vec4 cr=texture(uCube,R);
    vec3 e=mix(env(R,.05),cr.rgb,cr.a);
    vec3 col=(F0+(1.-F0)*pow(1.-NoV,5.))*e+glow(vP,N,V,F0,.06);
    o=vec4(col,1.);
  }`;
  const FLOOR_VS = `#version 300 es
  layout(location=0) in vec3 aP; uniform mat4 uVP; out vec3 vP;
  void main(){vP=aP;gl_Position=uVP*vec4(aP,1.);}`;
  const FLOOR_FS = `#version 300 es
  ${COMMON}
  uniform sampler2D uRefl;
  in vec3 vP; out vec4 o;
  float line(float rr,float R0,float w){float fw=fwidth(rr);return 1.-smoothstep(w,w+fw*1.4,abs(rr-R0));}
  void main(){
    vec2 q=vP.xz-uCore.xz; float rr=length(q);
    vec3 V=normalize(uEye-vP); float NoV=sat(V.y), F=.04+.96*pow(1.-NoV,5.), k=mix(.5,.95,F)*(1.+.35*exp(-rr*rr*.6));
    float bl=.0018+max(rr-.75,0.)*.016, lod=clamp(log2(1.+bl*uRes.y*.25),.6,5.);
    vec2 uv=gl_FragCoord.xy/uRes, ax=vec2(bl/uAsp,bl);
    vec4 rf=textureLod(uRefl,uv,lod)*.28;
    for(int i=0;i<6;i++){float a=float(i)*1.0472+.4;rf+=textureLod(uRefl,uv+vec2(cos(a),sin(a))*ax,lod)*.12;}
    vec3 base=vec3(.002,.004,.009)+vec3(.09,.055,.022)*exp(-rr*rr*.8)+vec3(.006,.01,.024)*exp(-rr*.5);
    vec3 col=base*(1.-rf.a*k*.85)+rf.rgb*k;
    float L=line(rr,1.24,.003)+line(rr,1.33,.0022)*.6+line(rr,1.62,.0035)+line(rr,1.69,.0022)*.55+line(rr,1.98,.0035)*.85;
    float lit=.35+.65*sat(dot(normalize(vec3(q.x,0.,q.y)+1e-4),normalize(vec3(-.4,0.,.9)))*.5+.5);
    col+=L*vec3(.14,.15,.19)*lit*exp(-rr*.42)*smoothstep(2.6,1.9,rr);
    col=mix(col,backdrop(gl_FragCoord.xy/uRes),smoothstep(.72,1.85,length(vP-uEye)/length(uEye)));
    o=vec4(col,1.);
  }`;
  const FS_VS = `#version 300 es
  out vec2 vUV; void main(){vec2 p=vec2((gl_VertexID<<1)&2,gl_VertexID&2);vUV=p;gl_Position=vec4(p*2.-1.,0.,1.);}`;
  const BG_FS = `#version 300 es
  ${COMMON}
  in vec2 vUV; out vec4 o;
  void main(){o=vec4(backdrop(vUV),1.);}`;
  const BRIGHT_FS = `#version 300 es
  precision highp float; uniform sampler2D uSrc; uniform vec2 uTx; in vec2 vUV; out vec4 o;
  void main(){vec3 c=(texture(uSrc,vUV+uTx*vec2(-.5,-.5)).rgb+texture(uSrc,vUV+uTx*vec2(.5,-.5)).rgb+texture(uSrc,vUV+uTx*vec2(-.5,.5)).rgb+texture(uSrc,vUV+uTx*vec2(.5,.5)).rgb)*.25;
    float l=max(c.r,max(c.g,c.b)); o=vec4(c*smoothstep(1.,3.2,l),1.);}`;
  const DOWN_FS = `#version 300 es
  precision highp float; uniform sampler2D uSrc; uniform vec2 uTx; in vec2 vUV; out vec4 o;
  void main(){o=vec4((texture(uSrc,vUV+uTx*vec2(-1,-1)).rgb+texture(uSrc,vUV+uTx*vec2(1,-1)).rgb+texture(uSrc,vUV+uTx*vec2(-1,1)).rgb+texture(uSrc,vUV+uTx*vec2(1,1)).rgb)*.25,1.);}`;
  const UP_FS = `#version 300 es
  precision highp float; uniform sampler2D uSrc; uniform vec2 uTx; in vec2 vUV; out vec4 o;
  void main(){vec3 c=texture(uSrc,vUV).rgb*4.;
    c+=(texture(uSrc,vUV+uTx*vec2(-1,0)).rgb+texture(uSrc,vUV+uTx*vec2(1,0)).rgb+texture(uSrc,vUV+uTx*vec2(0,-1)).rgb+texture(uSrc,vUV+uTx*vec2(0,1)).rgb)*2.;
    c+=texture(uSrc,vUV+uTx*vec2(-1,-1)).rgb+texture(uSrc,vUV+uTx*vec2(1,-1)).rgb+texture(uSrc,vUV+uTx*vec2(-1,1)).rgb+texture(uSrc,vUV+uTx*vec2(1,1)).rgb;
    o=vec4(c/16.,1.);}`;
  const COMP_FS = `#version 300 es
  precision highp float; uniform sampler2D uScene, uBloom; uniform float uExpo, uBloomK, uT; in vec2 vUV; out vec4 o;
  float h21(vec2 p){p=fract(p*vec2(123.34,456.21));p+=dot(p,p+45.32);return fract(p.x*p.y);}
  vec3 aces(vec3 x){return clamp((x*(2.51*x+.03))/(x*(2.43*x+.59)+.14),0.,1.);}
  void main(){
    vec3 c=texture(uScene,vUV).rgb+texture(uBloom,vUV).rgb*uBloomK;
    c=aces(c*uExpo);
    vec2 q=vUV-vec2(.62,.5); c*=1.-dot(q,q)*.5;
    c=pow(c,vec3(1./2.2));
    c+=(h21(gl_FragCoord.xy+fract(uT*7.)*113.)-.5)*.022;
    o=vec4(c,1.);
  }`;

  /* ---------- GL plumbing ---------- */
  let gl, P = {}, MESH = {}, RT = {}, HF = false, W = 0, H = 0, dpr = 1, scale = 1, raf = 0, visible = true, alive = false;
  function prog(vs, fs) {
    const p = gl.createProgram();
    for (const [t, s] of [[gl.VERTEX_SHADER, vs], [gl.FRAGMENT_SHADER, fs]]) { const sh = gl.createShader(t); gl.shaderSource(sh, s); gl.compileShader(sh);
      if (!gl.getShaderParameter(sh, gl.COMPILE_STATUS)) throw new Error('orrery shader: ' + gl.getShaderInfoLog(sh)); gl.attachShader(p, sh); }
    gl.linkProgram(p); if (!gl.getProgramParameter(p, gl.LINK_STATUS)) throw new Error('orrery link: ' + gl.getProgramInfoLog(p));
    const u = {}; return { p, u: n => n in u ? u[n] : (u[n] = gl.getUniformLocation(p, n)) };
  }
  function mesh(G, stride = 12) {
    const vao = gl.createVertexArray(); gl.bindVertexArray(vao);
    const vb = gl.createBuffer(); gl.bindBuffer(gl.ARRAY_BUFFER, vb); gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(G.V), gl.STATIC_DRAW);
    const ib = gl.createBuffer(); gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, ib); gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint32Array(G.I), gl.STATIC_DRAW);
    const L = stride === 12 ? [[0, 3, 0], [1, 3, 3], [2, 4, 6], [3, 2, 10]] : [[0, 3, 0]];
    for (const [i, n, o] of L) { gl.enableVertexAttribArray(i); gl.vertexAttribPointer(i, n, gl.FLOAT, false, stride * 4, o * 4); }
    gl.bindVertexArray(null); return { vao, n: G.I.length };
  }
  const FMT = () => HF ? [gl.RGBA16F, gl.RGBA, gl.HALF_FLOAT] : [gl.RGBA8, gl.RGBA, gl.UNSIGNED_BYTE];
  function tex(w, h, mips) {
    const t = gl.createTexture(), [i, f, ty] = FMT(); gl.bindTexture(gl.TEXTURE_2D, t);
    gl.texImage2D(gl.TEXTURE_2D, 0, i, w, h, 0, f, ty, null);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, mips ? gl.LINEAR_MIPMAP_LINEAR : gl.LINEAR); gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE); gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    if (mips) gl.generateMipmap(gl.TEXTURE_2D);
    return t;
  }
  function fbo(t, w, h, depth) {
    const f = gl.createFramebuffer(); gl.bindFramebuffer(gl.FRAMEBUFFER, f); gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, t, 0);
    if (depth) { const d = gl.createRenderbuffer(); gl.bindRenderbuffer(gl.RENDERBUFFER, d); gl.renderbufferStorage(gl.RENDERBUFFER, gl.DEPTH_COMPONENT24, w, h); gl.framebufferRenderbuffer(gl.FRAMEBUFFER, gl.DEPTH_ATTACHMENT, gl.RENDERBUFFER, d); }
    return { f, t, w, h };
  }
  function targets() {
    for (const k in RT) { const r = RT[k]; if (!r) continue; for (const x of [].concat(r)) { if (x.f) gl.deleteFramebuffer(x.f); if (x.t) gl.deleteTexture(x.t); } }
    RT = {};
    const w = W, h = H, [i] = FMT();
    /* the scene: 4x multisampled colour and depth, resolved into a texture for the post pass */
    const ms = gl.createFramebuffer(); gl.bindFramebuffer(gl.FRAMEBUFFER, ms);
    const cr = gl.createRenderbuffer(); gl.bindRenderbuffer(gl.RENDERBUFFER, cr); gl.renderbufferStorageMultisample(gl.RENDERBUFFER, Math.min(4, gl.getParameter(gl.MAX_SAMPLES)), i, w, h); gl.framebufferRenderbuffer(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.RENDERBUFFER, cr);
    const dr = gl.createRenderbuffer(); gl.bindRenderbuffer(gl.RENDERBUFFER, dr); gl.renderbufferStorageMultisample(gl.RENDERBUFFER, Math.min(4, gl.getParameter(gl.MAX_SAMPLES)), gl.DEPTH_COMPONENT24, w, h); gl.framebufferRenderbuffer(gl.FRAMEBUFFER, gl.DEPTH_ATTACHMENT, gl.RENDERBUFFER, dr);
    RT.ms = { f: ms, w, h };
    RT.scene = fbo(tex(w, h), w, h, false);
    const rw = Math.max(2, w >> 1), rh = Math.max(2, h >> 1);
    RT.refl = fbo(tex(rw, rh, true), rw, rh, true);
    RT.bloom = []; let bw = w, bh = h;
    for (let l = 0; l < 6; l++) { bw = Math.max(2, bw >> 1); bh = Math.max(2, bh >> 1); RT.bloom.push(fbo(tex(bw, bh), bw, bh, false)); }
    if (!RT.cube) {
      const S = W < 900 ? 96 : 160, t = gl.createTexture(); gl.bindTexture(gl.TEXTURE_CUBE_MAP, t);
      for (let f = 0; f < 6; f++) gl.texImage2D(gl.TEXTURE_CUBE_MAP_POSITIVE_X + f, 0, i, S, S, 0, FMT()[1], FMT()[2], null);
      gl.texParameteri(gl.TEXTURE_CUBE_MAP, gl.TEXTURE_MIN_FILTER, gl.LINEAR); gl.texParameteri(gl.TEXTURE_CUBE_MAP, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
      const f = gl.createFramebuffer(), d = gl.createRenderbuffer(); gl.bindRenderbuffer(gl.RENDERBUFFER, d); gl.renderbufferStorage(gl.RENDERBUFFER, gl.DEPTH_COMPONENT24, S, S);
      gl.bindFramebuffer(gl.FRAMEBUFFER, f); gl.framebufferRenderbuffer(gl.FRAMEBUFFER, gl.DEPTH_ATTACHMENT, gl.RENDERBUFFER, d);
      RT.cube = { f, tc: t, S };
    }
    gl.bindFramebuffer(gl.FRAMEBUFFER, null);
  }

  function init() {
    gl = cv.getContext('webgl2', { antialias: false, alpha: false, depth: false, stencil: false, powerPreference: 'high-performance', preserveDrawingBuffer: false });
    if (!gl) return off('no webgl2');
    HF = !!gl.getExtension('EXT_color_buffer_float');
    P.ring = prog(MESH_VS, RING_FS); P.core = prog(MESH_VS, CORE_FS); P.floor = prog(FLOOR_VS, FLOOR_FS); P.bg = prog(FS_VS, BG_FS);
    P.bright = prog(FS_VS, BRIGHT_FS); P.down = prog(FS_VS, DOWN_FS); P.up = prog(FS_VS, UP_FS); P.comp = prog(FS_VS, COMP_FS);
    seed = 7;
    const go = { V: [], I: [] }; ring(go, RO, 20, PSI, OUT.blk, OUT.spc, OUT.rl);
    /* the pins that hold the inner ring inside the outer one, on the shared pivot axis */
    const gp = { V: [], I: [] }; for (const s of [1, -1]) { const x0 = s * (RI + INN.blk.a * .2), x1 = s * (RO - OUT.blk.a * .4); pin(gp, Math.min(x0, x1), Math.max(x0, x1), .024, 1); pin(gp, s > 0 ? x1 - .03 : x1 - .0, s > 0 ? x1 : x1 + .03, .038, 1); }
    const gi = { V: [], I: [] }; ring(gi, RI, 16, 0, INN.blk, INN.spc, INN.rl);
    const gc = { V: [], I: [] }; sphere(gc, CORE_R);
    const gf = { V: [-40, FY, -40, 40, FY, -40, 40, FY, 40, -40, FY, 40], I: [0, 1, 2, 0, 2, 3] };
    MESH = { outer: mesh(go), pins: mesh(gp), inner: mesh(gi), core: mesh(gc), floor: mesh(gf, 3) };
    MESH.empty = gl.createVertexArray();
    RT = {}; size(true); alive = true; API.ok = true;
  }

  /* ---------- layout: where the instrument sits on the canvas ---------- */
  let stacked = false, fr = { sx: .42, sy: .1, k: 1.7, o: .345 };
  function size(force) {
    const w = cv.clientWidth, h = cv.clientHeight; if (!w || !h) return;
    stacked = innerWidth <= 820 || (innerWidth < 1100 && innerHeight > innerWidth);
    const cap = stacked ? 1.75 : 2;
    dpr = Math.min(cap, devicePixelRatio || 1) * scale;
    const cw = Math.round(w * dpr), ch = Math.round(h * dpr);
    if (!force && cw === W && ch === H) return;
    W = cv.width = cw; H = cv.height = ch;
    const vh = Math.min(h, innerHeight);
    if (stacked) {   /* phones and portrait tablets: below the copy, centred */
      const room = parseFloat(getComputedStyle(hero).paddingBottom) || vh * .46;
      const rpx = Math.min(w * .38, (room - 24) / 2.7), cy = h - room * .6;
      fr = { sx: 0, sy: 1 - 2 * cy / h, k: 1.08 * h / (2 * rpx), o: rpx / h };
    } else {
      /* keep the instrument clear of the copy: measure where the longest line ends */
      const hb = hero.getBoundingClientRect().left, cr = Math.max(0, ...[...hero.querySelectorAll('.hero-copy>*:not(.hero-fact)')].map(e => e.getBoundingClientRect().right - hb));
      const rpx = Math.min(vh * .345, w * .225, Math.max((w - cr - 20) / 2.3, w * .19)), cx = Math.min(w - rpx * 1.15, Math.max(w - Math.max(rpx * 1.42, w * .29), cr + 20 + rpx * 1.15));
      fr = { sx: 2 * cx / w - 1, sy: 1 - 2 * (vh * .47) / h, k: 1.08 * h / (2 * rpx), o: rpx / h };
    }
    if (gl) targets();
  }

  /* ---------- frame ---------- */
  const FOV = 30 * D2R, TANH = Math.tan(FOV / 2);
  const L0 = norm([-.32, 1, .42]), L1 = norm([.95, .3, -.5]), L2 = norm([-.92, .28, -.42]), L3 = norm([.15, .42, 1]);
  const T0 = norm(cross([0, 0, 1], L0)), T1 = norm(cross([0, 1, 0], L1)), T2 = norm(cross([0, 1, 0], L2)), T3 = norm(cross([0, 1, 0], L3));
  const CUBE = [[[1, 0, 0], [0, -1, 0]], [[-1, 0, 0], [0, -1, 0]], [[0, 1, 0], [0, 0, 1]], [[0, -1, 0], [0, 0, -1]], [[0, 0, 1], [0, -1, 0]], [[0, 0, -1], [0, -1, 0]]];
  const MIRROR = (() => { const m = m4(); m[5] = -1; m[13] = 2 * FY; return m; })(), ID = m4();
  const ptr = { x: 0, y: 0, tx: 0, ty: 0 };
  let t0 = performance.now(), introT = 0, frameN = 0;

  function common(p, eye, glowK) {
    gl.useProgram(p.p);
    gl.uniform3fv(p.u('uEye'), eye); gl.uniform3fv(p.u('uCore'), [0, 0, 0]); gl.uniform1f(p.u('uCoreR'), CORE_R); gl.uniform1f(p.u('uDim'), 1);
    gl.uniform3fv(p.u('uGlowP'), [-.05, .2, -.72]); gl.uniform3fv(p.u('uGlowC'), [1.25 * glowK, .8 * glowK, .34 * glowK]);
    gl.uniform3fv(p.u('uL0'), L0); gl.uniform3fv(p.u('uT0'), T0); gl.uniform3fv(p.u('uL1'), L1); gl.uniform3fv(p.u('uT1'), T1);
    gl.uniform3fv(p.u('uL2'), L2); gl.uniform3fv(p.u('uT2'), T2); gl.uniform3fv(p.u('uL3'), L3); gl.uniform3fv(p.u('uT3'), T3);
  }
  function drawMesh(p, m, model, vp, post) {
    gl.uniformMatrix4fv(p.u('uModel'), false, model); gl.uniformMatrix4fv(p.u('uVP'), false, vp); gl.uniformMatrix4fv(p.u('uPost'), false, post);
    gl.bindVertexArray(m.vao); gl.drawElements(gl.TRIANGLES, m.n, gl.UNSIGNED_INT, 0);
  }
  function quad(p, target, w, h) { gl.bindFramebuffer(gl.FRAMEBUFFER, target); gl.viewport(0, 0, w, h); gl.useProgram(p.p); gl.bindVertexArray(MESH.empty); gl.drawArrays(gl.TRIANGLES, 0, 3); }
  const bind = (unit, t, cube) => { gl.activeTexture(gl.TEXTURE0 + unit); gl.bindTexture(cube ? gl.TEXTURE_CUBE_MAP : gl.TEXTURE_2D, t); };

  function render(now) {
    const t = FIXED_T !== null ? FIXED_T : (reduced.matches ? 30 : (now - t0) / 1000);
    const intro = FIXED_T !== null || reduced.matches ? 1 : ease(clamp(t / 2.6));
    const hr = hero.getBoundingClientRect(), al = reduced.matches || FIXED_T !== null ? 0 : smooth(clamp(-hr.top / (hr.height * .85)));   /* scroll brings the rings into one plane */
    ptr.x += (ptr.tx - ptr.x) * .05; ptr.y += (ptr.ty - ptr.y) * .05;
    /* the instrument: outer ring turned a little from the viewer, the inner ring nearly across it, both breathing slowly */
    const yawO = lerp(-33 * D2R + .07 * Math.sin(t * .13) + (1 - intro) * 50 * D2R, -6 * D2R, al);
    const leanO = lerp(-4 * D2R, 0, al);
    const phi = lerp(-66 * D2R + .07 * Math.sin(t * .19 + 1) + (1 - intro) * 40 * D2R, 0, al);
    const outer = mul(ry(yawO), rx(leanO)), frame = mul(outer, rz(PSI)), inner = mul(frame, rx(phi));
    /* camera */
    const az = .1 * ptr.x + (stacked ? -.08 : 0), el = (8 + 3 * al) * D2R - .04 * ptr.y, D = fr.k / TANH;
    const eye = [Math.sin(az) * Math.cos(el) * D, Math.sin(el) * D, Math.cos(az) * Math.cos(el) * D];
    const view = lookAt(eye, [0, 0, 0], [0, 1, 0]), proj = persp(FOV, W / H, .1, 80, fr.sx, fr.sy), vp = mul(proj, view);
    const glowK = .35 + .65 * intro;

    gl.enable(gl.DEPTH_TEST); gl.disable(gl.BLEND); gl.disable(gl.CULL_FACE);
    const rings = (p, vpM, post) => { drawMesh(p, MESH.outer, outer, vpM, post); drawMesh(p, MESH.pins, frame, vpM, post); drawMesh(p, MESH.inner, inner, vpM, post); };
    /* 1. what the gold core sees: the rings, into a small cube map */
    if (frameN % (stacked ? 2 : 1) === 0 || frameN < 2) {
      const C = RT.cube, cp = persp(HALF, 1, .05, 20, 0, 0); gl.bindFramebuffer(gl.FRAMEBUFFER, C.f); gl.viewport(0, 0, C.S, C.S);
      common(P.ring, [0, 0, 0], glowK); gl.uniform1f(P.ring.u('uDim'), .35);
      for (let f = 0; f < 6; f++) { gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_CUBE_MAP_POSITIVE_X + f, C.tc, 0);
        gl.clearColor(0, 0, 0, 0); gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
        rings(P.ring, mul(cp, lookAt([0, 0, 0], CUBE[f][0], CUBE[f][1])), ID); }
    }
    /* 2. the floor's mirror image: the scene reflected through the floor plane, shaded from the mirrored eye */
    const meye = [eye[0], 2 * FY - eye[1], eye[2]];
    gl.bindFramebuffer(gl.FRAMEBUFFER, RT.refl.f); gl.viewport(0, 0, RT.refl.w, RT.refl.h); gl.clearColor(0, 0, 0, 0); gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
    common(P.ring, meye, glowK); rings(P.ring, vp, MIRROR);
    common(P.core, meye, glowK); bind(0, RT.cube.tc, true); gl.uniform1i(P.core.u('uCube'), 0); drawMesh(P.core, MESH.core, ID, vp, MIRROR);
    gl.bindFramebuffer(gl.FRAMEBUFFER, null); bind(0, RT.refl.t); gl.generateMipmap(gl.TEXTURE_2D);
    /* 3. the scene */
    gl.bindFramebuffer(gl.FRAMEBUFFER, RT.ms.f); gl.viewport(0, 0, W, H); gl.clear(gl.DEPTH_BUFFER_BIT);
    gl.disable(gl.DEPTH_TEST);
    const cc = xf(vp, [0, 0, 0]), cw = vp[3] * 0 + vp[7] * 0 + vp[11] * 0 + vp[15];
    const bd = p => { gl.uniform2f(p.u('uC'), (cc[0] / cw) * .5 + .5, (cc[1] / cw) * .5 + .5); gl.uniform1f(p.u('uAsp'), W / H); gl.uniform1f(p.u('uT'), t); gl.uniform1f(p.u('uGlow'), glowK); gl.uniform2f(p.u('uRes'), W, H); gl.uniform1f(p.u('uObj'), fr.o / .345); };
    common(P.bg, eye, glowK); bd(P.bg); quad(P.bg, RT.ms.f, W, H);
    gl.enable(gl.DEPTH_TEST);
    common(P.floor, eye, glowK); bind(0, RT.refl.t); gl.uniform1i(P.floor.u('uRefl'), 0); bd(P.floor);
    gl.uniformMatrix4fv(P.floor.u('uVP'), false, vp); gl.bindVertexArray(MESH.floor.vao); gl.drawElements(gl.TRIANGLES, 6, gl.UNSIGNED_INT, 0);
    common(P.ring, eye, glowK); rings(P.ring, vp, ID);
    common(P.core, eye, glowK); bind(0, RT.cube.tc, true); gl.uniform1i(P.core.u('uCube'), 0); drawMesh(P.core, MESH.core, ID, vp, ID);
    gl.disable(gl.DEPTH_TEST);
    gl.bindFramebuffer(gl.READ_FRAMEBUFFER, RT.ms.f); gl.bindFramebuffer(gl.DRAW_FRAMEBUFFER, RT.scene.f);
    gl.blitFramebuffer(0, 0, W, H, 0, 0, W, H, gl.COLOR_BUFFER_BIT, gl.NEAREST);
    /* 4. bloom */
    const B = RT.bloom;
    bind(0, RT.scene.t); gl.useProgram(P.bright.p); gl.uniform1i(P.bright.u('uSrc'), 0); gl.uniform2f(P.bright.u('uTx'), 1 / W, 1 / H); quad(P.bright, B[0].f, B[0].w, B[0].h);
    for (let l = 1; l < B.length; l++) { bind(0, B[l - 1].t); gl.useProgram(P.down.p); gl.uniform1i(P.down.u('uSrc'), 0); gl.uniform2f(P.down.u('uTx'), 1 / B[l - 1].w, 1 / B[l - 1].h); quad(P.down, B[l].f, B[l].w, B[l].h); }
    gl.enable(gl.BLEND); gl.blendFunc(gl.ONE, gl.ONE);
    for (let l = B.length - 1; l > 0; l--) { bind(0, B[l].t); gl.useProgram(P.up.p); gl.uniform1i(P.up.u('uSrc'), 0); gl.uniform2f(P.up.u('uTx'), 1 / B[l].w, 1 / B[l].h); quad(P.up, B[l - 1].f, B[l - 1].w, B[l - 1].h); }
    gl.disable(gl.BLEND);
    /* 5. tone map to the canvas */
    gl.useProgram(P.comp.p); bind(0, RT.scene.t); bind(1, B[0].t); gl.uniform1i(P.comp.u('uScene'), 0); gl.uniform1i(P.comp.u('uBloom'), 1);
    gl.uniform1f(P.comp.u('uExpo'), 1.0); gl.uniform1f(P.comp.u('uBloomK'), .16); gl.uniform1f(P.comp.u('uT'), t);
    quad(P.comp, null, W, H);
    frameN++;
  }

  /* ---------- loop, visibility, input, resilience ---------- */
  const still = () => FIXED_T !== null || reduced.matches;
  let slow = 0, lastNow = 0;
  function tick(now) {
    raf = 0; if (!alive || !visible || document.hidden) return;
    const a = performance.now(); render(now); const c = performance.now() - a;
    API.ms = API.ms ? API.ms * .95 + c * .05 : c; API.frames++;
    /* a device that cannot keep up gets fewer pixels, twice at most */
    if (lastNow) { const d = now - lastNow; slow = d > 24 ? slow + 1 : Math.max(0, slow - 1); if (slow > 50 && scale > .6) { scale *= .8; slow = 0; size(true); } }
    lastNow = now;
    if (API.frames === 1) hero.classList.add('orrery-on');
    if (!still()) raf = requestAnimationFrame(tick);
  }
  const kick = () => { if (!raf && alive && visible && !document.hidden) { lastNow = 0; raf = requestAnimationFrame(tick); } };
  API.render = () => { if (alive) { render(performance.now()); return true; } return false; };

  try { init(); } catch (e) { console.error(e); return off('init failed'); }
  if (!alive) return;
  kick();
  new IntersectionObserver(es => { visible = es[0].isIntersecting; kick(); }).observe(hero);
  document.addEventListener('visibilitychange', kick);
  addEventListener('scroll', () => { if (still() && FIXED_T === null) kick(); }, { passive: true });
  let rt = 0; addEventListener('resize', () => { clearTimeout(rt); rt = setTimeout(() => { size(); if (still()) kick(); }, 60); });
  reduced.addEventListener('change', () => { t0 = performance.now(); kick(); });
  if (matchMedia('(pointer: fine)').matches) addEventListener('pointermove', e => { ptr.tx = clamp(e.clientX / innerWidth * 2 - 1, -1, 1); ptr.ty = clamp(e.clientY / innerHeight * 2 - 1, -1, 1); if (still()) return; kick(); }, { passive: true });
  cv.addEventListener('webglcontextlost', e => { e.preventDefault(); alive = false; cancelAnimationFrame(raf); raf = 0; off('context lost'); });
  cv.addEventListener('webglcontextrestored', () => { try { hero.classList.remove('orrery-off'); RT = {}; init(); kick(); } catch (e) { console.error(e); off('restore failed'); } });
})();
