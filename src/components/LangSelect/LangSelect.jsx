import { useEffect } from "react";
import i18n from "i18next";
import "./LangSelect.scss";

const LangSelect = () => {
    useEffect(() => {
        // Function that change language

        const handleChangeLanguage = (lang) => {
            i18n.changeLanguage(lang);
            // Active state for language options
            document
                .querySelectorAll(".lang-custom-select__option")
                .forEach((option) => {
                    if (option.dataset.value === lang) {
                        option.classList.add(
                            "lang-custom-select__option--active"
                        );
                    } else {
                        option.classList.remove(
                            "lang-custom-select__option--active"
                        );
                    }
                });
        };

        document.querySelectorAll(".lang-custom-select").forEach((select) => {
            const selectBtn = select.querySelector(".lang-custom-select__btn");
            const selectList = select.querySelector(
                ".lang-custom-select__list"
            );
            const selectOptions = selectList.querySelectorAll(
                ".lang-custom-select__option"
            );
            const selectInput = document.querySelector(
                ".lang-custom-select__input"
            );

            selectBtn.addEventListener("click", (e) => {
                // Prevent from submitting a form
                e.preventDefault();
                selectList.classList.toggle(
                    "lang-custom-select__list--visible"
                );
                selectBtn.classList.add("lang-custom-select__btn--active");
            });

            selectOptions.forEach((option) => {
                option.addEventListener("click", (e) => {
                    // TODO:
                    e.stopPropagation();
                    selectBtn.textContent = option.textContent;
                    selectBtn.focus();
                    selectInput.value = option.dataset.value;
                    handleChangeLanguage(selectInput.value);
                    selectList.classList.remove(
                        "lang-custom-select__list--visible"
                    );
                });
            });

            document.addEventListener("click", (e) => {
                if (e.target !== selectBtn) {
                    selectBtn.classList.remove(
                        "lang-custom-select__btn--active"
                    );
                    selectList.classList.remove(
                        "lang-custom-select__list--visible"
                    );
                }
            });
        });
    }, []);

    return (
        <>
            <div className="lang-custom-select">
                <button className="lang-custom-select__btn">CZ</button>
                <ul className="lang-custom-select__list">
                    <li
                        className="lang-custom-select__option lang-custom-select__option--active"
                        data-value="cz"
                    >
                        CZ{" "}
                        <img
                            width={20}
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Flag_of_the_Czech_Republic.svg/383px-Flag_of_the_Czech_Republic.svg.png"
                            alt=""
                        />
                    </li>
                    <li className="lang-custom-select__option" data-value="ua">
                        UA{" "}
                        <img
                            width={20}
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Flag_of_Ukraine.svg/383px-Flag_of_Ukraine.svg.png"
                            alt=""
                        />
                    </li>
                    <li className="lang-custom-select__option" data-value="en">
                        EN{" "}
                        <img
                            width={20}
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Flag_of_the_United_States_%28Pantone%29.svg/383px-Flag_of_the_United_States_%28Pantone%29.svg.png"
                            alt=""
                        />
                    </li>
                </ul>
                <input
                    className="lang-custom-select__input"
                    type="text"
                    defaultValue="cz"
                />
            </div>
        </>
    );
};

export default LangSelect;
