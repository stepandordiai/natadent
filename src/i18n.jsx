import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import cz from "./translations/cz/translation.json";
import en from "./translations/en/translation.json";
import ua from "./translations/ua/translation.json";

i18n.use(initReactI18next)
    .use(LanguageDetector)
    .init({
        resources: {
            cz: {
                translation: cz,
            },
            en: {
                translation: en,
            },
            ua: {
                translation: ua,
            },
        },

        fallbackLng: "ua",

        detection: {
            order: [
                "htmlTag",
                // "querystring",
                "cookie",
                "localStorage",
                "path",
                // "sessionStorage",
                // "navigator",
                "subdomain",
            ],

            caches: ["cookie", "localStorage"],
        },

        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;
