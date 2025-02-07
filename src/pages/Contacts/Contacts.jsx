import PageTitle from "../../components/PageTitle/PageTitle";
import CustomDivider from "../../components/CustomDivider/CustomDivider";
import { useEffect } from "react";
import phoneIcon from "./../../assets/icons/phone-call.png";
import emailIcon from "./../../assets/icons/mail.png";
import pinIcon from "./../../assets/icons/pin.png";
import "./Contacts.scss";

const Contacts = () => {
    useEffect(() => {
        document.title = "Kontakty";

        const contactsLabels = document.querySelectorAll(
            ".contacts-form__label"
        );

        document
            .querySelectorAll(".js-contacts-form__input")
            .forEach((el, index) => {
                el.addEventListener("input", () => {
                    if (el.value) {
                        contactsLabels[index].classList.add(
                            "contacts-form__label--active"
                        );
                    } else {
                        contactsLabels[index].classList.remove(
                            "contacts-form__label--active"
                        );
                    }
                });
            });

        // Listener for multiple custom selectors

        document.querySelectorAll(".custom-select").forEach((select) => {
            const selectBtn = select.querySelector(".custom-select__btn");
            const selectList = select.querySelector(".custom-select__list");
            const selectOptions = selectList.querySelectorAll(
                ".custom-select__option"
            );
            const selectOption = document.querySelector(
                ".custom-select__input"
            );

            selectBtn.addEventListener("click", (e) => {
                // Prevent from submitting a form
                e.preventDefault();
                selectList.classList.toggle("custom-select__list--visible");
                selectBtn.classList.add("custom-select__btn--active");
            });

            selectOptions.forEach((option) => {
                option.addEventListener("click", (e) => {
                    // TODO:
                    e.stopPropagation();
                    selectBtn.textContent = option.textContent;
                    selectBtn.focus();
                    selectOption.value = option.dataset.value;
                    selectList.classList.remove("custom-select__list--visible");
                });
            });

            document.addEventListener("click", (e) => {
                if (e.target !== selectBtn) {
                    selectBtn.classList.remove("custom-select__btn--active");
                    selectList.classList.remove("custom-select__list--visible");
                }
            });
        });
    }, []);

    return (
        <section className="contacts">
            <PageTitle activeLink="Úvod" title="Kontakty" />
            <p className="contacts__secondary-info">
                Máte dotaz nebo si potřebujete rezervovat termín? Jsme tu,
                abychom vám pomohli. Kontaktujte nás prostřednictvím formuláře,
                telefonu nebo e-mailu a my vám rádi pomůžeme.
            </p>
            <div className="contacts-details">
                <div>
                    <img
                        className="contacts__email-img"
                        src={phoneIcon}
                        alt="Phone"
                    />
                    <p className="contacts__phone">Telefonní číslo</p>
                    <a
                        className="contacts__phone-link"
                        href="tel:+420722001016"
                    >
                        +420 722 001 016
                    </a>
                </div>
                <div>
                    <img
                        className="contacts__email-img"
                        src={emailIcon}
                        alt="E-mail"
                    />
                    <p className="contacts__email">E-mail</p>
                    <a
                        className="contacts__email-link"
                        href="mailto:novozubcz@gmail.com"
                    >
                        novozubcz@gmail.com
                    </a>
                </div>
                <div>
                    <img
                        className="contacts__email-img"
                        src={pinIcon}
                        alt="Address"
                    />
                    <p className="contacts__address">Adresa</p>
                    <a className="contacts__email-link" href="">
                        Pod Hroby 271/271 Kolín IV
                    </a>
                    <a className="contacts-details__address-btn" href="">
                        Navštivte nás na Googlu
                    </a>
                </div>
            </div>
            <CustomDivider />
            <h3 className="contacts__appointment-title">
                Rezervujte si termín
            </h3>
            <form
                className="contacts-form"
                action="mailto:novozubcz@gmail.com"
                method="post"
                encType="text/plain"
            >
                <div className="contacts-form__inputs">
                    <div className="contacts-form__input-wrapper">
                        <label className="contacts-form__label">Jméno</label>
                        <input
                            className="contacts-form__input  js-contacts-form__input"
                            type="text"
                            name="First name"
                        />
                    </div>
                    <div className="contacts-form__input-wrapper">
                        <label className="contacts-form__label">Příjmení</label>
                        <input
                            className="contacts-form__input  js-contacts-form__input"
                            type="text"
                            name="Last name"
                        />
                    </div>
                </div>
                <div className="contacts-form__inputs">
                    <div className="contacts-form__input-wrapper">
                        <label className="contacts-form__label">E-mail</label>
                        <input
                            className="contacts-form__input js-contacts-form__input"
                            type="text"
                            name="Email"
                        />
                    </div>
                    <div className="contacts-form__input-wrapper">
                        <label className="contacts-form__label">
                            Telefonní číslo
                        </label>
                        <input
                            className="contacts-form__input  js-contacts-form__input"
                            type="text"
                            name="Phone number"
                        />
                    </div>
                </div>

                {/* Custom select */}

                <div className="custom-select">
                    <button className="custom-select__btn">
                        Vybrat službu
                    </button>
                    <ul className="custom-select__list">
                        <li
                            className="custom-select__option"
                            data-value="Not selected"
                        >
                            Vybrat službu
                        </li>
                        <li
                            className="custom-select__option"
                            data-value="Oral Hygienist"
                        >
                            Preventivní stomatologie
                        </li>
                        <li
                            className="custom-select__option"
                            data-value="Teeth Cleaning"
                        >
                            Dentální hygiena
                        </li>
                        <li
                            className="custom-select__option"
                            data-value="Care Advice"
                        >
                            Parodontologie
                        </li>
                        <li
                            className="custom-select__option"
                            data-value="Dental Care"
                        >
                            Dětská stomatologie
                        </li>
                        <li
                            className="custom-select__option"
                            data-value="Tooth Protection"
                        >
                            Fotokompozitní výplně
                        </li>
                        <li
                            className="custom-select__option"
                            data-value="Whitening Teeth"
                        >
                            Endodoncie
                        </li>
                        <li
                            className="custom-select__option"
                            data-value="Dental Implants"
                        >
                            Protetická stomatologie
                        </li>
                        <li
                            className="custom-select__option"
                            data-value="Oral Surgery"
                        >
                            Dentoalveolární chirurgie
                        </li>
                        <li
                            className="custom-select__option"
                            data-value="Oral Surgery"
                        >
                            Implantologie
                        </li>
                    </ul>
                    <input
                        className="custom-select__input"
                        type="text"
                        name="Department"
                        defaultValue=""
                    />
                </div>
                <input type="date" defaultValue="2024-12-12" name="Date" />
                <input type="time" defaultValue="12:00" name="Time" />
                <button className="contacts-form__btn" type="submit">
                    Poslat
                </button>
            </form>
            <CustomDivider />
            <iframe
                className="contacts__google-map"
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5126.647298667424!2d15.214303!3d50.024031!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470c153bee9daf87%3A0xc91ccf8d204d4cb!2sPod%20Hroby%20271%2F271%2C%20280%2002%20Kol%C3%ADn%20IV!5e0!3m2!1scs!2scz!4v1738164855741!5m2!1scs!2scz"
                loading="lazy"
            ></iframe>
        </section>
    );
};

export default Contacts;
