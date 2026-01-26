/**
 * TS-Λ3 // FOUNDATIONS LOOP DEFINITION [v5.0.0]
 * Strategic Loop Mermaid.js definition for Foundations section
 * Portable to KONTROL app for future integration
 */
export const FOUNDATIONS_LOOP_DEFINITION = `%%{
    init: {
      'theme': 'dark',
      'themeVariables': {
        'primaryColor': '#00E0FF',
        'primaryTextColor': '#FFFFFF',
        'primaryBorderColor': '#1A1A1A',
        'lineColor': '#64748B',
        'secondaryColor': '#0A0A0A',
        'tertiaryColor': '#050505'
      }
    }
  }%%
  flowchart LR
    SP["Strategic Planning<br/><span style='font-size:11px'>Define problem & objectives • Map consumer journey</span>"]
    CA["Client Approval<br/><span style='font-size:11px'>Align on risks & budgets • Obtain sign-off</span>"]
    PL["Planning<br/><span style='font-size:11px'>Develop concepts • Prepare production roadmap</span>"]
    EX["Execution<br/><span style='font-size:11px'>Produce assets • Launch & monitor market performance</span>"]
    IM["Improve<br/><span style='font-size:11px'>Review results • Capture insights • Refine the journey</span>"]
    
    SP --> CA --> PL --> EX --> IM --> SP`;