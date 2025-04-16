import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector'

// import lanaguage files
import uzWords from './languages/uz.json';
import enWords from './languages/en.json';

i18n
.use(Backend)
.use(LanguageDetector)
.use(initReactI18next)
.init({
    fallbackLang:'en',
    lng:'uz',
    debug:true,
    resources:{
        uz:{translation:uzWords},
        en:{translation:enWords}
    }
});

export default i18n;