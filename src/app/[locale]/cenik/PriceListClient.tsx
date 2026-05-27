"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";
import Breadcrumbs from "@/components/common/Breadcrumbs/Breadcrumbs";
import Container from "@/components/Container/Container";
import services from "@/data/services.json";

export default function PriceListClient() {
	const t = useTranslations();

	const [filter, setFilter] = useState("");

	const inactiveFilterBtn = "filter-btn";
	const activeFilterBtn = "filter-btn active-filter-btn";

	const uniqueTypes = [...new Set(services.map((s) => t(s.type)))];

	const filteredServices = services.filter((s) =>
		filter === "" ? s : filter === t(s.type),
	);

	const filteredUniqueTypes = [
		...new Set(
			services
				.filter((s) => (filter === "" ? s : t(s.type) === filter))
				.map((s) => t(s.type)),
		),
	];

	return (
		<main className="price-list">
			<Container>
				<Breadcrumbs title={t("price_list_title")} />
				<div className="filter-btn-wrapper">
					<button
						className={filter === "" ? activeFilterBtn : inactiveFilterBtn}
						onClick={() => setFilter("")}
					>
						{t("price_data.all_title")}
					</button>
					{uniqueTypes.map((type, i) => {
						return (
							<button
								key={i}
								onClick={() => setFilter(type)}
								className={
									filter === type ? activeFilterBtn : inactiveFilterBtn
								}
							>
								{type}
							</button>
						);
					})}
				</div>
				{filteredUniqueTypes.map((type, i) => {
					return (
						<div key={i} className="price-list__table">
							<p className="price-list__title">{type}</p>
							<ul className="price-list-ul">
								{filteredServices
									.filter((s) => t(s.type) === type)
									.map((s, i) => {
										return (
											<li key={i}>
												<span>{t(s.name)}</span>
												<span>{s.price} Kč</span>
											</li>
										);
									})}
							</ul>
						</div>
					);
				})}
			</Container>
		</main>
	);
}
