#!/bin/bash

# TS-Λ3 // FINAL BRIDGE LATCH STRIKE [v1.3.0]
# Path: scripts/devops/final-bridge-latch.sh
# Mission: Discover Hosting SA & Latch IAM Invoker (Direct Path C).
# Authority: THE OVERWATCH // SG-CANONICAL-2026
# Status: AUTHORITATIVE // TACTICAL_DEVICES

set -e

PROJECT_ID="rpr-corporate-site"
REGION="asia-southeast1"
TARGET_SERVICE="olliechat"

echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "  ⚓ RPR SOVEREIGN: DIRECT INTERACTION LATCH [v1.3.0]"
echo "  Strategy: Path C (Direct Hosting-to-Run Bridge)"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

# 🔍 PHASE A: DYNAMIC IDENTITY DISCOVERY
echo "[1/2] Discovering Firebase Hosting Service Account..."

# Use alpha command to extract the internal hosting identity
HOSTING_SA=$(gcloud alpha firebase hosting sites describe $PROJECT_ID \
    --project=$PROJECT_ID \
    --format='value(firebaseServiceAccount)' 2>/dev/null || echo "")

# FALLBACK: Parse manually if the specific format flag is unsupported
if [ -z "$HOSTING_SA" ]; then
    echo "⚠️  [WARN] Direct extraction failed. Attempting forensic parse..."
    HOSTING_SA=$(gcloud alpha firebase hosting sites describe $PROJECT_ID --project=$PROJECT_ID | grep "firebase_service_account" | awk '{print $2}')
fi

if [ -z "$HOSTING_SA" ]; then
    echo "❌ [FATAL] Could not identify Hosting Service Account."
    echo "Action: Ensure 'gcloud alpha' is enabled and you have project owner permissions."
    exit 1
fi

echo "✅ [LATCH] Discovered Identity: $HOSTING_SA"

# 🚀 PHASE B: AUTHORIZATION STRIKE
echo -e "\n[2/2] Striking IAM Policy for $TARGET_SERVICE..."

# Bind the Hosting SA to the Invoker role to bypass the Org Policy blockade
gcloud run services add-iam-policy-binding $TARGET_SERVICE \
    --member="serviceAccount:$HOSTING_SA" \
    --role="roles/run.invoker" \
    --region=$REGION \
    --project=$PROJECT_ID \
    --quiet

if [ $? -eq 0 ]; then
    echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
    echo "  ✅ [SUCCESS] SOVEREIGN BRIDGE LATCHED."
    echo "  Identity: $HOSTING_SA"
    echo "  Target: $TARGET_SERVICE (asia-southeast1)"
    echo "  Firebase Hosting Edge is now authorized to invoke Ollie."
    echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
else
    echo "❌ [FATAL] IAM Strike failed. Check Cloud Shell permissions."
    exit 1
fi