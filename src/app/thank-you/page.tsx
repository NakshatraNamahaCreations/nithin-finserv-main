import type { Metadata } from "next";
import Link from "next/link";
import { FiCheck, FiPhone, FiMail } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

export const metadata: Metadata = {
  alternates: { canonical: "/thank-you" },
  title: "Thank you · Nithin Finserv",
  description: "Thanks for reaching out. We'll be in touch within 24 hours to discuss your investment goals.",
  robots: { index: false, follow: false },
};

export default function ThankYouPage() {
  return (
    <div className="relative bg-cream overflow-hidden">
      {/* decorative glow */}
      <div
        aria-hidden
        className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[400px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse, rgba(16,185,129,0.18) 0%, transparent 70%)" }}
      />

      <section className="relative max-w-[760px] mx-auto px-6 lg:px-8 pt-20 pb-24 text-center">
        {/* success badge */}
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-teal text-white mb-7 shadow-[0_8px_24px_rgba(16,185,129,0.35)] ring-8 ring-light">
          <FiCheck size={40} strokeWidth={3} />
        </div>

        <div className="inline-block bg-teal/[0.13] border border-teal/30 text-teal text-[10.5px] font-semibold tracking-[1.5px] uppercase px-3.5 py-1.5 rounded-full mb-5">
          Submission received
        </div>

        <h1 className="font-serif text-[clamp(1.9rem,4vw,2.7rem)] font-bold text-navy mb-4 leading-[1.15]">
          Thanks — we&apos;re on it.
        </h1>

        <p className="text-[15px] text-gray leading-[1.75] max-w-[520px] mx-auto mb-10">
          Your consultation request is in. A team member from Nithin Finserv will reach out within <strong className="text-navy">24 business hours</strong> to understand your goals and discuss next steps.
        </p>

        {/* quick actions */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-[640px] mx-auto mb-12">
          <a
            href="tel:+919060186197"
            className="bg-white border border-border rounded-[12px] px-5 py-4 flex flex-col items-center gap-2 hover:border-teal hover:-translate-y-0.5 transition-all no-underline group"
          >
            <div className="w-10 h-10 rounded-full bg-light text-teal flex items-center justify-center">
              <FiPhone size={18} />
            </div>
            <div className="text-[11.5px] uppercase tracking-[1px] text-gray">Call directly</div>
            <div className="text-[13px] font-semibold text-navy group-hover:text-teal">+91 90601 86197</div>
          </a>

          <a
            href="https://wa.me/919060186197?text=Hi%20Nithin%20Finserv%2C%20I%20just%20submitted%20the%20consultation%20form."
            target="_blank"
            rel="noreferrer"
            className="bg-white border border-border rounded-[12px] px-5 py-4 flex flex-col items-center gap-2 hover:border-teal hover:-translate-y-0.5 transition-all no-underline group"
          >
            <div className="w-10 h-10 rounded-full bg-[#e8f8ef] text-[#25D366] flex items-center justify-center">
              <FaWhatsapp size={20} />
            </div>
            <div className="text-[11.5px] uppercase tracking-[1px] text-gray">Chat now</div>
            <div className="text-[13px] font-semibold text-navy group-hover:text-teal">WhatsApp us</div>
          </a>

          <a
            href="mailto:asnithin30@gmail.com"
            className="bg-white border border-border rounded-[12px] px-5 py-4 flex flex-col items-center gap-2 hover:border-teal hover:-translate-y-0.5 transition-all no-underline group"
          >
            <div className="w-10 h-10 rounded-full bg-light text-teal flex items-center justify-center">
              <FiMail size={18} />
            </div>
            <div className="text-[11.5px] uppercase tracking-[1px] text-gray">Email</div>
            <div className="text-[13px] font-semibold text-navy group-hover:text-teal break-all">asnithin30@gmail.com</div>
          </a>
        </div>

        {/* what's next */}
        <div className="bg-white border border-border rounded-[14px] p-7 text-left max-w-[600px] mx-auto mb-10">
          <div className="text-[10px] text-teal font-semibold tracking-[1.5px] uppercase mb-3">What happens next</div>
          <ol className="space-y-3 text-[13.5px] text-gray leading-[1.7]">
            <Step n="1" text="We review your goals and risk comfort." />
            <Step n="2" text="We schedule a free 20-minute call (phone or WhatsApp)." />
            <Step n="3" text="If it&apos;s a fit, we share a personalised fund shortlist — no obligation to invest." />
            <Step n="4" text="Once you decide, we help with 100% paperless digital KYC via the Wealthy platform." />
          </ol>
        </div>

        {/* secondary CTAs */}
        <div className="flex flex-wrap gap-3 justify-center mb-8">
          <Link href="/" className="bg-teal hover:bg-teal-2 text-white px-6 py-3 rounded-[8px] text-[13px] font-medium transition-colors no-underline">← Back to home</Link>
          <Link href="/calculators" className="bg-white border border-border hover:border-teal text-navy hover:text-teal px-6 py-3 rounded-[8px] text-[13px] font-medium transition-colors no-underline">📊 Try our calculators</Link>
          <Link href="/blog" className="bg-white border border-border hover:border-teal text-navy hover:text-teal px-6 py-3 rounded-[8px] text-[13px] font-medium transition-colors no-underline">📚 Read the blog</Link>
        </div>

        <p className="text-[11px] text-gray leading-[1.7] max-w-[520px] mx-auto">
          <strong>Mutual Fund investments are subject to market risks.</strong> Read all scheme-related documents carefully before investing. Nithin Finserv — AMFI Registered MFD · ARN-XXXXXX · Bengaluru.
        </p>
      </section>
    </div>
  );
}

function Step({ n, text }: { n: string; text: string }) {
  return (
    <li className="flex gap-3">
      <span className="shrink-0 w-6 h-6 rounded-full bg-light text-teal font-serif font-bold text-[12px] flex items-center justify-center">{n}</span>
      <span>{text}</span>
    </li>
  );
}
