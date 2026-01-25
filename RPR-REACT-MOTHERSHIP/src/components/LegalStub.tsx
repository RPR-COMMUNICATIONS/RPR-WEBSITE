import React from 'react';
import { useParams } from 'react-router-dom';

/**
 * TS-Λ3 // LEGAL STUB [v5.0.0]
 * Placeholder component for legal pages until final content is ready
 */
export const LegalStub: React.FC = () => {
  const { page } = useParams<{ page: string }>();

  const pageTitles: Record<string, string> = {
    privacy: 'Privacy Policy',
    terms: 'Terms of Use',
    cookies: 'Cookie Settings',
    security: 'Security & Compliance',
    governance: 'Responsible AI & Governance'
  };

  const title = pageTitles[page || ''] || 'Legal Document';

  return (
    <section className="px-[20px] md:px-12 py-32 bg-[#050505] min-h-screen">
      <div className="max-w-4xl mx-auto">
        <div className="space-y-8">
          <h1 className="text-4xl md:text-6xl font-bold uppercase tracking-[-0.05em] text-white" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700 }}>
            {title}
          </h1>
          <div className="border-t border-zinc-800 pt-8">
            <p className="text-zinc-400 text-lg leading-relaxed">
              This legal document is currently being prepared. Content will be available shortly.
            </p>
            <p className="text-zinc-500 text-sm mt-4 font-mono uppercase tracking-wider">
              TS-Λ3 // Legal Substrate // In Progress
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
