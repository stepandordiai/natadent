import { NavLink } from "react-router-dom";
import BurgerBtn from "../BurgerBtn/BurgerBtn";
import locationIcon from "./../../assets/icons/pin.png";
import calendarIcon from "./../../assets/icons/schedule.png";
import logoIcon from "./../../assets/logo/tooth.png";
import "./Header.scss";

const Header = () => {
    const inactiveLink = "nav__link";
    const activeLink = "nav__link nav__link--active";

    const inactiveMenuLink = "menu-link";
    const activeMenuLink = "menu-link menu-link--active";

    // addEventListener("scroll", () => {
    //     if (window.scrollY > 100) {
    //         document.querySelector(".header").classList.add("header--hide-top");
    //     } else {
    //         document
    //             .querySelector(".header")
    //             .classList.remove("header--hide-top");
    //     }
    // });
    return (
        <header className="header">
            <div className="header-top">
                <a href="tel:+420722001016">+420 722 001 016</a>
                <a href="mailto:novozub@gmail.com">novozubcz@gmail.com</a>
            </div>
            <div className="header-bottom">
                <div className="header-bottom__container">
                    <NavLink className="header__logo" to="/">
                        <img src={logoIcon} alt="Novomax Logo" />
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
                            <li>
                                <NavLink
                                    className={({ isActive }) =>
                                        isActive ? activeLink : inactiveLink
                                    }
                                    to="/about-us"
                                >
                                    About us
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    className={({ isActive }) =>
                                        isActive ? activeLink : inactiveLink
                                    }
                                    to="/services"
                                >
                                    Services
                                </NavLink>
                            </li>
                            <li className="nav__find-us-item">
                                <NavLink
                                    className={({ isActive }) =>
                                        isActive ? activeLink : inactiveLink
                                    }
                                    to="/find-us"
                                >
                                    Find us
                                </NavLink>
                            </li>
                            <li className="nav__btn">
                                <NavLink
                                    className={({ isActive }) =>
                                        isActive
                                            ? `${activeLink} nav__btn-link`
                                            : `${inactiveLink} nav__btn-link`
                                    }
                                    to="/contact"
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
                            to="/find-us"
                        >
                            <img
                                className="nav__find-us"
                                src={locationIcon}
                                alt="Location"
                            />
                        </NavLink>
                        <NavLink
                            className={({ isActive }) =>
                                isActive
                                    ? `${activeLink} nav__contact-icon`
                                    : `${inactiveLink} nav__contact-icon`
                            }
                            to="/contact"
                        >
                            <img
                                className="nav__appointment"
                                src={calendarIcon}
                                alt="Calendar"
                            />
                        </NavLink>
                        <BurgerBtn />
                    </nav>
                </div>

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
                        <li className="menu-item">
                            <NavLink
                                className={({ isActive }) =>
                                    isActive ? activeMenuLink : inactiveMenuLink
                                }
                                to="/about-us"
                            >
                                <span>About us</span>
                                <span>02</span>
                            </NavLink>
                        </li>
                        <li className="menu-item">
                            <NavLink
                                className={({ isActive }) =>
                                    isActive ? activeMenuLink : inactiveMenuLink
                                }
                                to="/services"
                            >
                                <span>Services</span>
                                <span>03</span>
                            </NavLink>
                        </li>
                        <li className="menu-item">
                            <NavLink
                                className={({ isActive }) =>
                                    isActive ? activeMenuLink : inactiveMenuLink
                                }
                                to="/find-us"
                            >
                                <span>Find us</span>
                                <span>04</span>
                            </NavLink>
                        </li>
                        <li className="menu-item">
                            <NavLink
                                className={({ isActive }) =>
                                    isActive ? activeMenuLink : inactiveMenuLink
                                }
                                to="/contact"
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
