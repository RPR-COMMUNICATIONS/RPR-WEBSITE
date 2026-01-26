/**
 * TS-Λ3 // OVERWATCH HIERARCHY DEFINITION [v6.3.0]
 * Sovereign Hierarchy Mermaid.js definition for Foundations section
 * Sentinel Protocol Leadership & Product Layer visualization
 */
export const OVERWATCH_HIERARCHY_DEFINITION = `%%{
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
  graph TB
      Founder["THE OVERWATCH<br/>Founder & Chief Executive<br/>Final Human Decision Authority"]
      QubitCouncil["THE QUBIT FRAMEWORK<br/>SENTINEL PROTOCOL LEADERSHIP<br/>AI Council Holding Decisions in Superposition"]
      DesignServices["DESIGN SERVICES<br/>Strategy · Creative · Art<br/>AI Department Leads & Agent Teams"]
      ProjectServices["PROJECT SERVICES<br/>Technology & Digital · Project Management · Client Servicing<br/>AI Department Leads & Agent Teams"]
      ProductPlatform["PRODUCT & PLATFORM LAYER<br/>Virtual Clone of Client Businesses<br/>Measured Outcomes & Revenue Growth"]
      InHouse["IN‑HOUSE PRODUCTS<br/>• RPR VERIFY<br/>• RPR BACKEND<br/>• RPR BRANDME"]
      StandAlone["STAND‑ALONE PRODUCTS<br/>• MYAUDIT<br/>• LABYRINTH"]
  
      Founder --> QubitCouncil
      QubitCouncil --> DesignServices
      QubitCouncil --> ProjectServices
      QubitCouncil --> ProductPlatform
      ProductPlatform --> InHouse
      ProductPlatform --> StandAlone`;