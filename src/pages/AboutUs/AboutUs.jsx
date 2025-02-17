import { useEffect } from "react";
import PageTitle from "../../components/PageTitle/PageTitle";
import { useTranslation } from "react-i18next";

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
        </section>
    );
};

export default AboutUs;
