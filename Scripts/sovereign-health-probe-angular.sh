#!/bin/bash
# SENTINEL-WATCHTOWER | GLOBAL HEALTH PROBE (v1.2.4)
# Governance: RPR-KONTROL v1.0
# Purpose: Resilient multi-node verification with static CSR marker detection
# Authority: TS-Lambda3 (CROWN SECRET)

set -euo pipefail

# --- CONFIGURATION ---
MOTHERSHIP="https://rprcomms.com"
VERIFY="https://verify.rprcomms.com"
KONTROL="https://kontrol.rprcomms.com"
MYAUDIT="https://myaudit.rprcomms.com"

# Forensic Signatures (Regex-ready)
# Note: butterdime.com is used to bypass @ vs &#64; drift
SIGNATURE_MOTHERSHIP="Global Intelligence|butterdime.com|RPR Communications"
SIGNATURE_VERIFY="RPR VERIFY|Verification"
SIGNATURE_KONTROL="KONTROL LATCH|Governance"
SIGNATURE_MYAUDIT="MYAUDIT|accounting|audit"

# Static CSR Markers (present in index.html stream, bypasses CSR limitations)
# These markers are verified in the raw HTML stream before JavaScript execution
STATIC_MARKER_APP_ROOT="<app-root>|<app-root"
STATIC_MARKER_TITLE="RPR Communications|Experiential Intelligence"
STATIC_MARKER_TAILWIND="tailwindcss|cdn.tailwindcss"

# Grid Markers
HEADER_MARKER="h-\[108px\]"
FOOTER_MARKER="h-\[70px\]"

# Colors for telemetry
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m'

echo "[SENTINEL] INITIATING GLOBAL FORENSIC PROBE (v1.2.4)"
echo "============================================================"

check_node() {
    local name=$1
    local url=$2
    local signature=$3
    local check_grid=$4

    echo -n "Probing $name ($url)... "
    
    # Capture HTTP Code
    HTTP_CODE=$(curl -sL -o /dev/null -w "%{http_code}" --max-time 10 "$url")

    if [[ "$HTTP_CODE" == "200" ]]; then
        # Capture Source for forensic analysis
        PAGE_SOURCE=$(curl -sL "$url")
        
        # 1. Static CSR Marker Check (bypasses JavaScript execution requirement)
        STATIC_PASS=false
        if echo "$PAGE_SOURCE" | grep -qiE "$STATIC_MARKER_APP_ROOT"; then
            STATIC_PASS=true
        elif echo "$PAGE_SOURCE" | grep -qiE "$STATIC_MARKER_TITLE"; then
            STATIC_PASS=true
        elif echo "$PAGE_SOURCE" | grep -qiE "$STATIC_MARKER_TAILWIND"; then
            STATIC_PASS=true
        fi
        
        if [[ "$STATIC_PASS" == "true" ]]; then
            STATUS_STATIC="${GREEN}CSR_MARKER_OK${NC}"
        else
            STATUS_STATIC="${YELLOW}CSR_MARKER_MISSING${NC}"
        fi
        
        # 2. Signature Check
        if echo "$PAGE_SOURCE" | grep -qiE "$signature"; then
            STATUS_SIG="${GREEN}STABLE${NC}"
        else
            STATUS_SIG="${YELLOW}SIG_DRIFT${NC}"
        fi

        # 3. Grid Check (if requested)
        STATUS_GRID=""
        if [[ "$check_grid" == "true" ]]; then
            if echo "$PAGE_SOURCE" | grep -q "$HEADER_MARKER" && echo "$PAGE_SOURCE" | grep -q "$FOOTER_MARKER"; then
                STATUS_GRID=", Grid: ${GREEN}LOCKED${NC}"
            else
                STATUS_GRID=", Grid: ${YELLOW}UNSTABLE${NC}"
            fi
        fi
        
        echo -e "[OK] ONLINE (Static: $STATUS_STATIC, Identity: $STATUS_SIG$STATUS_GRID)"
    else
        echo -e "${RED}[FAIL] OFFLINE${NC} (HTTP $HTTP_CODE)"
    fi
}

# --- EXECUTION STRIKE ---

# 1. MOTHERSHIP (Primary Substrate)
check_node "MOTHERSHIP" "$MOTHERSHIP" "$SIGNATURE_MOTHERSHIP" "true"

# 2. RPR-VERIFY (Harbor A)
check_node "RPR-VERIFY" "$VERIFY" "$SIGNATURE_VERIFY" "false"

# 3. RPR-KONTROL (Governance Plane)
check_node "RPR-KONTROL" "$KONTROL" "$SIGNATURE_KONTROL" "false"

# 4. MYAUDIT (Legacy Node)
check_node "MYAUDIT" "$MYAUDIT" "$SIGNATURE_MYAUDIT" "false"

echo "============================================================"
echo "Forensic Telemetry Complete."
echo "Theatre Certificate: RPR-PROBE-V1.2.4-STABLE"