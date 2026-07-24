# MIGFORA Skeleton — CLAUDE.md
> Read this before every task. This is the single source of truth for this project.

---

## Project Identity

**Name:** MIGFORA Skeleton  
**Type:** React JS base skeleton — reused across all MIGFORA projects  
**Owner:** MIGFORA — AWS Partner, Cloud & Technology Solutions (GCC/MENA market)  
**Stack:** Vite + React JS + React Router v6 + Axios + Zustand + Recharts  
**Styling:** Plain CSS (no Tailwind, no Bootstrap, no CSS-in-JS)  
**Language:** JavaScript only — never suggest or use TypeScript  

---

## Before Every Task

1. Read this file fully before writing any code
2. Identify which files need to be created or modified
3. Follow the folder structure exactly — do not invent new patterns
4. Check if the task requires a new page, API, store, component, or sidebar item
5. Use the relevant checklist below

---

## Folder Structure

```
src/
├── api/
│   ├── axiosInstance.js
│   ├── auth.js
│   └── profile.js
├── components/
│   ├── common/                  ← shared UI components (see Common Components section)
│   │   ├── FormButton.jsx
│   │   ├── FormField.jsx
│   │   ├── FormAlert.jsx
│   │   ├── Drawer.jsx
│   │   ├── ConfirmDialog.jsx
│   │   ├── Pagination.jsx
│   │   ├── PasswordInput.jsx
│   │   ├── SectionDivider.jsx
│   │   ├── EmptyState.jsx
│   │   ├── StatusBadge.jsx
│   │   ├── PageHeader.jsx
│   │   ├── Spinner.jsx
│   │   ├── ToastRenderer.jsx
│   │   ├── SearchInput.jsx
│   │   ├── Tabs.jsx
│   │   ├── index.js             ← barrel export for all common components
│   │   └── styles/              ← one CSS file per component
│   ├── profile/
│   │   ├── ProfileDrawer.jsx
│   │   ├── SidebarProfile.jsx
│   │   └── styles/
│   ├── styles/                  ← CSS for Navbar, Sidebar, Footer
│   ├── Footer.jsx
│   ├── Navbar.jsx
│   └── Sidebar.jsx
├── config/
│   └── appConfig.js
├── layouts/
│   ├── AppLayout.jsx
│   ├── AuthLayout.jsx
│   └── styles/
├── pages/
│   ├── styles/
│   ├── Login.jsx
│   ├── Register.jsx
│   ├── Dashboard.jsx
│   └── Profile.jsx
├── routes/
│   ├── AppRoutes.jsx
│   └── ProtectedRoute.jsx
└── store/
    ├── authStore.js
    ├── useThemeStore.js
    └── useLanguageStore.js
```

---

## Code Style Rules

### General
- JavaScript only — never write TypeScript, never add type annotations
- Functional components only — no class components
- Named exports for stores and utilities, default exports for components and pages
- Always use `const` — never `var`, avoid `let` unless reassignment is needed
- Arrow functions for callbacks, regular `function` keyword for components

### Import Order
```js
// 1. React
import { useState, useEffect } from 'react'
// 2. React Router
import { useNavigate, useLocation } from 'react-router-dom'
// 3. Third-party libraries
import { BarChart } from 'recharts'
// 4. Internal — stores
import useAuthStore from '../store/authStore'
// 5. Internal — config
import appConfig from '../config/appConfig'
// 6. Internal — API
import { loginApi } from '../api/auth'
// 7. Internal — common components
import { FormButton, FormField } from '../components/common'
// 8. Internal — other components
import Navbar from '../components/Navbar'
// 9. CSS — always last
import './styles/ComponentName.css'
```

### Component Structure
```jsx
// 1. Imports
// 2. Constants / static data (outside component)
// 3. Component function
//    a. Store hooks
//    b. Router hooks
//    c. State declarations
//    d. Derived values
//    e. useEffect hooks
//    f. Handler functions
//    g. Return JSX
// 4. Export
```

---

## CSS Rules

- One `.css` file per `.jsx` file — same name, same folder inside `styles/`
- Never write inline styles — always CSS classes
- Always use CSS variables — never hardcode colors, sizes, or font values
- BEM-like class naming: `.block__element--modifier`
- Every CSS file must have three layers in this order:
  1. Base styles (light mode)
  2. `[data-theme="dark"]` overrides
  3. `.component--rtl` RTL overrides (if needed)

### CSS Logical Properties (MANDATORY)
Always use logical properties — never physical directional properties:

| ❌ Physical (never use) | ✅ Logical (always use) |
|---|---|
| `margin-left` | `margin-inline-start` |
| `margin-right` | `margin-inline-end` |
| `padding-left` | `padding-inline-start` |
| `padding-right` | `padding-inline-end` |
| `left` | `inset-inline-start` |
| `right` | `inset-inline-end` |
| `border-left` | `border-inline-start` |
| `border-right` | `border-inline-end` |
| `border-top` | `border-block-start` |
| `border-bottom` | `border-block-end` |
| `margin-top` | `margin-block-start` |
| `margin-bottom` | `margin-block-end` |

This ensures automatic RTL support without extra CSS.

---

## CSS Variables — Design System

### Light Mode (`:root`)
```css
--color-orange:       #FF9900;
--color-orange-2:     #FFB347;
--color-navy:         #0D1B2A;
--color-navy-2:       #162233;
--color-navy-3:       #1E2D40;
--color-darkest:      #080F18;
--color-white:        #FFFFFF;
--color-off-white:    #F8F9FB;

--bg-app:             #F0F2F5;
--bg-surface:         #FFFFFF;
--bg-surface-2:       #F8F9FB;
--bg-sidebar:         #FFFFFF;
--bg-navbar:          #FFFFFF;

--border-color:       rgba(13, 27, 42, 0.08);
--border-color-2:     rgba(13, 27, 42, 0.14);

--text-primary:       #0D1B2A;
--text-secondary:     rgba(13, 27, 42, 0.5);
--text-muted:         rgba(13, 27, 42, 0.35);

--shadow-navbar:      0 1px 0 rgba(13, 27, 42, 0.08);
--shadow-sidebar:     2px 0 16px rgba(13, 27, 42, 0.06);

--nav-link-hover-bg:  rgba(13, 27, 42, 0.05);
--nav-link-active-bg: rgba(255, 153, 0, 0.1);
--nav-link-active-color: var(--color-orange);

--auth-card-bg:        #FFFFFF;
--auth-card-border:    rgba(13, 27, 42, 0.1);
--auth-input-bg:       #F4F5F7;
--auth-input-bg-focus: #FFFFFF;
--auth-input-border:   rgba(13, 27, 42, 0.12);
--auth-text-primary:   #0D1B2A;
--auth-text-secondary: rgba(13, 27, 42, 0.6);
--auth-text-muted:     rgba(13, 27, 42, 0.4);

--font-heading: 'Syne', Arial Black, sans-serif;
--font-body:    'DM Sans', Calibri, sans-serif;

--navbar-height:  56px;
--sidebar-width:  248px;
```

### Dark Mode (`[data-theme="dark"]`)
```css
--bg-app:             #0D1B2A;
--bg-surface:         #162233;
--bg-surface-2:       #1E2D40;
--bg-sidebar:         #111C29;
--bg-navbar:          #111C29;

--border-color:       rgba(255, 255, 255, 0.07);
--border-color-2:     rgba(255, 255, 255, 0.1);

--text-primary:       #F0F4F8;
--text-secondary:     rgba(255, 153, 0, 0.75);   ← orange in dark mode
--text-muted:         rgba(255, 153, 0, 0.5);    ← orange in dark mode

--auth-card-bg:        #162233;
--auth-card-border:    rgba(255, 255, 255, 0.08);
--auth-input-bg:       rgba(255, 255, 255, 0.06);
--auth-input-bg-focus: rgba(255, 255, 255, 0.09);
--auth-input-border:   rgba(255, 255, 255, 0.1);
--auth-text-primary:   #F0F4F8;
--auth-text-secondary: rgba(255, 255, 255, 0.6);
--auth-text-muted:     rgba(255, 255, 255, 0.35);
```

---

## Common Components

All common components live in `src/components/common/` and are exported from `index.js`.

### Import pattern
```js
import { FormButton, FormField, FormAlert, Drawer, PageHeader } from '../components/common'
```

### Component Reference

#### `FormButton` — MIGFORA standard button
```jsx
<FormButton
  variant="primary"      // 'primary' | 'secondary' | 'danger' | 'ghost' | 'outline'
  type="submit"          // 'submit' | 'button' | 'reset'
  loading={false}        // shows loadingText when true, disables button
  loadingText="Saving…"
  disabled={false}
  fullWidth={false}
  onClick={handler}
>
  Button Label
</FormButton>
```

#### Button Variant Usage Guide
| Variant | When to use | Example locations |
|---|---|---|
| `primary` | Single most important CTA | Form submit, Add Target, Create Scan |
| `secondary` | Significant but not main CTA | Export, Duplicate, Run Again |
| `outline` | Standalone page-level actions | Back, Filter, Import, Refresh |
| `ghost` | Low-priority in tight spaces | Cancel in drawer footer, Clear, Skip |
| `danger` | Destructive actions only — always with ConfirmDialog | Delete, Remove, Revoke |

**Rules:**
- Never put two `primary` buttons next to each other
- Never use `danger` without a `ConfirmDialog`
- Never use `ghost` as the only button on a page

**By location:**
| Location | Buttons |
|---|---|
| Page header | `primary` + `outline` |
| Drawer footer | `primary` + `ghost` |
| Table row actions | `outline` + `danger` |
| Form submit | `primary` + `ghost` (cancel) |
| Confirmation dialog | `danger` + `ghost` |
| Navbar | `outline` (logout) |
| Empty state CTA | `primary` |

---

#### `FormField` — label + input unit
```jsx
<FormField
  label="Email"
  name="email"
  type="email"           // default: 'text'
  value={val}
  onChange={handler}
  placeholder="you@example.com"
  error="Required"       // shows red border + message below
  required={true}        // shows orange asterisk
  disabled={false}
  minLength={8}
/>
```

#### `FormAlert` — form-level banner
```jsx
<FormAlert type="error"   message={error}   />
<FormAlert type="success" message={success} />
// Renders nothing if message is empty
```

#### `Drawer` — slide-in panel shell
```jsx
<Drawer
  open={isOpen}
  title="Edit Profile"
  onClose={onClose}
  size="sm"              // 'sm' (360px) | 'md' (440px) | 'lg' (600px)
  error={errorString}    // renders error banner in header area
  footer={
    <>
      <FormButton variant="ghost" onClick={onClose} fullWidth>Cancel</FormButton>
      <FormButton variant="primary" onClick={handleSave} fullWidth>Save</FormButton>
    </>
  }
>
  {/* form fields go here */}
</Drawer>
```
- Drawer owns: portal, overlay, scroll lock, Escape key, transitions
- Consumer owns: form, fields, footer buttons, submit logic
- No `<form>` tag inside Drawer — consumer wraps their own

#### `ConfirmDialog` — destructive action confirmation
```jsx
<ConfirmDialog
  isOpen={open}
  title="Delete target"
  message="This action cannot be undone."
  confirmLabel="Delete"
  isDanger={true}
  onConfirm={handleDelete}
  onCancel={() => setOpen(false)}
/>
```

#### `PageHeader` — page title + action button
```jsx
<PageHeader
  title="Targets"
  subtitle="Manage your scan targets."
  action={<FormButton variant="primary">+ Add Target</FormButton>}
/>
```
- Reads `lang` from `useLanguageStore` internally — handles RTL automatically
- No need to pass `lang` or `isRTL` as props

#### `Pagination`
```jsx
<Pagination
  page={page}              // 0-indexed
  totalPages={8}
  totalElements={76}
  itemLabel="scans"
  onPageChange={setPage}
/>
```

#### `StatusBadge`
```jsx
<StatusBadge status="DONE" />
<StatusBadge status="FAILED" label="Custom Label" />
```
Built-in statuses: `DONE` `ACTIVE` `COMPLETED` `PASSED` → success green  
`SCHEDULED` `PENDING` `RUNNING` → warning orange  
`FAILED` `MISSED` `CRITICAL` `HIGH` → danger red  
`MEDIUM` → info blue | `DRAFT` `LOW` `UNKNOWN` → neutral  
`BASIC` `GROWTH` `ENTERPRISE` → package variants  

#### `EmptyState`
```jsx
<EmptyState
  title="No targets yet"
  subtitle="Add your first target to start scanning."
  action={<FormButton variant="primary">+ Add Target</FormButton>}
  icon={<svg>...</svg>}   // optional custom icon
/>
```

#### `Spinner`
```jsx
<Spinner size="md" color="orange" label="Loading…" />
// size: 'sm' | 'md' | 'lg'
// color: 'orange' | 'white' | 'navy'
```

#### `SearchInput`
```jsx
<SearchInput
  value={search}
  onChange={(e) => setSearch(e.target.value)}
  onClear={() => setSearch('')}
  placeholder="Search targets…"
/>
```

#### `Tabs`
```jsx
const TABS = [
  { key: 'overview', label: 'Overview' },
  { key: 'findings', label: 'Findings', count: 12 },
]
<Tabs tabs={TABS} activeTab={activeTab} onChange={setActiveTab} />
{activeTab === 'overview' && <Overview />}
```

#### `SectionDivider`
```jsx
<SectionDivider label="Security Settings" />
<SectionDivider />  // line only, no label
```

#### `PasswordInput`
```jsx
<PasswordInput
  value={pass}
  onChange={(e) => setPass(e.target.value)}
  placeholder="Enter password"
  className="auth-field__input"
/>
```

#### `ToastRenderer` — mount once in `AppLayout`
```jsx
// In AppLayout.jsx:
import ToastRenderer from '../components/common/ToastRenderer'
<ToastRenderer />

// Usage anywhere:
import useToastStore from '../store/useToastStore'
const { addToast } = useToastStore()
addToast('Saved successfully.', 'success')  // 'success' | 'error' | 'info'
```

---

## Stores

### `authStore.js`
```js
const { token, user, setAuth, clearAuth } = useAuthStore()
setAuth(token, user)   // saves to Zustand + localStorage
clearAuth()            // removes from Zustand + localStorage
```

### `useThemeStore.js`
```js
const { theme, toggleTheme, setTheme } = useThemeStore()
// theme: 'light' | 'dark'
// Applies data-theme="dark" to <html> automatically
// Persists to localStorage key: migfora_theme
// Reads system preference on first visit
```

### `useLanguageStore.js`
```js
const { lang, toggleLang, setLang } = useLanguageStore()
// lang: 'en' | 'ar'
// Applies dir="rtl" and lang="ar" to <html> automatically
// Persists to localStorage key: migfora_lang
```

### `useToastStore.js`
```js
const { addToast, removeToast } = useToastStore()
addToast('Message', 'success', 3500)  // message, type, duration(ms)
```

---

## Theme System

- Dark/light mode via `data-theme` attribute on `<html>`
- Toggle with `useThemeStore().toggleTheme()`
- Every CSS file must support both modes:
```css
/* Light mode (default) */
.component { color: var(--text-primary); }

/* Dark mode */
[data-theme="dark"] .component { /* overrides if needed */ }
```
- Use semantic variables (`--text-primary`, `--bg-surface`) — never hardcode colors
- Dark mode text identity: `--text-secondary` and `--text-muted` are orange-tinted in dark mode

---

## RTL / Language System

### Rules
1. **CSS Logical Properties** handle spacing/positioning automatically — no extra CSS needed
2. **Flex order/direction changes** — handle in JSX using `lang === 'ar'` check, not CSS selectors
3. **Never use `html[dir="rtl"]` CSS selectors** — they are unreliable in this setup
4. **Never use `[dir="rtl"]` CSS selectors** — same issue

### Pattern for components needing flex-direction swap
```jsx
import useLanguageStore from '../../store/useLanguageStore'

function MyComponent() {
  const { lang } = useLanguageStore()
  const isRTL = lang === 'ar'

  return (
    <div style={{ flexDirection: isRTL ? 'row-reverse' : 'row' }}>
      {isRTL ? (
        <> <ActionButton /> <Title /> </>
      ) : (
        <> <Title /> <ActionButton /> </>
      )}
    </div>
  )
}
```

### Inline styles exception
Inline styles are allowed ONLY for dynamic RTL values driven by store state.  
Static design values must always be in CSS files.

### Arrow/directional indicators
```jsx
const { lang } = useLanguageStore()
<span>{lang === 'ar' ? '→' : '←'} Back</span>
```

---

## Layout System

### AppLayout behavior
- Sidebar default: **open** (user closes manually)
- Sidebar state saved in localStorage key: `migfora_sidebar_open`
- Open: `248px` wide with icon + label
- Closed: `52px` icon rail (icons only, no labels)
- Main content uses `margin-inline-start` — shifts with sidebar in both LTR and RTL
- No SubNavbar — removed. Toggle lives in Navbar.

### Page layouts
| Page type | Layout | Auth required |
|---|---|---|
| Login | AuthLayout | No |
| Register | AuthLayout | No |
| All other pages | AppLayout | Yes (ProtectedRoute) |

### Content spacing
Every page component should start with:
```css
.page-name {
  padding: 32px;
}
```

### Z-index stack
| Layer | z-index |
|---|---|
| Navbar | 1100 |
| Sidebar | 1000 |
| Drawer overlay | 1300 |
| Drawer panel | 1301 |
| ConfirmDialog overlay | 200 |
| ConfirmDialog | 201 |
| Toast | 9999 |

---

## Task Checklists

### Adding a New Page
```
□ Create src/pages/NewPage.jsx
□ Create src/pages/styles/NewPage.css
□ Add route in src/routes/AppRoutes.jsx (wrap with ProtectedRoute + AppLayout)
□ Add to NAV_ITEMS in src/components/Sidebar.jsx
□ Create src/api/newPage.js (with MOCK_ENABLED pattern)
□ If page has sub-components → create src/components/newPage/ folder
□ Each sub-component gets its own .jsx + styles/ folder
□ Use PageHeader for the page title + action button
□ Use EmptyState for zero-data states
□ Use ToastRenderer (already in AppLayout) for success/error feedback
```

### Adding a New API Domain
```
□ Create src/api/domainName.js
□ Import axiosInstance from './axiosInstance'
□ Add MOCK_ENABLED = true flag at top
□ Write mock functions with 800ms setTimeout delay
□ Export real functions that check MOCK_ENABLED before calling axiosInstance
□ Use appConfig.auth.messageKey for error messages
```

### Adding a New Store
```
□ Create src/store/useStoreName.js
□ Use zustand create()
□ Define initial state
□ Define set actions
□ Export as default useStoreName
```

### Adding a New Sidebar Item
```
□ Open src/components/Sidebar.jsx
□ Find NAV_ITEMS array
□ Add to correct section: { label, path, icon }
□ Icon must be inline SVG (width=17, height=17, stroke="currentColor", strokeWidth=2)
□ Icon goes inside <span className="sidebar__link-icon">
```

### Adding a New Common Component
```
□ Create src/components/common/ComponentName.jsx
□ Create src/components/common/styles/ComponentName.css
□ Export default at bottom of JSX file
□ Add to src/components/common/index.js barrel export
□ CSS must have: base styles + [data-theme="dark"] layer + RTL layer if needed
□ Use CSS logical properties — no physical directional properties
□ Use CSS variables — no hardcoded values
```

---

## API Pattern

```js
import axiosInstance from './axiosInstance'

// ─── MOCK ─────────────────────────────────────────────────────
const MOCK_ENABLED = true

const mockFunctionName = (data) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ data: { ... } })
    }, 800)
  })
}
// ──────────────────────────────────────────────────────────────

export const apiFunctionName = (data) => {
  if (MOCK_ENABLED) return mockFunctionName(data)
  return axiosInstance.post('/endpoint', data)
}
```

---

## Response Handling

Always use `appConfig` keys — never hardcode response field names:

```js
import appConfig from '../config/appConfig'

const token = data[appConfig.auth.tokenKey]
const user  = data[appConfig.auth.userKey]
const msg   = err.response?.data?.[appConfig.auth.messageKey]
```

---

## Error Handling Pattern

```js
try {
  const res = await someApi(body)
  addToast(res.data?.[appConfig.auth.messageKey] || 'Saved successfully.', 'success')
} catch (err) {
  const msg = err.response?.data?.[appConfig.auth.messageKey] || 'Something went wrong.'
  setError(msg)  // or addToast(msg, 'error')
} finally {
  setLoading(false)
}
```

---

## Navbar

Contains (left to right in LTR):
- Hamburger toggle → sidebar open/close
- MIGFORA logo
- [right side] Language toggle (flag + code)
- Theme toggle (sun/moon icon)
- Logout / Login button

In RTL the order reverses — handled via JSX conditional, not CSS.

---

## Sidebar

- Logo in header (hidden in icon-rail mode)
- Nav items with icon + label (label hidden in icon-rail mode)
- `NAV_ITEMS` grouped by section with `{ section, items[] }`
- Each item: `{ label, path, icon }`
- `SidebarProfile` at bottom — shows avatar + name + email (collapsed to avatar in rail mode)
- Copyright line at very bottom

---

## AuthLayout

- No navbar, no sidebar, no footer
- Theme toggle button inside the auth card (bottom)
- Always dark background (`--color-darkest`)
- Card uses `--auth-*` variables for theme-aware colors

---

## Future Backend Integration (Spring Boot)

When connecting to real backend:
1. Set `MOCK_ENABLED = false` in all `src/api/*.js` files
2. Update `VITE_API_BASE_URL` in `.env`
3. Update `appConfig.auth` keys to match actual response fields
4. If backend uses refresh tokens → update `axiosInstance.js` response interceptor

---

## What Claude Must Never Do

- Never use TypeScript or add type annotations
- Never use inline styles for static design values — CSS classes only
- Inline styles are allowed ONLY for dynamic RTL values from store state
- Never hardcode colors, fonts, or layout values — CSS variables always
- Never use `fetch` directly — always use `axiosInstance`
- Never use Tailwind, Bootstrap, or any CSS framework
- Never use `html[dir="rtl"]` or `[dir="rtl"]` CSS selectors
- Never use physical CSS properties (`margin-left`, `left`, `border-right`) — logical properties only
- Never read/write auth state directly from localStorage — always through `useAuthStore`
- Never create a page without its own `styles/` CSS file
- Never create an API file without the `MOCK_ENABLED` pattern
- Never hardcode backend response keys — always use `appConfig.auth.*`
- Never add class components — functional components only
- Never use `var` for variable declarations
- Never put two `primary` buttons next to each other
- Never use `danger` button without a `ConfirmDialog`
- Never add a new common component without updating `index.js` barrel export

---

## Quick Reference

```
New page?              → checklist: page + css + route + sidebar + api
New API?               → src/api/name.js with MOCK_ENABLED pattern
New store?             → src/store/useName.js with zustand create()
New sidebar item?      → NAV_ITEMS in Sidebar.jsx
New common component?  → common/ + styles/ + index.js export
Auth state?            → useAuthStore() — never localStorage directly
Colors/fonts?          → CSS variables in index.css — never hardcode
Theme toggle?          → useThemeStore().toggleTheme()
Language toggle?       → useLanguageStore().toggleLang()
Toast notification?    → useToastStore().addToast(msg, type)
HTTP call?             → axiosInstance — never raw fetch or axios
RTL flex order?        → swap DOM order in JSX using lang === 'ar'
RTL spacing?           → CSS logical properties — automatic
Error message?         → appConfig.auth.messageKey — never hardcode 'message'
```