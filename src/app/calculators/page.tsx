import type { Metadata } from "next";
import CalculatorsListing from "@/components/CalculatorsListing";

export const metadata: Metadata = {
  alternates: { canonical: "/calculators" },
  title: "20+ Free Financial Calculators Online",
  description:
    "20+ free online calculators for SIP, EMI, PPF, FD, lumpsum, retirement, CAGR and GST. Built by an AMFI Registered MFD in Bengaluru. ARN: 307760.",
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
    title: "20+ Free Financial Calculators Online",
    description:
      "Free online calculators for SIP, EMI, PPF, FD, lumpsum, retirement, GST and CAGR. Built by an AMFI Registered MFD in Bengaluru.",
    type: "website",
    url: "/calculators",
  },
  twitter: {
    card: "summary",
    title: "20+ Free Financial Calculators Online",
    description: "Free online calculators for SIP, EMI, PPF, FD, retirement and more.",
  },
};

export default function CalculatorsPage() {
  return <CalculatorsListing />;
}
