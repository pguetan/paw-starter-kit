# CLIENT-PROJECT-MODE.md

## Purpose

Use client project mode when building a real client website from the starter.

This mode prioritizes faithful implementation of approved client inputs while protecting the starter system from client-specific drift.

## Required inputs

Do not begin full implementation until these inputs exist or are explicitly waived:

- approved sitemap and page list
- approved copy deck
- approved wireframes or layout references
- approved visual direction
- brand guidance or token direction
- media assets or placeholder policy
- required sections per page
- CTA destinations
- forms and integrations
- SEO requirements
- content editing requirements
- launch/domain constraints

## Allowed changes

- Compose pages from existing sections.
- Replace placeholder content with approved client copy.
- Add client assets in `public/`.
- Configure client site settings and metadata.
- Add client-specific theme overrides through documented theme files.
- Add integrations that are approved for the client project.
- Create local page composition files when needed.

## Escalate before

- changing starter primitives
- adding a new reusable section family
- adding a new dependency
- inventing copy, strategy, layout, or brand direction
- changing token architecture
- adding CMS/auth/database features
- making a client-specific workaround reusable by default

## Local-first rule

If a client project needs something unusual, solve it locally first.

Promote it back into the starter only after review in system development mode.

## Placeholder rule

Placeholder content is allowed only during implementation.

Before client review or launch, every placeholder must be replaced, removed, or explicitly accepted as temporary.

## Completion report

For client project work, report:

- pages or sections implemented
- approved inputs used
- placeholder content remaining
- client-specific overrides added
- integrations touched
- open questions
- validation results

