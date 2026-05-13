export interface BlogPost {
  id: number;
  title: string;
  cat: string;
  excerpt: string;
  body: string;
  emoji: string;
  readTime: number;
  date: string;
  image?: string;
  metaTitle?: string;
  metaDesc?: string;
  keywords?: string;
}

export const SEED_POSTS: BlogPost[] = [
  {
    id: 1,
    title: "Why SIP is the best way to start investing in 2026",
    cat: "SIP & Investing",
    excerpt: "Systematic Investment Plans remain the most disciplined and accessible way for salaried individuals to build long-term wealth.",
    body: `<h2>What is a SIP?</h2><p>A Systematic Investment Plan (SIP) allows you to invest a fixed amount every month into a mutual fund scheme of your choice. Instead of trying to time the market, SIP lets you invest consistently regardless of market conditions.</p><h2>Benefits of SIP investing</h2><ul><li>Rupee cost averaging — you buy more units when markets are low</li><li>Power of compounding — returns on returns over time</li><li>Disciplined investing — automatic deductions remove emotion</li><li>Start small — even ₹500/month can make a difference over 10+ years</li></ul><h2>SIP vs FD — the long-term difference</h2><p>A ₹10,000 monthly SIP over 20 years at an assumed 12% return grows to approximately ₹99 lakhs. The same amount in FDs at 6.5% would grow to around ₹48 lakhs. The difference is significant — but remember, mutual fund returns are not guaranteed and subject to market risk.</p><h2>How to start?</h2><p>Contact Nithin Finserv for a free consultation. We will assess your risk profile and suggest suitable funds.</p>`,
    emoji: "📈",
    readTime: 6,
    date: "10 May 2026",
    metaDesc: "Learn why SIP investing is the most effective way to build long-term wealth in 2026.",
    keywords: "SIP investing 2026, mutual fund SIP Bengaluru",
  },
  {
    id: 2,
    title: "ELSS vs PPF: Which is better for Section 80C in FY 2026-27?",
    cat: "Tax Saving",
    excerpt: "Both ELSS and PPF offer Section 80C benefits up to ₹1.5 lakhs. But which one should you choose? A detailed comparison.",
    body: `<h2>What is ELSS?</h2><p>ELSS (Equity Linked Savings Scheme) is a type of mutual fund that qualifies for tax deduction under Section 80C of the Income Tax Act. It has a mandatory 3-year lock-in period — the shortest among all 80C options.</p><h2>What is PPF?</h2><p>Public Provident Fund (PPF) is a government-backed savings scheme with a 15-year lock-in and fixed interest rate declared by the government quarterly.</p><h2>Key differences</h2><ul><li>Lock-in: ELSS 3 years vs PPF 15 years</li><li>Returns: ELSS market-linked (not guaranteed) vs PPF fixed (currently ~7.1%)</li><li>Risk: ELSS higher risk, PPF zero risk</li><li>Taxation: ELSS gains above ₹1L taxed at 10% LTCG vs PPF fully tax-free</li></ul><h2>Which should you choose?</h2><p>If you have a long investment horizon (10+ years) and can tolerate market volatility, ELSS has historically provided higher returns. If you want guaranteed, risk-free returns with full tax exemption, PPF is better. Most investors benefit from a combination of both.</p><p><strong>Note:</strong> Mutual Fund investments are subject to market risks. ELSS returns are not guaranteed. Past performance is not indicative of future results.</p>`,
    emoji: "🧾",
    readTime: 7,
    date: "8 May 2026",
    metaDesc: "Detailed comparison of ELSS vs PPF for Section 80C tax saving in FY 2026-27.",
    keywords: "ELSS vs PPF, 80C tax saving, ELSS 2026",
  },
  {
    id: 3,
    title: "Retirement planning at 30: a practical guide for Bengaluru professionals",
    cat: "Retirement",
    excerpt: "Starting retirement planning in your 30s is the single most impactful financial decision you can make.",
    body: `<h2>Why start at 30?</h2><p>Time is the biggest lever in compounding. A 30-year-old who invests ₹15,000/month till 60 (at assumed 12% returns) builds a corpus of ~₹5.3 crores. The same person starting at 40 reaches only ~₹1.5 crores. That's the cost of delay.</p><h2>How much do you need?</h2><p>Use our retirement calculator to estimate your corpus based on current expenses, expected inflation, and lifestyle. Most Bengaluru professionals find they need ₹4–10 crores depending on current spending and retirement age.</p><h2>Where to invest?</h2><ul><li>Equity mutual funds — for long-term growth</li><li>EPF + VPF — for tax-efficient debt allocation</li><li>NPS — additional ₹50K tax deduction under 80CCD(1B)</li><li>PPF — guaranteed tax-free returns</li></ul><p>Read all scheme-related documents carefully. Mutual fund investments are subject to market risks.</p>`,
    emoji: "🏡",
    readTime: 8,
    date: "5 May 2026",
    metaDesc: "Practical retirement planning guide for 30-year-old professionals in Bengaluru.",
    keywords: "retirement planning 30, Bengaluru retirement, NPS EPF",
  },
];

const STORAGE_KEY = "nf_posts_v1";
const SETTINGS_KEY = "nf_settings_v1";

export const DEFAULT_ADMIN_PASS = "nithinfinserv2026";

export interface AdminSettings {
  adminPass?: string;
  seoTitle?: string;
  seoDesc?: string;
  arn?: string;
  phone?: string;
  email?: string;
}

export function loadPosts(): BlogPost[] {
  if (typeof window === "undefined") return SEED_POSTS;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return SEED_POSTS;
    const parsed = JSON.parse(raw) as BlogPost[];
    return Array.isArray(parsed) && parsed.length > 0 ? parsed : SEED_POSTS;
  } catch {
    return SEED_POSTS;
  }
}

export function savePosts(posts: BlogPost[]): void {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(posts));
}

export function loadSettings(): AdminSettings {
  if (typeof window === "undefined") return {};
  try {
    const raw = window.localStorage.getItem(SETTINGS_KEY);
    return raw ? (JSON.parse(raw) as AdminSettings) : {};
  } catch {
    return {};
  }
}

export function saveSettings(s: AdminSettings): void {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(SETTINGS_KEY, JSON.stringify(s));
}
