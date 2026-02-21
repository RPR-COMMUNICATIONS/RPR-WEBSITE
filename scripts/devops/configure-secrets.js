/**
 * TS-Λ3 // SECRET CONFIGURATION UTILITY [v1.3.1]
 * Path: scripts/devops/configure-secrets.js
 * Mission: Inject unprefixed environment variables into the Vite substrate.
 * Authority: THE OVERWATCH // SG-CANONICAL-2026
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Target .env file is located two levels up from scripts/devops/
const targetPath = path.resolve(__dirname, '../../.env');

/**
 * Authoritative list of environment variables.
 * Merged from legacy v1.2.7 and new v1.3.0 substrate requirements.
 */
const secretKeys = [
    'PERPLEXITY_API_KEY',
    'GEMINI_API_KEY',
    'NOTION_API_KEY',
    'NOTION_PAGE_ID',
    'GOOGLE_CLIENT_ID_GOV',
    'FIREBASE_API_KEY',
    'FIREBASE_APP_ID',
    'FIREBASE_AUTH_DOMAIN',
    'FIREBASE_MESSAGING_SENDER_ID',
    'STRIPE_PUBLIC_KEY',
    'STRIPE_SECRET_KEY'
];

console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
console.log('  INITIATING SECRET INJECTION (v1.3.1)');
console.log('  Mode: RPR-SECRET-MODEL-V3 // MERGED');
console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');

let envContent = `# ⚓ RPR-COMMUNICATIONS SUBSTRATE\n`;
envContent += `# GENERATED: ${new Date().toISOString()}\n`;
envContent += `# AUTHORITY: THE OVERWATCH // SG-CANONICAL-2026\n\n`;

let latchedCount = 0;
let missingKeys = [];

secretKeys.forEach(key => {
    const value = process.env[key];
    if (value) {
        // Dual-track latching: Vite-prefixed for frontend and raw for node scripts
        envContent += `VITE_${key}="${value}"\n`;
        envContent += `${key}="${value}"\n`;
        console.log(`✅ [LATCHED] ${key}`);
        latchedCount++;
    } else {
        console.log(`⚠️  [MISSING] ${key}`);
        missingKeys.push(key);
    }
});

// Synthesize Firebase Config JSON for easy client-side ingestion
if (process.env.FIREBASE_API_KEY && process.env.FIREBASE_APP_ID) {
    const config = {
        apiKey: process.env.FIREBASE_API_KEY,
        authDomain: process.env.FIREBASE_AUTH_DOMAIN,
        projectId: "rpr-corporate-site",
        storageBucket: "rpr-corporate-site.firebasestorage.app",
        messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
        appId: process.env.FIREBASE_APP_ID
    };
    envContent += `VITE_RPR_FIREBASE_CONFIG='${JSON.stringify(config)}'\n`;
    console.log('✅ [LATCHED] VITE_RPR_FIREBASE_CONFIG');
}

try {
    fs.writeFileSync(targetPath, envContent);
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
    console.log(`  [SUCCESS] Substrate .env refreshed with ${latchedCount} keys.`);
    console.log(`  Target Path: ${targetPath}`);

    if (missingKeys.length > 0) {
        console.log('\n  ⚠️  STRIKE WARNING: Missing Infrastructure Fuel:');
        missingKeys.forEach(k => console.log(`     - ${k}`));
    }

    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');
} catch (error) {
    console.error(`❌ [FATAL] Substrate write failure: ${error.message}`);
    process.exit(1);
}