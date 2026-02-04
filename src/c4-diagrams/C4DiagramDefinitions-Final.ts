/**
 * TS-Λ3 // C4 ARCHITECTURE DEFINITIONS [v2.1.0]
 * Platform: RPR KONTROL | System: THE MOTHERSHIP
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
    title: 'L1: OVERWATCH COMMAND',
    description: 'Sovereign Governance: The Sentinel Protocol',
    definition: `flowchart TD
    OW["🛡️ OVERWATCH COMMAND<br/>(Founder Authority + Advisor Interface)"]
    subgraph L2_Network ["THE QUANTUM NETWORK"]
        Brain["⚙️ RPR KONTROL"]
    end
    OW -- "Inquiry & Approval" --> Brain
    Brain -- "Governed Options" --> OW

    classDef default font-family:Inter,font-weight:700,color:#121212,fill:#dcd7c9,stroke:#708090,stroke-width:2px;
    classDef cmd fill:#e6b319,stroke:#121212,color:#121212,stroke-width:4px;
    class OW cmd;
    linkStyle default stroke:#708090,stroke-width:2px;`
  },
  l2_elders: {
    id: 'l2-quantum-network',
    title: 'L2: THE QUANTUM NETWORK',
    description: 'Shared State: Architect, Engineer, Sentinel',
    definition: `graph TB
    subgraph Matrix ["SHARED_STATE_DECISION_MATRIX"]
        direction LR
        ARCH["🐎 ARCHITECT"]
        ENG["♟️ ENGINEER"]
        SENT["🏰 SENTINEL"]
    end
    subgraph L3_SubTier ["THE AGENCY & THE FORGE"]
        direction TB
        AGENCY["THE AGENCY"]
        FORGE["THE FORGE"]
    end
    Matrix === L3_SubTier

    classDef default font-family:Inter,font-weight:700,color:#121212,fill:#dcd7c9,stroke:#708090,stroke-width:2px;
    classDef triad fill:#e6b319,stroke:#121212,color:#121212,stroke-width:2px;
    class ARCH,ENG,SENT triad;
    style Matrix fill:none,stroke:#708090,stroke-dasharray: 5 5;
    linkStyle default stroke:#708090,stroke-width:2px;`
  },
  l3_forge: {
    id: 'l3-agency-forge',
    title: 'L3: THE AGENCY & THE FORGE',
    description: 'Working Departments & Internal Orchestration',
    definition: `flowchart TD
    subgraph Forge ["⚒️ THE FORGE"]
        direction TB
        Jules["🤖 JULES"]
        Cursor["⌨️ CURSOR"]
    end
    subgraph Agency ["THE AGENCY"]
        direction TB
        subgraph Creative_Cluster ["Creative Cluster"]
            STRAT["♟️ Strategy"]
            CREAT["🎨 Creative"]
            ART["🖼️ Art"]
            DES["📐 Design"]
        end
        subgraph Delivery_Cluster ["Delivery Cluster"]
            DEV["💻 Development"]
            VID["🎬 Video Lab"]
        end
    end
    Forge -- "Orchestration" --> Agency

    classDef default font-family:Inter,font-weight:700,color:#121212,fill:#dcd7c9,stroke:#708090,stroke-width:2px;
    classDef forgeTools fill:#e6b319,stroke:#121212,color:#121212;
    class Jules,Cursor forgeTools;
    linkStyle default stroke:#708090,stroke-width:2px;`
  },
  l4_instances: {
    id: 'l4-solutions',
    title: 'L4: SOLUTIONS & INSTANCES',
    description: 'Specialist Agents & Sovereign Solutions',
    definition: `flowchart TD
    subgraph Solutions ["SOVEREIGN SOLUTIONS"]
        direction LR
        subgraph Standalone ["Standalone"]
            MyAudit["📊 MYAUDIT"]
            Lab["🌀 LABYRINTH"]
        end
        subgraph InHouse ["In-House"]
            Verify["🛡️ RPR VERIFY"]
        end
    end

    classDef default font-family:Inter,font-weight:700,color:#121212,fill:#dcd7c9,stroke:#708090,stroke-width:2px;
    classDef active fill:#e6b319,stroke:#121212,color:#121212;
    class MyAudit,Lab,Verify active;
    linkStyle default stroke:#708090,stroke-width:2px;`
  }
};
