import { getTranslations } from "next-intl/server";
import Link from "next/link";
import { BASE_URL } from "@/lib/constants";
import "./Breadcrumbs.scss";

type BreadcrumbsProps = {
	title: string;
	url: string;
};

export default async function Breadcrumbs({ title, url }: BreadcrumbsProps) {
	const t = await getTranslations();

	// TODO: learn this
	const jsonLd = {
		"@context": "https://schema.org",
		"@type": "BreadcrumbList",
		itemListElement: [
			{
				"@type": "ListItem",
				position: 1,
				name: t("home_title"),
				item: BASE_URL,
			},
			{
				"@type": "ListItem",
				position: 2,
				name: title,
				item: `${BASE_URL}${url}`,
			},
		],
	};

	return (
		<>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
			/>
			<nav className="breadcrumbs" aria-label="breadcrumb">
				<ol className="breadcrumbs-list">
					<li>
						<Link className="page-title__link" href="/">
							{t("home_title")}
						</Link>
					</li>
					<li aria-hidden="true">
						<span>/</span>
					</li>
					<li>
						<span style={{ opacity: "0.5" }} aria-current="page">
							{title}
						</span>
					</li>
				</ol>
			</nav>
		</>
	);
}
