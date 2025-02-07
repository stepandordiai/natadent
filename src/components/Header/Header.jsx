import BurgerBtn from "../BurgerBtn/BurgerBtn";
import { NavLink } from "react-router-dom";
import { useEffect } from "react";
import logoIcon from "./../../assets/logo/tooth.png";
import phoneIcon from "./../../assets/icons/phone-call.png";
import calendarIcon from "./../../assets/icons/calendar.png";
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
    }, []);

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
                    <nav className="nav">
                        <div>
                            <NavLink
                                className={({ isActive }) =>
                                    isActive ? activeLink : inactiveLink
                                }
                                to="/"
                            >
                                Úvod
                            </NavLink>
                        </div>
                        <div className="nav-list__dropdown">
                            <NavLink
                                className={({ isActive }) =>
                                    isActive ? activeLink : inactiveLink
                                }
                                to="/about-us"
                            >
                                <span>O nás</span>
                                <span className="down-arrow"></span>
                            </NavLink>
                            <div className="nav-list__dropdown-list">
                                <NavLink
                                    className={({ isActive }) =>
                                        isActive ? activeLink : inactiveLink
                                    }
                                    to="/price-list"
                                >
                                    Ceník
                                </NavLink>
                                <NavLink
                                    className={({ isActive }) =>
                                        isActive ? activeLink : inactiveLink
                                    }
                                    to="/smile-gallery"
                                >
                                    Galerie úsměvů
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
                                <span>Služby</span>
                                <span className="down-arrow"></span>
                            </NavLink>
                            <div className="nav-list__dropdown-list">
                                <NavLink
                                    className={({ isActive }) =>
                                        isActive ? activeLink : inactiveLink
                                    }
                                    to="/oral-hygienist"
                                >
                                    Preventivní stomatologie
                                </NavLink>
                                <NavLink
                                    className={({ isActive }) =>
                                        isActive ? activeLink : inactiveLink
                                    }
                                    to="/teeth-cleaning"
                                >
                                    Dentální hygiena
                                </NavLink>
                                <NavLink
                                    className={({ isActive }) =>
                                        isActive ? activeLink : inactiveLink
                                    }
                                    to="/care-advice"
                                >
                                    Parodontologie
                                </NavLink>
                                <NavLink
                                    className={({ isActive }) =>
                                        isActive ? activeLink : inactiveLink
                                    }
                                    to="/dental-care"
                                >
                                    Dětská stomatologie
                                </NavLink>
                                <NavLink
                                    className={({ isActive }) =>
                                        isActive ? activeLink : inactiveLink
                                    }
                                    to="/tooth-protection"
                                >
                                    Fotokompozitní výplně
                                </NavLink>
                                <NavLink
                                    className={({ isActive }) =>
                                        isActive ? activeLink : inactiveLink
                                    }
                                    to="/whitening-teeth"
                                >
                                    Endodoncie
                                </NavLink>
                                <NavLink
                                    className={({ isActive }) =>
                                        isActive ? activeLink : inactiveLink
                                    }
                                    to="/dental-implants"
                                >
                                    Protetická stomatologie
                                </NavLink>
                                <NavLink
                                    className={({ isActive }) =>
                                        isActive ? activeLink : inactiveLink
                                    }
                                    to="/oral-surgery"
                                >
                                    Dentoalveolární chirurgie
                                </NavLink>
                                <NavLink
                                    className={({ isActive }) =>
                                        isActive ? activeLink : inactiveLink
                                    }
                                    to="/oral-surgery"
                                >
                                    Implantologie
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
                                Kontakty
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
                                Rezervujte si termín
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
                                <span>Úvod</span>
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
                                    <span>O nás</span>
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
                                        Ceník
                                    </NavLink>
                                    <NavLink
                                        className={({ isActive }) =>
                                            isActive
                                                ? activeDropdownMenuLink
                                                : inactiveDropdownMenuLink
                                        }
                                        to="/smile-gallery"
                                    >
                                        Galerie úsměvů
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
                                    <span>Sluzbi</span>
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
                                        Preventivní stomatologie
                                    </NavLink>
                                    <NavLink
                                        className={({ isActive }) =>
                                            isActive
                                                ? activeDropdownMenuLink
                                                : inactiveDropdownMenuLink
                                        }
                                        to="/teeth-cleaning"
                                    >
                                        Dentální hygiena
                                    </NavLink>
                                    <NavLink
                                        className={({ isActive }) =>
                                            isActive
                                                ? activeDropdownMenuLink
                                                : inactiveDropdownMenuLink
                                        }
                                        to="/care-advice"
                                    >
                                        Parodontologie
                                    </NavLink>
                                    <NavLink
                                        className={({ isActive }) =>
                                            isActive
                                                ? activeDropdownMenuLink
                                                : inactiveDropdownMenuLink
                                        }
                                        to="/dental-care"
                                    >
                                        Dětská stomatologie
                                    </NavLink>
                                    <NavLink
                                        className={({ isActive }) =>
                                            isActive
                                                ? activeDropdownMenuLink
                                                : inactiveDropdownMenuLink
                                        }
                                        to="/tooth-protection"
                                    >
                                        Fotokompozitní výplně
                                    </NavLink>
                                    <NavLink
                                        className={({ isActive }) =>
                                            isActive
                                                ? activeDropdownMenuLink
                                                : inactiveDropdownMenuLink
                                        }
                                        to="/whitening-teeth"
                                    >
                                        Endodoncie
                                    </NavLink>
                                    <NavLink
                                        className={({ isActive }) =>
                                            isActive
                                                ? activeDropdownMenuLink
                                                : inactiveDropdownMenuLink
                                        }
                                        to="/dental-implants"
                                    >
                                        Protetická stomatologie
                                    </NavLink>
                                    <NavLink
                                        className={({ isActive }) =>
                                            isActive
                                                ? activeDropdownMenuLink
                                                : inactiveDropdownMenuLink
                                        }
                                        to="/oral-surgery"
                                    >
                                        Dentoalveolární chirurgie
                                    </NavLink>
                                    <NavLink
                                        className={({ isActive }) =>
                                            isActive
                                                ? activeDropdownMenuLink
                                                : inactiveDropdownMenuLink
                                        }
                                        to="/oral-hygienist"
                                    >
                                        Implantologie
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
                                <span>Kontakty</span>
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
                                <span>Rezervujte si termín</span>
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
