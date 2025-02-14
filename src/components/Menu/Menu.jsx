import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import "./Menu.scss";

const Menu = () => {
    useEffect(() => {
        document.querySelectorAll(".js-menu__link").forEach((link) => {
            link.addEventListener("click", () => {
                document
                    .querySelector(".burger-5")
                    .classList.remove("burger-5--active");
                document
                    .querySelector(".burger-5__center-line")
                    .classList.remove("burger-5__center-line--active");
                document
                    .querySelector(".menu")
                    .classList.remove("menu--active");
                document
                    .querySelectorAll(".menu-dd__wrapper")
                    .forEach((wrapper) => {
                        wrapper.classList.remove("menu-dd__wrapper--active");
                    });
            });
        });

        document.querySelectorAll(".menu-dd__btn").forEach((btn, index) => {
            btn.addEventListener("click", () => {
                const menuDropdownWrapper =
                    document.querySelectorAll(".menu-dd__wrapper");
                menuDropdownWrapper[index].classList.toggle(
                    "menu-dd__wrapper--active"
                );
            });
        });
    }, []);

    const { t } = useTranslation();

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
                                    isActive
                                        ? activeMenuDdLink
                                        : inactiveMenuDdLink
                                }
                                to="/price-list"
                            >
                                {t("price_list_title")}
                            </NavLink>
                            <NavLink
                                className={({ isActive }) =>
                                    isActive
                                        ? activeMenuDdLink
                                        : inactiveMenuDdLink
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
                            <NavLink
                                className={({ isActive }) =>
                                    isActive
                                        ? activeMenuDdLink
                                        : inactiveMenuDdLink
                                }
                                to="/oral-hygienist"
                            >
                                {t("service_1")}
                            </NavLink>
                            <NavLink
                                className={({ isActive }) =>
                                    isActive
                                        ? activeMenuDdLink
                                        : inactiveMenuDdLink
                                }
                                to="/teeth-cleaning"
                            >
                                {t("service_2")}
                            </NavLink>
                            <NavLink
                                className={({ isActive }) =>
                                    isActive
                                        ? activeMenuDdLink
                                        : inactiveMenuDdLink
                                }
                                to="/care-advice"
                            >
                                {t("service_3")}
                            </NavLink>
                            <NavLink
                                className={({ isActive }) =>
                                    isActive
                                        ? activeMenuDdLink
                                        : inactiveMenuDdLink
                                }
                                to="/dental-care"
                            >
                                {t("service_4")}
                            </NavLink>
                            <NavLink
                                className={({ isActive }) =>
                                    isActive
                                        ? activeMenuDdLink
                                        : inactiveMenuDdLink
                                }
                                to="/tooth-protection"
                            >
                                {t("service_5")}
                            </NavLink>
                            <NavLink
                                className={({ isActive }) =>
                                    isActive
                                        ? activeMenuDdLink
                                        : inactiveMenuDdLink
                                }
                                to="/whitening-teeth"
                            >
                                {t("service_6")}
                            </NavLink>
                            <NavLink
                                className={({ isActive }) =>
                                    isActive
                                        ? activeMenuDdLink
                                        : inactiveMenuDdLink
                                }
                                to="/dental-implants"
                            >
                                {t("service_7")}
                            </NavLink>
                            <NavLink
                                className={({ isActive }) =>
                                    isActive
                                        ? activeMenuDdLink
                                        : inactiveMenuDdLink
                                }
                                to="/oral-surgery"
                            >
                                {t("service_8")}
                            </NavLink>
                            <NavLink
                                className={({ isActive }) =>
                                    isActive
                                        ? activeMenuDdLink
                                        : inactiveMenuDdLink
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
    );
};

export default Menu;
