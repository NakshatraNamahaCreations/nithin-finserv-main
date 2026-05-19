import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "/terms" },
  title: "Terms & Conditions",
  description:
    "Terms and conditions for using our website and mutual fund distribution services. AMFI Registered MFD in Bengaluru. ARN: 307760.",
  keywords: [
    "nithin finserv terms",
    "mutual fund distributor terms of use",
    "MFD terms and conditions",
    "AMFI MFD terms",
  ],
  robots: { index: true, follow: true },
};

export default function TermsPage() {
  return (
    <>
      <div className="subpage-hero">
        <div className="subpage-in">
          <div className="subpage-tag">Legal</div>
          <h1 className="subpage-title">Terms &amp; Conditions</h1>
          <p className="subpage-sub">Last updated: May 2026 · Nithin Finserv · ARN: 307760</p>
        </div>
      </div>
      <div className="subpage-body">
        <div className="subpage-in">
          <div className="disc-box"><strong>Mutual Fund investments are subject to market risks. Read all scheme related documents carefully before investing.</strong></div>

          <Sec h="1. Nature of services" p="Nithin Finserv is an AMFI Registered Mutual Fund Distributor (ARN: 307760), NOT a SEBI-registered Investment Adviser. Content on this site does not constitute investment advice, solicitation, or guaranteed return projections. Financial calculators and blog posts are for illustration and education only." />
          <Sec h="2. Risk disclaimer" p="Mutual Fund investments are subject to market risks. NAV may go up or down. Past performance is not indicative of future results. No assurance or guarantee of returns is given at any time." />
          <Sec h="3. Commission disclosure" p="Nithin Finserv receives trail commission from AMCs per SEBI regulations. No fees are charged to investors. Commission details will be disclosed as required under SEBI and AMFI regulations." />
          <Sec h="4. Calculator disclaimer" p="All calculators on this website use assumed rates of return for illustration only. Actual returns may differ significantly. These are not guarantees or projections of actual investment performance." />
          <Sec h="5. Blog content" p="Blog posts are educational and informational. They do not constitute investment advice. Readers should consult their risk profile and read scheme documents before investing." />
          <Sec h="6. Governing law" p="Governed by laws of India. Disputes subject to jurisdiction of courts in Bengaluru, Karnataka. Contact: asnithin30@gmail.com" />
        </div>
      </div>
    </>
  );
}

function Sec({ h, p }: { h: string; p: string }) {
  return (
    <section className="mb-9">
      <h2 className="sp-h2">{h}</h2>
      <p className="sp-p">{p}</p>
    </section>
  );
}
