import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import { WorkflowProvider } from "./contexts/WorkflowContext";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Architecture } from "./components/Architecture";
import { Foundations } from "./components/Foundations";
import { Methods } from "./components/Methods";
import { MothershipSection } from "./components/MothershipSection";
import { MothershipVisualizer } from "./components/MothershipVisualizer";
import { Labs } from "./components/Labs";
import { Overwatch } from "./components/Overwatch";
import { Footer } from "./components/Footer";

/**
 * TS-Λ3 // CLINICAL SUBSTRATE [v2.1.0]
 * AUTHORITY: hello@butterdime.com
 * MISSION: ENVIRONMENT HARDENING (Phase 1)
 */

export interface NodeData {
  id: string;
  name: string;
  type: string;
  description: string;
  auditTrail: {
    timestamp: string;
    user: string;
    action: string;
    details: string;
  }[];
}

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <WorkflowProvider>
          <div className="min-h-screen bg-[#050505] text-slate-100 font-sans selection:bg-cyan-500/30 antialiased overflow-x-hidden relative">
            <div className="relative z-10">
              <Header />
              <Routes>
            <Route path="/" element={
              <main className="pt-20">
                <Hero />
                <Architecture />
                <Foundations />
                <Methods />
                <MothershipSection />
                <MothershipVisualizer />
                <Overwatch />
              </main>
            } />
            <Route path="/labs" element={
              <main className="pt-20">
                <Labs />
              </main>
            } />
          </Routes>
              <Footer />
            </div>
          </div>
        </WorkflowProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}
