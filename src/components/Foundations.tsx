import React from 'react';
import { Icon } from './Icon';

export const Foundations: React.FC = () => {
  const foundations = [
    {
      icon: 'explore',
      metric: 'METRIC_01',
      title: 'The Source of Truth',
      description: "Pretty stories on bad data are not strategy; they are expensive lies until the numbers don't add up."
    },
    {
      icon: 'lightbulb',
      metric: 'METRIC_02',
      title: 'The Insight (UI)',
      description: 'Exhausted customers trying to make sense of a world where human judgment was quietly outsourced.'
    },
    {
      icon: 'near_me',
      metric: 'METRIC_03',
      title: 'The Journey (CX)',
      description: 'Moments that matter. Using the right tools to get the job done, not the other way around. Human focus.'
    }
  ];

  return (
    <section className="px-[20px] md:px-12 py-20 bg-[#080808] border-y border-border-dark" id="foundations">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-primary font-bold tracking-[0.4em] text-[10px] mb-12 flex items-center gap-4 uppercase">
          // THE FOUNDATIONS
          <div className="h-[1px] bg-primary/20 flex-grow"></div>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {foundations.map((foundation, index) => (
            <div key={index} className="bg-card-dark border border-border-dark p-10 group hover:border-primary hover:bg-primary/5 transition-all rounded-lg">
              <div className="flex justify-between items-start mb-12">
                <div className="w-12 h-12 flex items-center justify-center bg-zinc-900 border border-border-dark rounded group-hover:border-primary transition-colors">
                  <Icon name={foundation.icon} className="text-white group-hover:text-primary transition-colors" size={24} />
                </div>
                <span className="text-[10px] font-mono text-white/10 uppercase tracking-widest">{foundation.metric}</span>
              </div>
              <h3 className="text-2xl font-bold uppercase tracking-wider mb-4 text-white group-hover:text-primary transition-colors">{foundation.title}</h3>
              <p className="text-sm text-white leading-relaxed font-mono uppercase tracking-tighter">
                {foundation.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};