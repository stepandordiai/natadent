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
			<main>
				<PageTitle title={t("appointment_title")} />
				<iframe
					className="google-calendar"
					src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ3uuYpyL9duefLEJ_UepwoN1bAWfeacLVVFS8cERNM0H2Hvu2F5S6yknLD5VKHcZxlDrGuPV9eA?gv=true"
				></iframe>
			</main>
		</>
	);
};

export default Appointment;
