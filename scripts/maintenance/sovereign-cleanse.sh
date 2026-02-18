#!/bin/bash
# TS-Λ3 | SOVEREIGN CLEANSE [v1.3.0]
# OBJECTIVE: Comprehensive Health Check & Phase 5 Antigravity Cleanup
# PATH: /Users/puvansivanasan/PERPLEXITY-NEW/JOBS/2026-001-RPR-WEBSITE/scripts/sovereign-cleanse.sh

echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "  INITIATING HARBOR A CLEANSE & VERIFY (PHASE 5)"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

# 1. VERIFY GIT STATE
echo "[1/6] Checking Git substrate integrity..."
git status -s
echo "Recent commits:"
git log --oneline -3

# 2. VERIFY TYPESCRIPT (The Gate)
echo ""
echo "[2/6] Executing TypeScript integrity check..."
npx tsc --noEmit
TS_EXIT_CODE=$?

if [ $TS_EXIT_CODE -eq 0 ]; then
    echo "✅ [SENTINEL] Type environment stable."
else
    echo "❌ [SENTINEL] Type errors detected. Cleanup proceeding with caution."
fi

# 3. VERIFY BUILD
echo ""
echo "[3/6] Running production build verification..."
npm run build
BUILD_EXIT_CODE=$?

# 4. CLEAN WORKSPACE
echo ""
echo "[4/6] Liquidating build artifacts and engine cache..."
rm -rf dist
rm -rf .vite
rm -rf .firebase
echo "✓ Cache purged."

# 5. REMOVE TELEMETRY & METADATA
echo "[5/6] Cleaning build telemetry and system metadata..."
find . -name "*.tsbuildinfo" -type f -delete
find . -name ".DS_Store" -type f -delete
echo "✓ Metadata liquidated."

# 6. SUMMARY
echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "  CLEANUP SUMMARY"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

if [ $TS_EXIT_CODE -eq 0 ]; then
    echo "  TYPESCRIPT : 🟢 PASS"
else
    echo "  TYPESCRIPT : 🔴 FAIL"
fi

if [ $BUILD_EXIT_CODE -eq 0 ]; then
    echo "  BUILD      : 🟢 SUCCESS"
else
    echo "  BUILD      : 🔴 FAILED"
fi

echo "  WORKSPACE  : 🟢 SANITIZED"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

exit 0