import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./BurgerMenu.scss";
import { useEffect } from "react";

const BurgerMenu = () => {
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
    }, []);

    const { t } = useTranslation();

    const inactiveMenuLink = "menu-link js-link";
    const activeMenuLink = "menu-link js-link menu-link--active";

    const inactiveDropdownMenuLink = "dropdown-menu-link js-link";
    const activeDropdownMenuLink =
        "dropdown-menu-link js-link menu-link--active";

    return (
        <div className="burger-menu">
            <div className="header-bottom__grid">
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
                    <li className="menu-item nav-list__menu-dropdown">
                        <div className="menu-link__wrapper">
                            <NavLink
                                className={({ isActive }) =>
                                    isActive ? activeMenuLink : inactiveMenuLink
                                }
                                to="/about-us"
                            >
                                <span>{t("about_us_title")}</span>
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
                                    {t("price_list_title")}
                                </NavLink>
                                <NavLink
                                    className={({ isActive }) =>
                                        isActive
                                            ? activeDropdownMenuLink
                                            : inactiveDropdownMenuLink
                                    }
                                    to="/smile-gallery"
                                >
                                    {t("smile_gallery_title")}
                                </NavLink>
                            </div>
                        </div>
                    </li>
                    <li className="menu-item nav-list__menu-dropdown">
                        <div className="menu-link__wrapper">
                            <NavLink
                                className={({ isActive }) =>
                                    isActive ? activeMenuLink : inactiveMenuLink
                                }
                                to="/services"
                            >
                                <span>{t("services_title")}</span>
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
                                    {t("service_1")}
                                </NavLink>
                                <NavLink
                                    className={({ isActive }) =>
                                        isActive
                                            ? activeDropdownMenuLink
                                            : inactiveDropdownMenuLink
                                    }
                                    to="/teeth-cleaning"
                                >
                                    {t("service_2")}
                                </NavLink>
                                <NavLink
                                    className={({ isActive }) =>
                                        isActive
                                            ? activeDropdownMenuLink
                                            : inactiveDropdownMenuLink
                                    }
                                    to="/care-advice"
                                >
                                    {t("service_3")}
                                </NavLink>
                                <NavLink
                                    className={({ isActive }) =>
                                        isActive
                                            ? activeDropdownMenuLink
                                            : inactiveDropdownMenuLink
                                    }
                                    to="/dental-care"
                                >
                                    {t("service_4")}
                                </NavLink>
                                <NavLink
                                    className={({ isActive }) =>
                                        isActive
                                            ? activeDropdownMenuLink
                                            : inactiveDropdownMenuLink
                                    }
                                    to="/tooth-protection"
                                >
                                    {t("service_5")}
                                </NavLink>
                                <NavLink
                                    className={({ isActive }) =>
                                        isActive
                                            ? activeDropdownMenuLink
                                            : inactiveDropdownMenuLink
                                    }
                                    to="/whitening-teeth"
                                >
                                    {t("service_6")}
                                </NavLink>
                                <NavLink
                                    className={({ isActive }) =>
                                        isActive
                                            ? activeDropdownMenuLink
                                            : inactiveDropdownMenuLink
                                    }
                                    to="/dental-implants"
                                >
                                    {t("service_7")}
                                </NavLink>
                                <NavLink
                                    className={({ isActive }) =>
                                        isActive
                                            ? activeDropdownMenuLink
                                            : inactiveDropdownMenuLink
                                    }
                                    to="/oral-surgery"
                                >
                                    {t("service_8")}
                                </NavLink>
                                <NavLink
                                    className={({ isActive }) =>
                                        isActive
                                            ? activeDropdownMenuLink
                                            : inactiveDropdownMenuLink
                                    }
                                    to="/oral-hygienist"
                                >
                                    {t("service_9")}
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
        </div>
    );
};

export default BurgerMenu;
