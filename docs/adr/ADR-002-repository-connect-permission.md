# ADR-002: Repository Connect Permission Granted to Owner, Admin, and Manager

**Status:** Accepted  
**Date:** 2026-10-21  
**Deciders:** Principal Backend Engineer & Platform Lead  

---

## 1. Context & Problem Statement
In the original BrainWhite Engineering Bible v1 (Section 7), repository connection was implied to be an Admin-only concern. However, in the target onboarding workflow:
- Engineering Managers lead project onboarding, create project workspaces, and connect the team's repositories.
- Requiring an Organization Admin or Owner for every repository connection creates an operational bottleneck and prevents engineering teams from self-onboarding.
- Restricting `repository.connect` exclusively to Admin breaks the primary onboarding flow for managerial users.

---

## 2. Decision & Scope of Deviation
We grant the `repository.connect` permission to **Owner**, **Admin**, and **Manager** roles:
1. `ROLE_GRANTS["owner"]` retains full wildcard `repository.*`.
2. `ROLE_GRANTS["admin"]` retains `repository.connect`, `repository.read`, `repository.sync`, `repository.disconnect`.
3. `ROLE_GRANTS["manager"]` is granted `repository.connect`, `repository.read`, `repository.sync`, `repository.disconnect`.
4. `ROLE_GRANTS["developer"]` remains strictly read-only within assigned projects (`developer.read_own`, `learning.read_own`, etc.) and is **explicitly denied** `repository.connect`.
5. The API endpoint `POST /api/v1/projects/{project_id}/repositories` enforces `require_role("manager")` (or `require_permission("repository.connect")`), allowing Owner (rank 3), Admin (rank 2), and Manager (rank 1), while rejecting Developer (rank 0) with HTTP 403 Forbidden.

---

## 3. Security Considerations & Least Privilege
- **Tenant Isolation:** Every repository record strictly carries `organization_id` and `project_id`. A Manager cannot connect a repository to another organization or a project they do not belong to.
- **GitHub App Least Privilege:** BrainWhite requests only `metadata:read` and `contents:read`. No write permissions (`pull_requests:write`, `administration`, `actions`) are ever requested.
- **Revocation Safety:** Any uninstallation or suspension webhook immediately marks the repository as `REVOKED` and halts all subsequent source reads, regardless of who connected it.
- **Audit Logging:** Every repository connection and revocation triggers an immutable, hash-chained `AuditEvent`.

---

## 4. Rollback Plan
If compliance or security policy requires Admin-only connection in specific enterprise environments:
1. Remove `"repository.connect"` from `ROLE_GRANTS["manager"]`.
2. Change the route guard in `apps/api/routers/repositories.py` back to `require_role("admin")`.
3. Update the frontend Manager UI to display an "Admin Approval Required" modal.
