import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "/about" },
  title: "About Us | AMFI Registered MFD, Bengaluru",
  description:
    "Trusted AMFI Registered Mutual Fund Distributor in Bengaluru. Personalised SIP, ELSS, retirement and insurance planning with 40+ AMC partners.",
  keywords: [
    "about nithin finserv",
    "mutual fund advisor bengaluru",
    "AMFI registered distributor",
    "ARN 307760",
    "financial planner bengaluru",
    "SIP advisor bengaluru",
    "trusted mutual fund distributor",
  ],
  openGraph: {
    title: "About Us | AMFI Registered MFD, Bengaluru",
    description: "AMFI Registered MFD in Bengaluru. Personalised SIP, ELSS, retirement and insurance planning. ARN: 307760.",
    type: "website",
  },
};

export default function AboutPage() {
  return (
    <>
      <div className="subpage-hero">
        <div className="subpage-in">
          <div className="subpage-tag">About us</div>
          <h1 className="subpage-title">About Nithin Finserv</h1>
          <p className="subpage-sub">AMFI Registered Mutual Fund Distributor · ARN: 307760 · Bengaluru, Karnataka</p>
        </div>
      </div>
      <div className="subpage-body">
        <div className="subpage-in">
          <div className="disc-box">
            ⚠️ <strong>Nithin Finserv is a Mutual Fund Distributor registered with AMFI. We are NOT a SEBI-registered Investment Adviser. We do not provide investment advice as defined under SEBI (Investment Advisers) Regulations, 2013 and do not charge advisory fees.</strong>
          </div>

          <section className="mb-9">
            <h2 className="sp-h2">Who we are</h2>
            <p className="sp-p">Nithin Finserv is an AMFI-registered Mutual Fund Distributor (ARN: 307760) based in Bengaluru, Karnataka. We distribute mutual fund products, insurance, bonds, and other regulated financial instruments through the Wealthy partner platform.</p>
            <p className="sp-p">We operate strictly under SEBI (Mutual Funds) Regulations, 1996 and the AMFI Code of Conduct for MFDs (Master Circular, December 2025).</p>
          </section>

          <section className="mb-9">
            <h2 className="sp-h2">Registration</h2>
            <div className="sp-highlight"><strong>AMFI Registration Number (ARN)</strong><p>ARN: 307760</p></div>
            <div className="sp-highlight"><strong>NISM Certification</strong><p>NISM Series V-A: Mutual Fund Distributors</p></div>
            <div className="sp-highlight"><strong>Platform</strong><p>Wealthy.in — BSE StAR MF empanelled</p></div>
            <div className="sp-highlight"><strong>Location</strong><p>Bengaluru, Karnataka, India</p></div>
          </section>

          <section className="mb-9">
            <h2 className="sp-h2">Our commitments (AMFI Code of Conduct)</h2>
            <ul className="sp-ul">
              <li>Investor interest is always paramount</li>
              <li>No scheme recommendation based on commission</li>
              <li>Full commission disclosure as required by SEBI</li>
              <li>No rebate or pass-back to investors</li>
              <li>No promise of guaranteed returns at any time</li>
              <li>Suitability assessment before any recommendation</li>
              <li>Data confidentiality per AMFI Data Sharing Principles</li>
            </ul>
          </section>
        </div>
      </div>
    </>
  );
}
