"""Writes docs/gate-2/tokens.json (primitive -> semantic -> component) for the As-Built design system.
Run: python3 docs/gate-2/build_tokens.py, then the design-system skill's generate-tokens.cjs to make tokens.css."""
import json, os
def c(v): return {"$value": v, "$type": "color"}
def d(v): return {"$value": v, "$type": "dimension"}
def f(v): return {"$value": v, "$type": "fontFamily"}
def o(v, t="other"): return {"$value": v, "$type": t}
def ref(p, t="color"): return {"$value": "{" + p + "}", "$type": t}

primitive = {
  "color": {
    "paper": {"100": c("#F2EDE3"), "200": c("#E9E2D3"), "300": c("#DED0B6")},   # parchment, deep parchment, kraft
    "ink": {"900": c("#1C2026"), "800": c("#2C3036"), "600": c("#5B5F63"), "400": c("#8C9196")},
    "coral": {"400": c("#E39A72"), "700": c("#9A4424")},
    "verdigris": {"100": c("#CFE0D6"), "600": c("#1F6B5C"), "800": c("#174F44")},
    "sand": {"400": c("#E2B04A"), "700": c("#86600F")},
    "copper": {"500": c("#B5703F"), "700": c("#8A4E26")},
  },
  "font": {
    "display": f("'Archivo', 'Arial Narrow', sans-serif"),
    "text": f("'IBM Plex Sans', system-ui, sans-serif"),
    "mono": f("'IBM Plex Mono', ui-monospace, monospace"),
  },
  "size": {  # fluid type: 390px phone -> 1440px desktop
    "display-xl": d("clamp(2.5rem, 1.1rem + 5.4vw, 5.75rem)"),
    "display-l": d("clamp(2.1rem, 1.2rem + 3.4vw, 4rem)"),
    "display-m": d("clamp(1.5rem, 1.1rem + 1.4vw, 2.125rem)"),
    "display-s": d("clamp(1.25rem, 1.05rem + .7vw, 1.625rem)"),
    "body-l": d("1.0625rem"), "body": d("1rem"), "body-s": d("0.875rem"), "meta": d("0.75rem"),
  },
  "leading": {"tight": o("0.94"), "snug": o("1.15"), "body": o("1.55")},
  "space": {k: d(v) for k, v in {"1": "4px", "2": "8px", "3": "12px", "4": "16px", "5": "20px", "6": "24px", "8": "32px", "10": "40px", "12": "48px", "16": "64px", "20": "80px", "24": "96px", "32": "128px"}.items()},
  "line": {"hair": d("1px"), "rule": d("1.5px"), "bold": d("2px")},
  "duration": {"fast": o("120ms", "duration"), "base": o("240ms", "duration"), "slow": o("480ms", "duration"), "draw": o("1200ms", "duration")},
  "ease": {"standard": o("cubic-bezier(.2,.7,.1,1)", "cubicBezier"), "draw": o("cubic-bezier(.65,0,.35,1)", "cubicBezier"), "linear": o("linear", "cubicBezier")},
}
P = "primitive.color."
semantic = {
  "color": {
    "bg": ref(P + "paper.100"), "surface": ref(P + "paper.200"), "surface-kraft": ref(P + "paper.300"),
    "fg": ref(P + "ink.900"), "fg-body": ref(P + "ink.800"), "fg-muted": ref(P + "ink.600"), "fg-faint": ref(P + "ink.400"),
    "line": ref(P + "ink.900"), "line-faint": ref(P + "ink.400"),
    "problem": ref(P + "coral.400"), "problem-text": ref(P + "coral.700"),
    "action": ref(P + "verdigris.600"), "action-hover": ref(P + "verdigris.800"), "action-tint": ref(P + "verdigris.100"), "on-action": ref(P + "paper.100"),
    "approval": ref(P + "sand.400"), "approval-text": ref(P + "sand.700"),
    "pulse": ref(P + "copper.500"), "pulse-text": ref(P + "copper.700"),
    "focus": ref(P + "verdigris.600"),
  },
  "font": {"display": ref("primitive.font.display", "fontFamily"), "text": ref("primitive.font.text", "fontFamily"), "mono": ref("primitive.font.mono", "fontFamily")},
  "space": {"cell": ref("primitive.space.6", "dimension"), "cell-tight": ref("primitive.space.4", "dimension"), "frame": ref("primitive.space.4", "dimension"), "section": ref("primitive.space.24", "dimension")},
  "motion": {"hover": ref("primitive.duration.fast", "duration"), "reveal": ref("primitive.duration.slow", "duration"), "draw": ref("primitive.duration.draw", "duration")},
}
S = "semantic.color."
component = {
  "nav": {"height": d("48px"), "bg": ref(S + "bg"), "divider": ref(S + "line"), "cta-bg": ref(S + "action"), "cta-fg": ref(S + "on-action")},
  "button": {"height": d("48px"), "padding-x": ref("primitive.space.6", "dimension"), "bg": ref(S + "action"), "bg-hover": ref(S + "action-hover"), "fg": ref(S + "on-action")},
  "sheet": {"border": ref(S + "line"), "label": ref(S + "fg-muted"), "inset": ref("semantic.space.frame", "dimension")},
  "problem": {"marker": ref(S + "problem-text"), "index": ref(S + "fg-muted")},
  "stage": {"lamp-off": ref(S + "fg-faint"), "lamp-on": ref(S + "pulse"), "label": ref(S + "pulse-text"), "service": ref(S + "action")},
  "stamp": {"border": ref(S + "approval"), "fg": ref(S + "approval-text")},
  "field": {"rule": ref(S + "line"), "rule-focus": ref(S + "action"), "label": ref(S + "fg-muted"), "error": ref(S + "problem-text")},
}
out = {"$schema": "https://design-tokens.org/schema.json", "primitive": primitive, "semantic": semantic, "component": component}
json.dump(out, open(os.path.join(os.path.dirname(__file__), "tokens.json"), "w"), indent=2)
print("tokens.json written")
