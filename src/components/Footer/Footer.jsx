import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import logoIcon from "./../../assets/logo/tooth.png";
import "./Footer.scss";

const Footer = () => {
    const day = new Date().getDay();

    const addressLink =
        "https://www.google.com/maps/place/Pepa+Bourek/@50.0241827,15.2118482,17z/data=!3m1!4b1!4m15!1m8!3m7!1s0x470c153bee9daf87:0xc91ccf8d204d4cb!2sPod+Hroby+271%2F271,+280+02+Kol%C3%ADn+IV!3b1!8m2!3d50.0240306!4d15.2143025!16s%2Fg%2F11cpkpjyq9!3m5!1s0x470c1567f730be5f:0xba05366bb1086eb!8m2!3d50.0241793!4d15.2144231!16s%2Fg%2F11ybt54v3c?entry=ttu&g_ep=EgoyMDI1MDEyOC4wIKXMDSoASAFQAw%3D%3D";

    const { t } = useTranslation();

    const inactiveLink = "footer__link";
    const activeLink = "footer__link footer__link--active";

    return (
        <footer className="footer">
            <div className="footer-top">
                <NavLink className="footer-top__logo" to="/">
                    <img src={logoIcon} alt="Logo" />
                    <span>Prozubik</span>
                </NavLink>
                <div className="footer-top__working-hours">
                    <p>{t("footer.working_hours")}</p>
                    <ul className="working-hours">
                        <li className={day === 1 ? "day--active" : ""}>
                            <span>{t("footer.mon")}:</span>
                            <span>7:00 - 17:00</span>
                        </li>
                        <li className={day === 2 ? "day--active" : ""}>
                            <span>{t("footer.tue")}:</span>
                            <span>7:00 - 17:00</span>
                        </li>
                        <li className={day === 3 ? "day--active" : ""}>
                            <span>{t("footer.wed")}:</span>
                            <span>7:00 - 17:00</span>
                        </li>
                        <li className={day === 4 ? "day--active" : ""}>
                            <span>{t("footer.thu")}:</span>
                            <span>7:00 - 17:00</span>
                        </li>
                        <li className={day === 5 ? "day--active" : ""}>
                            <span>{t("footer.fri")}:</span>
                            <span>7:00 - 17:00</span>
                        </li>
                        <li className={day === 6 ? "day--active" : ""}>
                            <span>{t("footer.sat")}:</span>
                            <span>{t("footer.closed")}</span>
                        </li>
                        <li className={day === 0 ? "day--active" : ""}>
                            <span>{t("footer.sun")}:</span>
                            <span>{t("footer.closed")}</span>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="footer-middle">
                <div className="footer-middle__nav-list-wrapper">
                    <p>{t("footer.nav_title")}</p>
                    <ul>
                        <li>
                            <NavLink
                                className={({ isActive }) =>
                                    isActive ? activeLink : inactiveLink
                                }
                                to="/"
                            >
                                {t("home_title")}
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                className={({ isActive }) =>
                                    isActive ? activeLink : inactiveLink
                                }
                                to="/about-us"
                            >
                                {t("about_us_title")}
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                className={({ isActive }) =>
                                    isActive ? activeLink : inactiveLink
                                }
                                to="/services"
                            >
                                {t("services_title")}
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                className={({ isActive }) =>
                                    isActive ? activeLink : inactiveLink
                                }
                                to="/contacts"
                            >
                                {t("contacts_title")}
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                className={({ isActive }) =>
                                    isActive ? activeLink : inactiveLink
                                }
                                to="/appointment"
                            >
                                {t("appointment_title")}
                            </NavLink>
                        </li>
                    </ul>
                </div>
                <div className="footer-middle__nav-list-wrapper">
                    <p>{t("services_title")}</p>
                    <ul>
                        <li>
                            <NavLink
                                className={({ isActive }) =>
                                    isActive ? activeLink : inactiveLink
                                }
                                to="/6"
                            >
                                {t("service_1")}
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                className={({ isActive }) =>
                                    isActive ? activeLink : inactiveLink
                                }
                                to="/4"
                            >
                                {t("service_2")}
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                className={({ isActive }) =>
                                    isActive ? activeLink : inactiveLink
                                }
                                to="/5"
                            >
                                {t("service_3")}
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                className={({ isActive }) =>
                                    isActive ? activeLink : inactiveLink
                                }
                                to="/3"
                            >
                                {t("service_4")}
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                className={({ isActive }) =>
                                    isActive ? activeLink : inactiveLink
                                }
                                to="/2"
                            >
                                {t("service_5")}
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                className={({ isActive }) =>
                                    isActive ? activeLink : inactiveLink
                                }
                                to="/1"
                            >
                                {t("service_6")}
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                className={({ isActive }) =>
                                    isActive ? activeLink : inactiveLink
                                }
                                to="/7"
                            >
                                {t("service_7")}
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                className={({ isActive }) =>
                                    isActive ? activeLink : inactiveLink
                                }
                                to="/8"
                            >
                                {t("service_8")}
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                className={({ isActive }) =>
                                    isActive ? activeLink : inactiveLink
                                }
                                to="/9"
                            >
                                {t("service_9")}
                            </NavLink>
                        </li>
                    </ul>
                </div>
                <div className="footer-middle__contacts-wrapper">
                    <p>{t("contacts_title")}</p>
                    <ul>
                        <li>
                            <a href="tel:+420722001016">+420 722 001 016</a>
                        </li>
                        <li>
                            <a href="mailto:novozubcz@gmail.com">
                                novozubcz@gmail.com
                            </a>
                        </li>
                        <li>
                            <a href={addressLink}>Pod Hroby 271 Kolín IV</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="footer-bottom">
                <p className="copyright">&copy; 2025 Prozubik</p>
                <p>{t("footer.rights")}.</p>
                <p className="creator">
                    Designed and developed by{" "}
                    <a href="https://heeeyooo-studio.netlify.app/">
                        heeeyooo.studio
                    </a>
                </p>
            </div>
        </footer>
    );
};

export default Footer;
