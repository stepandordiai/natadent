import "./BurgerBtn.scss";

const BurgerBtn = () => {
    function toggleBurger5() {
        document
            .querySelector(".burger-5")
            .classList.toggle("burger-5--active");
        document
            .querySelector(".burger-5__center-line")
            .classList.toggle("burger-5__center-line--active");
        document
            .querySelector(".header-bottom__grid")
            .classList.toggle("header-bottom__grid--active");
        document.querySelectorAll(".menu-item").forEach((item, index) => {
            setTimeout(() => {
                item.classList.toggle("menu-item--active");
            }, 100 * index);
        });
    }
    return (
        <div className="burger-btn__wrapper" onClick={toggleBurger5}>
            <span>menu</span>
            <div className="burger-5">
                <span className="burger-5__center-line"></span>
            </div>
        </div>
    );
};

export default BurgerBtn;
