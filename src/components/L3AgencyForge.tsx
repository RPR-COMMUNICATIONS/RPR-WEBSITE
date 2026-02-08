import { SystemBox } from './c4-elements';
import type { NodeData } from '../App';
import { useTranslation } from 'react-i18next';

interface L3AgencyForgeProps {
  onNodeClick: (node: NodeData) => void;
}

export function L3AgencyForge({ onNodeClick }: L3AgencyForgeProps) {
  const { t } = useTranslation();

  const agencyNode: NodeData = {
    id: 'advertising-agency',
    name: t('mothership.nodes.agency.name'),
    type: t('mothership.nodes.agency.type'),
    description: t('mothership.nodes.agency.description'),
    auditTrail: [
      {
        timestamp: '2026-02-05 10:00:00',
        user: 'Business Development',
        action: 'Client Acquisition',
        details: 'New enterprise client onboarded. Project value: $125,000.',
      },
      {
        timestamp: '2026-02-04 14:15:00',
        user: 'Strategy Team',
        action: 'Market Analysis',
        details: 'Completed competitive landscape analysis for retail sector.',
      },
      {
        timestamp: '2026-02-03 09:30:00',
        user: 'Creative Director',
        action: 'Campaign Design',
        details: 'Approved Q1 2026 campaign strategy for 3 active clients.',
      },
    ],
  };

  const businessDeptsNode: NodeData = {
    id: 'business-departments',
    name: t('mothership.nodes.business_depts.name'),
    type: t('mothership.nodes.business_depts.type'),
    description: t('mothership.nodes.business_depts.description'),
    auditTrail: [
      {
        timestamp: '2026-02-05 11:45:00',
        user: 'Sales Team',
        action: 'Pipeline Review',
        details: 'Q1 pipeline at $450K. 7 active opportunities in negotiation.',
      },
      {
        timestamp: '2026-02-04 16:00:00',
        user: 'Client Success',
        action: 'Satisfaction Survey',
        details: 'Average client satisfaction score: 9.2/10. NPS: +73.',
      },
    ],
  };

  const planningTeamNode: NodeData = {
    id: 'planning-team',
    name: t('mothership.nodes.planning_team.name'),
    type: t('mothership.nodes.planning_team.type'),
    description: t('mothership.nodes.planning_team.description'),
    auditTrail: [
      {
        timestamp: '2026-02-05 15:00:00',
        user: t('mothership.nodes.planning_team.audit_1_user'),
        action: t('mothership.nodes.planning_team.audit_1_action'),
        details: t('mothership.nodes.planning_team.audit_1_details'),
      }
    ],
  };

  const forgeNode: NodeData = {
    id: 'the-forge',
    name: t('mothership.nodes.the_forge.name'),
    type: t('mothership.nodes.the_forge.type'),
    description: t('mothership.nodes.the_forge.description'),
    auditTrail: [
      {
        timestamp: '2026-02-05 12:30:00',
        user: 'The Forge',
        action: 'Build Complete',
        details: 'Deployed 5 client projects. All build pipelines green.',
      },
      {
        timestamp: '2026-02-05 08:45:00',
        user: 'The Forge',
        action: 'Documentation Update',
        details: 'Generated technical documentation for 3 new features.',
      },
      {
        timestamp: '2026-02-04 17:20:00',
        user: 'The Forge',
        action: 'Code Review',
        details: 'Automated review completed. 23 PRs merged, 0 critical issues.',
      },
    ],
  };

  return (
    <div className="h-full overflow-auto p-12 bg-[var(--sovereign-bg-primary)]">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <div className="mb-12">
          <h2 className="text-xl font-semibold mb-1 text-foreground">
            {t('mothership.l3.title')}
          </h2>
          <p className="text-sm text-gray-400">{t('mothership.l3.subtitle')}</p>
        </div>

        {/* Strategic Waterfall Section */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px flex-1 bg-gray-700" />
            <span className="text-xs text-gray-400 font-mono px-3 uppercase">{t('mothership.axis_waterfall')}</span>
            <div className="h-px flex-1 bg-gray-700" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <SystemBox
              title={agencyNode.name}
              description={agencyNode.description}
              color="cyan"
              onClick={() => onNodeClick(agencyNode)}
            />

            <SystemBox
              title={businessDeptsNode.name}
              description={businessDeptsNode.description}
              color="cyan"
              onClick={() => onNodeClick(businessDeptsNode)}
            />

            <SystemBox
              title={planningTeamNode.name}
              description={planningTeamNode.description}
              color="cyan"
              onClick={() => onNodeClick(planningTeamNode)}
            />
          </div>

          <div className="flex justify-center">
            <div className="px-4 py-2 bg-[#1e3a2f] border border-green-600/30 rounded text-xs text-green-400 font-mono uppercase">
              {t('mothership.role_identify')}
            </div>
          </div>
        </div>

        {/* Authority Separator */}
        <div className="flex items-center gap-3 mb-16">
          <div className="h-px flex-1 bg-gray-700" />
          <div className="flex flex-col items-center gap-2">
            <svg width="24" height="40" className="text-gray-500">
              <line x1="12" y1="0" x2="12" y2="30" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" />
              <polygon points="12,40 7,30 17,30" fill="currentColor" />
            </svg>
            <span className="text-xs text-gray-400 font-mono uppercase">{t('mothership.axis_authority')}</span>
          </div>
          <div className="h-px flex-1 bg-gray-700" />
        </div>

        {/* Execution Substrate Section */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px flex-1 bg-gray-700" />
            <span className="text-xs text-gray-400 font-mono px-3 uppercase">{t('mothership.axis_execution')}</span>
            <div className="h-px flex-1 bg-gray-700" />
          </div>

          <div className="max-w-2xl mx-auto mb-8">
            <SystemBox
              title={forgeNode.name}
              description={forgeNode.description}
              color="orange"
              onClick={() => onNodeClick(forgeNode)}
            />
          </div>

          <div className="flex justify-center mb-8">
            <div className="px-4 py-2 bg-[#2f2619] border border-orange-600/30 rounded text-xs text-orange-400 font-mono uppercase">
              {t('mothership.role_document')}
            </div>
          </div>

          {/* Forge Tools */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-xl mx-auto">
            <div className="p-4 bg-[var(--sovereign-bg-secondary)] border border-[var(--sovereign-border)] rounded-lg">
              <div className="text-xs text-gray-400 mb-1 uppercase">Tool</div>
              <div className="text-sm font-semibold text-[var(--sovereign-system-orange)]">CURSOR</div>
              <div className="text-xs text-gray-500 mt-1">AI-powered code editor</div>
            </div>

            <div className="p-4 bg-[var(--sovereign-bg-secondary)] border border-[var(--sovereign-border)] rounded-lg">
              <div className="text-xs text-gray-400 mb-1 uppercase">Tool</div>
              <div className="text-sm font-semibold text-[var(--sovereign-system-orange)]">GITHUB</div>
              <div className="text-xs text-gray-500 mt-1">Version control system</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
