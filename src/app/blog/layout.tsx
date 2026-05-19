import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "/blog" },
  title: "Blog — SIP, ELSS & Investment Insights",
  description:
    "Investment insights, SIP strategies, tax-saving tips and retirement planning from an AMFI Registered MFD in Bengaluru. ARN: 307760.",
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
    title: "Blog — Investment Insights & SIP Tips",
    description:
      "SIP strategies, tax-saving tips, retirement planning and market insights from an AMFI Registered MFD in Bengaluru.",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Blog — SIP, Tax & Investment Insights",
    description: "Investment insights and SIP tips from an AMFI Registered MFD in Bengaluru.",
  },
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return children;
}
