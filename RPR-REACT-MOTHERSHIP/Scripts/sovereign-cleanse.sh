#!/bin/bash
# RPR-KONTROL | SOVEREIGN CLEANSE STRIKE (v1.0.0)
# Role: THE ENGINEER
# Purpose: Liquidate build artifacts and Vite cache to ensure clean React strikes.
# Authority: TS-Λ3

set -e

echo "🧹 [SENTINEL] INITIATING SUBSTRATE CLEANSE..."

# Targeted folders for Mothership V4
TARGETS=("node_modules" "dist" "dist-corporate" "dist-kontrol" ".vite")

for dir in "${TARGETS[@]}"; do
  if [ -d "$dir" ]; then
    echo "  Liquidating $dir..."
    rm -rf "$dir"
  fi
done

# Clean in React Mothership subdirectory
if [ -d "RPR-REACT-MOTHERSHIP" ]; then
  cd RPR-REACT-MOTHERSHIP
  for dir in "${TARGETS[@]}"; do
    if [ -d "$dir" ]; then
      echo "  Liquidating RPR-REACT-MOTHERSHIP/$dir..."
      rm -rf "$dir"
    fi
  done
  cd ..
fi

# Remove .DS_Store files
find . -name ".DS_Store" -type f -delete 2>/dev/null || true

# Remove Firebase cache
if [ -d ".firebase" ]; then
  echo "  Liquidating .firebase cache..."
  rm -rf .firebase/hosting.*.cache 2>/dev/null || true
fi

if [ -f "package-lock.json" ]; then
  echo "  Removing package-lock.json..."
  rm -f package-lock.json
fi

if [ -f "RPR-REACT-MOTHERSHIP/package-lock.json" ]; then
  echo "  Removing RPR-REACT-MOTHERSHIP/package-lock.json..."
  rm -f RPR-REACT-MOTHERSHIP/package-lock.json
fi

echo "✅ [SENTINEL] CLEANSE COMPLETE. Substrate sanitized."
echo "Action: Run 'npm install' to re-latch dependencies."
