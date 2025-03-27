import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import Loading from "./components/Loading/Loading";
import Header from "./components/Header/Header";
import ToTopBtn from "./components/ToTopBtn/ToTopBtn";
import ScrollToTop from "./utils/ScrollToTop";
import Home from "./pages/Home/Home";
import OurTeam from "./pages/OurTeam/OurTeam";
import PriceList from "./pages/PriceList/PriceList";
import SmileGallery from "./pages/SmileGallery/SmileGallery";
import Contacts from "./pages/Contacts/Contacts";
import Appointment from "./pages/Appointment/Appointment";
import Footer from "./components/Footer/Footer";
import "./i18n";
import ServicePage from "./pages/ServicePage/ServicePage";
import "./App.scss";

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
                <Header />
                <ToTopBtn />
                <ScrollToTop />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/our-team" element={<OurTeam />} />
                    <Route path="/price-list" element={<PriceList />} />
                    <Route path="/smile-gallery" element={<SmileGallery />} />
                    <Route path="/contacts" element={<Contacts />} />
                    <Route path="/appointment" element={<Appointment />} />
                    <Route path="/service-page/:id" element={<ServicePage />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
