import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import HomeCustomBg from "../../components/HomeCustomBg/HomeCustomBg";
import toothIcon1 from "./../../assets/icons/tooth-icons/braces.png";
import toothIcon2 from "./../../assets/icons/tooth-icons/cavity.png";
import toothIcon3 from "./../../assets/icons/tooth-icons/crown.png";
import toothIcon4 from "./../../assets/icons/tooth-icons/golden-crown.png";
import toothIcon5 from "./../../assets/icons/tooth-icons/implant.png";
import toothIcon6 from "./../../assets/icons/tooth-icons/tooth-gum.png";
import toothIcon7 from "./../../assets/icons/tooth-icons/tooth-xray-spot.png";
import toothIcon8 from "./../../assets/icons/tooth-icons/tooth.png";
import "./Home.scss";

const Home = () => {
    useEffect(() => {
        document.querySelector(".js-book-btn").addEventListener("click", () => {
            document
                .querySelector(".appointment-popup")
                .classList.add("appointment-popup--active");
        });
    }, []);

    return (
        <section className="home">
            <div className="home__top">
                <HomeCustomBg />
                <h2>We care for your smile</h2>
                <p>Dental clinic in Kolin</p>
                <div className="btn-container">
                    <button className="home__book-btn js-book-btn">
                        Book an appointment
                    </button>
                    <NavLink className="services-btn" to="/services">
                        View services
                    </NavLink>
                </div>
            </div>
            <h2 className="home__services-title">Services</h2>
            <div className="home__services">
                <div className="home__service">
                    <img width={90} src={toothIcon1} alt="" />
                    <div>
                        <h4>Oral Hygienist</h4>
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
                        <h4>Teet Cleaning</h4>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Beatae libero at sed soluta inventore labore
                            cupiditate
                        </p>
                    </div>
                </div>
                <div className="home__service">
                    <NavLink className="view-more" to="/services">
                        View more
                    </NavLink>
                </div>
            </div>
        </section>
    );
};

export default Home;
