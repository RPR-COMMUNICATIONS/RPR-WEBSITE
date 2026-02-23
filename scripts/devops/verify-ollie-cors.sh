#!/bin/bash
# TS-Λ3 // OLLIE PROXY REGRESSION HARNESS [v2.0.0]
# Path: scripts/devops/verify-ollie-cors.sh
# Mission: Verify the Sovereign Proxy Handshake (Harbor A -> Specialist)
# Authority: THE OVERWATCH // SG-CANONICAL-2026
# Status: AUTHORITATIVE // PROXY_ALIGNED

# 🚥 TARGET CONFIGURATION
# We now target the Proxy Endpoint, not the direct Cloud Run URL.
URL="https://rprcomms.com/api/ollieChat"
LOCAL_URL="http://localhost:4242/api/ollieChat"
ORIGIN="https://rprcomms.com"
MARKER="PROXY-AUDIT-2026"
CLIENT_ID="forensic-tester-001"

echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "  INITIATING OLLIE PROXY REGRESSION CHECK [v2.0.0]"
echo "  Target Endpoint: $URL"
echo "  Strategy: Path B (Sovereign Proxy)"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

# 1. LOCAL CONNECTIVITY CHECK (IF RUNNING LOCALLY)
if [[ "$1" == "--local" ]]; then
    URL=$LOCAL_URL
    echo "[INFO] Redirecting probe to Local Substrate: $URL"
fi

# 2. PROBE POST (Payload through Proxy)
echo -n "[1/1] Probing Proxied POST ingestion... "
POST_RESPONSE=$(curl -s -X POST "$URL" \
  -H "Origin: $ORIGIN" \
  -H "Content-Type: application/json" \
  -H "X-Forensic-Marker: $MARKER" \
  -H "x-rpr-client-id: $CLIENT_ID" \
  -d '{"prompt": "Forensic Proxy Ping", "locale": "en"}')

# 🛡️ SIGNATURE CHECK
# Verified against proxy_metadata.status emitted by backend/functions/index.js v2.3.1
if echo "$POST_RESPONSE" | grep -q "LATCHED_VIA_HARBOR_A"; then
    echo "✅ [SUCCESS]"
    echo "  Response Trace: $POST_RESPONSE"
    echo "  Status: Interaction Authorized via Sovereign Identity."
else
    echo "❌ [FAIL]"
    echo "  Raw Response: $POST_RESPONSE"
    echo "  Reason: Proxy Latch signature missing or 403 Forbidden persists."
    exit 1
fi

echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "  AUDIT COMPLETE // SOVEREIGN BRIDGE VERIFIED"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"