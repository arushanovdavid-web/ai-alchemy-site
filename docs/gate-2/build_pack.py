"""Builds docs/gate-2/index.html, the Gate 2 review pack (design system + homepage storyboard).
Run from the repo root: python3 docs/gate-2/build_pack.py"""
import json, os, html
HERE = os.path.dirname(os.path.abspath(__file__))
T = json.load(open(os.path.join(HERE, 'tokens.json')))
PC = T['primitive']['color']
def contrast(a, b):
    def L(h):
        h = h.lstrip('#'); r = [int(h[i:i+2], 16) / 255 for i in (0, 2, 4)]
        r = [x / 12.92 if x <= .03928 else ((x + .055) / 1.055) ** 2.4 for x in r]
        return .2126 * r[0] + .7152 * r[1] + .0722 * r[2]
    x, y = L(a), L(b); return (max(x, y) + .05) / (min(x, y) + .05)
PAPER = PC['paper']['100']['$value']

# ---------- colour roles ----------
ROLES = [
 ('--color-bg', 'paper.100', 'Parchment', 'Page and every sheet.', None),
 ('--color-surface', 'paper.200', 'Deep parchment', 'Cells that need to sit back: form fields, table heads.', None),
 ('--color-surface-kraft', 'paper.300', 'Kraft', 'Footer and the brief, the two places the page changes paper.', None),
 ('--color-fg', 'ink.900', 'Ink', 'Headlines, hairlines, nav.', 'text'),
 ('--color-fg-body', 'ink.800', 'Ink, body', 'Running text.', 'text'),
 ('--color-fg-muted', 'ink.600', 'Graphite', 'Labels, sheet numbers, metadata.', 'text'),
 ('--color-fg-faint', 'ink.400', 'Pencil', 'Construction lines and grid only. Never text.', 'line'),
 ('--color-problem', 'coral.400', 'Coral', 'Marks a problem: tangled cables, redlines. Lines and fills only.', 'line'),
 ('--color-problem-text', 'coral.700', 'Coral, text', 'Problem numbers and notes.', 'text'),
 ('--color-action', 'verdigris.600', 'Verdigris', 'Our work and every action: buttons, links, focus.', 'text'),
 ('--color-action-hover', 'verdigris.800', 'Verdigris, deep', 'Hover and pressed.', 'text'),
 ('--color-action-tint', 'verdigris.100', 'Verdigris tint', 'Selected tab, highlighted row.', None),
 ('--color-approval', 'sand.400', 'Sand', 'Your approval: stamps and gates. Lines and fills only.', 'line'),
 ('--color-approval-text', 'sand.700', 'Sand, text', 'Stamp lettering and "You approve".', 'text'),
 ('--color-pulse', 'copper.500', 'Copper', 'The capability pulse and lit stages. Lines and fills only.', 'line'),
 ('--color-pulse-text', 'copper.700', 'Copper, text', 'Stage labels.', 'text'),
]
def val(path):
    a, b = path.split('.'); return PC[a][b]['$value']
rows = []
for var, path, name, use, kind in ROLES:
    v = val(path); cr = contrast(v, PAPER)
    if kind == 'text': verdict = f'{cr:.1f}:1 · AA text' if cr >= 4.5 else f'{cr:.1f}:1 · large text only'
    elif kind == 'line': verdict = f'{cr:.1f}:1 · {"non-text OK" if cr >= 3 else "decorative only"}'
    else: verdict = 'surface'
    rows.append(f'<tr><td><span class="chip" style="background:var({var})"></span></td><td><b>{name}</b><br><code>{var}</code></td><td><code>{v}</code></td><td>{use}</td><td class="mono">{verdict}</td></tr>')
COLOR_TABLE = '\n'.join(rows)
on_action = contrast(PAPER, val('verdigris.600'))

TYPE = [
 ('display-xl', 'Hero headline', 'GIVE YOUR BUSINESS THE TOOLS TO STAY AHEAD.', 'display', 'Archivo 720, width 88, uppercase, leading 0.94, tracking −0.02em. 40px at 390 wide, 92px at 1440.'),
 ('display-l', 'Section headline', 'BETTER TOOLS. STRONGER CAPABILITIES.', 'display', 'Archivo 720, width 88, uppercase, leading 0.94. 34px to 64px.'),
 ('display-m', 'Column and stage titles', 'SEE CLEARLY. MAKE INFORMED DECISIONS.', 'display', 'Archivo 720, width 88, uppercase, leading 1.05. 24px to 34px.'),
 ('display-s', 'Small display', 'OUR OWN PRODUCTS ARE TAKING SHAPE.', 'display', 'Archivo 700, uppercase. 20px to 26px.'),
 ('body-l', 'Lead copy', 'We modernize systems, connect your software, and put AI to work—so your people spend less time on manual tasks and more on what matters.', 'text', 'IBM Plex Sans 400, 17/26, measure 44ch in the hero copy column.'),
 ('body', 'Body', 'Your software works separately, leaving your people to move information between tools and departments.', 'text', 'IBM Plex Sans 400, 16/25, measure 34 to 68ch.'),
 ('body-s', 'Small body', 'Identify practical uses, connect AI to business knowledge, and equip your team to use it confidently.', 'text', 'IBM Plex Sans 400, 14/21. Column copy on desktop sheets.'),
 ('meta', 'Metadata', 'SHEET A-02 · THE PROBLEM · P1 · [01]', 'mono', 'IBM Plex Mono 400 to 500, 12/16, uppercase, tracking 0.04em.'),
]
type_rows = []
for k, role, sample, fam, spec in TYPE:
    style = {'display': f'font-family:var(--font-display);font-size:var(--primitive-size-{k});font-weight:720;font-stretch:88%;text-transform:uppercase;line-height:.98;letter-spacing:-.015em',
             'text': f'font-family:var(--font-text);font-size:var(--primitive-size-{k});line-height:1.55;max-width:60ch',
             'mono': f'font-family:var(--font-mono);font-size:var(--primitive-size-{k});letter-spacing:.04em;text-transform:uppercase;color:var(--color-fg-muted)'}[fam]
    type_rows.append(f'<div class="spec-row"><div class="spec-k"><b>{role}</b><code>--primitive-size-{k}</code><span>{spec}</span></div><div style="{style}">{sample}</div></div>')
TYPE_HTML = '\n'.join(type_rows)

SPACE = [(k, v['$value']) for k, v in T['primitive']['space'].items()]
SPACE_HTML = ''.join(f'<div class="sp"><i style="width:{v}"></i><code>space-{k}</code><span>{v}</span></div>' for k, v in SPACE)

# ---------- storyboard ----------
CU, CUT, VG, CO, SA, INK, MUT, PEN = '#B5703F', '#8A4E26', '#1F6B5C', '#E39A72', '#E2B04A', '#1C2026', '#5B5F63', '#8C9196'
def ph(inner, label):
    """phone wireframe 390x844 scaled into a 156 x 338 thumbnail"""
    return (f'<svg viewBox="0 0 390 844" role="img" aria-label="Phone storyboard frame: {html.escape(label)}"><rect width="390" height="844" fill="#F2EDE3"/>'
            f'<g fill="none" stroke="{INK}" stroke-width="1.6"><rect x="8" y="8" width="374" height="828"/></g>{inner}</svg>')
def T_(x, y, s, size=14, fill=INK, fam='Archivo,sans-serif', w=720, anchor='start', extra=''):
    st = 'font-stretch:88%' if 'Archivo' in fam else ''
    return f'<text x="{x}" y="{y}" font-family="{fam}" font-size="{size}" font-weight="{w}" fill="{fill}" text-anchor="{anchor}" style="{st}" {extra}>{s}</text>'
M = 'IBM Plex Mono,monospace'; SANS = 'IBM Plex Sans,sans-serif'
def bars(x, y, n, w, gap=18, fill='#2C3036', op=.55):
    return ''.join(f'<rect x="{x}" y="{y + i*gap}" width="{w - (i == n-1)*w*.4}" height="7" fill="{fill}" opacity="{op}"/>' for i in range(n))
def img(href, x, y, w, h, extra=''):
    return f'<image href="{href}" x="{x}" y="{y}" width="{w}" height="{h}" preserveAspectRatio="xMidYMid slice" {extra}/>'

PH_HERO = '<image href="refs/sb-hero-phone.jpg" x="0" y="0" width="390" height="844" preserveAspectRatio="none"/>'
PH_PROB = (T_(24, 60, 'SHEET A-02', 11, MUT, M, 400) + T_(24, 108, 'WHAT\'S HOLDING', 36) + T_(24, 146, 'YOUR BUSINESS', 36) + T_(24, 184, 'BACK?', 36)
           + '<path d="M8 210H382M8 520H382" stroke="#1C2026" stroke-width="1.4"/>' + img('refs/g1/etch-r1.jpg', 70, 222, 250, 200)
           + T_(24, 450, 'P1', 12, '#9A4424', M, 500) + T_(366, 450, '[01 / 05]', 12, MUT, M, 400, 'end') + T_(24, 482, 'DISCONNECTED SYSTEMS', 26) + bars(24, 496, 2, 320, 12, op=.4)
           + img('refs/g1/etch-r4.jpg', 70, 532, 250, 200) + T_(24, 760, 'P2', 12, '#9A4424', M, 500) + T_(24, 792, 'TIME LOST TO MANUAL WORK', 26))
PH_CHAIN = (T_(24, 60, 'SHEET A-04', 11, MUT, M, 400) + T_(24, 106, 'BETTER TOOLS.', 34) + T_(24, 142, 'STRONGER', 34) + T_(24, 178, 'CAPABILITIES.', 34)
            + '<path d="M8 204H382" stroke="#1C2026" stroke-width="1.4"/>' + img('refs/g1/etch-chain-1.jpg', 8, 205, 374, 234)
            + T_(24, 470, '01 · MODERNIZE', 12, CUT, M, 500) + T_(24, 502, 'BUILD A STRONGER', 26) + T_(24, 530, 'FOUNDATION.', 26) + T_(24, 560, 'SYSTEMS MODERNIZATION', 11, VG, M, 500) + bars(24, 574, 2, 330, 13, op=.4)
            + '<path d="M8 612H382" stroke="#1C2026" stroke-width="1.4"/>' + img('refs/g1/etch-chain-2.jpg', 8, 613, 374, 222, 'opacity=".55"')
            + f'<path d="M32 440V612" stroke="{CU}" stroke-width="3"/><circle cx="32" cy="440" r="7" fill="{CU}"/>')
PH_REDRAFT = (T_(24, 60, 'SHEET A-03', 11, MUT, M, 400) + T_(24, 106, 'REV D.', 38) + T_(24, 146, 'ONE OPERATION.', 38) + '<path d="M8 172H382M8 520H382" stroke="#1C2026" stroke-width="1.4"/>'
              + img('refs/g1/etch-hero-redraft.jpg', 8, 173, 374, 346) + '<g stroke="#1C2026" fill="none" stroke-width="1.2"><path d="M8 560H382M8 600H382M8 640H382M8 680H382M60 520V720M260 520V720"/></g>'
              + T_(22, 545, 'REV', 11, INK, M, 500) + T_(72, 545, 'CHANGE', 11, INK, M, 500) + ''.join(T_(26, 585 + i*40, l, 12, INK, M, 500) + T_(72, 585 + i*40, c, 12, INK, M, 400) for i, (l, c) in enumerate([('A', 'Discover'), ('B', 'Architect'), ('C', 'Build'), ('D', 'Validate')]))
              + T_(272, 625, 'YOU APPROVE', 11, '#86600F', M, 500) + T_(272, 705, 'YOU APPROVE', 11, '#86600F', M, 500) + f'<g transform="translate(200 778) rotate(-5)"><rect x="-110" y="-30" width="220" height="60" fill="{SA}" fill-opacity=".22" stroke="{SA}" stroke-width="3"/>' + T_(0, 9, 'APPROVED', 26, '#86600F', 'Archivo,sans-serif', 800, 'middle') + '</g>')
IND = ['Manufacturing, wholesale &amp; logistics', 'Mortgage &amp; insurance', 'HVAC, energy &amp; home improvement', 'Financial, professional services &amp; non-profits']
PH_IND = (T_(24, 60, 'SHEETS I-01 TO I-04', 11, MUT, M, 400) + T_(24, 106, 'INDUSTRIES', 38) + T_(24, 146, 'WE SERVE', 38) + '<path d="M8 176H382" stroke="#1C2026" stroke-width="1.4"/>'
          + ''.join(f'<path d="M8 {176 + (i+1)*150}H382" stroke="#1C2026" stroke-width="1.4"/>' + T_(24, 206 + i*150, f'I-0{i+1}', 11, MUT, M, 400) + T_(24, 240 + i*150, IND[i].split(',')[0].split(' &amp;')[0].upper(), 24) + bars(24, 258 + i*150, 2, 300, 12, op=.35) + T_(366, 300 + i*150, '→', 18, VG, M, 500, 'end') for i in range(4)))
PH_NOTES = (T_(24, 60, 'GENERAL NOTES', 11, MUT, M, 400) + T_(24, 106, 'HOW WE WORK', 38) + T_(24, 146, 'WITH YOU', 38) + '<path d="M8 176H382" stroke="#1C2026" stroke-width="1.4"/>'
            + ''.join(T_(24, 222 + i*86, f'{i+1}', 14, CUT if False else INK, M, 500) + bars(56, 212 + i*86, 3, 300, 14, op=.4) + f'<path d="M8 {262 + i*86}H382" stroke="#8C9196" stroke-width="1"/>' for i in range(4))
            + T_(24, 610, 'BASED IN THE GREATER TORONTO AREA', 12, MUT, M, 500) + T_(24, 640, 'WE REPLY WITHIN ONE BUSINESS DAY', 12, VG, M, 500))
PH_PROD = (T_(24, 60, 'PRODUCTS &amp; INNOVATION', 11, MUT, M, 400) + T_(24, 106, 'OUR OWN', 34) + T_(24, 142, 'PRODUCTS ARE', 34) + T_(24, 178, 'TAKING SHAPE.', 34) + T_(24, 214, 'More to share soon.', 16, '#2C3036', SANS, 400)
           + ''.join(f'<rect x="{30 + i*112}" y="{270 + (i%2)*30}" width="96" height="140" fill="none" stroke="{PEN}" stroke-width="1.5" stroke-dasharray="6 5"/>' for i in range(3))
           + f'<g transform="translate(195 520) rotate(-5)"><rect x="-120" y="-34" width="240" height="68" fill="{SA}" fill-opacity=".22" stroke="{SA}" stroke-width="3" stroke-dasharray="10 5"/>' + T_(0, 10, 'COMING SOON.', 28, '#86600F', 'Archivo,sans-serif', 800, 'middle') + '</g>')
PH_BRIEF = ('<rect x="8" y="8" width="374" height="828" fill="#DED0B6"/>' + T_(24, 60, 'DRAWING REQUEST', 11, MUT, M, 400) + T_(24, 106, 'TELL US WHAT\'S', 34) + T_(24, 142, 'HOLDING YOUR', 34) + T_(24, 178, 'BUSINESS BACK.', 34)
            + ''.join(T_(24, 236 + i*86, l, 11, MUT, M, 500) + f'<rect x="24" y="{246 + i*86}" width="342" height="44" fill="#E9E2D3"/><path d="M24 {290 + i*86}H366" stroke="#1C2026" stroke-width="1.6"/>' for i, l in enumerate(['1 · WHAT SLOWS YOU DOWN', '2 · SYSTEMS YOU RUN', '3 · NAME', '4 · WORK EMAIL']))
            + f'<rect x="24" y="604" width="342" height="52" fill="{VG}"/>' + T_(195, 636, 'PLAN YOUR MODERNIZATION', 13, '#F2EDE3', M, 500, 'middle') + T_(24, 690, 'We reply within one business day.', 14, '#2C3036', SANS, 400) + T_(24, 716, 'hello@ai-alchemy.ca', 14, VG, M, 500))
PH_FOOT = ('<rect x="8" y="8" width="374" height="828" fill="#DED0B6"/><g fill="none" stroke="#1C2026" stroke-width="1.4"><path d="M8 300H382M8 380H382M8 460H382M8 540H382M195 300V540"/></g>'
           + f'<g fill="none" stroke="{PEN}" stroke-width="1"><path d="M8 120H382M8 230H382M40 8V300M350 8V300"/><circle cx="195" cy="175" r="70"/></g>' + T_(195, 198, 'AI ALCHEMY', 58, INK, 'Archivo,sans-serif', 800, 'middle')
           + ''.join(T_(22 + (i % 2)*187, 330 + (i//2)*80, l, 11, MUT, M, 500) + T_(22 + (i % 2)*187, 356 + (i//2)*80, v, 12, INK, M, 400) for i, (l, v) in enumerate([('SHEET', 'A-99 · FOOTER'), ('CONTACT', 'hello@ai-alchemy.ca'), ('BASED IN', 'Greater Toronto Area'), ('REVISION', 'D')]))
           + ''.join(T_(24, 590 + i*28, s, 13, INK, M, 400) for i, s in enumerate(['Services', 'Industries', 'About', 'Contact', 'Privacy'])))

def dw(inner, label):
    return f'<svg viewBox="0 0 1440 900" role="img" aria-label="Desktop storyboard frame: {html.escape(label)}"><rect width="1440" height="900" fill="#F2EDE3"/><g fill="none" stroke="{INK}" stroke-width="1.2"><rect x="16" y="16" width="1408" height="868"/></g>{inner}</svg>'
DW_IND = dw(T_(40, 60, 'SHEETS I-01 TO I-04 · INDUSTRIES', 12, MUT, M, 400) + T_(36, 150, 'INDUSTRIES WE SERVE', 64)
            + '<path d="M16 200H1424M16 250H1424M16 800H1424" stroke="#1C2026" stroke-width="1"/>' + ''.join(f'<path d="M{16 + i*352} 200V250" stroke="#1C2026"/>' + (f'<rect x="{16}" y="200" width="352" height="50" fill="#CFE0D6"/>' if i == 0 else '') + T_(36 + i*352, 231, IND[i].upper().replace('&AMP;', '&amp;'), 12, INK, M, 500) for i in range(4))
            + img('refs/g1/etch-hero-asbuilt.jpg', 16, 251, 1000, 548) + '<path d="M1016 250V800" stroke="#1C2026"/>'
            + T_(1040, 300, 'I-01', 12, MUT, M, 400) + T_(1040, 344, 'TECHNOLOGY FOR', 32) + T_(1040, 378, 'MANUFACTURING, WHOLESALE', 32) + T_(1040, 412, 'AND LOGISTICS TEAMS', 32) + bars(1040, 440, 4, 340, 20, op=.35)
            + T_(1040, 560, 'Headline and copy from the current industry page.', 13, MUT, SANS, 400) + T_(1040, 760, 'SEE MANUFACTURING  →', 13, VG, M, 500)
            + T_(40, 846, 'Same drawing, relabelled per industry; the tab row swaps labels and the parts that move.', 13, MUT, SANS, 400), 'Industries')
DW_NOTES = dw(T_(40, 60, 'GENERAL NOTES', 12, MUT, M, 400) + T_(36, 150, 'HOW WE WORK WITH YOU', 64)
              + '<path d="M16 200H1424M720 200V884" stroke="#1C2026"/>' + ''.join(f'<path d="M16 {200 + (i+1)*120}H720" stroke="#8C9196"/>' + T_(40, 250 + i*120, f'{i+1}', 16, INK, M, 500) + bars(80, 236 + i*120, 3, 560, 22, op=.35) for i in range(4))
              + T_(744, 250, 'ASSURANCE', 12, MUT, M, 400) + T_(744, 300, 'BASED IN THE GREATER', 32) + T_(744, 334, 'TORONTO AREA.', 32) + T_(744, 420, 'WE REPLY WITHIN', 32) + T_(744, 454, 'ONE BUSINESS DAY.', 32)
              + T_(744, 540, 'Both from the current site. Further notes use only', 14, MUT, SANS, 400) + T_(744, 562, 'claims you confirm; no invented clients or figures.', 14, MUT, SANS, 400), 'General notes and assurance')
DW_BRIEF = dw('<rect x="16" y="16" width="1408" height="868" fill="#DED0B6"/>' + T_(40, 60, 'DRAWING REQUEST · PROJECT BRIEF', 12, MUT, M, 400) + T_(36, 150, 'TELL US WHAT\'S HOLDING', 64) + T_(36, 216, 'YOUR BUSINESS BACK.', 64)
              + '<g stroke="#1C2026" fill="none" stroke-width="1.2"><rect x="16" y="260" width="1408" height="420"/><path d="M16 400H1424M16 540H1424M720 260V680"/></g>'
              + ''.join(T_(40 + (i % 2)*704, 296 + (i//2)*140, l, 12, MUT, M, 500) + f'<rect x="{40 + (i % 2)*704}" y="{312 + (i//2)*140}" width="656" height="56" fill="#E9E2D3"/><path d="M{40 + (i % 2)*704} {368 + (i//2)*140}H{696 + (i % 2)*704}" stroke="#1C2026" stroke-width="1.6"/>' for i, l in enumerate(['1 · WHAT SLOWS YOU DOWN', '2 · SYSTEMS YOU RUN TODAY', '3 · NAME AND COMPANY', '4 · WORK EMAIL', '5 · PHONE (OPTIONAL)', '6 · BEST TIME TO TALK']))
              + f'<rect x="40" y="720" width="320" height="56" fill="{VG}"/>' + T_(200, 754, 'PLAN YOUR MODERNIZATION', 13, '#F2EDE3', M, 500, 'middle') + T_(400, 744, 'We reply within one business day.', 15, '#2C3036', SANS, 400) + T_(400, 768, 'Or write to hello@ai-alchemy.ca', 15, VG, M, 500)
              + T_(40, 846, 'Fields to match the current contact form; final list in Gate 3.', 13, MUT, SANS, 400), 'Project brief')
DW_FOOT = dw('<rect x="16" y="16" width="1408" height="868" fill="#DED0B6"/>' + f'<g fill="none" stroke="{PEN}" stroke-width="1"><path d="M16 140H1424M16 470H1424M120 16V560M1320 16V560"/><circle cx="720" cy="305" r="150"/><path d="M560 470L720 140L880 470"/></g>'
             + T_(720, 380, 'AI ALCHEMY', 220, INK, 'Archivo,sans-serif', 800, 'middle') + '<g stroke="#1C2026" fill="none" stroke-width="1.2"><path d="M16 560H1424M16 640H1424M16 720H1424M380 560V884M760 560V884M1100 560V884"/></g>'
             + ''.join(T_(40 + i*362, 590, l, 12, MUT, M, 500) + T_(40 + i*362, 620, v, 14, INK, M, 400) for i, (l, v) in enumerate([('SHEET', 'A-99 · FOOTER'), ('CONTACT', 'hello@ai-alchemy.ca'), ('BASED IN', 'Greater Toronto Area'), ('REVISION', 'D')]))
             + ''.join(T_(40 + i*362, 760, s, 14, INK, M, 400) for i, s in enumerate(['Services · Industries', 'About · Contact', 'Privacy', '© AI Alchemy']))
             + T_(40, 846, 'Wordmark drawn in construction lines; it draws itself once when the footer enters.', 13, MUT, SANS, 400), 'Footer')
DW_PROD = None  # products block is part of the A-04 sheet render

SECTIONS = [
 dict(id='s1', n='01', name='Hero', sheet='A-01', desk='<img src="refs/sb-hero.jpg" alt="Desktop hero: etched office and warehouse cutaway with coral cables, nav row of cells, huge uppercase headline along the foot, copy column and capability ticker">', phone=ph(PH_HERO, 'Hero'),
      copy='“Give your business the tools to stay ahead.” Supporting line, “Plan Your Modernization”, “Based in the Greater Toronto Area”, ticker of the five capabilities.',
      enter='Text is in the HTML and visible at first paint. The drawing reveals behind a coral scan line that sweeps top to bottom in 1.2s; spec list types on; ticker starts.',
      scroll='Not pinned. The drawing moves at 0.85× scroll; the headline at 1×. The scan line parks at REV A.', back='Reverse is the same curve; nothing replays.',
      phone_note='Close crop of the same drawing on top, headline below in four lines, button full width. No parallax.',
      rm='No sweep or parallax; drawing shown at once.', vh='100vh', pin=0),
 dict(id='s2', n='02', name='The problem', sheet='A-02', desk='<img src="refs/sb-problems.jpg" alt="Desktop problem section: five columns with etched still lifes, coral numbers, uppercase titles and supporting copy">', phone=ph(PH_PROB, 'The problem'),
      copy='“What’s holding your business back?” and David’s five problems with their supporting copy.',
      enter='The headline holds alone for half a screen (a Heron-style pause), then the five columns rise in, 80ms apart. Each drawing fades up from pencil to full hatch; its coral cable draws last.',
      scroll='Pause pinned 50vh, then normal flow.', back='Columns stay drawn; scrolling back only reverses the pause.',
      phone_note='One column per screen-height card, in order, with a “01 / 05” counter. Cards draw as they enter.',
      rm='Everything drawn; no pause pin.', vh='150vh', pin=50),
 dict(id='s3', n='03', name='Capabilities chain reaction', sheet='A-04', desk='<img src="refs/sb-chain.jpg" alt="Desktop capabilities sheet: one etched mechanism in five stages lit by a copper pulse, stage messages and services beneath, Products and Innovation below">', phone=ph(PH_CHAIN, 'Capabilities chain reaction'),
      copy='“Better tools. Stronger capabilities.” Five stages, each with its message, service name and David’s service line. Each stage links to its service page.',
      enter='Sheet pins. The drawing pans left one stage per screen; the copper pulse runs ahead along the conduit; on arrival the lamp lights, copper parts fill in, the stage’s small loop runs once (gears, cables, conveyor, chart, reply), and its copy writes in.',
      scroll='Pinned 550vh on desktop: 100vh per stage, then 50vh as the camera pulls back to the whole mechanism. Earlier stages stay lit.', back='Fully scrubbed: the pulse runs backward and stages switch off in reverse order.',
      phone_note='No pin. Five stacked stage cards; a copper line runs down the left edge and lights each card as it reaches the middle of the screen. The whole mechanism closes the section.',
      rm='Finished composition with all five lit, then the five stages as a list. A “Skip the sequence” link sits before the pin for keyboard and screen-reader users.', vh='550vh', pin=550),
 dict(id='s4', n='04', name='How we work: the redraft', sheet='A-03', desk='<img src="refs/sb-redraft.jpg" alt="Desktop redraft: the same building with one verdigris integration line, a revision table A to D and a sand approval stamp">', phone=ph(PH_REDRAFT, 'How we work'),
      copy='Revision steps A Discover, B Architect, C Build, D Validate, with “You approve” at B and D. Headline “Rev D. One operation.” is draft copy for David to confirm.',
      enter='Pins. The as-built hero drawing returns; scroll wipes it into the redrafted drawing along the scan line (same camera, so only the systems change). Each revision row inks in as the wipe passes; the sand stamp lands at D.',
      scroll='Pinned 200vh desktop, 120vh phone.', back='The wipe reverses exactly and the stamp lifts off.',
      phone_note='Drawing on top, revision table below; the wipe runs on a shorter pin.', rm='Two still drawings, before and after, with the table.', vh='200vh', pin=200),
 dict(id='s5', n='05', name='Industries', sheet='I-01 to I-04', desk=DW_IND, phone=ph(PH_IND, 'Industries'),
      copy='The four industries and pages that exist today: manufacturing, wholesale and logistics; mortgage and insurance; HVAC, energy and home improvement; financial, professional services and non-profits. Copy comes from those pages.',
      enter='Tab row of cells. Choosing a tab relabels the drawing and moves the parts that differ; the copy column swaps with a 240ms crossfade.',
      scroll='Not pinned.', back='No scroll effects to reverse.',
      phone_note='Four rows that link straight to the industry pages; no drawing swap.', rm='Instant swap, no movement.', vh='100vh', pin=0),
 dict(id='s6', n='06', name='General notes and assurance', sheet='Notes', desk=DW_NOTES, phone=ph(PH_NOTES, 'General notes'),
      copy='Numbered notes on how we work (copy to be written from the current About page and confirmed), plus two facts already on the site: based in the Greater Toronto Area, and a reply within one business day.',
      enter='Notes ink in line by line, 60ms apart.', scroll='Not pinned.', back='Stays drawn.', phone_note='Single column.', rm='Drawn at once.', vh='100vh', pin=0),
 dict(id='s7', n='07', name='Products &amp; Innovation', sheet='A-04 (foot)', desk='<img src="refs/sb-chain.jpg" alt="Products and Innovation block at the foot of the capabilities sheet" style="object-fit:cover;object-position:bottom;aspect-ratio:16/5">', phone=ph(PH_PROD, 'Products and Innovation'),
      copy='“Our own products are taking shape. More to share soon.” and “Coming soon.” Kept as its own block.',
      enter='Pencilled placeholder sheets draw in dashed lines; the sand stamp lands.', scroll='Not pinned.', back='Stays drawn.', phone_note='Same block, stacked.', rm='Drawn at once.', vh='60vh', pin=0),
 dict(id='s8', n='08', name='Project brief', sheet='Drawing request', desk=DW_BRIEF, phone=ph(PH_BRIEF, 'Project brief'),
      copy='“Tell us what’s holding your business back.” (the current contact page headline), the brief fields, “Plan Your Modernization”, reply within one business day, hello@ai-alchemy.ca.',
      enter='The page changes to kraft paper. Field rules draw left to right; nothing else moves.', scroll='Not pinned.', back='No effect.',
      phone_note='One field per row, large targets, native inputs.', rm='No rule drawing.', vh='120vh', pin=0),
 dict(id='s9', n='09', name='Footer', sheet='A-99', desk=DW_FOOT, phone=ph(PH_FOOT, 'Footer'),
      copy='Title block with contact, GTA trust line and sitemap; the wordmark in construction lines.', enter='Construction lines draw, then the wordmark fills once.', scroll='Not pinned.', back='Stays drawn.',
      phone_note='Wordmark on top, title block as a two-column grid.', rm='Drawn at once.', vh='100vh', pin=0),
]
# scroll timeline svg
tot = sum(int(s['vh'][:-2]) for s in SECTIONS); x = 0; tl = []
for i, s in enumerate(SECTIONS):
    w = int(s['vh'][:-2]) / tot * 1000
    pw = s['pin'] / int(s['vh'][:-2]) * w
    tl.append(f'<g><rect x="{x:.1f}" y="20" width="{w:.1f}" height="44" fill="#E9E2D3" stroke="#1C2026" stroke-width="1"/><rect x="{x:.1f}" y="20" width="{pw:.1f}" height="44" fill="#B5703F" fill-opacity=".85" stroke="#1C2026" stroke-width="1"/>'
              + (f'<text x="{x + 6:.1f}" y="47" font-family="IBM Plex Mono,monospace" font-size="11" fill="{"#F2EDE3" if s["pin"] else "#1C2026"}">{s["n"]}</text>') + f'<text x="{x + 4:.1f}" y="82" font-family="IBM Plex Mono,monospace" font-size="10" fill="#5B5F63">{s["vh"]}</text></g>')
    x += w
TIMELINE = f'<svg viewBox="0 0 1000 96" role="img" aria-label="Scroll length of each homepage section on desktop, {tot} viewport heights in total; copper marks pinned sections">' + ''.join(tl) + '</svg>'

sb = []
for s in SECTIONS:
    sb.append(f'''<article class="sb" id="{s['id']}">
  <header><span class="mono">{s['n']} · SHEET {s['sheet']}</span><h3>{s['name']}</h3><span class="mono len">{s['vh']} desktop{' · pinned ' + str(s['pin']) + 'vh' if s['pin'] else ''}</span></header>
  <div class="sb-grid"><figure class="sb-d">{s['desk']}<figcaption>Desktop, 1440</figcaption></figure><figure class="sb-p">{s['phone']}<figcaption>Phone, 390</figcaption></figure>
  <dl><dt>Content</dt><dd>{s['copy']}</dd><dt>On entry</dt><dd>{s['enter']}</dd><dt>Scroll</dt><dd>{s['scroll']}</dd><dt>Reverse scroll</dt><dd>{s['back']}</dd><dt>Phone</dt><dd>{s['phone_note']}</dd><dt>Reduced motion</dt><dd>{s['rm']}</dd></dl></div>
</article>''')
STORY = '\n'.join(sb)

page = open(os.path.join(HERE, 'template.html')).read()
for k, v in {'{{COLOR_TABLE}}': COLOR_TABLE, '{{TYPE}}': TYPE_HTML, '{{SPACE}}': SPACE_HTML, '{{STORY}}': STORY, '{{TIMELINE}}': TIMELINE, '{{TOTVH}}': str(tot), '{{ONACTION}}': f'{on_action:.1f}'}.items():
    page = page.replace(k, v)
open(os.path.join(HERE, 'index.html'), 'w').write(page)
print('index.html written', len(page))
