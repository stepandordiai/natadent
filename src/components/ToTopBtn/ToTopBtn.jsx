import upArrowIcon from "./../../assets/icons/up-arrows.png";
import "./ToTopBtn.scss";

const ToTopBtn = () => {
    const scrollPercentage = () => {
        let positionTop = document.documentElement.scrollTop;
        const calcHeight =
            // scrollHeight is a full page height
            // clientHeight is a window height
            document.documentElement.scrollHeight -
            document.documentElement.clientHeight;
        // Expression for calculating percent height of the page
        let scrollValue = Math.round((positionTop * 100) / calcHeight);
        document.querySelector(
            ".progress"
        ).style.background = `conic-gradient(var(--accent-clr) ${scrollValue}%, #fff 0%)`;
    };

    addEventListener("scroll", () => {
        scrollPercentage();

        if (document.documentElement.scrollTop > window.innerHeight) {
            document
                .querySelector(".to-top-btn")
                .classList.add("to-top-btn--active");
        } else {
            document
                .querySelector(".to-top-btn")
                .classList.remove("to-top-btn--active");
        }
    });

    function scrollOnToTopBtn() {
        window.scrollTo(0, 0);
    }

    return (
        <div className="to-top-btn" onClick={scrollOnToTopBtn}>
            <div className="progress">
                <div className="inner-to-top-btn">
                    <img src={upArrowIcon} alt="Up arrow" />
                </div>
            </div>
        </div>
    );
};

export default ToTopBtn;
