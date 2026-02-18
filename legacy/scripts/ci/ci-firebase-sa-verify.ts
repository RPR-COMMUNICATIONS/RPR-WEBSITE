/**
 * ci-firebase-sa-verify.ts
 * Role: THE COMMANDER (Functional Validation Utility)
 * Purpose: Functionally verify IAM authority (Keyless WIF or Ambient ADC).
 * Authority: TS-Λ3 | SENTINEL-v1.4.12
 * =============================================================================
 * PLATFORM RUNTIME SPECIFICATIONS
 * =============================================================================
 * Context:          Harbor A (RPR-WEBSITE)
 * Local Root:       /Users/puvansivanasan/PERPLEXITY-NEW/JOBS/2026-001-RPR-WEBSITE/RPR-REACT-MOTHERSHIP/
 * Script Path:      scripts/ci-firebase-sa-verify.ts
 * OS Standard:      macOS (Local) / ubuntu-24.04 (CI)
 * =============================================================================
 */

import { GoogleAuth } from 'google-auth-library';
import * as fs from 'fs';
import * as path from 'path';

interface FirebaseSiteConfig {
  site: string;
  projectId: string;
}

// Authoritative Mapping for Harbor A
const FIREBASE_SITES: Record<string, FirebaseSiteConfig> = {
  'corporate': { site: 'rpr-corporate-site', projectId: 'rpr-corporate-site' },
  'verify': { site: 'rpr-verify-site', projectId: 'rpr-corporate-site' }
};

async function verifyCIAuth(targetKey: string, jsonPath?: string) {
  const siteConfig = FIREBASE_SITES[targetKey.toLowerCase()];
  if (!siteConfig) {
    throw new Error(`[FAIL] Unknown target harbor: ${targetKey}`);
  }

  const expectedProjectId = siteConfig.projectId;
  const isKeyless = !jsonPath || jsonPath === 'keyless' || jsonPath === '';
  
  console.log(`\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`);
  console.log(`  [SENTINEL] INITIATING IDENTITY VERIFICATION`);
  console.log(`  Target Harbor:    ${targetKey}`);
  console.log(`  Expected Project: ${expectedProjectId}`);
  console.log(`  Auth Mode:        ${isKeyless ? 'Keyless (WIF/Ambient)' : `Legacy Key (${jsonPath})`}`);
  console.log(`━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n`);

  const authOptions: any = {
    scopes: [
      'https://www.googleapis.com/auth/cloud-platform',
      'https://www.googleapis.com/auth/firebase',
      'https://www.googleapis.com/auth/cloudplatformprojects.readonly'
    ]
  };

  if (!isKeyless && jsonPath && fs.existsSync(jsonPath)) {
    const stats = fs.statSync(jsonPath);
    if (stats.size > 0) {
      authOptions.keyFile = path.resolve(jsonPath);
    }
  }

  const auth = new GoogleAuth(authOptions);

  try {
    const resolvedProjectId = await auth.getProjectId();
    
    // Identity Drift Protection
    if (resolvedProjectId !== expectedProjectId) {
      throw new Error(
        `IDENTITY DRIFT DETECTED!\n` +
        `  Authorized for:  "${resolvedProjectId}"\n` +
        `  Expected Harbor: "${expectedProjectId}"\n\n` +
        `Action: Set project via 'gcloud config set project ${expectedProjectId}'`
      );
    }

    const client = await auth.getClient();
    const tokenResponse = await client.getAccessToken();
    
    if (tokenResponse.token) {
      console.log(`✅ [SUCCESS] Identity Verified for Project: ${resolvedProjectId}`);
      console.log(`✅ [SUCCESS] Functional Handshake Complete.`);
      console.log(`━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`);
      console.log(`  [SENTINEL_ACK] Substrate is LATCHED and READY`);
      console.log(`━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n`);
    }
  } catch (error: any) {
    console.error(`\n❌ [CRITICAL] Authentication rejected by GCP.`);
    console.error(`Reason: ${error.message}`);
    process.exit(1);
  }
}

const target = process.argv[2] || 'corporate';
const saPath = process.argv[3]; 

verifyCIAuth(target, saPath).catch(err => {
  console.error(`\n🔴 [SENTINEL_ERROR] ${err.message}`);
  process.exit(1);
});