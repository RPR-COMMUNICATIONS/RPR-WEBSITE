Here’s a tightened `readme.md` that applies all those adjustments.

```markdown
# RPR COMMUNICATIONS // THE MOTHERSHIP [HARBOR A]

**URL:** https://rprcomms.com  
**STATUS:** 🟢 LIVE // SUBSTRATE_STABILIZED  
**AUTHORITY:** THE OVERWATCH // SG-CANONICAL-2026  
**VERSION:** 7.28.0  

---

## 01. IDENTITY & OBJECTIVE

Harbor A is the primary public activation point for RPR Communications. It is a high‑fidelity React/Vite Mothership designed to move the needle through experiential communications and global intelligence.

### THE NEEDLE MANDATE

"We're a boutique agency and experience studio that actually cares if the campaign moves the needle. We plan campaigns based on real world results through digital, virtual and the physical spaces..with the messy bits in between."

---

## 02. TECHNICAL SUBSTRATE

The infrastructure is a hardened, flattened React substrate optimized for speed and cryptographic identity verification.

- **Framework:** React 18.3.1 (Vite 5.4.1 build engine)  
- **Authentication:** Dual‑CTA latch (KONTROL + Google OAuth WIF v2)  
- **Hosting:** Firebase Hosting (project: `rpr-corporate-site`, target: `main`)  
- **Region:** asia‑southeast1 (Singapore edge)  
- **Backend:** GCFv2 `ollieChat` (Cloud Run, Node 20)  
- **Store:** Stripe engine v2 (financial substrate via `npm run server`)  

---

## 03. OPERATIONAL COMMANDS

From the project root:

```bash
npm run dev      # Local development (Vite)
npm run build    # Production build (triggers safe smallcaps latch)
npm run verify   # Full forensic pre-flight audit
npm run server   # Financial substrate (Stripe proxy)
```

Legacy strikes (kept for reference):

```bash
./scripts/recovery-strike.sh   # Substrate recovery
./deploy_strike.sh             # Firebase Hosting deploy
```

Do not add ad‑hoc scripts without updating `docs/ops/stabilization-protocol-v5.1.0.md`.

---

## 04. ARCHITECTURE & CONTENT

See `docs/manifests/harbor-a-master-architectural-manifest-v8.0.0.md` for the full routing, component map, and section topology.

Key surfaces:

- Foundations, Methods, Labs, Overwatch, Mothership section.  
- Linguistic fission between:
  - `public/locales/{en|my|zh}/harbora.json` (marketing)  
  - `src/locales/{en|my|zh}/mothershipwhitepaper.json` (technical).  

---

## 05. GOVERNANCE & CANONICAL DOCS

All work must align with these canonical TS‑Λ3 documents (do not invent new versions):

- `docs/manifests/harbor-a-master-architectural-manifest-v8.0.0.md`  
- `docs/launch/production-launch-blueprint-v1.1.0.md`  
- `docs/ip/master-ip-submission-checklist-v3.2.0.md`  
- `docs/ops/stabilization-protocol-v5.1.0.md`  

Legal routes:

- Privacy Policy: `/legal/privacy`  
- Terms of Use: `/legal/terms`  
- Security & Compliance: `/legal/security`  
- Responsible AI: `/legal/governance`  

Deprecated assets and texture changes are tracked in `docs/ops/deprecated-assets-ledger.md`.

---

## 06. SOVEREIGN GUARDRAILS

- **smallcaps mandate:** all file paths and imports lowercase (no caps in names).  
- **linguistic fission:** whitepaper content never lives in `harbora.json`.  
- **financial hibernation:** `pay_latch_active = false` until live pricing IDs are latched in `server.js`.  
- **ip air gap:** strategic artifacts remain under `os/`, never imported from `src/`.  

See `docs/ops/stabilization-protocol-v5.1.0.md` for the full rule set and local map.

---

## 07. VERSION TRUTH

- **Current frontend version:** 7.28.0  
- **Current architectural manifest:** v8.0.0  

Historical files (v1.0.0, v5.0.0, etc.) are kept for history only and must never be treated as current ground truth.

**Audit marker:** `readme-v7.28.0-latched`  
Marker: `[2026-02-21 06:45] // engineer elder // air‑gap & linguistic fission standards latched.`  
DOC_AUTHORITY // OVERWATCH SG‑CANONICAL‑2026
```