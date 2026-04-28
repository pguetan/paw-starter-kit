# DESIGN-SYSTEM-SPEC.md

## 1. Purpose

This document defines the design system foundations for the Premium Authority Website Implementation System.

Its purpose is to ensure that all websites built with the system:
- feel premium,
- remain structurally consistent,
- support distinct brand expression,
- and are implemented through reusable, scalable rules rather than one-off styling.

This is not a brand guideline for a single client.
This is the architectural and visual foundation for a reusable premium website system.

---

## 2. Design system role

The design system exists to:
- create consistency without sameness,
- enable faster implementation,
- support controlled visual variation,
- improve maintainability,
- reduce arbitrary design decisions,
- and make implementation easier for humans and AI agents.

The system must be:
- brand-agnostic at the foundation layer,
- opinionated at the structural layer,
- and customizable at the preset/art-direction layer.

---

## 3. Design principles

All visual and structural decisions should follow these principles:

- Restraint over decoration
- Clarity over novelty
- Hierarchy over clutter
- Rhythm over randomness
- Systematic variation over ad hoc styling
- Premium perception through precision, not noise
- Strong typography as a primary brand signal
- Intentional whitespace as a design tool
- Motion as enhancement, not entertainment
- Distinctiveness through composition and art direction, not arbitrary chaos

---

## 4. System layers

The design system has four layers:

### 4.1 Foundation layer
Universal rules that should apply across projects:
- spacing scale
- typography scale
- layout rules
- radius and shadow system
- responsive logic
- neutral surfaces
- border logic
- motion principles

### 4.2 Semantic layer
Contextual tokens and design meanings:
- text-primary
- text-secondary
- surface-default
- surface-muted
- border-subtle
- accent-strong
- proof-highlight
- danger / warning / success states where needed

### 4.3 Component layer
Reusable UI primitives and shared building blocks:
- buttons
- headings
- cards
- forms
- containers
- accordions
- badges
- media wrappers
- proof elements
- navigation elements

### 4.4 Section layer
Reusable website sections and page-building blocks:
- hero
- trust strip
- services
- problem/solution
- process
- testimonials
- case studies
- FAQ
- article feed
- CTA
- footer

---

## 5. Token philosophy

Design tokens should act as the shared source of truth for visual decisions across the system, which aligns with the Design Tokens format work being standardized for cross-tool exchange. [web:208][web:218]

### 5.1 Token goals
Tokens must:
- reduce arbitrary values,
- centralize visual decisions,
- improve consistency,
- support theming,
- and make changes easier to apply safely.

### 5.2 Token types
The system should define:
- color tokens
- spacing tokens
- typography tokens
- radius tokens
- border tokens
- shadow tokens
- size tokens
- motion tokens
- breakpoint tokens
- z-index/layer tokens where necessary

### 5.3 Token categories
Use two major token categories:

#### Primitive tokens
Raw system values such as:
- base colors
- spacing scale values
- font sizes
- font weights
- border radii
- shadow values

#### Semantic tokens
Meaning-based tokens such as:
- text-primary
- text-muted
- surface-card
- surface-inverse
- accent-primary
- border-subtle
- cta-background
- proof-surface

### 5.4 Token rules
- Prefer semantic tokens in components whenever possible.
- Use primitive tokens to define semantic tokens.
- Do not hardcode visual values in reusable components if a token exists.
- Add new tokens only when the value represents a reusable system decision.

---

## 6. Recommended token structure

Example token categories:

```txt
tokens/
├─ color.json
├─ spacing.json
├─ typography.json
├─ radius.json
├─ shadow.json
├─ motion.json
├─ size.json
└─ breakpoints.json
```

Example structure philosophy:
- primitives define raw values,
- semantics map usage meaning,
- themes can override semantic assignments.

If using JSON-based tokens, the format should be compatible with modern design-token conventions that use fields like `$type` and `$value`. [web:208][web:215]

---

## 7. Color system

### 7.1 Color philosophy
The system should support premium visual outcomes through restraint, contrast control, and selective emphasis rather than loud palettes.

The default system should assume:
- a strong neutral foundation,
- one primary accent,
- one optional secondary accent,
- and clearly defined text/surface/border roles.

### 7.2 Color roles
Core semantic color roles should include:
- text-primary
- text-secondary
- text-inverse
- surface-page
- surface-section
- surface-card
- surface-muted
- surface-inverse
- border-subtle
- border-strong
- accent-primary
- accent-secondary
- accent-contrast
- success
- warning
- error

### 7.3 Color rules
- Use accent colors intentionally and sparingly.
- Do not use color alone to communicate meaning.
- Do not overload pages with too many competing accent moments.
- Surfaces must support readable hierarchy and content separation.
- Premium interfaces should feel controlled, not candy-coated.

IBM’s Carbon guidance uses tokenized color roles and emphasizes that the same token can serve multiple roles only when its use remains consistent across themes and applications. [web:214][web:220]

---

## 8. Typography system

Typography is one of the strongest signals of perceived quality, authority, and readability. Material Design guidance emphasizes using hierarchy, line height, and letter spacing intentionally to support clarity and readable text. [web:213][web:222]

### 8.1 Typography goals
The typography system must:
- create strong hierarchy,
- improve readability,
- support premium perception,
- and remain flexible across different client brands.

### 8.2 Type layers
The system should define styles for:
- display
- headline
- title
- body
- label
- caption
- overline or eyebrow where needed

### 8.3 Typography requirements
The system must define:
- font family roles
- font size scale
- line-height rules
- letter-spacing behavior
- font-weight options
- max readable text width guidance

### 8.4 Typography rules
- Larger display and headline text may use tighter letter spacing when appropriate.
- Smaller text should preserve readability through spacing and line-height balance.
- Body text must prioritize legibility over stylistic flair.
- Decorative fonts must never compromise clarity.
- The system should support premium pairings without depending on one fixed brand font.

Material guidance notes that larger type often uses tighter letter spacing while smaller type can benefit from looser spacing for readability. [web:222]

### 8.5 Readability rules
- Body copy should avoid excessively wide text columns.
- Long-form content should use readable line length and comfortable line height.
- Heading hierarchy should be obvious at a glance.
- Typography should do most of the hierarchy work before color and decoration step in to cosplay as structure.

---

## 9. Spacing system

### 9.1 Spacing philosophy
Spacing is one of the main drivers of premium perception.
The system should use a disciplined spacing scale to create rhythm, calm, and visual hierarchy.

### 9.2 Spacing layers
The spacing system should cover:
- inline spacing
- stack spacing
- section spacing
- grid gaps
- container padding
- component padding
- responsive spacing changes

### 9.3 Spacing rules
- Prefer a consistent scale over arbitrary values.
- Larger sections should breathe more than small components.
- Dense layouts should be intentional, not accidental.
- Section rhythm must remain consistent across pages.
- Tight spacing should signal closeness; generous spacing should signal emphasis or separation.

### 9.4 Section spacing expectations
The system should define:
- default section vertical padding,
- compact section padding,
- spacious section padding,
- and mobile-specific section compression rules.

---

## 10. Layout system

### 10.1 Layout philosophy
Layouts should feel composed, editorial, and deliberate.

The system must support:
- constrained content widths,
- full-bleed moments,
- mixed-width sections,
- content/media splits,
- editorial asymmetry,
- and intentional overflow where appropriate.

### 10.2 Layout primitives
The layout system should include:
- page wrapper logic
- section wrapper logic
- container widths
- narrow/reading widths
- wide content widths
- full-width regions
- grid primitives
- flex alignment helpers

### 10.3 Layout rules
- Keep `main` full-width unless the entire page truly behaves as one constrained column.
- Use inner containers to control width for most modern marketing pages.
- Use Grid for structured composition and Flexbox for directional alignment and smaller internal arrangements.
- Allow intentional bleed or overflow only when it is controlled and purposeful.

This aligns with the practical pattern you were already using where constrained text and overflowing card rails should be separated rather than forced under one universal max-width rule. [cite:83][cite:100][cite:103]

### 10.4 Container system
Recommended container roles:
- `container-narrow`
- `container-default`
- `container-wide`
- `container-full`

### 10.5 Grid guidance
Use Grid when:
- placing content across rows and columns,
- building composed hero layouts,
- structuring complex sections,
- or managing asymmetric editorial compositions.

Use Flexbox when:
- aligning items in one direction,
- spacing nav items,
- arranging buttons,
- or building smaller internal patterns.

That matches the implementation guidance you already established for premium hero layouts and structured sections. [cite:102][cite:104]

---

## 11. Radius, border, and shadow system

### 11.1 Philosophy
Depth and softness should communicate polish, not trend-chasing.

### 11.2 Radius rules
Define a small radius scale such as:
- none
- subtle
- medium
- large
- pill

Use it consistently across:
- buttons
- cards
- images
- inputs
- tags
- nav pills

### 11.3 Border rules
Define:
- subtle border
- default border
- emphasis border
- inverse border

Borders should help with structure and separation without creating noisy outlines everywhere.

### 11.4 Shadow rules
Shadows should:
- be subtle,
- support depth cues,
- vary by elevation level,
- and avoid muddy, exaggerated “template marketplace SaaS box” energy.

---

## 12. Motion system

### 12.1 Motion philosophy
Motion should reinforce quality, hierarchy, and continuity without distracting from content.

### 12.2 Allowed motion categories
- fade and reveal
- slight translate
- staggered entry
- hover feedback
- section transitions
- controlled scroll-linked effects where justified

### 12.3 Motion rules
- Motion must never obscure readability.
- Motion must not delay comprehension.
- Motion must respect reduced-motion settings.
- Motion must not create layout shift.
- Motion should be subtle by default.
- Scroll-driven effects should be used sparingly and only when they elevate the experience.

### 12.4 Motion implementation guidance
Use simpler declarative motion for UI interactions and controlled animation systems for more complex storytelling moments only when the design direction justifies it.

---

## 13. Component principles

### 13.1 Component goals
Components must be:
- reusable,
- modular,
- readable,
- style-consistent,
- and easy to compose.

### 13.2 Component layers
Define:
- primitives,
- shared composites,
- section-specific subcomponents,
- and content-specific components.

### 13.3 Component rules
- Components should solve repeatable needs.
- Component APIs should stay clear and bounded.
- Components should use tokens and semantic styles.
- Components should not accumulate random props to satisfy every one-off case.
- If a component is becoming a Swiss Army chainsaw, split it.

---

## 14. Section system

### 14.1 Core section inventory
The system should include:
- Hero
- Trust Strip
- Services
- Problem/Solution
- Process
- Testimonials
- Case Studies
- FAQ
- Content Feed
- CTA
- Footer

### 14.2 Section structure
Each section should define:
- purpose,
- allowed content structure,
- variant axes,
- presets,
- and implementation notes.

### 14.3 Section rules
- Each section should have one canonical implementation.
- Variations should come from variants and presets, not duplicate files.
- New section types should be rare and justified.
- Sections must preserve visual rhythm and brand coherence.

---

## 15. Variant system

### 15.1 Variant philosophy
Variation is necessary for distinct client outcomes, but it must be controlled.

### 15.2 Variant axes
Recommended variant axes include:
- layout
- density
- tone
- media placement
- emphasis
- CTA format
- surface style

### 15.3 Variant rules
- Limit each section to a small number of meaningful axes.
- Do not create variants for temporary convenience.
- Prefer variants that reflect visual logic, not random aesthetics.
- Compound variants may be used for approved combinations only.

A typed variant system like CVA is well-suited to this pattern because it supports structured variants and compound variants rather than ad hoc class sprawl. [web:208]

---

## 16. Preset system

### 16.1 Preset philosophy
Presets bundle approved variant combinations into ready-to-use visual directions.

### 16.2 Preset purpose
Presets exist to:
- speed implementation,
- create consistent design outcomes,
- support niche-specific defaults,
- and reduce improvisation.

### 16.3 Preset rules
- Presets should have clear names tied to real use cases.
- Presets should not be random style bundles.
- Presets should be screenshot-tested.
- Presets should remain limited and curated.

### 16.4 Example preset categories
- `cpaAuthority`
- `founderLed`
- `editorialTrust`
- `conversionFocused`
- `modernMinimal`

---

## 17. Theme system

### 17.1 Theme philosophy
Themes should remap semantic tokens and selected stylistic rules without breaking the structural system.

### 17.2 Theme responsibilities
Themes may change:
- semantic color mapping,
- type pairings,
- accent style,
- radius feel,
- section tone,
- and visual atmosphere.

Themes should not break:
- spacing scale,
- layout logic,
- accessibility standards,
- or structural consistency.

### 17.3 Theme rule
Themes should feel like different expressions of the same high-standard system, not like completely unrelated products smashed into one repo.

---

## 18. Content design rules

The design system must support content clarity, not fight it.

### Content presentation rules
- Headlines should communicate value quickly.
- Proof should appear early and naturally.
- CTA hierarchy should remain obvious.
- Sections should not bury the next step.
- Long-form content should remain scannable and readable.
- Visual hierarchy should support strategic messaging rather than compete with it.

This matters because your actual creative direction is human-defined first, and the system exists to implement that clearly rather than bury it under decorative nonsense. [cite:143]

---

## 19. Premium quality markers

A design produced within this system should feel premium because of:
- strong typography,
- disciplined whitespace,
- clear composition,
- controlled contrast,
- subtle depth,
- restrained motion,
- sharp proof placement,
- and deliberate hierarchy.

It should not rely on:
- excessive gradients,
- trendy visual noise,
- random 3D gimmicks,
- over-decorated cards,
- or complexity used as fake sophistication.

---

## 20. Anti-patterns

Avoid:
- hardcoded one-off design values,
- duplicated visual patterns,
- excessive accent color usage,
- inconsistent spacing,
- weak hierarchy,
- oversized text blocks with poor readability,
- over-animation,
- component prop bloat,
- too many section types,
- and preset sprawl.

These are how systems go from premium to “template pack found on sale next to a fake productivity guru.”

---

## 21. Implementation expectations

When implementing from this design system:
- use tokens first,
- use semantic roles before raw values,
- use components before one-off markup,
- use variants before duplication,
- use presets before improvisation,
- and preserve responsiveness and readability at every step.

The implementation should always make it clear:
- what is global,
- what is reusable,
- what is local,
- and what is intentionally brand-specific.

---

## 22. Documentation dependencies

This design system spec should be used alongside:
- `PRODUCT-REQUIREMENTS.md`
- `NON-FUNCTIONAL-REQUIREMENTS.md`
- `AGENT-GUARDRAILS.md`
- `FILE-MAP.md`
- `EDITING-GUIDE.md`

No part of the design system should contradict those documents.

---

## 23. Maintenance rules

Update this document whenever:
- the token structure changes,
- the spacing or typography system changes,
- new section families are added,
- variant logic changes materially,
- presets are added or removed,
- or the visual foundation evolves.

A stale design system spec becomes decorative fiction.
Keep it tied to the real system.

---