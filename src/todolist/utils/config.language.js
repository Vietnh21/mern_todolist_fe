import i18n from "i18next";
import en from "../assets/translations/en.json";
import vn from "../assets/translations/vn.json";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: en,
    vn: vn,
  },
  fallbackLng: "en",
  debug: true,

  ns: ["translations"],
  defaultNS: "translations",

  keySeparator: false,

  interpolation: {
    escapeValue: false,
    formatSeparator: ",",
  },

  react: {
    wait: true,
  },
});
export default i18n;
