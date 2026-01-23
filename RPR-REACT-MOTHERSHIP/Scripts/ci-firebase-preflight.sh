#!/bin/bash
# RPR-WEBSITE | Firebase Pre-Deployment Preflight Checks (Keyless Aware)
# Authority: TS-Λ3 | Orchestrator: Gemini
# Usage: ./Scripts/ci-firebase-preflight.sh [corporate|verify]

set -euo pipefail

# Colors
RED='\033[0;31m'
GREEN='\033[0;32m'
CYAN='\033[0;36m'
NC='\033[0m'

TARGET="${1:-corporate}"
SCRIPT_DIR="Scripts"

log_info() { echo -e "${CYAN}[INFO]${NC} $1"; }
log_success() { echo -e "${GREEN}[✅]${NC} $1"; }
log_error() { echo -e "${RED}[🔴]${NC} $1"; }

echo -e "\n${CYAN}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo -e "${CYAN}  RPR-WEBSITE | Firebase Preflight (Target: $TARGET)${NC}"
echo -e "${CYAN}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"

# 1. Directory Casing Enforcement
if [ ! -d "$SCRIPT_DIR" ]; then
    log_error "Substrate Drift Detected: Directory '$SCRIPT_DIR/' not found."
    exit 1
fi

# 2. Dependency Audit
if ! npm list google-auth-library &> /dev/null; then
    log_info "Installing google-auth-library for functional verification..."
    npm install --save-dev google-auth-library > /dev/null 2>&1
fi

# 3. Auth Discovery (Policy-Aware)
SA_FILE=""
if [ -f "./github-ci-key.json" ]; then
    FILE_SIZE=$(wc -c <"./github-ci-key.json" | tr -d ' ')
    if [ "$FILE_SIZE" -gt 0 ]; then
        SA_FILE="./github-ci-key.json"
        log_info "Using local JSON key for verification."
    else
        log_info "0-byte key detected. Pivoting to Keyless (Ambient) verification."
        SA_FILE="keyless"
    fi
else
    log_info "No local key found. Proceeding with Keyless verification."
    SA_FILE="keyless"
fi

# 4. Trigger Functional Verification Strike via THE COMMANDER
if [ -f "$SCRIPT_DIR/ci-firebase-sa-verify.ts" ]; then
    log_info "Executing functional verification strike via THE COMMANDER..."
    if ! npx ts-node --compiler-options '{"module":"commonjs"}' "$SCRIPT_DIR/ci-firebase-sa-verify.ts" "$TARGET" "$SA_FILE"; then
        log_error "Gatekeeper Breach: Identity verification failed."
        exit 1
    fi
else
    log_error "FATAL: $SCRIPT_DIR/ci-firebase-sa-verify.ts not found."
    exit 1
fi

log_success "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
log_success "  ✅ [SENTINEL_ACK] Preflight complete: Ready for Strike"
log_success "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n"