import { Lexend } from "next/font/google";
import type { Metadata } from "next";
import Footer from "@/components/layout/Footer/Footer";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import Loading from "@/components/Loading/Loading";
import { BASE_URL } from "@/lib/constants";
import Header from "@/components/layout/Header/Header";
import Banner from "@/components/Banner/Banner";
import { routing } from "@/i18n/routing";
import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import "@/styles/globals.scss";

const lexend = Lexend({
	variable: "--montserrat-font",
	weight: ["400", "500"],
	subsets: ["latin"],
});

export const metadata: Metadata = {
	metadataBase: new URL(BASE_URL),
	title: {
		template: "%s | Natadent",
		default: "Natadent",
	},
};

export function generateStaticParams() {
	return routing.locales.map((locale) => ({ locale }));
}

export const dynamicParams = false;

export default async function LocaleLayout({
	children,
	params,
}: Readonly<{
	children: React.ReactNode;
	params: Promise<{ locale: string }>;
}>) {
	const { locale } = await params;

	if (!hasLocale(routing.locales, locale)) notFound();

	setRequestLocale(locale);

	return (
		<html lang={locale} className={lexend.variable}>
			<body>
				<Loading />
				<Banner />
				<NextIntlClientProvider locale={locale}>
					<div className="wrapper" style={{ display: "none" }}>
						<Header />
						{children}
						<Footer />
					</div>
				</NextIntlClientProvider>
			</body>
		</html>
	);
}
