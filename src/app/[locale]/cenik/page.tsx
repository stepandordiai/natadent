import { getTranslations } from "next-intl/server";
import PriceListClient from "./PriceListClient";
import { Metadata } from "next";
import "./styles.scss";

export async function generateMetadata(): Promise<Metadata> {
	const t = await getTranslations();

	return {
		title: `${t("price_list_title")} | Natadent`,
		description:
			"Prohlédněte si aktuální ceník služeb zubní kliniky Natadent. Transparentní ceny za stomatologické výkony, dentální hygienu, implantáty a další ošetření.",
		alternates: {
			canonical: "https://www.natadent.cz/cenik",
		},
	};
}

export default function PriceList() {
	return <PriceListClient />;
}
