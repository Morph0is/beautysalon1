// i18n.js
import i18n from 'i18next';
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from 'i18next-http-backend';

i18n
    .use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        debug: true,
        fallbackLng: 'de',
        backend: {
            loadPath: '/locales/de/translation.json',
        },
    })
    .then(() => {
        console.log('i18next loaded successfully!');
    })
    .catch(err => {
        console.error('Failed to initialize i18next', err);
    });

export default i18n;
