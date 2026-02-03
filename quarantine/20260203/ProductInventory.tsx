import React from 'react';
import { Package } from 'lucide-react';

/**
 * TS-Λ3 // PRODUCT INVENTORY [v1.8.7]
 * Level 4 Graduation Substrate.
 * Alignment: bg-[#020617], py-24, rounded-[2.5rem]
 */
export const ProductInventory: React.FC = () => {
  return (
    <section id="inventory" className="py-24 bg-[#020617] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <header className="mb-16">
          <span className="text-sky-500 font-mono text-[10px] uppercase tracking-[0.5em] block mb-4">
            Phase 4 // Graduation
          </span>
          <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter italic">
            PRODUCT <span className="text-sky-500">INVENTORY</span>
          </h2>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 rounded-[2.5rem] bg-slate-900/10 border border-slate-800 hover:border-sky-500/30 transition-all group duration-700">
            <Package className="w-6 h-6 text-sky-500 mb-6 group-hover:scale-110 transition-transform" />
            <h3 className="text-xl font-bold text-white uppercase mb-4">Instance Alpha</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Forensic audit substrate deployed for clinical validation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
