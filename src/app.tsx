import { useState, Suspense, useEffect } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

/**
 * ⚓ TS-Λ3 // MOTHERSHIP ORCHESTRATOR [v7.55.2]
 * Path: src/app.tsx
 * Mission: Operation Perception // Dynamic i18n Routing
 * Authority: RPR COMMUNICATIONS LLC // CASE #00260103
 * Status: AUTHORITATIVE // i18n_LATCH_ACTIVE
 */

import "./styles/index.css";

// 🧬 LAYOUT & NAVIGATION
import { Header } from './components/header.tsx';
import { Footer } from './components/footer.tsx';

// 🏛️ PAGE ENCLAVES
import { Home } from './components/home.tsx';
import { Labs } from './components/labs.tsx';

// 🧪 LAB NODES & ENCLAVES
import MyAudit from './pages/labs/myaudit.tsx';
import Verify from './pages/labs/verify.tsx';
import CheckoutPending from './pages/labs/checkout-pending.tsx';
import VaultViewer from './pages/labs/vault-viewer.tsx';
import BabbleStandard from './pages/labs/babblestandard.tsx';
import { LegalStub } from './components/legalstub.tsx';

// 🚥 TEST HARNESS NODES
import L4GridTest from './pages/tests/l4-grid-test.tsx';

// 🤖 TACTICAL INTERFACE
import { AskOllie } from './components/askollie.tsx';
import AskOllieLauncher from './components/askollielauncher.tsx';

export default function App() {
  const [showOllie, setShowOllie] = useState(false);
  const { i18n } = useTranslation();
  const location = useLocation();

  // 🌐 LINGUISTIC & TEMPORAL SYNC LATCH
  useEffect(() => {
    // 1. Force physical HTML lang attribute to match i18n state
    document.documentElement.lang = i18n.language;

    // 2. Telemetry Log for Production Nodes
    if (import.meta.env.PROD) {
      console.log(`⚓ MOTHERSHIP_OS_LATCHED // v7.55.2 // LANG: ${i18n.language.toUpperCase()}`);
    }

    // 3. Reset Scroll Position on Route Change
    window.scrollTo(0, 0);
  }, [i18n.language, location.pathname]);

  return (
    <div className="bg-black text-white min-h-screen font-sans selection:bg-cyan-500/30 antialiased overflow-x-hidden relative flex flex-col">

      {/* 🛠️ MECHANICAL CSS LATCH: Responsive Scaling Protocols */}
      <style>{`
        @media (max-width: 640px) {
          .text-8xl { font-size: 3.5rem !important; line-height: 1 !important; }
          .text-7xl { font-size: 3rem !important; line-height: 1 !important; }
          .text-6xl { font-size: 2.5rem !important; line-height: 1 !important; }
          .text-5xl { font-size: 2.25rem !important; line-height: 1.1 !important; }
          h1, h2 { letter-spacing: -0.02em !important; }
          section, main { max-width: 100vw !important; overflow-x: hidden !important; }
        }
      `}</style>

      {/* 🧬 GLOBAL SUSPENSE LATCH */}
      <Suspense
        fallback={
          <div className="bg-black min-h-screen flex items-center justify-center">
            <div className="flex flex-col items-center gap-8">
              <div className="w-16 h-16 border border-white/10 border-t-cyan-500 rounded-full animate-spin"></div>
              <span className="text-[9px] font-mono text-cyan-400 uppercase tracking-[0.6em] animate-pulse">
                ACCESSING_VAULT...
              </span>
            </div>
          </div>
        }
      >
        <Header />

        {/* 🛡️ BEZEL PROTECTION: Standardized Safe Zone */}
        <main className="flex-1 pt-16 lg:pt-[108px] flex flex-col relative z-10 transition-all duration-500 max-w-full px-4 sm:px-6 lg:px-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/labs" element={<Labs />} />

            {/* 📍 WHITEPAPER REDIRECT LATCH */}
            <Route path="/labs/library" element={<Labs />} />

            <Route path="/labs/vault" element={<VaultViewer />} />
            <Route path="/labs/myaudit" element={<MyAudit />} />
            <Route path="/labs/verify" element={<Verify />} />
            <Route path="/labs/babble" element={<BabbleStandard />} />
            <Route path="/labs/checkout-pending" element={<CheckoutPending />} />
            <Route path="/tests/l4-grid" element={<L4GridTest />} />
            <Route path="/legal/:docId" element={<LegalStub />} />

            {/* 🛡️ CATCH-ALL REDIRECT */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        <Footer />

        {/* 🤖 OLLIE INTERFACE LATCH */}
        {showOllie && <AskOllie onClose={() => setShowOllie(false)} />}
        <AskOllieLauncher onClick={() => setShowOllie(!showOllie)} />
      </Suspense>

      {/* 🏙️ PRODUCTION STATUS HUD */}
      {import.meta.env.PROD && (
        <div className="fixed bottom-4 left-4 z-[200] opacity-10 pointer-events-none select-none">
          <span className="text-[10px] font-mono text-cyan-400 tracking-widest uppercase">
            VAULT_A_STABLE_v7.55.2 // {i18n.language.toUpperCase()}
          </span>
        </div>
      )}
    </div>
  );
}