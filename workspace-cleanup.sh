#!/bin/bash
# 🧹 TS-Λ3 // WORKSPACE CLEANUP AUTOMATION (v2.6.6)
# Purpose: Execute Clinical Purge for Jules
# Authority: hello@butterdime.com
# Audit: CLEANUP-STRIKE-v2.6.6

WORKSPACE_ROOT="/app"
QUARANTINE_DIR="/app/quarantine/components"
BACKUP_DIR="/app/backups"
REPORT_FILE="$WORKSPACE_ROOT/AUDIT/CLEANUP-REPORT-$(date +%Y%m%d-%H%M%S).md"

echo "🏗️ INITIATING WORKSPACE CLEANUP..."
echo "Date: $(date '+%Y-%m-%d %H:%M:%S')"
echo "Workspace: $WORKSPACE_ROOT"
echo ""

mkdir -p "$WORKSPACE_ROOT/AUDIT"

{
  echo "# 🧹 WORKSPACE CLEANUP REPORT (v2.6.6)"
  echo "Date: $(date '+%Y-%m-%d %H:%M:%S')"
  echo "Audit ID: CLEANUP-STRIKE-v2.6.6"
  echo "Authority: hello@butterdime.com"
  echo ""
} > "$REPORT_FILE"

# 1. BACKUP PHASE
echo "📦 Phase 1: Creating forensic snapshot..."
mkdir -p "$BACKUP_DIR"
cd "$WORKSPACE_ROOT" || { echo "❌ ERROR: Cannot access workspace"; exit 1; }

BACKUP_FILE="$BACKUP_DIR/jules-prep-$(date +%Y%m%d-%H%M%S).tar.gz"
# Exclude heavy or irrelevant directories
tar --exclude='./node_modules' --exclude='./.git' --exclude='./backups' --exclude='./quarantine' --exclude='./dist' -czf "$BACKUP_FILE" .

if [ $? -eq 0 ]; then
  echo "✅ Forensic snapshot created: $BACKUP_FILE"
  echo "## Phase 1: Backup" >> "$REPORT_FILE"
  echo "Snapshot: $BACKUP_FILE" >> "$REPORT_FILE"
  echo "Status: SUCCESS" >> "$REPORT_FILE"
  echo "" >> "$REPORT_FILE"
else
  echo "❌ ERROR: Backup failed"
  exit 1
fi
echo ""

# 2. QUARANTINE PHASE
echo "🗑️ Phase 2: Sequestering unapproved/legacy surfaces..."
mkdir -p "$QUARANTINE_DIR"

# Approved components to KEEP
APPROVED=(
  "Header.tsx"
  "Hero.tsx"
  "Foundations.tsx"
  "Methods.tsx"
  "SentinelVisualizer.tsx"
  "Footer.tsx"
  "LogoIcon.tsx"
  "Icon.tsx"
)

QUARANTINE_COUNT=0
echo "## Phase 2: Quarantine" >> "$REPORT_FILE"
echo "Target: $QUARANTINE_DIR" >> "$REPORT_FILE"

if [ -d "src/components" ]; then
  cd src/components
  for item in *; do
    # Skip if directory is empty
    [ -e "$item" ] || continue

    # Check if item is in approved list
    is_approved=false
    for app in "${APPROVED[@]}"; do
      if [[ "$item" == "$app" ]]; then
        is_approved=true
        break
      fi
    done

    if [ "$is_approved" = false ]; then
      mv "$item" "$QUARANTINE_DIR/"
      echo "  ✓ Sequestered: src/components/$item"
      echo "- Sequestered: src/components/$item" >> "$REPORT_FILE"
      ((QUARANTINE_COUNT++))
    fi
  done
  cd "$WORKSPACE_ROOT"
else
  echo "⚠️ WARNING: src/components not found"
  echo "- WARNING: src/components not found" >> "$REPORT_FILE"
fi

echo "📊 Total items quarantined: $QUARANTINE_COUNT"
echo "Total Quarantined: $QUARANTINE_COUNT" >> "$REPORT_FILE"
echo "" >> "$REPORT_FILE"

# 3. VERIFICATION PHASE
echo "🔍 Phase 3: Approved Component Audit"
echo "## Phase 3: Audit" >> "$REPORT_FILE"
echo "Expected components (8 core surfaces):" >> "$REPORT_FILE"
for app in "${APPROVED[@]}"; do
  echo "  - $app" >> "$REPORT_FILE"
done
echo "" >> "$REPORT_FILE"

echo "Current src/components/ directory:" >> "$REPORT_FILE"
if [ -d "src/components" ]; then
  ls -1 src/components/ | grep -E "\.tsx$|\.ts$" >> "$REPORT_FILE"
else
  echo "  (directory missing)" >> "$REPORT_FILE"
fi
echo "" >> "$REPORT_FILE"

# 4. BUILD CHECK
echo "🔨 Phase 4: Build Verification..."
echo "## Phase 4: Build Check" >> "$REPORT_FILE"
npm run build > build_output.log 2>&1
BUILD_EXIT_CODE=$?

if [ $BUILD_EXIT_CODE -eq 0 ]; then
  echo "✅ Build SUCCESS"
  echo "Status: SUCCESS" >> "$REPORT_FILE"
else
  echo "❌ Build FAILED (Exit Code: $BUILD_EXIT_CODE)"
  echo "Status: FAILED (Exit Code: $BUILD_EXIT_CODE)" >> "$REPORT_FILE"
  echo "### Error Summary" >> "$REPORT_FILE"
  echo '```' >> "$REPORT_FILE"
  tail -n 20 build_output.log >> "$REPORT_FILE"
  echo '```' >> "$REPORT_FILE"
fi
echo "" >> "$REPORT_FILE"

# 5. SUMMARY
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "✅ CLEANUP COMPLETE"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "Report generated: $REPORT_FILE"

echo "## Summary" >> "$REPORT_FILE"
echo "Marker: [$(date '+%Y-%m-%d %H:%M:%S')] // JULES DISPATCHED // ENVIRONMENT HARDENING" >> "$REPORT_FILE"
echo "Audit marker: CLEANUP-STRIKE-v2.6.6-COMPLETE" >> "$REPORT_FILE"
