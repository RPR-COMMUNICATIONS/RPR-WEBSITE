import 'zone.js';

import { bootstrapApplication } from '@angular/platform-browser';
import { provideZoneChangeDetection } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getAnalytics } from 'firebase/analytics';
import { AppComponent } from './app/app.component';
import { environment } from './environments/environment';
import { ModuleRegistry, AllCommunityModule } from 'ag-grid-community';

// AG Grid Forensic Module Registration
ModuleRegistry.registerModules([AllCommunityModule]);

// Polyfill process.env for browser environments
if (typeof process === 'undefined') {
  (window as any).process = {
    env: {
      // ------------------------------------------------------------------
      // PASTE YOUR GEMINI API KEY BELOW
      // ------------------------------------------------------------------
      API_KEY: 'AIzaSyDrZXkgu3vF82mZwD0IKbYK9IL-asrHWj4' // TODO: Paste your API key here from your local credentials file
      // ------------------------------------------------------------------
    }
  };
}

// Safety check for local development
const key = (window as any).process?.env?.API_KEY;
if (!key) {
  console.warn('⚠️ WARNING: No API Key found in src/main.ts. The AI Chat features will not work until you paste your key.');
} else {
  console.log('✅ API Key loaded.');
}

// Initialize Firebase
let firebaseApp;
try {
  if (environment.firebase.apiKey && environment.firebase.apiKey !== 'YOUR_API_KEY') {
    firebaseApp = initializeApp(environment.firebase);
    getAuth(firebaseApp);
    
    // Initialize Analytics only in browser environment and if measurementId exists
    if (typeof window !== 'undefined' && environment.firebase.measurementId) {
      try {
        getAnalytics(firebaseApp);
        console.log('✅ Firebase Analytics initialized.');
      } catch (analyticsError) {
        console.warn('⚠️ Analytics initialization failed (may not be available in this environment):', analyticsError);
      }
    }
    
    console.log('✅ Firebase initialized.');
  } else {
    console.warn('⚠️ WARNING: Firebase not configured. Please update src/environments/environment.ts with your Firebase config.');
  }
} catch (error) {
  console.warn('⚠️ WARNING: Firebase initialization failed:', error);
}

bootstrapApplication(AppComponent, {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideHttpClient()
  ]
}).catch(err => console.error(err));
