/**
 * TS-Λ3 // FORENSIC INVENTORY GENERATOR [v6.9.0]
 * Path: scripts/inventory/generate-inventory-csv.js
 * Mission: Map physical substrate residency to CSV manifest.
 * Authority: THE OVERWATCH // SG-CANONICAL-2026
 * Status: AUTHORITATIVE // RECONCILED
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 🧬 CATEGORY MAP — CANONICAL WORKING SURFACE
// Reconciled with README v7.28.0 and Active Context v15.1.0
const CATEGORY_MAP = {
    "1_COMMAND_AND_CONTROL": [
        "RPR-REACT-MOTHERSHIP.code-workspace",
        ".gitignore",
        "README.md",
        "index.html",
        "package.json",
        "postcss.config.js",
        "tsconfig.json",
        "vite.config.ts",
        "firebase.json",
        "tailwind.config.js",
        "tsconfig.node.json",
        ".firebaserc",
        "eslint.config.js",
        "server.js",
        "strike.sh",
        "test-strike.sh"
    ],

    "2_GOVERNANCE_PLANE": [
        "docs/manifests/mothership-os-website-readme-v7.28.0.md",
        "docs/manifests/harbor-a-master-architectural-manifest-v8.0.0.md",
        "docs/manifests/ram-framework-prd-v1.2.0.md",
        "docs/manifests/sentinel-protocol-prd-v1.3.7.md",
        "docs/manifests/mothership-whitepaper-v1.1.3.md",
        "docs/ip/master-ip-submission-checklist-v3.2.0.md",
        "docs/ip/ip-claims-summary-v1.0.0.md",
        "docs/ip/ip-artifact-index-v1.2.0.md",
        "docs/ops/master-script-manifest-v3.0.0.md",
        "docs/ops/stabilization-protocol-v5.1.0.md",
        "docs/ops/tactical-script-audit-v1.0.0.md",
        "docs/ops/final-bridge-latch-analysis-v1.1.0.md",
        "docs/ops/sentinel-ledger-protocol-snippet.md",
        "docs/launch/production-launch-blueprint-v1.1.0.md",
        "os/active-context.md",
        "os/ip-claims-summary-v1.1.0.md",
        "os/sentinel-protocol-prd-v1.3.7.md",
        "os/substrate-directory-v2.4.0.md",
        "os/future-bridge-repair.md",
        "src/brand/stripe-pricing-todo.md",
        "src/brand/deployment-checklist.md"
    ],

    "3_CORE_ORCHESTRATION": [
        "src/main.tsx",
        "src/app.tsx",
        "src/i18n/i18n.ts",
        "src/vite-env.d.ts",
        "src/styles/index.css",
        "src/services/ollieclient.ts",
        "src/types/index.ts",
        "src/types/sentinel-diagrams.ts",
        "src/lib/firebase.ts",
        "src/contexts/authcontext.tsx",
        "src/contexts/workflowcontext.tsx"
    ],

    "4_UI_COMPONENTS": [
        "src/components/header.tsx",
        "src/components/footer.tsx",
        "src/components/hero.tsx",
        "src/components/foundations.tsx",
        "src/components/methods.tsx",
        "src/components/mothershipsection.tsx",
        "src/components/mothershipvisualizer.tsx",
        "src/components/overwatch.tsx",
        "src/components/home.tsx",
        "src/components/labs.tsx",
        "src/components/askollie.tsx",
        "src/components/legalstub.tsx",
        "src/components/audit-sidebar.tsx",
        "src/components/sectionheading.tsx",
        "src/components/sovereignglass.tsx",
        "src/components/icons/symboltile.tsx",
        "src/brand/mothershiposlogo.tsx",
        "src/brand/rprmasterlogo.tsx",
        "src/brand/myauditlogo.tsx",
        "src/brand/rprverifylogo.tsx"
    ],

    "5_PAGE_ENCLAVES": [
        "src/pages/labs/library-viewer.tsx",
        "src/pages/labs/checkout-pending.tsx"
    ],

    "6_LINGUISTIC_FISSION": [
        "src/locales/en/harbora.json",
        "src/locales/en/mothershipwhitepaper.json",
        "src/locales/my/harbora.json",
        "src/locales/my/mothershipwhitepaper.json",
        "src/locales/zh/harbora.json",
        "src/locales/zh/mothershipwhitepaper.json"
    ],

    "7_OPERATIONAL_SCRIPTS": [
        "scripts/ip-ledger-strike.sh",
        "scripts/devops/final-bridge-latch.sh",
        "scripts/devops/local-validate.sh",
        "scripts/devops/verify-ollie-cors.sh",
        "scripts/devops/wif-repair-strike.sh",
        "scripts/devops/wif-diagnostic-strike.sh",
        "scripts/devops/sentinel-full-strike.sh",
        "scripts/devops/ci-firebase-sa-verify.ts",
        "scripts/maintenance/emergency-repair-strike.sh",
        "scripts/maintenance/safe-smallcaps-latch.sh",
        "scripts/maintenance/sovereign-cleanse.sh",
        "scripts/maintenance/workspace-cleanup.sh",
        "scripts/maintenance/migrate-to-legacy.sh",
        "scripts/maintenance/organize-from-inventory.sh",
        "scripts/telemetry/sovereign-health-probe.sh",
        "scripts/telemetry/sovereign-telemetry-check.ts",
        "scripts/security/validate-env.js",
        "scripts/security/configure-secrets.js"
    ],

    "8_FORENSIC_ARCHIVE": [
        "reports/ip-ledger-deployment-log.csv",
        "reports/cleanup-diagnostic-v1.0.0.md",
        "reports/cleanup-mission-analysis-v1.1.0.md",
        "audit/forensic-diagnostic-v1.0.0.md",
        "audit/org-policy-blockade-diagnostic.md",
        "backend/functions/index.js",
        "backend/functions/olliechat.js",
        "backend/functions/package.json"
    ]
};

const OUTPUT_FILE = 'rpr-mothership-inventory-dates.csv';
const ROOT_DIR = path.join(__dirname, '../../');

function generateInventory() {
    let csvContent = 'category,relative_path,modified_at,status\n';

    console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
    console.log("⚓ Initiating Forensic Drive Mapping [v6.9.0]...");
    console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");

    Object.entries(CATEGORY_MAP).forEach(([category, files]) => {
        files.forEach(file => {
            const fullPath = path.join(ROOT_DIR, file);
            let status = 'LATCHED';
            let modifiedAt = '0000-00-00 00:00:00';

            if (fs.existsSync(fullPath)) {
                const stats = fs.statSync(fullPath);
                modifiedAt = stats.mtime.toISOString().replace('T', ' ').split('.')[0];
            } else {
                status = 'RESIDENCY_VOID';
                console.warn(`⚠️  VOID DETECTED: ${file}`);
            }

            csvContent += `${category},${file},${modifiedAt},${status}\n`;
        });
    });

    try {
        fs.writeFileSync(path.join(ROOT_DIR, OUTPUT_FILE), csvContent);
        console.log(`✅ Inventory Latched: ${OUTPUT_FILE}`);
    } catch (error) {
        console.error(`❌ Strike Failed: ${error.message}`);
    }
}

generateInventory();