"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";
import "./Breadcrumbs.scss";

type BreadcrumbsProps = {
	title: string;
	previousPath?: string;
};

const Breadcrumbs = ({ title, previousPath = "" }: BreadcrumbsProps) => {
	const t = useTranslations();

	return (
		<div className="page-title">
			<div className="page-title__links">
				<Link className="page-title__link" href="/">
					{t("home_title")}
				</Link>
				<span>/</span>
				{previousPath && (
					<>
						<Link className="page-title__link" href="/#sluzby">
							{previousPath}
						</Link>
						<span>/</span>
					</>
				)}
				<span>{title}</span>
			</div>
			<h1 className="page-title__title">{title}</h1>
		</div>
	);
};

export default Breadcrumbs;
