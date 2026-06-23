import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import Container from "@/components/Container/Container";
import Breadcrumbs from "@/components/common/Breadcrumbs/Breadcrumbs";
import { BASE_URL } from "@/lib/constants";
import SmileGalleryClient from "./SmileGalleryClient";
import { routing } from "@/i18n/routing";
import "./styles.scss";

const page = "galerie-usmevu";

export async function generateMetadata({
	params,
}: {
	params: Promise<{ locale: string }>;
}): Promise<Metadata> {
	const { locale } = await params;
	const t = await getTranslations();

	const languages = Object.fromEntries(
		routing.locales.map((l) => [l, `${BASE_URL}/${l}/${page}`]),
	);

	return {
		title: `${t("smile_gallery_title")}`,
		description:
			"Podívejte se na ukázky proměn našich pacientů v Galerii úsměvů. Skutečné výsledky profesionální stomatologické péče na klinice Natadent.",
		alternates: {
			canonical: `${BASE_URL}/${locale}/${page}`,
			languages: {
				...languages,
				"x-default": `${BASE_URL}/${routing.defaultLocale}/${page}`,
			},
		},
	};
}

export default async function SmileGallery({
	params,
}: {
	params: Promise<{ locale: string }>;
}) {
	const t = await getTranslations();
	const { locale } = await params;

	return (
		<main className="smile-gallery">
			<Container>
				<Breadcrumbs
					title={t("smile_gallery_title")}
					url={`/${locale}/${page}`}
				/>

				<h1 className="page__title">{t("smile_gallery_title")}</h1>
				<div className="smile-gallery-wrapper">
					<SmileGalleryClient />
				</div>
			</Container>
		</main>
	);
}
