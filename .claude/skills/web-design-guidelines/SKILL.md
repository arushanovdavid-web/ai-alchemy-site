---
name: web-design-guidelines
description: Review UI code for Web Interface Guidelines compliance. Use when asked to "review my UI", "check accessibility", "audit design", "review UX", or "check my site against best practices".
argument-hint: <file-or-pattern>
---

# Web Interface Guidelines

Review files for compliance with the Web Interface Guidelines.

## How It Works

1. Read the rules in `references/guidelines.md` (next to this file). It is a pinned copy of
   vercel-labs/web-interface-guidelines `command.md`, so reviews do not depend on fetching
   instructions from the network.
2. Read the specified files (or ask which files or pattern to review).
3. Check them against every rule in the guidelines.
4. Output findings in the terse `file:line` format the guidelines describe.

Some rules are written for React (`onKeyDown`, `htmlFor`, hydration). On this static HTML
site, apply the plain-HTML equivalent and skip rules that do not apply.

To refresh the pinned copy, download
https://raw.githubusercontent.com/vercel-labs/web-interface-guidelines/main/command.md,
review the diff, and replace `references/guidelines.md`.
