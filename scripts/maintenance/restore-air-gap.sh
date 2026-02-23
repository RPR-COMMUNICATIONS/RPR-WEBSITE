#!/bin/bash
# TS-Λ3 // AIR-GAP RESTORATION STRIKE [v1.0.0]
# Path: scripts/maintenance/restore-air-gap.sh
# Mission: Sequestrate internal governance and purge from public Git history.
# Authority: THE OVERWATCH // SG-CANONICAL-2026

set -e

# 1. ROOT SOVEREIGNTY CHECK
if [ ! -f "package.json" ]; then
    echo "❌ [FATAL] Script must be executed from the project root."
    exit 1
fi

echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "  ⚓ RPR SOVEREIGN: AIR-GAP RESTORATION INITIALIZED"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

# 2. LOCAL BACKUP (Safety Latch)
BACKUP_DIR="../RPR-PRIVATE-CONTROL-PLANE"
echo "[1/4] Establishing Private Control Plane at $BACKUP_DIR..."
mkdir -p "$BACKUP_DIR"

if [ -d "os" ]; then
    cp -rn os "$BACKUP_DIR/" 2>/dev/null || echo "  (info) Files already exist in backup."
    echo "✅ Internal 'os/' enclave backed up to private substrate."
fi

# 3. PHYSICAL LIQUIDATION
echo "[2/4] Liquidating sensitive enclaves from public tree..."
# Remove from filesystem and stage for Git removal
rm -rf os
# We leave docs/ but will ignore the sensitive subfolders in .gitignore
echo "✅ Physical drive cleaned."

# 4. GIT PURGE (Local Cache)
echo "[3/4] Purging enclaves from Git tracking..."
git rm -r --cached os/ 2>/dev/null || true
git rm -r --cached docs/ops/ 2>/dev/null || true
git rm -r --cached docs/manifests/ 2>/dev/null || true
echo "✅ Git tracking neutralized for internal enclaves."

# 5. SUBSTRATE HARDENING (.gitignore update)
echo "[4/4] Hardening .gitignore substrate..."
# This ensures that even if the folders are recreated locally, they are never pushed.
cat >> .gitignore << EOF

# --- INTERNAL GOVERNANCE (AIR-GAP ENFORCED) ---
os/
docs/ops/
docs/manifests/
docs/ip/
EOF

echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "  ✅ AIR-GAP RESTORED (LOCAL)."
echo "  "
echo "  ⚠️  CRITICAL: Git history still contains the leaked files."
echo "  To fully purge history (DESTRUCTIVE), run:"
echo "  git filter-repo --path os/ --path docs/ops/ --invert-paths"
echo "  (Requires 'git-filter-repo' installed via homebrew)"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"