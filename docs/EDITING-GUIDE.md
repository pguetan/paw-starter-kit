# EDITING-GUIDE.md

## 1. Purpose

This guide explains how to safely make common updates in the website system without breaking structure, styling, or reusable patterns.

Use this guide when you need to:
- update copy,
- swap images,
- add or edit blog posts,
- change navigation,
- update SEO settings,
- edit forms,
- adjust reusable sections,
- or make small style updates.

This guide is task-oriented on purpose.
It is designed to answer:
- what to edit,
- where to edit it,
- what not to touch,
- and how to verify the change worked.

---

## 2. Before you edit anything

Before making changes:

1. Confirm what kind of change this is:
   - content,
   - image/media,
   - SEO,
   - section layout,
   - style/token,
   - form,
   - navigation,
   - or blog.

2. Check `FILE-MAP.md` first if you are not sure where the relevant files live.

3. Prefer editing the smallest correct source:
   - content files for content,
   - data files for structured content,
   - component files for reusable UI,
   - token/style files for shared visual rules.

4. Do not change reusable system files unless the change is truly meant to affect multiple pages.

5. If the change affects shared components, verify other pages after editing.

---

## 3. Editing rules

### Safe editing rules
- Edit the most local source possible first.
- Reuse the existing system before creating anything new.
- Keep naming, spacing, and structure consistent.
- If a file is hard to understand, stop and locate the correct source instead of guessing.

### Do not do these things
- Do not hardcode random styles into pages when a token or reusable class should be used.
- Do not duplicate components just to make a one-off variation.
- Do not paste large blocks of content into component files if that content belongs in `content/` or `data/`.
- Do not edit multiple unrelated files unless the change truly requires it.
- Do not “quick fix” a shared component without checking where else it is used.

### If you are unsure
- Check `FILE-MAP.md`
- Check `AGENT-GUARDRAILS.md`
- Check the nearest similar pattern already in use
- Ask for clarification instead of improvising

---

## 4. Common tasks

### 4.1 Change website copy

Use this when:
- changing headlines,
- editing section text,
- updating CTA copy,
- fixing messaging,
- or replacing placeholder text.

Where to edit:
- `content/` for file-based authored content such as blog posts or long-form pages
- `data/` for structured reusable content such as testimonials, FAQs, services, nav labels, and CTA data
- route files in `app/` only if the copy is intentionally local to that route
- CMS content source if the website uses a CMS for editable content

Process:
1. Locate the page or section containing the copy.
2. Identify whether the content is file-based, structured data, or CMS-driven.
3. Edit the content in the correct source.
4. Preview the page.
5. Check line breaks, spacing, wrapping, and mobile readability.
6. Confirm that the content still matches the approved copy deck.

Do not:
- change strategic messaging without approval,
- move content into component code if it belongs in content/data,
- or silently rewrite copy to “improve” it.

---

### 4.2 Swap or update images

Use this when:
- replacing hero images,
- changing profile photos,
- updating blog thumbnails,
- or replacing brand/media assets.

Where to edit:
- `public/images/...` for static assets
- `content/` or `data/` if the asset path is referenced there
- CMS media library if the project is CMS-driven

Process:
1. Prepare the new asset at the correct size and format.
2. Replace or add the file in the correct `public/` subfolder.
3. Update the image reference in `content/`, `data/`, or CMS if needed.
4. Verify the image loads correctly on desktop and mobile.
5. Check cropping, aspect ratio, alt text, and performance impact.

Do not:
- dump random media into the wrong folder,
- leave old filenames like `final2-revised-new.jpg`,
- or use oversized images when optimized versions are available.

---

### 4.3 Add a new blog post

Use this when publishing a new article.

Where to edit:
- `content/blog/` for MDX/file-based blogs
- CMS blog collection if the blog is CMS-driven
- `content/authors/` if a new author profile is needed
- `app/(site)/blog/` and `components/blog/` only if template behavior needs changes

Process:
1. Create the new blog file or CMS entry.
2. Add required metadata such as title, slug, date, author, and image.
3. Write or paste the approved content.
4. Preview the article page.
5. Check headings, images, spacing, embeds, and related components.
6. Confirm the article appears correctly on the blog index page.
7. Validate internal links and SEO fields.

Do not:
- edit the blog template just to publish a normal article,
- skip metadata,
- or publish without previewing the full page.

---

### 4.4 Change navigation links

Use this when:
- adding a new page to the nav,
- renaming links,
- reordering links,
- or changing footer navigation.

Where to edit:
- `data/navigation.ts`
- footer data file if separate
- CMS nav settings if navigation is CMS-driven
- `components/navigation/` only if the rendering behavior itself needs to change

Process:
1. Update the navigation data source.
2. Confirm desktop navigation.
3. Confirm mobile navigation.
4. Check active states, spacing, wrapping, and dropdown behavior if applicable.
5. Verify the linked route exists.

Do not:
- hardcode nav changes into one template if navigation is shared,
- or change navigation UI when only the nav data needs editing.

---

### 4.5 Update a reusable section

Use this when:
- changing the layout or styling of a section used across multiple pages,
- updating a section preset,
- or refining a shared section pattern.

Where to edit:
- `components/sections/<section-name>/`
- section preset and variant files
- section schema if the content shape changes

Process:
1. Locate the section folder.
2. Review the main section file, presets, and variants before editing.
3. Make the smallest correct change.
4. Check all pages that use that section.
5. Verify responsiveness.
6. Confirm that the update still follows token, spacing, and variant rules.

Do not:
- create a duplicate section just to avoid understanding the original,
- add new variants casually,
- or make a shared section change without checking reuse impact.

---

### 4.6 Change styles, spacing, or typography

Use this when:
- adjusting design tokens,
- changing text scale,
- updating spacing rhythm,
- or changing shared visual foundations.

Where to edit:
- `styles/tokens.css`
- `styles/prose.css`
- `styles/utilities.css`
- component styling files if the change is component-specific

Process:
1. Decide whether the change is global or local.
2. If global, edit tokens or shared style layers.
3. If local, edit the relevant component or section.
4. Test on multiple pages and breakpoints.
5. Confirm that the visual change is intentional and consistent.

Do not:
- hardcode one-off pixel values when tokens exist,
- or make a global token change without checking broader impact.

---

### 4.7 Update forms

Use this when:
- editing fields,
- changing validation,
- updating submission destinations,
- or changing form copy/states.

Where to edit:
- `components/forms/`
- `lib/validators/`
- `lib/integrations/`
- structured content/config if labels or messages are stored separately

Process:
1. Identify whether the change is UI, validation, integration, or content.
2. Edit the correct layer.
3. Test valid and invalid form states.
4. Confirm success, error, and loading states.
5. Verify mobile usability and accessibility.

Do not:
- change validation in the UI only and forget the validator,
- break submission flows,
- or assume a form works without testing the full path.

---

### 4.8 Update SEO metadata

Use this when:
- changing page titles,
- updating descriptions,
- editing canonical behavior,
- or adjusting structured data support.

Where to edit:
- route-level metadata in `app/`
- `lib/seo/`
- blog content metadata in `content/` or CMS
- site settings/config if defaults are centralized

Process:
1. Identify whether the metadata is page-specific or shared.
2. Edit the relevant metadata source.
3. Check rendered output.
4. Validate that titles, descriptions, canonical URLs, and previews are correct.
5. Confirm no duplicate or conflicting metadata was introduced.

Do not:
- hardcode metadata into the wrong layer,
- or forget that blog/article pages often pull metadata from content sources.

---

## 5. Quick edit map

| Task | First place to check |
|---|---|
| Change page layout | `app/` and `components/sections/` |
| Change shared button styles | `components/ui/` and `styles/` |
| Change blog article content | `content/blog/` or CMS |
| Change navigation | `data/navigation.ts` or CMS nav config |
| Change testimonial content | `data/testimonials.ts` or CMS |
| Change section layout | `components/sections/<section-name>/` |
| Change tokens/spacing/type scale | `styles/` |
| Change form behavior | `components/forms/`, `lib/validators/`, `lib/integrations/` |
| Change SEO behavior | `lib/seo/` and route metadata |
| Change images | `public/` plus related content/data references |

---

## 6. Safe workflow for any edit

Use this sequence for most updates:

1. Identify the change type.
2. Locate the correct file using `FILE-MAP.md`.
3. Check whether the change is local or shared.
4. Edit the smallest correct source.
5. Preview the result.
6. Test desktop and mobile.
7. Check for side effects on reused components or templates.
8. Update docs if the edit changes workflow, structure, or conventions.

---

## 7. Validation checklist

Before considering an edit complete, confirm:

- The correct source file was edited.
- No duplicate component or style pattern was created.
- The change matches the approved content/design intent.
- The layout still works on desktop and mobile.
- Shared components still behave correctly.
- The change did not create obvious accessibility problems.
- The change did not create obvious performance issues.
- Any related documentation was updated if needed.

---

## 8. When to stop and ask for help

Stop and escalate if:
- the correct file is unclear,
- the requested change conflicts with the approved design,
- the edit would require a new component or section,
- the change affects a shared system you do not fully understand,
- the content source seems duplicated or inconsistent,
- or the update requires business or creative judgment rather than implementation.

Do not freestyle your way into a broken system.

---

## 9. Maintenance rule

This guide must be updated whenever:
- common edit paths change,
- the folder structure changes,
- the CMS/content model changes,
- or the editing workflow changes meaningfully.

Keep the guide aligned with the real codebase and real workflow.