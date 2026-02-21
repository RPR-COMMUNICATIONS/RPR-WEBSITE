#!/bin/bash

# TS-Λ3 // SOVEREIGN HEALTH PROBE [v1.3.2]
# Path: scripts/telemetry/sovereign-health-probe.sh
# Mission: Era 2026 React V4 marker detection and grid lock verification.
# Authority: THE OVERWATCH // SG-CANONICAL-2026

echo "------------------------------------------------"
echo "🛰️ RPR HEALTH PROBE: HARBOR A"
echo "------------------------------------------------"

# 1. VERSION DETECTION
echo "[PROBE] Verifying Orchestrator Version..."
grep "v13.5.0" src/App.jsx > /dev/null
if [ $? -eq 0 ]; then
    echo "[PASS] App.jsx aligned with v13.5.0."
else
    echo "[FAIL] Version drift detected in master orchestrator."
fi

# 2. MARKER DETECTION
echo "[PROBE] Scanning for React V4 Markers..."
grep -r "SymbolTile" src/components > /dev/null
if [ $? -eq 0 ]; then
    echo "[PASS] Mechanical symbols latched."
else
    echo "[FAIL] Symbol substrate missing."
fi

# 3. BUILD ARTIFACT CHECK
if [ -d "dist" ]; then
    echo "[PASS] Production build exists."
else
    echo "[FAIL] Substrate is uncompiled."
fi

echo "------------------------------------------------"