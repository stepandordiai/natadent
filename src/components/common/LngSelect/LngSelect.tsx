"use client";

import { useEffect, useRef, useState } from "react";
import { useLocale } from "next-intl";
import classNames from "classnames";
import { useRouter } from "@/i18n/navigation";
import { usePathname } from "@/i18n/navigation";
import "./LngSelect.scss";

interface Lng {
	locale: string;
	label: string;
	imgSrc: string;
}

const languages: Lng[] = [
	{
		locale: "cs",
		label: "CZ",
		imgSrc: "/icons/czech-republic.png",
	},
	{
		locale: "uk",
		label: "UA",
		imgSrc: "/icons/ukraine.png",
	},
	{ locale: "en", label: "EN", imgSrc: "/icons/united-states.png" },
];

const LngSelect = () => {
	const locale = useLocale();
	const router = useRouter();
	const pathname = usePathname();
	const lngRef = useRef<HTMLDivElement | null>(null);

	const inactiveLngOption = "lang-select__option";
	const activeLngOption = "lang-select__option lang-select__option--active";

	const [lngVisible, setLngVisible] = useState(false);

	// Знаходимо дані поточної мови для відображення на кнопці
	const selectedLng =
		languages.find((lng) => lng.locale === locale) || languages[0];

	// Закриття дропдауну при кліку поза ним
	useEffect(() => {
		const handleClickOutside = (e: MouseEvent) => {
			if (lngRef.current && !lngRef.current.contains(e.target as Node)) {
				setLngVisible(false);
			}
		};
		document.addEventListener("click", handleClickOutside);
		return () => document.removeEventListener("click", handleClickOutside);
	}, []);

	const handleLanguageChange = (newLocale: string) => {
		setLngVisible(false);
		// next-intl сама оновить URL, зберігши поточний шлях
		// Наприклад: /uk/about -> /en/about
		router.replace(pathname, { locale: newLocale });
	};

	return (
		<div ref={lngRef} className="lang-select">
			<button
				onClick={() => setLngVisible((prev) => !prev)}
				className="lang-select__btn"
			>
				<span className="lang-select__btn-value">{selectedLng?.label}</span>
				<div className="lang-select__btn-icon"></div>
			</button>
			<ul
				className={classNames("lang-select__list", {
					"lang-select__list--visible": lngVisible,
				})}
			>
				{languages.map((lng) => {
					return (
						<li
							key={lng.locale}
							className={
								lng.locale === locale ? activeLngOption : inactiveLngOption
							}
							data-value={lng.locale}
						>
							<button
								className="lng-select__li-btn"
								onClick={() => handleLanguageChange(lng.locale)}
							>
								<span>{lng.label}</span>
								<img width={20} height={20} src={lng.imgSrc} alt="" />
							</button>
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export default LngSelect;
