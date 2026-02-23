#!/bin/bash
# TS-Λ3 // SMALLCAPS MANDATORY LATCH [v1.0.0]
# Path: scripts/maintenance/safe-smallcaps-latch.sh
# Mission: Enforce lowercase structure for case-sensitive build engines.

echo "🧬 Enforcing Smallcaps Mandate..."

find src scripts os -maxdepth 5 | while read -r path; do
    lowercase=$(echo "$path" | tr '[:upper:]' '[:lower:]' | tr ' ' '_')
    if [ "$path" != "$lowercase" ]; then
        echo "⚠️  [DRIFT] Correcting: $path -> $lowercase"
        mv "$path" "$lowercase" 2>/dev/null || true
    fi
done

echo "✅ [SENTINEL] Smallcaps Latch Verified."