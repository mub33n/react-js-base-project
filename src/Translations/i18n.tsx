import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import English from './English.json';
import Spanish from './Spanish.json';

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: English,
    },
    es: {
      translation: Spanish,
    },
  },
});

i18n.changeLanguage('en');
