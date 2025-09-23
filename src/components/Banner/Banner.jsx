import { useRef } from "react";
import logoImg from "/logo/tooth.png";
import "./Banner.scss";

const Banner = () => {
	const banner = useRef(null);

	function removeBanner() {
		banner.current.remove();
	}

	return (
		<div ref={banner} className="banner">
			<button onClick={removeBanner} className="banner__btn">
				👉zavřít
			</button>
			<img src={logoImg} width={50} height={50} alt="Prozubik logo" />
			<p className="banner__title">Naše zubní klinika se brzy otevře!</p>
			<div style={{ textAlign: "center" }}>
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
					href="https://maps.app.goo.gl/6reNXD3adu2dW2JA6"
					target="_blank"
				>
					Pod Hroby 271 Kolín IV
				</a>
			</div>
			<iframe
				className="banner__map"
				src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2563.3236706787648!2d15.2143025!3d50.024030599999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470c155b8cfe1db9%3A0x4e0e3a3f6277c27f!2sProzubik!5e0!3m2!1sen!2scz!4v1748083227064!5m2!1sen!2scz"
				loading="lazy"
			></iframe>
		</div>
	);
};

export default Banner;
