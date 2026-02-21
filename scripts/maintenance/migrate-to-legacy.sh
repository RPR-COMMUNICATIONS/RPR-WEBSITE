#!/bin/bash

# TS-Λ3 // MIGRATE TO LEGACY [v3.0.0]
# Path: scripts/maintenance/migrate-to-legacy.sh
# Mission: Isolation of PascalCase ghosts and redundant session folders.
# Authority: THE OVERWATCH // SG-CANONICAL-2026

LEGACY_ROOT="legacy_storage"
mkdir -p "$LEGACY_ROOT"

echo "[SENTINEL] Isolating Legacy Substrates..."

# Move redundant job folders if they exist in root
find . -maxdepth 1 -type d -name "JOB-2026-*" -exec mv {} "$LEGACY_ROOT/" \;

# Target PascalCase components for isolation
find src/components -name "[A-Z]*.tsx" | while read -r file; do
    echo "[MIGRATE] Isolating PascalCase component: $file"
    mv "$file" "$LEGACY_ROOT/"
done

echo "[SENTINEL] Migration Complete."