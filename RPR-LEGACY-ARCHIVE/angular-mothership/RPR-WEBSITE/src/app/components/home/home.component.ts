import { Component, signal, ViewChild, ElementRef, inject, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { Subscription } from 'rxjs';
import { RouterModule } from '@angular/router';
import { IconComponent, SectionHeaderComponent, CardComponent } from '../ui-components';
import { OllieService } from '../../services/ollie.service';
import { AuthService } from '../../services/auth.service';

interface ChatMessage {
    role: 'user' | 'ai';
    content: string;
}

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [
        CommonModule,
        ReactiveFormsModule,
        RouterModule,
        IconComponent,
        SectionHeaderComponent,
        CardComponent
    ],
    templateUrl: './home.component.html',
    styles: [`
    :host { display: block; }
    /* Custom scrollbar for chat */
    ::-webkit-scrollbar { width: 6px; }
    ::-webkit-scrollbar-track { background: rgba(255, 255, 255, 0.05); }
    ::-webkit-scrollbar-thumb { background: rgba(0, 217, 255, 0.2); border-radius: 3px; }
    ::-webkit-scrollbar-thumb:hover { background: rgba(0, 217, 255, 0.4); }
  `]
})
export class HomeComponent implements OnInit, OnDestroy {
    private ollieService = inject(OllieService);
    private authService = inject(AuthService);
    private authSubscription?: Subscription;

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
        this.authSubscription = this.authService.authState$.subscribe(async (user) => {
            if (user) {
                try {
                    const history = await this.authService.getUserLoginHistory();
                    if (history.isFirstLogin) {
                        console.log('🎉 Show onboarding flow');
                    } else {
                        console.log(`👋 Welcome back! Account is ${history.accountAge} days old`);
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

        this.chatMessages.update(msgs => [...msgs, { role: 'user', content: message }]);
        this.chatInput.setValue('');
        this.isLoading.set(true);
        this.scrollToBottom();

        try {
            const lowerMessage = message.toLowerCase().trim();
            const isWorldQuestion =
                lowerMessage.includes("what's wrong with the world") ||
                lowerMessage.includes("what is wrong with the world") ||
                lowerMessage.includes("whats wrong with the world") ||
                /what'?s?\s+wrong\s+with\s+the\s+world/i.test(lowerMessage);

            if (isWorldQuestion) {
                const response = "It depends on who you ask, but your guess is as good as mine.";
                this.chatMessages.update(msgs => [...msgs, { role: 'ai', content: response }]);
                this.isLoading.set(false);
                this.scrollToBottom();
            } else {
                this.ollieService.sendMessage(message).subscribe({
                    next: (res: any) => {
                        this.chatMessages.update(msgs => [...msgs, { role: 'ai', content: res.text }]);
                        this.isLoading.set(false);
                        this.scrollToBottom();
                    },
                    error: () => {
                        this.chatMessages.update(msgs => [...msgs, { role: 'ai', content: "Connection error. Please try again." }]);
                        this.isLoading.set(false);
                        this.scrollToBottom();
                    }
                });
            }
        } catch (error) {
            this.chatMessages.update(msgs => [...msgs, { role: 'ai', content: "System error. Get a better computer." }]);
            this.isLoading.set(false);
            this.scrollToBottom();
        }
    }

    getDailyJoke(): string {
        const dayOfYear = Math.floor((Date.now() - new Date(new Date().getFullYear(), 0, 0).getTime()) / 86400000);
        const jokes = [
            "Client feedback is like a box of chocolates... except every chocolate is a revision and you're allergic to all of them.",
            "Asking a client 'what's your budget?' is like asking a teenager 'when did you last clean your room?' You'll get an answer, but it won't be honest.",
            "Brand strategy is like teaching a goldfish to ride a bicycle. They'll nod along, forget everything by tomorrow, then ask why the bicycle isn't swimming.",
            "Scope creep is like a house guest. Shows up uninvited, eats all your food, never leaves, and somehow expects you to thank them.",
            "Client: 'Make it pop.' Translation: 'I don't know what I want, but I'll know when I see it... in 47 revisions.'",
            "They said 'we're a creative agency.' What they meant was: 'We work weekends, charge by the panic attack, and the coffee machine is our only therapy.'",
            "Pitching to clients is 10% strategy, 20% design, 70% reading the room to figure out who hates you already.",
            "The brief said 'think big, be bold, push boundaries.' The budget said 'clip art and Comic Sans.'",
            "Agency culture: Ping pong table in the office, zero time to use it, but hey—it looks great in the Instagram post.",
            "We call it 'iterative design process.' The client calls it 'why isn't this done yet?' We're both right.",
            "Client: 'Can you make this more... premium?' Me: 'Sure, that'll be premium pricing.' Client: '...' Me: '...'",
            "The RFP said 'we value innovation'... then they went with the agency that did exactly what they did last year. Classic.",
            "They wanted 'data-driven insights'... then ignored the data, kept the insights they liked, and blamed us when it didn't work.",
            "Client asked for our 'secret sauce'... We told them. They said 'we'll handle it internally.' Six months later: 'Can you help fix this?'",
            "Project kickoff: 'This will be different, we're ready to take risks.' Three weeks in: 'Can we make it look like Apple? But cheaper.'",
            "Step 1: Quote the project. Step 2: Client asks for discount. Step 3: Reduce scope. Step 4: Client adds scope back. Step 5: You're working for free. Step 6: Cry.",
            "Agency math: Client pays for 40 hours. You work 80. They ask for revisions. Now it's 120. They refer you to a friend. 'Worth it for exposure.' Sure.",
            "The timeline: Week 1 - Discovery. Week 2 - Strategy. Week 3 - Design. Week 4 - Client disappears. Week 9 - Client: 'Why isn't this done?'",
            "Budget conversation: Them: 'What's your rate?' Us: 'Based on scope, timeline, value...' Them: 'Our intern said they could do it for $200.' Us: 'Cool. Hire your intern.'",
            "ROI discussion: Client spends $50K on strategy. We deliver insights. They shelf it. Next year: 'Why aren't we growing?' Maybe open the PDF we sent?",
            "Brand positioning workshops are just expensive ways for everyone to realize nobody agrees on what the company does. But hey, free donuts.",
            "We asked 'who's your customer?' They said 'everyone.' We died inside. Then charged them for a year-long segmentation study.",
            "Client: 'Our brand needs to be authentic.' Also client: 'Can you write our founder's story? He doesn't have time.' Sure, authentic... ghostwritten.",
            "They wanted a rebrand. We said 'let's research your audience first.' They said 'we already know our audience.' Narrator: They did not know their audience.",
            "Consumer insights report: 400 pages, 6 months of research, $100K budget. Client reads the executive summary. Asks: 'Can you make it one slide?'",
            "Client meetings: 60 minutes scheduled. 45 minutes waiting for Bob to figure out Zoom. 15 minutes: 'Let's circle back next week.'",
            "'Let's workshop this' means 'I have no idea what I want, but I'll know I hate your ideas when I see them.' Noted.",
            "The campaign's dead. We know it. The client knows it. But we're in too deep, so we'll A/B test it for six months and pretend it's 'learning.'",
            "Strategy deck: 80 slides, 3 frameworks, 17 charts. Client: 'Can you just tell me what to do?' Us: 'It's on slide 73.' Client: 'Too long, didn't read.'",
            "Every agency has that one client who pays on time, loves your work, and never asks for revisions. That's called a hallucination. Seek help."
        ];
        return jokes[dayOfYear % jokes.length];
    }

    getOllieGreeting(): string {
        const joke = this.getDailyJoke();
        return `Today's insight: ${joke}  Now—what can I help you balance today?`;
    }

    private scrollToBottom() {
        setTimeout(() => {
            if (this.chatContainer) {
                this.chatContainer.nativeElement.scrollTop = this.chatContainer.nativeElement.scrollHeight;
            }
        }, 100);
    }
}
