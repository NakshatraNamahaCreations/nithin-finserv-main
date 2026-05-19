import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "/privacy" },
  title: "Privacy Policy",
  description:
    "How we collect, use and protect your personal information. Privacy practices of an AMFI Registered Mutual Fund Distributor in Bengaluru. ARN: 307760.",
  keywords: [
    "nithin finserv privacy policy",
    "mutual fund distributor privacy",
    "MFD data protection",
    "AMFI MFD privacy",
  ],
  robots: { index: true, follow: true },
};

export default function PrivacyPage() {
  return (
    <>
      <div className="subpage-hero">
        <div className="subpage-in">
          <div className="subpage-tag">Legal</div>
          <h1 className="subpage-title">Privacy Policy</h1>
          <p className="subpage-sub">Last updated: May 2026 · Nithin Finserv · ARN: 307760</p>
        </div>
      </div>
      <div className="subpage-body">
        <div className="subpage-in">
          <div className="disc-box">We comply with AMFI Data Sharing Principles (2024) and applicable Indian privacy laws including the DPDP Act 2023.</div>

          <Sec h="1. Information we collect">
            <ul className="sp-ul">
              <li>Name, mobile number, email — submitted via contact forms</li>
              <li>KYC data — collected only when you choose to invest, processed by AMCs / RTAs / Wealthy platform</li>
              <li>Browser metadata (anonymous) — for site analytics</li>
            </ul>
          </Sec>
          <Sec h="2. How we use your data">
            <ul className="sp-ul">
              <li>To contact you about your enquiry — phone, WhatsApp, or email</li>
              <li>To facilitate investment transactions via the Wealthy platform</li>
              <li>To send portfolio updates and review reminders (only if you opt in)</li>
            </ul>
          </Sec>
          <Sec h="3. Data sharing"><p className="sp-p">Per AMFI Data Sharing Principles, we share KYC data only with empanelled AMCs, RTAs (CAMS, KFin), and SEBI-regulated intermediaries strictly for executing your investment instructions. We do not sell your data to third parties.</p></Sec>
          <Sec h="4. Data retention"><p className="sp-p">We retain records for the duration required by SEBI / AMFI / Income Tax regulations (typically 8 years post account closure).</p></Sec>
          <Sec h="5. Your rights"><p className="sp-p">Under DPDP Act 2023, you can request access, correction, or deletion of your data. Email <a href="mailto:asnithin30@gmail.com" className="text-teal">asnithin30@gmail.com</a> with your request.</p></Sec>
        </div>
      </div>
    </>
  );
}

function Sec({ h, children }: { h: string; children: React.ReactNode }) {
  return (
    <section className="mb-9">
      <h2 className="sp-h2">{h}</h2>
      {children}
    </section>
  );
}
