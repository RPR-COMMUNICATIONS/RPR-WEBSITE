#!/usr/bin/env bash
set -euo pipefail

ROOT="/Users/puvansivanasan/perplexity/jobs/active/2026-001-RPR-WEBSITE-CLEAN"
CSV="$ROOT/rpr-mothership-inventory-dates.csv"
LEGACY_DIR="$ROOT/legacy"

cd "$ROOT"
mkdir -p "$LEGACY_DIR"

echo "[1/2] Building canonical path set from CSV..."
tmp_canon=$(mktemp)
tail -n +2 "$CSV" | cut -d',' -f2 | sort -u > "$tmp_canon"

echo "[2/2] Moving non-canonical files to legacy/..."
find . -type f \
  ! -path "./node_modules/*" \
  ! -path "./legacy/*" \
  ! -path "./rpr-mothership-inventory-dates.csv" \
  ! -path "./scripts/maintenance/organize-from-inventory.sh" \
  ! -path "./dist/*" \
  | while IFS= read -r f; do
  rel="${f#./}"
  if grep -Fxq "$rel" "$tmp_canon" 2>/dev/null; then
    continue
  fi
  dest="$LEGACY_DIR/$rel"
  mkdir -p "$(dirname "$dest")"
  echo "  → Archiving $f → $dest"
  mv "$f" "$dest"
done

rm -f "$tmp_canon"
echo "Done. Canonical files remain in place; non-canonical files are under legacy/."
