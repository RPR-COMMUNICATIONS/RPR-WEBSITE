#!/bin/bash
# TS-Λ3 // OLLIE CORS REGRESSION HARNESS [v1.0.0]
# Authority: THE OVERWATCH // SG-CANONICAL-2026
# Target: https://asia-southeast1-rpr-corporate-site.cloudfunctions.net/ollieChat

URL="https://asia-southeast1-rpr-corporate-site.cloudfunctions.net/ollieChat"
ORIGIN="https://rprcomms.com"
MARKER="SG-CANONICAL-2026"

echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "  INITIATING OLLIE CORS REGRESSION CHECK"
echo "  Target: $URL"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

# 1. PROBE OPTIONS (Preflight)
echo -n "[1/2] Probing OPTIONS handshake... "
OPT_STATUS=$(curl -s -o /dev/null -w "%{http_code}" -X OPTIONS "$URL" \
  -H "Origin: $ORIGIN" \
  -H "Access-Control-Request-Method: POST" \
  -H "Access-Control-Request-Headers: X-Forensic-Marker")

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
  -d '{"prompt": "Forensic Ping", "locale": "en"}')

if echo "$POST_RESPONSE" | grep -q "\"text\":"; then
    echo "✅ [SUCCESS]"
    echo "  Response Trace: $POST_RESPONSE"
else
    echo "❌ [FAIL: Invalid Response Shape]"
    echo "  Raw Output: $POST_RESPONSE"
    exit 1
fi

echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "  REGRESSION CHECK COMPLETE: SUBSTRATE IS LATCHED"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"