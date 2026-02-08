import { SystemBox } from './c4-elements';
import type { NodeData } from '../App';
import { useTranslation } from 'react-i18next';

interface L1OverwatchCommandProps {
  onNodeClick: (node: NodeData) => void;
}

export function L1OverwatchCommand({ onNodeClick }: L1OverwatchCommandProps) {
  const { t } = useTranslation();

  const overwatchNode: NodeData = {
    id: 'overwatch',
    name: t('mothership.nodes.overwatch.name'),
    type: t('mothership.nodes.overwatch.type'),
    description: t('mothership.nodes.overwatch.description'),
    auditTrail: [
      {
        timestamp: '2026-02-05 09:00:00',
        user: 'Founder',
        action: 'Protocol Approval',
        details: 'Approved v2.1.0 Governance Framework.',
      },
    ],
  };

  const eldersNode: NodeData = {
    id: 'perplexity-command',
    name: t('mothership.nodes.perplexity_command.name'),
    type: t('mothership.nodes.perplexity_command.type'),
    description: t('mothership.nodes.perplexity_command.description'),
    auditTrail: [
      {
        timestamp: '2026-02-05 11:00:00',
        user: 'Sentinel Protocol',
        action: 'Routing Update',
        details: 'RAM Optimizer tuned Architect-to-Engineer handoff latency.',
      },
    ],
  };

  const legalNode: NodeData = {
    id: 'legal-entity',
    name: t('mothership.nodes.rpr_llc.name'),
    type: t('mothership.nodes.rpr_llc.type'),
    description: t('mothership.nodes.rpr_llc.description'),
    auditTrail: [
      {
        timestamp: '2026-02-01 00:00:00',
        user: 'System',
        action: 'Charter Verified',
        details: 'Legal status active and standing verified.',
      },
    ],
  };

  return (
    <div className="h-full overflow-auto p-12 bg-[var(--sovereign-bg-primary)]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h2 className="text-xl font-semibold mb-1 text-foreground">
            {t('mothership.l1.title')}
          </h2>
          <p className="text-sm text-gray-400">{t('mothership.l1.subtitle')}</p>
        </div>

        <div className="flex flex-col items-center gap-16">
          {/* Top Level: Human Authority */}
          <SystemBox
            title={overwatchNode.name}
            description={overwatchNode.description}
            color="red"
            onClick={() => onNodeClick(overwatchNode)}
            className="w-80"
          />

          <div className="w-px h-16 bg-gray-700 dashed border-l border-dashed" />

          {/* Mid Level: Perplexity Command */}
          <SystemBox
            title={eldersNode.name}
            description={eldersNode.description}
            color="purple"
            onClick={() => onNodeClick(eldersNode)}
            className="max-w-md"
          />

          <div className="w-px h-16 bg-gray-700 dashed border-l border-dashed" />

          {/* Bottom Level: Legal Substrate */}
          <SystemBox
            title={legalNode.name}
            description={legalNode.description}
            color="cyan"
            onClick={() => onNodeClick(legalNode)}
            className="w-80"
          />
        </div>
      </div>
    </div>
  );
}
