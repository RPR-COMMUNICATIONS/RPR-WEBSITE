#!/bin/bash
# RPR-KONTROL | SOVEREIGN AUDIT STRIKE (v1.2.0)
# Role: THE ENGINEER
# Purpose: Hard-enforce App.tsx substrate presence and validate React V4 markers for Era 2026.
# Authority: TS-Λ3

set -euo pipefail

# --- ARCHITECTURAL CONSTANTS ---
ROOT_PATH="/Users/puvansivanasan/PERPLEXITY-NEW/JOBS/2026-001-RPR-WEBSITE"
REACT_MOTHERSHIP="$ROOT_PATH/RPR-REACT-MOTHERSHIP"
APP_TSX="$REACT_MOTHERSHIP/src/App.tsx"
MAIN_TSX="$REACT_MOTHERSHIP/src/main.tsx"
INDEX_HTML="$REACT_MOTHERSHIP/index.html"

# Colors for telemetry
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
CYAN='\033[0;36m'
NC='\033[0m'

echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "[SENTINEL] INITIATING SOVEREIGN AUDIT STRIKE (v1.2.0)"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""

AUDIT_PASSED=true

# --- PHASE 1: SUBSTRATE EXISTENCE CHECK ---
echo "--- [SENTINEL] PHASE 1: SUBSTRATE EXISTENCE CHECK ---"
if [ ! -f "$APP_TSX" ]; then
    echo -e "${RED}❌ PROTOCOL BREACH: App.tsx substrate not found.${NC}"
    echo -e "  Expected: ${YELLOW}$APP_TSX${NC}"
    AUDIT_PASSED=false
else
    echo -e "${GREEN}✓ App.tsx substrate verified.${NC}"
fi

if [ ! -f "$MAIN_TSX" ]; then
    echo -e "${RED}❌ PROTOCOL BREACH: main.tsx entry point not found.${NC}"
    echo -e "  Expected: ${YELLOW}$MAIN_TSX${NC}"
    AUDIT_PASSED=false
else
    echo -e "${GREEN}✓ main.tsx entry point verified.${NC}"
fi

if [ ! -f "$INDEX_HTML" ]; then
    echo -e "${RED}❌ PROTOCOL BREACH: index.html not found.${NC}"
    echo -e "  Expected: ${YELLOW}$INDEX_HTML${NC}"
    AUDIT_PASSED=false
else
    echo -e "${GREEN}✓ index.html verified.${NC}"
fi

echo ""

# --- PHASE 2: REACT V4 MARKER VALIDATION ---
echo "--- [SENTINEL] PHASE 2: REACT V4 MARKER VALIDATION ---"

if [ -f "$INDEX_HTML" ]; then
    if grep -q 'id="root"' "$INDEX_HTML" || grep -q "id='root'" "$INDEX_HTML"; then
        echo -e "${GREEN}✓ React V4 root marker detected in index.html (id=\"root\").${NC}"
    else
        echo -e "${RED}❌ PROTOCOL BREACH: React V4 root marker missing in index.html.${NC}"
        echo -e "  Expected: ${YELLOW}<div id=\"root\"></div>${NC} in index.html"
        AUDIT_PASSED=false
    fi
else
    echo -e "${RED}❌ Cannot validate React V4 markers: index.html not found.${NC}"
    AUDIT_PASSED=false
fi

if [ -f "$MAIN_TSX" ]; then
    if grep -q "ReactDOM.createRoot" "$MAIN_TSX"; then
        echo -e "${GREEN}✓ React 18+ createRoot API detected.${NC}"
    else
        echo -e "${YELLOW}⚠ WARNING: React 18+ createRoot API not detected.${NC}"
    fi
else
    echo -e "${RED}❌ Cannot validate createRoot API: main.tsx not found.${NC}"
    AUDIT_PASSED=false
fi

echo ""

# --- PHASE 3: ERA 2026 GRID REQUIREMENTS ---
echo "--- [SENTINEL] PHASE 3: ERA 2026 GRID LOCKS ---"

if [ -f "$APP_TSX" ]; then
    HEADER_FOUND=false
    FOOTER_FOUND=false

    if grep -q "pt-\[108px\]" "$APP_TSX" || grep -q "pt-108px" "$APP_TSX"; then
        HEADER_FOUND=true
        echo -e "${GREEN}✓ Header grid lock detected (108px).${NC}"
    else
        echo -e "${RED}❌ PROTOCOL BREACH: Header grid lock missing.${NC}"
        echo -e "  Expected: ${YELLOW}pt-[108px]${NC} or ${YELLOW}pt-108px${NC} in App.tsx"
        AUDIT_PASSED=false
    fi

    if grep -q "pb-\[70px\]" "$APP_TSX" || grep -q "pb-70px" "$APP_TSX"; then
        FOOTER_FOUND=true
        echo -e "${GREEN}✓ Footer grid lock detected (70px).${NC}"
    else
        echo -e "${RED}❌ PROTOCOL BREACH: Footer grid lock missing.${NC}"
        echo -e "  Expected: ${YELLOW}pb-[70px]${NC} or ${YELLOW}pb-70px${NC} in App.tsx"
        AUDIT_PASSED=false
    fi

    if [ "$HEADER_FOUND" = true ] && [ "$FOOTER_FOUND" = true ]; then
        echo -e "${GREEN}✓ Era 2026 vertical grid locks satisfied.${NC}"
    fi
else
    echo -e "${RED}❌ Cannot validate grid locks: App.tsx not found.${NC}"
    AUDIT_PASSED=false
fi

echo ""

# --- PHASE 4: CONTEXT & COMPONENT INTEGRITY ---
echo "--- [SENTINEL] PHASE 4: CONTEXT & COMPONENT INTEGRITY ---"

if [ -f "$APP_TSX" ]; then
    # Check WorkflowProvider context
    if grep -q "WorkflowProvider" "$APP_TSX"; then
        echo -e "${GREEN}✓ WorkflowProvider context detected.${NC}"
    else
        echo -e "${RED}❌ PROTOCOL BREACH: WorkflowProvider context missing.${NC}"
        AUDIT_PASSED=false
    fi

    # Check for required component imports
    REQUIRED_COMPONENTS=("Header" "Hero" "Footer" "AskOllie")
    MISSING_COMPONENTS=()

    for component in "${REQUIRED_COMPONENTS[@]}"; do
        if grep -q "import.*$component" "$APP_TSX"; then
            echo -e "${GREEN}✓ Component import verified: $component${NC}"
        else
            MISSING_COMPONENTS+=("$component")
            echo -e "${RED}❌ PROTOCOL BREACH: Component import missing: $component${NC}"
            AUDIT_PASSED=false
        fi
    done

    if [ ${#MISSING_COMPONENTS[@]} -eq 0 ]; then
        echo -e "${GREEN}✓ All required component imports present.${NC}"
    fi
else
    echo -e "${RED}❌ Cannot validate context & components: App.tsx not found.${NC}"
    AUDIT_PASSED=false
fi

echo ""

# --- PHASE 5: FINAL VERDICT ---
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
if [ "$AUDIT_PASSED" = true ]; then
    echo -e "${GREEN}✅ SOVEREIGN AUDIT PASSED: Substrate validated and compliant.${NC}"
    echo -e "Theatre Certificate: ${CYAN}RPR-AUDIT-V1.2.0-ERA2026-VERIFIED${NC}"
    exit 0
else
    echo -e "${RED}❌ SOVEREIGN AUDIT FAILED: Substrate non-compliant.${NC}"
    echo -e "Theatre Certificate: ${RED}RPR-AUDIT-V1.2.0-COMPLIANCE-BREACH${NC}"
    exit 1
fi
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
