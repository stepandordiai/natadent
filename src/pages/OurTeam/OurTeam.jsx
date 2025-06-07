import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";
import PageTitle from "../../components/PageTitle/PageTitle";
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
				<title>{t("our_team_title")} / Prozubik</title>
				<link rel="canonical" href="https://prozubik.cz/our-team" />
			</Helmet>
			<main className="our-team">
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
			</main>
		</>
	);
};

export default OurTeam;
