import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { CALCS } from "@/lib/calcs";
import { CALC_INFO } from "@/lib/calcInfo";
import CalculatorView from "@/components/CalculatorView";
import CalculatorInfo from "@/components/CalculatorInfo";

export function generateStaticParams() {
  return CALCS.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const calc = CALCS.find((c) => c.slug === slug);
  if (!calc) return { title: "Calculator" };

  const nameLower = calc.name.toLowerCase();
  const title = `${calc.name} — Free Online`;
  const description = `${calc.desc} Free online tool by an AMFI Registered MFD in Bengaluru. ARN: 307760.`;

  return {
    title,
    description,
    alternates: { canonical: `/calculators/${calc.slug}` },
    keywords: [
      nameLower,
      `${nameLower} online`,
      `${nameLower} india`,
      `free ${nameLower}`,
      "mutual fund calculator",
      "AMFI registered MFD",
    ],
    openGraph: {
      title,
      description,
      type: "website",
      siteName: "Nithin Finserv",
      locale: "en_IN",
    },
    twitter: {
      card: "summary",
      title: `${calc.name} — Free Online`,
      description: calc.desc,
    },
  };
}

export default async function CalculatorPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const calc = CALCS.find((c) => c.slug === slug);
  if (!calc) notFound();

  return (
    <>
      <div className="bg-[#071b2a] px-6 lg:px-12 pt-28 pb-10">
        <div className="max-w-[1200px] mx-auto">
          <Link href="/calculators" className="inline-flex items-center gap-1.5 text-[12px] text-white/55 hover:text-teal transition-colors mb-4">
            <svg className="w-3.5 h-3.5 stroke-current fill-none stroke-2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6" />
            </svg>
            All calculators
          </Link>
          <div className="flex items-center gap-3">
            <span className="text-[2rem]">{calc.icon}</span>
            <div>
              <h1 className="font-serif text-[clamp(1.4rem,2.6vw,2rem)] font-bold text-white leading-tight">{calc.name}</h1>
              <p className="text-[13px] text-white/55 mt-1">{calc.desc}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto px-6 lg:px-8 py-10">
        <CalculatorView calc={calc} />
      </div>

      <CalculatorInfo calc={calc} info={CALC_INFO[calc.id]} />
    </>
  );
}
