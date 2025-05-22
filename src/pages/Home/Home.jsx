import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import logoIcon from "/logo/tooth.png";
import "./Home.scss";

const Home = () => {
	const { t } = useTranslation();

	const servicesData = [
		{
			name: t("service_1"),
			desc: t("service_desc_1"),
			path: "dentistry",
		},
		{
			name: t("service_2"),
			desc: t("service_desc_2"),
			path: "prevention",
		},
		{
			name: t("service_3"),
			desc: t("service_desc_3"),
			path: "dental-hygiene",
		},
		{
			name: t("service_4"),
			desc: t("service_desc_4"),
			path: "dental-surgery",
		},
		{
			name: t("service_5"),
			desc: t("service_desc_5"),
			path: "complete-dental-reconstruction",
		},
		{
			name: t("service_6"),
			desc: t("service_desc_6"),
			path: "wisdom-teeth-extraction",
		},
		{
			name: t("service_7"),
			desc: t("service_desc_7"),
			path: "implantology",
		},
		{
			name: t("service_8"),
			desc: t("service_desc_8"),
			path: "periodontology",
		},
		{
			name: t("service_9"),
			desc: t("service_desc_9"),
			path: "endodontics",
		},
		{
			name: t("service_10"),
			desc: t("service_desc_10"),
			path: "orthodontics",
		},
		{
			name: t("service_11"),
			desc: t("service_desc_11"),
			path: "analgosedation-and-general-anesthesia",
		},
		{
			name: t("service_12"),
			desc: t("service_desc_12"),
			path: "pediatric-dentistry",
		},
		{
			name: t("service_13"),
			desc: t("service_desc_13"),
			path: "cutting-frenulums-in-the-mouths-of-infants",
		},
		{
			name: t("service_14"),
			desc: t("service_desc_14"),
			path: "teeth-whitening",
		},
		{
			name: t("service_15"),
			desc: t("service_desc_15"),
			path: "dental-laboratory",
		},
	];

	const [search, setSearch] = useState("");

	useEffect(() => {
		if (document.querySelector(".home__services-grid").innerHTML === "") {
			document
				.querySelector(".home__services-no-result-pop-up")
				.classList.add("home__services-no-result-pop-up--active");
		} else {
			document
				.querySelector(".home__services-no-result-pop-up")
				.classList.remove("home__services-no-result-pop-up--active");
		}
	}, [search]);

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
		document.querySelectorAll(".js-service").forEach((el) => {
			document.addEventListener("scroll", () => {
				const serviceRect = el.getBoundingClientRect().top;
				if (serviceRect < window.innerHeight - 100) {
					el.classList.add("service--active");
				} else {
					el.classList.remove("service--active");
				}
			});

			// On load page
			const serviceRect = el.getBoundingClientRect().top;
			if (serviceRect < window.innerHeight - 100) {
				el.classList.add("service--active");
			} else {
				el.classList.remove("service--active");
			}
		});
	});

	return (
		<>
			<Helmet>
				<title>{t("home.secondary_title")} / Prozubik</title>
				<link rel="canonical" href="https://prozubik.cz/" />
			</Helmet>
			<div className="home-top">
				<div className="home-top__logo">
					<img className="home-top__logo-icon" src={logoIcon} alt="Logo" />
				</div>
				<h1 className="home-top__title">{t("home.title")}</h1>
				<h2 className="home-top__sec-title">{t("home.secondary_title")}</h2>
				<div className="home-top__btn-container">
					<NavLink className="home-top__btn" to="/appointment">
						{t("appointment_title")}
					</NavLink>
					<a className="home-top__btn" href="#services">
						{t("home.services_btn")}
					</a>
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
					<img src={logoIcon} alt="Logo" />
					<span>{t("home.services_no_result_pop_up")}</span>
				</p>
				<div className="home__services-grid">
					{servicesData
						.filter((service) => {
							return search.toLowerCase() === ""
								? service
								: service.name.toLowerCase().startsWith(search.toLowerCase());
						})
						.map((service, index) => {
							return (
								<NavLink
									key={index}
									to={`/service-page/${service.path}`}
									className="home__service js-service"
								>
									<h3>{service.name}</h3>
									<p>{service.desc}</p>
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
		</>
	);
};

export default Home;
