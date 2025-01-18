import { NavLink } from "react-router-dom";
import "./Header.scss";
import locationIcon from "./../../assets/icons/pin.png";
import calendarIcon from "./../../assets/icons/calendar.png";
import BurgerBtn from "../BurgerBtn/BurgerBtn";
import logoIcon from "./../../assets/logo/tooth.png";

const Header = () => {
    const inactiveLink = "nav__link";
    const activeLink = "nav__link nav__link--active";
    return (
        <header className="header">
            <NavLink className="header__logo" to="/">
                <img src={logoIcon} alt="Novomax Logo" />
                <span>Novomax</span>
            </NavLink>
            <nav className="nav">
                <ul>
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
        </header>
    );
};

export default Header;
