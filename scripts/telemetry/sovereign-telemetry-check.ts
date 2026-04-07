/**
 * TS-Λ3 // SOVEREIGN TELEMETRY CHECK [v1.0.7]
 * Path: scripts/telemetry/sovereign-telemetry-check.ts
 * Mission: Privileged POO Ledger Handshake via ADC
 */

import admin from 'firebase-admin';
import { getFirestore } from 'firebase-admin/firestore';
import * as dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.resolve(__dirname, '../../.env') });

async function verifyTelemetry() {
    console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
    console.log("  🛰️  INITIALIZING PRIVILEGED PROBE [ADC_MODE]");
    console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");

    try {
        // 🛡️ LATCHING TO CLOUD IDENTITY
        if (!admin.apps.length) {
            admin.initializeApp({
                credential: admin.credential.applicationDefault(),
                projectId: 'rpr-corporate-site'
            });
        }

        const db = getFirestore();

        // 🎯 TARGET: Deep Path to POO Ledger
        // artifacts -> rpr-corporate-site -> public -> data -> poo_ledger
        const snapshot = await db.collection('artifacts')
            .doc('rpr-corporate-site')
            .collection('public')
            .doc('data')
            .collection('poo_ledger')
            .limit(1)
            .get();

        if (!snapshot.empty) {
            console.log("✅ [SUCCESS] POO Ledger Connectivity Verified.");
            console.log(`📡 [LATCH] Active Entry: ${snapshot.docs[0].id}`);
        } else {
            console.warn("⚠️ [WARNING] POO Ledger unreachable. Check if API is enabled.");
        }

        console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
        process.exit(0);
    } catch (error) {
        console.error("❌ [FATAL] Telemetry Breach:", error);
        process.exit(1);
    }
}

verifyTelemetry();