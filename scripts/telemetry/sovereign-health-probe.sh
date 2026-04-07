#!/bin/bash

# TS-Λ3 // SOVEREIGN HEALTH PROBE [v1.3.3]
# Path: scripts/telemetry/sovereign-health-probe.sh
# Fix: Updated for TypeScript substrate and v7.55.2 epoch.

echo "------------------------------------------------"
echo "🛰️ RPR HEALTH PROBE: HARBOR A [TS-MODE]"
echo "------------------------------------------------"

# 1. VERSION DETECTION (Targeting the TSX Orchestrator)
echo "[PROBE] Verifying Orchestrator Version..."
grep "v7.55.2" src/app.tsx > /dev/null
if [ $? -eq 0 ]; then
    echo "[PASS] app.tsx aligned with v7.55.2."
else
    echo "[FAIL] Version drift detected. Current Orchestrator is NOT v7.55.2."
fi

# 2. MARKER DETECTION
echo "[PROBE] Scanning for React V4 Markers..."
grep -r "SymbolTile" src/components > /dev/null
if [ $? -eq 0 ]; then
    echo "[PASS] Mechanical symbols (SymbolTile) latched."
else
    echo "[FAIL] Symbol substrate missing from components harbor."
fi

# 3. BUILD ARTIFACT CHECK
if [ -d "dist" ]; then
    echo "[PASS] Production build (dist/) exists."
else
    echo "[FAIL] Substrate is uncompiled. Run 'yarn build' before strike."
fi

echo "------------------------------------------------"