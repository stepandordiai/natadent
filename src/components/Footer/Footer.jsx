import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { HashLink } from "react-router-hash-link";
import logoIcon from "/logo/tooth.png";
import "./Footer.scss";

const Footer = ({ servicesData }) => {
	const { t } = useTranslation();

	const day = new Date().getDay();

	const inactiveLink = "footer__link";
	const activeLink = "footer__link footer__link--active";

	return (
		<footer className="footer">
			<div className="footer-top">
				<div className="footer__logo-container">
					<NavLink className="footer-top__logo" to="/">
						<img src={logoIcon} width={50} height={50} alt="Prozubik logo" />
						<span>Prozubik</span>
					</NavLink>
					<p>{t("home.secondary_title")}</p>
				</div>
				<div className="footer-top__working-hours">
					<p>{t("footer.working_hours")}</p>
					<ul className="working-hours">
						<li className={day === 1 ? "day--active" : ""}>
							<span>{t("footer.mon")}:</span>
							<span>{t("footer.closed")}</span>
						</li>
						<li className={day === 2 ? "day--active" : ""}>
							<span>{t("footer.tue")}:</span>
							<span>{t("footer.closed")}</span>
						</li>
						<li className={day === 3 ? "day--active" : ""}>
							<span>{t("footer.wed")}:</span>
							<span>{t("footer.closed")}</span>
						</li>
						<li className={day === 4 ? "day--active" : ""}>
							<span>{t("footer.thu")}:</span>
							<span>{t("footer.closed")}</span>
						</li>
						<li className={day === 5 ? "day--active" : ""}>
							<span>{t("footer.fri")}:</span>
							<span>{t("footer.closed")}</span>
						</li>
						<li className={day === 6 ? "day--active" : ""}>
							<span>{t("footer.sat")}:</span>
							<span>{t("footer.closed")}</span>
						</li>
						<li className={day === 0 ? "day--active" : ""}>
							<span>{t("footer.sun")}:</span>
							<span>{t("footer.closed")}</span>
						</li>
					</ul>
				</div>
			</div>
			<div className="footer-middle">
				<div className="footer-middle__nav-list-wrapper">
					<p>{t("footer.nav_title")}</p>
					<ul>
						<li>
							<NavLink
								className={({ isActive }) =>
									isActive ? activeLink : inactiveLink
								}
								to="/"
							>
								{t("home_title")}
							</NavLink>
						</li>
						<li>
							<NavLink
								className={({ isActive }) =>
									isActive ? activeLink : inactiveLink
								}
								to="/contacts"
							>
								{t("contacts_title")}
							</NavLink>
						</li>
						<li>
							<NavLink
								className={({ isActive }) =>
									isActive ? activeLink : inactiveLink
								}
								to="/appointment"
							>
								{t("appointment_title")}
							</NavLink>
						</li>
						<li>
							<HashLink className={"footer__link"} to={"/#services"}>
								{t("services_title")}
							</HashLink>
						</li>
						<li>
							<HashLink className={"footer__link"} to={"/#faq"}>
								{t("faq_title")}
							</HashLink>
						</li>
					</ul>
				</div>
				<div className="footer-middle__nav-list-wrapper">
					<p>{t("about_us_title")}</p>
					<ul>
						<li>
							<NavLink
								className={({ isActive }) =>
									isActive ? activeLink : inactiveLink
								}
								to="/our-team"
							>
								{t("our_team_title")}
							</NavLink>
						</li>
						<li>
							<NavLink
								className={({ isActive }) =>
									isActive ? activeLink : inactiveLink
								}
								to="/price-list"
							>
								{t("price_list_title")}
							</NavLink>
						</li>
						<li>
							<NavLink
								className={({ isActive }) =>
									isActive ? activeLink : inactiveLink
								}
								to="/smile-gallery"
							>
								{t("smile_gallery_title")}
							</NavLink>
						</li>
					</ul>
				</div>
				<div className="footer-middle__nav-list-wrapper">
					<p>{t("services_title")}</p>
					<ul>
						{servicesData.map((service, index) => {
							return (
								<li key={index}>
									<NavLink
										className={({ isActive }) =>
											isActive ? activeLink : inactiveLink
										}
										to={`/service-page/${service.id}`}
									>
										{t(service.name)}
									</NavLink>
								</li>
							);
						})}
					</ul>
				</div>
				<div className="footer-middle__contacts-wrapper">
					<p>{t("contacts_title")}</p>
					<ul>
						<li>
							<a href="tel:+420773802166">+420 773 802 166</a>
						</li>
						<li>
							<a href="mailto:prozubik@gmail.com">prozubik@gmail.com</a>
						</li>
						<li>
							<a
								href="https://maps.app.goo.gl/EhkTA6vjtLaPHYAK6"
								target="_blank"
							>
								Pod Hroby 271 Kolín IV
							</a>
						</li>
					</ul>
				</div>
			</div>
			<div className="footer-bottom">
				<div>
					<p>&copy; 2025 Prozubik</p>
					<p>{t("footer.rights")}.</p>
					<p>
						Site by{" "}
						<a
							className="footer__creator-link"
							href="https://heeeyooo.studio/"
							target="_blank"
						>
							heeeyooo studio
						</a>
					</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
