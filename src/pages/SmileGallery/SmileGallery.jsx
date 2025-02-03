import { useEffect } from "react";

import before1 from "./../../assets/smiles/before1.png";
import after1 from "./../../assets/smiles/after1.png";

import before2 from "./../../assets/smiles/before2.png";
import after2 from "./../../assets/smiles/after2.png";

import before3 from "./../../assets/smiles/before3.png";
import after3 from "./../../assets/smiles/after3.png";

import before4 from "./../../assets/smiles/before4.png";
import after4 from "./../../assets/smiles/after4.png";

import before5 from "./../../assets/smiles/before5.png";
import after5 from "./../../assets/smiles/after5.png";

import before6 from "./../../assets/smiles/before6.png";
import after6 from "./../../assets/smiles/after6.png";

import "./SmileGallery.scss";
import PageTitle from "../../components/PageTitle/PageTitle";

const SmileGallery = () => {
    useEffect(() => {
        document.title = "Smile gallery";

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
        <section className="smile-gallery">
            <PageTitle activeLink="Home" title="Smile gallery" />
            <h3 className="about-us__gallery-title">Smile transformations</h3>
            <div className="about-us__gallery-grid">
                <div className="smile-wrapper">
                    <img src={after1} alt="Smile after" />
                    <img
                        className="img-range"
                        src={before1}
                        alt="Smile before"
                    />
                    <input
                        className="img-ranger"
                        type="range"
                        min={0}
                        max={100}
                        defaultValue={50}
                    />
                    <div className="line"></div>
                </div>
                <div className="smile-wrapper">
                    <img src={after2} alt="Smile after" />
                    <img
                        className="img-range"
                        src={before2}
                        alt="Smile before"
                    />
                    <input
                        className="img-ranger"
                        type="range"
                        min={0}
                        max={100}
                        defaultValue={50}
                    />
                    <div className="line"></div>
                </div>
                <div className="smile-wrapper">
                    <img src={after3} alt="Smile after" />
                    <img
                        className="img-range"
                        src={before3}
                        alt="Smile before"
                    />
                    <input
                        className="img-ranger"
                        type="range"
                        min={0}
                        max={100}
                        defaultValue={50}
                    />
                    <div className="line"></div>
                </div>
                <div className="smile-wrapper">
                    <img src={after4} alt="Smile after" />
                    <img
                        className="img-range"
                        src={before4}
                        alt="Smile before"
                    />
                    <input
                        className="img-ranger"
                        type="range"
                        min={0}
                        max={100}
                        defaultValue={50}
                    />
                    <div className="line"></div>
                </div>
                <div className="smile-wrapper">
                    <img src={after5} alt="Smile after" />
                    <img
                        className="img-range"
                        src={before5}
                        alt="Smile before"
                    />
                    <input
                        className="img-ranger"
                        type="range"
                        min={0}
                        max={100}
                        defaultValue={50}
                    />
                    <div className="line"></div>
                </div>
                <div className="smile-wrapper">
                    <img src={after6} alt="Smile after" />
                    <img
                        className="img-range"
                        src={before6}
                        alt="Smile before"
                    />
                    <input
                        className="img-ranger"
                        type="range"
                        min={0}
                        max={100}
                        defaultValue={50}
                    />
                    <div className="line"></div>
                </div>
            </div>
        </section>
    );
};

export default SmileGallery;
