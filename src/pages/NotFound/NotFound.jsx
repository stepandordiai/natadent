import { Helmet } from "react-helmet-async";
import PageTitle from "../../components/PageTitle/PageTitle";
import "./NotFound.scss";

const NotFound = () => {
	return (
		<>
			<Helmet>
				<title>404 / Prozubik</title>
			</Helmet>
			<PageTitle title="404" />
		</>
	);
};

export default NotFound;
