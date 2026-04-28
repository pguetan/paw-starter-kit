# DEPLOYMENT.md

## 1. Purpose

This document defines the standard deployment workflow for websites built with the Premium Authority Website Implementation System.

Its goals are to:
- make launches predictable,
- reduce deployment mistakes,
- standardize environment handling,
- provide a repeatable release checklist,
- and ensure rollback is always possible.

This document is not just for pushing code live.
It covers pre-launch preparation, preview validation, production release, post-launch checks, and rollback readiness.

---

## 2. Deployment principles

Every deployment must follow these principles:
- clarity over improvisation,
- repeatability over memory,
- preview before production,
- smallest safe release possible,
- rollback readiness before launch,
- and verification after deployment.

Runbook guidance consistently recommends keeping deployment instructions current, accessible, and step-based so releases can be executed reliably. [web:236][web:239]

---

## 3. Environment model

Vercel documents three default environments: Local, Preview, and Production. Preview deployments are used for live testing without affecting the production site, while Production is the live user-facing deployment. [web:240]  
Vercel also documents that Preview environment variables apply to non-production branch deployments, while Production variables apply to the production deployment path. [web:243]

### Standard environments
- Local: development and testing on a local machine
- Preview: branch or PR deployment for QA and approval
- Production: live deployment on the public domain

### Environment rules
- Never treat Preview like Production.
- Never assume a local success guarantees production success.
- Never use production secrets in local or preview unless explicitly required and safe.
- Always verify environment-specific variables before release.

---

## 4. Deployment ownership

### Human responsibilities
- Approve what is being shipped
- Confirm that strategy, copy, and design are final enough for release
- Approve launch timing
- Validate final QA
- Approve production deployment

### AI-agent responsibilities
- Prepare the codebase for deployment
- Ensure required checks pass
- Surface missing env vars or deployment blockers
- Follow the documented release steps
- Report what changed and what requires verification

### Required human review points
- Before production deployment
- After preview QA
- After production verification
- Before rollback or hotfix escalation

The AI agent may support deployment execution, but production release responsibility remains human-owned.

---

## 5. Pre-deployment requirements

Do not deploy unless all of the following are true:

### Product readiness
- Approved copy is in place
- Approved assets are in place
- Required pages are complete
- Required forms and integrations are configured
- SEO metadata is in place
- Analytics is configured if in scope
- Legal pages are present if required

### Technical readiness
- Project installs cleanly
- Build succeeds locally
- Lint passes
- Type checks pass
- Critical routes render correctly
- No known blocker bugs remain unresolved
- Required environment variables are defined

### Quality readiness
- Responsive QA completed
- Accessibility review completed for key paths
- Performance review completed on key templates
- Form testing completed
- Navigation and route checks completed
- Preview deployment reviewed and approved

### Operational readiness
- Domain plan is confirmed
- DNS access is available if needed
- Rollback path is known
- Contact point for launch-day issues is known
- Deployment timing is agreed upon

A deployment checklist should explicitly capture prerequisites, dependencies, and validation steps rather than relying on memory. [web:236][web:241][web:242]

---

## 6. Required checks before any deployment

Before any preview or production deployment, run and verify:

- dependency install succeeds
- lint passes
- type check passes
- build passes
- critical forms are tested
- route navigation works
- images and assets load
- metadata renders correctly
- no obvious console-breaking errors remain
- environment variables required for the target environment are present

Do not deploy on vibes.
Deploy on evidence.

---

## 7. Environment variables

Vercel supports environment-specific variables, including Preview and Production variables that can differ by environment or even by branch for Preview. [web:243]

### Rules
- Keep secrets out of source control.
- Use `.env.local` for local development only.
- Keep Preview and Production variables separated appropriately.
- Document each required variable and its purpose.
- Never hardcode tokens, API keys, or secrets into client code.

### Variable documentation format
For each project, document:
- variable name
- purpose
- whether it is public or server-only
- which environments require it
- whether it is optional or required

Example:

```md
| Variable | Purpose | Public? | Local | Preview | Production | Required |
|---|---|---|---|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | Base site URL | Yes | Yes | Yes | Yes | Yes |
| `FORM_ENDPOINT` | Form submission endpoint | No | Yes | Yes | Yes | Yes |
| `CMS_API_TOKEN` | CMS access token | No | Optional | Yes | Yes | Depends |
```

### Environment variable checks
Before production release:
- confirm all required production variables exist,
- confirm preview variables are not incorrectly being relied on,
- and confirm environment-dependent behavior is tested.

---

## 8. Preview deployment workflow

Preview environments allow testing changes in a live setting without affecting the production site, and Vercel automatically creates Preview deployments from non-production branches or pull requests by default. [web:240]

### Use Preview for
- stakeholder review
- QA
- responsive review
- form testing
- content review
- SEO verification
- branch-specific validation

### Preview deployment steps
1. Push the branch or create the PR.
2. Wait for the Preview deployment to build successfully.
3. Open the live Preview URL.
4. Perform the Preview QA checklist.
5. Log any issues.
6. Fix issues and redeploy Preview as needed.
7. Obtain final approval before production release.

### Preview QA checklist
- homepage renders correctly
- key pages render correctly
- nav and footer links work
- forms work
- images render correctly
- mobile nav works
- metadata looks correct
- CMS/content loads correctly
- no obvious layout breakage exists at key breakpoints

Preview is for finding problems before the live site becomes the problem.

---

## 9. Production deployment workflow

Production is the live user-facing environment and must only be used once Preview QA and approval are complete. [web:240]

### Standard production steps
1. Confirm the correct branch or commit is being released.
2. Confirm production environment variables are set.
3. Confirm preview QA is complete.
4. Confirm no unresolved release-blocker issues remain.
5. Trigger the production deployment.
6. Wait for deployment success.
7. Open the production site immediately.
8. Run the post-deployment verification checklist.
9. Confirm the site is live and functioning.
10. Record the release if a changelog or release note process is used.

### Production deployment rules
- Never deploy directly without preview validation unless it is an emergency hotfix.
- Never deploy unreviewed last-minute changes bundled into the release.
- Never skip post-launch checks because the dashboard says “success.”

---

## 10. Post-deployment verification

After production release, verify:

### Core checks
- homepage loads
- primary pages load
- blog index and sample article load if applicable
- navigation works
- footer links work
- forms submit correctly
- thank-you states or success messages work
- images and media load
- favicon and OG basics are correct
- no obvious console-breaking errors exist

### Business-critical checks
- booking links work
- CTA links work
- phone/email links work
- analytics events are firing if in scope
- CMS/admin login works if in scope
- SEO-critical metadata is present

### Responsive spot checks
- mobile homepage
- mobile navigation
- core CTA section
- key service/sales page
- contact form

A release is not done when deployment succeeds.
A release is done when the live site actually works.

---

## 11. Rollback plan

Runbook best practices emphasize documenting rollback procedures clearly before you need them, not while the site is already on fire. [web:236][web:237]

### Rollback triggers
Rollback should be considered if:
- critical pages fail to render
- forms fail on production
- major layout breakage appears on the live site
- wrong environment configuration breaks the application
- key integrations fail
- severe performance regression appears
- security risk is introduced
- production content is corrupted

### Rollback preparation
Before release, know:
- what deployment version to revert to
- how to trigger rollback on the hosting platform
- which environment variables may need correction
- whether content changes also need reversal
- who approves rollback

### Rollback steps
1. Identify whether the issue is fixable immediately or requires rollback.
2. Notify the responsible human owner.
3. Revert to the last known good deployment.
4. Verify the rollback works.
5. Investigate the failed release separately.
6. Document what failed and why.

### Rollback rule
Rollback is not failure.
Pretending a broken release is “probably fine” is failure.

---

## 12. Hotfix policy

Use a hotfix only when:
- the live issue is important enough to justify bypassing the normal release pace,
- the change is narrow and well understood,
- and post-hotfix verification will still be performed.

### Hotfix rules
- Keep the change as small as possible.
- Do not bundle unrelated improvements.
- Use Preview first unless the issue is truly urgent.
- Verify the exact production issue after deployment.
- Document the root cause after stabilization.

---

## 13. CMS and content launch checks

If the project includes editable content or a CMS, verify:
- admin access works
- correct roles are configured
- preview mode works if applicable
- media uploads work
- publishing flow works
- slugs and redirects work
- content loads correctly on the frontend

Content systems often fail in the annoying “everything looks deployed except the site is empty” category, so do not skip this.

---

## 14. Domain and DNS checks

If connecting a custom domain:
- confirm the domain is added to the hosting platform
- confirm DNS records are correct
- confirm SSL/HTTPS is active
- confirm canonical URLs use the correct live domain
- confirm redirects from old domains or `www` variations work as intended

Do not consider the launch complete just because the preview URL works.

---

## 15. Release notes and change logging

Every meaningful production deployment should document:
- what changed
- what was fixed
- any known limitations
- any migration or environment changes
- any rollback-relevant notes

Focused runbooks and release notes improve clarity during future troubleshooting and incident response. [web:237]

Recommended minimum format:

```md
## Release YYYY-MM-DD
- Updated homepage hero implementation
- Fixed testimonial overflow issue on mobile
- Added blog article template metadata improvements
- Updated contact form integration
- Notes: required new `FORM_ENDPOINT` variable in Preview and Production
```

---

## 16. Deployment anti-patterns

Do not:
- deploy without preview review,
- deploy with missing environment variables,
- deploy unrelated changes together,
- skip form testing,
- assume production equals preview,
- skip rollback planning,
- or trust the hosting dashboard more than the actual live site.

A green deploy badge is not a spiritual guarantee.

---

## 17. Deployment completion checklist

A deployment is complete only when:

- required pre-deployment checks passed,
- correct environment variables were present,
- preview QA was completed,
- production deployment succeeded,
- live post-deployment checks passed,
- critical forms and links were verified,
- rollback readiness existed before deployment,
- and release notes or deployment notes were recorded if applicable.

If the site is live but unverified, the deployment is not complete.

---

## 18. Maintenance rule

Update this document whenever:
- the hosting platform changes,
- the environment model changes,
- deployment commands change,
- rollback steps change,
- the CMS/content deployment path changes,
- or the launch checklist changes materially.

A stale deployment runbook is just sabotage with markdown formatting.