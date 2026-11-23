/* AI Alchemy line drawings: vector line art that draws itself in.
   Markup: <div class="ld" data-src="/assets/lines/name.json" data-mode="scroll|load|floors" data-alt="…">
   Each JSON holds {W,H,a:{anchors},s:[x0,y0,x1,y1,group,kind,copper,ghost, …]} in drawing pixels.
   kind: 1 outline, 0 detail, 2 hairline. Copper lines are the connections and draw last in each group.
   Reduced motion, no JS-free fallback needed: the <img> poster inside each .ld is the finished drawing. */
(() => {
  'use strict';
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const INK = '#2C3036', CU = '#B5703F', GHOST = 'rgba(44,48,54,.32)';
  const cache = new Map();
  const load = src => cache.get(src) || (cache.set(src, fetch(src).then(r => r.json())), cache.get(src));
  const clamp = v => v < 0 ? 0 : v > 1 ? 1 : v;
  const all = [];

  class Drawing {
    constructor(el, d) {
      this.el = el; this.d = d; this.mode = el.dataset.mode || 'scroll'; this.cu = el.dataset.accent || CU;
      this.cv = document.createElement('canvas'); this.cv.setAttribute('aria-hidden', 'true'); el.append(this.cv);
      this.ctx = this.cv.getContext('2d');
      const s = d.s, n = s.length / 8, groups = new Map();
      for (let i = 0; i < n; i++) { const g = s[i * 8 + 4]; if (!groups.has(g)) groups.set(g, []); groups.get(g).push(i); }
      // order each group: structure grows out from the group's origin; copper connections follow
      this.groups = [...groups.keys()].sort((a, b) => a - b).map(g => {
        const ids = groups.get(g), o = d.a && d.a['core' + g] ? d.a['core' + g] : null;
        const key = i => { const x = (s[i * 8] + s[i * 8 + 2]) / 2, y = (s[i * 8 + 1] + s[i * 8 + 3]) / 2; return o ? Math.hypot(x - o[0], y - o[1]) : x + y * .15; };
        const st = ids.filter(i => !s[i * 8 + 6]).sort((a, b) => key(a) - key(b)), cu = ids.filter(i => s[i * 8 + 6]).sort((a, b) => key(a) - key(b));
        const t = new Float32Array(n);
        st.forEach((i, k) => { t[i] = k / Math.max(1, st.length) * .62; });
        cu.forEach((i, k) => { t[i] = .66 + k / Math.max(1, cu.length) * .22; });
        return { g, ids: st.concat(cu), t, p: reduce ? 1 : 0 };
      });
      this.byG = new Map(this.groups.map(x => [x.g, x]));
      this.size(); this.dirty = true;
      el.classList.add('ld-ready'); el.__draw = this;
      el.dispatchEvent(new Event('ld:ready'));
      if (reduce) { this.groups.forEach(x => x.p = 1); }
      else if (this.mode === 'load') this.play(2600);
    }
    size() {
      const r = this.el.getBoundingClientRect(), dpr = Math.min(2, devicePixelRatio || 1);
      this.k = r.width / this.d.W; this.cv.width = Math.round(r.width * dpr); this.cv.height = Math.round(this.d.H * this.k * dpr);
      this.dpr = dpr; this.dirty = true;
    }
    set(g, p) { const x = this.byG.get(g); if (x && !reduce && x.p !== p) { x.p = p; this.dirty = true; } }
    play(ms) { const t0 = performance.now(); const step = now => { const p = clamp((now - t0) / ms); this.groups.forEach(x => x.p = p); this.dirty = true; if (p < 1) requestAnimationFrame(step); }; requestAnimationFrame(step); }
    update() {
      if (reduce || this.mode === 'load' || this.mode === 'manual') return;
      const r = this.el.getBoundingClientRect(), vh = innerHeight;
      if (this.mode === 'reveal') {              /* draws once, the first time it is on screen and visible */
        if (!this.played && r.height > 0 && r.top < vh * .85 && r.bottom > 0) { this.played = true; this.play(1900); }
        return;
      }
      if (this.mode === 'floors') {
        // each group draws as its floor anchor rises from the bottom of the screen to a little above the middle
        for (const x of this.groups) {
          const a = this.d.a && (this.d.a['edge' + x.g] || this.d.a['core' + x.g]);
          const y = a ? r.top + a[1] * this.k : r.top + r.height * (1 - x.g / (this.groups.length || 1));
          const p = clamp((vh * .98 - y) / (vh * .5));
          if (p !== x.p) { x.p = p; this.dirty = true; }
        }
      } else {
        const p = clamp((vh * .92 - r.top) / (Math.min(r.height, vh) * .9));
        for (const x of this.groups) if (p !== x.p) { x.p = p; this.dirty = true; }
      }
    }
    draw() {
      if (!this.dirty) return; this.dirty = false;
      const c = this.ctx, s = this.d.s, k = this.k * this.dpr;
      c.setTransform(1, 0, 0, 1, 0, 0); c.clearRect(0, 0, this.cv.width, this.cv.height); c.lineCap = 'round';
      for (const x of this.groups) {
        if (x.p <= 0) continue;
        for (const i of x.ids) {
          const f = clamp((x.p - x.t[i]) / .12); if (f <= 0) continue;
          const o = i * 8, kind = s[o + 5], cu = s[o + 6], gh = s[o + 7];
          let x0 = s[o], y0 = s[o + 1], x1 = s[o + 2], y1 = s[o + 3];
          if (f >= 1 && kind === 1 && !cu) { const L = Math.hypot(x1 - x0, y1 - y0) || 1, e = 2.2 / L; x0 -= (x1 - x0) * e; y0 -= (y1 - y0) * e; x1 += (x1 - s[o]) * e; y1 += (y1 - s[o + 1]) * e; } // drafting overshoot
          c.strokeStyle = cu ? this.cu : gh ? GHOST : INK;
          c.globalAlpha = kind === 2 ? .45 : 1;
          c.lineWidth = (cu ? 2.4 : kind === 1 ? 1.45 : kind === 0 ? .9 : .7) * Math.max(.75, Math.min(1.25, this.k * 1.1)) * this.dpr;
          c.beginPath(); c.moveTo(x0 * k, y0 * k); c.lineTo((x0 + (x1 - x0) * f) * k, (y0 + (y1 - y0) * f) * k); c.stroke();
        }
      }
      c.globalAlpha = 1;
      this.el.dispatchEvent(new CustomEvent('ld:progress', { detail: this.groups.map(x => [x.g, x.p]) }));
    }
  }

  const tick = () => { for (const d of all) { d.update(); d.draw(); } };
  let raf = 0; const req = () => { if (!raf) raf = requestAnimationFrame(() => { raf = 0; tick(); }); };
  addEventListener('scroll', req, { passive: true });
  addEventListener('resize', () => { all.forEach(d => d.size()); req(); });
  const loop = () => { tick(); requestAnimationFrame(loop); };   // cheap: draw() returns at once unless something changed

  const io = new IntersectionObserver(es => es.forEach(e => {
    if (!e.isIntersecting || e.target.__ld) return; e.target.__ld = 1;
    load(e.target.dataset.src).then(d => { all.push(new Drawing(e.target, d)); req(); }).catch(() => {});
  }), { rootMargin: '600px 0px' });
  document.querySelectorAll('.ld[data-src]').forEach(el => io.observe(el));
  requestAnimationFrame(loop);
  window.AALines = { all };
})();
