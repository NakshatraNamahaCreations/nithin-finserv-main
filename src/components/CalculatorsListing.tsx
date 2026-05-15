"use client";

import { useState } from "react";
import Link from "next/link";
import { CALCS, type CalcCategory, type CalcDef } from "@/lib/calcs";

export default function CalculatorsListing() {
  const [query, setQuery] = useState("");
  const [cat, setCat] = useState<CalcCategory | "all">("all");

  const filtered = CALCS.filter((c) => {
    if (cat !== "all" && c.cat !== cat) return false;
    if (query.trim()) {
      const q = query.toLowerCase();
      return c.name.toLowerCase().includes(q) || c.desc.toLowerCase().includes(q);
    }
    return true;
  });

  return (
    <>
      {/* Hero banner */}
      <div className="relative overflow-hidden bg-[#071b2a] px-6 lg:px-12 pt-32 pb-14 text-center">
        <div
          aria-hidden
          className="absolute -top-20 left-1/2 -translate-x-1/2 w-[680px] h-[340px] pointer-events-none z-0"
          style={{ background: "radial-gradient(ellipse, rgba(16,185,129,0.18) 0%, transparent 70%)" }}
        />
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none z-0"
          style={{
            backgroundImage: "radial-gradient(rgba(255,255,255,0.04) 1px, transparent 1px)",
            backgroundSize: "18px 18px",
            maskImage: "linear-gradient(to bottom, #000 0%, transparent 85%)",
            WebkitMaskImage: "linear-gradient(to bottom, #000 0%, transparent 85%)",
          }}
        />

        <div className="relative z-10 max-w-[760px] mx-auto">
          <span className="inline-flex items-center gap-2 bg-[#10B981]/[0.13] border border-[#10B981]/30 text-[#10B981] text-[10.5px] font-semibold tracking-[1.6px] uppercase px-4 py-1.5 rounded-full mb-4.5 backdrop-blur-sm">
            <span className="relative w-1.5 h-1.5 rounded-full bg-[#10B981] shrink-0">
              <span className="absolute inset-[-3px] rounded-full bg-[#10B981] opacity-50 animate-calc-pulse" />
            </span>
            Free Financial Calculators
          </span>

          <h1 className="font-serif text-[clamp(1.7rem,3.4vw,2.55rem)] font-bold text-white mb-3 leading-[1.18] tracking-[-0.5px]">
            Plan your wealth with<br />
            <em className="not-italic text-[#10B981] relative inline-block">
              smart calculators
              <span className="absolute left-0 right-0 -bottom-0.5 h-0.5 bg-gradient-to-r from-transparent via-[#10B981] to-transparent" />
            </em>
          </h1>

          <p className="text-sm text-white/55 leading-[1.7] max-w-[560px] mx-auto mb-7">
            20 free calculators covering investments, loans, tax and savings. Built for Indian investors by Nithin Finserv, AMFI Registered MFD, Bengaluru.
          </p>

          <div className="flex justify-center gap-x-12 gap-y-6 flex-wrap border-t border-white/10 pt-7 mt-8">
            <Stat val="20" sup="+" label="Calculators" />
            <Stat val="100" sup="%" label="Free forever" />
            <Stat val="₹0" label="Consultation fee" />
            <Stat val="40" sup="+" label="AMC partners" />
          </div>
        </div>
      </div>

      {/* Search */}
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8 mt-8">
        <div className="relative">
          <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-[18px] h-[18px] stroke-gray fill-none stroke-2 pointer-events-none" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search calculators… e.g. SIP, EMI, PPF, CAGR"
            className="w-full px-5 py-3.5 pl-12 border-[1.5px] border-border focus:border-teal rounded-[10px] text-sm text-navy outline-none transition-colors bg-white shadow-[0_2px_12px_rgba(0,0,0,0.05)]"
          />
        </div>
      </div>

      {/* Category tabs */}
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8 mt-6 flex gap-2 flex-wrap">
        <CatTab active={cat === "all"} onClick={() => setCat("all")} legal={false}>All (20)</CatTab>
        <CatTab active={cat === "invest"} onClick={() => setCat("invest")} legal={false}>📈 Investment (17)</CatTab>
        <CatTab active={cat === "legal"} onClick={() => setCat("legal")} legal={true}>⚖️ Legal &amp; Tax (3)</CatTab>
      </div>

      {/* Grids */}
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8 mt-8 pb-16">
        <SectionHeading dotClass="bg-teal" title="Investment Calculators" sub={`${filtered.filter((c) => c.cat === "invest").length} of 17`} />
        <Grid items={filtered.filter((c) => c.cat === "invest")} />

        <SectionHeading dotClass="bg-legal" title="Legal & Tax Calculators" sub={`${filtered.filter((c) => c.cat === "legal").length} of 3`} />
        <Grid items={filtered.filter((c) => c.cat === "legal")} />

        <p className="text-[11px] text-gray border-t border-border pt-5 mt-4 leading-[1.7]">
          ⚠️ <strong>Disclaimer:</strong> All calculators are for illustration and educational purposes only. Mutual Fund investments are subject to market risks. Returns shown are based on assumed rates and may differ from actual performance. Past performance is not indicative of future results. Read all scheme-related documents carefully before investing. Nithin Finserv is an AMFI Registered Mutual Fund Distributor (ARN: 307760) — not a SEBI Registered Investment Adviser.
        </p>
      </div>
    </>
  );
}

function Stat({ val, sup, label }: { val: string; sup?: string; label: string }) {
  return (
    <div className="text-center">
      <div className="font-serif text-[1.85rem] font-bold text-white leading-none tracking-[-0.5px]">
        {val}{sup && <sup className="text-[0.85rem] text-[#10B981] font-semibold ml-px">{sup}</sup>}
      </div>
      <div className="text-[11px] text-white/40 mt-1.5">{label}</div>
    </div>
  );
}

function CatTab({ active, legal, onClick, children }: { active: boolean; legal: boolean; onClick: () => void; children: React.ReactNode }) {
  const activeBg = legal ? "bg-legal border-legal" : "bg-teal border-teal";
  return (
    <button
      onClick={onClick}
      className={`px-4 py-1.5 rounded-full text-[12.5px] font-medium border-[1.5px] transition-all ${
        active ? `${activeBg} text-white` : "bg-white text-gray border-border hover:border-teal hover:text-teal"
      }`}
    >
      {children}
    </button>
  );
}

function SectionHeading({ dotClass, title, sub }: { dotClass: string; title: string; sub: string }) {
  return (
    <div className="flex items-center gap-3 mb-5 mt-2">
      <div className={`w-2.5 h-2.5 rounded-full ${dotClass}`} />
      <h2 className="font-serif text-[1.25rem] font-bold text-navy">{title}</h2>
      <span className="text-xs text-gray">{sub}</span>
    </div>
  );
}

function Grid({ items }: { items: CalcDef[] }) {
  if (items.length === 0) {
    return <p className="text-xs text-gray mb-10">No calculators match your search.</p>;
  }
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
      {items.map((c) => (
        <Link
          key={c.id}
          href={`/calculators/${c.slug}`}
          className="text-left bg-white border-[1.5px] border-border rounded-[14px] overflow-hidden cursor-pointer transition-all flex flex-col hover:border-teal hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(16,185,129,0.1)]"
        >
          <div className="h-[100px] flex items-center justify-center relative" style={{ background: c.bg }}>
            <span className="text-[2.75rem]">{c.icon}</span>
            <span
              className={`absolute top-2.5 right-2.5 text-[9.5px] font-semibold px-2.5 py-0.5 rounded-full uppercase tracking-[0.5px] ${
                c.cat === "invest" ? "bg-light text-teal" : "bg-[#eeecfe] text-legal"
              }`}
            >
              {c.cat === "invest" ? "Invest" : "Legal"}
            </span>
          </div>
          <div className="p-4 flex-1 flex flex-col">
            <div className="text-[13.5px] font-semibold text-navy mb-1.5 leading-[1.35]">{c.name}</div>
            <div className="text-[11.5px] text-gray leading-[1.6] flex-1">{c.desc}</div>
            <div className="mt-3.5 flex items-center justify-between">
              <span className="text-xs font-medium text-teal">Launch Calculator</span>
              <svg className="w-4 h-4 stroke-teal fill-none stroke-2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
