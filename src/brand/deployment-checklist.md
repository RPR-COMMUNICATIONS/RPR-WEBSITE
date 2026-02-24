```markdown
# ⚓ TS-Λ3 // DEPLOYMENT CHECKLIST [v1.1.0]

**Path:** `src/brand/deployment-checklist.md`  
**Mission:** Final Verification Substrate for Production Strikes  
**Authority:** THE OVERWATCH // SG-CANONICAL-2026  
**Status:** AUTHORITATIVE // LATCHED

---

## [ 1. SYSTEM INTEGRITY: PRE-FLIGHT ]

- [ ] **Smallcaps Enforcement:** Run `scripts/maintenance/safe-smallcaps-latch.sh`. Verify zero PascalCase residency in `src/components/` to prevent TS2307 anomalies.
- [ ] **Dependency Audit:** Verify `package.json [v13.5.7]` is liquidated of unused legacy stubs. Ensure `@tailwindcss/vite` and `framer-motion` are pinned.
- [ ] **Type Latch:** Execute `tsc --noEmit`. Ensure `src/types/index.ts [v4.9.1]` resolves all Ledger and Node mappings.
- [ ] **Styles Hardening:** Verify `src/styles/index.css [v4.9.2]` has liquidated the redundant background-color line and is governed by `@theme`.

## [ 2. SUBSTRATE: index.html [v3.5.5] ]

- [ ] **Geometric Authority:** Confirm the root `<svg>` defines the following hardware-accelerated filters:
  - `#white-edge-glow`
  - `#cyan-glow`
  - `#active-white-glow`
- [ ] **Glyph Manifest:** Ensure the Material Symbols link explicitly includes `chess_rook`, `robot`, `experiment`, `bolt`, and `g_mobiledata`.
- [ ] **Viewport:** Confirm `width=device-width, initial-scale=1.0` for responsive scale integrity.

## [ 3. ASSET INTEGRITY: THE BRAND ]

- [ ] **MothershipOSLogo [v1.3.9]:** Verify desktop `max-width` is escalated to `650px` for architectural presence. Confirm hover scaling is suppressed on desktop nodes.
- [ ] **SymbolTile [v5.4.1]:** Confirm zero-clip rendering at `0.9x` scale. Verify it utilizes the global filter IDs from `index.html`.
- [ ] **L4 Products [v21.1.0]:** Verify "Clinical Node Scaling" is active (`text-xs` titles, `min-h-[85px]` boxes) to optimize HUD density.

## [ 4. IDENTITY & LINGUISTIC LATCH ]

- [ ] **Orchestrator Latch [v7.52.2]:** Confirm the Material Symbols link is in `index.html`, not `App.tsx`, to liquidate layout flicker.
- [ ] **AuthContext [v2.8.8]:** Verify `signInWithRedirect` is functional for mobile nodes. Confirm `getFirebaseAuth` singleton is active.
- [ ] **i18n Master [v6.5.1]:** Confirm triple-substrate bundling (`harbora`, `labs`, `mothershipwhitepaper`). Verify `lng: 'en'` is the initial visual latch.

## [ 5. OPERATIONAL: SINGAPORE NODE ]

- [ ] **Sovereign Proxy:** Confirm `firebase.json [v18.5.1]` explicitly rewrites `/api/ollieChat` to the `asia-southeast1` region.
- [ ] **Ollie Client [v3.7.0]:** Verify Firebase ID Token ingestion for authenticated invocations to liquidate 403 Forbidden anomalies.
- [ ] **Stripe Latch:** Confirm `VITE_STRIPE_STORE_URL` is active in `.env` while `PAY_LATCH_ACTIVE` remains `false` (Hibernation).

## [ 6. THE PRODUCTION STRIKE ]

```bash
npm run verify   # (Smallcaps + Type Check + Forensic Cleanse)
npm run build    # (Vite Optimization + Asset Chunking)
firebase deploy --only hosting:main --project rpr-corporate-site
```

---

**AUDIT MARKER:** `DEPLOY-READY-2026-02-24-LATCHED`  
**DOC_AUTHORITY // OVERWATCH SG-CANONICAL-2026**
```