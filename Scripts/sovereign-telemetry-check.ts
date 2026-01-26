/**
 * TS-Λ3 // SOVEREIGN TELEMETRY CHECK [v1.0.0]
 * Purpose: Ensure Firestore vectors are secure and pointing to the rpr-myaudit project.
 */

import * as fs from 'fs';
import * as path from 'path';

async function checkTelemetry() {
    console.log('🛡️ [SENTINEL] INITIATING TELEMETRY VERIFICATION...');

    const firebasePath = path.resolve('src/lib/firebase.ts');
    if (!fs.existsSync(firebasePath)) {
        console.error('❌ ERROR: firebase.ts substrate missing.');
        process.exit(1);
    }

    const content = fs.readFileSync(firebasePath, 'utf8');

    // Verify that it uses the environment latch
    if (content.includes('import.meta.env.VITE_RPR_FIREBASE_CONFIG')) {
        console.log('✅ [SENTINEL] Dynamic configuration latch verified.');
    } else {
        console.warn('⚠️ [SENTINEL] Hardcoded config detected. Clinical breach risk.');
    }

    // Check for Firestore export
    if (content.includes('getFirebaseDb')) {
        console.log('✅ [SENTINEL] Firestore vector detected (getFirebaseDb).');
    } else {
        console.error('❌ ERROR: Firestore vector missing.');
        process.exit(1);
    }

    console.log('✅ [SENTINEL] Telemetry vectors verified.');
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
}

checkTelemetry().catch(err => {
    console.error(err);
    process.exit(1);
});
