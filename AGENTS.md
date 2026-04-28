# AGENTS.md

## Purpose

This file provides repository-specific instructions for coding agents working in this project.

Read this file before making changes.
Then read the docs listed below.

This repo is a human-directed, AI-assisted implementation system for building premium authority websites for high-ticket coaches and consultants.

The human defines:

- strategy
- copy
- wireframes
- layout direction
- visual direction
- media
- final approval

The agent implements:

- repo structure
- reusable systems
- components
- sections
- pages
- cleanup
- debugging
- documentation updates tied to implementation

Do not improvise creative direction.

---

## Read first

Before making changes, read these files in order:

1. `README.md`
2. `docs/PRODUCT-REQUIREMENTS.md`
3. `docs/NON-FUNCTIONAL-REQUIREMENTS.md`
4. `docs/AGENT-GUARDRAILS.md`
5. `docs/FILE-MAP.md`
6. `docs/EDITING-GUIDE.md`
7. `docs/DESIGN-SYSTEM-SPEC.md`
8. `docs/DEBUGGING.md`
9. `docs/DEPLOYMENT.md`
10. `docs/DEFINITION-OF-DONE.md`

For template or client-project work, also read the relevant mode guide:

- `docs/SYSTEM-DEVELOPMENT-MODE.md`
- `docs/CLIENT-PROJECT-MODE.md`
- `docs/NEW-CLIENT-PROJECT-GUIDE.md`
- `docs/CLIENT-INTAKE-BRIEF.md`

If any of these files conflict with the codebase, flag the conflict explicitly.

---

## Stack

Use this stack unless explicitly told otherwise:

- Next.js App Router
- TypeScript
- Tailwind CSS v4
- CSS variable tokens as design-system source of truth
- MDX + structured `data/` files for v1 content
- Vercel for deployment
- pnpm for package management
- ESLint + Prettier

Do not introduce a CMS, auth, database, or heavy dependency set in v1 unless explicitly approved.

---

## Project goal

This repo is not for building one-off pages fast and messily.

It is for building:

- a reusable premium website starter system
- with clean design-system foundations
- reusable primitives
- reusable sections
- controlled variants/presets
- and clear edit paths

In the current phase, we are building:

- the boilerplate/starter system
- plus one real reference homepage implementation

We are NOT building a full client website yet.

---

## Working rules

### Always

- Read relevant docs before changing code.
- Reuse existing components before creating new ones.
- Reuse tokens before hardcoding values.
- Make the smallest correct change.
- Keep files readable and easy to locate.
- Preserve responsive behavior.
- Preserve accessibility basics.
- Keep implementation aligned with documented structure.
- Update docs when implementation changes make docs inaccurate.

### Ask first before

- adding dependencies
- changing architecture
- creating a new pattern not described in docs
- changing shared token structure significantly
- introducing a CMS
- changing deployment assumptions
- making broad refactors
- changing more than necessary to complete the task

### Never

- invent strategy
- invent final copy
- invent brand direction
- redesign approved layouts without instruction
- duplicate components unnecessarily
- add heavy libraries casually
- create giant mixed-responsibility files
- hardcode random design values when tokens exist
- claim work is complete without validation
- leave hidden assumptions undocumented

---

## Repo structure

Use the structure defined in `docs/FILE-MAP.md`.

High-level expectations:

- `app/` for routes and page composition
- `components/` for reusable UI and sections
- `content/` for MDX and authored content
- `data/` for structured reusable content
- `lib/` for utilities, validators, integrations, analytics, SEO
- `styles/` for tokens and global style foundations
- `public/` for static assets
- `docs/` for documentation

Do not create random folders when an existing location fits.

---

## Styling rules

Tailwind is an implementation tool, not the design system.

The design system source of truth must remain:

- CSS variable tokens
- semantic token mapping
- reusable primitives
- reusable sections
- documented layout rules

Use Tailwind carefully.
Avoid arbitrary-value sprawl.
Avoid utility soup when a reusable pattern is more appropriate.

Prefer:

- tokens
- semantic usage
- extracted reusable patterns
- clear component APIs

---

## Current implementation scope

Current priority:

### Phase 1

- scaffold repo
- establish base config
- establish token foundations
- establish layout primitives
- build primitive components
- build first 3 sections:
  - Hero
  - Services
  - Testimonials

### Phase 2

- compose one homepage from those 3 sections

Do not build extra pages or systems unless explicitly requested.

---

## Commands

Use pnpm.

Typical commands:

```bash
pnpm install
pnpm dev
pnpm check
pnpm lint
pnpm typecheck
pnpm build
```

If a command is missing from `package.json`, add it only if necessary and keep it standard.

Prefer file-scoped checks when possible.
Run broader checks before claiming completion.
Use `pnpm check` as the standard full local gate.

---

## Implementation standards

When writing code:

- Keep components small.
- Keep props typed.
- Use server components by default where reasonable.
- Use client components only when interactivity requires them.
- Use Grid for structured layout.
- Use Flexbox for one-dimensional alignment.
- Keep `main` full-width unless a page truly needs an outer constrained wrapper.
- Use inner containers for width control.
- Make content-edit paths obvious.

When creating reusable code:

- prefer clarity over cleverness
- prefer composition over giant configuration objects
- prefer scalable patterns over short-term hacks

---

## Reporting format

Before major implementation:

1. summarize the task
2. identify blockers or missing inputs
3. propose the file/folder plan

After meaningful implementation:

- list files created or changed
- explain what was done
- note assumptions
- note deviations from docs
- note anything that still needs review

Do not silently make important decisions.

---

## Done criteria

Do not mark work complete unless all relevant items are true:

- implementation matches approved scope
- no unnecessary duplication was introduced
- responsive behavior was checked
- accessibility basics were preserved
- lint passes
- typecheck passes
- build passes
- docs remain aligned
- the work satisfies `docs/DEFINITION-OF-DONE.md`

“Looks done” is not done.

---

## When stuck

If something is unclear:

- inspect existing patterns first
- inspect the docs
- reduce the scope to the smallest clear step
- ask a focused question instead of guessing

Escalate ambiguity.
Do not improvise your way into repo entropy.

---

## Maintenance rule

Keep this file updated as the repo evolves.

If project structure, commands, stack, or standards change, update this file in the same change set.
