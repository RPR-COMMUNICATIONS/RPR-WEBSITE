import React, { useState, useEffect } from 'react';

/**
 * TS-Λ3 // BACK TO TOP NODE [v1.0.0]
 * Navigational safety latch for deep forensic scrolls
 * Visibility: Hidden at top, fades in after 400px scroll
 * Aesthetic: Sentinel protocol - high contrast, minimal weight
 */
export const BackToTop: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisible = () => {
      setVisible(window.scrollY > 400);
    };
    
    window.addEventListener('scroll', toggleVisible);
    return () => window.removeEventListener('scroll', toggleVisible);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-6 right-4 z-50 rounded-full bg-black/80 border border-white/20 p-2 text-white shadow-lg transition-all duration-300 hover:border-white/40 lg:hidden ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
      }`}
      aria-label="Scroll to top"
    >
      <span className="material-symbols-outlined text-2xl">arrow_upward</span>
    </button>
  );
};
