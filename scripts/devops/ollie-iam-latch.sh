#!/bin/bash
# TS-Λ3 // OLLIE IAM REPAIR STRIKE [v1.0.1]
# Path: scripts/devops/ollie-iam-latch.sh
# Mission: Liquidate 403 Forbidden by forcing Public Invoker with explicit scoping.
# Authority: THE OVERWATCH // SG-CANONICAL-2026

PROJECT_ID="rpr-corporate-site"
SERVICE_NAME="olliechat" 
REGION="asia-southeast1"

echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "  INITIATING OLLIE IAM REPAIR: $SERVICE_NAME"
echo "  Target Project: $PROJECT_ID"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

# 1. Verification with Explicit Scoping
echo "[1/2] Verifying Cloud Run service residency..."
SERVICE_URL=$(gcloud run services describe $SERVICE_NAME \
  --platform managed \
  --region $REGION \
  --project $PROJECT_ID \
  --format="value(status.address.url)" 2>/dev/null)

if [ -z "$SERVICE_URL" ]; then
    echo "❌ [FAIL] Service '$SERVICE_NAME' not found in $REGION for project $PROJECT_ID."
    echo "Check if you have the correct permissions or if the name is correct in 'gcloud run services list'."
    exit 1
fi
echo "✅ Service detected at: $SERVICE_URL"

# 2. IAM Latch with Explicit Scoping
echo -e "\n[2/2] Forcing allUsers run.invoker policy..."
gcloud run services add-iam-policy-binding $SERVICE_NAME \
  --member="allUsers" \
  --role="roles/run.invoker" \
  --region=$REGION \
  --project=$PROJECT_ID \
  --quiet

if [ $? -eq 0 ]; then
    echo "✅ [SUCCESS] Public access LATCHED. 403 error should be liquidated."
else
    echo "❌ [FAIL] IAM binding failed. Check Organizational Policy constraints (iam.allowedPolicyMemberDomains)."
    exit 1
fi

echo -e "\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "  REPAIR COMPLETE: OLLIE BRIDGE IS OPEN"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"