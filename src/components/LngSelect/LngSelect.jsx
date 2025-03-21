import { useEffect } from "react";
import i18n from "i18next";
import "./LngSelect.scss";

const LangSelect = () => {
    useEffect(() => {
        // Function that change language

        const handleChangeLanguage = (lng) => {
            i18n.changeLanguage(lng);
        };

        document.querySelectorAll(".lang-select").forEach((select) => {
            const selectBtn = select.querySelector(".lang-select__btn");
            const selectList = select.querySelector(".lang-select__list");
            const selectOptions = selectList.querySelectorAll(
                ".lang-select__option"
            );

            selectBtn.addEventListener("click", (e) => {
                // Prevent from submitting a form
                e.preventDefault();
                selectList.classList.toggle("lang-select__list--visible");
                selectBtn.classList.toggle("lang-select__btn--active");
                document
                    .querySelector(".lang-select__btn-icon")
                    .classList.toggle("lang-select__btn-icon--active");
            });

            selectOptions.forEach((option) => {
                option.addEventListener("click", (e) => {
                    e.stopPropagation();
                    document.querySelector(
                        ".lang-select__btn-value"
                    ).textContent = option.textContent;
                    handleChangeLanguage(option.dataset.value);
                    selectBtn.classList.remove("lang-select__btn--active");
                    selectList.classList.remove("lang-select__list--visible");
                    document
                        .querySelector(".lang-select__btn-icon")
                        .classList.remove("lang-select__btn-icon--active");
                });
            });

            document.addEventListener("click", (e) => {
                if (e.target !== selectBtn) {
                    selectBtn.classList.remove("lang-select__btn--active");
                    selectList.classList.remove("lang-select__list--visible");
                    document
                        .querySelector(".lang-select__btn-icon")
                        .classList.remove("lang-select__btn-icon--active");
                }
            });
        });
    }, []);

    const lngStorage = localStorage.getItem("i18nextLng") || "cz";

    const selectBtnTxt = lngStorage.toUpperCase() || "CZ";

    const inactiveLngOption = "lang-select__option";
    const activeLngOption = "lang-select__option lang-select__option--active";

    return (
        <div className="lang-select">
            <button className="lang-select__btn">
                <span className="lang-select__btn-value">{selectBtnTxt}</span>
                <div className="lang-select__btn-icon"></div>
            </button>
            <ul className="lang-select__list">
                <li
                    className={
                        lngStorage === "cz"
                            ? activeLngOption
                            : inactiveLngOption
                    }
                    data-value="cz"
                >
                    <span>CZ</span>
                    <img
                        width={20}
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Flag_of_the_Czech_Republic.svg/383px-Flag_of_the_Czech_Republic.svg.png"
                        alt="CZ"
                    />
                </li>
                <li
                    className={
                        lngStorage === "ua"
                            ? activeLngOption
                            : inactiveLngOption
                    }
                    data-value="ua"
                >
                    <span>UA</span>
                    <img
                        width={20}
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Flag_of_Ukraine.svg/383px-Flag_of_Ukraine.svg.png"
                        alt="UA"
                    />
                </li>
                <li
                    className={
                        lngStorage === "en"
                            ? activeLngOption
                            : inactiveLngOption
                    }
                    data-value="en"
                >
                    <span>EN</span>
                    <img
                        width={20}
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Flag_of_the_United_States_%28Pantone%29.svg/383px-Flag_of_the_United_States_%28Pantone%29.svg.png"
                        alt="EN"
                    />
                </li>
            </ul>
        </div>
    );
};

export default LangSelect;
