#!/bin/bash
# RPR-WEBSITE → Google Drive Sync
# Authority: SENTINEL PROTOCOL // SG-CANONICAL-2026
# Mission: Sovereign Backup & Archive
# Scope: Backup only (no secrets, no Crown Secret content)
# Status: AUTHORITATIVE // PATH_REALIGNED

set -euo pipefail

# 🧬 PATH SUBSTRATE (Verified via Audit v1.1.0)
LOCAL_ROOT="/Users/puvansivanasan/perplexity/jobs/active/2026-001-RPR-WEBSITE"
CONTROL_PLANE_CONTEXT="/Users/puvansivanasan/perplexity/jobs/active/RPR-PRIVATE-CONTROL-PLANE/os/active-context.md"

# 🛰️ REMOTE CONFIGURATION (Corrected to match Shared Drive residency)
REMOTE="rpr-governance"
REMOTE_ROOT="perplexity/projects/active/2026-001-RPR-WEBSITE"

echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "  🔐 INITIATING RPR-WEBSITE DRIVE SYNC [REALIGNED]"
echo "  Local root : ${LOCAL_ROOT}"
echo "  Remote root: ${REMOTE}:${REMOTE_ROOT}"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

# 1. INTEGRITY LATCH
if [ ! -d "${LOCAL_ROOT}" ]; then
  echo "❌ [FATAL] Local website root not found: ${LOCAL_ROOT}"
  exit 1
fi

# 2. AUDIT ALIGNMENT CHECK
if [ ! -f "${CONTROL_PLANE_CONTEXT}" ]; then
  echo "⚠️  [WARN] Control-plane context file missing: ${CONTROL_PLANE_CONTEXT}"
fi

# 3. EXECUTION STRIKE
# Sync website folder to Drive, excluding secrets and build artifacts
echo "[1/2] Synchronizing Substrate via rclone..."
rclone sync "${LOCAL_ROOT}" "${REMOTE}:${REMOTE_ROOT}" \
  --exclude "node_modules/**" \
  --exclude "dist/**" \
  --exclude ".git/**" \
  --exclude ".env*" \
  --exclude "*.log" \
  --exclude ".DS_Store" \
  --progress

echo -e "\n✅ [SUCCESS] RPR-WEBSITE sync complete."

# 4. FORENSIC VERIFICATION
echo "📊 Remote listing (top-level):"
rclone ls "${REMOTE}:${REMOTE_ROOT}" --max-depth 1 | head -50

echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"