import { Metadata } from "next";
import Container from "@/components/Container/Container";
import Breadcrumbs from "@/components/common/Breadcrumbs/Breadcrumbs";
import { BASE_URL } from "@/lib/constants";
import { routing } from "@/i18n/routing";
import { getTranslations } from "next-intl/server";
import "./styles.scss";

const clinicImages = [
	"/gallery/01.jpg",
	"/gallery/02.jpg",
	"/gallery/03.jpg",
	"/gallery/04.jpg",
	"/gallery/05.jpg",
	"/gallery/06.jpg",
	"/gallery/07.jpg",
	"/gallery/08.jpg",
	"/gallery/09.jpg",
	"/gallery/10.jpg",
	"/gallery/11.jpg",
	"/gallery/12.jpg",
	"/gallery/13.jpg",
	"/gallery/14.jpg",
	"/gallery/15.jpg",
];

const page = "nase-klinika";

export async function generateMetadata({
	params,
}: {
	params: Promise<{ locale: string }>;
}): Promise<Metadata> {
	const { locale } = await params;
	const t = await getTranslations({ locale, namespace: "ourClinic.meta" });

	const languages = Object.fromEntries(
		routing.locales.map((l) => [l, `${BASE_URL}/${l}/${page}`]),
	);

	return {
		title: t("title"),
		description: t("description"),
		alternates: {
			canonical: `${BASE_URL}/${locale}/${page}`,
			languages: {
				...languages,
				"x-default": `${BASE_URL}/${routing.defaultLocale}/${page}`,
			},
		},
	};
}

export default async function OurClinic({
	params,
}: {
	params: Promise<{ locale: string }>;
}) {
	const { locale } = await params;
	const t = await getTranslations({ locale });

	return (
		<main>
			<Container>
				<Breadcrumbs title={t("nav.ourClinic")} url={`/${locale}/${page}`} />
				<h1 className="page__title">{t("ourClinic.heading")}</h1>
				<div className="our-clinic__masonry">
					{clinicImages.map((img, index) => {
						return (
							<div key={index} className="masonry__item">
								<div className="masonry__img-container">
									<img src={img} alt="" />
								</div>
							</div>
						);
					})}
				</div>
			</Container>
		</main>
	);
}
