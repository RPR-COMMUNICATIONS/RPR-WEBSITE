#!/bin/bash
# /Users/puvansivanasan/PERPLEXITY-NEW/JOBS/2026-001-RPR-WEBSITE/RPR-REACT-MOTHERSHIP/deploy_strike.sh
# Purpose: Authoritative local execution for rpr-corporate-site.
# Standard: Keyless ADC | Region: Singapore (asia-southeast1)

set -euo pipefail

# 1. Path Alignment
ROOT_PATH="/Users/puvansivanasan/PERPLEXITY-NEW/JOBS/2026-001-RPR-WEBSITE/RPR-REACT-MOTHERSHIP"
cd "$ROOT_PATH"

echo "--- INITIATING HARBOR B DEPLOYMENT ---"

# 2. Inject Environment Variables (GitHub secrets + WIF)
if [ -f "Scripts/configure-secrets.js" ]; then
    echo "[INFO] Injecting environment variables..."
    node Scripts/configure-secrets.js
fi

# 3. Execute Pre-Deployment Functional Verification
if [ -f "Scripts/ci-firebase-preflight.sh" ]; then
    chmod +x Scripts/ci-firebase-preflight.sh
    ./Scripts/ci-firebase-preflight.sh corporate
else
    echo "❌ ERROR: Scripts/ci-firebase-preflight.sh not found."
    exit 1
fi

# 4. Production Build
echo "[INFO] Commencing build..."
npm run build

# 5. Apply Hosting Targets
# Mapping: corporate -> rpr-corporate-site, verify -> rpr-verify-b
echo "[INFO] Latching hosting targets..."
firebase target:apply hosting corporate rpr-corporate-site --project rpr-corporate-site
firebase target:apply hosting verify rpr-verify-b --project rpr-corporate-site

# 6. Execute Hosting Deployment
echo "--- DEPLOYING TO SINGAPORE (asia-southeast1) ---"
firebase deploy --only hosting:corporate,hosting:verify --project rpr-corporate-site

echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "DEPLOYMENT COMPLETE: HARBOR B LATCHED"
echo "Mothership: https://rprcomms.com"
echo "Verify Node: https://verify.rprcomms.com"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"