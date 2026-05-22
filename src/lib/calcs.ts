import { fmt, fmtFull } from "./utils";

export type CalcCategory = "invest" | "legal";

export interface CalcDef {
  id: CalcId;
  slug: string;
  cat: CalcCategory;
  icon: string;
  name: string;
  desc: string;
  bg: string;
}

export type CalcId =
  | "sip" | "lumpsum" | "goal_lumpsum" | "goal_sip" | "time_onetime" | "time_sip"
  | "retirement" | "investment_planner" | "mf_vs_fd" | "child_education" | "stepup"
  | "dcf" | "emi" | "emi_edu" | "ppf" | "fd" | "rd"
  | "compound" | "cagr" | "gst" | "gratuity";

export const CALCS: CalcDef[] = [
  // INVESTMENT
  { id: "sip", slug: "sip-calculator", cat: "invest", icon: "📈", name: "SIP Calculator", desc: "Calculate the wealth you can generate through monthly SIP investments over time.", bg: "#e5f4ee" },
  { id: "lumpsum", slug: "lumpsum-calculator", cat: "invest", icon: "💰", name: "Lumpsum Calculator", desc: "Calculate the future value of your one-time lumpsum investment.", bg: "#e5f4ee" },
  { id: "goal_lumpsum", slug: "goal-planning-lumpsum-calculator", cat: "invest", icon: "🎯", name: "Goal Planning – Lumpsum", desc: "How much should you invest once to achieve a financial goal?", bg: "#e5f4ee" },
  { id: "goal_sip", slug: "goal-planning-sip-calculator", cat: "invest", icon: "🗓️", name: "Goal Planning – SIP", desc: "How much should you invest monthly/annually to reach your target?", bg: "#e5f4ee" },
  { id: "time_onetime", slug: "time-duration-one-time-calculator", cat: "invest", icon: "⏱️", name: "Time Duration – One Time", desc: "How long will it take for your one-time investment to reach your goal?", bg: "#e5f4ee" },
  { id: "time_sip", slug: "time-duration-sip-calculator", cat: "invest", icon: "⌛", name: "Time Duration – SIP", desc: "How long will it take your regular SIP to reach the target amount?", bg: "#e5f4ee" },
  { id: "retirement", slug: "retirement-planning-calculator", cat: "invest", icon: "🏡", name: "Retirement Planning", desc: "Calculate the investment needed to build your retirement corpus.", bg: "#e5f4ee" },
  { id: "investment_planner", slug: "investment-planner-calculator", cat: "invest", icon: "📊", name: "Investment Planner", desc: "What % of your salary should you invest in equity? Find the ideal amount.", bg: "#e5f4ee" },
  { id: "mf_vs_fd", slug: "mf-vs-fd-returns-calculator", cat: "invest", icon: "⚖️", name: "MF vs FD Returns", desc: "Compare returns between mutual fund investments and fixed deposits.", bg: "#e5f4ee" },
  { id: "child_education", slug: "child-education-planner-calculator", cat: "invest", icon: "🎓", name: "Child Education Planner", desc: "How much should you save monthly to fund your child's education?", bg: "#e5f4ee" },
  { id: "stepup", slug: "step-up-sip-calculator", cat: "invest", icon: "🚀", name: "Step-Up SIP Calculator", desc: "Calculate returns when you increase your SIP amount every year.", bg: "#e5f4ee" },
  { id: "dcf", slug: "dcf-calculator", cat: "invest", icon: "🔬", name: "DCF Calculator", desc: "Calculate intrinsic value of companies using Discounted Cash Flow.", bg: "#e5f4ee" },
  { id: "emi", slug: "emi-calculator", cat: "invest", icon: "🏦", name: "EMI Calculator", desc: "Calculate the monthly EMI on your home, car, or personal loan.", bg: "#e5f4ee" },
  { id: "emi_edu", slug: "education-loan-emi-calculator", cat: "invest", icon: "📚", name: "Education Loan EMI", desc: "Calculate monthly EMI for your education loan post course completion.", bg: "#e5f4ee" },
  { id: "ppf", slug: "ppf-calculator", cat: "invest", icon: "🏛️", name: "PPF Calculator", desc: "Calculate maturity amount of your Public Provident Fund investment.", bg: "#e5f4ee" },
  { id: "fd", slug: "fixed-deposit-calculator", cat: "invest", icon: "🧾", name: "Fixed Deposit Calculator", desc: "Calculate returns on your FD at any interest rate and tenure.", bg: "#e5f4ee" },
  { id: "rd", slug: "recurring-deposit-calculator", cat: "invest", icon: "💳", name: "Recurring Deposit Calculator", desc: "Calculate the maturity amount of your monthly RD investment.", bg: "#e5f4ee" },
  // LEGAL & TAX
  { id: "compound", slug: "compound-interest-calculator", cat: "legal", icon: "📐", name: "Compound Interest Calculator", desc: "Calculate compound interest on your savings for any period.", bg: "#eeecfe" },
  { id: "cagr", slug: "cagr-calculator", cat: "legal", icon: "📉", name: "CAGR Calculator", desc: "Calculate your Compounded Annual Growth Rate on any investment.", bg: "#eeecfe" },
  { id: "gst", slug: "gst-calculator", cat: "legal", icon: "🧾", name: "GST Calculator", desc: "Quickly calculate GST amount payable or included in any price.", bg: "#eeecfe" },
  { id: "gratuity", slug: "gratuity-calculator", cat: "legal", icon: "👔", name: "Gratuity Calculator", desc: "Calculate the gratuity amount payable by your employer on resignation/retirement.", bg: "#eeecfe" },
];

// ── Field definitions per calculator ──

export type FieldType = "slider" | "number" | "tabs";
export interface FieldDef {
  id: string;
  type: FieldType;
  label: string;
  unit?: string;
  prefix?: string;
  min?: number;
  max?: number;
  step?: number;
  defaultValue: number | string;
  options?: { label: string; value: number | string }[];
  placeholder?: string;
}

export const FIELDS: Record<CalcId, FieldDef[]> = {
  sip: [
    { id: "s-m", type: "slider", label: "Monthly SIP amount", prefix: "₹", min: 500, max: 100000, step: 500, defaultValue: 5000 },
    { id: "s-r", type: "slider", label: "Expected annual return (%)", unit: "%", min: 1, max: 30, step: 0.5, defaultValue: 12 },
    { id: "s-y", type: "slider", label: "Investment period", unit: "yrs", min: 1, max: 40, step: 1, defaultValue: 15 },
  ],
  lumpsum: [
    { id: "l-a", type: "slider", label: "Investment amount", prefix: "₹", min: 10000, max: 10000000, step: 1000, defaultValue: 100000 },
    { id: "l-r", type: "slider", label: "Expected annual return (%)", unit: "%", min: 1, max: 30, step: 0.5, defaultValue: 12 },
    { id: "l-y", type: "slider", label: "Investment period", unit: "yrs", min: 1, max: 40, step: 1, defaultValue: 15 },
  ],
  goal_lumpsum: [
    { id: "gl-t", type: "slider", label: "Target amount", prefix: "₹", min: 100000, max: 50000000, step: 50000, defaultValue: 1000000 },
    { id: "gl-r", type: "slider", label: "Expected annual return (%)", unit: "%", min: 1, max: 30, step: 0.5, defaultValue: 12 },
    { id: "gl-y", type: "slider", label: "Investment period", unit: "yrs", min: 1, max: 40, step: 1, defaultValue: 10 },
  ],
  goal_sip: [
    { id: "gs-t", type: "slider", label: "Target amount", prefix: "₹", min: 100000, max: 50000000, step: 100000, defaultValue: 5000000 },
    { id: "gs-r", type: "slider", label: "Expected annual return (%)", unit: "%", min: 1, max: 30, step: 0.5, defaultValue: 12 },
    { id: "gs-y", type: "slider", label: "Investment period", unit: "yrs", min: 1, max: 40, step: 1, defaultValue: 10 },
  ],
  time_onetime: [
    { id: "to-p", type: "slider", label: "Investment amount", prefix: "₹", min: 10000, max: 10000000, step: 1000, defaultValue: 100000 },
    { id: "to-t", type: "slider", label: "Target amount", prefix: "₹", min: 50000, max: 50000000, step: 10000, defaultValue: 1000000 },
    { id: "to-r", type: "slider", label: "Expected annual return (%)", unit: "%", min: 1, max: 30, step: 0.5, defaultValue: 12 },
  ],
  time_sip: [
    { id: "ts-m", type: "slider", label: "Monthly SIP amount", prefix: "₹", min: 500, max: 100000, step: 500, defaultValue: 5000 },
    { id: "ts-t", type: "slider", label: "Target amount", prefix: "₹", min: 100000, max: 50000000, step: 100000, defaultValue: 5000000 },
    { id: "ts-r", type: "slider", label: "Expected annual return (%)", unit: "%", min: 1, max: 30, step: 0.5, defaultValue: 12 },
  ],
  retirement: [
    { id: "ret-ca", type: "slider", label: "Current age", unit: "yrs", min: 20, max: 60, step: 1, defaultValue: 30 },
    { id: "ret-ra", type: "slider", label: "Retirement age", unit: "yrs", min: 40, max: 70, step: 1, defaultValue: 60 },
    { id: "ret-me", type: "slider", label: "Current monthly expenses", prefix: "₹", min: 10000, max: 300000, step: 1000, defaultValue: 50000 },
    { id: "ret-in", type: "slider", label: "Inflation rate (%)", unit: "%", min: 4, max: 10, step: 0.5, defaultValue: 6 },
    { id: "ret-rr", type: "slider", label: "Post-retirement return (%)", unit: "%", min: 4, max: 12, step: 0.5, defaultValue: 7 },
  ],
  investment_planner: [
    { id: "ip-s", type: "slider", label: "Monthly salary", prefix: "₹", min: 10000, max: 500000, step: 1000, defaultValue: 60000 },
    { id: "ip-a", type: "slider", label: "Current age", unit: "yrs", min: 18, max: 55, step: 1, defaultValue: 30 },
    { id: "ip-r", type: "slider", label: "Expected equity return (%)", unit: "%", min: 8, max: 20, step: 0.5, defaultValue: 12 },
    { id: "ip-y", type: "slider", label: "Investment horizon", unit: "yrs", min: 5, max: 40, step: 1, defaultValue: 20 },
  ],
  mf_vs_fd: [
    { id: "mf-a", type: "slider", label: "Investment amount", prefix: "₹", min: 10000, max: 10000000, step: 1000, defaultValue: 100000 },
    { id: "mf-y", type: "slider", label: "Investment period", unit: "yrs", min: 1, max: 30, step: 1, defaultValue: 10 },
    { id: "mf-r", type: "slider", label: "Expected MF return (%)", unit: "%", min: 6, max: 25, step: 0.5, defaultValue: 12 },
    { id: "mf-f", type: "slider", label: "FD interest rate (%)", unit: "%", min: 4, max: 10, step: 0.25, defaultValue: 7 },
  ],
  child_education: [
    { id: "ce-c", type: "slider", label: "Current education cost", prefix: "₹", min: 100000, max: 10000000, step: 50000, defaultValue: 1000000 },
    { id: "ce-y", type: "slider", label: "Years until education needed", unit: "yrs", min: 1, max: 20, step: 1, defaultValue: 10 },
    { id: "ce-i", type: "slider", label: "Education inflation rate (%)", unit: "%", min: 5, max: 15, step: 0.5, defaultValue: 8 },
    { id: "ce-r", type: "slider", label: "Expected investment return (%)", unit: "%", min: 6, max: 20, step: 0.5, defaultValue: 12 },
  ],
  stepup: [
    { id: "su-m", type: "slider", label: "Starting monthly SIP", prefix: "₹", min: 500, max: 100000, step: 500, defaultValue: 5000 },
    { id: "su-s", type: "slider", label: "Annual step-up (%)", unit: "%", min: 5, max: 50, step: 5, defaultValue: 10 },
    { id: "su-r", type: "slider", label: "Expected annual return (%)", unit: "%", min: 8, max: 20, step: 0.5, defaultValue: 12 },
    { id: "su-y", type: "slider", label: "Investment period", unit: "yrs", min: 5, max: 40, step: 1, defaultValue: 15 },
  ],
  dcf: [
    { id: "dcf-eps", type: "number", label: "Current EPS (₹)", placeholder: "e.g. 50", defaultValue: 50 },
    { id: "dcf-g", type: "number", label: "Expected growth rate (%)", placeholder: "e.g. 15", defaultValue: 15 },
    { id: "dcf-t", type: "number", label: "Growth period (years)", placeholder: "e.g. 10", defaultValue: 10 },
    { id: "dcf-d", type: "number", label: "Discount rate (%)", placeholder: "e.g. 10", defaultValue: 10 },
    { id: "dcf-tv", type: "number", label: "Terminal growth rate (%)", placeholder: "e.g. 3", defaultValue: 3 },
  ],
  emi: [
    { id: "em-l", type: "slider", label: "Loan amount", prefix: "₹", min: 50000, max: 10000000, step: 10000, defaultValue: 2000000 },
    { id: "em-r", type: "slider", label: "Annual interest rate (%)", unit: "%", min: 4, max: 24, step: 0.1, defaultValue: 8.5 },
    { id: "em-t", type: "slider", label: "Loan tenure", unit: "yrs", min: 1, max: 30, step: 1, defaultValue: 20 },
  ],
  emi_edu: [
    { id: "ee-l", type: "slider", label: "Education loan amount", prefix: "₹", min: 50000, max: 5000000, step: 10000, defaultValue: 500000 },
    { id: "ee-r", type: "slider", label: "Annual interest rate (%)", unit: "%", min: 6, max: 16, step: 0.1, defaultValue: 10 },
    { id: "ee-t", type: "slider", label: "Repayment tenure (after course)", unit: "yrs", min: 1, max: 15, step: 1, defaultValue: 5 },
    { id: "ee-m", type: "slider", label: "Moratorium period (months)", unit: "mo", min: 0, max: 24, step: 1, defaultValue: 12 },
  ],
  ppf: [
    { id: "ppf-a", type: "slider", label: "Annual PPF contribution", prefix: "₹", min: 500, max: 150000, step: 500, defaultValue: 60000 },
    { id: "ppf-r", type: "slider", label: "PPF interest rate (%)", unit: "%", min: 6, max: 10, step: 0.05, defaultValue: 7.1 },
    { id: "ppf-y", type: "slider", label: "PPF tenure", unit: "yrs", min: 15, max: 35, step: 5, defaultValue: 15 },
  ],
  fd: [
    { id: "fd-a", type: "slider", label: "FD amount", prefix: "₹", min: 1000, max: 10000000, step: 1000, defaultValue: 100000 },
    { id: "fd-r", type: "slider", label: "Annual interest rate (%)", unit: "%", min: 4, max: 10, step: 0.1, defaultValue: 7 },
    { id: "fd-y", type: "slider", label: "FD tenure", unit: "yrs", min: 1, max: 10, step: 1, defaultValue: 5 },
  ],
  rd: [
    { id: "rd-m", type: "slider", label: "Monthly RD amount", prefix: "₹", min: 500, max: 100000, step: 500, defaultValue: 5000 },
    { id: "rd-r", type: "slider", label: "Annual interest rate (%)", unit: "%", min: 4, max: 10, step: 0.1, defaultValue: 7 },
    { id: "rd-y", type: "slider", label: "RD tenure", unit: "yrs", min: 1, max: 10, step: 1, defaultValue: 3 },
  ],
  compound: [
    { id: "ci-p", type: "slider", label: "Principal amount", prefix: "₹", min: 1000, max: 10000000, step: 1000, defaultValue: 100000 },
    { id: "ci-r", type: "slider", label: "Annual interest rate (%)", unit: "%", min: 1, max: 30, step: 0.5, defaultValue: 12 },
    { id: "ci-y", type: "slider", label: "Period", unit: "yrs", min: 1, max: 40, step: 1, defaultValue: 10 },
    { id: "ci-freq", type: "tabs", label: "Compounding frequency", defaultValue: 1, options: [{ label: "Yearly", value: 1 }, { label: "Quarterly", value: 4 }, { label: "Monthly", value: 12 }] },
  ],
  cagr: [
    { id: "cagr-iv", type: "number", label: "Initial investment value (₹)", placeholder: "e.g. 100000", defaultValue: 100000 },
    { id: "cagr-fv", type: "number", label: "Final investment value (₹)", placeholder: "e.g. 250000", defaultValue: 250000 },
    { id: "cagr-y", type: "number", label: "Investment period (years)", placeholder: "e.g. 5", defaultValue: 5 },
  ],
  gst: [
    { id: "gst-a", type: "number", label: "Amount (₹)", placeholder: "e.g. 10000", defaultValue: 10000 },
    { id: "gst-r", type: "tabs", label: "GST Rate", defaultValue: 18, options: [{ label: "5%", value: 5 }, { label: "12%", value: 12 }, { label: "18%", value: 18 }, { label: "28%", value: 28 }] },
    { id: "gst-type", type: "tabs", label: "Amount type", defaultValue: "ex", options: [{ label: "Excl. GST", value: "ex" }, { label: "Incl. GST", value: "inc" }] },
  ],
  gratuity: [
    { id: "gr-s", type: "number", label: "Last drawn monthly salary (₹)", placeholder: "e.g. 50000", defaultValue: 50000 },
    { id: "gr-y", type: "number", label: "Years of service", placeholder: "e.g. 10", defaultValue: 10 },
    { id: "gr-type", type: "tabs", label: "Organisation type", defaultValue: "covered", options: [{ label: "Covered under Gratuity Act", value: "covered" }, { label: "Not covered", value: "not" }] },
  ],
};

// ── Calculator engine ──

export interface CalcResultRow { l: string; v: string; g?: boolean; gold?: boolean }
export interface CalcResult {
  kind: "donut" | "simple";
  mainLbl?: string;
  mainVal?: string;
  invested?: number;
  returns?: number;
  rows?: CalcResultRow[];
  boxes?: { l: string; v: string; teal?: boolean; gold?: boolean }[];
  cta?: string;
}

export function runCalc(id: CalcId, v: Record<string, number | string>): CalcResult {
  const g = (key: string): number => Number(v[key] ?? 0);
  const s = (key: string): string => String(v[key] ?? "");

  switch (id) {
    case "sip": {
      const m = g("s-m"), r = g("s-r") / 100 / 12, n = g("s-y") * 12;
      const fv = m * (Math.pow(1 + r, n) - 1) / r * (1 + r);
      const inv = m * n;
      return {
        kind: "donut", mainLbl: "Total corpus", mainVal: fmtFull(fv), invested: inv, returns: fv - inv,
        rows: [
          { l: "Monthly SIP", v: fmt(g("s-m")) },
          { l: "Total invested", v: fmt(inv) },
          { l: "Estimated returns", v: fmt(fv - inv), g: true },
          { l: "Total corpus", v: fmt(fv), g: true },
        ],
        cta: "Start SIP now →",
      };
    }
    case "lumpsum": {
      const p = g("l-a"), r = g("l-r") / 100, n = g("l-y");
      const fv = p * Math.pow(1 + r, n);
      return {
        kind: "donut", mainLbl: "Maturity value", mainVal: fmtFull(fv), invested: p, returns: fv - p,
        rows: [
          { l: "Investment", v: fmt(p) },
          { l: "Estimated returns", v: fmt(fv - p), g: true },
          { l: "Maturity value", v: fmt(fv), g: true },
        ],
        cta: "Start SIP now →",
      };
    }
    case "goal_lumpsum": {
      const t = g("gl-t"), r = g("gl-r") / 100, y = g("gl-y");
      const inv = t / Math.pow(1 + r, y);
      return {
        kind: "donut", mainLbl: "One-time investment needed", mainVal: fmtFull(inv), invested: inv, returns: t - inv,
        rows: [
          { l: "Target amount", v: fmt(t) },
          { l: "Invest today", v: fmt(inv), g: true },
          { l: "Wealth created", v: fmt(t - inv), g: true },
        ],
        cta: "Invest lumpsum now →",
      };
    }
    case "goal_sip": {
      const t = g("gs-t"), r = g("gs-r") / 100 / 12, n = g("gs-y") * 12;
      const sip = t * r / (Math.pow(1 + r, n) - 1) / (1 + r);
      return {
        kind: "donut", mainLbl: "Monthly SIP needed", mainVal: fmtFull(sip), invested: sip * n, returns: t - sip * n,
        rows: [
          { l: "Target amount", v: fmt(t) },
          { l: "Monthly SIP needed", v: fmt(sip), g: true },
          { l: "Total to invest", v: fmt(sip * n) },
          { l: "Returns earned", v: fmt(t - sip * n), g: true },
        ],
        cta: "Start SIP now →",
      };
    }
    case "time_onetime": {
      const p = g("to-p"), t = g("to-t"), r = g("to-r") / 100;
      if (t <= p) return { kind: "simple", boxes: [{ l: "Status", v: "Target already reached!", teal: true }] };
      const yrs = Math.log(t / p) / Math.log(1 + r);
      const y = Math.floor(yrs), m = Math.round((yrs - y) * 12);
      return {
        kind: "simple", boxes: [
          { l: "Investment", v: fmt(p) }, { l: "Target amount", v: fmt(t) },
          { l: "Time needed", v: `${y} yrs ${m} mos`, teal: true },
          { l: "Expected return", v: g("to-r") + "% p.a." },
        ],
        cta: "Start investing →",
      };
    }
    case "time_sip": {
      const m = g("ts-m"), t = g("ts-t"), r = g("ts-r") / 100 / 12;
      let n = 1;
      while (n < 1200) { const fv = m * (Math.pow(1 + r, n) - 1) / r * (1 + r); if (fv >= t) break; n++; }
      const y = Math.floor(n / 12), mo = n % 12;
      return {
        kind: "simple", boxes: [
          { l: "Monthly SIP", v: fmt(m) }, { l: "Target amount", v: fmt(t) },
          { l: "Time needed", v: `${y} yrs ${mo} mos`, teal: true },
          { l: "Total invested", v: fmt(m * n) },
        ],
        cta: "Invest now →",
      };
    }
    case "retirement": {
      const ca = g("ret-ca"), ra = g("ret-ra"), me = g("ret-me"), inf = g("ret-in") / 100, rr = g("ret-rr") / 100;
      const yrs = ra - ca;
      const futMon = me * Math.pow(1 + inf, yrs);
      const corpus = futMon * 12 / rr;
      const sipR = rr / 12; const n = yrs * 12;
      const sip = corpus * sipR / (Math.pow(1 + sipR, n) - 1);
      return {
        kind: "donut", mainLbl: "Corpus needed at retirement", mainVal: fmtFull(corpus), invested: sip * n, returns: corpus - sip * n,
        rows: [
          { l: "Years to retirement", v: yrs + " yrs" },
          { l: "Monthly expenses then", v: fmt(futMon) },
          { l: "Corpus needed", v: fmt(corpus), g: true },
          { l: "SIP needed now", v: fmt(sip) + "/mo", g: true },
        ],
        cta: "Start retirement SIP →",
      };
    }
    case "investment_planner": {
      const sal = g("ip-s"), age = g("ip-a"), r = g("ip-r") / 100, y = g("ip-y");
      const recPct = Math.max(10, Math.min(40, (35 - age) * 1.2));
      const rec = sal * recPct / 100;
      const r12 = r / 12, n = y * 12;
      const corpus = rec * (Math.pow(1 + r12, n) - 1) / r12 * (1 + r12);
      return {
        kind: "donut", mainLbl: "Projected corpus", mainVal: fmtFull(corpus), invested: rec * n, returns: corpus - rec * n,
        rows: [
          { l: "Monthly salary", v: fmt(sal) },
          { l: "Recommended to invest", v: Math.round(recPct) + "% = " + fmt(rec), g: true },
          { l: "Total invested (" + y + " yrs)", v: fmt(rec * n) },
          { l: "Projected corpus", v: fmt(corpus), g: true },
        ],
        cta: "Start SIP now →",
      };
    }
    case "mf_vs_fd": {
      const a = g("mf-a"), y = g("mf-y"), mr = g("mf-r") / 100, fr = g("mf-f") / 100;
      const mfVal = a * Math.pow(1 + mr, y);
      const fdVal = a * Math.pow(1 + fr / 4, 4 * y);
      return {
        kind: "simple", boxes: [
          { l: "Your investment", v: fmt(a) },
          { l: "MF value (" + g("mf-r") + "% assumed)", v: fmt(mfVal), teal: true },
          { l: "FD maturity (" + g("mf-f") + "%)", v: fmt(fdVal) },
          { l: "MF advantage", v: fmt(mfVal - fdVal), teal: true },
        ],
        cta: "Invest in MF now →",
      };
    }
    case "child_education": {
      const c = g("ce-c"), y = g("ce-y"), ei = g("ce-i") / 100, r = g("ce-r") / 100;
      const future = c * Math.pow(1 + ei, y);
      const r12 = r / 12, n = y * 12;
      const sip = future * r12 / (Math.pow(1 + r12, n) - 1);
      return {
        kind: "donut", mainLbl: "Future education cost", mainVal: fmtFull(future), invested: sip * n, returns: future - sip * n,
        rows: [
          { l: "Current cost", v: fmt(c) },
          { l: "Future cost (" + y + " yrs)", v: fmt(future), g: true },
          { l: "Monthly SIP needed", v: fmt(sip), g: true },
          { l: "Total you invest", v: fmt(sip * n) },
        ],
        cta: "Start child SIP →",
      };
    }
    case "stepup": {
      const m = g("su-m"), su = g("su-s") / 100, r = g("su-r") / 100 / 12, y = g("su-y");
      let total = 0, invested = 0;
      let monthly = m;
      for (let yr = 0; yr < y; yr++) {
        for (let mo = 0; mo < 12; mo++) { invested += monthly; total = (total + monthly) * (1 + r); }
        monthly *= 1 + su;
      }
      return {
        kind: "donut", mainLbl: "Total corpus", mainVal: fmtFull(total), invested, returns: total - invested,
        rows: [
          { l: "Starting SIP", v: fmt(m) + "/mo" },
          { l: "Final SIP (yr " + y + ")", v: fmt(m * Math.pow(1 + su, y - 1)) + "/mo" },
          { l: "Total invested", v: fmt(invested) },
          { l: "Est. returns", v: fmt(total - invested), g: true },
          { l: "Total corpus", v: fmt(total), g: true },
        ],
        cta: "Start step-up SIP →",
      };
    }
    case "dcf": {
      const eps = g("dcf-eps"), gr = g("dcf-g") / 100, t = g("dcf-t"), d = g("dcf-d") / 100, tv = g("dcf-tv") / 100;
      let pv = 0;
      for (let i = 1; i <= t; i++) pv += eps * Math.pow(1 + gr, i) / Math.pow(1 + d, i);
      const terminal = eps * Math.pow(1 + gr, t) * (1 + tv) / (d - tv);
      const pvTerminal = terminal / Math.pow(1 + d, t);
      const intrinsic = pv + pvTerminal;
      return {
        kind: "simple", boxes: [
          { l: "Sum of discounted earnings", v: "₹" + pv.toFixed(2) },
          { l: "Terminal value (PV)", v: "₹" + pvTerminal.toFixed(2) },
          { l: "Intrinsic value (per share)", v: "₹" + intrinsic.toFixed(2), teal: true },
        ],
        cta: "Invest via Wealthy →",
      };
    }
    case "emi": {
      const p = g("em-l"), r = g("em-r") / 100 / 12, n = g("em-t") * 12;
      const emi = p * r * Math.pow(1 + r, n) / (Math.pow(1 + r, n) - 1);
      const total = emi * n;
      return {
        kind: "donut", mainLbl: "Monthly EMI", mainVal: fmtFull(emi), invested: p, returns: total - p,
        rows: [
          { l: "Loan amount", v: fmt(p) }, { l: "Monthly EMI", v: fmt(emi), g: true },
          { l: "Total interest", v: fmt(total - p) }, { l: "Total payment", v: fmt(total) },
        ],
        cta: "Invest the savings →",
      };
    }
    case "emi_edu": {
      const p = g("ee-l"), r = g("ee-r") / 100 / 12, n = g("ee-t") * 12, m = g("ee-m");
      const morInt = p * r * m;
      const totalP = p + morInt;
      const emi = totalP * r * Math.pow(1 + r, n) / (Math.pow(1 + r, n) - 1);
      return {
        kind: "simple", boxes: [
          { l: "Loan amount", v: fmt(p) },
          { l: "Interest during moratorium", v: fmt(morInt) },
          { l: "Monthly EMI (after course)", v: fmt(emi), teal: true },
          { l: "Total payment", v: fmt(emi * n + morInt) },
        ],
        cta: "Plan education fund →",
      };
    }
    case "ppf": {
      const a = g("ppf-a"), r = g("ppf-r") / 100, y = g("ppf-y");
      const fv = a * ((Math.pow(1 + r, y) - 1) / r) * (1 + r);
      return {
        kind: "donut", mainLbl: "PPF maturity amount", mainVal: fmtFull(fv), invested: a * y, returns: fv - a * y,
        rows: [
          { l: "Annual contribution", v: fmt(a) },
          { l: "Total invested (" + y + " yrs)", v: fmt(a * y) },
          { l: "Interest earned", v: fmt(fv - a * y), g: true },
          { l: "Maturity amount", v: fmt(fv), g: true },
        ],
        cta: "Also invest in ELSS →",
      };
    }
    case "fd": {
      const p = g("fd-a"), r = g("fd-r") / 100, y = g("fd-y");
      const fv = p * Math.pow(1 + r / 4, 4 * y);
      return {
        kind: "donut", mainLbl: "FD maturity value", mainVal: fmtFull(fv), invested: p, returns: fv - p,
        rows: [
          { l: "Principal", v: fmt(p) },
          { l: "Interest earned", v: fmt(fv - p), g: true },
          { l: "Maturity value", v: fmt(fv), g: true },
        ],
        cta: "Compare with SIP →",
      };
    }
    case "rd": {
      const m = g("rd-m"), r = g("rd-r") / 100 / 12, n = g("rd-y") * 12;
      const fv = m * (Math.pow(1 + r, n) - 1) / r * (1 + r);
      return {
        kind: "donut", mainLbl: "RD maturity value", mainVal: fmtFull(fv), invested: m * n, returns: fv - m * n,
        rows: [
          { l: "Monthly deposit", v: fmt(m) }, { l: "Total deposited", v: fmt(m * n) },
          { l: "Interest earned", v: fmt(fv - m * n), g: true },
          { l: "Maturity value", v: fmt(fv), g: true },
        ],
        cta: "Compare with SIP →",
      };
    }
    case "compound": {
      const p = g("ci-p"), r = g("ci-r") / 100, y = g("ci-y"), f = g("ci-freq") || 1;
      const fv = p * Math.pow(1 + r / f, f * y);
      return {
        kind: "donut", mainLbl: "Maturity value", mainVal: fmtFull(fv), invested: p, returns: fv - p,
        rows: [
          { l: "Principal", v: fmt(p) }, { l: "Rate", v: g("ci-r") + "% p.a." },
          { l: "Compound interest", v: fmt(fv - p), g: true },
          { l: "Maturity amount", v: fmt(fv), g: true },
        ],
        cta: "Invest and grow →",
      };
    }
    case "cagr": {
      const iv = g("cagr-iv"), fv = g("cagr-fv"), y = g("cagr-y");
      if (iv <= 0 || fv <= 0 || y <= 0) return { kind: "simple", boxes: [{ l: "Please enter valid values", v: "—" }] };
      const cagr = (Math.pow(fv / iv, 1 / y) - 1) * 100;
      return {
        kind: "simple", boxes: [
          { l: "Initial value", v: fmt(iv) }, { l: "Final value", v: fmt(fv) },
          { l: "Period", v: y + " years" },
          { l: "CAGR", v: cagr.toFixed(2) + "% p.a.", teal: true },
        ],
        cta: "Invest for better CAGR →",
      };
    }
    case "gst": {
      const a = g("gst-a"), r = g("gst-r") || 18, type = s("gst-type") || "ex";
      let excl: number, gstAmt: number, incl: number;
      if (type === "ex") { excl = a; gstAmt = a * r / 100; incl = a + gstAmt; }
      else { incl = a; excl = a * 100 / (100 + r); gstAmt = a - excl; }
      return {
        kind: "simple", boxes: [
          { l: "Amount (excl. GST)", v: fmt(excl) },
          { l: "GST (" + r + "%)", v: fmt(gstAmt), teal: true },
          { l: "CGST (" + (r / 2) + "%)", v: fmt(gstAmt / 2) },
          { l: "SGST (" + (r / 2) + "%)", v: fmt(gstAmt / 2) },
          { l: "Total amount (incl. GST)", v: fmt(incl), teal: true },
        ],
        cta: "Invest tax savings →",
      };
    }
    case "gratuity": {
      const sal = g("gr-s"), y = g("gr-y"), type = s("gr-type") || "covered";
      const gratuity = type === "covered" ? (sal * 15 * y) / 26 : (sal * 15 * y) / 30;
      const taxFree = Math.min(gratuity, 2000000);
      return {
        kind: "simple", boxes: [
          { l: "Monthly salary", v: fmt(sal) },
          { l: "Years of service", v: y + " years" },
          { l: "Gratuity payable", v: fmt(gratuity), teal: true },
          { l: "Tax-free limit", v: fmt(taxFree) },
          { l: "Formula used", v: type === "covered" ? "(S×15×Y)/26" : "(S×15×Y)/30" },
        ],
        cta: "Invest your gratuity →",
      };
    }
  }
}
