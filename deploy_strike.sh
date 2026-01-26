#!/bin/bash
# TS-Λ3 | Harbor A Deployment Strike v1.4.0 [Yarn]
# Objective: Authoritative execution for Mothership only.
# Package Manager: Yarn (Homebrew-linked)

set -euo pipefail

ROOT_PATH="/Users/puvansivanasan/PERPLEXITY-NEW/JOBS/2026-001-RPR-WEBSITE"
cd "$ROOT_PATH"

echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "  INITIATING HARBOR A DEPLOYMENT STRIKE"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

# 1. Dependency Check
if [ ! -d "node_modules" ]; then
    echo "[INFO] node_modules missing. Running yarn install..."
    yarn install
fi

# 2. Production Build
echo "[INFO] Building Mothership substrate..."
yarn build

# 3. Target Latching (Safety check)
if [ -f "Scripts/latch-targets.sh" ]; then
    chmod +x Scripts/latch-targets.sh
    ./Scripts/latch-targets.sh
fi

# 4. Deployment Strike (Singapore Only)
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "  DEPLOYING TO SINGAPORE (asia-southeast1)"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
npx firebase-tools deploy --only hosting:main --project rpr-corporate-site

echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "  ✅ DEPLOYMENT COMPLETE: HARBOR A MOTHERSHIP LATCHED"
echo "  URL: https://rprcomms.com"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"