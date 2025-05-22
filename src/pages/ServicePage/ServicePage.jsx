import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";
import PageTitle from "../../components/PageTitle/PageTitle";
import { useParams } from "react-router-dom";
import "./ServicePage.scss";

const Service = () => {
	const { t } = useTranslation();

	const servicesData = [
		{
			name: t("service_1"),
			desc: t("service_desc_1"),
			path: "dentistry",
		},
		{
			name: t("service_2"),
			desc: t("service_desc_2"),
			path: "prevention",
		},
		{
			name: t("service_3"),
			desc: t("service_desc_3"),
			path: "dental-hygiene",
		},
		{
			name: t("service_4"),
			desc: t("service_desc_4"),
			path: "dental-surgery",
		},
		{
			name: t("service_5"),
			desc: t("service_desc_5"),
			path: "complete-dental-reconstruction",
		},
		{
			name: t("service_6"),
			desc: t("service_desc_6"),
			path: "wisdom-teeth-extraction",
		},
		{
			name: t("service_7"),
			desc: t("service_desc_7"),
			path: "implantology",
		},
		{
			name: t("service_8"),
			desc: t("service_desc_8"),
			path: "periodontology",
		},
		{
			name: t("service_9"),
			desc: t("service_desc_9"),
			path: "endodontics",
		},
		{
			name: t("service_10"),
			desc: t("service_desc_10"),
			path: "orthodontics",
		},
		{
			name: t("service_11"),
			desc: t("service_desc_11"),
			path: "analgosedation-and-general-anesthesia",
		},
		{
			name: t("service_12"),
			desc: t("service_desc_12"),
			path: "pediatric-dentistry",
		},
		{
			name: t("service_13"),
			desc: t("service_desc_13"),
			path: "cutting-frenulums-in-the-mouths-of-infants",
		},
		{
			name: t("service_14"),
			desc: t("service_desc_14"),
			path: "teeth-whitening",
		},
		{
			name: t("service_15"),
			desc: t("service_desc_15"),
			path: "dental-laboratory",
		},
	];

	const { id } = useParams();

	const service = servicesData.filter((service) => {
		return service.path === id;
	});

	return (
		<>
			<Helmet>
				<title>{service[0].name} / Prozubik</title>
				<link rel="canonical" href={`https://prozubik.cz/service-page/${id}`} />
			</Helmet>
			<div className="service-page">
				<PageTitle title={service[0].name} previousPath={t("services_title")} />
				<p className="coming-soon">{t("coming_soon")}</p>
			</div>
		</>
	);
};

export default Service;
