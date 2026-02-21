#!/usr/bin/env bash
# TS-Λ3 // SOVEREIGN WORKSPACE ORGANIZER [v1.0.0]
# Path: scripts/maintenance/organize-from-inventory.sh
# Mission: Archive non-canonical files based on the Forensic Inventory.
# Authority: THE OVERWATCH // SG-CANONICAL-2026

set -euo pipefail

# ARCHITECTURAL CONSTANTS
ROOT="/Users/puvansivanasan/perplexity/jobs/active/2026-001-RPR-WEBSITE-CLEAN"
CSV="$ROOT/rpr-mothership-inventory-dates.csv"
LEGACY_DIR="$ROOT/legacy"

cd "$ROOT"
mkdir -p "$LEGACY_DIR"

echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "  INITIATING WORKSPACE ORGANIZATION [v1.0.0]"
echo "  Source of Truth: rpr-mothership-inventory-dates.csv"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

# 1. Build canonical path set from CSV
echo "[1/2] Building canonical path set..."
tmp_canon=$(mktemp)
# Extract second column (path), remove header, and sort
tail -n +2 "$CSV" | cut -d',' -f2 | sort -u > "$tmp_canon"

# 2. Move non-canonical files to legacy/
echo "[2/2] Moving non-canonical files to archive (legacy/)..."
find . -type f \
  ! -path "./node_modules/*" \
  ! -path "./legacy/*" \
  ! -path "./.git/*" \
  ! -path "./rpr-mothership-inventory-dates.csv" \
  ! -path "./scripts/maintenance/organize-from-inventory.sh" \
  ! -path "./dist/*" \
  | while IFS= read -r f; do
  
  # Remove leading ./ for comparison
  rel="${f#./}"
  
  # If file is in the CSV, leave it alone
  if grep -Fxq "$rel" "$tmp_canon" 2>/dev/null; then
    continue
  fi
  
  # Otherwise, move to legacy
  dest="$LEGACY_DIR/$rel"
  mkdir -p "$(dirname "$dest")"
  echo "  → Archiving: $f → $dest"
  mv "$f" "$dest"
done

rm -f "$tmp_canon"

echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "  ✅ ORGANIZATION COMPLETE"
echo "  Canonical files remain in place."
echo "  Non-canonical files are archived under: $LEGACY_DIR"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"