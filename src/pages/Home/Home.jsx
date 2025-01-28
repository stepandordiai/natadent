import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./Home.scss";
import HomeCustomBg from "../../components/HomeCustomBg/HomeCustomBg";

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
        </section>
    );
};

export default Home;
