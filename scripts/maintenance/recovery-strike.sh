#!/bin/bash
# TS-Λ3 // MODULE RESOLUTION RECOVERY STRIKE [v1.0.0]
# OBJECTIVE: Liquidate stale locks and reinstall dependency substrate.
# PATH: scripts/maintenance/module-recovery-strike.sh
# Authority: THE OVERWATCH // SG-CANONICAL-2026

echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "  INITIATING RECOVERY STRIKE: SUBSTRATE SYNCHRONIZATION"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

# 1. Liquidate Local Artifacts
echo "[1/3] Purging node_modules and package-lock.json..."
rm -rf node_modules package-lock.json
rm -rf .vite
rm -rf .firebase
echo "✓ Stale artifacts liquidated."

# 2. Re-install Dependency Substrate
echo "[2/3] Re-installing dependencies (Firebase/Lucide/React)..."
npm install

# 3. Verify Type Integrity
echo "[3/3] Executing diagnostic type check..."
npx tsc --noEmit
TS_EXIT_CODE=$?

echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "  RECOVERY STRIKE SUMMARY"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
if [ $TS_EXIT_CODE -eq 0 ]; then
    echo "  TYPESCRIPT : 🟢 PASS (0 Errors)"
    echo "  SUBSTRATE  : 🟢 SYNCHRONIZED"
else
    echo "  TYPESCRIPT : 🔴 FAIL (Errors Detected)"
    echo "  SUBSTRATE  : 🟠 DESYNCED"
fi
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

exit $TS_EXIT_CODE