import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import CustomDivider from "../../components/CustomDivider/CustomDivider";
import { useTranslation } from "react-i18next";
import HomeCustomBg from "../../components/HomeCustomBg/HomeCustomBg";
import toothIcon1 from "./../../assets/icons/tooth-icons/braces.png";
import toothIcon2 from "./../../assets/icons/tooth-icons/cavity.png";
import toothIcon3 from "./../../assets/icons/tooth-icons/crown.png";
import toothIcon4 from "./../../assets/icons/tooth-icons/golden-crown.png";
import toothIcon5 from "./../../assets/icons/tooth-icons/implant.png";
import "./Home.scss";

const Home = () => {
    useEffect(() => {
        document.title = "Novozub | Zubní klinika v Kolíně";

        document.querySelectorAll(".js-service").forEach((el) => {
            document.addEventListener("scroll", () => {
                const serviceRect = el.getBoundingClientRect().top;
                if (serviceRect < window.innerHeight - 100) {
                    el.classList.add("service--active");
                } else {
                    el.classList.remove("service--active");
                }
            });
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

    const { t } = useTranslation();

    return (
        <section className="home">
            <div className="home__top">
                <HomeCustomBg />
                <h2>{t("home.title")}</h2>
                <p>{t("home.secondary_title")}</p>
                <div className="btn-container">
                    <NavLink
                        className="home__book-btn js-book-btn"
                        to="/appointment"
                    >
                        {t("nav.appointment")}
                    </NavLink>
                    <NavLink className="services-btn" to="/services">
                        {t("home.services_btn")}
                    </NavLink>
                </div>
            </div>
            <h2 className="home__services-title">{t("nav.services")}</h2>
            <div className="home__services">
                <div className="home__service js-service">
                    <img
                        width={90}
                        src={toothIcon1}
                        alt="Preventivní stomatologie"
                    />
                    <div>
                        <h4>{t("nav.service_1")}</h4>
                        <p>{t("nav.service_desc_1")}</p>
                    </div>
                </div>
                <div className="home__service js-service">
                    <img width={90} src={toothIcon2} alt="Dentální hygiena" />
                    <div>
                        <h4>{t("nav.service_2")}</h4>
                        <p>{t("nav.service_desc_2")}</p>
                    </div>
                </div>
                <div className="home__service js-service">
                    <img width={90} src={toothIcon3} alt="Parodontologie" />
                    <div>
                        <h4>{t("nav.service_3")}</h4>
                        <p>{t("nav.service_desc_3")}</p>
                    </div>
                </div>
                <div className="home__service js-service">
                    <img
                        width={90}
                        src={toothIcon4}
                        alt="Dětská stomatologie"
                    />
                    <div>
                        <h4>{t("nav.service_4")}</h4>
                        <p>{t("nav.service_desc_4")}</p>
                    </div>
                </div>
                <div className="home__service js-service">
                    <img
                        width={90}
                        src={toothIcon5}
                        alt="Fotokompozitní výplně"
                    />
                    <div>
                        <h4>{t("nav.service_5")}</h4>
                        <p>{t("nav.service_desc_5")}</p>
                    </div>
                </div>
                <div className="home__service js-service">
                    <NavLink className="view-more" to="/services">
                        {t("home.view_more_btn")}
                    </NavLink>
                </div>
            </div>
            <CustomDivider />
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
        </section>
    );
};

export default Home;
