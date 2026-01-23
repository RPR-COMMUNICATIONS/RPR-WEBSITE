#!/bin/bash
# RPR-KONTROL | SENTINEL MULTI-HARBOR STRIKE (v1.4.0)
# Role: THE COMMANDER
# Purpose: Orchestrates Build-Sync-Deploy across Singapore nodes.
# Authority: TS-Λ3

set -e

echo "🚀 [SENTINEL] INITIATING MULTI-HARBOR STRIKE..."
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

# 1. Sanity Check
if [ ! -f "RPR-REACT-MOTHERSHIP/src/App.tsx" ]; then
    echo "❌ ERROR: Substrate monolith not found."
    exit 1
fi

# 2. Build Layer
echo "🏗️ Transforming Frontend Substrate..."
cd RPR-REACT-MOTHERSHIP
npm run build
cd ..

# 3. Deploy Layer: Mothership (Corporate Site)
echo "🛰️ Deploying Mothership to asia-southeast1..."
firebase deploy --only hosting:corporate-site --project rpr-corporate-site

# 4. Deploy Layer: Labs Gateway (Clinical)
# Note: Deploys the verification engine and governance data
echo "🛰️ Deploying Labs gateway to clinical harbor..."
firebase deploy --only hosting:myaudit --project rpr-myaudit

echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "✅ [SENTINEL] STRIKE SUCCESSFUL: All Harbors Operational."
echo "Access Point: https://rprcomms.com"
echo "Labs Point: https://kontrol.rprcomms.com"
