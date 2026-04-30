"use client";

import Breadcrumbs from "@/components/common/Breadcrumbs/Breadcrumbs";
import Container from "@/components/Container/Container";
import { Link } from "@/i18n/navigation";
import { notFound } from "next/navigation";
import { useParams } from "next/navigation";
import { useTranslations } from "next-intl";
import services from "@/data/services.json";
import "./styles.scss";

const ServicePage = () => {
	const t = useTranslations();

	const { id } = useParams();

	const service = services.find((service) => service.id === id);

	if (!service) {
		return notFound();
	}

	const currentIndex = services.findIndex((service) => service.id === id);

	const nextService = services[(currentIndex + 1) % services.length];
	const prevService =
		currentIndex - 1 !== -1
			? services[currentIndex - 1]
			: services[services.length - 1];

	return (
		<>
			{/* <Helmet>
				<meta name="description" content={t(service.desc)} />
				<title>{t(service.name)} | Natadent</title>
				<link rel="canonical" href={`https://www.natadent.cz/sluzby/${id}`} />
			</Helmet> */}
			<main className="service-page">
				<Container>
					<Breadcrumbs
						title={service.name}
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
							<span>{prevService.name}</span>
						</Link>
						<Link
							className={"service-page__link"}
							href={`/sluzby/${nextService.id}`}
						>
							<span>
								<span>Next</span>
								<img width={20} height={20} src="/icons/next.png" alt="" />
							</span>
							<span>{nextService.name}</span>
						</Link>
					</div>
				</Container>
			</main>
		</>
	);
};

export default ServicePage;
