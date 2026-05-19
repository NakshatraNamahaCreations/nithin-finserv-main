import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "/disclosure" },
  title: "AMFI Disclosures & Distributor Info",
  description:
    "Mandatory AMFI disclosures (ARN: 307760). Distributor commissions, conflicts of interest, regulatory status and SEBI compliance information.",
  keywords: [
    "nithin finserv disclosures",
    "AMFI distributor disclosures",
    "MFD commission disclosure",
    "ARN 307760 disclosure",
    "mutual fund distributor regulatory disclosures",
  ],
  robots: { index: true, follow: true },
};

export default function DisclosurePage() {
  return (
    <>
      <div className="subpage-hero">
        <div className="subpage-in">
          <div className="subpage-tag">Legal</div>
          <h1 className="subpage-title">Disclosures</h1>
          <p className="subpage-sub">Statutory disclosures · Nithin Finserv · ARN: 307760</p>
        </div>
      </div>
      <div className="subpage-body">
        <div className="subpage-in">
          <div className="disc-box"><strong>Nithin Finserv is an AMFI Registered Mutual Fund Distributor (ARN: 307760). We are NOT a SEBI-registered Investment Adviser. We do not charge investors any fees for our services.</strong></div>

          <section className="mb-9">
            <h2 className="sp-h2">Registration details</h2>
            <div className="sp-highlight"><strong>AMFI Registration Number</strong><p>ARN: 307760</p></div>
            <div className="sp-highlight"><strong>NISM Certification</strong><p>NISM Series V-A: Mutual Fund Distributors</p></div>
            <div className="sp-highlight"><strong>EUIN</strong><p>E584422 (Employee Unique Identification Number)</p></div>
            <div className="sp-highlight"><strong>Validity</strong><p>TILL 11 SEP 2027</p></div>
          </section>

          <section className="mb-9">
            <h2 className="sp-h2">Commission disclosure</h2>
            {/* <p className="sp-p">Nithin Finserv receives trail commission from Asset Management Companies (AMCs) as per SEBI regulations. Commission rates vary by scheme and AMC — typically 0.05% to 1.25% per annum on assets under our distribution.</p> */}
            <p className="sp-p">Nithin Finserv receives trail commission from Asset Management Companies (AMCs) as per SEBI regulations. Commission rates vary by scheme and AMC</p>
          </section>

          <section className="mb-9">
            <h2 className="sp-h2">Conflict of interest</h2>
            <p className="sp-p">We do not recommend schemes based on commission rates. Fund recommendations are made based on the investor&apos;s risk profile, financial goals, and investment horizon — never based on what pays us more.</p>
          </section>

          <section className="mb-9">
            <h2 className="sp-h2">Investor grievance</h2>
            <p className="sp-p">For any grievances, contact us first at <a href="mailto:asnithin30@gmail.com" className="text-teal">asnithin30@gmail.com</a>. Unresolved grievances may be escalated to:</p>
            <ul className="sp-ul">
              <li>AMFI: <a href="https://www.amfiindia.com" target="_blank" rel="noreferrer" className="text-teal">www.amfiindia.com</a></li>
              <li>SEBI SCORES: <a href="https://scores.gov.in" target="_blank" rel="noreferrer" className="text-teal">scores.gov.in</a></li>
            </ul>
          </section>
        </div>
      </div>
    </>
  );
}
