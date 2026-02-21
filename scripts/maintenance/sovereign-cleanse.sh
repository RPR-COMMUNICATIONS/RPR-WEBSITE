#!/bin/bash
# TS-Λ3 // SOVEREIGN SUBSTRATE CLEANSE [v1.5.0]
# Path: scripts/maintenance/sovereign-cleanse.sh
# Mission: Health Check & Artifact Liquidation

echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "  INITIATING HARBOR A CLEANSE & VERIFY (v1.5.0)"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

# 1. VERIFY TYPESCRIPT
echo "[1/4] Executing TypeScript integrity check..."
npx tsc --noEmit
TS_EXIT_CODE=$?

# 2. LIQUIDATE ARTIFACTS
echo "[2/4] Purging build artifacts and engine cache..."
rm -rf dist dist-kontrol .vite .firebase/hosting.*.cache
echo "✓ Artifacts liquidated."

# 3. META-CLEANUP
echo "[3/4] Cleaning build telemetry and system metadata..."
find . -name "*.tsbuildinfo" -type f -delete
find . -name ".DS_Store" -type f -delete
echo "✓ Metadata cleansed."

# 4. SUMMARY
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
if [ $TS_EXIT_CODE -eq 0 ]; then
    echo "  TYPESCRIPT : 🟢 PASS"
else
    echo "  TYPESCRIPT : 🔴 FAIL (Errors detected)"
fi
echo "  WORKSPACE  : 🟢 SANITIZED"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"