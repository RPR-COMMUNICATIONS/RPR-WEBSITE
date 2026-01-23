import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { OllieComponent } from './components/ollie/ollie.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    HeaderComponent,
    FooterComponent,
    OllieComponent
  ],
  templateUrl: './app.component.html',
  styles: [`
    :host { display: block; }
  `]
})
export class AppComponent {
  onTalkToAi() {
    // If we're on the home page, scroll to chat. 
    // Otherwise, the header handles navigation to Home with fragment.
    const chatElement = document.getElementById('chat');
    if (chatElement) {
      chatElement.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
