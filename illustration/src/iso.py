"""
AI Alchemy illustration foundry: isometric drawing kernel.

World space: x runs to screen lower-right, y to screen lower-left, z up. One world unit is one
isometric drawing unit (true 30 degree isometric drawing, axes at full length). The master screen
origin (OX, OY) is set per output so every file shares one coordinate system.

Everything here returns SVG markup strings. No animation, no scripts.
"""
import math

C = math.cos(math.radians(30))
S = 0.5
K = math.sqrt(1.5)  # isometric drawing scale for true lengths across arbitrary directions


class _Ctx:
    def __init__(self):
        self.ox = 0.0
        self.oy = 0.0
        self.boxes = []


CTX = _Ctx()


class BBox:
    def __init__(self):
        self.x0 = self.y0 = float("inf")
        self.x1 = self.y1 = float("-inf")

    def add(self, x, y):
        self.x0 = min(self.x0, x)
        self.y0 = min(self.y0, y)
        self.x1 = max(self.x1, x)
        self.y1 = max(self.y1, y)


def track():
    b = BBox()
    CTX.boxes.append(b)
    return b


def untrack(b):
    CTX.boxes.remove(b)


def P(x, y, z=0.0):
    sx = CTX.ox + (x - y) * C
    sy = CTX.oy + (x + y) * S - z
    for b in CTX.boxes:
        b.add(sx, sy)
    return (sx, sy)


def vec(dx, dy, dz=0.0):
    """Screen-space direction of a world vector (no origin)."""
    return ((dx - dy) * C, (dx + dy) * S - dz)


def n(v):
    s = "%.2f" % v
    s = s.rstrip("0").rstrip(".")
    if s in ("-0", ""):
        s = "0"
    return s


def pt(p):
    return n(p[0]) + "," + n(p[1])


def attrs(a):
    out = []
    for k, v in a.items():
        if v is None or v is False:
            continue
        key = {"cls": "class", "pl": "pathLength"}.get(k, k.replace("_", "-"))
        out.append('%s="%s"' % (key, v))
    return (" " + " ".join(out)) if out else ""


def el(tag, a=None, children=None):
    a = a or {}
    if children is None:
        return "<%s%s/>" % (tag, attrs(a))
    if isinstance(children, (list, tuple)):
        children = "".join(c for c in children if c)
    return "<%s%s>%s</%s>" % (tag, attrs(a), children, tag)


def g(children, gid=None, cls=None, **kw):
    a = {"id": gid, "cls": cls}
    a.update(kw)
    return el("g", a, children)


def esc(t):
    return t.replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;")


# ---------------------------------------------------------------- paths


def d_poly(pts, close=True):
    if not pts:
        return ""
    s = "M" + pt(pts[0]) + "".join("L" + pt(p) for p in pts[1:])
    return s + ("Z" if close else "")


def polygon(pts3, cls, **kw):
    pts = [P(*p) for p in pts3]
    a = {"cls": cls, "d": d_poly(pts)}
    a.update(kw)
    return el("path", a)


def polyline(pts3, cls, close=False, **kw):
    pts = [P(*p) for p in pts3]
    a = {"cls": cls, "d": d_poly(pts, close)}
    a.update(kw)
    return el("path", a)


def line(p0, p1, cls, **kw):
    a = P(*p0)
    b = P(*p1)
    at = {"cls": cls, "d": "M" + pt(a) + "L" + pt(b)}
    at.update(kw)
    return el("path", at)


def lines(segs, cls, **kw):
    """Many segments as one path (cheaper DOM)."""
    d = []
    for p0, p1 in segs:
        d.append("M" + pt(P(*p0)) + "L" + pt(P(*p1)))
    at = {"cls": cls, "d": "".join(d)}
    at.update(kw)
    return el("path", at)


def hull(points):
    pts = sorted(set((round(p[0], 3), round(p[1], 3)) for p in points))
    if len(pts) <= 2:
        return pts

    def cross(o, a, b):
        return (a[0] - o[0]) * (b[1] - o[1]) - (a[1] - o[1]) * (b[0] - o[0])

    lower = []
    for p in pts:
        while len(lower) >= 2 and cross(lower[-2], lower[-1], p) <= 0:
            lower.pop()
        lower.append(p)
    upper = []
    for p in reversed(pts):
        while len(upper) >= 2 and cross(upper[-2], upper[-1], p) <= 0:
            upper.pop()
        upper.append(p)
    return lower[:-1] + upper[:-1]


# ---------------------------------------------------------------- solids


def _ccw(poly):
    a = 0
    for i in range(len(poly)):
        x0, y0 = poly[i]
        x1, y1 = poly[(i + 1) % len(poly)]
        a += x0 * y1 - x1 * y0
    return poly if a > 0 else list(reversed(poly))


def prism(poly, z, h, tone="", hatch=True, top=True, sil=True, inner=True, extra_top="", gid=None, cls=None):
    """Upright prism over a convex plan polygon. Fills visible faces, then inner edges, then the silhouette."""
    poly = _ccw(poly)
    m = len(poly)
    out = []
    vis = []
    for i in range(m):
        (x0, y0), (x1, y1) = poly[i], poly[(i + 1) % m]
        ex, ey = x1 - x0, y1 - y0
        L = math.hypot(ex, ey) or 1
        nx, ny = ey / L, -ex / L  # outward normal for CCW polygon in (x, y) with y-down? check sign below
        vis.append((i, nx, ny))
    # Orientation check: outward normal must point away from centroid.
    cx = sum(p[0] for p in poly) / m
    cy = sum(p[1] for p in poly) / m
    fixed = []
    for i, nx, ny in vis:
        (x0, y0) = poly[i]
        if (x0 - cx) * nx + (y0 - cy) * ny < 0:
            nx, ny = -nx, -ny
        fixed.append((i, nx, ny))
    faces = [f for f in fixed if f[1] + f[2] > 1e-6]
    for i, nx, ny in faces:
        (x0, y0), (x1, y1) = poly[i], poly[(i + 1) % m]
        quad = [(x0, y0, z + h), (x1, y1, z + h), (x1, y1, z), (x0, y0, z)]
        side = "l" if ny > nx else "r"
        out.append(polygon(quad, "f-%s%s" % (side, tone)))
        if side == "r" and hatch:
            out.append(polygon(quad, "hv"))
    if top:
        out.append(polygon([(x, y, z + h) for x, y in poly], "f-t" + tone))
    if extra_top:
        out.append(extra_top)
    if inner:
        segs = []
        face_idx = set(f[0] for f in faces)
        for i in face_idx:
            (x0, y0), (x1, y1) = poly[i], poly[(i + 1) % m]
            segs.append(((x0, y0, z + h), (x1, y1, z + h)))
            # vertical edge shared by two visible faces
            if ((i + 1) % m) in face_idx:
                segs.append(((x1, y1, z), (x1, y1, z + h)))
        if segs:
            out.append(lines(segs, "e-i"))
    if sil:
        pts = [P(x, y, z) for x, y in poly] + [P(x, y, z + h) for x, y in poly]
        out.append(el("path", {"cls": "e-o", "d": d_poly(hull(pts))}))
    return g(out, gid, cls) if (gid or cls) else "".join(out)


def box(x, y, z, w, d, h, **kw):
    return prism([(x, y), (x + w, y), (x + w, y + d), (x, y + d)], z, h, **kw)


def box_wire(x, y, z, w, d, h, cls_v="w-v", cls_h="w-h", hidden=True):
    v = [
        ((x + w, y, z), (x + w, y + d, z)), ((x + w, y + d, z), (x, y + d, z)),
        ((x, y, z + h), (x + w, y, z + h)), ((x + w, y, z + h), (x + w, y + d, z + h)),
        ((x + w, y + d, z + h), (x, y + d, z + h)), ((x, y + d, z + h), (x, y, z + h)),
        ((x + w, y, z), (x + w, y, z + h)), ((x + w, y + d, z), (x + w, y + d, z + h)),
        ((x, y + d, z), (x, y + d, z + h)),
    ]
    hd = [((x, y, z), (x + w, y, z)), ((x, y, z), (x, y + d, z)), ((x, y, z), (x, y, z + h))]
    out = []
    if hidden:
        out.append(lines(hd, cls_h))
    out.append(lines(v, cls_v))
    return "".join(out)


def shadow(poly, h, z=0.0, k=0.62):
    """Cast shadow on a plane at z for an object of height h over plan polygon poly."""
    dx, dy = h * k, -h * k * 0.48
    pts = [P(x, y, z) for x, y in poly] + [P(x + dx, y + dy, z) for x, y in poly]
    return el("path", {"cls": "sh", "d": d_poly(hull(pts))})


def rect_shadow(x, y, w, d, h, z=0.0):
    return shadow([(x, y), (x + w, y), (x + w, y + d), (x, y + d)], h, z)


# ---------------------------------------------------------------- circles


AXES = {
    "z": ((1, 0, 0), (0, 1, 0)),
    "x": ((0, 1, 0), (0, 0, 1)),
    "y": ((1, 0, 0), (0, 0, 1)),
}


def _ell(axis, r):
    u, v = AXES[axis] if isinstance(axis, str) else axis
    U = vec(*u)
    V = vec(*v)
    U = (U[0] * r, U[1] * r)
    V = (V[0] * r, V[1] * r)
    a = U[0] ** 2 + V[0] ** 2
    b = U[0] * U[1] + V[0] * V[1]
    c = U[1] ** 2 + V[1] ** 2
    t = math.sqrt(((a - c) / 2) ** 2 + b ** 2)
    l1 = (a + c) / 2 + t
    l2 = max((a + c) / 2 - t, 0)
    ang = 0.5 * math.degrees(math.atan2(2 * b, a - c))
    det = U[0] * V[1] - U[1] * V[0]
    return U, V, math.sqrt(l1), math.sqrt(l2), ang, det


def circ_pt(c3, axis, r, th):
    u, v = AXES[axis] if isinstance(axis, str) else axis
    cx, cy, cz = c3
    ct, st = math.cos(th), math.sin(th)
    return (cx + r * (u[0] * ct + v[0] * st), cy + r * (u[1] * ct + v[1] * st), cz + r * (u[2] * ct + v[2] * st))


def ellipse(c3, axis, r, cls, **kw):
    cx, cy = P(*c3)
    U, V, rx, ry, ang, det = _ell(axis, r)
    for th in (0, math.pi / 2, math.pi, 1.5 * math.pi):
        P(*circ_pt(c3, axis, r, th))
    a = {"cls": cls, "cx": n(cx), "cy": n(cy), "rx": n(rx), "ry": n(max(ry, 0.01)),
         "transform": ("rotate(%s %s %s)" % (n(ang), n(cx), n(cy))) if abs(ang) > 0.01 else None}
    a.update(kw)
    return el("ellipse", a)


def arc_d(c3, axis, r, t0, t1, move=True):
    """SVG arc from angle t0 to t1 (radians, increasing) on a 3D circle."""
    U, V, rx, ry, ang, det = _ell(axis, r)
    p0 = P(*circ_pt(c3, axis, r, t0))
    p1 = P(*circ_pt(c3, axis, r, t1))
    span = t1 - t0
    large = 1 if span > math.pi else 0
    sweep = 1 if det > 0 else 0
    s = ("M" + pt(p0)) if move else ("L" + pt(p0))
    if abs(span) >= 2 * math.pi - 1e-6:
        mid = P(*circ_pt(c3, axis, r, t0 + math.pi))
        return s + "A%s %s %s 0 %d %s" % (n(rx), n(max(ry, .01)), n(ang), sweep, pt(mid)) + \
            "A%s %s %s 0 %d %s" % (n(rx), n(max(ry, .01)), n(ang), sweep, pt(p0))
    return s + "A%s %s %s %d %d %s" % (n(rx), n(max(ry, .01)), n(ang), large, sweep, pt(p1))


def arc(c3, axis, r, t0, t1, cls, **kw):
    a = {"cls": cls, "d": arc_d(c3, axis, r, t0, t1)}
    a.update(kw)
    return el("path", a)


def front_range(axis):
    """Angle range (t0, t1) of the half of a circle nearer the viewer."""
    u, v = AXES[axis] if isinstance(axis, str) else axis
    nvec = (1, 1, 1)
    du = sum(a * b for a, b in zip(u, nvec))
    dv = sum(a * b for a, b in zip(v, nvec))
    phi = math.atan2(dv, du)
    return phi - math.pi / 2, phi + math.pi / 2


def cylinder(cx, cy, z, r, h, tone="", hatch=True, top=True, cap_cls=None):
    """Upright cylinder. Silhouette heavy, cap ellipse, right half hatched."""
    out = []
    tL, tR = math.radians(135), math.radians(-45)  # screen-left and screen-right extremes
    c0 = (cx, cy, z)
    c1 = (cx, cy, z + h)
    # body: left extreme top -> down -> front arc bottom -> right extreme -> up -> back along top front arc
    body = "M" + pt(P(*circ_pt(c1, "z", r, tL))) + "L" + pt(P(*circ_pt(c0, "z", r, tL)))
    # build bottom front arc from tL down to tR going through front (pi/4)
    U, V, rx, ry, ang, det = _ell("z", r)
    sweep_dir = 1 if det > 0 else 0
    pb = P(*circ_pt(c0, "z", r, tR))
    body += "A%s %s %s 0 %d %s" % (n(rx), n(ry), n(ang), 1 - sweep_dir, pt(pb))
    body += "L" + pt(P(*circ_pt(c1, "z", r, tR)))
    pt_l = P(*circ_pt(c1, "z", r, tL))
    body += "A%s %s %s 0 %d %s" % (n(rx), n(ry), n(ang), 1 - sweep_dir, pt(pt_l)) + "Z"
    out.append(el("path", {"cls": "f-l" + tone, "d": body}))
    # right half (from front line to right extreme)
    tF = math.radians(45)
    pf_top = P(*circ_pt(c1, "z", r, tF))
    pf_bot = P(*circ_pt(c0, "z", r, tF))
    rh = ("M" + pt(pf_top) + "L" + pt(pf_bot) + "A%s %s %s 0 %d %s" % (n(rx), n(ry), n(ang), 1 - sweep_dir, pt(pb))
          + "L" + pt(P(*circ_pt(c1, "z", r, tR))) + "A%s %s %s 0 %d %s" % (n(rx), n(ry), n(ang), sweep_dir, pt(pf_top)) + "Z")
    out.append(el("path", {"cls": "f-r" + tone, "d": rh}))
    if hatch:
        out.append(el("path", {"cls": "hv", "d": rh}))
    if top:
        out.append(ellipse(c1, "z", r, cap_cls or ("f-t" + tone)))
        out.append(ellipse(c1, "z", r, "e-i"))
    out.append(el("path", {"cls": "e-o", "d": body}))
    return "".join(out)


def tube(p0, p1, r, tone="", cap=True, hatch=False):
    """Cylinder between two 3D points (orthographic silhouette)."""
    a = P(*p0)
    b = P(*p1)
    dx, dy = b[0] - a[0], b[1] - a[1]
    L = math.hypot(dx, dy) or 1
    nx, ny = -dy / L * r * K, dx / L * r * K
    quad = [(a[0] + nx, a[1] + ny), (b[0] + nx, b[1] + ny), (b[0] - nx, b[1] - ny), (a[0] - nx, a[1] - ny)]
    out = [el("path", {"cls": "f-l" + tone, "d": d_poly(quad)})]
    # darker lower half band
    half = [(a[0], a[1]), (b[0], b[1]), (b[0] - nx, b[1] - ny), (a[0] - nx, a[1] - ny)]
    if ny < 0:
        half = [(a[0], a[1]), (b[0], b[1]), (b[0] + nx, b[1] + ny), (a[0] + nx, a[1] + ny)]
    out.append(el("path", {"cls": "f-r" + tone, "d": d_poly(half)}))
    out.append(el("path", {"cls": "e-o", "d": "M%sL%sM%sL%s" % (pt(quad[0]), pt(quad[1]), pt(quad[3]), pt(quad[2]))}))
    if cap:
        ax = (p1[0] - p0[0], p1[1] - p0[1], p1[2] - p0[2])
        La = math.sqrt(sum(c * c for c in ax)) or 1
        w = tuple(c / La for c in ax)
        # two unit vectors perpendicular to axis
        tmp = (0, 0, 1) if abs(w[2]) < 0.9 else (1, 0, 0)
        u = (w[1] * tmp[2] - w[2] * tmp[1], w[2] * tmp[0] - w[0] * tmp[2], w[0] * tmp[1] - w[1] * tmp[0])
        lu = math.sqrt(sum(c * c for c in u))
        u = tuple(c / lu for c in u)
        v = (w[1] * u[2] - w[2] * u[1], w[2] * u[0] - w[0] * u[2], w[0] * u[1] - w[1] * u[0])
        # cap at whichever end faces the viewer
        end = p1 if (ax[0] + ax[1] + ax[2]) > 0 else p0
        out.append(ellipse(end, (u, v), r, "f-t" + tone))
        out.append(ellipse(end, (u, v), r, "e-o"))
    return "".join(out)


# ---------------------------------------------------------------- face-mapped text


def face_matrix(plane, p3):
    sx, sy = P(*p3)
    if plane == "top-x":      # text runs along +x on a horizontal face
        m = (C, S, -C, S)
    elif plane == "top-y":    # text runs along -y on a horizontal face
        m = (C, -S, C, S)
    elif plane == "face-l":   # vertical face facing +y, text along +x
        m = (C, S, 0, 1)
    elif plane == "face-r":   # vertical face facing +x, text along -y
        m = (C, -S, 0, 1)
    else:
        m = (1, 0, 0, 1)
    return "matrix(%s %s %s %s %s %s)" % (n(m[0]), n(m[1]), n(m[2]), n(m[3]), n(sx), n(sy))


def iso_text(txt, p3, plane, cls, anchor="start"):
    return el("text", {"cls": cls, "transform": face_matrix(plane, p3), "text-anchor": anchor if anchor != "start" else None}, esc(txt))


# ---------------------------------------------------------------- bundles


def offset_polyline(pts, d):
    """Offset a plan polyline by d (positive = to the left of travel, i.e. toward -y when travelling +x)."""
    out = []
    m = len(pts)
    for i in range(m):
        if i == 0:
            ax, ay = pts[1][0] - pts[0][0], pts[1][1] - pts[0][1]
            L = math.hypot(ax, ay)
            nx, ny = ay / L, -ax / L
            out.append((pts[0][0] + nx * d, pts[0][1] + ny * d))
        elif i == m - 1:
            ax, ay = pts[i][0] - pts[i - 1][0], pts[i][1] - pts[i - 1][1]
            L = math.hypot(ax, ay)
            nx, ny = ay / L, -ax / L
            out.append((pts[i][0] + nx * d, pts[i][1] + ny * d))
        else:
            ax, ay = pts[i][0] - pts[i - 1][0], pts[i][1] - pts[i - 1][1]
            bx, by = pts[i + 1][0] - pts[i][0], pts[i + 1][1] - pts[i][1]
            La, Lb = math.hypot(ax, ay), math.hypot(bx, by)
            n1 = (ay / La, -ax / La)
            n2 = (by / Lb, -bx / Lb)
            dot = n1[0] * n2[0] + n1[1] * n2[1]
            mx, my = (n1[0] + n2[0]), (n1[1] + n2[1])
            k = d / (1 + dot)
            out.append((pts[i][0] + mx * k, pts[i][1] + my * k))
    return out


def chamfer(pts, c):
    """Replace interior corners of an orthogonal plan polyline with 45-degree chamfers of leg c."""
    if len(pts) < 3:
        return pts
    out = [pts[0]]
    for i in range(1, len(pts) - 1):
        p, q, r = pts[i - 1], pts[i], pts[i + 1]
        ax, ay = q[0] - p[0], q[1] - p[1]
        bx, by = r[0] - q[0], r[1] - q[1]
        La, Lb = math.hypot(ax, ay), math.hypot(bx, by)
        cc = min(c, La / 2.01, Lb / 2.01)
        out.append((q[0] - ax / La * cc, q[1] - ay / La * cc))
        out.append((q[0] + bx / Lb * cc, q[1] + by / Lb * cc))
    out.append(pts[-1])
    return out
