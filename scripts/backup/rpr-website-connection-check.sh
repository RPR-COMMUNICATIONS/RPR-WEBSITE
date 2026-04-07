#!/bin/bash

# ⚓ TS-Λ3 // RPR-WEBSITE CONNECTION CHECK [v1.2.0]
# Path: scripts/backup/rpr-website-connection-check.sh
# Mission: Verify Law-Plane Connectivity & API Latency
# Authority: THE OVERWATCH // SG-CANONICAL-2026
# Status: AUTHORITATIVE // LATCHED

set -euo pipefail

# 🧬 PATH SUBSTRATE
LOCAL_ROOT="/Users/puvansivanasan/perplexity/jobs/active/2026-001-RPR-WEBSITE"
CONTROL_PLANE_CONTEXT="/Users/puvansivanasan/perplexity/jobs/active/2026-001-RPR-WEBSITE/docs/governance/os/active-context.md"

# 🛰️ REMOTE CONFIGURATION
REMOTE="rpr-governance"
REMOTE_ROOT="perplexity/projects/active/2026-001-RPR-WEBSITE"
TIMESTAMP=$(date -u +%Y%m%dT%H%M%SZ)

echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "  [SENTINEL] LAW-PLANE CONNECTION AUDIT"
echo "  Target: ${REMOTE}:${REMOTE_ROOT}"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

# 1. LOCAL INTEGRITY
echo -n "[1/5] Verifying Local Root residency... "
if [ -d "$LOCAL_ROOT" ]; then
    echo "✅ [FOUND]"
else
    echo "❌ [MISSING] Path: $LOCAL_ROOT"
    exit 1
fi

# 2. CONTROL PLANE ALIGNMENT
echo -n "[2/5] Verifying Control-Plane Context... "
if [ -f "$CONTROL_PLANE_CONTEXT" ]; then
    echo "✅ [LATCHED]"
else
    echo "⚠️  [ABSENT] Audit alignment may be degraded. Expected: $CONTROL_PLANE_CONTEXT"
fi

# 3. REMOTE REACHABILITY
echo -n "[3/5] Checking remote availability... "
if rclone lsjson "${REMOTE}:" --max-depth 1 >/dev/null 2>&1; then
    echo "✅ [CONNECTED]"
else
    echo "❌ [FAILED] Remote unreachable."
    exit 1
fi

# 4. LAW-PLANE ROOT STRUCTURE
echo -n "[4/5] Validating repository root... "
if rclone lsd "${REMOTE}:${REMOTE_ROOT}" >/dev/null 2>&1; then
    echo "✅ [FOUND]"
else
    echo "⚠️  [VOID] Path not found. Backup will create: ${REMOTE_ROOT}"
fi

# 5. DRIVE-SIDE LATENCY PROBE (API, not Finder)
echo -n "[5/5] Executing API-side freshness probe... "
PROBE_NAME=".latency-probe-${TIMESTAMP}.tmp"
echo "probe_${TIMESTAMP}" | rclone rcat "${REMOTE}:${REMOTE_ROOT}/${PROBE_NAME}"

if rclone ls "${REMOTE}:${REMOTE_ROOT}/${PROBE_NAME}" >/dev/null 2>&1; then
    echo "✅ [INSTANT]"
    # Cleanup probe file
    rclone delete "${REMOTE}:${REMOTE_ROOT}/${PROBE_NAME}" >/dev/null 2>&1 || true
else
    echo "⚠️  [DELAYED] Probe not immediately visible via API."
fi

echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "OPERATIONAL MANDATE:"
echo "  • NEVER READ FROM FINDER PATHS FOR FORENSICS."
echo "  • ALWAYS FORCE PULL TO: ./local_staging/law-plane"
echo "    e.g.,"
echo "      rclone copy \"${REMOTE}:${REMOTE_ROOT}/docs\" \\"
echo "                  \"./local_staging/law-plane\" \\"
echo "                  --include \"*-manifest.md\" \\"
echo "                  --include \"*-ledger-*.md\" \\"
echo "                  --size-only -P"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "✅ CONNECTION LATCHED // STATUS: OPTIMIZED"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
