import { NavLink } from "react-router-dom";
import logoIcon from "./../../assets/logo/tooth.png";
import CustomDivider from "../CustomDivider/CustomDivider";
import "./Footer.scss";

const Footer = () => {
    const day = new Date().getDay();

    return (
        <footer className="footer">
            <CustomDivider />
            <div className="footer__header">
                <div className="footer__header-logo">
                    <img src={logoIcon} alt="Logo" />
                    <span>Novozub</span>
                </div>
                <div className="footer__header-working-hours">
                    <p>Working hours</p>
                    <ul className="working-hours">
                        <li className={day === 1 ? "day--active" : ""}>
                            <span>Monday:</span>
                            <span>7:00 - 17:00</span>
                        </li>
                        <li className={day === 2 ? "day--active" : ""}>
                            <span>Tuesday:</span>
                            <span>7:00 - 17:00</span>
                        </li>
                        <li className={day === 3 ? "day--active" : ""}>
                            <span>Wednesday:</span>
                            <span>7:00 - 17:00</span>
                        </li>
                        <li className={day === 4 ? "day--active" : ""}>
                            <span>Thursday:</span>
                            <span>7:00 - 17:00</span>
                        </li>
                        <li className={day === 5 ? "day--active" : ""}>
                            <span>Friday:</span>
                            <span>7:00 - 17:00</span>
                        </li>
                        <li className={day === 6 ? "day--active" : ""}>
                            <span>Saturday:</span>
                            <span>Closed</span>
                        </li>
                        <li className={day === 0 ? "day--active" : ""}>
                            <span>Sunday:</span>
                            <span>Closed</span>{" "}
                        </li>
                    </ul>
                </div>
                <div className="footer__header-navigation">
                    <p>Navigation</p>
                    <ul>
                        <li>
                            <NavLink className="footer__link" to="/">
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className="footer__link" to="/about-us">
                                About us
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className="footer__link" to="/services">
                                Services
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className="footer__link" to="/find-us">
                                Find us
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className="footer__link" to="/contact">
                                Make an appointment
                            </NavLink>
                        </li>
                    </ul>
                </div>
                <div className="footer__header-contact-us">
                    <p>Contact us</p>
                </div>
            </div>
            <CustomDivider />
            <div className="footer__bottom">
                <p className="copyright">&copy; 2025 Novozub</p>
                <p>All rights reserved</p>
                <p className="creator">
                    Designed and developed by <a href="">heeeyooo</a>
                </p>
            </div>
        </footer>
    );
};

export default Footer;
