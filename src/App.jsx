import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import Loading from "./components/Loading/Loading";
import Header from "./components/Header/Header";
// import ToTopBtn from "./components/ToTopBtn/ToTopBtn";
import ScrollToTop from "./utils/ScrollToTop";
import Home from "./pages/Home/Home";
import OurTeam from "./pages/OurTeam/OurTeam";
import PriceList from "./pages/PriceList/PriceList";
import SmileGallery from "./pages/SmileGallery/SmileGallery";
import Contacts from "./pages/Contacts/Contacts";
import Appointment from "./pages/Appointment/Appointment";
import Footer from "./components/Footer/Footer";
import ServicePage from "./pages/ServicePage/ServicePage";
import Banner from "./components/Banner/Banner";
import servicesData from "./assets/data/services-data.json";
import "./i18n";
import NotFound from "./pages/NotFound/NotFound";
import OurClinic from "./pages/OurClinic/OurClinic";
import ToTopBtn from "./components/ToTopBtn/ToTopBtn";
import "./styles/App.scss";

function App() {
	useEffect(() => {
		document.querySelector(".loading").addEventListener("animationend", () => {
			document.querySelector(".wrapper").style.display = "initial";
		});
	}, []);

	return (
		<Router>
			<ScrollToTop />
			<Loading />
			<div className="wrapper" style={{ display: "none" }}>
				<ToTopBtn />
				<Header servicesData={servicesData} />
				<Routes>
					<Route path="/" element={<Home servicesData={servicesData} />} />
					<Route path="/nas-tym" element={<OurTeam />} />
					<Route path="/cenik" element={<PriceList />} />
					<Route path="/galerie-usmevu" element={<SmileGallery />} />
					<Route path="/nase-klinika" element={<OurClinic />} />
					<Route path="/kontakty" element={<Contacts />} />
					<Route path="/rezervujte-si-termin" element={<Appointment />} />
					<Route
						path="/sluzby/:id"
						element={<ServicePage servicesData={servicesData} />}
					/>
					<Route path="*" element={<NotFound />} />
				</Routes>
				<Footer servicesData={servicesData} />
				<Banner />
			</div>
		</Router>
	);
}

export default App;
