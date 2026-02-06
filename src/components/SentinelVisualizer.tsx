import React, { useState } from 'react';
import { sentinelDiagrams } from '../c4-diagrams/C4DiagramDefinitions-Final';
import { MermaidViewer } from './MermaidViewer';
import { NodeData } from '../App';
import { L2TheElders } from './L2TheElders';
import { L3AgencyForge } from './L3AgencyForge';
import { L4Sovereignty } from './L4Sovereignty';

export const SentinelVisualizer: React.FC = () => {
  const [activeTab, setActiveTab] = useState<keyof typeof sentinelDiagrams>('l1_overwatch');
  const [selectedNode, setSelectedNode] = useState<NodeData | null>(null);

  const tabs = [
    { id: 'l1_overwatch', label: 'L1: Overwatch', icon: 'shield' },
    { id: 'l2_elders', label: 'L2: Elders', icon: 'group' },
    { id: 'l3_forge', label: 'L3: Forge', icon: 'build' },
    { id: 'l4_instances', label: 'L4: Instances', icon: 'grid_view' }
  ];

  return (
    <div className="bg-sovereign-bg-primary rounded-lg border border-sovereign-border p-8 md:p-12 shadow-2xl">
      <nav className="flex flex-wrap gap-2 mb-10 bg-slate-900/30 p-2 rounded-lg border border-sovereign-border">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => {
              setActiveTab(tab.id as any);
              setSelectedNode(null);
            }}
            className={`flex-1 min-w-[120px] py-4 rounded-xl transition-all duration-500 flex flex-col items-center gap-1.5 ${
              activeTab === tab.id ? 'bg-sky-600 text-white shadow-lg' : 'text-slate-500 hover:bg-slate-800/30'
            }`}
          >
            <span className="material-symbols-outlined text-base">
              {tab.icon}
            </span>
            <span className="text-[10px] font-black uppercase tracking-widest">{tab.label}</span>
          </button>
        ))}
      </nav>

      <div className="flex flex-col gap-2 mb-6 ml-2">
          <h3 className="text-xl font-bold text-white uppercase">{sentinelDiagrams[activeTab].title}</h3>
          <p className="text-slate-400 text-xs font-mono uppercase tracking-widest">{sentinelDiagrams[activeTab].description}</p>
      </div>

      <div className="relative min-h-[500px] border border-sovereign-border rounded-xl overflow-hidden bg-slate-950/50">
        {activeTab === 'l1_overwatch' && (
          <MermaidViewer
            definition={sentinelDiagrams[activeTab].definition}
            className="h-full"
          />
        )}
        {activeTab === 'l2_elders' && <L2TheElders onNodeClick={setSelectedNode} />}
        {activeTab === 'l3_forge' && <L3AgencyForge onNodeClick={setSelectedNode} />}
        {activeTab === 'l4_instances' && <L4Sovereignty onNodeClick={setSelectedNode} />}
      </div>

      {selectedNode && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="bg-[#0a0a0a] border-2 border-sovereign-border rounded-xl w-full max-w-2xl max-h-[85vh] overflow-hidden flex flex-col shadow-2xl">
            <div className="p-6 border-b border-sovereign-border flex justify-between items-center bg-slate-900/40">
              <div>
                <h4 className="text-xl font-black text-white uppercase tracking-tight">{selectedNode.name}</h4>
                <p className="text-xs text-cyan-400 font-mono uppercase tracking-widest">{selectedNode.type}</p>
              </div>
              <button
                onClick={() => setSelectedNode(null)}
                className="p-2 hover:bg-slate-800 rounded-full transition-colors text-slate-400 hover:text-white"
              >
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>
            <div className="p-6 overflow-y-auto space-y-6 custom-scrollbar">
              <div>
                <h5 className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em] mb-2">Description</h5>
                <p className="text-sm text-slate-300 leading-relaxed font-medium">{selectedNode.description}</p>
              </div>
              <div>
                <h5 className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em] mb-4">Audit Trail // Forensic Log</h5>
                <div className="space-y-4">
                  {selectedNode.auditTrail.map((log, i) => (
                    <div key={i} className="border-l-2 border-slate-800 pl-4 py-1 hover:border-cyan-500/50 transition-colors">
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-[10px] font-mono text-cyan-500/70">{log.timestamp}</span>
                        <span className="text-[10px] font-black text-slate-500 uppercase">{log.user}</span>
                      </div>
                      <div className="text-xs font-bold text-slate-200 uppercase tracking-tight mb-0.5">{log.action}</div>
                      <div className="text-xs text-slate-400">{log.details}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="p-4 bg-slate-900/20 border-t border-sovereign-border text-center">
              <p className="text-[9px] text-slate-600 uppercase tracking-[0.3em]">Sentinel Governance Protocol // Verified Archive</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
