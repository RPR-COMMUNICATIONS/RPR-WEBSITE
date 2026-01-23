# Firebase Authentication Setup Guide

## Overview
Google Authentication has been integrated into the RPR Communications website using Firebase Auth.

## Setup Instructions

### 1. Create Firebase Project
1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click "Add project" or select existing project
3. Follow the setup wizard

### 2. Enable Google Authentication
1. In Firebase Console, navigate to **Authentication** → **Sign-in method**
2. Click on **Google** provider
3. Enable it and configure:
   - Project support email
   - Authorized domains (add your production domain)
4. Save changes

### 3. Get Firebase Configuration
1. In Firebase Console, go to **Project Settings** (gear icon)
2. Scroll down to "Your apps" section
3. Click the web icon (`</>`) to add a web app
4. Register your app with a nickname
5. Copy the Firebase configuration object

### 4. Get Complete Firebase Configuration

**Option 1: Firebase Console (Easiest)**
1. Go to: https://console.firebase.google.com
2. Select project: **RPR-VERIFY**
3. Click gear icon ⚙️ → **Project settings**
4. Scroll to "Your apps" section
5. Select "Web app" (`</>` icon)
6. Copy the entire `firebaseConfig` object:
   ```javascript
   const firebaseConfig = {
     apiKey: "AIzaSyC9yImskFScuBxHyPHpCYvwr_A3CpvLR90",
     authDomain: "rpr-verify.firebaseapp.com",
     projectId: "rpr-verify",
     storageBucket: "rpr-verify.appspot.com",
     messagingSenderId: "123456789012", // ⚠️ Get this value
     appId: "1:123456789012:web:abcdef1234567890" // ⚠️ Get this value
   };
   ```

### 5. Update Environment Files
Update both environment files with your Firebase config:

**`src/environments/environment.ts`** (development):
```typescript
export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyC9yImskFScuBxHyPHpCYvwr_A3CpvLR90",
    authDomain: "rpr-verify.firebaseapp.com",
    projectId: "rpr-verify",
    storageBucket: "rpr-verify.appspot.com",
    messagingSenderId: "YOUR_SENDER_ID", // ⚠️ Get from Firebase Console
    appId: "YOUR_APP_ID" // ⚠️ Get from Firebase Console
  }
};
```

**`src/environments/environment.prod.ts`** (production):
```typescript
export const environment = {
  production: true,
  firebase: {
    apiKey: "AIzaSyC9yImskFScuBxHyPHpCYvwr_A3CpvLR90",
    authDomain: "rpr-verify.firebaseapp.com",
    projectId: "rpr-verify",
    storageBucket: "rpr-verify.appspot.com",
    messagingSenderId: "YOUR_SENDER_ID", // ⚠️ Get from Firebase Console
    appId: "YOUR_APP_ID" // ⚠️ Get from Firebase Console
  }
};
```

**⚠️ Important:** Replace `YOUR_SENDER_ID` and `YOUR_APP_ID` with values from Firebase Console.

### 6. Install Dependencies
Run the following command to install Firebase:
```bash
npm install firebase
```

Note: `@angular/fire` was initially considered but we're using Firebase SDK directly for better compatibility with Angular 19.

### 7. Configure Authorized Domains
In Firebase Console → Authentication → Settings → Authorized domains, ensure these domains are added:
- ✅ `www.rprcomms.com`
- ✅ `rprcomms.com`
- ✅ `api.verify.rprcomms.com` (Singapore Node)
- ✅ `localhost` (for local development)

### 8. API Key Security (Important!)
1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Navigate to **APIs & Credentials** → **API Keys**
3. Find your Firebase API key: `AIzaSyC9yImskFScuBxHyPHpCYvwr_A3CpvLR90`
4. Click to edit and set restrictions:
   - **Application restrictions**: HTTP referrers (web sites)
     - Add: `https://www.rprcomms.com/*`
     - Add: `https://rprcomms.com/*`
     - Add: `https://*.vercel.app/*`
     - Add: `http://localhost:*` (for development)
   - **API restrictions**: Restrict to "Identity Toolkit API"
5. Save changes

## Implementation Details

### Components Created
- **`AuthService`** (`src/app/services/auth.service.ts`): Handles authentication logic
- **`AuthButtonComponent`** (`src/app/components/auth-button.component.ts`): UI component for sign-in/sign-out

### Features
- ✅ Google Sign-In with popup
- ✅ User state management
- ✅ Sign-out functionality
- ✅ User profile display (name, email, photo)
- ✅ Responsive design (desktop and mobile)

### Button Location
The authentication button appears in:
- Desktop: Header navigation bar (between "PRODUCTS" and "TALK TO AI")
- Mobile: Mobile menu (between "PRODUCTS" and "TALK TO AI")

## Next Steps (Optional Enhancements)

1. **Protected Routes**: Create route guards for authenticated-only pages
2. **User Dashboard**: Build a dashboard accessible after login
3. **Role-Based Access**: Implement user roles/permissions if needed
4. **Profile Management**: Allow users to update their profile
5. **Session Persistence**: Already handled by Firebase Auth

## Troubleshooting

### "Firebase not configured" warning
- Ensure `environment.ts` has valid Firebase config
- Check that `apiKey` is not "YOUR_API_KEY"

### Sign-in popup blocked
- Check browser popup blocker settings
- Verify authorized domains in Firebase Console

### CORS errors
- Ensure your domain is in Firebase authorized domains list
- Check Firebase project settings

## Security Notes
- ✅ Firebase API keys are safe to commit (they're public by design)
- ✅ API key restrictions applied in Google Cloud Console (application + API restrictions)
- ✅ Authorized domains configured in Firebase Auth
- ⚠️ Never commit other secrets (like Gemini API keys) to public repositories
- Consider using Vercel environment variables for sensitive production values

## Testing Checklist

### Local Development
```bash
npm run dev
# Open browser console, should see:
# ✅ Firebase initialized
# ✅ User signed out (if not logged in)
# ✅ No Firebase errors
```

### Production Deployment
```bash
npm run build
vercel --prod
# Visit: https://www.rprcomms.com
# Console should show:
# ✅ Firebase initialized
# ✅ Auth state detected
# ✅ No CORS errors
# ✅ Google sign-in button clickable
```

## Troubleshooting

### Error: "auth/unauthorized-domain"
**Cause:** Domain not in Firebase Authorized Domains list
**Fix:** 
- Firebase Console → Authentication → Settings → Authorized domains
- Verify `www.rprcomms.com` and `rprcomms.com` are listed

### Error: "Firebase: Error (auth/api-key-not-valid)"
**Cause:** API key restrictions are too strict or wrong project
**Fix:**
- Google Cloud Console → APIs & Credentials → API Keys
- Check restrictions include your domain
- Verify Identity Toolkit API is enabled

### Console Warning: "Firebase App named '[DEFAULT]' already exists"
**Cause:** Firebase initialized multiple times
**Fix:** Ensure `initializeApp()` is only called once in `main.ts`
