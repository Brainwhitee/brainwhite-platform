# ADR-000: Keep existing stack; strangler-style incremental migration

Status: Accepted
Date: 2026-10-21
Deciders: principal backend engineer

## Context
BrainWhite platform already has FastAPI + SQLAlchemy 2.0 + Alembic + a linear migration chain (001→004), a Redis+Celery worker image in docker-compose, and an async DB session layer. The stack matches the Bible v1 target. Gaps are wiring (worker stub, mocked GitHub client, fake LLM provider), missing tables (invitations, audit_events, refresh tokens), missing central authz, and insecure auth (long-lived bearer JWT, no-op role check, plaintext password return).

## Decision
Keep the existing stack. Do not rewrite per module and do not introduce microservices or a separate vector DB (forbidden by Bible / AGENTS.md). Close gaps via additive migrations and per-module replacement behind feature flags (default OFF).

## Baseline
Existing migrations `001_initial_schema`, `002_code_intelligence`, `003_knowledge_and_chat`, `004_learning_and_readiness` are the applied baseline. New additive migration `005` adds invitations, audit_events, refresh_tokens, password_reset_tokens, email_verification_tokens, github_installations, repository_syncs, ai_runs, and reconciles the `module_prerequisites` / `learning_modules.prerequisite_id` drift (present in models/test.db but absent from migrations). Never edit an applied migration.

## Consequences
+ No stack migration risk; existing endpoints keep working until frontend slice ships.
+ pgvector is declared but unused; to be activated in Slice 4 via additive migration changing `document_chunks.embedding` to `vector` and adding HNSW/IVFFlat index.
- Authz and invitations require new table surface area; tested against sqlite in-memory for unit tests and Postgres via docker compose for integration tests.

## Rollback
Migration 005 is purely additive (CREATE TABLE + index + data migration backfill none). Downgrade drops the new tables only; 001–004 untouched. Data loss only if new tables already contain production rows (acceptable: invitations/audit are new, no legacy dependents).
