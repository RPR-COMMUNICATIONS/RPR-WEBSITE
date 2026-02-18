import { useState, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import './styles/index.css'; // ⬅️ add this line

/* 🧬 MOBILE DIAGNOSTIC HUD - Set true for width verification */
const SHOW_VIEWPORT_HUD = false;

/**
 * TS-Λ3 // MOTHERSHIP ORCHESTRATOR [v7.29.0]
 * Path: src/app.tsx
 * Mission: Named Import Synchronization // ESM Path Normalization
 * Authority: THE OVERWATCH // SG-CANONICAL-2026
 * Status: AUTHORITATIVE // LATCHED
 */

// 🧬 LAYOUT & NAVIGATION
import { Header } from './components/header';
import { Footer } from './components/footer';

// 🏛️ STRATEGIC LANDING SUBSTRATE
import { Home } from './components/home';

// 🧪 LAB NODES & ENCLAVES
import { Labs as LabsSection } from './components/labs';
import { LegalStub } from './components/legalstub';
import { CheckoutPending } from './pages/labs/checkout-pending';
import { LibraryViewer } from './pages/labs/library-viewer';
import { MyAudit } from './pages/labs/myaudit';
import { Verify as RprVerify } from './pages/labs/verify';

// 🤖 TACTICAL INTERFACE
import { AskOllie } from './components/askollie';
import { AskOllieLauncher } from './components/askollielauncher';

export default function App() {
  const [showOllie, setShowOllie] = useState(false);
  const [viewportWidth, setViewportWidth] = useState(
    typeof window !== 'undefined' ? window.innerWidth : 0,
  );

  useEffect(() => {
    const updateWidth = () => setViewportWidth(window.innerWidth);
    updateWidth();
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  return (
    <div className="bg-black text-white min-h-screen font-sans selection:bg-cyan-500 antialiased overflow-x-hidden relative flex flex-col">
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
      />

      <Header />

      <main className="flex-1 pt-16 lg:pt-[108px] flex flex-col relative z-10 transition-all duration-500">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/labs" element={<LabsSection />} />
          <Route path="/labs/library" element={<LibraryViewer />} />
          <Route path="/labs/myaudit" element={<MyAudit />} />
          <Route path="/labs/verify" element={<RprVerify />} />
          <Route path="/legal/:docId" element={<LegalStub />} />
          <Route path="/checkout-pending" element={<CheckoutPending />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      <Footer />

      {showOllie && <AskOllie onClose={() => setShowOllie(false)} />}
      <AskOllieLauncher onClick={() => setShowOllie(!showOllie)} />

      {SHOW_VIEWPORT_HUD && (
        <div className="fixed bottom-5 left-1/2 -translate-x-1/2 z-[9999] font-mono text-[10px] px-4 py-2 bg-black/90 border border-cyan-500/50 rounded-full text-cyan-400 pointer-events-none shadow-[0_0_30px_rgba(34,211,238,0.4)] flex items-center gap-3">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 animate-ping"></span>
          VIEWPORT_AXIS: <span className="font-black">{viewportWidth}PX</span>
        </div>
      )}
    </div>
  );
}
