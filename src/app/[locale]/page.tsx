"use client";

import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import Container from "@/components/Container/Container";
import { Link } from "@/i18n/navigation";
import services from "@/data/services.json";
import CopyBtn from "@/components/CopyBtn/CopyBtn";
import "./styles.scss";

const Home = () => {
	const t = useTranslations();

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

	return (
		<>
			{/* <Helmet>
				<meta
					name="description"
					content="Moderní zubní klinika v Kolíně. Nabízíme bezbolestné ortodontické ošetření pomocí analgosedace i celkové anestezie. Komfortní prostředí, profesionální péče a dostupné služby pro zdravý úsměv."
				/>
				<title>{t("home.secondary_title")} | Natadent</title>
				<link rel="canonical" href="https://www.natadent.cz/" />
			</Helmet> */}
			<main>
				<Container>
					<div className="home-top">
						<div className="home-top__logo">
							<img
								className="home-top__logo-icon"
								src="/logo/tooth.png"
								alt="Natadent logo"
							/>
						</div>
						<h1 className="home-top__title">
							Naše zubní klinika se brzy otevře!
						</h1>
						<div className="home-container">
							<p style={{ fontWeight: 500, marginBottom: 5 }}>
								NATADENT s.r.o.
							</p>
							<p style={{ marginBottom: 5 }}>
								IČO <CopyBtn />
							</p>
							<p style={{ fontWeight: 500, marginBottom: 5 }}>
								Telefonní číslo
							</p>
							<a
								style={{ marginBottom: 5 }}
								className="link"
								href="tel:+420773853539"
							>
								+420 773 853 539
							</a>
							<p style={{ fontWeight: 500, marginBottom: 5 }}>Kde jsme</p>
							<a
								className="link"
								href="https://maps.app.goo.gl/z5moH8T3Wa4Wmt2s5"
								target="_blank"
							>
								Pod Hroby 1026, 280 02 Kolín 2
							</a>
						</div>
						{/* <iframe
							className="banner__map"
							src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d906.2737924918879!2d15.213754247414611!3d50.02392366268641!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470c155b8cfe1db9%3A0x4e0e3a3f6277c27f!2sNATADENT%20s.r.o.!5e0!3m2!1sen!2scz!4v1772115717051!5m2!1sen!2scz"
							loading="lazy"
						></iframe> */}
					</div>
					<div className="home__services" id="sluzby">
						<h2 className="home__services-title">{t("services_title")}</h2>
						<input
							className="home__services-search"
							// onInput={(e) => {
							// 	setSearch(e.target.value);
							// }}
							type="text"
							placeholder={t("home.services_search_placeholder")}
						/>
						<p className="home__services-no-result-pop-up">
							<img
								src="/logo/tooth.png"
								width={300}
								height={300}
								alt="Prozubik Logo"
							/>
							<span>{t("home.services_no_result_pop_up")}</span>
						</p>
						{/* <div className="home__services-grid">
							{services
								.filter((service) => {
									return search.toLowerCase().trim() === ""
										? service
										: t(service.name)
												.toLowerCase()
												.includes(search.toLowerCase());
								})
								.map((service) => {
									return (
										<Link
											key={service.id}
											href={`/sluzby/${service.id}`}
											className="home__service js-service"
										>
											<h3>{t(service.name)}</h3>
											<p>{t(service.desc)}</p>
										</Link>
									);
								})}
						</div> */}
					</div>
					<div className="faq" id="casto-kladene-otazky">
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
