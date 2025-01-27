import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./Home.scss";

const Home = () => {
    useEffect(() => {
        document.querySelector(".js-book-btn").addEventListener("click", () => {
            document
                .querySelector(".appointment-popup")
                .classList.add("appointment-popup--active");
        });
        const grid = document.querySelector(".home__grid");

        grid.childNodes.forEach((child, index) => {
            setTimeout(() => {
                child.classList.add("child--active");
            }, 50 * index);
        });
    }, []);

    return (
        <section className="home">
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
            <div className="home__grid">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </section>
    );
};

export default Home;
