# THEME-OVERRIDE-GUIDE.md

## Purpose

Theme overrides let each client project feel distinct without rewriting the starter.

The rule is simple: client themes remap semantic tokens; they do not break layout architecture.

## Where themes live

Use:

```txt
styles/themes/
```

Example:

```txt
styles/themes/client-example.css
```

## What themes may change

- semantic color mappings
- accent hover tokens
- surface colors
- selected typography family tokens
- radius feel if approved
- shadow feel if approved

## What themes should not change

- section structure
- grid logic
- breakpoint behavior
- core spacing scale
- component APIs
- accessibility requirements

## Theme workflow

1. Start from approved brand direction.
2. Map approved brand values to semantic tokens.
3. Keep primitives as raw values and components as semantic consumers.
4. Test contrast on primary text, muted text, buttons, and inverse surfaces.
5. Check homepage, service cards, testimonial cards, and CTA states.
6. Run `pnpm check`.

## Example usage

Import a client theme from `app/globals.css` only when it is part of the active project.

Then apply the theme attribute at the root layout or a project wrapper:

```tsx
<html lang="en" data-theme="client-example">
```

Do not activate example themes in the starter unless they are intentionally being demonstrated.

## Promotion rule

Client theme values should not be promoted into the starter.

Only reusable theme patterns or token roles should be promoted.

