import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import { WorkflowProvider } from "./contexts/WorkflowContext";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Home } from "./components/Home";
import { MyAudit } from "./pages/labs/MyAudit";
import { Elders } from "./pages/labs/Elders";
import { LegalStub } from "./components/LegalStub";
import { HashRedirect } from "./components/HashRedirect";
import { BackToTop } from "./components/BackToTop";
import { Suspense, lazy, useEffect } from "react";
import { useLocation } from "react-router-dom";

const HexGrid = lazy(() => import("./components/background/HexGrid"));

/**
 * TS-Λ3 // ROUTING SUBSTRATE [v2.1.3]
 * Bugfix: pt-20 alignment for v1.8.3 header (80px).
 * SPA routing with redirects for /about and /contact.
 * Update: Added Material Symbols font loader.
 * Update: Conditional layout for Labs pages.
 */
function AppContent() {
  const location = useLocation();
  const isLabsPage = location.pathname.startsWith('/labs/');

  return (
    <div className="min-h-screen bg-[#050505] text-slate-100 font-sans selection:bg-cyan-500/30 antialiased overflow-x-hidden relative">
      <Suspense fallback={null}>
        <HexGrid />
      </Suspense>
      <div className="relative z-10">
        {!isLabsPage && <Header />}
        <main className={isLabsPage ? "" : "pt-20 pb-[70px]"}>
          <Routes>
            <Route path="/" element={<Home />} />
            {/* Redirect /about to #foundations anchor on home */}
            <Route path="/about" element={<HashRedirect to="/#foundations" />} />
            {/* Redirect /contact to #methods anchor on home */}
            <Route path="/contact" element={<HashRedirect to="/#methods" />} />
            {/* Dynamic legal document routing */}
            <Route path="/legal/:docId" element={<LegalStub />} />
            <Route path="/labs/myaudit" element={<MyAudit />} />
            <Route path="/labs/elders" element={<Elders />} />
            {/* Catch-all redirect to home */}
            <Route path="*" element={<HashRedirect to="/" />} />
          </Routes>
        </main>
        {!isLabsPage && <Footer />}
        {!isLabsPage && <BackToTop />}
      </div>
    </div>
  );
}

export default function App() {
  useEffect(() => {
    if (typeof document !== 'undefined') {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = 'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200';
      document.head.appendChild(link);
    }
  }, []);

  return (
    <BrowserRouter>
      <AuthProvider>
        <WorkflowProvider>
          <AppContent />
        </WorkflowProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}
