import type { CalcDef } from "@/lib/calcs";
import type { CalcInfo } from "@/lib/calcInfo";

export default function CalculatorInfo({ calc, info }: { calc: CalcDef; info: CalcInfo }) {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: info.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <section className="max-w-[1200px] mx-auto px-6 lg:px-8 pb-16">
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <article className="bg-white border border-border rounded-[16px] p-7 md:p-9">
        <header className="mb-5">
          <div className="text-[10.5px] font-semibold text-teal tracking-[1.5px] uppercase mb-2">About this calculator</div>
          <h2 className="font-serif text-[1.5rem] md:text-[1.6rem] font-bold text-navy leading-tight">
            {calc.name} — explained
          </h2>
        </header>

        {info.about.split("\n\n").map((para, i) => (
          <p key={i} className="text-[14px] text-gray leading-[1.8] mb-4">{para}</p>
        ))}

        <div className="mt-7 mb-7">
          <h3 className="font-serif text-[1.15rem] font-bold text-navy mb-3">What is the {calc.name}?</h3>
          <p className="text-[14px] text-gray leading-[1.8]">{info.whatIs}</p>
        </div>

        <div className="bg-cream border-l-4 border-teal rounded-r-md px-5 py-4 mb-5">
          <div className="text-[11px] font-semibold text-navy tracking-[0.5px] uppercase mb-1.5">How it works — the formula</div>
          <p className="text-[13.5px] text-gray leading-[1.75]">{info.howItWorks}</p>
        </div>

        {/* Hidden for now — uncomment to restore the worked-example callout
        <div className="bg-light/60 border border-teal/15 rounded-md px-5 py-4 mb-7">
          <div className="text-[11px] font-semibold text-teal tracking-[0.5px] uppercase mb-1.5">Worked example</div>
          <p className="text-[13.5px] text-gray leading-[1.75]">{info.example}</p>
        </div>
        */}

        <div className="mb-7">
          <h3 className="font-serif text-[1.15rem] font-bold text-navy mb-3">How to use this calculator</h3>
          <ol className="space-y-2.5 list-none">
            {info.howToUse.map((s, i) => (
              <li key={i} className="flex gap-3 text-[13.5px] text-gray leading-[1.7]">
                <span className="shrink-0 w-6 h-6 rounded-full bg-teal/10 text-teal text-[11px] font-semibold inline-flex items-center justify-center mt-0.5">{i + 1}</span>
                <span>{s}</span>
              </li>
            ))}
          </ol>
        </div>

        <div className="mb-7">
          <h3 className="font-serif text-[1.15rem] font-bold text-navy mb-3">Key features</h3>
          <ul className="space-y-2">
            {info.keyFeatures.map((f, i) => (
              <li key={i} className="flex gap-2.5 text-[13.5px] text-gray leading-[1.7]">
                <span className="text-teal shrink-0 mt-0.5">✓</span>
                <span>{f}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Hidden for now — uncomment to restore Best for / use cases
        <div className="mb-7">
          <h3 className="font-serif text-[1.15rem] font-bold text-navy mb-3">Best for</h3>
          <ul className="space-y-2">
            {info.useCases.map((u, i) => (
              <li key={i} className="flex gap-2.5 text-[13.5px] text-gray leading-[1.7]">
                <span className="text-teal shrink-0 mt-0.5">→</span>
                <span>{u}</span>
              </li>
            ))}
          </ul>
        </div>
        */}

        {/* Hidden for now — uncomment to restore Why investors use this
        <div className="mb-7">
          <h3 className="font-serif text-[1.15rem] font-bold text-navy mb-3">Why investors use this</h3>
          <ul className="space-y-2">
            {info.benefits.map((b, i) => (
              <li key={i} className="flex gap-2.5 text-[13.5px] text-gray leading-[1.7]">
                <span className="text-teal shrink-0 mt-0.5">→</span>
                <span>{b}</span>
              </li>
            ))}
          </ul>
        </div>
        */}

        {/* Hidden for now — uncomment to restore Investing tips
        <div className="bg-navy rounded-md px-5 py-4 mb-7">
          <div className="text-[11px] font-semibold text-teal tracking-[0.5px] uppercase mb-1.5">Investing tips</div>
          <p className="text-[13.5px] text-white/80 leading-[1.75]">{info.tips}</p>
        </div>
        */}

        <div>
          <h3 className="font-serif text-[1.15rem] font-bold text-navy mb-3">Frequently asked questions</h3>
          <div className="space-y-4">
            {info.faqs.map((f, i) => (
              <div key={i} className="border-b border-border last:border-0 pb-4 last:pb-0">
                <div className="text-[13.5px] font-semibold text-navy mb-1.5">{f.q}</div>
                <div className="text-[13px] text-gray leading-[1.75]">{f.a}</div>
              </div>
            ))}
          </div>
        </div>
      </article>
    </section>
  );
}
