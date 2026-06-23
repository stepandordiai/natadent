"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";

const services = [
	{
		name: "Vysetreni",
		desc: "Komplexní zubní vyšetření zaměřené na kontrolu stavu zubů, dásní a celé dutiny ústní. Součástí je diagnostika kazů, zánětů a dalších problémů, návrh vhodné léčby a doporučení pro správnou dentální hygienu. Pravidelné vyšetření pomáhá předcházet vážnějším komplikacím a udržet zdravý a krásný úsměv.",
	},
	{
		name: "Administrativa",
		desc: "Zajišťujeme kompletní administrativní servis spojený s vaším ošetřením. Pomůžeme s registrací, plánováním termínů, vedením zdravotní dokumentace i komunikací se zdravotními pojišťovnami. Naším cílem je zajistit pohodlný a bezproblémový průběh vaší návštěvy.",
	},
	{
		name: "Dentální hygiena",
		desc: "Profesionální dentální hygiena pomáhá předcházet vzniku zubního kazu, zánětu dásní a parodontózy. Součástí ošetření je odstranění zubního kamene, plaku a pigmentací, leštění zubů a individuální doporučení správné domácí péče. Pravidelná dentální hygiena přispívá ke zdravému chrupu, svěžímu dechu a krásnému úsměvu.",
	},
	{
		name: "Bělení",
		desc: "Profesionální bělení zubů je bezpečný a efektivní způsob, jak získat zářivější a bělejší úsměv. Používáme moderní a šetrné metody, které pomáhají odstranit pigmentace způsobené jídlem, nápoji nebo kouřením. Výsledkem jsou viditelně světlejší zuby a přirozeně krásný úsměv.",
	},
	{
		name: "Výplně",
		desc: "Zubní výplně slouží k ošetření zubního kazu a obnovení přirozeného tvaru i funkce zubu. Používáme kvalitní a estetické materiály, které barevně odpovídají vašim zubům a zajišťují dlouhou životnost ošetření. Naším cílem je zachovat zdraví chrupu a přirozený vzhled vašeho úsměvu.",
	},
	{
		name: "Retainery, dlahy",
		desc: "Retainery a ochranné dlahy pomáhají udržet správné postavení zubů po ortodontické léčbě a chrání chrup před nadměrným zatížením či skřípáním zubů. Zhotovujeme individuálně přizpůsobené dlahy pro maximální pohodlí, ochranu a dlouhodobé zachování zdravého úsměvu.",
	},
	{
		name: "Endodoncie",
		desc: "Endodontické ošetření, známé také jako ošetření kořenových kanálků, slouží k záchraně zubu postiženého hlubokým kazem nebo zánětem. Pomocí moderních metod důkladně vyčistíme a ošetříme kořenový systém zubu, čímž pomáháme odstranit bolest a zachovat vlastní zub co nejdéle. Ošetření provádíme šetrně a s důrazem na komfort pacienta.",
	},
	{
		name: "Chirurgie",
		desc: "Provádíme široké spektrum stomatochirurgických zákroků s důrazem na šetrnost, bezpečnost a komfort pacienta. Mezi nejčastější výkony patří extrakce zubů, chirurgické odstranění zubů moudrosti či ošetření zánětlivých ložisek. Používáme moderní postupy a kvalitní anestezii pro co nejpohodlnější průběh ošetření i rychlé hojení.",
	},
	{
		name: "Proteticke faze ordinacni",
		desc: "Protetické ošetření v ordinační fázi zahrnuje přípravu zubů, otisky, dočasné náhrady a další kroky potřebné pro zhotovení kvalitních protetických prací. Dbáme na preciznost, funkčnost i estetiku, aby výsledné korunky, můstky či náhrady dokonale odpovídaly vašim potřebám a přirozenému vzhledu chrupu.",
	},
	{
		name: "Samoplátci",
		desc: "Poskytujeme kvalitní stomatologickou péči také samoplátcům bez omezení zdravotní pojišťovnou. Nabízíme individuální přístup, moderní ošetření a transparentní cenovou politiku. Díky tomu si můžete zvolit péči a materiály přesně podle svých potřeb a očekávání.",
	},
];

const INIT_FORM = {
	firstName: "",
	lastName: "",
	email: "",
	tel: "",
	service: "",
	message: "",
};

export default function ContactsClient() {
	const t = useTranslations("contacts");

	const [form, setForm] = useState(INIT_FORM);
	const [loading, setLoading] = useState(false);
	const [success, setSuccess] = useState(false);

	const handleForm = (name: string, value: string) => {
		setForm((prev) => ({ ...prev, [name]: value }));
	};

	const sendBotMessage = async (e: React.FormEvent) => {
		e.preventDefault();
		setLoading(true);

		try {
			// TODO: LEARN THIS
			await fetch("/api/notify-lead", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(form),
			}).catch(() => {});
		} catch (error) {
			console.error(error);
		} finally {
			setLoading(false);
			setSuccess(true);

			setTimeout(() => {
				setSuccess(false);
				setForm(INIT_FORM);
			}, 3000);
		}
	};

	return (
		<form className="contacts-form" onSubmit={sendBotMessage}>
			<div className="contacts-form__inputs">
				<div className="contacts-form__input-wrapper">
					<input
						onChange={(e) => handleForm(e.target.name, e.target.value)}
						value={form.firstName}
						id="firstName"
						className="contacts-form__input js-contacts-form__input"
						type="text"
						name="firstName"
						autoComplete="given-name"
						required
						// TODO: learn this
						placeholder=" "
					/>
					<label htmlFor="firstName" className="contacts-form__label">
						{t("firstName")}
					</label>
				</div>
				<div className="contacts-form__input-wrapper">
					<input
						onChange={(e) => handleForm(e.target.name, e.target.value)}
						value={form.lastName}
						id="lastName"
						className="contacts-form__input  js-contacts-form__input"
						type="text"
						name="lastName"
						autoComplete="family-name"
						placeholder=" "
						required
					/>
					<label htmlFor="lastName" className="contacts-form__label">
						{t("lastName")}
					</label>
				</div>
			</div>
			<div className="contacts-form__inputs">
				<div className="contacts-form__input-wrapper">
					<input
						onChange={(e) => handleForm(e.target.name, e.target.value)}
						value={form.email}
						id="email"
						className="contacts-form__input js-contacts-form__input"
						type="email"
						name="email"
						autoComplete="email"
						placeholder=" "
					/>
					<label htmlFor="email" className="contacts-form__label">
						{t("email")}
					</label>
				</div>
				<div className="contacts-form__input-wrapper">
					<input
						onChange={(e) => handleForm(e.target.name, e.target.value)}
						value={form.tel}
						id="tel"
						className="contacts-form__input js-contacts-form__input"
						type="tel"
						name="tel"
						autoComplete="tel"
						required
						placeholder=" "
					/>
					<label htmlFor="tel" className="contacts-form__label">
						{t("tel")}
					</label>
				</div>
			</div>
			<div className="select-container">
				<label htmlFor="services">{t("service")}</label>
				<select
					onChange={(e) => handleForm(e.target.name, e.target.value)}
					value={form.service}
					className="select"
					name="service"
					id="sevices"
				>
					<option value="">{t("chooseService")}</option>
					{services.map((s, i) => {
						return (
							<option key={i} value={s.name}>
								{s.name}
							</option>
						);
					})}
				</select>
			</div>
			<div className="contacts-form__input-wrapper">
				<textarea
					onChange={(e) => handleForm(e.target.name, e.target.value)}
					value={form.message}
					id="message"
					className="contacts-form__textarea js-contacts-form__input"
					name="message"
					rows={5}
					placeholder=" "
					required
				/>
				<label htmlFor="message" className="contacts-form__label">
					{t("message")}
				</label>
			</div>
			{success && <p>Thank you! We will contact you as soon as posible.</p>}
			<button className="contacts-form__btn" type="submit">
				{loading ? "Sending..." : "Send"}
			</button>
		</form>
	);
}
