# BrainWhite Navigation System & Role Architecture Specification

## Overview
This document specifies the navigation hierarchy, interaction behavior, design system tokens, and role-based access control (RBAC) model implemented for BrainWhite.

---

## 1. Two-Level Header System

The header follows the AWS Bedrock design pattern with strict visual and behavioral separation:

```
+---------------------------------------------------------------------------------------------------------+
| Level 1: Dark Utility Bar (#141f2e)                                                                     |
|  [FolderGit2 Kite Health / pallets/flask v]  • Code Graph: Synced    [Docs] [Support] [Theme] [Bell (2)] [User v] |
+---------------------------------------------------------------------------------------------------------+
| Level 2: Main Navigation Bar (#ffffff / #0f172a)                                                        |
|  BW BrainWhite   Overview  Learn v  Code Intelligence v  Readiness v  Work v    [Search Cmd+K] [Primary CTA]   |
+---------------------------------------------------------------------------------------------------------+
| Secondary Sticky Sub-Nav (#f8fafc / #131d2e)                                                            |
|  Overview   Learning DAG   AST Copilot   Readiness Ledger   Assessments   Tasks & PRs                   |
+---------------------------------------------------------------------------------------------------------+
```

### Interaction Specifications
- **Desktop Hover-Intent**:
  - Open delay: `120ms` (prevents accidental popups when mouse traverses the navbar).
  - Close grace period: `150ms` (allows smooth transition between trigger and menu panel).
- **Single-Open Mutual Exclusion**: Opening any menu immediately closes any active sibling menu.
- **Keyboard Accessibility**:
  - `Escape` closes the active dropdown and returns focus to its trigger.
  - `ArrowDown` / `ArrowUp` cycle through items; `Enter` activates the link.
  - ARIA attributes: `role="menu"`, `aria-haspopup="menu"`, `aria-expanded="true|false"`.
- **Mobile Responsive Behavior**:
  - Breakpoint `< 1024px` switches to sliding `Sheet` drawer with accordion disclosure groups.

---

## 2. Role-Based Permissions Matrix

| Route / Capability | Developer (`/dev`) | Team Lead (`/manage`) | Manager (`/manage`) | Admin (`/admin`) |
|---|:---:|:---:|:---:|:---:|
| **Personal Dashboard (`/dev`)** | ✅ Allowed | ✅ Allowed | ✅ Allowed | ✅ Allowed |
| **Active Quest DAG & Copilot** | ✅ Allowed | ✅ Allowed | ✅ Allowed | ✅ Allowed |
| **Claim Daily Sprint Streak** | ✅ Allowed | ✅ Allowed | ✅ Allowed | ✅ Allowed |
| **Developer Roster & Nudges** | ❌ 403 Forbidden | ✅ Allowed | ✅ Allowed | ✅ Allowed |
| **Team Readiness & Blockers** | ❌ 403 Forbidden | ✅ Allowed | ✅ Allowed | ✅ Allowed |
| **Approve Sandbox PRs** | ❌ 403 Forbidden | ✅ Allowed | ✅ Allowed | ✅ Allowed |
| **Repository AST Ingestion** | ❌ 403 Forbidden | ❌ 403 Forbidden | ❌ 403 Forbidden | ✅ Allowed |
| **Developer Provisioning** | ❌ 403 Forbidden | ❌ 403 Forbidden | ❌ 403 Forbidden | ✅ Allowed |
| **Audit Evidence Ledger** | ❌ 403 Forbidden | ❌ 403 Forbidden | ❌ 403 Forbidden | ✅ Allowed |
| **Admin "View As" Emulation** | ❌ Disabled | ❌ Disabled | ❌ Disabled | ✅ Allowed |

---

## 3. Semantic Design Tokens

Extracted from AWS Bedrock (`design-tokens.md`) and declared in `globals.css`:

```css
:root {
  --background: #f8fafc;
  --foreground: #141f2e;
  --surface: #ffffff;
  --surface-subtle: #f1f5f9;
  --border: #eaeded;
  --utility-bg: #141f2e;
  --utility-fg: #eaeded;
  --brand-orange: #ec7211;
  --brand-orange-hover: #eb5f07;
  --brand-blue: #0972d3;
}

.dark, [data-theme="dark"] {
  --background: #0b111a;
  --foreground: #f8fafc;
  --surface: #141f2e;
  --surface-subtle: #0f172a;
  --border: #1e293b;
  --utility-bg: #070b12;
  --utility-fg: #cbd5e1;
  --brand-orange: #ff8f2c;
  --brand-orange-hover: #ffa24b;
  --brand-blue: #38bdf8;
}
```

---

## 4. Test Credentials

- **Developer**: `developer@kite.com` / `Password123!`
- **Manager**: `manager@kite.com` / `Password123!`
- **Admin**: `admin@kite.com` / `Password123!`
