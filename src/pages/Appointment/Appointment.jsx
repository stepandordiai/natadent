import PageTitle from "../../components/PageTitle/PageTitle";
import "./Appointment.scss";

const Contact = () => {
    return (
        <section className="contact">
            <PageTitle
                activeLink="Home"
                link="Appointment"
                title="Appointment"
            />
            <iframe
                src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ3y2lhQh_lmF5IRVbwctdxTpTw3L5Z9byjt-CaslzDSQWXseEr4VGM5vjAcmNq700Aivq-wSg2x?gv=true"
                className="google-calendar"
            ></iframe>
        </section>
    );
};

export default Contact;
