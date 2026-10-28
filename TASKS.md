# BrainWhite Platform - Implementation Backlog (TASKS.md)

> Governed by `BrainWhite Engineering Bible v1` and `PRD.md`.
> **Strategy**: Single product monorepo (`brainwhite-platform`) with vertical slices across 4 engineering tracks (P1, P2, P3, P4).

---

## Current Status Overview
- **Marketing Site & Demo Form**: 100% Complete & live (`apps/web`).
- **Portal Shell & Application Routes**: 100% Complete (35 routes compiling and prerendering cleanly).
- **Backend & Core Engine**: 100% Complete (FastAPI, SQLAlchemy 2.0 async, Tree-sitter AST, pgvector hybrid retriever, Personalization, Quiz & Readiness ledger).
- **Automated Verification**: 18/18 tests passing (100%), including full 13-step End-to-End Golden Demo.

---

## Wave 1: Monorepo Foundation & Multi-Tenant Core (Completed)

- [x] **T01 [P4 - Infra]**: Create `docker-compose.yml` for local development (PostgreSQL + pgvector, Redis, API, Worker, Web).
  - *Acceptance*: Single `docker compose up` starts all services with healthy status checks.
- [x] **T02 [P2 - DB/Core]**: Setup SQLAlchemy 2.0 Base, engine configuration, and Alembic migrations environment.
  - *Acceptance*: `alembic upgrade head` runs cleanly against PostgreSQL.
- [x] **T03 [P2 - DB/Models]**: Define initial models (`User`, `Organization`, `OrganizationMember`, `Project`, `ProjectMember`, `Repository`, `Job`).
  - *Acceptance*: Foreign keys and mandatory `organization_id` tenant isolation enforced on all customer-code entities.
- [x] **T04 [P2 - Auth]**: Implement session/token authentication and routes (`/api/v1/auth/login`, `/auth/logout`, `/me`).
  - *Acceptance*: Protected endpoints reject anonymous requests with HTTP 401.
- [x] **T05 [P2 - Tenancy]**: Implement tenant context middleware & dependency injection.
  - *Acceptance*: Query cannot access records belonging to another `organization_id`.
- [x] **T06 [P2 - Org/Project]**: Implement Organization and Project CRUD REST endpoints.
  - *Acceptance*: Automated test validates creating org and project with owner membership.
- [x] **T07 [P4 - Observability]**: Configure structured JSON logging with correlation IDs / trace IDs.
  - *Acceptance*: Trace ID is propagated across incoming HTTP requests and background jobs.
- [x] **T08 [P3 - AI Provider]**: Create AI provider abstraction layer (`LLMProvider`, `EmbeddingProvider`) with `FakeAIProvider`.
  - *Acceptance*: Unit tests run offline without external API keys.

---

## Wave 2: Ingestion Pipeline & GitHub Integration (Completed)

- [x] **T09 [P2 - Jobs]**: Implement Job queue adapter (Redis + Celery) and `jobs` table state transitions.
  - *Acceptance*: Background jobs reliably transition from `QUEUED` -> `RUNNING` -> `COMPLETED`/`FAILED`.
- [x] **T10 [P2 - GitHub App]**: GitHub App client adapter with JWT-based temporary installation token manager.
  - *Acceptance*: Mocked GitHub API tests succeed for repo metadata and file tree fetching.
- [x] **T11 [P2 - Repositories]**: Repository connection API (`POST /projects/{id}/repositories`) and sync trigger.
  - *Acceptance*: Admin connects repository and triggers ingestion job.
- [x] **T12 [P1 - Frontend]**: Connect Admin Repositories UI (`admin/repositories/page.tsx`) to backend API.
  - *Acceptance*: Admin can initiate GitHub App install and view connected repos.
- [x] **T13 [P3 - Ingestion]**: Source file discovery and filtering engine (ignore binaries, vendor files, lockfiles, secrets).
  - *Acceptance*: Fixture repository produces deterministic, filtered source file list.
- [x] **T14 [P3 - Parsing]**: Tree-sitter AST parser integration for TypeScript/JavaScript and Python (`parsers/`).
  - *Acceptance*: Fixture extracts exact files, functions, classes, interfaces, and methods into `code_symbols`.
- [x] **T15 [P3 - Graph]**: Code relationship normalizer (`code_relationships`).
  - *Acceptance*: Fixture builds verified `calls`, `imports`, and `inherits` dependency edges.
- [x] **T16 [P2 - Ingestion API]**: Sync status polling endpoint (`GET /api/v1/jobs/{id}`).
  - *Acceptance*: Returns current stage (`CONNECT` -> `DISCOVERING` -> ... -> `READY`) and percentage.
- [x] **T17 [P1 - Ingestion UI]**: Live ingestion progress bar & stage indicator component on Admin UI.
  - *Acceptance*: Admin sees real-time ingestion stage transitions.

---

## Wave 3: Grounded Knowledge & Citation-Validated RAG (Completed)

- [x] **T18 [P3 - Knowledge]**: Code chunking and pgvector embedding storage pipeline.
  - *Acceptance*: Chunks indexed in PostgreSQL with cosine vector similarity search.
- [x] **T19 [P3 - RAG]**: Hybrid retriever (vector + symbol lookup) + Citation Validator.
  - *Acceptance*: Q&A returns grounded answer with validated file path, symbol, and line numbers; rejects ungrounded hallucinations.
- [x] **T20 [P2 - Chat API]**: Conversation and message persistence endpoints (`/api/v1/conversations`).
  - *Acceptance*: Conversations persist across reloads with citations intact.
- [x] **T21 [P1 - Chat UI]**: Implement interactive "Ask BrainWhite" Q&A UI (`developer/qa/page.tsx`).
  - *Acceptance*: Developer can chat with codebase, view inline citations, and inspect source files.

---

## Wave 4: Personalization, Learning Engine & Readiness (Completed)

- [x] **T22 [P3 - Skills]**: Technology and architectural skill extraction from codebase metadata.
  - *Acceptance*: Project required skills table populated automatically from repo analysis.
- [x] **T23 [P2 - Developer API]**: Developer profile & skills API (`/projects/{id}/developers/{id}/profile`).
  - *Acceptance*: Profile and self-reported/evaluated skills stored in database.
- [x] **T24 [P1 - Developer UI]**: Developer onboarding profile wizard (`developer/profile/page.tsx`).
  - *Acceptance*: Developer completes experience levels and background.
- [x] **T25 [P3 - Learning]**: Personalized learning path generator.
  - *Acceptance*: Two different developer profiles produce distinct, customized learning paths.
- [x] **T26 [P1 - Learning UI]**: Personalized learning path viewer (`developer/learning-path/page.tsx`).
  - *Acceptance*: Developer views customized modules, code walkthroughs, and mini-tasks.
- [x] **T27 [P3 - Assessment]**: Repo-grounded assessment questions and task verification engine.
  - *Acceptance*: Quiz and code tasks generated directly from real project context.
- [x] **T28 [P3 - Readiness]**: Evidence ledger and readiness calculation algorithm (0-100%).
  - *Acceptance*: Readiness score dynamically updates based on completed evidence points.
- [x] **T29 [P1 - Manager UI]**: Manager readiness & skill gap dashboard (`manager/overview/page.tsx`).
  - *Acceptance*: Manager views team readiness breakdown, risk areas, and onboarding velocity.
- [x] **T30 [P4 - Golden E2E]**: Automated Golden Demo verification suite (Bible Chapter 31).
  - *Acceptance*: Full 13-step golden demo passes cleanly from org creation to evidence-backed readiness.
