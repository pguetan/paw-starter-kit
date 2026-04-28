# FILE-MAP.md

## 1. Purpose

This document explains where things live in the codebase, what each major folder is responsible for, and where to make common edits.

The goal is simple:
- reduce time spent hunting through files,
- make edits predictable,
- support cleaner AI-agent execution,
- and keep the codebase maintainable as the system grows.

If someone asks, “Where do I change this?”, this file should answer that question fast.

---

## 2. Principles

The file structure must:
- match the scale and purpose of the project,
- separate concerns clearly,
- make common edit paths obvious,
- and remain understandable to both humans and AI agents.

Clear project structure and centralized documentation improve maintainability, onboarding, and the ability to locate the right code quickly. [web:180][web:184][web:191]

### File organization rules
- One folder should have one clear purpose.
- Shared logic should live in a shared location.
- Content, styling, components, and configuration should not be mixed casually.
- Files should be easy to find based on what they do, not where someone randomly put them on a sleepy Tuesday.

---

## 3. Top-level structure

```txt
project-root/
├─ .github/
├─ app/
├─ components/
├─ content/
├─ data/
├─ docs/
├─ lib/
├─ public/
├─ styles/
├─ tests/                 # optional, if used
├─ .env.local             # local only, never commit secrets
├─ package.json
├─ tsconfig.json
├─ next.config.mjs        # or vite.config.ts depending on stack
├─ mdx-components.tsx     # if using Next.js MDX
└─ README.md
```

### Top-level folder purposes

| Folder/File | Purpose |
|---|---|
| `.github/` | GitHub Actions workflows and pull request review templates |
| `app/` | Routes, page entry points, layouts, route-level UI, metadata, and page composition |
| `components/` | Reusable UI primitives, sections, content components, and shared interface pieces |
| `content/` | MDX or content-source files such as blog posts, author files, and content collections |
| `data/` | Structured site content/config such as navigation, testimonials, FAQs, and section data |
| `docs/` | System documentation, guides, specs, and implementation references |
| `lib/` | Utilities, helpers, integrations, validators, formatting logic, SEO helpers, CMS adapters |
| `public/` | Static files such as images, icons, OG images, downloadable assets, and fonts if applicable |
| `styles/` | Token files, global style architecture, prose styles, utility layers, and design foundations |
| `tests/` | Automated tests, if included in the project |
| `README.md` | Project setup, overview, and first-step orientation |

A logical structure should make it obvious where code, data, and documentation live, because that reduces search friction and maintenance overhead over time. [web:180][web:183]

---

## 4. Route layer

The `app/` folder contains page-level implementation and route-specific structure.

Example:

```txt
app/
├─ (site)/
│  ├─ page.tsx
│  ├─ about/page.tsx
│  ├─ services/page.tsx
│  ├─ contact/page.tsx
│  └─ blog/
│     ├─ page.tsx
│     └─ [slug]/page.tsx
├─ api/
├─ globals.css
├─ layout.tsx
├─ not-found.tsx
└─ sitemap.ts
```

### What belongs in `app/`
- route entry files,
- route-level layouts,
- metadata exports,
- route composition,
- page shells,
- and route-specific loading or error states where used.

### What should not live in `app/`
- large reusable section implementations,
- deeply shared utilities,
- long content objects,
- or design-token definitions.

### Edit here when
- adding a new page,
- changing page order or section composition,
- editing route-level metadata,
- updating global layout wrappers,
- or defining page-specific structure.

---

## 5. Component layer

The `components/` folder contains reusable UI and page-building pieces.

Recommended structure:

```txt
components/
├─ ui/
├─ sections/
├─ blog/
├─ forms/
├─ navigation/
└─ shared/
```

### `components/ui/`
Low-level reusable primitives.

Examples:
- Button
- Container
- Section
- Heading
- Text
- Card
- Badge
- Input
- Textarea
- Accordion
- Dialog

Edit here when:
- changing shared button styles,
- adjusting reusable primitive behavior,
- updating base UI patterns.

### `components/sections/`
Page-building blocks used across templates.

Examples:
- HeroSection
- LogoStripSection
- ServicesSection
- ProcessSection
- TestimonialsSection
- FAQSection
- CTASection

Edit here when:
- changing how a reusable section looks or behaves,
- adding or refining section variants,
- updating layout logic for a reusable block.

### `components/blog/`
Blog/article-specific UI.

Examples:
- ArticleHero
- TableOfContents
- AuthorBox
- RelatedPosts
- InlineCTA
- LeadMagnetBox

Edit here when:
- changing article layouts,
- adjusting blog-specific components,
- updating content support modules inside articles.

### `components/forms/`
Form UI and field wrappers.

Examples:
- ContactForm
- NewsletterForm
- BookingForm
- Field wrappers
- Validation messaging components

Edit here when:
- changing form layout,
- adding reusable form states,
- updating shared form logic.

### `components/navigation/`
Navigation-specific UI.

Examples:
- Header
- NavMenu
- MobileMenu
- FooterNav
- Breadcrumbs

Edit here when:
- changing site navigation structure rendering,
- adjusting mobile nav behavior,
- updating footer navigation UI.

### `components/shared/`
Shared higher-level pieces that do not fit primitive UI but are reused across multiple areas.

Examples:
- SectionHeader
- ProofBadge
- MetricsRow
- MediaFrame
- BackgroundAccent

Edit here when:
- a reusable pattern is shared by multiple sections but is not a primitive UI element.

The structure should help someone understand where to look based on function and responsibility, which is a core documentation and onboarding best practice. [web:184][web:186][web:192]

---

## 6. Section architecture

Each reusable section should live in its own folder when complexity justifies it.

Recommended pattern:

```txt
components/sections/hero/
├─ HeroSection.tsx
├─ hero.schema.ts
├─ hero.variants.ts
├─ hero.presets.ts
└─ index.ts
```

### File roles
- `HeroSection.tsx`: main section implementation
- `hero.schema.ts`: typed props/content structure
- `hero.variants.ts`: variant definitions and styling logic
- `hero.presets.ts`: approved preset bundles
- `index.ts`: clean exports

Use this structure when a section has variants, presets, typed data, or multiple helpers.
Use a single-file section only when it remains genuinely simple.

### Edit here when
- changing section props,
- adding a new approved preset,
- modifying layout variants,
- or updating the section’s internal structure.

---

## 7. Content layer

The `content/` folder stores authored content files, usually MDX or structured content sources.

Example:

```txt
content/
├─ blog/
│  ├─ how-to-build-authority.mdx
│  ├─ premium-positioning-guide.mdx
│  └─ ...
├─ authors/
│  ├─ paul-guetan.mdx
│  └─ ...
└─ legal/
   ├─ privacy-policy.mdx
   └─ terms-of-service.mdx
```

### What belongs here
- MDX blog posts,
- author records,
- legal content if file-based,
- long-form written content that is content-first rather than UI-first.

### Edit here when
- updating article copy,
- adding blog posts,
- editing author bios,
- managing file-based content.

If a piece of information behaves like authored content, it belongs here.
If it behaves like reusable structured config, it probably belongs in `data/`.

---

## 8. Data layer

The `data/` folder stores structured site content and configuration used across the site.

Example:

```txt
data/
├─ navigation.ts
├─ site.ts
├─ testimonials.ts
├─ faqs.ts
├─ services.ts
├─ cta.ts
└─ social-links.ts
```

### What belongs here
- navigation items,
- site settings,
- structured testimonials,
- FAQs,
- reusable content arrays,
- service card data,
- social links,
- CTA config.

### What should not go here
- large JSX fragments,
- styling logic,
- page route logic,
- or ad hoc component-specific hacks.

### Edit here when
- changing nav links,
- updating structured content,
- editing simple reusable content objects,
- updating social or contact info,
- adjusting non-authored site config.

---

## 9. Utility layer

The `lib/` folder contains implementation logic that supports the UI.

Recommended structure:

```txt
lib/
├─ seo/
├─ mdx/
├─ cms/
├─ utils/
├─ validators/
├─ analytics/
└─ integrations/
```

### `lib/seo/`
SEO helpers, metadata builders, schema helpers, canonical logic.

Edit here when:
- changing metadata generation,
- updating structured data helpers,
- modifying SEO utility logic.

### `lib/mdx/`
MDX parsing, content loading, frontmatter helpers, component mapping support.

Edit here when:
- changing MDX loading behavior,
- adding content parsing logic,
- updating blog content utilities.

### `lib/cms/`
CMS adapters, data transformation, fetch helpers, preview logic.

Edit here when:
- integrating or updating the CMS layer,
- handling preview/edit-mode logic,
- mapping CMS content to frontend structures.

### `lib/utils/`
General helpers used across the project.

Edit here when:
- adding true shared utility logic,
- updating formatting helpers,
- extracting repeated implementation helpers.

### `lib/validators/`
Validation schemas and form/content validation helpers.

Edit here when:
- adjusting form validation,
- adding schema validation,
- updating content validation rules.

### `lib/analytics/`
Tracking helpers and event mapping.

Edit here when:
- changing event names,
- adjusting tracking helpers,
- updating analytics behavior.

### `lib/integrations/`
External services and integration logic.

Edit here when:
- changing booking tools,
- updating form destination logic,
- integrating third-party systems.

---

## 10. Style layer

The `styles/` folder contains design foundations and shared styling architecture.

Recommended structure:

```txt
styles/
├─ tokens.css
├─ prose.css
├─ utilities.css
├─ animations.css
└─ themes/
```

### What belongs here
- token declarations,
- typography/prose styling,
- utility layers,
- animation utility rules,
- theme-specific style files if used.

### Edit here when
- changing tokens,
- adjusting typography defaults,
- changing global prose styling,
- updating shared animation classes,
- or modifying theme-level styling architecture.

### What should not live here
- one-off section overrides that belong with a component,
- content data,
- or route-specific hacks.

---

## 11. Public assets layer

The `public/` folder stores static assets.

Recommended structure:

```txt
public/
├─ images/
│  ├─ pages/
│  ├─ sections/
│  ├─ blog/
│  └─ brand/
├─ icons/
├─ og/
├─ downloads/
└─ fonts/
```

### What belongs here
- optimized images,
- social preview images,
- icons,
- downloadable assets,
- and static public files.

### Asset organization rules
- Group assets by purpose.
- Use descriptive names.
- Avoid dumping everything into one folder like a digital junk drawer.
- Keep filenames human-readable and stable.

### Edit here when
- swapping images,
- updating downloadable files,
- changing OG images,
- or managing static public media.

---

## 12. Documentation layer

The `docs/` folder contains the operational brain of the project.

Recommended structure:

```txt
docs/
├─ README.md
├─ PRODUCT-REQUIREMENTS.md
├─ NON-FUNCTIONAL-REQUIREMENTS.md
├─ AGENT-GUARDRAILS.md
├─ FILE-MAP.md
├─ DESIGN-SYSTEM-SPEC.md
├─ EDITING-GUIDE.md
├─ DEBUGGING.md
├─ DEPLOYMENT.md
├─ DEFINITION-OF-DONE.md
├─ SYSTEM-DEVELOPMENT-MODE.md
├─ CLIENT-PROJECT-MODE.md
├─ NEW-CLIENT-PROJECT-GUIDE.md
├─ CLIENT-INTAKE-BRIEF.md
├─ COMPONENT-INVENTORY.md
├─ SECTION-INVENTORY.md
├─ VARIANT-PRESET-GUIDE.md
├─ THEME-OVERRIDE-GUIDE.md
├─ QA-CHECKLIST.md
└─ CHANGELOG.md
```

### What belongs here
- product specs,
- process docs,
- implementation rules,
- editing instructions,
- troubleshooting guides,
- deployment instructions,
- and change history.

Documentation should act as a navigational index and working reference for collaborators, which is why onboarding guidance often recommends a single clear document that points people to the right project materials. [web:184][web:187]

### Edit here when
- project rules change,
- setup changes,
- file locations change,
- editing paths change,
- deployment steps change,
- or implementation assumptions change.

---

## 13. Common edit paths

### If you want to change website copy
- Check `content/` for MDX/file-based copy
- Check `data/` for structured content
- Check CMS config or source if content is CMS-driven
- Check route file only if the copy is truly page-specific and intentionally local

### If you want to change shared button styles
- Edit `components/ui/Button...`
- Check `styles/tokens.css` if token-driven values need adjustment

### If you want to change a homepage hero layout
- Edit `components/sections/hero/...`
- Then confirm the page route in `app/` is using the correct variant or preset

### If you want to change navigation links
- Edit `data/navigation.ts`
- Then check `components/navigation/...` only if rendering behavior also changes

### If you want to change blog post layout
- Edit `app/(site)/blog/[slug]/page.tsx`
- Check `components/blog/` for article support components
- Check `content/blog/` for actual article content

### If you want to change typography scale or spacing rules
- Edit the token files in `styles/`
- Check any related utility or prose files

### If you want to change SEO metadata behavior
- Edit `lib/seo/`
- Check route-level metadata in `app/`

### If you want to change forms or validation
- Edit `components/forms/`
- Check `lib/validators/`
- Check `lib/integrations/` if submission handling changes

### If you want to change analytics events
- Edit `lib/analytics/`
- Check event calls in related components or routes

---

## 14. Naming conventions

### File naming
Use clear descriptive names.

Preferred examples:
- `HeroSection.tsx`
- `hero.presets.ts`
- `navigation.ts`
- `site.ts`
- `ContactForm.tsx`

Avoid:
- `stuff.ts`
- `utils2.ts`
- `final-final.tsx`
- `newHero.tsx`
- `temp.ts`

### Folder naming
Folders should describe a stable concept, not a temporary thought.

Preferred examples:
- `sections`
- `navigation`
- `validators`
- `integrations`
- `blog`

### Documentation naming
Documentation files should be explicit and discoverable.

Preferred examples:
- `FILE-MAP.md`
- `EDITING-GUIDE.md`
- `DEBUGGING.md`

Clear naming conventions and accessible centralized guidelines help maintain consistent file organization over time. [web:186]

---

## 15. What not to do

Do not:
- put content, styling, business logic, and route logic in one giant file,
- create duplicate folders for similar responsibilities,
- hide important config in random locations,
- create new folders without a clear reason,
- or bury common edit paths behind unnecessary abstraction.

If someone needs a treasure map and two emotional support coffees to update a CTA, the structure is bad.

---

## 16. Agent-specific instructions

The AI agent must use this file before making structural changes.

Before creating a new file or folder, the agent must ask:
- does an existing location already fit this responsibility,
- is the new file aligned with the documented structure,
- and will a human know where to find it later?

The AI agent must not create:
- duplicate structural patterns,
- random helper folders,
- vague filenames,
- or undocumented file locations.

If the codebase evolves beyond this map, this file must be updated in the same change set.

---

## 17. Maintenance rules

This file map must be updated whenever:
- a new top-level folder is introduced,
- a major subsystem is added,
- content sources change,
- route architecture changes materially,
- or common edit paths change.

Code documentation works best when it stays aligned with the actual implementation rather than drifting into fantasyland documentation theater. [web:185][web:188]

---

## 18. Quick navigation summary

| Need | Go to |
|---|---|
| Add or change a page | `app/` |
| Change reusable UI primitives | `components/ui/` |
| Change reusable sections | `components/sections/` |
| Change blog/article components | `components/blog/` |
| Change form UI or behavior | `components/forms/` and `lib/validators/` |
| Change structured site content | `data/` |
| Change authored long-form content | `content/` |
| Change SEO helpers | `lib/seo/` |
| Change analytics logic | `lib/analytics/` |
| Change tokens and global style foundations | `styles/` |
| Change images and static assets | `public/` |
| Change documentation or rules | `docs/` |

---
