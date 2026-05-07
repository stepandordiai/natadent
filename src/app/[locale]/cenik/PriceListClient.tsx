"use client";

import { useState } from "react";
import Breadcrumbs from "@/components/common/Breadcrumbs/Breadcrumbs";
import Container from "@/components/Container/Container";
import services from "@/data/services.json";
import { useTranslations } from "next-intl";

export default function PriceListClient() {
	const t = useTranslations();

	const [filter, setFilter] = useState("");

	const inactiveFilterBtn = "filter-btn";
	const activeFilterBtn = "filter-btn active-filter-btn";

	const uniqueTypes = [...new Set(services.map((s) => s.type))];

	const filteredServices = services.filter((s) =>
		filter === "" ? s : filter === s.type,
	);

	const filteredUniqueTypes = [
		...new Set(
			services
				.filter((s) => (filter === "" ? s : s.type === filter))
				.map((s) => s.type),
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
					{uniqueTypes.map((t, i) => {
						return (
							<button
								key={i}
								onClick={() => setFilter(t)}
								className={filter === t ? activeFilterBtn : inactiveFilterBtn}
							>
								{t}
							</button>
						);
					})}
				</div>
				{filteredUniqueTypes.map((t, i) => {
					return (
						<div key={i} className="price-list__table">
							<p className="price-list__title">{t}</p>
							<ul className="price-list-ul">
								{filteredServices
									.filter((s) => s.type === t)
									.map((s, i) => {
										return (
											<li key={i}>
												<p>{s.name}</p>
												<p>{s.price} Kč</p>
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
