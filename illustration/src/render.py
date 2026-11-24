"""
Render previews of the illustration SVGs with headless Chrome over HTTP (fonts load from /fonts).

Usage: python3 illustration/src/render.py [set]      sets: check, all
Needs a static server on the repository root: python3 -m http.server 8164 --bind 127.0.0.1
"""
import os
import re
import subprocess
import sys

ROOT = os.path.abspath(os.path.join(os.path.dirname(__file__), ".."))
REPO = os.path.abspath(os.path.join(ROOT, ".."))
HARNESS = os.path.join(ROOT, "previews", ".harness")
CHROME = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
PORT = int(os.environ.get("IA_PORT", "8164"))

GROUND = {"paper": "#F2EDE3", "kraft": "#DED0B6", "night": "#1C2026"}

FONTS = """
@font-face{font-family:"JetBrains Mono";src:url(/fonts/jetbrains-mono.woff2) format("woff2");font-weight:400 600}
@font-face{font-family:"Newsreader";src:url(/fonts/newsreader.woff2) format("woff2");font-weight:380 560}
"""


def harness(svg_rel, name, px_w, px_h, theme="paper", state="default", lw=1.0, view=None, links=None, hide=()):
    src = open(os.path.join(ROOT, svg_rel)).read()
    src = src.split("?>", 1)[1] if src.startswith("<?xml") else src
    if view:
        src = re.sub(r'viewBox="[^"]+"', 'viewBox="%s"' % " ".join(str(v) for v in view), src, count=1)
    src = re.sub(r'(<svg[^>]*?) width="[^"]+" height="[^"]+"', r"\1", src, count=1)
    if theme == "night":
        src = src.replace('class="ia"', 'class="ia" data-ia-theme="night"', 1)
    if state == "active":
        src = re.sub(r'(class="ia-scene"[^>]*?)data-state="default"', r'\1data-state="active"', src)
        src = re.sub(r'(id="ia-link-[^"]+" class="ia-link" data-state=")proposed', r"\1active", src)
    if links:
        src = re.sub(r'(id="ia-link-[^"]+" class="ia-link" data-state=")proposed', r"\1" + links, src)
    for h in hide:
        src = src.replace('id="%s"' % h, 'id="%s" style="display:none"' % h)
    html = ("<!doctype html><html><head><meta charset=utf-8><style>%s html,body{margin:0;background:%s;overflow:hidden}"
            "svg{display:block;width:%dpx;height:%dpx;--ia-lw:%s}</style></head><body>%s</body></html>"
            % (FONTS, GROUND["night" if theme == "night" else theme], px_w, px_h, lw, src))
    os.makedirs(HARNESS, exist_ok=True)
    path = os.path.join(HARNESS, name + ".html")
    with open(path, "w") as f:
        f.write(html)
    return "http://127.0.0.1:%d/illustration/previews/.harness/%s.html" % (PORT, name)


def shoot(url, out, w, h, dpr=1):
    os.makedirs(os.path.dirname(out), exist_ok=True)
    subprocess.run([CHROME, "--headless=new", "--disable-gpu", "--hide-scrollbars", "--force-color-profile=srgb",
                    "--window-size=%d,%d" % (w, h), "--force-device-scale-factor=%s" % dpr,
                    "--virtual-time-budget=4000", "--screenshot=" + out, url],
                   check=True, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)


def job(svg_rel, out_name, w, h, dpr=1, **kw):
    url = harness(svg_rel, out_name, w, h, **kw)
    out = os.path.join(ROOT, "previews", out_name + ".png")
    shoot(url, out, w, h, dpr)
    print("rendered", os.path.relpath(out, REPO))


SCENE_FILES = ["scene-1-disconnected", "scene-2-strategy", "scene-3-software", "scene-4-ai", "scene-5-cloud"]


def run(which):
    import json
    cams = json.load(open(os.path.join(ROOT, "anchors.json")))["cameras"]
    if which in ("check", "all", "master"):
        job("svg/master.svg", "master-paper", 2112, 1320, lw=2.4)
    if which in ("check", "all"):
        for f in SCENE_FILES:
            job("svg/scenes/%s.svg" % f, f + "-paper", 1760, 1100)
    if which == "zoom":
        for i, f in enumerate(SCENE_FILES):
            vb = cams[f.split("-", 2)[2]]["viewBox"]
            for q, (dx, dy) in enumerate(((0.25, 0.25), (0.5, 0.45))):
                v = [vb[0] + vb[2] * dx - 440 + (vb[2] * 0.0), vb[1] + vb[3] * dy - 275, 880, 550]
                job("svg/scenes/%s.svg" % f, "zoom200-%s-%d" % (f, q), 1760, 1100, view=v)
    if which in ("all", "portrait"):
        for f in SCENE_FILES:
            vb = cams[f.split("-", 2)[2]]["portrait_viewBox"]
            job("svg/scenes/%s.svg" % f, f + "-portrait", 640, 800, view=vb, lw=2.0,
                hide=("ia-titles",) + tuple("ia-s%d-notes" % i for i in range(1, 6)))
    if which == "all":
        job("svg/master.svg", "master-full-1x", 5280, 3300)
        job("svg/master.svg", "master-night", 2112, 1320, lw=2.4, theme="night")
        job("svg/master.svg", "master-night-active", 2112, 1320, lw=2.4, theme="night", state="active")
        job("svg/master.svg", "master-paper-active", 2112, 1320, lw=2.4, state="active")
        for f in SCENE_FILES:
            job("svg/scenes/%s.svg" % f, f + "-paper-active", 1760, 1100, state="active")
            job("svg/scenes/%s.svg" % f, f + "-night", 1760, 1100, theme="night")
            job("svg/scenes/%s.svg" % f, f + "-night-active", 1760, 1100, theme="night", state="active")


if __name__ == "__main__":
    run(sys.argv[1] if len(sys.argv) > 1 else "check")


def library():
    import json
    comps = json.load(open(os.path.join(ROOT, "components.json")))["components"]
    cells = []
    for c in comps:
        src = open(os.path.join(ROOT, c["file"])).read().split("?>", 1)[1]
        src = re.sub(r'(<svg[^>]*?) width="[^"]+" height="[^"]+"', r"\1", src, count=1)
        cells.append('<figure><div class="art">%s</div><figcaption><b>%s</b><span>%s</span></figcaption></figure>'
                     % (src, c["name"], ("scene %s" % c["scene"]) if c["scene"] else "shared"))
    cols, cw, ch = 5, 400, 360
    rows = (len(cells) + cols - 1) // cols
    W, H = cols * cw + 120, rows * ch + 220
    html = ("<!doctype html><html><head><meta charset=utf-8><style>%s"
            "html,body{margin:0;background:#F2EDE3;color:#1C2026;font-family:'JetBrains Mono',monospace}"
            "h1{font:420 44px Newsreader,serif;margin:60px 60px 6px;letter-spacing:-.015em}"
            "p{margin:0 60px 30px;font-size:12px;letter-spacing:.12em;color:#4C525A}"
            ".grid{display:grid;grid-template-columns:repeat(%d,%dpx);grid-auto-rows:%dpx;margin:0 60px;border-top:1px solid rgba(28,32,38,.25);border-left:1px solid rgba(28,32,38,.25)}"
            "figure{margin:0;border-right:1px solid rgba(28,32,38,.25);border-bottom:1px solid rgba(28,32,38,.25);display:flex;flex-direction:column}"
            ".art{flex:1;display:flex;align-items:center;justify-content:center;padding:18px;min-height:0}"
            ".art svg{max-width:100%%;max-height:100%%;width:auto;height:auto}"
            "figcaption{display:flex;justify-content:space-between;padding:10px 14px;font-size:11px;letter-spacing:.1em;text-transform:uppercase;border-top:1px dashed rgba(28,32,38,.25)}"
            "figcaption span{color:#4C525A}</style></head><body><h1>Component library</h1>"
            "<p>AI ALCHEMY ILLUSTRATION FOUNDRY  ·  %d COMPONENTS  ·  ONE ISOMETRIC SYSTEM  ·  SCALED TO FIT EACH CELL</p>"
            "<div class=grid>%s</div></body></html>" % (FONTS, cols, cw, ch, len(cells), "".join(cells)))
    os.makedirs(HARNESS, exist_ok=True)
    with open(os.path.join(HARNESS, "library.html"), "w") as f:
        f.write(html)
    out = os.path.join(ROOT, "previews", "component-library.png")
    shoot("http://127.0.0.1:%d/illustration/previews/.harness/library.html" % PORT, out, W, H)
    print("rendered", os.path.relpath(out, REPO))


if __name__ == "__main__" and len(sys.argv) > 1 and sys.argv[1] == "library":
    library()
