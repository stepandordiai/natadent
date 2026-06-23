import { getTranslations } from "next-intl/server";
import PriceListClient from "./PriceListClient";
import { Metadata } from "next";
import { BASE_URL } from "@/lib/constants";
import { routing } from "@/i18n/routing";
import Breadcrumbs from "@/components/common/Breadcrumbs/Breadcrumbs";
import Container from "@/components/Container/Container";
import "./styles.scss";

const page = "cenik";

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
		title: t("price_list_title"),
		description:
			"Prohlédněte si aktuální ceník služeb zubní kliniky Natadent. Transparentní ceny za stomatologické výkony, dentální hygienu, implantáty a další ošetření.",
		alternates: {
			canonical: `${BASE_URL}/${locale}/cenik`,
			languages: {
				...languages,
				"x-default": `${BASE_URL}/${routing.defaultLocale}/${page}`,
			},
		},
	};
}

export default async function PriceList({
	params,
}: {
	params: Promise<{ locale: string }>;
}) {
	const { locale } = await params;
	const t = await getTranslations();

	return (
		<main className="price-list">
			<Container>
				<Breadcrumbs title={t("price_list_title")} url={`/${locale}/cenik`} />
				<h1 className="page__title">{t("price_list_title")}</h1>
				<PriceListClient />;
			</Container>
		</main>
	);
}
