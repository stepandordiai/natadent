import toothIcon1 from "./../../assets/icons/tooth-icons/braces.png";
import toothIcon2 from "./../../assets/icons/tooth-icons/cavity.png";
import toothIcon3 from "./../../assets/icons/tooth-icons/crown.png";
import toothIcon4 from "./../../assets/icons/tooth-icons/golden-crown.png";
import toothIcon5 from "./../../assets/icons/tooth-icons/implant.png";
import toothIcon6 from "./../../assets/icons/tooth-icons/tooth-gum.png";
import toothIcon7 from "./../../assets/icons/tooth-icons/tooth-xray-spot.png";
import toothIcon8 from "./../../assets/icons/tooth-icons/tooth.png";
import { NavLink } from "react-router-dom";
import nextIcon from "./../../assets/icons/next.png";
import "./Services.scss";
import { useEffect } from "react";

const Services = () => {
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
            const serviceRect = el.getBoundingClientRect().top;

            if (serviceRect < window.innerHeight - 100) {
                el.classList.add("service--active");
            } else {
                el.classList.remove("service--active");
            }
        });
    });

    return (
        <section className="services">
            <div className="title-container">
                <div>
                    <NavLink className="title-link" to="/">
                        Home <img width={20} src={nextIcon} alt="" />
                    </NavLink>
                    <p>
                        Services <img width={20} src={nextIcon} alt="" />
                    </p>
                </div>

                <h2>Services</h2>
            </div>
            <div className="services-grid">
                <div className="service js-service">
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
                <div className="service js-service">
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
                <div className="service js-service">
                    <img width={90} src={toothIcon3} alt="" />
                    <div>
                        <h4>Care Advice</h4>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Beatae libero at sed soluta inventore labore
                            cupiditate
                        </p>
                    </div>
                </div>
                <div className="service js-service">
                    <img width={90} src={toothIcon4} alt="" />
                    <div>
                        <h4>Dental Care</h4>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Beatae libero at sed soluta inventore labore
                            cupiditate
                        </p>
                    </div>
                </div>
                <div className="service js-service">
                    <img width={90} src={toothIcon5} alt="" />
                    <div>
                        <h4>Tooth Protection</h4>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Beatae libero at sed soluta inventore labore
                            cupiditate
                        </p>
                    </div>
                </div>
                <div className="service js-service">
                    <img width={90} src={toothIcon6} alt="" />
                    <div>
                        <h4>Whitening Teet</h4>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Beatae libero at sed soluta inventore labore
                            cupiditate
                        </p>
                    </div>
                </div>
                <div className="service js-service">
                    <img width={90} src={toothIcon7} alt="" />
                    <div>
                        <h4>Dental Implants</h4>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Beatae libero at sed soluta inventore labore
                            cupiditate
                        </p>
                    </div>
                </div>
                <div className="service js-service">
                    <img width={90} src={toothIcon8} alt="" />
                    <div>
                        <h4>Oral Surgery</h4>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Beatae libero at sed soluta inventore labore
                            cupiditate
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;
