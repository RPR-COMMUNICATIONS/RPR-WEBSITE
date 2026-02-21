#!/bin/bash

# TS-Λ3 // IP LEDGER DEPLOYMENT STRIKE [v1.6.0]
# Path: scripts/ip-ledger-strike.sh
# Mission: Build, Preflight, and Deploy IP Surface to Harbor A.
# Authority: THE OVERWATCH // SG-CANONICAL-2026
# Package Manager: Yarn (Mac Studio Linked)

set -euo pipefail

# 🧬 PORTABLE PATH LATCH
# Works regardless of folder relocation on Mac Studio or CI Runner
SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
ROOT_PATH="$( cd "$SCRIPT_DIR/../.." && pwd )"
cd "$ROOT_PATH"

# 🧬 SENTINEL LEDGER ENFORCEMENT PROTOCOL (v1.0.0)
# 1. READ-ONLY USAGE: Row modification or deletion is strictly prohibited.
# 2. PATH LOCK: /reports/ip-ledger-deployment-log.csv
# 3. FAIL-SAFE: SPEC_INCOMPLETE if ledger is unavailable.
LEDGER_PATH="reports/ip-ledger-deployment-log.csv"
JOB_ID="JOB-2026-022" # Sequence successor to Migration Strike

echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "  INITIATING HARBOR A DEPLOYMENT STRIKE: $JOB_ID"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

# 🛡️ 1. LEDGER PREFLIGHT
if [ ! -f "$LEDGER_PATH" ]; then
    echo "[FATAL] SPEC_INCOMPLETE – LEDGER_UNAVAILABLE at $LEDGER_PATH"
    exit 1
fi

# 🧪 2. AUDIT HOOK (Zero-Drift Check)
if grep -q "$JOB_ID.*SUCCESS" "$LEDGER_PATH"; then
    echo "[SENTINEL] Job $JOB_ID already successfully latched. Aborting duplicate strike."
    exit 0
fi

# 🛠️ 3. SUBSTRATE PREPARATION
if [ ! -d "node_modules" ]; then
    echo "[INFO] node_modules missing. Running yarn install..."
    yarn install
fi

echo "[INFO] Building Mothership substrate (Enforcing Smallcaps)..."
yarn build

# 🏗️ 4. TARGET LATCHING
if [ -f "$SCRIPT_DIR/latch-targets.sh" ]; then
    chmod +x "$SCRIPT_DIR/latch-targets.sh"
    "$SCRIPT_DIR/latch-targets.sh"
fi

# 🚀 5. SOVEREIGN DEPLOYMENT (Singapore Only)
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "  DEPLOYING TO SINGAPORE (asia-southeast1)"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

if npx firebase-tools deploy --only hosting:main --project rpr-corporate-site; then
    # 📝 6. LEDGER APPEND (Mandatory Action)
    TIMESTAMP=$(date -u +'%Y-%m-%dT%H:%M:%SZ')
    MISSION="PRODUCTION_STRIKE"
    STACK="Gemini-Elder"
    FILES="scripts/ip-ledger-strike.sh"
    
    echo "$TIMESTAMP,$JOB_ID,$MISSION,$STACK,$FILES,SUCCESS" >> "$LEDGER_PATH"
    
    echo ""
    echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
    echo "  ✅ DEPLOYMENT COMPLETE: HARBOR A MOTHERSHIP LATCHED"
    echo "  LEDGER UPDATED: $JOB_ID"
    echo "  URL: https://rprcomms.com"
    echo "  TIMESTAMP: $TIMESTAMP"
    echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
else
    echo "[FATAL] Deployment failed at the Firebase gate."
    exit 1
fi