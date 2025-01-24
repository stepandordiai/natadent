import { useEffect } from "react";
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
            <div>We care for your smile</div>
            <p>Dental clinic in Kolin</p>
            <button className="home__book-btn js-book-btn">
                Book an appointment
            </button>
        </section>
    );
};

export default Home;
