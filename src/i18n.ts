import i18n from "i18next";
import { initReactI18next } from "react-i18next";
//import all translation files
import ar from "./translation/ar";
import cs from "./translation/cs";
import de from "./translation/de";
import en from "./translation/en";
import es from "./translation/es";
import fr from "./translation/fr";
import it from "./translation/it";
import ja from "./translation/ja";
import pl from "./translation/pl";
import pt from "./translation/pt";
import ru from "./translation/ru";
import tr from "./translation/tr";
import zh from "./translation/zh";

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    // the translations
    // (tip move them in a JSON file and import them,
    // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
    resources: {
      ar,
      cs,
      de,
      en,
      es,
      fr,
      it,
      ja,
      pl,
      pt,
      ru,
      tr,
      zh,
    },
    lng: localStorage.getItem("language") || "en", // if you're using a language detector, do not define the lng option
    fallbackLng: "en",
    interpolation: {
      escapeValue: false, // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
    },
  });
export default i18n;
