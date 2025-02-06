import { useEffect } from "react";
import PageTitle from "../../components/PageTitle/PageTitle";
import "./Appointment.scss";

const Appointment = () => {
    useEffect(() => {
        document.title = "Termín";
    }, []);

    return (
        <section className="contact">
            <PageTitle activeLink="Úvod" title="Termín" />
            <iframe
                src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ3y2lhQh_lmF5IRVbwctdxTpTw3L5Z9byjt-CaslzDSQWXseEr4VGM5vjAcmNq700Aivq-wSg2x?gv=true"
                className="google-calendar"
            ></iframe>
        </section>
    );
};

export default Appointment;
