#!/bin/bash
# TS-Λ3 | Target Latching Strike v1.2.0 [AUS-Standard]
# Objective: Latch main -> rpr-corporate-site (Harbor A only)

PROJECT_ID="rpr-corporate-site"

echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "  INITIATING HARBOR A LATCH: $PROJECT_ID"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

# 1. Ensure project context
echo "[1/3] Setting project context to $PROJECT_ID..."
npx firebase-tools use "$PROJECT_ID" --alias default

# 2. Purge legacy Harbor B/C targets
echo "[2/3] Clearing legacy target mappings (corporate, verify)..."
npx firebase-tools target:clear hosting corporate --project "$PROJECT_ID" || true
npx firebase-tools target:clear hosting verify --project "$PROJECT_ID" || true

# 3. Authoritative Latch (Harbor A main target only)
echo "[3/3] Latching 'main' -> rpr-corporate-site..."
npx firebase-tools target:apply hosting main rpr-corporate-site --project "$PROJECT_ID"

echo -e "\n✅ LATCHING COMPLETE: Harbor A aligned."
echo "Target 'main' -> rpr-corporate-site"
echo -e "\nStrike Command: npx firebase-tools deploy --only hosting:main --project rpr-corporate-site"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"