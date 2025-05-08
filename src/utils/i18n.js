// src/utils/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import translationEN from '../locales/en/translation.json';
import translationIT from '../locales/it/translation.json';

const resources = {
    en: { translation: translationEN },
    it: { translation: translationIT }
};

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources,
        fallbackLng: 'it', // Lingua predefinita
        debug: false, // Disabilita in produzione
        interpolation: { escapeValue: false }, // React già gestisce l'escaping
        detection: {
            order: ['cookie', 'localStorage', 'navigator', 'htmlTag'],
            caches: ['cookie', 'localStorage'],
        }
    });

export default i18n;