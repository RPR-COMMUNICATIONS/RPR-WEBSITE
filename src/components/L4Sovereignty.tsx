import { SystemBox } from './c4-elements';
import type { NodeData } from '../App';

interface L4SovereigntyProps {
  onNodeClick: (node: NodeData) => void;
}

export function L4Sovereignty({ onNodeClick }: L4SovereigntyProps) {
  const sovereignIdentityNode: NodeData = {
    id: 'sovereign-identity',
    name: 'SOVEREIGN IDENTITY',
    type: 'Identity Container',
    description: 'The root identity container of the RPR Mothership. This node defines the core essence of the system and its sovereignty.',
    auditTrail: [
      {
        timestamp: '2026-02-05 08:00:00',
        user: 'RPR System',
        action: 'Identity Confirmed',
        details: 'System identity validated against root certificates.',
      },
      {
        timestamp: '2026-02-04 12:00:00',
        user: 'Administrator',
        action: 'Metadata Update',
        details: 'System metadata synchronized with global registry.',
      },
    ],
  };

  const codeSubstrateNode: NodeData = {
    id: 'code-substrate',
    name: 'CODE SUBSTRATE',
    type: 'Implementation Layer',
    description: 'The physical implementation of the Sovereign Identity. This node represents the code and infrastructure that gives the system its form.',
    auditTrail: [
      {
        timestamp: '2026-02-05 14:30:00',
        user: 'Build Pipeline',
        action: 'Verification Successful',
        details: 'Sovereign code substrate integrity verified. 12,456 modules checked.',
      },
      {
        timestamp: '2026-02-03 10:15:00',
        user: 'DevOps',
        action: 'Patch Applied',
        details: 'Security patch 1.8.9-B deployed to substrate core.',
      },
    ],
  };

  return (
    <div className="h-full flex items-center justify-center p-12 bg-[var(--sovereign-bg-primary)]">
      <div className="max-w-3xl w-full">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-2xl font-bold mb-2 tracking-wider text-foreground">
            L4: SOVEREIGN IDENTITY
          </h2>
          <p className="text-sm text-gray-400 font-mono tracking-widest uppercase">The Essence Layer • Root Definition</p>
        </div>

        {/* Central Hexagon or Focus Point */}
        <div className="relative">
          {/* Identity Circle Background */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-[400px] h-[400px] rounded-full bg-gradient-to-br from-cyan-500/10 via-transparent to-orange-500/10 animate-pulse" />
          </div>

          <div className="relative grid grid-cols-1 gap-12">
            {/* Sovereign Identity */}
            <div className="flex flex-col items-center">
              <SystemBox
                title="SOVEREIGN IDENTITY"
                description="The root identity container of the RPR Mothership. Defines the core essence and system sovereignty."
                color="cyan"
                onClick={() => onNodeClick(sovereignIdentityNode)}
              />
              <div className="mt-4 text-xs font-mono text-cyan-400/60 uppercase tracking-widest italic">
                The Essence (The "Who")
              </div>
            </div>

            {/* Connection line */}
            <div className="flex justify-center h-24 relative overflow-hidden">
              <div className="w-px bg-gradient-to-b from-cyan-500/50 to-orange-500/50" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[10px] font-mono text-gray-600 bg-[var(--sovereign-bg-primary)] px-2 py-1 border border-gray-800 rounded">
                IMPLEMENTS
              </div>
            </div>

            {/* Code Substrate */}
            <div className="flex flex-col items-center">
              <SystemBox
                title="CODE SUBSTRATE"
                description="The physical implementation of the Sovereign Identity. Code and infrastructure giving form to the essence."
                color="orange"
                onClick={() => onNodeClick(codeSubstrateNode)}
              />
              <div className="mt-4 text-xs font-mono text-orange-400/60 uppercase tracking-widest italic">
                The Form (The "What")
              </div>
            </div>
          </div>
        </div>

        {/* Footer Note */}
        <div className="mt-16 text-center">
          <div className="inline-block p-4 border border-gray-800 rounded-lg bg-[var(--sovereign-bg-secondary)]/50">
            <div className="text-[10px] font-mono text-gray-500 uppercase tracking-widest mb-1">Status</div>
            <div className="text-xs text-green-400 flex items-center justify-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
              IDENTITY LATCHED & VERIFIED
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
