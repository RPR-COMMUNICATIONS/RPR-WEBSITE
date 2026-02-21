```markdown
# ⚓ TS-Λ3 // RPR COMMUNICATIONS – THE MOTHERSHIP OS [HARBOR A]

**URL:** `https://rprcomms.com`  
**STATUS:** 🟢 LIVE // SUBSTRATE_STABILIZED  
**AUTHORITY:** THE OVERWATCH // SG-CANONICAL-2026  
**PROTOCOL:** TS-Λ3  
**VERSION:** 7.28.0 (Frontend)  

---

## 01. IDENTITY & OBJECTIVE

Harbor A is the primary public activation point for RPR Communications LLC. It is the **Mothership OS** digital surface: a high‑fidelity React/Vite substrate designed to move the needle through experiential communications and global intelligence, while staying aligned with RAM and the Sentinel Protocol.

### THE NEEDLE MANDATE

> “We’re a boutique agency and experience studio that actually cares if the campaign moves the needle. We plan campaigns based on real‑world results through digital, virtual and physical spaces — with all the messy bits in between.”

Harbor A’s purpose is to:

- Represent the firm’s strategy and philosophy clearly to humans.  
- Expose a controlled surface for technical whitepapers and governance narratives.  
- Avoid leaking internal implementation details or trade‑secret logic.

---

## 02. TECHNICAL SUBSTRATE

The infrastructure is a hardened, flattened React substrate optimized for speed, linguistic stability and cryptographic identity verification.

- **Framework:** React 18.3.1 (Vite 5.4.1 build engine).  
- **Styling:** Tailwind CSS v4 (`src/styles/index.css` as canonical substrate).  
- **Authentication:** Google OAuth WIF v2 (KONTROL and other governance surfaces kept separate).  
- **Hosting:** Firebase Hosting  
  - Project: `rpr-corporate-site`  
  - Target: `main`  
- **Region:** `asia-southeast1` (Singapore sovereign edge).  
- **Backend:** GCFv2 / Cloud Run (`ollieChat` and related Node 20 services).  
- **Store / Financial Substrate:** Stripe engine v2, initialized via `npm run server`.  
- **Icon System:** Squircle / `SymbolTile` architecture with `#glow` filters (no raw SVG filters).  
- **Glyph Engine:** Google Material Symbols (Mechanical Mode).

**Performance constraints:**

- Bundle size and build output are monitored under the Stabilization Protocol (`docs/ops/stabilization-protocol-v5.1.0.md`).  
- Type safety is enforced via `npm run build` (tsc) as a hard gate.

---

## 03. OPERATIONAL COMMANDS

All commands must be run from the project root.

### Primary Commands

```bash
npm run dev        # Local development (Vite)
npm run build      # Production build (triggers safe-smallcaps latch)
npm run verify     # Full forensic pre-flight audit
npm run server     # Financial substrate (Stripe proxy)
```

- `npm run build` must complete with 0 errors; it also runs `scripts/safe-smallcaps-latch.sh` to enforce the Smallcaps Mandate.  
- `npm run verify` must be executed before any Production Strike; it checks routing, i18n, and basic governance invariants.

### Legacy Strikes (Historical Reference)

```bash
./scripts/recovery-strike.sh   # Substrate recovery (legacy)
./deploy_strike.sh             # Firebase Hosting deploy (legacy)
```

These are kept for forensic and historical reference only. New work should prefer the `npm run strike:...` pattern as defined in the Launch Blueprint.

Do **not** add ad‑hoc scripts without:

- Updating `docs/ops/stabilization-protocol-v5.1.0.md`.  
- Ensuring new scripts respect the Smallcaps Mandate and existing governance rules.

---

## 04. ARCHITECTURE & CONTENT MAP

Harbor A follows the unified Mothership OS architecture; KONTROL and other governance panels are separate surfaces but share identity and RAM/Sentinel constraints conceptually.

### Core Surfaces

- **FOUNDATIONS:**  
  - DNA pillars (3) and a strategic loop (5 phases).  
  - Explains Truth, Insight, Journey pillars.

- **METHODS:**  
  - RPR IKON loop (ASK, PAY, MAKE, PLAY, REPEAT).  
  - Links to the operational behavior of Harbor A and downstream products.

- **LABS:**  
  - Prototype enclave: RPR VERIFY, MYΛUDIT, Labyrinth surfaces.  
  - The `/labs` route hosts experimental and technical views, including the whitepaper library.

- **OVERWATCH:**  
  - Sole human decision authority narrative.  
  - Bio, experiment log, and AI‑human experiment framing.

- **MOTHERSHIP SECTION:**  
  - Explains Mothership OS as a business operating system.  
  - Surfaces RAM, Sentinel, RBAA, and telemetry concepts at a high level.

### Linguistic Fission (Content Separation)

To prevent technical law from drifting into marketing copy:

- **Marketing Namespace:**  
  - `public/locales/{en|my|zh}/harbora.json`  
  - Contains: nav, Hero Acts I–III, foundations, methods, labs, overwatch, mothership section copy.

- **Technical Whitepaper Namespace:**  
  - `src/locales/{en|my|zh}/mothershipwhitepaper.json`  
  - Contains: abstract, sovereign bond stack, Sentinel Protocol, RBAA, architecture, deployment, appendix.

**Prohibited:**

- Placing technical whitepaper content into `harbora.json`.  
- Using whitepaper strings directly in marketing sections without passing through the whitepaper viewer surfaces.

For full route and component listing, see:

- `docs/manifests/harbor-a-master-architectural-manifest-v8.0.0.md`

---

## 05. GOVERNANCE, LEGAL & CANONICAL DOCS

Harbor A is the primary intelligence surface for RPR Communications LLC. All significant changes must align with, and when necessary update, these canonical documents:

### Canonical Governance & Architecture Files

- **Master Architectural Manifest (current):**  
  `docs/manifests/harbor-a-master-architectural-manifest-v8.0.0.md`

- **Production Launch Blueprint (current):**  
  `docs/launch/production-launch-blueprint-v1.1.0.md`

- **Master IP & Submission Checklist (current):**  
  `docs/ip/master-ip-submission-checklist-v3.2.0.md`

- **Stabilization Protocol & Local Map:**  
  `docs/ops/stabilization-protocol-v5.1.0.md`

When making structural, deployment, or governance changes, update the relevant doc above and keep version numbers consistent.

### Legal Routes

- **Privacy Policy:** `/legal/privacy`  
- **Terms of Use:** `/legal/terms`  
- **Security & Compliance:** `/legal/security`  
- **Responsible AI / Governance:** `/legal/governance`

These routes must remain stable and must not expose internal IP artifacts or TS‑Λ3 documents.

---

## 06. SOVEREIGN GUARDRAILS & IP AIR GAP

### Smallcaps Mandate

- All file paths and imports must be lowercase (small caps) to maintain parity between macOS and Linux environments.  
- Do **not** create files or directories with uppercase letters.  
- The `scripts/safe-smallcaps-latch.sh` script enforces this during builds.

### IP Air‑Gap (Internal Strategic IP)

Internal strategic IP artifacts live **outside** `src/` and `public/` and must never be bundled into the frontend.

**Current examples:**

- `os/ip-claims-summary-v1.0.0.md`  
- `os/ip-artifact-index-v1.0.0.md`

All other `.md` files within `os/` are classified **TS‑Λ3** and must:

- Not be imported from any file under `src/`.  
- Not be copied into `docs/` unless explicitly sanitized for external use.

### Linguistic Fission Enforcement

- Maintain the separation between `harbora.json` (marketing) and `mothershipwhitepaper.json` (technical).  
- Do not degrade technical content into vague marketing language inside whitepaper namespaces.  
- Do not “upgrade” marketing copy into pseudo‑technical law without a corresponding PRD / manifest update under `docs/`.

### Financial Hibernation

- The PAY gate remains in hibernation:  
  `pay_latch_active = false` (e.g. in `src/components/methods.tsx`).  
- Production billing must **not** be enabled until live Pricing IDs are latched in the server layer (e.g. `server.js` or equivalent).  
- Any change to billing behavior must be reflected in:  
  - `docs/launch/production-launch-blueprint-v1.1.0.md`  
  - `docs/ip/master-ip-submission-checklist-v3.2.0.md` (if IP posture changes)

### Relational Accountability (RAM)

RAM governs how decisions are made and who is accountable:

- Treat every change that affects governance, constraints, or IP posture as a RAM‑governed action.  
- Reflect such changes in the appropriate doc under `docs/`.  
- Ensure changes are captured in governance logs (e.g. GovernanceSessions or equivalent audit trails in downstream systems).

For deeper detail, refer to:

- `docs/manifests/ram-framework-prd-v1.2.0.md`  
- `docs/manifests/sentinel-protocol-prd-v1.3.7.md`

---

## 07. DEPRECATED ASSETS

### Google Identity PNG

- **File:** `src/assets/branding/web_dark_sq_na@1x.png`  
- **Status:** DEPRECATED  
- **Replacement:** Material Symbols “G” icon (`g_mobiledata`) in the header.  
- **Reason:** Canonical Google identity mark is now the Material Symbols vector glyph; ensures high‑density UI consistency in the header and mobile navigation.  
- **Date Deprecated:** 2026‑02‑01  

Additional deprecated assets and remediation notes should be tracked under:

- `docs/ops/deprecated-assets-ledger.md` (create / update as needed).

---

## 08. VERSION TRUTH

- **Current frontend version:** `7.28.0`  
- **Current architectural manifest:** `harbor-a-master-architectural-manifest-v8.0.0.md`  

Historical files such as:

- `harbor-a-master-architectural-manifest-v1.0.0.md`  
- `harbor-a-master-architectural-manifest-v5.0.0.md`  
- Older READMEs (e.g. 5.0.0 / 5.1.0)

are retained for forensic history only and must **never** be treated as current ground truth.

Any future manifest (e.g. v9.x.x) must:

- Be explicitly created and versioned under `docs/manifests/`.  
- Be referenced in this README only after Overwatch approval.

---

**Audit Marker:** `readme-v7.28.0-latched`  
**Marker:** `[2026-02-21 07:10] // engineer elder // harbor a version-specific readme latched.`  
**DOC_AUTHORITY // OVERWATCH SG-CANONICAL-2026**