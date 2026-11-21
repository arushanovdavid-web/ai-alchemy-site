/* AI Alchemy — "The Field" homepage prototype. No dependencies, no network requests.
   Part 1 is ordinary page behaviour. Part 2 is the field: one 2D canvas of needles on a plane, seen through a
   small perspective camera. Scroll position sets the camera and the amount of order; the pointer combs the needles and leaves a short wake.
   The canvas is decorative: every word it illustrates is in the document, and the page reads without it. */
(() => {
  'use strict';
  const $ = (s, r = document) => r.querySelector(s), $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const root = document.documentElement;
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');

  /* The old one-page form anchor lives on /contact/. */
  if (location.hash === '#project-form') location.replace('/contact/');

  /* ---------- Part 1: page behaviour ---------- */
  const hdr = $('#header'), mb = $('#menu-btn'), nav = $('#nav'), main = $('#main');
  const setNav = open => {
    mb.setAttribute('aria-expanded', String(open)); mb.textContent = open ? 'Close' : 'Menu';
    nav.classList.toggle('is-open', open); hdr.classList.toggle('menu-open', open);
    document.body.style.overflow = open ? 'hidden' : ''; main.inert = open;
  };
  mb.addEventListener('click', () => setNav(mb.getAttribute('aria-expanded') !== 'true'));
  $$('a', nav).forEach(a => a.addEventListener('click', () => setNav(false)));
  addEventListener('keydown', e => {
    if (!nav.classList.contains('is-open')) return;
    if (e.key === 'Escape') { setNav(false); mb.focus(); }
    if (e.key === 'Tab') {   /* keep focus inside the open menu */
      const f = [$('.brand', hdr), mb, ...$$('a', nav)], i = f.indexOf(document.activeElement);
      e.preventDefault(); f[(i + (e.shiftKey ? -1 : 1) + f.length) % f.length].focus();
    }
  });
  matchMedia('(min-width:821px)').addEventListener('change', () => setNav(false));

  /* Industries: WAI-ARIA tabs, arrow keys move and select. */
  const tabs = $$('[role="tab"]');
  /* one copper marker glides to the selected tab; a faint box follows the pointer down the list */
  const tlist = $('.tablist'), tmark = tlist && document.createElement('i'), thov = tlist && document.createElement('i');
  const moveTo = (el, t) => { if (!el || !t) return; el.style.transform = `translateY(${t.offsetTop}px)`; el.style.height = t.offsetHeight + 'px'; };
  if (tlist) {
    tmark.className = 'tab-mark'; thov.className = 'tab-hover'; tmark.setAttribute('aria-hidden', 'true'); thov.setAttribute('aria-hidden', 'true');
    tlist.append(thov, tmark); tlist.classList.add('has-mark');
    tlist.addEventListener('pointerover', e => { const t = e.target.closest('[role="tab"]'); if (t && e.pointerType === 'mouse') { moveTo(thov, t); thov.classList.add('on'); } });
    tlist.addEventListener('pointerleave', () => thov.classList.remove('on'));
    new ResizeObserver(() => moveTo(tmark, tabs.find(x => x.getAttribute('aria-selected') === 'true'))).observe(tlist);
  }
  const select = t => { tabs.forEach(x => { const on = x === t; x.setAttribute('aria-selected', on); x.tabIndex = on ? 0 : -1; $('#' + x.getAttribute('aria-controls')).hidden = !on; }); moveTo(tmark, t); };
  tabs.forEach((t, i) => {
    t.addEventListener('click', () => select(t));
    t.addEventListener('keydown', e => {
      const k = e.key; let j = null;
      if (k === 'ArrowDown' || k === 'ArrowRight') j = (i + 1) % tabs.length;
      if (k === 'ArrowUp' || k === 'ArrowLeft') j = (i - 1 + tabs.length) % tabs.length;
      if (k === 'Home') j = 0; if (k === 'End') j = tabs.length - 1;
      if (j !== null) { e.preventDefault(); tabs[j].focus(); select(tabs[j]); }
    });
  });

  /* Small fields in the calm sheet (engine in /home/mini.js): one method strip, the outcomes spine, the three answers. */
  let seed = 7; const rnd = () => (seed = (seed * 16807) % 2147483647) / 2147483647;
  const MF = window.AAMini;
  if (MF) {
    const { C, sm, noise } = MF, VCOL = 'rgb(31,107,92)';
    $$('.glyph').forEach((g, i, all) => { g.innerHTML = '<canvas></canvas>'; MF.add(g.firstChild, MF.strip(i, all.length)); });
    const spine = $('.spine');
    if (spine) MF.add(spine, {
      /* outcomes: needles above the reading line are aligned, below it they are still scattered */
      make(w, h) { const n = []; for (let y = 8; y < h - 4; y += 15) for (const x of [w * .3, w * .7]) n.push({ x, y, l: 5.5, a0: noise(x * 9, y, 3) * 2, a1: Math.PI / 2, k: 0 }); return n; },
      ord: (n, p, r, vh) => sm(0, 1, (vh * .62 - (r.top + n.y)) / 110)
    });
    const kinds = ['improve', 'connect', 'build'];
    $$('.sdiag').forEach((cv, i) => MF.add(cv, {
      /* the three answers drawn in the field's own plan view: comb one tangle, join two working clusters, grow new rings */
      make(w, h) {
        const n = [], cy = h / 2, kind = kinds[i];
        const patch = (cx, R, ordered) => { for (let rr = 8; rr <= R; rr += 6.5) { const m = Math.max(4, Math.round(Math.PI * 2 * rr / 7.5)); for (let j = 0; j < m; j++) { const q = j / m * Math.PI * 2 + rr, x = cx + rr * Math.cos(q), y = cy + rr * Math.sin(q), t = q + Math.PI / 2; n.push({ x, y, l: 3.2, a0: ordered ? t : noise(x * 3, y * 3, i) * 2, a1: t, k: 0 }); } } };
        if (kind === 'improve') patch(w / 2, h * .44, false);
        if (kind === 'connect') { const R = Math.min(h * .34, w * .16), a = w * .2, b = w * .8; patch(a, R, true); patch(b, R, true);
          for (let x = a + R + 6; x <= b - R - 6; x += 8) for (const y of [cy - 4, cy + 4]) n.push({ x, y, l: 3.6, a0: noise(x * 3, y * 5, 2) * 2, a1: 0, k: 1, grow: 1 }); }
        if (kind === 'build') [h * .17, h * .31, h * .45].forEach((R, ri) => { const m = Math.max(6, Math.round(Math.PI * 2 * R / 9)); for (let j = 0; j < m; j++) { const a = j / m * Math.PI * 2 + ri; n.push({ x: w / 2 + R * Math.cos(a), y: cy + R * Math.sin(a), l: 3.6, a0: a + Math.PI / 2 + 1.2, a1: a + Math.PI / 2, k: ri / 3, grow: 1 }); } });
        return n; },
      prog: (r, vh) => C(vh * .9 - r.top, vh * .38),
      ord: (n, p) => sm(n.k * .55, n.k * .55 + .45, p),
      tint: (o, n) => kinds[i] === 'connect' ? (n.k ? o : 0) : kinds[i] === 'build' ? 1 : o * o,
      deco(x, w, h, p) { if (kinds[i] === 'build') { x.fillStyle = VCOL; x.globalAlpha = sm(.6, 1, p); x.beginPath(); x.arc(w / 2, h / 2, 2.6, 0, 7); x.fill(); x.globalAlpha = 1; } }
    }));
  }

  /* ---------- Part 2: the field ---------- */
  const cv = $('#field'); let ctx = null;
  try { ctx = cv.getContext('2d', { alpha: false }); } catch (e) { /* fall through */ }
  const svc = $('#services'), rev = $('#reveal'), sheet = $('#sheet'), fin = $('#contact');
  const stepBtns = $$('.svc-steps button'), services = $$('.service');
  let stepIdx = 0, focusStep = -1;
  const nextEl = $('.svc-next'), NEXT = ['Software', 'AI', 'Data', 'How it fits together'];
  const setStep = i => { if (i === stepIdx) return; stepIdx = i; stepBtns.forEach((b, k) => b.setAttribute('aria-current', k === i)); services.forEach((s, k) => s.classList.toggle('is-on', k === i));
    if (nextEl) { nextEl.querySelector('b').textContent = NEXT[i]; nextEl.classList.remove('is-new'); void nextEl.offsetWidth; nextEl.classList.add('is-new'); } };
  /* each step's bar fills with the scroll, so the pinned section always shows that scrolling is moving it on */
  const fills = stepBtns.map(() => -1);
  const setFill = ps => stepBtns.forEach((b, k) => { const f = Math.round(clamp(ps * 4 - k) * 1000) / 1000; if (f !== fills[k]) { fills[k] = f; b.style.setProperty('--f', f); } });
  const goStep = (i, smooth) => scrollTo({ top: svc.offsetTop + (i + .5) / 4 * (svc.offsetHeight - innerHeight), behavior: smooth && !reduced.matches ? 'smooth' : 'auto' });
  stepBtns.forEach((b, i) => b.addEventListener('click', () => goStep(i, true)));
  /* keyboard focus on a hidden service shows it at once, then moves the scroll to its step after the browser's own focus scroll */
  services.forEach((s, i) => s.addEventListener('focusin', () => { if (root.classList.contains('static')) return; focusStep = i; setStep(i); setTimeout(() => { goStep(i, false); setTimeout(() => { focusStep = -1; }, 120); }, 0); }));

  const headerTone = night => {
    let tone = 'paper';
    for (const el of toneEls) { const r = el.getBoundingClientRect(); if (r.top <= 34 && r.bottom > 34) { tone = el.dataset.tone; break; } }
    if (tone === 'field') tone = night ? 'night' : 'paper';
    if (hdr.dataset.tone !== tone) hdr.dataset.tone = tone;
    hdr.classList.toggle('is-scrolled', scrollY > 24);
  };
  const toneEls = $$('main [data-tone], .ftr');

  if (!ctx) {
    root.classList.add('nofield');
    addEventListener('scroll', () => headerTone(true), { passive: true }); headerTone(true);
    return;
  }

  const PI = Math.PI, TAU = PI * 2, HALF = PI / 2;
  const coarse = matchMedia('(pointer: coarse)').matches;
  const clamp = (v, a = 0, b = 1) => v < a ? a : v > b ? b : v;
  const ease = t => t * t * (3 - 2 * t);
  const sstep = (a, b, v) => ease(clamp((v - a) / (b - a)));
  const lerp = (a, b, t) => a + (b - a) * t;
  const hex = h => [parseInt(h.slice(1, 3), 16), parseInt(h.slice(3, 5), 16), parseInt(h.slice(5, 7), 16)];
  const mix = (a, b, t) => { const A = hex(a), B = hex(b); return `rgb(${A.map((v, i) => Math.round(lerp(v, B[i], t))).join(',')})`; };

  const PAPER = '#F2EDE3', NIGHT = '#1C2026', VIOLET = '#1F6B5C', SIGNAL = '#E39A72';
  const BAND_R = .48, GATE_A = 1.72;
  const POLES = [{ a: -.62, r: .47, rad: .25 }, { a: .95, r: .5, rad: .22 }, { a: 2.45, r: .47, rad: .24 }, { a: -2.3, r: .5, rad: .21 }]
    .map(p => ({ x: p.r * Math.cos(p.a), z: p.r * Math.sin(p.a), rad: p.rad }));
  const LEVELS = 6, TIERS = 3, NB = LEVELS * TIERS * 2;
  const COL = [];
  for (let lit = 0; lit < 2; lit++) for (let l = 0; l < LEVELS; l++) for (let t = 0; t < TIERS; t++)
    COL.push(lit ? mix('#4FA391', '#F2EDE3', Math.pow(l / (LEVELS - 1), .8)) : mix('#30353C', VIOLET, Math.pow(l / (LEVELS - 1), .7)));
  const LW_D = [.8, 1.35, 2.2], LW_M = [1.1, 1.65, 2.5];   /* phones: heavier strokes so the field reads at arm's length */
  let LW = LW_D, A0 = .72, PACE = 1;

  let W = 0, Hh = 0, DPR = 1, K = 0, N = 0, SP = 0, HL = 0;
  let R, PH, PH0, X, Z, BASE, WW, WP, ANG, EN, ORD, RT, BUF, CNT = new Int32Array(NB);
  const CAM = {}, camS = { H: 0, Cz: 0, zt: 0, F: 0, cx: 0, cy: 0, yaw: 0 }, camT = { ...camS };
  const S = { band: 0, calm: .5, survey: 0, flow: 0, gate: 0, core: 0, labels: 0, orbit: 0 }, G = { ...S };
  let finT = 0, ign = 0, ignT = 0, rv = -1, spin = 0, T = 0, last = 0, intro = 0, raf = 0, covered = false, camInit = false, beat = 0;
  let isStatic = root.classList.contains('static'), chapter = '';
  const ptr = { sx: 0, sy: 0, on: false, touch: false, t: 0 }, ripples = [];
  /* the wake: recent pointer points in field space, each with the direction of travel; needles near the path comb along it, then let go */
  const TRAIL = [], TRAIL_LIFE = 1.1, TRAIL_MAX = 28;
  const quiet = $$('[data-quiet]'), qr = [];
  const labels = $$('.fl[data-pole]'), lGate = $('[data-gate]'), lCore = $('[data-core]'), flLayer = $('#fl');

  function build(k) {
    K = k; SP = 1 / K; HL = SP * .36;
    const r = [], p = [];
    for (let i = 2; i <= K; i++) { const rr = (i - .5) * SP, n = Math.round(TAU * rr / (SP * 1.04)), off = rnd() * TAU; for (let j = 0; j < n; j++) { r.push(rr); p.push(off + j / n * TAU); } }
    N = r.length;
    R = Float32Array.from(r); PH = Float32Array.from(p); PH0 = Float32Array.from(p);
    X = new Float32Array(N); Z = new Float32Array(N); BASE = new Float32Array(N); WW = new Float32Array(N); WP = new Float32Array(N);
    ANG = new Float32Array(N); EN = new Float32Array(N); ORD = new Float32Array(N); RT = new Float32Array(N);
    BUF = []; for (let b = 0; b < NB; b++) BUF.push(new Float32Array(N * 4));
    for (let i = 0; i < N; i++) {
      const x = R[i] * Math.cos(PH[i]), z = R[i] * Math.sin(PH[i]);
      /* disorder: smooth turbulence plus a little grain, then four whorls that each keep their own local order */
      const c = 1.9 * Math.sin(x * 6.3 + 1.1) + 1.7 * Math.sin(z * 5.1 - .7) + 1.3 * Math.sin((x - z) * 4.3 + 2) + (rnd() - .5) * .9;
      let vx = Math.cos(2 * c), vy = Math.sin(2 * c);
      for (const p of POLES) {
        const dx = x - p.x, dz = z - p.z, d = Math.hypot(dx, dz); if (d > p.rad) continue;
        const w = ease(1 - d / p.rad) * .96, t = Math.atan2(dz, dx) + HALF + .35;
        vx = vx * (1 - w) + Math.cos(2 * t) * w; vy = vy * (1 - w) + Math.sin(2 * t) * w;
      }
      BASE[i] = .5 * Math.atan2(vy, vx); ANG[i] = BASE[i];
      WW[i] = .25 + rnd() * .6; WP[i] = rnd() * TAU; RT[i] = .65 + rnd() * .35;
    }
  }

  function layout() {
    W = innerWidth; Hh = innerHeight;
    /* phones draw at full device resolution (up to 3x) so strokes stay sharp; the needle count there is small */
    DPR = Math.min(devicePixelRatio || 1, W <= 820 ? 3 : 2);
    const cw = Math.round(cv.clientWidth * DPR), ch = Math.round(cv.clientHeight * DPR);
    if (cv.width !== cw || cv.height !== ch) { cv.width = cw; cv.height = ch; }
    const m = W <= 820, k = W <= 560 ? 23 : W <= 1100 ? 34 : 42;
    LW = m ? LW_M : LW_D; A0 = m ? .88 : .72; PACE = m || coarse ? 1.7 : 1;   /* touch: the field follows the thumb more tightly */
    if (k !== K) build(k);
    $$('.fl').forEach(el => { el._w = 0; });
    /* on phones the plan view fills the measured gap between the services heading and its panel */
    const sh = $('.svc-head'), sp = $('.svc-panel'), gTop = sh.offsetTop + sh.offsetHeight, gBot = sp.offsetTop + (m ? 22 : 0);
    const gap = Math.max(0, gBot - gTop), pr = m ? clamp(Math.min(W * .4, gap * .5 - 10), 60, W * .42) : Math.min(W * .27, Hh * .4), r2 = Math.min(W, Hh) * .43;
    CAM.hero = { H: .3, Cz: -1.3, zt: -.1, F: Hh * (m ? .9 : 1.2), cx: W * (m ? .5 : .64), cy: Hh * (m ? (W > 600 ? .62 : .76) : .5), yaw: .25 };
    CAM.prob = { H: .4, Cz: -.95, zt: .1, F: Hh * (m ? .9 : 1.1), cx: W * (m ? .5 : .36), cy: Hh * .56, yaw: .95 };
    CAM.plan = { H: 3, Cz: -.01, zt: 0, F: 3 * pr, cx: W * (m ? .5 : .69), cy: m && gap ? (gTop + gBot) / 2 : Hh * (m ? .425 : .53), yaw: 0 };
    CAM.planC = { H: 3, Cz: -.01, zt: 0, F: 3 * r2, cx: W * .5, cy: Hh * .5, yaw: 0 };
    CAM.grand = { H: .52, Cz: -1.55, zt: -.1, F: Hh * (m ? .95 : 1.35), cx: W * (m ? .5 : .57), cy: Hh * (m ? .36 : .42), yaw: 0 };
    /* the finale settles: the camera rises back to a still plan view, the connected rings resolved around the core */
    /* phones: the rings centre on the screen and frame the closing text symmetrically */
    CAM.end = { H: 3, Cz: -.01, zt: 0, F: 3 * Math.max(W, Hh) * (m ? .5 : .5), cx: W * (m ? .5 : .76), cy: Hh * (m ? .5 : .52), yaw: 0 };
  }
  const camLerp = (o, a, b, t) => { for (const k in a) o[k] = lerp(a[k], b[k], t); return o; };

  const STEPS = [
    { band: 0, calm: .1, survey: 1, flow: 0, gate: 0, core: 0, labels: 1, orbit: 0 },
    { band: .075, calm: .08, survey: .3, flow: 0, gate: 0, core: 0, labels: 1, orbit: .35 },
    { band: .15, calm: .06, survey: 0, flow: 1, gate: 1, core: 0, labels: 1, orbit: 1 },
    { band: 1.6, calm: 0, survey: 0, flow: .7, gate: 1, core: 1, labels: 1, orbit: 1 }];
  const FREE = { band: 0, calm: .5, survey: 0, flow: 0, gate: 0, core: 0, labels: 1, orbit: 0 };
  const tmpA = {}, tmpB = {};

  /* Scroll position decides everything; nothing here keeps its own timeline. */
  function targets() {
    const vh = Hh, y = scrollY;
    const s = svc.getBoundingClientRect(), r = rev.getBoundingClientRect(), sh = sheet.getBoundingClientRect(), c = fin.getBoundingClientRect();
    covered = sh.top <= 0 && sh.bottom >= vh;
    if (isStatic) {
      const ch = sh.top < 0 ? 'end' : r.top < vh ? 'grand' : 'hero';
      const changed = ch !== chapter; chapter = ch;
      Object.assign(G, ch === 'hero' ? FREE : STEPS[3]); G.calm = 0; G.orbit = 0; G.labels = ch === 'hero' ? 1 : 0; G.flow = 0;
      ignT = ch === 'hero' ? 0 : 1; Object.assign(camT, CAM[ch]);
      return changed;
    }
    const travel = clamp(y / Math.max(1, s.top + y - vh * .9)), rise = clamp(1 - s.top / (vh * .9));
    const ps = clamp(-s.top / (s.height - vh)), pr = clamp(-r.top / (r.height - vh));
    const recentre = clamp(1 - r.top / vh), fz = clamp(1 - c.top / vh);
    const idx = r.top < vh * .5 ? 3 : Math.min(3, Math.floor(ps * 4));
    setStep(focusStep >= 0 ? focusStep : idx);
    setFill(r.top < vh * .5 ? 1 : ps);
    Object.assign(G, rise > .55 ? STEPS[idx] : FREE);
    ignT = ease(clamp((pr - .1) / .42));
    if (ignT > .04) { G.labels = 0; G.flow = 1; }
    camLerp(tmpA, CAM.hero, CAM.prob, ease(travel));
    camLerp(tmpB, tmpA, CAM.plan, ease(rise));
    camLerp(tmpA, tmpB, CAM.planC, ease(recentre));
    camLerp(tmpB, tmpA, CAM.grand, ease(clamp((pr - .54) / .3)));
    camLerp(camT, tmpB, CAM.end, ease(fz));
    finT = fz;
    const v = clamp((pr - .42) / .2);
    if (Math.abs(v - rv) > .004) { rv = v; rev.style.setProperty('--rv', v.toFixed(3)); }
    return true;
  }

  function unproject(sx, sy) {
    const c = camS, al = Math.atan2(c.H, c.zt - c.Cz), sa = Math.sin(al), ca = Math.cos(al);
    const Xn = (sx - c.cx) / c.F, Yn = -(sy - c.cy) / c.F, dy = Yn * ca - sa, dz = Yn * sa + ca;
    if (dy > -1e-3) return null;
    const t = c.H / -dy, xr = Xn * t, zr = c.Cz + dz * t, yw = c.yaw + spin, cs = Math.cos(yw), sn = Math.sin(yw);
    return [xr * cs + zr * sn, -xr * sn + zr * cs];
  }

  function sim(dt, snap) {
    const kS = snap ? 1 : 1 - Math.exp(-dt * 3.2 * PACE);
    for (const k in S) if (k !== 'band') S[k] += (G[k] - S[k]) * kS;
    const bs = snap ? 9 : dt * PACE * (G.band > S.band ? (G.band > 1 ? 1.15 : .22) : 1.6);   /* the band grows at a steady pace, so the order visibly spreads */
    S.band += clamp(G.band - S.band, -bs, bs);
    const kC = snap || !camInit ? 1 : 1 - Math.exp(-dt * 6.5 * PACE);
    for (const k in camS) camS[k] += (camT[k] - camS[k]) * kC; camInit = true;
    ign += (ignT - ign) * (snap ? 1 : 1 - Math.exp(-dt * 9));
    const night = ign > .999;
    spin = night && !snap ? spin + dt * .035 : spin * Math.exp(-dt * 2.5);
    intro = snap ? 1 : Math.min(1, intro + dt * PACE / 1.7);
    for (let i = ripples.length - 1; i >= 0; i--) { const rp = ripples[i]; rp.rad += dt * .62; rp.amp = rp.a0 * (1 - rp.rad / rp.max); if (rp.rad >= rp.max) ripples.splice(i, 1); }
    if (night && !snap) { beat += dt; if (beat > 5.5) { beat = 0; ripples.push({ x: 0, z: 0, rad: 0, max: 1.25, a0: .55, amp: .55 }); } }

    const kA = snap ? 1 : 1 - Math.exp(-dt * 6 * PACE), kB = snap ? 1 : 1 - Math.exp(-dt * 1.1 * PACE), dec = Math.exp(-dt * 1.4);
    const band = S.band, full = band > 1.3, none = band < .004, orbit = snap ? 0 : S.orbit, calm = S.calm;
    let px = 0, pz = 0, pon = false;
    if (ptr.on && !snap) { const p = unproject(ptr.sx, ptr.sy); if (p) { px = p[0]; pz = p[1]; pon = true; } }
    const RHO = full ? .13 : .19, RHO2 = RHO * RHO, pStr = full ? .55 : 1, nr = ripples.length;
    const WR = RHO * 1.35, WR2 = WR * WR, wStr = full ? .6 : 1;
    let nt = 0, bx0 = 1e9, bx1 = -1e9, bz0 = 1e9, bz1 = -1e9;
    if (!snap) {
      for (let k = TRAIL.length - 1; k >= 0; k--) { if ((TRAIL[k].age += dt) > TRAIL_LIFE) TRAIL.splice(k, 1); }
      nt = TRAIL.length;
      for (let k = 0; k < nt; k++) { const tp = TRAIL[k]; if (tp.x < bx0) bx0 = tp.x; if (tp.x > bx1) bx1 = tp.x; if (tp.z < bz0) bz0 = tp.z; if (tp.z > bz1) bz1 = tp.z; }
      bx0 -= WR; bx1 += WR; bz0 -= WR; bz1 += WR;
    } else TRAIL.length = 0;
    for (let i = 0; i < N; i++) {
      const r = R[i]; let ph = PH[i];
      const o = full ? 1 : none ? 0 : 1 - sstep(band - .035, band + .035, Math.abs(r - BAND_R));
      if (o > 0) ph += dt * orbit * o * (.03 + .03 / (.3 + r));
      else if (ph !== PH0[i]) { let d = PH0[i] - ph; d -= TAU * Math.round(d / TAU); if (Math.abs(d) < 1e-3 || snap) ph = PH0[i]; else ph += d * Math.min(1, kB * 2.5); }
      PH[i] = ph; ORD[i] = o;
      const x = r * Math.cos(ph), z = r * Math.sin(ph); X[i] = x; Z[i] = z;
      let t = BASE[i] + calm * Math.sin(T * WW[i] + WP[i]);
      if (o > 0) { let d = ph + HALF - t; d -= PI * Math.round(d / PI); t += d * o; }
      let e = EN[i] * dec, w = 0;
      if (pon) {
        const dx = px - x, dz = pz - z, d2 = dx * dx + dz * dz;
        if (d2 < RHO2) { w = 1 - Math.sqrt(d2) / RHO; w *= w; let d = Math.atan2(dz, dx) - t; d -= PI * Math.round(d / PI); t += d * w * pStr; if (w > e) e = w; }
      }
      if (nt && x > bx0 && x < bx1 && z > bz0 && z < bz1) {
        let best = 0, ba = 0;
        for (let k = 0; k < nt; k++) {
          const tp = TRAIL[k]; if (tp.a === null) continue;
          const dx = x - tp.x, dz = z - tp.z, d2 = dx * dx + dz * dz; if (d2 >= WR2) continue;
          let ww = 1 - Math.sqrt(d2) / WR; ww *= ww * (1 - tp.age / TRAIL_LIFE); if (ww > best) { best = ww; ba = tp.a; }
        }
        if (best > .02) { let d = ba - t; d -= PI * Math.round(d / PI); t += d * best * wStr; if (best * .8 > e) e = best * .8; if (best > w) w = best; }
      }
      for (let j = 0; j < nr; j++) {
        const rp = ripples[j], dx = x - rp.x, dz = z - rp.z, q = (Math.sqrt(dx * dx + dz * dz) - rp.rad) * 22;
        if (q > -2.4 && q < 2.4) { const g = Math.exp(-q * q) * rp.amp; if (g > e) e = g; t += g * .85; }
      }
      let a = ANG[i], d = t - a; d -= PI * Math.round(d / PI);
      a += d * ((o > .01 || w > 0) ? kA : kB) * (snap ? 1 : RT[i]);
      ANG[i] = a; EN[i] = snap ? 0 : e;
    }
  }

  let PJ = { sa: 0, ca: 1, cs: 1, sn: 0 };
  const proj = (x, z) => {
    const c = camS, xr = x * PJ.cs - z * PJ.sn, zr = x * PJ.sn + z * PJ.cs, rz = zr - c.Cz, zv = c.H * PJ.sa + rz * PJ.ca;
    if (zv < .05) return null; const k = c.F / zv;
    return [c.cx + xr * k, c.cy - (-c.H * PJ.ca + rz * PJ.sa) * k, k];
  };
  const ring = (x, z, rad) => {
    ctx.beginPath(); let pen = false;
    for (let j = 0; j <= 72; j++) { const a = j / 72 * TAU, p = proj(x + rad * Math.cos(a), z + rad * Math.sin(a)); if (!p) { pen = false; continue; } pen ? ctx.lineTo(p[0], p[1]) : ctx.moveTo(p[0], p[1]); pen = true; }
  };
  const seg = (x1, z1, x2, z2) => { const a = proj(x1, z1), b = proj(x2, z2); if (a && b) { ctx.moveTo(a[0], a[1]); ctx.lineTo(b[0], b[1]); } };
  const quietAt = (sx, sy, M) => {
    let q = 1;
    for (let j = 0; j < qr.length; j += 4) {
      const dx = sx < qr[j] ? qr[j] - sx : sx > qr[j + 2] ? sx - qr[j + 2] : 0; if (dx >= M) continue;
      const dy = sy < qr[j + 1] ? qr[j + 1] - sy : sy > qr[j + 3] ? sy - qr[j + 3] : 0; if (dy >= M) continue;
      const d = Math.sqrt(dx * dx + dy * dy) / M; if (d < q) q = d;
    }
    return q;
  };
  /* labels sit right of their point, or flip left when that side leaves the screen or covers an earlier label; otherwise they fade */
  const placed = [];
  const place = (el, p, op, dx, dy) => {
    const w = el._w || (el._w = el.offsetWidth); let lx = 0, flip = false, ok = false;
    if (p && op > .02 && p[1] > 70 && p[1] < Hh - 20) for (const f of [false, true]) {
      const x = f ? p[0] - dx - w : p[0] + dx;
      if (x < 6 || x + w > W - 6) continue;
      if (placed.some(r => x < r[2] + 6 && x + w > r[0] - 6 && Math.abs(p[1] - r[1]) < 22)) continue;
      lx = x; flip = f; ok = true; break;
    }
    const o = ok ? op * sstep(.6, .9, quietAt(lx + w / 2, p[1], 60)) : 0;   /* near text a label leaves quickly rather than hanging half-faded */
    el.style.opacity = o < .02 ? 0 : o.toFixed(2);
    if (o >= .02) { placed.push([lx, p[1], lx + w]); el.classList.toggle('flip', flip); el.style.transform = `translate3d(${lx.toFixed(1)}px,${(p[1] + dy).toFixed(1)}px,0)`; }
  };

  function draw() {
    const c = camS, al = Math.atan2(c.H, c.zt - c.Cz), sa = Math.sin(al), ca = Math.cos(al), yaw = c.yaw + spin, cs = Math.cos(yaw), sn = Math.sin(yaw);
    PJ = { sa, ca, cs, sn };
    const APPR = mix('#9A6F12', '#E2B04A', ign);   /* approval: gold-deep on paper, gold at night */
    const night = ign > .999, F = c.F, cx = c.cx, cy = c.cy, Hc = c.H, Cz = c.Cz;
    ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
    ctx.globalAlpha = 1; ctx.fillStyle = ign > .97 ? NIGHT : PAPER; ctx.fillRect(0, 0, W, cv.height / DPR);
    const core = proj(0, 0), kc = core ? core[2] : 1;
    let waveR = night ? 1e9 : -1;
    if (!night && ign > .001 && core) {   /* the transmutation: night spreads from the core as one clean circle */
      waveR = ign * (Math.hypot(Math.max(core[0], W - core[0]), Math.max(core[1], Hh - core[1])) / kc + .08);
      ctx.fillStyle = NIGHT; ring(0, 0, waveR); ctx.fill();
      ctx.strokeStyle = VIOLET; ctx.lineWidth = 1.5; ctx.globalAlpha = .9 * (1 - ign); ring(0, 0, waveR); ctx.stroke(); ctx.globalAlpha = 1;
    }
    if (core && ign > .02) {
      const gr = Math.min(.75, waveR) * kc, g = ctx.createRadialGradient(core[0], core[1], 0, core[0], core[1], gr);
      g.addColorStop(0, 'rgba(31,107,92,.34)'); g.addColorStop(.35, 'rgba(31,107,92,.17)'); g.addColorStop(.7, 'rgba(31,107,92,.05)'); g.addColorStop(1, 'rgba(31,107,92,0)');
      ctx.save(); ctx.translate(core[0], core[1]); ctx.scale(1, Math.max(.2, sa)); ctx.translate(-core[0], -core[1]);
      ctx.fillStyle = g; ctx.beginPath(); ctx.arc(core[0], core[1], gr, 0, TAU); ctx.fill(); ctx.restore();
    }

    /* quiet zones: the field parts around text */
    qr.length = 0;
    for (const el of quiet) {
      if (el.dataset.quiet === 'reveal' && rv < .1) continue;
      const r = el.getBoundingClientRect(); if (r.bottom < -60 || r.top > Hh + 60 || !r.width) continue;
      qr.push(r.left - 8, r.top - 8, r.right + 8, r.bottom + 8);
    }
    const M = W <= 820 ? 58 : 120, flow = S.flow, introR = intro * 1.6, HcSa = Hc * sa, HcCa = -Hc * ca, lwk = SP * .105;
    CNT.fill(0);
    for (let i = 0; i < N; i++) {
      const x = X[i], z = Z[i], xr = x * cs - z * sn, zr = x * sn + z * cs, rz = zr - Cz, zv = HcSa + rz * ca;
      if (zv < .07) continue;
      const k = F / zv, sx = cx + xr * k, sy = cy - (HcCa + rz * sa) * k;
      if (sx < -24 || sx > W + 24 || sy < -24 || sy > Hh + 24) continue;
      let q = qr.length ? quietAt(sx, sy, M) : 1;
      const r = R[i];
      if (intro < 1) q *= clamp((introR - r) * 4);
      if (q < .05) continue;
      const a = ANG[i] + yaw, dx = Math.cos(a) * HL * q, dz = Math.sin(a) * HL * q;
      const z1 = HcSa + (rz + dz) * ca, z2 = HcSa + (rz - dz) * ca; if (z1 < .04 || z2 < .04) continue;
      const k1 = F / z1, k2 = F / z2;
      let e = EN[i]; const o = ORD[i];
      if (flow > .01 && o > 0) { const sv = Math.sin(3 * PH[i] - T * 1.25 + r * 6.5); if (sv > 0) { const s2 = sv * sv; e += o * flow * s2 * s2 * s2 * .85; } }
      const lvl = e >= 1 ? LEVELS - 1 : (e * LEVELS) | 0, lw = k * lwk, tier = lw < .95 ? 0 : lw < 1.75 ? 1 : 2;
      const b = (r < waveR ? LEVELS * TIERS : 0) + lvl * TIERS + tier, n = CNT[b]++ * 4, B = BUF[b];
      B[n] = cx + (xr + dx) * k1; B[n + 1] = cy - (HcCa + (rz + dz) * sa) * k1; B[n + 2] = cx + (xr - dx) * k2; B[n + 3] = cy - (HcCa + (rz - dz) * sa) * k2;
    }
    ctx.lineCap = 'round';
    for (let b = 0; b < NB; b++) {
      const n = CNT[b] * 4; if (!n) continue; const B = BUF[b], tier = b % TIERS;
      ctx.strokeStyle = COL[b]; ctx.lineWidth = LW[tier]; ctx.globalAlpha = tier === 0 ? A0 : 1;
      ctx.beginPath(); for (let j = 0; j < n; j += 4) { ctx.moveTo(B[j], B[j + 1]); ctx.lineTo(B[j + 2], B[j + 3]); } ctx.stroke();
    }
    ctx.globalAlpha = 1;

    /* drawing-board marks for the plan view */
    if (S.survey > .02) {
      /* the four sources are marked in signal coral; the links between them stay violet */
      ctx.strokeStyle = SIGNAL; ctx.lineWidth = 1.6; ctx.globalAlpha = S.survey; ctx.setLineDash([3, 5]);
      for (const p of POLES) { ring(p.x, p.z, p.rad * .82); ctx.stroke(); }
      ctx.strokeStyle = VIOLET; ctx.lineWidth = 1.2; ctx.globalAlpha = S.survey * .9;
      ctx.beginPath();
      POLES.forEach((p, i) => { const q = POLES[(i + 1) % 4], dx = q.x - p.x, dz = q.z - p.z, d = Math.hypot(dx, dz), ux = dx / d, uz = dz / d, m = d / 2, g = .035;
        seg(p.x + ux * p.rad * .82, p.z + uz * p.rad * .82, p.x + ux * (m - g), p.z + uz * (m - g)); seg(p.x + ux * (m + g), p.z + uz * (m + g), q.x - ux * q.rad * .82, q.z - uz * q.rad * .82); });
      ctx.stroke(); ctx.setLineDash([]);
      ctx.beginPath();
      POLES.forEach((p, i) => { const q = POLES[(i + 1) % 4], dx = q.x - p.x, dz = q.z - p.z, d = Math.hypot(dx, dz), ux = dx / d, uz = dz / d, mx = (p.x + q.x) / 2, mz = (p.z + q.z) / 2, g = .035, t = .03;
        seg(mx - ux * g + uz * t, mz - uz * g - ux * t, mx - ux * g - uz * t, mz - uz * g + ux * t); seg(mx + ux * g + uz * t, mz + uz * g - ux * t, mx + ux * g - uz * t, mz + uz * g + ux * t); });
      ctx.lineWidth = 1.6; ctx.stroke(); ctx.globalAlpha = 1;
    }
    if (S.band > .01 && S.band < 1.3) {
      ctx.strokeStyle = VIOLET; ctx.lineWidth = 1; ctx.globalAlpha = .4 * clamp(S.band * 20) * clamp((1.3 - S.band) * 4);
      ring(0, 0, BAND_R - S.band - .02); ctx.stroke(); ring(0, 0, BAND_R + S.band + .02); ctx.stroke(); ctx.globalAlpha = 1;
    }
    if (S.gate > .02) {
      const gx = Math.cos(GATE_A), gz = Math.sin(GATE_A), a = proj(gx * (BAND_R - .1), gz * (BAND_R - .1)), b = proj(gx * (BAND_R + .1), gz * (BAND_R + .1));
      if (a && b) { ctx.globalAlpha = S.gate * (1 - finT) * (qr.length ? ease(quietAt((a[0] + b[0]) / 2, (a[1] + b[1]) / 2, 70)) : 1); ctx.strokeStyle = APPR; ctx.lineWidth = 2.5; ctx.beginPath(); ctx.moveTo(a[0], a[1]); ctx.lineTo(b[0], b[1]); ctx.stroke(); ctx.globalAlpha = 1; }
    }
    if (core && S.core > .02) {
      const qa = qr.length ? ease(quietAt(core[0], core[1], 60)) : 1;   /* an approval ring lying in the plane, and a round point at its centre */
      ctx.globalAlpha = S.core * qa; ctx.strokeStyle = APPR; ctx.lineWidth = 1.6; ring(0, 0, .042 * (.6 + .4 * S.core)); ctx.stroke();
      ctx.fillStyle = APPR; ctx.beginPath(); ctx.arc(core[0], core[1], clamp(.011 * kc, 3, 7), 0, TAU); ctx.fill(); ctx.globalAlpha = 1;
    }

    /* labels live in the DOM so they stay crisp; they are aria-hidden duplicates of text in the page */
    flLayer.classList.toggle('is-night', ign > .22);
    placed.length = 0;
    const lo = S.labels * intro;
    place(lGate, S.gate > .02 ? proj(Math.cos(GATE_A) * (BAND_R + .12), Math.sin(GATE_A) * (BAND_R + .12)) : null, S.gate * (covered ? 0 : 1) * (1 - finT), 6, -5);
    place(lCore, S.core > .02 && core ? core : null, S.core * (1 - finT), .05 * kc + 8, -5);
    labels.forEach((el, i) => place(el, lo > .02 ? proj(POLES[i].x, POLES[i].z) : null, lo, 9, -5));
    const hp = ign > .001 && ign < .999 ? unproject(W * .5, 34) : null;   /* the header turns to night as soon as the spreading night reaches it */
    headerTone(ign > .999 || (hp ? Math.hypot(hp[0], hp[1]) < waveR : ign > .5));
  }

  function frame(now) {
    raf = 0;
    const dt = Math.min(.05, (now - last) / 1000 || .016); last = now; T += dt;
    targets();
    if (covered || document.hidden) { headerTone(true); return; }   /* a solid sheet covers the field: stop drawing until scroll resumes */
    sim(dt, false); draw();
    F_.ms = F_.ms * .95 + (performance.now() - now) * .05;
    raf = requestAnimationFrame(frame);
  }
  const kick = () => { if (!raf && !isStatic) { last = performance.now(); raf = requestAnimationFrame(frame); } };
  const still = force => { const ch = targets(); if (covered) { headerTone(true); return; } if (ch || force) { sim(1, true); draw(); } else headerTone(ign > .5); };
  const F_ = window.__field = { ms: 0, get n() { return N; }, S, camS, get ign() { return ign; }, ff(sec) { for (let i = 0; i < sec * 30; i++) { T += .033; targets(); sim(.033, false); } draw(); } };   /* review aid: advance the simulation without waiting for frames */

  layout();
  if (isStatic) still(true); else kick();
  addEventListener('scroll', () => isStatic ? still(false) : kick(), { passive: true });
  let rt = 0;
  /* a phone's toolbar showing or hiding changes only the height: glide to the new framing instead of jumping */
  let lastW = innerWidth;
  addEventListener('resize', () => { clearTimeout(rt); rt = setTimeout(() => { const wc = innerWidth !== lastW; lastW = innerWidth; layout(); if (wc) camInit = false; isStatic ? still(true) : kick(); }, 80); });
  document.addEventListener('visibilitychange', kick);
  reduced.addEventListener('change', () => location.reload());
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(() => { layout(); camInit = false; isStatic ? still(true) : kick(); });

  /* Review aid for still captures: ?at=services:0.4 (id and fraction of its scroll range) or ?at=y:1200. Settles the field and freezes CSS motion. */
  const rq = new URLSearchParams(location.search).get('at');
  if (rq) addEventListener('load', () => {
    const [id, v] = rq.split(':'), el = document.getElementById(id);
    root.classList.add('review');
    scrollTo(0, el ? el.getBoundingClientRect().top + scrollY + (+v || 0) * Math.max(0, el.offsetHeight - innerHeight) : +v || 0);
    if (isStatic) still(true); else F_.ff(6);
  });

  /* pointer: the field answers. Listeners are passive, so touch scrolling is never blocked. */
  const at = (x, y, touch) => {
    ptr.sx = x; ptr.sy = y; ptr.on = true; ptr.touch = touch; ptr.t = performance.now();
    if (isStatic || covered) return;
    const p = unproject(x, y); if (!p) return;
    const L = TRAIL[TRAIL.length - 1], d = L ? Math.hypot(p[0] - L.x, p[1] - L.z) : 1;
    if (L && d < .02) return;                                              /* too close to the last point to give a direction */
    TRAIL.push({ x: p[0], z: p[1], a: L && d < .4 ? Math.atan2(p[1] - L.z, p[0] - L.x) : null, age: 0 });   /* a jump starts a new stroke */
    if (TRAIL.length > TRAIL_MAX) TRAIL.shift();
  };
  addEventListener('pointermove', e => at(e.clientX, e.clientY, e.pointerType === 'touch'), { passive: true });
  addEventListener('touchmove', e => { const t = e.touches[0]; if (t) at(t.clientX, t.clientY, true); }, { passive: true });
  const off = () => { ptr.on = false; };
  addEventListener('touchend', () => setTimeout(() => { if (performance.now() - ptr.t > 500) off(); }, 600), { passive: true });
  document.addEventListener('mouseleave', off); addEventListener('blur', off);
  addEventListener('pointerdown', e => {
    if (isStatic || covered) return;
    at(e.clientX, e.clientY, e.pointerType === 'touch');
    const p = unproject(e.clientX, e.clientY); if (!p || Math.hypot(p[0], p[1]) > 1.25) return;
    /* in the disconnected field a touch dies where it lands; once connected, it crosses the whole operation */
    const max = S.band > 1.3 ? 2.2 : S.band > .01 ? .7 : .3;
    if (ripples.length > 5) ripples.shift();
    ripples.push({ x: p[0], z: p[1], rad: 0, max, a0: 1, amp: 1 });
  }, { passive: true });
})();
