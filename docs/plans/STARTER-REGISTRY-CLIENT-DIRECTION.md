# Starter, Registry, and Client Repo Implementation Plan

## Goal

Prepare `paw-starter-kit` to become the base operating system for future premium authority websites, while leaving room for a later `paw-template-registry` that works like a curated source-copy pattern library.

This plan keeps three things separate:

- starter foundation
- reusable installable patterns
- real client implementation

## Target Architecture

### `paw-starter-kit`

Purpose: base system and project foundation.

Contains:

- Next.js, TypeScript, Tailwind, MDX setup
- CSS variable tokens
- primitives
- core section families needed to prove the system
- starter demo route
- docs and agent guardrails
- validation scripts and CI
- SEO baseline
- brand-neutral example content

Does not contain:

- real client copy
- real client imagery
- client-specific brand themes
- every possible template variation
- unproven registry patterns

### Future `paw-template-registry`

Purpose: curated source-copy registry for proven reusable patterns.

Will contain:

- reusable components
- reusable section families
- reusable page templates
- variants and presets
- example data
- registry metadata
- install instructions

Not created yet.

### Client Repos

Purpose: real website implementation.

Contain:

- approved client copy
- client assets
- client brand theme
- selected installed patterns
- client-specific page composition
- integrations
- deployment configuration

## Implementation Phases

## Phase 1: Starter Boundary Cleanup

Objective: make the starter clearly brand-neutral and demo-safe.

Tasks:

1. Create `data/examples/`.
2. Move starter placeholder/demo data into `data/examples/`.
3. Keep `data/` for active project-style data only.
4. Update `app/page.tsx` to import demo data from `data/examples/`.
5. Add docs explaining that example data is not client project data.
6. Confirm templates and sections do not contain client-specific copy, imagery, or brand assumptions.

Files likely touched:

- `data/home.ts`
- `data/services.ts`
- `data/testimonials.ts`
- `data/examples/*`
- `app/page.tsx`
- `docs/EDITING-GUIDE.md`
- `docs/NEW-CLIENT-PROJECT-GUIDE.md`
- `docs/FILE-MAP.md`

Acceptance criteria:

- Starter homepage still renders.
- Placeholder/demo content lives under `data/examples/`.
- Docs explain the difference between example data and client data.
- `pnpm check` passes.

## Phase 2: Page Template Foundation

Objective: add one reusable page template pattern without turning the starter into a template marketplace.

Tasks:

1. Create `components/templates/home/`.
2. Add `HomePageTemplate.tsx`.
3. Add `home-page.schema.ts`.
4. Add `home-page.presets.ts` only if preset choices are useful now.
5. Move current homepage section composition into `HomePageTemplate`.
6. Keep `app/page.tsx` as the starter demo route that passes example data into the template.
7. Add `docs/PAGE-TEMPLATE-GUIDE.md`.
8. Update inventories and file map.

Suggested structure:

```txt
components/templates/home/
├─ HomePageTemplate.tsx
├─ home-page.schema.ts
├─ home-page.presets.ts
└─ index.ts
```

Acceptance criteria:

- `app/page.tsx` is thin and route-focused.
- `HomePageTemplate` contains composition logic only.
- No final copy or client-specific data exists inside the template.
- Template props are typed.
- Docs explain how to use page templates in client repos.
- `pnpm check` passes.

## Phase 3: Core Starter Section Expansion

Objective: add the minimum additional section families needed for a believable premium homepage and basic client site.

Build in this order:

1. Header / Navigation
2. Footer
3. CTA
4. FAQ
5. Trust strip

For each section family:

1. Add schema.
2. Add variants.
3. Add presets.
4. Add canonical section component.
5. Add index export.
6. Add example data if needed.
7. Update section inventory.
8. Update editing guide if content paths changed.

Acceptance criteria:

- Each section has one canonical implementation.
- Variants are limited and meaningful.
- Presets are named by use case.
- No client-specific copy or art direction is introduced.
- `pnpm check` passes after each section family.

## Phase 4: Simulated Client Build

Objective: test whether the starter can support a real client-style implementation without inventing strategy or polluting the system.

Tasks:

1. Create a separate test/client repo from the starter.
2. Fill out `docs/CLIENT-INTAKE-BRIEF.md` with simulated approved inputs.
3. Compose a full homepage using existing sections and templates.
4. Add a neutral client theme override.
5. Add approved-style placeholder assets.
6. Track friction:
   - missing section types
   - awkward component APIs
   - unclear docs
   - repeated manual steps
   - places where templates are too rigid or too vague

Acceptance criteria:

- Client-style repo can be created from the starter.
- Homepage can be implemented without changing starter internals.
- Any needed starter improvements are documented separately.
- No client-specific pattern is promoted automatically.

## Phase 5: Registry Readiness

Objective: prepare for a future `paw-template-registry` only after reusable patterns are stable.

Tasks:

1. Add `docs/REGISTRY-WORKFLOW.md`.
2. Define registry item metadata.
3. Define install target paths.
4. Define dependency declaration rules.
5. Define starter version compatibility rules.
6. Identify first registry candidates from proven starter/client patterns.

Example registry metadata shape:

```json
{
  "name": "home-founder-led",
  "type": "page-template",
  "starterVersion": "0.1.0",
  "files": [
    {
      "source": "templates/home/founder-led/HomePageTemplate.tsx",
      "target": "components/templates/home/HomePageTemplate.tsx"
    }
  ],
  "requires": ["hero", "services", "testimonials", "cta"]
}
```

Acceptance criteria:

- Registry workflow is documented.
- Registry is not created until at least a few patterns are proven.
- First registry candidates are listed with rationale.
- No install CLI is built yet.

## Phase 6: Registry Creation

Objective: create the registry only when manual reuse becomes repetitive.

Start this phase when:

- at least 8-12 sections are stable
- at least 2-3 page templates are stable
- at least one client-style implementation has validated the patterns
- copying patterns manually is becoming a real bottleneck

Tasks:

1. Create `paw-template-registry`.
2. Add registry folder structure.
3. Move copied, generalized patterns into registry.
4. Add registry metadata.
5. Add manual installation instructions.
6. Use one client project to test manual install.
7. Only then consider a small install script.

Acceptance criteria:

- Registry contains only proven, brand-neutral patterns.
- Each pattern has metadata and usage docs.
- Manual install works before CLI work begins.
- Starter remains lean.

## Promotion Rules

A pattern may be promoted only when:

- it solves a repeatable use case
- it is not tied to one client
- it uses starter tokens and primitives
- it has typed props or schema
- it has example data
- it has usage documentation
- it declares dependencies
- it passes `pnpm check`
- it has been checked on mobile, tablet, and desktop
- it has a clear use-case name

Do not promote:

- client copy
- client images
- custom client fonts
- client-specific brand colors
- route-specific hacks
- one-off layout exceptions

## Build Location Rules

| Situation | Build first in |
|---|---|
| Core primitive needed by most sites | `paw-starter-kit` |
| Starter-wide token or SEO foundation | `paw-starter-kit` |
| New reusable section idea | `paw-starter-kit` |
| Client-specific layout need | client repo |
| Pattern reused across multiple clients | future registry |
| Experimental visual idea | sandbox branch or starter demo |
| Existing registry item fix | registry |

## Immediate Next Actions

Do next in `paw-starter-kit`:

1. Implement Phase 1: move demo data to `data/examples/`.
2. Implement Phase 2: add `HomePageTemplate`.
3. Add `docs/PAGE-TEMPLATE-GUIDE.md`.
4. Update docs and inventories.
5. Run `pnpm check`.

Do not do yet:

- create `paw-template-registry`
- add an install CLI
- add many homepage variations
- add client-specific visual systems
- add CMS/auth/database features

## Risks and Mitigations

Risk: the starter becomes a template marketplace.

Mitigation: keep only foundation, core sections, and a small demo in the starter.

Risk: registry is created too early.

Mitigation: wait until patterns are stable and manual reuse is painful.

Risk: templates become generic.

Mitigation: keep structure premium and brand-neutral, then let client themes, media, and approved copy create distinctiveness.

Risk: client-specific work leaks into reusable systems.

Mitigation: use client project mode and require promotion review before reuse.

## Definition of Done for This Plan

This direction is implemented when:

- starter data is clearly separated from example data
- at least one page template exists and is documented
- core sections support a full basic homepage
- a simulated client build validates the workflow
- registry workflow is documented
- registry creation is deferred until patterns are proven
- `pnpm check` passes after each implementation phase

