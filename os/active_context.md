```markdown
# ⚓ TS-Λ3 // ACTIVE CONTEXT [2026-02-18]

**Current State:** Substrate Realignment → **CLEAN BUILD RESTORED**  
**Current Mission:** Stabilize CLEAN web stack, enforce Smallcaps, restore i18n/runtime integrity, and realign visual shell (fonts, cyan accent, hero/Overwatch axes).  
**Last Strike:** Build DRIFT detected → **RESOLVED:** PostCSS pipeline reactivated; Tailwind utilities restored; visual shell and i18n manifests realigned.  
**Protocol Version:** v9.0.0 (Master Manifest)

---

## 🧬 SESSION OBJECTIVES

- **Tailwind v4 Latch:** Maintain CSS-first configuration using `@tailwindcss/vite` with explicit `@tailwind` layers in `src/styles/index.css`, no `@import` collisions.  
- **Linguistic Fission:** Keep `harbora` (Marketing) and `mothershipwhitepaper` (Technical) namespaces physically and semantically aligned across `en`, `my`, `zh`.  
- **Overwatch Axis:** Preserve the high-fidelity 2×2 grid in `overwatch.tsx` while improving narrative readability (bio paragraphs + quote) and removing deprecated pills.  
- **Build Integrity:** Maintain a passing `npm run build` (`tsc && vite build`) under the Smallcaps Mandate with strict import casing and named-export discipline.  
- **Environment Latch:** Keep workspace tooling (`.code-workspace`, VS Code settings) and Firebase Sentinel warnings non-blocking for local dev.

---

## 🏗️ BUILD & SHELL RESOLUTION [v7.30.0]

The project now builds successfully and the shell renders with full visuals (fonts, cyan accent, hero, Overwatch) after repairing the CSS pipeline, restoring Tailwind, and updating key components.

### 1. CSS & FONT PIPELINE RESTORATION

- **Hurdle:** Stubbed `postcss.config.js` prevented Tailwind from emitting utilities, causing a “text-only” shell despite correct components.  
- **Fix:** Restored PostCSS plugins:

  ```js
  export default {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  };
  ```

- **Global Styles (current latch):**
  - `src/styles/index.css` starts with:

    ```css
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
    ```

  - The brand font stack on `body` is `"Space Grotesk", ui-sans-serif, system-ui, ...` for consistent typography.

### 2. SHELL ENTRY & INDEX HTML

- **Entry Point:** `src/main.tsx` now:
  - Imports `./styles/index.css` once at the root.  
  - Wraps `<App />` with `I18nextProvider`, `BrowserRouter`, and `AuthProvider`.  
  - Applies dark mode and Houdini squircle latch without impacting layout.

- **Index HTML:** `index.html`:
  - Keeps the SPA mount at `<div id="root"></div>` and `<script type="module" src="/src/main.tsx"></script>`.  
  - Loads Google Fonts for Inter, JetBrains Mono, Space Grotesk, and Material Symbols.  
  - Adds `<meta name="theme-color" content="#0df2f2" />` to lock the cyan accent at the browser chrome level.

### 3. HERO SECTION REALIGNMENT

- **Component:** `src/components/hero.tsx` refactored to:
  - Use a cyan gradient on `title_line_2` with no text glow.  
  - Reintroduce cyan accents on kicker, mandate border, CTAs, and origin divider using Tailwind utilities (e.g. `bg-cyan-400`, `border-cyan-500/40`).  
  - Switch the “Labs” CTA glyph to the correct `"experiment"` Material Symbol.  
  - Remove all text-level glow utilities, keeping only card/element glows where needed.

### 4. OVERWATCH COMMAND AXIS [v6.8.0]

- **Layout:** `src/components/overwatch.tsx` rebuilt as v6.8.0:
  - Retains the 2×2 grid: Identity (top-left), Checkmate board (top-right), Narrative + quote (bottom-left), Labyrinth radar (bottom-right).  
  - Chess and Labyrinth primitives remain fixed and geometric; no runtime randomness.

- **Manifest Changes:**
  - Removed the `SOVEREIGN_MANIFESTO` pill from the narrative floor latch; the bottom area now shows only the quote block with the Material Quote icon.  
  - Rewired the founder bio for smooth reading:
    - First paragraph: 20-year corporate/brand background and philosophy.  
    - Second paragraph: uses “Artificial Intelligence” instead of “AI” for clarity, rendered as a standard paragraph with left border, normal casing, and readable font size.

- **i18n Wiring:** All Overwatch strings (`kicker`, `role`, `status`, `bio_p1`, `bio_p2`, `experiment_*`, `quote`) read from the `harbora` namespace in `en`, `my`, `zh`, matching keys and preserving narrative fidelity.

### 5. I18N MANIFESTS & LANGUAGE PARITY

- **English Source:** `src/locales/en/harbora.json` is the canonical marketing copy.  
- **Chinese (zh) Realignment:**
  - `src/locales/zh/harbora.json` rebuilt with full parity: `nav`, `hero` (acts `a1–a3`, `body_p1–p3`, `kicker_bottom`), `foundations`, `methods`, `mothership` (including `mandate_p3`), `visualizer`, `overwatch`, `labs`, `footer`, `ollie`.  
  - Preserves technical terms (RAM, Sentinel, RBAA, C-STRIDE).

- **Bahasa (my) Realignment:**
  - `src/locales/my/harbora.json` rebuilt with the same key structure and updated Overwatch quote to use “Artificial Intelligence” in the narrative sense.  
  - Keeps domain vocabulary (e.g. “GELUNG OPERASI”, “INFRASTRUKTUR INTELIGEN PERUSAHAAN”, “Model Akauntabiliti Relasional”) consistent with previous copy.

---

## 📊 VERIFICATION & DEV EXPERIENCE

**Build & Dev:**

```bash
# Type-check and build
npm run verify   # lint + tsc --noEmit + vite build (ESLint install still pending)
npm run dev      # Vite dev server with full shell visuals
```

- **CSS:** No remaining `@import` ordering errors; Tailwind utilities apply across Hero, Mothership, Labs, Overwatch.  
- **Runtime Warnings:**
  - `[SENTINEL] VITE_RPR_FIREBASE_CONFIG not found. Auth vectors disabled.` remains as a non-blocking warning until Firebase config is populated.  
  - React Router v7 “future flags” warnings are acknowledged but intentionally deferred.

---

## ⚠️ PENDING & DEFERRED ITEMS

- **ESLint:** `npm run verify` still surfaces `sh: eslint: command not found` on this workstation; local dev proceeds via `npm run dev` until ESLint is reinstalled.  
- **Firebase Sentinel:** `VITE_RPR_FIREBASE_CONFIG` is not set by default; auth stays disabled locally by design.  
- **Visual Debt:** Hex-grid background (`hex-grid.css`) was intentionally removed from `index.css`; any reintroduction must respect Tailwind/PostCSS ordering and be opt-in.  
- **Upgrade Window:** React Router v7 migration and dependency upgrades (Vite/Firebase) remain scoped to a future mission once this CLEAN baseline is proven stable.

---

**Audit Marker:** `ACTIVE-CONTEXT-v3.0.0-LATCHED`  
**Marker:** `[2026-02-18 18:50] // ARCHITECT ELDER // SHELL + I18N STABILIZED.`  
**DOC_AUTHORITY // OVERWATCH SG-CANONICAL-2026**
```