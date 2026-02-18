#!/bin/bash
# TS-Λ3 // FIREBASE PREFLIGHT GATEKEEPER [v1.3.1]
# OBJECTIVE: Robust environment validation for KONTROL substrate.
# PATH: /Users/puvansivanasan/PERPLEXITY-NEW/JOBS/2026-003-RPR-KONTROL-MASTER/scripts/ci-firebase-preflight.sh

TARGET=$1

echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "  [SENTINEL_TRACE] RPR-KONTROL | Firebase Preflight Protocol"
echo "  [SENTINEL_TRACE] Target: $TARGET"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

# 1. Authoritative Target Whitelisting
# -----------------------------------------------------------------------------
echo "[INFO] Validating target against KONTROL governance manifest..."

# Added 'kontrol' as primary target for this substrate
VALID_TARGETS=("main" "corporate" "verify" "kontrol")
MATCH=0

for t in "${VALID_TARGETS[@]}"; do
    if [ "$TARGET" == "$t" ]; then
        MATCH=1
        break
    fi
done

if [ $MATCH -eq 0 ]; then
    echo "🔴 [SENTINEL_ERROR] [FAIL] Unknown target harbor: $TARGET"
    echo "    Expected: [${VALID_TARGETS[*]}]"
    echo "[🔴] Gatekeeper Breach: Identity verification failed."
    exit 1
fi

echo "✅ [SENTINEL_ACK] Target '$TARGET' whitelisted."

# 2. Dependency Substrate Audit
# -----------------------------------------------------------------------------
echo "[INFO] Auditing local dependency substrate..."

if [ ! -d "node_modules" ]; then
    echo "⚠️  [SENTINEL_WARN] node_modules not detected. Initiating substrate recovery..."
    npm install
fi

# Check for Vite binary (Required for KONTROL Dashboard)
if ! npx vite --version > /dev/null 2>&1; then
    echo "🔴 [SENTINEL_ERROR] Vite binary not found in substrate."
    echo "    Action required: Execute 'npm install' in project root."
    exit 1
fi

# 3. Workload Identity & Secret Verification
# -----------------------------------------------------------------------------
echo "[INFO] Checking authentication vectors..."

if [ -f "gha-creds-*.json" ] || [ -n "$GOOGLE_APPLICATION_CREDENTIALS" ]; then
    echo "✅ [SENTINEL_ACK] WIF v2 / Keyed credentials detected."
else
    echo "ℹ️  [SENTINEL_TRACE] No local keys. Proceeding with Keyless/User-Auth strike."
fi

# 4. Functional Build Verification Gate
# -----------------------------------------------------------------------------
echo "[INFO] Initiating functional verification build strike..."

# Run build to ensure Dashboard can compile
npm run build

if [ $? -eq 0 ]; then
    echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
    echo "✅ [SENTINEL_SUCCESS] Preflight complete: Ready for Strike"
    echo "  - Substrate: KONTROL Dashboard (Stable)"
    echo "  - Build: Validated"
    echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
    exit 0
else
    echo "🔴 [SENTINEL_ERROR] KONTROL Substrate build failure. Strike aborted."
    exit 1
fi