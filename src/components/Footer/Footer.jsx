import { NavLink } from "react-router-dom";
import logoIcon from "./../../assets/logo/tooth.png";
import CustomDivider from "../CustomDivider/CustomDivider";
import "./Footer.scss";
// import { useTranslation } from "react-i18next";

const Footer = () => {
    const day = new Date().getDay();

    const addressLink =
        "https://www.google.com/maps/place/Pepa+Bourek/@50.0241827,15.2118482,17z/data=!3m1!4b1!4m15!1m8!3m7!1s0x470c153bee9daf87:0xc91ccf8d204d4cb!2sPod+Hroby+271%2F271,+280+02+Kol%C3%ADn+IV!3b1!8m2!3d50.0240306!4d15.2143025!16s%2Fg%2F11cpkpjyq9!3m5!1s0x470c1567f730be5f:0xba05366bb1086eb!8m2!3d50.0241793!4d15.2144231!16s%2Fg%2F11ybt54v3c?entry=ttu&g_ep=EgoyMDI1MDEyOC4wIKXMDSoASAFQAw%3D%3D";

    const inactiveLink = "footer__link";
    const activeLink = "footer__link footer__link--active";

    // const { t } = useTranslation();

    return (
        <footer className="footer">
            <CustomDivider />
            <div className="footer__header">
                <div className="footer__header-top">
                    <div className="footer__header-logo">
                        <img src={logoIcon} alt="Logo" />
                        <span>Novozub</span>
                    </div>
                    <CustomDivider none="none" />
                    <div className="footer__header-working-hours">
                        <p>Pracovní doba</p>
                        <ul className="working-hours">
                            <li className={day === 1 ? "day--active" : ""}>
                                <span>Pondělí:</span>
                                <span>7:00 - 17:00</span>
                            </li>
                            <li className={day === 2 ? "day--active" : ""}>
                                <span>Úterý:</span>
                                <span>7:00 - 17:00</span>
                            </li>
                            <li className={day === 3 ? "day--active" : ""}>
                                <span>Středa:</span>
                                <span>7:00 - 17:00</span>
                            </li>
                            <li className={day === 4 ? "day--active" : ""}>
                                <span>Čtvrtek:</span>
                                <span>7:00 - 17:00</span>
                            </li>
                            <li className={day === 5 ? "day--active" : ""}>
                                <span>Pátek:</span>
                                <span>7:00 - 17:00</span>
                            </li>
                            <li className={day === 6 ? "day--active" : ""}>
                                <span>Sobota:</span>
                                <span>Zavřeno</span>
                            </li>
                            <li className={day === 0 ? "day--active" : ""}>
                                <span>Neděle:</span>
                                <span>Zavřeno</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <CustomDivider />
                <div className="footer__header-bottom">
                    <div className="footer__header-navigation">
                        <p>Navigace</p>
                        <ul>
                            <li>
                                <NavLink
                                    className={({ isActive }) =>
                                        isActive ? activeLink : inactiveLink
                                    }
                                    to="/"
                                >
                                    Úvod
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    className={({ isActive }) =>
                                        isActive ? activeLink : inactiveLink
                                    }
                                    to="/about-us"
                                >
                                    O nás
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    className={({ isActive }) =>
                                        isActive ? activeLink : inactiveLink
                                    }
                                    to="/services"
                                >
                                    Služby
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    className={({ isActive }) =>
                                        isActive ? activeLink : inactiveLink
                                    }
                                    to="/contacts"
                                >
                                    Kontakty
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    className={({ isActive }) =>
                                        isActive ? activeLink : inactiveLink
                                    }
                                    to="/contact"
                                >
                                    Rezervujte si termín
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                    <CustomDivider none="none" />
                    <div className="footer__header-navigation">
                        <p>Služby</p>
                        <ul>
                            <li>
                                <NavLink
                                    className={({ isActive }) =>
                                        isActive ? activeLink : inactiveLink
                                    }
                                    to=""
                                >
                                    Preventivní stomatologie
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    className={({ isActive }) =>
                                        isActive ? activeLink : inactiveLink
                                    }
                                    to=""
                                >
                                    Dentální hygiena
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    className={({ isActive }) =>
                                        isActive ? activeLink : inactiveLink
                                    }
                                    to=""
                                >
                                    Parodontologie
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    className={({ isActive }) =>
                                        isActive ? activeLink : inactiveLink
                                    }
                                    to=""
                                >
                                    Dětská stomatologie
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    className={({ isActive }) =>
                                        isActive ? activeLink : inactiveLink
                                    }
                                    to=""
                                >
                                    Fotokompozitní výplně
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    className={({ isActive }) =>
                                        isActive ? activeLink : inactiveLink
                                    }
                                    to=""
                                >
                                    Endodoncie
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    className={({ isActive }) =>
                                        isActive ? activeLink : inactiveLink
                                    }
                                    to=""
                                >
                                    Protetická stomatologie
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    className={({ isActive }) =>
                                        isActive ? activeLink : inactiveLink
                                    }
                                    to=""
                                >
                                    Dentoalveolární chirurgie
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    className={({ isActive }) =>
                                        isActive ? activeLink : inactiveLink
                                    }
                                    to=""
                                >
                                    Implantologie
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                    <CustomDivider none="none" />

                    <div className="footer__header-contact-us">
                        <p>Kontakty</p>
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
                                <a href={addressLink}>
                                    Pod Hroby 271/271 Kolín IV
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <CustomDivider />
            <div className="footer__bottom">
                <p className="copyright">&copy; 2025 Novozub</p>
                <p>Všechna práva vyhrazena</p>
                <p className="creator">
                    Designed and developed by <a href="">heeeyooo.studio</a>
                </p>
            </div>
        </footer>
    );
};

export default Footer;
