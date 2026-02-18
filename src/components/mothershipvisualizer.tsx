import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

/**
 * TS-Λ3 // ORGANIZATION VISUALISER HUD [v8.72.0]
 * Path: src/components/mothershipvisualizer.tsx
 * Mission: Modular Architecture Latch // Smallcaps Mandate Compliance
 * Authority: THE OVERWATCH // SG-CANONICAL-2026
 * Status: AUTHORITATIVE // LATCHED
 * * RECOVERY LOG:
 * 1. NOMENCLATURE: Synchronized tab labels with harborA.json manifest.
 * 2. GEOMETRY: Implemented 340px sidebar width with rounded-t-[2.5rem] handheld sheet.
 * 3. IMPORTS: Point-locked to lowercase physical substrates (l0..l4).
 * 4. UI: Liquidated deprecated glowColor props to satisfy SymbolTile v5.4.2 interface.
 */

// 🧬 AUTHORITATIVE UI LATCHES
import SectionHeading from './sectionheading.tsx';
import TacticalProgress from './tacticalprogress.tsx';
import SovereignGlass from './sovereignglass.tsx';
import AuditSidebar from './audit-sidebar.tsx';
import SymbolTile from './icons/symboltile.tsx';

// 🏛️ LAYER COMPONENT LATCHES
import L0TheFirm from './l0thefirm.tsx';
import L1OverwatchCommand from './l1overwatchcommand.tsx';
import L2TheElders from './l2theelders.tsx';
import L3Workspace from './l3workspace.tsx';
import L4Products from './l4products.tsx';

// ⚓ AUTHORITATIVE TYPE LATCH
import type { NodeData } from '../types/index.ts';

export const MothershipVisualizer: React.FC = () => {
  const { t } = useTranslation('harborA');

  // 🚥 INITIAL STATE LATCH: L1 (Command Plane) is the default intake axis
  const [activeTab, setActiveTab] = useState<string>('l1_command');
  const [selectedNode, setSelectedNode] = useState<NodeData | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  // 📐 VIEWPORT TELEMETRY
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  // 🚥 TAB REGISTRY: Point-locked to Master Manifest architecture
  const tabs = [
    { id: 'l0_firm', label: t('visualizer.tabs.l0', 'THE FIRM'), glyph: 'simulation' },
    { id: 'l1_command', label: t('visualizer.tabs.l1', 'THE COMMAND PLANE'), glyph: 'skull' },
    { id: 'l2_elders', label: t('visualizer.tabs.l2', 'THE ELDERS'), glyph: 'chess_rook' },
    { id: 'l3_workshop', label: t('visualizer.tabs.l3', 'THE WORKSHOP'), glyph: 'workspaces' },
    { id: 'l4_products', label: t('visualizer.tabs.l4', 'SPECIALIST INSTANCES'), glyph: 'bolt' }
  ];

  /**
   * ⚙️ LAYER ROUTER
   * Maps active tabs to their respective functional reasoning planes.
   */
  const renderActiveLayer = () => {
    switch (activeTab) {
      case 'l0_firm':
        return <L0TheFirm onNodeClick={setSelectedNode} onClose={() => setSelectedNode(null)} />;
      case 'l1_command':
        return <L1OverwatchCommand onNodeClick={setSelectedNode} />;
      case 'l2_elders':
        return <L2TheElders onNodeClick={setSelectedNode} />;
      case 'l3_workshop':
        return <L3Workspace onNodeClick={setSelectedNode} />;
      case 'l4_products':
        return <L4Products onNodeClick={setSelectedNode} />;
      default:
        return null;
    }
  };

  return (
    <section className="py-12 bg-black" id="visualizer">
      <div className="max-w-[1440px] mx-auto px-6 md:px-24">

        <SectionHeading
          title={t('visualizer.title', 'ORGANIZATION')}
          accent={t('visualizer.accent', 'VISUALISER')}
          kicker={t('visualizer.kicker', 'MULTI-LAYERED INFRASTRUCTURE AUDIT')}
          className="mb-8"
        />

        {/* 📐 HEIGHT RECALIBRATED: Responsive substrate latch */}
        <SovereignGlass className="min-h-[500px] md:min-h-[620px] flex flex-col overflow-hidden p-0 border-white/10 bg-black/40 shadow-2xl relative transition-all duration-500">

          {/* 📐 NAVIGATION AXIS: Touch-scrollable snap-x axis */}
          <div className="flex flex-nowrap items-center gap-2 p-2 border-b border-white/5 bg-white/[0.02] overflow-x-auto no-scrollbar relative z-10 snap-x snap-mandatory">
            {tabs.map(tab => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => {
                    setActiveTab(tab.id);
                    setSelectedNode(null);
                  }}
                  className={`snap-start shrink-0 px-5 py-2.5 rounded-xl transition-all duration-500 flex items-center gap-3 border ${isActive
                    ? 'bg-white text-black border-white shadow-[0_0_20px_rgba(255,255,255,0.15)]'
                    : 'text-slate-500 border-transparent hover:bg-white/5'
                    }`}
                >
                  <SymbolTile
                    glyph={tab.glyph}
                    size={20}
                    variant="none"
                    active={isActive}
                    glow={false}
                    className={`transition-colors duration-500 ${isActive ? 'text-black' : 'text-slate-500'}`}
                  />
                  <span className="text-[9px] font-black uppercase tracking-[0.2em] whitespace-nowrap">
                    {tab.label}
                  </span>
                </button>
              );
            })}
          </div>

          {/* 🧬 EXECUTION STAGE & CONDITIONAL SIDEBAR */}
          <div className="flex-1 flex flex-col md:flex-row relative overflow-hidden">

            {/* STAGE SUBSTRATE: Responsive vertical latch */}
            <div className="flex-grow overflow-hidden h-[450px] md:h-[520px] relative transition-all duration-700">
              {renderActiveLayer()}

              {/* CALIBRATION OVERLAY: Desktop only */}
              <div className="absolute bottom-4 left-6 pointer-events-none opacity-20 hidden md:block">
                <TacticalProgress label={`LAYER_${activeTab.toUpperCase()}_LATCHED`} />
              </div>
            </div>

            {/* 🛡️ FORENSIC AUDIT SIDEBAR
                Responsive Bottom-Sheet (Mobile) / Sidecard (Desktop)
            */}
            {selectedNode && (
              <div className={`
                fixed md:relative bottom-0 left-0 w-full md:w-[340px] z-50 md:z-20
                h-[70vh] md:h-auto bg-black border-t md:border-t-0 md:border-l border-white/10
                animate-in slide-in-from-bottom md:slide-in-from-right duration-500
                rounded-t-[2.5rem] md:rounded-t-none shadow-[-20px_0_60px_rgba(0,0,0,0.8)]
              `}>
                {/* Handheld Interaction Handle */}
                <div className="w-12 h-1 bg-white/10 rounded-full mx-auto my-4 md:hidden" />

                <AuditSidebar
                  node={selectedNode as any}
                  onClose={() => setSelectedNode(null)}
                />
              </div>
            )}

            {/* Mobile Backdrop Latch: Prevents interaction with background during audit */}
            {selectedNode && isMobile && (
              <div
                className="fixed inset-0 bg-black/70 backdrop-blur-md z-40 animate-in fade-in duration-300"
                onClick={() => setSelectedNode(null)}
              />
            )}
          </div>

        </SovereignGlass>
      </div>
    </section>
  );
};

export default MothershipVisualizer;