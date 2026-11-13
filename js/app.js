/* AI Alchemy site behaviors: navigation, accessibility, services, and local brief builder. */
(() => {
    document.documentElement.classList.add('js-ready');
    try {
        const waveLines = document.getElementById('wave-lines');
        const wavePts = document.getElementById('wave-points');
        if (waveLines && wavePts) {
            let lines = '', points = '';
            for (let row = 0; row < 11; row++) {
                const yy = 55 + row * 11;
                let d = '';
                for (let x = -30; x <= 1570; x += 15) {
                    const y = yy + 24 * Math.sin(x / 140 + row * .26) + 18 * Math.sin(x / 88 - row * .21) + ((row / 10) * 25 * Math.sin(x / 240 + 1));
                    d += (x === -30 ? 'M' : 'L') + x.toFixed(0) + ' ' + y.toFixed(1) + ' ';
                    if ((Math.round(x / 15) + row) % 2 === 0) {
                        const r = (.8 + row * .04).toFixed(2);
                        points += `<circle cx="${x}" cy="${y.toFixed(1)}" r="${r}" opacity="${(0.14 + row * .055).toFixed(2)}"/>`;
                    }
                }
                lines += `<path d="${d}" stroke-width="0.65" stroke-dasharray="1 8" opacity="${(.22 + row * .032).toFixed(2)}"/>`;
            }
            waveLines.innerHTML = lines;
            wavePts.innerHTML = points;
        }
        const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
        /* Run non-critical UI setup after window load, when the browser is idle, so it never competes with the hero scene's first frame. */
        const whenIdle = cb => {
            const run = () => ('requestIdleCallback' in window ? window.requestIdleCallback(cb, { timeout: 800 }) : setTimeout(cb, 50));
            if (document.readyState === 'complete') run(); else window.addEventListener('load', run, { once: true });
        };
        const revealItems = document.querySelectorAll('.reveal');
        if (reduced.matches || !('IntersectionObserver' in window)) {
            revealItems.forEach(x => x.classList.add('visible'));
        }
        else {
            const observer = new IntersectionObserver(items => { items.forEach(item => { if (item.isIntersecting) {
                item.target.classList.add('visible');
                observer.unobserve(item.target);
            } }); }, { threshold: .08, rootMargin: '0px 0px -20px 0px' });
            revealItems.forEach(x => observer.observe(x));
        }
        /* v1.1 motion: staggered reveals, skyline draw-in (SVG stroke-dashoffset), parallax and scroll progress (transform), card spotlight (repaints a radial-gradient background). All off under reduced motion. */
        document.querySelectorAll('.service-grid,.info-grid,.industry-grid,.steps').forEach(group => {
            [...group.children].forEach((el, i) => el.style.setProperty('--i', String(i)));
        });
        const markDone = el => setTimeout(() => el.classList.add('reveal-done'), 1100 + (parseInt(el.style.getPropertyValue('--i') || '0', 10) * 110));
        const sky = document.querySelector('.cta-banner .toronto');
        const lines = document.querySelectorAll('.reveal-line');
        if (reduced.matches || !('IntersectionObserver' in window)) {
            sky && sky.classList.add('is-drawn');
            lines.forEach(l => l.classList.add('visible'));
        } else {
            const io2 = new IntersectionObserver(items => items.forEach(it => { if (it.isIntersecting) { it.target.classList.add(it.target === sky ? 'is-drawn' : 'visible'); io2.unobserve(it.target); } }), { threshold: .35 });
            sky && io2.observe(sky);
            lines.forEach(l => io2.observe(l));
        }
        revealItems.forEach(el => { if (el.classList.contains('visible')) el.classList.add('reveal-done'); else new MutationObserver((m, mo) => { if (el.classList.contains('visible')) { mo.disconnect(); markDone(el); } }).observe(el, { attributes: true, attributeFilter: ['class'] }); });
        if (!reduced.matches) {
            const progressBar = document.getElementById('scroll-progress');
            const para = [...document.querySelectorAll('[data-parallax]')];
            let ticking = false;
            const update = () => {
                ticking = false;
                const vh = window.innerHeight, max = document.documentElement.scrollHeight - vh;
                if (progressBar) progressBar.style.transform = `scaleX(${max > 0 ? Math.min(1, window.scrollY / max) : 0})`;
                const reads = para.map(el => el.parentElement.getBoundingClientRect());
                reads.forEach((r, i) => { if (r.bottom < -100 || r.top > vh + 100) return; const k = parseFloat(para[i].dataset.parallax) || 0; para[i].style.transform = `translate3d(${((r.top + r.height / 2 - vh / 2) * k).toFixed(1)}px,0,0)`; });
            };
            /* Perf: only the first layout read and the spotlight setup wait until the page has
               loaded and the browser is idle. Calling update() while the page was still parsing
               (it reads scrollHeight and getBoundingClientRect) forced an early full layout that,
               under software WebGL, delayed the hero's first frame by about 1.2 s.
               Scroll/resize listeners attach now but only mark the state dirty until init; then
               init runs update(), which reads the current scroll position (not the top). */
            let initDone = false;
            const onScrollOrResize = () => {
                if (!initDone) return; /* dirty: the init update() below reads the latest position */
                if (!ticking) { ticking = true; requestAnimationFrame(update); }
            };
            window.addEventListener('scroll', onScrollOrResize, { passive: true });
            window.addEventListener('resize', onScrollOrResize, { passive: true });
            whenIdle(() => {
                initDone = true;
                ticking = true;
                requestAnimationFrame(update);
                if (window.matchMedia('(pointer:fine)').matches) {
                    document.querySelectorAll('.info-card,.industry-card,.brief-form').forEach(card => {
                        card.addEventListener('pointermove', e => { const r = card.getBoundingClientRect(); card.style.setProperty('--mx', `${(e.clientX - r.left).toFixed(0)}px`); card.style.setProperty('--my', `${(e.clientY - r.top).toFixed(0)}px`); }, { passive: true });
                    });
                }
            });
        }
        const art = document.getElementById('hero-glass');
        if (art && !reduced.matches && window.matchMedia('(pointer:fine)').matches) {
            let raf = 0;
            const area = document.querySelector('.hero');
            area.addEventListener('pointermove', e => { const r = area.getBoundingClientRect(); const x = (e.clientX - r.left) / r.width - .5; const y = (e.clientY - r.top) / r.height - .5; if (raf)
                cancelAnimationFrame(raf); raf = requestAnimationFrame(() => { art.style.transform = `translate3d(${(x * 14).toFixed(1)}px,${(y * 10).toFixed(1)}px,0) rotateY(${(x * 3).toFixed(1)}deg)`; }); }, { passive: true });
            area.addEventListener('pointerleave', () => { if (raf) { cancelAnimationFrame(raf); raf = 0; } art.style.transform = ''; });
        }
        const header = document.getElementById('header');
        let scrolled = false;
        window.addEventListener('scroll', () => { const now = window.scrollY > 60; if (now !== scrolled) {
            header.classList.toggle('is-scrolled', now);
            scrolled = now;
        } }, { passive: true });
        const menu = document.getElementById('menu'), links = document.getElementById('main-links');
        function closeNav() { menu.setAttribute('aria-expanded', 'false'); links.classList.remove('is-open'); menu.textContent = '☰'; }
        menu.addEventListener('click', () => { const open = menu.getAttribute('aria-expanded') !== 'true'; menu.setAttribute('aria-expanded', String(open)); links.classList.toggle('is-open', open); menu.textContent = open ? '×' : '☰'; });
        links.querySelectorAll('a').forEach(a => a.addEventListener('click', closeNav));
        document.addEventListener('keydown', e => { if (e.key === 'Escape')
            closeNav(); });
        const services = { strategy: { title: 'Strategy', intro: 'Turn business ambition into a clear technology plan with a practical path to delivery.', items: ['Assess the problem and map current workflows', 'Prioritize opportunities and identify constraints', 'Define phased scope, ownership, and success measures'] }, architecture: { title: 'Architecture & Governance', intro: 'Design a foundation that can connect today\'s systems with tomorrow\'s capabilities.', items: ['Architecture and integration planning', 'Data access, security, traceability, and governance', 'Technical design reviews and implementation roadmaps'] }, development: { title: 'Custom Development & Enterprise AI', intro: 'Build useful software and introduce AI where it belongs in real business processes.', items: ['Custom applications and system integration', 'AI-assisted workflows with documented human approval points', 'Testing, rollout, training, and maintainability'] }, cloud: { title: 'Cloud & Data', intro: 'Make cloud infrastructure and business information easier to operate and use responsibly.', items: ['Legacy modernization and cloud architecture', 'Data pipelines and governed reporting', 'Reliability, monitoring, and improvement'] } };
        const backdrop = document.getElementById('dialog-backdrop'), title = document.getElementById('dialog-title'), intro = document.getElementById('dialog-intro'), list = document.getElementById('dialog-list'), close = document.getElementById('dialog-close');
        let priorFocus = null;
        function closeDialog() { backdrop.setAttribute('aria-hidden', 'true'); document.body.style.overflow = ''; priorFocus?.focus(); }
        document.querySelectorAll('[data-service]').forEach(btn => btn.addEventListener('click', () => { const v = services[btn.dataset.service]; if (!v)
            return; priorFocus = btn; title.textContent = v.title; intro.textContent = v.intro; list.replaceChildren(); v.items.forEach(s => { const li = document.createElement('li'); li.textContent = s; list.appendChild(li); }); backdrop.setAttribute('aria-hidden', 'false'); document.body.style.overflow = 'hidden'; close.focus(); }));
        close.addEventListener('click', closeDialog);
        backdrop.addEventListener('click', e => { if (e.target === backdrop)
            closeDialog(); });
        document.getElementById('dialog-contact').addEventListener('click', closeDialog);
        document.addEventListener('keydown', e => { if (backdrop.getAttribute('aria-hidden') === 'false' && e.key === 'Escape')
            closeDialog(); if (backdrop.getAttribute('aria-hidden') === 'false' && e.key === 'Tab') {
            const focusables = [...backdrop.querySelectorAll('button,a,[tabindex]:not([tabindex="-1"])')];
            const first = focusables[0], last = focusables.at(-1);
            if (e.shiftKey && document.activeElement === first) {
                e.preventDefault();
                last.focus();
            }
            else if (!e.shiftKey && document.activeElement === last) {
                e.preventDefault();
                first.focus();
            }
        } });
        const form = document.getElementById('project-form'), result = document.getElementById('brief-result'), out = document.getElementById('brief-output'), copyStatus = document.getElementById('copy-status'), emailBrief = document.getElementById('email-brief');
        const briefMailto = () => 'mailto:hello@ai-alchemy.ca?subject=' + encodeURIComponent('AI Alchemy project brief') + '&body=' + encodeURIComponent(out.textContent || '');
        const fieldset = document.getElementById('brief-fieldset');
        const panels = [...form.querySelectorAll('.brief-step')], total = panels.length;
        const progress = document.getElementById('brief-progress'), bar = document.getElementById('brief-progress-bar'), fill = document.getElementById('brief-progress-fill'), progText = document.getElementById('brief-progress-text');
        const backBtn = document.getElementById('brief-back'), nextLabel = document.getElementById('brief-next-label'), nav = document.getElementById('brief-nav'), stepsWrap = document.getElementById('brief-steps'), live = document.getElementById('brief-live');
        const needError = document.getElementById('need-error'), needOther = document.getElementById('need-other');
        let current = 0;
        form.noValidate = true;
        const motion = () => !reduced.matches;
        function showStep(i, focus, dir) {
            current = i;
            panels.forEach((p, n) => {
                const on = n === i;
                p.hidden = !on;
                p.classList.remove('enter-fwd', 'enter-back');
                if (on && motion() && dir) { void p.offsetWidth; p.classList.add(dir > 0 ? 'enter-fwd' : 'enter-back'); }
            });
            const label = `Step ${i + 1} of ${total}`;
            progText.textContent = label;
            bar.setAttribute('aria-valuenow', String(i + 1));
            bar.setAttribute('aria-valuetext', label);
            fill.style.transform = `scaleX(${(i + 1) / total})`;
            backBtn.hidden = i === 0;
            nextLabel.textContent = i === total - 1 ? 'Create my brief' : 'Next';
            if (focus) {
                live.textContent = label;
                const t = panels[i].querySelector('.step-title');
                if (t) t.focus({ preventScroll: false });
            }
        }
        function stepValid(i) {
            if (i === 0) {
                const any = form.querySelectorAll('input[name="need"]:checked').length > 0 || needOther.value.trim() !== '';
                needError.textContent = any ? '' : 'Pick at least one option, or type a few words.';
                if (!any) { announce('1 field needs attention: What do you need help with'); const first = form.querySelector('input[name="need"]'); first && first.focus(); }
                return any;
            }
            /* Inline, accessible errors instead of the browser bubble: text under the field
               (linked by aria-describedby), aria-invalid, and focus on the first invalid field. */
            const fields = [...panels[i].querySelectorAll('input,textarea')];
            const bad = fields.filter(f => !checkField(f));
            if (bad.length) {
                /* One polite summary in the shared status region, written before focus moves,
                   so it is also heard when Enter is pressed inside an already-focused field. */
                announce(`${bad.length} ${bad.length === 1 ? 'field needs' : 'fields need'} attention: ${bad.map(f => fieldNames[f.name] || f.name).join(', ')}`);
                bad[0].focus();
                return false;
            }
            return true;
        }
        /* Re-announces identical text by toggling a trailing no-break space. */
        let announceFlip = false;
        function announce(msg) { announceFlip = !announceFlip; live.textContent = msg + (announceFlip ? '\u00a0' : ''); }
        const fieldNames = { name: 'Name', organization: 'Company', email: 'Email', details: 'Details' };
        const fieldMessages = { name: 'Please enter your name.', organization: 'Please enter your company name.', email: 'Please enter a valid email address, or leave it blank.', details: 'Please keep this under 2,000 characters.' };
        function checkField(f) {
            const err = document.getElementById(f.id + '-error');
            const ok = f.checkValidity();
            if (ok) f.removeAttribute('aria-invalid'); else f.setAttribute('aria-invalid', 'true');
            if (err) err.textContent = ok ? '' : (fieldMessages[f.name] || 'Please check this field.');
            return ok;
        }
        function clearErrors() {
            needError.textContent = '';
            live.textContent = '';
            form.querySelectorAll('[aria-invalid]').forEach(f => f.removeAttribute('aria-invalid'));
            form.querySelectorAll('.field-error').forEach(e => { e.textContent = ''; });
        }
        form.addEventListener('input', e => { const f = e.target; if (f.getAttribute && f.getAttribute('aria-invalid') === 'true') checkField(f); });
        form.addEventListener('change', e => { if (e.target.name === 'need' && needError.textContent) stepValid(0); });
        needOther.addEventListener('input', () => { if (needError.textContent && needOther.value.trim()) needError.textContent = ''; });
        backBtn.addEventListener('click', () => { if (current > 0) showStep(current - 1, true, -1); });
        function buildBrief() {
            const fd = new FormData(form);
            const val = k => String(fd.get(k) || '').trim();
            const needs = fd.getAll('need').map(String);
            const other = val('need_other');
            const needLines = needs.map(n => `- ${n}`);
            if (other) needLines.push(`- Other: ${other}`);
            return ['AI ALCHEMY — PROJECT BRIEF', '', `Contact: ${val('name')}`, `Organization: ${val('organization')}`, `Email: ${val('email') || 'Not provided'}`, '', 'WHAT WE NEED HELP WITH', ...needLines, '', 'DETAILS', val('details') || 'Not provided yet', '', `Created: ${new Date().toLocaleDateString('en-CA')}`, '', 'This brief was created locally in your browser. It has not been submitted or sent.'].join('\n');
        }
        form.addEventListener('submit', e => {
            e.preventDefault();
            if (!stepValid(current)) return;
            if (current < total - 1) { showStep(current + 1, true, 1); return; }
            live.textContent = '';
            out.textContent = buildBrief();
            stepsWrap.hidden = true; nav.hidden = true; progress.hidden = true;
            result.hidden = false;
            result.classList.toggle('enter-fwd', motion());
            copyStatus.textContent = 'Brief created locally. Copy, download, or email it below.';
            if (emailBrief) emailBrief.href = briefMailto();
            const h = document.getElementById('brief-result-title');
            h.focus({ preventScroll: true });
            result.scrollIntoView({ behavior: motion() ? 'smooth' : 'auto', block: 'nearest' });
        });
        document.getElementById('brief-restart').addEventListener('click', () => {
            /* Start over clears every answer: chips, text fields, errors, and returns to step 1. */
            form.reset();
            clearErrors();
            result.hidden = true; stepsWrap.hidden = false; nav.hidden = false; progress.hidden = false;
            out.textContent = ''; copyStatus.textContent = '';
            if (emailBrief) emailBrief.href = 'mailto:hello@ai-alchemy.ca';
            showStep(0, true, -1);
        });
        progress.hidden = false;
        showStep(0, false, 0);
        if (fieldset)
            fieldset.disabled = false;
        document.getElementById('copy-brief').addEventListener('click', async () => { try {
            await navigator.clipboard.writeText(out.textContent);
            copyStatus.textContent = 'Copied to clipboard.';
        }
        catch {
            const sel = window.getSelection();
            const range = document.createRange();
            range.selectNodeContents(out);
            sel.removeAllRanges();
            sel.addRange(range);
            copyStatus.textContent = 'Select the highlighted brief and copy it.';
        } });
        document.getElementById('download-brief').addEventListener('click', () => { const blob = new Blob([out.textContent], { type: 'text/plain;charset=utf-8' }), url = URL.createObjectURL(blob), a = document.createElement('a'); a.href = url; a.download = 'AI_Alchemy_Project_Brief.txt'; a.style.display = 'none'; document.body.appendChild(a); a.click(); a.remove(); setTimeout(() => URL.revokeObjectURL(url), 1000); copyStatus.textContent = 'Brief downloaded.'; });
        if (emailBrief) emailBrief.addEventListener('click', () => { emailBrief.href = briefMailto(); });
    } catch (error) {
        document.querySelectorAll('.reveal,.reveal-line').forEach(el => el.classList.add('visible'));
        document.querySelectorAll('.toronto').forEach(el => el.classList.add('is-drawn'));
        try {
            const form = document.getElementById('project-form');
            const fieldset = document.getElementById('brief-fieldset');
            if (form) {
                form.addEventListener('submit', e => e.preventDefault());
                if (fieldset)
                    fieldset.disabled = false;
            }
        } catch (_) { /* form recovery is best-effort */ }
        console.error('AI Alchemy: page behaviors failed; showing content without enhancements.', error);
    }
})();

