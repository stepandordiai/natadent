import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";
import PageTitle from "../../components/PageTitle/PageTitle";
import "./Appointment.scss";

const Appointment = () => {
	const { t } = useTranslation();

	return (
		<>
			<Helmet>
				<title>{t("appointment_title")} / Prozubik</title>
				<link rel="canonical" href="https://prozubik.cz/appointment" />
			</Helmet>
			<PageTitle title={t("appointment_title")} />
			<iframe
				className="google-calendar"
				src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ3y2lhQh_lmF5IRVbwctdxTpTw3L5Z9byjt-CaslzDSQWXseEr4VGM5vjAcmNq700Aivq-wSg2x?gv=true"
				loading="lazy"
			></iframe>
		</>
	);
};

export default Appointment;
