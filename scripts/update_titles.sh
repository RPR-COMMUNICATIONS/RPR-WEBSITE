#!/bin/bash

# ⚓ TS-Λ3 // NOMENCLATURE_SURGERY_SCRIPT [v1.5.0]
# Mission: Rollback Hero + Surgical Update to Whitepaper Manifests
# Specificity: LATCH ONLY TO VAULT DATA

ROOT_DIR="/Users/puvansivanasan/perplexity/jobs/active/2026-001-RPR-WEBSITE"

echo "🚀 RESTORING_HERO_BRAND_AND_FIXING_VAULT..."

# 1. RESTORE HERO UI (Emergency Rollback to Brand Standard)
# -----------------------------------------------------
HERO_FILE="$ROOT_DIR/src/components/hero.tsx"
if [ -f "$HERO_FILE" ]; then
    echo "Restoring Hero Title..."
    sed -i '' "s/'hero.title_line_1', '.*'/'hero.title_line_1', 'THE MOTHERSHIP OS'/g" "$HERO_FILE"
    sed -i '' "s/'hero.title_line_2', '.*'/'hero.title_line_2', 'RELATIONAL ACCOUNTABILITY'/g" "$HERO_FILE"
    sed -i '' "s/'hero.mandate', '.*'/'hero.mandate', 'A Sovereign Governance OS Built by Real Business Owners and Artificial Constructs.'/g" "$HERO_FILE"
fi

# 2. SURGICAL UPDATE TO VAULT MANIFESTS (The Whitepaper Section)
# -------------------------------------------------------------
LOCALES=("en" "my" "zh")
for lang in "${LOCALES[@]}"; do
    FILE="$ROOT_DIR/src/locales/$lang/mothershipwhitepaper.json"
    if [ -f "$FILE" ]; then
        echo "Updating Vault Metadata: $lang"
        # Set Whitepaper Title
        sed -i '' 's/"title": ".*"/"title": "How AI Brings Real Economic Value for Small Business Owners"/g' "$FILE"
        # Set Whitepaper Subtitle (The Legal Personhood Mandate)
        NEW_SUBTITLE="A company is a separate legal person under national law; the founder and officers are natural persons who carry personal legal duties for how that legal person is directed and used."
        sed -i '' "s/\"subtitle\": \".*\"/\"subtitle\": \"$NEW_SUBTITLE\"/g" "$FILE"
        
        # Update the 'All ↔ Source of Truth' description
        sed -i '' "s/All system states must align with audited external data ledgers and SSRN 6307238 statutes./$NEW_SUBTITLE/g" "$FILE"
    fi
done

echo "💎 HERO_RESTORED. VAULT_ALIGNED. RESTARTING_VITE_HUD..."