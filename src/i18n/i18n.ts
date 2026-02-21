import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

/**
 * TS-Λ3 // i18n MASTER ORCHESTRATOR [v6.5.1]
 * Path: src/i18n/i18n.ts
 * Mission: Absolute Triple-Substrate Bundling // Smallcaps Mandate
 * Authority: THE OVERWATCH // SG-CANONICAL-2026
 * Status: AUTHORITATIVE // LATCHED
 * Fix: Consolidated harborA, labs, and whitepaper substrates for EN/MY/ZH.
 * Fix: Point-locked all imports to src/locales/ for reliable production bundling.
 * Fix: Maintained 'lng: en' latch for initial visual stability (Anti-Void).
 */

// 🧬 01. MARKETING SUBSTRATE (harbora)
import enHarbora from '../locales/en/harbora.json';
import myHarbora from '../locales/my/harbora.json';
import zhHarbora from '../locales/zh/harbora.json';

// 🧪 02. LABS ENCLAVE SUBSTRATE (labs)
import enLabs from '../locales/en/labs.json';
import myLabs from '../locales/my/labs.json';
import zhLabs from '../locales/zh/labs.json';

// 📑 03. TECHNICAL SUBSTRATE (mothershipwhitepaper)
import enWhitepaper from '../locales/en/mothershipwhitepaper.json';
import myWhitepaper from '../locales/my/mothershipwhitepaper.json';
import zhWhitepaper from '../locales/zh/mothershipwhitepaper.json';

const resources = {
    en: {
        harbora: enHarbora,
        labs: enLabs,
        mothershipwhitepaper: enWhitepaper,
    },
    my: {
        harbora: myHarbora,
        labs: myLabs,
        mothershipwhitepaper: myWhitepaper,
    },
    zh: {
        harbora: zhHarbora,
        labs: zhLabs,
        mothershipwhitepaper: zhWhitepaper,
    },
};

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources,
        // 🔐 EN-PRIMARY LATCH: Force initial language to English.
        // Prevents "Black Void" anomalies if auto-detection lands on incomplete locales.
        lng: 'en',
        fallbackLng: 'en',

        // 🔡 SMALLCAPS MANDATE: Namespaces must match lowercase keys used in useTranslation()
        ns: ['harbora', 'labs', 'mothershipwhitepaper'],
        defaultNS: 'harbora',
        fallbackNS: 'harbora',

        interpolation: {
            escapeValue: false, // React already handles XSS mitigation
        },

        detection: {
            order: ['querystring', 'localStorage', 'navigator', 'htmlTag'],
            lookupQuerystring: 'lng',
            caches: ['localStorage'],
        },
    });

export default i18n;