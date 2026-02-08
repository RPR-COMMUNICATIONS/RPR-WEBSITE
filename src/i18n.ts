import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

/**
 * TS-Λ3 // i18n SUBSTRATE [v2.8.1]
 * Mission: Multilingual Latch (EN, ZH-CN, MS-MY, ID-ID)
 */

import enTranslation from './locales/en/translation.json';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: enTranslation },
      'zh-CN': { translation: enTranslation }, // Fallback to EN until translated
      'ms-MY': { translation: enTranslation },
      'id-ID': { translation: enTranslation }
    },
    fallbackLng: 'en',
    interpolation: { escapeValue: false },
    detection: {
      order: ['localStorage', 'cookie', 'navigator'],
      caches: ['localStorage']
    }
  });

export default i18n;
