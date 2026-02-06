import React from 'react';
import { Link } from 'react-router-dom';

/**
 * TS-Λ3 // THE ELDERS SCHEMATIC [v2.4.2]
 * Path: /labs/elders
 * Bauhaus Reference: Sentinel Mermaid Visual Restyle
 */
export const Elders: React.FC = () => {
  return (
    <div className="bg-elders-bg font-sans text-white overflow-x-hidden min-h-screen relative z-20">
      <div className="layout-container flex h-full min-h-screen grow flex-col">
        {/* Header / TopNavBar - Specific to Elders Schematic */}
        <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#383429] px-10 py-4 bg-elders-bg sticky top-0 z-30">
          <div className="flex items-center gap-4">
            <Link to="/" className="flex items-center gap-4 group">
              <div className="size-6 text-elders-primary group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-3xl">architecture</span>
              </div>
              <h2 className="text-white text-lg font-black leading-tight tracking-[-0.05em] uppercase">Sentinel Governance</h2>
            </Link>
          </div>
          <div className="flex flex-1 justify-end gap-8 items-center">
            <nav className="hidden md:flex items-center gap-9">
              <a className="text-[#b8b29d] hover:text-white text-xs font-bold leading-normal uppercase tracking-widest transition-colors" href="#">L1 Origin</a>
              <a className="text-white text-xs font-bold border-b-2 border-elders-primary leading-normal uppercase tracking-widest" href="#">L2 Elders</a>
              <a className="text-[#b8b29d] hover:text-white text-xs font-bold leading-normal uppercase tracking-widest transition-colors" href="#">L3 Nodes</a>
            </nav>
            <div className="flex items-center gap-4">
              <button className="flex min-w-[84px] cursor-pointer items-center justify-center rounded bg-elders-primary text-[#181611] px-4 py-2 text-xs font-black uppercase tracking-tighter hover:bg-white transition-colors">
                V1.8.2
              </button>
              <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-8 border border-[#534d3c]" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuA-CFpjDP-9XsF4W2Qr8L93VtJoiRIha3CGs3LY8h2MdH5LRag8DH0VGsqSoc97kUcagn2Mn386HZuDVUBQkOEjJAACr57T5Vz1hx2jxLKulHnOli577Ws3So_ZeNi3IpymF3G8sWikz1ItA94LhDbm44e2ponOhdLSJMTltJn7VSLRDygeDRwMW4mxoJ-HCAkU7-l5WxVaKawYXq7IRkNe5SQzW_a8_Y7xYUBsDEEKCyIBAR352Tlfzm33SNmqDDaS5JjpiiQbl88")' }}>
              </div>
            </div>
          </div>
        </header>

        <main className="flex flex-col items-center flex-1 px-6 md:px-40 py-12 relative">
          {/* Grid Background */}
          <div className="absolute inset-0 z-0 pointer-events-none opacity-40" style={{
            backgroundImage: 'radial-gradient(circle, #383429 1px, transparent 1px)',
            backgroundSize: '24px 24px'
          }}></div>

          <div className="layout-content-container flex flex-col max-w-[1000px] w-full relative z-10">
            {/* PageHeading */}
            <div className="flex flex-col gap-2 mb-12 border-l-4 border-elders-primary pl-6">
              <h1 className="text-white text-4xl md:text-5xl font-black leading-tight tracking-[-0.05em] uppercase">L2 - THE ELDERS</h1>
              <p className="text-[#b8b29d] text-xs md:text-sm font-medium uppercase tracking-[0.2em]">Sentinel Mermaid Visual Restyle Schematic Reference</p>
            </div>

            {/* Schematic Canvas Area */}
            <div className="relative w-full border border-[#383429] bg-elders-charcoal/50 p-8 md:p-16 flex flex-col items-center shadow-2xl">
              {/* Shared State Matrix Border (Dashed Frame) */}
              <div className="relative border-2 border-dashed border-elders-slate/40 p-6 md:p-10 w-full mb-16">
                <span className="absolute -top-3 left-6 bg-elders-charcoal px-3 text-[10px] text-elders-slate font-bold tracking-[0.3em]">SHARED_STATE_DECISION_MATRIX</span>
                {/* Triad Blocks */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {/* Block 1 */}
                  <div className="group flex flex-col items-center justify-center gap-4 border-2 border-elders-slate bg-elders-sand p-8 transition-all hover:border-elders-primary cursor-crosshair">
                    <span className="material-symbols-outlined text-elders-charcoal text-4xl">account_tree</span>
                    <h3 className="text-elders-charcoal text-center text-sm font-black leading-tight uppercase tracking-tight">Perplexity Architect</h3>
                  </div>
                  {/* Block 2 */}
                  <div className="group flex flex-col items-center justify-center gap-4 border-2 border-elders-slate bg-elders-sand p-8 transition-all hover:border-elders-primary cursor-crosshair">
                    <span className="material-symbols-outlined text-elders-charcoal text-4xl">hub</span>
                    <h3 className="text-elders-charcoal text-center text-sm font-black leading-tight uppercase tracking-tight">Gemini Engineer</h3>
                  </div>
                  {/* Block 3 */}
                  <div className="group flex flex-col items-center justify-center gap-4 border-2 border-elders-slate bg-elders-sand p-8 transition-all hover:border-elders-primary cursor-crosshair">
                    <span className="material-symbols-outlined text-elders-charcoal text-4xl">security</span>
                    <h3 className="text-elders-charcoal text-center text-sm font-black leading-tight uppercase tracking-tight">Sentinel Governor</h3>
                  </div>
                </div>
              </div>

              {/* Schematic Lines: Connecting Triad to Sub-Tier */}
              <div className="relative w-full h-24 hidden md:block">
                {/* Vertical Down from center */}
                <div className="absolute left-1/2 -top-16 w-0.5 h-16 bg-elders-slate -translate-x-1/2"></div>
                {/* Horizontal T-Junction */}
                <div className="absolute top-0 left-[25%] right-[25%] h-0.5 bg-elders-slate"></div>
                {/* Vertical Down Left */}
                <div className="absolute left-[25%] top-0 w-0.5 h-12 bg-elders-slate"></div>
                {/* Vertical Down Right */}
                <div className="absolute right-[25%] top-0 w-0.5 h-12 bg-elders-slate"></div>
              </div>

              {/* Sub-Tier Blocks */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-24 w-full md:w-[80%]">
                {/* Sub-Block 1 */}
                <div className="group flex items-center gap-4 border border-elders-slate bg-elders-sand/10 p-5 transition-all hover:bg-elders-sand/20 cursor-help">
                  <div className="p-2 border border-elders-slate group-hover:border-elders-primary transition-colors">
                    <span className="material-symbols-outlined text-elders-primary text-2xl">settings_input_component</span>
                  </div>
                  <div>
                    <h4 className="text-white text-xs font-black uppercase tracking-widest">Technical & Operations</h4>
                    <p className="text-[#b8b29d] text-[10px] uppercase">Sub-Tier Logic v1.2</p>
                  </div>
                </div>
                {/* Sub-Block 2 */}
                <div className="group flex items-center gap-4 border border-elders-slate bg-elders-sand/10 p-5 transition-all hover:bg-elders-sand/20 cursor-help">
                  <div className="p-2 border border-elders-slate group-hover:border-elders-primary transition-colors">
                    <span className="material-symbols-outlined text-elders-primary text-2xl">palette</span>
                  </div>
                  <div>
                    <h4 className="text-white text-xs font-black uppercase tracking-widest">Strategic & Creative</h4>
                    <p className="text-[#b8b29d] text-[10px] uppercase">Creative Governance v4.0</p>
                  </div>
                </div>
              </div>

              {/* Schematic Corner Annotations */}
              <div className="absolute top-2 left-2 text-[10px] text-elders-slate/50 font-mono uppercase">REF_ID: L2-E-S-01</div>
              <div className="absolute bottom-2 right-2 text-[10px] text-elders-slate/50 font-mono uppercase">COORD: 45.8096 | 24.0000</div>
            </div>

            {/* Footer MetaText */}
            <div className="mt-12 flex flex-col md:flex-row justify-between items-center md:items-end border-t border-[#383429] pt-6 gap-6 md:gap-0 mb-12">
              <div className="flex gap-12">
                <div>
                  <p className="text-[#b8b29d] text-[10px] font-bold uppercase tracking-widest mb-1">Status</p>
                  <div className="flex items-center gap-2">
                    <div className="size-2 rounded-full bg-elders-primary animate-pulse"></div>
                    <p className="text-white text-xs font-black uppercase">Active Deployment</p>
                  </div>
                </div>
                <div>
                  <p className="text-[#b8b29d] text-[10px] font-bold uppercase tracking-widest mb-1">Architecture</p>
                  <p className="text-white text-xs font-black uppercase">Decentralized Bauhaus</p>
                </div>
              </div>
              <p className="text-[#b8b29d] text-[10px] font-normal uppercase tracking-widest">
                © 2024 Sentinel Governance Systems // All Rights Reserved
              </p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Elders;
