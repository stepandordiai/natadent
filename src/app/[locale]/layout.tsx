import { Lexend } from "next/font/google";
import type { Metadata } from "next";
import Footer from "@/components/layout/Footer/Footer";
import { NextIntlClientProvider } from "next-intl";
import Loading from "@/components/Loading/Loading";
import { BASE_URL } from "@/lib/constants";
import Header from "@/components/layout/Header/Header";
import "@/styles/globals.scss";
import Banner from "@/components/Banner/Banner";

const montserrat = Lexend({
	variable: "--montserrat-font",
	weight: ["400", "500"],
	subsets: ["latin"],
});

export const metadata: Metadata = {
	metadataBase: BASE_URL,
};

export default async function LocaleLayout({
	children,
	params,
}: Readonly<{
	children: React.ReactNode;
	params: Promise<{ locale: string }>;
}>) {
	const { locale } = await params;

	return (
		<html lang={locale} className={montserrat.variable}>
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
