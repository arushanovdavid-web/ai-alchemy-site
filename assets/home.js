/* AI Alchemy homepage motion (Gate 3). GSAP 3.13 + ScrollTrigger, self-hosted.
   Every section reads correctly with no script and with reduced motion: text is never hidden by an animation. */
(() => {
  'use strict';
  const $ = (s, r = document) => r.querySelector(s), $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const reduce = matchMedia('(prefers-reduced-motion: reduce)');
  const root = document.documentElement;

  /* ---------- industry tabs (no GSAP needed) ---------- */
  const tabs = $$('.ind-tabs [role="tab"]');
  if (tabs.length) {
    const show = (t, focus) => {
      tabs.forEach(x => { const on = x === t; x.setAttribute('aria-selected', on); x.tabIndex = on ? 0 : -1; $('#' + x.getAttribute('aria-controls')).hidden = !on; });
      if (focus) t.focus();
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

  /* ---------- chain reaction: shared state helpers ---------- */
  const chain = $('.chain');
  const stages = chain ? $$('.stage', chain) : [];
  const meter = chain && $('.chain-meter .lab b', chain);
  const NAMES = ['Modernize', 'Connect', 'Automate', 'Understand', 'Enable AI'];
  const CENTRES = [.16, .33, .495, .655, .825];
  const A = { x: .078, y: .625 }, B = { x: .955, y: .832 };      /* the conduit, in panorama fractions */
  const light = n => {                                              /* n = number of stages lit */
    stages.forEach((s, i) => s.classList.toggle('on', i < n));
    if (meter) meter.textContent = n ? `${String(n).padStart(2, '0')} · ${NAMES[n - 1]}` : '00 · Idle';
  };
  const allOn = () => { light(5); chain && chain.classList.add('done'); };

  const G = window.gsap, ST = window.ScrollTrigger;
  if (!G || !ST || reduce.matches) {
    allOn(); root.classList.add('motion-off');
    const tag = $('.how-view .tag'); if (tag) tag.textContent = 'Rev C · Built, tested, adopted';
    return;
  }
  G.registerPlugin(ST);
  root.classList.add('motion-on');

  /* ---------- hero: one scan line sweeps the as-built drawing on load ---------- */
  const scan = $('.hero-drawing .scan');
  if (scan) G.timeline({ delay: .35 })
    .set(scan, { opacity: 1, top: 0 })
    .to(scan, { top: '100%', duration: 1.6, ease: 'power1.inOut' })
    .to(scan, { opacity: 0, duration: .3 }, '-=.2');
  const heroImg = $('.hero-drawing img');
  if (heroImg) G.to(heroImg, { yPercent: 6, ease: 'none', scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: true } });

  /* ---------- problems: drawings ink in; text is static ---------- */
  $$('.p-col img').forEach((img, i) => {
    G.fromTo(img, { clipPath: 'inset(0 0 100% 0)' }, {
      clipPath: "inset(0 0 0% 0)", duration: .6, ease: 'power2.out', delay: (i % 5) * .08,
      scrollTrigger: { trigger: img, start: 'top 88%', toggleActions: 'play none none reverse' }
    });
  });

  /* ---------- chain reaction ---------- */
  const mm = G.matchMedia();
  if (chain) {
    const view = $('.chain-view', chain), track = $('.chain-track', chain), lit = $('.chain-track .lit', chain), pulse = $('.chain-track .pulse', chain);
    const pin = $('.chain-stage', chain);

    mm.add('(min-width:1101px)', () => {
      let W = 0, H = 0, vw = 0, cropTop = .2, cropH = .72;
      const layout = () => {
        const hdr = $('#header'), nav = hdr ? hdr.offsetHeight : 48;
        const rest = $('.chain-meter', chain).offsetHeight + $('.stages', chain).offsetHeight + $('.chain-note', chain).offsetHeight;
        const avail = innerHeight - nav - rest - 2;
        const h = Math.max(260, Math.min(avail, innerHeight * .6));   /* visible height of the drawing */
        H = h / cropH; W = H * 4; vw = view.clientWidth;
        if (W < vw) { W = vw; H = W / 4; }
        view.style.height = Math.round(Math.min(h, H * cropH)) + 'px';
        Object.assign(track.style, { width: W + 'px', height: H + 'px', aspectRatio: 'auto', marginTop: -Math.round(H * cropTop) + 'px' });
      };
      const draw = p => {                                          /* p: 0..1 scroll progress through the pin */
        const t = Math.min(1, Math.max(0, (p - .03) / .9));
        const x = A.x + (B.x - A.x) * t, y = A.y + (B.y - A.y) * t;
        lit.style.clipPath = `inset(0 ${((1 - x) * 100).toFixed(2)}% 0 0)`;
        G.set(pulse, { left: x * W, top: y * H, opacity: t > 0 && t < 1 ? 1 : 0 });
        const tx = Math.max(0, Math.min(W - vw, x * W - vw * .5));
        G.set(track, { x: -tx });
        light(CENTRES.filter(c => x >= c - .012).length);
      };
      layout();
      let st = null;
      st = ST.create({
        trigger: pin, pin: true, start: () => `top top+=${($('#header') || {}).offsetHeight || 48}`,
        end: () => '+=' + Math.round(innerHeight * 4.2), scrub: .4, anticipatePin: 1,
        invalidateOnRefresh: true, onRefresh: () => { layout(); draw(st ? st.progress : 0); },
        onUpdate: self => draw(self.progress)
      });
      draw(0);
      return () => { view.style.height = ''; track.removeAttribute('style'); lit.style.clipPath = ''; light(0); };
    });

    mm.add('(max-width:1100px)', () => {
      light(0);
      const list = $('.stages', chain);
      const sts = stages.map((s, i) => ST.create({ trigger: s, start: 'top 62%', onEnter: () => light(Math.max(i + 1, stages.filter(x => x.classList.contains('on')).length)), onLeaveBack: () => light(i) }));
      const fill = ST.create({ trigger: list, start: 'top 62%', end: 'bottom 62%', scrub: true, onUpdate: self => list.style.setProperty('--fill', (self.progress * 100).toFixed(1) + '%') });
      return () => { sts.forEach(s => s.kill()); fill.kill(); list.style.removeProperty('--fill'); };
    });
  }

  /* ---------- how we work: as-built wipes to the redraft; the three steps light in turn ---------- */
  const how = $('.how-view');
  if (how) {
    const after = $('.after', how), wipe = $('.wipe', how), tag = $('.tag', how), steps = $$('.how-steps li');
    ST.create({
      trigger: how, start: 'top 75%', end: 'bottom 35%', scrub: .3,
      onUpdate: ({ progress: p }) => {
        after.style.clipPath = `inset(0 ${((1 - p) * 100).toFixed(2)}% 0 0)`;
        wipe.style.left = (p * 100).toFixed(2) + '%'; wipe.style.opacity = p > 0 && p < 1 ? 1 : 0;
        steps.forEach((li, i) => li.classList.toggle('on', p >= [.08, .45, .85][i]));
        if (tag) tag.textContent = p < .5 ? 'Rev A · As built' : p < .98 ? 'Rev B · In design' : 'Rev C · Built, tested, adopted';
      }
    });
  }

  addEventListener('load', () => ST.refresh());
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(() => ST.refresh());   /* ui-ux-pro-max gsap rule: refresh pins after fonts load */
})();
