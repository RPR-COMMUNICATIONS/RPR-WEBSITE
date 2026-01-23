import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * RPR MOTHERSHIP | HEADER COMPONENT [v4.0.1]
 * Role: Architect Layer (Strategic Logic)
 * Constraints: 108px Fixed Height, Zero CLS.
 * Update: Liquidated NG5002 (@ escape) and unused import warning.
 */
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  template: `
    <header class="h-[108px] fixed top-0 w-full z-[100] bg-black/80 backdrop-blur-md border-b border-white/5 flex items-center px-[20px] md:px-12 overflow-hidden">
      
      <!-- ARCHITECT SUBSTRATE: STRATEGIC CHESS GRID -->
      <div class="absolute inset-0 z-0 opacity-[0.08] pointer-events-none">
        <div class="grid grid-cols-8 grid-rows-2 h-full w-full">
          <div *ngFor="let i of [].constructor(16); let idx = index" 
               class="border-[0.5px] border-primary/10 grid-square-anim"
               [style.animation-delay.s]="idx * 0.7">
          </div>
        </div>
      </div>

      <div class="max-w-7xl mx-auto w-full flex justify-between items-center relative z-10">
        
        <!-- LEFT: BRAND LATCH -->
        <div class="flex items-center gap-4 py-2">
          <div class="relative group h-10 w-10 flex items-center justify-center">
            <div class="absolute inset-0 bg-primary/20 blur-lg group-hover:bg-primary/40 transition-all duration-700"></div>
            <span class="material-symbols-outlined text-primary text-3xl relative z-10">radar</span>
          </div>
          <div class="flex flex-col leading-none">
            <span class="font-black text-xl tracking-tighter uppercase text-white">RPR</span>
            <span class="text-[9px] font-bold text-primary tracking-[0.3em] uppercase mt-1">Communications</span>
          </div>
        </div>

        <!-- CENTER: STRATEGIC NAV -->
        <nav class="hidden md:flex items-center gap-10 text-[10px] font-bold tracking-[0.2em] uppercase text-slate-400">
          <a class="hover:text-primary transition-colors" href="#foundations">Methods</a>
          <a class="hover:text-primary transition-colors" href="/products">Products</a>
          <a class="hover:text-primary transition-colors" href="#overwatch">Overwatch</a>
        </nav>

        <!-- RIGHT: KONTROL LATCH -->
        <div class="flex items-center gap-6">
          <div class="hidden lg:flex flex-col items-end border-r border-white/10 pr-6">
            <span class="text-[9px] font-black text-white/20 uppercase tracking-widest leading-none mb-1">Auth Principal</span>
            <span class="text-[11px] font-mono text-primary leading-none uppercase">hello&#64;butterdime.com</span>
          </div>

          <a href="https://kontrol.rprcomms.com" 
             class="flex items-center gap-3 bg-zinc-900 border border-white/10 hover:border-primary/50 px-4 py-2.5 rounded-lg transition-all group shadow-sm">
            <span class="flex h-5 w-5 items-center justify-center rounded-sm bg-white overflow-hidden">
              <img src="https://www.google.com/favicon.ico" alt="G" class="h-3 w-3" />
            </span>
            <span class="text-[10px] font-black uppercase tracking-[0.2em] group-hover:text-primary transition-colors text-white whitespace-nowrap">
              KONTROL LATCH
            </span>
          </a>
        </div>

      </div>
    </header>
  `,
  styles: [`
    @keyframes architectScan {
      0%, 100% { background: transparent; opacity: 0.1; }
      5% { background: rgba(0, 224, 255, 0.4); box-shadow: inset 0 0 15px #00E0FF; opacity: 1; }
      10% { background: transparent; opacity: 0.1; }
    }
    .grid-square-anim {
      animation: architectScan 10s infinite ease-in-out;
    }
    :host { display: block; }
  `]
})
export class HeaderComponent {}