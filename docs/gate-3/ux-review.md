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
