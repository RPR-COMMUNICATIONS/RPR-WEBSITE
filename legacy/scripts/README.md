# Scripts Topology

Script organization and risk documentation for RPR-WEBSITE. **Review risk levels before executing any script.**

## Directory Layout

```
scripts/
  deploy/         # Deployment (Harbor A)
  maintenance/    # Clean, recovery
  ci/             # CI validation, preflight
  devops/         # Local validate, WIF, secrets
  tools/          # Branding, telemetry, audit (ad-hoc)
  archive/         # DANGEROUS / out-of-scope (hardcoded paths, wrong topology)
```

## Risk Classification

| Level | Meaning |
|-------|---------|
| **SAFE** | No destructive ops; read-only or external API only |
| **CAUTION** | Writes to dist/build/cache only; rm of node_modules, package-lock |
| **DANGEROUS** | Could delete or modify source, external paths, or git history |

## Script Inventory and Risk

### deploy/ (run from repo root via npm run deploy)

| Script | Risk | Purpose |
|--------|------|---------|
| deploy-strike.sh | SAFE | Build + Firebase deploy to rpr-corporate-site |
| latch-targets.sh | SAFE | Firebase hosting target: main -> rpr-corporate-site |

### maintenance/

| Script | Risk | Purpose |
|--------|------|---------|
| sovereign-cleanse.sh | CAUTION | tsc, build, rm dist/.vite/.firebase, find -delete *.tsbuildinfo, .DS_Store |
| recovery-strike.sh | CAUTION | rm node_modules, package-lock, .vite, .firebase; npm install |
| cleanse-substrate.sh | DANGEROUS | rm node_modules, dist, package-lock, backend/functions/lib; find . -delete |

### ci/

| Script | Risk | Purpose |
|--------|------|---------|
| ci-firebase-preflight.sh | SAFE | Target validation, deps check, build |
| ci-firebase-sa-verify.ts | SAFE | Verify Firebase IAM/auth |

### devops/

| Script | Risk | Purpose |
|--------|------|---------|
| local-validate.sh | SAFE | npx tsc --noEmit |
| wif-repair-strike.sh | SAFE | gcloud WIF pool/provider setup |
| wif-diagnostic-strike.sh | SAFE | gcloud WIF diagnostics |

### tools/

| Script | Risk | Purpose |
|--------|------|---------|
| generate-rpr-branding.js | CAUTION | Writes SVG to RPR-REACT-MOTHERSHIP (path may not exist) |
| configure-secrets.js | CAUTION | Writes .env from env vars |
| sovereign-audit.sh | SAFE | Read-only substrate compliance checks |
| sovereign-health-probe.sh | SAFE | curl + grep remote health |
| sovereign-health-probe-angular.sh | SAFE | Same + React V4 / Angular marker check |
| secret_sanitization | SAFE | Validate SA JSON for GitHub |

### archive/

**Do not run without review.** Scripts assume RPR-REACT-MOTHERSHIP subdirectory or external paths (`/Users/...`, `/app`).

| Script | Risk | Notes |
|--------|------|-------|
| purge-terraform-from-git.sh | DANGEROUS | git filter-branch, rm .git/refs/original, force push |
| sovereign-seeding-strike.sh | DANGEROUS | cd to 2026-002-MYAUDIT; writes Firestore |
| sovereign-git-latch.sh | SAFE | git add (assumes RPR-REACT-MOTHERSHIP) |
| sentinel-full-strike.sh | DANGEROUS | Hardcoded /Users/... paths |
| sentinel-multi-harbor-strike.sh | DANGEROUS | Assumes RPR-REACT-MOTHERSHIP |
| cleanse-governance.sh | CAUTION | Same as sovereign-cleanse |
| workspace-cleanup.sh | DANGEROUS | WORKSPACE_ROOT=/app; mv to quarantine |
| sovereign-seed.ts | SAFE | Firestore seeding (used by seeding-strike) |
| sovereign-telemetry-check.ts | SAFE | Read-only firebase.ts check |

## Canonical npm Scripts

| Command | Purpose |
|---------|---------|
| `npm run dev` | Local development |
| `npm run build` | tsc + vite build |
| `npm run verify` | lint + tsc --noEmit + build |
| `npm run lint` | ESLint |
| `npm run deploy` | scripts/deploy/deploy-strike.sh |
| `npm run deploy:test` | Same as deploy |
| `npm run clean` | scripts/maintenance/sovereign-cleanse.sh |
| `npm run server` | vite preview --port 4173 |
