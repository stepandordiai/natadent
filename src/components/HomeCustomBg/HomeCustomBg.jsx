import { useEffect } from "react";
import "./HomeCustomBg.scss";

const HomeCustomBg = () => {
    useEffect(() => {
        const customBgElements = document.querySelectorAll(
            ".home__custom-bg div"
        );

        customBgElements.forEach((element, index) => {
            setTimeout(() => {
                element.classList.add("element--active");
            }, 50 * index);
        });
    }, []);
    return (
        <div className="home__custom-bg">
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
    );
};

export default HomeCustomBg;
