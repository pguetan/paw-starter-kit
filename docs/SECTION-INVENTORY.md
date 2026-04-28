# SECTION-INVENTORY.md

## Purpose

This inventory lists reusable section families, their content shape, variants, presets, and intended use.

Check this file before adding a new section or variant.

## Current section families

| Section | Path | Purpose | Variants | Presets |
|---|---|---|---|---|
| `HeroSection` | `components/sections/hero/` | Above-the-fold positioning and primary CTA | `split`, `centered` | `editorialTrust`, `focusedAuthority` |
| `ServicesSection` | `components/sections/services/` | Present service or offer categories | `grid`, `featured` | `focusedGrid`, `authorityFeatured` |
| `TestimonialsSection` | `components/sections/testimonials/` | Present client proof and credibility | `grid`, `rail` | `proofGrid`, `editorialRail` |

## HeroSection

Content shape:

- `eyebrow`
- `title`
- `description`
- `primaryCta`
- `secondaryCta`
- `proofItems`
- `variant`
- `tone`

Use when:

- the page needs a clear opening message
- the primary CTA must be visible early
- proof or authority signals should appear above the fold

Do not use when:

- the page section is not the primary opening section
- the layout requires complex media storytelling not yet supported

## ServicesSection

Content shape:

- `eyebrow`
- `title`
- `description`
- `items`
- `variant`
- `tone`

Each item supports:

- `title`
- `description`
- `href`
- `ctaLabel`

Use when:

- showing service categories, offers, or strategic pillars
- each item can be described in a concise card

Do not use when:

- the content is a detailed sales page body
- each service needs complex nested layout or media

## TestimonialsSection

Content shape:

- `eyebrow`
- `title`
- `description`
- `items`
- `variant`
- `tone`

Each item supports:

- `quote`
- `name`
- `role`

Use when:

- approved client proof is available
- the page needs trust reinforcement

Do not use when:

- proof is unapproved or placeholder-only for client review
- the content should be a full case study

## Adding a section family

Use this folder pattern:

```txt
components/sections/<section-name>/
├─ <SectionName>Section.tsx
├─ <section-name>.schema.ts
├─ <section-name>.variants.ts
├─ <section-name>.presets.ts
└─ index.ts
```

Before adding a section, confirm:

- no existing section can express the layout
- the new section has a clear business or UX purpose
- the content shape is typed
- variants are limited and meaningful
- presets are named by use case
- this inventory is updated

