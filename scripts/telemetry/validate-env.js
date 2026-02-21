/**
 * TS-Λ3 // VALIDATE ENVIRONMENT [v4.1.0]
 * Path: scripts/security/validate-env.js
 * Mission: Verification of .env.sentinel pathing and availability.
 * Authority: THE OVERWATCH // SG-CANONICAL-2026
 */

import fs from 'fs';
import path from 'path';

const REQUIRED_VARS = [
    'VITE_FIREBASE_API_KEY',
    'VITE_FIREBASE_PROJECT_ID',
    'VITE_FIREBASE_APP_ID'
];

function validate() {
    const envPath = path.resolve(process.cwd(), '.env');

    if (!fs.existsSync(envPath)) {
        console.error("❌ [SENTINEL] .env substrate missing.");
        process.exit(1);
    }

    const content = fs.readFileSync(envPath, 'utf8');
    let missing = [];

    REQUIRED_VARS.forEach(v => {
        if (!content.includes(v)) missing.push(v);
    });

    if (missing.length > 0) {
        console.error("❌ [SENTINEL] Missing critical environment variables:");
        missing.forEach(m => console.log(`   - ${m}`));
        process.exit(1);
    }

    console.log("✅ [SENTINEL] Environment substrate validated.");
    process.exit(0);
}

validate();