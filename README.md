```markdown
# rpr communications // the mothership [harbor a]

**url:** https://rprcomms.com  
**status:** 🟢 live // substrate_stabilized  
**authority:** the overwatch // sg-canonical-2026  
**version:** 7.52.4  

---

## 01. identity & objective

harbor a is the primary public activation point for rpr communications. it is a high‑fidelity react/vite mothership designed to move the needle through experiential communications and global intelligence.

### the needle mandate

"we're a boutique agency and experience studio that actually cares if the campaign moves the needle. we plan campaigns based on real world results through digital, virtual and the physical spaces..with the messy bits in between."

---

## 02. technical substrate

the infrastructure is a hardened, flattened react substrate optimized for speed and cryptographic identity verification.

- **framework:** react 18.3.1 (vite 5.4.21 build engine)  
- **authentication:** dual‑cta latch (kontrol + google oauth wif v2)  
- **hosting:** firebase hosting (project: `rpr-corporate-site`, target: `main`)  
- **region:** asia-southeast1 (singapore edge)  
- **backend:** gcfv2 `olliechat` (cloud run, node 20)  
- **store:** stripe engine v2 (financial substrate via `npm run server`)  

---

## 03. operational commands

from the project root:

```bash
npm run dev      # local development (vite)
npm run verify   # full forensic pre-flight (preflight + build)
npm run build    # production build (safe smallcaps latch + vite)
npm run server   # financial substrate (stripe proxy)
```

legacy strikes (kept for reference only):

```bash
./scripts/recovery-strike.sh   # substrate recovery
./deploy_strike.sh             # manual firebase hosting deploy
```

do not add ad‑hoc scripts without updating `docs/ops/stabilization-protocol-v5.1.0.md`.

---

## 04. architecture & content

see `docs/manifests/harbor-a-master-architectural-manifest-v8.0.0.md` for the full routing, component map, and section topology.

key surfaces:

- foundations, methods, labs, overwatch, mothership section.  
- linguistic fission between:  
  - `public/locales/{en|my|zh}/harbora.json` (marketing)  
  - `src/locales/{en|my|zh}/mothershipwhitepaper.json` (technical).  

---

## 05. governance & canonical docs

all work must align with these canonical ts-λ3 documents (do not invent new versions):

- `docs/manifests/harbor-a-master-architectural-manifest-v8.0.0.md`  
- `docs/launch/production-launch-blueprint-v1.1.0.md`  
- `docs/ip/master-ip-submission-checklist-v3.2.0.md`  
- `docs/ops/stabilization-protocol-v5.1.0.md`  

legal routes:

- privacy policy: `/legal/privacy`  
- terms of use: `/legal/terms`  
- security & compliance: `/legal/security`  
- responsible ai: `/legal/governance`  

deprecated assets and texture changes are tracked in `docs/ops/deprecated-assets-ledger.md`.

---

## 06. sovereign guardrails

- **smallcaps mandate:** all file paths and imports lowercase (no caps in names).  
- **linguistic fission:** whitepaper content never lives in `harbora.json`.  
- **financial hibernation:** `pay_latch_active = false` until live pricing ids are latched in `server.js`.  
- **ip air gap:** strategic artifacts remain under `docs/governance/os/`, never imported from `src/`.  

see `docs/ops/stabilization-protocol-v5.1.0.md` for the full rule set and local map.

---

## 07. version truth

- **current frontend version:** 7.52.4  
- **current architectural manifest:** v8.0.0  

historical files (v1.0.0, v5.0.0, etc.) are kept for history only and must never be treated as current ground truth.

**audit marker:** `readme-v7.52.4-latched`  
marker: `[2026-02-24 09:20] // engineer elder // harbor a production strike consolidated.`  
doc_authority // overwatch sg-canonical-2026
```