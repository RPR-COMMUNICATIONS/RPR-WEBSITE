#!/bin/bash
# TS-Λ3 // LOCAL VALIDATION WRAPPER [v1.1.0]
# Path: scripts/devops/local-validate.sh
# Mission: Clinical Pre-flight Checks (Integrity + Logic + WIF)
# Authority: THE OVERWATCH // SG-CANONICAL-2026

set -e

echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "  ⚓ RPR SOVEREIGN: LOCAL VALIDATION SEQUENCE"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

# 1. INTEGRITY LATCH (Smallcaps Mandate)
echo "[1/4] Enforcing Smallcaps Mandate..."
bash scripts/maintenance/safe-smallcaps-latch.sh

# 2. TYPE LOGIC AUDIT
echo "[2/4] Executing Static Type Analysis (tsc)..."
npx tsc --noEmit

# 3. WORKSPACE HYGIENE
echo "[3/4] Purging Build Artifacts (Cleanse)..."
bash scripts/maintenance/sovereign-cleanse.sh

# 4. TELEMETRY PULSE
echo "[4/4] Verifying WIF Handshake..."
bash scripts/devops/wif-diagnostic-strike.sh

echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "  ✅ [SUCCESS] SUBSTRATE VALIDATED."
echo "  Ready for Production Strike."
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"