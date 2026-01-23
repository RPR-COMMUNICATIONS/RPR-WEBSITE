import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-ollie',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './ollie.component.html',
  styleUrls: ['./ollie.component.css']
})
export class OllieComponent {
  prompt = '';
  thinking = false;
  answer = '';
  // THE CANONICAL SINGAPORE HUB
  private readonly endpoint = 'https://asia-southeast1-rpr-corporate-site.cloudfunctions.net/ollieChat';
  private http = inject(HttpClient);

  async askOllie() {
    if (!this.prompt.trim()) return;
    this.thinking = true;
    this.answer = '';
    try {
      const res: any = await firstValueFrom(this.http.post(this.endpoint, { prompt: this.prompt }));
      this.answer = res?.text ?? "Ollie has no words for your query.";
    } catch (e) {
      console.error('Ollie Error:', e);
      this.answer = "Intelligence link severed. Try again.";
    } finally {
      this.thinking = false;
      this.prompt = ''; // Clear for next input
    }
  }
}
