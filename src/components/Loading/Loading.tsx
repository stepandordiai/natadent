"use client";

import { useEffect, useRef } from "react";
import "./Loading.scss";

const Loading = () => {
	const loadingRef = useRef<HTMLDivElement>(null);
	const wrapperRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const el = loadingRef.current;
		if (!el) return;

		const handleAnimationEnd = () => {
			// document.body.classList.add("body--active");
			if (wrapperRef.current) {
				wrapperRef.current.style.display = "none";
			}
			// Show the page wrapper
			const wrapper = document.querySelector<HTMLElement>(".wrapper");
			if (wrapper) wrapper.style.display = "initial";
		};

		el.addEventListener("animationend", handleAnimationEnd);
		return () => el.removeEventListener("animationend", handleAnimationEnd);
	}, []);

	return (
		<div ref={wrapperRef} className="loading__wrapper">
			<div ref={loadingRef} className="loading">
				<img className="loading__logo-icon" src="/logo/tooth.png" alt="Logo" />
			</div>
		</div>
	);
};

export default Loading;
