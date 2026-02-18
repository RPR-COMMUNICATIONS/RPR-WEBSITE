import { useTranslation } from 'react-i18next';
import { Globe } from 'lucide-react';

/**
 * TS-Λ3 // LANGUAGE SELECTOR [v2.6.0]
 * Path: src/components/languageswitcher.tsx
 * Mission: Responsive Interaction Scaling
 * Fix: Implemented responsive sizing for EN/MY/ZH pills (Smaller Desktop / Ergonomic Mobile).
 * Authority: SG-CANONICAL-2026 // THE OVERWATCH
 */

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const setLanguage = (lang: string) => {
    i18n.changeLanguage(lang.toLowerCase());
  };

  const currentLang = (i18n.resolvedLanguage || i18n.language || 'en').toUpperCase();

  return (
    <div className="flex items-center gap-1 p-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm group/switcher shadow-2xl selection:bg-transparent transition-all duration-500">
      {['EN', 'MY', 'ZH'].map((lang) => {
        const isActive = currentLang.startsWith(lang);

        return (
          <button
            key={lang}
            onClick={() => setLanguage(lang)}
            className={`
              rounded-full font-black tracking-widest transition-all duration-500
              /* 📐 RESPONSIVE GEOMETRY */
              px-3 py-1.5 sm:px-2 sm:py-1 
              text-[10px] sm:text-[8px]
              ${isActive
                ? 'bg-cyan-500 text-black shadow-[0_0_20px_rgba(34,211,238,0.3)] scale-105'
                : 'text-slate-500 hover:text-slate-200 hover:bg-white/5'
              }
            `}
            aria-label={`SET_INTERFACE_${lang}`}
          >
            {lang}
          </button>
        );
      })}

      <div className="px-2 border-l border-white/10 ml-1 flex items-center">
        <Globe
          className={`
            w-4 h-4 sm:w-3 sm:h-3 transition-all duration-700 
            ${currentLang.startsWith('ZH') ? 'rotate-180' : 'rotate-0'}
            text-slate-600 group-hover/switcher:text-cyan-500/50
          `}
        />
      </div>
    </div>
  );
}