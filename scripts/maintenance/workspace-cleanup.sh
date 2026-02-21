#!/bin/bash

# TS-Λ3 // WORKSPACE CLEANUP [v2.1.0]
# Path: scripts/maintenance/workspace-cleanup.sh
# Mission: Sequestering unapproved or legacy surfaces into quarantine.
# Authority: THE OVERWATCH // SG-CANONICAL-2026

QUARANTINE_DIR="quarantine/$(date +%Y%m%d_%H%M)"
mkdir -p "$QUARANTINE_DIR"

echo "[SENTINEL] Initializing Workspace Hygiene..."

# 1. Sequester legacy components
LEGACY_FILES=(
    "src/components/LegacyFooter.tsx"
    "src/components/HomeHero.tsx"
    "src/utils/old-hasher.js"
)

for FILE in "${LEGACY_FILES[@]}"; do
    if [ -f "$FILE" ]; then
        echo "[CLEANUP] Moving $FILE to quarantine..."
        mv "$FILE" "$QUARANTINE_DIR/"
    fi
done

# 2. Liquidate build artifacts
bash scripts/maintenance/sovereign-cleanse.sh

echo "[SENTINEL] Cleanup complete. Legacy files moved to $QUARANTINE_DIR"