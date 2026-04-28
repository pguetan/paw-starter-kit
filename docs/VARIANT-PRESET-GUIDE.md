# VARIANT-PRESET-GUIDE.md

## Purpose

Variants and presets create controlled flexibility.

They should help produce distinct client outcomes without turning the starter into a pile of one-off styles.

## Definitions

Variant:
A typed implementation axis inside a section or component, such as layout, tone, density, or proof emphasis.

Preset:
An approved bundle of variant choices for a common use case.

## Allowed variant axes

Prefer axes like:

- `layout`
- `tone`
- `density`
- `mediaPlacement`
- `emphasis`
- `ctaFormat`
- `surfaceStyle`

Avoid axes like:

- `clientA`
- `special`
- `new`
- `fancy`
- `homepageOnly`

## Preset naming rules

Preset names should describe the use case or strategic effect.

Good:

- `editorialTrust`
- `focusedAuthority`
- `authorityFeatured`
- `proofGrid`

Avoid:

- `blueVersion`
- `coolOne`
- `clientHomepage`
- `finalAlt`

## When to add a variant

Add a variant only when:

- the difference is structural or repeatedly useful
- it cannot be handled by existing props
- it does not create confusing combinations
- it is documented in the section inventory

## When to add a preset

Add a preset when:

- a variant combination is approved for repeated use
- it maps to a recognizable page or brand need
- it prevents agents from improvising the same bundle repeatedly

## Variant sprawl warning signs

- more than a few axes on one section
- variant names tied to clients instead of use cases
- compound combinations that no one can remember
- presets with unclear visual or strategic purpose
- variants used to avoid creating a cleaner section model

## Required update path

When adding or changing variants or presets:

1. Update the section schema if props changed.
2. Update the variant or preset file.
3. Update `docs/SECTION-INVENTORY.md`.
4. Update `docs/DESIGN-SYSTEM-SPEC.md` if the system rule changed.
5. Run `pnpm check`.

