import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import LngSelect from "../LngSelect/LngSelect";
import { useEffect, useState } from "react";
import Container from "../Container/Container";
import logoIcon from "/logo/tooth.png";
import "./Header.scss";

const Header = ({ servicesData }) => {
	const { t } = useTranslation();

	const [isMenuActive, setIsMenuActive] = useState(false);

	const inactiveLink = "nav__link";
	const activeLink = "nav__link nav__link--active";

	const inactiveMenuLink = "menu__link js-menu__link";
	const activeMenuLink = "menu__link js-menu__link menu__link--active";

	const inactiveMenuDdLink = "menu__dd-link js-menu__link";
	const activeMenuDdLink = "menu__dd-link js-menu__link menu__link--active";

	const menuDropdownWrapper = document.querySelectorAll(".menu-dd__wrapper");
	const menuNavBtnIcon = document.querySelectorAll(".menu__nav-btn-icon");

	// burger-btn

	function handleMenu() {
		setIsMenuActive((prev) => !prev);
		menuDropdownWrapper.forEach((wrapper) => {
			wrapper.classList.remove("menu-dd__wrapper--active");
		});
		menuNavBtnIcon.forEach((icon) => {
			icon.classList.remove("menu__nav-btn-icon--active");
		});
	}

	// menu

	useEffect(() => {
		const menuDropdownWrapper = document.querySelectorAll(".menu-dd__wrapper");
		const menuNavBtnIcon = document.querySelectorAll(".menu__nav-btn-icon");
		document.querySelectorAll(".menu-dd__btn").forEach((btn, index) => {
			btn.addEventListener("click", () => {
				menuDropdownWrapper[index].classList.toggle("menu-dd__wrapper--active");
				menuNavBtnIcon[index].classList.toggle("menu__nav-btn-icon--active");
			});
		});

		document.querySelectorAll(".js-menu__link").forEach((link) => {
			link.addEventListener("click", () => {
				menuDropdownWrapper.forEach((wrapper) => {
					wrapper.classList.remove("menu-dd__wrapper--active");
				});
				menuNavBtnIcon.forEach((icon) => {
					icon.classList.remove("menu__nav-btn-icon--active");
				});
			});
		});
	}, []);

	return (
		<header className="header">
			<Container>
				<div className="header-top">
					<a href="mailto:info@neresen.cz">info@neresen.cz</a>
					<a href="tel:+420773802886">+420 773 802 886</a>
				</div>
				<div className="header-bottom">
					<NavLink className="header-bottom__logo" to="/">
						<img src={logoIcon} alt="Natadent logo" />
						<span>Natadent</span>
					</NavLink>
					<nav className="nav">
						<div>
							<NavLink
								className={({ isActive }) =>
									isActive ? activeLink : inactiveLink
								}
								to="/"
							>
								{t("home_title")}
							</NavLink>
						</div>
						<div className="nav__dd-wrapper">
							<div className="nav__dd-btn">
								<span>{t("about_us_title")}</span>
								<span className="nav__dd-btn-icon"></span>
							</div>
							<div className="nav__dd">
								<NavLink
									className={({ isActive }) =>
										isActive ? activeLink : inactiveLink
									}
									to="/our-team"
								>
									{t("our_team_title")}
								</NavLink>
								<NavLink
									className={({ isActive }) =>
										isActive ? activeLink : inactiveLink
									}
									to="/price-list"
								>
									{t("price_list_title")}
								</NavLink>
								<NavLink
									className={({ isActive }) =>
										isActive ? activeLink : inactiveLink
									}
									to="/smile-gallery"
								>
									{t("smile_gallery_title")}
								</NavLink>
								<NavLink
									className={({ isActive }) =>
										isActive ? activeLink : inactiveLink
									}
									to="/our-clinic"
								>
									Naše klinika
								</NavLink>
							</div>
						</div>
						<div className="nav__dd-wrapper">
							<div className="nav__dd-btn">
								<span>{t("services_title")}</span>
								<span className="nav__dd-btn-icon"></span>
							</div>
							<div className="nav__dd">
								{servicesData.map((service) => {
									return (
										<NavLink
											key={service.id}
											className={({ isActive }) =>
												isActive ? activeLink : inactiveLink
											}
											to={`/service-page/${service.id}`}
										>
											{t(service.name)}
										</NavLink>
									);
								})}
							</div>
						</div>
						<div>
							<NavLink
								className={({ isActive }) =>
									isActive ? activeLink : inactiveLink
								}
								to="/contacts"
							>
								{t("contacts_title")}
							</NavLink>
						</div>
					</nav>
					<LngSelect />
					<div className="burger-btn__wrapper" onClick={handleMenu}>
						<span>menu</span>
						<div
							className={
								isMenuActive ? "burger-btn burger-btn--active" : "burger-btn"
							}
						>
							<span
								className={
									isMenuActive
										? "burger-btn__center-line burger-btn__center-line--active"
										: "burger-btn__center-line"
								}
							></span>
						</div>
					</div>
				</div>
				<div className={isMenuActive ? "menu menu--active" : "menu"}>
					<ul className="menu-list">
						<li className="menu-item">
							<NavLink
								onClick={() => setIsMenuActive(false)}
								className={({ isActive }) =>
									isActive ? activeMenuLink : inactiveMenuLink
								}
								to="/"
							>
								<span>{t("home_title")}</span>
							</NavLink>
						</li>
						<li className="menu-item">
							<button className="menu-dd__btn">
								<span className="menu__nav-btn-txt">{t("about_us_title")}</span>
								<span className="menu__nav-btn-icon"></span>
							</button>
							<div className="menu-dd__wrapper">
								<div className="menu-dd">
									<NavLink
										onClick={() => setIsMenuActive(false)}
										className={({ isActive }) =>
											isActive ? activeMenuDdLink : inactiveMenuDdLink
										}
										to="/our-team"
									>
										{t("our_team_title")}
									</NavLink>
									<NavLink
										onClick={() => setIsMenuActive(false)}
										className={({ isActive }) =>
											isActive ? activeMenuDdLink : inactiveMenuDdLink
										}
										to="/price-list"
									>
										{t("price_list_title")}
									</NavLink>
									<NavLink
										onClick={() => setIsMenuActive(false)}
										className={({ isActive }) =>
											isActive ? activeMenuDdLink : inactiveMenuDdLink
										}
										to="/smile-gallery"
									>
										{t("smile_gallery_title")}
									</NavLink>
									<NavLink
										onClick={() => setIsMenuActive(false)}
										className={({ isActive }) =>
											isActive ? activeMenuDdLink : inactiveMenuDdLink
										}
										to="/our-clinic"
									>
										Naše klinika
									</NavLink>
								</div>
							</div>
						</li>
						<li className="menu-item">
							<button className="menu-dd__btn">
								<span className="menu__nav-btn-txt">{t("services_title")}</span>
								<span className="menu__nav-btn-icon"></span>
							</button>
							<div className="menu-dd__wrapper">
								<div className="menu-dd">
									{servicesData.map((service) => {
										return (
											<NavLink
												onClick={() => setIsMenuActive(false)}
												key={service.id}
												className={({ isActive }) =>
													isActive ? activeMenuDdLink : inactiveMenuDdLink
												}
												to={`/service-page/${service.id}`}
											>
												{t(service.name)}
											</NavLink>
										);
									})}
								</div>
							</div>
						</li>
						<li className="menu-item">
							<NavLink
								onClick={() => setIsMenuActive(false)}
								className={({ isActive }) =>
									isActive ? activeMenuLink : inactiveMenuLink
								}
								to="/contacts"
							>
								<span>{t("contacts_title")}</span>
							</NavLink>
						</li>
						<li className="menu-item">
							<NavLink
								onClick={() => setIsMenuActive(false)}
								className={({ isActive }) =>
									isActive ? activeMenuLink : inactiveMenuLink
								}
								to="/appointment"
							>
								<span>{t("appointment_title")}</span>
							</NavLink>
						</li>
					</ul>
				</div>
			</Container>
		</header>
	);
};

export default Header;
