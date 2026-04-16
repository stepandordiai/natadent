import { Helmet } from "react-helmet-async";
import Container from "../../components/Container/Container";
import PageTitle from "../../components/PageTitle/PageTitle";
import "./OurClinic.scss";

const clinicImages = [
	"https://cdn.prod.website-files.com/67c64fb730bae54f87c547f8/67d349994688c248cc02cac3_Swish---Web-Res-012.jpg",
	"https://cdn.prod.website-files.com/67c64fb730bae54f87c547f8/67d349985e8134b65d85bfc3_Swish%20-%20Bridgeland-014.jpg",
	"https://cdn.prod.website-files.com/67c64fb730bae54f87c547f8/67d34998289e73914fad1dd1_Swish%20-Bridgeland-010.jpg",
	"https://cdn.prod.website-files.com/67c64fb730bae54f87c547f8/67d3499880356ff16e9d31d2_Swish%20-%20Bridgeland-017.jpg",
	"https://cdn.prod.website-files.com/67c64fb730bae54f87c547f8/67d34996272b6a0321a5cb66_Swish%20-%20Bridgeland-015.jpg",
	"https://cdn.prod.website-files.com/67c64fb730bae54f87c547f8/67d3499523c21a5bb88e2dbf_Swish%20-%20Bridgeland-003.jpg",
	"https://cdn.prod.website-files.com/67c64fb730bae54f87c547f8/67d349939aca5c5c363f1835_Swish%20-%20Bridgeland-013.jpg",
	"https://cdn.prod.website-files.com/67c64fb730bae54f87c547f8/67d34993da0d52680b8b827f_Swish-Bridgeland.jpeg",
	"https://cdn.prod.website-files.com/67c64fb730bae54f87c547f8/67d34993e1c3b162ac9cfe24_Swish-Bridgeland-01.jpeg",
	"https://cdn.prod.website-files.com/67c64fb730bae54f87c547f8/67d34995957e75830269f0a9_exam-room.png",
];

const OurClinic = () => {
	return (
		<>
			<Helmet>
				<title>Naše klinika | Natadent</title>
				<link rel="canonical" href="https://www.natadent.cz/nase-klinika" />
			</Helmet>
			<main>
				<Container>
					<PageTitle title="Naše klinika" />
					<div className="our-clinic__masonry">
						{clinicImages.map((img, index) => {
							return (
								<div key={index} className="masonry__item">
									<div className="masonry__img-container">
										<img src={img} alt="" loading="lazy" />
									</div>
								</div>
							);
						})}
					</div>
				</Container>
			</main>
		</>
	);
};

export default OurClinic;
