import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";
import PageTitle from "../../components/PageTitle/PageTitle";
import Container from "../../components/Container/Container";
import "./Appointment.scss";

const Appointment = () => {
	const { t } = useTranslation();

	return (
		<>
			<Helmet>
				<meta
					name="description"
					content="Objednejte se jednoduše online na vyšetření či ošetření v zubní klinice Prozubik. Vyberte si termín, který vám vyhovuje, a získejte profesionální péči bez čekání."
				/>
				<title>{t("appointment_title")} / Prozubik</title>
				<link rel="canonical" href="https://prozubik.cz/appointment" />
			</Helmet>
			<main>
				<Container>
					<PageTitle title={t("appointment_title")} />
					<iframe
						className="google-calendar"
						src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ3uuYpyL9duefLEJ_UepwoN1bAWfeacLVVFS8cERNM0H2Hvu2F5S6yknLD5VKHcZxlDrGuPV9eA?gv=true"
					></iframe>
				</Container>
			</main>
		</>
	);
};

export default Appointment;
