import { initializeApp, applicationDefault } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';

/**
 * RPR-KONTROL | SOVEREIGN TELEMETRY CHECK (v1.2.0)
 * Authority: TS-Λ3 (CROWN SECRET)
 * Purpose: Verify connectivity and seeded data in Firestore for Phase B testing.
 * Mode: Application Default Credentials (ADC)
 */

initializeApp({
  credential: applicationDefault(),
  projectId: 'rpr-myaudit',
});

const db = getFirestore();
const ENTITY_ID = 'massive-activation-1234567-X';

async function executeTelemetryCheck() {
  console.log('🔍 [SENTINEL] INITIATING TELEMETRY CHECK (v1.2.0)...');
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
  console.log('Target: rpr-myaudit (796960601918)');
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
  console.log('');

  try {
    // Query all entities to count Massive Activation documents
    const entitiesSnapshot = await db.collection('entities').get();
    const massiveActivationDocs = entitiesSnapshot.docs.filter(
      (doc) => doc.data().name?.includes('Massive Activation')
    );

    console.log(`✅ Total entities in collection: ${entitiesSnapshot.size}`);
    console.log(`✅ Massive Activation documents found: ${massiveActivationDocs.length}`);
    massiveActivationDocs.forEach((doc) => {
      console.log(`   - ID: ${doc.id}, Name: ${doc.data().name}`);
    });

    // Query the specific entity document
    const entityRef = db.collection('entities').doc(ENTITY_ID);
    const entityDoc = await entityRef.get();

    if (!entityDoc.exists) {
      console.error('❌ Entity document not found:', ENTITY_ID);
      process.exit(1);
    }

    const entityData = entityDoc.data();
    console.log('✅ Entity document retrieved:');
    console.log(`   Name: ${entityData?.name}`);
    console.log(`   MyCoID: ${entityData?.myCoID}`);
    console.log(`   Status: ${entityData?.status}`);
    console.log(`   Region: ${entityData?.region}`);

    // Query forensic_pulses subcollection (Phase B structure)
    const pulsesRef = entityRef.collection('forensic_pulses');
    const pulsesSnapshot = await pulsesRef.get();

    console.log(`✅ Forensic Pulses subcollection: ${pulsesSnapshot.size} document(s)`);
    pulsesSnapshot.forEach((doc) => {
      const pulseData = doc.data();
      console.log(`   - ${doc.id}: Year=${pulseData?.year}, Status=${pulseData?.status}, Integrity=${pulseData?.integrityScore}`);
    });

    // Query governance_sessions collection
    const governanceRef = db.collection('governance_sessions');
    const governanceSnapshot = await governanceRef
      .where('entityId', '==', ENTITY_ID)
      .limit(5)
      .get();

    console.log(`✅ Governance sessions: ${governanceSnapshot.size} document(s)`);
    governanceSnapshot.forEach((doc) => {
      const govData = doc.data();
      console.log(`   - Event: ${govData?.event}, Status: ${govData?.status}, Operator: ${govData?.operator}`);
    });

    console.log('');
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
    console.log('🏁 [SENTINEL] TELEMETRY CHECK COMPLETE: Connectivity verified.');
    console.log('Theatre Certificate: RPR-TELEMETRY-V1.2.0-CONNECTIVITY-VERIFIED');
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
  } catch (error) {
    console.error('');
    console.error('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
    console.error('❌ [SENTINEL] TELEMETRY CHECK FAILED:', error);
    console.error('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
    process.exit(1);
  }
}

executeTelemetryCheck();
