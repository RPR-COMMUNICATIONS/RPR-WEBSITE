import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AuthButtonComponent } from './auth-button.component';

@Component({
  selector: 'app-product-landing',
  standalone: true,
  imports: [CommonModule, RouterModule, AuthButtonComponent],
  templateUrl: './product-landing.component.html',
})
export class ProductLandingComponent {}
