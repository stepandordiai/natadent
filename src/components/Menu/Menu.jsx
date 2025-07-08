import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import "./Menu.scss";

const Menu = ({ servicesData }) => {
	const { t } = useTranslation();

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
				document
					.querySelector(".burger-5")
					.classList.remove("burger-5--active");
				document
					.querySelector(".burger-5__center-line")
					.classList.remove("burger-5__center-line--active");
				document.querySelector(".menu").classList.remove("menu--active");
				menuDropdownWrapper.forEach((wrapper) => {
					wrapper.classList.remove("menu-dd__wrapper--active");
				});
				menuNavBtnIcon.forEach((icon) => {
					icon.classList.remove("menu__nav-btn-icon--active");
				});
			});
		});
	}, []);

	const inactiveMenuLink = "menu__link js-menu__link";
	const activeMenuLink = "menu__link js-menu__link menu__link--active";

	const inactiveMenuDdLink = "menu__dd-link js-menu__link";
	const activeMenuDdLink = "menu__dd-link js-menu__link menu__link--active";

	return (
		<div className="menu">
			<ul className="menu-list">
				<li className="menu-item">
					<NavLink
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
								className={({ isActive }) =>
									isActive ? activeMenuDdLink : inactiveMenuDdLink
								}
								to="/our-team"
							>
								{t("our_team_title")}
							</NavLink>
							<NavLink
								className={({ isActive }) =>
									isActive ? activeMenuDdLink : inactiveMenuDdLink
								}
								to="/price-list"
							>
								{t("price_list_title")}
							</NavLink>
							<NavLink
								className={({ isActive }) =>
									isActive ? activeMenuDdLink : inactiveMenuDdLink
								}
								to="/smile-gallery"
							>
								{t("smile_gallery_title")}
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
							{servicesData.map((service, index) => {
								return (
									<NavLink
										key={index}
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
	);
};

export default Menu;
