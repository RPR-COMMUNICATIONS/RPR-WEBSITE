import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * RPR MOTHERSHIP | FOOTER COMPONENT [v4.0.0]
 * Role: Engineer Layer (Logic Substrate)
 * Constraints: 70px Fixed Height, Zero CLS.
 */
@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  template: `
    <footer class="h-[70px] fixed bottom-0 w-full z-[100] bg-black border-t border-white/5 flex items-center px-[20px] md:px-12 overflow-hidden">
      
      <!-- ENGINEER LAYER: OXO PROCESSOR (Centered) -->
      <div class="absolute left-1/2 -translate-x-1/2 flex items-center justify-center h-full z-10 pointer-events-none opacity-30">
        <div class="grid grid-cols-3 grid-rows-3 gap-1">
          <!-- Cell Logic: Peacetime Draw Loop -->
          <div class="w-4 h-4 border border-primary/20 flex items-center justify-center text-[10px] font-mono text-primary oxo-anim-x">X</div>
          <div class="w-4 h-4 border border-primary/20"></div>
          <div class="w-4 h-4 border border-primary/20 flex items-center justify-center text-[10px] font-mono text-primary oxo-anim-x">X</div>
          
          <div class="w-4 h-4 border border-primary/20"></div>
          <div class="w-4 h-4 border border-primary/20 flex items-center justify-center text-[10px] font-mono text-primary oxo-anim-o">O</div>
          <div class="w-4 h-4 border border-primary/20"></div>
          
          <div class="w-4 h-4 border border-primary/20"></div>
          <div class="w-4 h-4 border border-primary/20"></div>
          <div class="w-4 h-4 border border-primary/20"></div>
        </div>
      </div>

      <div class="max-w-7xl mx-auto w-full flex justify-between items-center relative z-20">
        <div class="flex items-center gap-3 text-[10px] font-bold tracking-widest text-slate-500 uppercase">
          <span class="material-symbols-outlined text-primary text-xl">radar</span>
          <span class="hidden sm:inline">RPR COMMUNICATIONS LLC</span>
        </div>

        <div class="flex gap-8 text-[10px] font-bold uppercase text-slate-600">
          <a class="hover:text-primary transition-colors" href="#">Terms</a>
          <span class="text-white/5 font-mono hidden md:inline">TS-Λ3</span>
        </div>
      </div>
    </footer>
  `,
  styles: [`
    @keyframes drawX { 0%, 80% { opacity: 0; } 20%, 70% { opacity: 1; } }
    @keyframes drawO { 0%, 80% { opacity: 0; } 20%, 70% { opacity: 1; } }
    .oxo-anim-x { animation: drawX 6s infinite; }
    .oxo-anim-o { animation: drawO 6s infinite 1s; }
    :host { display: block; }
  `]
})
export class FooterComponent {}