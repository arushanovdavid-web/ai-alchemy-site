"""
Toronto skyline: a standalone isometric drawing in the Foundry's drawing language, for the About page
("Based in the Greater Toronto Area"). It reuses the Foundry projection, line weights, tokens and styles,
but is its own asset: it does not touch the master board, scenes, anchors or the Experience Spine.

Usage: python3 illustration/src/toronto.py
Writes illustration/svg/toronto-skyline.svg and illustration/svg/toronto-skyline.night.svg.

Composition: a waterfront site slab on Lake Ontario. The CN Tower stands on the right third as the focal
point; the downtown towers step up behind it to the left; a low segmented dome sits at its foot. One copper
conductor runs along the slab and ends at a terminal at the tower's base: the same line as the Spine,
arriving home. Heights are drawn to the tower's real proportions (1 unit = 1 m x 1.25).
"""
import math
import os

import foundry as F
from iso import (CTX, P, box, cylinder, ellipse, arc, line, lines, polygon, polyline, tube, el, g,
                 circ_pt, track, untrack, prism, iso_text, n, pt)

ROOT = os.path.abspath(os.path.join(os.path.dirname(__file__), ".."))
M = 1.25          # drawing units per metre
TX, TY = 290, -430  # CN Tower plan position (back of the site, right of the core)


def hatch_bands(x, y, z, w, d, h, step=14, face="l"):
    """Floor lines on a tower's visible faces (hairline), skipping a podium band."""
    segs = []
    for zz in range(int(z) + step, int(z + h) - 4, step):
        if face in ("l", "both"):
            segs.append(((x, y + d, zz), (x + w, y + d, zz)))
        if face in ("r", "both"):
            segs.append(((x + w, y, zz), (x + w, y + d, zz)))
    return lines(segs, "h")


def mullions(x, y, z, w, d, h, pitch=10):
    """Vertical mullions on the +y face, fine ink."""
    return lines([((xx, y + d, z + 6), (xx, y + d, z + h - 6)) for xx in range(int(x) + pitch, int(x + w) - 2, pitch)], "h")


def tower_block(x, y, w, d, h, kind=0, tone=""):
    """A downtown tower: box with floor bands, a crown and, for some, a setback or mast."""
    out = [box(x, y, 0, w, d, h, tone=tone, hatch=True)]
    out.append(hatch_bands(x, y, 0, w, d, h, step=12 if kind % 2 else 16, face="both"))
    if kind == 1:
        out.append(mullions(x, y, 0, w, d, h, pitch=9))
    if kind == 2:   # setback crown
        out.append(box(x + 6, y + 6, h, w - 12, d - 12, 26, tone=tone, hatch=True))
    if kind == 3:   # mechanical crown with a mast
        out.append(box(x + 10, y + 10, h, w - 20, d - 20, 12, hatch=False))
        out.append(line((x + w / 2, y + d / 2, h + 12), (x + w / 2, y + d / 2, h + 46), "e-i"))
    return "".join(out)


def dome(cx, cy, r=118, h=38):
    """A low stadium drum with a segmented, ribbed roof (generic, no signage)."""
    out = [cylinder(cx, cy, 0, r, h, hatch=True)]
    zt = h
    # roof: three stepped shells read as ellipse arcs on the cap, with radial ribs on the visible half
    t0, t1 = math.radians(-45), math.radians(135)
    for k, rr in enumerate((r * 0.82, r * 0.6, r * 0.36)):
        out.append(arc((cx, cy, zt + 6 + k * 7), "z", rr, t1, t0 + 2 * math.pi, "d"))
    out.append(ellipse((cx, cy, zt + 27), "z", r * 0.14, "e-i"))
    segs = []
    for i in range(12):
        t = math.radians(-45 + i * 15)
        segs.append((circ_pt((cx, cy, zt), "z", r, t), circ_pt((cx, cy, zt + 27), "z", r * 0.14, t)))
    out.append(lines(segs, "h"))
    return "".join(out)


def frustum(cx, cy, z0, r0, z1, r1, n_=28):
    """Smooth tapered shaft: left face, hatched right half, silhouette. No ring joints."""
    tL, tR, tF = math.radians(135), math.radians(-45), math.radians(45)
    def arc_pts(z, r, a0, a1):
        return [P(*circ_pt((cx, cy, z), "z", r, a0 + (a1 - a0) * i / n_)) for i in range(n_ + 1)]
    # front half runs from tL through the front (45 deg) to tR, i.e. decreasing angle 135 -> -45
    bot = arc_pts(z0, r0, tL, tR)
    top = arc_pts(z1, r1, tR, tL)
    body = bot + top
    rb = arc_pts(z0, r0, tF, tR)
    rt = arc_pts(z1, r1, tR, tF)
    out = [el("path", {"cls": "f-l", "d": "M" + "L".join(pt(q) for q in body) + "Z"}),
           el("path", {"cls": "f-r", "d": "M" + "L".join(pt(q) for q in rb + rt) + "Z"}),
           el("path", {"cls": "hv", "d": "M" + "L".join(pt(q) for q in rb + rt) + "Z"}),
           el("path", {"cls": "e-o", "d": "M" + "L".join(pt(q) for q in body) + "Z"})]
    return "".join(out)


def cn_tower(x, y):
    """The CN Tower in proportion: Y-plan base, tapering shaft, main pod, upper shaft, SkyPod, antenna."""
    out = []
    z = 0
    # Y-plan base legs (three buttresses at 120 degrees), drawn back to front
    legs = []
    for a in (210, 90, 330):
        t = math.radians(a)
        ux, uy = math.cos(t), math.sin(t)
        px, py = -uy, ux
        foot = [(x + ux * 40 + px * 6, y + uy * 40 + py * 6), (x + ux * 40 - px * 6, y + uy * 40 - py * 6),
                (x - px * 6, y - py * 6), (x + px * 6, y + py * 6)]
        legs.append((ux + uy, foot))
    legs.sort(key=lambda L: L[0])
    for _, foot in legs:
        out.append(prism(foot, 0, 78, hatch=True))
    # tapering shaft: stacked frusta read as cylinders
    shaft = [(64, 120, 21), (120, 190, 18.5), (190, 260, 16.5), (260, 330, 15), (330, 400, 13.5)]
    z_top = 342 * M
    seg = (z_top - 64) / 5
    out.append(frustum(x, y, 40, 24, z_top + 1, 12.5))
    # main pod (342-360 m): lower deck, dark glazing band, upper deck, roof drum
    zp = z_top
    out.append(cylinder(x, y, zp, 34, 6, hatch=True))
    out.append(cylinder(x, y, zp + 6, 46, 9, hatch=True))
    out.append(cylinder(x, y, zp + 15, 48, 12, tone="-d", hatch=False))
    for i in range(18):   # glazing mullions on the front half
        t = math.radians(-45 + i * 10)
        out.append(line(circ_pt((x, y, zp + 15.5), "z", 48, t), circ_pt((x, y, zp + 26.5), "z", 48, t), "dl"))
    out.append(cylinder(x, y, zp + 27, 46, 6, hatch=True))
    out.append(cylinder(x, y, zp + 33, 30, 8, hatch=True))
    out.append(cylinder(x, y, zp + 41, 12, 6, hatch=False))
    # upper shaft to the SkyPod (447 m)
    zs = 447 * M
    out.append(cylinder(x, y, zp + 47, 9.5, zs - (zp + 47), hatch=True))
    out.append(cylinder(x, y, zs, 15, 5, hatch=False))
    out.append(cylinder(x, y, zs + 5, 16, 7, tone="-d", hatch=False))
    out.append(cylinder(x, y, zs + 12, 13, 4, hatch=False))
    # antenna mast to 553 m, stepped
    za = 553 * M
    z0 = zs + 16
    steps = [(6.5, 0.42), (4.6, 0.32), (3.0, 0.26)]
    for r, frac in steps:
        h = (za - (zs + 16)) * frac
        out.append(cylinder(x, y, z0, r, h, hatch=False))
        z0 += h
    out.append(line((x, y, z0), (x, y, za), "e-o"))
    # aviation beacon: copper, as the Spine's lit state
    out.append(g(ellipse((x, y, za), "z", 2.6, "ia-term"), None, None, **{"data-state": "active"}))
    return "".join(out)


def site():
    """Waterfront slab, lake edge and the copper conductor ending at the tower base."""
    out = []
    # lake: fine horizontal water lines in front of the slab
    segs = []
    for k in range(6):
        yy = 208 + k * 20
        segs.append(((-560 + k * 30, yy, -18), (560 - k * 50, yy, -18)))
    out.append(lines(segs, "h"))
    # slab with a quay edge (same build-up as the Spine's site slab: top, hatched edge)
    out.append(box(-580, -540, -18, 1160, 720, 18, hatch=True))
    # street grid on the slab, hairline
    segs = [((-580, yy, 0), (580, yy, 0)) for yy in (-400, -230, -60, 100)]
    segs += [((xx, -540, 0), (xx, 180, 0)) for xx in (-430, -200, 40, 230, 450)]
    out.append(lines(segs, "h"))
    return "".join(out)


def conductor(x, y):
    """Three-strand bundle along the quay, turning in to a terminal at the tower's base."""
    parts = []
    yq, xt, ye = 150, 230, y + 70
    for i, o in enumerate((-6, 0, 6)):
        pts = [P(-580, yq + o, 0.5), P(xt + o, yq + o, 0.5), P(xt + o, ye + o, 0.5), P(x - 40, ye + o, 0.5)]
        cls = "strand" + (" ia-lead" if i == 1 else "")
        parts.append(el("path", {"cls": cls, "d": "M" + "L".join(pt(q) for q in pts)}))
    for cx_ in (-450, -200, 50):
        parts.append(box(cx_, yq - 9, 0, 8, 18, 4, hatch=False))
    parts.append(cylinder(x - 40, ye, 0, 12, 4, hatch=False))
    parts.append(ellipse((x - 40, ye, 4), "z", 6, "ia-term"))
    return g(parts, None, None, **{"data-state": "active"})


def build():
    CTX.ox, CTX.oy = 0.0, 0.0
    bb = track()
    body = []
    body.append(site())
    body.append(conductor(TX, TY))
    # downtown: back rows first (painter's order by x + y)
    blocks = [
        (-500, -300, 70, 70, 190, 2), (-380, -310, 80, 64, 262, 3), (-260, -300, 64, 70, 160, 1),
        (-140, -315, 74, 60, 214, 2), (-20, -300, 60, 60, 138, 0), (100, -310, 70, 64, 176, 1),
        (-540, -160, 76, 70, 120, 1), (-410, -170, 70, 76, 300, 3), (-280, -160, 84, 64, 226, 1),
        (-160, -180, 62, 70, 178, 2), (-50, -170, 70, 64, 146, 0), (70, -180, 60, 60, 104, 1),
        (-500, -10, 70, 64, 92, 0), (-370, -15, 80, 70, 160, 1), (-230, -20, 64, 64, 128, 2),
        (-110, -10, 70, 60, 80, 0),
    ]
    blocks.sort(key=lambda b: b[0] + b[1])
    for (x, y, w, d, h, kind) in blocks:
        body.append(tower_block(x, y, w, d, h, kind))
    # the dome at the tower's foot, then the tower in front of it
    body.append(cn_tower(TX, TY))
    body.append(dome(450, -110, r=104, h=34))
    # lakefront low-rise in front, to seat the composition
    for (x, y, w, d, h) in ((-540, 70, 120, 50, 34), (-380, 80, 90, 44, 24), (-250, 60, 140, 60, 44), (-60, 70, 100, 46, 26)):
        body.append(box(x, y, 0, w, d, h, hatch=True))
        body.append(hatch_bands(x, y, 0, w, d, h, step=12, face="l"))
    untrack(bb)
    pad = 24
    view = (math.floor(bb.x0 - pad), math.floor(bb.y0 - pad), math.ceil(bb.x1 - bb.x0 + 2 * pad), math.ceil(bb.y1 - bb.y0 + 2 * pad))
    return view, "".join(body)


def main():
    view, body = build()
    title = "Toronto skyline with the CN Tower"
    desc = ("An isometric architectural drawing of downtown Toronto on the Lake Ontario waterfront. The CN Tower stands "
            "in front of the downtown towers, beside a low domed stadium. A copper line runs along the quay to a "
            "terminal at the foot of the tower.")
    for theme, suffix in ((None, ""), ("night", ".night")):
        doc = F.svg_doc(view, body, title, desc, extra_attrs={"id": "toronto-skyline"}, theme=theme)
        F.write(os.path.join(ROOT, "svg", "toronto-skyline%s.svg" % suffix), doc)
    print("toronto-skyline:", view)


if __name__ == "__main__":
    main()
