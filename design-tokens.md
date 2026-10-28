# BrainWhite Design Tokens Specification
> Extracted from AWS Bedrock (`https://aws.amazon.com/bedrock/`) reference architecture, adapted for the BrainWhite Engineering Readiness Platform.

---

## 1. Color System (Semantic Tokens)

The design system is built around an enterprise dual-theme model. **Light is default**, with a full high-contrast **Dark** theme toggle.

| Token | Light Value | Dark Value | Purpose |
|---|---|---|---|
| `--color-utility-bg` | `#141f2e` | `#0b111a` | Dark top utility bar (AWS Squid Ink Navy) |
| `--color-utility-text` | `#eaeded` | `#cbd5e1` | Utility bar labels & links |
| `--color-utility-muted`| `#879596` | `#64748b` | Utility bar secondary text & dividers |
| `--color-header-bg` | `#ffffff` | `#0f172a` | Main navigation bar background |
| `--color-header-border`| `#eaeded` | `#1e293b` | Header divider & subtle bottom border |
| `--color-subnav-bg` | `#f8fafc` | `#131d2e` | Sticky secondary product sub-nav |
| `--color-surface` | `#ffffff` | `#1e293b` | Main cards, panels, and dropdown containers |
| `--color-surface-subtle`| `#f8fafc` | `#0f172a` | Alternate row striping, code blocks, stat backgrounds |
| `--color-border` | `#e2e8f0` | `#334155` | 1px clean wireframe borders |
| `--color-border-strong`| `#cbd5e1` | `#475569` | Interactive borders on hover/focus |
| `--color-text-primary` | `#141f2e` | `#f8fafc` | Headings, titles, high-emphasis body |
| `--color-text-secondary`| `#475569` | `#94a3b8` | Subtitles, descriptions, table meta |
| `--color-text-muted` | `#64748b` | `#64748b` | Timestamps, tags, subtle captions |
| `--color-brand-orange` | `#ec7211` | `#ff8f2c` | Primary CTA buttons, action highlights |
| `--color-brand-orange-hover`| `#eb5f07` | `#ffa24b` | Primary CTA hover/active state |
| `--color-brand-blue` | `#0972d3` | `#38bdf8` | Links, focus rings, interactive states |
| `--color-brand-blue-hover` | `#035397` | `#0284c7` | Link hover state |
| `--color-status-success`| `#16a34a` | `#22c55e` | Passing tests, ready status, verified proofs |
| `--color-status-warning`| `#d97706` | `#f59e0b` | Blocked tasks, overdue reviews |
| `--color-status-error` | `#dc2626` | `#ef4444` | DAG cycles, auth errors, failed tests |

---

## 2. Typography

*Note on proprietary font*: AWS uses `AmazonEmber`. In accordance with licensing rules, BrainWhite uses **Inter** (with system fallback `ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif`) for navigation, headings, and body. **Mono fonts** (`ui-monospace, "Cascadia Code", "Fira Code", monospace`) are preserved strictly for small labels, status badges, line numbers, hashes, and AST citations.

### Type Scale

| Level | Size | Weight | Line Height | Tracking | Usage |
|---|---|---|---|---|---|
| `display-lg` | `2.5rem` (40px) | `700` (Bold) | `1.15` | `-0.025em` | Dashboard Hero Headings |
| `display-md` | `2.0rem` (32px) | `600` (SemiBold) | `1.2` | `-0.02em` | Section Titles |
| `title-lg` | `1.5rem` (24px) | `600` (SemiBold) | `1.3` | `-0.015em` | Card & Widget Headers |
| `title-md` | `1.125rem` (18px) | `600` (SemiBold) | `1.4` | `-0.01em` | Dropdown Group Titles, Sub-headings |
| `body-md` | `0.9375rem` (15px) | `400` / `500` | `1.5` | `normal` | Default body copy, table text |
| `body-sm` | `0.8125rem` (13px) | `400` / `500` | `1.45` | `normal` | Secondary descriptions in dropdowns |
| `mono-label` | `0.6875rem` (11px) | `600` (SemiBold) | `1.3` | `0.05em` | AST symbols, role badges, hashes |

---

## 3. Spacing Scale & Layout Grid

- **Container Max-Width**: `80rem` (1280px) on standard dashboard; `90rem` (1440px) on wide displays.
- **Utility Bar Height**: `2.25rem` (36px).
- **Main Header Height**: `4.25rem` (68px).
- **Sticky Sub-Nav Height**: `2.75rem` (44px).
- **Grid Gutter**: `1.5rem` (24px) on desktop (`lg`), `1rem` (16px) on tablet/mobile.
- **Card Padding**: `1.5rem` (24px) internal padding; `1rem` (16px) for compact widgets.

---

## 4. Radii & Shadows

### Border Radius
- `radius-sm`: `4px` (Tags, small pills)
- `radius-md`: `8px` (Buttons, inputs, dropdown items)
- `radius-lg`: `12px` (Cards, modal dialogs, dropdown containers)
- `radius-full`: `9999px` (Avatars, status pills, role pills)

### Shadows
- `shadow-subtle`: `0 1px 3px 0 rgba(0, 0, 0, 0.06), 0 1px 2px 0 rgba(0, 0, 0, 0.04)`
- `shadow-card`: `0 4px 6px -1px rgba(0, 0, 0, 0.07), 0 2px 4px -1px rgba(0, 0, 0, 0.04)`
- `shadow-dropdown`: `0 10px 25px -3px rgba(0, 0, 0, 0.12), 0 4px 10px -2px rgba(0, 0, 0, 0.06)`
- `shadow-modal`: `0 20px 40px -6px rgba(0, 0, 0, 0.25)`

---

## 5. Dropdown & Interaction Behavior Spec

1. **Hover-Intent Trigger (Desktop)**:
   - Delay before opening: `120ms` to prevent accidental triggers when crossing the bar.
   - Delay before closing: `150ms` grace period when cursor leaves the menu trigger or panel.
2. **Click/Touch (Mobile & Tablet)**:
   - Tap opens; subsequent tap closes or toggles.
   - Mobile uses a sliding drawer (`Sheet`) with accordion disclosure panels.
3. **Single-Open Mutual Exclusion**:
   - Opening any menu immediately closes any active sibling menu.
4. **Keyboard Accessibility**:
   - `Escape` key closes the active dropdown and restores focus to its trigger.
   - `Tab` navigates through items; `ArrowDown` / `ArrowUp` move between sibling items.
   - Triggers have `aria-haspopup="menu"`, `aria-expanded="true/false"`, and `role="menu"`.
5. **Animation & Easing**:
   - Duration: `150ms`.
   - Easing: `cubic-bezier(0.16, 1, 0.3, 1)` (smooth ease-out deceleration).
   - Motion reduced: Respects `prefers-reduced-motion` with instant opacity toggle.

---

## 6. Breakpoints

- `sm`: `640px` (Compact mobile / small tablet)
- `md`: `768px` (Tablet portrait)
- `lg`: `1024px` (Desktop breakpoint: switches from hamburger Sheet to horizontal mega-menu)
- `xl`: `1280px` (Standard desktop workspace)
- `2xl`: `1536px` (Wide desktop monitors)
