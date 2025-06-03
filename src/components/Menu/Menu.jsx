import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import "./Menu.scss";

const Menu = ({ servicesData }) => {
	const { t } = useTranslation();

	useEffect(() => {
		document.querySelectorAll(".js-menu__link").forEach((link) => {
			link.addEventListener("click", () => {
				document
					.querySelector(".burger-5")
					.classList.remove("burger-5--active");
				document
					.querySelector(".burger-5__center-line")
					.classList.remove("burger-5__center-line--active");
				document.querySelector(".menu").classList.remove("menu--active");
				document.querySelectorAll(".menu-dd__wrapper").forEach((wrapper) => {
					wrapper.classList.remove("menu-dd__wrapper--active");
				});
			});
		});

		document.querySelectorAll(".menu-dd__btn").forEach((btn, index) => {
			btn.addEventListener("click", () => {
				const menuDropdownWrapper =
					document.querySelectorAll(".menu-dd__wrapper");
				menuDropdownWrapper[index].classList.toggle("menu-dd__wrapper--active");
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
						<span>01</span>
					</NavLink>
				</li>
				<li className="menu-item">
					<div className="menu-dd__btn">
						<span>{t("about_us_title")}</span>
						<span>02</span>
					</div>
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
					<div className="menu-dd__btn">
						<span>{t("services_title")}</span>
						<span>03</span>
					</div>
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
						<span>04</span>
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
						<span>05</span>
					</NavLink>
				</li>
			</ul>
		</div>
	);
};

export default Menu;
