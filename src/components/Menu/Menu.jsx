import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import "./Menu.scss";

const Menu = () => {
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
                                to="/our-team"
                            >
                                {t("our_team_title")}
                            </NavLink>
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
                            {servicesData.map((service, index) => {
                                return (
                                    <NavLink
                                        key={index}
                                        className={({ isActive }) =>
                                            isActive
                                                ? activeMenuDdLink
                                                : inactiveMenuDdLink
                                        }
                                        to={`/service-page/${service.path}`}
                                    >
                                        {service.name}
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
