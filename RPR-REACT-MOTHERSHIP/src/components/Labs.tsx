import React from 'react';

export const Labs: React.FC = () => {
  return (
    <section className="px-[20px] md:px-12 py-32 bg-[#050505] min-h-screen" id="labs">
      <div className="max-w-4xl mx-auto">
        <div className="space-y-8">
          <h1 className="text-4xl md:text-6xl font-bold uppercase tracking-[-0.05em] text-white" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700 }}>
            The Lab
          </h1>
          <div className="border-t border-zinc-800 pt-8">
            <p className="text-zinc-400 text-lg leading-relaxed">
              Content coming soon.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
