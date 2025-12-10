import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

// Simple Icon Component
@Component({
  selector: 'app-icon',
  standalone: true,
  template: `
    <svg 
      [attr.width]="size" 
      [attr.height]="size" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      [attr.stroke-width]="strokeWidth" 
      stroke-linecap="round" 
      stroke-linejoin="round"
      [class]="class"
    >
      @if (name === 'menu') {
        <line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/>
      }
      @if (name === 'x') {
        <path d="M18 6 6 18"/><path d="m6 6 12 12"/>
      }
      @if (name === 'chevron-right') {
        <path d="m9 18 6-6-6-6"/>
      }
      @if (name === 'send') {
        <path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/>
      }
      @if (name === 'globe') {
        <circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/>
      }
      @if (name === 'award') {
        <circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/>
      }
      @if (name === 'trending-up') {
        <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/>
      }
      @if (name === 'shield-check') {
        <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/>
      }
    </svg>
  `,
  imports: [CommonModule]
})
export class IconComponent {
  @Input() name: string = '';
  @Input() size: number = 24;
  @Input() strokeWidth: number = 2;
  @Input() class: string = '';
}

@Component({
  selector: 'app-section-header',
  standalone: true,
  template: `
    <div class="mb-12">
      <h2 class="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
        <span class="text-rpr-cyan mr-2">//</span>
        <ng-content></ng-content>
      </h2>
      <div class="h-1 w-24 bg-gradient-to-r from-rpr-cyan to-transparent rounded-full"></div>
    </div>
  `,
  imports: [CommonModule]
})
export class SectionHeaderComponent {}

@Component({
  selector: 'app-card',
  standalone: true,
  template: `
    <div class="bg-black rounded-lg p-8 md:p-10 h-full flex flex-col">
      <ng-content></ng-content>
    </div>
  `,
  imports: [CommonModule]
})
export class CardComponent {}