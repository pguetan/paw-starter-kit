# SYSTEM-DEVELOPMENT-MODE.md

## Purpose

Use system development mode when improving the starter kit itself.

This mode is for changes that should benefit future client projects, not for one-off client implementation decisions.

## Use this mode for

- design tokens
- primitives
- reusable section families
- approved variants and presets
- starter documentation
- QA and CI workflow
- starter-level SEO, analytics, content, and deployment foundations
- template creation workflow

## Allowed changes

- Add or refine reusable primitives when a repeatable need exists.
- Add section families only when they belong in the starter inventory.
- Add variants or presets only when the variation is broadly useful and documented.
- Improve token semantics without breaking existing components.
- Improve docs, checklists, and agent guardrails.
- Add lightweight enforcement scripts that preserve the documented workflow.

## Ask first before

- adding dependencies
- changing the stack
- changing token architecture
- adding a CMS, database, auth, or admin layer
- removing existing section families
- changing route architecture
- making broad visual direction changes

## Do not do

- Add client-specific copy, strategy, imagery, or brand direction.
- Create variants for one temporary client case.
- Let examples become hidden production assumptions.
- Turn the starter into a full client website.
- Add flexible systems without a clear editing path.

## Promotion rule

Client project patterns may be promoted into the starter only after they prove reusable.

Before promotion, confirm:

- at least one real implementation needed the pattern
- the pattern is not tied to a single client's brand or copy
- the API is clear
- the variant or preset is named by use case, not mood
- docs and inventories are updated
- `pnpm check` passes

## Completion report

For system development work, report:

- files changed
- new reusable primitives, sections, variants, or presets
- docs updated
- assumptions made
- compatibility risks for existing client projects
- validation results

