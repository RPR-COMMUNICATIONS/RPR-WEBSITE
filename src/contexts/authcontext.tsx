import React, { createContext, useContext, useEffect, useState } from 'react';
import {
  User,
  onAuthStateChanged,
  signInWithPopup,
  signInWithRedirect,
  getRedirectResult,
  signOut as firebaseSignOut,
  Auth
} from 'firebase/auth';
import { getFirebaseAuth, googleAuthProvider } from '../lib/firebase.ts';

/**
 * TS-Λ3 // IDENTITY PERSISTENCE LAYER [v2.8.8]
 * Path: src/contexts/authcontext.tsx
 * Mission: Google Redirect/Popup Handshake Orchestration
 * Authority: THE OVERWATCH // SG-CANONICAL-2026
 * Status: AUTHORITATIVE // LATCHED
 */

interface AuthContextType {
  user: User | null;
  loading: boolean;
  signIn: () => Promise<void>;
  signInWithGoogleRedirect: () => Promise<void>;
  signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const auth = getFirebaseAuth() as Auth;
    if (!auth) {
      console.warn('[SENTINEL_AUTH] Auth substrate not detected. Bypassing persistence.');
      setLoading(false);
      return;
    }

    /**
     * 🚥 REDIRECT HANDSHAKE LATCH
     * Handles returning from Google OAuth redirect flow.
     */
    getRedirectResult(auth)
      .then((result) => {
        if (result) {
          console.log('[SENTINEL_AUTH] Redirect Result Latched:', result.user.email);
        }
      })
      .catch((error) => {
        console.error('[SENTINEL_AUTH] Redirect Strike Failed:', error);
      });

    /**
     * 🛰️ STATE OBSERVER
     * Synchronizes local user state with the Firebase Auth substrate.
     */
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
      if (currentUser) {
        console.log('[SENTINEL_AUTH] Identity Verified:', currentUser.email);
      }
    });

    return () => unsubscribe();
  }, []);

  /**
   * 🚥 POPUP STRIKE
   * Primary entry for desktop/high-bandwidth nodes.
   */
  const signIn = async () => {
    const auth = getFirebaseAuth() as Auth;
    if (!auth) return;
    try {
      await signInWithPopup(auth, googleAuthProvider);
    } catch (error) {
      console.error('[SENTINEL_AUTH] Sign-in strike failed:', error);
    }
  };

  /**
   * 🚥 REDIRECT STRIKE
   * Fallback entry for mobile/sandboxed environments.
   */
  const signInWithGoogleRedirect = async () => {
    const auth = getFirebaseAuth() as Auth;
    if (!auth) return;
    try {
      await signInWithRedirect(auth, googleAuthProvider);
    } catch (error) {
      console.error('[SENTINEL_AUTH] Redirect sequence initiated.');
    }
  };

  /**
   * 🧹 IDENTITY DISCONNECT
   * Liquidates the current session and clears state.
   */
  const signOut = async () => {
    const auth = getFirebaseAuth() as Auth;
    if (!auth) return;
    try {
      await firebaseSignOut(auth);
      console.log('[SENTINEL_AUTH] Identity Disconnected');
    } catch (error) {
      console.error('[SENTINEL_AUTH] Sign-out failure:', error);
    }
  };

  return (
    <AuthContext.Provider value={{ user, loading, signIn, signInWithGoogleRedirect, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

/**
 * 🛰️ IDENTITY HOOK
 * Authoritative access for consumer components.
 */
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('[SENTINEL] useAuth must be used within an AuthProvider.');
  }
  return context;
};

export default AuthContext;