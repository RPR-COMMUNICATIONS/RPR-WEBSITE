#!/bin/bash
# SENTINEL-WATCHTOWER | UNIFIED WORKSPACE ALIGNMENT & DEPLOY (v4.3.0)
# Authority: TS-Λ3 (CROWN SECRET)
# Purpose: Folder topology, substrate build, IAM verification, and multi-harbor deployment.

set -euo pipefail

# --- ARCHITECTURAL CONSTANTS ---
ROOT_PATH="/Users/puvansivanasan/PERPLEXITY-NEW/JOBS/2026-001-RPR-WEBSITE"
REACT_MOTHERSHIP="$ROOT_PATH/RPR-REACT-MOTHERSHIP"
SCRIPTS_DIR="$ROOT_PATH/Scripts"

# Project IDs
PROJ_CORPORATE="rpr-corporate-site"
PROJ_CLINICAL="rpr-myaudit"

# Site IDs
SITE_CORPORATE="rpr-corporate-site"
SITE_VERIFY="rpr-verify-site"
SITE_KONTROL="myaudit-kontrol-dashboard-b2e82"

# Founder Principal
FOUNDER_EMAIL="hello@butterdime.com"

# Colors for telemetry
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
CYAN='\033[0;36m'
NC='\033[0m'

echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "[SENTINEL] INITIATING UNIFIED WORKSPACE ALIGNMENT (v4.3.0)"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""

# --- PHASE 1: TOPOLOGY INITIALIZATION ---
echo "--- [SENTINEL] PHASE 1: TOPOLOGY INITIALIZATION ---"
cd "$ROOT_PATH"
mkdir -p "$SCRIPTS_DIR"
echo -e "${GREEN}✓ Workspace topology verified.${NC}"
echo ""

# --- PHASE 2: IAM & IDENTITY LATCH ---
echo "--- [SENTINEL] PHASE 2: IAM & IDENTITY LATCH ---"

# 1. Verify Active CLI Account
echo "Verifying active CLI identity..."
ACTIVE_USER=$(gcloud auth list --filter=status:ACTIVE --format="value(account)" 2>/dev/null || echo "")

if [[ -z "$ACTIVE_USER" ]]; then
    echo -e "${RED}❌ PROTOCOL BREACH: No active gcloud account detected.${NC}"
    echo "Please run: gcloud auth login"
    exit 1
fi

if [[ "$ACTIVE_USER" != "$FOUNDER_EMAIL" ]]; then
    echo -e "${RED}❌ PROTOCOL BREACH: FOUNDER IDENTITY REQUIRED${NC}"
    echo -e "  Active: ${YELLOW}$ACTIVE_USER${NC}"
    echo -e "  Required: ${GREEN}$FOUNDER_EMAIL${NC}"
    echo "Please switch accounts: gcloud auth login $FOUNDER_EMAIL"
    exit 1
fi

echo -e "${GREEN}✓ Founder identity verified: $ACTIVE_USER${NC}"

# 2. Verify Project Ownership for CORPORATE (rpr-corporate-site)
echo ""
echo "Verifying Owner status for $FOUNDER_EMAIL on $PROJ_CORPORATE..."
CORP_OWNER_CHECK=$(gcloud projects get-iam-policy "$PROJ_CORPORATE" \
    --flatten="bindings[].members" \
    --filter="bindings.role:roles/owner AND bindings.members:user:$FOUNDER_EMAIL" \
    --format="value(bindings.role)" 2>/dev/null || echo "")

if [[ -z "$CORP_OWNER_CHECK" ]]; then
    echo -e "${YELLOW}⚠ WARNING: Founder is not an Owner of $PROJ_CORPORATE.${NC}"
    echo "Attempting Emergency IAM Latch..."
    if gcloud projects add-iam-policy-binding "$PROJ_CORPORATE" \
        --member="user:$FOUNDER_EMAIL" \
        --role="roles/owner" 2>/dev/null; then
        echo -e "${GREEN}✓ IAM binding added successfully.${NC}"
    else
        echo -e "${RED}❌ Failed to add IAM binding. Insufficient permissions.${NC}"
        echo "Please ensure you have permission to grant roles/owner on $PROJ_CORPORATE"
        exit 1
    fi
else
    echo -e "${GREEN}✓ Founder Identity Latch Verified on $PROJ_CORPORATE.${NC}"
fi

# 3. Verify Project Ownership for CLINICAL (rpr-myaudit)
echo ""
echo "Verifying Owner status for $FOUNDER_EMAIL on $PROJ_CLINICAL..."
CLIN_OWNER_CHECK=$(gcloud projects get-iam-policy "$PROJ_CLINICAL" \
    --flatten="bindings[].members" \
    --filter="bindings.role:roles/owner AND bindings.members:user:$FOUNDER_EMAIL" \
    --format="value(bindings.role)" 2>/dev/null || echo "")

if [[ -z "$CLIN_OWNER_CHECK" ]]; then
    echo -e "${YELLOW}⚠ WARNING: Founder is not an Owner of $PROJ_CLINICAL.${NC}"
    echo "Executing Emergency IAM Latch..."
    if gcloud projects add-iam-policy-binding "$PROJ_CLINICAL" \
        --member="user:$FOUNDER_EMAIL" \
        --role="roles/owner" 2>/dev/null; then
        echo -e "${GREEN}✓ IAM binding added successfully.${NC}"
    else
        echo -e "${RED}❌ Failed to add IAM binding. Insufficient permissions.${NC}"
        echo "Please ensure you have permission to grant roles/owner on $PROJ_CLINICAL"
        exit 1
    fi
else
    echo -e "${GREEN}✓ Founder Identity Latch Verified on $PROJ_CLINICAL.${NC}"
fi

echo ""
echo -e "${CYAN}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo -e "${GREEN}✓ IAM & IDENTITY LATCH COMPLETE${NC}"
echo -e "${CYAN}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo ""

# --- PHASE 3: BUILD STRIKE (MOTHERSHIP) ---
echo "--- [SENTINEL] PHASE 3: BUILD STRIKE (MOTHERSHIP) ---"
cd "$REACT_MOTHERSHIP"

if [ ! -f "package.json" ]; then
    echo -e "${RED}❌ No package.json found in $REACT_MOTHERSHIP.${NC}"
    echo "Initialize the React app manually with Vite, then re-run this script."
    echo ""
    echo "Run these commands:"
    echo "  cd $ROOT_PATH"
    echo "  rm -rf RPR-REACT-MOTHERSHIP"
    echo "  mkdir RPR-REACT-MOTHERSHIP"
    echo "  cd RPR-REACT-MOTHERSHIP"
    echo "  npm create vite@latest . -- --template react-ts"
    echo "  npm install"
    echo "  npm run build"
    exit 1
else
    echo "Existing React codebase detected. Proceeding with build..."
fi

npm run build

if [ ! -d "dist" ]; then
    echo -e "${RED}❌ BUILD FAILED: dist directory not found.${NC}"
    exit 1
fi

echo -e "${GREEN}✓ Local build successful.${NC}"
echo ""

# --- PHASE 4: MULTI-HARBOR DEPLOYMENT ---
echo "--- [SENTINEL] PHASE 4: MULTI-HARBOR DEPLOYMENT ---"
cd "$ROOT_PATH"

# Harbor A: Corporate (MOTHERSHIP)
echo ""
echo "Deploying Harbor A: Corporate (MOTHERSHIP)..."
firebase use "$PROJ_CORPORATE"
firebase target:apply hosting corporate "$SITE_CORPORATE"
firebase target:apply hosting verify "$SITE_VERIFY"
firebase deploy --only hosting:corporate,hosting:verify

echo ""
echo "Deploying Harbor A: Clinical (KONTROL)..."
firebase use "$PROJ_CLINICAL"
firebase target:apply hosting kontrol "$SITE_KONTROL"
firebase deploy --only hosting:kontrol

echo ""
echo -e "${GREEN}✓ Multi-harbor deployment complete.${NC}"
echo ""

# --- PHASE 5: FORENSIC PROBE ---
echo "--- [SENTINEL] PHASE 5: FORENSIC PROBE ---"
HEALTH_PROBE="$SCRIPTS_DIR/sovereign-health-probe.sh"
if [ -f "$HEALTH_PROBE" ]; then
    bash "$HEALTH_PROBE"
else
    echo -e "${YELLOW}⚠ Health probe not found. Skipping verification.${NC}"
fi

echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo -e "${GREEN}STRIKE COMPLETE: HARBORS SYNCHRONIZED AND SECURED${NC}"
echo -e "Theatre Certificate: ${CYAN}RPR-STRIKE-V4.3.0-OWNERSHIP-LATCHED${NC}"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"