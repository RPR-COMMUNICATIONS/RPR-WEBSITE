import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import { WorkflowProvider } from "./contexts/WorkflowContext";
import { useHashScroll } from "./hooks/useHashScroll";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Home } from "./components/Home";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { LegalStub } from "./components/LegalStub";
import { Suspense, lazy } from "react";

const HexGrid = lazy(() => import("./components/background/HexGrid"));

const AppContent: React.FC = () => {
  useHashScroll();

  return (
    <div className="min-h-screen grid-bg text-slate-100 font-sans selection:bg-cyan-500/30 antialiased overflow-x-hidden relative">
      <Suspense fallback={null}>
        <HexGrid />
      </Suspense>
      <div className="relative z-10">
        <Header />
        <main className="pt-[108px] pb-[70px]">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/legal/:page" element={<LegalStub />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default function App() {
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
