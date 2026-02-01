import React, { useState } from 'react';
import { Shield, Users, Hammer, LayoutGrid } from 'lucide-react';
import { sentinelDiagrams } from '../c4-diagrams/C4DiagramDefinitions-Final';
import { MermaidViewer } from './MermaidViewer';

export const SentinelVisualizer: React.FC = () => {
  const [activeTab, setActiveTab] = useState<keyof typeof sentinelDiagrams>('l1_overwatch');

  const tabs = [
    { id: 'l1_overwatch', label: 'L1: Overwatch', icon: Shield },
    { id: 'l2_elders', label: 'L2: Elders', icon: Users },
    { id: 'l3_forge', label: 'L3: Forge', icon: Hammer },
    { id: 'l4_instances', label: 'L4: Instances', icon: LayoutGrid }
  ];

  return (
    <div className="bg-black rounded-[2.5rem] border border-white/10 p-8 md:p-12 shadow-2xl">
      <nav className="flex flex-wrap gap-2 mb-10 bg-white/5 p-2 rounded-2xl border border-white/5">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as any)}
            className={`flex-1 min-w-[120px] py-4 rounded-xl transition-all duration-500 flex flex-col items-center gap-1.5 ${
              activeTab === tab.id ? 'bg-cyan-500 text-black shadow-lg shadow-cyan-500/20' : 'text-white/40 hover:bg-white/5'
            }`}
          >
            <tab.icon className={`w-4 h-4 ${activeTab === tab.id ? 'text-black' : 'text-cyan-400'}`} />
            <span className="text-[10px] font-black uppercase tracking-widest">{tab.label}</span>
          </button>
        ))}
      </nav>

      <div className="flex flex-col gap-2 mb-6 ml-2">
          <h3 className="text-xl font-bold text-white uppercase tracking-tight">{sentinelDiagrams[activeTab].title}</h3>
          <p className="text-white/40 text-[10px] font-mono uppercase tracking-widest">{sentinelDiagrams[activeTab].description}</p>
      </div>

      <div className="bg-white/[0.02] rounded-3xl p-4 border border-white/5">
        <MermaidViewer
          definition={sentinelDiagrams[activeTab].definition}
          className="min-h-[450px]"
        />
      </div>
    </div>
  );
};
