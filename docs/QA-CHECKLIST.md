# QA-CHECKLIST.md

## Purpose

Use this checklist before marking starter or client implementation work complete.

## Required command gate

Run:

```bash
pnpm check
```

This runs formatting, linting, type checking, and build validation.

## Starter QA

- [ ] Repo installs with `pnpm install`.
- [ ] `pnpm check` passes.
- [ ] Homepage reference route renders.
- [ ] Placeholder content is clearly marked.
- [ ] Component and section inventories match the code.
- [ ] New variants or presets are documented.
- [ ] No unnecessary dependencies were added.
- [ ] No client-specific copy, assets, or strategy entered the starter.
- [ ] `.github/` checks reflect the local validation flow.

## Client project QA

- [ ] Approved copy is implemented accurately.
- [ ] Approved assets are used.
- [ ] Navigation links work.
- [ ] CTAs point to approved destinations.
- [ ] Forms show valid, invalid, loading, success, and error states where relevant.
- [ ] Metadata is present for key pages.
- [ ] Sitemap and robots behavior match the launch plan.
- [ ] Placeholder content has been removed or approved.

## Responsive QA

Check representative viewports:

- [ ] mobile narrow
- [ ] mobile wide
- [ ] tablet
- [ ] laptop
- [ ] desktop wide

Confirm:

- [ ] no accidental horizontal overflow
- [ ] hierarchy remains clear
- [ ] touch targets are usable
- [ ] text wraps cleanly
- [ ] media keeps intended crop/aspect
- [ ] CTAs remain visible and usable

## Accessibility QA

- [ ] Landmarks are semantic.
- [ ] Heading order is logical.
- [ ] Interactive elements are keyboard reachable.
- [ ] Focus states are visible.
- [ ] Link text is meaningful.
- [ ] Form fields have labels and errors where relevant.
- [ ] Reduced motion is respected where motion exists.
- [ ] Color contrast is reviewed for brand overrides.

## SEO QA

- [ ] Unique page titles exist.
- [ ] Descriptions exist where appropriate.
- [ ] Canonical URL behavior is correct.
- [ ] Open Graph metadata is set.
- [ ] Sitemap route works.
- [ ] Robots route works.
- [ ] Structured data is added where relevant.
- [ ] Placeholder metadata is replaced before launch.

## Launch readiness

- [ ] Preview deployment reviewed.
- [ ] Environment variables configured.
- [ ] Domain and DNS plan confirmed.
- [ ] Rollback path known.
- [ ] Production deployment approved by human owner.

