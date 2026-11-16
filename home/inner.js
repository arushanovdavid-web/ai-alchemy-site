/* AI Alchemy — "The Field" inner pages. Page behaviour (menu, header tone, the project brief) and the small fields
   (engine in /home/mini.js). No dependencies, no network requests, nothing stored. */
(() => {
  'use strict';
  const $ = (s, r = document) => r.querySelector(s), $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  const root = document.documentElement;

  /* ---- Mobile menu: a full-screen overlay. While it is open the rest of the page is inert and Tab cycles
     through the header controls only (logo, Close, the menu links). ---- */
  const mb = $('#menu-btn'), nav = $('#nav'), hdr = $('#header');
  if (mb && nav && hdr) {
    const skipTags = ['SCRIPT', 'STYLE', 'TEMPLATE'];
    const behind = () => [...document.body.children].filter(el => el !== hdr && !skipTags.includes(el.tagName));
    const isOpen = () => nav.classList.contains('is-open');
    const setNav = open => {
      mb.setAttribute('aria-expanded', String(open)); nav.classList.toggle('is-open', open); hdr.classList.toggle('menu-open', open);
      mb.textContent = open ? 'Close' : 'Menu'; document.body.style.overflow = open ? 'hidden' : '';
      behind().forEach(el => { el.inert = open; });
    };
    mb.addEventListener('click', () => setNav(!isOpen()));
    $$('a', nav).forEach(a => a.addEventListener('click', () => setNav(false)));
    addEventListener('keydown', e => {
      if (!isOpen()) return;
      if (e.key === 'Escape') { setNav(false); mb.focus(); return; }
      if (e.key !== 'Tab') return;
      const stops = $$('a[href], button', hdr).filter(el => el.getClientRects().length);
      const first = stops[0], last = stops[stops.length - 1], at = document.activeElement;
      if (e.shiftKey && (at === first || !hdr.contains(at))) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && (at === last || !hdr.contains(at))) { e.preventDefault(); first.focus(); }
    });
    matchMedia('(min-width:821px)').addEventListener('change', e => { if (e.matches && isOpen()) setNav(false); });
  }

  /* ---- Header: paper or night, from whatever section sits under it ---- */
  const toneEls = $$('[data-tone]');
  const tone = () => {
    let t = 'paper';
    for (const el of toneEls) { if (el === hdr) continue; const r = el.getBoundingClientRect(); if (r.top <= 34 && r.bottom > 34) { t = el.dataset.tone; break; } }
    if (hdr.dataset.tone !== t) hdr.dataset.tone = t;
    hdr.classList.toggle('is-scrolled', scrollY > 24);
  };
  if (hdr) { addEventListener('scroll', tone, { passive: true }); addEventListener('resize', tone); tone(); }

  /* ---- Small fields ---- */
  const MF = window.AAMini;
  if (MF) {
    const { C, sm, noise, GOLD, VIO, LILAC } = MF, PI = Math.PI, VCOL = 'rgb(99,91,255)';
    const canvas = (parent, cls, before) => { const c = document.createElement('canvas'); c.className = cls; c.setAttribute('aria-hidden', 'true'); before ? parent.insertBefore(c, before) : parent.append(c); return c; };

    /* The method figure: labelled stations on a small field. Each station combs its own whorl in turn, then one band
       connects them. Human checkpoints carry the gold approval mark. Vertical on narrow screens. */
    $$('figure.method').forEach(fig => {
      const board = $('.method-board', fig), items = $$('.method-steps li', fig), N = items.length; if (!board || !N) return;
      board.style.setProperty('--n', N); fig.style.setProperty('--n', N);
      const checks = items.map(li => li.classList.contains('is-check')), set = fig.dataset.kind === 'set';
      let geo = null;
      MF.add(canvas(board, 'mfield', board.firstChild), {
        intro: 2200, lw: 1.5, pal: [[176, 173, 194], VIO],
        make(w, h) {
          const vert = w < 440, n = [], sp = 15;
          const st = items.map((_, i) => vert ? { x: 36, y: 12 + (i + .5) / N * (h - 24) } : { x: (i + .5) / N * w, y: h / 2 });
          const gap = vert ? (h - 24) / N : w / N, Rw = Math.min(30, gap * .36), u0 = vert ? st[0].y : st[0].x, u1 = vert ? st[N - 1].y : st[N - 1].x;
          geo = { st, vert, gap };
          for (let y = sp / 2; y < h; y += sp) for (let x = sp / 2; x < w; x += sp) {
            /* a soft-edged patch of field rather than a rectangle: thin out toward the edges */
            const ex = Math.abs(x / w - .5) * 2, ey = Math.abs(y / h - .5) * 2, edge = Math.max(ex * ex, ey * ey);
            if (edge > .45 && MF.rnd() < (edge - .45) * 1.9) continue;
            let j = 0, d = 1e9; st.forEach((s, i) => { const q = Math.hypot(x - s.x, y - s.y); if (q < d) { d = q; j = i; } });
            const a0 = noise(x * 2, y * 2, j + 1) * 2, u = vert ? y : x, v = vert ? x - st[0].x : y - st[0].y;
            if (d < Rw && d > 5) n.push({ x, y, l: 4.4, a0, a1: Math.atan2(y - st[j].y, x - st[j].x) + PI / 2, k: N > 1 ? j / (N - 1) : 1, t: 'w' });
            else if (d >= Rw && Math.abs(v) < 12 && u > u0 && u < u1) n.push({ x, y, l: 4.8, a0, a1: vert ? PI / 2 : 0, k: (u - u0) / Math.max(1, u1 - u0), t: 'b' });
            else n.push({ x: x + (MF.rnd() - .5) * 5, y: y + (MF.rnd() - .5) * 5, l: 3.4 * (1 - edge * .35), a0, a1: a0, k: 0, t: 'g' });
          }
          return n; },
        ord(n, p) { if (n.t === 'w') return sm(n.k * .62, n.k * .62 + .3, p); if (n.t === 'b') return set ? sm(.75, 1, p) : sm(0, .14, p * 1.18 - n.k); return 0; },
        tint: (o, n) => n.t === 'g' ? 0 : o,
        deco(x, w, h, p) {
          if (!geo) return; const { st, vert, gap } = geo;
          st.forEach((s, i) => {
            const k = N > 1 ? i / (N - 1) : 1, o = sm(k * .62, k * .62 + .3, p);
            x.globalAlpha = 1; x.fillStyle = o > .6 ? VCOL : '#4A4862'; x.beginPath(); x.arc(s.x, s.y, 3.2, 0, 7); x.fill();
            if (checks[i] && o > .3) {   /* the approval gate, just before the station */
              x.globalAlpha = sm(.3, .9, o); x.strokeStyle = GOLD; x.lineWidth = 2.4; x.beginPath();
              if (vert) { const y = s.y - gap * .5; x.moveTo(s.x - 12, y); x.lineTo(s.x + 12, y); } else { const gx = s.x - gap * .5; x.moveTo(gx, s.y - 12); x.lineTo(gx, s.y + 12); }
              x.stroke(); x.globalAlpha = 1;
            }
          });
        }
      });
    });

    /* A field horizon at the foot of heroes without a figure. It orders as you scroll on; on the 404 page it stays loose. */
    const lost = document.querySelector('.err-page');
    $$('.page-hero').forEach(hero => {
      if ($('figure.method', hero)) return;
      MF.add(canvas(hero, 'horizon'), {
        lw: 1.3, pal: [[150, 147, 170], VIO], intro: 2600,
        make(w, h) { const n = []; let y = 6, row = 0;
          while (y < h - 2) { const t = y / h, dx = 9 + 16 * t, l = 2 + 5.4 * t;
            for (let x = (row % 2) * dx / 2; x < w + dx; x += dx) n.push({ x, y, l, a0: noise(x, y * 3, row) * 2, a1: .34 * Math.sin(x * .011 + row * .8), k: x / w });
            y += 5 + 15 * t; row++; }
          return n; },
        ord: (n, p) => lost ? 0 : sm(0, .25, p * 1.25 - n.k),
        tint: o => o > .9 ? 1 : 0
      });
    });

    /* Method steps: the same strip as the homepage. */
    $$('ol.steps').forEach(ol => { const gs = $$('.glyph', ol); gs.forEach((g, i) => { g.innerHTML = '<canvas></canvas>'; MF.add(g.firstChild, MF.strip(i, gs.length)); }); });

    /* The project-brief band: settled rings that order from the centre out as the band arrives, around a gold core. */
    $$('.cta-band').forEach(band => {
      const wrap = $('.wrap', band) || band;
      MF.add(canvas(wrap, 'rings'), {
        lw: 1.5, pal: [[78, 74, 122], LILAC],
        make(w, h) { const n = [], cx = w / 2, cy = h / 2, Rm = w * .5;
          for (let R = 22; R < Rm; R += 14) { const m = Math.round(2 * PI * R / 13); for (let j = 0; j < m; j++) { const a = j / m * 2 * PI + R; n.push({ x: cx + R * Math.cos(a), y: cy + R * Math.sin(a), l: 4.4, a0: noise(R * 4, j * 7, 5) * 2, a1: a + PI / 2, k: R / Rm }); } }
          return n; },
        prog: (r, vh) => C(vh - r.top, vh * .75),
        ord: (n, p) => sm(n.k * .55, n.k * .55 + .4, p),
        deco(x, w, h, p) { x.globalAlpha = sm(.2, .7, p); x.fillStyle = GOLD; x.beginPath(); x.arc(w / 2, h / 2, 4.5, 0, 7); x.fill(); x.globalAlpha = 1; }
      });
    });
  }

  /* ---- Signature 2: the project brief. Three steps, composed locally on a sheet that fills in as you answer.
     Sent only by the visitor's own mail app (mailto). Nothing typed is stored or transmitted by this page. ---- */
  const form = $('#brief-form');
  if (form) {
    const steps = $$('.step', form), back = $('#back'), next = $('#next');
    const progText = $('#prog-text'), progFill = $('#prog-fill'), result = $('#result'), out = $('#brief-out'), status = $('#status');
    const wrap = $('#brief-wrap');
    let cur = 0, prev = [], text = '';
    const L = k => { const t = $('#brief-labels'), e = t && t.content.querySelector(`[data-k="${k}"]`); return e ? e.textContent : ''; };
    const say = (el, id) => { const t = document.getElementById(id); el.replaceChildren(t ? t.content.cloneNode(true) : ''); };
    const build = () => {
      const fd = new FormData(form), v = k => String(fd.get(k) || '').trim();
      const needs = fd.getAll('need').map(n => `- ${n}`); if (v('need_other')) needs.push(`- ${L('other')} ${v('need_other')}`);
      return [L('header'), '', `${L('contact')} ${v('name')}`, `${L('org')} ${v('organization')}`, `${L('email')} ${v('email') || L('notprov')}`, '',
        L('needs'), ...needs, '', L('details'), v('details') || L('notyet'), '', `${L('created')} ${new Date().toLocaleDateString('en-CA')}`, '',
        L('closing')].join('\n');
    };
    const heads = () => [L('header'), L('needs'), L('details')];
    /* Render the brief on the sheet line by line; lines that changed since the last render take a brief ink flash. */
    const paint = first => {
      text = build(); const lines = text.split('\n'), hd = heads();
      const frag = document.createDocumentFragment();
      lines.forEach((ln, i) => {
        const s = document.createElement('span'); s.className = 'ln' + (hd.includes(ln) ? ' hd' : '');
        if (!first && ln && ln !== prev[i] && !prev.includes(ln)) s.classList.add('chg');
        s.textContent = ln; frag.append(s);
      });
      out.replaceChildren(frag); prev = lines;
    };
    const show = (i, focus = true) => {
      cur = i; steps.forEach((s, k) => s.hidden = k !== i);
      back.hidden = i === 0; const last = i === steps.length - 1; $('.lbl-next', next).hidden = last; $('.lbl-create', next).hidden = !last;
      progText.textContent = `Step ${i + 1} of ${steps.length}`; progFill.style.width = `${((i + 1) / steps.length) * 100}%`;
      const f = $('.step-title', steps[i]);
      if (focus && f) f.focus({ preventScroll: true });
    };
    const setErr = (input, errEl, msg) => { if (msg) say(errEl, msg); else errEl.replaceChildren(); if (input) input.setAttribute('aria-invalid', msg ? 'true' : 'false'); return !msg; };
    const valid = i => {
      if (i === 0) {
        const any = $$('input[name="need"]:checked', form).length || $('#need_other').value.trim();
        return setErr(null, $('#need-err'), any ? '' : 'msg-err-need');
      }
      if (i === 2) {
        const n = $('#name'), o = $('#organization'), em = $('#email');
        const a = setErr(n, $('#name-err'), n.value.trim() ? '' : 'msg-err-name');
        const b = setErr(o, $('#org-err'), o.value.trim() ? '' : 'msg-err-org');
        const c = setErr(em, $('#email-err'), !em.value.trim() || em.checkValidity() ? '' : 'msg-err-email');
        const firstBad = [n, o, em].find(x => x.getAttribute('aria-invalid') === 'true'); if (firstBad) firstBad.focus();
        return a && b && c;
      }
      return true;
    };
    form.addEventListener('submit', e => { e.preventDefault(); e.stopPropagation(); });
    const goNext = () => {
      if (!valid(cur)) return;
      if (cur < steps.length - 1) return show(cur + 1);
      paint();
      const co = $('#organization').value.trim();
      $('#send').href = 'mailto:hello@ai-alchemy.ca?subject=' + encodeURIComponent(co ? `${L('subject')} ${co}` : L('subject-fallback')) + '&body=' + encodeURIComponent(text);
      form.hidden = true; result.hidden = false; wrap.classList.add('is-ready'); say(status, 'msg-ready');
      $('#result-h').focus({ preventScroll: true });
      if (matchMedia('(max-width:859px)').matches) out.closest('.bsheet').scrollIntoView({ behavior: reduced.matches ? 'auto' : 'smooth', block: 'center' });
    };
    next.addEventListener('click', goNext);
    form.addEventListener('keydown', e => {
      if (e.key !== 'Enter') return;
      if (e.target.tagName === 'TEXTAREA' || e.target.tagName === 'BUTTON') return;
      e.preventDefault(); goNext();
    });
    back.addEventListener('click', () => show(Math.max(0, cur - 1)));
    form.addEventListener('input', () => paint());
    form.addEventListener('change', e => { if (e.target.name === 'need') $('#need-err').replaceChildren(); paint(); });
    /* "Send by email" opens the visitor's mail app (mailto), then moves to /contact/thanks/, as the live site does.
       The page cannot know whether an email was actually sent; the thanks page says what to do if the app did not open. */
    $('#send').addEventListener('click', () => { setTimeout(() => { location.href = '/contact/thanks/'; }, 400); });
    $('#copy').addEventListener('click', async () => {
      try { await navigator.clipboard.writeText(text); say(status, 'msg-copied'); }
      catch { say(status, 'msg-copy-failed'); }
    });
    $('#restart').addEventListener('click', () => {
      form.reset(); $$('[aria-invalid]', form).forEach(x => x.removeAttribute('aria-invalid')); $$('.err', form).forEach(x => x.replaceChildren());
      result.hidden = true; form.hidden = false; wrap.classList.remove('is-ready'); status.replaceChildren(); show(0, false); paint(true);
      $('legend', steps[0]).scrollIntoView({ behavior: reduced.matches ? 'auto' : 'smooth', block: 'center' });
    });
    /* Cross-page presets: ?need=… preselects a need, as on the live contact page. */
    const pre = new URLSearchParams(location.search).get('need');
    if (pre) { const box = $(`input[name="need"][value="${CSS.escape(pre)}"]`); if (box) box.checked = true; }
    show(0, false); paint(true);
  }
})();
