import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './assets/i18n/en.json';
import zh from './assets/i18n/zh.json';
import th from './assets/i18n/th.json';
import vi from './assets/i18n/vi.json';

const resources = {
  en: {
    translation: en,
  },
  zh: {
    translation: zh,
  },
  th: {
    translation: th,
  },
  vi: {
    translation: vi,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'zh', //預設語言
  fallbackLng: 'zh', //如果當前切換的語言沒有對應的翻譯則使用這個語言，
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
