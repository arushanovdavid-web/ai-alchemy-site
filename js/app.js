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
        form.addEventListener('submit', e => { e.preventDefault(); if (!form.reportValidity())
            return; const fd = new FormData(form); const val = k => String(fd.get(k) || '').trim(); const brief = ['AI ALCHEMY — PROJECT BRIEF', '', `Contact: ${val('name')}`, `Organization: ${val('organization')}`, `Email: ${val('email') || 'Not provided'}`, '', 'CURRENT CHALLENGE', val('challenge'), '', 'DESIRED OUTCOME', val('outcome') || 'To be defined', '', `Created: ${new Date().toLocaleDateString('en-CA')}`, '', 'This brief was created locally in your browser. It has not been submitted or sent.'].join('\n'); out.textContent = brief; result.hidden = false; copyStatus.textContent = 'Brief created locally. Copy, download, or email it below.'; if (emailBrief) emailBrief.href = briefMailto(); result.scrollIntoView({ behavior: reduced.matches ? 'auto' : 'smooth', block: 'nearest' }); });
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
        document.querySelectorAll('.reveal').forEach(el => el.classList.add('visible'));
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

