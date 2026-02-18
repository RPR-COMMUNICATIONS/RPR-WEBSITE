/**
 * TS-Λ3 // THE MOTHERSHIP [v7.6.0]
 * Formally: OVERWATCH_HIERARCHY_DEFINITION
 * Sovereign structure visualization for Foundations section
 * NOTE: MermaidViewer expects pure Mermaid diagram syntax here (no YAML/front-matter).
 */
export const THE_MOTHERSHIP = `
  graph TB
      Founder["THE OVERWATCH<br/>Founder & Chief Executive<br/>Final Human Decision Authority"]
      
      subgraph Elders ["THE ELDERS – SENTINEL GOVERNANCE"]
          Architect["THE ARCHITECT (Perplexity)<br/>Strategy & Governance Design"]
          Engineer["THE ENGINEER (Gemini 3 Flash)<br/>Technical Blueprints & Execution"]
          Sentinel["THE SENTINEL (RPR)<br/>Enforcement & Forensic Monitoring"]
      end
  
      ProductPlatform["PRODUCT & PLATFORM LAYER<br/>Virtual Clone of Client Businesses"]
  
      Founder --> Elders
      Elders --> ProductPlatform
  `;