import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import LngSelect from "../LngSelect/LngSelect";
import BurgerBtn from "../BurgerBtn/BurgerBtn";
import Menu from "../Menu/Menu";
import logoIcon from "/logo/tooth.png";
import "./Header.scss";

const Header = ({ servicesData }) => {
	const { t } = useTranslation();

	const inactiveLink = "nav__link";
	const activeLink = "nav__link nav__link--active";

	return (
		<header className="header">
			<div className="header-top">
				<a href="mailto:prozubik@gmail.com">prozubik@gmail.com</a>
				<a href="tel:+420773802166">+420 773 802 166</a>
			</div>
			<div className="header-bottom">
				<NavLink className="header-bottom__logo" to="/">
					<img src={logoIcon} alt="Prozubik logo" />
					<span>Prozubik</span>
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
						</div>
					</div>
					<div className="nav__dd-wrapper">
						<div className="nav__dd-btn">
							<span>{t("services_title")}</span>
							<span className="nav__dd-btn-icon"></span>
						</div>
						<div className="nav__dd">
							{servicesData.map((service, index) => {
								return (
									<NavLink
										key={index}
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
				<BurgerBtn />
			</div>
			<Menu servicesData={servicesData} />
		</header>
	);
};

export default Header;
