import "./Banner.scss";

const Banner = () => {
	function removeBanner() {
		document.querySelector(".banner").remove();
	}

	return (
		<div className="banner">
			<div className="banner__header">
				<button onClick={removeBanner}>👉zavřít</button>
			</div>
			<p className="banner__title">Naše zubní klinika se brzy otevře!</p>
			<div style={{ textAlign: "center" }}>
				<p style={{ fontWeight: 500, marginBottom: 5 }}>Telefonní číslo</p>
				<a
					style={{ marginBottom: 5 }}
					className="banner__link"
					href="tel:+420773802166"
				>
					+420 773 802 166
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
		</div>
	);
};

export default Banner;
