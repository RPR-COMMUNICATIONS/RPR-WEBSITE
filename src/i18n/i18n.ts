import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

/**
 * TS-Λ3 // i18n MASTER ORCHESTRATOR [v6.3.4]
 * Path: src/i18n/i18n.ts
 * Mission: Absolute Bundling Latch // Smallcaps Mandate
 * Authority: THE OVERWATCH // SG-CANONICAL-2026
 * Fix: Point-locked all imports to src/locales/ to ensure bundling.
 * Fix: Synchronized namespaces with component useTranslation('harbora') calls.
 */

// 🧬 01. MARKETING SUBSTRATE (harbora)
// Latched to 237-line manifest residency
import enHarbora from '../locales/en/harbora.json';
import myHarbora from '../locales/my/harbora.json';
import zhHarbora from '../locales/zh/harbora.json';

// 📑 02. TECHNICAL SUBSTRATE (mothershipwhitepaper)
// Latched to 213-line technical whitepaper residency
import enWhitepaper from '../locales/en/mothershipwhitepaper.json';
import myWhitepaper from '../locales/my/mothershipwhitepaper.json';
import zhWhitepaper from '../locales/zh/mothershipwhitepaper.json';

const resources = {
    en: {
        harbora: enHarbora,
        mothershipwhitepaper: enWhitepaper,
    },
    my: {
        harbora: myHarbora,
        mothershipwhitepaper: myWhitepaper,
    },
    zh: {
        harbora: zhHarbora,
        mothershipwhitepaper: zhWhitepaper,
    },
};

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources,
        fallbackLng: 'en',
        // 🔡 SMALLCAPS MANDATE: Namespaces must match lowercase keys
        ns: ['harbora', 'mothershipwhitepaper'],
        defaultNS: 'harbora',
        fallbackNS: 'harbora',
        interpolation: {
            escapeValue: false, // React already escapes
        },
        detection: {
            order: ['querystring', 'localStorage', 'navigator', 'htmlTag'],
            lookupQuerystring: 'lng',
            caches: ['localStorage'],
        },
    });

export default i18n;