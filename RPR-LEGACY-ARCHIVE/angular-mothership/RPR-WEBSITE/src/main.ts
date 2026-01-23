import 'zone.js';

import { bootstrapApplication } from '@angular/platform-browser';
import { provideZoneChangeDetection } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getAnalytics } from 'firebase/analytics';
import { provideRouter, withInMemoryScrolling } from '@angular/router';
import { routes } from './app/app.routes';
import { AppComponent } from './app/app.component';
import { environment } from './environments/environment';

// Polyfill environment for browser
(window as any).process = (window as any).process || { env: {} };

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
    provideHttpClient(),
    provideRouter(routes,
      withInMemoryScrolling({ scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled' })
    )
  ]
}).catch(err => console.error(err));
