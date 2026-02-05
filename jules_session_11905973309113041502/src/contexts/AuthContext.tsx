import React, { createContext, useContext, useEffect, useState } from 'react';
import { 
  User, 
  onAuthStateChanged, 
  signInWithPopup, 
  signInWithRedirect, 
  getRedirectResult, 
  signOut as firebaseSignOut 
} from 'firebase/auth';
import { getFirebaseAuth, googleAuthProvider } from '../lib/firebase';

interface AuthContextType {
  user: User | null;
  loading: boolean;
  signIn: () => Promise<void>;
  signInWithGoogleRedirect: () => Promise<void>;
  signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

/**
 * TS-Λ3 // IDENTITY PERSISTENCE LAYER [v2.1.2]
 * Purpose: Ensures user state is maintained across SPA route transitions.
 * Authority: SG-CANONICAL-2026
 */
export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const auth = getFirebaseAuth();
    if (!auth) {
      setLoading(false);
      return;
    }

    // Handle Redirect Results (Post-OAuth return)
    getRedirectResult(auth)
      .then((result) => {
        if (result) {
          console.log('[SENTINEL_AUTH] Redirect Result Latched:', result.user.email);
        }
      })
      .catch((error) => {
        console.error('[SENTINEL_AUTH] Redirect Strike Failed:', error);
      });

    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
      if (currentUser) {
        console.log('[SENTINEL_AUTH] Session Persisted:', currentUser.email);
      }
    });

    return () => unsubscribe();
  }, []);

  const signIn = async () => {
    const auth = getFirebaseAuth();
    if (!auth) return;
    try {
      await signInWithPopup(auth, googleAuthProvider);
    } catch (error) {
      console.error('[SENTINEL_AUTH] Sign-in strike failed:', error);
    }
  };

  const signInWithGoogleRedirect = async () => {
    const auth = getFirebaseAuth();
    if (!auth) return;
    try {
      await signInWithRedirect(auth, googleAuthProvider);
    } catch (error) {
      console.error('[SENTINEL_AUTH] Redirect strike failed:', error);
    }
  };

  const signOut = async () => {
    const auth = getFirebaseAuth();
    if (!auth) return;
    try {
      await firebaseSignOut(auth);
      console.log('[SENTINEL_AUTH] Identity Disconnected');
    } catch (error) {
      console.error('[SENTINEL_AUTH] Sign-out failed:', error);
    }
  };

  return (
    <AuthContext.Provider value={{ user, loading, signIn, signInWithGoogleRedirect, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
