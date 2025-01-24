import { useEffect } from "react";
import closeIcon from "./../../assets/icons/close.png";
import "./AppointmentPopUp.scss";

const AppointmentPopUp = () => {
    function closePopUp() {
        document
            .querySelector(".appointment-popup")
            .classList.remove("appointment-popup--active");
    }

    useEffect(() => {
        const labels = document.querySelectorAll("label");

        document.querySelectorAll("input").forEach((el, index) => {
            el.addEventListener("input", () => {
                if (el.value) {
                    labels[index].classList.add("label--active");
                } else {
                    labels[index].classList.remove("label--active");
                }
            });
        });
    });

    return (
        <div className="appointment-popup">
            <div className="appointment-popup__header">
                <p>Make an appointment</p>
                <button onClick={closePopUp}>
                    <img width={20} src={closeIcon} alt="" />
                </button>
            </div>
            <form action="">
                <div>
                    <label>First name</label>
                    <input type="text" />
                </div>
                <div>
                    <label>Last name</label>
                    <input type="text" />
                </div>
                <div>
                    <label>Email</label>
                    <input type="text" />
                </div>
                <div>
                    <label>Phone number</label>
                    <input type="text" />
                </div>
                <select name="" id="">
                    <option value="">Choose service</option>
                    <option value="">1</option>
                    <option value="">2</option>
                    <option value="">3</option>
                    <option value="">4</option>
                </select>
                <input type="date" value="2024-12-12" />
                <input type="time" value="12:00" />
                <button type="submit">Book an appointment</button>
            </form>
        </div>
    );
};

export default AppointmentPopUp;
