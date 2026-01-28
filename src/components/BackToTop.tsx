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
      className={`fixed bottom-8 right-8 z-50 p-3 bg-[#0A0A0A] border border-zinc-800 rounded-xl text-white shadow-2xl transition-all duration-300 hover:border-white/40 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
      }`}
      aria-label="Back to Top"
    >
      <span className="material-symbols-outlined text-white text-2xl flex">north</span>
    </button>
  );
};
