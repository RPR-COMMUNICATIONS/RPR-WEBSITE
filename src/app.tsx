import { useState, Suspense, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

/**
 * ⚓ TS-Λ3 // MOTHERSHIP ORCHESTRATOR [v7.52.4]
 * Path: src/App.tsx
 * Mission: Authoritative Route Wiring // Test Namespace Segregation
 * Authority: THE OVERWATCH // SG-CANONICAL-2026
 * Status: PRODUCTION_STABLE // LATCHED
 * Updates:
 * 1. TESTS: Relocated L4GridTest import and route to /tests/l4-grid.
 * 2. SYNC: Maintained production heartbeat and index.html font management.
 * 3. FIX: Resolved TS2307/TS2614 via explicit import mapping.
 */

import "./styles/index.css";

// 🧬 LAYOUT & NAVIGATION (Named Exports)
import { Header } from './components/header.tsx';
import { Footer } from './components/footer.tsx';

// 🏛️ PAGE ENCLAVES (Named Exports)
import { Home } from './components/home.tsx';
import { Labs } from './components/labs.tsx';

// 🧪 LAB NODES & ENCLAVES (Default Imports to Resolve TS2614)
import MyAudit from './pages/labs/myaudit.tsx';
import Verify from './pages/labs/verify.tsx';
import CheckoutPending from './pages/labs/checkout-pending.tsx';
import LibraryViewer from './pages/labs/library-viewer.tsx';
import { LegalStub } from './components/legalstub.tsx';

// 🚥 TEST HARNESS NODES (Internal Diagnostic Surface)
import L4GridTest from './pages/tests/l4-grid-test.tsx';

// 🤖 TACTICAL INTERFACE
import { AskOllie } from './components/askollie.tsx';
import AskOllieLauncher from './components/askollielauncher.tsx';

export default function App() {
  const [showOllie, setShowOllie] = useState(false);
  const [isLive, setIsLive] = useState(false);

  // 🛰️ PRODUCTION HEARTBEAT v2
  useEffect(() => {
    // Check for production environment
    const isProd = import.meta.env.PROD;

    if (isProd) {
      setIsLive(true);
      console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
      console.log("MOTHERSHIP_OS_LATCHED // v7.52.4");
      console.log("NODE: ASIA-SOUTHEAST1 // STATUS: OPERATIONAL");
      console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
    }
  }, []);

  return (
    <div className="bg-black text-white min-h-screen font-sans selection:bg-cyan-500/30 antialiased overflow-x-hidden relative flex flex-col">

      {/* 🧬 GLOBAL SUSPENSE LATCH */}
      <Suspense
        fallback={
          <div className="bg-black min-h-screen flex items-center justify-center">
            <div className="flex flex-col items-center gap-8">
              {/* Refined Spinner Geometry */}
              <div className="w-16 h-16 border border-white/10 border-t-cyan-500 rounded-full animate-spin"></div>
              <span className="text-[9px] font-mono text-cyan-400 uppercase tracking-[0.6em] animate-pulse">
                INGESTING_SUBSTRATE...
              </span>
            </div>
          </div>
        }
      >
        <Header />

        <main className="flex-1 pt-16 lg:pt-[108px] flex flex-col relative z-10 transition-all duration-500">
          <Routes>
            {/* 🏠 AUTHORITATIVE 6-ACT HOME FLOW */}
            <Route path="/" element={<Home />} />

            {/* 🧪 INTERNAL LAB ENCLAVES */}
            <Route path="/labs" element={<Labs />} />
            <Route path="/labs/library" element={<LibraryViewer />} />
            <Route path="/labs/myaudit" element={<MyAudit />} />
            <Route path="/labs/verify" element={<Verify />} />
            <Route path="/labs/checkout-pending" element={<CheckoutPending />} />

            {/* 🚥 ANTIGRAVITY TEST HARNESS ROUTE */}
            <Route path="/tests/l4-grid" element={<L4GridTest />} />

            <Route path="/legal/:docId" element={<LegalStub />} />

            {/* 🚥 404 REDIRECT LATCH */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        <Footer />

        {/* 🤖 OLLIE INTERFACE LATCH */}
        {showOllie && <AskOllie onClose={() => setShowOllie(false)} />}
        <AskOllieLauncher onClick={() => setShowOllie(!showOllie)} />
      </Suspense>

      {/* 🏙️ PRODUCTION STATUS HUD */}
      {isLive && (
        <div className="fixed bottom-4 left-4 z-[200] opacity-10 pointer-events-none select-none">
          <span className="text-[10px] font-mono text-cyan-400 tracking-widest">
            HARBOR_A_LIVE_v7.52.4
          </span>
        </div>
      )}
    </div>
  );
}