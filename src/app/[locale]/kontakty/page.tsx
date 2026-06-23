import { getTranslations } from "next-intl/server";
import Breadcrumbs from "@/components/common/Breadcrumbs/Breadcrumbs";
import Container from "@/components/Container/Container";
import type { Metadata } from "next";
import { BASE_URL } from "@/lib/constants";
import { routing } from "@/i18n/routing";
import ContactsClient from "./ContactsClient";
import "./styles.scss";

const page = "kontakty";

export async function generateMetadata({
	params,
}: {
	params: Promise<{ locale: string }>;
}): Promise<Metadata> {
	const { locale } = await params;
	const t = await getTranslations({ locale, namespace: "contacts.meta" });

	const languages = Object.fromEntries(
		routing.locales.map((l) => [l, `${BASE_URL}/${l}/${page}`]),
	);

	return {
		title: t("title"),
		description: t("description"),
		alternates: {
			canonical: `${BASE_URL}/${locale}/${page}`,
			languages: {
				...languages,
				"x-default": `${BASE_URL}/${routing.defaultLocale}/${page}`,
			},
		},
	};
}

export default async function Contacts({
	params,
}: {
	params: Promise<{ locale: string }>;
}) {
	const { locale } = await params;
	const t = await getTranslations("contacts");

	return (
		<main className="contacts">
			<Container>
				<Breadcrumbs title={t("heading")} url={`/${locale}/${page}`} />
				<h1 className="page__title">{t("heading")}</h1>
				<div className="contacts-wrapper">
					<p className="contacts__secondary-info">{t("subheading")}</p>
					<div className="contacts-details">
						<div>
							<img
								className="contacts__email-img"
								src="/icons/telephone.png"
								width={30}
								height={30}
								alt=""
							/>
							<p className="contacts__phone">{t("tel")}</p>
							<a className="contacts__phone-link" href="tel:+420773853539">
								+420 773 853 539
							</a>
						</div>
						<div>
							<img
								className="contacts__email-img"
								src="/icons/mail.png"
								width={30}
								height={30}
								alt=""
							/>
							<p className="contacts__email">{t("email")}</p>
							<a
								className="contacts__email-link"
								href="mailto:info@natadent.cz"
							>
								info@natadent.cz
							</a>
						</div>
						<div>
							<img
								className="contacts__email-img"
								src="/icons/pin.png"
								width={30}
								height={30}
								alt=""
							/>
							<p className="contacts__address">{t("address")}</p>
							<a
								className="contacts__email-link"
								href="https://maps.app.goo.gl/z5moH8T3Wa4Wmt2s5"
								target="_blank"
							>
								Pod Hroby 1026, 280 02 Kolín 2
							</a>
						</div>
					</div>
					<h2 className="contacts__appointment-title">
						{t("appointmentTitle")}
					</h2>
					<ContactsClient />
					<div className="contacts__maps-container">
						<div>
							<h2 className="contacts__map-title">{t("visitUsOnGoogle")}</h2>
							<iframe
								className="contacts__map"
								src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d906.2737924918879!2d15.213754247414611!3d50.02392366268641!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470c155b8cfe1db9%3A0x4e0e3a3f6277c27f!2sNATADENT%20s.r.o.!5e0!3m2!1sen!2scz!4v1772115528843!5m2!1sen!2scz"
								loading="lazy"
							></iframe>
						</div>
						<div>
							<h2 className="contacts__map-title">{t("visitUsOnMapy")}</h2>
							<iframe
								className="contacts__map"
								src="https://mapy.com/s/celezobomu"
								loading="lazy"
							></iframe>
						</div>
					</div>
				</div>
			</Container>
		</main>
	);
}
