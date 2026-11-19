/* AI Alchemy — small fields. A shared engine for the little needle fields used on the homepage sheet and the inner pages.
   Each is a decorative canvas (aria-hidden) whose order is set by scroll position, and which the pointer can comb.
   Reduced motion draws each one in its settled state, without combing. No dependencies, no network requests.

   AAMini.add(canvas, spec), where spec has:
     make(w, h)            -> needles [{ x, y, l, a0, a1, k, grow }]   (a0 disordered angle, a1 ordered angle)
     prog(rect, vh)        -> 0..1 progress from scroll position (optional, default 1)
     ord(n, p, rect, vh)   -> 0..1 order for one needle
     tint(o, n)            -> 0..1 colour step between the palette ends
     pal                   -> optional [from, to] RGB arrays (default ink to violet)
     deco(ctx, w, h, p)    -> optional extra drawing (gold points, rings)
     intro                 -> optional milliseconds: p also runs from 0 to 1 over this time after the canvas first appears
*/
window.AAMini = (() => {
  'use strict';
  const root = document.documentElement;
  const still = root.classList.contains('static') || matchMedia('(prefers-reduced-motion: reduce)').matches;
  let seed = 11; const rnd = () => (seed = (seed * 16807) % 2147483647) / 2147483647;
  const C = (a, b) => Math.max(0, Math.min(1, a / b)), sm = (a, b, v) => { const t = C(v - a, b - a); return t * t * (3 - 2 * t); };
  const INK = [28, 32, 38], VIO = [31, 107, 92], SNOW = [185, 188, 192], LILAC = [227, 154, 114], GOLD = '#1F6B5C';
  const ramp = (A, B) => [0, .25, .5, .75, 1].map(t => `rgb(${A.map((v, i) => Math.round(v + (B[i] - v) * t)).join(',')})`);
  const DEF = ramp(INK, VIO);
  const noise = (x, y, s) => 1.9 * Math.sin(x * .061 + s) + 1.6 * Math.sin(y * .083 - s * 1.7) + 1.2 * Math.sin((x - y) * .047 + 2) + (rnd() - .5) * 1.1;
  const minis = [], B = [[], [], [], [], []], DPR = () => Math.min(devicePixelRatio || 1, 2);
  let raf = 0, last = 0, io = null;

  const draw = (m, vh, dt) => {
    const r = m.cv.getBoundingClientRect(), w = Math.round(r.width), h = Math.round(r.height); if (!w || !h) return false;
    if (w !== m.w || h !== m.h) { m.w = w; m.h = h; const d = DPR(); m.cv.width = w * d; m.cv.height = h * d; m.N = m.spec.make(w, h); m.key = ''; }
    const sp = m.spec, now = performance.now();
    if (sp.intro && !m.t0) m.t0 = now;
    const ti = sp.intro && !still ? C(now - m.t0, sp.intro) : 1, live = ti < 1;
    const p = still ? 1 : (sp.prog ? sp.prog(r, vh) : 1) * (sp.intro ? 1 - (1 - ti) ** 3 : 1), key = still ? 's' : Math.round(r.top) + '|' + ti.toFixed(3);
    m.e = still ? 0 : m.e * Math.exp(-dt * 2.2);
    if (key === m.key && m.e < .01) return false; m.key = key;
    const x = m.ctx, d = DPR(), R = 34, cols = m.cols;
    x.setTransform(d, 0, 0, d, 0, 0); x.clearRect(0, 0, w, h); x.lineCap = 'round'; x.lineWidth = sp.lw || 1.7; B.forEach(b => b.length = 0);
    for (const n of m.N) {
      const o = still ? sp.ord(n, 1, { top: -1e5, bottom: -1e5 }, vh) : sp.ord(n, p, r, vh);
      let dA = n.a1 - n.a0; dA -= Math.PI * Math.round(dA / Math.PI); let a = n.a0 + dA * o;
      if (m.e > .01) { const ux = n.x - m.px, uy = n.y - m.py, dd = Math.hypot(ux, uy); if (dd < R) { const k = (1 - dd / R) ** 2 * m.e; let q = Math.atan2(uy, ux) - a; q -= Math.PI * Math.round(q / Math.PI); a += q * k; } }
      if (n.grow && o < .02) continue;
      const l = n.grow ? n.l * (.15 + .85 * o) : n.l, t = sp.tint ? sp.tint(o, n) : o, b = Math.min(4, Math.round(t * 4)), cx = Math.cos(a) * l, cy = Math.sin(a) * l;
      B[b].push(n.x - cx, n.y - cy, n.x + cx, n.y + cy);
    }
    B.forEach((b, bi) => { if (!b.length) return; x.strokeStyle = cols[bi]; x.beginPath(); for (let j = 0; j < b.length; j += 4) { x.moveTo(b[j], b[j + 1]); x.lineTo(b[j + 2], b[j + 3]); } x.stroke(); });
    sp.deco && sp.deco(x, w, h, p);
    return m.e > .01 || live;
  };
  const loop = now => {
    raf = 0; const dt = Math.min(.05, (now - last) / 1000 || .016); last = now; const vh = innerHeight; let more = false;
    for (const m of minis) if (m.vis && draw(m, vh, dt)) more = true;
    if (more) raf = requestAnimationFrame(loop);
  };
  const kick = () => { if (!raf) { last = performance.now(); raf = requestAnimationFrame(loop); } };
  const reset = () => { minis.forEach(m => { m.w = 0; }); kick(); };

  const add = (cv, spec) => {
    const ctx = cv && cv.getContext && cv.getContext('2d'); if (!ctx) return;
    const m = { cv, ctx, spec, w: 0, h: 0, N: [], vis: false, e: 0, px: -1e4, py: -1e4, key: '', cols: spec.pal ? ramp(spec.pal[0], spec.pal[1]) : DEF };
    minis.push(m);
    if (!io) {
      io = new IntersectionObserver(es => { es.forEach(e => { const q = minis.find(z => z.cv === e.target); if (q) { q.vis = e.isIntersecting; q.key = ''; } }); kick(); }, { rootMargin: '80px 0px' });
      addEventListener('scroll', kick, { passive: true });
      addEventListener('resize', reset);
      if (document.fonts && document.fonts.ready) document.fonts.ready.then(reset);
      if (!still) addEventListener('pointermove', e => {
        for (const q of minis) { if (!q.vis) continue; const r = q.cv.getBoundingClientRect(), px = e.clientX - r.left, py = e.clientY - r.top;
          if (px > -40 && py > -40 && px < r.width + 40 && py < r.height + 40) { q.px = px; q.py = py; q.e = 1; q.key = ''; kick(); } }
      }, { passive: true });
    }
    io.observe(cv);
  };
  /* the method as one strip across steps: order spreads from the first step to the last, which ends in the gold point */
  const strip = (i, total) => ({
    make(w, h) { const n = [], cols = Math.max(6, Math.round((w - 10) / 21)), dx = (w - 14) / (cols - 1);
      for (let r = 0; r < 3; r++) for (let c = 0; c < cols; c++) { const x = 7 + c * dx, y = h / 2 + (r - 1) * 20;
        if (i === total - 1 && r === 1 && c === cols - 1) continue;
        n.push({ x, y, l: 7, a0: noise(x + i * 300, y, i) * 2, a1: 0, k: (i + x / w) / total }); }
      return n; },
    prog: (r, vh) => C(vh * .98 - r.top, vh * .4),
    ord: (n, p) => sm(.1, .92, n.k) * sm(0, 1, p * 1.25 - n.k * .25),
    tint: o => o > .97 ? 1 : 0,
    deco(x, w, h, p) { if (i === total - 1 && p > .85) { x.globalAlpha = sm(.85, 1, p); x.fillStyle = GOLD; x.beginPath(); x.arc(w - 7, h / 2, 4.5, 0, 7); x.fill(); x.globalAlpha = 1; } }
  });
  return { add, kick, strip, still, rnd, C, sm, noise, GOLD, INK, VIO, SNOW, LILAC };
})();
