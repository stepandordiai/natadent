"use client";

import { useTranslations } from "next-intl";
import Container from "@/components/Container/Container";
import CopyBtn from "@/components/CopyBtn/CopyBtn";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "./Footer.scss";

const Footer = () => {
	const t = useTranslations();

	const pathname = usePathname();

	const day = new Date().getDay();

	const inactiveLink = "footer__link";
	const activeLink = "footer__link footer__link--active";

	return (
		<footer className="footer">
			<Container>
				<div className="footer-top">
					<div className="footer__logo-container">
						<Link className="footer-top__logo" href="/">
							<img
								src="/logo/tooth.png"
								width={50}
								height={50}
								alt="Natadent logo"
							/>
							<span>Natadent</span>
						</Link>
						<p>{t("home.secondary_title")}</p>
					</div>
					<div className="footer-top__working-hours">
						<p>{t("footer.working_hours")}</p>
						<ul className="working-hours">
							<li className={day === 1 ? "day--active" : ""}>
								<span>{t("footer.mon")}:</span>
								<span>9:00-12:00 | 12:30-16:00</span>
							</li>
							<li className={day === 2 ? "day--active" : ""}>
								<span>{t("footer.tue")}:</span>
								<span>9:00-12:00 | 12:30-16:00</span>
							</li>
							<li className={day === 3 ? "day--active" : ""}>
								<span>{t("footer.wed")}:</span>
								<span>9:00-12:00 | 12:30-16:00</span>
							</li>
							<li className={day === 4 ? "day--active" : ""}>
								<span>{t("footer.thu")}:</span>
								<span>9:00-12:00 | 12:30-16:00</span>
							</li>
							<li className={day === 5 ? "day--active" : ""}>
								<span>{t("footer.fri")}:</span>
								<span>9:00-12:00 | 12:30-16:00</span>
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
								<Link
									className={pathname === "/" ? activeLink : inactiveLink}
									href="/"
								>
									{t("home_title")}
								</Link>
							</li>
							<li>
								<Link
									className={
										pathname === "/kontakty" ? activeLink : inactiveLink
									}
									href="/kontakty"
								>
									{t("contacts_title")}
								</Link>
							</li>
							<li>
								<Link className="footer__link" href="/#služby">
									{t("services_title")}
								</Link>
							</li>
							<li>
								<Link className="footer__link" href="/#casto-kladene-otazky">
									{t("faq_title")}
								</Link>
							</li>
						</ul>
					</div>
					<div className="footer-middle__nav-list-wrapper">
						<p>{t("about_us_title")}</p>
						<ul>
							<li>
								<Link
									className={
										pathname === "/nas-tym" ? activeLink : inactiveLink
									}
									href="/nas-tym"
								>
									{t("our_team_title")}
								</Link>
							</li>
							<li>
								<Link
									className={pathname === "/cenik" ? activeLink : inactiveLink}
									href="/cenik"
								>
									{t("price_list_title")}
								</Link>
							</li>
							<li>
								<Link
									className={
										pathname === "/galerie-usmevu" ? activeLink : inactiveLink
									}
									href="/galerie-usmevu"
								>
									{t("smile_gallery_title")}
								</Link>
								<Link
									className={
										pathname === "/nase-klinika" ? activeLink : inactiveLink
									}
									href="/nase-klinika"
								>
									Naše klinika
								</Link>
							</li>
						</ul>
					</div>
					<div className="footer-middle__nav-list-wrapper">
						<p>{t("services_title")}</p>
						<ul></ul>
					</div>
					<div className="footer-middle__contacts-wrapper">
						<p>{t("contacts_title")}</p>
						<ul>
							<li>
								<a href="tel:+420773853539">+420 773 853 539</a>
							</li>
							<li>
								<a href="mailto:info@natadent.cz">info@natadent.cz</a>
							</li>
							<li>
								<a
									href="https://maps.app.goo.gl/z5moH8T3Wa4Wmt2s5"
									target="_blank"
								>
									Pod Hroby 1026, 280 02 Kolín 2
								</a>
							</li>
						</ul>
					</div>
					<div className="footer-middle__contacts-wrapper">
						<p>NATADENT s.r.o.</p>
						<ul>
							<li>
								<Link href="/zasady-ochrany-osobnich-udaju">
									Zásady zpracování osobních údajů
								</Link>
							</li>
							<li>
								IČO <CopyBtn />
							</li>
						</ul>
					</div>
				</div>
				<div className="footer-bottom">
					<p>&copy; {new Date().getFullYear()} NATADENT s.r.o.</p>
					<p>{t("footer.rights")}.</p>
					<p>
						Website created by{" "}
						<a
							className="footer__creator-link"
							href="https://www.heeeyooo.com"
							target="_blank"
							// TODO: learn this
							rel="noopener noreferrer"
						>
							heeeyooo studio
						</a>
					</p>
				</div>
			</Container>
		</footer>
	);
};

export default Footer;
