import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import * as RNLocalize from 'react-native-localize';
import en from './locales/en.json';
import zh from './locales/zh.json';

const resources = {
  en: { translation: en },
  zh: { translation: zh },
};

function detectDeviceLanguage(): string {
  const locales = RNLocalize.getLocales();
  if (!locales || locales.length === 0) return 'zh';
  const tag = locales[0].languageTag || locales[0].languageCode;
  return tag.startsWith('zh') ? 'zh' : 'en';
}

i18n.use(initReactI18next).init({
  resources,
  lng: detectDeviceLanguage(),
  fallbackLng: 'zh',
  interpolation: { escapeValue: false },
});

// optional: respond to locale changes
(RNLocalize as any).addEventListener?.('change', () => {
  const newLang = detectDeviceLanguage();
  i18n.changeLanguage(newLang);
});

export default i18n;
