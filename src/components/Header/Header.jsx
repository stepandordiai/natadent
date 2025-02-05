import { NavLink } from "react-router-dom";
import BurgerBtn from "../BurgerBtn/BurgerBtn";
import logoIcon from "./../../assets/logo/tooth.png";
import phoneIcon from "./../../assets/icons/phone-call.png";
import calendarIcon from "./../../assets/icons/calendar.png";
import { useEffect } from "react";
import "./Header.scss";

const Header = () => {
    const inactiveLink = "nav__link js-link";
    const activeLink = "nav__link js-link nav__link--active";

    const inactiveMenuLink = "menu-link js-link";
    const activeMenuLink = "menu-link js-link menu-link--active";

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
                        <ul className="nav-list">
                            <li>
                                <NavLink
                                    className={({ isActive }) =>
                                        isActive ? activeLink : inactiveLink
                                    }
                                    to="/"
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li className="nav-list__dropdown">
                                <NavLink
                                    className={({ isActive }) =>
                                        isActive ? activeLink : inactiveLink
                                    }
                                    to="/about-us"
                                >
                                    About us
                                </NavLink>
                                <div className="nav-list__dropdown-list">
                                    <NavLink
                                        className={({ isActive }) =>
                                            isActive ? activeLink : inactiveLink
                                        }
                                        to="/price-list"
                                    >
                                        Price list
                                    </NavLink>
                                    <NavLink
                                        className={({ isActive }) =>
                                            isActive ? activeLink : inactiveLink
                                        }
                                        to="/smile-gallery"
                                    >
                                        Smile gallery
                                    </NavLink>
                                </div>
                            </li>
                            <li className="nav-list__dropdown">
                                <NavLink
                                    className={({ isActive }) =>
                                        isActive ? activeLink : inactiveLink
                                    }
                                    to="/services"
                                >
                                    Services
                                </NavLink>
                                <div className="nav-list__dropdown-list">
                                    <NavLink
                                        className={({ isActive }) =>
                                            isActive ? activeLink : inactiveLink
                                        }
                                        to="/oral-hygienist"
                                    >
                                        Oral Hygienist
                                    </NavLink>
                                    <NavLink
                                        className={({ isActive }) =>
                                            isActive ? activeLink : inactiveLink
                                        }
                                        to="/teeth-cleaning"
                                    >
                                        Teeth Cleaning
                                    </NavLink>
                                    <NavLink
                                        className={({ isActive }) =>
                                            isActive ? activeLink : inactiveLink
                                        }
                                        to="/care-advice"
                                    >
                                        Care Advice
                                    </NavLink>
                                    <NavLink
                                        className={({ isActive }) =>
                                            isActive ? activeLink : inactiveLink
                                        }
                                        to="/dental-care"
                                    >
                                        Dental Care
                                    </NavLink>
                                    <NavLink
                                        className={({ isActive }) =>
                                            isActive ? activeLink : inactiveLink
                                        }
                                        to="/tooth-protection"
                                    >
                                        Tooth Protection
                                    </NavLink>
                                    <NavLink
                                        className={({ isActive }) =>
                                            isActive ? activeLink : inactiveLink
                                        }
                                        to="/whitening-teeth"
                                    >
                                        Whitening Teeth
                                    </NavLink>
                                    <NavLink
                                        className={({ isActive }) =>
                                            isActive ? activeLink : inactiveLink
                                        }
                                        to="/dental-implants"
                                    >
                                        Dental Implants
                                    </NavLink>
                                    <NavLink
                                        className={({ isActive }) =>
                                            isActive ? activeLink : inactiveLink
                                        }
                                        to="/oral-surgery"
                                    >
                                        Oral Surgery
                                    </NavLink>
                                </div>
                            </li>
                            <li className="nav__find-us-item">
                                <NavLink
                                    className={({ isActive }) =>
                                        isActive ? activeLink : inactiveLink
                                    }
                                    to="/contacts"
                                >
                                    Contacts
                                </NavLink>
                            </li>
                            <li className="nav__btn">
                                <NavLink
                                    className={({ isActive }) =>
                                        isActive
                                            ? `${activeLink} nav__btn-link`
                                            : `${inactiveLink} nav__btn-link`
                                    }
                                    to="/appointment"
                                >
                                    Make an appointment
                                </NavLink>
                            </li>
                        </ul>
                        <NavLink
                            className={({ isActive }) =>
                                isActive
                                    ? `${activeLink} nav__find-us-icon`
                                    : `${inactiveLink} nav__find-us-icon`
                            }
                            to="/contacts"
                        >
                            <img src={phoneIcon} alt="Location" />
                        </NavLink>
                        <NavLink
                            className={({ isActive }) =>
                                isActive
                                    ? `${activeLink} nav__contact-icon`
                                    : `${inactiveLink} nav__contact-icon`
                            }
                            to="/appointment"
                        >
                            <img src={calendarIcon} alt="Calendar" />
                        </NavLink>
                        <BurgerBtn />
                    </nav>
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
                                <span>Home</span>
                                <span>01</span>
                            </NavLink>
                        </li>
                        <li className="menu-item nav-list__menu-dropdown">
                            <NavLink
                                className={({ isActive }) =>
                                    isActive ? activeMenuLink : inactiveMenuLink
                                }
                                to="/about-us"
                            >
                                <span>About us</span>
                                <span>02</span>
                            </NavLink>
                            <div className="menu-dropdown__wrapper">
                                <div className="menu-dropdown-list">
                                    <NavLink to="/price-list">
                                        Price list
                                    </NavLink>
                                    <NavLink to="/smile-gallery">
                                        Smile gallery
                                    </NavLink>
                                </div>
                            </div>
                        </li>
                        <li className="menu-item nav-list__menu-dropdown">
                            <NavLink
                                className={({ isActive }) =>
                                    isActive ? activeMenuLink : inactiveMenuLink
                                }
                                to="/services"
                            >
                                <span>Services</span>
                                <span>03</span>
                            </NavLink>
                            <div className="menu-dropdown__wrapper">
                                <div className="menu-dropdown-list">
                                    <NavLink to="/oral-hygienist">
                                        Oral Hygienist
                                    </NavLink>
                                    <NavLink to="/teeth-cleaning">
                                        Teeth Cleaning
                                    </NavLink>
                                    <NavLink to="/care-advice">
                                        Care Advice
                                    </NavLink>
                                    <NavLink to="/dental-care">
                                        Dental Care
                                    </NavLink>
                                    <NavLink to="/tooth-protection">
                                        Tooth Protection
                                    </NavLink>
                                    <NavLink to="/whitening-teeth">
                                        Whitening Teeth
                                    </NavLink>
                                    <NavLink to="/dental-implants">
                                        Dental Implants
                                    </NavLink>
                                    <NavLink to="/oral-surgery">
                                        Oral Surgery
                                    </NavLink>
                                    <NavLink to="/oral-hygienist">
                                        Oral Hygienist
                                    </NavLink>
                                    <NavLink to="/teeth-cleaning">
                                        Teeth Cleaning
                                    </NavLink>
                                    <NavLink to="/care-advice">
                                        Care Advice
                                    </NavLink>
                                    <NavLink to="/dental-care">
                                        Dental Care
                                    </NavLink>
                                    <NavLink to="/tooth-protection">
                                        Tooth Protection
                                    </NavLink>
                                    <NavLink to="/whitening-teeth">
                                        Whitening Teeth
                                    </NavLink>
                                    <NavLink to="/dental-implants">
                                        Dental Implants
                                    </NavLink>
                                    <NavLink to="/oral-surgery">
                                        Oral Surgery
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
                                <span>Contacts</span>
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
                                <span>Make an appointment</span>
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
