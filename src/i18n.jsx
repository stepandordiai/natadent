import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import cs from "./translations/cs/translation.json";
import uk from "./translations/uk/translation.json";
import en from "./translations/en/translation.json";

i18n.use(initReactI18next)
    .use(LanguageDetector)
    .init({
        resources: {
            cs: {
                translation: cs,
            },
            uk: {
                translation: uk,
            },
            en: {
                translation: en,
            },
        },

        fallbackLng: "cs",

        detection: {
            order: ["localStorage", "cookie", "htmlTag", "path", "subdomain"],

            caches: ["localStorage", "cookie"],
        },

        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;
