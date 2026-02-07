import { SystemBox, ConnectionLine } from './c4-elements';
import type { NodeData } from '../App';

interface L2TheEldersProps {
  onNodeClick: (node: NodeData) => void;
}

export function L2TheElders({ onNodeClick }: L2TheEldersProps) {
  const architectNode: NodeData = {
    id: 'architect',
    name: 'THE ARCHITECT',
    type: 'Elder • Reasoning Engine',
    description: 'Powered by Perplexity AI. Specializes in research, strategic planning, and knowledge synthesis across the entire Mothership ecosystem.',
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
    name: 'THE ENGINEER',
    type: 'Elder • Execution Engine',
    description: 'Powered by Google Gemini. Handles technical implementation, code generation, and system architecture. Directly interfaces with Mothership enforcement layer.',
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
    name: 'THE SENTINEL',
    type: 'Elder • Guardian & Router',
    description: 'The Sentinel Protocol manages task routing, ensuring each request reaches the optimal Elder based on complexity and domain expertise.',
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
    name: 'FIRESTORE',
    type: 'Database System',
    description: 'Cloud-native NoSQL database providing data persistence for all Mothership operations.',
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
    name: 'CI/CD PIPELINE',
    type: 'Deployment System',
    description: 'Automated continuous integration and deployment infrastructure.',
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
        {/* Title */}
        <div className="mb-12">
          <h2 className="text-xl font-semibold mb-1 text-foreground">
            L2: The Elders Container
          </h2>
          <p className="text-sm text-gray-400">The Quantum Network • Shared-State Decision Making</p>
        </div>

        {/* Dotted container box for The Elders */}
        <div className="border-2 border-dashed border-gray-600 rounded-xl p-8">
          <div className="text-sm text-gray-400 mb-6">
            <span className="font-semibold">THE ELDERS</span> [Container]
          </div>

          {/* Sentinel at top */}
          <div className="flex justify-center mb-8">
            <SystemBox
              title="THE SENTINEL"
              description="Guardian & Router - Manages task routing to optimal Elder based on complexity and domain expertise"
              color="red"
              onClick={() => onNodeClick(sentinelNode)}
              className="w-80"
            />
          </div>

          {/* Routing indicators */}
          <div className="grid grid-cols-3 gap-4 mb-6">
            <div className="flex flex-col items-center">
              <svg width="100%" height="40" className="overflow-visible">
                <line
                  x1="50%"
                  y1="0"
                  x2="50%"
                  y2="40"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeDasharray="4 4"
                  className="text-gray-500"
                />
              </svg>
              <span className="text-xs text-gray-400">Routes research tasks</span>
            </div>
            <div className="flex flex-col items-center">
              <svg width="100%" height="40" className="overflow-visible">
                <line
                  x1="50%"
                  y1="0"
                  x2="50%"
                  y2="40"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeDasharray="4 4"
                  className="text-gray-500"
                />
              </svg>
              <span className="text-xs text-gray-400">Routes execution tasks</span>
            </div>
            <div className="flex flex-col items-center">
              <svg width="100%" height="40" className="overflow-visible">
                <line
                  x1="50%"
                  y1="0"
                  x2="50%"
                  y2="40"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeDasharray="4 4"
                  className="text-gray-500"
                />
              </svg>
              <span className="text-xs text-gray-400">Routes monitoring tasks</span>
            </div>
          </div>

          {/* The Triumvirate */}
          <div className="grid grid-cols-3 gap-6">
            <SystemBox
              title="THE ARCHITECT"
              description="Powered by Perplexity AI - Research, strategic planning, and knowledge synthesis"
              color="purple"
              onClick={() => onNodeClick(architectNode)}
            />

            <SystemBox
              title="THE ENGINEER"
              description="Powered by Google Gemini - Technical implementation, code generation, and system architecture"
              color="purple"
              onClick={() => onNodeClick(engineerNode)}
            />

            <SystemBox
              title="THE GUARDIAN"
              description="Security monitoring, compliance verification, and system health checks"
              color="purple"
              onClick={() => onNodeClick(sentinelNode)}
            />
          </div>
        </div>

        {/* Infrastructure Connections */}
        <div className="mt-12">
          <div className="text-sm text-gray-400 mb-6">Infrastructure Layer</div>
          <div className="grid grid-cols-2 gap-6 max-w-2xl">
            <div>
              <ConnectionLine label="Stores and retrieves data" />
              <SystemBox
                title="FIRESTORE"
                description="Cloud NoSQL database providing persistent storage for all operations"
                color="cyan"
                onClick={() => onNodeClick(firestoreNode)}
              />
            </div>

            <div>
              <ConnectionLine label="Deploys code and services" />
              <SystemBox
                title="CI/CD PIPELINE"
                description="Automated deployment system ensuring continuous delivery"
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
