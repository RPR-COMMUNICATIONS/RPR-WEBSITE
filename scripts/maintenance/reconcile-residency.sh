#!/bin/bash
# TS-Λ3 // RESIDENCY RECONCILIATION STRIKE [v1.1.7]
# Path: scripts/maintenance/reconcile-residency.sh
# Mission: Liquidate Residency Voids // Comprehensive Script Relocation
# Authority: THE OVERWATCH // SG-CANONICAL-2026
# Risk Profile: PART 2 (SAFE/RELOCATION) // PART 3 (AGGRESSIVE/REFACTOR)

MODE="$1"  # --preview or --apply

echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "  ⚓ RPR SOVEREIGN: RESIDENCY RECONCILIATION (${MODE:---preview})"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

# 0. ROOT SOVEREIGNTY CHECK
if [ ! -f "package.json" ]; then
    echo "❌ [FATAL] Script must be executed from the project root."
    exit 1
fi

if [ "$MODE" != "--apply" ]; then
    echo "💡 INFO: Running in PREVIEW mode. No filesystem changes will be made."
    echo "💡 PROTOCOL: Review Part 2 (Relocations) then Part 3 (Naming Refactors)."
fi

# 1. Ensure Directory Substrate exists
mkdir -p docs/manifests docs/ip docs/ops docs/launch os audit \
         scripts/maintenance scripts/devops scripts/security scripts/telemetry \
         reports

# 2. PART 2: SCRIPT RELOCATION (HIGH SAFETY)
# Moves known scripts from root or root-scripts/ into clinical subfolders.
echo -e "\n[1/2] PART 2: Relocating operational scripts..."

move_if_exists() {
  local src="$1"
  local dst="$2"
  # Check if file exists anywhere (at root or in /scripts/)
  local target_file=$(basename "$src")
  local search_paths=("$src" "scripts/$target_file" "$target_file")

  for path in "${search_paths[@]}"; do
      if [ -f "$path" ]; then
          # Prevent self-moving if already in destination
          if [[ "$path" != "$dst"* ]]; then
              if [ "$MODE" = "--apply" ]; then
                  echo "  → Moving: $path to $dst"
                  mv "$path" "$dst"
              else
                  echo "  (preview) move: $path  →  $dst"
              fi
          fi
          return
      fi
  done
}

# --- MAINTENANCE ENCLAVE ---
move_if_exists scripts/safe-smallcaps-latch.sh scripts/maintenance/
move_if_exists scripts/sovereign-cleanse.sh scripts/maintenance/
move_if_exists scripts/emergency-repair-strike.sh scripts/maintenance/
move_if_exists scripts/organize-from-inventory.sh scripts/maintenance/
move_if_exists scripts/workspace-cleanup.sh scripts/maintenance/
move_if_exists scripts/recovery-strike.sh scripts/maintenance/
move_if_exists scripts/migrate-to-legacy.sh scripts/maintenance/
move_if_exists scripts/reconcile-residency.sh scripts/maintenance/

# --- DEVOPS ENCLAVE ---
move_if_exists scripts/local-validate.sh scripts/devops/
move_if_exists scripts/wif-repair-strike.sh scripts/devops/
move_if_exists scripts/wif-diagnostic-strike.sh scripts/devops/
move_if_exists scripts/verify-ollie-cors.sh scripts/devops/
move_if_exists scripts/final-bridge-latch.sh scripts/devops/
move_if_exists scripts/ci-firebase-sa-verify.ts scripts/devops/
move_if_exists scripts/sentinel-full-strike.sh scripts/devops/
move_if_exists scripts/ollie-iam-latch.sh scripts/devops/

# --- SECURITY ENCLAVE ---
move_if_exists scripts/configure-secrets.js scripts/security/
move_if_exists scripts/validate-env.js scripts/security/

# 3. PART 3: NAMING NORMALIZATION (LOW SAFETY - MAY BREAK LINKS)
# Enforces lowercase-hyphenated naming for governance and audit files.
echo -e "\n[2/2] PART 3: Normalizing naming drifts (Underscores/PascalCase)..."
echo "⚠️  WARNING: Part 3 may break internal markdown links and script references."

# Scan docs, os, and audit. Exclude .git and hidden directories.
find docs os audit -type f \( -name "*_*" -o -name "*[A-Z]*" \) | while read -r file; do
  
  dir_part=$(dirname "$file")
  base_part=$(basename "$file")
  # Convert to lowercase and change underscores to hyphens
  new_base=$(echo "$base_part" | tr '[:upper:]' '[:lower:]' | tr '_' '-')
  new_name="$dir_part/$new_base"
  
  if [ "$file" != "$new_name" ]; then
      if [ "$MODE" = "--apply" ]; then
        echo "  → Renaming: $file to $new_name"
        mv "$file" "$new_name" 2>/dev/null
      else
        echo "  (preview) rename: $file  →  $new_name"
      fi
  fi
done

echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
if [ "$MODE" = "--apply" ]; then
  echo "  RECONCILIATION COMPLETE."
  echo "  Action: Regenerate inventory to verify residency."
else
  echo "  PREVIEW COMPLETE."
  echo "  To execute: bash scripts/maintenance/reconcile-residency.sh --apply"
fi
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"