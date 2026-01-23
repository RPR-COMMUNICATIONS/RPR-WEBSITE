import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * RPR MOTHERSHIP | PRODUCTS HUB [v4.0.0]
 * Purpose: Remediate React-code injection error (ChildApp)
 */
@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="min-h-screen bg-[#050505] text-slate-100 font-sans selection:bg-primary/30 grid-bg pt-[108px] pb-[70px]">
      <main class="max-w-7xl mx-auto px-[20px] md:px-12 py-24">
        <div class="mb-16">
          <div class="flex items-center gap-4 mb-4">
            <div class="h-[1px] w-12 bg-primary/30"></div>
            <div class="text-[10px] font-black tracking-[0.5em] text-primary uppercase">Intelligence Substrate // Node Selection</div>
          </div>
          <h1 class="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-[0.85] text-white">
            Access the<br/>Command Plane.
          </h1>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <!-- VERIFY NODE -->
          <a href="https://verify.rprcomms.com" class="group p-10 bg-primary/[0.02] border border-primary/10 rounded-2xl hover:bg-primary/[0.04] hover:border-primary/40 transition-all relative overflow-hidden shadow-2xl">
            <div class="mb-12 p-4 bg-primary/10 rounded border border-primary/20 w-fit group-hover:bg-primary/20 transition-colors">
              <span class="material-symbols-outlined text-primary text-3xl">verified_user</span>
            </div>
            <div class="text-[10px] font-mono text-primary/40 uppercase mb-2 tracking-widest">Node ID: VERIFY-HARBOR-A</div>
            <h3 class="text-3xl font-black uppercase tracking-tighter mb-4 text-white font-display">RPR VERIFY</h3>
            <p class="text-primary/40 text-sm mb-12 uppercase leading-relaxed font-light">Forensic Harbor A. Real-time document extraction and identity verification engine.</p>
            <div class="text-[10px] font-black tracking-[0.4em] uppercase text-primary/60 group-hover:text-primary transition-colors">
              Initiate Extraction →
            </div>
            <div class="absolute -right-8 -bottom-8 w-40 h-40 bg-primary/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </a>

          <!-- MYAUDIT NODE -->
          <a href="https://myaudit.rprcomms.com" class="group p-10 bg-white/[0.02] border border-white/5 rounded-2xl opacity-50 grayscale hover:grayscale-0 transition-all relative overflow-hidden">
            <div class="mb-12 p-4 bg-white/5 rounded border border-white/10 w-fit">
              <span class="material-symbols-outlined text-white/40 text-3xl">history</span>
            </div>
            <div class="text-[10px] font-mono text-white/20 uppercase mb-2 tracking-widest">Node ID: MYA-LEGACY</div>
            <h3 class="text-3xl font-black uppercase tracking-tighter mb-4 text-white font-display">MYAUDIT</h3>
            <p class="text-white/40 text-sm mb-12 uppercase leading-relaxed font-light">Legacy Clinical Plane. Historical data management and audit restoration logic.</p>
            <div class="text-[10px] font-black tracking-[0.4em] uppercase text-white/20">Archived Node</div>
          </a>
        </div>
      </main>
    </div>
  `,
  styles: [`
    .grid-bg {
      background-image: radial-gradient(circle at 1px 1px, #1A1A1A 1px, transparent 0);
      background-size: 24px 24px;
    }
  `]
})
export class ProductsComponent {}