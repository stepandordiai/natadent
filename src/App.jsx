import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import ToTopBtn from "./components/ToTopBtn/ToTopBtn";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer/Footer";
import Services from "./pages/Services/Services";
import Contacts from "./pages/Contacts/Contacts";
import Appointment from "./pages/Appointment/Appointment";
import AboutUs from "./pages/AboutUs/AboutUs";
import ScrollToTop from "./utils/ScrollToTop";
import PriceList from "./pages/PriceList/PriceList";
import SmileGallery from "./pages/SmileGallery/SmileGallery";
import "./App.scss";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import translationCz from "./translations/cz/translation.json";
import translationEn from "./translations/en/translation.json";
import translationUa from "./translations/ua/translation.json";
import Loading from "./components/Loading/Loading";
import { useEffect } from "react";
import OurTeam from "./pages/OurTeam/OurTeam";

i18n.use(initReactI18next) // passes i18n down to react-i18next
    .use(LanguageDetector)
    // .use(HttpApi)
    .init({
        // the translations
        // (tip move them in a JSON file and import them,
        // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
        resources: {
            cz: {
                translation: translationCz,
            },
            en: {
                translation: translationEn,
            },
            ua: {
                translation: translationUa,
            },
        },
        // lng: document.querySelector("html").lang, // if you're using a language detector, do not define the lng option
        fallbackLng: "en",

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
            // order: ["localStorage", "navigator"],
            // lookupQuerystring: "lng",
            // lookupLocalStorage: I18N_LANGUAGE,
            caches: ["cookie"],
            // caches: ["cookie", "localStorage"],
        },

        // backend: {
        //     loadPath: "./../assets/locales/{{lng}}/translation.json",
        // },

        // react: { useSuspense: false },

        interpolation: {
            escapeValue: false, // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
        },
    });

function App() {
    useEffect(() => {
        document
            .querySelector(".loading")
            .addEventListener("animationend", () => {
                document.querySelector(".wrapper").style.display = "initial";
            });
    }, []);
    return (
        <Router>
            <Loading />
            <div className="wrapper" style={{ display: "none" }}>
                <ScrollToTop />
                <Header />
                <ToTopBtn />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about-us" element={<AboutUs />} />
                    <Route path="/our-team" element={<OurTeam />} />
                    <Route path="/price-list" element={<PriceList />} />
                    <Route path="/smile-gallery" element={<SmileGallery />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/contacts" element={<Contacts />} />
                    <Route path="/appointment" element={<Appointment />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
