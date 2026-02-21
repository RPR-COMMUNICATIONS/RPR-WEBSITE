#!/bin/bash
# TS-Λ3 // OLLIE CORS REGRESSION HARNESS [v1.1.0]
# Authority: THE OVERWATCH // SG-CANONICAL-2026
# Target: https://asia-southeast1-rpr-corporate-site.cloudfunctions.net/ollieChat
# Status: AUTHORITATIVE // LATCHED

URL="https://asia-southeast1-rpr-corporate-site.cloudfunctions.net/ollieChat"
ORIGIN="https://rprcomms.com"
MARKER="SG-CANONICAL-2026"
CLIENT_ID="harbor-a-client-001"

echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "  INITIATING OLLIE CORS REGRESSION CHECK [v1.1.0]"
echo "  Target: $URL"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

# 1. PROBE OPTIONS (Preflight)
echo -n "[1/2] Probing OPTIONS handshake... "
OPT_STATUS=$(curl -s -o /dev/null -w "%{http_code}" -X OPTIONS "$URL" \
  -H "Origin: $ORIGIN" \
  -H "Access-Control-Request-Method: POST" \
  -H "Access-Control-Request-Headers: X-Forensic-Marker, x-rpr-client-id")

if [ "$OPT_STATUS" == "204" ] || [ "$OPT_STATUS" == "200" ]; then
    echo "✅ [HTTP $OPT_STATUS]"
else
    echo "❌ [FAIL: HTTP $OPT_STATUS]"
    exit 1
fi

# 2. PROBE POST (Payload)
echo -n "[2/2] Probing POST payload ingestion... "
POST_RESPONSE=$(curl -s -X POST "$URL" \
  -H "Origin: $ORIGIN" \
  -H "Content-Type: application/json" \
  -H "X-Forensic-Marker: $MARKER" \
  -H "x-rpr-client-id: $CLIENT_ID" \
  -d '{"prompt": "Forensic Ping", "locale": "en"}')

if echo "$POST_RESPONSE" | grep -q "\"text\":"; then
    echo "✅ [SUCCESS]"
    echo "  Response Trace: $POST_RESPONSE"
    
    # Forensic Check: Verify Interaction_ID presence
    if echo "$POST_RESPONSE" | grep -q "Interaction_ID"; then
        echo "  [SENTINEL] Interaction_ID verified in payload."
    fi
else
    echo "❌ [FAIL: Invalid Response Shape]"
    echo "  Raw Output: $POST_RESPONSE"
    exit 1
fi

echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "  REGRESSION CHECK COMPLETE: SUBSTRATE IS LATCHED"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"