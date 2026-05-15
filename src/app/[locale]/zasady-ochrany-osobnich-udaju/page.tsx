import type { Metadata } from "next";
import Container from "@/components/Container/Container";
import CopyBtn from "@/components/CopyBtn/CopyBtn";
import Breadcrumbs from "@/components/common/Breadcrumbs/Breadcrumbs";
import { BASE_URL } from "@/lib/constants";
import "./styles.scss";

export function generateMetadata(): Metadata {
	return {
		title: "Zásady zpracování osobních údajů (GDPR) | Natadent",
		description:
			"Zásady zpracování osobních údajů společnosti NATADENT s.r.o. v souladu s nařízením GDPR.",
		alternates: {
			canonical: `${BASE_URL}/cs/gdpr`,
		},
	};
}

const PrivacyPolicy = () => {
	return (
		<main>
			<Breadcrumbs title="Zásady zpracování osobních údajů (GDPR)" />
			<Container>
				<div className="privacy-policy-container">
					<p>
						Společnost NATADENT s.r.o. (dále jen „správce“) tímto informuje
						návštěvníky webových stránek a pacienty o způsobu zpracování
						osobních údajů v souladu s nařízením Evropského parlamentu a Rady
						(EU) 2016/679 (GDPR).
					</p>
					<ol className="privacy-policy-list">
						<li>
							Správce osobních údajů
							<p>NATADENT s.r.o.</p>
							<p>
								Sídlo:{" "}
								<a href="https://mapy.com/s/hazurazova" target="_blank">
									Rašínovo nábřeží 1980/70, Nové Město (Praha 2), 120 00 Praha
								</a>
							</p>
							<p>
								IČO: <CopyBtn />
							</p>
							<p>
								E-mail: <a href="mailto:info@natadent.cz">info@natadent.cz</a>
							</p>
							<p>
								Telefon: <a href="tel:+420773802886">+420 773 802 886</a>
							</p>
						</li>
						<li>
							Jaké osobní údaje zpracováváme
							<p>
								Zpracováváme pouze údaje nezbytné pro poskytování zdravotních
								služeb a provoz webových stránek:
							</p>
							<ul>
								<li>identifikační údaje (jméno, příjmení)</li>
								<li>kontaktní údaje (e-mail, telefon)</li>
								<li>
									údaje související s poskytováním zdravotní péče (v souladu s
									platnými právními předpisy)
								</li>
								<li>technické údaje o používání webu (IP adresa, cookies)</li>
							</ul>
						</li>
						<li>
							Účel zpracování osobních údajů
							<p>Osobní údaje zpracováváme za účelem:</p>
							<ul>
								<li>poskytování stomatologické zdravotní péče</li>
								<li>komunikace s pacienty</li>
								<li>plnění zákonných povinností</li>
								<li>správy objednávek a dotazů přes webové stránky</li>
								<li>zlepšování funkčnosti webu</li>
							</ul>
						</li>
						<li>
							Právní základ zpracování
							<p>Zpracování osobních údajů probíhá na základě:</p>
							<ul>
								<li>plnění smlouvy o poskytování zdravotních služeb</li>
								<li>
									plnění právních povinností dle českých právních předpisů
								</li>
								<li>oprávněného zájmu správce</li>
								<li>souhlasu subjektu údajů (např. u kontaktních formulářů)</li>
							</ul>
						</li>
						<li>
							Doba uchovávání údajů
							<p>Osobní údaje uchováváme po dobu nezbytně nutnou, zejména:</p>
							<ul>
								<li>
									po dobu stanovenou právními předpisy pro zdravotnickou
									dokumentaci
								</li>
								<li>po dobu trvání komunikace a následně po přiměřenou dobu</li>
							</ul>
						</li>
						<li>
							Příjemci osobních údajů
							<p>Osobní údaje mohou být zpřístupněny:</p>
							<ul>
								<li>oprávněným zaměstnancům správce</li>
								<li>
									externím poskytovatelům služeb (IT, účetnictví), kteří jsou
									smluvně vázáni mlčenlivostí
								</li>
								<li>orgánům veřejné moci, pokud to vyžaduje zákon</li>
							</ul>
						</li>
						<li>
							Práva subjektů údajů
							<p>Máte právo:</p>
							<ul>
								<li>na přístup ke svým osobním údajům</li>
								<li>na opravu nepřesných údajů</li>
								<li>na výmaz osobních údajů, pokud to zákon umožňuje</li>
								<li>na omezení zpracování</li>
								<li>vznést námitku proti zpracování</li>
								<li>podat stížnost u Úřadu pro ochranu osobních údajů</li>
							</ul>
						</li>
						<li>
							Cookies
							<p>
								Naše webové stránky používají cookies za účelem zajištění jejich
								správného fungování a analýzy návštěvnosti. Používání cookies
								můžete upravit ve svém internetovém prohlížeči.
							</p>
						</li>
						<li>
							Závěrečná ustanovení
							<p>
								Tyto zásady ochrany osobních údajů jsou platné a účinné od
								[datum]. Správce si vyhrazuje právo je kdykoli aktualizovat.
							</p>
						</li>
					</ol>
					<p>
						Pokud máte jakékoli dotazy týkající se ochrany osobních údajů,
						kontaktujte nás na výše uvedených kontaktech.
					</p>
				</div>
			</Container>
		</main>
	);
};

export default PrivacyPolicy;
