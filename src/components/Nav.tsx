"use client";

import { useEffect, useState } from "react";
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
  const [open, setOpen] = useState(false);

  // Close on route change
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Close on Escape, lock background scroll while open
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setOpen(false); };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <nav className="sticky top-0 z-[200] bg-white border-b border-border px-4 sm:px-6 lg:px-10 py-3 sm:py-3.5 flex items-center justify-between gap-3 shadow-[0_1px_12px_rgba(0,0,0,0.06)]">
      <Link href="/" className="flex items-center gap-2 no-underline min-w-0">
        <div className="relative w-9 h-9 bg-navy hex-clip flex items-center justify-center font-bold text-[11px] text-white font-serif shrink-0">
          <span className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[4px] border-r-[4px] border-b-[6px] border-l-transparent border-r-transparent border-b-teal" />
          NF
        </div>
        <div className="min-w-0">
          <div className="font-serif text-sm font-bold text-navy leading-[1.15] truncate">Nithin Finserv</div>
          <div className="text-[8px] text-teal tracking-[1.5px] uppercase truncate">AMFI Registered · ARN: 307760</div>
        </div>
      </Link>

      <ul className="hidden md:flex gap-5 list-none">
        {links.map((l) => {
          const active = l.href === "/" ? pathname === "/" : pathname.startsWith(l.href);
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
          className="hidden lg:inline-block bg-teal hover:bg-teal-2 text-white px-4 py-2 rounded-md text-[12.5px] font-medium transition-colors no-underline whitespace-nowrap"
        >
          Free Consultation
        </Link>
        <a
          href="https://www.wealthy.in/partners/nithi58604"
          target="_blank"
          rel="noreferrer"
          className="hidden sm:inline-block bg-teal hover:bg-teal-2 text-white px-4 lg:px-5 py-2 rounded-md text-[12.5px] font-medium transition-colors no-underline whitespace-nowrap"
        >
          Start Investing →
        </a>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          className="md:hidden inline-flex flex-col items-center justify-center w-10 h-10 -mr-1 text-navy hover:text-teal transition-colors"
        >
          <span className={`block w-5 h-[2px] bg-current rounded transition-transform duration-200 ${open ? "translate-y-[7px] rotate-45" : ""}`} />
          <span className={`block w-5 h-[2px] bg-current rounded mt-1.5 transition-opacity duration-200 ${open ? "opacity-0" : ""}`} />
          <span className={`block w-5 h-[2px] bg-current rounded mt-1.5 transition-transform duration-200 ${open ? "-translate-y-[7px] -rotate-45" : ""}`} />
        </button>
      </div>

      {/* Mobile dropdown menu */}
      <div
        id="mobile-menu"
        className={`md:hidden absolute left-0 right-0 top-full bg-white border-b border-border shadow-[0_8px_24px_rgba(0,0,0,0.08)] origin-top transition-[opacity,transform] duration-200 ${
          open ? "opacity-100 scale-y-100 pointer-events-auto" : "opacity-0 scale-y-95 pointer-events-none"
        }`}
      >
        <ul className="flex flex-col list-none px-5 py-2">
          {links.map((l) => {
            const active = l.href === "/" ? pathname === "/" : pathname.startsWith(l.href);
            return (
              <li key={l.href}>
                <Link
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className={`block py-3 text-[15px] font-medium border-b border-border/60 transition-colors ${active ? "text-teal" : "text-navy hover:text-teal"}`}
                >
                  {l.label}
                </Link>
              </li>
            );
          })}
        </ul>
        <div className="px-5 pb-4 pt-2 flex flex-col gap-2">
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="lg:hidden bg-cream hover:bg-light text-navy text-center py-3 rounded-md text-[13px] font-medium transition-colors no-underline border border-border"
          >
            Free Consultation
          </Link>
          <a
            href="https://www.wealthy.in/partners/nithi58604"
            target="_blank"
            rel="noreferrer"
            onClick={() => setOpen(false)}
            className="sm:hidden bg-teal hover:bg-teal-2 text-white text-center py-3 rounded-md text-[13px] font-medium transition-colors no-underline"
          >
            Start Investing →
          </a>
        </div>
      </div>

      {/* Backdrop — closes menu on outside tap */}
      {open && (
        <div
          className="md:hidden fixed inset-0 top-full bg-navy/30 -z-10"
          onClick={() => setOpen(false)}
          aria-hidden
        />
      )}
    </nav>
  );
}
