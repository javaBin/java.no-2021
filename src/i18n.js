import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';

import translationEnglish from './locales/en/home.json';
import translationNorwegian from './locales/no/home.json';

const resources = {
    en: {
        translation: translationEnglish
    },
    no: {
        translation: translationNorwegian
    }
};

i18n.use(initReactI18next).init({
    resources,
    lng: 'en',
    interpolation: {
        escapeValue: false
    }
});

export default i18n;
