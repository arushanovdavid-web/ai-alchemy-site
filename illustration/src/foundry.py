"""
AI Alchemy illustration foundry: the master composition and everything extracted from it.

Run:  python3 illustration/src/foundry.py
Writes illustration/svg/master.svg, illustration/svg/scenes/*.svg, illustration/svg/components/*.svg,
illustration/anchors.json. No animation logic is written into any file.
"""
import json
import math
import os
import sys

sys.path.insert(0, os.path.dirname(__file__))
from iso import (CTX, C, S, K, P, _ell, n, pt, el, g, esc, polygon, polyline, line, lines, box, box_wire, prism,
                 shadow, rect_shadow, ellipse, arc, arc_d, circ_pt, front_range, cylinder, tube, iso_text,
                 offset_polyline, chamfer, d_poly, track, untrack, vec, hull)

ROOT = os.path.abspath(os.path.join(os.path.dirname(__file__), ".."))
VERSION = "1.1.0"

W, H = 5280, 3300          # master canvas, user units
OX, OY = 900, 700          # screen position of world origin (0, 0, 0)
ZONE_DX = 1000             # zone centres sit at x = 1000 * (k - 1), y = 0
CAM_W, CAM_H = 1760, 1100  # scene camera (16:10)

SCENES = [
    (1, "disconnected", "Disconnected business systems"),
    (2, "strategy", "Strategy & Architecture"),
    (3, "software", "Software & Modernization"),
    (4, "ai", "AI & Automation"),
    (5, "cloud", "Cloud & Data Infrastructure"),
]

ANCHORS = []
N_STRANDS, GAP = 7, 7.0


def anchor(aid, scene, role, x, y, z=0.0, note=""):
    sx, sy = P(x, y, z)
    ANCHORS.append({"id": aid, "scene": scene, "role": role, "world": [x, y, z],
                    "master": [round(sx, 2), round(sy, 2)], "note": note})
    return el("circle", {"id": "ia-anchor-" + aid.replace(".", "-"), "cls": "ia-anchor", "cx": n(sx), "cy": n(sy), "r": "3",
                          "data-anchor": aid, "data-role": role})


# ======================================================================= style

STYLE = """
.ia{--ia-ink:#1C2026;--ia-ink-2:#4C525A;--ia-hair:rgba(28,32,38,.36);--ia-top:#FBF9F4;--ia-left:#ECE6D9;--ia-right:#DDD4C2;
--ia-recess:#C8BEA9;--ia-sh:rgba(28,32,38,.075);--ia-dot:rgba(28,32,38,.22);--ia-active:#1F6B5C;--ia-signal:#D06C40;
--ia-approve:#9A6F12;--ia-ground:#F2EDE3;--ia-lw:1;
--ia-deep:#2A2F36;--ia-deep-2:#3A4047;--ia-deep-3:#22262C;--ia-glass:#2E3840;--ia-ring:#F7F3EA;--ia-slab-t:#F6F2EA;
--ia-mono:"JetBrains Mono",ui-monospace,SFMono-Regular,Menlo,monospace;--ia-serif:"Newsreader",Georgia,"Times New Roman",serif}
.ia[data-ia-theme=night],[data-ia-theme=night] .ia{--ia-ink:#EAE4D8;--ia-ink-2:#AEB2B8;--ia-hair:rgba(242,237,227,.30);
--ia-top:#2F353D;--ia-left:#272C33;--ia-right:#21252B;--ia-recess:#14171B;--ia-sh:rgba(0,0,0,.24);--ia-dot:rgba(242,237,227,.15);
--ia-active:#4FA391;--ia-signal:#E39A72;--ia-approve:#E2B04A;--ia-ground:#1C2026;
--ia-deep:#0F1114;--ia-deep-2:#16191D;--ia-deep-3:#0B0D0F;--ia-glass:#0C1216;--ia-ring:#E6DFD1;--ia-slab-t:#262B31}
.ia .f-t{fill:var(--ia-top)}.ia .f-l{fill:var(--ia-left)}.ia .f-r{fill:var(--ia-right)}.ia .f-rec{fill:var(--ia-recess)}
.ia .f-g{fill:var(--ia-ground)}
.ia .f-t-d{fill:var(--ia-deep-2)}.ia .f-l-d{fill:var(--ia-deep)}.ia .f-r-d{fill:var(--ia-deep-3)}.ia .f-deep{fill:var(--ia-deep)}
.ia .f-slab{fill:var(--ia-slab-t)}.ia .glass{fill:var(--ia-glass)}
.ia .sheen{fill:none;stroke:var(--ia-ring);stroke-linecap:round}.ia .f-ring{fill:var(--ia-ring)}
.ia .dl{fill:none;stroke:var(--ia-ring);stroke-opacity:.55;stroke-width:calc(.62px*var(--ia-lw));stroke-linecap:round}
.ia .t-iso-l{font-size:7.5px;font-weight:600;letter-spacing:.12em;fill:var(--ia-ring);fill-opacity:.8}
.ia .in-glass .strand{stroke:var(--ia-ring);stroke-opacity:.75}.ia .in-glass .h{stroke:var(--ia-ring);stroke-opacity:.35}
.ia .in-glass .w-h{stroke:var(--ia-ring);stroke-opacity:.45}.ia .in-glass .ia-core:not(.x){fill:var(--ia-ring)}.ia .in-glass .e-i{stroke:var(--ia-deep-3)}
.ia .in-glass .e-o{stroke:var(--ia-deep-3)}
.ia [data-state=active] .in-glass .ia-lead{stroke:var(--ia-active);stroke-opacity:1}
.ia [data-state=active] .in-glass .ia-core:not(.x){fill:var(--ia-signal)}
.ia .pat-perf-d{fill:var(--ia-top);fill-opacity:.42}.ia .hv{fill:url(#ia-hv)}.ia .sh{fill:var(--ia-sh)}.ia .poche{fill:var(--ia-ink)}
.ia .f-ink{fill:var(--ia-ink)}.ia .f-hair{fill:var(--ia-hair)}
.ia .e-o,.ia .e-i,.ia .d,.ia .h,.ia .w-v,.ia .w-h,.ia .cl,.ia .dim,.ia .strand,.ia .ldr,.ia .ia-link,.ia .rule{fill:none;stroke-linecap:round;stroke-linejoin:round}
.ia .e-o{stroke:var(--ia-ink);stroke-width:calc(1.45px*var(--ia-lw))}
.ia .e-i{stroke:var(--ia-ink);stroke-width:calc(.8px*var(--ia-lw))}
.ia .d{stroke:var(--ia-ink);stroke-width:calc(.62px*var(--ia-lw))}
.ia .h{stroke:var(--ia-hair);stroke-width:calc(.5px*var(--ia-lw))}
.ia .w-v{stroke:var(--ia-ink);stroke-width:calc(.85px*var(--ia-lw))}
.ia .w-h{stroke:var(--ia-ink-2);stroke-width:calc(.6px*var(--ia-lw));stroke-dasharray:4 3}
.ia .cl{stroke:var(--ia-ink-2);stroke-width:calc(.55px*var(--ia-lw));stroke-dasharray:24 4 3 4}
.ia .dim{stroke:var(--ia-ink-2);stroke-width:calc(.6px*var(--ia-lw))}
.ia .ldr{stroke:var(--ia-ink-2);stroke-width:calc(.65px*var(--ia-lw))}
.ia .rule{stroke:var(--ia-ink);stroke-width:calc(.8px*var(--ia-lw))}
.ia .strand{stroke:var(--ia-ink);stroke-width:calc(.72px*var(--ia-lw))}
.ia .strand.edge{stroke-width:calc(1.15px*var(--ia-lw))}
.ia .ia-link{stroke:var(--ia-ink-2);stroke-width:calc(.9px*var(--ia-lw));stroke-dasharray:7 5}
.ia .ia-link[data-state=built]{stroke:var(--ia-ink);stroke-dasharray:none}
.ia .ia-link[data-state=active]{stroke:var(--ia-active);stroke-dasharray:none;stroke-width:calc(1.5px*var(--ia-lw))}
.ia .ia-link[data-state=off]{visibility:hidden}
.ia .dot{fill:var(--ia-ink-2)}
.ia .ia-lamp{fill:var(--ia-top);stroke:var(--ia-ink);stroke-width:calc(.6px*var(--ia-lw))}
.ia .ia-core{fill:var(--ia-top)}
.ia .ia-gold{fill:var(--ia-recess)}
.ia .ia-term{fill:var(--ia-ink)}
.ia .ia-open{fill:var(--ia-top);stroke:var(--ia-ink);stroke-width:calc(.8px*var(--ia-lw))}
.ia [data-state=active] .ia-lead{stroke:var(--ia-active);stroke-width:calc(1.6px*var(--ia-lw))}
.ia [data-state=active] .ia-lamp{fill:var(--ia-signal)}
.ia [data-state=active] .ia-core{fill:var(--ia-signal)}
.ia [data-state=active] .ia-gold{fill:var(--ia-approve)}
.ia [data-state=active] .ia-term{fill:var(--ia-signal)}
.ia [data-state=active] .ia-open{stroke:var(--ia-signal);fill:var(--ia-top)}
.ia [data-state=active] .ia-ring{stroke:var(--ia-active)}
.ia .ia-ring{fill:none;stroke:var(--ia-ink);stroke-linecap:butt}
.ia .ia-anchor{fill:none;stroke:none}
.ia text{font-family:var(--ia-mono);fill:var(--ia-ink-2)}
.ia .t-note{font-size:calc(12.5px*var(--ia-type,1));font-weight:500;letter-spacing:.09em}
.ia .t-iso{font-size:10px;font-weight:600;letter-spacing:.14em;fill:var(--ia-ink)}
.ia .t-iso-s{font-size:7.5px;font-weight:600;letter-spacing:.12em;fill:var(--ia-ink-2)}
.ia .t-bub{font-family:var(--ia-serif);font-size:15px;fill:var(--ia-ink);text-anchor:middle}
.ia .t-title{font-family:var(--ia-serif);font-size:calc(34px*var(--ia-type,1));font-weight:420;letter-spacing:-.012em;fill:var(--ia-ink)}
.ia .t-num{font-family:var(--ia-serif);font-size:calc(21px*var(--ia-type,1));fill:var(--ia-ink);text-anchor:middle}
.ia .t-sub{font-size:calc(11px*var(--ia-type,1));font-weight:500;letter-spacing:.14em}
.ia .t-sheet{font-size:calc(13px*var(--ia-type,1));font-weight:600;letter-spacing:.12em;fill:var(--ia-ink)}
.ia .t-big{font-family:var(--ia-serif);font-size:calc(44px*var(--ia-type,1));font-weight:420;letter-spacing:-.015em;fill:var(--ia-ink)}
.ia .pat-hv{stroke:var(--ia-hair);stroke-width:.5}.ia .pat-dot{fill:var(--ia-dot);r:calc(1.15px*var(--ia-lw))}
.ia .pat-perf{fill:var(--ia-ink);fill-opacity:.5}
.ia .ia-notes[hidden],.ia .ia-sheet[hidden]{display:none}
"""


def defs():
    hv = el("pattern", {"id": "ia-hv", "width": "3.2", "height": "12", "patternUnits": "userSpaceOnUse"},
            el("path", {"d": "M1.6 0V12", "cls": "pat-hv"}))
    dl = 2 * 40 * C
    dots = el("pattern", {"id": "ia-dots", "width": n(dl), "height": "40", "patternUnits": "userSpaceOnUse",
                          "patternTransform": "translate(%s %s)" % (n(OX), n(OY))},
              "".join(el("circle", {"cx": n(x), "cy": n(y), "r": "1.15", "cls": "pat-dot"})
                      for x, y in ((0, 0), (dl, 0), (0, 40), (dl, 40), (dl / 2, 20))))
    perf_l = el("pattern", {"id": "ia-perf-l", "width": "5", "height": "5", "patternUnits": "userSpaceOnUse",
                            "patternTransform": "matrix(%s %s 0 1 0 0)" % (n(C), n(S))},
                el("circle", {"cx": "2.5", "cy": "2.5", "r": ".85", "cls": "pat-perf"}))
    perf_ld = el("pattern", {"id": "ia-perf-ld", "width": "5", "height": "5", "patternUnits": "userSpaceOnUse",
                             "patternTransform": "matrix(%s %s 0 1 0 0)" % (n(C), n(S))},
                 el("circle", {"cx": "2.5", "cy": "2.5", "r": ".8", "cls": "pat-perf-d"}))
    perf_t = el("pattern", {"id": "ia-perf-t", "width": "6", "height": "6", "patternUnits": "userSpaceOnUse",
                            "patternTransform": "matrix(%s %s %s %s 0 0)" % (n(C), n(S), n(-C), n(S))},
                el("circle", {"cx": "3", "cy": "3", "r": ".8", "cls": "pat-perf"}))
    return el("defs", None, [hv, dots, perf_l, perf_ld, perf_t])


# ======================================================================= shared helpers


def bundle_paths(route, n_str=N_STRANDS, gap=GAP, z=0.0, lead=True, pl=True):
    """Parallel strands along a plan route. Returns markup; middle strand is the lead."""
    out = []
    mid = (n_str - 1) / 2
    for i in range(n_str):
        off = (i - mid) * gap
        pts = offset_polyline(route, off)
        cls = "strand"
        if i in (0, n_str - 1):
            cls += " edge"
        if lead and i == int(mid):
            cls += " ia-lead"
        out.append(el("path", {"cls": cls, "d": d_poly([P(x, y, z) for x, y in pts], False),
                               "pl": "1" if pl else None, "data-strand": str(i)}))
    return "".join(out)


def clamps_x(x_list, y=0.0, n_str=N_STRANDS, gap=GAP):
    half = (n_str - 1) / 2 * gap + 5
    return "".join(box(x - 3, y - half, 0, 6, 2 * half, 4, hatch=False) for x in x_list)


def clamp_y(x, y, n_str=3, gap=6.0):
    half = (n_str - 1) / 2 * gap + 4
    return box(x - half, y - 3, 0, 2 * half, 6, 4, hatch=False)


def note(p3, text, side="r", L=64, ang=58, nid=None, lines_=None):
    x, y = P(*p3)
    sgn = 1 if side == "r" else -1
    ex = x + math.cos(math.radians(ang)) * L * sgn
    ey = y - math.sin(math.radians(ang)) * L
    sx = ex + 16 * sgn
    tx = sx + 6 * sgn
    parts = [el("path", {"cls": "ldr", "d": "M%sL%sL%s" % (pt((x, y)), pt((ex, ey)), pt((sx, ey)))}),
             el("circle", {"cls": "dot", "cx": n(x), "cy": n(y), "r": "2.1"})]
    txt = [text] + (lines_ or [])
    for i, t in enumerate(txt):
        parts.append(el("text", {"cls": "t-note", "x": n(tx), "y": n(ey + 4.3 + i * 16),
                                 "text-anchor": "end" if side == "l" else None,
                                 "style": "fill:var(--ia-ink)" if i == 0 else None}, esc(t)))
    return g(parts, nid, "ia-note")


def detail_title(x, y, num, title, sub):
    parts = [
        el("circle", {"cls": "e-i", "cx": n(x), "cy": n(y), "r": "19"}),
        el("text", {"cls": "t-num", "x": n(x), "y": n(y + 7)}, str(num)),
        el("text", {"cls": "t-title", "x": n(x + 34), "y": n(y + 11)}, esc(title)),
        el("path", {"cls": "rule", "d": "M%s,%sH%s" % (n(x + 34), n(y + 26), n(x + 34 + max(300, len(title) * 15.6)))}),
        el("text", {"cls": "t-sub", "x": n(x + 34), "y": n(y + 45)}, esc(sub)),
    ]
    return g(parts, None, "ia-title")


def plug(x, y, axis="x", tone=""):
    """Open terminal at the end of a stub (disconnected)."""
    if axis == "x":
        b = box(x, y - 13, 0, 10, 26, 9, hatch=False)
        sock = [ellipse((x + 10, yy, 4.5), "x", 2.6, "ia-open") for yy in (y - 6, y, y + 6)]
    else:
        b = box(x - 13, y, 0, 26, 10, 9, hatch=False)
        sock = [ellipse((xx, y + 10, 4.5), "y", 2.6, "ia-open") for xx in (x - 6, x, x + 6)]
    return b + "".join(sock)


def stub(route, axis):
    """Three-strand stub cable ending in an open plug."""
    out = [bundle_paths(route, 3, 6.0, lead=False, pl=True)]
    ex, ey = route[-1]
    out.append(plug(ex, ey, axis))
    return "".join(out)


def plinth(x0, y0, w, d, h=12, reveal=4, inset=7):
    """Plinth that floats on a recessed deep reveal (architectural shadow gap)."""
    return (box(x0 + inset, y0 + inset, 0, w - 2 * inset, d - 2 * inset, reveal, tone="-d", hatch=False, sil=False)
            + box(x0, y0, reveal, w, d, h - reveal))


def duct(p0, p1, z=0.0, hw=11, lead=True):
    """Shallow covered duct between two plan points (axis-aligned), three strands inside."""
    (x0, y0), (x1, y1) = p0, p1
    if abs(x1 - x0) >= abs(y1 - y0):
        quad = [(min(x0, x1), y0 - hw, z), (max(x0, x1), y0 - hw, z), (max(x0, x1), y0 + hw, z), (min(x0, x1), y0 + hw, z)]
        st = [((x0, y0 + k, z), (x1, y0 + k, z)) for k in (-6, 0, 6)]
    else:
        quad = [(x0 - hw, min(y0, y1), z), (x0 + hw, min(y0, y1), z), (x0 + hw, max(y0, y1), z), (x0 - hw, max(y0, y1), z)]
        st = [((x0 + k, y0, z), (x0 + k, y1, z)) for k in (-6, 0, 6)]
    out = [polygon(quad, "f-rec"), polyline(quad, "e-i", close=True)]
    for i, (a, b) in enumerate(st):
        out.append(line(a, b, "strand" + (" ia-lead" if (lead and i == 1) else ""), pl="1"))
    return "".join(out)


def corner_marks(x0, y0, x1, y1, L=18, cls="d"):
    segs = []
    for (cx, cy, sx, sy) in ((x0, y0, 1, 1), (x1, y0, -1, 1), (x1, y1, -1, -1), (x0, y1, 1, -1)):
        segs += [((cx, cy, 0), (cx + sx * L, cy, 0)), ((cx, cy, 0), (cx, cy + sy * L, 0))]
    return lines(segs, cls)


# ======================================================================= scene 1: disconnected


def c_spreadsheets(x0, y0):
    out = [plinth(x0, y0, 200, 160)]
    offs = [(0, 0), (7, 5), (2, 10), (10, 6), (4, 12), (13, 9), (18, 14)]
    for i, (ox_, oy_) in enumerate(offs):
        out.append(box(x0 + 16 + ox_, y0 + 14 + oy_, 12 + i * 3.5, 140, 106, 3.5, hatch=False))
    tx, ty, tz = x0 + 16 + offs[-1][0], y0 + 14 + offs[-1][1], 12 + len(offs) * 3.5
    # top sheet: header band, row-number column, cells
    hdr = polygon([(tx, ty, tz), (tx + 140, ty, tz), (tx + 140, ty + 11, tz), (tx, ty + 11, tz)], "f-hair")
    col = polygon([(tx, ty, tz), (tx + 16, ty, tz), (tx + 16, ty + 106, tz), (tx, ty + 106, tz)], "f-hair")
    segs = []
    for cx in range(16, 140, 19):
        segs.append(((tx + cx, ty, tz), (tx + cx, ty + 106, tz)))
    for cy in range(11, 106, 9):
        segs.append(((tx, ty + cy, tz), (tx + 140, ty + cy, tz)))
    fills = []
    for (ci, ri) in ((1, 2), (2, 2), (3, 2), (1, 4), (4, 5), (5, 5), (2, 7), (3, 8), (6, 3)):
        ux, uy = tx + 16 + (ci - 1) * 19, ty + 11 + (ri - 1) * 9
        fills.append(polygon([(ux, uy, tz), (ux + 19, uy, tz), (ux + 19, uy + 9, tz), (ux, uy + 9, tz)], "f-ink",
                             **{"fill-opacity": ".55"}))
    # a cell under selection: heavier outline
    ux, uy = tx + 16 + 3 * 19, ty + 11 + 6 * 9
    sel = polyline([(ux, uy, tz), (ux + 38, uy, tz), (ux + 38, uy + 18, tz), (ux, uy + 18, tz)], "e-o", close=True)
    out += [hdr, col, lines(segs, "h"), "".join(fills), sel]
    out.append(iso_text("S-01  SHEETS", (x0 + 8, y0 + 160, 5.4), "face-l", "t-iso-s"))
    return "".join(out)


def c_pigeonhole(x0, y0):
    out = [plinth(x0, y0, 200, 150)]
    bx, by, bz, bw, bd, bh = x0 + 20, y0 + 20, 12, 160, 100, 150
    out.append(box(bx, by, bz, bw, bd, bh))
    fy = by + bd
    cols, rows, m, gp = 4, 3, 9, 6
    cw = (bw - 2 * m - (cols - 1) * gp) / cols
    ch = (bh - 2 * m - (rows - 1) * gp) / rows
    depth = 14
    for r in range(rows):
        for c in range(cols):
            u0 = bx + m + c * (cw + gp)
            v1 = bz + bh - m - r * (ch + gp)
            v0 = v1 - ch
            cell = [(u0, fy, v0), (u0 + cw, fy, v0), (u0 + cw, fy, v1), (u0, fy, v1)]
            out.append(polygon(cell, "f-deep"))
            # visible floor and left wall of the cell, clipped to the opening. On a +y face a recess of depth d
            # projects exactly to a shift of (+d along x, +d along z) in face coordinates.
            e = min(depth, cw * 0.45)
            out.append(polygon([(u0, fy, v0), (u0 + cw, fy, v0), (u0 + cw, fy, v0 + e), (u0 + e, fy, v0 + e)], "f-t"))
            out.append(polygon([(u0, fy, v0), (u0 + e, fy, v0 + e), (u0 + e, fy, v1), (u0, fy, v1)], "f-l"))
            out.append(lines([((u0, fy, v0), (u0 + e, fy, v0 + e)), ((u0 + e, fy, v0 + e), (u0 + cw, fy, v0 + e)), ((u0 + e, fy, v0 + e), (u0 + e, fy, v1))], "h"))
            # letters standing in some cells
            k = (r * 7 + c * 3) % 5
            if k in (0, 2, 3):
                for j in range(k % 3 + 1):
                    lu = u0 + e + 3 + j * 5
                    lw_ = cw - e - 8 - j * 5
                    lh = v0 + e + (ch - e) * (0.5 + 0.12 * j)
                    out.append(polygon([(lu, fy, v0 + e), (lu + lw_, fy, v0 + e), (lu + lw_, fy, lh), (lu, fy, lh)], "f-t"))
                    out.append(polyline([(lu, fy, v0 + e), (lu, fy, lh), (lu + lw_, fy, lh), (lu + lw_, fy, v0 + e)], "d"))
            out.append(polyline(cell, "e-i", close=True))
    # a loose stack of letters on top
    for j in range(3):
        out.append(box(bx + 26 + j * 5, by + 22 + j * 4, bz + bh + j * 2.2, 62, 40, 2.2, hatch=False))
    out.append(iso_text("S-02  MAIL", (x0 + 8, y0 + 150, 5.4), "face-l", "t-iso-s"))
    return "".join(out)


def c_filing(x0, y0):
    out = [plinth(x0, y0, 160, 200)]
    cx, cy, cz, cw, cd, chh = x0 + 20, y0 + 20, 12, 110, 160, 196
    out.append(box(cx, cy, cz, cw, cd, chh))
    fx = cx + cw
    m, gp = 9, 6
    dh = (chh - 2 * m - 3 * gp) / 4
    open_i = 1
    drawers = []
    for i in range(4):
        v1 = cz + chh - m - i * (dh + gp)
        v0 = v1 - dh
        drawers.append((v0, v1))
        if i == open_i:
            out.append(polygon([(fx, cy + 8, v0), (fx, cy + cd - 8, v0), (fx, cy + cd - 8, v1), (fx, cy + 8, v1)], "f-deep"))
            continue
        out.append(polyline([(fx, cy + 8, v0), (fx, cy + cd - 8, v0), (fx, cy + cd - 8, v1), (fx, cy + 8, v1)], "e-i", close=True))
        # label holder and pull
        mid = cy + cd / 2
        out.append(polyline([(fx, mid - 16, v1 - 7), (fx, mid + 16, v1 - 7), (fx, mid + 16, v1 - 15), (fx, mid - 16, v1 - 15)], "d", close=True))
        out.append(box(fx, mid - 22, v0 + dh * 0.38, 4, 44, 4, hatch=False))
    # the open drawer, pulled 64 toward +x, with standing folders
    v0, v1 = drawers[open_i]
    dx0, dy0, dd = fx, cy + 10, cd - 20
    pull = 64
    out.append(box(dx0, dy0, v0 + 1, pull, dd, dh - 2, top=False, hatch=True))
    out.append(polygon([(dx0, dy0, v1 - 1), (dx0 + pull, dy0, v1 - 1), (dx0 + pull, dy0 + dd, v1 - 1), (dx0, dy0 + dd, v1 - 1)], "f-deep"))
    for j, fxj in enumerate(range(8, pull - 4, 7)):
        xx = dx0 + fxj
        tab = dy0 + 14 + (j * 23) % (dd - 46)
        top = v1 + 5
        out.append(polygon([(xx, dy0 + 3, v1 - 1), (xx, dy0 + dd - 3, v1 - 1), (xx, dy0 + dd - 3, top), (xx, dy0 + 3, top)], "f-r"))
        out.append(polygon([(xx, tab, top), (xx, tab + 22, top), (xx, tab + 22, top + 6), (xx, tab, top + 6)], "f-t"))
        out.append(polyline([(xx, dy0 + 3, top), (xx, tab, top), (xx, tab, top + 6), (xx, tab + 22, top + 6), (xx, tab + 22, top), (xx, dy0 + dd - 3, top)], "d"))
    # drawer front last
    fxx = dx0 + pull
    out.append(polygon([(fxx, dy0 - 2, v0), (fxx, dy0 + dd + 2, v0), (fxx, dy0 + dd + 2, v1), (fxx, dy0 - 2, v1)], "f-r"))
    out.append(polygon([(fxx, dy0 - 2, v0), (fxx, dy0 + dd + 2, v0), (fxx, dy0 + dd + 2, v1), (fxx, dy0 - 2, v1)], "hv"))
    out.append(polyline([(fxx, dy0 - 2, v0), (fxx, dy0 + dd + 2, v0), (fxx, dy0 + dd + 2, v1), (fxx, dy0 - 2, v1)], "e-o", close=True))
    mid = dy0 + dd / 2
    out.append(box(fxx, mid - 22, v0 + dh * 0.38, 4, 44, 4, hatch=False))
    out.append(iso_text("S-03  FORMS", (x0 + 8, y0 + 200, 5.4), "face-l", "t-iso-s"))
    return "".join(out)


def c_mainframe(x0, y0):
    out = [plinth(x0, y0, 240, 180)]
    bx, by, bz, bw, bd, bh = x0 + 20, y0 + 20, 12, 200, 120, 222
    out.append(box(bx, by, bz, bw, bd, bh))
    fy = by + bd
    # door seam
    out.append(line((bx + bw / 2, fy, bz + 4), (bx + bw / 2, fy, bz + bh - 4), "e-i"))
    # reel window
    win = [(bx + 12, fy, bz + 104), (bx + bw - 12, fy, bz + 104), (bx + bw - 12, fy, bz + 206), (bx + 12, fy, bz + 206)]
    out.append(polygon(win, "f-deep"))
    out.append(polyline(win, "e-i", close=True))
    for ux in (bx + 52, bx + 148):
        c3 = (ux, fy, bz + 155)
        out.append(ellipse(c3, "y", 38, "f-l"))
        out.append(ellipse(c3, "y", 38, "e-i"))
        out.append(ellipse(c3, "y", 31, "h"))
        out.append(ellipse(c3, "y", 24, "h"))
        out.append(ellipse(c3, "y", 11, "f-t"))
        out.append(ellipse(c3, "y", 11, "d"))
        for k in range(3):
            t = math.radians(90 + k * 120)
            p0 = circ_pt(c3, "y", 11, t)
            p1 = circ_pt(c3, "y", 24, t)
            out.append(line(p0, p1, "d"))
        out.append(ellipse(c3, "y", 3, "f-ink"))
    # indicator row
    for i in range(9):
        out.append(ellipse((bx + 28 + i * 18, fy, bz + 88), "y", 3.4, "ia-lamp"))
    out.append(line((bx + 18, fy, bz + 78), (bx + bw - 18, fy, bz + 78), "h"))
    # vents
    segs = []
    for half in (0, 1):
        u0 = bx + 16 + half * (bw / 2)
        for k in range(10):
            v = bz + 18 + k * 5
            segs.append(((u0, fy, v), (u0 + bw / 2 - 32, fy, v)))
    out.append(lines(segs, "d"))
    # side vents on +x face
    fx = bx + bw
    segs = [((fx, by + 14 + k * 6, bz + 140), (fx, by + 14 + k * 6, bz + 200)) for k in range(16)]
    out.append(lines(segs, "d"))
    out.append(iso_text("S-04  LEGACY", (x0 + 8, y0 + 180, 5.4), "face-l", "t-iso-s"))
    return "".join(out)


def scene1():
    gnd, obj = [], []
    # shadows
    gnd.append(rect_shadow(-330, -300, 200, 160, 26))
    gnd.append(rect_shadow(80, -300, 160, 100, 165))
    gnd.append(rect_shadow(-320, 100, 110, 160, 210))
    gnd.append(rect_shadow(80, 100, 200, 120, 236))
    # proposed links from each stub to the collector (scene 2). They live here so they occlude correctly.
    L = []
    routes = {
        "spreadsheets": [(-200, -100), (-200, -15), (606, -15)],
        "mail": [(200, -126), (200, -45), (606, -45)],
        "forms": [(-128, 140), (-90, 140), (-90, 15), (606, 15)],
        "legacy": [(352, 150), (400, 150), (400, 45), (606, 45)],
    }
    for k, r in routes.items():
        pts = chamfer(r, 22)
        L.append(el("path", {"id": "ia-link-" + k, "cls": "ia-link", "data-state": "proposed",
                             "data-from": "s1.%s.out" % k, "data-to": "s2.collector.in.%s" % k,
                             "d": d_poly([P(x, y, 0) for x, y in pts], False)}))
    gnd.append(g(L, "ia-s1-links", "ia-links"))
    # stubs
    S_ = []
    S_.append(g(stub([(-200, -140), (-200, -100)], "y"), "ia-s1-stub-spreadsheets", "ia-stub"))
    S_.append(g(stub([(200, -170), (200, -126)], "y"), "ia-s1-stub-mail", "ia-stub"))
    S_.append(g(stub([(-180, 140), (-138, 140)], "x"), "ia-s1-stub-forms", "ia-stub"))
    S_.append(g(stub([(300, 150), (342, 150)], "x"), "ia-s1-stub-legacy", "ia-stub"))
    gnd.append(g(S_, "ia-s1-stubs"))
    # objects back to front
    obj.append(g(c_spreadsheets(-330, -300), "ia-s1-spreadsheets", "ia-component", **{"data-component": "spreadsheet-stack"}))
    obj.append(g(c_pigeonhole(60, -320), "ia-s1-mail", "ia-component", **{"data-component": "mail-pigeonhole"}))
    obj.append(g(c_filing(-340, 80), "ia-s1-forms", "ia-component", **{"data-component": "filing-cabinet"}))
    obj.append(g(c_mainframe(60, 80), "ia-s1-legacy", "ia-component", **{"data-component": "legacy-mainframe"}))
    anc = [
        anchor("s1.spreadsheets.out", 1, "out", -200, -100, 4.5),
        anchor("s1.mail.out", 1, "out", 200, -126, 4.5),
        anchor("s1.forms.out", 1, "out", -128, 140, 4.5),
        anchor("s1.legacy.out", 1, "out", 352, 150, 4.5),
        anchor("s1.centre", 1, "camera", 0, 0, 80),
    ]
    notes = [
        note((-290, -236, 30), "Spreadsheets", "l", L=92, ang=40),
        note((160, -255, 180), "Email threads", "r", L=60, ang=60),
        note((-260, 180, 210), "Paper forms", "l", L=64, ang=60),
        note((280, 200, 150), "Legacy software", "r", L=60, ang=-30),
        note((-200, -100, 6), "Open end", "l", L=40, ang=-50),
    ]
    return gnd, obj, anc, notes


# ======================================================================= scene 2: strategy


def c_collector(x0, y0):
    out = [box(x0 - 20, y0 - 20, 0, 100, 200, 8, hatch=False)]
    bx, by, bz, bw, bd, bh = x0, y0, 8, 60, 160, 64
    out.append(box(bx, by, bz, bw, bd, bh, tone="-d", hatch=False))
    fx = bx + bw
    for i, yy in enumerate((-45, -15, 15, 45)):
        out.append(ellipse((fx, y0 + 80 + yy, bz + 44), "x", 4.2, "ia-lamp"))
        out.append(iso_text(str(i + 1), (fx, y0 + 80 + yy + 3, bz + 30), "face-r", "t-iso-l"))
    segs = [((fx, by + 10, bz + 10 + k * 4), (fx, by + bd - 10, bz + 10 + k * 4)) for k in range(4)]
    out.append(lines(segs, "dl"))
    # glands on top for the four incoming lines
    for yy in (-45, -15, 15, 45):
        out.append(cylinder(bx + 18, y0 + 80 + yy, bz + bh, 6, 7, hatch=False))
    out.append(iso_text("C-01  COLLECTOR", (bx + 4, by + bd, bz + 54), "face-l", "t-iso-l"))
    return "".join(out)


def c_plate(x0, y0):
    """Drafting plate: plinth, plan poche on the top face, grid, rulers."""
    w, d, h = 520, 340, 16
    out = [box(x0, y0, 0, w, d, h)]
    z = h + 0.01
    # sheet border
    out.append(polyline([(x0 + 12, y0 + 12, z), (x0 + w - 12, y0 + 12, z), (x0 + w - 12, y0 + d - 12, z), (x0 + 12, y0 + d - 12, z)], "h", close=True))
    gx = [840, 960, 1080, 1200]
    gy = [-400, -300, -200]
    segs = [((x, y0 + 14, z), (x, y0 + d - 14, z)) for x in gx] + [((x0 + 14, y, z), (x0 + w - 14, y, z)) for y in gy]
    out.append(lines(segs, "cl"))
    out.append(mini_plan(z))
    # title block on the plate
    tb = [(1150, -186, z), (1266, -186, z), (1266, -114, z), (1150, -114, z)]
    out.append(polyline(tb, "d", close=True))
    out.append(lines([((1150, -162, z), (1266, -162, z)), ((1150, -138, z), (1266, -138, z)), ((1208, -138, z), (1208, -114, z))], "h"))
    out.append(iso_text("PLAN", (1156, -170, z), "top-x", "t-iso-s"))
    out.append(iso_text("S-02", (1156, -146, z), "top-x", "t-iso-s"))
    return "".join(out)


MP_S = 0.104


def _mp(X, Y):
    """Map a site-plan point onto the drafting plate (scale 1:9.6)."""
    return (806 + (X - 560) * MP_S, -262 + (Y + 45) * MP_S)


def mini_plan(z):
    """The plan of the whole system, drawn on the strategy plate: site outline in poche, spine, footprints."""
    out = []
    pts = [_mp(x, y) for x, y in SITE]
    out.append(polygon([(x, y, z) for x, y in pts], "f-g"))
    out.append(el("path", {"cls": "e-o", "d": d_poly([P(x, y, z) for x, y in pts]), "style": "stroke-width:calc(2.6px*var(--ia-lw))"}))
    a, b = _mp(700, 0), _mp(4600, 0)
    out.append(line((a[0], a[1], z), (b[0], b[1], z), "e-i"))
    # footprints of what each scene will hold
    rects = [(600, -100, 100, 200), (760, -440, 520, 340), (1950, -70, 300, 140), (3300, 150, 40, 46), (3660, -330, 600, 560),
             (3700, -290, 416, 96), (3700, -110, 416, 96)]
    for (x0, y0, w, d) in rects:
        p0, p1 = _mp(x0, y0), _mp(x0 + w, y0 + d)
        out.append(polyline([(p0[0], p0[1], z), (p1[0], p0[1], z), (p1[0], p1[1], z), (p0[0], p1[1], z)], "d", close=True))
    for (cx, cy, r) in ((3000, 0, 300), (3000, 0, 124), (3790, 140, 46), (3910, 140, 46), (4030, 140, 46), (4600, 0, 46)):
        c = _mp(cx, cy)
        out.append(ellipse((c[0], c[1], z), "z", r * MP_S, "d"))
    c = _mp(3000, 0)
    out.append(ellipse((c[0], c[1], z), "z", 124 * MP_S, "poche"))
    return "".join(out)


def _wire_cyl(cx, cy, z0, z1, r, hidden=True):
    out = []
    t0, t1 = front_range("z")
    out.append(arc((cx, cy, z0), "z", r, t0, t1, "w-v"))
    if hidden:
        out.append(arc((cx, cy, z0), "z", r, t1, t0 + 2 * math.pi, "w-h"))
    out.append(ellipse((cx, cy, z1), "z", r, "w-v"))
    for t in (math.radians(135), math.radians(-45)):
        out.append(line(circ_pt((cx, cy, z0), "z", r, t), circ_pt((cx, cy, z1), "z", r, t), "w-v"))
    return "".join(out)


def c_massing():
    """Study models on the plate: the rack (scene 3) and the core (scene 4) at 1:3."""
    z = 16
    out = [box_wire(830, -420, z, 100, 47, 42)]
    s3 = 1 / 3.0
    cx, cy = 1150, -372
    for (r, a, b) in ((124, 0, 24), (92, 24, 94), (84, 94, 316), (96, 316, 332), (62, 332, 352)):
        out.append(_wire_cyl(cx, cy, z + a * s3, z + b * s3, r * s3, hidden=(r == 124)))
    out.append(line((cx, cy, z), (cx, cy, z + 110 * s3 + 30), "w-h"))
    return "".join(out)


def c_scale_rule(x0, x1, y0, z):
    """Triangular scale rule lying along x."""
    wy, hz = 24, 20.8
    a = (y0, z)
    b = (y0 + wy, z)
    c = (y0 + wy / 2, z + hz)
    out = []
    front = [(x0, b[0], b[1]), (x1, b[0], b[1]), (x1, c[0], c[1]), (x0, c[0], c[1])]
    out.append(polygon(front, "f-l"))
    end = [(x1, a[0], a[1]), (x1, b[0], b[1]), (x1, c[0], c[1])]
    out.append(polygon(end, "f-r"))
    # tick marks on the front face
    segs = []
    k = 0
    xx = x0 + 8
    while xx < x1 - 4:
        L = 0.42 if k % 5 == 0 else 0.22
        if k % 10 == 0:
            L = 0.6
        p0 = (xx, b[0], b[1])
        p1 = (xx, b[0] + (c[0] - b[0]) * L, b[1] + (c[1] - b[1]) * L)
        segs.append((p0, p1))
        xx += 4
        k += 1
    out.append(lines(segs, "h"))
    out.append(line((x0, c[0], c[1]), (x1, c[0], c[1]), "e-i"))
    sil = [P(x0, a[0], a[1]), P(x0, c[0], c[1]), P(x1, c[0], c[1]), P(x1, a[0], a[1]), P(x1, b[0], b[1]), P(x0, b[0], b[1])]
    out.append(el("path", {"cls": "e-o", "d": d_poly(hull(sil))}))
    return "".join(out)


def c_set_square(z):
    tri = [(1066, -190), (1136, -190), (1066, -122)]
    out = [prism(tri, z, 2.5, hatch=False)]
    inner = [(1078, -180), (1112, -180), (1078, -146)]
    out.append(polygon([(x, y, z + 2.5) for x, y in inner], "f-g"))
    out.append(polyline([(x, y, z + 2.5) for x, y in inner], "d", close=True))
    return "".join(out)


def c_survey(cx, cy):
    """Survey station: tripod, head, instrument, plumb line to a ground mark."""
    zh = 138
    out = []
    feet = [(cx + 62 * math.cos(math.radians(a)), cy + 62 * math.sin(math.radians(a))) for a in (200, 320, 80)]
    # ground mark
    out.append(ellipse((cx, cy, 0), "z", 14, "d"))
    out.append(lines([((cx - 22, cy, 0), (cx + 22, cy, 0)), ((cx, cy - 22, 0), (cx, cy + 22, 0))], "d"))
    out.append(line((cx, cy, 0), (cx, cy, zh - 4), "w-h"))
    # back legs first (by depth), then head, then front leg
    order = sorted(feet, key=lambda f: f[0] + f[1])
    legs = []
    for fx, fy in order:
        legs.append(tube((fx, fy, 0), (cx + (fx - cx) * 0.12, cy + (fy - cy) * 0.12, zh), 2.4, cap=False))
        legs.append(box(fx - 3, fy - 3, 0, 6, 6, 3, hatch=False))
    out += legs[:4]
    out.append(cylinder(cx, cy, zh, 17, 7))
    out.append(box(cx - 11, cy - 9, zh + 7, 22, 18, 24))
    out.append(cylinder(cx, cy, zh + 31, 7, 6, hatch=False))
    out.append(tube((cx - 18, cy - 2, zh + 46), (cx + 26, cy - 2, zh + 46), 5.5))
    out.append(box(cx - 6, cy - 9, zh + 37, 12, 4, 14, hatch=False))
    out += legs[4:]
    return "".join(out)


def scene2():
    gnd, obj = [], []
    gnd.append(rect_shadow(760, -440, 520, 340, 18))
    gnd.append(rect_shadow(600, -100, 100, 200, 72))
    # structural grid carried onto the ground, bubbles, dimension string
    gx = [840, 960, 1080, 1200]
    segs = [((x, -100, 0), (x, 158, 0)) for x in gx]
    gnd.append(lines(segs, "cl"))
    rows = [-400, -300, -200]
    gnd.append(lines([((1280, y, 0), (1338, y, 0)) for y in rows], "cl"))
    bub = []
    for x, lab in zip(gx, "ABCD"):
        bub.append(ellipse((x, 176, 0), "z", 15, "f-g"))
        bub.append(ellipse((x, 176, 0), "z", 15, "e-i"))
        sx, sy = P(x, 176, 0)
        bub.append(el("text", {"cls": "t-bub", "x": n(sx), "y": n(sy + 5)}, lab))
    for y, lab in zip(rows, "123"):
        bub.append(ellipse((1356, y, 0), "z", 15, "f-g"))
        bub.append(ellipse((1356, y, 0), "z", 15, "e-i"))
        sx, sy = P(1356, y, 0)
        bub.append(el("text", {"cls": "t-bub", "x": n(sx), "y": n(sy + 5)}, lab))
    gnd.append(g(bub, "ia-s2-grid-bubbles"))
    dy = 118
    dim = [((832, dy, 0), (1208, dy, 0))]
    for x in gx:
        dim.append(((x - 6, dy + 6, 0), (x + 6, dy - 6, 0)))
        dim.append(((x, dy - 12, 0), (x, dy + 12, 0)))
    gnd.append(lines(dim, "dim"))
    for a, b in zip(gx[:-1], gx[1:]):
        gnd.append(iso_text("EQ", ((a + b) / 2 - 7, dy - 5, 0), "top-x", "t-iso-s"))
    # the spine leaves the collector
    gnd.append(g(bundle_paths([(690, 0), (1500, 0)]), "ia-spine-s2", "ia-spine", **{"data-from": "s2.collector.out", "data-to": "spine.j23"}))
    gnd.append(clamps_x([760, 900, 1040, 1180, 1320, 1460]))
    obj.append(g(c_collector(620, -80), "ia-s2-collector", "ia-component", **{"data-component": "collector"}))
    obj.append(g([c_plate(760, -440), c_massing(), c_scale_rule(800, 1036, -150, 16.01), c_set_square(16.01)],
                 "ia-s2-plate", "ia-component", **{"data-component": "drafting-plate"}))
    obj.append(g(c_survey(690, 268), "ia-s2-survey", "ia-component", **{"data-component": "survey-station"}))
    anc = [
        anchor("s2.collector.in.mail", 2, "in", 606, -45, 0),
        anchor("s2.collector.in.spreadsheets", 2, "in", 606, -15, 0),
        anchor("s2.collector.in.forms", 2, "in", 606, 15, 0),
        anchor("s2.collector.in.legacy", 2, "in", 606, 45, 0),
        anchor("s2.collector.out", 2, "out", 700, 0, 0),
        anchor("s2.plate.centre", 2, "focus", 1020, -270, 16),
        anchor("s2.survey.head", 2, "focus", 690, 268, 184),
        anchor("spine.j23", 2, "junction", 1500, 0, 0, "spine hand-off from scene 2 to scene 3"),
        anchor("s2.centre", 2, "camera", 1000, 0, 80),
    ]
    notes = [
        note((650, 0, 72), "Collector", "r", L=105, ang=72, lines_=["Four inputs, one line"]),
        note((1172, -372, 104), "Target architecture", "r", L=70, ang=40, lines_=["Plan of the system, core at 1:3"]),
        note((690, 268, 120), "Survey of current systems", "l", L=86, ang=-38),
        note((1212, 190, 0), "Structural grid", "r", L=48, ang=-32),
    ]
    return gnd, obj, anc, notes


# ======================================================================= scene 3: software


def c_module(x, y, z, w=60, d=110, h=48, label="M", lamp=True, side=False, built=False):
    tone, dc, tc = ("-d", "dl", "t-iso-l") if built else ("", "d", "t-iso-s")
    out = [box(x, y, z, w, d, h, tone=tone, hatch=not built)]
    fy = y + d
    # vent slot group and lamp on the +y face
    segs = [((x + 8 + k * 4, fy, z + 12), (x + 8 + k * 4, fy, z + h - 12)) for k in range(6)]
    out.append(lines(segs, dc))
    out.append(polyline([(x + 38, fy, z + h - 10), (x + w - 6, fy, z + h - 10), (x + w - 6, fy, z + h - 22), (x + 38, fy, z + h - 22)], dc, close=True))
    if lamp:
        out.append(ellipse((x + 44, fy, z + 12), "y", 3.2, "ia-lamp"))
    out.append(iso_text(label, (x + 40, fy, z + h - 12.5), "face-l", tc))
    if side or built:
        fx = x + w
        segs = [((fx, y + 10, z + 8 + k * 6), (fx, y + d - 10, z + 8 + k * 6)) for k in range(6)]
        out.append(lines(segs, dc))
    return "".join(out)


def c_rack(x0=1950, y0=-70):
    out = [box(x0, y0, 0, 300, 140, 10)]
    bays = 4
    bw = 70
    xs = [x0 + 10 + i * bw for i in range(bays + 1)]
    lv = [10, 66, 122]
    post = 5
    # back posts and the back and left top rails
    for x in xs:
        out.append(box(x - post / 2, y0 + 8, 10, post, post, 122, hatch=False))
    out.append(polygon([(x0 + 8, y0 + 13, 10), (x0 + 292, y0 + 13, 10), (x0 + 292, y0 + 13, 122), (x0 + 8, y0 + 13, 122)], "f-deep"))
    out.append(lines([((x, y0 + 13, 20), (x, y0 + 13, 112)) for x in range(int(x0) + 20, int(x0) + 290, 10)], "h"))
    out.append(box(x0 + 8, y0 + 8, lv[2], 284, 5, 4, hatch=False))
    out.append(box(x0 + 8, y0 + 8, lv[2], 5, 124, 4, hatch=False))
    n_mod = 0
    for li, z in enumerate(lv[:2]):
        out.append(box(x0 + 8, y0 + 8, z, 284, 124, 3, hatch=False))
        for i in range(bays):
            if li == 1 and i == 2:
                # the empty bay: guide rails only
                gx0 = xs[i] + 6
                out.append(lines([((gx0, y0 + 14, z + 3), (gx0 + 58, y0 + 14, z + 3)), ((gx0, y0 + 126, z + 3), (gx0 + 58, y0 + 126, z + 3))], "d"))
                continue
            n_mod += 1
            if li == 1 and i == 3:
                continue  # M7 is nearer than the empty bay: drawn in c_rack_front, after the hoist
            out.append(c_module(xs[i] + 5, y0 + 14, z + 3, w=60, d=112, h=50, label="M%d" % n_mod, side=(i == bays - 1)))
    out.append(iso_text("R-03  MODULE RACK", (x0 + 6, y0 + 140, 2), "face-l", "t-iso-s"))
    return "".join(out)


def c_rack_front(x0=1950, y0=-70):
    """Front frame of the rack, drawn after the hoist so a seated module sits behind the posts."""
    out = []
    post = 5
    xs = [x0 + 10 + i * 70 for i in range(5)]
    out.append(c_module(xs[3] + 5, y0 + 14, 69, w=60, d=112, h=50, label="M7", side=True))
    for x in xs:
        out.append(box(x - post / 2, y0 + 127, 10, post, post, 116, hatch=False))
    out.append(box(x0 + 287, y0 + 8, 122, 5, 124, 4, hatch=False))
    out.append(box(x0 + 8, y0 + 127, 122, 284, 5, 4, hatch=False))
    return "".join(out)


def c_junction(x=2266):
    """Junction box straddling the spine, with a three-strand riser that feeds each rack level."""
    out = [box(x, -34, 0, 22, 84, 14, tone="-d", hatch=False)]
    out.append(iso_text("J-03", (x + 22, 30, 4), "face-r", "t-iso-l"))
    # riser: up the junction's front, then into the rack's right end at both levels
    for k, yy in enumerate((30, 36, 42)):
        cls = "strand" + (" ia-lead" if k == 1 else "")
        pts = [P(x + 2, yy, 14), P(x + 2, yy, 122), P(2244, yy, 122)]
        out.append(el("path", {"cls": cls, "d": d_poly(pts, False), "pl": "1"}))
        for zl in (40, 96):
            out.append(line((x + 2, yy, zl), (2244, yy, zl), "strand", pl="1"))
    for zl in (40, 96, 122):
        out.append(box(x - 3, 24, zl - 3, 8, 24, 6, hatch=False))
    return "".join(out)


def c_gantry_back(xc=2135):
    out = []
    out.append(box(xc - 20, -306, 10, 40, 26, 16, hatch=False))
    out.append(box(xc - 8, -300, 26, 16, 14, 300))
    return "".join(out)


def c_gantry_beam(xc=2135):
    out = []
    zb = 326
    out.append(box(xc - 16, -306, zb, 32, 586, 26))
    # flange lines and stiffeners on the +x face (I-beam reading)
    fx = xc + 16
    out.append(lines([((fx, -306, zb + 5), (fx, 280, zb + 5)), ((fx, -306, zb + 21), (fx, 280, zb + 21))], "d"))
    out.append(lines([((fx, y, zb + 5), (fx, y, zb + 21)) for y in range(-280, 280, 40)], "h"))
    out.append(iso_text("SWL  GANTRY G-03", (fx, 250, zb + 9), "face-r", "t-iso-s"))
    return "".join(out)


def c_gantry_front(xc=2135):
    out = []
    out.append(box(xc - 20, 254, 10, 40, 26, 16, hatch=False))
    out.append(box(xc - 8, 260, 26, 16, 14, 300))
    return "".join(out)


def c_hoist(xc=2135):
    out = []
    mx, my, mz = xc - 30, -56, 214   # hanging module; the empty bay is x 2100..2170, upper level
    out.append(g(line((xc, 0, mz - 4), (xc, 0, 128), "w-h"), "ia-s3-drop-line", "ia-guide"))
    out.append(g(box(xc - 14, -42, 302, 28, 56, 24), "ia-s3-trolley"))
    out.append(g(lines([((xc - 6, -20, 302), (mx + 18, my + 56, mz + 50)), ((xc + 6, -10, 302), (mx + 42, my + 56, mz + 50))], "e-i"),
                 "ia-s3-hoist-lines"))
    out.append(g([box(mx + 10, my + 46, mz + 50, 40, 20, 4, hatch=False), c_module(mx, my, mz, w=60, d=112, h=50, label="M8", built=True)],
                 "ia-s3-module-new", "ia-component", **{"data-component": "module"}))
    return "".join(out)


def c_rails():
    out = []
    for y in (-300, 260):
        out.append(box(1890, y, 0, 500, 14, 10, hatch=False))
        out.append(lines([((x, y + 3, 10), (x, y + 11, 10)) for x in range(1910, 2390, 40)], "d"))
        out.append(box(1884, y - 3, 0, 8, 20, 18, hatch=False))
        out.append(box(2388, y - 3, 0, 8, 20, 18, hatch=False))
    return "".join(out)


def c_ghost():
    """Legacy core to be replaced: drawn as a dashed demolition outline."""
    x, y, z, w, d, h = 1704, -64, 0, 150, 128, 170
    out = [box_wire(x, y, z, w, d, h, cls_v="w-h", cls_h="w-h")]
    fy = y + d
    out.append(lines([((x, fy, z), (x + w, fy, z + h)), ((x, fy, z + h), (x + w, fy, z))], "h"))
    return "".join(out)


def scene3():
    gnd, obj = [], []
    gnd.append(rect_shadow(1950, -70, 300, 140, 128))
    gnd.append(rect_shadow(2115, -306, 40, 26, 326))
    gnd.append(rect_shadow(2115, 254, 40, 26, 326))
    gnd.append(g(bundle_paths([(1500, 0), (2500, 0)]), "ia-spine-s3", "ia-spine", **{"data-from": "spine.j23", "data-to": "spine.j34"}))
    mig = chamfer([(1854, 40), (1900, 40), (1900, 84), (1950, 84)], 14)
    gnd.append(el("path", {"id": "ia-link-migration", "cls": "ia-link", "data-state": "proposed",
                           "data-from": "s3.legacy.out", "data-to": "s3.rack.in",
                           "d": d_poly([P(x, y, 0) for x, y in mig], False)}))
    gnd.append(clamps_x([1600, 1900, 2300, 2440]))
    obj.append(g(c_rails(), "ia-s3-rails", "ia-component", **{"data-component": "gantry-rails"}))
    obj.append(g(c_gantry_back(), "ia-s3-gantry-leg-back", "ia-component", **{"data-component": "gantry"}))
    obj.append(g(c_ghost(), "ia-s3-legacy-core", "ia-component", **{"data-component": "legacy-core-outline"}))
    obj.append(g(c_rack(), "ia-s3-rack", "ia-component", **{"data-component": "module-rack"}))
    obj.append(g(c_gantry_front(), "ia-s3-gantry-leg-front", "ia-component", **{"data-component": "gantry"}))
    obj.append(g(c_gantry_beam(), "ia-s3-gantry-beam", "ia-component", **{"data-component": "gantry"}))
    obj.append(g(c_hoist(), "ia-s3-hoist", "ia-component", **{"data-component": "hoist-and-module"}))
    obj.append(g(c_rack_front(), "ia-s3-rack-front", "ia-component", **{"data-component": "module-rack-front"}))
    obj.append(g(c_junction(), "ia-s3-junction", "ia-component", **{"data-component": "junction-riser"}))
    anc = [
        anchor("spine.j23", 3, "junction", 1500, 0, 0, "same point as scene 2's out"),
        anchor("s3.rack.in", 3, "in", 1950, 0, 0),
        anchor("s3.legacy.out", 3, "out", 1854, 40, 0, "proposed data migration from the legacy core"),
        anchor("s3.riser", 3, "focus", 2268, 36, 122),
        anchor("s3.rack.out", 3, "out", 2250, 0, 0),
        anchor("s3.module.hanging", 3, "focus", 2135, 0, 240),
        anchor("s3.module.slot", 3, "target", 2135, 0, 69),
        anchor("spine.j34", 3, "junction", 2500, 0, 0),
        anchor("s3.centre", 3, "camera", 2000, 0, 80),
    ]
    notes = [
        note((1780, 64, 150), "Legacy core", "l", L=62, ang=60, lines_=["To be replaced"]),
        note((2105, 56, 250), "New module", "r", L=120, ang=34),
        note((1990, 70, 60), "Module rack", "l", L=54, ang=-42),
    ]
    return gnd, obj, anc, notes


# ======================================================================= scene 4: AI


def c_platform(cx=3000, cy=0, r=300, h=18):
    out = [cylinder(cx, cy, 0, r, h)]
    z = h + 0.01
    segs = []
    for i in range(120):
        t = math.radians(i * 3)
        r0 = 270 if i % 5 == 0 else 280
        if i % 10 == 0:
            r0 = 262
        segs.append((circ_pt((cx, cy, z), "z", r0, t), circ_pt((cx, cy, z), "z", 290, t)))
    out.append(lines(segs, "h"))
    out.append(ellipse((cx, cy, z), "z", 292, "d"))
    out.append(ellipse((cx, cy, z), "z", 210, "cl"))
    # covered cable trench: the spine crosses the platform through the core
    for xa, xb in ((cx - 288, cx - 64), (cx + 64, cx + 288)):
        out.append(polygon([(xa, -16, z), (xb, -16, z), (xb, 16, z), (xa, 16, z)], "f-l"))
        out.append(lines([((xa, -16, z), (xb, -16, z)), ((xa, 16, z), (xb, 16, z))], "e-i"))
        out.append(lines([((x, -16, z), (x, 16, z)) for x in range(int(xa) + 28, int(xb), 28)], "d"))
    return "".join(out)


def ring_halves(c3, axis, r, width, dash):
    t0, t1 = front_range(axis)
    back = el("path", {"cls": "ia-ring", "d": arc_d(c3, axis, r, t1, t0 + 2 * math.pi), "pl": "50",
                       "style": "stroke-width:%spx;stroke-dasharray:%s" % (n(width), dash)})
    front = el("path", {"cls": "ia-ring", "d": arc_d(c3, axis, r, t0, t1), "pl": "50",
                        "style": "stroke-width:%spx;stroke-dasharray:%s" % (n(width), dash)})
    return back, front


def ring_segments(c3, axis, r_out, width, n_seg, frac, face_cls):
    """A flat annular gimbal ring cut into segments like the Rings mark. Returns (back, front) markup."""
    back, front = [], []
    u, v = (AXES_[axis])
    r_in = r_out - width
    for i in range(n_seg):
        a0 = 2 * math.pi * i / n_seg + 0.13
        a1 = a0 + 2 * math.pi / n_seg * frac
        steps = 8
        outer = [P(*circ_pt(c3, axis, r_out, a0 + (a1 - a0) * j / steps)) for j in range(steps + 1)]
        inner = [P(*circ_pt(c3, axis, r_in, a1 - (a1 - a0) * j / steps)) for j in range(steps + 1)]
        d = d_poly(outer + inner)
        seg = el("path", {"cls": face_cls, "d": d}) + el("path", {"cls": "e-i", "d": d})
        m = (a0 + a1) / 2
        depth = sum((u[k] * math.cos(m) + v[k] * math.sin(m)) for k in range(3))
        (front if depth > 0 else back).append(seg)
    return "".join(back), "".join(front)


AXES_ = {"z": ((1, 0, 0), (0, 1, 0)), "x": ((0, 1, 0), (0, 0, 1)), "y": ((1, 0, 0), (0, 0, 1))}


CORE = {"dais": (18, 42, 124), "drum": (42, 104, 88), "collar": (104, 112, 98), "glass": (112, 334, 84),
        "cap": (334, 350, 96), "crown": (350, 370, 62), "boss": (370, 378, 18), "sphere_z": 196, "sphere_r": 34}


def _front(axis, th):
    u, v = AXES_[axis]
    return sum(u[k] * math.cos(th) + v[k] * math.sin(th) for k in range(3)) > 0


def _cyl_body_d(cx, cy, z0, z1, r):
    """Outline of an upright cylinder's side (screen-left extreme down, front arc, up, back arc)."""
    tL, tR = math.radians(135), math.radians(-45)
    U, V, rx, ry, ang, det = _ell("z", r)
    sw = 0 if det > 0 else 1
    a = P(*circ_pt((cx, cy, z1), "z", r, tL))
    b = P(*circ_pt((cx, cy, z0), "z", r, tL))
    c = P(*circ_pt((cx, cy, z0), "z", r, tR))
    d = P(*circ_pt((cx, cy, z1), "z", r, tR))
    return ("M%sL%sA%s %s %s 0 %d %s" % (pt(a), pt(b), n(rx), n(ry), n(ang), sw, pt(c))
            + "L%sA%s %s %s 0 %d %s" % (pt(d), n(rx), n(ry), n(ang), sw, pt(a)) + "Z")


def c_core(cx=3000, cy=0):
    """The signature object: the Rings mark held in a glass vessel on a finned base, fed by the spine."""
    out = []
    z0, z1, r = CORE["dais"]
    out.append(cylinder(cx, cy, z0, r, z1 - z0))
    # bolt circle on the dais
    for i in range(24):
        t = 2 * math.pi * i / 24
        out.append(ellipse(circ_pt((cx, cy, z1), "z", 112, t), "z", 2.4, "d"))
    out.append(ellipse((cx, cy, z1), "z", 104, "h"))
    # finned drum
    z0, z1, r = CORE["drum"]
    out.append(cylinder(cx, cy, z0, r, z1 - z0, tone="-d", hatch=False))
    fins = []
    for i in range(40):
        t = 2 * math.pi * i / 40 + 0.04
        if not _front("z", t):
            continue
        quad = [circ_pt((cx, cy, z0 + 6), "z", r - 1, t), circ_pt((cx, cy, z0 + 6), "z", r + 9, t),
                circ_pt((cx, cy, z1 - 4), "z", r + 9, t), circ_pt((cx, cy, z1 - 4), "z", r - 1, t)]
        fins.append((sum(q[0] + q[1] for q in quad), quad))
    fins.sort(key=lambda f: f[0])
    for _, quad in fins:
        out.append(polygon(quad, "f-t"))
        out.append(polyline(quad, "e-i", close=True))
    # collar
    z0, z1, r = CORE["collar"]
    out.append(cylinder(cx, cy, z0, r, z1 - z0, hatch=False))
    # tie rods behind the glass
    rods = [math.radians(a) for a in (0, 90, 180, 270)]
    gz0, gz1, gr = CORE["glass"]
    back_rods = [t for t in rods if not _front("z", t)]
    front_rods = [t for t in rods if _front("z", t)]
    for t in back_rods:
        out.append(tube(circ_pt((cx, cy, gz0), "z", 94, t), circ_pt((cx, cy, gz1), "z", 94, t), 3, cap=False))
    # glass vessel: tinted body, back rims seen through it
    out.append(el("path", {"cls": "glass", "d": _cyl_body_d(cx, cy, gz0, gz1, gr)}))
    t0, t1 = front_range("z")
    inner = []
    inner.append(arc((cx, cy, gz1), "z", gr, t1, t0 + 2 * math.pi, "h"))
    inner.append(arc((cx, cy, gz0), "z", gr, t1, t0 + 2 * math.pi, "h"))
    # faint concentric field lines on the vessel's back wall: the logo's rings, echoed
    for rr_ in (gr - 10,):
        inner.append(arc((cx, cy, gz0 + 10), "z", rr_, t1, t0 + 2 * math.pi, "h"))
    # inside: the spine rises through the base and fans into the core
    zc, R = CORE["sphere_z"], CORE["sphere_r"]
    for i in range(N_STRANDS):
        cls = "strand" + (" ia-lead" if i == 3 else "") + (" edge" if i in (0, 6) else "")
        p0 = P(cx + (i - 3) * 7, cy, gz0)
        p1 = P(cx + (i - 3) * 7, cy, gz0 + 22)
        p2 = P(cx + (i - 3) * 1.6, cy, zc - R + 2)
        inner.append(el("path", {"cls": cls, "d": "M%sL%sL%s" % (pt(p0), pt(p1), pt(p2)), "pl": "1", "data-strand": str(i)}))
    inner.append(line((cx, cy, gz0), (cx, cy, gz1), "w-h"))
    ring_o = ring_segments((cx, cy, zc), "x", 72, 7, 22, 0.64, "f-ring")
    ring_i = ring_segments((cx, cy, zc), "y", 56, 6, 16, 0.62, "f-ring")
    sx, sy = P(cx, cy, zc)
    rr = R * K
    sphere = [
        el("circle", {"cls": "ia-core", "cx": n(sx), "cy": n(sy), "r": n(rr)}),
        el("path", {"cls": "hv", "d": "M%s,%sA%s %s 0 0 1 %s,%sA%s %s 0 0 0 %s,%sZ" % (
            n(sx + rr * math.cos(math.radians(-60))), n(sy + rr * math.sin(math.radians(-60))),
            n(rr), n(rr), n(sx + rr * math.cos(math.radians(150))), n(sy + rr * math.sin(math.radians(150))),
            n(rr * 1.18), n(rr * 1.18), n(sx + rr * math.cos(math.radians(-60))), n(sy + rr * math.sin(math.radians(-60))))}),
        arc((cx, cy, zc), "z", R, front_range("z")[0], front_range("z")[1], "h"),
        el("circle", {"cls": "e-o", "cx": n(sx), "cy": n(sy), "r": n(rr)}),
    ]
    # gimbal pivots on the vertical axle
    piv = [tube((cx, cy, zc + 72), (cx, cy, gz1), 2.2, cap=False), ellipse((cx, cy, zc + 72), "z", 4.5, "f-t"),
           ellipse((cx, cy, zc + 72), "z", 4.5, "e-i")]
    inner += [ring_o[0], ring_i[0], "".join(sphere), ring_i[1], ring_o[1], "".join(piv)]
    out.append(g(inner, "ia-s4-core-vessel", "in-glass"))
    # glass front: sheen, rims, silhouette
    for (a, w, op) in ((156, 3.6, .55), (165, 1.4, .5), (-32, 1.2, .3)):
        t = math.radians(a)
        out.append(el("path", {"cls": "sheen", "d": "M%sL%s" % (pt(P(*circ_pt((cx, cy, gz0 + 16), "z", gr, t))), pt(P(*circ_pt((cx, cy, gz1 - 16), "z", gr, t)))),
                               "style": "stroke-width:%spx;stroke-opacity:%s" % (n(w), op)}))
    out.append(arc((cx, cy, gz0), "z", gr, t0, t1, "e-i"))
    out.append(arc((cx, cy, gz1), "z", gr, t0, t1, "e-i"))
    for t in (math.radians(135), math.radians(-45)):
        out.append(line(circ_pt((cx, cy, gz0), "z", gr, t), circ_pt((cx, cy, gz1), "z", gr, t), "e-o"))
    for t in front_rods:
        out.append(tube(circ_pt((cx, cy, gz0), "z", 94, t), circ_pt((cx, cy, gz1), "z", 94, t), 3, cap=False))
    # cap, ribbed crown, boss
    z0, z1, r = CORE["cap"]
    out.append(cylinder(cx, cy, z0, r, z1 - z0))
    for t in rods:
        out.append(ellipse(circ_pt((cx, cy, z1), "z", 94, t), "z", 3.4, "f-t-d"))
    z0, z1, r = CORE["crown"]
    out.append(cylinder(cx, cy, z0, r, z1 - z0, tone="-d", hatch=False))
    out.append(lines([(circ_pt((cx, cy, z1), "z", 22, 2 * math.pi * i / 16), circ_pt((cx, cy, z1), "z", r - 5, 2 * math.pi * i / 16)) for i in range(16)], "h",
                     style="stroke:var(--ia-top);stroke-opacity:.5"))
    z0, z1, r = CORE["boss"]
    out.append(cylinder(cx, cy, z0, r, z1 - z0, hatch=False))
    out.append(ellipse((cx, cy, z1), "z", 7, "ia-lamp"))
    return "".join(out)


def c_reader(x=3000, y0=162, y1=238, z=18):
    """Reader arch over the belt, wired to the core's dais: the core sees each document as it passes."""
    out = []
    # wiring on the platform, from the arch to the dais (three strands in a shallow duct)
    duct = [(x - 11, y0 - 4, z), (x + 11, y0 - 4, z), (x + 11, 118, z), (x - 11, 118, z)]
    out.append(polygon(duct, "f-rec"))
    out.append(polyline(duct, "e-i", close=True))
    for k in (-6, 0, 6):
        out.append(line((x + k, y0 - 4, z), (x + k, 118, z), "strand" + (" ia-lead" if k == 0 else ""), pl="1"))
    out.append(box(x - 8, y0 - 8, z, 16, 8, 92))
    return "".join(out)


def c_reader_front(x=3000, y0=162, y1=238, z=18):
    out = [box(x - 8, y1, z, 16, 8, 92)]
    out.append(box(x - 10, y0 - 8, z + 92, 20, y1 - y0 + 16, 12))
    # read line on the beam's underside, lit with the scene
    out.append(polygon([(x - 2, y0, z + 92), (x + 2, y0, z + 92), (x + 2, y1, z + 92), (x - 2, y1, z + 92)], "ia-lamp"))
    out.append(iso_text("RD-04", (x + 10, y0 + 6, z + 98), "face-r", "t-iso-s"))
    return "".join(out)


def c_conveyor(x0=2780, x1=3220, y0=172, y1=228, z0=18, h=34):
    out = []
    # legs
    for x in range(int(x0) + 20, int(x1), 110):
        out.append(box(x, y0 + 4, z0, 8, 8, h - 8, hatch=False))
        out.append(box(x, y1 - 12, z0, 8, 8, h - 8, hatch=False))
    out.append(box(x0, y0, z0 + h - 12, x1 - x0, y1 - y0, 12))
    zt = z0 + h
    # rollers: ends on the +y face, belt lines on top
    for x in range(int(x0) + 10, int(x1), 18):
        out.append(ellipse((x, y1, zt - 6), "y", 3.6, "f-t"))
        out.append(ellipse((x, y1, zt - 6), "y", 3.6, "d"))
    out.append(lines([((x, y0 + 4, zt), (x, y1 - 4, zt)) for x in range(int(x0) + 6, int(x1), 9)], "h"))
    # items: unsorted before the core, aligned after it
    for i, x in enumerate(range(int(x0) + 26, 2960, 58)):
        jitter = [(0, 0), (5, -4), (-3, 3)][i % 3]
        for k in range(3):
            out.append(box(x + jitter[0] + k * 2.5, y0 + 12 + jitter[1] + k * 2, zt + k * 2.2, 34, 30, 2.2, hatch=False))
        bx_, by_, tz = x + jitter[0] + 5, y0 + 12 + jitter[1] + 4, zt + 6.6
        out.append(lines([((bx_ + 6, by_ + 6 + j * 6, tz), (bx_ + 26 - (j % 2) * 8, by_ + 6 + j * 6, tz)) for j in range(3)], "h"))
    for x in range(3050, int(x1) - 30, 50):
        for k in range(3):
            out.append(box(x, y0 + 13, zt + k * 2.2, 34, 30, 2.2, hatch=False))
        tz = zt + 6.6
        out.append(lines([((x + 6, y0 + 19 + j * 6, tz), (x + 28 - (j % 2) * 8, y0 + 19 + j * 6, tz)) for j in range(3)], "h"))
    return "".join(out)


def c_gate(x=3236, y=238):
    out = []
    out.append(box(x, y, 18, 18, 18, 104))
    out.append(box(x - 2, y - 2, 18, 22, 22, 8, hatch=False))
    # boom across the belt, striped: approval is gold when active
    bz = 96
    y_from, y_to = 150, y
    out.append(box(x + 4, y_from, bz, 10, y_to - y_from, 8, hatch=False))
    seg = 14
    k = 0
    yy = y_from
    while yy < y_to - 1:
        y2 = min(yy + seg, y_to)
        if k % 2 == 0:
            out.append(polygon([(x + 4, yy, bz + 8), (x + 14, yy, bz + 8), (x + 14, y2, bz + 8), (x + 4, y2, bz + 8)], "ia-gold"))
            out.append(polygon([(x + 14, yy, bz), (x + 14, y2, bz), (x + 14, y2, bz + 8), (x + 14, yy, bz + 8)], "ia-gold"))
        yy = y2
        k += 1
    out.append(polyline([(x + 4, y_from, bz + 8), (x + 14, y_from, bz + 8), (x + 14, y_from, bz), (x + 14, y_to, bz), (x + 14, y_to, bz + 8), (x + 4, y_to, bz + 8)], "e-o", close=True))
    out.append(cylinder(x + 9, y + 9, 122, 7, 6, hatch=False))
    return "".join(out)


def c_console(x=3300, y=150):
    out = [box(x, y, 0, 40, 46, 70)]
    # sloped panel on top
    top = [(x, y, 70), (x + 40, y, 70), (x + 40, y + 46, 84), (x, y + 46, 84)]
    out.append(polygon([(x + 40, y, 70), (x + 40, y + 46, 84), (x + 40, y + 46, 70)], "f-r"))
    out.append(polygon([(x, y + 46, 70), (x + 40, y + 46, 70), (x + 40, y + 46, 84), (x, y + 46, 84)], "f-l"))
    out.append(polygon(top, "f-t"))
    out.append(polyline(top, "e-o", close=True))
    out.append(polyline([(x, y + 46, 70), (x, y + 46, 84)], "e-o"))
    out.append(polyline([(x + 40, y + 46, 70), (x + 40, y + 46, 84), (x + 40, y, 70)], "e-o"))
    # lever with a gold knob
    out.append(tube((x + 20, y + 26, 80), (x + 20, y + 14, 112), 1.8, cap=False))
    sx, sy = P(x + 20, y + 14, 114)
    out.append(el("circle", {"cls": "ia-gold", "cx": n(sx), "cy": n(sy), "r": "6.5"}))
    out.append(el("circle", {"cls": "e-o", "cx": n(sx), "cy": n(sy), "r": "6.5"}))
    for i in range(3):
        out.append(ellipse((x + 8 + i * 9, y + 34, 81.5), "z", 2.2, "ia-lamp"))
    return "".join(out)


def scene4():
    gnd, obj = [], []
    gnd.append(shadow([(3000 + 300 * math.cos(t), 300 * math.sin(t)) for t in [i * math.pi / 18 for i in range(36)]], 18))
    gnd.append(g(bundle_paths([(2500, 0), (3500, 0)]), "ia-spine-s4", "ia-spine", **{"data-from": "spine.j34", "data-to": "spine.j45"}))
    gnd.append(clamps_x([2600, 3400]))
    gnd.append(rect_shadow(3300, 150, 40, 46, 84))
    obj.append(g(c_platform(), "ia-s4-platform", "ia-component", **{"data-component": "platform"}))
    obj.append(g(c_core(), "ia-s4-core", "ia-component", **{"data-component": "gyro-core"}))
    obj.append(g(c_reader(), "ia-s4-reader", "ia-component", **{"data-component": "reader-arch"}))
    obj.append(g(c_conveyor(), "ia-s4-conveyor", "ia-component", **{"data-component": "conveyor"}))
    obj.append(g(c_reader_front(), "ia-s4-reader-front", "ia-component", **{"data-component": "reader-arch"}))
    obj.append(g(c_gate(3168, 238), "ia-s4-gate", "ia-component", **{"data-component": "approval-gate"}))
    obj.append(g(c_console(), "ia-s4-console", "ia-component", **{"data-component": "approval-console"}))
    anc = [
        anchor("spine.j34", 4, "junction", 2500, 0, 0),
        anchor("s4.core", 4, "focus", 3000, 0, 196),
        anchor("s4.core.crown", 4, "focus", 3000, 0, 378),
        anchor("s4.reader", 4, "focus", 3000, 200, 110),
        anchor("s4.conveyor.in", 4, "in", 2780, 200, 52),
        anchor("s4.conveyor.out", 4, "out", 3220, 200, 52),
        anchor("s4.gate", 4, "focus", 3177, 200, 104),
        anchor("s4.console.lever", 4, "focus", 3320, 164, 114),
        anchor("spine.j45", 4, "junction", 3500, 0, 0),
        anchor("s4.centre", 4, "camera", 3000, 0, 80),
    ]
    notes = [
        note((3060, -40, 250), "AI model", "r", L=110, ang=50),
        note((3000, 238, 110), "Reader", "l", L=60, ang=-58),
        note((2840, 228, 60), "Automated steps", "l", L=70, ang=-40),
        note((3320, 164, 116), "Manager approval", "r", L=70, ang=52),
    ]
    return gnd, obj, anc, notes


# ======================================================================= scene 5: cloud & data


def c_floor(x0=3660, y0=-330, w=600, d=560, h=26):
    out = []
    # void under the deck with pedestals, then the deck slab
    fy = y0 + d
    fx = x0 + w
    out.append(polygon([(x0, fy, 0), (fx, fy, 0), (fx, fy, h - 6), (x0, fy, h - 6)], "f-deep"))
    out.append(polygon([(fx, y0, 0), (fx, fy, 0), (fx, fy, h - 6), (fx, y0, h - 6)], "f-deep"))
    for x in range(int(x0) + 20, int(fx), 40):
        out.append(polygon([(x - 1.5, fy, 0), (x + 1.5, fy, 0), (x + 1.5, fy, h - 6), (x - 1.5, fy, h - 6)], "f-l"))
    for y in range(int(y0) + 20, int(fy), 40):
        out.append(polygon([(fx, y - 1.5, 0), (fx, y + 1.5, 0), (fx, y + 1.5, h - 6), (fx, y - 1.5, h - 6)], "f-r"))
    out.append(box(x0, y0, h - 6, w, d, 6, hatch=False))
    z = h + 0.01
    segs = [((x, y0, z), (x, fy, z)) for x in range(int(x0) + 40, int(fx), 40)] + \
           [((x0, y, z), (fx, y, z)) for y in range(int(y0) + 40, int(fy), 40)]
    out.append(lines(segs, "h"))
    # perforated tiles in the cold aisle between the rows
    for x in range(3700, 4100, 40):
        out.append(polygon([(x + 3, -187, z), (x + 37, -187, z), (x + 37, -153, z), (x + 3, -153, z)], "f-g",
                           style="fill:url(#ia-perf-t)"))
    sil = [P(x0, y0, h), P(fx, y0, h), P(fx, y0, 0), P(fx, fy, 0), P(x0, fy, 0), P(x0, fy, h)]
    out.append(el("path", {"cls": "e-o", "d": d_poly(sil)}))
    out.append(line((x0, fy, h - 6), (fx, fy, h - 6), "e-i"))
    out.append(line((fx, fy, h - 6), (fx, y0, h - 6), "e-i"))
    return "".join(out)


def c_cabinet(x, y, z, w=50, d=96, h=212, side=False, idx=0):
    out = [box(x, y, z, w, d, h)]
    fy = y + d
    door = [(x + 5, fy, z + 8), (x + w - 5, fy, z + 8), (x + w - 5, fy, z + h - 22), (x + 5, fy, z + h - 22)]
    out.append(polygon(door, "f-deep"))
    out.append(polygon(door, "f-deep", style="fill:url(#ia-perf-ld)"))
    out.append(polyline(door, "e-i", close=True))
    out.append(line((x + w - 9, fy, z + h * 0.45), (x + w - 9, fy, z + h * 0.6), "e-i"))
    for k in range(2):
        out.append(ellipse((x + 10 + k * 7, fy, z + h - 12), "y", 2, "ia-lamp" if (idx + k) % 3 else "f-t"))
    out.append(lines([((x + 22, fy, z + h - 9 - k * 3.5), (x + w - 8, fy, z + h - 9 - k * 3.5)) for k in range(3)], "h"))
    if side:
        fx = x + w
        out.append(polyline([(fx, y + 8, z + 10), (fx, y + d - 8, z + 10), (fx, y + d - 8, z + h - 10), (fx, y + 8, z + h - 10)], "d", close=True))
    return "".join(out)


def c_row(y, label, x0=3700, n_cab=8, z=26):
    out = []
    for i in range(n_cab):
        out.append(c_cabinet(x0 + i * 52, y, z, side=(i == n_cab - 1), idx=i))
    out.append(iso_text(label, (x0 + 2, y + 96, z + 222), "face-l", "t-iso-s"))
    return "".join(out)


def c_tray(y, x0=3688, x1=4130, z=278):
    out = []
    w = 34
    for x in (x0 - 2, x1 - 6):
        out.append(box(x, y + w / 2 - 4, 26, 8, 8, z - 26, hatch=False))
    out.append(box(x0, y, z, x1 - x0, 4, 7, hatch=False))
    out.append(lines([((x, y + 4, z + 3), (x, y + w - 4, z + 3)) for x in range(int(x0) + 8, int(x1), 16)], "d"))
    out.append(box(x0, y + w - 4, z, x1 - x0, 4, 7, hatch=False))
    # drops into each cabinet top
    for i in range(8):
        cx = 3700 + i * 52 + 25
        out.append(line((cx, y + w / 2, z), (cx, y + w / 2, 238), "h"))
    return "".join(out)


def c_tank(cx, cy, z=26, r=46, h=172):
    out = [cylinder(cx, cy, z, r, h)]
    zt = z + h
    t0, t1 = front_range("z")
    for zz in (z + 38, z + 86, z + 134):
        out.append(arc((cx, cy, zz), "z", r, math.radians(135), math.radians(315), "d"))
    # domed cap: smaller cap cylinder + manway
    out.append(cylinder(cx, cy, zt, r * 0.62, 10, hatch=False))
    out.append(ellipse((cx, cy, zt + 10), "z", 10, "d"))
    # front ladder
    for a in (38, 52):
        t = math.radians(a)
        out.append(line(circ_pt((cx, cy, z + 10), "z", r + 4, t), circ_pt((cx, cy, zt + 4), "z", r + 4, t), "d"))
    for zz in range(int(z) + 18, int(zt), 12):
        out.append(line(circ_pt((cx, cy, zz), "z", r + 4, math.radians(38)), circ_pt((cx, cy, zz), "z", r + 4, math.radians(52)), "h"))
    return "".join(out)


def c_terminal(x, y):
    out = [ellipse((x, y, 0), "z", 46, "h"), ellipse((x, y, 0), "z", 32, "d"),
           cylinder(x, y, 0, 18, 5, hatch=False)]
    sx, sy = P(x, y, 5)
    out.append(ellipse((x, y, 5), "z", 9, "ia-term"))
    return "".join(out)


def scene5():
    gnd, obj = [], []
    gnd.append(rect_shadow(3660, -330, 600, 560, 28))
    gnd.append(g(bundle_paths([(3500, 0), (4556, 0)]), "ia-spine-s5", "ia-spine", **{"data-from": "spine.j45", "data-to": "s5.terminal"}))
    gnd.append(clamps_x([3600, 4330, 4460]))
    obj.append(g(c_floor(), "ia-s5-floor", "ia-component", **{"data-component": "raised-floor"}))
    obj.append(g([c_tray(-260), c_row(-290, "ROW A")], "ia-s5-row-a", "ia-component", **{"data-component": "rack-row"}))
    obj.append(g([c_tray(-80), c_row(-110, "ROW B")], "ia-s5-row-b", "ia-component", **{"data-component": "rack-row"}))
    tanks = [duct((x, 94), (x, -14), z=26.01) for x in (3790, 3910, 4030)]
    for i, x in enumerate((3790, 3910, 4030)):
        if i:
            tanks.append(tube((x - 120 + 44, 140, 92), (x - 44, 140, 92), 7))
        tanks.append(c_tank(x, 140))
    obj.append(g(tanks, "ia-s5-stores", "ia-component", **{"data-component": "data-stores"}))
    obj.append(g(c_terminal(4600, 0), "ia-s5-terminal", "ia-component", **{"data-component": "terminal"}))
    anc = [
        anchor("spine.j45", 5, "junction", 3500, 0, 0),
        anchor("s5.floor.in", 5, "in", 3660, 0, 0),
        anchor("s5.floor.out", 5, "out", 4260, 0, 0),
        anchor("s5.racks", 5, "focus", 3900, -150, 240),
        anchor("s5.stores", 5, "focus", 3910, 140, 200),
        anchor("s5.terminal", 5, "end", 4600, 0, 5, "the one connected operation"),
        anchor("s5.centre", 5, "camera", 4000, 0, 80),
    ]
    notes = [
        note((3960, -290, 250), "Cloud infrastructure", "r", L=70, ang=56),
        note((3770, 110, 198), "Data stores", "l", L=90, ang=48),
        note((4612, -20, 6), "One connected operation", "r", L=60, ang=36),
    ]
    return gnd, obj, anc, notes


# ======================================================================= the site

SITE = [(560, -470), (1440, -470), (1440, -70), (1560, -70), (1560, -340), (2440, -340), (2440, -70), (2680, -70),
        (2680, -340), (3380, -340), (3380, -70), (3620, -70), (3620, -370), (4300, -370), (4300, -70), (4520, -70),
        (4520, -96), (4680, -96), (4680, 96), (4520, 96), (4520, 70), (4300, 70), (4300, 270), (3620, 270), (3620, 70),
        (3380, 70), (3380, 340), (2680, 340), (2680, 70), (2440, 70), (2440, 310), (1560, 310), (1560, 70), (1440, 70),
        (1440, 380), (560, 380)]
SITE_RECTS = [(560, -470, 1440, 380), (1440, -70, 1560, 70), (1560, -340, 2440, 310), (2440, -70, 2680, 70),
              (2680, -340, 3380, 340), (3380, -70, 3620, 70), (3620, -370, 4300, 270), (4300, -70, 4520, 70),
              (4520, -96, 4680, 96)]
SLAB = 44


def _face_diag(p0, p1, za, zb, pitch):
    """45-degree section hatch on a vertical face between plan points p0 and p1."""
    (x0, y0), (x1, y1) = p0, p1
    L = math.hypot(x1 - x0, y1 - y0)
    ux, uy = (x1 - x0) / L, (y1 - y0) / L
    hgt = zb - za
    segs = []
    u = -hgt
    while u < L:
        a, b = max(u, 0), min(u + hgt, L)
        if b > a:
            za_ = za + (a - u)
            zb_ = za + (b - u)
            segs.append(((x0 + ux * a, y0 + uy * a, za_), (x0 + ux * b, y0 + uy * b, zb_)))
        u += pitch
    return segs


def site():
    """Section-cut site slab. Top at z = 0, so every anchor and object keeps its coordinates."""
    poly = SITE
    m = len(poly)
    area = sum(poly[i][0] * poly[(i + 1) % m][1] - poly[(i + 1) % m][0] * poly[i][1] for i in range(m))
    faces = []
    for i in range(m):
        (x0, y0), (x1, y1) = poly[i], poly[(i + 1) % m]
        ex, ey = x1 - x0, y1 - y0
        nx, ny = (ey, -ex) if area > 0 else (-ey, ex)
        L = math.hypot(nx, ny)
        nx, ny = nx / L, ny / L
        if nx + ny > 1e-6:
            faces.append(((x0, y0), (x1, y1), "l" if ny > nx else "r"))
    faces.sort(key=lambda f: (f[0][0] + f[0][1] + f[1][0] + f[1][1]))
    out = []
    for (a, b, side) in faces:
        quad = [(a[0], a[1], 0), (b[0], b[1], 0), (b[0], b[1], -SLAB), (a[0], a[1], -SLAB)]
        out.append(polygon(quad, "f-" + side))
        # strata: finish screed, service zone with conduits in section, structural slab hatched as cut
        out.append(lines([((a[0], a[1], -8), (b[0], b[1], -8)), ((a[0], a[1], -30), (b[0], b[1], -30))], "d"))
        out.append(lines(_face_diag(a, b, -SLAB, -30, 7), "h"))
        L = math.hypot(b[0] - a[0], b[1] - a[1])
        # formwork joints
        joints = []
        k = 160
        while k < L - 40:
            t = k / L
            joints.append(((a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t, 0), (a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t, -8)))
            k += 160
        if joints:
            out.append(lines(joints, "d"))
        out.append(polyline(quad, "e-i", close=True))
    top = polygon([(x, y, 0) for x, y in poly], "f-slab")
    out.append(top)
    # engraved site grid on the top, 80-unit module
    segs = []
    for (x0, y0, x1, y1) in SITE_RECTS:
        gx = int(math.ceil(x0 / 80.0)) * 80
        while gx < x1:
            if gx > x0:
                segs.append(((gx, y0, 0), (gx, y1, 0)))
            gx += 80
        gy = int(math.ceil(y0 / 80.0)) * 80
        while gy < y1:
            if gy > y0:
                segs.append(((x0, gy, 0), (x1, gy, 0)))
            gy += 80
    out.append(lines(segs, "h", style="stroke-opacity:.55"))
    # the spine channel: a recessed tray the bundle lies in
    cx0, cx1, hw = 690, 4600, 30
    out.append(polygon([(cx0, -hw, 0), (cx1, -hw, 0), (cx1, hw, 0), (cx0, hw, 0)], "f-rec"))
    out.append(polygon([(cx0, -hw, 0), (cx1, -hw, 0), (cx1, -hw, -9), (cx0, -hw, -9)], "f-l-d"))
    out.append(lines([((cx0, -hw, 0), (cx1, -hw, 0)), ((cx0, hw, 0), (cx1, hw, 0))], "e-i"))
    # where the site ends, the spine's duct is cut in section: seven strands in a cased duct
    ex = 4680
    out.append(polygon([(ex, -30, -6), (ex, 30, -6), (ex, 30, -26), (ex, -30, -26)], "f-deep"))
    for i in range(N_STRANDS):
        out.append(ellipse((ex, (i - 3) * GAP, -16), "x", 2.6, "f-t"))
    out.append(el("path", {"cls": "e-o", "d": d_poly([P(x, y, 0) for x, y in poly])}))
    return out


# ======================================================================= ground, titles, sheet

TITLE_AT = {1: (1210, 210), 2: (2080, 690), 3: (2950, 1180), 4: (3790, 1660), 5: (4530, 2150)}


def ground():
    # the board: one continuous dotted ground under all five scenes
    corners = [(-640, -640), (4900, -640), (4900, 640), (-640, 640)]
    return el("path", {"d": d_poly([P(x, y, 0) for x, y in corners]), "fill": "url(#ia-dots)"})


def titles():
    out = []
    cams = cameras()
    for k, slug, title in SCENES:
        x, y = cams[k][0] + 110, cams[k][1] + CAM_H - 150
        out.append(g(detail_title(x, y, k, title, "SHEET %d OF 5  ·  ISOMETRIC 30°" % k), "ia-s%d-title" % k, "ia-title"))
    return out


def sheet():
    out = []
    # title block, bottom-left
    x, y, w, h = 120, 2780, 980, 380
    out.append(el("path", {"cls": "e-o", "d": "M%s,%sh%sv%sh-%sZ" % (x, y, w, h, w)}))
    out.append(el("path", {"cls": "e-i", "d": "M%s,%sh%s M%s,%sh%s M%s,%sv%s" % (x, y + 150, w, x, y + 300, w, x + 620, y + 150, 150)}))
    out.append(el("text", {"cls": "t-big", "x": x + 32, "y": y + 74}, "One connected operation"))
    out.append(el("text", {"cls": "t-sub", "x": x + 34, "y": y + 112}, "AI ALCHEMY  ·  SYSTEM ARCHITECTURE  ·  ISOMETRIC 30°"))
    legend = [
        ("e-o", None, "Built"),
        ("w-h", None, "Proposed  /  hidden"),
        ("cl", None, "Centre line"),
    ]
    for i, (cls, _, lab) in enumerate(legend):
        ly = y + 192 + i * 32
        out.append(el("path", {"cls": cls, "d": "M%s,%sh74" % (x + 34, ly)}))
        out.append(el("text", {"cls": "t-note", "x": x + 128, "y": ly + 4.5}, esc(lab.upper())))
    sw = [("ia-link", "proposed", "Proposed connection"), ("ia-link", "active", "Active connection")]
    for i, (cls, st, lab) in enumerate(sw):
        ly = y + 192 + i * 32
        out.append(el("path", {"cls": cls, "data-state": st, "d": "M%s,%sh74" % (x + 340, ly)}))
        out.append(el("text", {"cls": "t-note", "x": x + 434, "y": ly + 4.5}, esc(lab.upper())))
    ly = y + 256
    out.append(el("rect", {"cls": "ia-gold", "x": x + 340, "y": ly - 6, "width": 74, "height": 12, "style": "fill:var(--ia-approve)"}))
    out.append(el("text", {"cls": "t-note", "x": x + 434, "y": ly + 4.5}, "APPROVAL"))
    out.append(el("text", {"cls": "t-sheet", "x": x + 650, "y": y + 196}, "SHEET 00 OF 05"))
    out.append(el("text", {"cls": "t-note", "x": x + 650, "y": y + 222}, "MASTER COMPOSITION"))
    out.append(el("text", {"cls": "t-note", "x": x + 650, "y": y + 248}, "V" + VERSION))
    out.append(el("text", {"cls": "t-note", "x": x + 34, "y": y + 346}, "ILLUSTRATION OF THE METHOD, NOT A CLIENT PROJECT."))
    # general notes, top-right: approved facts only
    gx, gy = 3640, 150
    out.append(el("text", {"cls": "t-sheet", "x": gx, "y": gy}, "GENERAL NOTES"))
    out.append(el("path", {"cls": "rule", "d": "M%s,%sh%s" % (gx, gy + 14, 900)}))
    gn = ["1.  ONE TEAM FROM STRATEGY TO GO-LIVE. BUILT IN-HOUSE.",
          "2.  METHOD: DISCOVER, ARCHITECT, BUILD, VALIDATE.",
          "3.  MANAGERS KEEP APPROVAL OVER TECHNICAL, PRICING,",
          "     SAFETY AND PRODUCTION ACTIONS.",
          "4.  DRAWN IN ONE COORDINATE SYSTEM. SEE ANCHORS.JSON."]
    for i, t in enumerate(gn):
        out.append(el("text", {"cls": "t-note", "x": gx, "y": gy + 46 + i * 24}, esc(t)))
    # axis indicator, top-right
    ax, ay = 4930, 400
    arrows = [((1, 0, 0), "X"), ((0, 1, 0), "Y"), ((0, 0, 1), "Z")]
    for v, lab in arrows:
        dx, dy = vec(*[c * 70 for c in v])
        out.append(el("path", {"cls": "e-i", "d": "M%s,%sl%s,%s" % (ax, ay, n(dx), n(dy))}))
        out.append(el("text", {"cls": "t-note", "x": n(ax + dx * 1.22 - 4), "y": n(ay + dy * 1.22 + 5)}, lab))
    out.append(el("circle", {"cls": "dot", "cx": ax, "cy": ay, "r": "2.4"}))
    out.append(el("text", {"cls": "t-sub", "x": ax - 40, "y": ay + 120}, "ISOMETRIC 30°  ·  1 UNIT = 1 PX AT 1×"))
    return out


# ======================================================================= assembly


def svg_doc(view, body, title, desc, extra_attrs=None, theme=None):
    vb = "%s %s %s %s" % (n(view[0]), n(view[1]), n(view[2]), n(view[3]))
    a = {"xmlns": "http://www.w3.org/2000/svg", "viewBox": vb, "cls": "ia", "role": "img",
         "aria-labelledby": "ia-t ia-d", "data-ia-version": VERSION, "data-ia-theme": theme,
         "width": n(view[2]), "height": n(view[3])}
    if extra_attrs:
        a.update(extra_attrs)
    head = el("title", {"id": "ia-t"}, esc(title)) + el("desc", {"id": "ia-d"}, esc(desc)) + el("style", None, STYLE) + defs()
    return '<?xml version="1.0" encoding="UTF-8"?>\n' + el("svg", a, head + body) + "\n"


SCENE_BBOX = {}


def build_all():
    CTX.ox, CTX.oy = OX, OY
    built = {}
    for k, fn in ((1, scene1), (2, scene2), (3, scene3), (4, scene4), (5, scene5)):
        bb = track()
        built[k] = fn()
        untrack(bb)
        SCENE_BBOX[k] = (bb.x0, bb.y0, bb.x1, bb.y1)
    return built


def cameras():
    cams = {}
    for k, slug, title in SCENES:
        cx, cy = P(ZONE_DX * (k - 1), 0, 80)
        cams[k] = (cx - CAM_W / 2, cy - CAM_H / 2, CAM_W, CAM_H)
    return cams


DESC = {
    1: "Four business systems stand apart on their own plinths: a stack of spreadsheets, a mail pigeonhole, a filing cabinet with a drawer pulled open, and a legacy tape cabinet. Each ends in an open, unconnected plug.",
    2: "The connections are planned: a collector gathers the four lines into one bundle, beside a drafting plate with a measured plan, proposed massing, a scale rule and a survey station.",
    3: "A gantry lowers a new module into a rack while the legacy core, drawn as a dashed outline, waits to be replaced. The bundle runs through the rack.",
    4: "On a circular platform, a gimballed core does the automated work on a conveyor, and a striped approval boom and a manager's lever keep people in control.",
    5: "The bundle runs under a raised floor of rack rows and data stores and arrives at a single terminal: one connected operation.",
}


def write(path, text):
    os.makedirs(os.path.dirname(path), exist_ok=True)
    with open(path, "w") as f:
        f.write(text)


def main():
    ANCHORS.clear()
    built = build_all()
    cams = cameras()

    scene_groups = []
    note_groups = []
    for k, slug, title in SCENES:
        gnd, obj, anc, notes = built[k]
        scene_groups.append(g([g(gnd, "ia-s%d-ground" % k, "ia-ground-layer"), g(obj, "ia-s%d-objects" % k, "ia-objects")],
                              "ia-scene-%d" % k, "ia-scene", **{"data-scene": str(k), "data-slug": slug, "data-state": "default"}))
        note_groups.append(g(notes, "ia-s%d-notes" % k, "ia-notes", **{"data-scene": str(k)}))
    seen, uniq = set(), []
    for k in built:
        for a in built[k][2]:
            aid = a.split('id="', 1)[1].split('"', 1)[0]
            if aid not in seen:
                seen.add(aid)
                uniq.append(a)
    anchors_g = g(uniq, "ia-anchors", "ia-anchors")

    body = (g(ground(), "ia-ground") + g(site(), "ia-site", "ia-site") + g(scene_groups, "ia-scenes") + g(note_groups, "ia-annotations")
            + g(titles(), "ia-titles", "ia-titles") + g(sheet(), "ia-sheet", "ia-sheet") + anchors_g)
    master = svg_doc((0, 0, W, H), body, "AI Alchemy: one connected operation",
                     "An isometric system-architecture drawing in five parts. " + " ".join(DESC[k] for k in DESC))
    write(os.path.join(ROOT, "svg", "master.svg"), master)
    # page-use export: the whole board without notes, titles or sheet furniture, all scenes active, links live
    bare = g(ground(), "ia-ground") + g(site(), "ia-site", "ia-site") + g(scene_groups, "ia-scenes")
    bare = bare.replace('data-state="default"', 'data-state="active"').replace('data-state="proposed"', 'data-state="active"')
    write(os.path.join(ROOT, "svg", "board.svg"), svg_doc((150, 150, W - 300, H - 420), bare, "AI Alchemy: one connected operation",
                                                       "The whole system, connected: " + " ".join(DESC[k] for k in DESC),
                                                       extra_attrs={"style": "--ia-lw:2.2"}))

    # scenes: same coordinates, own camera, own content plus a break mark where the spine continues
    for k, slug, title in SCENES:
        gnd, obj, anc, notes = built[k]
        parts = [g(ground(), "ia-ground"), g(site(), "ia-site", "ia-site")]
        if k == 2:
            # show the incoming proposed links from scene 1, without scene 1's objects
            parts.append(scene_link_inset(built[1][0]))
        parts.append(g([g(gnd, "ia-s%d-ground" % k, "ia-ground-layer"), g(obj, "ia-s%d-objects" % k, "ia-objects")],
                       "ia-scene-%d" % k, "ia-scene", **{"data-scene": str(k), "data-slug": slug, "data-state": "default"}))
        parts.append(g(notes, "ia-s%d-notes" % k, "ia-notes", **{"data-scene": str(k)}))
        parts.append(g(titles()[k - 1], "ia-titles", "ia-titles"))
        parts.append(g([a for a in anc], "ia-anchors", "ia-anchors"))
        body = "".join(parts)
        if k == 1:
            body = body.replace('data-state="proposed"', 'data-state="off"')  # disconnected: no links yet
        cam = scene_camera_for_file(k, cams)
        doc = svg_doc(cam, body, "AI Alchemy, %d of 5: %s" % (k, title), DESC[k])
        write(os.path.join(ROOT, "svg", "scenes", "scene-%d-%s.svg" % (k, slug)), doc)
        # page-use export: same scene without its detail title (pages set their own headings)
        plain = body.replace(g(titles()[k - 1], "ia-titles", "ia-titles"), "")
        write(os.path.join(ROOT, "svg", "scenes", "scene-%d-%s.plain.svg" % (k, slug)),
              svg_doc(cam, plain, "AI Alchemy, %d of 5: %s" % (k, title), DESC[k]))

    # anchors + cameras
    data = {
        "version": VERSION,
        "canvas": {"width": W, "height": H},
        "projection": {"type": "isometric-30", "origin_master": [OX, OY],
                       "screen_x": "OX + (x - y) * cos(30deg)", "screen_y": "OY + (x + y) * 0.5 - z",
                       "units": "1 world unit = 1 SVG user unit along each axis"},
        "cameras": {SCENES[k - 1][1]: {"scene": k, "viewBox": [round(v, 2) for v in cams[k]],
                                        "portrait_viewBox": [round(v, 2) for v in portrait(k)]} for k in cams},
        "anchors": dedupe(ANCHORS),
    }
    write(os.path.join(ROOT, "anchors.json"), json.dumps(data, indent=2) + "\n")
    print("master + scenes written; anchors:", len(data["anchors"]))


def portrait(k):
    """4:5 camera for narrow screens, centred a little lower so the title band stays in frame."""
    x0, y0, x1, y1 = SCENE_BBOX[k]
    if k == 1:   # scene 1's bbox includes its long proposed links; frame the four systems
        x0, y0, x1, y1 = P(-360, 300, 0)[0] - 40, P(60, -320, 330)[1], P(380, -320, 0)[0] + 40, P(300, 280, 0)[1] + 20
    if k == 5:   # include the terminal and its label
        x1 = max(x1, P(4600, 0, 0)[0] + 200)
    pw = (x1 - x0) + 160
    ph = pw * 1.25
    cx, cy = (x0 + x1) / 2, (y0 + y1) / 2
    return (cx - pw / 2, cy - ph / 2, pw, ph)


def scene_camera_for_file(k, cams):
    return cams[k]


def scene_link_inset(s1_ground):
    # s1_ground[...]: find the links group markup (index 4 is the links group by construction)
    links = [p for p in s1_ground if 'id="ia-s1-links"' in p]
    return links[0] if links else ""


def dedupe(items):
    seen = {}
    for a in items:
        seen.setdefault(a["id"], a)
    return list(seen.values())


# ======================================================================= component library

COMPONENTS = [
    # name, scene, world origin (x, y, z), builder, ports (local world offsets), description
    ("spreadsheet-stack", 1, (-330, -300, 0), lambda: c_spreadsheets(-330, -300), {"out": (130, 160, 4.5)},
     "Fanned stack of ledger sheets on a 200 x 160 plinth; top sheet carries a cell grid."),
    ("mail-pigeonhole", 1, (60, -320, 0), lambda: c_pigeonhole(60, -320), {"out": (140, 150, 4.5)},
     "Pigeonhole cabinet, 4 x 3 recessed cells with letters, on a 200 x 150 plinth."),
    ("filing-cabinet", 1, (-340, 80, 0), lambda: c_filing(-340, 80), {"out": (160, 60, 4.5)},
     "Four-drawer filing cabinet with one drawer pulled open to show folders."),
    ("legacy-mainframe", 1, (60, 80, 0), lambda: c_mainframe(60, 80), {"out": (240, 70, 4.5)},
     "Tape-reel cabinet: two reels, indicator row, vents."),
    ("open-stub", 1, (0, 0, 0), lambda: stub([(0, 0), (0, 44)], "y"), {"in": (0, 0, 0), "end": (0, 44, 4.5)},
     "Three-strand stub ending in an open plug (the disconnected state)."),
    ("collector", 2, (620, -80, 0), lambda: c_collector(620, -80), {"in.1": (-14, 35, 0), "in.4": (-14, 125, 0), "out": (80, 80, 0)},
     "Terminal block that gathers four inputs into the spine."),
    ("drafting-plate", 2, (760, -440, 0), lambda: c_plate(760, -440) + c_massing() + c_scale_rule(800, 1036, -150, 16.01) + c_set_square(16.01),
     {"centre": (260, 170, 16)}, "Plate with a poche plan, structural grid, wire massing, scale rule and set square."),
    ("survey-station", 2, (690, 268, 0), lambda: c_survey(690, 268), {"head": (0, 0, 184), "mark": (0, 0, 0)},
     "Tripod survey instrument with a plumb line to a ground mark."),
    ("module", 3, (0, 0, 0), lambda: c_module(0, 0, 0, w=60, d=112, h=50, label="M1"), {"top": (30, 56, 50)},
     "One software module: 60 x 112 x 50, vents, status lamp, stencil ID."),
    ("module-built", 3, (0, 0, 0), lambda: c_module(0, 0, 0, w=60, d=112, h=50, label="M8", built=True), {"top": (30, 56, 50)},
     "The same module in built (deep) material: what AI Alchemy delivers."),
    ("junction-riser", 3, (2266, 0, 0), lambda: c_junction(), {"base": (11, 0, 14), "top": (2, 36, 122)},
     "Junction box on the spine with a three-strand riser into the rack levels."),
    ("module-rack", 3, (1950, -70, 0), lambda: c_rack() + c_rack_front(), {"in": (0, 70, 0), "out": (300, 70, 0), "slot": (185, 70, 69)},
     "Open-top rack, 4 bays x 2 levels, one empty bay."),
    ("gantry", 3, (2135, 0, 0), lambda: c_gantry_back() + c_gantry_front() + c_gantry_beam() + c_hoist(), {"hook": (0, 0, 264)},
     "Portal gantry with trolley and a module on the hoist."),
    ("legacy-core-outline", 3, (1704, -64, 0), lambda: c_ghost(), {"centre": (75, 64, 85)},
     "Dashed demolition outline for a system that will be replaced."),
    ("platform", 4, (3000, 0, 0), lambda: c_platform(), {"centre": (0, 0, 18)},
     "Circular platform, r 300, dial ticks and a covered cable trench."),
    ("gyro-core", 4, (3000, 0, 0), lambda: c_core(), {"core": (0, 0, 196), "crown": (0, 0, 378)},
     "The signature core: the Rings mark (segmented gimbal rings, copper core) inside a smoked-glass vessel on a finned base, fed by the spine."),
    ("reader-arch", 4, (3000, 200, 0), lambda: c_reader() + c_reader_front(), {"read-line": (0, 0, 110)},
     "Arch over the conveyor with a read line, ducted to the core's dais."),
    ("floor-duct", 0, (0, 0, 0), lambda: duct((0, 0), (0, 120)), {"a": (0, 0, 0), "b": (0, 120, 0)},
     "Shallow covered duct with three strands; the shared vocabulary for short connections."),
    ("conveyor", 4, (2780, 172, 0), lambda: c_conveyor(), {"in": (0, 28, 52), "out": (440, 28, 52)},
     "Roller conveyor with unsorted documents before the core and aligned ones after."),
    ("approval-gate", 4, (3168, 238, 0), lambda: c_gate(3168, 238), {"boom": (9, -44, 100)},
     "Striped boom over the belt. The stripes turn gold when active."),
    ("approval-console", 4, (3300, 150, 0), lambda: c_console(), {"lever": (20, 14, 114)},
     "Console with a manager's lever (gold knob) and three lamps."),
    ("raised-floor", 5, (3660, -330, 0), lambda: c_floor(), {"in": (0, 330, 0), "out": (600, 330, 0)},
     "Raised access floor with pedestals visible in the void and a perforated cold aisle."),
    ("server-cabinet", 5, (0, 0, 0), lambda: c_cabinet(0, 0, 0, side=True), {"top": (25, 48, 212)},
     "Rack cabinet 50 x 96 x 212 with perforated door, lamps and handle."),
    ("cable-tray", 5, (3688, -260, 278), lambda: c_tray(-260), {}, "Ladder tray on end posts with drops into each cabinet."),
    ("data-tank", 5, (0, 0, 0), lambda: c_tank(0, 0, 0), {"top": (0, 0, 182)},
     "Vertical store, r 46 x 172, hoop bands, cap and ladder."),
    ("terminal", 5, (4600, 0, 0), lambda: c_terminal(4600, 0), {"end": (0, 0, 5)},
     "Ground terminal where the spine ends."),
    ("cable-bundle", 0, (0, 0, 0), lambda: bundle_paths([(0, 0), (240, 0)]) + clamps_x([60, 180]), {"in": (0, 0, 0), "out": (240, 0, 0)},
     "Seven-strand bundle, 7 units apart; strand 3 is the lead. Clamps every 120-160 units."),
    ("grid-bubble", 0, (0, 0, 0), lambda: ellipse((0, 0, 0), "z", 15, "f-g") + ellipse((0, 0, 0), "z", 15, "e-i") +
     el("text", {"cls": "t-bub", "x": n(P(0, 0, 0)[0]), "y": n(P(0, 0, 0)[1] + 5)}, "A"), {}, "Structural grid bubble lying on the ground."),
    ("annotation", 0, (0, 0, 0), lambda: note((0, 0, 0), "Label", "r", L=64, ang=58, lines_=["Second line"]), {"point": (0, 0, 0)},
     "Leader with dot, 58 degree rise, 16 unit shoulder, mono label."),
    ("detail-title", 0, (0, 0, 0), lambda: detail_title(0, 0, 1, "Scene title", "SHEET 1 OF 5  ·  ISOMETRIC 30°"), {},
     "Numbered bubble, serif title, rule and sheet line."),
]


def build_components():
    from iso import track, untrack
    out = []
    for name, scene, origin, fn, ports, desc in COMPONENTS:
        wx, wy, wz = origin
        CTX.ox = -(wx - wy) * C
        CTX.oy = -(wx + wy) * S + wz
        bb = track()
        markup = fn()
        untrack(bb)
        if bb.x0 == float("inf"):          # detail title: plain screen coordinates
            bb.x0, bb.y0, bb.x1, bb.y1 = -22, -22, 470, 50
        if name == "annotation":           # leader and text are screen-space, not tracked
            bb.x0, bb.y0, bb.x1, bb.y1 = -6, -70, 160, 6
        pad = 24
        view = (math.floor(bb.x0 - pad), math.floor(bb.y0 - pad), math.ceil(bb.x1 - bb.x0 + 2 * pad), math.ceil(bb.y1 - bb.y0 + 2 * pad))
        port_els = []
        port_data = {}
        for pid, (px, py, pz) in ports.items():
            sx, sy = P(wx + px, wy + py, wz + pz)
            port_data[pid] = {"local": [px, py, pz], "component_svg": [round(sx, 2), round(sy, 2)]}
            port_els.append(el("circle", {"cls": "ia-anchor", "cx": n(sx), "cy": n(sy), "r": "3", "data-port": pid}))
        body = g([g(markup, "ia-c-" + name, "ia-component", **{"data-component": name, "data-state": "default"}),
                  g(port_els, "ia-c-%s-ports" % name, "ia-anchors")])
        doc = svg_doc(view, body, "AI Alchemy component: " + name.replace("-", " "), desc)
        write(os.path.join(ROOT, "svg", "components", name + ".svg"), doc)
        # night stock for dark sections: same drawing, night tokens
        write(os.path.join(ROOT, "svg", "components", name + ".night.svg"), svg_doc(view, body, "AI Alchemy component: " + name.replace("-", " "), desc, theme="night"))
        out.append({"name": name, "file": "svg/components/%s.svg" % name, "scene": scene or None,
                    "origin_world": list(origin), "viewBox": list(view), "ports": port_data, "description": desc,
                    "place_in_master": "translate(%s %s)" % (n(OX + (wx - wy) * C), n(OY + (wx + wy) * S - wz))})
    CTX.ox, CTX.oy = OX, OY
    write(os.path.join(ROOT, "components.json"), json.dumps({"version": VERSION, "components": out}, indent=2) + "\n")
    print("components:", len(out))


if __name__ == "__main__":
    main()
    build_components()
