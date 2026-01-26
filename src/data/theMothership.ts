/**
 * TS-Λ3 // THE MOTHERSHIP [v7.6.0]
 * Formally: OVERWATCH_HIERARCHY_DEFINITION
 * Sovereign structure visualization for Foundations section
 */
export const THE_MOTHERSHIP = `%%{
    init: {
      'theme': 'dark',
      'themeVariables': {
        'primaryColor': '#00E0FF',
        'primaryTextColor': '#FFFFFF',
        'lineColor': '#64748B'
      }
    }
  }%%
  graph TB
      Founder["THE OVERWATCH<br/>Founder & Chief Executive<br/>Final Human Decision Authority"]
      
      subgraph Elders ["THE ELDERS – SENTINEL GOVERNANCE"]
          Architect["THE ARCHITECT (Perplexity)<br/>Strategy & Governance Design"]
          Engineer["THE ENGINEER (Gemini)<br/>Technical Blueprints & Execution"]
          Sentinel["THE SENTINEL (RPR)<br/>Enforcement & Forensic Monitoring"]
      end
  
      ProductPlatform["PRODUCT & PLATFORM LAYER<br/>Virtual Clone of Client Businesses"]
  
      Founder --> Elders
      Elders --> ProductPlatform
  `;