import { useEffect } from "react";
import logoIcon from "./../../assets/logo/tooth.png";
import "./Loading.scss";

const Loading = () => {
    useEffect(() => {
        document
            .querySelector(".loading")
            .addEventListener("animationend", () => {
                document.body.classList.add("body--active");
                document.querySelector(".loading__wrapper").style.display =
                    "none";
            });
    }, []);

    return (
        <div className="loading__wrapper">
            <div className="loading">
                <img className="loading__logo-icon" src={logoIcon} alt="Logo" />
            </div>
        </div>
    );
};

export default Loading;
