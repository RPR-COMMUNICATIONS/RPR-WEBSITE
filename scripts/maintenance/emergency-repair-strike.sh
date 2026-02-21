#!/bin/bash

# TS-Λ3 // EMERGENCY REPAIR STRIKE [v1.0.0]
# Path: scripts/maintenance/emergency-repair-strike.sh
# Mission: Liquidate Casing Ghosts & Restore Substrate Integrity.
# Authority: THE OVERWATCH // SG-CANONICAL-2026

echo "------------------------------------------------"
echo "⚓ RPR SOVEREIGN: EMERGENCY REPAIR INITIALIZED"
echo "------------------------------------------------"

# 1. PASCALCASE GHOST LIQUIDATION
# Scans for files that differ only by case from their lowercase versions
echo "[REPAIR] Scanning for Casing Ghosts in src/components/..."

TARGETS=("Header" "Hero" "Foundations" "Methods" "Footer" "L0TheFirm" "L1OverwatchCommand" "L2TheElders" "L3Workspace" "L4Products" "MothershipSection" "MothershipVisualizer" "SymbolTile")

for NAME in "${TARGETS[@]}"; do
    FILE="src/components/${NAME}.tsx"
    LOWER="src/components/$(echo $NAME | tr '[:upper:]' '[:lower:]').tsx"
    
    if [ -f "$FILE" ] && [ "$FILE" != "$LOWER" ]; then
        echo "[LATCH] Deleting ghost: $FILE"
        rm -f "$FILE"
        git rm --cached "$FILE" 2>/dev/null
    fi
done

# 2. LOCALES NORMALIZATION
if [ -d "public/locales" ]; then
    echo "[REPAIR] Normalizing Locales Case..."
    find public/locales -name "*[A-Z]*" | while read -r file; do
        lower=$(echo "$file" | tr '[:upper:]' '[:lower:]')
        mv "$file" "${file}.tmp" && mv "${file}.tmp" "$lower"
    done
fi

# 3. VERIFICATION
bash scripts/maintenance/safe-smallcaps-latch.sh

echo "------------------------------------------------"
echo "[SENTINEL] Repair Strike Complete. Substrate Restored."
echo "------------------------------------------------"