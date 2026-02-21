⚓ TS-Λ3 // MASTER SCRIPT MANIFEST [v3.0.0]
Authority: THE OVERWATCH // SG-CANONICAL-2026  
Standard: Strictly Smallcaps Paths & ESM Compliance  
Status: AUTHORITATIVE // PRODUCTION_SYNCED  
Timestamp: 2026-02-20T12:30:00Z

📂 ROOT
Repository Root: `/Users/puvansivanasan/perplexity/jobs/active/2026-001-RPR-WEBSITE`  
OS Folder: `os/`  
This manifest is the **single source of truth** for all script-based strikes in this repo.

---

## 🛠️ 1. DEVOPS & DEPLOYMENT STRIKES

Clinical scripts for multi-harbor deployment and identity federation.

| Script Name               | Path                | Version  | Functional Objective                                                                 |
|---------------------------|---------------------|----------|---------------------------------------------------------------------------------------|
| `ip-ledger-strike.sh`     | `scripts/`          | v1.0.2   | PRIMARY: Build, preflight, and deploy Harbor A (Mothership IP surface).              |
| `local-validate.sh`       | `scripts/devops/`   | v1.0.0   | Wrapper for local preflight integrity, hygiene, and WIF checks.                      |
| `sentinel-full-strike.sh` | `scripts/devops/`   | v4.3.0   | Unified topology init and multi-harbor deployment (A/B/C).                           |
| `wif-repair-strike.sh`    | `scripts/devops/`   | v1.0.3   | Restoration of the GCP–GitHub Workload Identity Federation bridge.                   |
| `wif-diagnostic-strike.sh`| `scripts/devops/`   | v1.1.2   | Verification of the WIF identity handshake for Harbor A.                             |
| `latch-targets.sh`        | `scripts/devops/`   | v1.2.0   | Alignment of Firebase Hosting targets to project IDs.                                |
| `ci-firebase-preflight.sh`| `scripts/ci/`       | v1.3.1   | Build gatekeeper for CI runners (`npm run verify` entrypoint).                       |

Allowed top-level deploy flows for Harbor A:
- Local: `npm run verify` → `firebase deploy --only hosting,functions:ollieChat --project rpr-corporate-site`  
- Scripted: `bash scripts/ip-ledger-strike.sh main`

---

## 🧹 2. HYGIENE & MAINTENANCE

Surgical tools for local environment health and casing compliance.

| Script Name                  | Path                   | Version  | Functional Objective                                                         |
|-----------------------------|------------------------|----------|------------------------------------------------------------------------------|
| `emergency-repair-strike.sh`| `scripts/maintenance/` | v1.0.0   | RECOVERY: Liquidates casing ghosts and restores substrate invariants.       |
| `safe-smallcaps-latch.sh`   | `scripts/maintenance/` | v2.9.0   | Buffered renaming protocol for macOS case-insensitive FS.                   |
| `sovereign-cleanse.sh`      | `scripts/maintenance/` | v1.3.0   | Comprehensive cache liquidation and artifact purging.                        |
| `workspace-cleanup.sh`      | `scripts/maintenance/` | v2.1.0   | Sequestering of legacy/unapproved surfaces into quarantine.                 |
| `recovery-strike.sh`        | `scripts/maintenance/` | v1.0.0   | Module resolution recovery and dependency reinstall.                         |
| `migrate-to-legacy.sh`      | `scripts/maintenance/` | v3.0.0   | Isolation of PascalCase ghosts and redundant sessions.                      |

Guardrail:  
- Hygiene scripts may alter workspace state; they **must not** be run during Harbor A stabilization unless explicitly logged in `os/active_context.md`.

---

## 🛰️ 3. FORENSIC AUDIT & TELEMETRY

Probes ensuring live environment stability and data integrity.

| Script Name                    | Path                 | Version  | Functional Objective                                                         |
|--------------------------------|----------------------|----------|------------------------------------------------------------------------------|
| `sovereign-health-probe.sh`    | `scripts/telemetry/` | v1.3.2   | Era 2026 React V4 marker detection and grid lock verification.              |
| `sovereign-telemetry-check.ts` | `scripts/telemetry/` | v1.0.0   | Firestore vector security and env configuration latch.                      |
| `sovereign-seeding-strike.sh`  | `scripts/telemetry/` | v1.3.3   | Execution wrapper for path-invariant data anchoring.                        |
| `audit-filesystem.js`          | `scripts/tooling/`   | v4.1.0   | Generates JSON map of drive residency for forensic review.                  |

---

## 📑 4. INVENTORY & DOCUMENTATION

Automation for maintaining the “Source of Truth” manifests.

| Script Name                | Path                  | Version  | Functional Objective                                          |
|---------------------------|-----------------------|----------|---------------------------------------------------------------|
| `generate-inventory-csv.js` | `scripts/inventory/` | v4.2.3   | Updates `RPR-MOTHERSHIP-inventory-dates.csv`.                 |
| `generate-inventory-md.js`  | `scripts/inventory/` | v4.2.2   | Projects CSV data into human-readable inventory reports.      |

---

## 🔒 5. SECURITY & SECRETS

Credential sanitization and build-time injection.

| Script Name           | Path               | Version  | Functional Objective                                                   |
|-----------------------|--------------------|----------|------------------------------------------------------------------------|
| `configure-secrets.js`| `scripts/security/`| v1.2.7   | ESM-compliant injection of organization secrets into `.env`.          |
| `validate-env.js`     | `scripts/security/`| v4.1.0   | Verification of `.env.sentinel` pathing and availability.             |

Guardrails:
- No secrets checked into repo.  
- Scripts must reference env vars / Secret Manager keys only.

---

## 🧬 6. STATE ORCHESTRATION (CONTEXTS)

React application lifecycle governance.

| Function / Context  | Path                          | Version  | Mission                                                              |
|---------------------|-------------------------------|----------|----------------------------------------------------------------------|
| `AuthContext`       | `src/contexts/authcontext.tsx`| v2.8.8   | Manages Google Redirect/Popup identity handshake.                    |
| `WorkflowContext`   | `src/contexts/workflowcontext.tsx` | v2.0.0 | FSM for “Ask Ollie” logic and Visualizer telemetry.                 |
| `i18nSubstrate`     | `src/i18n/config.ts`          | v3.6.0   | Hardened multi-language (EN/MY/ZH) latching.                         |

---

## 🚥 SYSTEM LOGIC RECOVERY

If the environment detects a Casing Breach, Identity Drift, or build failure:

```bash
bash scripts/maintenance/emergency-repair-strike.sh
bash scripts/devops/local-validate.sh
npm run build
