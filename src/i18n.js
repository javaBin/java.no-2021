import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';

import english from './locales/en/home.json';
import norwegian from './locales/no/home.json';

const resources = {
    en: {
        translation: english
    },
    no: {
        translation: norwegian
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
