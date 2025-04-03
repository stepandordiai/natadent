import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import logoIcon from "./../../assets/logo/tooth.png";
import "./Footer.scss";
import { HashLink } from "react-router-hash-link";

const Footer = () => {
    const { t } = useTranslation();

    const servicesData = [
        {
            name: t("service_1"),
            desc: t("service_desc_1"),
            path: "stomatologie",
        },
        {
            name: t("service_2"),
            desc: t("service_desc_2"),
            path: "prevence",
        },
        {
            name: t("service_3"),
            desc: t("service_desc_3"),
            path: "dentální-hygiena",
        },
        {
            name: t("service_4"),
            desc: t("service_desc_4"),
            path: "stomatochirurgie",
        },
        {
            name: t("service_5"),
            desc: t("service_desc_5"),
            path: "kompletní-rekonstrukce-chrupu",
        },
        {
            name: t("service_6"),
            desc: t("service_desc_6"),
            path: "extrakce-zubů-moudrosti",
        },
        {
            name: t("service_7"),
            desc: t("service_desc_7"),
            path: "implantologie",
        },
        {
            name: t("service_8"),
            desc: t("service_desc_8"),
            path: "parodontologie",
        },
        {
            name: t("service_9"),
            desc: t("service_desc_9"),
            path: "endodoncie",
        },
        {
            name: t("service_10"),
            desc: t("service_desc_10"),
            path: "ortodoncie",
        },
        {
            name: t("service_11"),
            desc: t("service_desc_11"),
            path: "analgosedace-a-celková-anestezie",
        },
        {
            name: t("service_12"),
            desc: t("service_desc_12"),
            path: "dětská-stomatologie",
        },
        {
            name: t("service_13"),
            desc: t("service_desc_13"),
            path: "nastřižení-uzdiček-v-ústech-kojenců",
        },
        {
            name: t("service_14"),
            desc: t("service_desc_14"),
            path: "bělení-zubů",
        },
        {
            name: t("service_15"),
            desc: t("service_desc_15"),
            path: "zubní-laboratoř",
        },
    ];

    const day = new Date().getDay();

    const addressLink =
        "https://www.google.com/maps/place/Pepa+Bourek/@50.0241827,15.2118482,17z/data=!3m1!4b1!4m15!1m8!3m7!1s0x470c153bee9daf87:0xc91ccf8d204d4cb!2sPod+Hroby+271%2F271,+280+02+Kol%C3%ADn+IV!3b1!8m2!3d50.0240306!4d15.2143025!16s%2Fg%2F11cpkpjyq9!3m5!1s0x470c1567f730be5f:0xba05366bb1086eb!8m2!3d50.0241793!4d15.2144231!16s%2Fg%2F11ybt54v3c?entry=ttu&g_ep=EgoyMDI1MDEyOC4wIKXMDSoASAFQAw%3D%3D";

    const inactiveLink = "footer__link";
    const activeLink = "footer__link footer__link--active";

    return (
        <footer className="footer">
            <div className="footer-top">
                <div className="footer__logo-container">
                    <NavLink className="footer-top__logo" to="/">
                        <img src={logoIcon} alt="Logo" />
                        <span>Prozubik</span>
                    </NavLink>
                    <p>{t("home.secondary_title")}</p>
                </div>
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
                        <li>
                            <HashLink
                                className={"footer__link"}
                                to={"/#services"}
                            >
                                {t("services_title")}
                            </HashLink>
                        </li>
                        <li>
                            <HashLink className={"footer__link"} to={"/#faq"}>
                                {t("faq_title")}
                            </HashLink>
                        </li>
                    </ul>
                </div>
                <div className="footer-middle__nav-list-wrapper">
                    <p>{t("about_us_title")}</p>
                    <ul>
                        <li>
                            <NavLink
                                className={({ isActive }) =>
                                    isActive ? activeLink : inactiveLink
                                }
                                to="/our-team"
                            >
                                {t("our_team_title")}
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                className={({ isActive }) =>
                                    isActive ? activeLink : inactiveLink
                                }
                                to="/price-list"
                            >
                                {t("price_list_title")}
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                className={({ isActive }) =>
                                    isActive ? activeLink : inactiveLink
                                }
                                to="/smile-gallery"
                            >
                                {t("smile_gallery_title")}
                            </NavLink>
                        </li>
                    </ul>
                </div>
                <div className="footer-middle__nav-list-wrapper">
                    <p>{t("services_title")}</p>
                    <ul>
                        {servicesData.map((service, index) => {
                            return (
                                <li key={index}>
                                    <NavLink
                                        className={({ isActive }) =>
                                            isActive ? activeLink : inactiveLink
                                        }
                                        to={`/service-page/${service.path}`}
                                    >
                                        {service.name}
                                    </NavLink>
                                </li>
                            );
                        })}
                    </ul>
                </div>
                <div className="footer-middle__contacts-wrapper">
                    <p>{t("contacts_title")}</p>
                    <ul>
                        <li>
                            <a href="tel:+420773802166">+420 773 802 166</a>
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
                <div>
                    <p>&copy; 2025 Prozubik</p>
                    <p>{t("footer.rights")}.</p>
                    <p>
                        Site by{" "}
                        <a
                            className="footer__creator-link"
                            href="https://heeeyooo-studio.netlify.app/"
                            target="_blank"
                        >
                            heeeyooo.studio
                        </a>
                    </p>
                </div>
                <div className="related-sites-container">
                    <p>Related websites</p>
                    <ul>
                        <li>
                            <a href="https://bourek.cz/" target="_blank">
                                bourek.cz
                            </a>
                        </li>
                        <li>
                            <a href="https://neresen.cz/" target="_blank">
                                neresen.cz
                            </a>
                        </li>
                        <li>
                            <a href="https://fvestavby.cz/" target="_blank">
                                fvestavby.cz
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
