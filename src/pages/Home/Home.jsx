import { NavLink } from "react-router-dom";
import HomeCustomBg from "../../components/HomeCustomBg/HomeCustomBg";
import toothIcon1 from "./../../assets/icons/tooth-icons/braces.png";
import toothIcon2 from "./../../assets/icons/tooth-icons/cavity.png";
import "./Home.scss";
import { useEffect } from "react";

const Home = () => {
    useEffect(() => {
        document.title = "Novozub | Dental clinic in Kolin";
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
            <h2 className="home__services-title">Services</h2>
            <div className="home__services">
                <div className="home__service">
                    <img width={90} src={toothIcon1} alt="" />
                    <div>
                        <h4>Preventivní stomatologie</h4>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Beatae libero at sed soluta inventore labore
                            cupiditate
                        </p>
                    </div>
                </div>
                <div className="home__service">
                    <img width={90} src={toothIcon2} alt="" />
                    <div>
                        <h4>Dentální hygiena</h4>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Beatae libero at sed soluta inventore labore
                            cupiditate
                        </p>
                    </div>
                </div>
                <div className="home__service">
                    <NavLink className="view-more" to="/services">
                        Zobrazit více
                    </NavLink>
                </div>
            </div>
        </section>
    );
};

export default Home;
