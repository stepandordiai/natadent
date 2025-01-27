import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import ToTopBtn from "./components/ToTopBtn/ToTopBtn";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer/Footer";
import "./App.scss";
import Services from "./pages/Services/Services";
import Contact from "./pages/Contact/Contact";
import AboutUs from "./pages/AboutUs/AboutUs";
import FindUs from "./pages/FindUs/FindUs";
import AppointmentPopUp from "./components/AppointmentPopUp/AppointmentPopUp";

function App() {
    return (
        <Router>
            <Header />
            <AppointmentPopUp />
            <ToTopBtn />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about-us" element={<AboutUs />} />
                <Route path="/services" element={<Services />} />
                <Route path="/find-us" element={<FindUs />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
