# DEBUGGING.md

## 1. Purpose

This guide defines the standard debugging workflow for websites built with the Premium Authority Website Implementation System.

Its goals are to:
- reduce random guesswork,
- standardize how issues are diagnosed,
- speed up troubleshooting,
- prevent symptom-patching,
- and make debugging easier for humans and AI agents.

This is not a list of clever hacks.
It is a practical operating guide for finding root causes and fixing issues cleanly.

---

## 2. Debugging mindset

Before trying to fix anything:
- understand the problem,
- reproduce it,
- narrow the scope,
- inspect the correct layer,
- and confirm the actual cause.

Debugging guidance consistently emphasizes reproducing the issue before changing code, because jumping straight into “fixes” often wastes time and introduces new bugs. [web:224][web:226]

### Core rules
- Fix root causes, not symptoms.
- Change the smallest correct thing.
- Verify the fix worked.
- Check for side effects.
- Document recurring issues.

### Do not do this
- Do not rewrite large chunks of code because you are annoyed.
- Do not stack hacks on top of hacks.
- Do not assume the first suspicious file is the real problem.
- Do not claim certainty without proof.
- Do not let the AI agent freestyle its way through the repo like a panicked raccoon with commit access.

---

## 3. Standard debugging workflow

Use this sequence for almost every issue:

1. Describe the problem clearly.
2. Reproduce the issue consistently.
3. Identify the affected page, component, route, or system.
4. Classify the issue type.
5. Inspect the smallest relevant layer first.
6. Form a specific hypothesis.
7. Test the hypothesis.
8. Apply the smallest correct fix.
9. Re-test the original issue.
10. Check for regressions.
11. Document the cause and fix if it is likely to happen again.

A good troubleshooting guide should start with the problem, then show how to isolate the cause and apply a clear fix path. [web:227][web:230]

---

## 4. Issue classification

Before debugging, classify the issue.

### Common issue types
- Layout bug
- Responsive bug
- Overflow bug
- Styling inconsistency
- Typography/token drift
- Component logic bug
- Route/rendering bug
- Hydration or client/server mismatch
- Form validation bug
- Form submission/integration bug
- CMS/content rendering bug
- SEO/metadata bug
- Image/media issue
- Accessibility issue
- Performance issue
- Build or deployment issue

If the issue is not clearly classified, you will waste time poking random files like a confused woodpecker.

---

## 5. First-response checklist

Before editing code, answer these questions:

- What exactly is wrong?
- Where does it happen?
- Does it happen always or only sometimes?
- Is it reproducible?
- Which page or component is affected?
- Is it visual, structural, data-related, or integration-related?
- Did this work before?
- What changed recently?
- Is the bug local to one page or shared across the system?
- Does it affect desktop, tablet, mobile, or all of them?

If you cannot answer these, you are not debugging yet.
You are just emotionally hovering near the problem.

---

## 6. Locate the correct layer

Use this map to find the most likely problem area.

| Problem type | First place to inspect |
|---|---|
| Page structure issue | `app/` |
| Shared section layout bug | `components/sections/` |
| Shared primitive UI bug | `components/ui/` |
| Blog/article rendering issue | `components/blog/`, `content/`, `app/blog/` |
| Form UI/validation issue | `components/forms/`, `lib/validators/` |
| Submission/integration issue | `lib/integrations/` |
| SEO issue | `lib/seo/`, route metadata |
| Styling/token drift | `styles/`, token files, component class usage |
| Navigation issue | `data/navigation.ts`, `components/navigation/` |
| Structured content issue | `data/` |
| Media issue | `public/`, content/data references |
| Analytics issue | `lib/analytics/` |
| CMS issue | `lib/cms/`, CMS config, content mapping layer |

Always inspect the most likely layer first instead of editing whatever file happened to be open already.

---

## 7. Reproduction rules

A bug should be reproduced before fixing whenever possible.

### Reproduction checklist
- Which exact page or route is affected?
- Which viewport size triggers it?
- Which browser triggers it?
- Which content state triggers it?
- Which user action triggers it?
- Does it require CMS data, missing data, or unusual content length?
- Does it occur in development, staging, production, or all three?

### Reproduction standards
- Write down the exact steps.
- Keep the steps short and specific.
- Confirm whether another person or agent can reproduce the same issue.

If you cannot reproduce it reliably, say that clearly.

---

## 8. Layout debugging

Use this section when things look structurally wrong.

### Common layout symptoms
- elements overlapping,
- content too wide,
- content too narrow,
- broken grid alignment,
- incorrect spacing,
- sections collapsing,
- unintended wrapping,
- or content not matching the wireframe.

### Layout debugging steps
1. Identify whether the issue belongs to page layout, section layout, or inner component layout.
2. Inspect the container/wrapper rules.
3. Check Grid vs Flex usage.
4. Check width, max-width, min-width, and gap behavior.
5. Check spacing and alignment utilities.
6. Check whether the issue is caused by content length, media size, or breakpoint logic.
7. Confirm whether overflow is intentional or accidental.

### Common root causes
- wrong container width,
- nested width constraints fighting each other,
- Grid used where Flex is enough,
- Flex used where Grid is needed,
- section-level spacing inconsistency,
- content assumptions broken by real data,
- or a “small quick change” that quietly punched the layout in the throat.

For mixed-width sections, keep in mind the pattern you already established: full-width section, constrained inner content where needed, and separate overflow wrappers for elements like horizontal testimonial rails. [cite:82][cite:83][cite:100]

---

## 9. Responsive debugging

Responsive testing should focus on the pages and features that matter most, and common checklists emphasize layout reflow, spacing, readability, touch targets, and conditional rendering across viewport sizes. [web:233][web:234][web:228]

### Responsive debugging steps
1. Check the issue on mobile, tablet, and desktop.
2. Confirm whether the issue is a breakpoint problem or a general layout problem.
3. Inspect widths, gaps, stacking behavior, and alignment.
4. Check long text, large media, and dynamic content lengths.
5. Test interactive elements such as menus, accordions, carousels, and forms.
6. Check orientation changes where relevant.
7. Confirm no hidden horizontal scrolling unless intentionally designed.

### Common responsive root causes
- hardcoded widths,
- missing min/max constraints,
- bad stacking rules,
- oversized text blocks,
- image aspect ratio problems,
- touch targets too small,
- or mobile-only nav logic breaking under real content.

---

## 10. Styling and token debugging

Use this when the site looks “off” even if the structure still works.

### Symptoms
- inconsistent spacing,
- wrong colors,
- typography mismatch,
- card styles drifting,
- hover states inconsistent,
- or a section that feels visually unrelated to the rest of the system.

### Debugging steps
1. Check whether the component is using tokens or hardcoded values.
2. Compare the current implementation to the approved section/component pattern.
3. Inspect semantic token usage.
4. Check for one-off class overrides.
5. Check whether a shared token changed globally.
6. Confirm whether the issue is local or systemic.

### Common root causes
- hardcoded values,
- component-specific overrides,
- duplicate styling logic,
- token name misuse,
- stale presets,
- or an AI agent trying to be “helpful” in a way that should be considered a misdemeanor.

---

## 11. Typography debugging

Use this when the site feels weak, crowded, hard to read, or visually inconsistent.

### Check:
- heading hierarchy,
- line height,
- font size scale,
- line length,
- letter spacing,
- weight consistency,
- and breakpoint behavior.

### Common issues
- body text too wide,
- headings too large or too small,
- insufficient spacing between heading and paragraph,
- inconsistent font weight usage,
- or desktop typography collapsing poorly on mobile.

If the hierarchy feels wrong, do not immediately add more decoration.
Typography is usually the first thing to fix.

---

## 12. Form debugging

Use this for contact, lead capture, booking, or newsletter issues.

### Debugging steps
1. Check the form UI.
2. Check the validation layer.
3. Check the submission handler.
4. Check the integration target.
5. Check success, loading, and error states.
6. Check accessibility and keyboard behavior.
7. Test on mobile and desktop.

### Validate these paths
- valid submission,
- empty required fields,
- invalid inputs,
- network failure,
- integration failure,
- duplicate submission protection if applicable.

### Common root causes
- UI changed but validator did not,
- validator changed but backend/integration expectation did not,
- field names mismatch,
- missing environment variables,
- broken submit state logic,
- or success UI lying like a cheerful little fraud.

---

## 13. Content and CMS debugging

Use this when content does not appear correctly, appears in the wrong order, or breaks a layout.

### Debugging steps
1. Identify the content source: `content/`, `data/`, or CMS.
2. Check whether the data exists.
3. Check whether the content shape matches the component schema.
4. Check whether the page expects fields that the content does not provide.
5. Check slugs, metadata, and image references.
6. Check fallback and empty states.

### Common root causes
- missing fields,
- wrong content shape,
- invalid slug,
- missing media asset,
- outdated schema,
- or a component assuming “this field always exists” because optimism is not a type system.

---

## 14. SEO and metadata debugging

Use this when titles, descriptions, canonical tags, structured data, or previews appear wrong.

### Debugging steps
1. Identify whether metadata is route-level, shared, or content-driven.
2. Check the metadata source.
3. Check the SEO helper layer.
4. Check article/frontmatter metadata if content-driven.
5. Verify rendered output.
6. Check for duplicate or conflicting tags.

### Common root causes
- metadata split across too many layers,
- missing frontmatter,
- default values overriding specific values,
- incorrect canonical logic,
- or stale shared helpers.

Google recommends structured metadata support for articles and explains that structured data helps search systems understand page content more accurately. [web:91][web:94]

---

## 15. Performance debugging

Use this when the site feels slow, janky, unstable, or visually jumpy.

### Debugging steps
1. Check which page or interaction feels slow.
2. Identify whether the issue is load, interaction, or layout stability.
3. Inspect images, fonts, scripts, and animation behavior.
4. Check whether unnecessary client-side code was introduced.
5. Check third-party scripts.
6. Check whether media or motion is blocking rendering or interactivity.

### Common root causes
- oversized images,
- too many font files,
- client-heavy rendering,
- unnecessary dependencies,
- heavy motion,
- late-loading media causing shift,
- or a third-party script acting like it pays rent when it absolutely does not.

Core Web Vitals focus on loading performance, responsiveness, and visual stability through metrics such as LCP, INP, and CLS, so performance debugging should map to those failure modes. [web:86]

---

## 16. Accessibility debugging

Use this when the issue affects usability, keyboard interaction, screen-reader support, or readability.

### Debugging steps
1. Check keyboard navigation.
2. Check focus visibility.
3. Check heading order.
4. Check labels and form errors.
5. Check contrast.
6. Check reduced-motion behavior.
7. Check semantic roles and landmarks.

### Common root causes
- clickable div nonsense,
- hidden focus states,
- broken label/input association,
- poor heading structure,
- contrast drift after brand styling,
- or animations that think accessibility is optional.

WCAG’s foundational accessibility principles require content to be perceivable, operable, understandable, and robust, which makes them a useful frame when debugging accessibility issues. [web:155][web:156]

---

## 17. Build and deployment debugging

Use this when the project fails to build, behaves differently between environments, or breaks after deploy.

### Debugging steps
1. Confirm whether the issue occurs locally, in staging, or in production only.
2. Check environment variables.
3. Check dependency differences.
4. Check build logs.
5. Check route/output assumptions.
6. Check CMS/API/integration environment configuration.
7. Confirm whether the issue is code, config, or environment.

### Common root causes
- missing env vars,
- build-time assumptions,
- path issues,
- invalid imports,
- content missing in production,
- deployment config mismatch,
- or “works on my machine” syndrome, one of software’s most irritating recurring characters.

---

## 18. AI-agent debugging rules

When the AI agent debugs:
- it must reproduce before fixing when possible,
- inspect existing patterns before rewriting,
- state a clear hypothesis,
- apply the smallest correct fix,
- and explain what caused the issue.

The agent must not:
- rewrite unrelated parts of the codebase,
- patch symptoms without identifying the root cause,
- invent causes without verification,
- or declare success without retesting.

---

## 19. Regression check

After any fix, verify:
- the original issue is resolved,
- nearby UI still works,
- shared components were not broken,
- mobile still works,
- forms still submit if affected,
- metadata still renders if affected,
- and no new warnings or obvious issues were introduced.

Responsive and UI testing checklists repeatedly stress checking core features first and validating layout behavior, touch targets, and readable content across breakpoints. [web:233][web:234]

---

## 20. What to document

Document the issue if:
- it is likely to happen again,
- it revealed a system weakness,
- it required a non-obvious fix,
- it involved environment quirks,
- or it should become a known troubleshooting pattern.

Document:
- the symptom,
- the root cause,
- the fix,
- and how to detect it faster next time.

Troubleshooting docs are most useful when they stay practical, are updated regularly, and help people solve recurring issues independently. [web:179][web:227][web:230]

---

## 21. Common anti-patterns

Avoid:
- debugging without reproduction,
- editing random files first,
- blaming the framework before checking your own code,
- patching layout problems with extra wrappers forever,
- adding one-off CSS bandages,
- changing tokens to fix a local bug,
- skipping mobile checks,
- and declaring victory after testing one screen once.

That is not debugging.
That is software superstition with syntax highlighting.

---

## 22. Debug completion checklist

A debugging task is complete only when:

- the problem is reproducible or clearly characterized,
- the root cause is identified or strongly evidenced,
- the smallest correct fix is applied,
- the fix is retested,
- related regressions are checked,
- and the issue is documented if it is likely to recur.

If you only “made the symptom go away,” you are not done.

---