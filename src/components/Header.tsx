import React from 'react';
import { useAuth } from '../contexts/AuthContext'; // COMPLIANCE: Resolved Path Drift
import { useTranslation } from 'react-i18next';

const LogoIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-cyan-500">
    <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const NAV_ITEMS = [
  { key: 'nav.foundations', id: '#foundations' },
  { key: 'nav.methods', id: '#methods' },
  { key: 'nav.mothership', id: '#mothership' },
  { key: 'nav.overwatch', id: '#overwatch' }
];

export const Header: React.FC = () => {
  const { user } = useAuth();
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isLangOpen, setIsLangOpen] = React.useState(false);

  const languages = [
    { code: 'en', label: 'EN' },
    { code: 'zh-CN', label: '简体中文' },
    { code: 'ms-MY', label: 'BM' },
    { code: 'id-ID', label: 'ID' }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/5">
      <nav className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
        <a href="/" className="flex items-center gap-3">
          <LogoIcon />
          <span className="text-white font-bold tracking-widest text-sm uppercase">RPR COMMUNICATIONS</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.id}
              href={item.id}
              className="text-white/80 hover:text-white text-[10px] font-bold tracking-[0.2em] transition-colors font-mono"
            >
              {t(item.key)}
            </a>
          ))}

          {/* Language Switcher */}
          <div className="relative ml-4">
            <button
              onClick={() => setIsLangOpen(!isLangOpen)}
              className="text-white/60 hover:text-white text-[10px] font-bold tracking-widest font-mono flex items-center gap-1 uppercase transition-colors"
            >
              {languages.find(l => l.code === i18n.language)?.label || 'EN'}
              <span className="material-symbols-outlined text-[14px]">language</span>
            </button>

            {isLangOpen && (
              <div className="absolute top-full right-0 mt-2 bg-zinc-900 border border-white/10 rounded-lg overflow-hidden shadow-2xl z-50 min-w-[120px]">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      i18n.changeLanguage(lang.code);
                      setIsLangOpen(false);
                    }}
                    className={`w-full text-left px-4 py-2 text-[10px] font-bold font-mono hover:bg-white/5 transition-colors ${i18n.language === lang.code ? 'text-cyan-400' : 'text-white/60'}`}
                  >
                    {lang.label}
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="ml-4 flex items-center gap-4">
            {user ? (
               <div className="w-8 h-8 rounded-full bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center">
                 <span className="material-symbols-outlined text-cyan-400 text-lg">person</span>
               </div>
            ) : (
              <span className="material-symbols-outlined text-white/60">g_mobiledata</span>
            )}
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-white/60"
          onClick={() => setIsMenuOpen(true)}
        >
          <span className="material-symbols-outlined">menu</span>
        </button>
      </nav>

      {/* Mobile Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-2xl flex flex-col">
          <div className="h-20 px-4 flex items-center justify-end">
            <button
              className="text-white/60"
              onClick={() => setIsMenuOpen(false)}
            >
              <span className="material-symbols-outlined">close</span>
            </button>
          </div>
          <nav className="flex-1 flex flex-col items-center justify-center gap-8">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.id}
                href={item.id}
                onClick={() => setIsMenuOpen(false)}
                className="text-white/90 hover:text-white text-2xl font-bold tracking-[0.2em] transition-colors font-mono uppercase"
              >
                {t(item.key)}
              </a>
            ))}

            <div className="flex gap-6 mt-8">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => {
                    i18n.changeLanguage(lang.code);
                    setIsMenuOpen(false);
                  }}
                  className={`text-sm font-bold font-mono ${i18n.language === lang.code ? 'text-cyan-400' : 'text-white/40'}`}
                >
                  {lang.label}
                </button>
              ))}
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
