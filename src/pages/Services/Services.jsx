import { useEffect } from "react";
import toothIcon1 from "./../../assets/icons/tooth-icons/braces.png";
import toothIcon2 from "./../../assets/icons/tooth-icons/cavity.png";
import toothIcon3 from "./../../assets/icons/tooth-icons/crown.png";
import toothIcon4 from "./../../assets/icons/tooth-icons/golden-crown.png";
import toothIcon5 from "./../../assets/icons/tooth-icons/implant.png";
import toothIcon6 from "./../../assets/icons/tooth-icons/tooth-gum.png";
import toothIcon7 from "./../../assets/icons/tooth-icons/tooth-xray-spot.png";
import toothIcon8 from "./../../assets/icons/tooth-icons/tooth.png";
import PageTitle from "../../components/PageTitle/PageTitle";
import "./Services.scss";

const Services = () => {
    useEffect(() => {
        document.title = "Služby";

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
    }, []);

    return (
        <section className="services">
            <PageTitle activeLink="Úvod" title="Služby" />
            <div className="services-grid">
                <div className="service js-service">
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
                <div className="service js-service">
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
                <div className="service js-service">
                    <img width={90} src={toothIcon3} alt="" />
                    <div>
                        <h4>Parodontologie</h4>
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
                        <h4>Dětská stomatologie</h4>
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
                        <h4>Fotokompozitní výplně</h4>
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
                        <h4>Endodoncie</h4>
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
                        <h4>Protetická stomatologie</h4>
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
                        <h4>Dentoalveolární chirurgie</h4>
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
                        <h4>Implantologie</h4>
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
