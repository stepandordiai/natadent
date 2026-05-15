import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import Container from "@/components/Container/Container";
import Breadcrumbs from "@/components/common/Breadcrumbs/Breadcrumbs";
import { BASE_URL } from "@/lib/constants";
import SmileGalleryClient from "./SmileGalleryClient";
import "./styles.scss";

export async function generateMetadata(): Promise<Metadata> {
	const t = await getTranslations();

	return {
		title: `${t("smile_gallery_title")} | Natadent`,
		description:
			"Podívejte se na ukázky proměn našich pacientů v Galerii úsměvů. Skutečné výsledky profesionální stomatologické péče na klinice Natadent.",
		alternates: {
			canonical: `${BASE_URL}/cs/galerie-usmevu`,
		},
	};
}

export default async function SmileGallery() {
	const t = await getTranslations();

	return (
		<main className="smile-gallery">
			<Container>
				<Breadcrumbs title={t("smile_gallery_title")} />
				<div className="smile-gallery-wrapper">
					<SmileGalleryClient />
				</div>
			</Container>
		</main>
	);
}
