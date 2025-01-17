import { NavLink } from "react-router-dom";
import "./Header.scss";
import locationIcon from "./../../assets/icons/pin.png";
import calendarIcon from "./../../assets/icons/calendar.png";

const Header = () => {
    return (
        <header className="header">
            <NavLink className="header__logo" to="/">
                Novomax
            </NavLink>
            <nav className="nav">
                <ul>
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about-us">About us</NavLink>
                    </li>
                    <li>
                        <NavLink to="/services">Services</NavLink>
                    </li>
                    <li className="nav__find-us">
                        <NavLink to="/find-us">
                            <span>Find us</span>
                            <img src={locationIcon} alt="Location" />
                        </NavLink>
                    </li>
                    <li className="nav__appointment">
                        <NavLink to="/contact">
                            <span>Make an appointment</span>
                            <img src={calendarIcon} alt="Calendar" />
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
