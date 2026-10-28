# ADR-002: repository.connect permission granted to Owner/Admin/Manager

Status: Accepted
Date: 2026-10-21
Deciders: principal backend engineer

## Context
Bible v1 GitHub App posture implies GitHub connection is an Admin-only concern. The product workflow (target workflow item 2) requires a MANAGER (or Admin/Owner) to connect the company's GitHub Organization and select repositories. Denying managers `repository.connect` blocks the primary onboarding path.

## Deviation
Grant `repository.connect` to Owner, Admin, and Manager (not Admin-only as the Bible implies). Documented here as a deliberate deviation from Bible v1 GitHub section; the rest of the GitHub App posture (minimum permissions metadata:read + contents:read, no persist of installation tokens, revocation blocks reads) is unchanged.

## Rationale
Manager is the operational role that creates projects and attaches repositories; requiring Admin for connection creates an artificial bottleneck and contradicts the target workflow.

## Security impact
Connection remains org-scoped and requires organization membership; webhook HMAC verification and revocation blocking are unchanged. No PR/issues/actions/admin permissions requested.

## Rollback
Restrict `repository.connect` to Admin only in `PERMISSIONS_MAP` and update manager UI to route connection through an Admin.
