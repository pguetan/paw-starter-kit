# Premium Authority Website Implementation System

A reusable, code-first website starter system for building premium authority websites for high-ticket coaches and consultants.

This system is designed for human-directed, AI-assisted implementation:
- humans own strategy, copy, wireframes, layout, visual direction, and approval,
- the AI agent implements those decisions in clean, reusable, maintainable code,
- the system enforces speed, consistency, and quality without generic-looking output.

---

## What this is

This repo is not a no-code builder and not an AI website designer.

It is an implementation system for building premium websites using:
- reusable components,
- modular sections,
- controlled variants and presets,
- design tokens,
- clear file structure,
- documented workflows,
- and agent guardrails.

The goal is to help the team ship premium websites faster without sacrificing distinctiveness, maintainability, or code quality.

---

## Core principles

- Premium over trendy
- Distinct over generic
- Reusable over one-off
- Human-directed creativity over AI improvisation
- Controlled variation over chaos
- Clean implementation over hacks
- Speed without AI slop

---

## How the system works

### Human-owned responsibilities
- Discovery
- Strategy
- Messaging and copy
- Information architecture
- Wireframes
- Layout design
- Visual direction
- Media selection
- Final QA and approval

### AI-agent responsibilities
- Implement approved designs in code
- Reuse and extend approved components carefully
- Assemble pages from approved assets and inputs
- Keep code clean, modular, and maintainable
- Support responsiveness, debugging, and cleanup
- Follow repo conventions and guardrails

### AI-agent is not allowed to
- invent strategy,
- rewrite approved copy,
- redesign layouts without approval,
- create random new patterns,
- or improvise visual direction.

---

## System documents

Start here when working in the repo:

- `docs/PRODUCT-REQUIREMENTS.md` — product scope, goals, users, and feature requirements
- `docs/NON-FUNCTIONAL-REQUIREMENTS.md` — performance, accessibility, security, SEO, analytics, and QA standards
- `docs/AGENT-GUARDRAILS.md` — rules for AI-assisted implementation
- `docs/FILE-MAP.md` — where everything lives in the codebase
- `docs/EDITING-GUIDE.md` — how to safely make common changes
- `docs/DESIGN-SYSTEM-SPEC.md` — tokens, layout, typography, sections, variants, and presets
- `docs/DEBUGGING.md` — standard debugging workflow
- `docs/DEPLOYMENT.md` — preview, production, rollback, and release process
- `docs/SYSTEM-DEVELOPMENT-MODE.md` — rules for improving the starter system
- `docs/CLIENT-PROJECT-MODE.md` — rules for building client projects from the starter
- `docs/NEW-CLIENT-PROJECT-GUIDE.md` — how to start a separate client repo
- `docs/COMPONENT-INVENTORY.md` and `docs/SECTION-INVENTORY.md` — reusable building-block inventory
- `docs/VARIANT-PRESET-GUIDE.md` — controlled variation rules
- `docs/THEME-OVERRIDE-GUIDE.md` — client theme override workflow
- `docs/QA-CHECKLIST.md` — implementation and launch QA checklist

Read these in order if you are new:
1. `PRODUCT-REQUIREMENTS.md`
2. `AGENT-GUARDRAILS.md`
3. `FILE-MAP.md`
4. `DESIGN-SYSTEM-SPEC.md`
5. `EDITING-GUIDE.md`

---

## Suggested repo structure

```txt
project-root/
├─ app/
├─ components/
├─ content/
├─ data/
├─ docs/
├─ lib/
├─ public/
├─ styles/
├─ tests/                 # optional
├─ package.json
├─ tsconfig.json
├─ next.config.mjs        # or vite.config.ts depending on stack
├─ mdx-components.tsx     # if using Next.js MDX
└─ README.md
```

---

## Common folders

### `app/`
Routes, page entry points, layouts, route-level metadata, and page composition.

### `components/`
Reusable UI primitives, sections, blog/article components, navigation, and forms.

### `content/`
Authored content such as blog posts, author files, and legal content.

### `data/`
Structured content such as navigation, testimonials, FAQs, services, and CTA data.

### `lib/`
Utilities, validators, integrations, SEO helpers, analytics logic, and CMS adapters.

### `styles/`
CSS variable tokens, prose styles, utilities, theme foundations, and shared style architecture.

### `public/`
Images, icons, OG assets, downloads, and public static files.

### `docs/`
The operating system of the repo.

---

## Working rules

### Before building
Make sure you have:
- approved page list,
- approved copy,
- approved wireframes or layout references,
- approved visual direction,
- approved media assets,
- required integrations,
- and content/editability requirements.

### While building
- Reuse existing components before creating new ones.
- Use tokens before hardcoding values.
- Use variants and presets before duplicating sections.
- Make the smallest correct change.
- Keep files readable and easy to locate.
- Escalate ambiguity instead of guessing.

### Before marking work done
- Check responsiveness
- Check accessibility basics
- Check forms and links
- Check metadata
- Check shared component side effects
- Check docs if workflow or structure changed

---

## Local setup

This repo uses Next.js App Router, TypeScript, Tailwind CSS v4, local MDX, and `pnpm`.

### 1. Install dependencies
```bash
pnpm install
```

### 2. Set up environment variables
Create a local env file:

```bash
cp .env.example .env.local
```

Add the required values for:
- site URL
- form/integration endpoints if added later
- analytics keys if added later

CMS and database credentials are not required in v1.

### 3. Start development server
```bash
pnpm run dev
```

### 4. Run checks

```bash
pnpm run check
```

---

## Standard workflow

1. Review approved inputs.
2. Read the relevant docs.
3. Identify reusable components and sections first.
4. Implement the smallest correct slice.
5. Test desktop and mobile behavior.
6. Run checks.
7. Document important changes if needed.
8. Deploy to Preview first.
9. Approve before Production.

---

## Common tasks

### Change content
Check:
- `content/`
- `data/`
- CMS source if applicable

### Change reusable section layout
Check:
- `components/sections/`

### Change tokens, spacing, typography
Check:
- `styles/`

### Change SEO behavior
Check:
- `lib/seo/`
- route metadata in `app/`

### Change navigation
Check:
- `data/navigation.ts`
- `components/navigation/`

### Change forms
Check:
- `components/forms/`
- `lib/validators/`
- `lib/integrations/`

See `docs/EDITING-GUIDE.md` for safe editing workflows.

---

## Quality bar

This system does not consider work done just because it “looks okay.”

Every implementation should aim to be:
- premium,
- responsive,
- maintainable,
- accessible,
- performant,
- SEO-ready,
- and aligned with approved creative direction.

See:
- `docs/NON-FUNCTIONAL-REQUIREMENTS.md`
- `docs/DEBUGGING.md`
- `docs/DEPLOYMENT.md`

---

## Deployment model

Standard environments:
- Local
- Preview
- Production

Never deploy straight to production without preview validation unless it is an emergency hotfix.

See:
- `docs/DEPLOYMENT.md`

---

## Anti-patterns

Do not:
- invent design direction during implementation,
- duplicate sections unnecessarily,
- hardcode random styles,
- create giant mixed-responsibility files,
- add dependencies casually,
- patch symptoms instead of root causes,
- or let the AI agent improvise past the approved system.

---

## Who this is for

This repo is for:
- a premium web design agency,
- designers/developers implementing approved creative direction,
- and AI-assisted production workflows that need strong constraints.

This repo is not optimized for:
- drag-and-drop site building,
- fully autonomous AI site generation,
- or low-end commodity website production.

---

## Status

Current status:
- Core operating docs defined
- System architecture defined
- Implementation rules defined
- Phase 1 repo foundation scaffolded
- Next.js App Router, TypeScript, Tailwind CSS v4, and MDX configured
- CSS variable token foundation added
- Initial primitives and the Hero, Services, and Testimonials section families added
- Reference homepage route composed from Hero, Services, and Testimonials
- CI and pull request review guardrails added
- Template-readiness docs added for system mode, client mode, client intake, inventories, variants, themes, QA, and project creation
- SEO foundation added with metadata helper, structured data helper, sitemap, robots, and default OG placeholder

Recommended next setup steps:
1. Review and approve the Phase 1 scaffold and reference homepage
2. Replace placeholder content with approved copy and proof
3. Verify responsive behavior against the real homepage composition
4. Add analytics, blog, and content-editing systems when they enter scope

---

## Maintenance rule

Keep this README updated whenever:
- setup changes,
- core scripts change,
- doc locations change,
- folder structure changes,
- or the implementation workflow changes materially.

A stale README is how a repo starts gaslighting its own team.
