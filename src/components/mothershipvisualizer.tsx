import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';

/**
 * TS-Λ3 // ORGANIZATION VISUALISER HUD [v8.80.0]
 * Path: src/components/mothershipvisualizer.tsx
 * Mission: Mobile Ergonomics // Discoverability Latch
 * Authority: THE OVERWATCH // SG-CANONICAL-2026
 * Status: AUTHORITATIVE // LATCHED
 * * UPGRADE LOG:
 * 1. TAB_AFFORDANCE: Integrated CSS gradient mask to signal horizontal scroll depth.
 * 2. GEOMETRY: Shifted mobile height to 55vh for viewport-relative consistency.
 * 3. INTERACTION: Implemented active tab auto-centering for tactile feedback.
 * 4. UX: Hardened bottom-sheet handle for mobile dismiss gesture simulation.
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
  const { t } = useTranslation('harbora');
  const tabContainerRef = useRef<HTMLDivElement>(null);

  // 🚥 INITIAL STATE LATCH
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

  // 🚥 TAB REGISTRY
  const tabs = [
    { id: 'l0_firm', label: t('visualizer.tabs.l0', 'THE FIRM'), glyph: 'simulation' },
    { id: 'l1_command', label: t('visualizer.tabs.l1', 'THE COMMAND PLANE'), glyph: 'skull' },
    { id: 'l2_elders', label: t('visualizer.tabs.l2', 'THE ELDERS'), glyph: 'chess_rook' },
    { id: 'l3_workshop', label: t('visualizer.tabs.l3', 'THE WORKSHOP'), glyph: 'workspaces' },
    { id: 'l4_products', label: t('visualizer.tabs.l4', 'SPECIALIST INSTANCES'), glyph: 'bolt' }
  ];

  /**
   * ⚙️ LAYER ROUTER
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

        <SovereignGlass className="min-h-[500px] md:min-h-[620px] flex flex-col overflow-hidden p-0 border-white/10 bg-black/40 shadow-2xl relative transition-all duration-500">

          {/* 📐 NAVIGATION AXIS: ENHANCED MOBILE SCROLL */}
          <div className="relative border-b border-white/5 bg-white/[0.02] z-20">
            {/* 🧬 SCROLL DEPTH FADE: Identifies hidden content for mobile users */}
            <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-black/40 to-transparent pointer-events-none md:hidden z-30" />

            <div
              ref={tabContainerRef}
              className="flex flex-nowrap items-center gap-2 p-2 overflow-x-auto no-scrollbar snap-x snap-mandatory scroll-smooth"
            >
              {tabs.map(tab => {
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={(e) => {
                      setActiveTab(tab.id);
                      setSelectedNode(null);
                      // 🧬 AUTO-CENTER LATCH: Improves tactile navigation
                      (e.currentTarget as HTMLElement).scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
                    }}
                    className={`snap-center shrink-0 px-5 py-3 rounded-xl transition-all duration-500 flex items-center gap-3 border ${isActive
                      ? 'bg-white text-black border-white shadow-[0_0_25px_rgba(255,255,255,0.2)]'
                      : 'text-slate-500 border-transparent hover:bg-white/5 active:scale-95'
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
          </div>

          {/* 🧬 EXECUTION STAGE & CONDITIONAL SIDEBAR */}
          <div className="flex-1 flex flex-col md:flex-row relative overflow-hidden">

            {/* STAGE SUBSTRATE: Dynamic Viewport-Relative Height */}
            <div className="flex-grow overflow-hidden h-[55vh] md:h-[520px] relative transition-all duration-700">
              <div className="absolute inset-0 touch-pan-x touch-pan-y">
                {renderActiveLayer()}
              </div>

              {/* CALIBRATION OVERLAY */}
              <div className="absolute bottom-4 left-6 pointer-events-none opacity-20 hidden md:block">
                <TacticalProgress label={`LAYER_${activeTab.toUpperCase()}_LATCHED`} />
              </div>
            </div>

            {/* 🛡️ FORENSIC AUDIT SIDEBAR
                Responsive Bottom-Sheet (Handheld) / Sidecard (Desktop)
            */}
            {selectedNode && (
              <div className={`
                fixed md:relative bottom-0 left-0 w-full md:w-[340px] z-[120] md:z-20
                h-[75vh] md:h-auto bg-[#0a0a0a] border-t md:border-t-0 md:border-l border-white/10
                animate-in slide-in-from-bottom md:slide-in-from-right duration-500
                rounded-t-[2.5rem] md:rounded-t-none shadow-[-20px_0_80px_rgba(0,0,0,1)]
                flex flex-col
              `}>
                {/* Handheld Dismiss Handle: Visual cue for swipe-to-close behavior */}
                <div
                  className="w-full py-4 flex justify-center md:hidden cursor-pointer"
                  onClick={() => setSelectedNode(null)}
                >
                  <div className="w-12 h-1 bg-white/20 rounded-full hover:bg-cyan-500/50 transition-colors" />
                </div>

                <div className="flex-1 overflow-y-auto">
                  <AuditSidebar
                    node={selectedNode as any}
                    onClose={() => setSelectedNode(null)}
                  />
                </div>
              </div>
            )}

            {/* Mobile Backdrop Latch */}
            {selectedNode && isMobile && (
              <div
                className="fixed inset-0 bg-black/80 backdrop-blur-xl z-[115] animate-in fade-in duration-300"
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