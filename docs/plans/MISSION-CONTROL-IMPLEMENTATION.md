# Mission Control Implementation Plan

## Goal

Create a separate private `paw-mission-control` repo for internal operating knowledge, project tracking, agent workflows, registry governance, and client delivery management.

Keep `paw-starter-kit` focused on reusable runtime foundation and client-safe starter documentation.

## Why This Split Exists

The starter kit and mission control serve different jobs.

`paw-starter-kit` should be clean, reusable, and template-focused.

`paw-mission-control` should be private, strategic, and operational.

Separating them protects internal IP, avoids shipping internal docs to client repos, and keeps the starter from becoming a mixed-purpose workspace.

## Target Repo Roles

### `paw-mission-control`

Private internal command center.

Contains:

- operating model
- internal project workflow
- client trackers
- reusable pattern promotion decisions
- registry workflow
- starter governance
- internal agent guidance
- private prompts and skill plans
- delivery checklists
- lessons learned

Does not contain:

- client production code
- deployable client websites
- public client assets
- runtime starter implementation

### `paw-starter-kit`

Reusable runtime foundation.

Contains:

- app scaffold
- tokens
- primitives
- starter sections
- sanitized docs
- CI and validation scripts
- SEO baseline
- brand-neutral demo/example content

Does not contain long-term:

- internal roadmaps
- private operating strategy
- client trackers
- registry governance history
- internal prompt/skill strategy

### Client Repos

One repo per client website.

Contains:

- selected runtime files
- approved client copy
- approved client assets
- client theme
- selected installed patterns
- sanitized client docs
- deployment configuration

Does not contain:

- mission-control docs
- internal starter roadmap
- registry strategy
- private agent prompts

## Phase 1: Create Mission Control Repo

Objective: establish a private internal repo before moving or duplicating major docs.

Tasks:

1. Create private GitHub repo:
   - `git@github.com:pguetan/paw-mission-control.git`
2. Scaffold minimal structure:

```txt
paw-mission-control/
├─ README.md
├─ docs/
│  ├─ OPERATING-MODEL.md
│  ├─ CLIENT-PROJECT-WORKFLOW.md
│  ├─ STARTER-KIT-GOVERNANCE.md
│  ├─ REGISTRY-WORKFLOW.md
│  ├─ PROMOTION-CHECKLIST.md
│  ├─ CLIENT-INTAKE-TEMPLATE.md
│  ├─ AGENT-WORKFLOW.md
│  └─ PROJECT-TRACKER.md
├─ clients/
│  └─ .gitkeep
├─ skills/
│  └─ .gitkeep
└─ decisions/
   └─ .gitkeep
```

3. Add initial README explaining repo purpose and privacy boundary.
4. Add `.gitignore`.
5. Commit and push.

Acceptance criteria:

- Mission control repo exists and is private.
- Structure is created.
- README clearly says this repo is internal only.
- No client secrets or private client assets are committed.

## Phase 2: Copy Internal Planning Docs

Objective: preserve internal planning knowledge in mission control without breaking the starter yet.

Copy from `paw-starter-kit` into mission control:

- `docs/plans/`
- `docs/PRODUCT.md`
- `docs/PROJECT-BRIEF.md`
- `docs/CLIENT-INTAKE-BRIEF.md`
- `docs/NEW-CLIENT-PROJECT-GUIDE.md`
- `docs/SYSTEM-DEVELOPMENT-MODE.md`
- `docs/CLIENT-PROJECT-MODE.md`

Do not delete from starter in this phase.

Tasks:

1. Copy files into mission control.
2. Rename files if needed to make internal purpose clear.
3. Add a source note at the top of copied docs:
   - "Copied from `paw-starter-kit` on YYYY-MM-DD for internal mission-control use."
4. Commit and push mission control changes.

Acceptance criteria:

- Mission control has internal copies of planning docs.
- Starter remains unchanged.
- No runtime files are copied unnecessarily.

## Phase 3: Define Client Tracker System

Objective: make mission control useful for managing multiple client repos.

Tasks:

1. Create `clients/_TEMPLATE.md`.
2. Define fields:
   - client name
   - repo URL
   - status
   - preview URL
   - production URL
   - approved input links
   - current tasks
   - launch checklist
   - open questions
   - reusable pattern candidates
   - promotion decisions
3. Create `docs/PROJECT-TRACKER.md` explaining how client tracker files are used.

Suggested client file:

```md
# Client Name

Repo:
Preview:
Production:
Status:

## Approved Inputs

- Sitemap:
- Copy:
- Wireframes:
- Brand direction:
- Assets:

## Current Work

- [ ] 

## Open Questions

- 

## Promotion Candidates

- 

## Launch Checklist

- [ ] `pnpm check`
- [ ] preview reviewed
- [ ] forms tested
- [ ] metadata checked
- [ ] production approved
```

Acceptance criteria:

- New client projects can be tracked from mission control.
- Tracker separates client delivery status from starter system work.
- Promotion candidates are visible instead of hidden in client code.

## Phase 4: Define Agent Workflow Across Repos

Objective: make it clear how agents should operate when mission control, starter, registry, and client repos all exist.

Tasks:

1. Create `docs/AGENT-WORKFLOW.md`.
2. Define repo access rules:
   - mission control is read/write only for internal planning tasks
   - client repo is the write target for client implementation
   - starter repo changes require system-development approval
   - registry changes require promotion approval
3. Define standard agent prompt pattern:

```txt
Read mission-control client tracker and workflow docs.
Work only in the client repo unless explicitly told otherwise.
If you discover a reusable starter improvement, document it as a promotion candidate.
Do not copy mission-control docs into the client repo.
```

4. Define handoff rules for client-safe `AGENTS.md`.

Acceptance criteria:

- Agent workflow prevents accidental edits in the wrong repo.
- Client repos get sanitized guidance only.
- Internal docs remain internal.

## Phase 5: Sanitize Starter Kit Docs

Objective: gradually remove internal-only material from `paw-starter-kit` after mission control has copies.

Do this only after Phase 2 is complete.

Move or remove from starter:

- deep planning docs
- internal roadmap docs
- registry implementation strategy if not needed by starter users
- private agent strategy
- client tracking docs

Keep in starter:

- `README.md`
- `AGENTS.md` for starter work
- `docs/README.md`
- `docs/FILE-MAP.md`
- `docs/EDITING-GUIDE.md`
- `docs/DESIGN-SYSTEM-SPEC.md`
- `docs/COMPONENT-INVENTORY.md`
- `docs/SECTION-INVENTORY.md`
- `docs/VARIANT-PRESET-GUIDE.md`
- `docs/THEME-OVERRIDE-GUIDE.md`
- `docs/QA-CHECKLIST.md`
- `docs/DEPLOYMENT.md`
- `docs/DEFINITION-OF-DONE.md`

Tasks:

1. Decide which docs are internal-only.
2. Confirm mission-control copies exist.
3. Replace removed starter docs with short links or summaries only if helpful.
4. Update starter `docs/README.md`.
5. Run `pnpm check`.
6. Commit and push starter cleanup.

Acceptance criteria:

- Starter remains useful as a code foundation.
- Starter no longer exposes unnecessary internal operating strategy.
- Client-safe docs are still enough for template users.
- `pnpm check` passes.

## Phase 6: Client Repo Export Strategy

Objective: define what client repos receive when created from the starter.

Tasks:

1. Create mission-control doc: `docs/CLIENT-REPO-EXPORT-POLICY.md`.
2. Define file groups:
   - runtime required
   - selected patterns
   - client-safe docs
   - internal-only exclusions
3. Define sanitized client doc pack:

```txt
AGENTS.md
README.md
docs/CLIENT-BRIEF.md
docs/CONTENT-MAP.md
docs/EDITING-GUIDE.md
docs/QA-CHECKLIST.md
docs/DEPLOYMENT.md
docs/COMPONENT-USAGE.md
```

4. Decide whether client projects are created manually first or through a future export script.

Acceptance criteria:

- Clear list exists for what enters a client repo.
- Clear list exists for what never enters a client repo.
- Export script is deferred until manual creation repeats enough to justify it.

## Phase 7: Registry Governance

Objective: keep the future registry tied to mission control decisions.

Tasks:

1. Move registry planning into mission control.
2. Create `docs/REGISTRY-WORKFLOW.md`.
3. Create `docs/PROMOTION-CHECKLIST.md`.
4. Track promotion candidates from client tracker files.
5. Create a registry candidate list.

Acceptance criteria:

- Registry does not become a dumping ground.
- Every registry addition has a promotion reason.
- Client-specific work is reviewed before promotion.

## Immediate Next Actions

Do next:

1. Create private `paw-mission-control` repo.
2. Add minimal mission-control structure.
3. Copy this plan and the starter/registry/client direction plan into mission control.
4. Add the first client tracker template.
5. Do not sanitize `paw-starter-kit` until mission-control copies exist.

Do not do yet:

- delete internal docs from starter
- create `paw-template-registry`
- create client export CLI
- move client work into mission control

## Risks and Mitigations

Risk: mission control becomes a cluttered junk drawer.

Mitigation: keep top-level folders limited and use client tracker templates.

Risk: agents edit the wrong repo.

Mitigation: require each task to state the write target repo.

Risk: internal docs leak into client repos.

Mitigation: maintain a client repo export policy and sanitized doc pack.

Risk: starter cleanup deletes useful context too early.

Mitigation: copy to mission control first, then sanitize starter in a separate change.

## Definition of Done

This plan is complete when:

- `paw-mission-control` exists as a private repo
- internal planning docs are copied there
- client tracker template exists
- agent cross-repo workflow is documented
- starter docs are sanitized after mission-control copies exist
- client repo export policy is documented
- future registry governance lives in mission control

