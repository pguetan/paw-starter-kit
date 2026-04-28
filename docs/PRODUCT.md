## Product

This product is a reusable starter system for building premium authority websites for high-ticket coaches and consultants. The system must help one operator deliver fast, distinct, high-perceived-value websites with reusable blocks, controlled variations, and a clear content-editing path.

- Primary objective: make the client look like a top-tier authority within the first 5 seconds of landing on the site.
- Business outcome: win on speed, quality, and consistency rather than cheapness.
- Out of scope: low-end brochure sites, visual-builder-first workflows, and one-off bespoke builds with no reusable system.

## Functional requirements

The starter kit must include a modular section library with controlled variants and presets, not random one-off components. Each section should support reusable tokens, typed props, approved layout variations, and preset bundles by niche or brand direction.

- Core entities: pages, sections, presets, tokens, themes, blog posts, authors, testimonials, case studies, CTAs, navigation, forms, media assets.
- Required page templates: Home, About, Services, Contact, Blog Index, Blog Post, Lead Magnet/Landing Page, Legal pages.
- Required section families: Hero, Trust Strip, Services, Problem/Solution, Process, Testimonials, Case Studies, FAQ, Content Feed, CTA/Footer.
- Editing system: client-safe content editing, media updates, SEO fields, redirects, slug editing, draft/publish workflow.
- Documentation: file map, editing guide, component map, variant guide, debugging guide, deployment guide.
- AI workflow: guardrails for editing existing patterns before creating new ones, no duplicate utilities, no hardcoded magic values, no unapproved sections.

## Non-functional requirements

Performance must be defined with hard budgets, not vibes: Core Web Vitals target LCP within 2.5 seconds, INP at 200 ms or less, and CLS at 0.1 or less, measured at the 75th percentile across mobile and desktop. [reddit](https://www.reddit.com/r/nextjs/comments/15bm4iz/why_does_everyone_seem_to_build_a_blog_with/)

Security must be specified against a recognized baseline, and OWASP ASVS is designed to provide a basis for testing technical security controls and secure development requirements. [nextjs](https://nextjs.org/learn/pages-router/data-fetching-blog-data)

Authority-building content also needs search infrastructure, because Google documents structured data for articles and explains that structured data helps search systems understand page content. [developers.google](https://developers.google.com/search/docs/appearance/structured-data/article)

- Performance:
  - Hard budget for images, fonts, scripts, and above-the-fold motion.
  - Lazy-load non-critical media.
  - Use responsive images and preload only critical assets.
- Accessibility:
  - Full keyboard navigation.
  - Visible focus states.
  - Semantic heading order.
  - Contrast compliance.
  - Reduced-motion mode.
  - Accessible form errors and labels.
- Security:
  - Role-based admin access.
  - MFA-ready auth.
  - Input validation and sanitization.
  - Secure file upload handling.
  - Audit logs.
  - Rate limiting.
  - Backup and restore process.
- SEO:
  - Metadata, canonical tags, sitemap, robots, OG images.
  - Article and organization structured data.
  - Internal linking rules.
  - Author profile support.
  - Redirect management.
- Analytics:
  - CTA clicks, form starts, form submits, booking clicks, scroll depth, blog engagement, outbound link clicks.

## Architecture and workflow

This system should be built around your current code-first VS Code workflow and reusable master boilerplate strategy, not around visual builders.

You also already leaned toward design-system-first thinking, so the build order should stay strict: tokens first, then primitives, then sections, then templates, then content.

- Repo layers:
  - `app/` or routes
  - `components/ui/`
  - `components/sections/`
  - `components/blog/`
  - `content/`
  - `lib/`
  - `styles/`
  - `data/`
  - `docs/`
- Section architecture:
  - One canonical section per category.
  - 3–5 presets per section.
  - 4–6 variant axes max.
  - No `HeroV2`, `HeroFinalFinal`, or other crimes.
- Token architecture:
  - Primitive tokens: spacing, radius, shadows, typography scale, breakpoints.
  - Semantic tokens: text-primary, surface-muted, border-subtle, accent-strong.
- Docs required:
  - `PRODUCT-REQUIREMENTS.md`
  - `NON-FUNCTIONAL-REQUIREMENTS.md`
  - `DESIGN-SYSTEM-SPEC.md`
  - `AGENT-GUARDRAILS.md`
  - `DEFINITION-OF-DONE.md`
  - `FILE-MAP.md`

## Deliverables and done

“Enterprise-grade” must mean the same thing every time, or it means nothing except expensive emotional support. Your delivery system needs a fixed output pack and a fixed Definition of Done for every project.

| Deliverable | Required outcome |
|---|---|
| Starter kit | Reusable repo with tokens, primitives, sections, presets, templates, docs |
| Design system | Brand-agnostic foundation plus premium art-direction rules |
| Client site | Distinct visual identity, mobile responsiveness, subtle motion, blog-ready structure |
| Admin/CMS | Secure editing for content, media, SEO, and publishing workflow |
| QA pack | Lighthouse/perf checks, responsive QA, browser QA, link checks, form checks |
| Handoff pack | Editing guide, training video, maintenance process, rollback plan |

Definition of Done:

- Meets performance budget.
- Passes accessibility checklist.
- Passes security checklist.
- No duplicate section patterns.
- All pages responsive.
- All content editable where promised.
- SEO metadata complete.
- Analytics events installed.
- Docs complete.
- Client handoff complete.