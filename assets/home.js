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

  /* ---------- hero inspection: drag across the drawing (mouse) or pick a marker to see where work stalls.
     Each card names the problem and links to the capability that fixes it. ---------- */
  const insp = $('.inspect');
  if (insp) {
    const spots = $$('.hs', insp), sel = $('.sel', insp), selLab = $('span', sel), coord = $('.coord', insp);
    const ci = document.createElement('i'); coord.append(ci);
    spots.forEach(li => { li.classList.toggle('flip', +li.dataset.x > 1000); li.classList.toggle('low', +li.dataset.y > 380); });
    const stage = insp.parentElement, phone = matchMedia('(max-width: 700px)');
    const multi = document.createElement('div'); multi.className = 'hs-card hs-multi'; multi.hidden = true; insp.append(multi);
    const room = el => { stage.style.marginBottom = phone.matches && el && !el.hidden ? el.offsetHeight + 12 + 'px' : ''; };
    const open = (li, on) => { const b = $('.hs-mark', li), c = $('.hs-card', li); b.setAttribute('aria-expanded', on); c.hidden = !on; if (on) room(c); };
    const closeAll = () => { spots.forEach(li => open(li, false)); multi.hidden = true; room(null); };
    spots.forEach(li => $('.hs-mark', li).addEventListener('click', e => {
      e.stopPropagation(); const on = $('.hs-mark', li).getAttribute('aria-expanded') !== 'true';
      closeAll(); sel.hidden = true; open(li, on);
    }));
    document.addEventListener('keydown', e => { if (e.key === 'Escape') { closeAll(); sel.hidden = true; } });
    document.addEventListener('pointerdown', e => { if (!insp.contains(e.target)) { closeAll(); sel.hidden = true; } });
    /* markers appear once the drawing has drawn itself in */
    const ready = () => insp.classList.add('ready');
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) ready(); else setTimeout(ready, 2700);
    /* coordinates and crosshair, in drawing units, like a CAD readout */
    let drag = null;
    const pos = e => { const r = insp.getBoundingClientRect(); return [e.clientX - r.left, e.clientY - r.top, r]; };
    insp.addEventListener('pointermove', e => {
      if (e.pointerType !== 'mouse') return;
      const [x, y, r] = pos(e); coord.style.setProperty('--cx', x + 'px'); coord.style.setProperty('--cy', y + 'px');
      ci.textContent = `X ${String(Math.round(x / r.width * 1600)).padStart(4, '0')} · Y ${String(Math.round(y / r.height * 609)).padStart(4, '0')}`;
      if (!drag) return;
      const x0 = Math.min(drag[0], x), y0 = Math.min(drag[1], y), w = Math.abs(x - drag[0]), h = Math.abs(y - drag[1]);
      Object.assign(sel.style, { left: x0 + 'px', top: y0 + 'px', width: w + 'px', height: h + 'px' });
      sel.hidden = w < 6 && h < 6;
      const hit = spots.filter(li => { const sx = +li.dataset.x / 1600 * r.width, sy = +li.dataset.y / 609 * r.height; return sx >= x0 && sx <= x0 + w && sy >= y0 && sy <= y0 + h; });
      selLab.textContent = hit.length ? `Selection · ${hit.length} ${hit.length > 1 ? 'issues' : 'issue'} found` : 'Selection · drag over the business';
      drag[2] = hit;
    });
    insp.addEventListener('pointerdown', e => {
      if (e.pointerType !== 'mouse' || e.button !== 0 || e.target.closest('.hs-mark,.hs-card')) return;
      e.preventDefault(); const [x, y] = pos(e); drag = [x, y, []]; closeAll(); sel.hidden = true; insp.setPointerCapture(e.pointerId);
    });
    insp.addEventListener('pointerup', () => {
      if (!drag) return; const hit = drag[2]; drag = null;
      if (sel.hidden) return;
      if (!hit.length) { setTimeout(() => { sel.hidden = true; }, 900); return; }
      if (hit.length === 1) { open(hit[0], true); return; }
      hit.forEach(li => $('.hs-mark', li).setAttribute('aria-expanded', true));
      multi.innerHTML = `<span class="hs-tag">${hit.length} places where work stalls</span>` + hit.map(li => {
        const c = $('.hs-card', li); return `<div class="hs-item"><b>${$('b', c).textContent}</b><p>${$('p', c).textContent}</p>${$('a', c).outerHTML}</div>`; }).join('');
      const L = sel.offsetLeft, W = sel.offsetWidth, right = L + W + 270 < insp.offsetWidth;
      Object.assign(multi.style, { left: right ? L + W + 12 + 'px' : 'auto', right: right ? '' : insp.offsetWidth - L + 12 + 'px', top: Math.max(0, sel.offsetTop) + 'px' });
      multi.hidden = false;
      multi.style.top = Math.max(0, Math.min(sel.offsetTop, insp.offsetHeight - multi.offsetHeight - 4)) + 'px';   /* keep it inside the drawing */
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
      if (meter) meter.textContent = lit ? `0${lit} · ${NAMES[lit - 1]}` : '00 · Today';
      chain.__ps = ps; chain.dispatchEvent(new CustomEvent('chain:progress', { detail: ps }));
      if (!D || reduce || win.classList.contains('is-3d')) return;
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
    /* the 3D tower loads only when the section comes near; if WebGL is missing the line drawing above stays */
    const T3 = new URL('tower3d.js', (document.currentScript && document.currentScript.src) || location.href).href;
    if ('IntersectionObserver' in window) {
      const io = new IntersectionObserver(es => { if (!es.some(e => e.isIntersecting)) return; io.disconnect();
        import(T3).then(m => { if (m.mount(win, chain)) { tower.style.transform = ''; req(); } }).catch(() => {}); }, { rootMargin: '150% 0px' });
      io.observe(chain);
    }
    addEventListener('scroll', req, { passive: true }); addEventListener('resize', req); req();
  }
})();
