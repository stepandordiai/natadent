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

function App() {
    return (
        <Router>
            <ScrollToTop />
            <Header />
            <ToTopBtn />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about-us" element={<AboutUs />} />
                {/*  */}
                <Route path="/price-list" element={<PriceList />} />
                <Route path="/smile-gallery" element={<SmileGallery />} />
                {/*  */}
                <Route path="/services" element={<Services />} />
                <Route path="/contacts" element={<Contacts />} />
                <Route path="/appointment" element={<Appointment />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
