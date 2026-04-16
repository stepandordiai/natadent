import PageTitle from "@/components/PageTitle/PageTitle";
import Container from "@/components/Container/Container";
import { Link } from "@/i18n/navigation";
import { notFound } from "next/navigation";
import "./ServicePage.scss";

const ServicePage = ({ servicesData }) => {
	const { t } = useTranslation();

	const { id } = useParams();

	const service = servicesData.find((service) => service.id === id);

	if (!service) {
		return notFound();
	}

	const currentIndex = servicesData.findIndex((service) => service.id === id);

	const nextService = servicesData[(currentIndex + 1) % servicesData.length];
	const prevService =
		currentIndex - 1 !== -1
			? servicesData[currentIndex - 1]
			: servicesData[servicesData.length - 1];

	return (
		<>
			{/* <Helmet>
				<meta name="description" content={t(service.desc)} />
				<title>{t(service.name)} | Natadent</title>
				<link rel="canonical" href={`https://www.natadent.cz/sluzby/${id}`} />
			</Helmet> */}
			<main className="service-page">
				<Container>
					<PageTitle
						title={t(service.name)}
						previousPath={t("services_title")}
					/>
					<p className="coming-soon">{t("coming_soon")}</p>
					<div className="service-page__links">
						<Link
							className={"service-page__link"}
							href={`/sluzby/${prevService.id}`}
						>
							<span>
								<img width={20} height={20} src="/icons/back.png" alt="" />
								<span>Previous</span>
							</span>
							<span>{t(prevService.name)}</span>
						</Link>
						<Link
							className={"service-page__link"}
							href={`/sluzby/${nextService.id}`}
						>
							<span>
								<span>Next</span>
								<img width={20} height={20} src="/icons/next.png" alt="" />
							</span>
							<span>{t(nextService.name)}</span>
						</Link>
					</div>
				</Container>
			</main>
		</>
	);
};

export default ServicePage;
