#!/bin/bash
# TS-Λ3 // RPR-WEBSITE CONNECTION CHECK [v1.0.0]
# Path: /Users/puvansivanasan/perplexity/jobs/active/2026-001-RPR-WEBSITE/scripts/backup/rpr-website-connection-check.sh
# Mission: Verify Law Plane connectivity without write operations.
# Authority: THE OVERWATCH // SG-CANONICAL-2026
# Status: AUTHORITATIVE // READ-ONLY

set -euo pipefail

# 🧬 PATH SUBSTRATE
LOCAL_ROOT="/Users/puvansivanasan/perplexity/jobs/active/2026-001-RPR-WEBSITE"
CONTROL_PLANE_CONTEXT="/Users/puvansivanasan/perplexity/jobs/active/RPR-PRIVATE-CONTROL-PLANE/os/active-context.md"

# 🛰️ REMOTE CONFIGURATION
REMOTE="rpr-governance"
REMOTE_ROOT="perplexity/projects/active/2026-001-RPR-WEBSITE"

echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "  🔍 INITIATING LAW PLANE CONNECTION CHECK"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

# 1. LOCAL INTEGRITY
echo -n "[1/4] Verifying Local Root residency... "
if [ -d "$LOCAL_ROOT" ]; then
    echo "✅ [FOUND]"
else
    echo "❌ [MISSING] Path: $LOCAL_ROOT"
    exit 1
fi

# 2. CONTROL PLANE ALIGNMENT
echo -n "[2/4] Verifying Control-Plane Context... "
if [ -f "$CONTROL_PLANE_CONTEXT" ]; then
    echo "✅ [LATCHED]"
else
    echo "⚠️  [ABSENT] Audit alignment may be degraded."
fi

# 3. REMOTE HANDSHAKE
echo -n "[3/4] Testing rclone remote ($REMOTE)... "
if rclone listremotes | grep -q "^${REMOTE}:"; then
    echo "✅ [AUTHORIZED]"
else
    echo "❌ [UNAUTHORIZED] Remote '$REMOTE' not found in rclone config."
    exit 1
fi

# 4. DIRECTORY RESIDENCY
echo -n "[4/4] Probing Law Plane coordinates... "
if rclone lsd "${REMOTE}:${REMOTE_ROOT}" >/dev/null 2>&1; then
    echo "✅ [REACHABLE]"
    echo -e "\n📊 LAW PLANE CONTENT PREVIEW (Top-level):"
    rclone ls "${REMOTE}:${REMOTE_ROOT}" --max-depth 1
else
    echo "⚠️  [VOID] Path not found. Backup will create: ${REMOTE_ROOT}"
fi

echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "  ✅ CONNECTION AUDIT COMPLETE // READY FOR STRIKE"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"