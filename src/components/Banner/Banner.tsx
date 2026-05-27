"use client";

import { useEffect, useState } from "react";
import CloseIcon from "../icons/CloseIcon";
import "./Banner.scss";
import ArrowRightIcon from "../icons/ArrowRightIcon";

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
			{/* <iframe
				className="banner__map"
				src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d906.2737924918879!2d15.213754247414611!3d50.02392366268641!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470c155b8cfe1db9%3A0x4e0e3a3f6277c27f!2sNATADENT%20s.r.o.!5e0!3m2!1sen!2scz!4v1772115717051!5m2!1sen!2scz"
				loading="lazy"
			></iframe> */}
		</div>
	);
};

export default Banner;
