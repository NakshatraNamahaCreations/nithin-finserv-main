import type { Metadata } from "next";
import CalculatorsListing from "@/components/CalculatorsListing";

export const metadata: Metadata = {
  alternates: { canonical: "/calculators" },
  title: "Free Financial Calculators | SIP, EMI, PPF, FD, CAGR & More | Nithin Finserv",
  description:
    "20+ free online financial calculators for SIP returns, EMI, PPF maturity, FD growth, lumpsum, retirement planning, CAGR, GST and more. Built by AMFI Registered MFD Nithin Finserv (ARN: 307760), Bengaluru.",
  keywords: [
    "sip calculator",
    "emi calculator",
    "ppf calculator",
    "fd calculator",
    "lumpsum calculator",
    "retirement calculator india",
    "cagr calculator",
    "step up sip calculator",
    "child education calculator",
    "free financial calculators india",
    "mutual fund calculator",
    "gst calculator",
    "gratuity calculator",
    "compound interest calculator",
    "rd calculator",
  ],
  openGraph: {
    title: "Free Financial Calculators — SIP, EMI, PPF, FD, CAGR & More",
    description:
      "20+ free online financial calculators built by AMFI Registered MFD Nithin Finserv. SIP, EMI, PPF, FD, lumpsum, retirement, GST, CAGR and more.",
    type: "website",
    url: "/calculators",
  },
  twitter: {
    card: "summary",
    title: "Free Financial Calculators | Nithin Finserv",
    description: "20+ free online calculators for SIP, EMI, PPF, FD, retirement and more.",
  },
};

export default function CalculatorsPage() {
  return <CalculatorsListing />;
}
