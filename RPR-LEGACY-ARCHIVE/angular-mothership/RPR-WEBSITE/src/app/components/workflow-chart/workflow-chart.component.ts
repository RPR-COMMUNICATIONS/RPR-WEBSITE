import { Component, OnInit, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import mermaid from 'mermaid';

@Component({
  selector: 'app-workflow-chart',
  standalone: true,
  template: `
    <div class="workflow-chart-wrapper">
      <div #mermaidContainer class="mermaid-chart"></div>
    </div>
  `,
  styles: [`
    .workflow-chart-wrapper {
      width: 100%;
      max-width: 1200px;
      margin: 0 auto;
      padding: 32px 16px;
      background: rgba(255, 255, 255, 0.02);
      border-radius: 8px;
      box-shadow: 0 4px 24px rgba(0, 217, 255, 0.1);
    }

    .mermaid-chart {
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 400px;
      overflow-x: auto;
    }

    .mermaid-chart svg {
      max-width: 100%;
      height: auto;
    }

    @media (max-width: 768px) {
      .workflow-chart-wrapper {
        padding: 16px 8px;
      }
      
      .mermaid-chart {
        min-height: 300px;
      }
    }
  `]
})
export class WorkflowChartComponent implements OnInit, AfterViewInit {
  @ViewChild('mermaidContainer', { static: false }) mermaidContainer!: ElementRef;

  ngOnInit() {
    mermaid.initialize({
      startOnLoad: false,
      theme: 'dark',
      themeVariables: {
        primaryColor: '#1A1A1A',
        primaryTextColor: '#FFF',
        primaryBorderColor: '#0175C2',
        lineColor: '#0175C2',
        secondaryColor: '#015A9E',
        tertiaryColor: '#1A1A1A',
        background: '#000000',
        mainBkg: '#1A1A1A',
        textColor: '#FFF'
      }
    });
  }

  ngAfterViewInit() {
    const mermaidCode = `
flowchart TD

subgraph Journey["CONSUMER JOURNEY – Touchpoints (CX Observation)"]
CJ1["Consumers experience campaigns / products<br/>(ads, content, product UX, events)"]
end

subgraph Process["AGENCY PROCESS (Value Creation)"]
SP["Phase 1: STRATEGIC PLANNING<br/>• Define problem & objectives<br/>• Map consumer journey & constraints<br/>• Decide success metrics & scope"]
CA["Phase 2: CLIENT APPROVAL<br/>• Present strategic recommendation<br/>• Align on risks, timelines, budgets<br/>• Obtain sign‑off to proceed"]
PC["Phase 3: PLANNING (CREATIVE / UX)<br/>• Develop concepts & narratives<br/>• Plan UX, content, and channels<br/>• Prepare production roadmap"]
EX["Phase 4: EXECUTION<br/>• Produce assets & build flows<br/>• Launch campaigns / experiences<br/>• Monitor performance in market"]
end

subgraph Outcome["INSIGHT & CX IMPROVEMENT (Value Measurement)"]
PM["POST‑MORTEM ANALYSIS<br/>To Client & Strategic Planning<br/>• Review results & learnings<br/>• Capture consumer insights (UI/CX)<br/>• Identify improvements to journey"]
end

CJ1 --> SP
SP --> CA
CA --> PC
PC --> EX
EX --> PM
PM -. "refines next cycle" .-> SP

style CJ1 fill:#1A1A1A,stroke:#0175C2,stroke-width:2px,color:#FFF
style SP fill:#1A1A1A,stroke:#0175C2,stroke-width:2px,color:#FFF
style CA fill:#1A1A1A,stroke:#0175C2,stroke-width:2px,color:#FFF
style PC fill:#1A1A1A,stroke:#0175C2,stroke-width:2px,color:#FFF
style EX fill:#1A1A1A,stroke:#0175C2,stroke-width:2px,color:#FFF
style PM fill:#015A9E,stroke:#0175C2,stroke-width:2px,color:#FFF
    `;

    try {
      mermaid.render('workflow-diagram', mermaidCode).then((result) => {
        if (this.mermaidContainer) {
          this.mermaidContainer.nativeElement.innerHTML = result.svg;
        }
      }).catch((error) => {
        console.error('Mermaid rendering error:', error);
        if (this.mermaidContainer) {
          this.mermaidContainer.nativeElement.innerHTML = 
            '<p style="color: #FF6B6B; text-align: center; padding: 20px;">Error rendering workflow chart. Please refresh the page.</p>';
        }
      });
    } catch (error) {
      console.error('Mermaid initialization error:', error);
      if (this.mermaidContainer) {
        this.mermaidContainer.nativeElement.innerHTML = 
          '<p style="color: #FF6B6B; text-align: center; padding: 20px;">Error initializing workflow chart.</p>';
      }
    }
  }
}
