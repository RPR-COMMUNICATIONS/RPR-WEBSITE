#!/bin/bash
# MYAUDIT Substrate Cleanse Script
# Removes legacy node_modules, build artifacts, and cache to ensure clean compilation

set -e

echo "🧹 Cleansing MYAUDIT Substrate..."

# Remove node_modules
if [ -d "node_modules" ]; then
  echo "  Removing node_modules..."
  rm -rf node_modules
fi

# Remove build output directories
for dir in dist dist-kontrol; do
  if [ -d "$dir" ]; then
    echo "  Removing $dir..."
    rm -rf "$dir"
  fi
done

# Remove Vite cache
if [ -d ".vite" ]; then
  echo "  Removing .vite cache..."
  rm -rf .vite
fi

# Remove Firebase hosting cache (Strategic Addition)
if [ -d ".firebase" ]; then
  echo "  Removing .firebase hosting cache..."
  find .firebase -name "hosting.*.cache" -exec rm -rf {} +
fi

# Remove macOS metadata files (Strategic Addition)
echo "  Removing .DS_Store files..."
find . -name ".DS_Store" -type f -delete

# Remove npm cache artifacts
if [ -f "package-lock.json" ]; then
  echo "  Removing package-lock.json..."
  rm -f package-lock.json
fi

# Remove TypeScript build info
if [ -d "backend/functions/lib" ]; then
  echo "  Removing backend/functions/lib..."
  rm -rf backend/functions/lib
fi

echo "✅ Substrate cleanse complete. Run 'npm install' to reinstall dependencies."