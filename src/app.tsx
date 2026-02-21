import { useState, Suspense, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

/**
 * ⚓ TS-Λ3 // MOTHERSHIP ORCHESTRATOR [v7.52.1]
 * Path: src/app.tsx
 * Mission: Resolve TS2614 Import Mismatch // Page Node Alignment
 * Authority: THE OVERWATCH // SG-CANONICAL-2026
 * Status: PRODUCTION_STABLE // LATCHED
 * Fix: Transitioned MyAudit and Verify to Default Imports to match physical substrate.
 * Fix: Maintained Named Exports for Shell Components (Home, Labs, Header, Footer).
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

// 🤖 TACTICAL INTERFACE
import { AskOllie } from './components/askollie.tsx';
import AskOllieLauncher from './components/askollielauncher.tsx';

export default function App() {
  const [showOllie, setShowOllie] = useState(false);
  const [isLive, setIsLive] = useState(false);

  // 🛰️ PRODUCTION HEARTBEAT
  useEffect(() => {
    setIsLive(true);
    console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
    console.log("⚓ MOTHERSHIP OS // HARBOR A OPERATIONAL");
    console.log("VERSION: v7.52.1 // NODE: ASIA-SOUTHEAST1");
    console.log("STATUS: TS2614_LIQUIDATED // IMPORT_SYNC_COMPLETE");
    console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
  }, []);

  return (
    <div className="bg-black text-white min-h-screen font-sans selection:bg-cyan-500 antialiased overflow-x-hidden relative flex flex-col">
      {/* 🔡 MATERIAL SYMBOLS HUD */}
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
      />

      {/* 🧬 GLOBAL SUSPENSE LATCH */}
      <Suspense
        fallback={
          <div className="bg-black min-h-screen flex items-center justify-center">
            <div className="flex flex-col items-center gap-6">
              <div className="w-12 h-12 border-2 border-cyan-500 border-t-transparent rounded-full animate-spin"></div>
              <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-[0.4em] animate-pulse">
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

      {/* 🏙️ PRODUCTION STATUS INDICATOR */}
      {isLive && (
        <div className="fixed bottom-4 left-4 z-[200] opacity-10 pointer-events-none select-none">
          <span className="text-[10px] font-mono text-cyan-400">HARBOR_A_LIVE_v7.52.1</span>
        </div>
      )}
    </div>
  );
}