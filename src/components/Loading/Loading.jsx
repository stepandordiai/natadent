import "./Loading.scss";
import logoIcon from "./../../assets/logo/tooth.png";
import { useEffect } from "react";

const Loading = () => {
    useEffect(() => {
        // document.querySelector(".home-img-bg__wrapper").style.display = "none";

        document.querySelector(".popo").addEventListener("animationend", () => {
            document.body.classList.add("body--active");

            document.querySelector(".img-bg__wrapper").style.display = "none";

            // document.querySelector(".home-img-bg__wrapper").style.display =
            // "initial";
        });
    }, []);

    return (
        <>
            <div className="img-bg__wrapper">
                <div className="popo">
                    <img className="img-bg" src={logoIcon} alt="" />
                </div>
            </div>
        </>
    );
};

export default Loading;
