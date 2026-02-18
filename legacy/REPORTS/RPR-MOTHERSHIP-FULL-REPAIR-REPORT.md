# RPR Mothership Website – Full Repair Report

## Executive Summary

Here is how the Mothership website is wired now. The SPA entry is `src/main.tsx` mounting `<App />` with `BrowserRouter`, `AuthProvider`, and `WorkflowProvider`. `src/app.tsx` composes `Header`, `Footer`, and `Routes` with `Home` at `/`, `MyAudit` at `/labs/myaudit`, `Verify` at `/labs/verify`, `CheckoutPending` at `/labs/checkout-pending`, `LibraryViewer` at `/labs/library`, plus `LegalStub` at `/legal/:docId`. Home renders Hero, Foundations (including THE MOTHERSHIP subsection with SentinelVisualizer), Methods, Labs, and Overwatch. All key surfaces and Labs pages render without runtime errors. `npm run build` passes with zero TypeScript errors. No brand-new conceptual files were invented; all restorations came from existing files or Git history within this repo.

---

## TABLE 1: Restored Files

| path | commit_hash_used | reason_restored |
|------|------------------|-----------------|
| src/pages/labs/MyAudit.tsx | e441195 | File contained Labs component instead of MyAudit; restored from git |
| src/types/viewModels.ts | e441195 | File was empty; ExtractionResults imports UILedgerEntry; restored re-export from index |

---

## TABLE 2: Canonical Entry & Surfaces

| surface | component_path | notes |
|---------|----------------|-------|
| Hero | src/components/Hero.tsx | hard-coded |
| Foundations | src/components/Foundations.tsx | hard-coded; includes THE MOTHERSHIP subsection |
| Methods | src/components/Methods.tsx | hard-coded |
| Mothership | embedded in Foundations | "THE MOTHERSHIP" block + SentinelVisualizer |
| Mothership Visualizer | src/components/SentinelVisualizer.tsx | used inside Foundations |
| Overwatch | src/components/Overwatch.tsx | hard-coded |
| Labs | src/components/Labs.tsx | hard-coded |
| Footer | src/components/Footer.tsx | hard-coded |
| Header | src/components/Header.tsx | hard-coded |
| MyAudit | src/pages/labs/MyAudit.tsx | restored from e441195; hard-coded |
| Verify | src/pages/labs/verify.tsx | import paths fixed; placeholder content |
| CheckoutPending | src/pages/labs/checkout-pending.tsx | import paths fixed; placeholder content |
| LibraryViewer | src/pages/labs/library-viewer.tsx | import paths fixed; placeholder content |

---

## TABLE 3: I18N STATE

| namespace | backing_files | components_using_it |
|-----------|---------------|---------------------|
| (none) | — | All root src components are hard-coded; no useTranslation in canonical tree |
| mothershipwhitepaper | src/locales/{en,my,zh}/mothershipwhitepaper.json | no direct usage in root src |
| harbora | public/locales/{en,my,zh}/harbora.json | no direct usage in root src (SUBSTRATE uses harborA) |

Note: The canonical root src/ does not use react-i18next. SUBSTRATE-DIRECTORY-v2.2.0 has i18n (harborA) but was not merged; root uses hard-coded copy. No i18n provider in main.tsx.

---

## TABLE 4: BUILD STATUS

| metric | value |
|--------|-------|
| npm run build | pass |
| TypeScript errors | 0 |
| remaining warnings | Chunk size warnings (Rollup; non-blocking) |
| notes | Build completes in ~5s; dist produced successfully |

---

## Additional Edits (Non-Restoration)

- **src/pages/labs/verify.tsx, checkout-pending.tsx, library-viewer.tsx**: Fixed import paths from `./icons/` to `../../components/icons/`; renamed exports to Verify, CheckoutPending, LibraryViewer; added default exports.
- **src/App.tsx**: Added routes for `/labs/verify`, `/labs/checkout-pending`, `/labs/library`; added imports for Verify, CheckoutPending, LibraryViewer.

---

## Explicit Statement

**No brand-new conceptual files were invented; all restorations came from existing files or Git history within this repo.**
