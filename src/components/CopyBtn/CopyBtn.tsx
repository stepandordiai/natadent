import { useState } from "react";
import "./CopyBtn.scss";

const CopyBtn = () => {
	const [btnTxtCopied, setBtnTxtCopied] = useState(false);

	const handleCopy = (value: string) => {
		navigator.clipboard.writeText(value);

		setBtnTxtCopied(true);

		setTimeout(() => {
			setBtnTxtCopied(false);
		}, 1500);
	};

	return (
		<button
			onClick={() => handleCopy("03631559")}
			style={
				btnTxtCopied
					? { color: "var(--accent-clr)", cursor: "not-allowed" }
					: { color: "#000", cursor: "pointer" }
			}
			className="copy-btn"
			disabled={btnTxtCopied}
		>
			{btnTxtCopied ? "Zkopírováno" : "03631559"}
		</button>
	);
};

export default CopyBtn;
