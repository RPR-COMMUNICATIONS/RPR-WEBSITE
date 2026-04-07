import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

/**
 * TS-Λ3 // i18n MASTER ORCHESTRATOR [v6.5.3]
 * Path: src/i18n/i18n.ts
 * Mission: Dynamic Triple-Substrate Manifestation
 * Status: AUTHORITATIVE // LATCH_RELEASED
 * Fix: Removed hardcoded 'lng' to enable automatic ZH/MY detection.
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
        // 🔐 DYNAMIC LATCH: 'lng' removed to allow Detector to manage state.

        fallbackLng: 'en',

        // 🔡 SMALLCAPS MANDATE: Namespaces point-locked to hook logic.
        ns: ['harbora', 'labs', 'mothershipwhitepaper'],
        defaultNS: 'harbora',
        fallbackNS: 'harbora',

        interpolation: {
            escapeValue: false,
        },

        detection: {
            // Priority: URL Query -> LocalStorage -> Browser Settings
            order: ['querystring', 'localStorage', 'navigator', 'htmlTag'],
            lookupQuerystring: 'lng',
            caches: ['localStorage'],
            // Ensures the detected language is persisted for the next session
            convertDetectedLanguage: (lng) => lng.replace('_', '-'),
        },
    });

export default i18n;