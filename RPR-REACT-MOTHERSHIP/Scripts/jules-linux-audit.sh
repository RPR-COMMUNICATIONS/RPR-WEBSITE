#!/bin/bash
# TS-Λ3 // JULES LINUX AUDIT [v1.0.0]
# OBJECTIVE: Verify substrate health and purge loop-inducing artifacts.

echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "  INITIATING FORENSIC AUDIT: LINUX WORKSPACE"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

# 1. Pathing & Component Verification
echo "[1/5] Checking component existence..."
if [ -f "src/components/Header.tsx" ]; then
    echo "✅ Header.tsx: FOUND"
    grep "RprMasterLogo" src/components/Header.tsx && echo "   - LATCH: RprMasterLogo component detected."
else
    echo "❌ Header.tsx: MISSING (Critical Substrate Void)"
fi

# 2. Branding Lock Audit (0.15em)
echo "[2/5] Auditing Branding Lock..."
grep "letterSpacing: '0.15em'" src/components/RprMasterLogo.tsx > /dev/null
if [ $? -eq 0 ]; then
    echo "✅ BRANDING: 0.15em LATCHED"
else
    echo "❌ BRANDING: DESYNC DETECTED (Tracking mismatch)"
fi

# 3. Routing & Redirection Check
echo "[3/5] Verifying SPA Rewrites..."
if grep -q '"destination": "/index.html"' firebase.json; then
    echo "✅ FIREBASE: SPA Rewrites Latched"
else
    echo "❌ FIREBASE: Routing Breach (404 risk on deep links)"
fi

# 4. Dependency & Cache Clearance
echo "[4/5] Auditing Cache Artifacts..."
STALE_FILES=$(find . -name "*.tsbuildinfo" -o -name ".DS_Store" | wc -l)
echo "   - Stale Artifact Count: $STALE_FILES"

# 5. Type Integrity Simulation
echo "[5/5] Executing TypeScript dry-run..."
npx tsc --noEmit
if [ $? -eq 0 ]; then
    echo "✅ TYPESCRIPT: 🟢 PASS"
else
    echo "❌ TYPESCRIPT: 🔴 FAIL (Internal Desync)"
fi

echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "  AUDIT COMPLETE: REPORT TO OVERWATCH"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
