import { initializeApp, applicationDefault } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';

/**
 * RPR-KONTROL | SOVEREIGN SEEDING PROTOCOL [v1.3.1]
 * Authority: TS-Λ3 (CROWN SECRET)
 * Project: rpr-myaudit (Clinical Harbor)
 * Target: Year of Assessment 2026
 * Logic: F.I.E. Baseline Initialization
 */

const PROJECT_ID = 'rpr-myaudit';
const ENTITY_ID = 'massive-activation-1234567-X';

// Initialize with Application Default Credentials (ADC)
initializeApp({
  credential: applicationDefault(),
  projectId: PROJECT_ID,
});

const db = getFirestore();

async function executeSeedingStrike() {
  console.log('🛡️ [SENTINEL] INITIATING SOVEREIGN SEEDING PROTOCOL v1.3.1...');
  console.log(`📡 TARGET NODE: ${PROJECT_ID}`);

  const entityRef = db.collection('entities').doc(ENTITY_ID);

  // 1. Primary Entity Artifact
  const entityPayload = {
    name: 'Massive Activation Sdn. Bhd.',
    myCoID: '1234567-X',
    incDate: '2015-05-20',
    ownerId: 'founder-node',
    status: 'ACTIVE',
    region: 'asia-southeast1',
    assessmentYears: ['2026'], // Era 2026 Pivot
    metadata: {
      governance: 'SENTINEL v1.3.1',
      deployment: 'PHASE_B_STRIKE',
      initializedAt: new Date().toISOString(),
      principal: 'hello@butterdime.com',
    },
  };

  try {
    // Anchor the main entity
    await entityRef.set(entityPayload);
    console.log(`✅ Artifact Anchored: entities/${ENTITY_ID}`);

    // 2. Instantiate Forensic Pulse Collection (Phase B Metric Path)
    // This replaces the legacy 'assessmentYears' sub-collection logic
    const pulseRef = entityRef.collection('forensic_pulses').doc('2026');
    
    await pulseRef.set({
      year: '2026',
      integrityScore: 0.99,
      isAuditMode: false,
      lastExtraction: null,
      status: 'STABILIZED',
      schemaVersion: 'v4.27.0',
      updatedAt: new Date().toISOString()
    });
    console.log('✅ Forensic Pulse Initialized: forensic_pulses/2026');

    // 3. Governance Audit Trail
    const logId = `${ENTITY_ID}_B_INIT_${Date.now()}`;
    await db.collection('governance_sessions').doc(logId).set({
      entityId: ENTITY_ID,
      event: 'ERA_2026_SUBSTRATE_INIT',
      status: 'SUCCESS',
      timestamp: new Date().toISOString(),
      operator: 'SENTINEL_STRIKE_V1.3.1',
      certificate: 'RPR-SEED-V1.3.1-LOCKED'
    });
    console.log(`✅ Governance Log physicalized: ${logId}`);

    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
    console.log('🏁 [SENTINEL] SEEDING COMPLETE: Clinical Harbor is functional.');
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');

  } catch (error) {
    console.error('❌ [SENTINEL] SEEDING FAILED:', error);
    process.exit(1);
  }
}

executeSeedingStrike();
