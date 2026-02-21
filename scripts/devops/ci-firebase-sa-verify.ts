/**
 * TS-Λ3 // IDENTITY VERIFICATION COMMANDER [v1.4.12]
 * Path: scripts/devops/ci-firebase-sa-verify.ts
 * Purpose: Verify IAM authority for keyless WIF or ADC environments.
 */

import { GoogleAuth } from 'google-auth-library';
import * as fs from 'node:fs';
import * as path from 'node:path';

const FIREBASE_SITES: Record<string, { site: string; projectId: string }> = {
    'main': { site: 'rprcomms', projectId: 'rpr-corporate-site' },
    'corporate': { site: 'rpr-corporate-site', projectId: 'rpr-corporate-site' },
    'verify': { site: 'rpr-verify-site', projectId: 'rpr-corporate-site' }
};

async function verifyCIAuth(targetKey: string, jsonPath?: string) {
    const siteConfig = FIREBASE_SITES[targetKey.toLowerCase()];
    if (!siteConfig) throw new Error(`[FAIL] Unknown target: ${targetKey}`);

    const expectedProjectId = siteConfig.projectId;
    const isKeyless = !jsonPath || jsonPath === 'keyless' || jsonPath === '';

    console.log(`\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`);
    console.log(`  [SENTINEL] INITIATING IDENTITY VERIFICATION`);
    console.log(`  Expected Project: ${expectedProjectId}`);
    console.log(`━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n`);

    const auth = new GoogleAuth({
        keyFile: (!isKeyless && jsonPath && fs.existsSync(jsonPath)) ? path.resolve(jsonPath) : undefined,
        scopes: ['https://www.googleapis.com/auth/cloud-platform', 'https://www.googleapis.com/auth/firebase']
    });

    try {
        const resolvedProjectId = await auth.getProjectId();
        if (resolvedProjectId !== expectedProjectId) {
            throw new Error(`IDENTITY DRIFT: Auth project "${resolvedProjectId}" != Expected "${expectedProjectId}"`);
        }
        console.log(`✅ [SUCCESS] Identity Verified: ${resolvedProjectId}\n`);
    } catch (error: any) {
        console.error(`❌ [CRITICAL] Authentication rejected: ${error.message}`);
        process.exit(1);
    }
}

verifyCIAuth(process.argv[2] || 'main', process.argv[3]);