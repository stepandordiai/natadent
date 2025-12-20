import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Container from "../../components/Container/Container";
import logoIcon from "/logo/tooth.png";
import "./Home.scss";
import { HashLink } from "react-router-hash-link";

const Home = ({ servicesData }) => {
	const { t } = useTranslation();

	const [search, setSearch] = useState("");

	useEffect(() => {
		document.querySelectorAll(".js-faq__btn").forEach((btn, index) => {
			btn.addEventListener("click", () => {
				const gridDropdowns = document.querySelectorAll(".grid-dropdown");
				const faqBtnIcon = document.querySelectorAll(".faq__btn-icon");
				gridDropdowns[index].classList.toggle("grid-dropdown--active");
				faqBtnIcon[index].classList.toggle("faq__btn-icon--active");
			});
		});
	}, []);

	useEffect(() => {
		const services = document.querySelectorAll(".js-service");
		function handleServiceOnScroll() {
			services.forEach((el) => {
				const serviceRect = el.getBoundingClientRect().top;
				if (serviceRect < window.innerHeight - 100) {
					el.classList.add("service--active");
				} else {
					el.classList.remove("service--active");
				}
			});
		}

		handleServiceOnScroll();

		if (document.querySelector(".home__services-grid").innerHTML === "") {
			document
				.querySelector(".home__services-no-result-pop-up")
				.classList.add("home__services-no-result-pop-up--active");
		} else {
			document
				.querySelector(".home__services-no-result-pop-up")
				.classList.remove("home__services-no-result-pop-up--active");
		}

		document.addEventListener("scroll", handleServiceOnScroll);

		return () => {
			document.removeEventListener("scroll", handleServiceOnScroll);
		};
	});

	return (
		<>
			<Helmet>
				<meta
					name="description"
					content="Moderní zubní klinika v Kolíně. Nabízíme bezbolestné ortodontické ošetření pomocí analgosedace i celkové anestezie. Komfortní prostředí, profesionální péče a dostupné služby pro zdravý úsměv."
				/>
				<title>{t("home.secondary_title")} | Natadent</title>
				<link rel="canonical" href="https://www.natadent.cz/" />
			</Helmet>
			<main>
				<Container>
					<div className="home-top">
						<div className="home-top__logo">
							<img
								className="home-top__logo-icon"
								src={logoIcon}
								alt="Natadent logo"
							/>
						</div>
						<h1 className="home-top__title">{t("home.title")}</h1>
						<h2 className="home-top__sec-title">{t("home.secondary_title")}</h2>
						<div className="home-top__btn-container">
							<NavLink className="home-top__btn" to="/appointment">
								{t("appointment_title")}
							</NavLink>
							<HashLink className="home-top__btn" to="#services" smooth>
								{t("home.services_btn")}
							</HashLink>
						</div>
					</div>
					<div className="home__services" id="services">
						<h2 className="home__services-title">{t("services_title")}</h2>
						<input
							className="home__services-search"
							onInput={(e) => {
								setSearch(e.target.value);
							}}
							type="text"
							placeholder={t("home.services_search_placeholder")}
						/>
						<p className="home__services-no-result-pop-up">
							<img
								src={logoIcon}
								width={300}
								height={300}
								alt="Prozubik Logo"
							/>
							<span>{t("home.services_no_result_pop_up")}</span>
						</p>
						<div className="home__services-grid">
							{servicesData
								.filter((service) => {
									return search.toLowerCase().trim() === ""
										? service
										: t(service.name)
												.toLowerCase()
												.includes(search.toLowerCase());
								})
								.map((service) => {
									return (
										<NavLink
											key={service.id}
											to={`/service-page/${service.id}`}
											className="home__service js-service"
										>
											<h3>{t(service.name)}</h3>
											<p>{t(service.desc)}</p>
										</NavLink>
									);
								})}
						</div>
					</div>
					<div className="faq" id="faq">
						<h2 className="faq__title">{t("faq_title")}</h2>
						<div className="faq__list">
							<div className="faq__item">
								<button className="faq__btn js-faq__btn">
									<span className="faq__btn-txt">{t("home.question_1")}</span>
									<div className="faq__btn-icon"></div>
								</button>
								<div className="grid-dropdown">
									<p className="grid-dropdown__details">{t("home.answer_1")}</p>
								</div>
							</div>
							<div className="faq__item">
								<button className="faq__btn js-faq__btn">
									<span className="faq__btn-txt">{t("home.question_2")}</span>
									<div className="faq__btn-icon"></div>
								</button>
								<div className="grid-dropdown">
									<p className="grid-dropdown__details">{t("home.answer_2")}</p>
								</div>
							</div>
							<div className="faq__item">
								<button className="faq__btn js-faq__btn">
									<span className="faq__btn-txt">{t("home.question_3")}</span>
									<div className="faq__btn-icon"></div>
								</button>
								<div className="grid-dropdown">
									<p className="grid-dropdown__details">{t("home.answer_3")}</p>
								</div>
							</div>
						</div>
					</div>
				</Container>
			</main>
		</>
	);
};

export default Home;
