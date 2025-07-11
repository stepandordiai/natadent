import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import PageTitle from "../../components/PageTitle/PageTitle";
import "./SmileGallery.scss";

const SmileGallery = () => {
	const { t } = useTranslation();

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
		document.querySelectorAll(".img-ranger").forEach((ranger, index) => {
			ranger.addEventListener("input", () => {
				const rangesValue = document.querySelectorAll(".img-ranger");
				const rangeImages = document.querySelectorAll(".img-range");
				const rangeLines = document.querySelectorAll(".line");
				rangeImages[index].style.setProperty(
					"--x-axis",
					rangesValue[index].value + "%"
				);
				rangeLines[index].style.setProperty(
					"--x-line-axis",
					rangesValue[index].value + "%"
				);
			});
		});
	}, []);

	return (
		<>
			<Helmet>
				<meta
					name="description"
					content="Podívejte se na ukázky proměn našich pacientů v Galerii úsměvů. Skutečné výsledky profesionální stomatologické péče na klinice Prozubik."
				/>
				<title>{t("smile_gallery_title")} / Prozubik</title>
				<link rel="canonical" href="https://prozubik.cz/smile-gallery" />
			</Helmet>
			<main className="smile-gallery">
				<PageTitle title={t("smile_gallery_title")} />
				<div className="smile-gallery-wrapper">
					<div className="about-us__gallery-grid">
						{smilesData.map((smile, index) => {
							return (
								<div
									key={index}
									className="smile-wrapper"
									data-before={t("smile_gallery.before")}
									data-after={t("smile_gallery.after")}
								>
									<img src={smile.imgAfter} alt="" />
									<img className="img-range" src={smile.imgBefore} alt="" />
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
				</div>
			</main>
		</>
	);
};

export default SmileGallery;
