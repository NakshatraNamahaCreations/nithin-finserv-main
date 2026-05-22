import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import Script from "next/script";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import "./globals.css";

const GA_ID = "G-43RE7RE75F";

const playfair = Playfair_Display({ subsets: ["latin"], weight: ["600", "700"], variable: "--font-playfair" });
const dmSans = DM_Sans({ subsets: ["latin"], weight: ["300", "400", "500", "600"], variable: "--font-dm-sans" });

export const metadata: Metadata = {
  metadataBase: new URL("https://nithinfinserv.com"),
  alternates: { canonical: "/" },
  title: {
    default: "Nithin Finserv | AMFI Registered Mutual Fund Distributor in Bengaluru",
    template: "%s | Nithin Finserv",
  },
  description:
    "Start SIP from ₹500. Invest in mutual funds, ELSS, insurance and retirement plans with an AMFI Registered MFD in Bengaluru. ARN: 307760. 40+ AMC partners.",
  keywords: [
    "mutual fund distributor bengaluru",
    "AMFI registered MFD",
    "SIP investment",
    "ELSS tax saving",
    "best mutual funds india",
    "free portfolio review",
    "Nithin Finserv",
    "ARN 307760",
    "mutual fund consultant bengaluru",
    "online mutual fund investment",
    "retirement planning bengaluru",
  ],
  authors: [{ name: "Nithin Finserv" }],
  creator: "Nithin Finserv",
  publisher: "Nithin Finserv",
  category: "Finance",
  openGraph: {
    type: "website",
    siteName: "Nithin Finserv",
    locale: "en_IN",
    title: "Nithin Finserv | AMFI Registered Mutual Fund Distributor in Bengaluru",
    description:
      "Start SIP from ₹500. Mutual funds, ELSS, insurance and retirement planning with an AMFI Registered MFD in Bengaluru. 40+ AMC partners. ARN: 307760.",
  },
  twitter: {
    card: "summary",
    title: "AMFI Registered Mutual Fund Distributor in Bengaluru",
    description:
      "Start SIP from ₹500. Mutual funds, ELSS, insurance and retirement planning with an AMFI Registered MFD. ARN: 307760.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} ${dmSans.variable}`} suppressHydrationWarning>
      <body suppressHydrationWarning>
        <Nav />
        {children}
        <Footer />
        <FloatingCTA />

        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}');
          `}
        </Script>
      </body>
    </html>
  );
}
