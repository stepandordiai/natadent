import { NavLink } from "react-router-dom";
import HomeCustomBg from "../../components/HomeCustomBg/HomeCustomBg";
import toothIcon1 from "./../../assets/icons/tooth-icons/braces.png";
import toothIcon2 from "./../../assets/icons/tooth-icons/cavity.png";
import "./Home.scss";

const Home = () => {
    return (
        <section className="home">
            <div className="home__top">
                <HomeCustomBg />
                <h2>We care for your smile</h2>
                <p>Dental clinic in Kolin</p>
                <div className="btn-container">
                    <NavLink
                        className="home__book-btn js-book-btn"
                        to="/appointment"
                    >
                        Book an appointment
                    </NavLink>
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
