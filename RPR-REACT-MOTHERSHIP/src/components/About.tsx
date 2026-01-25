import React from 'react';

/**
 * TS-Λ3 // ABOUT PAGE [v5.0.0]
 * About RPR Communications
 */
export const About: React.FC = () => {
  return (
    <section className="px-[20px] md:px-12 py-32 bg-[#050505] min-h-screen">
      <div className="max-w-4xl mx-auto">
        <div className="space-y-8">
          <h1 className="text-4xl md:text-6xl font-bold uppercase tracking-[-0.05em] text-white" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700 }}>
            About RPR Communications
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
