# Project skills

Claude Code loads these automatically when working in this repo. Each was reviewed before
being added; test folders and generated files were stripped.

## Design and UI
| Skill | Use it for | Source |
|---|---|---|
| frontend-design | Distinctive visual direction, type, layout; avoiding templated "AI" looks | aitmpl.com (Anthropic, Apache-2.0) |
| ui-ux-pro-max | Searchable UX rules, palettes, font pairings, style and landing-page patterns (local Python search, no network) | ui-ux-pro-max-skill pack (MIT) |
| design-system | Token architecture (primitive → semantic → component), CSS variables, spacing/type scales | ui-ux-pro-max-skill pack |
| brand | Brand voice, visual identity, messaging, consistency reviews | ui-ux-pro-max-skill pack |
| banner-design | Social covers, OG images, ad banners, hero visuals | ui-ux-pro-max-skill pack |
| scroll-experience | Scroll-driven storytelling and interactions | aitmpl.com |
| web-design-guidelines | Terse `file:line` UI review against Vercel's Web Interface Guidelines (pinned locally) | aitmpl.com + vercel-labs |
| accessibility-auditor | WCAG 2.1 AA audits, ARIA, keyboard and screen-reader checks | aitmpl.com |

## Performance and SEO
| Skill | Use it for | Source |
|---|---|---|
| web-performance-optimization | Core Web Vitals, image/font loading, caching | aitmpl.com |
| seo-audit | Technical and on-page SEO health checks | aitmpl.com |
| schema-markup | JSON-LD structured data (Organization, Service, FAQ, Breadcrumb) | aitmpl.com |

## Copy and conversion
| Skill | Use it for | Source |
|---|---|---|
| copywriting | Writing homepage, service and industry page copy | aitmpl.com |
| copy-editing | Reviewing and tightening existing copy | aitmpl.com |
| page-cro | Improving conversion on marketing pages | aitmpl.com |
| form-cro | Contact / lead form optimization | aitmpl.com |
| marketing-psychology | Behavioral principles behind persuasive pages | aitmpl.com |
| analytics-tracking | GA4 / event / UTM tracking setup and audits | aitmpl.com |
| humanizer | Removing AI-writing tells from site copy, PR text and docs without changing facts | humanizer (Siqi Chen, MIT) |

## Left out on purpose
- `design` (pack): an all-in-one router whose logo/icon scripts send prompts to third-party
  image APIs (Atlas Cloud, MuAPI, UberLLM) and load API keys from `.env` files.
- `ui-styling` (pack): shadcn/ui + React + Tailwind, which this static HTML site does not use (5.8 MB of fonts).
- `slides` (pack): presentations, not the website.
- The rest of the 945 aitmpl.com skills: backend frameworks, scientific, ML research, sales and
  ops tooling, and API-key-based scrapers or image generators unrelated to this site.
