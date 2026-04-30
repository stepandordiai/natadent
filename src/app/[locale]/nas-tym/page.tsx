import { getTranslations } from "next-intl/server";
import Breadcrumbs from "@/components/common/Breadcrumbs/Breadcrumbs";
import Container from "@/components/Container/Container";
import { Metadata } from "next";
import "./styles.scss";

const membersData = [
	{
		img: "/icons/user.png",
		name: "Natalija Tomyšynec",
		position: "Pozice",
	},
	{
		img: "/icons/user.png",
		name: "Vladimir Kedelidze",
		position: "Pozice",
	},
];

export async function generateMetadata(): Promise<Metadata> {
	const t = await getTranslations();

	return {
		title: "",
		description:
			"Seznamte se s týmem odborníků z kliniky Natadent. Zkušení stomatologové, dentální hygienisté a asistenti, kteří vám poskytnou špičkovou péči s lidským přístupem.",
		alternates: {
			canonical: "https://www.natadent.cz/nas-tym",
		},
	};
}

export default async function OurTeam() {
	const t = await getTranslations();

	return (
		<main className="our-team">
			<Container>
				<Breadcrumbs title={t("our_team_title")} />
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
									</div>
								</div>
							);
						})}
					</div>
				</div>
			</Container>
		</main>
	);
}
