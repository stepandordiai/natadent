import Breadcrumbs from "@/components/common/Breadcrumbs/Breadcrumbs";
import Container from "@/components/Container/Container";
import { Link } from "@/i18n/navigation";
import { notFound } from "next/navigation";
import services from "@/data/services.json";
import { BASE_URL } from "@/lib/constants";
import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import "./styles.scss";

export async function generateMetadata({
	params,
}: {
	params: Promise<{ id: string }>;
}): Promise<Metadata> {
	const t = await getTranslations();
	const { id } = await params;

	return {
		title: "Naše klinika | Natadent",
		description: t("service.desc"),
		alternates: {
			canonical: `${BASE_URL}/cs/sluzby/${id}`,
		},
	};
}

export default async function ServicePage({
	params,
}: {
	params: Promise<{ id: string }>;
}) {
	const t = await getTranslations();

	const { id } = await params;

	const service = services.find((service) => String(service.id) === id);

	if (!service) {
		return notFound();
	}

	const currentIndex = services.findIndex(
		(service) => String(service.id) === id,
	);

	const nextService = services[(currentIndex + 1) % services.length];
	const prevService =
		currentIndex - 1 !== -1
			? services[currentIndex - 1]
			: services[services.length - 1];

	return (
		<main className="service-page">
			<Container>
				<Breadcrumbs title={service.name} previousPath={t("services_title")} />
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
	);
}
