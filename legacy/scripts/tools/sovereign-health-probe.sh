#!/bin/bash
# SENTINEL-WATCHTOWER | ERA 2026 FORENSIC HEALTH PROBE (v1.3.2)
# Governance: RPR-KONTROL v1.0
# Purpose: Detect React V4 MOTHERSHIP substrate markers and Era 2026 grid requirements
# Authority: TS-Lambda3 (CROWN SECRET)
# Migration Target: v4.2.0 (Angular → React Vite)

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

# ERA 2026 React V4 Markers (Vite-based React substrate)
REACT_ROOT_MARKER="<div id=\"root\">|<div id='root'>|id=\"root\"|id='root'"
ANGULAR_ROOT_MARKER="<app-root>|<app-root"

# Era 2026 Vertical Grid Requirements (MOTHERSHIP-specific)
HEADER_MARKER="h-\[108px\]"
FOOTER_MARKER="h-\[70px\]"

# Identity Latch (Founder Principal)
IDENTITY_MARKER="butterdime.com"

# Colors for telemetry
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
CYAN='\033[0;36m'
NC='\033[0m'

echo "[SENTINEL] INITIATING ERA 2026 FORENSIC PROBE (v1.3.2)"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "Target: React V4 MOTHERSHIP Migration Verification"
echo "Markers: React Root, 108px/70px Grid, butterdime.com Identity"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""

check_mothership() {
    local url=$1
    
    echo -n "Probing MOTHERSHIP ($url)... "
    
    # Capture HTTP Code
    HTTP_CODE=$(curl -sL -o /dev/null -w "%{http_code}" --max-time 10 "$url")
    
    if [[ "$HTTP_CODE" != "200" ]]; then
        echo -e "${RED}[FAIL] OFFLINE${NC} (HTTP $HTTP_CODE)"
        return 1
    fi
    
    # Capture Source for forensic analysis
    PAGE_SOURCE=$(curl -sL "$url")
    
    # 1. React V4 Detection: Check for React root marker
    REACT_V4_DETECTED=false
    ANGULAR_LEGACY_DETECTED=false
    
    if echo "$PAGE_SOURCE" | grep -qiE "$REACT_ROOT_MARKER"; then
        REACT_V4_DETECTED=true
        STATUS_SUBSTRATE="${GREEN}REACT_V4${NC}"
    elif echo "$PAGE_SOURCE" | grep -qiE "$ANGULAR_ROOT_MARKER"; then
        ANGULAR_LEGACY_DETECTED=true
        STATUS_SUBSTRATE="${YELLOW}ANGULAR_LEGACY${NC}"
    else
        STATUS_SUBSTRATE="${RED}UNKNOWN_SUBSTRATE${NC}"
    fi
    
    # 2. Identity Latch Check (butterdime.com signature)
    IDENTITY_LATCHED=false
    if echo "$PAGE_SOURCE" | grep -qiE "$IDENTITY_MARKER"; then
        IDENTITY_LATCHED=true
        STATUS_IDENTITY="${GREEN}LATCHED${NC}"
    else
        STATUS_IDENTITY="${YELLOW}DRIFT${NC}"
    fi
    
    # 3. Era 2026 Grid Hardening Check (108px header, 70px footer)
    GRID_LOCKED=false
    HEADER_FOUND=false
    FOOTER_FOUND=false
    
    if echo "$PAGE_SOURCE" | grep -q "$HEADER_MARKER"; then
        HEADER_FOUND=true
    fi
    
    if echo "$PAGE_SOURCE" | grep -q "$FOOTER_MARKER"; then
        FOOTER_FOUND=true
    fi
    
    if [[ "$HEADER_FOUND" == "true" && "$FOOTER_FOUND" == "true" ]]; then
        GRID_LOCKED=true
        STATUS_GRID="${GREEN}LOCKED${NC} (108px/70px)"
    elif [[ "$HEADER_FOUND" == "true" || "$FOOTER_FOUND" == "true" ]]; then
        STATUS_GRID="${YELLOW}PARTIAL${NC}"
    else
        STATUS_GRID="${RED}UNSTABLE${NC}"
    fi
    
    # 4. Signature Check (content validation)
    if echo "$PAGE_SOURCE" | grep -qiE "$SIGNATURE_MOTHERSHIP"; then
        STATUS_SIG="${GREEN}STABLE${NC}"
    else
        STATUS_SIG="${YELLOW}SIG_DRIFT${NC}"
    fi
    
    # Compile Status Report
    echo -e "[OK] ONLINE"
    echo -e "  └─ Substrate: $STATUS_SUBSTRATE"
    echo -e "  └─ Identity: $STATUS_IDENTITY"
    echo -e "  └─ Grid: $STATUS_GRID"
    echo -e "  └─ Signature: $STATUS_SIG"
    
    # Final Verdict
    if [[ "$REACT_V4_DETECTED" == "true" && "$IDENTITY_LATCHED" == "true" && "$GRID_LOCKED" == "true" ]]; then
        echo -e "  ${CYAN}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
        echo -e "  ${GREEN}✓ ERA 2026 MOTHERSHIP: REACT_V4 MIGRATION VERIFIED${NC}"
        echo -e "  ${CYAN}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
        return 0
    elif [[ "$ANGULAR_LEGACY_DETECTED" == "true" ]]; then
        echo -e "  ${YELLOW}⚠ WARNING: Legacy Angular substrate still active${NC}"
        return 1
    else
        echo -e "  ${RED}✗ MIGRATION STATUS: INCOMPLETE${NC}"
        return 1
    fi
}

check_node() {
    local name=$1
    local url=$2
    local signature=$3
    
    echo -n "Probing $name ($url)... "
    
    # Capture HTTP Code
    HTTP_CODE=$(curl -sL -o /dev/null -w "%{http_code}" --max-time 10 "$url")
    
    if [[ "$HTTP_CODE" == "200" ]]; then
        # Capture Source for forensic analysis
        PAGE_SOURCE=$(curl -sL "$url")
        
        # Signature Check
        if echo "$PAGE_SOURCE" | grep -qiE "$signature"; then
            STATUS_SIG="${GREEN}STABLE${NC}"
        else
            STATUS_SIG="${YELLOW}SIG_DRIFT${NC}"
        fi
        
        echo -e "[OK] ONLINE (Identity: $STATUS_SIG)"
    else
        echo -e "${RED}[FAIL] OFFLINE${NC} (HTTP $HTTP_CODE)"
    fi
}

# --- EXECUTION STRIKE ---

# 1. MOTHERSHIP (Primary Substrate - Era 2026 React V4 Verification)
check_mothership "$MOTHERSHIP"
MOTHERSHIP_STATUS=$?

echo ""

# 2. RPR-VERIFY (Harbor A)
check_node "RPR-VERIFY" "$VERIFY" "$SIGNATURE_VERIFY"

# 3. RPR-KONTROL (Governance Plane)
check_node "RPR-KONTROL" "$KONTROL" "$SIGNATURE_KONTROL"

# 4. MYAUDIT (Legacy Node)
check_node "MYAUDIT" "$MYAUDIT" "$SIGNATURE_MYAUDIT"

echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "Forensic Telemetry Complete."
if [[ "$MOTHERSHIP_STATUS" == "0" ]]; then
    echo -e "Theatre Certificate: ${GREEN}RPR-PROBE-V1.3.2-REACT_V4-VERIFIED${NC}"
else
    echo -e "Theatre Certificate: ${YELLOW}RPR-PROBE-V1.3.2-MIGRATION-PENDING${NC}"
fi
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"