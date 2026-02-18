#!/bin/bash
# RPR-KONTROL | SOVEREIGN SEEDING STRIKE (v1.3.3)
# Role: THE ENGINEER
# Purpose: Path-invariant anchoring of clinical data artifacts.
# Authority: TS-Λ3 (CROWN SECRET)

set -e

# 1. Capture Authoritative Script Directory (Absolute)
# This prevents the "Cannot find module" error when pivoting paths.
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
SEED_TS="$SCRIPT_DIR/sovereign-seed.ts"
PROBE_TS="$SCRIPT_DIR/sovereign-telemetry-check.ts"

# 2. Canonical Clinical Path
CLINICAL_PATH="/Users/puvansivanasan/PERPLEXITY-NEW/JOBS/2026-002-MYAUDIT"

echo "🛡️ [SENTINEL] INITIATING SEEDING STRIKE (v1.3.3)..."

# 3. Path Verification
if [ ! -f "$SEED_TS" ]; then
    echo "❌ ERROR: Seeding substrate missing at $SEED_TS"
    exit 1
fi

if [ ! -d "$CLINICAL_PATH" ]; then
    echo "❌ ERROR: Clinical directory missing at $CLINICAL_PATH"
    exit 1
fi

# 4. Context Shift & Execution
echo "🚀 PIVOTING: Context moved to $CLINICAL_PATH"
cd "$CLINICAL_PATH"

echo "📦 Executing Seeding Substrate..."
# Use absolute path to the TS file to bypass directory drift
npx ts-node "$SEED_TS"

echo "🔍 Executing Telemetry Probe..."
npx ts-node "$PROBE_TS"

echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "🏁 [SENTINEL] STRIKE COMPLETE. Clinical Harbor is Operational."