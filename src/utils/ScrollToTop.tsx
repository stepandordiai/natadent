import { useLayoutEffect } from "react";

export default function ScrollToTop() {
	useLayoutEffect(() => {
		// TODO: Condition to scroll restoration when path has no hash
		window.scrollTo({
			top: 0,
			left: 0,
			behavior: "instant",
		});
	}, []);

	return null;
}
