import fs from 'node:fs';
import path from 'node:path';

/**
 * TS-Λ3 // MARKDOWN GENERATOR [v4.1.0]
 * Path: scripts/inventory/generate-inventory-markdown.mts
 * Mission: Project RPR-MOTHERSHIP-inventory-dates.csv to Markdown v4.1.x
 */

const REPO_ROOT = process.cwd();
const CSV_PATH = path.join(REPO_ROOT, 'RPR-MOTHERSHIP-inventory-dates.csv');

const HEADINGS: Record<string, { title: string, blurb: string }> = {
  "1_GLOBAL_ENTRY_CONFIG": { title: "🏛️ 1. GLOBAL ENTRY & CONFIG", blurb: "Core files governing the build system, environment settings, and browser entry points." },
  "2_ROUTING_PAGE_SHELLS": { title: "🧭 2. ROUTING & PAGE SHELLS", blurb: "Top-level layout components and state providers managing the application lifecycle." },
  "3_HOME_SECTIONS": { title: "🏠 3. \"/\" (HOME) SECTION COMPONENTS", blurb: "Vertical sections composing the primary narrative of the Mothership landing surface." },
  "4_MOTHERSHIP_VISUALIZER": { title: "🛰️ 4. MOTHERSHIP VISUALIZER STACK", blurb: "The hierarchical architectural interface and its specific layer implementations." },
  "5_ICON_VISUAL_PRIMITIVES": { title: "🎨 5. ICON & VISUAL PRIMITIVES", blurb: "The physical substrate of the visual identity and geometric standards." },
  "6_SERVICES_WIRING": { title: "⚙️ 6. SERVICES & WIRING", blurb: "Backend handshake logic and internationalization substrates." }
};

function run() {
  const args = process.argv.slice(2);
  const versionArg = args.find(a => a.startsWith('--version'));
  const version = versionArg ? versionArg.split('=')[1] || args[args.indexOf(versionArg) + 1] : 'v4.1.0';

  if (!fs.existsSync(CSV_PATH)) {
    console.error(`❌ Error: CSV missing at ${CSV_PATH}`);
    process.exit(1);
  }

  const content = fs.readFileSync(CSV_PATH, 'utf8').split('\n').slice(1);
  const data: Record<string, string[][]> = {};

  content.forEach(line => {
    const [cat, relPath, mod] = line.split(',');
    if (!cat) return;
    if (!data[cat]) data[cat] = [];
    data[cat].push([relPath, mod]);
  });

  let md = `# ⚓ RPR MOTHERSHIP REPOSITORY INVENTORY [${version}]\n\n`;
  md += `- **Repo Root:** \`${REPO_ROOT}\`\n`;
  md += `- **Sovereignty:** SG-CANONICAL-2026\n`;
  md += `- **Source of Truth:** \`RPR-MOTHERSHIP-inventory-dates.csv\`\n`;
  md += `- **Status:** AUTHORITATIVE INDEX // LATCHED\n\n---\n\n`;

  for (const [key, meta] of Object.entries(HEADINGS)) {
    md += `## ${meta.title}\n${meta.blurb}\n\n`;
    md += `| **File Path** | **Last Modified (local)** | **Notes** | **Version** |\n`;
    md += `| :--- | :--- | :--- | :--- |\n`;

    const rows = data[key] || [];
    rows.sort((a, b) => a[0].localeCompare(b[0])).forEach(([path, mod]) => {
      md += `| ${path} | ${mod} | | ${version} |\n`;
    });
    md += `\n---\n\n`;
  }

  const outputFileName = `RPR-MOTHERSHIP-REPOSITORY-INVENTORY-${version}.md`;
  fs.writeFileSync(path.join(REPO_ROOT, outputFileName), md, 'utf8');
  console.log(`✅ Success: Generated ${outputFileName}`);
}

run();