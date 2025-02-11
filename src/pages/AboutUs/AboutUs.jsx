import { useEffect } from "react";
import PageTitle from "../../components/PageTitle/PageTitle";
import { useTranslation } from "react-i18next";

import photo1 from "./../../assets/team/1.jpg";
import photo2 from "./../../assets/team/2.jpg";
import photo3 from "./../../assets/team/3.jpg";
import photo4 from "./../../assets/team/4.jpg";
import photo5 from "./../../assets/team/5.jpg";

import "./AboutUs.scss";

const AboutUs = () => {
    const { t } = useTranslation();

    useEffect(() => {
        document.title = t("about_us_title");
    }, [t]);

    useEffect(() => {
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
            <PageTitle title={t("about_us_title")} />
            <h3 className="about-us__team-title">
                {t("about_us.our_team_title")}
            </h3>
            <div className="about-us__team-grid">
                <div className="team-card">
                    <img src={photo1} alt="Photo" />
                    <div>
                        <p>Jméno</p>
                        <p>Pozice</p>
                    </div>
                </div>
                <div className="team-card">
                    <img src={photo2} alt="Photo" />
                    <div>
                        <p>Jméno</p>
                        <p>Pozice</p>
                    </div>
                </div>
                <div className="team-card">
                    <img src={photo3} alt="Photo" />
                    <div>
                        <p>Jméno</p>
                        <p>Pozice</p>
                    </div>
                </div>
                <div className="team-card">
                    <img src={photo4} alt="Photo" />
                    <div>
                        <p>Jméno</p>
                        <p>Pozice</p>
                    </div>
                </div>
                <div className="team-card">
                    <img src={photo5} alt="Photo" />
                    <div>
                        <p>Jméno</p>
                        <p>Pozice</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;
