#!/bin/bash
# TS-Λ3 | Harbor A Deployment Strike v1.5.0 [Yarn]
# Objective: Authoritative execution for Mothership only.
# Package Manager: Yarn (Homebrew-linked)
# RECTIFIED: Portable ROOT_PATH for Mac Studio (works regardless of folder relocation)

set -euo pipefail

# RECTIFIED FOR MAC STUDIO: Portable path calculation (script in scripts/deploy/)
SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
ROOT_PATH="$( cd "$SCRIPT_DIR/../.." && pwd )"
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
if [ -f "$SCRIPT_DIR/latch-targets.sh" ]; then
    chmod +x "$SCRIPT_DIR/latch-targets.sh"
    "$SCRIPT_DIR/latch-targets.sh"
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