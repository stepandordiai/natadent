import { NavLink } from "react-router-dom";
import "./Header.scss";
import locationIcon from "./../../assets/icons/pin.png";
import calendarIcon from "./../../assets/icons/calendar.png";
import BurgerBtn from "../BurgerBtn/BurgerBtn";
import logoIcon from "./../../assets/logo/tooth.png";

const Header = () => {
    return (
        <header className="header">
            <NavLink className="header__logo" to="/">
                <img src={logoIcon} alt="Novomax Logo" />
                <span>Novomax</span>
            </NavLink>
            <nav className="nav">
                <ul>
                    <li>
                        <NavLink className="nav__link" to="/">
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className="nav__link" to="/about-us">
                            About us
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className="nav__link" to="/services">
                            Services
                        </NavLink>
                    </li>
                    <li className="nav__find-us-item">
                        <NavLink className="nav__link" to="/find-us">
                            Find us
                        </NavLink>
                    </li>
                    <li className="nav__btn">
                        <NavLink
                            className="nav__link nav__btn-link"
                            to="/contact"
                        >
                            Make an appointment
                        </NavLink>
                    </li>
                </ul>
                <NavLink className="nav__find-us-icon" to="/find-us">
                    <img
                        className="nav__find-us"
                        src={locationIcon}
                        alt="Location"
                    />
                </NavLink>
                <NavLink className="nav__contact-icon" to="/contact">
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
