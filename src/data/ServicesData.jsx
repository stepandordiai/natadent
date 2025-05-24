import { useTranslation } from "react-i18next";

const ServicesData = () => {
	const { t } = useTranslation();

	const servicesData = [
		{
			id: "dentistry",
			name: t("service_1"),
			desc: t("service_desc_1"),
		},
		{
			id: "prevention",
			name: t("service_2"),
			desc: t("service_desc_2"),
		},
		{
			id: "dental-hygiene",
			name: t("service_3"),
			desc: t("service_desc_3"),
		},
		{
			id: "dental-surgery",
			name: t("service_4"),
			desc: t("service_desc_4"),
		},
		{
			id: "complete-dental-reconstruction",
			name: t("service_5"),
			desc: t("service_desc_5"),
		},
		{
			id: "wisdom-teeth-extraction",
			name: t("service_6"),
			desc: t("service_desc_6"),
		},
		{
			id: "implantology",
			name: t("service_7"),
			desc: t("service_desc_7"),
		},
		{
			id: "periodontology",
			name: t("service_8"),
			desc: t("service_desc_8"),
		},
		{
			id: "endodontics",
			name: t("service_9"),
			desc: t("service_desc_9"),
		},
		{
			id: "orthodontics",
			name: t("service_10"),
			desc: t("service_desc_10"),
		},
		{
			id: "analgosedation-and-general-anesthesia",
			name: t("service_11"),
			desc: t("service_desc_11"),
		},
		{
			id: "pediatric-dentistry",
			name: t("service_12"),
			desc: t("service_desc_12"),
		},
		{
			id: "cutting-frenulums-in-the-mouths-of-infants",
			name: t("service_13"),
			desc: t("service_desc_13"),
		},
		{
			id: "teeth-whitening",
			name: t("service_14"),
			desc: t("service_desc_14"),
		},
		{
			id: "dental-laboratory",
			name: t("service_15"),
			desc: t("service_desc_15"),
		},
	];
	return servicesData;
};

export default ServicesData;
