import type { Metadata } from "next";
import type { ReactNode } from "react";
import { FiPhone, FiMail, FiGlobe, FiMapPin, FiClock } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  alternates: { canonical: "/contact" },
  title: "Contact Nithin Finserv | Free SIP & Mutual Fund Consultation in Bengaluru",
  description:
    "Get in touch with AMFI Registered MFD Nithin Finserv for free SIP planning, ELSS investment advice, retirement planning and insurance consultation in Bengaluru. WhatsApp, call, or email — response within 24 hours. ARN: 307760.",
  keywords: [
    "contact mutual fund distributor bengaluru",
    "free SIP consultation",
    "mutual fund advisor near me",
    "Nithin Finserv contact",
    "ELSS consultation bengaluru",
    "financial advisor whatsapp",
    "AMFI MFD contact",
  ],
  openGraph: {
    title: "Contact Nithin Finserv | Free SIP Consultation in Bengaluru",
    description:
      "Free SIP, ELSS, retirement and insurance consultation with AMFI Registered MFD Nithin Finserv. ARN: 307760.",
    type: "website",
  },
};

export default function ContactPage() {
  return (
    <>
      <div className="subpage-hero">
        <div className="subpage-in">
          <div className="subpage-tag">Get in touch</div>
          <h1 className="subpage-title">Let&apos;s talk about your goals</h1>
          <p className="subpage-sub">Free consultation. No obligation. Honest, AMFI-compliant guidance from a registered distributor in Bengaluru.</p>
        </div>
      </div>

      <section className="bg-cream px-6 lg:px-12 py-16">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* LEFT — info */}
          <div>
            <div className="text-[10px] text-teal font-semibold tracking-[1.5px] uppercase mb-2">Reach us</div>
            <h2 className="font-serif text-[clamp(1.5rem,2.5vw,2rem)] font-bold text-navy mb-2">Multiple ways to connect</h2>
            <p className="text-sm text-gray leading-[1.7] max-w-[520px] mb-8">Pick whichever channel works for you — we typically respond within a few business hours.</p>

            <div className="space-y-4">
              <ContactItem
                icon={<FiPhone size={16} />}
                label="Phone"
                value={<a href="tel:+919060186197" className="text-navy">+91 90601 86197</a>}
              />
              {/* <ContactItem
                icon={<FaWhatsapp size={18} />}
                iconBg="bg-[#e8f8ef]"
                iconColor="text-[#25D366]"
                label="WhatsApp (tap to chat)"
                value={<a href="https://wa.me/919060186197?text=Hi%20Nithin%20Finserv%2C%20I%20want%20to%20start%20a%20SIP." target="_blank" rel="noreferrer" className="text-[#25D366]">wa.me/919060186197</a>}
              /> */}
              <ContactItem
                icon={<FiMail size={16} />}
                label="Email"
                value={<a href="mailto:asnithin30@gmail.com" className="text-teal">asnithin30@gmail.com</a>}
              />
              {/* <ContactItem
                icon={<FiGlobe size={16} />}
                label="Partner Portal"
                value={<a href="https://www.wealthy.in/partners/nithi58604" target="_blank" rel="noreferrer" className="text-teal">wealthy.in/partners/nithi58604</a>}
              /> */}
              <ContactItem
                icon={<FiMapPin size={16} />}
                label="Location"
                value={<span className="text-navy">Bengaluru, Karnataka, India</span>}
              />
              <ContactItem
                icon={<FiClock size={16} />}
                label="Working hours"
                value={<span className="text-navy">Mon–Sat · 10:00 AM – 7:00 PM IST</span>}
              />
            </div>

            {/* <div className="mt-10 bg-white border border-border rounded-[14px] p-6">
              <div className="text-[15px] font-semibold text-navy mb-2">📌 Important to know</div>
              <ul className="space-y-2 text-[12.5px] text-gray leading-[1.7] list-disc list-inside">
                <li>Nithin Finserv is an <strong className="text-navy">AMFI Registered MFD (ARN: 307760)</strong> — not a SEBI Registered Investment Adviser.</li>
                <li>Consultations are <strong className="text-navy">free</strong>. We earn trail commission from AMCs per SEBI norms.</li>
                <li>Mutual Fund investments are subject to market risks. Read all scheme-related documents carefully.</li>
              </ul>
            </div> */}
          </div>

          {/* RIGHT — form */}
          <div className="lg:sticky lg:top-24 self-start">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}

function ContactItem({
  icon,
  iconBg = "bg-light",
  iconColor = "text-teal",
  label,
  value,
}: {
  icon: ReactNode;
  iconBg?: string;
  iconColor?: string;
  label: string;
  value: ReactNode;
}) {
  return (
    <div className="flex gap-3.5 items-start">
      <div className={`w-[37px] h-[37px] rounded-[9px] flex items-center justify-center shrink-0 ${iconBg} ${iconColor}`}>
        {icon}
      </div>
      <div>
        <div className="text-[10px] text-gray uppercase tracking-[1px] mb-0.5">{label}</div>
        <div className="text-[13px] font-medium">{value}</div>
      </div>
    </div>
  );
}
