/* The thread: one copper line drawn by the scroll through the calm sheet, from "How we work" to the brief.
   It is the picture of "one team from strategy to go-live". On desktop it runs along the four steps, drops down
   the right margin, and sweeps back left at "Why AI Alchemy"; on narrow screens it runs down the left margin.
   Decorative (aria-hidden). Reduced motion: drawn in full, no moving head. No JS: absent. */
(() => {
  const sheet = document.getElementById('sheet');
  if (!sheet || !window.ResizeObserver) return;
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  const NS = 'http://www.w3.org/2000/svg';
  const svg = document.createElementNS(NS, 'svg'), path = document.createElementNS(NS, 'path'), head = document.createElementNS(NS, 'circle');
  svg.setAttribute('class', 'thread'); svg.setAttribute('aria-hidden', 'true'); svg.setAttribute('focusable', 'false');
  head.setAttribute('r', '4'); head.setAttribute('class', 'thread-head');
  svg.append(path, head); sheet.appendChild(svg);
  const $ = s => sheet.querySelector(s);
  let L = 0, ys = [], ss = [], top0 = 0, last = -1, raf = 0;

  const build = () => {
    const sr = sheet.getBoundingClientRect(), W = sr.width, H = sr.height, y = el => el.getBoundingClientRect().top - sr.top;
    svg.setAttribute('viewBox', `0 0 ${W} ${H}`); svg.setAttribute('width', W); svg.setAttribute('height', H);
    const wrap = $('.approach .wrap'), cs = getComputedStyle(wrap), padL = parseFloat(cs.paddingLeft) || 20;
    const gl = Math.max(8, (wrap.getBoundingClientRect().left - sr.left + padL) * .5), gr = W - gl;
    const y0 = y($('.approach .kicker')) + 6, yEnd = H - 2;
    const steps = [...sheet.querySelectorAll('.steps li')], why = $('.why .kicker'), facts = $('.facts');
    const oneRow = steps.length > 1 && Math.abs(steps[0].getBoundingClientRect().top - steps[steps.length - 1].getBoundingClientRect().top) < 4;
    let d;
    if (oneRow && why && facts) {
      const s0 = steps[0].getBoundingClientRect(), sN = steps[steps.length - 1].getBoundingClientRect();
      const yS = s0.top - sr.top - 14, xS0 = s0.left - sr.left, xS1 = sN.right - sr.left;
      const fr = facts.getBoundingClientRect(), yF = fr.top - sr.top - 22, xF0 = fr.left - sr.left, xF1 = fr.right - sr.left;
      d = `M${gl} ${y0} L${gl} ${yS - 70} C${gl} ${yS - 18} ${xS0 - 40} ${yS} ${xS0} ${yS}` +   /* into the steps */
          ` L${xS1} ${yS + 10}` +                                                               /* along Discover → Validate, barely falling */
          ` C${gr} ${yS + 16} ${gr} ${yS + 60} ${gr} ${yS + 120} L${gr} ${yF - 120}` +           /* down the right margin */
          ` C${gr} ${yF - 30} ${xF1 + 40} ${yF} ${xF1} ${yF}` +                                  /* in above the three facts */
          ` L${xF0} ${yF + 10}` +                                                               /* back along them, right to left */
          ` C${gl} ${yF + 16} ${gl} ${yF + 60} ${gl} ${yF + 120} L${gl} ${yEnd}`;                /* and on down to the brief */
    } else d = `M${gl} ${y0} L${gl} ${yEnd}`;
    path.setAttribute('d', d);
    L = path.getTotalLength();
    path.style.strokeDasharray = `${L} ${L}`;
    ys = []; ss = [];
    for (let s = 0; s <= L; s += 6) { ys.push(path.getPointAtLength(s).y); ss.push(s); }   /* the path only ever goes down, so y maps to length */
    for (let i = 1; i < ys.length; i++) if (ys[i] < ys[i - 1]) ys[i] = ys[i - 1];
    top0 = sr.top + scrollY; last = -1; draw();
  };
  const at = yy => {   /* length of path drawn when the reading line is at sheet-local y */
    if (yy <= ys[0]) return 0; if (yy >= ys[ys.length - 1]) return L;
    let lo = 0, hi = ys.length - 1; while (hi - lo > 1) { const m = (lo + hi) >> 1; if (ys[m] < yy) lo = m; else hi = m; }
    const f = (yy - ys[lo]) / Math.max(1e-6, ys[hi] - ys[lo]); return ss[lo] + (ss[hi] - ss[lo]) * f;
  };
  const draw = () => {
    raf = 0; if (!L) return;
    if (reduced.matches) { path.style.strokeDashoffset = '0'; head.style.display = 'none'; return; }
    const s = Math.round(at(scrollY + innerHeight * .72 - top0));
    if (s === last) return; last = s;
    path.style.strokeDashoffset = String(L - s);
    const p = path.getPointAtLength(s); head.setAttribute('cx', p.x.toFixed(1)); head.setAttribute('cy', p.y.toFixed(1));
    head.style.display = s > 0 && s < L ? '' : 'none';
  };
  const kick = () => { if (!raf) raf = requestAnimationFrame(draw); };
  new ResizeObserver(() => build()).observe(sheet);
  addEventListener('scroll', kick, { passive: true });
  reduced.addEventListener('change', () => { last = -1; head.style.display = ''; kick(); });
  build();
})();
