import { SystemBox } from './c4-elements';
import type { NodeData } from '../App';
import { Lock, MapPin } from 'lucide-react';

interface L4SovereigntyProps {
  onNodeClick: (node: NodeData) => void;
}

export function L4Sovereignty({ onNodeClick }: L4SovereigntyProps) {
  const sovereignRootNode: NodeData = {
    id: 'sovereign-root',
    name: 'SOVEREIGN_ROOT',
    type: 'Canonical Archive',
    description: 'The master archive containing all governance protocols, legal frameworks, and strategic directives.',
    auditTrail: [
      {
        timestamp: '2026-02-05 07:00:00',
        user: 'System Archivist',
        action: 'Daily Backup',
        details: 'Sovereign_Root backed up. Size: 4.7GB. Integrity verified.',
      },
      {
        timestamp: '2026-02-04 18:30:00',
        user: 'The Overwatch',
        action: 'Protocol Update',
        details: 'Updated governance framework v3.2. All instances notified.',
      },
      {
        timestamp: '2026-02-03 12:00:00',
        user: 'Legal Department',
        action: 'Compliance Audit',
        details: 'Annual regulatory compliance review completed. Status: Compliant.',
      },
    ],
  };

  const commsRootNode: NodeData = {
    id: 'comms-root',
    name: 'COMMS_ROOT',
    type: 'Canonical Archive',
    description: 'Communication protocols, client interaction frameworks, and messaging standards repository.',
    auditTrail: [
      {
        timestamp: '2026-02-05 09:30:00',
        user: 'System Archivist',
        action: 'Daily Backup',
        details: 'Comms_Root backed up. Size: 2.1GB. Integrity verified.',
      },
      {
        timestamp: '2026-02-04 15:45:00',
        user: 'Communications Team',
        action: 'Template Update',
        details: 'Added 7 new client communication templates. Multi-language support enabled.',
      },
    ],
  };

  const uddNode: NodeData = {
    id: 'udd-instance',
    name: 'UDD',
    type: 'Specialist Instance',
    description: 'User-Driven Design specialist. Focuses on UX research, interface design, and user experience optimization.',
    auditTrail: [
      {
        timestamp: '2026-02-05 13:00:00',
        user: 'UDD Instance',
        action: 'Design Review',
        details: 'Completed UX audit for 3 client applications. 47 recommendations issued.',
      },
      {
        timestamp: '2026-02-04 10:20:00',
        user: 'UDD Instance',
        action: 'User Research',
        details: 'Conducted user interviews with 23 participants. Insights synthesized.',
      },
    ],
  };

  const ifsNode: NodeData = {
    id: 'ifs-instance',
    name: 'IFS',
    type: 'Specialist Instance',
    description: 'Integrated Finance Solutions. Handles financial modeling, budgeting, and economic analysis.',
    auditTrail: [
      {
        timestamp: '2026-02-05 11:00:00',
        user: 'IFS Instance',
        action: 'Financial Modeling',
        details: 'Generated Q1 2026 revenue projections. Model accuracy: 94.3%.',
      },
      {
        timestamp: '2026-02-04 14:00:00',
        user: 'IFS Instance',
        action: 'Budget Analysis',
        details: 'Analyzed departmental spending. Identified $34K optimization opportunity.',
      },
    ],
  };

  const pbasNode: NodeData = {
    id: 'pbas-instance',
    name: 'PBAS',
    type: 'Specialist Instance',
    description: 'Performance-Based Analytics System. Monitors KPIs, generates reports, and tracks operational metrics.',
    auditTrail: [
      {
        timestamp: '2026-02-05 08:00:00',
        user: 'PBAS Instance',
        action: 'Performance Report',
        details: 'Generated weekly KPI dashboard. All metrics within target ranges.',
      },
      {
        timestamp: '2026-02-04 16:30:00',
        user: 'PBAS Instance',
        action: 'Analytics Update',
        details: 'Deployed new analytics model. Predictive accuracy improved by 12%.',
      },
    ],
  };

  const wardenNode: NodeData = {
    id: 'the-warden',
    name: 'THE WARDEN',
    type: 'Regional Lock System',
    description: 'Enforces geographic sovereignty and regional compliance. Primary jurisdiction: Singapore.',
    auditTrail: [
      {
        timestamp: '2026-02-05 06:00:00',
        user: 'The Warden',
        action: 'Regional Verification',
        details: 'All instances verified within Singapore jurisdiction. Access controls active.',
      },
      {
        timestamp: '2026-02-04 12:00:00',
        user: 'The Warden',
        action: 'Compliance Check',
        details: 'Singapore PDPA compliance verified. Data residency requirements met.',
      },
    ],
  };

  return (
    <div className="h-full overflow-auto p-12 bg-[var(--sovereign-bg-primary)]">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <div className="mb-12">
          <h2 className="text-xl font-semibold mb-1 text-foreground">
            L4: Sovereignty & Instances
          </h2>
          <p className="text-sm text-gray-400">The Deployment Layer • Canonical Archives & Specialist Units</p>
        </div>

        {/* Canonical Archives */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px flex-1 bg-gray-700" />
            <span className="text-xs text-gray-400 font-mono px-3">CANONICAL ARCHIVES</span>
            <div className="h-px flex-1 bg-gray-700" />
          </div>

          <div className="grid grid-cols-2 gap-6 mb-4">
            <SystemBox
              title="SOVEREIGN_ROOT"
              description="Master archive containing governance protocols, legal frameworks, and strategic directives. Encrypted at rest."
              color="orange"
              onClick={() => onNodeClick(sovereignRootNode)}
            />

            <SystemBox
              title="COMMS_ROOT"
              description="Communication protocols, client interaction frameworks, and messaging standards. Multi-language support."
              color="orange"
              onClick={() => onNodeClick(commsRootNode)}
            />
          </div>

          <div className="flex justify-center">
            <div className="flex items-center gap-2 px-4 py-2 bg-[#2f2019] border border-orange-600/30 rounded text-xs text-orange-400">
              <Lock className="size-3" />
              <span className="font-mono">ENCRYPTED • VERSIONED</span>
            </div>
          </div>
        </div>

        {/* The Warden */}
        <div className="mb-16">
          <div className="max-w-xl mx-auto">
            <SystemBox
              title="THE WARDEN"
              description="Regional lock system enforcing geographic sovereignty and compliance. Monitors all cross-border data transfers."
              color="red"
              onClick={() => onNodeClick(wardenNode)}
            />
            <div className="flex justify-center mt-4">
              <div className="flex items-center gap-2 px-4 py-2 bg-[#2f1919] border border-red-600/30 rounded text-xs text-red-400">
                <MapPin className="size-3" />
                <span className="font-mono">PRIMARY JURISDICTION: SINGAPORE</span>
              </div>
            </div>
          </div>
        </div>

        {/* Specialist Instances */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px flex-1 bg-gray-700" />
            <span className="text-xs text-gray-400 font-mono px-3">SPECIALIST INSTANCES</span>
            <div className="h-px flex-1 bg-gray-700" />
          </div>

          <div className="text-center mb-6">
            <span className="text-xs text-gray-500">Boots on the Ground • Graduated from Mothership</span>
          </div>

          <div className="grid grid-cols-3 gap-6">
            <SystemBox
              title="UDD"
              description="User-Driven Design - UX research, interface design, and user experience optimization"
              color="cyan"
              onClick={() => onNodeClick(uddNode)}
            />

            <SystemBox
              title="IFS"
              description="Integrated Finance Solutions - Financial modeling, budgeting, and economic analysis"
              color="cyan"
              onClick={() => onNodeClick(ifsNode)}
            />

            <SystemBox
              title="PBAS"
              description="Performance-Based Analytics - KPI monitoring, reporting, and operational metrics tracking"
              color="cyan"
              onClick={() => onNodeClick(pbasNode)}
            />
          </div>
        </div>

        {/* Data Law Notice */}
        <div className="mt-12 max-w-3xl mx-auto">
          <div className="p-4 bg-[var(--sovereign-bg-secondary)] border border-[var(--sovereign-border)] rounded-lg">
            <div className="text-xs text-gray-400 mb-1">Data Law Compliance</div>
            <div className="text-sm text-gray-300">
              All instances operate under Singapore PDPA regulations. Data residency enforced by The Warden.
              Cross-border transfers require explicit authorization from The Overwatch.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
