# ADR-001: Central authorization module (permissions map + scopes)

Status: Accepted
Date: 2026-10-21
Deciders: principal backend engineer

## Context
Authorization is currently scattered: `get_tenant_context` returns a coarse role string; `require_role` does name-based role checks; `provision-developer` has a no-op authorization bypass (`auth.py:111-114`). The Bible and user require ONE central authz module (`backend/core/authz`) evaluating a `resource.action` permissions map + scopes (`org | team | project`), with frontend getting permissions from `GET /me` and never deciding security.

## Decision
Implement `backend/core/authz/`:
- `permissions.py`: `PERMISSIONS_MAP` dict `{role: {scope: [permissions]}}` and `PERMISSION_REQUIRED` for endpoint-level checks.
- `authorization.py`: `check_permission(tenant_ctx, resource, action, scope, project_id=None)` raising `TenantAccessDeniedError` (403) / `ResourceNotFoundError` (404 without leaking existence).
- Cross-tenant and cross-project access returns 403/404 without leaking existence.
- Role hierarchy: owner ⊇ admin ⊇ manager ⊇ developer. A manager cannot create admins or elevate beyond their own permissions (effective permission = intersection of role grants and caller's own grants).
- Scopes: `org` (org-wide: invites, members, repos, GitHub), `team` (manager team scope), `project` (assigned project).

Roles/grants:
- owner: all resources all actions all scopes.
- admin: members, roles, projects, repositories, GitHub connection, audit log, settings (org scope). Not billing/org deletion/transfer (owner only).
- manager: `repository.connect`, project create/read/update/delete, invite/deactivate/reactivate developers, assign repos/projects/tasks, view team progress/readiness/metrics, trigger syncs (org+project scope).
- developer: own profile/path/assessments/readiness; project Q&A within assigned projects (project scope only).

## Consequences
+ Single audit-able authorization surface; easy to test security matrix.
+ `/me` returns permission set; frontend nav derived from it.
- Existing `require_role` callers must be migrated to `check_permission` in Slice 1; old role-based routes kept behind feature flag until replaced.

## Rollback
Revert `backend/core/authz/` to prior `dependencies.py`/`tenancy/context.py` behavior; routes using old `require_role` remain functional.
