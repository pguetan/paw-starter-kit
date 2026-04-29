# CSS-EDITING-CHEAT-SHEET.md

## Purpose

Use this guide when you want to make small visual edits without hunting through the whole Next.js project.

The main question is:

```txt
Is this change local, reusable, or global?
```

Start local. Move outward only when the same decision should affect more of the system.

---

## 1. The three edit layers

| Layer | Use when | Common files |
|---|---|---|
| Local | One section, one layout, or one page composition needs adjustment | `app/page.tsx`, `components/sections/<section>/`, section `*.variants.ts` |
| Reusable | A shared control or repeated pattern needs adjustment | `components/ui/`, `components/shared/`, `components/navigation/` |
| Global | The foundation should change everywhere | `styles/tokens.css`, `styles/utilities.css`, `styles/prose.css`, `app/globals.css` |

Do not jump straight to global CSS for a local layout problem.

---

## 2. Fast decision tree

### If the change is page order

Edit:

```txt
app/page.tsx
```

Examples:

- move testimonials above services
- remove the blog preview section
- add a CTA section to the homepage

### If the change is one section layout

Edit:

```txt
components/sections/<section-name>/<SectionName>.tsx
components/sections/<section-name>/<section-name>.variants.ts
```

Examples:

- hero should be full viewport height
- service cards need a tighter grid
- quote section needs more top spacing
- logo strip should use smaller logos

Use `*.variants.ts` when the section already has reusable layout modes.

### If the change is a shared primitive

Edit:

```txt
components/ui/
```

Examples:

- all primary buttons need a different color
- badges need a new transparent tone
- all cards need a different border/radius
- default section spacing should change

### If the change is brand/theme foundation

Edit:

```txt
styles/tokens.css
styles/themes/<client-theme>.css
```

Examples:

- accent color
- surface colors
- text colors
- font sizes
- radius scale
- shadow strength

### If the change is app-wide reset behavior

Edit:

```txt
app/globals.css
```

Use this only for Tailwind imports, theme exposure, base resets, and global document behavior.

---

## 3. Where common edits live

| What you want to change | First file to check |
|---|---|
| Homepage section order | `app/page.tsx` |
| Hero height, margin, grid, panel layout | `components/sections/hero/hero.variants.ts` |
| Hero content rendering | `components/sections/hero/HeroSection.tsx` |
| Hero copy and CTA labels | `data/home.ts` |
| Button colors and variants | `components/ui/Button.tsx` |
| Badge/eyebrow colors and size | `components/ui/Badge.tsx` |
| Section background and vertical padding | `components/ui/Section.tsx` |
| Container widths and gutters | `components/ui/Container.tsx` |
| Heading sizes | `components/ui/Heading.tsx` |
| Paragraph sizes and text tones | `components/ui/Text.tsx` |
| Header/footer layout | `components/navigation/` |
| Navigation labels and links | `data/navigation.ts` |
| Global tokens | `styles/tokens.css` |
| Client theme overrides | `styles/themes/<client-theme>.css` |
| Tailwind imports and base resets | `app/globals.css` |

---

## 4. Reusable component options

Prefer these props before adding custom classes.

### Button

File:

```txt
components/ui/Button.tsx
```

Variants:

| Variant | Use for |
|---|---|
| `primary` | Main accent CTA |
| `secondary` | Light/default secondary CTA |
| `quiet` | Low-emphasis transparent action |
| `inverse` | White CTA on dark/inverse surfaces |

Sizes:

| Size | Use for |
|---|---|
| `sm` | Compact controls |
| `md` | Default buttons |
| `lg` | Hero and major CTA buttons |

Example:

```tsx
<Button variant="inverse" size="lg" href="#contact">
  Book a call
</Button>
```

### Badge

File:

```txt
components/ui/Badge.tsx
```

Tones:

| Tone | Use for |
|---|---|
| `default` | Standard muted badge |
| `proof` | Highlight/proof eyebrow |
| `inverse` | Badge on dark surfaces |
| `ghost` | Transparent eyebrow with no border |

Example:

```tsx
<Badge tone="ghost">Authority website starter</Badge>
```

### Section

File:

```txt
components/ui/Section.tsx
```

Tones:

| Tone | Use for |
|---|---|
| `default` | Standard white/default section |
| `muted` | Soft muted background section |
| `inverse` | Dark section |

Spacing:

| Spacing | Current classes |
|---|---|
| `none` | `py-0` |
| `compact` | `py-12 md:py-16` |
| `default` | `py-16 md:py-24` |
| `spacious` | `py-20 md:py-32` |

Example:

```tsx
<Section tone="muted" spacing="spacious">
  ...
</Section>
```

### Heading

File:

```txt
components/ui/Heading.tsx
```

Sizes:

| Size | Use for |
|---|---|
| `display` | Hero H1 |
| `headline` | Major section heading |
| `title` | Card or compact section heading |
| `subtitle` | Small headings/subtitles |

Example:

```tsx
<Heading as="h1" size="display">
  Build a premium authority site.
</Heading>
```

### Text

File:

```txt
components/ui/Text.tsx
```

Sizes:

| Size | Use for |
|---|---|
| `sm` | Fine print or compact supporting text |
| `base` | Default body copy |
| `lg` | Hero or lead paragraph copy |

Tones:

| Tone | Use for |
|---|---|
| `primary` | Strong body text |
| `secondary` | Default supporting copy |
| `muted` | Low-emphasis copy |
| `inverse` | Copy on dark surfaces |

Example:

```tsx
<Text size="lg" tone="inverse">
  A starter-safe homepage composition.
</Text>
```

---

## 5. Token options

Tokens live in:

```txt
styles/tokens.css
```

Use tokens for repeated or system-level decisions.

### Color tokens

| Token | Current value/use |
|---|---|
| `--color-text-primary` | Primary text |
| `--color-text-secondary` | Secondary/supporting text |
| `--color-text-muted` | Muted text |
| `--color-text-inverse` | Text on dark surfaces |
| `--color-surface-page` | Page background |
| `--color-surface-section` | Default section background |
| `--color-surface-card` | Card background |
| `--color-surface-muted` | Muted section/card background |
| `--color-surface-inverse` | Dark/inverse surface |
| `--color-border-subtle` | Soft borders |
| `--color-border-strong` | Strong borders |
| `--color-accent-primary` | Primary accent |
| `--color-accent-primary-hover` | Primary accent hover |
| `--color-accent-secondary` | Secondary accent |
| `--color-accent-contrast` | Text on accent |
| `--color-proof-highlight` | Proof/highlight badge surface |
| `--color-focus-ring` | Focus outline |

Useful Tailwind color classes:

```txt
text-primary
text-secondary
text-inverse-text
bg-section
bg-muted
bg-card
bg-inverse
bg-accent
border-border-subtle
border-border-strong
```

When using a CSS variable as an arbitrary text color, use explicit color syntax:

```txt
text-[color:var(--color-text-primary)]
```

Avoid this ambiguous form for colors:

```txt
text-[var(--color-text-primary)]
```

### Typography tokens

| Token | Value |
|---|---|
| `--font-size-xs` | `0.75rem` |
| `--font-size-sm` | `0.875rem` |
| `--font-size-base` | `1rem` |
| `--font-size-lg` | `1.125rem` |
| `--font-size-xl` | `1.25rem` |
| `--font-size-2xl` | `1.5rem` |
| `--font-size-3xl` | `2rem` |
| `--font-size-4xl` | `2.5rem` |
| `--font-size-5xl` | `3.25rem` |
| `--font-size-6xl` | `4.25rem` |

Line heights:

| Token | Value/use |
|---|---|
| `--line-height-tight` | `1.05`, large display text |
| `--line-height-snug` | `1.2`, headings/subtitles |
| `--line-height-normal` | `1.5`, compact body copy |
| `--line-height-relaxed` | `1.7`, readable body copy |

Use explicit arbitrary property syntax for font-size variables:

```txt
text-[length:var(--font-size-4xl)]
```

or prefer existing primitives like `Heading` and `Text`.

### Spacing tokens

| Token | Value |
|---|---|
| `--space-1` | `0.25rem` |
| `--space-2` | `0.5rem` |
| `--space-3` | `0.75rem` |
| `--space-4` | `1rem` |
| `--space-5` | `1.25rem` |
| `--space-6` | `1.5rem` |
| `--space-8` | `2rem` |
| `--space-10` | `2.5rem` |
| `--space-12` | `3rem` |
| `--space-16` | `4rem` |
| `--space-20` | `5rem` |
| `--space-24` | `6rem` |
| `--space-32` | `8rem` |

Tailwind spacing classes are fine for local layout:

```txt
gap-4
gap-6
p-6
p-8
mt-8
py-16
md:py-24
```

Use token variables when the value is part of a named system decision:

```txt
gap-[var(--space-8)]
p-[var(--space-10)]
```

### Container tokens

| Token | Value/use |
|---|---|
| `--container-narrow` | `45rem`, text/content measure |
| `--container-default` | `72rem`, standard page content |
| `--container-wide` | `86rem`, wide layouts |
| `--container-gutter` | `clamp(1rem, 4vw, 3rem)`, page gutters |

Prefer:

```tsx
<Container width="wide">
  ...
</Container>
```

Available widths:

```txt
narrow
default
wide
full
```

### Radius tokens

| Token | Value/use |
|---|---|
| `--radius-none` | `0` |
| `--radius-subtle` | `0.25rem` |
| `--radius-medium` | `0.5rem` |
| `--radius-large` | `0.75rem` |
| `--radius-pill` | pill buttons/badges |

Use:

```txt
rounded-[var(--radius-medium)]
rounded-[var(--radius-large)]
rounded-[var(--radius-pill)]
```

Large panel radii such as `rounded-[2rem]` are currently local art-direction choices. Do not turn every one-off radius into a token unless it repeats enough to become a system decision.

### Shadow and focus tokens

| Token | Use |
|---|---|
| `--shadow-subtle` | Small surface lift |
| `--shadow-elevated` | Larger elevated surface |
| `--focus-ring-width` | Focus outline width |
| `--focus-ring-offset` | Focus outline offset |

Use:

```txt
shadow-[var(--shadow-subtle)]
shadow-[var(--shadow-elevated)]
focus-visible:outline-[var(--color-focus-ring)]
```

---

## 6. Safe class patterns

Good local layout classes:

```txt
grid
flex
gap-6
items-center
justify-between
lg:grid-cols-[1.1fr_0.9fr]
min-h-screen
min-h-[calc(100vh-2rem)]
max-w-[var(--container-narrow)]
```

Good component/system classes:

```txt
bg-card
bg-muted
bg-inverse
text-primary
text-secondary
text-inverse-text
border-border-subtle
rounded-[var(--radius-medium)]
shadow-[var(--shadow-subtle)]
```

Use arbitrary values sparingly:

```txt
rounded-[2rem]
min-h-[42rem]
grid-cols-[1.35fr_0.85fr]
```

They are okay for section art direction, but if the same arbitrary value appears in many places, consider a variant, primitive, or token.

---

## 7. What not to do

Avoid:

- editing `app/globals.css` for one section problem
- adding a new token for one accidental value
- duplicating `Button`, `Badge`, `Section`, `Heading`, or `Text`
- changing shared primitives without checking other uses
- adding `!important` unless you have confirmed a cascade issue
- using `text-[var(--font-size-4xl)]` for font size, because Tailwind may treat it as color
- using final client-specific colors in the starter foundation

---

## 8. Quick examples

### Make the hero taller

Check:

```txt
components/sections/hero/hero.variants.ts
```

Look for `min-h-*`, `pt-*`, `pb-*`, and grid classes.

### Make the hero eyebrow transparent

Check:

```txt
components/ui/Badge.tsx
components/sections/hero/HeroSection.tsx
```

Use:

```tsx
<Badge tone="ghost">...</Badge>
```

### Make all inverse CTAs readable

Check:

```txt
components/ui/Button.tsx
```

Use the `inverse` variant. If the button is a link, remember global anchor resets can affect color unless they are in Tailwind's base layer.

### Change all section vertical spacing

Check:

```txt
components/ui/Section.tsx
```

Adjust the `spacingClasses` map.

### Change the whole brand accent color

Check:

```txt
styles/tokens.css
styles/themes/<client-theme>.css
```

Prefer remapping semantic tokens in a client theme instead of changing starter defaults.

---

## 9. Validation

After CSS or component edits, run:

```bash
pnpm check
```

For visual edits, also check the browser at desktop and mobile widths:

- page loads with HTTP 200
- no runtime error overlay
- no horizontal scroll
- changed element looks correct
- text remains readable against its background

