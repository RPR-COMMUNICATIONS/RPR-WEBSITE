import React, { useState } from 'react';
import { sentinelDiagrams } from '../c4-diagrams/C4DiagramDefinitions-Final';
import { MermaidViewer } from './MermaidViewer';
import { Icon } from './Icon';
import { L1OverwatchCommand } from './L1OverwatchCommand';
import { L2TheElders } from './L2TheElders';
import { L3AgencyForge } from './L3AgencyForge';
import { L4Sovereignty } from './L4Sovereignty';
import type { NodeData } from '../App';

/**
 * TS-Λ3 // MOTHERSHIP VISUALIZER [v2.5.0]
 * PURPOSE: Interactive C4 Architectural Map
 * AUTHORITY: hello@butterdime.com
 */

export const MothershipVisualizer: React.FC = () => {
  const [activeTab, setActiveTab] = useState<keyof typeof sentinelDiagrams>('l1_overwatch');
  const [selectedNode, setSelectedNode] = useState<NodeData | null>(null);

  const tabs = [
    { id: 'l1_overwatch', label: 'L1: Overwatch', icon: 'shield' },
    { id: 'l2_elders', label: 'L2: Elders', icon: 'group' },
    { id: 'l3_forge', label: 'L3: Forge', icon: 'build' },
    { id: 'l4_instances', label: 'L4: Instances', icon: 'grid_view' }
  ];

  const renderActiveLayer = () => {
    switch (activeTab) {
      case 'l1_overwatch':
        return <L1OverwatchCommand onNodeClick={setSelectedNode} />;
      case 'l2_elders':
        return <L2TheElders onNodeClick={setSelectedNode} />;
      case 'l3_forge':
        return <L3AgencyForge onNodeClick={setSelectedNode} />;
      case 'l4_instances':
        return <L4Sovereignty onNodeClick={setSelectedNode} />;
      default:
        return (
          <div className="bg-slate-900/10 rounded-xl p-4 border border-white/5">
            <MermaidViewer
              definition={sentinelDiagrams[activeTab].definition}
              className="min-h-[450px]"
            />
          </div>
        );
    }
  };

  return (
    <section id="mothership-visualizer" className="py-24 bg-sovereign-bg-primary border-t border-white/5 relative">
      <div className="max-w-screen-2xl mx-auto px-6">
        {/* Visualizer Header & Subhead */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-white uppercase tracking-tight mb-4">
            THE MOTHERSHIP ARCHITECTURE
          </h3>
          <p className="text-sovereign-fg-muted text-sm md:text-base leading-relaxed max-w-5xl font-mono">
            A C4‑style operational map of our enterprise intelligence infrastructure, where real businesses are cloned into a single Mothership environment and governed agentic systems work alongside humans on the same source of truth.
            The diagram maps traditional hierarchy into departments (strategy, execution, governance) and revenue streams (MYAUDIT, VERIFY, etc.), with the Sentinel Protocol’s RAM engine as the central router that keeps every lane’s AI “in the loop” and useful to people by delivering measurable SME value.
          </p>
        </div>

        <div className="bg-[#080808] rounded-[2.5rem] border border-slate-800/50 p-8 md:p-12 shadow-2xl relative overflow-hidden min-h-[700px] flex flex-col">
          <nav className="flex flex-wrap gap-2 mb-10 bg-slate-900/30 p-2 rounded-2xl border border-slate-800/40 relative z-10">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex-1 min-w-[120px] py-4 rounded-xl transition-all duration-500 flex flex-col items-center gap-1.5 ${
                  activeTab === tab.id ? 'bg-sky-600 text-white shadow-lg' : 'text-slate-500 hover:bg-slate-800/30'
                }`}
              >
                <Icon name={tab.icon} size={16} fill={activeTab === tab.id} />
                <span className="text-[10px] font-black uppercase tracking-widest">{tab.label}</span>
              </button>
            ))}
          </nav>

          <div className="flex flex-col gap-2 mb-6 ml-2 relative z-10">
              <h3 className="text-xl font-bold text-white uppercase">{sentinelDiagrams[activeTab].title}</h3>
              <p className="text-slate-400 text-xs font-mono uppercase tracking-widest">{sentinelDiagrams[activeTab].description}</p>
          </div>

          <div className="flex-1 relative z-10 bg-slate-900/10 rounded-xl border border-white/5">
            {renderActiveLayer()}
          </div>
        </div>
      </div>

      {/* Forensic Log Modal */}
      {selectedNode && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/80 backdrop-blur-sm animate-in fade-in duration-300">
          <div
            className="absolute inset-0"
            onClick={() => setSelectedNode(null)}
          />
          <div className="relative w-full max-w-2xl bg-[#0a0a0a] border border-slate-800 rounded-3xl shadow-2xl p-8 max-h-[80vh] overflow-auto">
            <button
              onClick={() => setSelectedNode(null)}
              className="absolute top-6 right-6 text-slate-500 hover:text-white transition-colors"
            >
              <Icon name="close" size={24} />
            </button>

            <div className="mb-8">
              <div className="text-[10px] font-black text-cyan-400 uppercase tracking-[0.3em] mb-2">Node Forensic Log</div>
              <h4 className="text-3xl font-black text-white uppercase tracking-tighter italic">{selectedNode.name}</h4>
              <p className="text-slate-500 text-sm mt-2 font-mono uppercase tracking-widest">{selectedNode.type}</p>
            </div>

            <div className="mb-10">
              <p className="text-slate-300 text-sm leading-relaxed">{selectedNode.description}</p>
            </div>

            <div className="space-y-4">
              <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest border-b border-white/5 pb-2">Shared State History</div>
              {selectedNode.auditTrail.map((trail, i) => (
                <div key={i} className="flex gap-4 group">
                  <div className="flex flex-col items-center">
                    <div className="w-2 h-2 rounded-full bg-cyan-500 mt-1.5" />
                    {i !== selectedNode.auditTrail.length - 1 && <div className="w-px flex-1 bg-slate-800 my-1" />}
                  </div>
                  <div className="pb-6">
                    <div className="text-[9px] font-mono text-slate-500 uppercase mb-1">{trail.timestamp} // {trail.user}</div>
                    <div className="text-xs font-bold text-white uppercase tracking-tight mb-1">{trail.action}</div>
                    <div className="text-xs text-slate-400 leading-relaxed">{trail.details}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
