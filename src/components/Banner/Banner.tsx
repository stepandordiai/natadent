import { useRef } from "react";
import CopyBtn from "../CopyBtn/CopyBtn";
import "./Banner.scss";

const Banner = () => {
	const banner = useRef<HTMLDivElement>(null);

	function removeBanner() {
		if (!banner.current) return;

		banner.current.remove();
	}

	return (
		<div ref={banner} className="banner">
			<button onClick={removeBanner} className="banner__btn">
				👉zavřít
			</button>
			<img src="/logo/tooth.png" width={50} height={50} alt="Prozubik logo" />
			<p className="banner__title">Naše zubní klinika se brzy otevře!</p>
			<div style={{ textAlign: "center" }}>
				<p style={{ fontWeight: 500, marginBottom: 5 }}>NATADENT s.r.o.</p>
				<p style={{ marginBottom: 5 }}>
					IČO <CopyBtn />
				</p>
				<p style={{ fontWeight: 500, marginBottom: 5 }}>Telefonní číslo</p>
				<a
					style={{ marginBottom: 5 }}
					className="banner__link"
					href="tel:+420773802886"
				>
					+420 773 802 886
				</a>
				<p style={{ fontWeight: 500, marginBottom: 5 }}>Kde jsme</p>
				<a
					className="banner__link"
					href="https://maps.app.goo.gl/z5moH8T3Wa4Wmt2s5"
					target="_blank"
				>
					Pod Hroby 1026, 280 02 Kolín 2
				</a>
			</div>
			<iframe
				className="banner__map"
				src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d906.2737924918879!2d15.213754247414611!3d50.02392366268641!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470c155b8cfe1db9%3A0x4e0e3a3f6277c27f!2sNATADENT%20s.r.o.!5e0!3m2!1sen!2scz!4v1772115717051!5m2!1sen!2scz"
				loading="lazy"
			></iframe>
		</div>
	);
};

export default Banner;
