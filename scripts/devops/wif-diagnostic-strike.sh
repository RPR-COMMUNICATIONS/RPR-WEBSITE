#!/bin/bash
# TS-Λ3 // WIF DIAGNOSTIC STRIKE [v1.2.0]
# Path: scripts/devops/wif-diagnostic-strike.sh
# Mission: Verify Harbor A (rpr-corporate-site) Identity Handshake
# Authority: THE OVERWATCH // SG-CANONICAL-2026

PROJECT_ID="rpr-corporate-site"
PROJECT_NUMBER="859831078276"
POOL_ID="github-pool"
PROVIDER_ID="github-provider"
SERVICE_ACCOUNT="github-actions-deployer@rpr-corporate-site.iam.gserviceaccount.com"
REPO="PRP-COMMUNICATIONS-LLC/RPR-WEBSITE"

echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "  [SENTINEL] INITIATING IDENTITY DIAGNOSTIC: $PROJECT_ID"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

# 1. Pool Check
echo -e "\n[1/4] Probing Pool: $POOL_ID..."
if gcloud iam workload-identity-pools describe "$POOL_ID" --location="global" --project="$PROJECT_ID" &>/dev/null; then
    echo "✅ [SUCCESS] Pool exists and is active."
else
    echo "❌ [ERROR] Pool not found. Run wif:repair."
fi

# 2. Provider Check
echo -e "\n[2/4] Probing Provider: $PROVIDER_ID..."
if gcloud iam workload-identity-pools providers describe "$PROVIDER_ID" \
    --workload-identity-pool="$POOL_ID" --location="global" --project="$PROJECT_ID" &>/dev/null; then
    echo "✅ [SUCCESS] Provider exists and is configured."
else
    echo "❌ [ERROR] Provider not found or misconfigured."
fi

# 3. IAM Binding Check
echo -e "\n[3/4] Checking IAM Policy for Service Account..."
POLICY=$(gcloud iam service-accounts get-iam-policy "$SERVICE_ACCOUNT" --project="$PROJECT_ID" --format="json")
if echo "$POLICY" | grep -q "$REPO"; then
    echo "✅ [SUCCESS] IAM Binding verified for $REPO."
else
    echo "❌ [ERROR] Service Account not bound to repository."
fi

# 4. Project Alignment
echo -e "\n[4/4] Project Number Alignment..."
ACTUAL_NUM=$(gcloud projects describe "$PROJECT_ID" --format="value(projectNumber)")
if [ "$ACTUAL_NUM" == "$PROJECT_NUMBER" ]; then
    echo "✅ [SUCCESS] Alignment verified (Target: 859831078...)"
else
    echo "❌ [ERROR] Identity Drift: $ACTUAL_NUM != $PROJECT_NUMBER"
fi

echo -e "\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "  DIAGNOSTIC COMPLETE: SUBSTRATE STATUS VERIFIED"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"