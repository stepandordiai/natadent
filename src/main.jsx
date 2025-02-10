import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { I18nextProvider } from "react-i18next";
import i18next from "i18next";

createRoot(document.getElementById("root")).render(
    <I18nextProvider i18n={i18next}>
        {/* <StrictMode> */}
        <App />
        {/* </StrictMode> */}
    </I18nextProvider>
);
