# UI/UX review of Gates 1 to 3 (ui-ux-pro-max)

The review used the `ui-ux-pro-max` skill (`.claude/skills/ui-ux-pro-max`) on 2026-11-23. It covered the design-system query, the gsap and ux domain searches, and `references/quick-reference.md`. The `scroll-experience` skill was also read for the pinned section. The fixes below are in the code. Approved creative decisions were left unchanged.

## Gate 1: creative direction
- **Not adopted:** the skill's generic B2B suggestion of a navy palette, Inter with Playfair, and a "proof" band of logos and stats. The navy and fonts conflict with the approved As-Built pastels, and the proof band would need client names or figures we can't invent. There is one open question for David: are there real proof points we can show, such as named clients with permission or certifications?
- **Kept:** As-Built, the parchment pastels, the etched drawings, the chain reaction and David's copy. All of these pass the skill's checks: no AI purple gradients, no emoji icons, and real content throughout.

## Gate 2: design system (`docs/gate-2/build_tokens.py` → `tokens.json` / `tokens.css`)
- **Contrast on kraft:** muted text measured 4.23:1, verdigris links 4.16:1 and copper labels 4.32:1, all below the 4.5:1 minimum. New `on-kraft-*` tokens use darker tones from the same palette: ink-800, verdigris-800, #723F1F and #8A3B1E.
- **"Coming soon" stamp:** the text measured 4.35:1 on its tint. The new `approval-text-strong` token (#6E4F0C) brings it to 5.8:1.
- **Hover duration:** raised from 120ms to 150ms, the skill's minimum for hover transitions.
- **New a11y tokens:** a 3px focus ring, 44px minimum touch targets, a 12px minimum label size, and 16px body text on phones.

## Gate 3: working site
- **Text size:** card and step text raised from 14.7px to 16px. Mono labels raised from 11.5px to 12px.
- **Touch targets:** the ticker, footer, breadcrumb and text links now have 44px targets. `touch-action: manipulation` is set on controls.
- **Sticky header:** `scroll-padding-top` stops the header covering keyboard focus.
- **Line drawings (owner direction, 2026-11-23: "Everywhere"):** every illustration is now vector line art that draws itself in on canvas (`assets/lines.js`, data in `assets/lines/*.json`). Each drawing has `role="img"` and an `aria-label`; the canvas is `aria-hidden`. Drawings load only when within 600px of the screen, and redraw only when something changes.
- **Capabilities building:** the stage list scrolls normally; the drawing window is sticky (not a scroll-jacking pin) and pans floor by floor. Each floor draws from its card's position, so scrolling back un-draws it. The last card holds the finished building on screen. Phones keep a 52svh drawing window above the cards, with labels right-aligned so nothing overflows.
- **Reduced motion:** every drawing appears complete and the building section is static, with no sticky window and no pan.
- **Animation and readability:** animations never hide or move text. Floor labels and the chain meter are real text.
- **Weight:** the GSAP library and the old raster illustrations were removed; the drawing and homepage scripts are about 12 KB, and all the line data is about 190 KB compressed (the hero is 35 KB), loaded only as each drawing nears the screen.
- **Industry tabs:** keyboard operable with the arrow keys, Home and End.

Evidence (`docs/gate-3/evidence/`): desktop 1440×900 and phone 390×844 at the hero, problems, building floors 1, 3 and 5, scrolling back from floor 5, how we work, industries, a capability page, an industry page and reduced motion. No console errors and no horizontal overflow on any frame.

## Circuit board (owner direction, 2026-11-23 22:26 UTC)
- **One board:** `assets/board.js` reads the page's own hairlines and routes one copper trace along them, visiting every component in reading order. Because the trace only runs on hairlines, it never crosses text.
- **Powering up:** the trace draws to 70% down the screen and eases rather than jumping. Each area it reaches fades from paper to its pastel (coral family for problems, copper for capabilities, verdigris for how we work and industries), and its drawing changes from graphite to ink and colour.
- **Alive:** when the trace reaches the project brief, light pulses along the whole trace. Scrolling back withdraws the trace and returns areas to paper.
- **Reduced motion:** the board is fully live at once, with no pulse.
- **Robustness:** the board rebuilds on resize, font load and industry tab changes; it is `aria-hidden` and ignores pointer events.

## Heron lessons (owner's own walkthrough of heronaiapp.com, 2026-11-23)
- **Hero demonstrates the service:** the as-built drawing can be inspected. Mouse: drag a selection; it reports how many issues it found and lists them beside it. Touch and keyboard: five coral markers are real buttons (44px targets, `aria-expanded`, Escape closes). Each card names one of the five problems in David's words, one concrete stall, and links to the capability stage that fixes it (coral problem, verdigris fix). A CAD-style crosshair and coordinate readout follow a fine pointer only.
- **Message first:** no loading screen; headline and the primary action are in the first 1440×900 screen, and the nav CTA is always available.
- **Readable text:** inactive building labels raised from faint to muted; supporting text on every tint keeps at least 4.5:1.
- **One definition per service:** the stage card, ticker, footer, capability page and fix links all read from the same `CAPS` entry in `tools/build_site.py`.
- **Every scroll step changes something:** the trace advances, an area powers up, or a floor draws; no pinned section holds the page still.

## Tower scroll sequence (David's CN Tower and Toronto skyline videos)
- The capabilities section now opens on a low skyline knotted with coral cables ("Today · systems held together by workarounds") with a new intro card, 00 · Today.
- Each capability pulls its own bundle of the tangle into one part of the tower: 01 Modernize the base, 02 Connect the Y-shaped shaft with copper elevators and links from the surrounding buildings, 03 Automate the main pod, 04 Understand the upper shaft and pod, 05 Enable AI the antenna. Segments travel coral → copper (activity) → ink; the signal at the top is verdigris (improved).
- The camera rises and pulls back until the whole tower stands, then "From legacy to working AI." appears. The five labels are HTML (crisp, readable) projected next to the tower and flip side when they would leave the window.
- The tower follows the CN Tower's real profile (David, 23 Nov: non-negotiable): Y-shaped shaft of three wings, main pod with brackets and glass band, hexagonal upper shaft, upper pod, antenna, at true proportions (1 unit = 4.6 m), against a Toronto-like skyline with the lake in front. Our five capabilities replace the video's older service names.
- Built with three.js 0.170.0 (MIT), bundled to assets/tower3d.js (132 KB gzipped) from tools/tower3d/tower3d.src.js. It loads only when the section comes near; without WebGL the previous line-drawn building stays.
- Accessibility: the window has role=img and a text description of the sequence; the stage cards keep all the content. Reduced motion shows the finished tower, still.
- Checked forward and reverse on 1440×900 and 390×844, and reduced motion on both: no console errors, no horizontal overflow (evidence d17–d23, m7–m10).

## Hero redrawn around the five problems (David: "these images have nothing to do with the work stalls")
- The as-built drawing is redrawn (docs/gate-1/etch/hero2.js) so every marker sits on something you can see: two unconnected systems side by side with loose plugs (Disconnected Systems → Connect), towers of paper forms by the racks (Time Lost to Manual Work → Automate), a wall of report printouts with an empty coral frame (An Incomplete Business Picture → Understand), a deep old terminal and dot-matrix printer at the counter (Outdated Technology → Modernize), and a queue at one person's desk in front of the binders (Ready for AI → Enable AI).
- Marker positions now come from anchors exported with the drawing, so they stay on their objects. Card copy rewritten to describe what the drawing shows.
