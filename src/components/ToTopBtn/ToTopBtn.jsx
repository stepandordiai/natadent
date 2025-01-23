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
            ".to-top-btn div"
        ).style.background = `conic-gradient(rgb(100, 218, 212) ${scrollValue}%, transparent 0%)`;
    };

    addEventListener("scroll", () => {
        scrollPercentage();
        if (document.documentElement.scrollTop > 300) {
            document
                .querySelector(".to-top-btn")
                .classList.add("to-top-btn--translate");
        } else {
            document
                .querySelector(".to-top-btn")
                .classList.remove("to-top-btn--translate");
        }
    });

    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }

    return (
        <div className="to-top-btn" onClick={scrollToTop}>
            <div>
                <span>
                    <img src={upArrowIcon} alt="Up arrow" />
                </span>
            </div>
        </div>
    );
};

export default ToTopBtn;
