import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthButtonComponent } from './auth-button.component';

/**
 * RPR MOTHERSHIP | MOBILE NAVIGATION [v4.0.0]
 * Purpose: Remediate substrate leakage (HTML in TS)
 */
@Component({
  selector: 'app-mobile-nav',
  standalone: true,
  imports: [CommonModule, AuthButtonComponent],
  template: `
    <div class="fixed inset-0 z-[200] bg-black/95 backdrop-blur-xl flex flex-col items-center justify-center p-8 animate-in fade-in zoom-in-95 duration-300">
      <button (click)="close.emit()" class="absolute top-8 right-8 text-white/40 hover:text-primary transition-colors">
        <span class="material-symbols-outlined text-4xl">close</span>
      </button>

      <nav class="flex flex-col gap-8 text-center">
        <a href="#foundations" (click)="close.emit()" class="text-3xl font-black uppercase tracking-tighter hover:text-primary transition-colors">Methods</a>
        <a href="/products" (click)="close.emit()" class="text-3xl font-black uppercase tracking-tighter hover:text-primary transition-colors">Products</a>
        <a href="#overwatch" (click)="close.emit()" class="text-3xl font-black uppercase tracking-tighter hover:text-primary transition-colors">Overwatch</a>
        <a href="#ask-ollie" (click)="close.emit()" class="text-3xl font-black uppercase tracking-tighter text-primary flex items-center justify-center gap-3">
          <div class="w-3 h-3 rounded-full bg-primary animate-pulse"></div>
          Ask Ollie
        </a>
      </nav>

      <div class="mt-20 pt-8 border-t border-white/10 w-full max-w-xs flex flex-col items-center gap-6">
        <app-auth-button></app-auth-button>
        <div class="text-[10px] font-mono text-white/20 uppercase tracking-widest">Auth Principal Required</div>
      </div>
    </div>
  `,
  styles: [`
    :host { display: block; }
  `]
})
export class MobileNavComponent {
  @Output() close = new EventEmitter<void>();
}