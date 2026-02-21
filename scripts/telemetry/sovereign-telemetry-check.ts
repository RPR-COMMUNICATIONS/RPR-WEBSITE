/**
 * TS-Λ3 // SOVEREIGN TELEMETRY CHECK [v1.0.0]
 * Path: scripts/telemetry/sovereign-telemetry-check.ts
 * Mission: Firestore vector security and environment configuration latch check.
 * Authority: THE OVERWATCH // SG-CANONICAL-2026
 */

import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, limit, query } from 'firebase/firestore';

const firebaseConfig = {
    projectId: "rpr-corporate-site",
    // Clinical config pulled from environment
    appId: process.env.VITE_FIREBASE_APP_ID,
};

async function verifyTelemetry() {
    console.log("------------------------------------------------");
    console.log("🛰️ INITIALIZING TELEMETRY PROBE...");

    try {
        const app = initializeApp(firebaseConfig);
        const db = getFirestore(app);

        // Probe POO Ledger for connectivity
        const pooRef = collection(db, 'artifacts', 'rpr-corporate-site', 'public', 'data', 'poo_ledger');
        const q = query(pooRef, limit(1));
        const snapshot = await getDocs(q);

        if (!snapshot.empty) {
            console.log("[SUCCESS] POO Ledger Connectivity Verified.");
            console.log(`[LATCH] Active Entry: ${snapshot.docs[0].id}`);
        } else {
            console.warn("[WARNING] POO Ledger is empty or unreachable.");
        }

        console.log("------------------------------------------------");
        process.exit(0);
    } catch (error) {
        console.error("[FATAL] Telemetry Breach:", error);
        process.exit(1);
    }
}

verifyTelemetry();