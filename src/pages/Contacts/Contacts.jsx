import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";
import PageTitle from "../../components/PageTitle/PageTitle";
import { useEffect } from "react";
import dayjs from "dayjs";
import servicesData from "./../../assets/data/services-data.json";
import Container from "../../components/Container/Container";
import phoneIcon from "/icons/telephone.png";
import emailIcon from "/icons/mail.png";
import pinIcon from "/icons/pin.png";
import "./Contacts.scss";

const Contacts = () => {
	const { t } = useTranslation();

	useEffect(() => {
		const contactsLabels = document.querySelectorAll(".contacts-form__label");

		document
			.querySelectorAll(".js-contacts-form__input")
			.forEach((el, index) => {
				el.addEventListener("input", () => {
					if (el.value) {
						contactsLabels[index].classList.add("contacts-form__label--active");
					} else {
						contactsLabels[index].classList.remove(
							"contacts-form__label--active"
						);
					}
				});
			});

		// Listener for multiple custom selectors
		document.querySelectorAll(".custom-select").forEach((select) => {
			const selectBtn = select.querySelector(".custom-select__btn");
			const selectList = select.querySelector(".custom-select__list");
			const selectOptions = selectList.querySelectorAll(
				".custom-select__option"
			);
			const selectOption = document.querySelector(".custom-select__input");

			selectBtn.addEventListener("click", (e) => {
				e.preventDefault();
				selectList.classList.toggle("custom-select__list--visible");
				selectBtn.classList.add("custom-select__btn--active");
			});

			selectOptions.forEach((option) => {
				option.addEventListener("click", (e) => {
					// TODO:
					e.stopPropagation();
					selectBtn.textContent = option.textContent;
					selectBtn.focus();
					selectOption.value = option.dataset.value;
					selectList.classList.remove("custom-select__list--visible");
				});
			});

			document.addEventListener("click", (e) => {
				if (e.target !== selectBtn) {
					selectBtn.classList.remove("custom-select__btn--active");
					selectList.classList.remove("custom-select__list--visible");
				}
			});
		});
	}, []);

	const dateNow = dayjs();
	const formatDate = dateNow.format("YYYY-MM-DD");

	const hourNow = dateNow.hour();
	const formatHour = hourNow < 10 ? "0" + hourNow : hourNow;

	const minuteNow = dateNow.minute();
	const formatMinute = minuteNow < 10 ? "0" + minuteNow : minuteNow;

	return (
		<>
			<Helmet>
				<meta
					name="description"
					content="Kontaktujte nás – zubní klinika Natadent v Kolíně. Najdete zde adresu, telefonní číslo, e-mail a ordinační hodiny. Jsme tu pro vás s profesionální péčí a lidským přístupem."
				/>
				<title>{t("contacts_title")} / Natadent</title>
				<link rel="canonical" href="https://www.natadent.cz/contacts" />
			</Helmet>
			<main className="contacts">
				<Container>
					<PageTitle title={t("contacts_title")} />
					<div className="contacts-wrapper">
						<p className="contacts__secondary-info">
							{t("contacts.details_title")}
						</p>
						<div className="contacts-details">
							<div>
								<img
									className="contacts__email-img"
									src={phoneIcon}
									width={30}
									height={30}
									alt=""
								/>
								<p className="contacts__phone">{t("contacts.phone")}</p>
								<a className="contacts__phone-link" href="tel:+420773802886">
									+420 773 802 886
								</a>
							</div>
							<div>
								<img
									className="contacts__email-img"
									src={emailIcon}
									width={30}
									height={30}
									alt=""
								/>
								<p className="contacts__email">{t("contacts.mail")}</p>
								<a
									className="contacts__email-link"
									href="mailto:info@neresen.cz"
								>
									info@neresen.cz
								</a>
							</div>
							<div>
								<img
									className="contacts__email-img"
									src={pinIcon}
									width={30}
									height={30}
									alt=""
								/>
								<p className="contacts__address">{t("contacts.address")}</p>
								<a
									className="contacts__email-link"
									href="https://maps.app.goo.gl/EZWE4eM77JDKEbWt6"
									target="_blank"
								>
									Pod Hroby 271 Kolín IV
								</a>
							</div>
						</div>
						<h2 className="contacts__appointment-title">
							{t("appointment_title")}
						</h2>
						<form
							className="contacts-form"
							action="mailto:info@neresen.cz"
							method="post"
							encType="text/plain"
						>
							<div className="contacts-form__inputs">
								<div className="contacts-form__input-wrapper">
									<label className="contacts-form__label">
										{t("contacts.first_name")}
									</label>
									<input
										className="contacts-form__input  js-contacts-form__input"
										type="text"
										name="firstName"
										autoComplete="given-name"
										required
									/>
								</div>
								<div className="contacts-form__input-wrapper">
									<label className="contacts-form__label">
										{t("contacts.last_name")}
									</label>
									<input
										className="contacts-form__input  js-contacts-form__input"
										type="text"
										name="lastName"
										autoComplete="family-name"
									/>
								</div>
							</div>
							<div className="contacts-form__inputs">
								<div className="contacts-form__input-wrapper">
									<label className="contacts-form__label">
										{t("contacts.mail")}
									</label>
									<input
										className="contacts-form__input js-contacts-form__input"
										type="email"
										name="email"
										autoComplete="email"
									/>
								</div>
								<div className="contacts-form__input-wrapper">
									<label className="contacts-form__label">
										{t("contacts.phone")}
									</label>
									<input
										className="contacts-form__input  js-contacts-form__input"
										type="tel"
										name="tel"
										autoComplete="tel"
										required
									/>
								</div>
							</div>
							<div className="custom-select">
								<button className="custom-select__btn">
									{t("contacts.choose_service")}
								</button>
								<ul className="custom-select__list">
									<li className="custom-select__option" data-value="Nevybráno">
										{t("contacts.choose_service")}
									</li>
									{servicesData.map((service) => {
										return (
											<li
												key={service.id}
												className="custom-select__option"
												data-value={t(service.name)}
											>
												{t(service.name)}
											</li>
										);
									})}
								</ul>
								<input
									className="custom-select__input"
									type="text"
									name="service"
									defaultValue=""
								/>
							</div>
							<input type="date" defaultValue={formatDate} name="date" />
							<input
								type="time"
								defaultValue={formatHour + ":" + formatMinute}
								name="time"
							/>
							<button className="contacts-form__btn" type="submit">
								{t("contacts.submit_btn_title")}
							</button>
						</form>
						<div className="contacts__maps-container">
							<div>
								<h2 className="contacts__map-title">
									{t("contacts.address_btn_title")}
								</h2>
								<iframe
									className="contacts__map"
									src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2563.3236706787648!2d15.2143025!3d50.024030599999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470c155b8cfe1db9%3A0x4e0e3a3f6277c27f!2sProzubik!5e0!3m2!1sen!2scz!4v1748083227064!5m2!1sen!2scz"
									loading="lazy"
								></iframe>
							</div>
							<div>
								<h2 className="contacts__map-title">
									Navštivte nás na Mapy.cz
								</h2>
								<iframe
									className="contacts__map"
									src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2563.3236706787648!2d15.2143025!3d50.024030599999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470c155b8cfe1db9%3A0x4e0e3a3f6277c27f!2sProzubik!5e0!3m2!1sen!2scz!4v1748083227064!5m2!1sen!2scz"
									loading="lazy"
								></iframe>
							</div>
						</div>
					</div>
				</Container>
			</main>
		</>
	);
};

export default Contacts;
