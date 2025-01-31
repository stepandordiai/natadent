import PageTitle from "../../components/PageTitle/PageTitle";
import CustomDivider from "../../components/CustomDivider/CustomDivider";
import { useEffect } from "react";
import phoneIcon from "./../../assets/icons/phone-call.png";
import emailIcon from "./../../assets/icons/mail.png";
import pinIcon from "./../../assets/icons/pin.png";
import "./Contacts.scss";

const Contacts = () => {
    useEffect(() => {
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
    });

    return (
        <section className="contacts">
            <PageTitle activeLink="Home" link="Contacts" title="Contacts" />
            <div className="contacts-details">
                <div>
                    <img
                        className="contacts__email-img"
                        src={phoneIcon}
                        alt="Phone"
                    />
                    <p className="contacts__phone">Phone</p>
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
                        alt="Email"
                    />
                    <p className="contacts__email">Email</p>
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
                    <p className="contacts__address">Address</p>
                    <a className="contacts__email-link" href="">
                        Pod Hroby 271/271 Kolín IV
                    </a>
                    <a className="contacts-details__address-btn" href="">
                        Visit us on Google
                    </a>
                </div>
            </div>

            <CustomDivider />
            <h3 className="contacts__appointment-title">Make an appointment</h3>
            <form
                className="contacts-form"
                action="mailto:"
                method="post"
                encType="text/plain"
            >
                <div className="contacts-form__inputs">
                    <div className="contacts-form__input-wrapper">
                        <label className="contacts-form__label">
                            First name
                        </label>
                        <input
                            className="contacts-form__input  js-contacts-form__input"
                            type="text"
                        />
                    </div>
                    <div className="contacts-form__input-wrapper">
                        <label className="contacts-form__label">
                            Last name
                        </label>
                        <input
                            className="contacts-form__input  js-contacts-form__input"
                            type="text"
                        />
                    </div>
                </div>
                <div className="contacts-form__inputs">
                    <div className="contacts-form__input-wrapper">
                        <label className="contacts-form__label">Email</label>
                        <input
                            className="contacts-form__input js-contacts-form__input"
                            type="text"
                        />
                    </div>
                    <div className="contacts-form__input-wrapper">
                        <label className="contacts-form__label">
                            Phone number
                        </label>
                        <input
                            className="contacts-form__input  js-contacts-form__input"
                            type="text"
                        />
                    </div>
                </div>

                <select className="contacts-form__select" name="" id="">
                    <option value="">Choose service</option>
                    <option value="">1</option>
                    <option value="">2</option>
                    <option value="">3</option>
                    <option value="">4</option>
                </select>
                <input type="date" defaultValue="2024-12-12" />
                <input type="time" defaultValue="12:00" />
                <button className="contacts-form__btn" type="submit">
                    Book an appointment
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
