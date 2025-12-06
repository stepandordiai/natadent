import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import "./ToTopBtn.scss";

const ToTopBtn = () => {
	const { t } = useTranslation();

	const [toTopBtnActive, setToTopBtnActive] = useState(false);
	const [scrollValue, setScrollValue] = useState(0);

	useEffect(() => {
		const scrollPercentage = () => {
			// TODO: learn this
			setToTopBtnActive(window.scrollY > window.innerHeight);

			const calcFullPageHeight =
				document.documentElement.scrollHeight - window.innerHeight;

			setScrollValue((window.scrollY * 100) / calcFullPageHeight);
		};

		// TODO: learn this
		window.addEventListener("scroll", scrollPercentage, { passive: true });

		return () => window.removeEventListener("scroll", scrollPercentage);
	}, []);

	function scrollToTop() {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	}

	return (
		<button
			className={`to-top-btn ${toTopBtnActive ? "to-top-btn--active" : ""}`}
			onClick={scrollToTop}
			aria-label={t("scrollToTop")}
		>
			<span
				className="progress"
				style={{
					background: `conic-gradient(#fff ${scrollValue}%, var(--accent-clr) 0%)`,
				}}
			>
				<span className="inner-to-top-btn">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						fill="currentColor"
						className="bi bi-arrow-up"
						viewBox="0 0 16 16"
					>
						<path
							fillRule="evenodd"
							d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5"
						/>
					</svg>
				</span>
			</span>
		</button>
	);
};

export default ToTopBtn;
