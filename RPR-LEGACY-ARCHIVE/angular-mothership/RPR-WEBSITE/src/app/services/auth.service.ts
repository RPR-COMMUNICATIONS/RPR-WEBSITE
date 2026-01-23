import { Injectable } from '@angular/core';
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, User } from 'firebase/auth';
import { Observable, from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private auth = getAuth();
  private googleProvider = new GoogleAuthProvider();

  /**
   * Sign in with Google using Firebase Auth
   * @returns Observable<User> - The authenticated user
   */
  signInWithGoogle(): Observable<User> {
    return from(signInWithPopup(this.auth, this.googleProvider).then(result => result.user));
  }

  /**
   * Sign out the current user
   * @returns Observable<void>
   */
  signOut(): Observable<void> {
    return from(signOut(this.auth));
  }

  /**
   * Get the current authenticated user
   * @returns User | null
   */
  getCurrentUser(): User | null {
    return this.auth.currentUser;
  }

  /**
   * Get user login history to detect first-time vs returning users
   * @returns Promise with isFirstLogin, lastLoginDate, and accountAge
   * @throws Error if no user is logged in
   */
  async getUserLoginHistory(): Promise<{
    isFirstLogin: boolean;
    lastLoginDate: Date;
    accountAge: number; // days
  }> {
    const user = this.getCurrentUser();
    if (!user) {
      throw new Error('No user logged in');
    }

    const lastLogin = new Date(user.metadata.lastSignInTime!);
    const created = new Date(user.metadata.creationTime!);
    const isFirstLogin = lastLogin.getTime() === created.getTime();
    const accountAge = Math.floor((Date.now() - created.getTime()) / (1000 * 60 * 60 * 24));

    return {
      isFirstLogin,
      lastLoginDate: lastLogin,
      accountAge
    };
  }

  /**
   * Observable of the current user state
   * @returns Observable<User | null>
   */
  get authState$(): Observable<User | null> {
    return new Observable(observer => {
      const unsubscribe = onAuthStateChanged(this.auth, user => {
        observer.next(user);
      });
      return () => unsubscribe();
    });
  }
}
