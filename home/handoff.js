/* Section hand-off: as a section headline scrolls into view, its sentences arrive from opposite sides
   (odd from the left, even from the right), tied to scroll position, not a timer.
   Leaves the homepage field's own headings alone (anything inside [data-quiet], which the field measures).
   No JS, reduced motion or print: headlines stay exactly as written. */
(() => {
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  if (reduced.matches || !('IntersectionObserver' in window)) return;
  const heads = [...document.querySelectorAll('main section h2')].filter(h => !h.closest('[data-quiet]'));
  const items = [];
  for (const h of heads) {
    const parts = [];
    for (const n of [...h.childNodes]) {
      if (n.nodeType === 3) {
        for (const s of n.textContent.split(/(?<=[.?!])\s+/)) if (s.trim()) parts.push(document.createTextNode(s));
      } else parts.push(n);
    }
    h.textContent = '';
    const spans = parts.map((p, i) => {
      const s = document.createElement('span'); s.className = 'ho'; s.appendChild(p);
      if (i) h.appendChild(document.createTextNode(' '));
      h.appendChild(s); return s;
    });
    h.classList.add('ho-on', spans.length > 1 ? 'ho-split' : 'ho-one');
    items.push({ h, spans, vis: false, last: -1 });
  }
  if (!items.length) return;
  const clamp = v => v < 0 ? 0 : v > 1 ? 1 : v, ease = t => 1 - Math.pow(1 - t, 3);
  let raf = 0;
  const update = () => {
    raf = 0;
    const vh = innerHeight, X = Math.min(innerWidth * .11, 90);
    for (const it of items) {
      if (!it.vis) continue;
      const top = it.h.getBoundingClientRect().top;
      const p = Math.round(clamp((vh * .98 - top) / (vh * .4)) * 200) / 200;   /* 0 as it enters, 1 by 60% up the screen */
      if (p === it.last) continue;
      it.last = p;
      it.spans.forEach((s, i) => {
        const e = ease(clamp(p * 1.25 - i * .25 / Math.max(1, it.spans.length - 1)));
        const dir = it.spans.length > 1 ? (i % 2 ? 1 : -1) : 0;
        s.style.transform = dir ? `translate3d(${((1 - e) * dir * X).toFixed(1)}px,0,0)` : `translate3d(0,${((1 - e) * 18).toFixed(1)}px,0)`;
        s.style.opacity = (.04 + .96 * e).toFixed(3);
      });
    }
  };
  const kick = () => { if (!raf) raf = requestAnimationFrame(update); };
  const io = new IntersectionObserver(es => { for (const e of es) { const it = items.find(x => x.h === e.target); if (it) it.vis = e.isIntersecting; } kick(); }, { rootMargin: '10% 0px 10% 0px' });
  items.forEach(it => io.observe(it.h));
  addEventListener('scroll', kick, { passive: true });
  addEventListener('resize', () => { items.forEach(it => { it.last = -1; }); kick(); });
  /* if the visitor turns reduced motion on mid-visit, settle everything */
  reduced.addEventListener('change', () => { if (reduced.matches) { io.disconnect(); removeEventListener('scroll', kick); items.forEach(it => it.spans.forEach(s => { s.style.transform = ''; s.style.opacity = ''; })); } });
  /* keyboard focus on a link inside a section shows its headline at once */
  document.addEventListener('focusin', e => { const sec = e.target.closest && e.target.closest('section'); if (!sec) return; items.forEach(it => { if (sec.contains(it.h)) { it.spans.forEach(s => { s.style.transform = ''; s.style.opacity = ''; }); it.last = 1; } }); });
  kick();
})();
