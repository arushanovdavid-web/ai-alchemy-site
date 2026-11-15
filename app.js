/* AI Alchemy — 03 site prototype behaviour. No dependencies. Every block is guarded so one file serves all pages. */
(() => {
  const $ = (s, r = document) => r.querySelector(s), $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  const q = new URLSearchParams(location.search);


  /* Sage s.4 migration: the old one-page form anchor now lives on /contact/. Without JS, #project-form still lands on the home contact block. */
  if (location.hash === '#project-form' && (location.pathname === '/' || location.pathname === '/index.html')) location.replace('/contact/');

  /* Header border on scroll */
  const header = $('#header'); let sc = false;
  addEventListener('scroll', () => { const n = scrollY > 24; if (n !== sc) { header.classList.toggle('is-scrolled', n); sc = n; } }, { passive: true });

  /* Mobile menu */
  const mb = $('#menu-btn'), nav = $('#nav');
  const setNav = open => { mb.setAttribute('aria-expanded', String(open)); nav.classList.toggle('is-open', open); mb.textContent = open ? 'Close' : 'Menu'; };
  mb.addEventListener('click', () => setNav(mb.getAttribute('aria-expanded') !== 'true'));
  $$('a', nav).forEach(a => a.addEventListener('click', () => setNav(false)));
  addEventListener('keydown', e => { if (e.key === 'Escape' && nav.classList.contains('is-open')) { setNav(false); mb.focus(); } });

  /* Hero video (desktop only): decorative (aria-hidden), muted, self-hosted, no audio. The source is attached only after window 'load' + an idle
     callback, and never on phones (≤860px, which get their own poster band), under prefers-reduced-motion, Save-Data or a 2G connection:
     the poster <img> (frame 0, the LCP) simply stays. Paused when the hero is off screen, the tab is hidden or the viewport narrows to the
     phone layout. The Pause/Play button renders only once a video is actually playing (WCAG 2.2.2). */
  const hv = $('#hero-video'), hero = $('.hero'), tg = $('#hero-toggle');
  if (hv && hero && tg) {
    const c = navigator.connection || {}, phone = matchMedia('(max-width:860px)');
    const skip = phone.matches || reduced.matches || c.saveData === true || /(^|-)2g$/.test(c.effectiveType || '');
    if (!skip) {
      let userPaused = false, visible = true, ready = false;
      const sync = () => { if (!ready) return; if (!userPaused && visible && !document.hidden && !phone.matches) { const p = hv.play(); if (p) p.catch(() => {}); } else hv.pause(); };
      const start = () => {
        [['webm', 'video/webm'], ['mp4', 'video/mp4']].forEach(([ext, type]) => { if (hv.canPlayType(type)) { const s = document.createElement('source'); s.src = hv.dataset.d + '.' + ext; s.type = type; hv.append(s); } });
        const img = $('.hero-poster'); if (img && img.currentSrc) hv.poster = img.currentSrc;   /* same file the <img> already loaded: no second request */
        hv.addEventListener('playing', () => { hero.classList.add('video-on'); tg.hidden = false; }, { once: true });
        ready = true; hv.load(); sync();
      };
      tg.addEventListener('click', () => { userPaused = !userPaused; $('.ht-pause', tg).hidden = userPaused; $('.ht-play', tg).hidden = !userPaused; sync(); });
      reduced.addEventListener('change', e => { if (e.matches && !userPaused) tg.click(); });
      phone.addEventListener('change', sync);
      new IntersectionObserver(es => { visible = es[0].isIntersecting; sync(); }).observe(hero);
      document.addEventListener('visibilitychange', sync);
      const idle = () => (window.requestIdleCallback || (f => setTimeout(f, 200)))(start, { timeout: 2000 });
      if (document.readyState === 'complete') idle(); else addEventListener('load', idle, { once: true });
    }
  }

  /* Industries tabs (WAI-ARIA tabs pattern, manual arrow-key focus) */
  const tabs = $$('[role="tab"]');
  if (tabs.length) {
  const select = t => { tabs.forEach(x => { const on = x === t; x.setAttribute('aria-selected', on); x.tabIndex = on ? 0 : -1; $('#' + x.getAttribute('aria-controls')).hidden = !on; }); };
  /* Hide the scroll-hint fade once the tab row is fully scrolled (or doesn't need to scroll). */
  const tl = $('.tablist'), tw = $('.tablist-wrap');
  const edge = () => tw.classList.toggle('at-end', tl.scrollLeft + tl.clientWidth >= tl.scrollWidth - 1);
  tl.addEventListener('scroll', edge, { passive: true }); addEventListener('resize', edge); edge();
  tabs.forEach((t, i) => {
    t.addEventListener('click', () => select(t));
    t.addEventListener('keydown', e => {
      const k = e.key; let j = null;
      if (k === 'ArrowDown' || k === 'ArrowRight') j = (i + 1) % tabs.length;
      if (k === 'ArrowUp' || k === 'ArrowLeft') j = (i - 1 + tabs.length) % tabs.length;
      if (k === 'Home') j = 0; if (k === 'End') j = tabs.length - 1;
      if (j !== null) { e.preventDefault(); tabs[j].focus(); select(tabs[j]); tabs[j].scrollIntoView({ block: 'nearest', inline: 'nearest', behavior: reduced.matches ? 'auto' : 'smooth' }); }
    });
  });

  }

  /* Project brief: 3 steps, composed locally, sent only by the visitor's own mail app */
  const form = $('#brief-form');
  if (form) {
  const steps = $$('.step', form), back = $('#back'), next = $('#next');
  const progText = $('#prog-text'), progFill = $('#prog-fill'), result = $('#result'), out = $('#brief-out'), status = $('#status');
  let cur = 0;
  const show = i => {
    cur = i; steps.forEach((s, k) => s.hidden = k !== i);
    back.hidden = i === 0; const last = i === steps.length - 1; $('.lbl-next', next).hidden = last; $('.lbl-create', next).hidden = !last;
    progText.textContent = `Step ${i + 1} of ${steps.length}`; progFill.style.width = `${((i + 1) / steps.length) * 100}%`;
    const focusEl = $('.step-title', steps[i]) || $('legend', steps[i]);
    if (focusEl && focusEl.tabIndex === -1) focusEl.focus({ preventScroll: true });
  };
  /* Brief labels and the mailto subject are copy too: they live in <template id="brief-labels"> in the HTML. */
  const L = k => { const t = document.getElementById('brief-labels'), e = t && t.content.querySelector(`[data-k="${k}"]`); return e ? e.textContent : ''; };
  const say = (el, id) => { const t = document.getElementById(id); el.replaceChildren(t ? t.content.cloneNode(true) : ''); };
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
  const build = () => {
    const fd = new FormData(form), v = k => String(fd.get(k) || '').trim();
    const needs = fd.getAll('need').map(n => `- ${n}`); if (v('need_other')) needs.push(`- ${L('other')} ${v('need_other')}`);
    return [L('header'), '', `${L('contact')} ${v('name')}`, `${L('org')} ${v('organization')}`, `${L('email')} ${v('email') || L('notprov')}`, '',
      L('needs'), ...needs, '', L('details'), v('details') || L('notyet'), '', `${L('created')} ${new Date().toLocaleDateString('en-CA')}`, '',
      L('closing')].join('\n');
  };
  /* Buttons are type=button so a JS-off browser cannot GET typed fields to the server.
     Enter in a field still advances the brief when JS is on, as it did via implicit submit. */
  form.addEventListener('submit', e => { e.preventDefault(); e.stopPropagation(); });
  const goNext = () => {
    if (!valid(cur)) return;
    if (cur < steps.length - 1) return show(cur + 1);
    out.textContent = build();
    const co = $('#organization').value.trim();
    $('#send').href = 'mailto:hello@ai-alchemy.ca?subject=' + encodeURIComponent(co ? `${L('subject')} ${co}` : L('subject-fallback')) + '&body=' + encodeURIComponent(out.textContent);
    form.hidden = true; result.hidden = false; say(status, 'msg-ready');
    $('#result-h').focus({ preventScroll: true });
    result.scrollIntoView({ behavior: reduced.matches ? 'auto' : 'smooth', block: 'nearest' });
  };
  next.addEventListener('click', goNext);
  form.addEventListener('keydown', e => {
    if (e.key !== 'Enter') return;
    if (e.target.tagName === 'TEXTAREA' || e.target.tagName === 'BUTTON') return;
    e.preventDefault();
    goNext();
  });
  back.addEventListener('click', () => show(Math.max(0, cur - 1)));
  /* Sage s.5: "Send by email" opens the visitor's mail app (mailto), then moves to /contact/thanks/, the conversion URL.
     It measures clicks on Send, not emails actually sent. */
  $('#send').addEventListener('click', () => { setTimeout(() => { location.href = '/contact/thanks/'; }, 400); });
  /* Nothing typed is ever stored: the brief exists only in this page until the visitor's own mail app sends it. */
  form.addEventListener('change', e => { if (e.target.name === 'need') $('#need-err').replaceChildren(); });
  $('#copy').addEventListener('click', async () => {
    try { await navigator.clipboard.writeText(out.textContent); say(status, 'msg-copied'); }
    catch { say(status, 'msg-copy-failed'); }
  });
  $('#restart').addEventListener('click', () => { form.reset(); $$('[aria-invalid]', form).forEach(x => x.removeAttribute('aria-invalid')); $$('.err', form).forEach(x => x.replaceChildren()); result.hidden = true; form.hidden = false; status.replaceChildren(); show(0); });

  /* Service rows pre-select the matching need, so the brief starts where the visitor already is */
  $$('[data-preset]').forEach(a => a.addEventListener('click', () => {
    if (!result.hidden) $('#restart').click(); show(0);
    const box = $(`input[name="need"][value="${a.dataset.preset}"]`); if (box) box.checked = true;
  }));
  /* Cross-page presets: /contact/?need=… */
  const pre = q.get('need'); if (pre) { const box = $(`input[name="need"][value="${CSS.escape(pre)}"]`); if (box) box.checked = true; }
  }

})();
