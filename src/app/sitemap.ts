import { routing } from "@/i18n/routing";
import { BASE_URL } from "@/lib/constants";
import { MetadataRoute } from "next";

const pages = [
	{
		path: "",
		priority: 1.0,
		changeFrequency: "yearly",
		lastModified: "2026-11-23",
	},
	{
		path: "co-nabizime",
		priority: 0.9,
		changeFrequency: "yearly",
		lastModified: "2026-11-23",
	},
	{
		path: "cenik",
		priority: 0.8,
		changeFrequency: "yearly",
		lastModified: "2026-11-23",
	},
	{
		path: "ordinacni-doba",
		priority: 0.8,
		changeFrequency: "yearly",
		lastModified: "2026-11-23",
	},
	{
		path: "kontakty",
		priority: 0.7,
		changeFrequency: "yearly",
		lastModified: "2026-11-23",
	},
	{
		path: "galerie-kliniky",
		priority: 0.5,
		changeFrequency: "yearly",
		lastModified: "2026-11-23",
	},
	{
		path: "gdpr",
		priority: 0.1,
		changeFrequency: "yearly",
		lastModified: "2026-11-23",
	},
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
			lastModified: page.lastModified,
			changeFrequency: page.changeFrequency,
			priority: page.priority,
			alternates: {
				languages: alternates(page.path ? `/${page.path}` : ""),
			},
		})),
	);
}
