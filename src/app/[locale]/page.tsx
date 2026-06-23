import { getTranslations } from "next-intl/server";
import Container from "@/components/Container/Container";
import CopyBtn from "@/components/CopyBtn/CopyBtn";
import type { Metadata } from "next";
import { BASE_URL } from "@/lib/constants";
import { routing } from "@/i18n/routing";
import "./styles.scss";

const services = [
	{
		name: "Vysetreni",
		img: "/01.png",
		desc: "Komplexní zubní vyšetření zaměřené na kontrolu stavu zubů, dásní a celé dutiny ústní. Součástí je diagnostika kazů, zánětů a dalších problémů, návrh vhodné léčby a doporučení pro správnou dentální hygienu. Pravidelné vyšetření pomáhá předcházet vážnějším komplikacím a udržet zdravý a krásný úsměv.",
	},
	{
		name: "Administrativa",
		img: "/02.png",
		desc: "Zajišťujeme kompletní administrativní servis spojený s vaším ošetřením. Pomůžeme s registrací, plánováním termínů, vedením zdravotní dokumentace i komunikací se zdravotními pojišťovnami. Naším cílem je zajistit pohodlný a bezproblémový průběh vaší návštěvy.",
	},
	{
		name: "Dentální hygiena",
		img: "/03.png",
		desc: "Profesionální dentální hygiena pomáhá předcházet vzniku zubního kazu, zánětu dásní a parodontózy. Součástí ošetření je odstranění zubního kamene, plaku a pigmentací, leštění zubů a individuální doporučení správné domácí péče. Pravidelná dentální hygiena přispívá ke zdravému chrupu, svěžímu dechu a krásnému úsměvu.",
	},
	{
		name: "Bělení",
		img: "/04.png",
		desc: "Profesionální bělení zubů je bezpečný a efektivní způsob, jak získat zářivější a bělejší úsměv. Používáme moderní a šetrné metody, které pomáhají odstranit pigmentace způsobené jídlem, nápoji nebo kouřením. Výsledkem jsou viditelně světlejší zuby a přirozeně krásný úsměv.",
	},
	{
		name: "Výplně",
		img: "/05.png",
		desc: "Zubní výplně slouží k ošetření zubního kazu a obnovení přirozeného tvaru i funkce zubu. Používáme kvalitní a estetické materiály, které barevně odpovídají vašim zubům a zajišťují dlouhou životnost ošetření. Naším cílem je zachovat zdraví chrupu a přirozený vzhled vašeho úsměvu.",
	},
	{
		name: "Retainery, dlahy",
		img: "/01.png",
		desc: "Retainery a ochranné dlahy pomáhají udržet správné postavení zubů po ortodontické léčbě a chrání chrup před nadměrným zatížením či skřípáním zubů. Zhotovujeme individuálně přizpůsobené dlahy pro maximální pohodlí, ochranu a dlouhodobé zachování zdravého úsměvu.",
	},
	{
		name: "Endodoncie",
		img: "/02.png",
		desc: "Endodontické ošetření, známé také jako ošetření kořenových kanálků, slouží k záchraně zubu postiženého hlubokým kazem nebo zánětem. Pomocí moderních metod důkladně vyčistíme a ošetříme kořenový systém zubu, čímž pomáháme odstranit bolest a zachovat vlastní zub co nejdéle. Ošetření provádíme šetrně a s důrazem na komfort pacienta.",
	},
	{
		name: "Chirurgie",
		img: "/03.png",
		desc: "Provádíme široké spektrum stomatochirurgických zákroků s důrazem na šetrnost, bezpečnost a komfort pacienta. Mezi nejčastější výkony patří extrakce zubů, chirurgické odstranění zubů moudrosti či ošetření zánětlivých ložisek. Používáme moderní postupy a kvalitní anestezii pro co nejpohodlnější průběh ošetření i rychlé hojení.",
	},
	{
		name: "Proteticke faze ordinacni",
		img: "/04.png",
		desc: "Protetické ošetření v ordinační fázi zahrnuje přípravu zubů, otisky, dočasné náhrady a další kroky potřebné pro zhotovení kvalitních protetických prací. Dbáme na preciznost, funkčnost i estetiku, aby výsledné korunky, můstky či náhrady dokonale odpovídaly vašim potřebám a přirozenému vzhledu chrupu.",
	},
	{
		name: "Samoplátci",
		img: "/05.png",
		desc: "Poskytujeme kvalitní stomatologickou péči také samoplátcům bez omezení zdravotní pojišťovnou. Nabízíme individuální přístup, moderní ošetření a transparentní cenovou politiku. Díky tomu si můžete zvolit péči a materiály přesně podle svých potřeb a očekávání.",
	},
];

export async function generateMetadata({
	params,
}: {
	params: Promise<{ locale: string }>;
}): Promise<Metadata> {
	const t = await getTranslations();
	const { locale } = await params;

	const languages = Object.fromEntries(
		routing.locales.map((l) => [l, `${BASE_URL}/${l}/`]),
	);
	return {
		title: `${t("home.secondary_title")}`,
		description:
			"Moderní zubní klinika v Kolíně. Nabízíme bezbolestné ortodontické ošetření pomocí analgosedace i celkové anestezie. Komfortní prostředí, profesionální péče a dostupné služby pro zdravý úsměv.",
		alternates: {
			canonical: `${BASE_URL}/${locale}/`,
			languages: {
				...languages,
				"x-default": `${BASE_URL}/${routing.defaultLocale}/`,
			},
		},
	};
}

export default async function Home() {
	const t = await getTranslations();

	return (
		<main>
			<Container>
				<div className="home-top">
					<div className="home-top__logo">
						<img
							className="home-top__logo-icon"
							src="/logo/tooth.png"
							alt="Natadent logo"
						/>
					</div>
					<h1 className="home-top__title">Zubní klinika Natadent</h1>
					<div className="home-container">
						<p style={{ fontWeight: 500, marginBottom: 5 }}>NATADENT s.r.o.</p>
						<p style={{ marginBottom: 5 }}>
							IČO <CopyBtn />
						</p>
						<p style={{ fontWeight: 500, marginBottom: 5 }}>Telefonní číslo</p>
						<a
							style={{ marginBottom: 5 }}
							className="link"
							href="tel:+420773853539"
						>
							+420 773 853 539
						</a>
						<p style={{ fontWeight: 500, marginBottom: 5 }}>Kde jsme</p>
						<a
							className="link"
							href="https://maps.app.goo.gl/z5moH8T3Wa4Wmt2s5"
							target="_blank"
						>
							Pod Hroby 1026, 280 02 Kolín 2
						</a>
					</div>
					<a
						href="https://natadent.xdent.cz/wizard/clinic-selection"
						target="_blank"
					>
						Objednat online
					</a>
				</div>
				<div className="home__services" id="sluzby">
					<h2 className="home__services-title">{t("services_title")}</h2>
					{/* <input
							className="home__services-search"
							// onInput={(e) => {
							// 	setSearch(e.target.value);
							// }}
							type="text"
							placeholder={t("home.services_search_placeholder")}
						/>
						<p className="home__services-no-result-pop-up">
							<img
								src="/logo/tooth.png"
								width={300}
								height={300}
								alt="Prozubik Logo"
							/>
							<span>{t("home.services_no_result_pop_up")}</span>
						</p> */}
					<div>
						{services.map((s, i) => {
							if (i % 2 === 0) {
								return (
									<div key={i} className="service-grid-odd">
										<div className="empty-container"></div>
										<div>
											<h3 className="service__title">({i + 1})</h3>
											<div className="img-container">
												<img className="service__img" src={s.img} alt="" />
											</div>
										</div>
										<div>
											<h3 className="service__title">{s.name}</h3>
											<div className="text-container">
												<p>{s.desc}</p>
												<a href="#">Learn more</a>
											</div>
										</div>
									</div>
								);
							} else {
								return (
									<div key={i} className="service-grid-odd">
										<div>
											<h3 className="service__title">({i + 1})</h3>
											<div className="img-container">
												<img className="service__img" src={s.img} alt="" />
											</div>
										</div>
										<div>
											<h3 className="service__title">{s.name}</h3>
											<div className="text-container">
												<p>{s.desc}</p>
												<a href="#">Learn more</a>
											</div>
										</div>
										<div className="empty-container"></div>
									</div>
								);
							}
						})}
					</div>
					{/* <div className="home__services-grid">
							{services
								.filter((service) => {
									return search.toLowerCase().trim() === ""
										? service
										: t(service.name)
												.toLowerCase()
												.includes(search.toLowerCase());
								})
								.map((service) => {
									return (
										<Link
											key={service.id}
											href={`/sluzby/${service.id}`}
											className="home__service js-service"
										>
											<h3>{t(service.name)}</h3>
											<p>{t(service.desc)}</p>
										</Link>
									);
								})}
						</div> */}
				</div>
				{/* <div className="faq" id="casto-kladene-otazky">
						<h2 className="faq__title">{t("faq_title")}</h2>
						<div className="faq__list">
							<div className="faq__item">
								<button className="faq__btn js-faq__btn">
									<span className="faq__btn-txt">{t("home.question_1")}</span>
									<div className="faq__btn-icon"></div>
								</button>
								<div className="grid-dropdown">
									<p className="grid-dropdown__details">{t("home.answer_1")}</p>
								</div>
							</div>
							<div className="faq__item">
								<button className="faq__btn js-faq__btn">
									<span className="faq__btn-txt">{t("home.question_2")}</span>
									<div className="faq__btn-icon"></div>
								</button>
								<div className="grid-dropdown">
									<p className="grid-dropdown__details">{t("home.answer_2")}</p>
								</div>
							</div>
							<div className="faq__item">
								<button className="faq__btn js-faq__btn">
									<span className="faq__btn-txt">{t("home.question_3")}</span>
									<div className="faq__btn-icon"></div>
								</button>
								<div className="grid-dropdown">
									<p className="grid-dropdown__details">{t("home.answer_3")}</p>
								</div>
							</div>
						</div>
					</div> */}
			</Container>
		</main>
	);
}
