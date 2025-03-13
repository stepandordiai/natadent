import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import LangSelect from "../LangSelect/LangSelect";
import BurgerBtn from "../BurgerBtn/BurgerBtn";
import Menu from "../Menu/Menu";
import logoIcon from "./../../assets/logo/tooth.png";
import "./Header.scss";

const Header = () => {
    const { t } = useTranslation();

    const servicesData = [
        {
            name: t("service_1"),
            desc: t("service_desc_1"),
            path: "stomatologie",
        },
        {
            name: t("service_2"),
            desc: t("service_desc_2"),
            path: "prevence",
        },
        {
            name: t("service_3"),
            desc: t("service_desc_3"),
            path: "dentální-hygiena",
        },
        {
            name: t("service_4"),
            desc: t("service_desc_4"),
            path: "stomatochirurgie",
        },
        {
            name: t("service_5"),
            desc: t("service_desc_5"),
            path: "kompletní-rekonstrukce-chrupu",
        },
        {
            name: t("service_6"),
            desc: t("service_desc_6"),
            path: "extrakce-zubů-moudrosti",
        },
        {
            name: t("service_7"),
            desc: t("service_desc_7"),
            path: "implantologie",
        },
        {
            name: t("service_8"),
            desc: t("service_desc_8"),
            path: "parodontologie",
        },
        {
            name: t("service_9"),
            desc: t("service_desc_9"),
            path: "endodoncie",
        },
        {
            name: t("service_10"),
            desc: t("service_desc_10"),
            path: "ortodoncie",
        },
        {
            name: t("service_11"),
            desc: t("service_desc_11"),
            path: "analgosedace-a-celková-anestezie",
        },
        {
            name: t("service_12"),
            desc: t("service_desc_12"),
            path: "dětská-stomatologie",
        },
        {
            name: t("service_13"),
            desc: t("service_desc_13"),
            path: "nastřižení-uzdiček-v-ústech-kojenců",
        },
        {
            name: t("service_14"),
            desc: t("service_desc_14"),
            path: "bělení-zubů",
        },
        {
            name: t("service_15"),
            desc: t("service_desc_15"),
            path: "zubní-laboratoř",
        },
    ];

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
                                        to={`/service/${service.path}`}
                                    >
                                        {service.name}
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
                <LangSelect />
                <BurgerBtn />
            </div>
            <Menu />
        </header>
    );
};

export default Header;
