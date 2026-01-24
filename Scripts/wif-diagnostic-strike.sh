#!/bin/bash
# TS-Λ3 | WIF Diagnostic Strike v1.1.2
# Objective: Verify Harbor B (rpr-corporate-site) Identity Handshake
# Authority: SENTINEL-v1.4.12

PROJECT_ID="rpr-corporate-site"
PROJECT_NUMBER="859831078276"
POOL_ID="github-pool"
PROVIDER_ID="github-provider"
SERVICE_ACCOUNT="github-actions-deployer@rpr-corporate-site.iam.gserviceaccount.com"
REPO="PRP-COMMUNICATIONS-LLC/RPR-WEBSITE"

echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "  INITIATING IDENTITY DIAGNOSTIC: $PROJECT_ID"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

gcloud config set project $PROJECT_ID --quiet

# 1. Pool Check
echo -e "\n[1/4] Checking Pool: $POOL_ID..."
if gcloud iam workload-identity-pools describe "$POOL_ID" --location="global" &>/dev/null; then
    echo "✅ Pool exists."
else
    echo "❌ ERROR: Pool not found."
fi

# 2. Provider Check
echo -e "\n[2/4] Checking Provider: $PROVIDER_ID..."
if gcloud iam workload-identity-pools providers describe "$PROVIDER_ID" \
    --workload-identity-pool="$POOL_ID" --location="global" &>/dev/null; then
    echo "✅ Provider exists."
else
    echo "❌ ERROR: Provider not found or misconfigured."
fi

# 3. IAM Binding Check
echo -e "\n[3/4] Checking IAM Policy..."
POLICY=$(gcloud iam service-accounts get-iam-policy "$SERVICE_ACCOUNT" --format="json")
if echo "$POLICY" | grep -q "$REPO"; then
    echo "✅ IAM Binding verified for $REPO."
else
    echo "❌ ERROR: Service Account not bound to repository."
fi

# 4. Project Alignment
echo -e "\n[4/4] Project Number Alignment..."
ACTUAL=$(gcloud projects describe $PROJECT_ID --format="value(projectNumber)")
if [ "$ACTUAL" == "$PROJECT_NUMBER" ]; then
    echo "✅ Alignment verified (859831078276)."
else
    echo "❌ ERROR: Project number mismatch."
fi

echo -e "\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "  DIAGNOSTIC COMPLETE"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"