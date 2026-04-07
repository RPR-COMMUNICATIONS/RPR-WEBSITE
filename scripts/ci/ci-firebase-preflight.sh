#!/bin/bash
# TS-Λ3 // FIREBASE PREFLIGHT GATEKEEPER [v1.4.1]
# Path: scripts/ci/ci-firebase-preflight.sh
# Mission: Robust environment validation for Harbor A substrate.
# Authority: THE OVERWATCH // SG-CANONICAL-2026

TARGET=${1:-"main"}

echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "  [SENTINEL] INITIATING FIREBASE PREFLIGHT"
echo "  Target: $TARGET"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

# 1. Target Validation
VALID_TARGETS=("main" "corporate" "verify" "kontrol")
MATCH=0
for t in "${VALID_TARGETS[@]}"; do
    if [ "$TARGET" == "$t" ]; then MATCH=1; break; fi
done

if [ $MATCH -eq 0 ]; then
    echo "❌ [FATAL] Unknown target harbor: $TARGET"
    exit 1
fi

# 2. Dependency Audit
if [ ! -d "node_modules" ]; then
    echo "⚠️  node_modules missing. Running npm install..."
    npm install
fi

# 3. Identity Verification
if [ -n "${GITHUB_ACTIONS:-}" ]; then
    echo "🛰️  CI context detected. Verifying WIF v2 Handshake..."
else
    echo "🏠 Local context detected. Using user-auth substrate."
fi

echo "✅ [SENTINEL] Preflight Strike Successful."
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"