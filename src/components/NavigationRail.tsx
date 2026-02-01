import React from 'react';

/**
 * TS-Λ3 // TAB NAVIGATION SUBSTRATE [v1.8.2]
 * Mission: Canonical Tab Header Locking.
 * Constraints: labels are hard-coded ALL CAPS and immutable.
 */
export const NavigationRail: React.FC<{ activeId: string }> = ({ activeId }) => {

  // CANONICAL LABELS (MISSION: Hard-coded string overrides)
  const canonicalTabs = [
    { id: 'foundations', label: 'THE FOUNDATIONS' },
    { id: 'methods', label: 'THE METHODS' },
    { id: 'overwatch', label: 'THE OVERWATCH' },
    { id: 'labs', label: 'LABS' }
  ];

  return (
    <div className="w-full flex justify-center py-6 border-b border-white/5 bg-black/20 backdrop-blur-sm">
      <nav className="flex items-center gap-4 sm:gap-12">
        {canonicalTabs.map((tab) => (
          <button
            key={tab.id}
            className={`text-[9px] sm:text-[10px] font-black tracking-[0.3em] uppercase transition-all relative py-2 ${
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
