import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { SectionHeading } from './sectionheading.tsx';
import TacticalProgress from './tacticalprogress.tsx';
import SovereignGlass from './sovereignglass.tsx';
import AuditSidebar from './audit-sidebar.tsx';
import SymbolTile from './icons/symboltile.tsx';

import L0TheFirm from './l0thefirm.tsx';
import L1OverwatchCommand from './l1overwatchcommand.tsx';
import L2TheElders from './l2theelders.tsx';
import L3Workspace from './l3workspace.tsx';
import L4Products from './l4products.tsx';

import type { NodeData } from '../types/index.ts';

/**
 * TS-Λ3 // ORGANIZATION VISUALISER HUD [v9.3.0]
 * Path: src/components/mothershipvisualizer.tsx
 * Mission: +20% Frame Expansion (1200px Internal Stage)
 * Authority: THE OVERWATCH // SG-CANONICAL-2026
 */

export const MothershipVisualizer: React.FC = () => {
  const { t } = useTranslation('harbora');

  const [activeTab, setActiveTab] = useState<string>('l0_firm');
  const [selectedNode, setSelectedNode] = useState<NodeData | null>(null);

  useEffect(() => {
    // Substrate heartbeat
  }, []);

  const tabs = [
    { id: 'l0_firm', label: t('visualizer.tabs.l0', 'THE FIRM'), glyph: 'simulation' },
    { id: 'l1_command', label: t('visualizer.tabs.l1', 'THE COMMAND PLANE'), glyph: 'skull' },
    { id: 'l2_elders', label: t('visualizer.tabs.l2', 'THE ELDERS'), glyph: 'chess_rook' },
    { id: 'l3_workshop', label: t('visualizer.tabs.l3', 'THE WORKSHOP'), glyph: 'workspaces' },
    { id: 'l4_products', label: t('visualizer.tabs.l4', 'SPECIALIST INSTANCES'), glyph: 'bolt' },
  ];

  const renderActiveLayer = () => {
    const props = { onNodeClick: setSelectedNode };
    switch (activeTab) {
      case 'l0_firm': return <L0TheFirm {...props} onClose={() => setSelectedNode(null)} />;
      case 'l1_command': return <L1OverwatchCommand {...props} />;
      case 'l2_elders': return <L2TheElders {...props} />;
      case 'l3_workshop': return <L3Workspace {...props} />;
      case 'l4_products': return <L4Products {...props} />;
      default: return null;
    }
  };

  return (
    <section className="bg-black py-0 overflow-hidden" id="visualizer">
      <div className="w-full px-0 md:px-4 lg:px-6">
        <SectionHeading
          title={t('visualizer.title', 'SYSTEM')}
          accent={t('visualizer.accent', 'VISUALISER')}
          kicker={t('visualizer.kicker', 'MULTI-LAYERED INFRASTRUCTURE AUDIT')}
          className="mb-12 pt-24"
        />

        {/* 🚀 SOVEREIGN GLASS: Expanded to 1320px (+20%) */}
        <SovereignGlass className="min-h-[850px] md:min-h-[1320px] flex flex-col overflow-hidden p-0 border-white/10 bg-black/40 shadow-2xl relative transition-all duration-500 rounded-t-[2rem] md:rounded-t-[3rem]">

          <div className="relative z-20 border-b border-white/5 bg-white/[0.02]">
            <div className="flex snap-x snap-mandatory flex-nowrap items-center gap-2 overflow-x-auto p-3 no-scrollbar">
              {tabs.map((tab) => {
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => { setActiveTab(tab.id); setSelectedNode(null); }}
                    className={`snap-center shrink-0 rounded-2xl border px-5 py-4 transition-all duration-500 ${isActive ? 'border-white bg-white text-black' : 'border-transparent text-slate-500'}`}
                  >
                    <div className="flex items-center gap-3">
                      <SymbolTile glyph={tab.glyph} size={20} variant="none" active={isActive} className={isActive ? 'text-black' : 'text-slate-500'} />
                      <span className="whitespace-nowrap text-[10px] font-black uppercase tracking-[0.25em]">{tab.label}</span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="relative flex flex-1 flex-col overflow-hidden md:flex-row">

            {/* 🚀 INTERNAL STAGE: Expanded to 1200px (+20%) */}
            <div className="relative h-[90vh] flex-grow overflow-hidden bg-white/[0.01] transition-all duration-700 md:h-[1200px]">
              <div className="absolute inset-0">
                {renderActiveLayer()}
              </div>

              <div className="pointer-events-none absolute bottom-8 left-10 hidden opacity-30 md:block">
                <TacticalProgress label={`LAYER_${activeTab.toUpperCase()}_LATCHED`} />
              </div>

              <div className="pointer-events-none absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]" />
            </div>

            {selectedNode && (
              <div className="fixed bottom-0 left-0 z-[120] flex h-[85vh] w-full flex-col rounded-t-[2rem] border-t border-white/10 bg-[#0a0a0a] md:relative md:w-[400px] md:h-auto md:border-t-0 md:border-l">
                <div className="flex w-full cursor-pointer justify-center py-6 md:hidden" onClick={() => setSelectedNode(null)}>
                  <div className="h-1.5 w-16 rounded-full bg-white/10" />
                </div>
                <div className="flex-1 overflow-y-auto">
                  <AuditSidebar node={selectedNode} onClose={() => setSelectedNode(null)} />
                </div>
              </div>
            )}
          </div>
        </SovereignGlass>
      </div>
    </section>
  );
};

export default MothershipVisualizer;