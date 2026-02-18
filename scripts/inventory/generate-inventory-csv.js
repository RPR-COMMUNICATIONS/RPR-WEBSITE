/**
 * TS-Λ3 // FORENSIC INVENTORY GENERATOR [v6.2.0]
 * Path: scripts/inventory/generate-inventory-csv.js
 * Mission: Map physical substrate residency to CSV manifest.
 * Authority: THE OVERWATCH // SG-CANONICAL-2026
 */

const fs = require('fs');
const path = require('path');

// 🧬 CATEGORY MAP — CANONICAL WORKING SURFACE
// Updated to include all requested files while maintaining clinical path accuracy.
const CATEGORY_MAP = {
    // Root + config
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
        "tsconfig.node.json"
    ],

    // Governance / whitepaper / command surface
    "2_GOVERNANCE_PLANE": [
        "os/active-context.md",
        "os/ip-claims-summary.md",
        "os/mothership-os-command-surface.md",
        "os/production-launch-blueprint.md",
        "os/ram-governance-prd.md",
        "os/sentinel-protocol-prd.md",
        "os/substrate-directory-v2.3.0.md",
        "os/whitepaper-mothership-os.md"
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

    // UI components + brand
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
        "src/brand/mothershiposlogo.tsx"
    ],

    // Pages
    "5_PAGE_ENCLAVES": [
        "src/pages/labs/library-viewer.tsx",
        "src/pages/labs/myaudit.tsx",
        "src/pages/labs/verify.tsx",
        "src/pages/labs/checkout-pending.tsx"
    ],

    // i18n
    "6_LINGUISTIC_FISSION": [
        "src/locales/en/harbora.json",
        "src/locales/en/mothershipwhitepaper.json",
        "src/locales/my/harbora.json",
        "src/locales/my/mothershipwhitepaper.json",
        "src/locales/zh/harbora.json",
        "src/locales/zh/mothershipwhitepaper.json"
    ],

    // Scripts
    "7_OPERATIONAL_SCRIPTS": [
        "scripts/deploy/deploy-strike.sh",
        "scripts/deploy/latch-targets.sh",
        "scripts/devops/local-validate.sh",
        "scripts/devops/wif-repair-strike.sh",
        "scripts/inventory/generate-inventory-csv.js",
        "scripts/maintenance/recovery-strike.sh",
        "scripts/maintenance/sovereign-cleanse.sh",
        "scripts/tools/generate-rpr-branding.js"
    ],

    // Reports
    "8_FORENSIC_ARCHIVE": [
        "REPORTS/Stripe Pricing Manifest.md"
    ]
};

const OUTPUT_FILE = 'rpr-mothership-inventory-dates.csv';
const ROOT_DIR = path.join(__dirname, '../../');

function generateInventory() {
    let csvContent = 'category,relative_path,modified_at,status\n';

    console.log("⚓ Initiating Forensic Drive Mapping...");

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