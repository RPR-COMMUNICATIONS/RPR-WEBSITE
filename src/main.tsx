import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n/i18n.ts';

/**
 * TS-Λ3 // MAIN ENTRY SUBSTRATE [v4.2.4]
 * Path: src/main.tsx
 * Mission: Physical Drive Alignment // Resolve TS1261
 * Authority: THE OVERWATCH // SG-CANONICAL-2026
 * Status: AUTHORITATIVE // LATCHED
 */

// 🧬 SMALLCAPS MANDATE LATCH
import App from './app.tsx';
import { AuthProvider } from './contexts/authcontext.tsx';
import './styles/index.css';

// 1. IDENTITY LATCH: Initialize Dark Mode
if (typeof document !== 'undefined') {
  document.documentElement.classList.add('dark');
}

// 2. VISUAL FIDELITY: Houdini Squircle Latch
if (typeof window !== 'undefined' && 'paintWorklet' in CSS) {
  // @ts-expect-error experimental CSS Houdini API
  CSS.paintWorklet
    .addModule('https://unpkg.com/css-houdini-squircle@0.3.0/squircle.min.js')
    .catch(() => console.warn('[SENTINEL] Squircle fallback active'));
}

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error('[SENTINEL] FATAL: Mount point #root missing from index.html.');
}

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <I18nextProvider i18n={i18n}>
      <BrowserRouter>
        <AuthProvider>
          <App />
        </AuthProvider>
      </BrowserRouter>
    </I18nextProvider>
  </React.StrictMode>,
);
