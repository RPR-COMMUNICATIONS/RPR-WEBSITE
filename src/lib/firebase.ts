import { initializeApp, getApps, FirebaseApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, Auth } from 'firebase/auth';
import { getFirestore, Firestore } from 'firebase/firestore';

/**
 * TS-Λ3 // FIREBASE AUTH SUBSTRATE [v1.0.1]
 * Path: src/lib/firebase.ts
 * Authority: THE OVERWATCH // SG-CANONICAL-2026
 * Mission: Identity and Ledger Gateway // Singleton Initialization
 * Status: AUTHORITATIVE // LATCHED
 */

let app: FirebaseApp | undefined;
let auth: Auth | undefined;
let db: Firestore | undefined;

/**
 * 🚥 CONFIG RESOLUTION
 * Ingests the stringified JSON from the environment substrate.
 */
const getFirebaseConfig = () => {
  // TS-Λ3 // CONFIG_LATCH: Resolution from Vite environment variables
  const configString = import.meta.env.VITE_RPR_FIREBASE_CONFIG;

  if (!configString) {
    console.warn('[SENTINEL] VITE_RPR_FIREBASE_CONFIG not found. Auth vectors disabled.');
    return null;
  }

  try {
    return JSON.parse(configString);
  } catch (error) {
    console.error('[SENTINEL] Failed to parse clinical config:', error);
    return null;
  }
};

/**
 * ⚙️ INITIALIZATION STRIKE
 * Establishes the singleton connection to Firebase services.
 */
export const initializeFirebase = (): { app: FirebaseApp | null; auth: Auth | null; db: Firestore | null } => {
  if (app && auth && db) return { app, auth, db };

  const config = getFirebaseConfig();
  if (!config) return { app: null, auth: null, db: null };

  // Prevent multiple initializations in HMR (Hot Module Replacement) environments
  if (getApps().length === 0) {
    app = initializeApp(config);
  } else {
    app = getApps()[0];
  }

  auth = getAuth(app);
  db = getFirestore(app);
  return { app, auth, db };
};

/**
 * 🛰️ AUTH LATCH
 * Authoritative access for the Identity Persistence Layer.
 */
export const getFirebaseAuth = (): Auth | null => {
  if (!auth) {
    const { auth: initializedAuth } = initializeFirebase();
    return initializedAuth;
  }
  return auth;
};

/**
 * 🏛️ DATABASE LATCH
 * Authoritative access for the Ledger Provenance engine.
 */
export const getFirebaseDb = (): Firestore | null => {
  if (!db) {
    const { db: initializedDb } = initializeFirebase();
    return initializedDb;
  }
  return db;
};

// 🧬 GOOGLE IDENTITY PROVIDER LATCH
export const googleAuthProvider = new GoogleAuthProvider();
googleAuthProvider.setCustomParameters({
  prompt: 'select_account'
});

export default app;