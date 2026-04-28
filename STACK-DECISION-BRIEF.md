# STACK-DECISION-BRIEF

We are using the following stack for v1 of the Premium Authority Website Implementation System.

## Final stack

- Framework: Next.js App Router
- Language: TypeScript
- Styling: Tailwind CSS v4
- Design system source of truth: CSS variable tokens
- Content model for v1: local MDX + structured `data/` files
- Deployment target: Vercel
- Package manager: pnpm
- Lint/format: ESLint + Prettier
- Component architecture: reusable primitives + reusable sections + typed props
- Motion: keep minimal for v1; do not add a motion library unless required
- CMS: not included in v1
- Database: not included in v1

## Why this stack

We are not building a full CMS-backed platform yet.
We are building a production-grade reusable boilerplate plus one real homepage reference implementation.

This stack is chosen because it gives us:

- strong support for modern website architecture,
- clean route-based page composition,
- easy expansion into blog/content workflows,
- a good deployment path,
- and a clean fit for a code-first, AI-assisted workflow.

## Framework rules

Use Next.js App Router, not Pages Router.

Required route structure should follow `app/` conventions.
Use server components by default where reasonable.
Use client components only when interactivity actually requires them.

## Styling rules

Use Tailwind CSS v4 for implementation speed, but do NOT let Tailwind become the design system.

The design system source of truth must be:

- CSS variable tokens
- semantic token mapping
- reusable component patterns
- documented layout primitives

Use Tailwind as an implementation layer, not as permission to spray random utility soup everywhere.

### Styling expectations

- tokens first
- semantic values over hardcoded values
- reusable classes/patterns where appropriate
- restrained use of arbitrary values
- avoid one-off visual hacks
- preserve obvious edit paths

## Content rules for v1

Use:

- `content/` for MDX-authored content like blog posts or long-form content
- `data/` for structured reusable content like nav items, testimonials, FAQs, services, and CTAs

Do NOT add a CMS in this phase.
Do NOT add Payload in this phase.
Do NOT add a database in this phase.

If later we need client-safe editing, preview workflows, redirects, or admin-managed content operations, we can evaluate Payload in v2.

## Deployment rules

The deployment target is Vercel.

Use the standard environment model:

- Local
- Preview
- Production

Set the project up so it works cleanly with environment-specific variables.
Do not hardcode secrets.
Use `.env.local` locally and document all required variables.

## Package manager

Use `pnpm`.

## Required core packages

Install only what is necessary for:

- Next.js
- React
- TypeScript
- Tailwind CSS v4
- MDX support
- linting/formatting
- class composition helpers if truly needed

Keep dependencies minimal.
Do not add packages casually.

## Allowed helper libraries

These are acceptable if needed and justified:

- `clsx`
- `tailwind-merge`
- `class-variance-authority` only if variant handling genuinely benefits from it

Do not add:

- heavy UI libraries
- component kits
- animation libraries
- CMS packages
- form libraries
unless explicitly approved.

## Initial implementation scope

In this first build phase, create:

### Foundation

- repo structure based on FILE-MAP.md
- base Next.js App Router project
- Tailwind v4 setup
- CSS token foundation
- base/global styles
- layout primitives
- typography foundations

### Primitives

- Container
- Section
- Button
- Heading
- Text
- Card
- Badge
- basic form primitives if needed

### Sections

- Hero
- Services
- Testimonials

### Page

- one homepage route using those 3 sections

## Architecture rules

- Keep `main` full-width unless a page truly needs a constrained outer shell
- Use inner containers for content width control
- Use Grid for structured composition
- Use Flexbox for directional alignment and smaller internal layouts
- Keep sections modular
- Keep props typed
- Keep files small and obvious
- Avoid giant multi-purpose components

## MDX rules

Set up MDX in a way compatible with Next.js App Router.
Support future blog/article expansion, but only scaffold what is necessary for v1.

Do not overbuild the blog system yet.

## Performance rules

Do not introduce obvious bloat.
Prefer server-rendered patterns where possible.
Do not load client-side code unless needed.
Avoid unnecessary libraries.

## Accessibility rules

Use semantic HTML.
Preserve heading hierarchy.
Preserve visible focus states.
Use accessible button/link/form patterns.

## Non-goals for this phase

Do NOT:

- build extra pages
- build a CMS
- build authentication
- build admin dashboards
- build a complex blog engine
- build advanced animation systems
- build booking integrations unless specifically requested
- invent final brand direction
- invent final copy

## Decision rule

If implementation pressure suggests adding more tools, packages, or systems, do not assume.
Pause and justify the addition first.

## Output expectations

Before coding:

1. summarize the chosen stack
2. list packages you plan to install
3. propose the repo scaffold
4. identify any conflicts with the docs
5. wait if any major decision is unclear

During implementation:

- work in small steps
- report what was created
- report assumptions
- report any doc updates required

Important: optimize for a clean starter system, not maximum framework cleverness.
Boring, clean, reusable architecture is the goal.
