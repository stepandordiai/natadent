import { getTranslations } from "next-intl/server";
import Breadcrumbs from "@/components/common/Breadcrumbs/Breadcrumbs";
import Container from "@/components/Container/Container";
import type { Metadata } from "next";
import { BASE_URL } from "@/lib/constants";
import members from "@/data/members.json";
import { routing } from "@/i18n/routing";
import "./styles.scss";

const page = "ordinacni-hodiny";

export async function generateMetadata({
	params,
}: {
	params: Promise<{ locale: string }>;
}): Promise<Metadata> {
	const { locale } = await params;
	const t = await getTranslations({ locale, namespace: "workingHours" });
	const languages = Object.fromEntries(
		routing.locales.map((l) => [l, `${BASE_URL}/${l}/${page}`]),
	);
	return {
		title: t("meta.title"),
		description: t("meta.description"),
		alternates: {
			canonical: `${BASE_URL}/${locale}/${page}`,
			languages: {
				...languages,
				"x-default": `${BASE_URL}/${routing.defaultLocale}/${page}`,
			},
		},
	};
}

export default async function WorkingHours({
	params,
}: {
	params: Promise<{ locale: string }>;
}) {
	const { locale } = await params;
	const t = await getTranslations("workingHours");

	const getWeekday = (index: number) => {
		// Day 0 in Intl = Sunday, so +1 shifts to Monday
		return new Intl.DateTimeFormat(locale, { weekday: "long" }).format(
			new Date(0, 0, index + 1),
		);
	};

	// TODO: learn this
	const now = new Date(
		new Date().toLocaleString("en-US", { timeZone: "Europe/Prague" }),
	);
	const dayNow = now.getDay();
	const currentMinutes = now.getHours() * 60 + now.getMinutes();

	// TODO: learn this
	function timeToMinutes(time: string): number {
		const [h, m] = time.split(":").map(Number);
		return h * 60 + m;
	}

	return (
		<main className="our-team">
			<Container>
				<Breadcrumbs title="Team Working Hours" url={`/${locale}/${page}`} />
				<h1 className="page__title">Team Working Hours</h1>
				<div className="our-team-wrapper">
					<div className="our-team__grid">
						{members.map((member, index) => {
							return (
								<div key={index} className="our-team__card">
									<div className="our-team__card-img-container">
										<img src={member.img} alt="" />
									</div>
									<div>
										<p>{member.name}</p>
									</div>
									<ul style={{ width: "100%" }}>
										{member.workingHours.map((el, index) => {
											// TODO: learn this
											const isWorkingNow = member.workingHours.some((day) => {
												if (index + 1 !== dayNow) return false;

												const start = timeToMinutes(day.start);
												const lunchStart = timeToMinutes(day.lunchStart);
												const lunchEnd = timeToMinutes(day.lunchEnd);
												const end = timeToMinutes(day.end);

												const isMorning =
													currentMinutes >= start &&
													currentMinutes < lunchStart;
												const isAfternoon =
													currentMinutes >= lunchEnd && currentMinutes <= end;

												return isMorning || isAfternoon;
											});

											const isLunch = member.workingHours.some((day) => {
												if (index + 1 !== dayNow) return false;

												const start = timeToMinutes(day.start);
												const lunchStart = timeToMinutes(day.lunchStart);
												const lunchEnd = timeToMinutes(day.lunchEnd);
												const end = timeToMinutes(day.end);

												return (
													currentMinutes >= start &&
													currentMinutes < lunchStart &&
													currentMinutes >= lunchEnd &&
													currentMinutes <= end
												);
											});

											const activeDay = index + 1 === dayNow;
											return (
												<li
													key={index}
													className={`working-hours-list-item ${activeDay ? "working-hours-list-item--active" : ""}`}
													style={{
														display: "flex",
														flexDirection: "column",
														gap: "5px",
													}}
												>
													<span
														style={{
															display: "flex",
															justifyContent: "space-between",
														}}
													>
														<span>{getWeekday(index)}</span>
														<span>
															{el.start} - {el.lunchStart} | {el.lunchEnd} -{" "}
															{el.end}
														</span>
													</span>
													{activeDay && (
														<span
															style={{
																alignSelf: "flex-start",
																display: "flex",
																justifyContent: "center",
																alignItems: "center",
																gap: "5px",
															}}
														>
															<span
																className={`working-hours__indicator ${isWorkingNow ? "working-hours__indicator--active" : isLunch ? "working-hours__indicator--lunch" : ""}`}
															></span>
															{isWorkingNow
																? t("atWork")
																: isLunch
																	? t("lunch")
																	: t("notAtWork")}
														</span>
													)}
												</li>
											);
										})}
									</ul>
								</div>
							);
						})}
					</div>
				</div>
			</Container>
		</main>
	);
}
