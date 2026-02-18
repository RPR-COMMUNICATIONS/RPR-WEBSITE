#!/bin/bash
# RPR-KONTROL | SOVEREIGN GIT LATCH (v1.0.0)
# Role: THE ENGINEER
# Purpose: Stage the React Mothership substrate and CI/CD configs for commit.
# Authority: TS-Λ3

set -e

echo "🔒 [SENTINEL] INITIATING GIT LATCH..."

# Stage the React Mothership project
if [ -d "RPR-REACT-MOTHERSHIP" ]; then
  echo "  Staging RPR-REACT-MOTHERSHIP/..."
  git add RPR-REACT-MOTHERSHIP/
fi

# Stage CI/CD workflows
if [ -d ".github/workflows" ]; then
  echo "  Staging .github/workflows/..."
  git add .github/workflows/
fi

# Stage Scripts directory
if [ -d "Scripts" ]; then
  echo "  Staging scripts/..."
  git add scripts/
fi

# Show what will be committed
echo ""
echo "📋 Staged changes:"
git status --short

echo ""
echo "✅ [SENTINEL] GIT LATCH COMPLETE."
echo "Action: Review staged changes and commit with:"
echo "  git commit -m 'feat: stabilize substrate v4.26.0 and adapted forensic tools'"
