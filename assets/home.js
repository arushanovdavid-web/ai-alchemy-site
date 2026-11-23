/* AI Alchemy homepage behaviour. The drawings themselves are in /assets/lines.js; this file wires the
   capability list to the building drawing and runs the industry tabs. Text is never hidden by script. */
(() => {
  'use strict';
  const $ = (s, r = document) => r.querySelector(s), $$ = (s, r = document) => [...r.querySelectorAll(s)];

  /* ---------- industry tabs ---------- */
  const tabs = $$('.ind-tabs [role="tab"]');
  if (tabs.length) {
    const show = (t, focus) => {
      tabs.forEach(x => { const on = x === t; x.setAttribute('aria-selected', on); x.tabIndex = on ? 0 : -1; $('#' + x.getAttribute('aria-controls')).hidden = !on; });
      if (focus) t.focus();
      dispatchEvent(new Event('scroll'));          /* let the newly shown drawing start */
    };
    tabs.forEach((t, i) => {
      t.addEventListener('click', () => show(t));
      t.addEventListener('keydown', e => {
        const k = e.key, n = tabs.length;
        const j = k === 'ArrowRight' ? (i + 1) % n : k === 'ArrowLeft' ? (i - 1 + n) % n : k === 'Home' ? 0 : k === 'End' ? n - 1 : -1;
        if (j < 0) return; e.preventDefault(); show(tabs[j], true);
      });
    });
  }

  /* ---------- capabilities: the building pans up floor by floor while the list scrolls; each floor draws as its
     capability reaches the middle of the screen, and stays drawn (earlier floors stay lit) ---------- */
  const chain = $('.chain'), tower = chain && $('.ld', chain);
  if (tower) {
    const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
    const stages = $$('.stage', chain), meter = $('.chain-meter b', chain), labels = $$('.ld-lbl', tower), win = $('.tower-draw', chain);
    const NAMES = ['Modernize', 'Connect', 'Automate', 'Understand', 'Enable AI'];
    const clamp = v => v < 0 ? 0 : v > 1 ? 1 : v;
    let D = null;
    const frame = () => {
      const vh = innerHeight, ps = stages.map(s => { const r = s.getBoundingClientRect(); return clamp((vh * .82 - r.top) / (vh * .42)); });
      const lit = ps.filter(p => p >= .7).length;
      stages.forEach((s, i) => s.classList.toggle('on', ps[i] >= .7));
      labels.forEach(l => l.classList.toggle('on', ps[+l.dataset.g - 1] >= .55));
      if (meter) meter.textContent = lit ? `0${lit} · ${NAMES[lit - 1]}` : '00 · Foundations';
      if (!D || reduce) return;
      D.set(0, clamp(ps[0] * 3)); ps.forEach((p, i) => D.set(i + 1, p)); D.set(6, ps[4] >= 1 ? 1 : 0);
      /* camera: keep the floor being drawn near the middle of the window */
      const a = D.d.a, k = D.k, f = ps.reduce((t, p) => t + p, 0);            /* 0..5 */
      const i0 = Math.min(4, Math.floor(f)), t = f - i0;
      const y0 = a['edge' + Math.max(1, i0)][1], y1 = a['edge' + Math.min(5, i0 + 1)][1];
      const y = (f < 1 ? a['edge1'][1] : y0 + (y1 - y0) * t) * k;
      const h = win.clientHeight, H = tower.offsetHeight;
      const ty = Math.max(h - H, Math.min(0, h * .55 - y));
      tower.style.transform = `translateY(${ty.toFixed(1)}px)`;
    };
    let raf = 0; const req = () => { if (!raf) raf = requestAnimationFrame(() => { raf = 0; frame(); }); };
    tower.addEventListener('ld:ready', () => { D = tower.__draw; req(); });
    addEventListener('scroll', req, { passive: true }); addEventListener('resize', req); req();
  }
})();
