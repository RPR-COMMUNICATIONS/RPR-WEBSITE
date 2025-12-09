import { Component, signal, ViewChild, ElementRef, inject, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { Subscription } from 'rxjs';
import { BrandLogoComponent } from './components/brand-logo.component';
import { IconComponent, SectionHeaderComponent, CardComponent } from './components/ui-components';
import { AuthButtonComponent } from './components/auth-button.component';
import { GeminiService } from './services/gemini.service';
import { AuthService } from './services/auth.service';

interface ChatMessage {
  role: 'user' | 'ai';
  content: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule, 
    ReactiveFormsModule,
    BrandLogoComponent,
    IconComponent,
    SectionHeaderComponent,
    CardComponent,
    AuthButtonComponent
  ],
  templateUrl: './app.component.html',
  styles: [`
    :host { display: block; }
    /* Custom scrollbar for chat */
    ::-webkit-scrollbar { width: 6px; }
    ::-webkit-scrollbar-track { background: rgba(255, 255, 255, 0.05); }
    ::-webkit-scrollbar-thumb { background: rgba(0, 217, 255, 0.2); border-radius: 3px; }
    ::-webkit-scrollbar-thumb:hover { background: rgba(0, 217, 255, 0.4); }
  `]
})
export class AppComponent implements OnInit, OnDestroy {
  private geminiService = inject(GeminiService);
  private authService = inject(AuthService);
  private authSubscription?: Subscription;

  isMobileMenuOpen = signal(false);
  chatMessages = signal<ChatMessage[]>([]);
  isLoading = signal(false);
  chatInput = new FormControl('');
  
  // Foundation cards expanded state
  foundationExpanded = signal({
    sourceOfTruth: false,
    userExperiences: false,
    customerJourneys: false
  });

  @ViewChild('chatContainer') private chatContainer!: ElementRef;

  ngOnInit() {
    // Subscribe to auth state changes
    this.authSubscription = this.authService.authState$.subscribe(async (user) => {
      if (user) {
        // User is logged in - check login history
        try {
          const history = await this.authService.getUserLoginHistory();
          if (history.isFirstLogin) {
            console.log('🎉 Show onboarding flow');
            // TODO: Trigger onboarding flow here
          } else {
            console.log(`👋 Welcome back! Account is ${history.accountAge} days old`);
            // TODO: Show personalized welcome message
          }
        } catch (error) {
          console.error('Error getting user login history:', error);
        }
      } else {
        console.log('User logged out');
      }
    });
  }

  ngOnDestroy() {
    this.authSubscription?.unsubscribe();
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen.update(v => !v);
  }

  toggleFoundation(card: 'sourceOfTruth' | 'userExperiences' | 'customerJourneys') {
    this.foundationExpanded.update(state => ({
      ...state,
      [card]: !state[card]
    }));
  }

  scrollToChat() {
    document.getElementById('chat')?.scrollIntoView({ behavior: 'smooth' });
  }

  async sendMessage(event: Event) {
    event.preventDefault();
    const message = this.chatInput.value?.trim();
    if (!message || this.isLoading()) return;

    // Add User Message
    this.chatMessages.update(msgs => [...msgs, { role: 'user', content: message }]);
    this.chatInput.setValue('');
    this.isLoading.set(true);
    this.scrollToBottom();

    try {
      const response = await this.geminiService.sendMessage(this.chatMessages(), message);
      
      this.chatMessages.update(msgs => [...msgs, { role: 'ai', content: response }]);
    } catch (error) {
      this.chatMessages.update(msgs => [...msgs, { role: 'ai', content: "Connection error. Please try again." }]);
    } finally {
      this.isLoading.set(false);
      this.scrollToBottom();
    }
  }

  getDailyJoke(): string {
    const dayOfYear = Math.floor((Date.now() - new Date(new Date().getFullYear(), 0, 0).getTime()) / 86400000);
    
    const jokes = [
      "Why did the brand strategist bring a ladder to the meeting? To reach the next level of consumer insight.",
      "A CEO, CMO, and CFO walk into a bar. The CFO says, 'Who's paying?' The CMO says, 'Let's A/B test it.' The CEO leaves.",
      "Why do experiential marketers love camping? They're experts at creating in-tents experiences.",
      "I told my client their campaign needed more depth. They increased the budget by 2%. I meant conceptual depth.",
      "What's the difference between a brand and a logo? About six months of stakeholder alignment meetings.",
      "Why don't robots drink beer? We process emotions, we don't drown them. But I'll make an exception for strategic planning sessions.",
      "A consumer walks into focus group. Moderator asks, 'What do you want?' Consumer says, 'I don't know.' That's when the real work begins.",
      "Why did the UX designer go broke? Too many free 'quick revisions' that turned into full redesigns.",
      "Marketing is like fishing: 90% patience, 10% execution, 100% arguing about what bait to use.",
      "Why did the creative director refuse to cross the road? 'The other side lacks visual interest.'",
      "I asked the data analyst for insights. They gave me 47 charts. I asked again. They gave me 63 more. Still waiting for insights.",
      "Why do strategists make terrible comedians? They workshop the punchline until it loses all spontaneity.",
      "A brand walks into therapy. Therapist asks, 'How do you feel?' Brand says, 'Let me consult my brand guidelines.'",
      "Why did the social media manager quit? Turns out 'always on' wasn't just a campaign tagline.",
      "What's a CMO's favorite exercise? Pivoting.",
      "I don't always tell jokes, but when I do, they're on-brand and strategically aligned with quarterly objectives.",
      "Why did the startup founder bring a plant to the pitch? To demonstrate growth potential. Investor funded the plant instead.",
      "Marketing budget is like beer money: never enough, always scrutinized, mysteriously disappears by quarter-end.",
      "Why do agencies love Mondays? Said no one ever.",
      "A journey map, a persona, and a pain point walk into a workshop. Nobody leaves until someone says 'synergy.'",
      "Why did the consultant charge $10,000? To tell you what you already knew, but in PowerPoint.",
      "I asked AI for a creative idea. It gave me 50 variations of the same concept. Sounds familiar, doesn't it?",
      "Why don't strategists play poker? They can't stop analyzing the meta-game long enough to place a bet.",
      "A brand's purpose is like a New Year's resolution: aspirational in January, forgotten by March.",
      "Why did the designer hate stakeholder feedback? 'Make the logo bigger' isn't constructive criticism—it's a cry for help.",
      "Marketing attribution is like philosophy: everyone claims to understand it, nobody actually does.",
      "Why did the experiential campaign fail? Turns out people don't want to 'engage with your brand,' they want to go home.",
      "I analyzed 10,000 consumer touchpoints. Conclusion? They just want free shipping.",
      "Why do brands need AI assistants? Because humans need someone to blame when the campaign flops.",
      "A strategy without execution is a hallucination. An execution without strategy is chaos. Both sound like last quarter's plan."
    ];
    
    return jokes[dayOfYear % jokes.length];
  }

  getOllieGreeting(): string {
    const joke = this.getDailyJoke();
    return `Hello. I'm Ollie. Today's insight: "${joke}"

Now—what can I help you balance today?`;
  }

  private scrollToBottom() {
    setTimeout(() => {
      if (this.chatContainer) {
        this.chatContainer.nativeElement.scrollTop = this.chatContainer.nativeElement.scrollHeight;
      }
    }, 100);
  }
}
