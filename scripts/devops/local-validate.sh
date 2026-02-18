#!/bin/bash
# Local validation: TypeScript check only (lint + build in verify chain)
set -e
npx tsc --noEmit
echo "[SENTINEL] Local validation passed."
