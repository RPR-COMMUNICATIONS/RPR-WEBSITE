/**
 * TS-Λ3 // FORENSIC INVENTORY GENERATOR [v6.4.1]
 * Path: scripts/inventory/generate-inventory-csv.js
 * Mission: Map physical substrate residency to CSV manifest.
 * Authority: THE OVERWATCH // SG-CANONICAL-2026
 * Status: AUTHORITATIVE // LATCHED
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// ESM-safe __dirname / __filename
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 🧬 CATEGORY MAP — CANONICAL WORKING SURFACE
// Updated to reflect the clinical pathing for the Singapore Node.
const CATEGORY_MAP = {
    // Root + Infrastructure Config
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
        ".firebaserc"
    ],

    // Governance / Handover / Environment Specs
    "2_GOVERNANCE_PLANE": [
        "os/active_context.md",
        "os/environment-substrate-v1.2.1.md",
        "os/ip_claims_summary.md",
        "os/mothership_os_command_surface.md",
        "os/ollie-chat-strike-ledger.md",
        "os/olliechat-cors-fix-asia-southeast1-v1.0.0.md",
        "os/production_launch_blueprint.md",
        "os/ram_governance_prd.md",
        "os/sentinel_protocol_prd.md",
        "os/substrate_directory-v2.3.0.md",
        "os/whitepaper_mothership_os.md"
    ],

    // Core app wiring, styles, services
    "3_CORE_ORCHESTRATION": [
        "src/main.tsx",
        "src/app.tsx",
        "src/i18n/i18n.ts",
        "src/vite-env.d.ts",
        "src/styles/index.css",
        "src/services/ollieclient.ts"
    ],

    // UI components + Authoritative Brand
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
        "src/components/overwatchlabyrinth.tsx",
        "src/components/labyrinth.tsx",
        "src/components/labyrinthvariantboard.tsx",
        "src/components/chessboard.tsx",
        "src/components/labs.tsx",
        "src/components/askollie.tsx",
        "src/components/askollielauncher.tsx",
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

    // Page Enclaves
    "5_PAGE_ENCLAVES": [
        "src/pages/labs/library-viewer.tsx",
        "src/pages/labs/myaudit.tsx",
        "src/pages/labs/verify.tsx",
        "src/pages/labs/checkout-pending.tsx"
    ],

    // Linguistic i18n Substrate
    "6_LINGUISTIC_FISSION": [
        "src/locales/en/harbora.json",
        "src/locales/en/mothershipwhitepaper.json",
        "src/locales/my/harbora.json",
        "src/locales/my/mothershipwhitepaper.json",
        "src/locales/zh/harbora.json",
        "src/locales/zh/mothershipwhitepaper.json"
    ],

    // Operational Scripts (The Command Surface)
    "7_OPERATIONAL_SCRIPTS": [
        "scripts/deploy/deploy-strike.sh",
        "scripts/deploy/ip-ledger-strike.sh",
        "scripts/deploy/latch-targets.sh",
        "scripts/ci/ci-firebase-preflight.sh",
        "scripts/devops/configure-secrets.js",
        "scripts/devops/ci-firebase-sa-verify.ts",
        "scripts/devops/wif-repair-strike.sh",
        "scripts/devops/wif-diagnostic-strike.sh",
        "scripts/devops/verify-ollie-cors.sh",
        "scripts/maintenance/sovereign-cleanse.sh",
        "scripts/maintenance/module-recovery-strike.sh",
        "scripts/maintenance/organize-from-inventory.sh",
        "scripts/tools/generate-rpr-branding.js",
        "scripts/inventory/generate-inventory-csv.js"
    ],

    // Forensic Archive & Deferred Specializations
    "8_FORENSIC_ARCHIVE": [
        "REPORTS/Stripe Pricing Manifest.md",
        "backend/functions/index.js",
        "backend/functions/olliechat.js",
        "backend/archive/specialists/vision_engine.py",
        "backend/archive/specialists/test_vision_engine.py"
    ]
};

const OUTPUT_FILE = 'rpr-mothership-inventory-dates.csv';
const ROOT_DIR = path.join(__dirname, '../../');

function generateInventory() {
    let csvContent = 'category,relative_path,modified_at,status\n';

    console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
    console.log("⚓ Initiating Forensic Drive Mapping [v6.4.1]...");
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
