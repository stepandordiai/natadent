import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";
import PageTitle from "../../components/PageTitle/PageTitle";
import Container from "../../components/Container/Container";
import "./OurTeam.scss";

const OurTeam = () => {
	const { t } = useTranslation();

	const membersData = [
		{
			img: "/icons/user.png",
			name: "Jméno",
			position: "Pozice",
			tel: "Telefonní číslo",
		},
		{
			img: "/icons/user.png",
			name: "Jméno",
			position: "Pozice",
			tel: "Telefonní číslo",
		},
		{
			img: "/icons/user.png",
			name: "Jméno",
			position: "Pozice",
			tel: "Telefonní číslo",
		},
		{
			img: "/icons/user.png",
			name: "Jméno",
			position: "Pozice",
			tel: "Telefonní číslo",
		},
		{
			img: "/icons/user.png",
			name: "Jméno",
			position: "Pozice",
			tel: "Telefonní číslo",
		},
	];

	return (
		<>
			<Helmet>
				<meta
					name="description"
					content="Seznamte se s týmem odborníků z kliniky Natadent. Zkušení stomatologové, dentální hygienisté a asistenti, kteří vám poskytnou špičkovou péči s lidským přístupem."
				/>
				<title>{t("our_team_title")} / Natadent</title>
				<link rel="canonical" href="https://www.natadent.cz/our-team" />
			</Helmet>
			<main className="our-team">
				<Container>
					<PageTitle title={t("our_team_title")} />
					<div className="our-team-wrapper">
						<div className="our-team__grid">
							{membersData.map((member, index) => {
								return (
									<div key={index} className="our-team__card">
										<div className="our-team__card-img-container">
											<img src={member.img} alt="" />
										</div>
										<div>
											<p>{member.name}</p>
											<p>{member.position}</p>
											<p>{member.tel}</p>
										</div>
									</div>
								);
							})}
						</div>
					</div>
				</Container>
			</main>
		</>
	);
};

export default OurTeam;
