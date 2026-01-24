import { Github } from "lucide-react";
import { WorkflowProvider } from "./contexts/WorkflowContext";
import { Hero } from "./components/Hero";
import { Footer } from "./components/Footer";
import { Foundations } from "./components/Foundations";
import { Process } from "./components/Process";
import { Products } from "./components/Products";
import { Overwatch } from "./components/Overwatch";
import { AskOllie } from "./components/AskOllie";
import RprMasterLogo from "./components/brand/RprMasterLogo";

// --- SHARED TEXTURES & UI PRIMITIVES ---

const ArchitectTexture = () => (
  <div className="absolute inset-0 z-0 opacity-[0.08] pointer-events-none">
    <div className="grid grid-cols-8 grid-rows-2 h-full w-full">
      {[...Array(16)].map((_, i) => (
        <div 
          key={i} 
          className="border-[0.5px] border-cyan-500/10 grid-square-anim" 
          style={{ animationDelay: `${(i * 0.7)}s` }} 
        />
      ))}
    </div>
  </div>
);

const OllieNeuralPulse = ({ size = "lg" }: { size?: "sm" | "lg" }) => (
  <div className={`relative ${size === 'lg' ? 'w-24 h-24' : 'w-4 h-4'}`}>
    <div className="absolute inset-0 bg-cyan-500/10 rounded-full ollie-pulse" style={{ animationDelay: '-1s' }}></div>
    <div className="absolute inset-0 bg-cyan-500/20 rounded-full ollie-pulse"></div>
    <div className={`absolute ${size === 'lg' ? 'inset-4 shadow-[0_0_30px_#00E0FF]' : 'inset-1 shadow-[0_0_8px_#00E0FF]'} bg-cyan-500 rounded-full flex items-center justify-center`}>
      <div className={`${size === 'lg' ? 'w-6 h-6' : 'w-1 h-1'} bg-black rounded-full flex items-center justify-center`}>
        <div className={`bg-cyan-500 rounded-full animate-pulse ${size === 'lg' ? 'w-2 h-2' : 'w-0.5 h-0.5'}`}></div>
      </div>
    </div>
  </div>
);

const Header = () => (
  <header className="fixed top-0 w-full z-[100] bg-[#020617] backdrop-blur-md border-b border-white/10 flex items-center px-[20px] md:px-12 overflow-hidden h-[108px]">
    <ArchitectTexture />
    <div className="max-w-7xl mx-auto w-full flex items-center justify-between relative z-10">
      {/* Left: Logo */}
      <div className="flex items-center gap-4 py-2">
        <RprMasterLogo height={32} />
      </div>

      {/* Center: Global nav + section tabs (desktop) */}
      <div className="hidden lg:flex flex-col gap-1 items-center">
        {/* Top line – global nav */}
        <nav className="flex items-center gap-10 text-[10px] font-black tracking-[0.2em] uppercase text-zinc-500">
          {/* ABOUT US group */}
          <div className="group relative">
            <button className="hover:text-white transition-colors py-2">ABOUT US</button>
            <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
              <div className="bg-zinc-900 border border-white/10 p-4 flex flex-col gap-3 min-w-[180px] rounded-lg shadow-2xl text-[10px] font-mono tracking-[0.18em] uppercase">
                <a href="#foundations" className="hover:text-cyan-400 whitespace-nowrap">FOUNDATIONS</a>
                <a href="#principles" className="hover:text-cyan-400 whitespace-nowrap">PRINCIPLES</a>
                <a href="#process" className="hover:text-cyan-400 whitespace-nowrap">PROCESS</a>
              </div>
            </div>
          </div>

          {/* WORK group */}
          <div className="group relative">
            <button className="hover:text-white transition-colors py-2">WORK</button>
            <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
              <div className="bg-zinc-900 border border-white/10 p-4 flex flex-col gap-3 min-w-[180px] rounded-lg shadow-2xl text-[10px] font-mono tracking-[0.18em] uppercase">
                <a href="#how-we-work" className="hover:text-cyan-400 whitespace-nowrap">HOW WE WORK</a>
                <a href="#highlights" className="hover:text-cyan-400 whitespace-nowrap">HIGHLIGHTS</a>
              </div>
            </div>
          </div>

          {/* THE LAB group */}
          <div className="group relative">
            <button className="hover:text-white transition-colors py-2">THE LAB</button>
            <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
              <div className="bg-zinc-900 border border-white/10 p-4 flex flex-col gap-3 min-w-[220px] rounded-lg shadow-2xl text-[10px] font-mono tracking-[0.18em] uppercase">
                <a href="#in-house" className="hover:text-cyan-400 whitespace-nowrap">IN HOUSE SOLUTIONS</a>
                <a href="#industry" className="hover:text-cyan-400 whitespace-nowrap">INDUSTRY SOLUTIONS</a>
                <a href="#intelligence-labs" className="hover:text-cyan-400 whitespace-nowrap font-bold text-cyan-500">INTELLIGENCE LABS</a>
              </div>
            </div>
          </div>

          {/* ASK OLLIE */}
          <a
            href="#ask-ollie"
            className="hover:text-cyan-400 transition-colors flex items-center gap-2"
          >
            <OllieNeuralPulse size="sm" />
            ASK OLLIE
          </a>
        </nav>

        {/* Bottom line – section tabs */}
        <div className="flex items-center gap-6 text-[9px] font-mono uppercase tracking-[0.25em] text-zinc-600">
          <a href="#foundations" className="hover:text-cyan-400 transition-colors">
            FOUNDATIONS
          </a>
          <a href="#highlights" className="hover:text-cyan-400 transition-colors">
            HIGHLIGHTS
          </a>
          <a href="#overwatch" className="hover:text-cyan-400 transition-colors">
            OVERWATCH
          </a>
          <a href="#in-house" className="hover:text-cyan-400 transition-colors">
            THE LAB
          </a>
        </div>
      </div>

      {/* Right: repo badge + KONTROL CTA */}
      <div className="flex items-center gap-4">
        <a
          href="https://github.com/PRP-COMMUNICATIONS-LLC/RPR-VERIFY"
          target="_blank"
          rel="noreferrer"
          className="hidden sm:flex items-center gap-2 bg-white/5 border border-white/10 px-3 py-1.5 rounded-full hover:bg-cyan-500/10 transition-colors text-zinc-500 hover:text-cyan-400 shadow-xl hover:shadow-2xl"
        >
          <Github size={12} />
          <span className="text-[9px] font-black uppercase tracking-widest">
            REPO: RPR-VERIFY
          </span>
        </a>
        <a
          href="https://kontrol.rprcomms.com"
          className="flex items-center gap-3 bg-zinc-900 border border-white/10 hover:border-cyan-500/50 px-5 py-2.5 rounded transition-all group shadow-xl hover:shadow-2xl"
        >
          <div className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse shadow-[0_0_10px_#00E0FF]" />
          <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white">
            KONTROL
          </span>
        </a>
      </div>
    </div>
  </header>
);

export default function App() {
  return (
    <WorkflowProvider>
      <div className="min-h-screen bg-[#050505] text-slate-100 font-sans selection:bg-cyan-500/30 antialiased overflow-x-hidden">
        <Header />
        <main className="pt-[108px] pb-[70px]">
          <Hero />
          <Foundations />
          <Process />
          <Products />
          <Overwatch />
          <AskOllie />
        </main>
        <Footer />
      </div>
    </WorkflowProvider>
  );
}
