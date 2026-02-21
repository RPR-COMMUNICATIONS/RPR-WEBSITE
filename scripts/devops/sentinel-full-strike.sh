#!/bin/bash

# TS-Λ3 // SENTINEL FULL STRIKE [v4.3.0]
# Path: scripts/devops/sentinel-full-strike.sh
# Mission: Unified topology initialization, IAM verification, and multi-harbor deployment.
# Authority: THE OVERWATCH // SG-CANONICAL-2026

echo "------------------------------------------------"
echo "⚓ RPR SOVEREIGN: FULL TOPOLOGY STRIKE"
echo "------------------------------------------------"

# 1. IAM & AUTHORITY HANDSHAKE
echo "[1/4] Verifying Sovereign Identity..."
bash scripts/devops/local-validate.sh
if [ $? -ne 0 ]; then echo "[FATAL] Identity validation failed."; exit 1; fi

# 2. SUBSTRATE SYNCHRONIZATION
echo "[2/4] Normalizing Case-Sensitivity..."
bash scripts/maintenance/safe-smallcaps-latch.sh

# 3. HARBOR DEPLOYMENT SEQUENCE
# Harbor A (Mothership)
echo "[3/4] Striking Harbor A (rprcomms.com)..."
bash scripts/ip-ledger-strike.sh

# Harbor B (Verify) - Future Latch
# firebase deploy --project rpr-verify-b

# Harbor C (MyAudit) - Future Latch
# firebase deploy --project rpr-myaudit

# 4. TELEMETRY PULSE
echo "[4/4] Executing Health Probe..."
bash scripts/telemetry/sovereign-health-probe.sh

echo "------------------------------------------------"
echo "[SENTINEL] Full Strike Successful. All Harbors Latched."
echo "------------------------------------------------"