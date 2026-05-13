"use client";

import { useState } from "react";
import Link from "next/link";
import type { IconType } from "react-icons";
import { FiShield, FiTarget, FiSmartphone, FiEye, FiBriefcase, FiRefreshCw, FiCheck, FiPhone, FiMail, FiGlobe, FiTrendingUp, FiStar, FiUsers } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { CALCS } from "@/lib/calcs";
import ContactForm from "@/components/ContactForm";

type TabKey = "mf" | "ins" | "bonds" | "pms";

const PRODUCTS: Record<TabKey, string[]> = {
  mf: ["HDFC MF", "ICICI Prudential MF", "SBI Mutual Fund", "Mirae Asset MF", "Axis Mutual Fund", "Kotak MF", "Nippon India MF", "DSP MF", "PPFAS MF", "Franklin Templeton", "Motilal Oswal MF", "Tata MF", "UTI MF", "Canara Robeco", "Sundaram MF", "Quant MF", "WhiteOak MF", "Aditya Birla Capital", "40+ AMCs total"],
  ins: ["ICICI Prudential Life", "HDFC Life", "Tata AIA Life", "Bajaj Allianz Life", "Axis Max Life", "Manipal Cigna Health", "HDFC ERGO Health", "Care Health Insurance", "Niva Bupa Health", "ICICI Lombard Health"],
  bonds: ["Bajaj Finance FD", "Shriram Finance FD", "54EC Bonds — REC", "54EC Bonds — PFC", "54EC Bonds — IRFC", "Muthoot Fincorp", "IIFL Samasta Bonds", "Navi Finserv Bonds", "Kerala Infra Bonds", "Sammaan Capital"],
  pms: ["Tata PMS", "ASK Investment PMS", "Helios PMS", "Marcellus PMS", "WhiteOak PMS", "Motilal Oswal PMS", "DSP AIF", "Helios AIF", "ASK AIF", "WhiteOak AIF"],
};

type FaqCat = "basics" | "sip" | "tax" | "risk" | "process" | "goal";

const FAQ_CATS: { id: FaqCat | "all"; label: string }[] = [
  { id: "all", label: "All" },
  { id: "basics", label: "Basics" },
  { id: "sip", label: "SIP" },
  { id: "tax", label: "Tax saving" },
  { id: "risk", label: "Risk & safety" },
  { id: "process", label: "Process" },
  { id: "goal", label: "Goal planning" },
];

// teal/gold/red/legal etc. all defined in tailwind.config.ts
const CAT_BADGE: Record<FaqCat, { bg: string; text: string; label: string }> = {
  basics:  { bg: "bg-[#e0f2fe]", text: "text-[#0369a1]", label: "Basics" },
  sip:     { bg: "bg-light",     text: "text-teal",      label: "SIP" },
  tax:     { bg: "bg-[#fef3c7]", text: "text-[#92400e]", label: "Tax saving" },
  risk:    { bg: "bg-[#fee2e2]", text: "text-red",       label: "Risk & safety" },
  process: { bg: "bg-[#f3f4f6]", text: "text-gray",      label: "Process" },
  goal:    { bg: "bg-[#eeedfe]", text: "text-legal",     label: "Goal planning" },
};

const FAQS: { cat: FaqCat; q: string; a: string }[] = [
  // BASICS
  { cat: "basics", q: "What is a mutual fund and how does it work?", a: "A mutual fund is a pool of money collected from many investors and managed by a professional fund manager. Your money is invested across stocks, bonds, or both — depending on the type of fund. You own <strong>units</strong> proportional to your investment, and the value of those units (NAV) changes daily based on market performance.<br><br>Think of it like a group buying a large basket of vegetables together — each person gets a share of the basket proportional to what they put in." },
  { cat: "basics", q: "What is the difference between equity, debt, and hybrid mutual funds?", a: "<ul><li><strong>Equity funds</strong> — invest primarily in stocks. Higher potential returns over long term, but higher short-term volatility. Suitable for 5+ year goals.</li><li><strong>Debt funds</strong> — invest in bonds, government securities, fixed income instruments. More stable, lower returns. Suitable for 1–3 year goals.</li><li><strong>Hybrid funds</strong> — mix of equity and debt. Balanced risk-return. Good for moderate-risk investors with 3–5 year horizons.</li></ul>Your ideal fund type depends on your goal, timeline, and how much risk you are comfortable with." },
  { cat: "basics", q: "What is NAV? Does a lower NAV mean a cheaper or better fund?", a: "NAV (Net Asset Value) is the price per unit of a mutual fund. <strong>A lower NAV does not mean a cheaper or better fund</strong> — this is one of the most common misconceptions.<br><br>A fund with NAV ₹10 and a fund with NAV ₹500 are equally \"priced\" — what matters is the percentage growth. If both grow 15% in a year, your returns are identical regardless of starting NAV. Never choose a fund based on NAV alone." },
  { cat: "basics", q: "What is the difference between a direct plan and a regular plan?", a: "<ul><li><strong>Direct plan</strong> — You invest directly with the AMC, no distributor involved. Slightly lower expense ratio. You manage everything yourself — fund selection, reviews, rebalancing.</li><li><strong>Regular plan</strong> — You invest through a registered distributor. Slightly higher expense ratio (distributor earns trail commission from the AMC). You get guidance, reviews, and support.</li></ul>The difference in returns is typically 0.5–1% per year. However, guided investing often leads to better behaviour — staying invested during crashes, choosing suitable funds, stepping up SIPs. The right choice depends on your confidence and time to manage your own portfolio." },

  // SIP
  { cat: "sip", q: "What is a SIP and how is it different from a lumpsum investment?", a: "A <strong>SIP (Systematic Investment Plan)</strong> is a method of investing a fixed amount every month (or week/quarter) into a mutual fund — automatically debited from your bank account.<br><br><strong>Lumpsum</strong> means investing a large amount all at once.<br><br>SIP advantages: No need to time the market, rupee cost averaging, starts from ₹500, builds discipline. Lumpsum advantage: Ideal when markets are at a low and you have a large amount available. For most salaried investors, SIP is the recommended approach." },
  { cat: "sip", q: "What is rupee cost averaging and why does it matter?", a: "Rupee cost averaging means that when markets are <strong>down</strong>, your fixed SIP amount buys <strong>more units</strong>, and when markets are up, it buys fewer units. Over time, this averages out your cost of purchase.<br><br>Example: ₹5,000/month — in March 2020 (market crash) you bought units at ₹60 each. In Jan 2021 (recovery) you bought at ₹100 each. Your average cost is lower than ₹100. This is why <strong>market crashes are actually good for SIP investors</strong> — they lower your average cost." },
  { cat: "sip", q: "What is a Step-Up SIP? Should I do it?", a: "A Step-Up SIP (also called Top-Up SIP) automatically increases your SIP amount by a fixed percentage or amount every year.<br><br><strong>Example:</strong> Start with ₹5,000/month, increase by 10% every year.<br>Year 1: ₹5,000 → Year 3: ₹6,050 → Year 5: ₹7,321 → Year 10: ₹11,789/month<br><br>The impact on your final corpus is dramatic. A regular ₹5,000 SIP for 20 years at 12% = ₹49.5L. A 10% step-up SIP starting at ₹5,000 = ₹1.06 Cr. <strong>Strongly recommended</strong> for anyone with a growing salary." },
  { cat: "sip", q: "Can I stop, pause, or change my SIP amount anytime?", a: "Yes, for most open-ended mutual funds:<br><br><ul><li><strong>Stop SIP</strong> — Cancel anytime, no penalty. Units already bought remain invested.</li><li><strong>Pause SIP</strong> — Some AMCs allow pausing for 1–6 months.</li><li><strong>Increase/decrease SIP</strong> — Can be done via the investment platform.</li><li><strong>Switch fund</strong> — Can switch from one scheme to another (may have tax implications).</li></ul>Exception: <strong>ELSS funds</strong> have a 3-year lock-in per SIP instalment — you cannot redeem before that." },
  { cat: "sip", q: "What is the minimum SIP amount I can start with?", a: "Most mutual funds allow SIPs starting from <strong>₹500/month</strong>. Some funds (like certain sectoral or international funds) may require ₹1,000 minimum. ELSS tax-saving funds typically start at ₹500.<br><br>There is no upper limit. Whether you invest ₹500 or ₹5,00,000 per month, the process and platform are the same. Start with whatever you are comfortable with — you can always increase later." },

  // TAX
  { cat: "tax", q: "How can I save tax using mutual funds?", a: "The primary way is through <strong>ELSS (Equity Linked Savings Scheme)</strong> funds:<br><ul><li>Investment up to ₹1,50,000/year qualifies for deduction under <strong>Section 80C</strong></li><li>At 30% tax slab, you can save up to ₹46,800 in taxes annually</li><li>Lock-in period: 3 years per instalment (shortest among all 80C options)</li><li>Returns are market-linked — not guaranteed, but historically higher than PPF/FD over long term</li></ul>Start a ₹12,500/month ELSS SIP to fully utilise your ₹1.5L 80C limit in one financial year." },
  { cat: "tax", q: "What is LTCG and STCG tax on mutual funds? How is it calculated?", a: "<strong>Equity Mutual Funds:</strong><br>STCG (held less than 1 year): 20% tax on gains<br>LTCG (held more than 1 year): 12.5% tax on gains above ₹1.25 lakh/year (as per Budget 2024)<br><br><strong>Debt Mutual Funds:</strong><br>Gains taxed at your applicable income tax slab rate (regardless of holding period, as per 2023 amendment)<br><br><strong>ELSS specifically:</strong> 3-year lock-in, LTCG applies at 12.5% above ₹1.25L. Use our portfolio review to understand your exact tax liability before redemption." },
  { cat: "tax", q: "Is dividend from mutual funds taxable?", a: "Yes. Since April 2020, <strong>dividends from mutual funds are fully taxable</strong> in the hands of the investor at their applicable income tax slab rate. The AMC also deducts TDS at 10% before paying the dividend if the amount exceeds ₹5,000/year.<br><br>For long-term wealth creation, <strong>Growth option is generally more tax-efficient</strong> than IDCW (dividend) option, because you only pay tax when you redeem — not every time the fund distributes income." },

  // RISK
  { cat: "risk", q: "Are mutual fund investments safe? Can I lose all my money?", a: "Mutual funds are <strong>market-linked</strong> — their value goes up and down with markets. You can experience temporary losses. However, losing <strong>all</strong> your money is extremely unlikely because:<br><ul><li>Diversification — funds hold 30–100+ stocks/bonds</li><li>SEBI regulation — strict oversight of AMCs and fund managers</li><li>Transparency — NAV published daily, portfolio disclosed monthly</li></ul>Short-term losses are normal and expected. Over long periods (7–10+ years), equity mutual funds have historically delivered positive returns despite multiple market crashes. <strong>The biggest risk is not staying invested long enough.</strong>" },
  { cat: "risk", q: "What happens to my mutual fund investment if the AMC or fund house shuts down?", a: "Your money is <strong>completely safe</strong> even if an AMC shuts down. Here's why:<br><br>Your mutual fund units are held in a <strong>separate trust (the fund itself)</strong>, not on the AMC's balance sheet. SEBI mandates that investor assets are held separately from the AMC's own assets. If an AMC closes, SEBI steps in and either transfers management to another AMC or liquidates the fund and returns money to investors. This has happened before in India (e.g. Franklin Templeton 2020) — investors got their money back." },
  { cat: "risk", q: "What is the risk of choosing the wrong mutual fund?", a: "The most common risks from choosing the wrong fund:<br><ul><li>Investing in high-risk (small-cap/sectoral) funds with a short time horizon</li><li>Investing in debt funds expecting equity-like returns</li><li>Chasing \"top performing\" funds from last year (past performance ≠ future performance)</li><li>Investing in too many funds creating an overlap with no real diversification</li></ul>This is exactly why a free consultation helps — assessing your <strong>risk profile</strong> before recommending any fund ensures your investment matches your actual comfort level with volatility." },

  // PROCESS
  { cat: "process", q: "What documents are required to start investing in mutual funds?", a: "You only need <strong>3 things</strong>:<br><ol><li><strong>PAN card</strong> — mandatory for all investments above ₹50,000</li><li><strong>Aadhaar card</strong> — for KYC verification (done online via OTP)</li><li><strong>Bank account</strong> — for SIP auto-debit and redemption credit</li></ol>If your PAN is already KYC-verified (e.g. you have a Demat account), you can start in under 5 minutes. First-time KYC takes 10–15 minutes with a selfie and OTP — no physical documents needed." },
  { cat: "process", q: "How long does it take to complete KYC and start my first SIP?", a: "For most investors, the entire process from KYC to first SIP takes <strong>15–30 minutes</strong>:<br><ul><li>KYC verification (Aadhaar OTP + selfie): 5–10 minutes</li><li>Bank account linking and mandate setup: 5–10 minutes</li><li>Fund selection and SIP setup: 2–5 minutes</li></ul>Your first SIP instalment is debited on the date you choose (must be 2–7 days after setup). Everything is done online — no branch visits, no physical signatures, no waiting." },
  { cat: "process", q: "How do I track and manage my mutual fund portfolio?", a: "You can track your portfolio in multiple ways:<br><ul><li><strong>Investment platform app</strong> — real-time NAV, current value, returns, SIP schedule</li><li><strong>CAMS / KFintech website</strong> — download consolidated account statement (CAS)</li><li><strong>NSDL/CDSL</strong> — if held in Demat form</li><li><strong>Your distributor</strong> — quarterly review calls to assess performance and rebalancing needs</li></ul>We recommend reviewing your portfolio <strong>quarterly</strong> — not daily. Checking NAV daily causes anxiety and often leads to poor decisions." },
  { cat: "process", q: "How do I redeem or withdraw my mutual fund investment?", a: "Redemption is simple and fully online:<br><ol><li>Log in to your investment platform</li><li>Select the fund and enter the amount or number of units to redeem</li><li>Confirm — money is credited to your registered bank account</li></ol><strong>Timeline:</strong> Equity and hybrid funds — T+3 working days. Debt funds — T+2 days. Liquid funds — T+1 day (same day for some). ELSS — only after 3-year lock-in per instalment.<br><br>There is no exit load for most funds after 1 year. Check the scheme's exit load before redeeming early." },

  // GOAL
  { cat: "goal", q: "I am 25 years old. Where should I start investing?", a: "At 25, you have the most powerful tool available: <strong>time</strong>. Starting early is more important than starting with a large amount.<br><br>Recommended starting portfolio:<br><ul><li>1 large-cap index fund (Nifty 50 or Nifty 100) — core, low cost</li><li>1 flexi-cap fund — for diversified equity exposure</li><li>1 ELSS fund — for 80C tax saving</li></ul>Start with ₹3,000–5,000/month and step up by 10% every year. By 35, your portfolio will already be in a strong position. Don't wait for the \"right time\" — time in the market beats timing the market." },
  { cat: "goal", q: "How much should I invest to create ₹1 crore?", a: "It depends on your timeline and the assumed rate of return:<br><br>At <strong>12% assumed annual return</strong>:<br><ul><li>In 10 years: ₹43,500/month SIP</li><li>In 15 years: ₹19,800/month SIP</li><li>In 20 years: ₹10,000/month SIP</li><li>In 25 years: ₹5,300/month SIP</li></ul><strong>The earlier you start, the less you need to invest every month.</strong> A ₹10,000 SIP started at 30 can reach ₹1Cr by 50. The same goal started at 40 requires ₹43,500/month. Use our SIP calculator to see your exact number." },
  { cat: "goal", q: "What is the best mutual fund to invest in right now?", a: "There is no single \"best\" fund for everyone — the right fund depends on your <strong>goal, timeline, and risk profile</strong>. A small-cap fund that is \"best\" for a 25-year-old with a 15-year horizon may be completely wrong for someone investing for 3 years.<br><br>What to look for in a fund:<br><ul><li>Consistent performance across market cycles (not just last 1 year)</li><li>Low expense ratio</li><li>Experienced fund manager with a track record</li><li>AUM of at least ₹1,000 crore for stability</li></ul><strong>Important:</strong> Past performance is not indicative of future results. Always consult your risk profile before selecting." },
  { cat: "goal", q: "Should I invest in mutual funds or FDs?", a: "Both have their place — here is a simple framework:<br><br><strong>Choose FD when:</strong> You need the money in 1–2 years, you cannot afford any loss, you are very risk-averse.<br><br><strong>Choose Mutual Funds when:</strong> Your horizon is 3+ years, you want inflation-beating returns, you are comfortable with short-term fluctuations.<br><br>Historically, equity mutual funds have delivered 11–14% CAGR over 10-year periods in India vs FD rates of 6–7.5%. Over 10 years, the compounding difference on ₹1 lakh is significant: FD at 7% = ₹1.97L vs MF at 12% = ₹3.10L. But mutual funds carry market risk — FDs do not." },
  { cat: "goal", q: "What is STP and when should I use it?", a: "STP (Systematic Transfer Plan) allows you to <strong>automatically transfer a fixed amount</strong> from one mutual fund to another every month — typically from a debt/liquid fund to an equity fund.<br><br><strong>Best use case:</strong> You have a large lumpsum (say ₹5 lakhs) but don't want to invest it all in equity at once (market timing risk). Solution: Park ₹5L in a liquid fund, set up STP of ₹40,000/month into an equity fund. Your money earns liquid fund returns while gradually moving into equity — giving you rupee cost averaging on the lumpsum." },
  { cat: "goal", q: "What is the difference between growth option and IDCW (dividend) option?", a: "In the <strong>Growth option</strong>, your returns stay invested in the fund — your NAV grows over time. No payouts. Best for wealth creation and tax efficiency (you pay tax only when you redeem).<br><br>In the <strong>IDCW (Income Distribution cum Capital Withdrawal)</strong> option, the fund periodically distributes part of its gains as \"dividends\" — which are now fully taxable at your income slab rate.<br><br><strong>For most long-term investors, Growth option is recommended</strong> — it benefits from compounding and is more tax-efficient. IDCW is only useful if you need regular cash flows in retirement." },
];

export default function HomePage() {
  const [tab, setTab] = useState<TabKey>("mf");
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [faqCat, setFaqCat] = useState<FaqCat | "all">("all");

  const previewCalcs = ["sip", "lumpsum", "ppf"].map((id) => CALCS.find((c) => c.id === id)!);

  return (
    <>
      {/* HERO */}
      <section className="relative bg-navy overflow-hidden px-6 lg:px-12 pt-20 pb-16">
        <div aria-hidden className="absolute top-0 left-1/4 w-[400px] h-[400px] rounded-full blur-3xl pointer-events-none" style={{ background: "radial-gradient(circle, rgba(16,185,129,0.18) 0%, transparent 70%)" }} />
        <div aria-hidden className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full blur-3xl pointer-events-none" style={{ background: "radial-gradient(circle, rgba(240,165,0,0.12) 0%, transparent 70%)" }} />

        <div className="relative max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-12 items-center">
          <div>
            <div className="inline-block bg-teal/[0.13] border border-teal/30 text-teal text-[11px] font-semibold tracking-[1.5px] uppercase px-3.5 py-1.5 rounded-full mb-5">AMFI Registered Mutual Fund Distributor · Bengaluru</div>
            <h1 className="font-serif text-[clamp(2rem,5vw,3.5rem)] font-bold text-white mb-3 leading-[1.1]">Your goals.<br /><em className="not-italic text-teal">Sorted.</em></h1>
            <p className="text-[15px] text-white/55 leading-[1.7] mb-7 max-w-[520px]">Expert mutual fund distribution for individuals and families in Bengaluru. SIP, ELSS, insurance, bonds — 100% digital KYC via Wealthy platform.</p>
            <div className="flex flex-wrap gap-3 mb-7">
              <a href="https://www.wealthy.in/partners/nithi58604" target="_blank" rel="noreferrer" className="btn-primary">Start investing →</a>
              <Link href="/calculators" className="btn-outline">📊 Try calculators</Link>
            </div>

            <div className="text-[10.5px] text-white/40 mb-2 tracking-[0.5px] uppercase">Download app</div>
            <div className="flex flex-wrap gap-2.5 mb-6">
              <AppDownload icon={<AppleIcon />} top="Download on" name="App Store" />
              <AppDownload icon={<PlayIcon />} top="Get it on" name="Google Play" />
              {/* <AppDownload icon={<GlobeIcon />} top="Open on" name="Web" /> */}
            </div>

            <p className="text-[10.5px] text-white/30 leading-[1.7] max-w-[520px] mb-5">Mutual Fund investments are subject to market risks. Read all scheme related documents carefully. Nithin Finserv — AMFI Registered MFD · ARN: 307760 · Bengaluru. Registration does not guarantee returns.</p>

            {/* <div className="flex flex-wrap gap-3">
              <a
                href="tel:+919060186197"
                className="flex items-center gap-2 bg-red/15 border border-red/30 hover:bg-red/25 text-[#ff8a8a] px-4 py-2 rounded-full text-[13px] font-medium transition-all no-underline"
              >
                <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.01 1.18 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z" /></svg>
                Call: 90601 86197
              </a>
              <a
                href="https://wa.me/919060186197?text=Hi%20Nithin%20Finserv%2C%20I%20want%20to%20start%20a%20SIP%20investment.%20Please%20guide%20me."
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 bg-[#25D366]/[0.13] border border-[#25D366]/30 hover:bg-[#25D366]/25 text-[#4ade80] px-4 py-2 rounded-full text-[13px] font-medium transition-all no-underline"
              >
                <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" /><path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.556 4.116 1.529 5.845L.057 23.571a.75.75 0 00.921.921l5.726-1.472A11.944 11.944 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75a9.71 9.71 0 01-4.964-1.361l-.356-.213-3.696.949.968-3.587-.233-.369A9.712 9.712 0 012.25 12C2.25 6.615 6.615 2.25 12 2.25S21.75 6.615 21.75 12 17.385 21.75 12 21.75z" /></svg>
                WhatsApp us now
              </a>
            </div> */}
          </div>

          <div className="bg-white/[0.04] border border-white/10 rounded-[18px] p-7">
            <div className="text-[10px] text-white/40 tracking-[1.5px] uppercase mb-4">What we offer</div>
            <div className="grid grid-cols-2 gap-3 mb-6">
              <HeroStat val="40" sup="+" label="AMC partners" />
              <HeroStat val="100" sup="%" label="Digital KYC" />
              <HeroStat val="₹0" label="Consultation fee" />
              <HeroStat val="20" sup="+" label="Calculators" />
            </div>
            <div className="space-y-2.5">
              {["Mutual Funds & SIP investments", "ELSS — Section 80C tax saving", "Health & life insurance", "Bonds & fixed deposits", "Portfolio review support", "PMS & AIF (eligible investors)"].map((s) => (
                <div key={s} className="flex items-center gap-2 text-[13px] text-white/75">
                  <span className="w-1.5 h-1.5 rounded-full bg-teal shrink-0" />{s}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <div className="bg-cream border-y border-border px-6 lg:px-12 py-3.5">
        <div className="max-w-[1200px] mx-auto flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[12px] text-navy/80">
          <span>✅ AMFI Registered · ARN: 307760</span>
          <span className="hidden md:inline w-px h-3 bg-border" />
          <span>🎓 NISM V-A Certified</span>
          <span className="hidden md:inline w-px h-3 bg-border" />
          <span>🔒 100% Digital KYC</span>
          <span className="hidden md:inline w-px h-3 bg-border" />
          <span>📱 Powered by Wealthy</span>
          <span className="hidden md:inline w-px h-3 bg-border" />
          <span>📍 Bengaluru</span>
        </div>
      </div>

      {/* WHY US */}
      <section className="px-6 lg:px-12 py-20">
        <div className="max-w-[1200px] mx-auto">
          <SectionTag>Why choose us</SectionTag>
          <SectionTitle>Trusted distribution, always compliant</SectionTitle>
          <SectionSub>Bound by SEBI regulations and the AMFI Code of Conduct — we always act in your best interest.</SectionSub>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
            {WHY.map((w) => {
              const Icon = w.ic;
              return (
                <div key={w.t} className="bg-white border border-border rounded-[14px] p-6 hover:border-teal hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(16,185,129,0.08)] transition-all">
                  <div className="w-11 h-11 bg-light rounded-[10px] flex items-center justify-center mb-4 text-teal">
                    <Icon size={20} strokeWidth={2} />
                  </div>
                  <div className="text-[15px] font-semibold text-navy mb-2">{w.t}</div>
                  <p className="text-[12.5px] text-gray leading-[1.7]">{w.d}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="bg-navy px-6 lg:px-12 py-20">
        <div className="max-w-[1200px] mx-auto">
          <SectionTag invert>Products</SectionTag>
          <h2 className="font-serif text-[clamp(1.5rem,2.5vw,2rem)] font-bold text-white mb-2">What you can invest in</h2>
          <p className="text-[14px] text-white/50 mb-8 max-w-[640px]">SEBI-regulated products across mutual funds, insurance, bonds and alternative investments.</p>

          <div className="flex gap-2 flex-wrap mb-6">
            {(Object.keys(PRODUCTS) as TabKey[]).map((k) => (
              <button
                key={k}
                onClick={() => setTab(k)}
                className={`px-4 py-2 rounded-md text-[13px] font-medium transition-all ${tab === k ? "bg-teal text-white" : "bg-white/[0.05] text-white/70 hover:bg-white/10"}`}
              >
                {k === "mf" ? "Mutual Funds" : k === "ins" ? "Insurance" : k === "bonds" ? "Bonds & FDs" : "PMS & AIF"}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5">
            {PRODUCTS[tab].map((p) => (
              <div key={p} className="bg-white/[0.04] border border-white/10 rounded-lg p-3 text-[12.5px] text-white/75 hover:bg-white/[0.08] transition-colors">{p}</div>
            ))}
          </div>

          <p className="text-[10.5px] text-white/30 mt-5 leading-[1.6]">All investments subject to market risks. Read scheme-related documents carefully. Product listing is informational only, not a recommendation. AMC names referenced for identification — no logos displayed without written AMC approval.</p>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="bg-cream px-6 lg:px-12 py-20">
        <div className="max-w-[1200px] mx-auto text-center">
          <div className="text-[10px] text-teal font-semibold tracking-[1.5px] uppercase mb-2">How it works</div>
          <h2 className="font-serif text-[clamp(1.5rem,2.5vw,2rem)] font-bold text-navy mb-14">Start in 4 simple steps</h2>

          <div className="relative max-w-[1000px] mx-auto">
            {/* dashed connector line — sits behind the circles, hidden on mobile */}
            <div
              aria-hidden
              className="hidden lg:block absolute top-[26px] left-[12.5%] right-[12.5%] border-t-2 border-dashed border-teal/40 z-0"
            />

            <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-6">
              {[
                ["1", "Free consultation", "Call or WhatsApp. We understand your goals and risk comfort — zero obligation."],
                ["2", "Personalised plan", "Fund recommendations based on your specific goals and risk profile."],
                ["3", "Digital KYC", "Aadhaar + PAN based KYC online via Wealthy. 100% paperless."],
                ["4", "Invest & track", "SIP starts. Track your portfolio anytime, get regular review support."],
              ].map(([n, t, d]) => (
                <div key={n} className="flex flex-col items-center text-center">
                  <div className="w-[52px] h-[52px] rounded-full bg-teal text-white font-serif font-bold text-[18px] flex items-center justify-center mb-5 ring-[6px] ring-light shadow-[0_4px_14px_rgba(16,185,129,0.3)]">
                    {n}
                  </div>
                  <div className="text-[15px] font-semibold text-navy mb-1.5">{t}</div>
                  <p className="text-[12.5px] text-gray leading-[1.7] max-w-[220px]">{d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CALCULATOR PREVIEW */}
      <section className="px-6 lg:px-12 py-20">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex items-center justify-between flex-wrap gap-4 mb-8">
            <div>
              <SectionTag>Financial Calculators</SectionTag>
              <SectionTitle className="mb-0">Plan your wealth journey</SectionTitle>
            </div>
            <Link href="/calculators" className="btn-primary">View all calculators →</Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {previewCalcs.map((c) => (
              <Link
                key={c.id}
                href={`/calculators/${c.slug}`}
                className="text-left bg-cream border border-border rounded-[13px] p-6 cursor-pointer hover:border-teal hover:-translate-y-1 hover:shadow-[0_8px_28px_rgba(16,185,129,0.08)] transition-all"
              >
                <div className="text-[1.75rem] mb-3">{c.icon}</div>
                <div className="text-sm font-medium text-navy mb-1">{c.name}</div>
                <div className="text-[11.5px] text-gray leading-[1.6]">{c.desc}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* APP DOWNLOAD */}
      <section className="px-4 sm:px-6 lg:px-12 py-20 bg-cream">
        <div className="relative max-w-[1200px] mx-auto bg-navy rounded-[28px] overflow-hidden">
          {/* decorative gradients */}
          <div aria-hidden className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(16,185,129,0.22) 0%, transparent 65%)" }} />
          <div aria-hidden className="absolute -bottom-32 -left-32 w-[400px] h-[400px] rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(240,165,0,0.10) 0%, transparent 70%)" }} />
          <div aria-hidden className="absolute inset-0 pointer-events-none opacity-30" style={{
            backgroundImage: "radial-gradient(rgba(255,255,255,0.05) 1px, transparent 1px)",
            backgroundSize: "20px 20px",
          }} />

          <div className="relative grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-10 lg:gap-6 p-8 sm:p-12 lg:p-16 items-center">
            {/* LEFT: text + downloads */}
            <div>
              <span className="inline-flex items-center gap-2 bg-teal/[0.13] border border-teal/30 text-teal text-[10.5px] font-semibold tracking-[1.5px] uppercase px-3.5 py-1.5 rounded-full mb-5">
                <span className="w-1.5 h-1.5 rounded-full bg-teal" />
                Mobile App
              </span>

              <h2 className="font-serif text-[clamp(1.9rem,3.4vw,2.75rem)] font-bold text-white mb-4 leading-[1.1]">
                Your portfolio.<br />
                <em className="not-italic text-teal">In your pocket.</em>
              </h2>

              <p className="text-[14.5px] text-white/55 leading-[1.7] mb-7 max-w-[440px]">
                Track SIPs, see live portfolio performance, and transact anytime — powered by the Wealthy partner platform.
              </p>

              {/* Store buttons */}
              <div className="flex flex-wrap gap-3 mb-7">
                <StoreButton href="https://www.wealthy.in/partners/nithi58604" icon={<AppleIcon />} top="Download on the" name="App Store" />
                <StoreButton href="https://www.wealthy.in/partners/nithi58604" icon={<PlayIcon />} top="Get it on" name="Google Play" />
              </div>

              {/* Trust indicators */}
              <div className="flex flex-wrap items-center gap-x-6 gap-y-3 pt-5 border-t border-white/10">
                <Trust val="4.6" sub="App rating" star />
                <Trust val="1M+" sub="Downloads" />
                <Trust val="SEBI" sub="Regulated" />
              </div>
            </div>

            {/* RIGHT: feature highlight */}
            <div className="relative flex justify-center lg:justify-end">
              <FeatureShowcase />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-6 lg:px-12 py-20 bg-cream">
        <div className="max-w-[1100px] mx-auto">
          <div className="text-center mb-8">
            <SectionTag>FAQ</SectionTag>
            <h2 className="font-serif text-[clamp(1.5rem,2.5vw,2rem)] font-bold text-navy mb-2">Frequently asked questions</h2>
            <p className="text-[14px] text-gray leading-[1.7] max-w-[560px] mx-auto">25 universal mutual-fund questions covering basics, SIPs, tax, risk and process.</p>
          </div>

          {/* Category filter tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {FAQ_CATS.map((c) => {
              const active = faqCat === c.id;
              const count = c.id === "all" ? FAQS.length : FAQS.filter((f) => f.cat === c.id).length;
              return (
                <button
                  key={c.id}
                  onClick={() => { setFaqCat(c.id); setOpenFaq(null); }}
                  className={`px-3.5 py-1.5 rounded-full text-[12px] font-medium border-[0.5px] transition-all ${
                    active ? "bg-navy text-white border-navy" : "bg-white text-gray border-border hover:border-navy hover:text-navy"
                  }`}
                >
                  {c.label} <span className={active ? "text-white/60" : "text-gray/60"}>({count})</span>
                </button>
              );
            })}
          </div>

          {/* Grouped sections — one section per category, full-width single column */}
          <div className="w-full">
            {(faqCat === "all" ? (Object.keys(CAT_BADGE) as FaqCat[]) : [faqCat]).map((cat) => {
              const items = FAQS.map((f, i) => ({ f, i })).filter(({ f }) => f.cat === cat);
              if (items.length === 0) return null;
              const badge = CAT_BADGE[cat];
              return (
                <div key={cat} className="mb-7">
                  <div className="flex items-center gap-2 mb-3">
                    <span className={`text-[10px] font-medium px-2.5 py-0.5 rounded-full ${badge.bg} ${badge.text}`}>{badge.label}</span>
                    <span className="text-[13px] text-gray">{items.length} question{items.length > 1 ? "s" : ""}</span>
                  </div>
                  <div className="space-y-1.5">
                    {items.map(({ f, i }) => (
                      <FaqRow
                        key={i}
                        faq={f}
                        open={openFaq === i}
                        onToggle={() => setOpenFaq(openFaq === i ? null : i)}
                      />
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          <p className="text-center text-[13px] text-gray mt-6">
            Still have questions? <Link href="/contact" className="text-teal font-medium hover:underline">Talk to us →</Link>
          </p>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="bg-cream px-6 lg:px-12 py-20">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <SectionTag>Contact us</SectionTag>
            <SectionTitle>Book free consultation</SectionTitle>
            <SectionSub>No charges. No obligation. Honest guidance from an AMFI-registered distributor in Bengaluru.</SectionSub>

            <div className="mt-8 space-y-4">
              <ContactItem icon={<FiPhone size={16} />} iconBg="bg-light" iconColor="text-teal" label="Phone / WhatsApp" value={<a href="tel:+919060186197" className="text-navy">+91 90601 86197</a>} />
              {/* <ContactItem icon={<FaWhatsapp size={18} />} iconBg="bg-[#e8f8ef]" iconColor="text-[#25D366]" label="WhatsApp (tap to chat)" value={<a href="https://wa.me/919060186197" target="_blank" rel="noreferrer" className="text-[#25D366]">wa.me/919060186197</a>} /> */}
              <ContactItem icon={<FiMail size={16} />} iconBg="bg-light" iconColor="text-teal" label="Email" value={<a href="mailto:asnithin30@gmail.com" className="text-teal">asnithin30@gmail.com</a>} />
              {/* <ContactItem icon={<FiGlobe size={16} />} iconBg="bg-light" iconColor="text-teal" label="Partner Portal" value={<a href="https://www.wealthy.in/partners/nithi58604" target="_blank" rel="noreferrer" className="text-teal">wealthy.in/partners/nithi58604</a>} /> */}
            </div>
          </div>

          <ContactForm />
        </div>
      </section>

    </>
  );
}

const WHY: { ic: IconType; t: string; d: string }[] = [
  { ic: FiShield, t: "AMFI Registered & NISM Certified", d: "Fully registered under AMFI (ARN: 307760). Bound by SEBI Mutual Fund Regulations and AMFI Code of Conduct at all times." },
  { ic: FiTarget, t: "Goal-oriented fund distribution", d: "We help you select funds aligned to specific life goals based on your risk profile — child education, retirement, home purchase." },
  { ic: FiSmartphone, t: "100% paperless digital onboarding", d: "Complete KYC and start your SIP entirely online. Aadhaar-based verification. No branch visits, no physical forms." },
  { ic: FiEye, t: "Transparent — no hidden charges", d: "Trail commission received from AMCs per SEBI norms. No fees collected from investors. Commission disclosed as required." },
  { ic: FiBriefcase, t: "40+ AMC partners", d: "HDFC, ICICI Prudential, SBI, Mirae Asset, Axis, Kotak, Nippon, PPFAS and 32+ more — all via Wealthy platform." },
  { ic: FiRefreshCw, t: "Regular review & support", d: "Periodic portfolio review calls, SIP step-up reminders, and rebalancing guidance to keep you on track." },
];

function SectionTag({ children, invert }: { children: React.ReactNode; invert?: boolean }) {
  return <div className={`text-[10px] font-medium tracking-[1.5px] uppercase mb-2 ${invert ? "text-teal" : "text-teal"}`}>{children}</div>;
}
function SectionTitle({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <h2 className={`font-serif text-[clamp(1.5rem,2.5vw,2rem)] font-bold text-navy mb-2 ${className}`}>{children}</h2>;
}
function SectionSub({ children }: { children: React.ReactNode }) {
  return <p className="text-[14px] text-gray leading-[1.7] max-w-[640px]">{children}</p>;
}

// FAQ row — single-open accordion with plus/cross toggle and HTML answer
function FaqRow({ faq, open, onToggle }: { faq: { q: string; a: string }; open: boolean; onToggle: () => void }) {
  return (
    <div className={`border-[0.5px] rounded-[10px] overflow-hidden bg-white transition-colors ${open ? "border-navy" : "border-border"}`}>
      <button
        onClick={onToggle}
        className="w-full flex justify-between items-start px-4 py-3.5 cursor-pointer text-left gap-2.5"
      >
        <span className="text-[13px] font-medium text-navy leading-[1.45] flex-1">{faq.q}</span>
        <span
          className={`w-5 h-5 shrink-0 rounded-full bg-light text-teal flex items-center justify-center text-[13px] font-medium transition-transform duration-300 mt-0.5 ${open ? "rotate-45" : ""}`}
          aria-hidden
        >
          +
        </span>
      </button>
      <div className={`overflow-hidden transition-all duration-400 ${open ? "max-h-[600px]" : "max-h-0"}`}>
        <div className="px-4 pb-3.5 text-[12.5px] text-gray leading-[1.8] faq-answer" dangerouslySetInnerHTML={{ __html: faq.a }} />
      </div>
    </div>
  );
}

// New big store buttons for app download section
function StoreButton({ href, icon, top, name }: { href: string; icon: React.ReactNode; top: string; name: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="flex items-center gap-3 bg-white hover:bg-cream text-navy px-5 py-3.5 rounded-[14px] no-underline transition-all hover:-translate-y-0.5 shadow-[0_4px_18px_rgba(0,0,0,0.12)]"
    >
      <span className="text-navy">{icon}</span>
      <span className="leading-tight">
        <span className="block text-[9px] uppercase tracking-[1px] text-gray font-medium">{top}</span>
        <span className="block text-[15px] font-bold">{name}</span>
      </span>
    </a>
  );
}

function Trust({ val, sub, star }: { val: string; sub: string; star?: boolean }) {
  return (
    <div className="flex items-center gap-2">
      {star && <span className="text-gold text-[13px] tracking-[-1px]">★★★★★</span>}
      <div>
        <span className="text-[13px] font-bold text-white">{val}</span>
        <span className="text-[11px] text-white/55 ml-1.5">{sub}</span>
      </div>
    </div>
  );
}

function FeatureShowcase() {
  return (
    <div className="relative w-full max-w-[380px]">
      {/* glow */}
      <div aria-hidden className="absolute -inset-6 rounded-[40px] opacity-60" style={{ background: "radial-gradient(ellipse at center, rgba(16,185,129,0.30) 0%, transparent 65%)" }} />

      {/* Main card */}
      <div className="relative bg-gradient-to-br from-white/[0.07] to-white/[0.02] border border-white/15 rounded-[24px] p-7 backdrop-blur-sm shadow-[0_30px_80px_rgba(0,0,0,0.35)]">
        <div className="flex items-center justify-between mb-5">
          {/* <span className="inline-flex items-center gap-1.5 bg-teal/15 text-teal text-[10px] font-semibold tracking-[1px] uppercase px-2.5 py-1 rounded-full">
            <span className="w-1 h-1 rounded-full bg-teal animate-pulse" />
            Live
          </span> */}
          <span className="text-[10px] text-white/40 uppercase tracking-wider">Investor benefits</span>
        </div>

        <div className="space-y-3">
          <BenefitRow icon={<FiBriefcase size={18} />} big="40+" label="AMC partners" sub="HDFC, ICICI, SBI, Axis…" />
          <BenefitRow icon={<FiTrendingUp size={18} />} big="₹100" label="Minimum SIP / month" sub="Start small, grow steady" />
          <BenefitRow icon={<FiSmartphone size={18} />} big="100%" label="Paperless digital KYC" sub="Aadhaar + PAN, instant" />
          <BenefitRow icon={<FiTarget size={18} />} big="20+" label="Goal calculators" sub="SIP, retirement, more" />
        </div>

        <div className="mt-5 pt-5 border-t border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-full bg-teal/15 border border-teal/30 flex items-center justify-center text-teal">
              <FiUsers size={13} />
            </div>
            <span className="text-[10.5px] text-white/55">Trusted by <strong className="text-white">500+</strong> families</span>
          </div>
          <span className="text-[18px] text-teal">→</span>
        </div>
      </div>

      {/* Floating accent: rating card */}
      <div className="absolute -top-5 -right-3 sm:-right-6 bg-navy border border-gold/30 rounded-[14px] px-3.5 py-2.5 shadow-[0_8px_24px_rgba(240,165,0,0.2)] rotate-3">
        <div className="flex items-center gap-2">
          <div className="flex gap-0.5 text-gold">
            <FiStar size={12} fill="currentColor" />
            <FiStar size={12} fill="currentColor" />
            <FiStar size={12} fill="currentColor" />
            <FiStar size={12} fill="currentColor" />
            <FiStar size={12} fill="currentColor" />
          </div>
          <div className="leading-tight">
            <div className="text-[11px] text-white font-bold">4.6/5</div>
            <div className="text-[8.5px] text-white/45 uppercase tracking-wider">Rated</div>
          </div>
        </div>
      </div>     
    </div>
  );
}

function BenefitRow({ icon, big, label, sub }: { icon: React.ReactNode; big: string; label: string; sub: string }) {
  return (
    <div className="flex items-center gap-3 bg-white/[0.03] hover:bg-white/[0.06] border border-white/5 rounded-2xl p-3 transition-colors">
      <div className="w-10 h-10 rounded-xl bg-teal/15 text-teal flex items-center justify-center shrink-0">{icon}</div>
      <div className="flex-1 min-w-0">
        <div className="flex items-baseline gap-2">
          <span className="text-[16px] font-serif font-bold text-teal leading-none">{big}</span>
          <span className="text-[12px] text-white font-medium truncate">{label}</span>
        </div>
        <div className="text-[10px] text-white/45 mt-0.5">{sub}</div>
      </div>
    </div>
  );
}

function AppDownload({ icon, top, name }: { icon: React.ReactNode; top: string; name: string }) {
  return (
    <a
      href="https://www.wealthy.in/partners/nithi58604"
      target="_blank"
      rel="noreferrer"
      className="flex items-center gap-2.5 bg-white/[0.05] border border-white/10 hover:border-teal/50 hover:bg-white/[0.08] px-3.5 py-2 rounded-lg no-underline transition-all"
    >
      <span className="text-white/75">{icon}</span>
      <span className="leading-tight">
        <span className="block text-[9px] uppercase tracking-[0.5px] text-white/45">{top}</span>
        <span className="block text-[12.5px] font-semibold text-white">{name}</span>
      </span>
    </a>
  );
}

function AppleIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.7 9.05 7.44c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.39-1.32 2.76-2.54 3.95zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
    </svg>
  );
}
function PlayIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M3.18 23.76a2 2 0 01-.88-.96V1.2a2 2 0 01.88-.96l11.7 11.76-11.7 11.76zM20.12 13.6l-2.31 1.31-2.57-2.57 2.57-2.57 2.31 1.31a1.36 1.36 0 010 2.52zM4.58 23.97l9.06-9.06-2.33-2.33L4.58 23.97zM4.58.03l6.73 11.39L9.3 13.42 4.58.03z" />
    </svg>
  );
}
function GlobeIcon() {
  return (
    <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
    </svg>
  );
}

function HeroStat({ val, sup, label }: { val: string; sup?: string; label: string }) {
  return (
    <div className="bg-white/[0.04] border border-white/10 rounded-[10px] p-3.5">
      <div className="font-serif text-[1.5rem] font-bold text-white leading-none">{val}{sup && <sup className="text-[0.85rem] text-teal">{sup}</sup>}</div>
      <div className="text-[10.5px] text-white/45 mt-1">{label}</div>
    </div>
  );
}
function ContactItem({
  icon,
  iconBg = "bg-light",
  iconColor = "text-teal",
  label,
  value,
}: {
  icon: React.ReactNode;
  iconBg?: string;
  iconColor?: string;
  label: string;
  value: React.ReactNode;
}) {
  return (
    <div className="flex gap-3.5 items-start">
      <div className={`w-[37px] h-[37px] rounded-[9px] flex items-center justify-center shrink-0 ${iconBg} ${iconColor}`}>
        {icon}
      </div>
      <div>
        <div className="text-[10px] text-gray uppercase tracking-[1px] mb-0.5">{label}</div>
        <div className="text-[13px] text-navy font-medium">{value}</div>
      </div>
    </div>
  );
}

