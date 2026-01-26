import { initializeApp, getApps, FirebaseApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, Auth } from 'firebase/auth';
import { getFirestore, Firestore } from 'firebase/firestore';

/**
 * TS-Λ3 // FIREBASE AUTH SUBSTRATE [v1.0.0]
 * Authority: Harbor A Authentication Gateway
 * Pattern: Singleton initialization with environment config support.
 */

let app: FirebaseApp | undefined;
let auth: Auth | undefined;
let db: Firestore | undefined;

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

export const initializeFirebase = (): { app: FirebaseApp | null; auth: Auth | null; db: Firestore | null } => {
  if (app && auth && db) return { app, auth, db };

  const config = getFirebaseConfig();
  if (!config) return { app: null, auth: null, db: null };

  // Prevent multiple initializations in HMR environments
  if (getApps().length === 0) {
    app = initializeApp(config);
  } else {
    app = getApps()[0];
  }

  auth = getAuth(app);
  db = getFirestore(app);
  return { app, auth, db };
};

export const getFirebaseAuth = (): Auth | null => {
  if (!auth) {
    const { auth: initializedAuth } = initializeFirebase();
    return initializedAuth;
  }
  return auth;
};

export const getFirebaseDb = (): Firestore | null => {
  if (!db) {
    const { db: initializedDb } = initializeFirebase();
    return initializedDb;
  }
  return db;
};

export const googleAuthProvider = new GoogleAuthProvider();
googleAuthProvider.setCustomParameters({
  prompt: 'select_account'
});