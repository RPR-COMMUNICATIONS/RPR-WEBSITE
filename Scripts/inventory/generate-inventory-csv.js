import fs from 'node:fs';
import path from 'node:path';

/**
 * TS-Λ3 // INVENTORY GENERATOR [v4.1.0]
 * Path: scripts/inventory/generate-inventory-csv.mts
 * Mission: Scan repo tree and update RPR-MOTHERSHIP-inventory-dates.csv
 */

const REPO_ROOT = process.cwd();
const CSV_PATH = path.join(REPO_ROOT, 'RPR-MOTHERSHIP-inventory-dates.csv');

// Canonical mapping of categories to file sets based on v4.1.0 standards
const CATEGORY_MAP: Record<string, string[]> = {
  "1_GLOBAL_ENTRY_CONFIG": [
    "index.html", "public/index.html", "src/main.tsx", "src/App.tsx", 
    "tailwind.config.js", "vite.config.ts", "tsconfig.json", "eslint.config.js", ".env"
  ],
  "2_ROUTING_PAGE_SHELLS": [
    "src/contexts/AuthContext.tsx", "src/contexts/WorkflowContext.tsx", 
    "src/components/Header.tsx", "src/components/Footer.tsx", "src/components/Home.tsx", "src/components/Labs.tsx"
  ],
  "3_HOME_SECTIONS": [
    "src/components/Hero.tsx", "src/components/Foundations.tsx", "src/components/Methods.tsx", 
    "src/components/MothershipSection.tsx", "src/components/Overwatch.tsx", "src/components/AskOllie.tsx", 
    "src/components/AskOllieLauncher.tsx"
  ],
  "4_MOTHERSHIP_VISUALIZER": [
    "src/components/MothershipVisualizer.tsx", "src/components/L0TheFirm.tsx", "src/components/L1OverwatchCommand.tsx",
    "src/components/L2TheElders.tsx", "src/components/L3TheForge.tsx", "src/components/L4Sovereignty.tsx",
    "src/components/c4-elements.tsx", "src/components/MermaidViewer.tsx", "src/types/index.ts"
  ],
  "5_ICON_VISUAL_PRIMITIVES": [
    "src/components/SymbolTile.tsx", "src/components/icons/SymbolTile.css", "src/styles/index.css"
  ],
  "6_SERVICES_WIRING": [
    "src/i18n.ts", "src/services/ollieClient.ts"
  ]
};

function formatDate(date: Date): string {
  return date.toISOString().replace('T', ' ').split('.')[0];
}

function run() {
  const rows = ['category,relative_path,modified_at'];

  for (const [category, files] of Object.entries(CATEGORY_MAP)) {
    const sortedFiles = [...files].sort();
    for (const relPath of sortedFiles) {
      const fullPath = path.join(REPO_ROOT, relPath);
      if (fs.existsSync(fullPath)) {
        const stats = fs.statSync(fullPath);
        rows.push(`${category},${relPath},${formatDate(stats.mtime)}`);
      }
    }
  }

  try {
    fs.writeFileSync(CSV_PATH, rows.join('\n'), 'utf8');
    console.log(`✅ Success: Updated ${CSV_PATH}`);
  } catch (err) {
    console.error(`❌ Error: Could not write to ${CSV_PATH}`, err);
    process.exit(1);
  }
}

run();