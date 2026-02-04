import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import { WorkflowProvider } from "./contexts/WorkflowContext";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Home } from "./components/Home";
import { MyAudit } from "./pages/labs/MyAudit";
import { LegalStub } from "./components/LegalStub";
import { HashRedirect } from "./components/HashRedirect";
import { BackToTop } from "./components/BackToTop";
import { Suspense, lazy } from "react";

const HexGrid = lazy(() => import("./components/background/HexGrid"));

/**
 * TS-Λ3 // ROUTING SUBSTRATE [v1.8.3]
 * Bugfix: pt-20 alignment for v1.8.3 header (80px).
 * SPA routing with redirects for /about and /contact.
 */
export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <WorkflowProvider>
          <div className="min-h-screen bg-[#050505] text-slate-100 font-sans selection:bg-cyan-500/30 antialiased overflow-x-hidden relative">
            <Suspense fallback={null}>
              <HexGrid />
            </Suspense>
            <div className="relative z-10">
              <Header />
              <main className="pt-20 pb-[70px]">
                <Routes>
                  <Route path="/" element={<Home />} />
                  {/* Redirect /about to #foundations anchor on home */}
                  <Route path="/about" element={<HashRedirect to="/#foundations" />} />
                  {/* Redirect /contact to #methods anchor on home */}
                  <Route path="/contact" element={<HashRedirect to="/#methods" />} />
                  {/* Dynamic legal document routing */}
                  <Route path="/legal/:docId" element={<LegalStub />} />
                  <Route path="/labs/myaudit" element={<MyAudit />} />
                  {/* Catch-all redirect to home */}
                  <Route path="*" element={<HashRedirect to="/" />} />
                </Routes>
              </main>
              <Footer />
              <BackToTop />
            </div>
          </div>
        </WorkflowProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}
