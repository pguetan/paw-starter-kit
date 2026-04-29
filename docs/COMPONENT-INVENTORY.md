# COMPONENT-INVENTORY.md

## Purpose

This inventory lists the reusable primitives and shared components currently available in the starter.

Use it before creating new UI so the system stays reusable instead of quietly duplicating itself.

## UI primitives

| Component | Path | Purpose | Notes |
|---|---|---|---|
| `Button` | `components/ui/Button.tsx` | Button and link-style CTA primitive | Supports `primary`, `secondary`, `quiet`, and `inverse`; sizes `sm`, `md`, `lg` |
| `Container` | `components/ui/Container.tsx` | Width and gutter primitive | Supports `narrow`, `default`, `wide`, `full` |
| `Section` | `components/ui/Section.tsx` | Full-width section wrapper | Supports `default`, `muted`, `inverse` tones and `none`, `compact`, `default`, `spacious` spacing presets |
| `Heading` | `components/ui/Heading.tsx` | Typed heading primitive | Supports semantic `as` prop and display sizes |
| `Text` | `components/ui/Text.tsx` | Body text primitive | Supports text size and tone roles |
| `Card` | `components/ui/Card.tsx` | Reusable card surface | Uses tokenized radius, border, surface, and shadow |
| `Badge` | `components/ui/Badge.tsx` | Eyebrow/proof label primitive | Supports `default`, `proof`, `inverse`, and `ghost` tones |

## Shared components

| Component | Path | Purpose | Notes |
|---|---|---|---|
| `SectionHeader` | `components/shared/SectionHeader.tsx` | Reusable section intro block | Supports optional eyebrow, title, description, and alignment |
| `SocialLinks` | `components/shared/SocialLinks.tsx` | Data-driven social icon link list | Uses starter placeholder SVG icons from `public/icons/social/` |

## Navigation components

| Component | Path | Purpose | Notes |
|---|---|---|---|
| `SiteHeader` | `components/navigation/SiteHeader.tsx` | Starter header shell | Uses `data/navigation.ts`, `data/site.ts`, and brand/social SVG assets |
| `SiteFooter` | `components/navigation/SiteFooter.tsx` | Starter footer shell | Uses footer nav, social links, legal links, and brand wordmark data |

## Utility helpers

| Helper | Path | Purpose |
|---|---|---|
| `cn` | `lib/utils/cn.ts` | Combines conditional classes and merges Tailwind conflicts |

## Creation rules

Create a new primitive only when:

- no current primitive expresses the need cleanly
- the pattern will be reused
- the API can stay small
- the styling can be token-driven
- the new component belongs in `components/ui/`

Create a shared component only when:

- the pattern is reused across multiple section families
- it is more specific than a primitive
- it is not tied to one client page or brand direction

## Do not create

- duplicate buttons, cards, headings, or containers
- one-off styled wrappers that should be `Section` or `Container`
- components with final copy embedded inside them
- components that mix content, layout, styling, and integration logic
