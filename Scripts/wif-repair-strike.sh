#!/bin/bash
# TS-Λ3 | WIF Repair Strike v1.0.3
# Objective: Instantiate Identity Substrate with Explicit Claims
# Authority: SENTINEL PROTOCOL v1.1.0
# Target: rpr-corporate-site (859831078276)

set -euo pipefail

# --- CONFIGURATION ---
PROJECT_ID="rpr-corporate-site"
PROJECT_NUMBER="859831078276"
POOL_ID="github-pool"
PROVIDER_ID="github-provider"
SERVICE_ACCOUNT="github-actions-deployer@rpr-corporate-site.iam.gserviceaccount.com"
REPO="PRP-COMMUNICATIONS-LLC/RPR-WEBSITE"

echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "  INITIATING WIF REPAIR STRIKE: $PROJECT_ID"
echo "  STRATEGY: Authoritative Handshake Restoration"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

# 1. Authority Verification
echo "[1/4] Verifying gcloud context..."
CURRENT_PROJECT=$(gcloud config get-value project 2>/dev/null)
if [ "$CURRENT_PROJECT" != "$PROJECT_ID" ]; then
    echo "⚠️  Switching project context to $PROJECT_ID..."
    gcloud config set project "$PROJECT_ID" --quiet
fi
echo "✅ Context LATCHED: $PROJECT_ID"

# 2. Workload Identity Pool
echo -e "\n[2/4] Ensuring Workload Identity Pool..."
if gcloud iam workload-identity-pools describe "$POOL_ID" --location="global" --project="$PROJECT_ID" &>/dev/null; then
    echo "✓ Pool '$POOL_ID' already exists. Skipping creation."
else
    gcloud iam workload-identity-pools create "$POOL_ID" \
      --project="$PROJECT_ID" \
      --location="global" \
      --display-name="GitHub Actions Pool"
    echo "✅ Pool '$POOL_ID' instantiated."
fi

# 3. OIDC Provider with Explicit Condition
echo -e "\n[3/4] Ensuring OIDC Provider & Repository Mapping..."
# Logic: We use 'create' but allow failure to attempt 'update' if configuration drift is detected.
if ! gcloud iam workload-identity-pools providers describe "$PROVIDER_ID" \
    --workload-identity-pool="$POOL_ID" \
    --location="global" \
    --project="$PROJECT_ID" &>/dev/null; then
    
    gcloud iam workload-identity-pools providers create-oidc "$PROVIDER_ID" \
      --project="$PROJECT_ID" \
      --location="global" \
      --workload-identity-pool="$POOL_ID" \
      --display-name="GitHub Actions Provider" \
      --attribute-mapping="google.subject=assertion.sub,attribute.actor=assertion.actor,attribute.repository=assertion.repository" \
      --attribute-condition="assertion.repository == '$REPO'" \
      --issuer-uri="https://token.actions.githubusercontent.com"
    echo "✅ Provider '$PROVIDER_ID' instantiated with repository locks."
else
    echo "⚠️  Provider exists. Updating attribute condition to enforce repository lock..."
    gcloud iam workload-identity-pools providers update-oidc "$PROVIDER_ID" \
      --project="$PROJECT_ID" \
      --location="global" \
      --workload-identity-pool="$POOL_ID" \
      --attribute-condition="assertion.repository == '$REPO'"
    echo "✅ Provider configuration verified and locked."
fi

# 4. IAM Policy Binding
echo -e "\n[4/4] Updating IAM Policy Bindings for Service Account..."
gcloud iam service-accounts add-iam-policy-binding "$SERVICE_ACCOUNT" \
  --project="$PROJECT_ID" \
  --role="roles/iam.workloadIdentityUser" \
  --member="principalSet://iam.googleapis.com/projects/$PROJECT_NUMBER/locations/global/workloadIdentityPools/$POOL_ID/attribute.repository/$REPO"
echo "✅ IAM Binding LATCHED for $REPO."

echo -e "\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "  REPAIR COMPLETE: IDENTITY HANDSHAKE RESTORED"
echo "  Final Step: Execute ./Scripts/wif-diagnostic-strike.sh"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"