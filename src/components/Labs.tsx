import React, { useState } from 'react';

/**
 * TS-Λ3 // THE LABS // 4-TIER MASTER HIERARCHY [v9.2.0]
 * RECTIFIED: Multi-tier tactical stack with White-to-Grey color protocol
 * TIER I: Apex Governance (THE SENTINEL PROTOCOL)
 * TIER II: The Elders (Architect, Engineer, Sentinel)
 * TIER III: Inhouse Products (RPR VERIFY, OLLIE, RPR KONTROL + Clipboard Latch)
 * TIER IV: Client Web Solutions (MYAUDIT)
 */

export const Labs: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText("https://kontrol.rprcomms.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // Reset state after 2s
  };
  return (
    <section id="labs" className="bg-black py-32 px-6 md:px-12 border-b border-zinc-800">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="space-y-4">
            <h2 className="text-white text-4xl md:text-6xl font-bold uppercase tracking-[-0.05em] font-sans">
              THE LABS
            </h2>
            <p className="text-cyan-400 font-mono tracking-[0.2em] text-sm uppercase">
              TECHNICAL INFRASTRUCTURE // THE OVERWATCH PROTOCOL
            </p>
          </div>

          {/* Global Labs Action Indicator */}
          <div className="flex items-center gap-3 px-4 py-2 bg-[#0A0A0A] border border-zinc-800 rounded-lg">
            <span className="material-symbols-outlined text-white text-xl animate-pulse">
              handyman
            </span>
            <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">System Maintenance: Active</span>
          </div>
        </div>

        <div className="space-y-16">
          {/* TIER I: Apex Governance */}
          <div className="space-y-6">
            <article className="group relative flex flex-col justify-between p-8 bg-[#0A0A0A] border border-zinc-800 rounded-xl hover:border-white/20 transition-all">
              <div className="space-y-6">
                <div className="w-12 h-12 bg-black border border-zinc-800 rounded-xl flex items-center justify-center transition-all group-hover:border-white/20">
                  <span className="material-symbols-outlined text-white text-2xl">
                    all_inclusive
                  </span>
                </div>
                <div className="space-y-2">
                  <h4 className="text-white font-bold tracking-widest font-mono text-xs uppercase">THE SENTINEL PROTOCOL</h4>
                  <p className="text-zinc-400 text-[10px] uppercase font-mono leading-relaxed tracking-tight">Real-time forensic monitoring and governance enforcement</p>
                </div>
              </div>
              <div className="mt-8 flex items-center justify-between border-t border-zinc-900 pt-4">
                <span className="text-[8px] font-mono text-cyan-600 tracking-widest">ACTIVE</span>
              </div>
            </article>
          </div>

          {/* TIER II: The Elders */}
          <div className="space-y-6">
            <h3 className="text-white text-xl font-bold uppercase tracking-widest font-mono">THE ELDERS</h3>
            <div className="grid gap-4 md:grid-cols-3">
              {[
                { title: "THE ARCHITECT", icon: "chess_knight", desc: "Strategy & Governance Design", status: "ACTIVE" },
                { title: "THE ENGINEER", icon: "chess_bishop", desc: "Technical Blueprints & Execution", status: "ACTIVE" },
                { title: "THE SENTINEL", icon: "chess_rook", desc: "Enforcement & Forensic Monitoring", status: "ACTIVE" }
              ].map((elder) => (
                <article key={elder.title} className="group relative flex flex-col justify-between p-8 bg-[#0A0A0A] border border-zinc-800 rounded-xl hover:border-white/20 transition-all">
                  <div className="space-y-6">
                    <div className="w-12 h-12 bg-black border border-zinc-800 rounded-xl flex items-center justify-center transition-all group-hover:border-white/20">
                      <span className="material-symbols-outlined text-white text-2xl">
                        {elder.icon}
                      </span>
                    </div>
                    <div className="space-y-2">
                      <h4 className="text-white font-bold tracking-widest font-mono text-xs uppercase">{elder.title}</h4>
                      <p className="text-zinc-400 text-[10px] uppercase font-mono leading-relaxed tracking-tight">{elder.desc}</p>
                    </div>
                  </div>
                  <div className="mt-8 flex items-center justify-between border-t border-zinc-900 pt-4">
                    <span className="text-[8px] font-mono text-cyan-600 tracking-widest">{elder.status}</span>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* TIER III: Inhouse Products */}
          <div className="space-y-6">
            <h3 className="text-white text-xl font-bold uppercase tracking-widest font-mono">INHOUSE PRODUCTS</h3>
            <div className="grid gap-4 md:grid-cols-3">
              {[
                { title: "RPR VERIFY", icon: "verified_user", desc: "Identity verification substrate", status: "ACTIVE", link: null },
                { title: "OLLIE", icon: "smart_toy", desc: "Sentinel AI Interface", status: "ACTIVE", link: "/#chat" },
                { title: "RPR KONTROL", icon: "auto_awesome", desc: "Command Substrate", status: "THE MOTHERSHIP", link: "https://kontrol.rprcomms.com" }
              ].map((product) => {
                const isKontrol = product.title === "RPR KONTROL";
                
                const CardContent = (
                  <article className={`group relative flex flex-col justify-between p-8 bg-[#0A0A0A] border border-zinc-800 rounded-xl hover:border-white/20 transition-all ${product.link ? 'cursor-pointer' : ''}`}>
                    <div className="space-y-6">
                      <div className="w-12 h-12 bg-black border border-zinc-800 rounded-xl flex items-center justify-center transition-all group-hover:border-white/20">
                        <span className="material-symbols-outlined text-white text-2xl">
                          {product.icon}
                        </span>
                      </div>
                      <div className="space-y-2">
                        <h4 className="text-white font-bold tracking-widest font-mono text-xs uppercase">{product.title}</h4>
                        <p className="text-zinc-400 text-[10px] uppercase font-mono leading-relaxed tracking-tight">{product.desc}</p>
                      </div>
                    </div>
                    <div className="mt-8 flex items-center justify-between border-t border-zinc-900 pt-4">
                      <span className="text-[8px] font-mono text-cyan-600 tracking-widest">{product.status}</span>
                      <div className="flex items-center gap-3">
                        {isKontrol && (
                          <button 
                            onClick={handleCopy}
                            className="flex items-center gap-2 px-3 py-1.5 bg-zinc-900 border border-zinc-800 rounded-lg hover:border-white/30 transition-all group/copy"
                          >
                            <span className="material-symbols-outlined text-xs text-zinc-500 group-hover/copy:text-white transition-colors">
                              {copied ? 'done' : 'content_copy'}
                            </span>
                            <span className="text-[10px] font-mono text-zinc-500 group-hover/copy:text-white uppercase tracking-tighter transition-colors">
                              {copied ? 'LATCHED' : 'COPY LATCH'}
                            </span>
                          </button>
                        )}
                        {product.link && !isKontrol && (
                          <span className="material-symbols-outlined text-white text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                            arrow_forward
                          </span>
                        )}
                        {isKontrol && (
                          <span className="material-symbols-outlined text-white text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                            arrow_forward
                          </span>
                        )}
                      </div>
                    </div>
                  </article>
                );

                if (product.link) {
                  // Internal links (OLLIE) use regular anchor, external links (KONTROL) use target="_blank"
                  const isExternal = product.link.startsWith('http');
                  return isExternal ? (
                    <a key={product.title} href={product.link} target="_blank" rel="noopener noreferrer" className="block h-full">
                      {CardContent}
                    </a>
                  ) : (
                    <a key={product.title} href={product.link} className="block h-full">
                      {CardContent}
                    </a>
                  );
                }
                
                return (
                  <div key={product.title} className="h-full">
                    {CardContent}
                  </div>
                );
              })}
            </div>
          </div>

          {/* TIER IV: Client Web Solutions */}
          <div className="space-y-6">
            <h3 className="text-white text-xl font-bold uppercase tracking-widest font-mono">CLIENT WEB SOLUTIONS</h3>
            <div className="grid gap-4 md:grid-cols-1">
              <article className="group relative flex flex-col justify-between p-8 bg-[#0A0A0A] border border-zinc-800 rounded-xl hover:border-white/20 transition-all">
                <div className="space-y-6">
                  <div className="w-12 h-12 bg-black border border-zinc-800 rounded-xl flex items-center justify-center transition-all group-hover:border-white/20">
                    <span className="material-symbols-outlined text-white text-2xl">
                      database
                    </span>
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-white font-bold tracking-widest font-mono text-xs uppercase">MYAUDIT</h4>
                    <p className="text-zinc-400 text-[10px] uppercase font-mono leading-relaxed tracking-tight">Client audit and verification platform</p>
                  </div>
                </div>
                <div className="mt-8 flex items-center justify-between border-t border-zinc-900 pt-4">
                  <span className="text-[8px] font-mono text-cyan-600 tracking-widest">ACTIVE</span>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
