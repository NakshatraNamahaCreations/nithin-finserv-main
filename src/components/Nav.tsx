"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/calculators", label: "Calculators" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 z-[200] bg-white border-b border-border px-6 lg:px-10 py-3.5 flex items-center justify-between gap-4 shadow-[0_1px_12px_rgba(0,0,0,0.06)]">
      <Link href="/" className="flex items-center gap-2 no-underline">
        <div className="relative w-9 h-9 bg-navy hex-clip flex items-center justify-center font-bold text-[11px] text-white font-serif shrink-0">
          <span className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[4px] border-r-[4px] border-b-[6px] border-l-transparent border-r-transparent border-b-teal" />
          NF
        </div>
        <div>
          <div className="font-serif text-sm font-bold text-navy leading-[1.15]">Nithin Finserv</div>
          <div className="text-[8px] text-teal tracking-[1.5px] uppercase">AMFI Registered · ARN: 307760</div>
        </div>
      </Link>

      <ul className="hidden md:flex gap-5 list-none">
        {links.map((l) => {
          const isHash = l.href.includes("#");
          const active = isHash ? false : l.href === "/" ? pathname === "/" : pathname.startsWith(l.href);
          return (
            <li key={l.href}>
              <Link
                href={l.href}
                className={`text-[15px] font-medium transition-colors ${active ? "text-teal" : "text-gray hover:text-teal"}`}
              >
                {l.label}
              </Link>
            </li>
          );
        })}
      </ul>

      <div className="flex items-center gap-2">
        <Link
          href="/contact"
          className="hidden sm:inline-block bg-teal hover:bg-teal-2 text-white px-4 py-2 rounded-md text-[12.5px] font-medium transition-colors no-underline whitespace-nowrap"
        >
          Free Consultation
        </Link>
        <a
          href="https://www.wealthy.in/partners/nithi58604"
          target="_blank"
          rel="noreferrer"
          className="bg-teal hover:bg-teal-2 text-white px-5 py-2 rounded-md text-[12.5px] font-medium transition-colors no-underline whitespace-nowrap"
        >
          Start Investing →
        </a>
      </div>
    </nav>
  );
}
