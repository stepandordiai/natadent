import { routing } from "@/i18n/routing";
import { BASE_URL } from "@/lib/constants";
import { MetadataRoute } from "next";

const pages = [
	{ path: "", priority: 1.0, changeFreq: "weekly" },
	{ path: "co-nabizime", priority: 0.9, changeFreq: "monthly" },
	{ path: "cenik", priority: 0.8, changeFreq: "monthly" },
	{ path: "ordinacni-doba", priority: 0.8, changeFreq: "monthly" },
	{ path: "kontakty", priority: 0.7, changeFreq: "monthly" },
	{ path: "galerie-kliniky", priority: 0.5, changeFreq: "yearly" },
	{ path: "gdpr", priority: 0.1, changeFreq: "yearly" },
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
	const alternates = (path: string) => ({
		...Object.fromEntries(
			routing.locales.map((locale) => [locale, `${BASE_URL}/${locale}${path}`]),
		),
		"x-default": `${BASE_URL}/${routing.defaultLocale}${path}`,
	});

	return routing.locales.flatMap((locale) =>
		pages.map((page) => ({
			url: `${BASE_URL}/${locale}/${page.path}`.replace(/\/$/, ""),
			lastModified: new Date(),
			changeFrequency: page.changeFreq,
			priority: page.priority,
			alternates: {
				languages: alternates(page.path ? `/${page.path}` : ""),
			},
		})),
	);
}
