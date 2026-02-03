#!/bin/bash
# 🧹 TS-Λ3 // WORKSPACE CLEANUP AUTOMATION (v2.1.0)
# Purpose: Execute Phase 1 Forensic Purge for Jules
# Authority: hello@butterdime.com
# Audit: CLEANUP-STRIKE-v2.1.0

WORKSPACE_ROOT="/app"
QUARANTINE_DIR="/app/quarantine/$(date +%Y%m%d)"
BACKUP_DIR="/app/backups"

echo "🏗️ INITIATING WORKSPACE CLEANUP..."
echo "Date: $(date '+%Y-%m-%d %H:%M:%S')"
echo "Workspace: $WORKSPACE_ROOT"
echo ""

# 1. BACKUP PHASE
echo "📦 Phase 1: Creating forensic snapshot..."
mkdir -p "$BACKUP_DIR"
cd "$WORKSPACE_ROOT" || { echo "❌ ERROR: Cannot access workspace"; exit 1; }

BACKUP_FILE="$BACKUP_DIR/jules-prep-$(date +%Y%m%d-%H%M%S).tar.gz"
tar -czf "$BACKUP_FILE" .

if [ $? -eq 0 ]; then
  echo "✅ Forensic snapshot created: $BACKUP_FILE"
  ls -lh "$BACKUP_FILE"
else
  echo "❌ ERROR: Backup failed"
  exit 1
fi
echo ""

# 2. QUARANTINE PHASE
echo "🗑️ Phase 2: Sequestering unapproved/legacy surfaces..."
mkdir -p "$QUARANTINE_DIR"

# CONSERVATIVE QUARANTINE LIST - Files explicitly violating v2.1.0
DEBRIS=(
  "src/components/NavigationRail.tsx"
  "src/components/CheckmateBoard.tsx"
  "src/components/ProductInventory.tsx"
)

QUARANTINE_COUNT=0
for file in "${DEBRIS[@]}"; do
  if [ -f "$file" ]; then
    mv "$file" "$QUARANTINE_DIR/"
    echo "  ✓ Sequestered: $file"
    ((QUARANTINE_COUNT++))
  else
    echo "  ⊘ Not found: $file (skipped)"
  fi
done

# CONDITIONAL QUARANTINE - Check content before removing
echo ""
echo "🔍 Checking for pre-v2.1.0 Overwatch biographies..."
if grep -q "Having spent 20 years" src/components/Overwatch.tsx 2>/dev/null; then
  echo "  ⚠️  Found old biography text in Overwatch.tsx"
  echo "  → Manual review required (not auto-quarantined)"
fi

echo "📊 Total files quarantined: $QUARANTINE_COUNT"
echo ""

# 3. VERIFICATION PHASE
echo "🔍 Phase 3: Component Inventory"
echo "Current src/components/ TypeScript files:"
ls -1 src/components/*.tsx src/components/*.ts 2>/dev/null | sed 's|src/components/||' || echo "  (no files found)"
echo ""

# 4. SUMMARY
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "✅ PHASE 1 CLEANUP COMPLETE"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "Build state: Potentially broken (expected)"
echo "Next action: Gemini review → Phase 2 implementation"
echo ""
echo "Audit marker: CLEANUP-STRIKE-v2.1.0-COMPLETE"
echo "Timestamp: $(date '+%Y-%m-%d %H:%M:%S %Z')"
