import "./CustomDivider.scss";

type CustomDividerProps = {
	none: string;
};

const CustomDivider = ({ none }: CustomDividerProps) => {
	return <div className={`custom-divider ${none}`}></div>;
};

export default CustomDivider;
