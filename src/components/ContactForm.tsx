"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const INTEREST_OPTIONS = ["Mutual funds / SIP", "ELSS tax saving", "Retirement planning", "Child education", "Health insurance", "Bonds / FDs", "Portfolio review"];
const BUDGET_OPTIONS = ["Below ₹5,000", "₹5,000 – ₹15,000", "₹15,000 – ₹50,000", "Above ₹50,000"];

const API_BASE = process.env.NEXT_PUBLIC_API_BASE_URL ?? "https://nithin-finserv-main.vercel.app";

export default function ContactForm() {
  const router = useRouter();
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setError(null);

    const fd = new FormData(e.currentTarget);
    const payload = {
      name: String(fd.get("name") ?? "").trim(),
      mobile: String(fd.get("mobile") ?? "").trim(),
      email: String(fd.get("email") ?? "").trim(),
      interest: String(fd.get("interest") ?? "").trim(),
      budget: String(fd.get("budget") ?? "").trim(),
    };

    try {
      const res = await fetch(`${API_BASE}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = (await res.json().catch(() => null)) as { ok?: boolean; error?: string } | null;

      if (!res.ok || !data?.ok) {
        throw new Error(data?.error ?? `Request failed (${res.status})`);
      }

      router.push("/thank-you");
    } catch (err) {
      const message = err instanceof Error ? err.message : "Something went wrong. Please try again.";
      setError(message);
      setSubmitting(false);
    }
  };

  return (
    <div className="bg-white rounded-[14px] p-8 border border-border">
      <div className="font-serif text-[1.2rem] font-bold text-navy mb-1">Start investing today</div>
      <p className="text-xs text-gray mb-5">Fill in details — we&apos;ll contact you within 24 hours.</p>

      <form onSubmit={onSubmit} className="space-y-3.5">
        <div className="grid grid-cols-2 gap-3.5">
          <FormField label="Full name *">
            <input required name="name" type="text" placeholder="Your name" className="w-full px-3.5 py-2.5 border border-[#d8dfe5] focus:border-teal rounded-[7px] text-[12.5px] outline-none transition-colors" />
          </FormField>
          <FormField label="Mobile *">
            <input required name="mobile" type="tel" placeholder="+91 98XXX XXXXX" className="w-full px-3.5 py-2.5 border border-[#d8dfe5] focus:border-teal rounded-[7px] text-[12.5px] outline-none transition-colors" />
          </FormField>
        </div>

        <FormField label="Email">
          <input name="email" type="email" placeholder="your@email.com" className="w-full px-3.5 py-2.5 border border-[#d8dfe5] focus:border-teal rounded-[7px] text-[12.5px] outline-none transition-colors" />
        </FormField>

        <FormField label="Interested in">
          <select name="interest" defaultValue={INTEREST_OPTIONS[0]} className="w-full px-3.5 py-2.5 border border-[#d8dfe5] focus:border-teal rounded-[7px] text-[12.5px] outline-none transition-colors bg-white">
            {INTEREST_OPTIONS.map((o) => <option key={o}>{o}</option>)}
          </select>
        </FormField>

        <FormField label="Monthly budget">
          <select name="budget" defaultValue={BUDGET_OPTIONS[0]} className="w-full px-3.5 py-2.5 border border-[#d8dfe5] focus:border-teal rounded-[7px] text-[12.5px] outline-none transition-colors bg-white">
            {BUDGET_OPTIONS.map((o) => <option key={o}>{o}</option>)}
          </select>
        </FormField>

        {error && (
          <div className="bg-red/10 border border-red/30 rounded-[7px] px-3.5 py-2.5 text-[12px] text-red">
            ⚠️ {error}
          </div>
        )}

        <button
          type="submit"
          disabled={submitting}
          className="w-full bg-teal hover:bg-teal-2 disabled:opacity-70 disabled:cursor-not-allowed text-white py-3 rounded-[7px] text-[13px] font-medium transition-colors"
        >
          {submitting ? "Submitting…" : "Book free consultation"}
        </button>

        <p className="text-[10px] text-gray leading-[1.65] text-center">
          <strong>MF investments subject to market risks. Read all scheme documents carefully.</strong><br />
          By submitting, you consent to being contacted by Nithin Finserv. See our <Link href="/privacy" className="text-teal">Privacy Policy</Link>.
        </p>
      </form>
    </div>
  );
}

function FormField({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="block text-[11.5px] font-medium text-navy mb-1">{label}</span>
      {children}
    </label>
  );
}
