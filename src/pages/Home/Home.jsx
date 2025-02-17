import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import logoIcon from "./../../assets/logo/tooth.png";
import photo1 from "./../../assets/team/1.jpg";
import photo2 from "./../../assets/team/2.jpg";
import photo3 from "./../../assets/team/3.jpg";
import photo4 from "./../../assets/team/4.jpg";
import photo5 from "./../../assets/team/5.jpg";
import "./Home.scss";

const Home = () => {
    const { t } = useTranslation();

    useEffect(() => {
        document.title = `Novozub | ${t("home.secondary_title")}`;
    }, [t]);

    useEffect(() => {
        document.querySelectorAll(".js-service").forEach((el) => {
            document.addEventListener("scroll", () => {
                const serviceRect = el.getBoundingClientRect().top;
                if (serviceRect < window.innerHeight - 100) {
                    el.classList.add("service--active");
                } else {
                    el.classList.remove("service--active");
                }
            });

            // On load page

            const serviceRect = el.getBoundingClientRect().top;
            if (serviceRect < window.innerHeight - 100) {
                el.classList.add("service--active");
            } else {
                el.classList.remove("service--active");
            }
        });

        document.querySelectorAll(".js-faq__btn").forEach((btn, index) => {
            btn.addEventListener("click", () => {
                const gridDropdowns =
                    document.querySelectorAll(".grid-dropdown");
                const faqBtnIcon = document.querySelectorAll(".faq__btn-icon");
                gridDropdowns[index].classList.toggle("grid-dropdown--active");
                faqBtnIcon[index].classList.toggle("faq__btn-icon--active");
            });
        });
    }, []);

    return (
        <>
            <div className="home-top">
                <div className="home-top__logo">
                    <img
                        className="home-top__logo-icon"
                        src={logoIcon}
                        alt="Logo"
                    />
                </div>
                <h2 className="home-top__title">{t("home.title")}</h2>
                <h3 className="home-top__sec-title">
                    {t("home.secondary_title")}
                </h3>
                <div className="home-top__btn-container">
                    <NavLink className="home-top__btn" to="/appointment">
                        {t("appointment_title")}
                    </NavLink>
                    <a className="home-top__btn" href="#services">
                        {t("home.services_btn")}
                    </a>
                </div>
            </div>
            <div className="home__services" id="services">
                <h2 className="home__services-title">{t("services_title")}</h2>
                <div className="home__services-grid">
                    <NavLink className="home__service js-service">
                        <h4>{t("service_1")}</h4>
                        <p>{t("service_desc_1")}</p>
                    </NavLink>
                    <NavLink className="home__service js-service">
                        <h4>{t("service_2")}</h4>
                        <p>{t("service_desc_2")}</p>
                    </NavLink>
                    <NavLink className="home__service js-service">
                        <h4>{t("service_3")}</h4>
                        <p>{t("service_desc_3")}</p>
                    </NavLink>
                    <NavLink className="home__service js-service">
                        <h4>{t("service_4")}</h4>
                        <p>{t("service_desc_4")}</p>
                    </NavLink>
                    <NavLink className="home__service js-service">
                        <h4>{t("service_5")}</h4>
                        <p>{t("service_desc_5")}</p>
                    </NavLink>
                    <NavLink className="home__service js-service">
                        <h4>{t("service_6")}</h4>
                        <p>{t("service_desc_6")}</p>
                    </NavLink>
                    <NavLink className="home__service js-service">
                        <h4>{t("service_7")}</h4>
                        <p>{t("service_desc_7")}</p>
                    </NavLink>
                    <NavLink className="home__service js-service">
                        <h4>{t("service_8")}</h4>
                        <p>{t("service_desc_8")}</p>
                    </NavLink>
                    <NavLink className="home__service js-service">
                        <h4>{t("service_9")}</h4>
                        <p>{t("service_desc_9")}</p>
                    </NavLink>
                    <NavLink className="home__service js-service">
                        <h4>{t("service_10")}</h4>
                        <p>{t("service_desc_10")}</p>
                    </NavLink>
                    <NavLink className="home__service js-service">
                        <h4>{t("service_11")}</h4>
                        <p>{t("service_desc_11")}</p>
                    </NavLink>
                    <NavLink className="home__service js-service">
                        <h4>{t("service_12")}</h4>
                        <p>{t("service_desc_12")}</p>
                    </NavLink>
                    <NavLink className="home__service js-service">
                        <h4>{t("service_13")}</h4>
                        <p>{t("service_desc_13")}</p>
                    </NavLink>
                    <NavLink className="home__service js-service">
                        <h4>{t("service_14")}</h4>
                        <p>{t("service_desc_14")}</p>
                    </NavLink>
                    <NavLink className="home__service js-service">
                        <h4>{t("service_15")}</h4>
                        <p>{t("service_desc_15")}</p>
                    </NavLink>
                    {/* <NavLink className="home__service js-service">
                        <h4>{t("service_16")}</h4>
                        <p>{t("service_desc_16")}</p>
                    </NavLink>
                    <NavLink className="home__service js-service">
                        <h4>{t("service_17")}</h4>
                        <p>{t("service_desc_17")}</p>
                    </NavLink>
                    <NavLink className="home__service js-service">
                        <h4>{t("service_18")}</h4>
                        <p>{t("service_desc_18")}</p>
                    </NavLink>
                    <NavLink className="home__service js-service">
                        <h4>{t("service_19")}</h4>
                        <p>{t("service_desc_19")}</p>
                    </NavLink>
                    <NavLink className="home__service js-service">
                        <h4>{t("service_20")}</h4>
                        <p>{t("service_desc_20")}</p>
                    </NavLink>
                    <NavLink className="home__service js-service">
                        <h4>{t("service_21")}</h4>
                        <p>{t("service_desc_21")}</p>
                    </NavLink>
                    <NavLink className="home__service js-service">
                        <h4>{t("service_22")}</h4>
                        <p>{t("service_desc_22")}</p>
                    </NavLink>
                    <NavLink className="home__service js-service">
                        <h4>{t("service_23")}</h4>
                        <p>{t("service_desc_23")}</p>
                    </NavLink>
                    <NavLink className="home__service js-service">
                        <h4>{t("service_24")}</h4>
                        <p>{t("service_desc_24")}</p>
                    </NavLink>
                    <NavLink className="home__service js-service">
                        <h4>{t("service_25")}</h4>
                        <p>{t("service_desc_25")}</p>
                    </NavLink>
                    <NavLink className="home__service js-service">
                        <h4>{t("service_26")}</h4>
                        <p>{t("service_desc_26")}</p>
                    </NavLink>
                    <NavLink className="home__service js-service">
                        <h4>{t("service_27")}</h4>
                        <p>{t("service_desc_27")}</p>
                    </NavLink>
                    <NavLink className="home__service js-service">
                        <h4>{t("service_28")}</h4>
                        <p>{t("service_desc_28")}</p>
                    </NavLink>
                    <NavLink className="home__service js-service">
                        <h4>{t("service_29")}</h4>
                        <p>{t("service_desc_29")}</p>
                    </NavLink>
                    <NavLink className="home__service js-service">
                        <h4>{t("service_30")}</h4>
                        <p>{t("service_desc_30")}</p>
                    </NavLink>
                    <NavLink className="home__service js-service">
                        <h4>{t("service_31")}</h4>
                        <p>{t("service_desc_31")}</p>
                    </NavLink> */}
                </div>
            </div>
            <div className="home-our-team">
                <h3 className="home-our-team__title">
                    {t("about_us.our_team_title")}
                </h3>
                <div className="home-our-team__grid">
                    <div className="home-our-team__card">
                        <img src={photo1} alt="Photo" />
                        <div>
                            <p>Jméno</p>
                            <p>Pozice</p>
                            <p>Cislo</p>
                        </div>
                    </div>
                    <div className="home-our-team__card">
                        <img src={photo2} alt="Photo" />
                        <div>
                            <p>Jméno</p>
                            <p>Pozice</p>
                            <p>+420 722 001 016</p>
                        </div>
                    </div>
                    <div className="home-our-team__card">
                        <img src={photo3} alt="Photo" />
                        <div>
                            <p>Jméno</p>
                            <p>Pozice</p>
                            <p>+420 722 001 016</p>
                        </div>
                    </div>
                    <div className="home-our-team__card">
                        <img src={photo4} alt="Photo" />
                        <div>
                            <p>Jméno</p>
                            <p>Pozice</p>
                            <p>+420 722 001 016</p>
                        </div>
                    </div>
                    <div className="home-our-team__card">
                        <img src={photo5} alt="Photo" />
                        <div>
                            <p>Jméno</p>
                            <p>Pozice</p>
                            <p>+420 722 001 016</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="faq">
                <div className="faq__title">{t("home.faq")}</div>
                <div className="faq__list">
                    <div className="faq__item">
                        <button className="faq__btn js-faq__btn">
                            <span className="faq__btn-txt">
                                {t("home.question_1")}
                            </span>
                            <div className="faq__btn-icon"></div>
                        </button>
                        <div className="grid-dropdown">
                            <p className="grid-dropdown__details">
                                {t("home.answer_1")}
                            </p>
                        </div>
                    </div>
                    <div className="faq__item">
                        <button className="faq__btn js-faq__btn">
                            <span className="faq__btn-txt">
                                {t("home.question_2")}
                            </span>
                            <div className="faq__btn-icon"></div>
                        </button>
                        <div className="grid-dropdown">
                            <p className="grid-dropdown__details">
                                {t("home.answer_2")}
                            </p>
                        </div>
                    </div>
                    <div className="faq__item">
                        <button className="faq__btn js-faq__btn">
                            <span className="faq__btn-txt">
                                {t("home.question_3")}
                            </span>
                            <div className="faq__btn-icon"></div>
                        </button>
                        <div className="grid-dropdown">
                            <p className="grid-dropdown__details">
                                {t("home.answer_3")}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;
