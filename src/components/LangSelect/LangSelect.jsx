import { useEffect } from "react";
import i18n from "i18next";
import "./LangSelect.scss";

const LangSelect = () => {
    useEffect(() => {
        // Function that change language

        const handleChangeLanguage = (lng) => {
            i18n.changeLanguage(lng);

            // Active state for language options

            document
                .querySelectorAll(".lang-select__option")
                .forEach((option) => {
                    if (option.dataset.value === lng) {
                        option.classList.add("lang-select__option--active");
                    } else {
                        option.classList.remove("lang-select__option--active");
                    }
                });
        };

        document.querySelectorAll(".lang-select").forEach((select) => {
            const selectBtn = select.querySelector(".lang-select__btn");
            const selectList = select.querySelector(".lang-select__list");
            const selectOptions = selectList.querySelectorAll(
                ".lang-select__option"
            );
            const selectInput = document.querySelector(".lang-select__input");

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
                    // TODO:
                    e.stopPropagation();
                    document.querySelector(
                        ".lang-select__btn-value"
                    ).textContent = option.textContent;
                    selectInput.value = option.dataset.value;
                    handleChangeLanguage(selectInput.value);
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

    return (
        <div className="lang-select">
            <button className="lang-select__btn">
                <span className="lang-select__btn-value">CZ</span>
                <div className="lang-select__btn-icon"></div>
            </button>
            <ul className="lang-select__list">
                <li
                    className="lang-select__option lang-select__option--active"
                    data-value="cz"
                >
                    <span>CZ</span>
                    <img
                        width={20}
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Flag_of_the_Czech_Republic.svg/383px-Flag_of_the_Czech_Republic.svg.png"
                        alt="CZ"
                    />
                </li>
                <li className="lang-select__option" data-value="ua">
                    <span>UA</span>
                    <img
                        width={20}
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Flag_of_Ukraine.svg/383px-Flag_of_Ukraine.svg.png"
                        alt="UA"
                    />
                </li>
                <li className="lang-select__option" data-value="en">
                    <span>EN</span>
                    <img
                        width={20}
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Flag_of_the_United_States_%28Pantone%29.svg/383px-Flag_of_the_United_States_%28Pantone%29.svg.png"
                        alt="EN"
                    />
                </li>
            </ul>
            <input
                className="lang-select__input"
                type="text"
                defaultValue="cz"
            />
        </div>
    );
};

export default LangSelect;
