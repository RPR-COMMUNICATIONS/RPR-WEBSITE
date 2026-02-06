import { ActorBox, SystemBox, ConnectionLine } from './c4-elements';
import type { NodeData } from '../App';

interface L1OverwatchCommandProps {
  onNodeClick: (node: NodeData) => void;
}

export function L1OverwatchCommand({ onNodeClick }: L1OverwatchCommandProps) {
  const legalEntityNode: NodeData = {
    id: 'rpr-communications',
    name: 'RPR COMMUNICATIONS LLC',
    type: 'Legal Root • Parent Entity',
    description: 'The primary legal corporate entity. The Mothership OS and Sentinel Protocol are technically and legally subordinate to this entity.',
    auditTrail: [
      {
        timestamp: '2026-02-06 08:00:00',
        user: 'The Warden',
        action: 'Jurisdiction Check',
        details: 'Entity status confirmed in Singapore. Data residency verified.',
      },
      {
        timestamp: '2026-02-03 11:20:00',
        user: 'Legal Department',
        action: 'Compliance Check',
        details: 'Annual corporate filings verified. Status: Active and compliant.',
      },
    ],
  };

  const overwatchNode: NodeData = {
    id: 'overwatch',
    name: 'THE OVERWATCH',
    type: 'Sovereign Commander • RAM Root',
    description:
      'HUMAN USER. Legally bound to RPR COMMUNICATIONS LLC. Serves as the ultimate human decision-maker and strategic authority.',
    auditTrail: [
      {
        timestamp: '2026-02-05 09:15:00',
        user: 'System',
        action: 'RAM Binding Verification',
        details: 'Overwatch authority successfully bound to RPR COMMUNICATIONS LLC.',
      },
      {
        timestamp: '2026-02-04 14:30:00',
        user: 'The Overwatch',
        action: 'Strategic Directive',
        details: 'Issued mission-based objectives for Q1 Harbor A rollout.',
      },
    ],
  };

  const eldersNode: NodeData = {
    id: 'the-elders-preview',
    name: 'THE ELDERS',
    type: 'Governance Triumvirate',
    description: 'Delegated intelligence layer. Receives directives from Overwatch to orchestrate the Architect, Engineer, and Sentinel lanes.',
    auditTrail: [
      {
        timestamp: '2026-02-05 11:00:00',
        user: 'Sentinel Protocol',
        action: 'Routing Update',
        details: 'RAM Optimizer tuned Architect-to-Engineer handoff latency.',
      },
    ],
  };

  return (
    <div className="h-full overflow-auto p-12 bg-[var(--sovereign-bg-primary)]">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <div className="mb-12">
          <h2 className="text-xl font-semibold mb-1 text-foreground">
            L1: Overwatch Command Layer
          </h2>
          <p className="text-sm text-gray-400">The RAM Framework • Legal Entity over Sovereign Commander</p>
        </div>

        <div className="flex flex-col items-center gap-8">
          {/* RPR Communications LLC - THE LEGAL ROOT */}
          <SystemBox
            title="RPR COMMUNICATIONS LLC"
            description="Legal Entity - The ultimate authority and corporate foundation. Defines the boundaries of the Mothership OS."
            color="orange"
            onClick={() => onNodeClick(legalEntityNode)}
            className="max-w-md"
          />

          {/* Connection */}
          <ConnectionLine label="Binds and authorizes" />

          {/* The Overwatch (Person/Actor) - BOUND TO ENTITY */}
          <ActorBox>
            <div
              role="button"
              tabIndex={0}
              onClick={() => onNodeClick(overwatchNode)}
              onKeyDown={(e) => e.key === 'Enter' && onNodeClick(overwatchNode)}
              className="cursor-pointer text-center"
            >
              <div className="text-xs font-black uppercase tracking-widest text-[var(--sovereign-system-cyan)]">HUMAN USER</div>
              <div className="text-[11px] leading-relaxed text-slate-300 font-medium mt-1">The Overwatch - Sovereign Commander bound legally to RPR COMMUNICATIONS LLC. Exercises final decision authority.</div>
            </div>
          </ActorBox>

          {/* Connection */}
          <ConnectionLine label="Delegates strategic oversight to" />

          {/* The Elders Preview - EXECUTION LAYER */}
          <SystemBox
            title="THE ELDERS"
            description="Governance Layer - The triumvirate (Architect, Engineer, Sentinel) that operationalizes the Overwatch vision."
            color="purple"
            onClick={() => onNodeClick(eldersNode)}
            className="max-w-md"
          />

          {/* RAM Compliance Notice */}
          <div className="mt-8 px-6 py-3 bg-[#1e203a] border border-[#3a5a7a] rounded-lg text-xs text-blue-300 max-w-sm text-center">
            <strong>RAM STATUS: LATCHED</strong><br/>
            Founder identity verified and bound to RPR-COMMUNICATIONS-CANONICAL.
          </div>
        </div>
      </div>
    </div>
  );
}