import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-navy px-6 lg:px-12 py-11">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-[1.5fr_1fr_1fr_1fr] gap-6 md:gap-9 mb-7">
          <div>
            <div className="font-serif text-[18px] font-bold text-white mb-2">Nithin <span className="text-teal">Finserv</span></div>
            <p className="text-[14px] text-white/40 leading-[1.7] max-w-[240px] mb-3">AMFI Registered Mutual Fund Distributor based in Bengaluru, Karnataka. We help you build long-term wealth via SIPs, ELSS, insurance, and bonds — across 40+ AMCs.</p>
            <div className="text-[12px] text-teal font-medium">ARN: 307760</div>
          </div>

          <div>
            <h4 className="text-[15px] font-semibold text-white tracking-[1px] uppercase mb-3">Pages</h4>
            <FooterLink href="/">Home</FooterLink>
            <FooterLink href="/calculators">Calculators</FooterLink>
            <FooterLink href="/blog">Blog</FooterLink>
            <FooterLink href="/about">About us</FooterLink>
            <FooterLink href="/contact">Contact</FooterLink>
          </div>

          <div>
            <h4 className="text-[15px] font-semibold text-white tracking-[1px] uppercase mb-3">Products</h4>
            <span className="block text-[15px] text-white/55 mb-1.5">Mutual Funds</span>
            <span className="block text-[15px] text-white/55 mb-1.5">Insurance</span>
            <span className="block text-[15px] text-white/55 mb-1.5">Bonds</span>
            <span className="block text-[15px] text-white/55 mb-1.5">PMS</span>
          </div>

          <div>
            <h4 className="text-[15px] font-semibold text-white tracking-[1px] uppercase mb-3">Legal</h4>
            <FooterLink href="/terms">Terms &amp; Conditions</FooterLink>
            <FooterLink href="/privacy">Privacy Policy</FooterLink>
            <FooterLink href="/disclosure">Disclosures</FooterLink>
            <a href="https://www.amfiindia.com" target="_blank" rel="noreferrer" className="block text-[15px] text-white/55 hover:text-teal no-underline mb-1.5 transition-colors">AMFI India</a>
            <a href="https://scores.gov.in" target="_blank" rel="noreferrer" className="block text-[15px] text-white/55 hover:text-teal no-underline mb-1.5 transition-colors">SEBI SCORES</a>
          </div>
        </div>

        <hr className="border-0 border-t border-white/10 mb-4.5" />

        <div className="flex flex-wrap justify-between items-start gap-5">
          <p className="text-[11px] text-white/30 leading-[1.7] max-w-[660px]">
            <strong>Mutual Fund investments are subject to market risks. Read all scheme related documents carefully before investing.</strong> Nithin Finserv is an AMFI Registered Mutual Fund Distributor (ARN: 307760) — not a SEBI Registered Investment Adviser. We do not provide investment advice as defined under SEBI (Investment Advisers) Regulations, 2013. Past performance is not indicative of future results.
          </p>
          <p className="text-[10.5px] text-teal text-right whitespace-nowrap">© 2026 Nithin Finserv</p>
        </div>
      </div>
    </footer>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="block text-[15px] text-white/55 hover:text-teal no-underline mb-1.5 transition-colors">
      {children}
    </Link>
  );
}
