import React, { useState } from 'react';
import { NodeData } from '../App';
import { L1OverwatchCommand } from './L1OverwatchCommand';
import { L2TheElders } from './L2TheElders';
import { L3AgencyForge } from './L3AgencyForge';
import { L4Sovereignty } from './L4Sovereignty';

export const SentinelVisualizer: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'l1_overwatch' | 'l2_elders' | 'l3_forge' | 'l4_instances'>('l1_overwatch');
  const [selectedNode, setSelectedNode] = useState<NodeData | null>(null);

  const tabs = [
    { id: 'l1_overwatch' as const, label: 'L1: Overwatch', icon: 'skull' },
    { id: 'l2_elders' as const, label: 'L2: Elders', icon: 'assistant_device' },
    { id: 'l3_forge' as const, label: 'L3: Forge', icon: 'workspaces' },
    { id: 'l4_instances' as const, label: 'L4: Instances', icon: 'apk_install' },
  ];

  const handleNodeClick = (node: NodeData) => {
    setSelectedNode(node);
  };

  return (
    <div className="bg-sovereign-bg-primary rounded-[2.5rem] border border-sovereign-border-subtle p-8 md:p-12 shadow-2xl ring-1 ring-sovereign-card-ring">
      {/* Tabs */}
      <nav className="flex flex-wrap gap-4 mb-10 bg-sovereign-bg-elevated p-3 rounded-[2rem] border border-sovereign-border-subtle">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => {
                setActiveTab(tab.id);
                setSelectedNode(null);
              }}
              className={`flex-1 min-w-[140px] p-2 rounded-2xl transition-all duration-500 flex items-center gap-4 group ${
                isActive ? 'bg-white/5 shadow-lg border border-white/10' : 'text-slate-500 hover:bg-white/5'
              }`}
            >
              <div
                className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all ${
                  isActive
                    ? 'bg-black shadow-[0_0_24px_rgba(255,255,255,0.35)] border border-white/10'
                    : 'bg-transparent border border-transparent'
                }`}
              >
                <span
                  className={`material-symbols-outlined text-xl ${
                    isActive ? 'text-white' : 'text-slate-600 group-hover:text-slate-400'
                  }`}
                  style={{ fontVariationSettings: `'FILL' ${tab.id === 'l2_elders' ? 0 : 1}, 'wght' 400, 'GRAD' 0, 'opsz' 48` }}
                >
                  {tab.icon}
                </span>
              </div>
              <span
                className={`text-[10px] font-black uppercase tracking-widest ${
                  isActive ? 'text-white' : 'text-slate-500'
                }`}
              >
                {tab.label}
              </span>
            </button>
          );
        })}
      </nav>

      {/* Body */}
      <div className="relative min-h-[500px] border border-sovereign-border-subtle rounded-3xl overflow-hidden bg-slate-950/50">
        {activeTab === 'l1_overwatch' && <L1OverwatchCommand onNodeClick={handleNodeClick} />}
        {activeTab === 'l2_elders' && <L2TheElders onNodeClick={handleNodeClick} />}
        {activeTab === 'l3_forge' && <L3AgencyForge onNodeClick={handleNodeClick} />}
        {activeTab === 'l4_instances' && <L4Sovereignty onNodeClick={handleNodeClick} />}
      </div>

      {/* Detail modal */}
      {selectedNode && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="bg-[#0a0a0a] border-2 border-sovereign-border-subtle rounded-xl w-full max-w-2xl max-h-[85vh] overflow-hidden flex flex-col shadow-2xl">
            <div className="p-6 border-b border-sovereign-border-subtle flex justify-between items-center bg-slate-900/40">
              <div>
                <h4 className="text-xl font-black text-white uppercase tracking-tight">
                  {selectedNode.name}
                </h4>
                <p className="text-xs text-cyan-400 font-mono uppercase tracking-widest">
                  {selectedNode.type}
                </p>
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
                <h5 className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em] mb-2">
                  Description
                </h5>
                <p className="text-sm text-slate-300 leading-relaxed font-medium">
                  {selectedNode.description}
                </p>
              </div>
              <div>
                <h5 className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em] mb-4">
                  Audit Trail // Forensic Log
                </h5>
                <div className="space-y-4">
                  {selectedNode.auditTrail.map((log, i) => (
                    <div
                      key={i}
                      className="border-l-2 border-slate-800 pl-4 py-1 hover:border-cyan-500/50 transition-colors"
                    >
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-[10px] font-mono text-cyan-500/70">
                          {log.timestamp}
                        </span>
                        <span className="text-[10px] font-black text-slate-500 uppercase">
                          {log.user}
                        </span>
                      </div>
                      <div className="text-xs font-bold text-slate-200 uppercase tracking-tight mb-0.5">
                        {log.action}
                      </div>
                      <div className="text-xs text-slate-400">{log.details}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="p-4 bg-slate-900/20 border-top border-sovereign-border-subtle text-center">
              <p className="text-[9px] text-slate-600 uppercase tracking-[0.3em]">
                Sentinel Governance Protocol // Verified Archive
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
