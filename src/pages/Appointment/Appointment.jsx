import { useEffect } from "react";
import PageTitle from "../../components/PageTitle/PageTitle";
import { useTranslation } from "react-i18next";
import "./Appointment.scss";

const Appointment = () => {
    const { t } = useTranslation();

    useEffect(() => {
        document.title = `${t("appointment_title")} | Prozubik`;
    }, [t]);

    return (
        <>
            <PageTitle title={t("appointment_title")} />
            <iframe
                className="google-calendar"
                src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ3y2lhQh_lmF5IRVbwctdxTpTw3L5Z9byjt-CaslzDSQWXseEr4VGM5vjAcmNq700Aivq-wSg2x?gv=true"
            ></iframe>
        </>
    );
};

export default Appointment;
