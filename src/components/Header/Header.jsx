import BurgerBtn from "../BurgerBtn/BurgerBtn";
import { NavLink } from "react-router-dom";
import { useEffect } from "react";
import logoIcon from "./../../assets/logo/tooth.png";
import phoneIcon from "./../../assets/icons/phone-call.png";
import calendarIcon from "./../../assets/icons/calendar.png";
import i18n from "i18next";
import { useTranslation } from "react-i18next";
import "./Header.scss";

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
            // Active state for language options
            document
                .querySelectorAll(".lang-custom-select__option")
                .forEach((option) => {
                    if (option.dataset.value === lang) {
                        option.classList.add(
                            "lang-custom-select__option--active"
                        );
                    } else {
                        option.classList.remove(
                            "lang-custom-select__option--active"
                        );
                    }
                });
        };

        document.querySelectorAll(".lang-custom-select").forEach((select) => {
            const selectBtn = select.querySelector(".lang-custom-select__btn");
            const selectList = select.querySelector(
                ".lang-custom-select__list"
            );
            const selectOptions = selectList.querySelectorAll(
                ".lang-custom-select__option"
            );
            const selectInput = document.querySelector(
                ".lang-custom-select__input"
            );

            selectBtn.addEventListener("click", (e) => {
                // Prevent from submitting a form
                e.preventDefault();
                selectList.classList.toggle(
                    "lang-custom-select__list--visible"
                );
                selectBtn.classList.add("lang-custom-select__btn--active");
            });

            selectOptions.forEach((option) => {
                option.addEventListener("click", (e) => {
                    // TODO:
                    e.stopPropagation();
                    selectBtn.textContent = option.textContent;
                    selectBtn.focus();
                    selectInput.value = option.dataset.value;
                    handleChangeLanguage(selectInput.value);
                    selectList.classList.remove(
                        "lang-custom-select__list--visible"
                    );
                });
            });

            document.addEventListener("click", (e) => {
                if (e.target !== selectBtn) {
                    selectBtn.classList.remove(
                        "lang-custom-select__btn--active"
                    );
                    selectList.classList.remove(
                        "lang-custom-select__list--visible"
                    );
                }
            });
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
                        <div className="nav-list__dropdown">
                            <NavLink
                                className={({ isActive }) =>
                                    isActive ? activeLink : inactiveLink
                                }
                                to="/about-us"
                            >
                                <span>{t("about_us_title")}</span>
                                <span className="down-arrow"></span>
                            </NavLink>
                            <div className="nav-list__dropdown-list">
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
                        <div className="nav-list__dropdown">
                            <NavLink
                                className={({ isActive }) =>
                                    isActive ? activeLink : inactiveLink
                                }
                                to="/services"
                            >
                                <span>{t("services_title")}</span>
                                <span className="down-arrow"></span>
                            </NavLink>
                            <div className="nav-list__dropdown-list">
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
                        <div className="nav__contacts">
                            <NavLink
                                className={({ isActive }) =>
                                    isActive ? activeLink : inactiveLink
                                }
                                to="/contacts"
                            >
                                {t("contacts_title")}
                            </NavLink>
                        </div>
                        {/* <div className="nav__appointment">
                            <NavLink
                                className={({ isActive }) =>
                                    isActive
                                        ? `${activeLink} nav__appointment-link`
                                        : `${inactiveLink} nav__appointment-link`
                                }
                                to="/appointment"
                            >
                                {t("appointment_title")}
                            </NavLink>
                        </div> */}
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
                        {/* <div className="nav__appointment-btn">
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
                        </div> */}
                    </nav>
                    <div className="lang-custom-select">
                        <button className="lang-custom-select__btn">CZ</button>
                        <ul className="lang-custom-select__list">
                            <li
                                className="lang-custom-select__option lang-custom-select__option--active"
                                data-value="cz"
                            >
                                CZ{" "}
                                <img
                                    width={20}
                                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Flag_of_the_Czech_Republic.svg/383px-Flag_of_the_Czech_Republic.svg.png"
                                    alt=""
                                />
                            </li>
                            <li
                                className="lang-custom-select__option"
                                data-value="ua"
                            >
                                UA{" "}
                                <img
                                    width={20}
                                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Flag_of_Ukraine.svg/383px-Flag_of_Ukraine.svg.png"
                                    alt=""
                                />
                            </li>
                            <li
                                className="lang-custom-select__option"
                                data-value="en"
                            >
                                EN{" "}
                                <img
                                    width={20}
                                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Flag_of_the_United_States_%28Pantone%29.svg/383px-Flag_of_the_United_States_%28Pantone%29.svg.png"
                                    alt=""
                                />
                            </li>
                        </ul>
                        <input
                            className="lang-custom-select__input"
                            type="text"
                            defaultValue="cz"
                        />
                    </div>
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
                                <span>{t("home_title")}</span>
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
                                        isActive
                                            ? activeMenuLink
                                            : inactiveMenuLink
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
        </header>
    );
};

export default Header;
