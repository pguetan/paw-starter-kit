# SECTION-INVENTORY.md

## Purpose

This inventory lists reusable section families, their content shape, variants, presets, and intended use.

Check this file before adding a new section or variant.

## Current section families

| Section | Path | Purpose | Variants | Presets |
|---|---|---|---|---|
| `HeroSection` | `components/sections/hero/` | Above-the-fold positioning and primary CTA | `split`, `centered`, `panel` | `editorialTrust`, `focusedAuthority` |
| `ServicesSection` | `components/sections/services/` | Present service or offer categories | `grid`, `featured`, `programCards` | `focusedGrid`, `authorityFeatured` |
| `QuoteProofSection` | `components/sections/quote-proof/` | Present a centered proof quote or authority statement | n/a | n/a |
| `AuthorityBioSection` | `components/sections/authority-bio/` | Pair founder/expert proof, metrics, social links, and bio copy | n/a | n/a |
| `LogoStripSection` | `components/sections/logo-strip/` | Show starter-safe proof logos or client/company logo rows | n/a | n/a |
| `TestimonialsSection` | `components/sections/testimonials/` | Present client proof and credibility | `grid`, `rail` | `proofGrid`, `editorialRail` |
| `LeadMagnetSection` | `components/sections/lead-magnet/` | Present a downloadable resource and opt-in form shell | n/a | n/a |
| `BlogPreviewSection` | `components/sections/blog-preview/` | Preview featured and secondary posts on a homepage | n/a | n/a |
| `CtaSection` | `components/sections/cta/` | Present a centered final conversion band | n/a | n/a |

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

- `label`
- `title`
- `description`
- `href`
- `ctaLabel`

Use when:

- showing service categories, offers, or strategic pillars
- each item can be described in a concise card
- the homepage needs program, course, coaching, or mastermind entry points

Do not use when:

- the content is a detailed sales page body
- each service needs complex nested layout or media

## QuoteProofSection

Content shape:

- `quote`
- `name`
- `role`

Use when:

- a page needs one centered proof moment
- a quote should separate offer context from authority/bio context

## AuthorityBioSection

Content shape:

- `eyebrow`
- `title`
- `description`
- `cta`
- `metrics`

Use when:

- presenting an expert, founder, advisor, or authority profile
- measurable proof should sit beside a bio card or media panel

## LogoStripSection

Content shape:

- `eyebrow`
- `items`

Each item supports:

- `src`
- `alt`

Use when:

- showing worked-with logos, publication logos, client logos, or starter-safe proof placeholders

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

## LeadMagnetSection

Content shape:

- `eyebrow`
- `title`
- `subtitle`
- `description`

Use when:

- a homepage needs a downloadable resource, newsletter, or lead capture block
- the form integration is not yet chosen but the layout shell is needed

## BlogPreviewSection

Content shape:

- `eyebrow`
- `title`
- `ctaLabel`
- `posts`

Each post supports:

- `title`
- `excerpt`
- `date`
- `category`

Use when:

- a homepage needs a featured article plus secondary post list
- the starter needs blog/content preview scaffolding before a full blog system

## CtaSection

Content shape:

- `title`
- `description`
- `cta`

Use when:

- a page needs a final centered conversion band
- the CTA should be reusable across homepage, services, and landing pages

## Adding a section family

Use this folder pattern for section families with variants or presets:

```txt
components/sections/<section-name>/
├─ <SectionName>Section.tsx
├─ <section-name>.schema.ts
├─ <section-name>.variants.ts
├─ <section-name>.presets.ts
└─ index.ts
```

Simple section families may start with:

```txt
components/sections/<section-name>/
├─ <SectionName>Section.tsx
└─ index.ts
```

Before adding a section, confirm:

- no existing section can express the layout
- the new section has a clear business or UX purpose
- the content shape is typed
- variants are limited and meaningful
- presets are named by use case
- this inventory is updated
