# DEFINITION-OF-DONE.md

## 1. Purpose

This document defines the shared quality checklist that must be satisfied before any work is considered complete in the Premium Authority Website Implementation System.

Its purpose is to:
- remove ambiguity around what “done” means,
- prevent premature completion claims,
- enforce consistent quality,
- reduce rework,
- and create a clear quality gate for implementation, review, and release.

This document applies across pages, components, sections, templates, content implementations, integrations, and production-ready website work.

---

## 2. Definition

“Done” means the work is not only implemented, but also:
- aligned with approved inputs,
- validated,
- reviewed,
- documented where needed,
- and ready for its next stage without hidden cleanup debt.

A Definition of Done is a shared set of criteria used to determine when work is complete and ready for release or stakeholder review. [web:263][web:265][web:275]

Done does not mean:
- “the code exists,”
- “the UI kind of looks right,”
- “it worked once on my machine,”
- or “the AI agent said it’s finished with suspicious confidence.”

---

## 3. Scope

This Definition of Done applies to:
- page implementations,
- reusable components,
- reusable sections,
- styling/token changes,
- blog/content templates,
- forms and integrations,
- SEO and metadata work,
- documentation changes,
- bug fixes,
- and launch-ready production work.

It is the baseline standard for all work in the system.

Acceptance criteria still apply to specific tasks or pages, but this document defines the universal quality bar that all work must meet. [web:268][web:277]

---

## 4. General completion standard

A task is only done when:
- the correct thing was built,
- it was built cleanly,
- it works in the intended context,
- it does not break shared patterns,
- and it can be handed off without hidden confusion or cleanup debt.

Every work item must satisfy both:
- its specific acceptance criteria,
- and this shared Definition of Done.

Acceptance criteria describe what a specific item must do, while the Definition of Done defines the broader quality standard all work must meet. [web:268][web:271][web:274]

---

## 5. Universal done checklist

All work must satisfy the following before being marked done:

### 5.1 Correctness
- The implementation matches the approved source materials.
- The output respects the approved wireframe, layout intent, copy, and content structure.
- Any deviations are explicitly documented and approved.

### 5.2 Code quality
- Code is clean, readable, and maintainable.
- No unnecessary duplication was introduced.
- No unnecessary abstractions were introduced.
- Naming is clear and consistent.
- Files follow the documented structure and conventions.

### 5.3 Reuse discipline
- Existing components were reused before new ones were created.
- Existing tokens were used before hardcoded values were introduced.
- Existing variants/presets were used before new patterns were created.
- Any new reusable pattern is justified and placed correctly in the system.

### 5.4 Responsiveness
- The implementation works across relevant mobile, tablet, and desktop breakpoints.
- No accidental overflow, clipping, or layout collapse remains.
- Touch targets and spacing remain usable on mobile.

### 5.5 Accessibility
- Semantic structure is preserved.
- Keyboard interaction works where relevant.
- Focus visibility is preserved.
- Forms remain accessible.
- Reduced-motion expectations are respected where relevant.

### 5.6 Performance awareness
- No obvious performance regression was introduced.
- Images and media are handled appropriately.
- No unnecessary dependency or client-side bloat was added.
- Motion and layout behavior do not create obvious instability.

### 5.7 Functional validation
- All relevant behavior was tested.
- Forms, links, navigation, and states work as intended.
- Error states and fallback states were considered where relevant.

### 5.8 Documentation
- Relevant documentation was updated if the change affected workflow, structure, setup, behavior, or editing paths.
- Non-obvious implementation decisions are documented where needed.

### 5.9 Review readiness
- The work is ready for human review without hidden caveats.
- Open issues, assumptions, and deviations are clearly reported.
- The work does not depend on undocumented cleanup later.

---

## 6. Done criteria by work type

### 6.1 Page implementation is done when
- the page matches approved structure and content intent,
- all required sections are implemented,
- the page is responsive,
- metadata is present if required,
- links and CTAs work,
- and the page is review-ready.

### 6.2 Reusable component work is done when
- the component solves a repeatable need,
- its API is clear,
- it follows token and variant rules,
- it is placed in the correct layer of the system,
- it does not duplicate an existing component,
- and it has been tested in context.

### 6.3 Reusable section work is done when
- the section matches its intended purpose,
- variants and presets follow system logic,
- content structure is clear,
- responsiveness is verified,
- and reuse impact has been checked.

### 6.4 Styling or token work is done when
- the correct level was edited, global or local,
- no accidental system-wide regressions were introduced,
- visual consistency is preserved,
- token usage remains disciplined,
- and affected pages/components were checked.

### 6.5 Form work is done when
- the UI works,
- validation works,
- submission works,
- error states work,
- success states work,
- and the full flow has been tested.

### 6.6 Blog/content work is done when
- content renders correctly,
- metadata is complete,
- article structure is intact,
- images and embeds work,
- and index/detail views both behave correctly.

### 6.7 Bug fix work is done when
- the root cause is identified or strongly evidenced,
- the issue is actually resolved,
- the fix was retested,
- nearby regressions were checked,
- and recurring-debug value is documented where needed.

### 6.8 Deployment-ready work is done when
- preview validation is complete,
- production blockers are cleared,
- required checks pass,
- and deployment docs or notes are updated if relevant.

---

## 7. Required validation before marking work done

Before marking work done, verify all relevant items:

- Lint passes
- Type check passes
- Build passes where relevant
- Key UI states are tested
- Responsive behavior is checked
- Shared component reuse impact is checked
- Accessibility basics are checked
- No obvious console-breaking errors remain
- Content and data bindings are correct
- Docs are updated if needed

The Definition of Done should create a consistent quality baseline across all work items rather than leaving completion up to personal interpretation. [web:263][web:267]

---

## 8. Human vs AI completion rule

AI-generated code or implementation is never considered done just because the agent says it is done.

For AI-assisted work to be done:
- it must satisfy this Definition of Done,
- it must satisfy the task-specific acceptance criteria,
- and it must be review-ready for a human.

If the AI agent guessed, improvised, duplicated patterns, or left unclear assumptions, the work is not done.

---

## 9. Review gate

A reviewer should be able to answer yes to all of these:

- Does this match the approved intent?
- Is the implementation clean?
- Is the file placement correct?
- Is the system reuse logic respected?
- Does it work responsively?
- Does it preserve accessibility basics?
- Does it avoid obvious performance damage?
- Are open issues or deviations clearly reported?
- Could someone else safely maintain this after handoff?

If not, it is not done.

---

## 10. Release gate

Work that is intended for release is only done when:
- it passed the normal implementation checklist,
- preview QA is complete,
- required env/config is ready,
- production-critical paths are verified,
- and deployment readiness is confirmed.

“Ready for code review” and “ready for release” are not always the same thing.
Treat release as a stricter bar.

---

## 11. Things that do not count as done

The following do not count as done:
- TODO comments for core unfinished behavior
- “works on desktop, mobile later”
- “validation still needs to be wired”
- “we’ll clean up the code after approval”
- “the component is duplicated for now”
- “I think the form works”
- “preview not checked yet”
- “the doc is outdated but close enough”

That is not done.
That is deferred debt wearing a fake mustache.

---

## 12. Definition of Done vs acceptance criteria

Acceptance criteria are specific to a given feature, page, or task and define what that item must accomplish. [web:268][web:277]  
The Definition of Done applies to all work and defines the shared baseline for quality, completion, and review readiness. [web:263][web:265][web:267]

Use both:
- Acceptance criteria = item-specific success
- Definition of Done = universal quality gate

---

## 13. Enforcement rules

This Definition of Done should be:
- visible,
- referenced during implementation,
- checked during review,
- and used consistently across all work items.

Definition of Done best-practice guidance recommends keeping it visible and shared so the team can refer to it regularly rather than treating it like decorative process wallpaper. [web:263]

To enforce it:
- include it in task templates,
- include it in review checklists,
- include it in AI-agent reporting expectations,
- and reference it in launch readiness.

---

## 14. Maintenance rule

Update this document whenever:
- quality expectations change,
- the stack or workflow changes materially,
- review or deployment standards change,
- or the team discovers recurring gaps in what “done” currently fails to catch.

A weak Definition of Done causes rework.
A stale Definition of Done causes fake confidence.