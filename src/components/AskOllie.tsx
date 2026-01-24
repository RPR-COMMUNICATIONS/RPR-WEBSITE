import React from 'react';
import { useWorkflow } from '../contexts/WorkflowContext';
import { Icon } from './Icon';

export const AskOllie: React.FC = () => {
  const { state, query, response, setQuery, submitQuery, reset } = useWorkflow();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (state === 'IDLE' || state === 'COMPLETE') {
      if (state === 'COMPLETE') reset();
      await submitQuery();
    }
  };

  return (
    <section className="px-[20px] md:px-12 py-32 bg-[#030303]" id="ask-ollie">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <div className="relative w-24 h-24 mx-auto mb-8">
          <div className="absolute inset-0 bg-primary/10 rounded-full ollie-pulse" style={{ animationDelay: '-1s' }}></div>
          <div className="absolute inset-0 bg-primary/20 rounded-full ollie-pulse"></div>
          <div className="absolute inset-4 bg-primary rounded-full shadow-[0_0_30px_#00E0FF] flex items-center justify-center">
            <div className="w-6 h-6 bg-black rounded-full shadow-inner flex items-center justify-center">
              <div className={`w-2 h-2 bg-primary rounded-full ${state === 'QUERYING' ? 'animate-pulse' : ''}`}></div>
            </div>
          </div>
        </div>
        <h2 className="text-6xl font-black text-white mb-4 tracking-tighter uppercase">Ask Ollie</h2>
        <p className="text-xl text-slate-500 uppercase">Neural Intelligence Node</p>
        {state === 'QUERYING' && (
          <p className="text-sm text-primary mt-4 font-mono uppercase tracking-widest">PROCESSING...</p>
        )}
        {state === 'COMPLETE' && response && (
          <p className="text-sm text-primary mt-4 font-mono uppercase tracking-widest">RESPONSE READY</p>
        )}
      </div>
      
      <div className="max-w-5xl mx-auto bg-card-dark border border-border-dark overflow-hidden shadow-2xl rounded-3xl h-[500px] flex flex-col">
        <div className="flex-grow flex flex-col items-center justify-center p-8">
          {state === 'IDLE' && (
            <div className="opacity-10 space-y-4">
              <div className="w-12 h-12 rounded-full border border-primary flex items-center justify-center">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
              </div>
              <p className="text-[10px] font-mono tracking-[0.5em] uppercase">OLLIE IS LISTENING...</p>
            </div>
          )}
          {state === 'QUERYING' && (
            <div className="space-y-4">
              <Icon name="hourglass_empty" className="text-primary animate-spin" size={48} />
              <p className="text-[10px] font-mono tracking-[0.5em] uppercase text-primary">PROCESSING QUERY...</p>
            </div>
          )}
          {state === 'COMPLETE' && response && (
            <div className="space-y-4 max-w-2xl">
              <Icon name="check_circle" className="text-primary" size={48} />
              <p className="text-sm text-slate-300 font-mono uppercase tracking-tight leading-relaxed">{response}</p>
              <button
                onClick={reset}
                className="mt-4 px-6 py-2 bg-primary/20 border border-primary/40 text-primary text-xs font-black uppercase tracking-widest rounded-lg hover:bg-primary/30 transition-colors"
              >
                NEW QUERY
              </button>
            </div>
          )}
        </div>
        <div className="p-8 border-t border-border-dark bg-black/20">
          <form onSubmit={handleSubmit} className="relative flex items-center max-w-4xl mx-auto">
            <input 
              className="w-full bg-zinc-900 border border-white/5 text-base p-5 pr-40 focus:ring-1 focus:ring-primary rounded-xl outline-none disabled:opacity-50" 
              placeholder="QUERY SUBSTRATE..." 
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              disabled={state === 'QUERYING'}
            />
            <button 
              type="submit"
              disabled={state === 'QUERYING' || !query.trim()}
              className="absolute right-3 px-8 py-3 bg-primary text-black text-xs font-black uppercase rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-primary/90 transition-colors"
            >
              {state === 'QUERYING' ? 'PROCESSING...' : 'SEND'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};