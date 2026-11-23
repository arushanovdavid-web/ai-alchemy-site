"""Isometric drawing kit for the AI Alchemy illustrations.

Bold ink outlines, cream top and left faces, grey right faces and copper accents, in the style David chose
(23 Nov 2026). Shapes are extruded 2D outlines, projected isometrically, painted back to front, and written as
SVG that assets/art.js draws on: every part is a <g class="pt"> with its fills (class f) and outlines (class s).

    python3 tools/iso.py            -> writes assets/art/*.svg
"""
import json, math
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
C30 = math.cos(math.pi / 6)
VIEW = (1.0, 1.0, 1.0)
INK = '#1E2228'

# materials: (top, left-facing, right-facing)
MAT = {
    'paper': ('#FBF8F1', '#F2EDE2', '#D7D1C5'),
    'plate': ('#EFE8D9', '#E4DBC8', '#C9BEA8'),
    'cu':    ('#DE9F70', '#C47A48', '#9A5A31'),
    'coral': ('#EFAE8D', '#DE8C66', '#B86543'),
    'verd':  ('#8DBDAE', '#4F9886', '#2E6E5F'),
    'ink':   ('#4A4E55', '#33373D', '#1E2228'),
    'glass': ('#EEF2EE', '#E2E9E4', '#C3CEC7'),
    'sand':  ('#F3D58E', '#E2B04A', '#B98A2A'),
}
CU = MAT['cu'][1]


def add(a, b): return (a[0] + b[0], a[1] + b[1], a[2] + b[2])
def sub(a, b): return (a[0] - b[0], a[1] - b[1], a[2] - b[2])
def mul(a, k): return (a[0] * k, a[1] * k, a[2] * k)
def dot(a, b): return a[0] * b[0] + a[1] * b[1] + a[2] * b[2]
def proj(p): return ((p[0] - p[1]) * C30, (p[0] + p[1]) * 0.5 - p[2])
def norm(a):
    l = math.sqrt(dot(a, a)) or 1
    return mul(a, 1 / l)


def hexmix(a, b, t):
    A = [int(a[i:i + 2], 16) for i in (1, 3, 5)]; B = [int(b[i:i + 2], 16) for i in (1, 3, 5)]
    return '#' + ''.join(f'{round(x + (y - x) * t):02X}' for x, y in zip(A, B))


def shade(n, mat):
    top, left, right = MAT[mat] if isinstance(mat, str) else mat
    n = norm(n)
    if n[2] > 0.72: return top
    th = math.degrees(math.atan2(n[1], n[0]))            # 0 = faces +x (right, grey); 90 = faces +y (left, light)
    s = min(1, max(0, (th + 10) / 100))
    c = hexmix(right, left, s)
    return hexmix(c, top, max(0, n[2]) / 0.72) if n[2] > 0.05 else c


def area(poly):
    return sum(poly[i][0] * poly[(i + 1) % len(poly)][1] - poly[(i + 1) % len(poly)][0] * poly[i][1] for i in range(len(poly))) / 2


def d_of(pts, close=True):
    s = 'M' + 'L'.join(f'{x:.1f},{y:.1f}' for x, y in pts)
    return s + ('Z' if close else '')


# ---------------------------------------------------------------- 2D outlines
def rrect(w, h, r=0, seg=5, cx=0, cy=0):
    r = min(r, w / 2, h / 2)
    if r <= 0: return [(cx - w / 2, cy - h / 2), (cx + w / 2, cy - h / 2), (cx + w / 2, cy + h / 2), (cx - w / 2, cy + h / 2)]
    pts = []
    for qx, qy, a0 in ((1, -1, -90), (1, 1, 0), (-1, 1, 90), (-1, -1, 180)):
        ox, oy = cx + qx * (w / 2 - r), cy + qy * (h / 2 - r)
        for k in range(seg + 1):
            a = math.radians(a0 + 90 * k / seg); pts.append((ox + r * math.cos(a), oy + r * math.sin(a)))
    return pts


def circle(r, n=40, cx=0, cy=0):
    return [(cx + r * math.cos(2 * math.pi * k / n), cy + r * math.sin(2 * math.pi * k / n)) for k in range(n)]


def gear(R, depth, teeth, cx=0, cy=0):
    pts, rr = [], R - depth
    for t in range(teeth):
        a = 2 * math.pi * t / teeth; step = 2 * math.pi / teeth
        for f, rad in ((0.0, rr), (0.18, rr), (0.30, R), (0.62, R), (0.74, rr)):
            for k in range(3 if rad == R and f == 0.30 else 1):
                pass
            pts.append((cx + rad * math.cos(a + f * step), cy + rad * math.sin(a + f * step)))
        for k in range(1, 3):     # root arc
            aa = a + (0.74 + 0.26 * k / 3) * step; pts.append((cx + rr * math.cos(aa), cy + rr * math.sin(aa)))
    return pts


def sparkle(R, n=48, cx=0, cy=0):     # four-point star (astroid)
    return [(cx + R * math.cos(t) ** 3, cy + R * math.sin(t) ** 3) for t in (2 * math.pi * k / n for k in range(n))]


def arrow_up(shaft_w, shaft_h, head_w, head_h, cx=0, y0=0):
    return [(cx - shaft_w / 2, y0), (cx + shaft_w / 2, y0), (cx + shaft_w / 2, y0 + shaft_h), (cx + head_w / 2, y0 + shaft_h),
            (cx, y0 + shaft_h + head_h), (cx - head_w / 2, y0 + shaft_h), (cx - shaft_w / 2, y0 + shaft_h)]


def arc_arrow(r0, r1, a0, a1, head=26, n=24, cx=0, cy=0):
    """a curved arrow along a ring from angle a0 to a1 (degrees, counter-clockwise), head at a1"""
    out = [(cx + r1 * math.cos(math.radians(a0 + (a1 - a0) * k / n)), cy + r1 * math.sin(math.radians(a0 + (a1 - a0) * k / n))) for k in range(n + 1)]
    inn = [(cx + r0 * math.cos(math.radians(a0 + (a1 - a0) * k / n)), cy + r0 * math.sin(math.radians(a0 + (a1 - a0) * k / n))) for k in range(n + 1)]
    am = math.radians(a1); rm = (r0 + r1) / 2; tang = (-math.sin(am), math.cos(am)); rad = (math.cos(am), math.sin(am))
    hw = (r1 - r0) / 2 + 12
    tip = (cx + rm * rad[0] + tang[0] * head, cy + rm * rad[1] + tang[1] * head)
    h_out = (cx + (rm + hw) * rad[0], cy + (rm + hw) * rad[1]); h_in = (cx + (rm - hw) * rad[0], cy + (rm - hw) * rad[1])
    return out + [h_out, tip, h_in] + inn[::-1]


# ---------------------------------------------------------------- 3D parts
class Part:
    def __init__(self, key=None, g=0, acc=False):
        self.ops, self.key, self.g, self.acc, self.pts3 = [], key, g, acc, []

    def fill(self, pts3, color):
        self.pts3 += pts3; self.ops.append(('f', d_of([proj(p) for p in pts3]), color))

    def stroke(self, pts3, w=2, close=False):
        self.pts3 += pts3; self.ops.append(('s', d_of([proj(p) for p in pts3], close), w))

    def trace(self, pts3, w=5, color=None):
        self.pts3 += pts3; self.ops.append(('t', d_of([proj(p) for p in pts3], False), w, color or CU))

    def prism(self, outer, holes=(), o=(0, 0, 0), u=(1, 0, 0), v=(0, 1, 0), w=(0, 0, 1), mat='paper', lw=2):
        if area(outer) < 0: outer = outer[::-1]
        holes = [h[::-1] if area(h) > 0 else h for h in holes]
        P = lambda q, top: add(add(add(o, mul(u, q[0])), mul(v, q[1])), w if top else (0, 0, 0))
        capTop = dot(w, VIEW) > 0
        sides = []
        for poly, inner in [(outer, False)] + [(h, True) for h in holes]:
            n = len(poly); vis = []
            for i in range(n):
                a, b = poly[i], poly[(i + 1) % n]
                nn = add(mul(u, b[1] - a[1]), mul(v, -(b[0] - a[0])))
                vis.append(dot(nn, VIEW) > 1e-6)
                if vis[-1]:
                    q = [P(a, False), P(b, False), P(b, True), P(a, True)]
                    sides.append((inner, sum(dot(x, VIEW) for x in q), q, nn))
            if not inner:
                far = lambda q: P(q, not capTop)
                run = []
                for i in range(n):           # far edges of visible sides, joined into runs
                    if vis[i]:
                        if not run: run = [far(poly[i])]
                        run.append(far(poly[(i + 1) % n]))
                    elif run: self._later = getattr(self, '_later', []) + [('s', run, lw)]; run = []
                if run: self._later = getattr(self, '_later', []) + [('s', run, lw)]
                for i in range(n):           # edges along the extrusion: silhouettes and sharp corners
                    pv, nv = vis[i - 1], vis[i]
                    a, b, c = poly[i - 1], poly[i], poly[(i + 1) % n]
                    t1 = math.atan2(b[1] - a[1], b[0] - a[0]); t2 = math.atan2(c[1] - b[1], c[0] - b[0])
                    turn = abs((math.degrees(t2 - t1) + 180) % 360 - 180)
                    if pv != nv or (pv and nv and turn > 24):
                        self._later = getattr(self, '_later', []) + [('s', [P(b, False), P(b, True)], lw)]
        for inner, _, q, nn in sorted(sides, key=lambda s: (s[0], s[1])):
            self.fill(q, shade(nn, mat))
        cap = lambda poly: [P(q, capTop) for q in poly]
        capn = w if capTop else mul(w, -1)
        if holes:
            self.pts3 += cap(outer)
            d = d_of([proj(p) for p in cap(outer)]) + ''.join(d_of([proj(p) for p in cap(h)]) for h in holes)
            self.ops.append(('f', d, shade(capn, mat)))
        else:
            self.fill(cap(outer), shade(capn, mat))
        for _, pts, lw2 in getattr(self, '_later', []): self.stroke(pts, lw2)
        self._later = []
        self.stroke(cap(outer), lw, close=True)
        for h in holes: self.stroke(cap(h), lw * 0.8, close=True)
        return self

    def decal(self, poly, o, u, v, color=None, lw=1.6, close=True):
        P = [add(add(o, mul(u, q[0])), mul(v, q[1])) for q in poly]
        if color: self.fill(P, color)
        if lw: self.stroke(P, lw, close=close)
        return self

    def box(self, x, y, z, w, d, h, r=0, mat='paper', lw=2):
        return self.prism(rrect(w, d, r, cx=x + w / 2, cy=y + d / 2), o=(0, 0, z), w=(0, 0, h), mat=mat, lw=lw)


def face(o, axis):
    """frame for drawing on the +x or +y face of something: returns (o, u, v) with u along the face and v up"""
    return (o, (0, -1, 0), (0, 0, 1)) if axis == 'x' else (o, (1, 0, 0), (0, 0, 1))


# ---------------------------------------------------------------- scene and SVG
class Scene:
    def __init__(self): self.parts, self.anchors = [], {}

    def part(self, g=0, key=None, acc=False):
        p = Part(key, g, acc); self.parts.append(p); return p

    def anchor(self, name, p3): self.anchors[name] = proj(p3)

    def svg(self, pad=24):
        xs, ys = [], []
        for p in self.parts:
            for q in p.pts3: x, y = proj(q); xs.append(x); ys.append(y)
        x0, y0, x1, y1 = min(xs) - pad, min(ys) - pad, max(xs) + pad, max(ys) + pad
        for p in self.parts:
            if p.key is None: p.key = sum(dot(q, VIEW) for q in p.pts3) / max(1, len(p.pts3))
        order = sorted(range(len(self.parts)), key=lambda i: self.parts[i].key)
        groups = {}
        for i in order: groups.setdefault(self.parts[i].g, []).append(i)
        rank = {}
        for g, ids in groups.items():
            st = [i for i in ids if not self.parts[i].acc]; ac = [i for i in ids if self.parts[i].acc]
            for k, i in enumerate(st): rank[i] = 0.7 * k / max(1, len(st))
            for k, i in enumerate(ac): rank[i] = 0.72 + 0.26 * k / max(1, len(ac))
        out = []
        for i in order:
            p = self.parts[i]; body = []
            for op in p.ops:
                if op[0] == 'f': body.append(f'<path class="f" d="{op[1]}" fill="{op[2]}" stroke="{op[2]}"/>')
                elif op[0] == 's': body.append(f'<path class="s{" s1" if op[2] < 1.8 else ""}" d="{op[1]}"/>')
                else:
                    body.append(f'<path class="t" d="{op[1]}" style="stroke-width:{op[2] + 3}px"/>')
                    body.append(f'<path class="tc" d="{op[1]}" style="stroke-width:{op[2]}px;stroke:{op[3]}"/>')
            out.append(f'<g class="pt" data-g="{p.g}" data-o="{rank[i]:.3f}"{" data-acc=\"1\"" if p.acc else ""}>{"".join(body)}</g>')
        W, H = x1 - x0, y1 - y0
        A = {k: [round(v[0] - x0, 1), round(v[1] - y0, 1)] for k, v in self.anchors.items()}
        return (f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {W:.0f} {H:.0f}" data-a=\'{json.dumps(A, separators=(",", ":"))}\'>'
                f'<g transform="translate({-x0:.1f},{-y0:.1f})">{"".join(out)}</g></svg>'), W, H, A
