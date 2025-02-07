import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import HomeCustomBg from "../../components/HomeCustomBg/HomeCustomBg";
import toothIcon1 from "./../../assets/icons/tooth-icons/braces.png";
import toothIcon2 from "./../../assets/icons/tooth-icons/cavity.png";
import toothIcon3 from "./../../assets/icons/tooth-icons/crown.png";
import toothIcon4 from "./../../assets/icons/tooth-icons/golden-crown.png";
import toothIcon5 from "./../../assets/icons/tooth-icons/implant.png";
import "./Home.scss";
import CustomDivider from "../../components/CustomDivider/CustomDivider";

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

    return (
        <section className="home">
            <div className="home__top">
                <HomeCustomBg />
                <h2>Záleží nám na tvém úsměvu</h2>
                <p>Zubní klinika v Kolíně</p>
                <div className="btn-container">
                    <NavLink
                        className="home__book-btn js-book-btn"
                        to="/appointment"
                    >
                        Rezervujte si termín
                    </NavLink>
                    <NavLink className="services-btn" to="/services">
                        Zobrazit služby
                    </NavLink>
                </div>
            </div>
            <h2 className="home__services-title">Služby</h2>
            <div className="home__services">
                <div className="home__service js-service">
                    <img
                        width={90}
                        src={toothIcon1}
                        alt="Preventivní stomatologie"
                    />
                    <div>
                        <h4>Preventivní stomatologie</h4>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Beatae libero at sed soluta inventore labore
                            cupiditate
                        </p>
                    </div>
                </div>
                <div className="home__service js-service">
                    <img width={90} src={toothIcon2} alt="Dentální hygiena" />
                    <div>
                        <h4>Dentální hygiena</h4>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Beatae libero at sed soluta inventore labore
                            cupiditate
                        </p>
                    </div>
                </div>
                <div className="home__service js-service">
                    <img width={90} src={toothIcon3} alt="Parodontologie" />
                    <div>
                        <h4>Parodontologie</h4>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Beatae libero at sed soluta inventore labore
                            cupiditate
                        </p>
                    </div>
                </div>
                <div className="home__service js-service">
                    <img
                        width={90}
                        src={toothIcon4}
                        alt="Dětská stomatologie"
                    />
                    <div>
                        <h4>Dětská stomatologie</h4>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Beatae libero at sed soluta inventore labore
                            cupiditate
                        </p>
                    </div>
                </div>
                <div className="home__service js-service">
                    <img
                        width={90}
                        src={toothIcon5}
                        alt="Fotokompozitní výplně"
                    />
                    <div>
                        <h4>Fotokompozitní výplně</h4>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Beatae libero at sed soluta inventore labore
                            cupiditate
                        </p>
                    </div>
                </div>
                <div className="home__service js-service">
                    <NavLink className="view-more" to="/services">
                        Zobrazit více
                    </NavLink>
                </div>
            </div>
            <CustomDivider />
            <div className="faq">
                <div className="faq__title">FAQ</div>
                <div className="faq__list">
                    <div className="faq__item">
                        <button className="faq__btn js-faq__btn">
                            <span className="faq__btn-txt">Question</span>
                            <div className="faq__btn-icon"></div>
                        </button>
                        <div className="grid-dropdown">
                            <p className="grid-dropdown__details">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Aspernatur labore quas, odit
                                odio consequuntur magni, quia enim commodi
                                suscipit, animi nobis. Magnam saepe quis alias
                                dolorem perferendis, libero tempore temporibus!
                            </p>
                        </div>
                    </div>
                    <div className="faq__item">
                        <button className="faq__btn js-faq__btn">
                            <span className="faq__btn-txt">Question</span>
                            <div className="faq__btn-icon"></div>
                        </button>
                        <div className="grid-dropdown">
                            <p className="grid-dropdown__details">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Aspernatur labore quas, odit
                                odio consequuntur magni, quia enim commodi
                                suscipit, animi nobis. Magnam saepe quis alias
                                dolorem perferendis, libero tempore temporibus!
                            </p>
                        </div>
                    </div>
                    <div className="faq__item">
                        <button className="faq__btn js-faq__btn">
                            <span className="faq__btn-txt">Question</span>
                            <div className="faq__btn-icon"></div>
                        </button>
                        <div className="grid-dropdown">
                            <p className="grid-dropdown__details">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Aspernatur labore quas, odit
                                odio consequuntur magni, quia enim commodi
                                suscipit, animi nobis. Magnam saepe quis alias
                                dolorem perferendis, libero tempore temporibus!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home;
