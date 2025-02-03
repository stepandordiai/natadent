import { useEffect } from "react";
import PageTitle from "../../components/PageTitle/PageTitle";
import CustomDivider from "../../components/CustomDivider/CustomDivider";

import photo1 from "./../../assets/team/1.jpg";
import photo2 from "./../../assets/team/2.jpg";
import photo3 from "./../../assets/team/3.jpg";
import photo4 from "./../../assets/team/4.jpg";
import photo5 from "./../../assets/team/5.jpg";

import "./AboutUs.scss";

const AboutUs = () => {
    useEffect(() => {
        document.title = "Novozub | About us";

        document.querySelectorAll(".img-ranger").forEach((ranger, index) => {
            ranger.addEventListener("input", () => {
                const rangesValue = document.querySelectorAll(".img-ranger");
                const rangeImages = document.querySelectorAll(".img-range");
                const rangeLines = document.querySelectorAll(".line");
                rangeImages[index].style.setProperty(
                    "--x-axis",
                    rangesValue[index].value + "%"
                );
                rangeLines[index].style.setProperty(
                    "--x-line-axis",
                    rangesValue[index].value + "%"
                );
            });
        });
    }, []);

    return (
        <section className="about-us">
            <PageTitle activeLink="Home" title="About us" />
            <h3 className="about-us__team-title">Our team</h3>
            <div className="about-us__team-grid">
                <div className="team-card">
                    <img src={photo1} alt="Photo" />
                    <div>
                        <p>Name</p>
                        <p>Position</p>
                    </div>
                </div>
                <div className="team-card">
                    <img src={photo2} alt="Photo" />
                    <div>
                        <p>Name</p>
                        <p>Position</p>
                    </div>
                </div>
                <div className="team-card">
                    <img src={photo3} alt="Photo" />
                    <div>
                        <p>Name</p>
                        <p>Position</p>
                    </div>
                </div>
                <div className="team-card">
                    <img src={photo4} alt="Photo" />
                    <div>
                        <p>Name</p>
                        <p>Position</p>
                    </div>
                </div>
                <div className="team-card">
                    <img src={photo5} alt="Photo" />
                    <div>
                        <p>Name</p>
                        <p>Position</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;
