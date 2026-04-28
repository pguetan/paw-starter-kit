# NEW-CLIENT-PROJECT-GUIDE.md

## Purpose

This guide explains how to create a real client project from the starter without contaminating the starter with client-specific decisions.

## Recommended model

Use this repo as the starter source of truth.

Create a separate repo for each client project.

## Create a client project

1. Create a new repo for the client.
2. Copy or generate the starter into that repo.
3. Keep the starter commit as the baseline.
4. Rename project metadata in `package.json`.
5. Update `.env.example` if the client needs new variables.
6. Fill out `docs/CLIENT-INTAKE-BRIEF.md`.
7. Enter client project mode.
8. Replace placeholder content with approved copy.
9. Add client assets.
10. Configure client site metadata.
11. Run `pnpm check`.

## What to change in a client repo

- `data/site.ts`
- `data/navigation.ts`
- page composition in `app/`
- structured content in `data/`
- authored content in `content/`
- assets in `public/`
- theme overrides in `styles/themes/`
- approved integrations in `lib/integrations/`

## What not to change casually

- primitive component APIs
- section family architecture
- token architecture
- folder structure
- base agent guardrails
- CI command flow

## Promotion back to starter

If a client project reveals a reusable pattern:

1. Finish or stabilize it locally.
2. Document why it is reusable.
3. Open a separate starter-system change.
4. Add or update variants, presets, schemas, and docs.
5. Run `pnpm check`.

Do not silently copy client-specific decisions back into the starter.

## Placeholder cleanup

Before client review:

- replace homepage placeholders
- replace service placeholders
- replace testimonial placeholders
- replace site metadata
- add real OG image or approved placeholder
- remove unused starter examples if they confuse review

