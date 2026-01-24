import React from 'react';
import { Icon } from './Icon';

export const Methods: React.FC = () => {
  const steps = [
    {
      icon: 'target',
      title: 'Strategic Planning',
      description: 'Strategic inquiry and discovery phase'
    },
    {
      icon: 'check_circle',
      title: 'Pay',
      description: 'Investment and resource allocation'
    },
    {
      icon: 'design_services',
      title: 'Make',
      description: 'Execution and artifact production'
    },
    {
      icon: 'send',
      title: 'Play',
      description: 'Deployment and activation'
    },
    {
      icon: 'analytics',
      title: 'Measure',
      description: 'Iterative refinement and scaling'
    }
  ];

  return (
    <section className="px-[20px] md:px-12 py-24 bg-background-dark border-b border-border-dark" id="methods">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-primary font-bold tracking-[0.4em] text-[10px] mb-12 flex items-center gap-4 uppercase">
          // METHODS: STRATEGIC CYCLE
          <div className="h-[1px] bg-primary/20 flex-grow"></div>
        </h2>

        {/* Desktop Timeline */}
        <div className="hidden md:block">
          <div className="flex items-center gap-8 relative">
            {steps.map((step, index) => (
              <React.Fragment key={index}>
                <div className="flex-1 flex flex-col items-center">
                  <div className={`w-20 h-20 flex items-center justify-center rounded-full mb-4 transition-colors ${
                    index === 0 
                      ? 'bg-primary border-2 border-primary' 
                      : 'bg-slate-900 border-2 border-primary/30'
                  } group hover:border-primary`}>
                    <Icon 
                      name={step.icon} 
                      className={`transition-colors ${index === 0 ? 'text-black' : 'text-white group-hover:text-primary'}`} 
                      size={32} 
                    />
                  </div>
                  <h3 className="text-2xl font-black uppercase tracking-wider mb-2 text-white">
                    {step.title}
                  </h3>
                </div>
                {index < steps.length - 1 && (
                  <div className="w-12 h-[2px] bg-primary/30"></div>
                )}
              </React.Fragment>
            ))}
            
            {/* Repeat Icon at End */}
            <div className="ml-8 flex flex-col items-center">
              <div className="w-20 h-20 flex items-center justify-center bg-slate-900 border-2 border-primary/30 rounded-full mb-4 group hover:border-primary transition-colors">
                <Icon name="repeat" className="text-white group-hover:text-primary transition-colors" size={32} />
              </div>
              <p className="text-[10px] font-mono text-primary/60 uppercase tracking-widest text-center max-w-[120px]">
                Insights refine the next cycle.
              </p>
            </div>
          </div>
        </div>

        {/* Mobile Accordion */}
        <div className="md:hidden space-y-2">
          {steps.map((step, index) => (
            <details 
              key={index} 
              open={index === 0}
              className="bg-card-dark border border-border-dark rounded-lg overflow-hidden"
            >
              <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 flex items-center justify-center rounded-full ${
                    index === 0 ? 'bg-primary' : 'bg-slate-900 border border-primary/30'
                  }`}>
                    <Icon 
                      name={step.icon} 
                      className={index === 0 ? 'text-black' : 'text-white'} 
                      size={24} 
                    />
                  </div>
                  <h3 className="text-2xl font-black uppercase tracking-wider text-white">
                    {step.title}
                  </h3>
                </div>
                <Icon 
                  name="expand_more" 
                  className="text-white transition-transform duration-300 [details[open]>&]:rotate-180" 
                  size={24} 
                />
              </summary>
              <div className="px-6 pb-6 pt-2">
                <p className="text-sm text-white/60 font-mono uppercase tracking-tight">
                  {step.description}
                </p>
              </div>
            </details>
          ))}
          
          {/* Cycle Icon at Bottom */}
          <div className="mt-8 flex flex-col items-center">
            <div className="w-16 h-16 flex items-center justify-center bg-slate-900 border-2 border-primary/30 rounded-full mb-4">
              <Icon name="repeat" className="text-white" size={28} />
            </div>
            <p className="text-[10px] font-mono text-primary/60 uppercase tracking-widest text-center">
              Insights refine the next cycle.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};