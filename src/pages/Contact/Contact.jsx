import PageTitle from "../../components/PageTitle/PageTitle";
import "./Contact.scss";

const Contact = () => {
    return (
        <section className="contact">
            <PageTitle activeLink="Home" link="Contact" title="Contact" />
            <iframe
                src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ3y2lhQh_lmF5IRVbwctdxTpTw3L5Z9byjt-CaslzDSQWXseEr4VGM5vjAcmNq700Aivq-wSg2x?gv=true"
                className="calendar"
                // frameBorder="0"
            ></iframe>
        </section>
    );
};

export default Contact;
