"use client";

import { useTranslations } from "next-intl";
import { useEffect } from "react";

export default function SmileGalleryClient() {
	const t = useTranslations();

	const smilesData = [
		{
			imgBefore: "/smiles/before1.png",
			imgAfter: "/smiles/after1.png",
		},
		{
			imgBefore: "/smiles/before2.png",
			imgAfter: "/smiles/after2.png",
		},
		{
			imgBefore: "/smiles/before3.png",
			imgAfter: "/smiles/after3.png",
		},
		{
			imgBefore: "/smiles/before4.png",
			imgAfter: "/smiles/after4.png",
		},
		{
			imgBefore: "/smiles/before5.png",
			imgAfter: "/smiles/after5.png",
		},
		{
			imgBefore: "/smiles/before6.png",
			imgAfter: "/smiles/after6.png",
		},
	];

	useEffect(() => {
		const imgRangers = document.querySelectorAll(
			".img-ranger",
		) as NodeListOf<HTMLInputElement>;

		imgRangers.forEach((ranger, index) => {
			ranger.addEventListener("input", () => {
				const rangesValue = document.querySelectorAll(
					".img-ranger",
				) as NodeListOf<HTMLInputElement>;
				const rangeImages = document.querySelectorAll(
					".img-range",
				) as NodeListOf<HTMLImageElement>;
				const rangeLines = document.querySelectorAll(
					".line",
				) as NodeListOf<HTMLDivElement>;
				rangeImages[index].style.setProperty(
					"--x-axis",
					rangesValue[index].value + "%",
				);
				rangeLines[index].style.setProperty(
					"--x-line-axis",
					rangesValue[index].value + "%",
				);
			});
		});
	}, []);

	return (
		<div className="about-us__gallery-grid">
			{smilesData.map((smile, index) => {
				return (
					<div
						key={index}
						className="smile-wrapper"
						data-before={t("smile_gallery.before")}
						data-after={t("smile_gallery.after")}
					>
						<img src={smile.imgAfter} alt="" loading="lazy" />
						<img
							className="img-range"
							src={smile.imgBefore}
							alt=""
							loading="lazy"
						/>
						<input
							className="img-ranger"
							type="range"
							min={0}
							max={100}
							defaultValue={50}
						/>
						<div className="line"></div>
					</div>
				);
			})}
		</div>
	);
}
