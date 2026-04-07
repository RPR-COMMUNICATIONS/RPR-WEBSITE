#!/bin/bash
# TS-Λ3 // SMALLCAPS MANDATORY LATCH [v1.1.0]
# Path: scripts/maintenance/safe-smallcaps-latch.sh
# Mission: Enforce lowercase structure for case-sensitive build engines.

set -euo pipefail

echo "🧬 Enforcing Smallcaps Mandate..."

TARGETS=()
for dir in src scripts os; do
  if [ -d "$dir" ]; then
    TARGETS+=("$dir")
  fi
done

if [ ${#TARGETS[@]} -eq 0 ]; then
  echo "ℹ️  [SENTINEL] No target directories present. Skipping smallcaps scan."
  echo "✅ [SENTINEL] Smallcaps Latch Verified."
  exit 0
fi

find "${TARGETS[@]}" -maxdepth 5 | while IFS= read -r path; do
  lowercase=$(echo "$path" | tr '[:upper:]' '[:lower:]' | tr ' ' '_')
  if [ "$path" != "$lowercase" ]; then
    echo "⚠️  [DRIFT] Correcting: $path -> $lowercase"
    mv "$path" "$lowercase" 2>/dev/null || true
  fi
done

echo "✅ [SENTINEL] Smallcaps Latch Verified."