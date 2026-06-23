"use client";

import { useEffect, useState } from "react";
import CloseIcon from "../icons/CloseIcon";
import ArrowRightIcon from "../icons/ArrowRightIcon";
import "./Banner.scss";

const Banner = () => {
	const [bannerVisible, setBannerVisible] = useState(false);

	useEffect(() => {
		const timeout = setTimeout(() => setBannerVisible(true), 3000);

		return () => clearTimeout(timeout);
	}, []);

	return (
		<div className={`banner ${bannerVisible ? "banner--visible" : ""}`}>
			<button
				onClick={() => setBannerVisible(false)}
				className="banner__close-btn"
				title="Close"
			>
				<CloseIcon size={20} />
			</button>
			<img src="/logo/tooth.png" width={50} height={50} alt="Prozubik logo" />
			<p className="banner__title">
				Na našich webových stránkách se momentálně pracuje. Děkujeme za
				pochopení.
			</p>
			<a
				className="link-btn"
				href="https://natadent.xdent.cz/wizard/clinic-selection"
				target="_blank"
			>
				<span>Objednat online</span>
				<span>
					<ArrowRightIcon size={20} />
				</span>
			</a>
		</div>
	);
};

export default Banner;
