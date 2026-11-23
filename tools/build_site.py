#!/usr/bin/env python3
"""Gate 3 site builder. Regenerates every page of ai-alchemy.ca from the pre-redesign sources (git ref SRC)
plus the copy and structure below. Run from the repo root:  python3 tools/build_site.py
Pages keep their URLs, titles, descriptions, canonical links and structured data; the five capability pages and
/how-we-work/ are new, and the four old service URLs become redirect pages."""
import html, json, re, subprocess
from pathlib import Path
from bs4 import BeautifulSoup

ROOT = Path(__file__).resolve().parent.parent
SRC = 'c3c1402'                       # main before the redesign
SITE = 'https://ai-alchemy.ca'
TODAY = '2026-11-23'
E = html.escape

def src(path):
    return subprocess.run(['git', 'show', f'{SRC}:{path}'], cwd=ROOT, capture_output=True, text=True, check=True).stdout

def write(path, text):
    p = ROOT / path; p.parent.mkdir(parents=True, exist_ok=True); p.write_text(text); print('wrote', path)

# ---------------------------------------------------------------- shared data
CAPS = [  # stage, verb, slug, name, line (David), description (David), brief preset, drawing alt
    dict(n=1, floor='an old geared machine being refitted beside a row of servers and new equipment, joined to the building core by copper lines.', verb='Modernize', slug='systems-modernization', name='Systems Modernization', line='Build a stronger foundation.',
         desc='Upgrade legacy technology and build software around how your people work.', need='Modernize legacy systems',
         alt='Etched drawing of an old machine whose gears start turning as a copper line reaches it.'),
    dict(n=2, floor='four systems on cable trays, each joined to one hub at the core.', verb='Connect', slug='systems-integration', name='Systems Integration', line='Get your systems working together.',
         desc='Connect your applications so information flows across your business.', need='Connect our systems',
         alt='Etched drawing of a hub with copper lines reaching out to the systems around it.'),
    dict(n=3, floor='a process floor with a conveyor, cartons and a robotic arm, with copper runs to each station.', verb='Automate', slug='workflow-automation', name='Workflow Automation', line='Spend less time on manual work.',
         desc='Reduce repetitive tasks and simplify handoffs between teams.', need='Automate manual work',
         alt='Etched drawing of a conveyor and a robotic arm passing work along a bench.'),
    dict(n=4, floor='an analysis deck with pie charts and rising bar charts.', verb='Understand', slug='data-reporting', name='Data & Reporting', line='See clearly. Make informed decisions.',
         desc='Bring your information together for a clearer view of your business.', need='Improve data and reporting',
         alt='Etched drawing of a board filling with bar charts and a rising trend line.'),
    dict(n=5, floor='a glazed top floor where two people work at desks beside shelves of records, connected to the core.', verb='Enable AI', slug='generative-ai-enablement', name='Generative AI Enablement', line='Put business knowledge to work.',
         desc='Identify practical uses, connect AI to business knowledge, and equip your team to use it confidently.', need='Put AI to work',
         alt='Etched drawing of an employee at a desk asking an AI assistant on screen.'),
]
CAP = {c['slug']: c for c in CAPS}
REDIRECTS = {  # old URL -> new URL
    '/services/strategy-architecture/': '/how-we-work/',
    '/services/custom-software-modernization/': '/services/systems-modernization/',
    '/services/enterprise-ai-automation/': '/services/generative-ai-enablement/',
    '/services/cloud-data/': '/services/data-reporting/',
}
OLD_NAMES = {'Strategy & Architecture': 'How we work', 'Custom Software & Modernization': 'Systems Modernization',
             'Enterprise AI & Automation': 'Generative AI Enablement', 'Cloud & Data': 'Data & Reporting'}
INDS = [  # slug, short key, name, line, problem, fix, alt
    dict(slug='manufacturing-wholesale-logistics', k='mfg', name='Manufacturing, Wholesale & Logistics',
         line='Production, inventory, orders and operations. For fabricators, distributors and logistics teams.',
         problem='Quotes, stock and shipments sit in spreadsheets, email and portals. That can mean wrong quotes, backorders and no live status.',
         fix='Connect sales, inventory, the shop floor and freight in one system. Send customers milestone updates.',
         alt='Etched drawing of a production line: a machine with a hopper feeds a conveyor, then storage racking and a loading dock with a truck, joined by one green line.'),
    dict(slug='mortgage-insurance', k='mortgage', name='Mortgage & Insurance',
         line='Information flow, documents and workflows, with review and accountability intact.',
         problem='Documents, deadlines and renewals are tracked by hand across older systems. Closings can run late, and renewals can slip.',
         fix='Bring intake, documents, renewals and claims tracking into one place. Send status updates at each milestone.',
         alt='Etched drawing of a mortgage file moving from intake: a scanner and a stack of documents, two review desks, then a model house with its keys, joined by one green line.'),
    dict(slug='hvac-energy-home-improvement', k='hvac', name='HVAC, Energy & Home Improvement',
         line='Field operations, customer records, scheduling and admin, connected.',
         problem='Schedules, onsite estimates and service contracts live on paper or in unlinked apps. Dispatch can lose time, and maintenance visits can slip.',
         fix='Connect dispatch, field estimates and maintenance schedules. Link service records to client accounts and billing.',
         alt='Etched drawing of a field service job: a service van, then a house cutaway with a furnace, an outdoor heat pump and a thermostat, joined by one green line.'),
    dict(slug='financial-professional-services-non-profits', k='services', name='Financial, Professional Services & Non-Profits',
         line='Internal systems, records, reporting and coordination.',
         problem='Client and donor records are split across teams and improvised tools. Onboarding, follow-up and grant deadlines are hard to keep straight.',
         fix='Keep each client’s or donor’s information in one place. Track onboarding, communication and deadlines beside it.',
         alt='Etched drawing of a shared client record: a cabinet of files beside a server, a deadline board with a calendar, and a desk sending out a printed report, joined by one green line.'),
]
STEPS = [  # agreed process copy (from the About and Strategy pages)
    ('Understand', 'Understand the people, systems and bottlenecks.',
     'We learn how your business runs today: who does the work, which systems they use, and where information gets stuck.'),
    ('Design', 'Design the right solution.',
     'You see the plan and the trade-offs before anything is built. Sometimes that means improving a system you already have, connecting what already works, or building something new.'),
    ('Build', 'Build, test and support adoption.',
     'We build in stages and connect to what already works. Your team tests it on real scenarios and approves before anything goes live, and we help your people start using it.'),
]
OUTCOMES_NOTE = 'Outcomes depend on your systems, data and processes. We agree goals with you before work starts.'
CHIPS = ['Modernize legacy systems', 'Connect our systems', 'Automate manual work', 'Improve data and reporting', 'Put AI to work', 'Something else']

MARK = ('<svg class="mark" viewBox="0 0 32 32" aria-hidden="true" focusable="false"><circle cx="16" cy="16" r="12.4" fill="none" stroke="currentColor" stroke-width="2.5" stroke-dasharray="4.1 2.393"/>'
        '<circle cx="16" cy="16" r="7" fill="none" stroke="currentColor" stroke-width="2.1" stroke-dasharray="3.3 2.198" transform="rotate(24 16 16)"/><circle class="mark-core" cx="16" cy="16" r="2.7"/></svg>')

def q(s): return s.replace(' ', '%20')
def brief(need=None): return '/contact/' + (f'?need={q(need)}' if need else '')

def pic(name, widths, alt, cls='', sizes='100vw', lazy=True, phone=None):
    """<picture> with webp + jpg sources from assets/img/{name}-{w}.{ext}."""
    ss = lambda ext: ', '.join(f'/assets/img/{name}-{w}.{ext} {w}w' for w in widths)
    w0 = widths[0]
    from PIL import Image
    iw, ih = Image.open(ROOT / f'assets/img/{name}-{w0}.jpg').size
    ph = ''
    if phone:
        ph = (f'<source media="(max-width:860px)" type="image/webp" srcset="/assets/img/{phone}.webp">'
              f'<source media="(max-width:860px)" srcset="/assets/img/{phone}.jpg">')
    return (f'<picture>{ph}<source type="image/webp" srcset="{ss("webp")}" sizes="{sizes}">'
            f'<img{f" class={chr(34)}{cls}{chr(34)}" if cls else ""} src="/assets/img/{name}-{w0}.jpg" srcset="{ss("jpg")}" sizes="{sizes}" width="{iw}" height="{ih}" alt="{E(alt)}"'
            f'{" loading=" + chr(34) + "lazy" + chr(34) if lazy else ""} decoding="async"></picture>')

ACC = {'coral': '#C46A43', 'verd': '#1F6B5C', 'copper': '#B5703F'}
def ldraw(name, alt, mode='reveal', accent='copper', cls='', labels=''):
    """A line drawing that draws itself in (assets/lines.js). The canvas is decorative; the alt text is on the wrapper."""
    d = json.loads((ROOT / f'assets/lines/{name}.json').read_text())
    return (f'<div class="ld {cls}" role="img" aria-label="{E(alt)}" data-src="/assets/lines/{name}.json" data-mode="{mode}" '
            f'data-accent="{ACC[accent]}" style="aspect-ratio:{d["W"]}/{d["H"]}">{labels}</div>')

# ---------------------------------------------------------------- chrome
HEAD_ASSETS = ('<link rel="preload" href="/assets/fonts/archivo-var.woff2" as="font" type="font/woff2" crossorigin>\n'
               '<link rel="preload" href="/assets/fonts/plex-sans-400.woff2" as="font" type="font/woff2" crossorigin>\n'
               '<link rel="stylesheet" href="/assets/site.css">')
JS_FLAG = "<script>document.documentElement.classList.replace('no-js','js')</script>"
NAV = [('/services/', 'Services'), ('/industries/', 'Industries'), ('/how-we-work/', 'How we work'), ('/about/', 'About')]

def header(cur):
    links = ''.join(f'<a href="{h}"{" aria-current=" + chr(34) + "page" + chr(34) if cur == h else ""}>{t}</a>' for h, t in NAV)
    return f'''<a class="skip" href="#main">Skip to content</a>
<header class="hdr" id="header">
 <div class="hdr-in">
  <a class="brand" href="/" aria-label="AI Alchemy home">{MARK}<span class="brand-name">AI Alchemy</span></a>
  <button class="menu-btn" id="menu-btn" type="button" aria-expanded="false" aria-controls="nav">Menu</button>
  <nav class="nav" id="nav" aria-label="Main">{links}<a class="btn btn-sm" href="/contact/">Plan Your Modernization</a></nav>
 </div>
</header>'''

def footer():
    caps = ''.join(f'<li><a href="/services/{c["slug"]}/">{E(c["name"])}</a></li>' for c in CAPS)
    inds = ''.join(f'<li><a href="/industries/{i["slug"]}/">{E(i["name"])}</a></li>' for i in INDS)
    return f'''<footer class="ftr">
 <div class="ftr-in">
  <div class="ftr-id">
   <a class="brand" href="/" aria-label="AI Alchemy home">{MARK}<span class="brand-name">AI Alchemy</span></a>
   <p>We modernize systems, connect your software, and put AI to work.</p>
   <p>Based in the Greater Toronto Area</p>
   <p><a href="mailto:hello@ai-alchemy.ca">hello@ai-alchemy.ca</a></p>
  </div>
  <nav aria-label="Capabilities"><p class="ftr-h"><a href="/services/">Capabilities</a></p><ul>{caps}</ul></nav>
  <nav aria-label="Industries"><p class="ftr-h"><a href="/industries/">Industries</a></p><ul>{inds}</ul></nav>
  <nav aria-label="Company"><p class="ftr-h">Company</p><ul><li><a href="/how-we-work/">How we work</a></li><li><a href="/about/">About</a></li><li><a href="/contact/">Start a project brief</a></li><li><a href="/privacy/">Privacy</a></li></ul></nav>
 </div>
 <div class="ftr-base"><span class="mono">AI Alchemy · Client Solutions · Products &amp; Innovation</span><span class="mono">Greater Toronto Area</span></div>
</footer>'''

SCRIPTS_INNER = '<script src="/home/inner.js" defer></script>\n<script src="/assets/lines.js" defer></script>'
SCRIPTS_HOME = ('<script src="/home/inner.js" defer></script>\n<script src="/assets/lines.js" defer></script>\n<script src="/assets/board.js" defer></script>\n<script src="/assets/home.js" defer></script>')

def head(title, desc, path, ld=None, robots=None):
    url = SITE + path
    t, d = E(title), E(desc)
    ld_s = f'\n<script type="application/ld+json">{json.dumps(ld, ensure_ascii=False)}</script>' if ld else ''
    rb = f'\n<meta name="robots" content="{robots}">' if robots else ''
    return f'''<!DOCTYPE html>
<html lang="en-CA" class="no-js">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">
<title>{t}</title>
<meta name="description" content="{d}">{rb}
<link rel="canonical" href="{url}">
<meta name="theme-color" content="#F2EDE3">
<meta name="color-scheme" content="light">
<meta property="og:type" content="website">
<meta property="og:site_name" content="AI Alchemy">
<meta property="og:locale" content="en_CA">
<meta property="og:url" content="{url}">
<meta property="og:title" content="{t}">
<meta property="og:description" content="{d}">
<meta property="og:image" content="{SITE}/og-image.png">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="{t}">
<meta name="twitter:description" content="{d}">
<meta name="twitter:image" content="{SITE}/og-image.png">
{HEAD_ASSETS}
<link rel="icon" href="/favicon.ico" sizes="16x16 32x32 48x48">
<link rel="icon" href="/home/mark.svg" type="image/svg+xml">
<link rel="apple-touch-icon" href="/apple-touch-icon.png">
<link rel="manifest" href="/site.webmanifest">
{JS_FLAG}{ld_s}
</head>'''

def page(title, desc, path, main, cur, ld=None, home=False, crumbs=None):
    cr = ''
    if crumbs:
        items = ''.join(f'<li><a href="{h}">{E(t)}</a></li>' for h, t in crumbs[:-1]) + f'<li><span aria-current="page">{E(crumbs[-1][1])}</span></li>'
        cr = f'<nav class="crumbs wrap" aria-label="Breadcrumb"><ol>{items}</ol></nav>\n'
    body = 'home' if home else 'inner'
    return f'''{head(title, desc, path, ld)}
<body class="{body}">
{header(cur)}
{cr}<main id="main">
{main}
</main>
{footer()}
{SCRIPTS_HOME if home else SCRIPTS_INNER}
</body>
</html>
'''

def crumbs_ld(crumbs):
    return {"@type": "BreadcrumbList", "itemListElement": [
        {"@type": "ListItem", "position": i + 1, "name": t, "item": SITE + h} for i, (h, t) in enumerate(crumbs)]}

# ---------------------------------------------------------------- reusable blocks
def steps_html(head_kicker='How we work', h2='Understand your business. Build what moves it forward.', link=True):
    lis = ''.join(f'<li><span class="n">Step {i + 1} · {E(v)}</span><h3>{E(h)}</h3><p>{E(p)}</p></li>' for i, (v, h, p) in enumerate(STEPS))
    more = '<p class="more"><a class="textlink" href="/how-we-work/">How we work</a></p>' if link else ''
    return f'''<section class="block" aria-labelledby="how-h">
 <div class="wrap">
  <div class="section-head"><p class="kicker">{E(head_kicker)}</p><h2 id="how-h">{E(h2)}</h2></div>
  <ol class="steps">{lis}</ol>
  <p class="note">{OUTCOMES_NOTE}</p>{more}
 </div>
</section>'''

def caps_list(exclude=None, h2='Better tools. Stronger capabilities.', kicker='Capabilities', hid='caps-h', intro=None):
    lis = ''
    for c in CAPS:
        if c['slug'] == exclude: continue
        lis += (f'<li><p class="layer"><span class="ln">Stage 0{c["n"]}</span> <span class="sep">·</span> <span class="lt">{E(c["verb"])}</span></p>'
                f'<h3>{E(c["name"])}</h3><p>{E(c["desc"])}</p><a class="textlink" href="/services/{c["slug"]}/">Explore {E(c["name"])}</a></li>')
    ip = f'<p>{E(intro)}</p>' if intro else ''
    return f'''<section class="block" aria-labelledby="{hid}">
 <div class="wrap">
  <div class="section-head"><p class="kicker">{E(kicker)}</p><h2 id="{hid}">{E(h2)}</h2>{ip}</div>
  <ul class="link-list">{lis}</ul>
 </div>
</section>'''

def cta_band(h2, need=None, lead='You don’t need a technical spec to start.'):
    return f'''<section class="block cta-band" aria-labelledby="cta-h">
 <div class="wrap"><div class="cta-copy">
  <p class="kicker">Project brief</p><h2 id="cta-h">{E(h2)}</h2>
  <p>{E(lead)}</p>
  <div class="hero-cta"><div class="hero-actions"><a class="btn btn-primary" href="{brief(need)}">Plan Your Modernization</a></div>
  <p class="cta-note">Three short steps. Your brief opens as an email you send. We reply within one business day.</p></div>
  <p>Prefer email? Write to <a href="mailto:hello@ai-alchemy.ca">hello@ai-alchemy.ca</a>.</p>
 </div></div>
</section>'''

def ind_drawing(ind, caption=None):
    cap = caption or f'{ind["name"]}: one workflow, connected. Illustration, not a client project.'
    return (f'<figure class="drawing">{ldraw("industry-" + ind["k"], ind["alt"].replace("Etched drawing", "Line drawing"), accent="verd")}'
            f'<figcaption>{E(cap)}</figcaption></figure>')

# ---------------------------------------------------------------- capability pages
CAP_PAGES = {
    'systems-modernization': dict(
        title='Systems Modernization in the GTA | AI Alchemy',
        problem_h='Technology that no longer keeps up.',
        problem=['Systems that once served you well now struggle to support how your business needs to operate.',
                 'Older applications hold the records, but not the way you work now. Spreadsheets and email fill the gaps, and decisions wait on manual handoffs.'],
        do_h='We build software around how your people work.',
        do=[('Modernize legacy applications', 'We bring older systems up to date and connect them to the rest of the business.'),
            ('Replace manual processes', 'Work that lives in spreadsheets, email and paper moves into software built for it.'),
            ('Build what the business needs', 'When nothing off the shelf fits, we build software around your real operations.'),
            ('Change in stages', 'We modernize in stages, so you don’t have to replace everything at once. You see progress at each stage.')],
        inds=('manufacturing-wholesale-logistics', 'connecting sales, inventory and the shop floor'), inds2=('hvac-energy-home-improvement', 'connecting dispatch and field estimates'),
        cta='Tell us which software your team works around.'),
    'systems-integration': dict(
        title='Systems Integration in the GTA | AI Alchemy',
        problem_h='Software that works separately.',
        problem=['Your software works separately, leaving your people to move information between tools and departments.',
                 'Information gets trapped in separate systems. Teams repeat work that should happen once, and each new tool adds one more place to look.'],
        do_h='We get your systems working together.',
        do=[('Connect the applications you already use', 'We link your CRM, ERP, accounting and operations tools, so information entered in one reaches the others.'),
            ('Move to a new system without losing what you have', 'When you replace a system, such as a CRM, we plan the migration so your records and history come with you.'),
            ('Build the connections you can’t buy', 'When two systems have no ready-made connector, we build one around how your teams pass work between them.'),
            ('Keep what already works', 'Sometimes the answer is to connect applications that already work, not to replace them.')],
        inds=('manufacturing-wholesale-logistics', 'connecting sales, inventory, the shop floor and freight in one system'), inds2=('hvac-energy-home-improvement', 'linking service records to client accounts and billing'),
        cta='Tell us which systems don’t talk to each other.'),
    'workflow-automation': dict(
        title='Workflow Automation in the GTA | AI Alchemy',
        problem_h='Routine work is taking your team’s hours.',
        problem=['Repetitive tasks, duplicate data entry, and workarounds take time away from customers and business priorities.',
                 'Information gets typed in twice. Requests wait in inboxes. Handoffs depend on someone remembering to chase them.'],
        do_h='We take the routine steps off your team’s plate.',
        do=[('Find the repetitive tasks', 'We look for the steps your teams repeat and the places information stalls.'),
            ('Improve how information moves', 'Enter information once. Let systems handle more of the routine steps and pass work to whoever handles it next.'),
            ('Simplify handoffs between teams', 'Work carries the details the next person needs, so nothing depends on someone remembering to chase it.'),
            ('Keep people in control', 'In the systems we build, your managers keep approval over technical, pricing, safety and production actions.')],
        inds=('mortgage-insurance', 'tracking documents and deadlines beside the file'), inds2=('financial-professional-services-non-profits', 'tracking onboarding, communication and deadlines'),
        cta='Tell us which work you’d like off your team’s plate.'),
    'data-reporting': dict(
        title='Data & Reporting in the GTA | AI Alchemy',
        problem_h='An incomplete business picture.',
        problem=['Scattered information and inconsistent reports make it harder to see performance, spot problems, and make confident decisions.',
                 'Each team keeps its own copy. Reports start with copy and paste. Decisions wait while someone reconciles the numbers.'],
        do_h='We bring your information together.',
        do=[('Bring scattered data together', 'So teams work from shared information, not their own copies.'),
            ('Report from one source', 'Reports draw on the same shared information, so the numbers don’t need reconciling first.'),
            ('Design cloud and data architecture', 'For connected systems and reliable operations.'),
            ('Plan for growth', 'A foundation designed to take on new needs.')],
        inds=('financial-professional-services-non-profits', 'one place for client and donor records'), inds2=('hvac-energy-home-improvement', 'service records linked to accounts and billing'),
        cta='Tell us where your information gets stuck.'),
    'generative-ai-enablement': dict(
        title='Generative AI Enablement in the GTA | AI Alchemy',
        problem_h='Ready for AI. Unsure where to start.',
        problem=['You see the potential but need a clear path from experimenting with AI to using it effectively in everyday work.',
                 'An AI tool added on top won’t necessarily fix it. AI should take on routine work, not the decisions.'],
        do_h='We put AI where it can do useful work.',
        do=[('Identify practical uses', 'We look at how the work runs today, and show you where AI fits, where it doesn’t, and the trade-offs.'),
            ('Connect AI to business knowledge', 'AI is far more useful when it can work from your own documents and records. We connect it to the systems your team already uses.'),
            ('Equip your team', 'We help your people start using it confidently, with clear guidance on what it does and when to check its work.'),
            ('People keep oversight', 'AI helps where it fits, and people keep oversight of what it does.')],
        inds=('mortgage-insurance', 'better document handling with review and accountability intact'), inds2=('financial-professional-services-non-profits', 'tracking onboarding and deadlines'),
        cta='Tell us where you’d like AI to help.'),
}
IND = {i['slug']: i for i in INDS}

def cap_page(slug):
    c, d = CAP[slug], CAP_PAGES[slug]
    path = f'/services/{slug}/'
    crumbs = [('/', 'Home'), ('/services/', 'Capabilities'), (path, c['name'])]
    i1, i2 = IND[d['inds'][0]], IND[d['inds2'][0]]
    lower = lambda n: n.replace('&', 'and').lower()
    dos = ''.join(f'<li><h3>{E(h)}</h3><p>{E(p)}</p></li>' for h, p in d['do'])
    prob = ''.join(f'<p>{E(p)}</p>' for p in d['problem'])
    main = f'''<section class="page-hero" aria-labelledby="h1">
 <div class="wrap">
  <div class="page-hero-copy">
  <p class="layer"><span class="ln">Stage 0{c["n"]}</span> <span class="sep">·</span> <span class="lt">{E(c["verb"])}</span></p>
  <p class="kicker">{E(c["name"])}</p>
  <h1 id="h1">{E(c["line"])}</h1>
  <p class="support">{E(c["desc"])}</p>
  <div class="hero-cta"><div class="hero-actions"><a class="btn btn-primary" href="{brief(c["need"])}">Plan Your Modernization</a></div></div>
  </div>
  <figure class="drawing">{ldraw(f"stage-{c['n']}", f"Line drawing of floor {c['n']} of the building: " + c["floor"])}<figcaption>Floor 0{c["n"]} of the building · Illustration, not a client project</figcaption></figure>
 </div>
</section>
<section class="block" aria-labelledby="problem-h">
 <div class="wrap problem-grid">
  <div class="ph"><p class="kicker">The problem</p><h2 id="problem-h">{E(d["problem_h"])}</h2></div>
  <div class="prose">{prob}</div>
 </div>
</section>
<section class="block" aria-labelledby="do-h">
 <div class="wrap">
  <div class="section-head"><p class="kicker">What we do</p><h2 id="do-h">{E(d["do_h"])}</h2></div>
  <ul class="do-list">{dos}</ul>
 </div>
</section>
<div class="inline-cta"><a class="btn btn-primary" href="{brief(c["need"])}">Start a project brief</a></div>
{steps_html()}
<section class="block" aria-labelledby="ind-h">
 <div class="wrap">
  <div class="section-head"><p class="kicker">Industries</p><h2 id="ind-h">The same approach, wherever the work happens.</h2></div>
  <p class="ind-sent">The work looks different in each industry we serve: for <a class="inbody" href="/industries/{i1["slug"]}/">{E(lower(i1["name"]))} teams</a>, it can mean {E(d["inds"][1])}; for <a class="inbody" href="/industries/{i2["slug"]}/">{E(lower(i2["name"]))} teams</a>, {E(d["inds2"][1])}.</p>
  <p class="more"><a class="textlink" href="/industries/">See the industries we serve</a></p>
 </div>
</section>
{caps_list(exclude=slug, h2='One mechanism. Start anywhere.', kicker='The other capabilities', hid='rel-h', intro='Each capability works on its own and strengthens the others.')}
{cta_band(d["cta"], c["need"])}'''
    ld = {"@context": "https://schema.org", "@graph": [
        {"@type": "Service", "@id": SITE + path + '#service', "name": c['name'], "serviceType": c['name'], "url": SITE + path,
         "description": c['desc'], "provider": {"@id": SITE + '/#org'}, "areaServed": {"@type": "Place", "name": "Greater Toronto Area"}},
        crumbs_ld(crumbs)]}
    write(f'services/{slug}/index.html', page(d['title'], f'{c["line"]} {c["desc"]}', path, main, '/services/', ld, crumbs=crumbs))

def services_index():
    path = '/services/'
    crumbs = [('/', 'Home'), (path, 'Capabilities')]
    main = f'''<section class="page-hero" aria-labelledby="h1">
 <div class="wrap">
  <div class="page-hero-copy">
  <p class="kicker">Capabilities</p>
  <h1 id="h1">Better tools. Stronger capabilities.</h1>
  <p class="support">Five capabilities on one mechanism. Each one strengthens the next, and you can start with the one you need.</p>
  <div class="hero-cta"><div class="hero-actions"><a class="btn btn-primary" href="/contact/">Plan Your Modernization</a></div></div>
  </div>
  <figure class="drawing">{ldraw("tower", "Line drawing of the business as a five-floor building: foundation and core systems, connected systems, a process floor, an analysis deck and a knowledge floor, joined by one copper riser.", cls="ld-tower-sm")}<figcaption>Five floors, one building · Illustration, not a client project</figcaption></figure>
 </div>
</section>
{caps_list(h2='Five capabilities. One connected business.', kicker='The chain', hid='caps-h')}
<section class="block" aria-labelledby="start-h">
 <div class="wrap problem-grid">
  <div class="ph"><p class="kicker">Where to start</p><h2 id="start-h">Not sure which capability fits?</h2></div>
  <div class="prose"><p>You don’t need to know. Sometimes the answer is to improve a system you already have. Sometimes it’s to connect applications that already work. Sometimes the business needs something built for it. The brief helps us tell which.</p>
  <h3 class="price-h">How is a project priced?</h3>
  <p>At a fixed price or by the hour, depending on the scope. Once we understand the work, we propose the model that fits and tell you why: a fixed price when the scope is clear, an hourly rate while it’s still being worked out. The first conversation is free.</p></div>
 </div>
</section>
{steps_html()}
<section class="block" aria-labelledby="ind-h">
 <div class="wrap">
  <div class="section-head"><p class="kicker">Industries</p><h2 id="ind-h">Built for businesses with complex operations.</h2></div>
  <p class="ind-sent">We work across manufacturing, wholesale and logistics; mortgage and insurance; HVAC, energy and home improvement; and financial, professional services and non-profits.</p>
  <p class="more"><a class="textlink" href="/industries/">See the industries we serve</a></p>
 </div>
</section>
{cta_band("Tell us what’s holding your business back.")}'''
    ld = {"@context": "https://schema.org", "@graph": [crumbs_ld(crumbs)]}
    write('services/index.html', page('Capabilities: Modernization, Integration, Automation, Data and AI | AI Alchemy',
          'Five connected capabilities: Systems Modernization, Systems Integration, Workflow Automation, Data & Reporting and Generative AI Enablement. Start with the one you need.',
          path, main, '/services/', ld, crumbs=crumbs))

def how_page():
    path = '/how-we-work/'
    crumbs = [('/', 'Home'), (path, 'How we work')]
    lis = ''.join(f'<li><span class="n">Step {i + 1} · {E(v)}</span><h3>{E(h)}</h3><p>{E(p)}</p></li>' for i, (v, h, p) in enumerate(STEPS))
    main = f'''<section class="page-hero" aria-labelledby="h1">
 <div class="wrap">
  <div class="page-hero-copy">
  <p class="kicker">How we work</p>
  <h1 id="h1">Understand your business. Build what moves it forward.</h1>
  <p class="support">Projects shouldn’t start with a feature list. They start with how your business works.</p>
  <div class="hero-cta"><div class="hero-actions"><a class="btn btn-primary" href="/contact/">Plan Your Modernization</a></div></div>
  </div>
  <figure class="drawing">{ldraw("hero-redraft", "Line drawing of a business redrawn: the same machines, desks and cabinets, now joined along one green line.", accent="verd")}<figcaption>The as-built drawing, redrawn · Illustration, not a client project</figcaption></figure>
 </div>
</section>
<section class="block" aria-labelledby="steps-h">
 <div class="wrap">
  <div class="section-head"><p class="kicker">Three steps</p><h2 id="steps-h">What you see, and what you approve.</h2></div>
  <ol class="steps">{lis}</ol>
  <p class="note">{OUTCOMES_NOTE}</p>
 </div>
</section>
<section class="block" aria-labelledby="first-h">
 <div class="wrap">
  <div class="section-head"><p class="kicker">Step 1 in detail</p><h2 id="first-h">We help you decide what should change.</h2><p>You get a practical roadmap: what to change first, how each step ties to a business priority, and what each choice trades off.</p></div>
  <ul class="do-list"><li><h3>Assess what you have</h3><p>We look at your current systems and how your teams use them.</p></li><li><h3>Find the gaps</h3><p>We find what slows you down and where information gets stuck.</p></li><li><h3>Weigh the options</h3><p>Sometimes the answer is to improve a system you already have. Sometimes it’s to connect what already works. Sometimes the business needs something built for it.</p></li></ul>
 </div>
</section>
<section class="block" aria-labelledby="goal-h">
 <div class="wrap">
  <div class="section-head"><p class="kicker">What we design for</p><h2 id="goal-h">What should be different when we’re done.</h2><p>Practical results your team can use every day.</p></div>
  <ul class="facts"><li><h3>Less manual work</h3><span>Enter information once. Let systems handle more of the routine steps.</span></li><li><h3>Information in one place</h3><span>Bring scattered data together, so teams work from shared information.</span></li><li><h3>Clearer handoffs</h3><span>Work carries the details the next person needs. People keep control of approvals.</span></li><li><h3>Room to grow</h3><span>Built so the next change doesn’t mean starting over.</span></li></ul>
  <p class="note">{OUTCOMES_NOTE}</p>
 </div>
</section>
<section class="block" aria-labelledby="ctrl-h">
 <div class="wrap problem-grid">
  <div class="ph"><p class="kicker">You keep approval</p><h2 id="ctrl-h">Your people decide what goes live.</h2></div>
  <div class="prose"><p>In the systems we build, your managers keep approval over technical, pricing, safety and production actions.</p><p>One team, from strategy through build. Our team is based in the Greater Toronto Area and does the work itself.</p></div>
 </div>
</section>
{caps_list(h2='Better tools. Stronger capabilities.', kicker='Capabilities', hid='caps-h')}
{cta_band("Set the priorities before you build.", lead="Tell us what’s holding your business back. You don’t need a technical spec to start.")}'''
    ld = {"@context": "https://schema.org", "@graph": [crumbs_ld(crumbs)]}
    write('how-we-work/index.html', page('How We Work: Understand, Design, Build | AI Alchemy',
          'Understand your business. Build what moves it forward. Three steps: understand the people, systems and bottlenecks; design the right solution; build, test and support adoption.',
          path, main, '/how-we-work/', ld, crumbs=crumbs))

def redirect(old, new):
    url = SITE + new
    write(old.strip('/') + '/index.html', f'''<!DOCTYPE html>
<html lang="en-CA">
<head>
<meta charset="utf-8">
<title>Moved | AI Alchemy</title>
<meta name="robots" content="noindex">
<link rel="canonical" href="{url}">
<meta http-equiv="refresh" content="0; url={new}">
<script>location.replace('{new}'+location.search+location.hash)</script>
</head>
<body style="font-family:system-ui,sans-serif;background:#F2EDE3;color:#1C2026;padding:24px">
<p>This page has moved to <a href="{new}">{url}</a>.</p>
</body>
</html>
''')

# ---------------------------------------------------------------- homepage
def home():
    probs = [  # (title, copy, image index, alt)  order as David wrote it
        ('Disconnected Systems', 'Your software works separately, leaving your people to move information between tools and departments.', 1,
         'Etched drawing of two desks joined by a loose coral cable.'),
        ('Time Lost to Manual Work', 'Repetitive tasks, duplicate data entry, and workarounds take time away from customers and business priorities.', 4,
         'Etched drawing of paper trays stacked high beside a desk.'),
        ('An Incomplete Business Picture', 'Scattered information and inconsistent reports make it harder to see performance, spot problems, and make confident decisions.', 2,
         'Etched drawing of a rack of exports and loose reports that don’t line up.'),
        ('Outdated Technology', 'Systems that once served you well now struggle to support how your business needs to operate.', 3,
         'Etched drawing of an old terminal beside filing cabinets.'),
        ('Ready for AI. Unsure Where to Start.', 'You see the potential but need a clear path from experimenting with AI to using it effectively in everyday work.', 5,
         'Etched drawing of a new machine beside a desk, its coral cable not yet plugged in.'),
    ]
    pcols = ''.join(f'''<article class="p-col"><div class="top"><b>P{i + 1}</b><span>[0{i + 1}]</span></div>{ldraw(f"problem-r{img}", alt.replace("Etched drawing", "Line drawing"), mode="scroll", accent="coral")}<h3>{E(t)}</h3><p>{E(c)}</p></article>'''
                    for i, (t, c, img, alt) in enumerate(probs))
    stages = ''.join(f'''<a class="stage on" id="stage-{c["n"]}" data-n="{c["n"]}" href="/services/{c["slug"]}/"><span class="lab"><i class="lamp" aria-hidden="true"></i>0{c["n"]} · {E(c["verb"])}</span><h3>{E(c["line"])}</h3><span class="svc">{E(c["name"])}</span><p>{E(c["desc"])}</p><span class="go">Explore {E(c["name"])} →</span></a>'''
                     for c in CAPS)
    td = json.loads((ROOT / 'assets/lines/tower.json').read_text())
    tower_labels = ''.join(f'<span class="ld-lbl" data-g="{c["n"]}" style="left:{(td["a"]["edge%d" % c["n"]][0] + 72) / td["W"] * 100:.2f}%;top:{td["a"]["edge%d" % c["n"]][1] / td["H"] * 100:.2f}%"><b>Floor 0{c["n"]}</b>{E(c["verb"])}</span>' for c in CAPS)
    ticker = ''.join(f'<a href="/services/{c["slug"]}/">{E(c["name"])}</a>' for c in CAPS)
    tabs = ''.join(f'<button type="button" role="tab" id="tab-{i["k"]}" aria-controls="panel-{i["k"]}" aria-selected="{"true" if n == 0 else "false"}" tabindex="{0 if n == 0 else -1}">0{n + 1} · {E(i["name"])}</button>' for n, i in enumerate(INDS))
    panels = ''.join(f'''<div class="ind-panel" role="tabpanel" id="panel-{i["k"]}" aria-labelledby="tab-{i["k"]}"{"" if n == 0 else " hidden"}><figure>{ldraw("industry-" + i["k"], i["alt"].replace("Etched drawing", "Line drawing"), accent="verd")}</figure><div class="txt"><p class="kicker">Industry 0{n + 1}</p><h3>{E(i["name"])}</h3><p>{E(i["line"])}</p><div class="pf"><div><p class="pf-l">Problem</p><p>{E(i["problem"])}</p></div><div class="fix"><p class="pf-l">Fix</p><p>{E(i["fix"])}</p></div></div><a class="textlink" href="/industries/{i["slug"]}/">Learn about {E(i["name"])}</a></div></div>'''
                     for n, i in enumerate(INDS))
    hsteps = ''.join(f'<li><span class="n">0{i + 1} · {E(v)}</span><h3>{E(h)}</h3><p>{E(p)}</p></li>' for i, (v, h, p) in enumerate(STEPS))
    # hero inspection: where work stalls in the as-built drawing (drawing px), the problem it is, and the stage that fixes it
    SPOTS = [
        (585, 150, 0, 'The same order is typed into two systems by hand.', 2),
        (425, 190, 2, 'Reports are pieced together from separate files and spreadsheets.', 4),
        (500, 318, 3, 'The system at the counter can’t share what it knows with the rest.', 1),
        (785, 330, 1, 'Stock changes wait until someone has time to key them in.', 3),
        (1105, 445, 4, 'Answers live in people’s heads, not where AI could help with them.', 5),
    ]
    def spot(k, x, y, pi, what, n):
        c = CAPS[n - 1]
        return (f'<li class="hs" style="--x:{x / 16:.2f}%;--y:{y / 6.09:.2f}%" data-x="{x}" data-y="{y}">'
                f'<button type="button" class="hs-mark" aria-expanded="false" aria-controls="hs-{k}"><span class="sr-only">Inspect: {E(probs[pi][0])}</span></button>'
                f'<div class="hs-card" id="hs-{k}" hidden><span class="hs-tag">P{pi + 1} · Where work stalls</span><b>{E(probs[pi][0])}</b><p>{E(what)}</p>'
                f'<a href="#stage-{n}">Fixed by 0{n} · {E(c["verb"])} <span aria-hidden="true">↓</span></a></div></li>')
    inspect = ('<div class="inspect"><p class="inspect-hint"><span class="fine">Drag across the drawing, or pick a marker, to see where work stalls.</span>'
               '<span class="coarse">Tap a marker to see where work stalls.</span></p>'
               '<ul class="hs-list" aria-label="Where work stalls in this business">' + ''.join(spot(k + 1, *sp) for k, sp in enumerate(SPOTS)) + '</ul>'
               '<div class="sel" aria-hidden="true" hidden><span></span></div><div class="coord" aria-hidden="true"></div></div>')
    main = f'''<section class="hero" aria-labelledby="h1">
 <div class="sheet-label"><span class="lab">Sheet A-01 · <b>As built</b></span><span class="lab">Systems integration &amp; modernization</span></div>
 <div class="hero-drawing"><div class="hero-stage">{ldraw("hero-asbuilt", "Line drawing of a business as it runs today: an office, a front counter, stock racks and a delivery truck, joined by tangled cables.", mode="load", accent="coral")}{inspect}</div><span class="spec" aria-hidden="true">SHEET A-01
REV A · AS BUILT
DRAWN · AI ALCHEMY</span></div>
 <div class="hero-copy">
  <h1 id="h1">Give your business the tools to stay ahead.</h1>
  <div class="hero-side">
   <p class="lede">We modernize systems, connect your software, and put AI to work—so your people spend less time on manual tasks and more on what matters.</p>
   <p class="mono">Based in the Greater Toronto Area</p>
   <div class="act"><a class="btn" href="/contact/">Plan Your Modernization</a></div>
  </div>
 </div>
 <nav class="ticker" aria-label="Capabilities">{ticker}</nav>
</section>
<section class="problems" aria-labelledby="prob-h">
 <div class="sheet-label"><span class="lab">Sheet A-02 · <b>Redlines</b></span><span class="lab">Five problems</span></div>
 <div class="head"><h2 id="prob-h">What’s holding your business back?</h2><p>Each one slows the business down, and they are often connected.</p></div>
 <div class="p-cols">{pcols}</div>
</section>
<section class="chain" aria-labelledby="chain-h">
 <div class="sheet-label"><span class="lab">Sheet A-03 · <b>Chain reaction</b></span><span class="lab">Five capabilities</span></div>
 <div class="head"><h2 id="chain-h">Better tools. Stronger capabilities.</h2><p>Five capabilities on one mechanism. Each stage strengthens the next, and you can start with the one you need.</p></div>
 <div class="tower">
  <div class="tower-text"><div class="tower-sticky"><div class="chain-meter"><span class="lab">Chain reaction · <b>05 · Enable AI</b></span><span class="lab">Earlier floors stay lit</span></div><div class="stages">{stages}</div></div></div>
  <div class="tower-draw">{ldraw("tower", "Line drawing of the business as a five-floor building. Floor 1, the foundation: an old machine being refitted beside servers. Floor 2: four systems joined to one hub. Floor 3: a process floor with a conveyor and a robotic arm. Floor 4: an analysis deck with charts. Floor 5: people working with the business's records. One copper riser connects every floor.", mode="manual", labels=tower_labels)}</div>
 </div>
 <p class="chain-note">Clients can start anywhere. Each capability works on its own and strengthens the others.</p>
</section>
<section class="products" aria-labelledby="products-h">
 <div><p class="kicker">Products &amp; Innovation</p><h2 id="products-h">Our own products are taking shape. More to share soon.</h2></div>
 <div><span class="stamp-soon">Coming soon.</span></div>
</section>
<section class="how" aria-labelledby="how-h">
 <div class="sheet-label"><span class="lab">Sheet A-04 · <b>Redraft</b></span><span class="lab">How we work</span></div>
 <div class="head"><h2 id="how-h">Understand your business. Build what moves it forward.</h2><p>Projects shouldn’t start with a feature list. They start with how your business works.</p></div>
 <div class="how-view">{ldraw("hero-redraft", "Line drawing of the same business redrawn: machines, desks and cabinets joined along one green line.", mode="scroll", accent="verd")}</div>
 <ol class="how-steps">{hsteps}</ol>
 <div class="how-foot"><span>{OUTCOMES_NOTE}</span><a class="textlink" href="/how-we-work/">How we work</a></div>
</section>
<section class="ind" aria-labelledby="ind-h">
 <div class="sheet-label"><span class="lab">Sheet A-05 · <b>Industries</b></span><span class="lab">Four workflows</span></div>
 <div class="head"><h2 id="ind-h">The same approach, wherever the work happens.</h2></div>
 <div class="ind-tabs" role="tablist" aria-label="Industries">{tabs}</div>
 {panels}
 <p class="ind-note">Each industry has its own problems. The need underneath is often the same: reliable systems, clear processes, and information that moves. <a href="/industries/">See all the industries we serve</a>.</p>
</section>
<section class="notes" aria-labelledby="why-h">
 <div><p class="kicker">Why AI Alchemy</p><h2 id="why-h" style="font-size:var(--size-m)">We don’t start by selling you another tool. We start by understanding your business.</h2>
  <ol><li><span>Sometimes the answer is to improve a system you already have.</span></li><li><span>Sometimes it’s to connect applications that already work.</span></li><li><span>Sometimes the business needs something built for it.</span></li></ol></div>
 <div>
  <div class="fact"><h3>Built in-house in the GTA</h3><p>Our team is based in the GTA and does the work itself. No outsourcing.</p></div>
  <div class="fact"><h3>A reply within one business day</h3><p>Then, if you’d like, a free first conversation with David Arushanov, our Client Solutions Lead, by phone, video call or in person.</p></div>
  <div class="fact"><h3>You keep approval</h3><p>In the systems we build, your managers approve technical, pricing, safety and production actions.</p></div>
  <p class="more"><a class="textlink" href="/about/">Learn about AI Alchemy</a></p>
 </div>
</section>
<section class="brief-band" aria-labelledby="cta-h">
 <div><p class="kicker">Project brief</p><h2 id="cta-h">Tell us what’s holding your business back.</h2><p>You don’t need a technical spec to start. Tell us what you want to improve and where your systems fall short.</p></div>
 <div><a class="btn" href="/contact/">Plan Your Modernization</a><p class="cta-note">Three short steps. Your brief opens as an email you send. We reply within one business day.</p><p class="cta-note">Prefer email? Write to <a href="mailto:hello@ai-alchemy.ca">hello@ai-alchemy.ca</a>.</p></div>
</section>'''
    ld = json.loads(re.search(r'<script type="application/ld\+json">(.*?)</script>', src('index.html'), re.S).group(1))
    org = ld['@graph'][0]
    org['description'] = ('Technology consulting and implementation for established businesses in the Greater Toronto Area: '
                          'systems modernization, systems integration, workflow automation, data and reporting, and generative AI enablement.')
    org['knowsAbout'] = ['Systems integration', 'Legacy software modernization', 'Workflow automation', 'Data and reporting', 'Generative AI', 'CRM migration', 'ERP integration']
    org['hasOfferCatalog']['name'] = 'Capabilities'
    org['hasOfferCatalog']['itemListElement'] = [{"@type": "Offer", "itemOffered": {"@type": "Service", "name": c['name'], "description": c['desc'],
        "url": f'{SITE}/services/{c["slug"]}/', "provider": {"@id": SITE + '/#org'}, "areaServed": {"@type": "Place", "name": "Greater Toronto Area"}}} for c in CAPS]
    write('index.html', page('Systems Integration, Modernization and AI for GTA Businesses | AI Alchemy',
          'We modernize systems, connect your software, and put AI to work, so your people spend less time on manual tasks and more on what matters. Based in the Greater Toronto Area.',
          '/', main, '/', ld, home=True))

# ---------------------------------------------------------------- existing pages, carried into the new system
def remap_links(soup):
    for a in soup.find_all('a', href=True):
        h = a['href']; base = h.split('?')[0]
        if base in REDIRECTS:
            a['href'] = REDIRECTS[base]
        if a.get('aria-label'):
            for o, n in OLD_NAMES.items(): a['aria-label'] = a['aria-label'].replace(o, n)
        for s in a.find_all(string=True):
            t = str(s)
            for o, n in OLD_NAMES.items(): t = t.replace(o, n)
            t = t.replace('See all four services', 'See all five capabilities').replace('See our four services', 'See our five capabilities')
            if t != str(s): s.replace_with(t)
        if a.get('href', '').startswith('/contact/?need='):
            a['href'] = '/contact/'

def new_steps_ol(soup):
    ol = BeautifulSoup('<ol class="steps">' + ''.join(f'<li><span class="n">Step {i + 1} · {E(v)}</span><h3>{E(h)}</h3><p>{E(p)}</p></li>' for i, (v, h, p) in enumerate(STEPS)) + '</ol>', 'html.parser')
    return ol.ol

def frag(s): return BeautifulSoup(s, 'html.parser')

def carry(path, cur, extra=None):
    """Re-skin an existing page: new head assets, header, footer and scripts; same content, remapped links."""
    s = src(path)
    soup = BeautifulSoup(s, 'html.parser')
    hd = soup.head
    for el in hd.find_all(['link', 'script']):
        if el.name == 'link' and el.get('rel') in (['preload'], ['stylesheet']): el.decompose()
        elif el.name == 'script' and not el.get('type'): el.decompose()
    for el in hd.find_all('meta', attrs={'property': 'og:image:alt'}) + hd.find_all('meta', attrs={'name': 'twitter:image:alt'}): el.decompose()
    hd.append(frag(HEAD_ASSETS + '\n' + JS_FLAG))
    for sc in hd.find_all('script', type='application/ld+json'):
        t = sc.string
        for o, n in REDIRECTS.items(): t = t.replace(o, n)
        for o, n in OLD_NAMES.items(): t = t.replace(o, n)
        sc.string = t
    soup.html['class'] = ['no-js']
    body = soup.body
    for el in body.find_all(['header', 'footer'], recursive=False): el.decompose()
    for el in body.find_all('a', class_='skip', recursive=False): el.decompose()
    for el in body.find_all('script', recursive=False): el.decompose()
    body.insert(0, frag(header(cur)))
    main = body.find('main')
    main.insert_after(frag('\n' + footer() + '\n' + SCRIPTS_INNER + '\n'))
    # process: four steps -> the agreed three steps
    for ol in main.find_all('ol', class_='steps'): ol.replace_with(new_steps_ol(soup))
    for h in main.find_all('h2'):
        if h.get_text() == 'Four stages, with your team involved at each one.': h.string = 'Three steps, with your team involved at each one.'
    # old service link lists -> the five capabilities
    for ul in main.find_all('ul', class_=['link-list', 'other-list']):
        if ul.find('a', href=re.compile(r'^/services/[a-z]')):
            if 'other-list' in ul['class']:
                ul.replace_with(frag('<ul class="other-list">' + ''.join(f'<li><a href="/services/{c["slug"]}/">{E(c["name"])}</a></li>' for c in CAPS) + '</ul>'))
            else:
                ul.replace_with(frag('<ul class="link-list">' + ''.join(
                    f'<li><p class="layer"><span class="ln">Stage 0{c["n"]}</span> <span class="sep">·</span> <span class="lt">{E(c["verb"])}</span></p><h3>{E(c["name"])}</h3><p>{E(c["desc"])}</p><a class="textlink" href="/services/{c["slug"]}/">Explore {E(c["name"])}</a></li>' for c in CAPS) + '</ul>'))
    for el in main.find_all(class_='cta-sheet'): el.decompose()
    for el in main.find_all(attrs={'data-tone': True}): del el['data-tone']
    remap_links(soup)
    if extra: extra(soup, main)
    out = str(soup)
    out = out.replace('See all four services', 'See all five capabilities').replace('See our four services', 'See our five capabilities')
    if not out.lstrip().lower().startswith('<!doctype'): out = '<!DOCTYPE html>\n' + out
    write(path, out)

def industry_extra(slug):
    ind = IND[slug]
    def f(soup, main):
        fig = main.find('figure', class_='method')
        if fig: fig.replace_with(frag(ind_drawing(ind)))
        h = main.find('h2', id='svc-h')
        if h: h.string = 'Capabilities that fit this work'
    return f

def industries_index_extra(soup, main):
    fig = main.find('figure', class_='method')
    if fig: fig.replace_with(frag(ind_drawing(INDS[0], 'Manufacturing: one workflow, connected. Each industry has its own drawing. Illustration, not a client project.')))
    # give each industry card its drawing
    for li in main.select('ul.link-list > li, .ind-list > li, article'):
        a = li.find('a', href=re.compile(r'^/industries/[a-z]'))
        if not a: continue
        slug = a['href'].strip('/').split('/')[-1]
        if slug in IND and not li.find('picture'):
            li.insert(0, frag(ldraw('industry-' + IND[slug]['k'], IND[slug]['alt'].replace('Etched drawing', 'Line drawing'), accent='verd')))

def contact_extra(soup, main):
    chips = main.find('div', class_='chips')
    if chips:
        tick = '<span class="ck" aria-hidden="true"><svg viewBox="0 0 12 12"><path d="M2 6.5l2.6 2.6L10 3.5"/></svg></span>'
        chips.clear()
        for c in CHIPS:
            chips.append(frag(f'<label class="chip"><input type="checkbox" name="need" value="{E(c)}">{tick}<span>{E(c)}</span></label>'))

def contact_hero_fix(soup, main):
    contact_extra(soup, main)

# ---------------------------------------------------------------- sitemap and llms.txt
def sitemap():
    urls = ['/', '/services/'] + [f'/services/{c["slug"]}/' for c in CAPS] + ['/how-we-work/', '/industries/'] + \
           [f'/industries/{i["slug"]}/' for i in INDS] + ['/about/', '/contact/', '/privacy/']
    body = ''.join(f' <url><loc>{SITE}{u}</loc><lastmod>{TODAY}</lastmod></url>\n' for u in urls)
    write('sitemap.xml', f'<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n{body}</urlset>\n')

def llms():
    caps = '\n'.join(f'- [{c["name"]}]({SITE}/services/{c["slug"]}/): {c["line"]} {c["desc"]}' for c in CAPS)
    inds = '\n'.join(f'- [{i["name"]}]({SITE}/industries/{i["slug"]}/): {i["line"]} {i["fix"]}' for i in INDS)
    write('llms.txt', f'''# AI Alchemy

> AI Alchemy is a technology consulting and implementation firm based in the Greater Toronto Area. We modernize systems, connect your software, and put AI to work, so your people spend less time on manual tasks and more on what matters.

Five connected capabilities: systems modernization, systems integration, workflow automation, data and reporting, and generative AI enablement. Clients can start with the one they need. Our team is based in the GTA and does the work itself.

How we work, in three steps: understand the people, systems and bottlenecks; design the right solution; build, test and support adoption.

To start a project, send a short project brief. It takes three steps. Your brief opens as an email you send. We reply within one business day. Email: hello@ai-alchemy.ca

## Capabilities

- [Capabilities overview]({SITE}/services/): All five capabilities in one place.
{caps}
- [How we work]({SITE}/how-we-work/): Understand your business. Build what moves it forward.

## Industries

- [Industries overview]({SITE}/industries/): The industries we work with, and the problems we fix in each.
{inds}

## Company

- [Home]({SITE}/): Who we serve, what we do and how to start.
- [About]({SITE}/about/): We start by understanding your business.
- [Start a project brief]({SITE}/contact/): Three short steps. Your brief opens as an email you send to hello@ai-alchemy.ca.
- [Privacy]({SITE}/privacy/): How we handle the information you share through this site and the project brief.

## Products & Innovation

Our own products are taking shape. More to share soon.
''')

if __name__ == '__main__':
    home()
    services_index()
    for c in CAPS: cap_page(c['slug'])
    how_page()
    for old, new in REDIRECTS.items(): redirect(old, new)
    carry('about/index.html', '/about/')
    carry('contact/index.html', '', contact_extra)
    carry('contact/thanks/index.html', '')
    carry('privacy/index.html', '')
    carry('404.html', '')
    carry('industries/index.html', '/industries/', industries_index_extra)
    for i in INDS: carry(f'industries/{i["slug"]}/index.html', '/industries/', industry_extra(i['slug']))
    sitemap(); llms()
