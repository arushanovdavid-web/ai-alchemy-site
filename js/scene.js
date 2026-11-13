/**
 * AI Alchemy's holographic hero — real, dependency-free WebGL geometry.
 *
 * This is NOT a flat sprite, image transform, or pre-recorded animation.
 * Each transparent architectural plate is a set of three-dimensional faces,
 * trim meshes and illuminated traces rendered in perspective on the GPU.
 * The camera and object respond independently to pointer position.
 *
 * Constraints: WebGL1 compatible, no Three.js/CDN dependency, capped device
 * pixel ratio, pauses while offscreen, honors reduced motion, image fallback.
 */
(() => {
  'use strict';

  const stage = document.getElementById('hero-glass');
  const canvas = document.getElementById('core-canvas');
  if (!stage || !canvas) return;

  let frameId=0, firstFrameRendered=false, inViewport=true, disposed=false;
  let watchdogId=0, watchdogVisibleMs=0, watchdogLastVisible=0, provisional=false;
  // A-11r watchdog, two stages (visible time only; paused while the tab is hidden):
  //  - WATCHDOG_MS (1.5 s) with no completed first frame: show the labelled static
  //    preview *provisionally* (data-hero-state="provisional"). WebGL keeps
  //    initialising in the background. No console warning, and data-hero-renderer
  //    is not set to image-fallback, because this is not a final decision.
  //  - If a frame then draws, swap smoothly back to the live scene (CSS fades).
  //  - WATCHDOG_HARD_MS (5 s) with still no frame: the fallback becomes final
  //    (one warning, data-hero-renderer="image-fallback"), and later frames are ignored.
  // Throws and context loss skip all of this and fall back at once, permanently.
  const WATCHDOG_MS=1500;
  const WATCHDOG_HARD_MS=5000;
  const label = document.getElementById('hero-fallback-label');
  const finalLabel = label ? label.textContent.trim() : '';
  const PROVISIONAL_LABEL = 'Static preview shown while the 3D view loads.';

  const stopWatchdog = () => {
    if (watchdogId) { clearTimeout(watchdogId); watchdogId=0; }
  };

  const clearProvisional = () => {
    if (!provisional) return;
    provisional = false;
    stage.removeAttribute('data-hero-state');
    if (label) label.textContent = finalLabel;
  };

  const showProvisional = () => {
    if (provisional || disposed || firstFrameRendered) return;
    provisional = true;
    if (label) label.textContent = PROVISIONAL_LABEL;
    stage.setAttribute('data-hero-state', 'provisional');
  };

  const useFallback = (reason) => {
    if (disposed) return;
    disposed = true;
    if (frameId) { cancelAnimationFrame(frameId); frameId=0; }
    stopWatchdog();
    clearProvisional();
    stage.classList.remove('webgl-ready');
    stage.setAttribute('data-hero-renderer', 'image-fallback');
    console.warn('AI Alchemy hero: switching to static fallback.', reason || '');
  };

  const nextLimit = () => (provisional ? WATCHDOG_HARD_MS : WATCHDOG_MS);
  const watchdogRemaining = () => Math.max(0, nextLimit() - watchdogVisibleMs);

  // Applies whichever stage the visible time has reached. Returns true when final.
  const applyWatchdog = () => {
    if (watchdogVisibleMs >= WATCHDOG_HARD_MS) {
      useFallback('WebGL first frame did not render');
      return true;
    }
    if (watchdogVisibleMs >= WATCHDOG_MS) showProvisional();
    return false;
  };

  const tickWatchdog = () => {
    watchdogId=0;
    if (disposed || firstFrameRendered) return;
    if (document.hidden) return;
    const now=performance.now();
    if (watchdogLastVisible) watchdogVisibleMs += now - watchdogLastVisible;
    watchdogLastVisible=now;
    if (applyWatchdog()) return;
    watchdogId=setTimeout(tickWatchdog, watchdogRemaining());
  };

  const startWatchdog = () => {
    if (disposed || firstFrameRendered) return;
    if (document.hidden) {
      watchdogLastVisible=0;
      return;
    }
    watchdogLastVisible=performance.now();
    stopWatchdog();
    watchdogId=setTimeout(tickWatchdog, watchdogRemaining());
  };

  const onVisibilityForWatchdog = () => {
    if (disposed || firstFrameRendered) return;
    if (document.hidden) {
      if (watchdogLastVisible) {
        watchdogVisibleMs += performance.now() - watchdogLastVisible;
        watchdogLastVisible=0;
      }
      stopWatchdog();
      return;
    }
    if (applyWatchdog()) return;
    startWatchdog();
  };

  const media = matchMedia('(prefers-reduced-motion: reduce)');
  const finePointer = matchMedia('(pointer: fine)');
  let gl;
  try {
    gl = canvas.getContext('webgl', {
      alpha: true, antialias: true, depth: true, stencil: false,
      premultipliedAlpha: false, preserveDrawingBuffer: false,
      powerPreference: 'low-power'
    });
  } catch (error) {
    useFallback(error);
    return;
  }
  if (!gl) {
    useFallback('WebGL context unavailable');
    return;
  }

  const vertexSource = `
    attribute vec3 aPosition;
    attribute vec4 aColor;
    uniform mat4 uMVP;
    varying vec4 vColor;
    void main() {
      gl_Position = uMVP * vec4(aPosition, 1.0);
      vColor = aColor;
    }
  `;
  const fragmentSource = `
    precision mediump float;
    varying vec4 vColor;
    void main() {
      gl_FragColor = vec4(vColor.rgb, vColor.a);
    }
  `;
  const pointVertexSource = `
    attribute vec3 aPosition;
    attribute vec4 aColor;
    attribute float aSize;
    uniform mat4 uMVP;
    uniform float uPixelRatio;
    varying vec4 vColor;
    void main() {
      gl_Position = uMVP * vec4(aPosition, 1.0);
      gl_PointSize = aSize * uPixelRatio;
      vColor = aColor;
    }
  `;
  const pointFragmentSource = `
    precision mediump float;
    varying vec4 vColor;
    void main() {
      float dist = length(gl_PointCoord - vec2(0.5));
      float a = (1.0 - smoothstep(0.07, 0.5, dist)) * vColor.a;
      gl_FragColor = vec4(vColor.rgb, a);
    }
  `;

  function compile(type, source) {
    const shader = gl.createShader(type);
    gl.shaderSource(shader, source);
    gl.compileShader(shader);
    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
      throw new Error('WebGL shader compilation failed: ' + gl.getShaderInfoLog(shader));
    }
    return shader;
  }
  function program(vs, fs) {
    const p = gl.createProgram();
    const v = compile(gl.VERTEX_SHADER, vs);
    const f = compile(gl.FRAGMENT_SHADER, fs);
    gl.attachShader(p, v);
    gl.attachShader(p, f);
    gl.linkProgram(p);
    gl.deleteShader(v);
    gl.deleteShader(f);
    if (!gl.getProgramParameter(p, gl.LINK_STATUS)) {
      throw new Error('WebGL program link failed: ' + gl.getProgramInfoLog(p));
    }
    return {
      value: p,
      position: gl.getAttribLocation(p, 'aPosition'),
      color: gl.getAttribLocation(p, 'aColor'),
      size: gl.getAttribLocation(p, 'aSize'),
      mvp: gl.getUniformLocation(p, 'uMVP'),
      pixelRatio: gl.getUniformLocation(p, 'uPixelRatio')
    };
  }

  let meshProgram, dotProgram;
  try {
    meshProgram = program(vertexSource, fragmentSource);
    dotProgram = program(pointVertexSource, pointFragmentSource);
  } catch (error) {
    useFallback(error);
    return;
  }
  stage.setAttribute('data-hero-renderer', 'webgl');

  try {
  // All matrices are column-major (WebGL convention).
  const multiply = (a, b) => {
    const o = new Float32Array(16);
    for (let col = 0; col < 4; col++) {
      for (let row = 0; row < 4; row++) {
        let v = 0;
        for (let k = 0; k < 4; k++) v += a[k * 4 + row] * b[col * 4 + k];
        o[col * 4 + row] = v;
      }
    }
    return o;
  };
  const identity = () => new Float32Array([
    1, 0, 0, 0,
    0, 1, 0, 0,
    0, 0, 1, 0,
    0, 0, 0, 1
  ]);
  const translate = (x, y, z) => {
    const m = identity();
    m[12] = x; m[13] = y; m[14] = z;
    return m;
  };
  const rotateY = (theta) => {
    const c = Math.cos(theta), s = Math.sin(theta);
    return new Float32Array([
      c, 0, -s, 0,
      0, 1, 0, 0,
      s, 0, c, 0,
      0, 0, 0, 1
    ]);
  };
  const rotateX = (theta) => {
    const c = Math.cos(theta), s = Math.sin(theta);
    return new Float32Array([
      1, 0, 0, 0,
      0, c, s, 0,
      0, -s, c, 0,
      0, 0, 0, 1
    ]);
  };
  const perspective = (fov, aspect, near, far) => {
    const f = 1 / Math.tan(fov / 2);
    const nf = 1 / (near - far);
    return new Float32Array([
      f / aspect, 0, 0, 0,
      0, f, 0, 0,
      0, 0, (far + near) * nf, -1,
      0, 0, (2 * far * near) * nf, 0
    ]);
  };
  const normalize = v => {
    const length = Math.hypot(...v) || 1;
    return v.map(x => x / length);
  };
  const subtract = (a, b) => a.map((v, i) => v - b[i]);
  const cross = (a, b) => [
    a[1] * b[2] - a[2] * b[1],
    a[2] * b[0] - a[0] * b[2],
    a[0] * b[1] - a[1] * b[0]
  ];
  const dot = (a, b) => a.reduce((sum, x, i) => sum + x * b[i], 0);
  const lookAt = (eye, center) => {
    const z = normalize(subtract(eye, center));
    const x = normalize(cross([0, 1, 0], z));
    const y = cross(z, x);
    return new Float32Array([
      x[0], y[0], z[0], 0,
      x[1], y[1], z[1], 0,
      x[2], y[2], z[2], 0,
      -dot(x, eye), -dot(y, eye), -dot(z, eye), 1
    ]);
  };

  const violet = [0.71, 0.40, 1.00];
  const purple = [0.43, 0.19, 1.00];
  const cyan = [0.19, 0.77, 1.00];
  const mint = [0.27, 1.00, 0.78];
  const blue = [0.31, 0.52, 1.00];
  const white = [0.88, 0.96, 1.00];

  const color = (c, alpha) => [c[0], c[1], c[2], alpha];
  const mix = (a, b, t) => a.map((v, i) => v * (1 - t) + b[i] * t);
  const dim = (a, scale) => a.map(v => v * scale);

  // CPU-side immutable 3D mesh buffer builder. We only animate matrices.
  class MeshBuilder {
    constructor() { this.data = []; }
    triangle(a, b, c, ca, cb = ca, cc = ca) {
      this.vertex(a, ca); this.vertex(b, cb); this.vertex(c, cc);
    }
    vertex(v, c) { this.data.push(v[0], v[1], v[2], c[0], c[1], c[2], c[3]); }
    quad(a, b, c, d, ca, cb = ca, cc = ca, cd = ca) {
      this.triangle(a, b, c, ca, cb, cc);
      this.triangle(a, c, d, ca, cc, cd);
    }
    rectangle(x1, x2, y, z1, z2, col) {
      this.quad([x1,y,z1], [x2,y,z1], [x2,y,z2], [x1,y,z2], col);
    }
    prism(x1, x2, y1, y2, z1, z2, top, side) {
      const a=[x1,y2,z1],b=[x2,y2,z1],c=[x2,y2,z2],d=[x1,y2,z2];
      const e=[x1,y1,z1],f=[x2,y1,z1],g=[x2,y1,z2],h=[x1,y1,z2];
      this.quad(a,b,c,d,top);
      this.quad(e,f,b,a,side);
      this.quad(f,g,c,b,side);
      this.quad(g,h,d,c,side);
      this.quad(h,e,a,d,side);
      this.quad(e,h,g,f,color(dim(side,0.75),side[3] || .7));
    }
  }

  function upload(builder) {
    const buffer = gl.createBuffer();
    const data = new Float32Array(builder.data);
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, data, gl.STATIC_DRAW);
    return {buffer, count:data.length / 7};
  }

  // Geometry: three individually animated, glass-like *3D* architectural slabs.
  function plate(width, depth, primary, secondary, index) {
    const face = new MeshBuilder();
    const accent = new MeshBuilder();
    const w = width / 2, d = depth / 2, h = .11;
    const top = h, bot = -h;
    const a = [-w,top,-d], b = [w,top,-d], c = [w,top,d], e = [-w,top,d];
    // Four-sided translucent glass shell, with distinct side shading.
    face.quad(a,b,c,e, color(mix(primary,blue,.36),.63), color(mix(secondary,blue,.45),.70), color(mix(primary,cyan,.55),.58), color(mix(primary,purple,.35),.63));
    face.quad([-w,bot,d],[w,bot,d],c,e,color(dim(primary,.20),.88),color(dim(secondary,.30),.84),color(mix(primary,cyan,.36),.72),color(dim(primary,.24),.75));
    face.quad([w,bot,-d],[w,bot,d],c,b,color(dim(secondary,.18),.65),color(dim(secondary,.38),.74),color(mix(secondary,cyan,.32),.72),color(mix(secondary,blue,.35),.65));
    face.quad([-w,bot,-d],[-w,bot,d],e,a,color(dim(primary,.22),.73),color(dim(primary,.3),.72),color(mix(primary,violet,.22),.65),color(dim(primary,.24),.64));
    face.quad([-w,bot,-d],[w,bot,-d],b,a,color(dim(primary,.12),.5));
    // Reflected atmosphere and etching in the upper sheet.
    face.rectangle(-w+.12,w-.12,top+.004,-d+.1,d-.1,color(mix(primary,secondary,.45),.16));
    const gridColor = color(mix(primary,cyan,.5), .10);
    for(let j=-3;j<=3;j++) {
      const x=j*w/3;
      face.rectangle(x-.003,x+.003,top+.009,-d+.11,d-.11,gridColor);
    }
    for(let j=-2;j<=2;j++) {
      const z=j*d/2;
      face.rectangle(-w+.11,w-.11,top+.01,z-.003,z+.003,gridColor);
    }
    // Bright neon trim around every exposed glass face (emissive ribbons).
    const edgeThickness=.025;
    const nearTop = color(mix(primary,white,.58),.94);
    const farTop = color(mix(secondary,white,.56),.96);
    const soft = color(mix(primary,secondary,.45),.24);
    const glowThickness=.07;
    for(const widthS of [glowThickness,edgeThickness]) {
      const glow = widthS===glowThickness;
      const ca = glow ? soft : nearTop;
      const cb = glow ? color(mix(secondary,cyan,.3),.22) : farTop;
      accent.rectangle(-w,w,top+.012,-d-widthS/2,-d+widthS/2,ca);
      accent.rectangle(-w,w,top+.012,d-widthS/2,d+widthS/2,cb);
      accent.rectangle(-w-widthS/2,-w+widthS/2,top+.012,-d,d,ca);
      accent.rectangle(w-widthS/2,w+widthS/2,top+.012,-d,d,cb);
    }
    // Light traces along the side lip: clearly visible from the front.
    face.quad([-w,bot+.01,d+.005],[w,bot+.01,d+.005],[w,bot+.047,d+.005],[-w,bot+.047,d+.005],
      color(mix(primary,cyan,.3),.18),color(mix(secondary,mint,.3),.24),color(mix(secondary,white,.25),.48),color(mix(primary,white,.2),.48));
    // Four small holographic corner anchors.
    const cornerColor=color(mix(primary,white,.62),.82);
    for(const x of [-w,w]) for(const z of [-d,d]) {
      accent.prism(x-.024,x+.024,top-.012,top+.024,z-.024,z+.024,cornerColor,color(primary,.5));
    }
    // Tiny circuitry traces on the middle glass shelf.
    if(index===1) {
      for(let i=0;i<4;i++) {
        const z=-.7+i*.44;
        face.rectangle(-1.15,.92,top+.018,z,z+.007,color(mix(mint,cyan,.4),.25));
        accent.rectangle(.65,1.05,top+.02,z-.012,z+.012,color(mint,.30));
      }
    }
    return {body:upload(face),trim:upload(accent)};
  }

  // Floating mark is a real top-facing polygon, not an image texture.
  function logoGeometry() {
    const builder=new MeshBuilder();
    const y=.175;
    const left=color(mix(violet,white,.44),.95);
    const right=color(mix(cyan,mint,.40),.99);
    // Two tapered strokes form AI Alchemy's angular A.
    builder.quad([-.73,y,.55],[-.44,y,.55],[.13,y,-.63],[-.07,y,-.63],left,left,color(cyan,.94),color(violet,.98));
    builder.quad([-.07,y,-.63],[.14,y,-.63],[.76,y,.55],[.43,y,.55],right,right,color(mint,.96),color(cyan,.93));
    builder.quad([-.24,y,.20],[.23,y,.20],[.38,y,.44],[-.39,y,.44],color(mix(violet,cyan,.5),.84));
    return upload(builder);
  }

  const plates = [
    {mesh:plate(3.53,2.55,blue,purple,2),y:-.93,phase:1.7},
    {mesh:plate(3.36,2.36,mint,cyan,1),y:.08,phase:.9},
    {mesh:plate(3.18,2.22,violet,cyan,0),y:1.15,phase:0},
  ];
  const logo = logoGeometry();

  function createDots() {
    const verts=[];
    function put(x,y,z,c,a,size) { verts.push(x,y,z,c[0],c[1],c[2],a,size); }
    // Each loop is a tilted ring in actual 3D space.
    for(let ring=0;ring<3;ring++) {
      const radiusX=[2.53,2.95,2.60][ring];
      const radiusZ=[1.92,2.06,2.47][ring];
      const palette=[violet,cyan,mint][ring];
      const theta=[.34,-.46,.74][ring];
      for(let i=0;i<200;i++) {
        const angle=i*2*Math.PI/200;
        const x=radiusX*Math.cos(angle), z=radiusZ*Math.sin(angle);
        const y=[.33,.18,-.05][ring] + Math.sin(angle*2+theta)*.66;
        const dotColor=mix(palette,white, .20+.16*Math.sin(angle*3));
        put(x,y,z,dotColor,.16+.34*Math.max(0,Math.sin(angle+ring)),1.1+(i%11===0?1.2:0));
      }
    }
    // A sparse star field accompanies the hologram.
    for(let i=0;i<130;i++) {
      const r=Math.sin(i*127.1+4)*43758.5453;
      const v=r-Math.floor(r);
      const angle=i*2.399963;
      const d=2.5+v*1.5;
      const x=d*Math.cos(angle),z=d*Math.sin(angle);
      const y=(Math.sin(i*17.3)*1.9);
      put(x,y,z,(i%3===0?mint:cyan),.05+.2*v,.7+1.4*v);
    }
    const buffer=gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER,buffer);
    gl.bufferData(gl.ARRAY_BUFFER,new Float32Array(verts),gl.STATIC_DRAW);
    return {buffer,count:verts.length/8};
  }
  const dots=createDots();

  function bindMesh(mesh, p) {
    gl.bindBuffer(gl.ARRAY_BUFFER,mesh.buffer);
    gl.enableVertexAttribArray(p.position);
    gl.vertexAttribPointer(p.position,3,gl.FLOAT,false,28,0);
    gl.enableVertexAttribArray(p.color);
    gl.vertexAttribPointer(p.color,4,gl.FLOAT,false,28,12);
  }
  function drawMesh(mesh, mvp, additive=false) {
    gl.useProgram(meshProgram.value);
    bindMesh(mesh,meshProgram);
    gl.uniformMatrix4fv(meshProgram.mvp,false,mvp);
    gl.blendFunc(gl.SRC_ALPHA,additive?gl.ONE:gl.ONE_MINUS_SRC_ALPHA);
    gl.drawArrays(gl.TRIANGLES,0,mesh.count);
  }
  function drawDots(mvp, ratio) {
    gl.useProgram(dotProgram.value);
    gl.bindBuffer(gl.ARRAY_BUFFER,dots.buffer);
    gl.enableVertexAttribArray(dotProgram.position);
    gl.vertexAttribPointer(dotProgram.position,3,gl.FLOAT,false,32,0);
    gl.enableVertexAttribArray(dotProgram.color);
    gl.vertexAttribPointer(dotProgram.color,4,gl.FLOAT,false,32,12);
    gl.enableVertexAttribArray(dotProgram.size);
    gl.vertexAttribPointer(dotProgram.size,1,gl.FLOAT,false,32,28);
    gl.uniformMatrix4fv(dotProgram.mvp,false,mvp);
    gl.uniform1f(dotProgram.pixelRatio,ratio);
    gl.blendFunc(gl.SRC_ALPHA,gl.ONE);
    gl.drawArrays(gl.POINTS,0,dots.count);
  }

  let pixels=1, width=1, height=1;
  let pointerX=0, pointerY=0, targetX=0, targetY=0;
  const start=performance.now();
  let lastFrame=0;

  function resize() {
    if(disposed) return;
    const bounds=canvas.getBoundingClientRect();
    if(bounds.width<2||bounds.height<2) return;
    pixels=Math.min(devicePixelRatio||1,1.65);
    width=Math.max(1,Math.floor(bounds.width*pixels));
    height=Math.max(1,Math.floor(bounds.height*pixels));
    if(canvas.width!==width || canvas.height!==height) {
      canvas.width=width;canvas.height=height;
      gl.viewport(0,0,width,height);
    }
    schedule();
  }

  function draw(now) {
    frameId=0;
    try {
    if(disposed||document.hidden||!inViewport) return;
    if(!media.matches && now-lastFrame<28) { schedule();return; }
    lastFrame=now;
    if(width<2||height<2) return;
    const t=media.matches?0:(now-start)*.001;
    // Finite, tightly bounded movements; native page scroll is unaffected.
    pointerX+=(targetX-pointerX)*.058;
    pointerY+=(targetY-pointerY)*.058;
    const yaw=.10 + pointerX*.12 + Math.sin(t*.20)*.045;
    const lean=pointerY*.07;
    const globalBob=media.matches?0:Math.sin(t*.85)*.045;

    gl.viewport(0,0,width,height);
    gl.clearColor(0,0,0,0);
    gl.clear(gl.COLOR_BUFFER_BIT|gl.DEPTH_BUFFER_BIT);
    gl.enable(gl.BLEND);
    gl.enable(gl.DEPTH_TEST);
    gl.depthFunc(gl.LEQUAL);
    gl.depthMask(false); // translucent holographic materials
    gl.disable(gl.CULL_FACE); // panels are translucent from both sides

    const aspect=width/height;
    const projection=perspective(36*Math.PI/180,aspect,.5,100);
    const view=lookAt([5.8+pointerX*.35,6.5+pointerY*.14,8.3],[0,.05,0]);
    const vp=multiply(projection,view);
    const root=multiply(translate(0,globalBob,0),multiply(rotateY(yaw),rotateX(lean)));
    const dotMVP=multiply(vp,root);
    // Dots render behind geometry in the same perspective space.
    drawDots(dotMVP,pixels);

    for(const plateInfo of plates) {
      const bob=media.matches?0:Math.sin(t*.79+plateInfo.phase)*.06;
      const plateModel=multiply(root,translate(0,plateInfo.y+bob,0));
      const mvp=multiply(vp,plateModel);
      drawMesh(plateInfo.mesh.body,mvp);
      drawMesh(plateInfo.mesh.trim,mvp,true);
      if(plateInfo===plates[2]) drawMesh(logo,mvp,true);
    }
    gl.depthMask(true);
    if(!firstFrameRendered) {
      // First successful draw: go live. If the provisional preview is showing,
      // the canvas/image opacity transitions make the swap back smooth.
      firstFrameRendered=true;
      stopWatchdog();
      clearProvisional();
      stage.classList.add('webgl-ready');
      stage.setAttribute('data-hero-renderer','webgl');
    }
    if(!media.matches) schedule();
    } catch (error) {
      useFallback(error);
    }
  }

  function schedule() {
    if(!frameId&&!disposed&&inViewport&&!document.hidden) {
      frameId=requestAnimationFrame(draw);
    }
  }

  function onPointer(event) {
    if(!finePointer.matches||media.matches) return;
    const bounds=stage.getBoundingClientRect();
    targetX=Math.max(-1,Math.min(1,(event.clientX-bounds.left)/bounds.width*2-1));
    targetY=Math.max(-1,Math.min(1,(event.clientY-bounds.top)/bounds.height*2-1));
  }
  const resetPointer=()=>{targetX=0;targetY=0;};
  stage.addEventListener('pointermove',onPointer,{passive:true});
  stage.addEventListener('pointerleave',resetPointer,{passive:true});
  document.addEventListener('visibilitychange',()=>{onVisibilityForWatchdog();schedule();});
  const onMotionChange=()=>{if(media.matches){targetX=0;targetY=0;}schedule();};
  media.addEventListener?.('change',onMotionChange);

  if('IntersectionObserver' in window) {
    const observer=new IntersectionObserver(entries=>{
      inViewport=entries[0]?.isIntersecting ?? true;
      if(inViewport) schedule();
      else if(frameId){cancelAnimationFrame(frameId);frameId=0;}
    },{rootMargin:'150px 0px'});
    observer.observe(stage);
  }
  const ro=('ResizeObserver' in window)?new ResizeObserver(resize):null;
  ro?.observe(stage);
  window.addEventListener('resize',resize,{passive:true});
  canvas.addEventListener('webglcontextlost',event=>{
    event.preventDefault();
    useFallback('WebGL context lost');
  });

  resize();
  startWatchdog();
  } catch (error) {
    useFallback(error);
  }
})();
