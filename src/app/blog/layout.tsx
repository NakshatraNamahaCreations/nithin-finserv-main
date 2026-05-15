import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "/blog" },
  title: "Blog | SIP, ELSS, Tax Saving & Investment Insights",
  description:
    "Investment insights, market updates, SIP strategies, tax-saving tips, retirement planning guidance and personal finance articles from AMFI Registered MFD Nithin Finserv, Bengaluru (ARN: 307760).",
  keywords: [
    "mutual fund blog india",
    "sip investing tips",
    "tax saving blog",
    "retirement planning blog",
    "elss tips india",
    "investment blog bengaluru",
    "personal finance blog india",
    "nithin finserv blog",
    "mutual fund insights",
    "market update india",
  ],
  openGraph: {
    title: "Nithin Finserv Blog — Investment Insights & SIP Tips",
    description:
      "SIP strategies, tax-saving tips, retirement planning and market insights from AMFI Registered MFD Nithin Finserv, Bengaluru.",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Nithin Finserv Blog — SIP, Tax & Investment Insights",
    description: "Investment insights and SIP tips from AMFI Registered MFD in Bengaluru.",
  },
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return children;
}
