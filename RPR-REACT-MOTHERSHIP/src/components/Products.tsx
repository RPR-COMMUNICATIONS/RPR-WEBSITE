import React from 'react';
import { InsightIcon } from './InsightIcon';

export const Products: React.FC = () => {
  return (
    <section className="px-[20px] md:px-12 py-24 bg-background-dark border-b border-border-dark" id="products">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-primary font-bold tracking-[0.4em] text-[10px] mb-4 flex items-center gap-4 uppercase">
          // INTELLIGENCE SUBSTRATE // NODE SELECTION
        </h2>
        <h3 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter mb-12">
          Labs
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* VERIFY */}
          <a href="https://verify.rprcomms.com" className="group p-10 bg-primary/[0.02] border border-primary/10 rounded-2xl hover:bg-primary/[0.04] hover:border-primary/40 transition-all relative overflow-hidden shadow-[0_0_40px_rgba(0,224,255,0.02)]">
            <div className="mb-12">
              <InsightIcon className="mx-0" />
            </div>
            <div className="text-[10px] font-mono text-primary/40 uppercase mb-2 tracking-widest">Node ID: VERIFY-A</div>
            <h3 className="text-3xl font-black uppercase tracking-tighter mb-4 text-white">RPR VERIFY</h3>
            <p className="text-primary/40 text-sm mb-12 leading-relaxed font-light uppercase">Forensic Harbor A. Real-time document extraction and identity verification engine.</p>
            <div className="flex items-center gap-2 text-[10px] font-black tracking-[0.4em] uppercase text-primary/60 group-hover:text-primary transition-colors">
              Initiate Extraction →
            </div>
            <div className="absolute -right-8 -bottom-8 w-40 h-40 bg-primary/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </a>

          {/* MYAUDIT (LEGACY) */}
          <a href="https://myaudit.rprcomms.com" className="group p-10 bg-white/[0.02] border border-white/5 rounded-2xl hover:bg-white/[0.04] transition-all relative overflow-hidden opacity-50 grayscale hover:grayscale-0">
            <div className="mb-12 p-4 bg-white/5 rounded border border-white/10 w-fit">
              <span className="material-symbols-outlined text-white/40 text-3xl">history</span>
            </div>
            <div className="text-[10px] font-mono text-white/20 uppercase mb-2 tracking-widest">Node ID: MYA-LEGACY</div>
            <h3 className="text-3xl font-black uppercase tracking-tighter mb-4 text-white">MYAUDIT</h3>
            <p className="text-white/40 text-sm mb-12 leading-relaxed font-light uppercase">Legacy Clinical Plane. Historical data management and audit restoration.</p>
            <div className="text-[10px] font-black tracking-[0.4em] uppercase text-white/20">
              Archived Node
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};