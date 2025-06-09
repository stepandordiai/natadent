import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";
import PageTitle from "../../components/PageTitle/PageTitle";
import { useParams } from "react-router-dom";
import "./ServicePage.scss";

const ServicePage = ({ servicesData }) => {
	const { t } = useTranslation();

	const { id } = useParams();

	const service = servicesData.find((service) => service.id === id);

	return (
		<>
			<Helmet>
				<meta name="description" content={t(service.desc)} />
				<title>{t(service.name)} / Prozubik</title>
				<link rel="canonical" href={`https://prozubik.cz/service-page/${id}`} />
			</Helmet>
			<main className="service-page">
				<PageTitle title={t(service.name)} previousPath={t("services_title")} />
				<p className="coming-soon">{t("coming_soon")}</p>
			</main>
		</>
	);
};

export default ServicePage;
