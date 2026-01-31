/**
 * TS-Λ3 // C4 ARCHITECTURE DEFINITIONS [v1.8.2]
 * Seating: Agency Divisions & Prototype graduation paths.
 */

export interface C4Diagram {
  id: string;
  title: string;
  description: string;
  definition: string;
}

export const sentinelDiagrams: Record<string, C4Diagram> = {
  l1_overwatch: {
    id: 'l1-overwatch',
    title: 'L1: The Apex - OVERWATCH Command',
    description: 'Apex Authority & Strategic Intent mapping.',
    definition: `flowchart TD
    subgraph L1_Apex ["🛡️ THE APEX"]
        OW["🛡️ THE OVERWATCH<br/>(Founder Authority)<br/>System 5"]
    end
    subgraph L2_Operational ["Operational Substrate"]
        Brain["⚙️ RPR KONTROL BRAIN<br/>(SENTINEL Engine)<br/>System 3-4 Bridge"]
    end
    OW -- "Strategic Intent" --> Brain
    Brain -- "State Sync" --> Notion["📋 Notion"]
    Brain -- "Code Gates" --> GitHub["🔒 GitHub"]
    Brain -- "Persistence" --> Firestore["🗄️ Firestore"]
    classDef authority fill:#8B0000,stroke:#dc2626,color:#fff,stroke-width:3px
    classDef core fill:#1a4d7a,stroke:#3b82f6,color:#fff
    class OW authority
    class Brain core`
  },
  l2_elders: {
    id: 'l2-elders-divisions',
    title: 'L2: Elders, Divisions & Brain',
    description: 'Operational seating of System 3 units and advisory triad.',
    definition: `graph TB
    subgraph Elders ["The Elders (Advisory Layer)"]
        direction LR
        PERP["🐎 Perplexity<br/>Architect"]
        GEM["♟️ Gemini<br/>Engineer"]
        SENT_E["🏰 Sentinel<br/>Governor"]
    end
    subgraph Agency_Divisions ["Agency Divisions (System 3)"]
        direction TB
        subgraph Strategic_Creative ["Strategic & Creative"]
            STRAT["♟️ Strategy"]
            CREATIVE["🎨 Creative"]
            ART["🖼️ Art"]
        end
        subgraph Technical_Ops ["Technical & Operations"]
            DEV["💻 Development"]
            VIDEO["🎬 Video Lab"]
            DESIGN["📐 Design"]
        end
    end
    Elders --> Agency_Divisions
    Agency_Divisions --> Brain["⚙️ KONTROL Brain"]
    classDef elderStyle fill:#4a0080,stroke:#7c3aed,color:#fff
    classDef divisionStyle fill:#1a5490,stroke:#3b82f6,color:#fff
    class PERP,GEM,SENT_E elderStyle
    class STRAT,CREATIVE,ART,VIDEO,DESIGN,DEV divisionStyle`
  },
  l3_forge: {
    id: 'l3-forge',
    title: 'L3: The Forge - Internal Orchestration',
    description: 'Intelligence Labs (Jules) and logic building.',
    definition: `flowchart TD
    subgraph Forge ["⚒️ THE FORGE"]
        direction TB
        subgraph Intelligence ["🧪 Intelligence Labs"]
            Jules["🤖 Jules<br/>Orchestration Engine"]
            Cursor["⌨️ Cursor IDE"]
        end
        subgraph Prototyping ["⚡ Module Staging"]
            AIStudio["🎨 Google AI Studio"]
            FireStudio["🔥 Firebase Studio"]
        end
    end
    Jules -- "Orchestrates" --> Cursor
    Jules -- "Stages" --> FireStudio
    AIStudio -- "Prototypes" --> FireStudio
    classDef labStyle fill:#4a90a4,stroke:#0ea5e9,color:#fff,stroke-width:2px
    classDef protoStyle fill:#7c2d12,stroke:#f97316,color:#fff,stroke-width:2px
    class Jules,Cursor labStyle
    class AIStudio,FireStudio protoStyle`
  },
  l4_instances: {
    id: 'l4-instances',
    title: 'L4: Instances & Migration',
    description: 'Standalone child instances and product graduation.',
    definition: `flowchart TD
    subgraph Client_Instances ["Client Instances"]
        Labyrinth["🌀 Labyrinth"]
        MyAudit["📊 MYAUDIT"]
    end
    subgraph InHouse ["In-House Operations"]
        Verify["🛡️ RPR VERIFY"]
        Creative["🎬 Creative Suite<br/>(Logo/IKON/Video)"]
    end
    Brain["⚙️ KONTROL Brain"] -- "Graduate" --> Creative
    classDef clientStyle fill:#1a4d7a,stroke:#3b82f6,color:#fff
    classDef inhouseStyle fill:#450a0a,stroke:#ef4444,color:#fff
    class Labyrinth,MyAudit clientStyle
    class Creative,Verify inhouseStyle`
  }
};
