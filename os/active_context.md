⚓ TS-Λ3 // ACTIVE CONTEXT [2026-02-21]

**CURRENT STATE:** HIERARCHY STABILIZED → SOVEREIGN PROXY LATCHED // ORG BLOCKADE RESPECTED  
**CURRENT MISSION:** Complete the 2‑step Proxy Strike (deploy + IAM latch) so Harbor A can call Ollie without touching the org’s `iam.allowedPolicyMemberDomains` policy.

**PROTOCOL VERSION:** v14.0.1 (Proxy Execution + Directory Latch Phase)  

---

## LAST STRIKES

- **Substrate Migration (JOB-2026-021):** Canonical governance moved to `docs/` harbors; strategic pre‑patent claims isolated under `os/` to preserve the IP Air Gap.  
- **Identity Latch:** Root `readme.md` updated to v7.28.0 (Overwatch authority, short‑root pattern); deep rules pushed into `docs/`.  
- **Substrate Directory Latch [v2.4.0]:**  
  - Created/updated `os/substrate-directory-v2.4.0.md` as the authoritative physical mapping and protocol overview.  
  - Confirmed Smallcaps Mandate for filenames (hyphenated lowercase) and updated this active context to reference the new directory.  
  - Left `os/substrate_directory-v2.3.0.md` in place as a historical snapshot only.  
- **Proxy Latch:** `server.js` [v3.2.0] and `firebase.json` rewrites latched to route `/api/ollieChat` through the Sovereign Proxy instead of direct public Cloud Run access.  
- **Ollie Forensics:** Cloud Shell diagnostics confirmed:
  - `ollieChat` GCFv2 active in `asia-southeast1` (Cloud Run).  
  - IAM policy for `olliechat` = `null` (no explicit bindings).  
  - `iam.allowedPolicyMemberDomains` enforced at org root; `allUsers` fails with `FAILED_PRECONDITION` (no project‑level override).  
- **Spec Latch:** Sentinel Protocol Spec v1.3.7 seated in `os/` as TS‑Λ3 crown secret.  

---

## 🧬 SESSION OBJECTIVES

1. **Proxy Strike — Deploy (Step 1):**  
   - Ensure the Sovereign Proxy code (`server.js` v3.2.0 + `/api/ollieChat` rewrite in `firebase.json`) is deployed via:
     ```bash
     firebase deploy --only functions,hosting
     ```
   - Target project: `rpr-corporate-site`. No route changes beyond the `/api/ollieChat` proxy.

2. **Proxy Strike — IAM Latch (Step 2):**  
   - Once a dedicated proxy function/service exists (e.g. `apiProxy` as GCFv2), use Cloud Shell to:
     - Discover its `serviceAccountEmail`.  
     - Grant that service account `roles/run.invoker` on `olliechat` in `asia-southeast1`.  
   - Constraint: do **not** attempt `allUsers`; org policy remains the sovereign guardrail.

3. **Build Pipe Repair (Deferred):**  
   - Tailwind v4 / PostCSS anomaly still pending: add `@tailwindcss/postcss` and adjust `postcss.config.js` in a separate, authorized strike to restore `npm run build`.  
   - Harbor A remains live off the last known‑good `dist` until that repair runs.

4. **Ledger Integrity:**  
   - Append each tactical strike (deploys, IAM changes, build repairs, directory updates) verbatim to `reports/ip-ledger-deployment-log.csv` as the WORM record for Harbor A.

---

## 🏗️ BUILD & DEPLOYMENT TELEMETRY [v14.1.1]

1. **Sovereign Proxy Status [v1.0.0]**

- **Strategy:** Path B (internal proxy) adopted to bypass the org‑level `iam.allowedPolicyMemberDomains` blockade without changing org policy.  
- **Flow:** `rprcomms.com/api/ollieChat` → Mothership backend (Sovereign Proxy) → `olliechat` (Cloud Run, `asia-southeast1`).  
- **Identity:** Invocation handled by a trusted service account (proxy) once IAM latch is applied; no `allUsers` bindings.

2. **Repository Topology (SG‑CANONICAL‑2026)**

- **Docs Harbor:** `docs/manifests/`, `docs/ip/`, `docs/ops/`, `docs/launch/` (canonical manifests, IP checklists, protocols, launch plans).  
- **Strategic Harbor:** `os/` (TS‑Λ3 isolated, air‑gapped from `src/` and `public/`), with `os/substrate-directory-v2.4.0.md` now the master substrate map.  
- **Implementation:** `src/` hierarchy strictly smallcaps; smallcaps mandate enforced in `readme.md`, `docs/ops/stabilization-protocol-v5.1.0.md`, and the substrate directory.

---

## 🛡️ OVERWATCH COMMAND AXIS

- **Org Policy Posture:** `iam.allowedPolicyMemberDomains` at org `566551209016` is intentionally left intact; Harbor A must respect this and achieve “public Ollie” only via internal identities.  
- **IP Policy:** TS‑Λ3 crown secret classification maintained for Sentinel Protocol, Bond Stack, and detailed IP claims in `os/`.  
- **Ledger Latch:** `reports/ip-ledger-deployment-log.csv` remains the authoritative deployment ledger; all strikes (including v2.4.0 directory latch) enter here before Notion/Docs updates.  
- **Script Manifest:** `scripts/` tree aligned with `docs/ops/` manifests (recovery, deploy, ledger strikes); no ad‑hoc shell scripts permitted without updating the stabilization protocol.

---

## ⚠️ POST-STRIKE CHECKLIST

- [x] Substrate migration to `docs/` and `os/` harbors.  
- [x] Root `readme.md` v7.28.0 latched (short root, deep docs).  
- [x] Sovereign Proxy logic latched in `server.js` v3.2.0 and `firebase.json`.  
- [x] Substrate directory v2.4.0 latched and smallcaps‑verified under `os/`.  
- [ ] **Proxy Deploy (Step 1):** `firebase deploy --only functions,hosting` with proxy entrypoint active.  
- [ ] **IAM Latch (Step 2):** Proxy service account bound to `roles/run.invoker` on `olliechat` (no `allUsers`).  
- [ ] **Build Pipe Repaired:** Tailwind/PostCSS configuration updated; `npm run build` passes.  
- [ ] **Ollie via Proxy Verified:** From `https://rprcomms.com`, “Ask Ollie” → `/api/ollieChat` returns HTTP 200 with `status: "LATCHED"` and `proxy_status: "LATCHED_VIA_HARBOR_A"`.

**Audit Marker:** `ACTIVE-CONTEXT-v14.0.1-PROXY_STRIKE_READY+SUBSTRATE_LATCHED`  
**Markers:**  
- `[2026-02-21 07:38] // ENGINEER ELDER // SUBSTRATE DIRECTORY v2.4.0 LATCHED. ACTIVE CONTEXT SYNCED.`  
- `[2026-02-21 07:35] // ENGINEER ELDER // HIERARCHY STABILIZED. SOVEREIGN PROXY IMPLEMENTED.`  
- `[2026-02-21 07:15] // ENGINEER ELDER // IP CLAIMS v1.1.0 LATCHED. LEDGER UPDATED (JOB-2026-021).`  

**DOC_AUTHORITY // OVERWATCH SG-CANONICAL-2026**
