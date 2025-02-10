import BurgerBtn from "../BurgerBtn/BurgerBtn";
import { NavLink } from "react-router-dom";
import { useEffect } from "react";
import logoIcon from "./../../assets/logo/tooth.png";
import phoneIcon from "./../../assets/icons/phone-call.png";
import calendarIcon from "./../../assets/icons/calendar.png";
import "./Header.scss";
import i18n from "i18next";
import { useTranslation } from "react-i18next";

const Header = () => {
    const inactiveLink = "nav__link js-link";
    const activeLink = "nav__link js-link nav__link--active";

    const inactiveMenuLink = "menu-link js-link";
    const activeMenuLink = "menu-link js-link menu-link--active";

    const inactiveDropdownMenuLink = "dropdown-menu-link js-link";
    const activeDropdownMenuLink =
        "dropdown-menu-link js-link menu-link--active";

    useEffect(() => {
        document.querySelectorAll(".js-link").forEach((link) => {
            link.addEventListener("click", () => {
                document
                    .querySelector(".burger-5")
                    .classList.remove("burger-5--active");
                document
                    .querySelector(".burger-5__center-line")
                    .classList.remove("burger-5__center-line--active");
                document
                    .querySelector(".header-bottom__grid")
                    .classList.remove("header-bottom__grid--active");
                document
                    .querySelectorAll(".menu-item")
                    .forEach((item, index) => {
                        setTimeout(() => {
                            item.classList.remove("menu-item--active");
                        }, 100 * index);
                    });
            });
        });

        document
            .querySelectorAll(".menu-down-arrow-wrapper")
            .forEach((btn, index) => {
                btn.addEventListener("click", () => {
                    const menuDropdownWrapper = document.querySelectorAll(
                        ".menu-dropdown__wrapper"
                    );
                    menuDropdownWrapper[index].classList.toggle(
                        "menu-dropdown__wrapper--active"
                    );
                });
            });

        // Function that change language

        const handleChangeLanguage = (lang) => {
            i18n.changeLanguage(lang);
        };

        document
            .querySelector(".lang-select")
            .addEventListener("change", () => {
                const langValue = document.querySelector(".lang-select").value;
                handleChangeLanguage(langValue);
            });
    }, []);

    const { t } = useTranslation();

    return (
        <header className="header">
            <div className="header-top">
                <a href="mailto:novozub@gmail.com">novozubcz@gmail.com</a>
                <a href="tel:+420722001016">+420 722 001 016</a>
            </div>
            <div className="header-bottom">
                <div className="header-bottom__container">
                    <NavLink className="header__logo" to="/">
                        <img src={logoIcon} alt="Novozub" />
                        <span>Novozub</span>
                    </NavLink>
                    <select className="lang-select" name="" id="">
                        <option style={{ color: "black" }} value="cz">
                            CZ
                        </option>
                        <option style={{ color: "black" }} value="en">
                            EN
                        </option>
                        <option style={{ color: "black" }} value="ua">
                            UA
                        </option>
                    </select>
                    <nav className="nav">
                        <div>
                            <NavLink
                                className={({ isActive }) =>
                                    isActive ? activeLink : inactiveLink
                                }
                                to="/"
                            >
                                {t("header.home")}
                            </NavLink>
                        </div>
                        <div className="nav-list__dropdown">
                            <NavLink
                                className={({ isActive }) =>
                                    isActive ? activeLink : inactiveLink
                                }
                                to="/about-us"
                            >
                                <span>{t("header.about")}</span>
                                <span className="down-arrow"></span>
                            </NavLink>
                            <div className="nav-list__dropdown-list">
                                <NavLink
                                    className={({ isActive }) =>
                                        isActive ? activeLink : inactiveLink
                                    }
                                    to="/price-list"
                                >
                                    {t("header.price_list")}
                                </NavLink>
                                <NavLink
                                    className={({ isActive }) =>
                                        isActive ? activeLink : inactiveLink
                                    }
                                    to="/smile-gallery"
                                >
                                    {t("header.gallery")}
                                </NavLink>
                            </div>
                        </div>
                        <div className="nav-list__dropdown">
                            <NavLink
                                className={({ isActive }) =>
                                    isActive ? activeLink : inactiveLink
                                }
                                to="/services"
                            >
                                <span>{t("header.services")}</span>
                                <span className="down-arrow"></span>
                            </NavLink>
                            <div className="nav-list__dropdown-list">
                                <NavLink
                                    className={({ isActive }) =>
                                        isActive ? activeLink : inactiveLink
                                    }
                                    to="/oral-hygienist"
                                >
                                    {t("header.service_1")}
                                </NavLink>
                                <NavLink
                                    className={({ isActive }) =>
                                        isActive ? activeLink : inactiveLink
                                    }
                                    to="/teeth-cleaning"
                                >
                                    {t("header.service_2")}
                                </NavLink>
                                <NavLink
                                    className={({ isActive }) =>
                                        isActive ? activeLink : inactiveLink
                                    }
                                    to="/care-advice"
                                >
                                    {t("header.service_3")}
                                </NavLink>
                                <NavLink
                                    className={({ isActive }) =>
                                        isActive ? activeLink : inactiveLink
                                    }
                                    to="/dental-care"
                                >
                                    {t("header.service_4")}
                                </NavLink>
                                <NavLink
                                    className={({ isActive }) =>
                                        isActive ? activeLink : inactiveLink
                                    }
                                    to="/tooth-protection"
                                >
                                    {t("header.service_5")}
                                </NavLink>
                                <NavLink
                                    className={({ isActive }) =>
                                        isActive ? activeLink : inactiveLink
                                    }
                                    to="/whitening-teeth"
                                >
                                    {t("header.service_6")}
                                </NavLink>
                                <NavLink
                                    className={({ isActive }) =>
                                        isActive ? activeLink : inactiveLink
                                    }
                                    to="/dental-implants"
                                >
                                    {t("header.service_7")}
                                </NavLink>
                                <NavLink
                                    className={({ isActive }) =>
                                        isActive ? activeLink : inactiveLink
                                    }
                                    to="/oral-surgery"
                                >
                                    {t("header.service_8")}
                                </NavLink>
                                <NavLink
                                    className={({ isActive }) =>
                                        isActive ? activeLink : inactiveLink
                                    }
                                    to="/oral-surgery"
                                >
                                    {t("header.service_9")}
                                </NavLink>
                            </div>
                        </div>
                        <div className="nav__contacts">
                            <NavLink
                                className={({ isActive }) =>
                                    isActive ? activeLink : inactiveLink
                                }
                                to="/contacts"
                            >
                                {t("header.contacts")}
                            </NavLink>
                        </div>
                        <div className="nav__appointment">
                            <NavLink
                                className={({ isActive }) =>
                                    isActive
                                        ? `${activeLink} nav__appointment-link`
                                        : `${inactiveLink} nav__appointment-link`
                                }
                                to="/appointment"
                            >
                                {t("header.appointment")}
                            </NavLink>
                        </div>
                        <div className="nav__contacts-btn">
                            <NavLink
                                className={({ isActive }) =>
                                    isActive
                                        ? `${activeLink} nav__contacts-link`
                                        : `${inactiveLink} nav__contacts-link`
                                }
                                to="/contacts"
                            >
                                <img src={phoneIcon} alt="Location" />
                            </NavLink>
                        </div>
                        <div className="nav__appointment-btn">
                            <NavLink
                                className={({ isActive }) =>
                                    isActive
                                        ? `${activeLink} nav__appointment-link-btn`
                                        : `${activeLink} nav__appointment-link-btn`
                                }
                                to="/appointment"
                            >
                                <img src={calendarIcon} alt="Calendar" />
                            </NavLink>
                        </div>
                    </nav>
                    <BurgerBtn />
                </div>

                {/* Menu links */}

                <div className="header-bottom__grid">
                    <ul className="menu-list">
                        <li className="menu-item">
                            <NavLink
                                className={({ isActive }) =>
                                    isActive ? activeMenuLink : inactiveMenuLink
                                }
                                to="/"
                            >
                                <span>{t("header.home")}</span>
                                <span>01</span>
                            </NavLink>
                        </li>
                        <li className="menu-item nav-list__menu-dropdown">
                            <div className="menu-link__wrapper">
                                <NavLink
                                    className={({ isActive }) =>
                                        isActive
                                            ? activeMenuLink
                                            : inactiveMenuLink
                                    }
                                    to="/about-us"
                                >
                                    <span>{t("header.about")}</span>
                                    <span>02</span>
                                </NavLink>
                                <div className="menu-down-arrow-wrapper">
                                    <span className="menu-down-arrow"></span>
                                </div>
                            </div>
                            <div className="menu-dropdown__wrapper">
                                <div className="menu-dropdown-list">
                                    <NavLink
                                        className={({ isActive }) =>
                                            isActive
                                                ? activeDropdownMenuLink
                                                : inactiveDropdownMenuLink
                                        }
                                        to="/price-list"
                                    >
                                        {t("header.price_list")}
                                    </NavLink>
                                    <NavLink
                                        className={({ isActive }) =>
                                            isActive
                                                ? activeDropdownMenuLink
                                                : inactiveDropdownMenuLink
                                        }
                                        to="/smile-gallery"
                                    >
                                        {t("header.gallery")}
                                    </NavLink>
                                </div>
                            </div>
                        </li>
                        <li className="menu-item nav-list__menu-dropdown">
                            <div className="menu-link__wrapper">
                                <NavLink
                                    className={({ isActive }) =>
                                        isActive
                                            ? activeMenuLink
                                            : inactiveMenuLink
                                    }
                                    to="/services"
                                >
                                    <span>{t("header.services")}</span>
                                    <span>03</span>
                                </NavLink>
                                <div className="menu-down-arrow-wrapper">
                                    <span className="menu-down-arrow"></span>
                                </div>
                            </div>
                            <div className="menu-dropdown__wrapper">
                                <div className="menu-dropdown-list">
                                    <NavLink
                                        className={({ isActive }) =>
                                            isActive
                                                ? activeDropdownMenuLink
                                                : inactiveDropdownMenuLink
                                        }
                                        to="/oral-hygienist"
                                    >
                                        {t("header.service_1")}
                                    </NavLink>
                                    <NavLink
                                        className={({ isActive }) =>
                                            isActive
                                                ? activeDropdownMenuLink
                                                : inactiveDropdownMenuLink
                                        }
                                        to="/teeth-cleaning"
                                    >
                                        {t("header.service_2")}
                                    </NavLink>
                                    <NavLink
                                        className={({ isActive }) =>
                                            isActive
                                                ? activeDropdownMenuLink
                                                : inactiveDropdownMenuLink
                                        }
                                        to="/care-advice"
                                    >
                                        {t("header.service_3")}
                                    </NavLink>
                                    <NavLink
                                        className={({ isActive }) =>
                                            isActive
                                                ? activeDropdownMenuLink
                                                : inactiveDropdownMenuLink
                                        }
                                        to="/dental-care"
                                    >
                                        {t("header.service_4")}
                                    </NavLink>
                                    <NavLink
                                        className={({ isActive }) =>
                                            isActive
                                                ? activeDropdownMenuLink
                                                : inactiveDropdownMenuLink
                                        }
                                        to="/tooth-protection"
                                    >
                                        {t("header.service_5")}
                                    </NavLink>
                                    <NavLink
                                        className={({ isActive }) =>
                                            isActive
                                                ? activeDropdownMenuLink
                                                : inactiveDropdownMenuLink
                                        }
                                        to="/whitening-teeth"
                                    >
                                        {t("header.service_6")}
                                    </NavLink>
                                    <NavLink
                                        className={({ isActive }) =>
                                            isActive
                                                ? activeDropdownMenuLink
                                                : inactiveDropdownMenuLink
                                        }
                                        to="/dental-implants"
                                    >
                                        {t("header.service_7")}
                                    </NavLink>
                                    <NavLink
                                        className={({ isActive }) =>
                                            isActive
                                                ? activeDropdownMenuLink
                                                : inactiveDropdownMenuLink
                                        }
                                        to="/oral-surgery"
                                    >
                                        {t("header.service_8")}
                                    </NavLink>
                                    <NavLink
                                        className={({ isActive }) =>
                                            isActive
                                                ? activeDropdownMenuLink
                                                : inactiveDropdownMenuLink
                                        }
                                        to="/oral-hygienist"
                                    >
                                        {t("header.service_9")}
                                    </NavLink>
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
                                <span>{t("header.contacts")}</span>
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
                                <span>{t("header.appointment")}</span>
                                <span>05</span>
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    );
};

export default Header;
