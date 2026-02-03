import React from 'react';

/**
 * TS-Λ3 // TAB NAVIGATION SUBSTRATE [v1.8.3]
 * [GHOST // SEQUESTERED]
 * Mission: Canonical Tab Header Locking.
 * Correction: Labels are immutable string literals, exactly matching prompt requirement.
 * Status: Unused in v1.8.3+, preserved for forensic record only.
 */
export const NavigationRail: React.FC<{ activeId: string }> = ({ activeId }) => {

  // CANONICAL LABELS (MISSION: Hard-coded string overrides, no mutations)
  const canonicalTabs = [
    { id: 'foundations', label: 'THE FOUNDATIONS' },
    { id: 'methods', label: 'THE METHODS' },
    { id: 'overwatch', label: 'THE OVERWATCH' },
    { id: 'labs', label: 'LABS' }
  ];

  return (
    <div className="w-full flex justify-center py-8 border-b border-white/5 bg-black/20 backdrop-blur-md">
      <nav className="flex items-center gap-4 sm:gap-12">
        {canonicalTabs.map((tab) => (
          <button
            key={tab.id}
            className={`text-[9px] sm:text-[10px] font-black tracking-[0.3em] transition-all relative py-2 ${
              activeId === tab.id ? 'text-sky-400' : 'text-slate-500 hover:text-slate-200'
            }`}
          >
            {tab.label}
            {activeId === tab.id && (
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-sky-500 animate-in slide-in-from-left-1" />
            )}
          </button>
        ))}
      </nav>
    </div>
  );
};
