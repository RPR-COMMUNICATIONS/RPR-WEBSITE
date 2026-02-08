import { SystemBox, ConnectionLine } from './c4-elements';
import type { NodeData } from '../App';
import { useTranslation } from 'react-i18next';

interface L2TheEldersProps {
  onNodeClick: (node: NodeData) => void;
}

export function L2TheElders({ onNodeClick }: L2TheEldersProps) {
  const { t } = useTranslation();

  const architectNode: NodeData = {
    id: 'architect',
    name: t('mothership.nodes.architect.name'),
    type: t('mothership.nodes.architect.type'),
    description: t('mothership.nodes.architect.description'),
    auditTrail: [
      {
        timestamp: '2026-02-05 10:45:00',
        user: 'Sentinel Protocol',
        action: 'Task Routing',
        details: 'Assigned strategic research task: Market analysis for Q1 2026.',
      },
      {
        timestamp: '2026-02-05 08:30:00',
        user: 'The Architect',
        action: 'Knowledge Synthesis',
        details: 'Completed comprehensive competitor analysis. 47 sources integrated.',
      },
      {
        timestamp: '2026-02-04 15:20:00',
        user: 'The Architect',
        action: 'Strategic Planning',
        details: 'Generated roadmap for new product vertical. Approved by Overwatch.',
      },
    ],
  };

  const engineerNode: NodeData = {
    id: 'engineer',
    name: t('mothership.nodes.engineer.name'),
    type: t('mothership.nodes.engineer.type'),
    description: t('mothership.nodes.engineer.description'),
    auditTrail: [
      {
        timestamp: '2026-02-05 11:15:00',
        user: 'Sentinel Protocol',
        action: 'Task Routing',
        details: 'Assigned infrastructure task: Firestore schema optimization.',
      },
      {
        timestamp: '2026-02-05 09:00:00',
        user: 'The Engineer',
        action: 'CI/CD Pipeline',
        details: 'Deployed Mothership v2.3.1 to production. All tests passed.',
      },
      {
        timestamp: '2026-02-04 16:45:00',
        user: 'The Engineer',
        action: 'Database Optimization',
        details: 'Reduced query latency by 34%. Firestore indexes updated.',
      },
    ],
  };

  const sentinelNode: NodeData = {
    id: 'sentinel',
    name: t('mothership.nodes.sentinel.name'),
    type: t('mothership.nodes.sentinel.type'),
    description: t('mothership.nodes.sentinel.description'),
    auditTrail: [
      {
        timestamp: '2026-02-05 11:30:00',
        user: 'The Sentinel',
        action: 'Routing Decision',
        details: 'Analyzed incoming task. Routed to The Architect (confidence: 96%).',
      },
      {
        timestamp: '2026-02-05 10:00:00',
        user: 'The Sentinel',
        action: 'Load Balancing',
        details: 'Distributed 23 tasks across triumvirate. Optimal allocation achieved.',
      },
      {
        timestamp: '2026-02-05 07:15:00',
        user: 'The Sentinel',
        action: 'Health Check',
        details: 'All Elder nodes operational. Network latency within parameters.',
      },
    ],
  };

  const firestoreNode: NodeData = {
    id: 'firestore',
    name: t('mothership.nodes.firestore.name'),
    type: t('mothership.nodes.firestore.type'),
    description: t('mothership.nodes.firestore.description'),
    auditTrail: [
      {
        timestamp: '2026-02-05 09:00:00',
        user: 'The Engineer',
        action: 'Schema Update',
        details: 'Deployed new collection structure. Migration successful.',
      },
    ],
  };

  const cicdNode: NodeData = {
    id: 'cicd',
    name: t('mothership.nodes.cicd.name'),
    type: t('mothership.nodes.cicd.type'),
    description: t('mothership.nodes.cicd.description'),
    auditTrail: [
      {
        timestamp: '2026-02-05 10:30:00',
        user: 'The Engineer',
        action: 'Deployment',
        details: 'Production deployment completed. 0 errors detected.',
      },
    ],
  };

  return (
    <div className="h-full overflow-auto p-12 bg-[var(--sovereign-bg-primary)]">
      <div className="max-w-7xl mx-auto">
        {/* The Elders Container - NO DASHED BORDER PER GOVERNANCE OVERRIDE */}
        <div className="bg-slate-900/20 rounded-2xl p-8 border border-slate-800/50">
          <div className="text-[10px] text-slate-500 font-bold uppercase tracking-[0.2em] mb-8">
            <span className="text-cyan-500/70">{t('mothership.nodes.sentinel.name')}</span> // LOGIC_CORE
          </div>

          {/* Sentinel at top */}
          <div className="flex justify-center mb-12">
            <SystemBox
              title={sentinelNode.name}
              description={sentinelNode.description}
              color="red"
              onClick={() => onNodeClick(sentinelNode)}
              className="w-full max-w-md"
            />
          </div>

          {/* The Triumvirate */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <SystemBox
              title={architectNode.name}
              description={architectNode.description}
              color="purple"
              onClick={() => onNodeClick(architectNode)}
            />

            <SystemBox
              title={engineerNode.name}
              description={engineerNode.description}
              color="purple"
              onClick={() => onNodeClick(engineerNode)}
            />

            <div className="opacity-50 grayscale select-none">
              <SystemBox
                title="RESERVED"
                description="Expansion slot for future reasoning engines."
                color="purple"
              />
            </div>
          </div>
        </div>

        {/* Infrastructure Layer */}
        <div className="mt-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="h-px w-8 bg-slate-800" />
            <span className="text-[10px] text-slate-500 font-bold uppercase tracking-[0.2em]">Infrastructure Layer</span>
            <div className="h-px flex-1 bg-slate-800" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl">
            <div className="space-y-4">
              <ConnectionLine label="DATA_PERSISTENCE" />
              <SystemBox
                title={firestoreNode.name}
                description={firestoreNode.description}
                color="cyan"
                onClick={() => onNodeClick(firestoreNode)}
              />
            </div>

            <div className="space-y-4">
              <ConnectionLine label="RELEASE_ORCHESTRATION" />
              <SystemBox
                title={cicdNode.name}
                description={cicdNode.description}
                color="cyan"
                onClick={() => onNodeClick(cicdNode)}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
