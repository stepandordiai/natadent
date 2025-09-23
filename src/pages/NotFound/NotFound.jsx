import { Helmet } from "react-helmet-async";
import PageTitle from "../../components/PageTitle/PageTitle";
import Container from "../../components/Container/Container";
import "./NotFound.scss";

const NotFound = () => {
	return (
		<>
			<Helmet>
				<title>404 / Prozubik</title>
			</Helmet>
			<main>
				<Container>
					<PageTitle title="404" />
				</Container>
			</main>
		</>
	);
};

export default NotFound;
