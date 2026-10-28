# Backend Audit — Phase 0

Source: `D:\BrainWhite\brainwhite-platform` (monorepo). Target per Bible v1: FastAPI + SQLAlchemy/Alembic + Postgres+pgvector + Redis+Celery/RQ + S3-compatible storage.

## 1. Stack found vs target

| Layer | Found | Target | Status |
|---|---|---|---|
| Framework | FastAPI 0.115 + Uvicorn | FastAPI | ✅ |
| ORM/migrations | SQLAlchemy 2.0 + Alembic 1.13 (linear chain 001→004) | SQLAlchemy + Alembic | ✅ |
| DB | Default `sqlite+aiosqlite:///./test.db`; compose image `pgvector/pgvector:pg16` present but unused | Postgres + pgvector | ⚠️ pgvector column unused (embedding stored as JSON, cosine in Python) |
| Queue/worker | Redis image + Celery dep declared; `apps/worker/main.py` is a stub returning `{"status":"READY"}` | Redis + Celery/RQ | ❌ worker not wired |
| Auth | PyJWT HS256 + passlib bcrypt; bearer tokens via `Authorization` header; no refresh rotation, no httpOnly cookies | session/refresh, argon2/bcrypt | ⚠️ partial |
| Storage | None (no boto3/minio/S3 env) | S3-compatible | ❌ |
| Frontend | Next.js 16 + TS + Tailwind | ✅ | ✅ |
| Hosting/CI | No k8s/terraform/vercel manifest; one GitHub Actions job: frontend lint + build only | Protected prod pipeline | ❌ |

## 2. Endpoint/table/service inventory

Backend (`apps/api/routers/*.py`, `backend/modules/*`):
- `/auth/register`, `/auth/login`, `/auth/me`, `/auth/provision-developer` — REAL login/register/me; `provision-developer` PARTIAL with a **no-op role check** (`auth.py:111-114`) + plaintext password return (`:167`) + hardcoded `org_name="Kite Health"` (`:66`).
- `/organizations` CRUD + `/members` — REAL (tenant-scoped via `tenant_ctx`; path param ignored at `organizations.py:68,82,103,111`).
- `/projects` CRUD + members — REAL (`projects.py`).
- `/projects/{id}/repositories` + sync + ingest-now — REAL; `ingest-now` runs sync ingestion in-request (`repositories.py:178-181`) violating "long-running work in workers"; `GET /symbols` ignores `project_id` (`repositories.py:210-212`).
- `/jobs/{id}` — REAL status polling.
- `/developers/profile` — REAL get-or-create scoped to org+user.
- `/learning/*` — REAL logic but hardcoded `days_in_sprint=4` (`learning.py:90,719`), fallback score (`:697`), fallback title (`:713`); `developer-progress` roster exposes all members without role check (`:609-725`); `team_lead` role invalid (`learning.py:732`).
- `/assessments` + attempt — REAL generation but questions hardcoded (`generator.py:55-95`); IDOR: `assessment_id` never tenant-filtered (`assessments.py:68-95`, `generator.py:125-129`).
- `/readiness` — REAL score query but hardcoded metrics `76.5`, `3`, `18`, `92.4` (`readiness.py:106-121`); `project_id` not verified against org (`:43-71`).
- `/chat` conversations/messages — REAL persistence; IDOR: conversation read/send filter only `organization_id`, not `user_id` (`chat.py:100-149`); LLM/embedding always fake (`chat/service.py:29-30`, `ai/provider/fake.py:69-74`).

Services:
- `RealGitHubClient` silently falls back to `MockGitHubClient` on ANY exception (`github_client.py:109-112,133-136,165-167,188-190`); `GitHubAppClient` entirely mock (`:201-216`). Mock fixtures include a leaked `SECRET_KEY` (`:40`).
- Worker `ingest_repository_task` is DEAD stub (`worker/main.py:26-36`).

Frontend mocks in runtime paths (from audit):
- `src/app/(app)/admin/repositories/page.tsx:159-205` — fakes full GitHub ingestion pipeline (7 stages, symbols, commits), no network call.
- `src/app/(app)/admin/page.tsx:72-165` — hardcoded repos/users/audit; `GET /api/v1/repositories` result discarded (`:192`); SHA-256 "verify" is a toast (`:243-249`).
- `src/app/(app)/manage/page.tsx:62-132` — roster + PRs hardcoded; real fetch at `:150` ignored.
- `src/app/(app)/developer/learning-path/page.tsx:70-237` — entire curriculum fabricated; completion in localStorage only (`:253-276`).
- `src/app/(app)/developer/qa/page.tsx:60-118` + `dev/page.tsx:246-266` — fabricated AST citations as fallback.
- `src/app/(app)/developer/home/page.tsx:176-344`, `developer/readiness`, `developer/tasks`, `developer/profile`, `developer/project-explorer`, `manager/skill-gaps`, `manager/analytics` — all hardcoded KPIs/ledgers/quests.
- Navigation badges (`components/navigation/utility-bar.tsx`, `secondary-subnav.tsx`, `command-palette.tsx`) hardcoded; `lib/constants.ts` has no data.

Auth/register/login do hit real endpoints; `register` hardcodes role developer (`auth.py:41`).

## 3. Gap table (Bible sec. 5 data model / sec. 6.2 API map / sec. 15 jobs / sec. 16 security)

| Area | Gap | Location |
|---|---|---|
| Central authz permissions map (`resource.action`) + scopes | No central `backend/core/authz` permissions module; role checks scattered, no permission set on `/me` | `authz/dependencies.py`, `tenancy/context.py` |
| Invitation tokens table (hashed, single-use, expiring) | No `invitations` table; no invite/accept/resend/revoke endpoints | missing |
| `audit_events` hash-chained append-only | No audit table, no verify endpoint | missing |
| Session cookies + refresh rotation | Bearer JWT, long-lived (24h), plaintext password returned | `auth.py`, `auth/service.py` |
| Rate limiting on auth/invites/chat | None | `main.py` |
| Email verification / password reset | None | missing |
| Cross-tenant / cross-project 404-without-leak | IDOR in chat, assessments, projects not verified vs org | `chat.py`, `assessments.py`, `readiness.py`, `learning.py` |
| Jobs state machine + idempotency keys | `jobs` table exists but worker stub; no heartbeat/stuck detection/idempotency | `jobs.py`, `worker/main.py` |
| GitHub App flow (signed state, installation token, never persist) | Entirely mocked client; no install-url/callback/webhooks | `github_client.py` |
| pgvector `vector` column | `document_chunks.embedding` is JSON; cosine in Python | `003_knowledge_and_chat.py:31`, `models.py:38`, `retriever.py:133-143` |
| OpenAPI/typed client codegen | No `packages/api-contracts`, no typed client | `packages/*` empty |
| Contract/security/e2e tests | `tests/{contract,e2e,f ixtures,security}` empty | `tests/` |
| CI gates (unit, migration, security, build) | Frontend-only lint+build | `.github/workflows/ci.yml` |
| `module_prerequisites` table + `learning_modules.prerequisite_id` drift | In models/test.db but not in migrations | `004`, `learning/models.py` |

## 4. Current DB schema

Alembic revisions `001`–`004` produce 23 tables; every customer-code table carries `organization_id` except `users`/`organizations` roots (matches AGENTS.md invariant). Tables: `users`, `organizations`, `organization_members`, `projects`, `project_members`, `repositories`, `jobs`, `code_files`, `code_symbols`, `code_relationships`, `document_chunks`, `conversations`, `messages`, `developer_profiles`, `developer_skills`, `learning_paths`, `learning_modules`, `assessments`, `assessment_questions`, `assessment_attempts`, `readiness_scores`, `readiness_evidence`. `test.db` (untracked, sqlite, built from `Base.metadata` not Alembic) contains `module_prerequisites` + `prerequisite_id` drift. **No real production data**; environment is dev-only SQLite.

## 5. Migration strategy

**Keep existing stack (strangler-style, incremental).** The stack (FastAPI/SQLAlchemy/Alembic/Postgres-capable/Redis/Celery) is sound; gaps are wiring, authz, and missing tables — not a broken stack. Do NOT rewrite per module (no microservices, no separate vector DB per Bible). Baseline: existing migrations 001–004 are already applied conceptually; new additive migration `005` adds `invitations`, `audit_events`, `refresh_tokens`, `password_reset_tokens`, `email_verification_tokens`, `github_installations`, `repository_syncs`, `ai_runs`, plus reconciles `module_prerequisites`/`prerequisite_id` drift. Never edit applied migrations; destructive changes need reviewed plan + rollback.

## 6. Ordered slice plan

1. **Slice 1 — Identity, tenancy, RBAC** (auth sessions, argon2, central authz permissions, invitations, audit events, migration 005, login/invite/members UI). Foundation; everything else depends on it.
2. **Slice 2 — GitHub App connection** (install-url/callback/webhooks, installations, repository connection status, sync trigger).
3. **Slice 3 — Jobs + ingestion pipeline** (jobs state machine, Celery wiring, ingestion stages, `GET /jobs/{id}`, filtering/parsing).
4. **Slice 4 — Code intelligence + knowledge store + Q&A** (pgvector vector column, Tree-sitter interface, real LLM/embedding providers, RAG endpoints).
5. **Slice 5 — Developer model, learning, assessments, readiness** (profiles, skill gap, learning DAG, assessments, readiness snapshots, gamification from real events).
6. **Slice 6 — Manager/Admin analytics + audit** (event-based metrics, hash-chained audit verify, view-as role).

Deviation vs Bible: `repository.connect` granted to Owner/Admin/Manager (not Admin-only) — to be recorded as ADR-002.