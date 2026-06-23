import type { Metadata } from "next";
import Container from "@/components/Container/Container";
import Breadcrumbs from "@/components/common/Breadcrumbs/Breadcrumbs";
import { BASE_URL } from "@/lib/constants";
import "./styles.scss";
import { routing } from "@/i18n/routing";

const clinicImages = [
	"https://cdn.prod.website-files.com/67c64fb730bae54f87c547f8/67d349994688c248cc02cac3_Swish---Web-Res-012.jpg",
	"https://cdn.prod.website-files.com/67c64fb730bae54f87c547f8/67d349985e8134b65d85bfc3_Swish%20-%20Bridgeland-014.jpg",
	"https://cdn.prod.website-files.com/67c64fb730bae54f87c547f8/67d34998289e73914fad1dd1_Swish%20-Bridgeland-010.jpg",
	"https://cdn.prod.website-files.com/67c64fb730bae54f87c547f8/67d3499880356ff16e9d31d2_Swish%20-%20Bridgeland-017.jpg",
	"https://cdn.prod.website-files.com/67c64fb730bae54f87c547f8/67d34996272b6a0321a5cb66_Swish%20-%20Bridgeland-015.jpg",
	"https://cdn.prod.website-files.com/67c64fb730bae54f87c547f8/67d3499523c21a5bb88e2dbf_Swish%20-%20Bridgeland-003.jpg",
	"https://cdn.prod.website-files.com/67c64fb730bae54f87c547f8/67d349939aca5c5c363f1835_Swish%20-%20Bridgeland-013.jpg",
	"https://cdn.prod.website-files.com/67c64fb730bae54f87c547f8/67d34993da0d52680b8b827f_Swish-Bridgeland.jpeg",
	"https://cdn.prod.website-files.com/67c64fb730bae54f87c547f8/67d34993e1c3b162ac9cfe24_Swish-Bridgeland-01.jpeg",
	"https://cdn.prod.website-files.com/67c64fb730bae54f87c547f8/67d34995957e75830269f0a9_exam-room.png",
];

const page = "nase-klinika";

export async function generateMetadata({
	params,
}: {
	params: Promise<{ locale: string }>;
}): Promise<Metadata> {
	const { locale } = await params;

	const languages = Object.fromEntries(
		routing.locales.map((l) => [l, `${BASE_URL}/${l}/${page}`]),
	);

	return {
		title: "Naše klinika | Natadent",
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

	return (
		<main>
			<Container>
				<Breadcrumbs title={"Naše klinika"} url={`/${locale}/${page}`} />
				<h1 className="page__title">Clinic Gallery</h1>
				<div className="our-clinic__masonry">
					{clinicImages.map((img, index) => {
						return (
							<div key={index} className="masonry__item">
								<div className="masonry__img-container">
									<img src={img} alt="" loading="lazy" />
								</div>
							</div>
						);
					})}
				</div>
			</Container>
		</main>
	);
}
