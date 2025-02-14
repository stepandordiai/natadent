import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import LangSelect from "../LangSelect/LangSelect";
import BurgerBtn from "../BurgerBtn/BurgerBtn";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import logoIcon from "./../../assets/logo/tooth.png";
import "./Header.scss";

const Header = () => {
    const { t } = useTranslation();

    const inactiveLink = "nav__link";
    const activeLink = "nav__link nav__link--active";

    return (
        <header className="header">
            <div className="header-top">
                <a href="mailto:novozubcz@gmail.com">novozubcz@gmail.com</a>
                <a href="tel:+420722001016">+420 722 001 016</a>
            </div>
            <div className="header-bottom">
                <NavLink className="header-bottom__logo" to="/">
                    <img src={logoIcon} alt="Logo" />
                    <span>Luxdent</span>
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
                            <NavLink
                                className={({ isActive }) =>
                                    isActive ? activeLink : inactiveLink
                                }
                                to="/oral-hygienist"
                            >
                                {t("service_1")}
                            </NavLink>
                            <NavLink
                                className={({ isActive }) =>
                                    isActive ? activeLink : inactiveLink
                                }
                                to="/teeth-cleaning"
                            >
                                {t("service_2")}
                            </NavLink>
                            <NavLink
                                className={({ isActive }) =>
                                    isActive ? activeLink : inactiveLink
                                }
                                to="/care-advice"
                            >
                                {t("service_3")}
                            </NavLink>
                            <NavLink
                                className={({ isActive }) =>
                                    isActive ? activeLink : inactiveLink
                                }
                                to="/dental-care"
                            >
                                {t("service_4")}
                            </NavLink>
                            <NavLink
                                className={({ isActive }) =>
                                    isActive ? activeLink : inactiveLink
                                }
                                to="/tooth-protection"
                            >
                                {t("service_5")}
                            </NavLink>
                            <NavLink
                                className={({ isActive }) =>
                                    isActive ? activeLink : inactiveLink
                                }
                                to="/whitening-teeth"
                            >
                                {t("service_6")}
                            </NavLink>
                            <NavLink
                                className={({ isActive }) =>
                                    isActive ? activeLink : inactiveLink
                                }
                                to="/dental-implants"
                            >
                                {t("service_7")}
                            </NavLink>
                            <NavLink
                                className={({ isActive }) =>
                                    isActive ? activeLink : inactiveLink
                                }
                                to="/oral-surgery"
                            >
                                {t("service_8")}
                            </NavLink>
                            <NavLink
                                className={({ isActive }) =>
                                    isActive ? activeLink : inactiveLink
                                }
                                to="/oral-surgery"
                            >
                                {t("service_9")}
                            </NavLink>
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
                <LangSelect />
                <BurgerBtn />
            </div>
            <BurgerMenu />
        </header>
    );
};

export default Header;
