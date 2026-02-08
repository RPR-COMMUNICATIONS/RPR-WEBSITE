import { useTranslation } from 'react-i18next';
import { Globe } from 'lucide-react';

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'my' : 'en';
    i18n.changeLanguage(newLang);
  };

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center gap-2 px-4 py-2 rounded-lg bg-black/50 border border-cyan-500/30 hover:border-cyan-500 hover:bg-cyan-500/10 transition-all duration-300 group"
      aria-label="Toggle language"
    >
      <Globe className="w-4 h-4 text-cyan-500 group-hover:rotate-180 transition-transform duration-500" />
      <span className="text-sm font-medium text-white uppercase tracking-wider">
        {i18n.language === 'en' ? 'EN' : 'MY'}
      </span>
    </button>
  );
}
