#!/bin/bash

# TS-Λ3 // CANONICAL PRODUCTION STRIKE [v3.0.1]
# Path: strike.sh
# Mission: Mobile Gutter & Babble Standard Latch
# Authority: THE OVERWATCH // SG-CANONICAL-2026
# Environment: Mac Studio // Yarn Substrate

set -euo pipefail

# 🧬 PORTABLE PATH LATCH
# Ensures script execution is context-aware regardless of parent directory.
SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
cd "$SCRIPT_DIR"

# 🧬 SENTINEL LEDGER ENFORCEMENT PROTOCOL (v1.0.0)
LEDGER_PATH="reports/ip-ledger-deployment-log.csv"
JOB_ID="JOB-2026-024" # Mobile Gutter & Babble Standard Latch

echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "  INITIATING HARBOR A PRODUCTION STRIKE: $JOB_ID"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

# 🛡️ 1. LEDGER PREFLIGHT
# Verification of WORM ledger availability.
if [ ! -f "$LEDGER_PATH" ]; then
    echo "❌ [FATAL] SPEC_INCOMPLETE – LEDGER_UNAVAILABLE at $LEDGER_PATH"
    exit 1
fi

# 🧪 2. AUDIT HOOK (Zero-Drift Check)
# Prevents duplicate deployment strikes for the same Job ID.
if grep -q "$JOB_ID.*SUCCESS" "$LEDGER_PATH"; then
    echo "⚠️  [SENTINEL] Job $JOB_ID already successfully latched. Aborting duplicate strike."
    exit 0
fi

# 🛠️ 3. SUBSTRATE VERIFICATION
echo "[1/4] Verifying Substrate Hygiene..."
# Enforce Smallcaps Mandate to prevent casing drift in Singapore Edge.
if [ -f "scripts/maintenance/safe-smallcaps-latch.sh" ]; then
    bash scripts/maintenance/safe-smallcaps-latch.sh
else
    echo "⚠️  [WARN] smallcaps-latch missing. Proceeding with caution."
fi

# 📦 4. BUILD SEQUENCE
echo "[2/4] Executing Production Build (Yarn)..."
if [ ! -d "node_modules" ]; then
    echo "[INFO] node_modules missing. Synchronizing..."
    yarn install
fi

yarn build

# 🚀 5. SOVEREIGN DEPLOYMENT
echo "[3/4] Striking Harbor A (asia-southeast1)..."
# Point-locked to rpr-corporate-site for main hosting target.
if npx firebase-tools deploy --only hosting:main --project rpr-corporate-site -m "Production Strike // $JOB_ID"; then
    
    # 📝 6. LEDGER APPEND (Mandatory Forensic Action)
    echo "[4/4] Finalizing Forensic Latch..."
    TIMESTAMP=$(date -u +'%Y-%m-%dT%H:%M:%SZ')
    MISSION="MOBILE_GUTTER_BABBLE_LATCH_v3.0.1"
    STACK="Gemini-Elder"
    FILES="strike.sh;app.tsx;home.tsx;mothershipsection.tsx;babblestandard.tsx"
    
    # Append record to WORM ledger
    echo "$TIMESTAMP,$JOB_ID,$MISSION,$STACK,$FILES,SUCCESS" >> "$LEDGER_PATH"
    
    echo ""
    echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
    echo "  ✅ DEPLOYMENT COMPLETE: HARBOR A LIVE"
    echo "  LEDGER UPDATED: $JOB_ID"
    echo "  URL: https://rprcomms.com"
    echo "  TIMESTAMP: $TIMESTAMP"
    echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
else
    echo "❌ [FATAL] Deployment failed at the Firebase gate."
    exit 1
fi