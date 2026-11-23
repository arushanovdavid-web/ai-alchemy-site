/* AI Alchemy homepage as one circuit board.
   The page's hairline grid is the board. One copper trace runs along those hairlines from the hero to the
   project brief, joining every component in order. As you scroll the trace draws on; each area it reaches
   powers up and gains its colour; when the trace reaches the brief, the whole board is live.
   Traces only ever run on hairlines, so they never cross text. Reduced motion: everything is live at once. */
(() => {
  'use strict';
  const main = document.querySelector('main'); if (!main) return;
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const root = document.documentElement; root.classList.add('has-board');
  const NS = 'http://www.w3.org/2000/svg';
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];

  /* components, in the order the trace visits them. side: where the pad sits on the component's box */
  const PLAN = [
    ['.hero-drawing', 'b', '.hero'], ['.hero-side', 'l'], ['.ticker', 't'],
    ['.problems .head', 'b', '.problems'], ['.p-col', 't', 'self'],
    ['.chain .head', 'b', '.chain'], ['.tower .stage', 'r', 'self'], ['.chain-note', 't'],
    ['.products > div:last-child', 'l', '.products'],
    ['.how .head', 'b', '.how'], ['.how-view', 'b'], ['.how-steps > li', 't', 'self'],
    ['.ind .head', 'b', '.ind'], ['.ind-tabs', 'b'], ['.ind-panel:not([hidden]) figure', 'r', '.ind-panel:not([hidden])'],
    ['.notes', 't', '.notes'], ['.notes .fact', 'l', 'self'],
    ['.brief-band', 't', '.brief-band'], ['.brief-band .btn', 'l']
  ];

  const svg = document.createElementNS(NS, 'svg'); svg.classList.add('board'); svg.setAttribute('aria-hidden', 'true');
  const mk = (n, a) => { const e = document.createElementNS(NS, n); for (const k in a) e.setAttribute(k, a[k]); return e; };
  const trace = mk('path', { class: 'trace' }), pulse = mk('path', { class: 'pulse' }), padsG = mk('g', { class: 'pads' });
  svg.append(trace, pulse, padsG);
  main.style.position = 'relative'; main.append(svg);

  let path = [], cum = [], nodes = [], total = 0, shown = 0, target = 0, alive = false;

  /* ---- 1. read the hairlines ---- */
  const inSticky = el => { for (let e = el; e && e !== main; e = e.parentElement) { const p = getComputedStyle(e).position; if (p === 'sticky' || p === 'fixed') return true; } return false; };
  function hairlines() {
    const mr = main.getBoundingClientRect(), ox = mr.left, oy = mr.top, H = [], V = [];
    for (const el of main.querySelectorAll('*')) {
      if (el === svg || svg.contains(el) || el.closest('.ld') || el.closest('[hidden]')) continue;
      const cs = getComputedStyle(el); if (cs.display === 'none' || cs.visibility === 'hidden') continue;
      const bt = parseFloat(cs.borderTopWidth), bb = parseFloat(cs.borderBottomWidth), bl = parseFloat(cs.borderLeftWidth), br = parseFloat(cs.borderRightWidth);
      if (!(bt || bb || bl || br)) continue;
      if (el.closest('.notes ol')) continue;                     /* faint list rules are not traces */
      if (inSticky(el)) continue;
      const r = el.getBoundingClientRect(); if (r.width < 2 || r.height < 2) continue;
      const x0 = r.left - ox, x1 = r.right - ox, y0 = r.top - oy, y1 = r.bottom - oy;
      if (bt) H.push([y0 + bt / 2, x0, x1]); if (bb) H.push([y1 - bb / 2, x0, x1]);
      if (bl) V.push([x0 + bl / 2, y0, y1]); if (br) V.push([x1 - br / 2, y0, y1]);
    }
    /* the board edges, so every area has a way round */
    const W = main.clientWidth, Hh = main.scrollHeight;
    V.push([0.5, 0, Hh], [W - 0.5, 0, Hh]);
    return { H: merge(H), V: merge(V) };
  }
  const merge = segs => {
    segs = segs.map(s => [Math.round(s[0] * 2) / 2, s[1], s[2]]).sort((a, b) => a[0] - b[0] || a[1] - b[1]);
    const out = [];
    for (const s of segs) { const l = out[out.length - 1]; if (l && Math.abs(l[0] - s[0]) < 1.6 && s[1] <= l[2] + 2) l[2] = Math.max(l[2], s[2]); else out.push(s.slice()); }
    return out;
  };

  /* ---- 2. graph: points where hairlines meet, plus pads ---- */
  function graph(H, V, pads) {
    const pts = [], key = new Map(), adj = [];
    const id = (x, y) => { const k = Math.round(x) + ',' + Math.round(y); if (!key.has(k)) { key.set(k, pts.length); pts.push([x, y]); adj.push([]); } return key.get(k); };
    const onH = H.map(() => []), onV = V.map(() => []);
    H.forEach((h, i) => V.forEach((v, j) => { if (v[0] >= h[1] - 1.5 && v[0] <= h[2] + 1.5 && h[0] >= v[1] - 1.5 && h[0] <= v[2] + 1.5) { const n = id(v[0], h[0]); onH[i].push(n); onV[j].push(n); } }));
    const padIds = pads.map(p => { const n = id(p.x, p.y); (p.h != null ? onH[p.h] : onV[p.v]).push(n); return n; });
    const link = (list, axis) => { const u = [...new Set(list)].sort((a, b) => pts[a][axis] - pts[b][axis]); for (let i = 1; i < u.length; i++) { const a = u[i - 1], b = u[i], d = Math.abs(pts[b][axis] - pts[a][axis]); adj[a].push([b, d, axis]); adj[b].push([a, d, axis]); } };
    onH.forEach(l => link(l, 0)); onV.forEach(l => link(l, 1));
    return { pts, adj, padIds };
  }
  /* nearest point on a hairline to the pad's anchor */
  function snap(H, V, x, y, side) {
    let best = null, bd = 1e9;
    const horiz = side === 't' || side === 'b';
    if (horiz) H.forEach((h, i) => { if (x < h[1] - 1 || x > h[2] + 1) return; const d = Math.abs(h[0] - y); if (d < bd) { bd = d; best = { x, y: h[0], h: i }; } });
    else V.forEach((v, i) => { if (y < v[1] - 1 || y > v[2] + 1) return; const d = Math.abs(v[0] - x); if (d < bd) { bd = d; best = { x: v[0], y, v: i }; } });
    return bd < 80 ? best : null;
  }
  /* shortest route, with a cost for every turn and for reusing a hairline already used */
  function route(G, a, b, used) {
    const n = G.pts.length, dist = new Float64Array(n * 3).fill(Infinity), prev = new Int32Array(n * 3).fill(-1);
    const heap = [[0, a * 3 + 2]]; dist[a * 3 + 2] = 0;
    const push = e => { heap.push(e); let i = heap.length - 1; while (i) { const p = (i - 1) >> 1; if (heap[p][0] <= heap[i][0]) break; [heap[p], heap[i]] = [heap[i], heap[p]]; i = p; } };
    const pop = () => { const t = heap[0], l = heap.pop(); if (heap.length) { heap[0] = l; let i = 0; for (;;) { const L = 2 * i + 1, R = L + 1; let m = i; if (L < heap.length && heap[L][0] < heap[m][0]) m = L; if (R < heap.length && heap[R][0] < heap[m][0]) m = R; if (m === i) break; [heap[m], heap[i]] = [heap[i], heap[m]]; i = m; } } return t; };
    while (heap.length) {
      const [d, s] = pop(); if (d > dist[s]) continue; const u = (s / 3) | 0, ax = s % 3;
      if (u === b) { const out = []; for (let t = s; t >= 0; t = prev[t]) out.push((t / 3) | 0); return out.reverse(); }
      for (const [v, w, axis] of G.adj[u]) {
        const e = u < v ? u + '-' + v : v + '-' + u;
        const c = d + w * (used.has(e) ? 4 : 1) + (ax !== 2 && ax !== axis ? 60 : 0), t = v * 3 + axis;
        if (c < dist[t]) { dist[t] = c; prev[t] = s; push([c, t]); }
      }
    }
    return null;
  }

  /* ---- 3. build the board ---- */
  function build() {
    const mr = main.getBoundingClientRect();
    svg.setAttribute('width', main.clientWidth); svg.setAttribute('height', main.scrollHeight);
    svg.setAttribute('viewBox', `0 0 ${main.clientWidth} ${main.scrollHeight}`);
    const { H, V } = hairlines();
    const pads = [];
    for (const [sel, side, zone] of PLAN) for (const el of $$(sel, main)) {
      if (el.closest('[hidden]')) continue;
      const r = el.getBoundingClientRect(); if (!r.height) continue;
      const x = (side === 'l' ? r.left : side === 'r' ? r.right : r.left + Math.min(r.width / 2, 48)) - mr.left;
      const y = (side === 't' ? r.top : side === 'b' ? r.bottom : r.top + r.height / 2) - mr.top;
      const p = snap(H, V, x, y, side); if (!p) continue;
      p.zone = zone === 'self' ? el : zone ? el.closest(zone) || main.querySelector(zone) : null; p.el = el;
      pads.push(p);
    }
    const G = graph(H, V, pads), used = new Set();
    path = []; nodes = [];
    for (let i = 0; i < pads.length; i++) {
      if (i === 0) { path.push(G.padIds[0]); nodes.push({ i: 0, pad: pads[0] }); continue; }
      const r = route(G, G.padIds[i - 1], G.padIds[i], used); if (!r) continue;
      for (let k = 1; k < r.length; k++) { const a = r[k - 1], b = r[k]; used.add(a < b ? a + '-' + b : b + '-' + a); path.push(b); }
      nodes.push({ i: path.length - 1, pad: pads[i] });
    }
    const P = path.map(n => G.pts[n]);
    /* drop points in the middle of straight runs, then round the corners like a drawn trace */
    const Q = P.filter((p, i) => i === 0 || i === P.length - 1 || !((P[i - 1][0] === p[0] && p[0] === P[i + 1][0]) || (P[i - 1][1] === p[1] && p[1] === P[i + 1][1])));
    let d = `M${Q[0][0]},${Q[0][1]}`;
    for (let i = 1; i < Q.length; i++) {
      const a = Q[i - 1], b = Q[i], c = Q[i + 1];
      if (!c) { d += `L${b[0]},${b[1]}`; break; }
      const r = Math.min(8, Math.hypot(b[0] - a[0], b[1] - a[1]) / 2, Math.hypot(c[0] - b[0], c[1] - b[1]) / 2);
      const ux = Math.sign(b[0] - a[0]), uy = Math.sign(b[1] - a[1]), vx = Math.sign(c[0] - b[0]), vy = Math.sign(c[1] - b[1]);
      d += `L${b[0] - ux * r},${b[1] - uy * r}L${b[0] + vx * r},${b[1] + vy * r}`;   /* 45° chamfer */
    }
    trace.setAttribute('d', d); pulse.setAttribute('d', d);
    total = trace.getTotalLength();
    /* length along the trace at each node and the deepest point reached so far */
    cum = [0]; for (let i = 1; i < P.length; i++) cum[i] = cum[i - 1] + Math.hypot(P[i][0] - P[i - 1][0], P[i][1] - P[i - 1][1]);
    const scale = total / (cum[cum.length - 1] || 1);            /* chamfers make the drawn path a touch shorter */
    cum = cum.map(c => c * scale);
    let ymax = -1; P.forEach((p, i) => { ymax = Math.max(ymax, p[1]); P[i].ym = ymax; }); /* prefix max of y */
    build.P = P;
    padsG.textContent = '';
    nodes.forEach(n => {
      const p = n.pad, el = mk('g', { class: 'pad' });
      el.append(mk('rect', { x: p.x - 5, y: p.y - 5, width: 10, height: 10, rx: 1.5 }), mk('circle', { cx: p.x, cy: p.y, r: 2 }));
      padsG.append(el); n.g = el; n.L = cum[n.i];
    });
    trace.style.strokeDasharray = `${total} ${total}`;
    pulse.style.strokeDasharray = `60 ${Math.max(400, total / 6)}`;
    measure(); if (reduce) shown = target = total; paint();
  }

  /* ---- 4. scroll: the trace reaches as far as 70% down the screen ---- */
  function measure() {
    const P = build.P; if (!P || !P.length) return;
    const T = scrollY + innerHeight * .7 - (main.getBoundingClientRect().top + scrollY);
    let L = 0;
    for (let i = 1; i < P.length; i++) {
      if (P[i].ym <= T) { L = cum[i]; continue; }
      const a = P[i - 1], b = P[i];                      /* partly drawn segment going down */
      if (b[1] > a[1] && T > a[1] && a.ym <= T) L = cum[i - 1] + (cum[i] - cum[i - 1]) * (T - a[1]) / (b[1] - a[1]);
      break;
    }
    if (scrollY + innerHeight >= document.documentElement.scrollHeight - 4) L = total;   /* bottom of the page */
    target = L;
  }
  function paint() {
    trace.style.strokeDashoffset = total - shown;
    for (const n of nodes) {
      const on = shown >= n.L - 1;
      n.g.classList.toggle('on', on);
      const z = n.pad.zone; if (z && on && !z.classList.contains('live')) { z.classList.add('live'); $$('.ld', z).forEach(liven); if (z.matches('.ld')) liven(z); }
      if (z && !on && n === firstOf(z)) { z.classList.remove('live'); $$('.ld', z).forEach(dim); }
    }
    const a = shown >= total - 2;
    if (a !== alive) {
      alive = a; root.classList.toggle('board-alive', a);
      if (a && !reduce && pulse.animate) { const per = 60 + Math.max(400, total / 6); pulse.__a = pulse.animate([{ strokeDashoffset: 0 }, { strokeDashoffset: -per }], { duration: per * 4, iterations: Infinity }); }
      else if (pulse.__a) { pulse.__a.cancel(); pulse.__a = null; }
    }
  }
  const firstOf = z => nodes.find(n => n.pad.zone === z);
  const liven = el => { el.dataset.live = 1; el.__draw && el.__draw.setLive && el.__draw.setLive(1); };
  const dim = el => { el.dataset.live = 0; el.__draw && el.__draw.setLive && el.__draw.setLive(0); };

  let raf = 0;
  const loop = () => {
    raf = 0; const diff = target - shown;
    shown = Math.abs(diff) < 1 ? target : shown + diff * .12;    /* the trace runs on rather than jumping */
    paint(); if (shown !== target) raf = requestAnimationFrame(loop);
  };
  const kick = () => { measure(); if (reduce) shown = target = total; if (!raf) raf = requestAnimationFrame(loop); };
  addEventListener('scroll', kick, { passive: true });

  let t = 0; const rebuild = () => { clearTimeout(t); t = setTimeout(build, 120); };
  addEventListener('resize', rebuild);
  new ResizeObserver(rebuild).observe(main);
  document.addEventListener('click', e => { if (e.target.closest('.ind-tabs')) rebuild(); });
  (document.fonts ? document.fonts.ready : Promise.resolve()).then(build);
  build();
})();
