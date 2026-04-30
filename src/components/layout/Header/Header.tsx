"use client";

import { useTranslations } from "next-intl";
import LngSelect from "@/components/common/LngSelect/LngSelect";
import { useState } from "react";
import Container from "@/components/Container/Container";
import services from "@/data/services.json";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "./Header.scss";

const Header = () => {
	const t = useTranslations();
	const pathname = usePathname();

	const [isMenuActive, setIsMenuActive] = useState(false);

	const inactiveLink = "nav__link";
	const activeLink = "nav__link nav__link--active";

	const inactiveMenuLink = "menu__link js-menu__link";
	const activeMenuLink = "menu__link js-menu__link menu__link--active";

	const inactiveMenuDdLink = "menu__dd-link js-menu__link";
	const activeMenuDdLink = "menu__dd-link js-menu__link menu__link--active";

	// const menuDropdownWrapper = document.querySelectorAll(".menu-dd__wrapper");
	// const menuNavBtnIcon = document.querySelectorAll(".menu__nav-btn-icon");

	// // burger-btn

	// function handleMenu() {
	// 	setIsMenuActive((prev) => !prev);
	// 	menuDropdownWrapper.forEach((wrapper) => {
	// 		wrapper.classList.remove("menu-dd__wrapper--active");
	// 	});
	// 	menuNavBtnIcon.forEach((icon) => {
	// 		icon.classList.remove("menu__nav-btn-icon--active");
	// 	});
	// }

	// // menu

	// useEffect(() => {
	// 	const menuDropdownWrapper = document.querySelectorAll(".menu-dd__wrapper");
	// 	const menuNavBtnIcon = document.querySelectorAll(".menu__nav-btn-icon");
	// 	document.querySelectorAll(".menu-dd__btn").forEach((btn, index) => {
	// 		btn.addEventListener("click", () => {
	// 			menuDropdownWrapper[index].classList.toggle("menu-dd__wrapper--active");
	// 			menuNavBtnIcon[index].classList.toggle("menu__nav-btn-icon--active");
	// 		});
	// 	});

	// 	document.querySelectorAll(".js-menu__link").forEach((link) => {
	// 		link.addEventListener("click", () => {
	// 			menuDropdownWrapper.forEach((wrapper) => {
	// 				wrapper.classList.remove("menu-dd__wrapper--active");
	// 			});
	// 			menuNavBtnIcon.forEach((icon) => {
	// 				icon.classList.remove("menu__nav-btn-icon--active");
	// 			});
	// 		});
	// 	});
	// }, []);

	return (
		<header className="header">
			<Container>
				<div className="header-top">
					<a href="mailto:info@natadent.cz">info@natadent.cz</a>
					<a href="tel:+420773853539">+420 773 853 539</a>
				</div>
				<div className="header-bottom">
					<Link className="header-bottom__logo" href="/">
						<img src="/logo/tooth.png" alt="Natadent logo" />
						<span>Natadent</span>
					</Link>
					<nav className="nav">
						<div>
							<Link
								className={pathname === "/" ? activeLink : inactiveLink}
								href="/"
							>
								{t("home_title")}
							</Link>
						</div>
						<div className="nav__dd-wrapper">
							<div className="nav__dd-btn">
								<span>{t("about_us_title")}</span>
								<span className="nav__dd-btn-icon"></span>
							</div>
							<div className="nav__dd">
								<Link
									className={
										pathname === "/nas-tym" ? activeLink : inactiveLink
									}
									href="/nas-tym"
								>
									{t("our_team_title")}
								</Link>
								<Link
									className={pathname === "/cenik" ? activeLink : inactiveLink}
									href="/cenik"
								>
									{t("price_list_title")}
								</Link>
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
							</div>
						</div>
						<div className="nav__dd-wrapper">
							<div className="nav__dd-btn">
								<span>{t("services_title")}</span>
								<span className="nav__dd-btn-icon"></span>
							</div>
							<div className="nav__dd"></div>
						</div>
						<div>
							<Link
								className={pathname === "/kontakty" ? activeLink : inactiveLink}
								href="/kontakty"
							>
								{t("contacts_title")}
							</Link>
						</div>
					</nav>
					<LngSelect />
					{/* menu-btn */}
					<button
						className="burger-btn__wrapper"
						// onClick={handleMenu}
						aria-label={isMenuActive ? t("closeMenu") : t("openMenu")}
					>
						<span>menu</span>
						<span
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
						</span>
					</button>
				</div>
				<div className={isMenuActive ? "menu menu--active" : "menu"}>
					<ul className="menu-list">
						<li className="menu-item">
							<Link
								onClick={() => setIsMenuActive(false)}
								className={pathname === "/" ? activeLink : inactiveLink}
								href="/"
							>
								<span>{t("home_title")}</span>
							</Link>
						</li>
						<li className="menu-item">
							<button className="menu-dd__btn">
								<span className="menu__nav-btn-txt">{t("about_us_title")}</span>
								<span className="menu__nav-btn-icon"></span>
							</button>
							<div className="menu-dd__wrapper">
								<div className="menu-dd">
									<Link
										onClick={() => setIsMenuActive(false)}
										className={
											pathname === "/nas-tym"
												? activeMenuDdLink
												: inactiveMenuDdLink
										}
										href="/nas-tym"
									>
										{t("our_team_title")}
									</Link>
									<Link
										onClick={() => setIsMenuActive(false)}
										className={
											pathname === "/cenik"
												? activeMenuDdLink
												: inactiveMenuDdLink
										}
										href="/cenik"
									>
										{t("price_list_title")}
									</Link>
									<Link
										onClick={() => setIsMenuActive(false)}
										className={
											pathname === "/galerie-usmevu"
												? activeMenuDdLink
												: inactiveMenuDdLink
										}
										href="/galerie-usmevu"
									>
										{t("smile_gallery_title")}
									</Link>
									<Link
										onClick={() => setIsMenuActive(false)}
										className={
											pathname === "/nase-klinika"
												? activeMenuDdLink
												: inactiveMenuDdLink
										}
										href="/nase-klinika"
									>
										Naše klinika
									</Link>
								</div>
							</div>
						</li>
						<li className="menu-item">
							<button className="menu-dd__btn">
								<span className="menu__nav-btn-txt">{t("services_title")}</span>
								<span className="menu__nav-btn-icon"></span>
							</button>
							<div className="menu-dd__wrapper">
								<div className="menu-dd"></div>
							</div>
						</li>
						<li className="menu-item">
							<Link
								onClick={() => setIsMenuActive(false)}
								className={
									pathname === "/kontakty" ? activeMenuLink : inactiveMenuLink
								}
								href="/kontakty"
							>
								<span>{t("contacts_title")}</span>
							</Link>
						</li>
						<li className="menu-item">
							<Link
								onClick={() => setIsMenuActive(false)}
								className={
									pathname === "/rezervujte-si-termin"
										? activeMenuLink
										: inactiveMenuLink
								}
								href="/rezervujte-si-termin"
							>
								<span>{t("appointment_title")}</span>
							</Link>
						</li>
					</ul>
				</div>
			</Container>
		</header>
	);
};

export default Header;
