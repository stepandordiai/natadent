import { useEffect } from "react";
import i18n from "i18next";
import czIcon from "/icons/czech-republic.png";
import uaIcon from "/icons/ukraine.png";
import enIcon from "/icons/united-states.png";
import "./LngSelect.scss";

const LangSelect = () => {
	useEffect(() => {
		// Function that change language

		const handleChangeLanguage = (lng) => {
			i18n.changeLanguage(lng);
		};

		document.querySelectorAll(".lang-select").forEach((select) => {
			const selectBtn = select.querySelector(".lang-select__btn");
			const selectList = select.querySelector(".lang-select__list");
			const selectOptions = selectList.querySelectorAll(".lang-select__option");

			selectBtn.addEventListener("click", (e) => {
				// Prevent from submitting a form
				e.preventDefault();
				selectList.classList.toggle("lang-select__list--visible");
				selectBtn.classList.toggle("lang-select__btn--active");
				document
					.querySelector(".lang-select__btn-icon")
					.classList.toggle("lang-select__btn-icon--active");
			});

			selectOptions.forEach((option) => {
				option.addEventListener("click", (e) => {
					e.stopPropagation();
					document.querySelector(".lang-select__btn-value").textContent =
						option.textContent;
					handleChangeLanguage(option.dataset.value);
					selectBtn.classList.remove("lang-select__btn--active");
					selectList.classList.remove("lang-select__list--visible");
					document
						.querySelector(".lang-select__btn-icon")
						.classList.remove("lang-select__btn-icon--active");
				});
			});

			document.addEventListener("click", (e) => {
				if (e.target !== selectBtn) {
					selectBtn.classList.remove("lang-select__btn--active");
					selectList.classList.remove("lang-select__list--visible");
					document
						.querySelector(".lang-select__btn-icon")
						.classList.remove("lang-select__btn-icon--active");
				}
			});
		});
	}, []);

	const lngStorage = localStorage.getItem("i18nextLng") || "cs";

	let selectBtnTxt = "CZ";

	switch (lngStorage) {
		case "cs":
			selectBtnTxt = "CZ";
			break;
		case "uk":
			selectBtnTxt = "UA";

			break;
		case "en":
			selectBtnTxt = "EN";

			break;
	}

	const inactiveLngOption = "lang-select__option";
	const activeLngOption = "lang-select__option lang-select__option--active";

	return (
		<div className="lang-select">
			<button className="lang-select__btn">
				<span className="lang-select__btn-value">{selectBtnTxt}</span>
				<div className="lang-select__btn-icon"></div>
			</button>
			<ul className="lang-select__list">
				<li
					className={lngStorage === "cs" ? activeLngOption : inactiveLngOption}
					data-value="cs"
				>
					<span>CZ</span>
					<img width={20} height={20} src={czIcon} alt="" />
				</li>
				<li
					className={lngStorage === "uk" ? activeLngOption : inactiveLngOption}
					data-value="uk"
				>
					<span>UA</span>
					<img width={20} height={20} src={uaIcon} alt="" />
				</li>
				<li
					className={lngStorage === "en" ? activeLngOption : inactiveLngOption}
					data-value="en"
				>
					<span>EN</span>
					<img width={20} height={20} src={enIcon} alt="" />
				</li>
			</ul>
		</div>
	);
};

export default LangSelect;
