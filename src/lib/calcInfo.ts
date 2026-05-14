import type { CalcId } from "./calcs";

export interface CalcInfo {
  about: string;              // 2–3 paragraph intro, keyword-rich
  whatIs: string;             // dedicated "What is X?" explainer
  howItWorks: string;         // formula + plain English
  example: string;            // worked example with rupee numbers
  howToUse: string[];         // step-by-step
  keyFeatures: string[];      // what the calculator surfaces
  benefits: string[];         // why investors use this instrument/strategy
  useCases: string[];         // when this calculator is the right tool
  tips: string;               // 1 paragraph of investing tips / context
  faqs: { q: string; a: string }[]; // 8+ FAQs
}

export const CALC_INFO: Record<CalcId, CalcInfo> = {
  sip: {
    about:
      "Our free SIP Calculator is a powerful online tool that helps Indian investors estimate the future value of their Systematic Investment Plan in mutual funds. Whether you are a salaried professional starting your first SIP, a parent planning for your child's education, or someone preparing for retirement, this SIP returns calculator gives you a clear, data-driven projection in seconds. Just enter your monthly SIP amount, the expected annual return rate, and your investment tenure to instantly see the total amount invested, estimated returns generated from compounding, and the final maturity corpus.\n\nSIP investing has become the cornerstone of wealth creation for crores of Indians because it combines two of the most powerful concepts in personal finance — rupee cost averaging and the power of compounding. Unlike trying to time the market, which even seasoned professionals struggle with, a monthly SIP automates investing across market highs and lows, smoothing out volatility while building substantial wealth over the long term. Use this online SIP planner to set realistic financial goals, compare different mutual fund scenarios, and start your investment journey with confidence — backed by AMFI Registered Mutual Fund Distributor Nithin Finserv in Bengaluru (ARN: 307760).",
    whatIs:
      "A Systematic Investment Plan (SIP) is a disciplined method of investing in mutual funds where you contribute a fixed amount at regular intervals — most commonly monthly. Introduced in India over two decades ago, SIPs are now the most popular form of mutual fund investment, with monthly SIP inflows in India crossing ₹25,000 crores. SIPs work across all asset classes including equity mutual funds, debt funds, ELSS (Equity Linked Savings Schemes) for tax saving under Section 80C, hybrid funds, and index funds. The minimum SIP amount in most schemes is just ₹500 per month, making mutual fund investing accessible to first-time investors, students, salaried professionals, and seasoned investors alike.",
    howItWorks:
      "The SIP maturity formula is M = P × [((1 + r)^n − 1) / r] × (1 + r), where P is the monthly SIP amount, r is the monthly rate of return (annual rate divided by 12), and n is the total number of months. Each instalment compounds for the remaining time in your investment horizon, so the earliest contributions generate the largest returns. The SIP calculator processes this maths instantly to show you invested capital, wealth created from market returns, and the final corpus.",
    example:
      "Suppose you start a ₹10,000 monthly SIP in a diversified equity mutual fund and stay invested for 20 years at an assumed 12% annual return. Your total invested amount over 240 months will be ₹24 lakhs. The estimated maturity value, thanks to compounding, will be approximately ₹99.9 lakhs — a wealth gain of about ₹76 lakhs without any active management on your part. Extend the SIP by just 5 more years to a 25-year horizon and the corpus grows to roughly ₹1.9 crores. This illustrates the exponential power of long-horizon SIP investing in equity mutual funds.",
    howToUse: [
      "Enter your monthly SIP amount in rupees — start as low as ₹500/month if you're a beginner",
      "Set the expected annual return rate (10–14% is the typical historical range for diversified equity mutual funds in India)",
      "Choose your investment horizon in years — longer horizons benefit dramatically more from compounding",
      "Read the live results showing total invested, estimated returns, and final SIP maturity corpus",
      "Try different scenarios — increase the SIP amount, extend the tenure, or compare two plans side by side",
      "Use the projected corpus to plan real-life goals like retirement, home buying, or your child's education",
      "Speak to an AMFI Registered Mutual Fund Distributor to choose the right scheme and start your SIP",
    ],
    keyFeatures: [
      "Real-time SIP maturity calculation with instant updates as you change inputs",
      "Donut chart visualisation of invested capital vs estimated returns",
      "Works for any monthly SIP amount, any tenure up to 40 years, and any return rate",
      "Mobile-friendly design — calculate on phone, tablet, or desktop",
      "Free to use with no signup, login, or personal details required",
      "Built and backed by AMFI Registered MFD Nithin Finserv with 40+ AMC partnerships",
    ],
    benefits: [
      "Disciplined, automated monthly investing — no need to time the market",
      "Rupee cost averaging buys more fund units when markets fall and fewer when they rise",
      "Long-horizon compounding turns modest monthly amounts into substantial corpuses",
      "Start with just ₹500/month and step up the SIP as your salary grows year by year",
      "Works for retirement planning, child education, home down-payment, and pure wealth creation",
      "Highly liquid (except ELSS) — pause, stop, or redeem any time without penalty",
      "Tax-efficient via ELSS SIPs that qualify for Section 80C deductions up to ₹1.5L per year",
      "Suitable for every risk profile through equity, debt, hybrid, or balanced fund SIPs",
    ],
    useCases: [
      "Long-term retirement corpus building over 20–30 year horizons",
      "Children's higher education funding planned 10–18 years in advance",
      "Home down-payment savings over a 5–7 year horizon",
      "General wealth creation and financial independence (FIRE) goals",
      "Tax saving via ELSS SIPs under Section 80C of the Income Tax Act",
      "Building a supplementary or passive income corpus",
    ],
    tips:
      "Start your SIP as early as possible — a 25-year-old investing ₹10,000/month till 60 reaches ~₹6.4 crores at 12% return, while a 35-year-old needs ~₹33,000/month for the same goal. Step up the SIP every year in line with salary hikes to neutralise lifestyle inflation. Don't stop SIPs during market falls — those are the periods that quietly buy you the most fund units, accelerating future returns. Review your portfolio annually, not monthly. And always pair SIPs with adequate term insurance and a 6-month emergency fund before pushing the contribution higher.",
    faqs: [
      { q: "What is an SIP in mutual funds?", a: "A Systematic Investment Plan lets you invest a fixed amount into a mutual fund scheme every month or quarter. It is the most popular way for salaried Indians to invest in equity mutual funds because it removes the need to time the market and builds the habit of consistent, automated investing." },
      { q: "How accurate is this SIP calculator?", a: "The maths is exact for the assumed return rate you input. Real-world output depends on the actual performance of the chosen mutual fund, which varies year to year. Use 10–12% as a reasonable, conservative assumption for diversified equity mutual fund SIPs over 7+ year horizons." },
      { q: "Can I start an SIP with ₹500 per month?", a: "Yes. Most mutual fund schemes accept SIPs starting from ₹500 per month, and some accept ₹100. Start with whatever you can afford consistently — even a small SIP started early beats a large SIP started late." },
      { q: "Is SIP better than a fixed deposit?", a: "For investment horizons of 7+ years, equity SIPs have historically delivered significantly higher post-tax, inflation-adjusted returns than fixed deposits. FDs offer capital safety and guaranteed returns; SIPs in equity offer growth potential with market-linked risk. Many investors hold both." },
      { q: "Are SIP returns taxable in India?", a: "Yes. Equity mutual fund gains held for over 12 months are taxed at 12.5% LTCG above ₹1.25 lakh per financial year. Short-term gains (under 12 months) are taxed at 20%. Debt fund SIP taxation differs by holding period — speak to your distributor or tax advisor for specifics." },
      { q: "Can I increase my SIP amount later?", a: "Yes. Most AMCs support 'step-up SIPs' that automatically increase the contribution by a fixed percentage or amount every year. You can also manually increase your SIP at any time when your salary or surplus income grows." },
      { q: "What happens if I miss an SIP instalment?", a: "Most fund houses do not charge a penalty for a missed SIP, but your bank may levy a small dishonour fee. If three consecutive SIP instalments fail, the AMC may automatically pause the SIP. You can resume by adding funds and reinitiating." },
      { q: "Which is the best SIP for beginners in India?", a: "Beginners are typically guided towards a large-cap or flexi-cap diversified equity fund, or a Nifty 50 index fund SIP for lower cost. The 'best' SIP depends on your goal, horizon, and risk appetite — consult an AMFI Registered Mutual Fund Distributor before deciding." },
      { q: "Can NRIs invest in Indian mutual funds via SIP?", a: "Yes. NRIs (excluding those resident in the USA and Canada at most fund houses) can invest in Indian mutual funds via SIPs through NRE or NRO bank accounts, subject to FATCA and KYC compliance. Tax implications differ — check with a CA familiar with NRI taxation." },
      { q: "How is SIP different from a recurring deposit (RD)?", a: "RDs offer guaranteed, fixed-interest returns and are bank deposits with no market risk. SIPs invest in mutual funds with market-linked, variable returns that historically have outperformed RDs over long horizons. RDs are best for short-term safety; equity SIPs for long-term wealth." },
    ],
  },

  lumpsum: {
    about:
      "Our Lumpsum Calculator is a free, instant online tool that estimates how much your one-time mutual fund investment will grow to over your chosen tenure. Use it whenever you have a ready corpus — a year-end bonus, FD maturity proceeds, property sale gain, inheritance, or ESOP cash-out — and you want to deploy the entire amount at once instead of breaking it into a monthly SIP. Lumpsum mutual fund investing captures full compounding from day one, which is its biggest advantage over staggered SIPs when markets are flat or trending upwards.\n\nWhether you're comparing a lumpsum vs SIP strategy, planning a retirement-corpus rollover, or projecting equity mutual fund returns on a fresh deposit, this lumpsum maturity calculator gives you a clear, data-driven answer in seconds. Enter the investment amount, expected annual return, and horizon in years to see the projected maturity value, total wealth created, and the donut breakup of principal vs returns. Backed by AMFI Registered MFD Nithin Finserv, Bengaluru.",
    whatIs:
      "A lumpsum investment is a single one-time investment in a mutual fund scheme — as opposed to a monthly SIP which spreads the same amount across multiple instalments. Lumpsum investing is suited to investors with surplus capital and a clear long-horizon view. It captures the full compounding benefit from day one but exposes you to single-day market timing. Lumpsum can be done in equity, debt, hybrid, gold, or international mutual funds. The minimum lumpsum investment in most Indian mutual fund schemes is ₹5,000.",
    howItWorks:
      "Future Value = P × (1 + r)^n, where P is your one-time investment amount, r is the expected annual rate of return, and n is the holding period in years. This is the standard compound interest formula for an annually compounded investment. The calculator multiplies the principal by the compounding factor to show the maturity amount and breaks down the breakdown between your original capital and the wealth generated.",
    example:
      "Imagine you've received ₹5 lakhs as a Diwali bonus and decide to invest it as a lumpsum in a diversified equity mutual fund. At an assumed 12% CAGR, after 15 years your investment grows to approximately ₹27.4 lakhs — a multi-bagger return of more than 5x the principal, with ₹22.4 lakhs generated purely from compounding. After 20 years, the same ₹5 lakhs lumpsum would grow to approximately ₹48.2 lakhs. This is why investing surplus rupees early, rather than letting them sit in a savings account, transforms long-term wealth.",
    howToUse: [
      "Enter the lumpsum amount you want to invest (most mutual funds need a minimum of ₹5,000)",
      "Choose the expected annual return — be conservative: 10–12% for diversified equity, 6–8% for debt",
      "Set the investment horizon in years — at least 5 years is recommended for equity lumpsum",
      "Review the projected maturity value, total returns earned, and donut chart breakup",
      "Use the results to decide between lumpsum, staggered STP (Systematic Transfer Plan), or splitting into lumpsum plus SIP",
      "Compare with FD returns using our MF vs FD Calculator to quantify the opportunity cost",
    ],
    keyFeatures: [
      "Instant compounded-returns calculation for any one-time mutual fund investment",
      "Adjustable for any principal, rate, and tenure",
      "Visual donut chart showing principal vs returns",
      "Works for equity, debt, hybrid, gold, and international mutual funds",
      "Mobile-friendly, no registration required",
      "Standard mutual-fund maths used across all AMCs",
    ],
    benefits: [
      "Full corpus participates in compounding from day one — no waiting",
      "Single transaction — no recurring deduction or NACH mandate to manage",
      "Strong returns when invested during market corrections or undervalued phases",
      "Useful for FD-to-MF switching as FDs mature, to upgrade returns",
      "Suitable for ELSS lumpsum within ₹1.5L Section 80C ceiling",
      "Quick deployment of large surplus capital that would otherwise lose value in a savings account",
    ],
    useCases: [
      "Year-end bonus or ESOP cash-out deployment",
      "Reinvestment of FD or RD maturity proceeds at higher expected returns",
      "Sale-of-property or asset proceeds parked in mutual funds",
      "Inheritance or gift money allocated to long-term wealth creation",
      "Retirement corpus rollover from EPF to mutual funds post-retirement",
      "One-time ELSS investment for last-minute Section 80C tax saving",
    ],
    tips:
      "When markets are at all-time highs, consider using an STP (Systematic Transfer Plan) — park the lumpsum in a liquid fund and transfer to equity over 6–12 months to average out timing risk. For tax-saving lumpsums, ELSS (₹1.5L cap) plus PPF gives both equity growth and guaranteed returns. Always keep at least a 6-month emergency fund in a liquid fund or savings account before deploying surplus capital as long-term lumpsum. And don't redeem early just because markets dip — that defeats the whole compounding strategy.",
    faqs: [
      { q: "Lumpsum or SIP — which gives higher returns?", a: "Mathematically, lumpsum tends to win in steadily rising markets because the full capital compounds from day one. SIPs perform comparably or better in volatile, falling-then-rising markets through rupee cost averaging. For most investors, a hybrid (lumpsum + SIP top-up) gives the best of both." },
      { q: "What if I invest lumpsum just before a market crash?", a: "Short-term volatility doesn't meaningfully affect a 10+ year horizon — Indian equity has historically recovered from every major drawdown including 2008, 2020, and prior. If you're nervous about timing, use an STP to deploy the lumpsum gradually over 6–12 months." },
      { q: "Is there any limit on a lumpsum mutual fund investment?", a: "There is no upper limit for most schemes. The minimum is typically ₹5,000 per fund. ELSS investments have a ₹1.5 lakh annual ceiling for Section 80C benefit, but you can invest more — only the first ₹1.5L is eligible for the tax deduction." },
      { q: "How are lumpsum mutual fund gains taxed in India?", a: "Same as SIP: equity LTCG at 12.5% above ₹1.25L per year (after 12-month holding period), equity STCG at 20% (under 12 months). Debt fund lumpsum gains are taxed at slab rate. Always confirm current tax laws with a CA before redemption." },
      { q: "Can I redeem a lumpsum investment any time?", a: "Open-ended schemes allow redemption on any business day. Exit loads (typically 1%) may apply if you redeem within the load period (commonly 1 year). ELSS has a mandatory 3-year lock-in. Close-ended schemes can only be redeemed at maturity." },
      { q: "Should I do a lumpsum in an ELSS for tax saving?", a: "Yes, if you want to use the full ₹1.5L Section 80C limit in one go before the March 31 deadline. Each lumpsum instalment is locked in for 3 years from the date of investment. ELSS lumpsum at year-end is a common last-minute tax-saving move." },
      { q: "What is the difference between STP and SIP?", a: "An SIP transfers money from your bank to a mutual fund. An STP transfers money from one mutual fund (usually a liquid fund) to another (usually equity). Use STP when you want to deploy a lumpsum into equity gradually." },
      { q: "Can I invest a lumpsum in an index fund?", a: "Yes. Lumpsum investments work in index funds, ETFs, active equity, debt, hybrid, and gold funds. Index funds are often preferred for lumpsums due to low expense ratios and predictable benchmark-linked returns." },
    ],
  },

  goal_lumpsum: {
    about:
      "The Goal Planning Lumpsum Calculator is a free Indian financial planning tool that tells you exactly how much you need to invest today, as a one-time amount, to reach a specific future financial goal. Whether you are saving for a new car in 5 years, a home down-payment in 7 years, a destination wedding, an MBA programme, or an international holiday, this online goal-based investment calculator reverses the compounding maths: it discounts your future target back to today at the expected investment return.\n\nGoal-based investing has become the gold standard of personal finance planning in India because it converts vague aspirations like 'I want to build wealth' into concrete, actionable numbers — exactly how much, in what fund, for how many years. Use this calculator to see whether your existing surplus or bonus is enough to fund a goal, or whether you need to combine a lumpsum with a monthly SIP. Backed by AMFI Registered MFD Nithin Finserv.",
    whatIs:
      "Goal-based lumpsum planning is a personal finance technique where you start from the goal (target amount and timeline) and work backwards to find the required one-time investment today. It is the inverse of compound interest — instead of asking 'how much will this grow to?', you ask 'how much do I need to invest today to reach this target?'. The technique works for any financial goal, any asset class, and any horizon — from a 2-year goal in a debt fund to a 20-year goal in equity.",
    howItWorks:
      "Present Value = Target / (1 + r)^years. The calculator discounts your future goal value back to today at the assumed annual return rate. Higher expected returns and longer horizons mean a smaller lumpsum is needed today, since compounding does more of the heavy lifting. The output is the exact rupee figure you need to invest as a one-time deposit to reach the goal.",
    example:
      "Suppose you want to accumulate ₹20 lakhs in 7 years for a home down-payment. Assuming an expected 12% annual return from a balanced equity fund, the present value calculation says you need to invest ₹9.04 lakhs today as a one-time lumpsum. If instead you only have ₹5 lakhs available today, the same calculator can tell you that at 12% return you'll reach only ~₹11 lakhs in 7 years — meaning you also need a top-up SIP of about ₹6,000/month to bridge the gap.",
    howToUse: [
      "Enter your target goal amount in rupees — the future value you want to achieve",
      "Set the expected annual return rate based on the asset class you'll invest in",
      "Specify the number of years until you'll need the money",
      "See the one-time lumpsum required today and the wealth created via compounding",
      "If the required lumpsum is too high, extend the horizon, raise the assumed return, or pair with monthly SIPs",
      "Compare across multiple mutual fund categories — equity, hybrid, debt — to find the right risk fit",
    ],
    keyFeatures: [
      "Reverse compounding calculation for any goal, any horizon",
      "Works for short-term (debt) and long-term (equity) goals",
      "Instant results with adjustable inputs",
      "Pairs with our Goal Planning SIP Calculator for hybrid strategies",
      "Free Indian goal-planning tool, no signup",
    ],
    benefits: [
      "Concrete, target-driven investment amount — no guesswork",
      "Helps assess whether existing savings or bonus can fund a goal",
      "Ideal for short-to-medium-term wealth goals (3–10 years)",
      "Combines naturally with SIPs for hybrid goal planning",
      "Encourages saving discipline tied to specific life events",
      "Free, instant, and uses standard mutual-fund maths",
    ],
    useCases: [
      "Saving for a car in 3–5 years",
      "Home down-payment fund over 5–7 years",
      "Foreign travel or destination-wedding fund",
      "MBA or other higher-education fee corpus",
      "Building a 'goal-tagged' emergency fund or fund for major repairs",
      "First-home investment for newly-married couples",
    ],
    tips:
      "Always inflation-adjust your goal amount before entering it. A ₹20L car today will cost about ₹26L in 5 years at 6% inflation. Use 8–10% expected return for medium-term (3–7 year) goals via hybrid funds, and 11–12% only for long-term equity goals (7+ years). If the required lumpsum is unaffordable, combine a smaller lumpsum with a monthly SIP — most goals are best funded this way. And review your goal plan every 12 months to reflect updated income, expenses, or revised goal amounts.",
    faqs: [
      { q: "What is goal-based investing in India?", a: "Goal-based investing means tagging every rupee invested to a specific life goal — retirement, home, child's education, marriage — and choosing the mutual fund category and amount accordingly. It's more disciplined than generic 'wealth creation' investing and produces better outcomes." },
      { q: "Should I enter inflation-adjusted target or today's price?", a: "Always inflation-adjust first. If a car costs ₹15L today and you'll buy it in 5 years, multiply by 1.06^5 ≈ 1.34 to get the future target of ~₹20L. The calculator assumes the target is the rupee amount you'll actually need at maturity." },
      { q: "What return rate is realistic for a 5-year goal?", a: "8–10% via a hybrid or aggressive-hybrid mutual fund is realistic for 5-year goals. For 10+ year goals, 11–12% in pure equity is fair. For 1–3 year goals, stick to 6–7% in debt funds or ultra-short funds with low credit risk." },
      { q: "Can I invest the lumpsum across multiple mutual funds?", a: "Yes, and it's often advisable. Spread the lumpsum across 2–3 mutual fund categories (e.g., flexi-cap + large-cap + balanced advantage) to diversify scheme-level and category-level risk while preserving the overall goal." },
      { q: "What if my lumpsum reaches the goal earlier than expected?", a: "If markets outperform and you hit the goal early, you can either redeem (book the gain) or switch to a less risky debt fund to protect the corpus until the goal date. Don't let greed push you to stay aggressive past the goal date." },
      { q: "Is goal-based lumpsum better than goal-based SIP?", a: "Lumpsum wins if you have surplus capital today and markets are reasonable. SIP wins if you don't have a lumpsum or want to average out volatility. Most planners use both for the same goal." },
      { q: "Can I withdraw partial amounts from a lumpsum mutual fund mid-goal?", a: "Yes, in open-ended schemes. But every partial withdrawal reduces compounding and may attract exit load or tax. Try to avoid withdrawing from goal-tagged funds before the goal date." },
      { q: "Does the calculator account for fund expense ratios?", a: "Indirectly — your assumed return should already be net of expense ratios. Don't use the gross fund return; use the net post-expense-ratio return for accuracy." },
    ],
  },

  goal_sip: {
    about:
      "The Goal Planning SIP Calculator is one of the most popular mutual fund tools in India because it answers the single most actionable question in personal finance: how much should I invest every month to reach my goal? Whether you're planning your retirement corpus, your child's higher education, a home down-payment, a wedding fund, or pure wealth creation, this online SIP planner reverses the compounding maths to give you the exact monthly SIP figure.\n\nEnter your target corpus, expected annual return, and horizon in years, and the calculator instantly tells you the monthly SIP required, the total amount you'll invest over time, and the returns compounding will add on top. Goal-based SIP planning is the cornerstone of Indian wealth building because it converts abstract goals into a concrete, automated monthly contribution that fits within your salary. Backed by AMFI Registered MFD Nithin Finserv, Bengaluru.",
    whatIs:
      "A Goal SIP is a Systematic Investment Plan where the monthly contribution is calculated specifically to reach a defined future target. Unlike a generic 'save what I can' SIP, a goal SIP is engineered: you start from the target amount and the deadline, and work backwards to the exact monthly figure your salary must commit. Most Indian investors maintain multiple parallel goal SIPs — one for retirement, one for the child's education, one for a home, etc. — each with its own monthly amount, fund choice, and horizon.",
    howItWorks:
      "Monthly SIP = Target × r / [((1 + r)^n − 1) × (1 + r)], where r is the monthly rate (annual ÷ 12) and n is the total number of months. The calculator inverts the SIP future value formula to solve for the monthly contribution. Output includes the monthly amount needed, total invested over time, and returns generated by compounding — giving you a clear picture of how much is contribution vs how much is growth.",
    example:
      "Suppose you want to build a ₹1 crore retirement-supplementary corpus in 15 years, assuming a 12% annual return from equity mutual funds. The calculator says you need a monthly SIP of approximately ₹19,800. Over 180 months you'll have personally contributed ₹35.6 lakhs; the remaining ~₹64.4 lakhs comes purely from market-linked compounding. Push the horizon out to 20 years and the required SIP drops to about ₹10,100/month — almost half — because compounding has 5 extra years to work.",
    howToUse: [
      "Enter your target corpus in rupees — what you want at the end of the SIP",
      "Choose an expected annual return rate based on the fund category and horizon",
      "Set the investment tenure in years — longer horizons mean smaller monthly SIPs",
      "Read the monthly SIP needed, total to invest, and projected returns from compounding",
      "If the SIP is unaffordable, extend the horizon (most impactful), increase return, or step up the SIP yearly",
      "Compare with our Goal Planning Lumpsum Calculator if you have a surplus to combine with the SIP",
    ],
    keyFeatures: [
      "Reverse SIP calculation for any goal, any tenure, any return rate",
      "Real-time updates as you tweak inputs",
      "Donut chart breakup of invested capital vs compounded returns",
      "Designed for Indian salaried investors with monthly cash flow",
      "Free, mobile-friendly, no signup required",
    ],
    benefits: [
      "Calculates the exact monthly SIP for any financial goal",
      "Works for retirement, education, home, travel, marriage, and emergency-fund goals",
      "Pairs perfectly with step-up SIPs for matching salary growth",
      "Highlights how horizon (years) impacts SIP affordability dramatically",
      "Free, real-time, mobile-friendly Indian SIP planner",
      "Helps you negotiate goals with reality — if SIP is unaffordable, plan changes are surfaced",
      "Built on standard AMFI mutual fund SIP maths",
    ],
    useCases: [
      "Retirement corpus planning over 20–30 years",
      "Child's higher-education fund over 10–18 years",
      "Marriage corpus over 7–15 years",
      "Home down-payment savings over 5–7 years",
      "Foreign travel or sabbatical fund over 3–5 years",
      "Wealth-creation or financial-independence (FIRE) plans",
    ],
    tips:
      "If the calculated SIP is unaffordable, your three levers are: extend the horizon (single biggest impact), accept a higher-risk fund category to raise expected returns, or scale the goal down to something achievable. Start small if you must — a ₹2,000 SIP started today usually beats a ₹20,000 SIP that you 'plan to start next year' but never do. Use auto-step-up to grow the SIP by 10% every year. And keep separate SIPs for separate goals — mixing creates emotional bias and may cause goal-tagged money to be withdrawn for non-goal expenses.",
    faqs: [
      { q: "How much SIP do I need to become a crorepati in India?", a: "It depends on your horizon and assumed return. At 12% return: ~₹10,000/month for 20 years, ~₹19,800/month for 15 years, ~₹43,000/month for 10 years, or ~₹1,55,000/month for 5 years. Longer is cheaper because compounding does more of the work." },
      { q: "What if I can't afford the calculated SIP amount?", a: "Three options: extend the horizon (most impactful), increase the assumed return by switching to a higher-equity fund, or reduce the goal to what's actually affordable. Starting small is far better than not starting — even ₹500/month builds meaningfully over 30 years." },
      { q: "Should I use step-up SIP for goal planning?", a: "Yes, if your income grows annually. A 10% step-up SIP reaches the same target with a much lower starting amount because each year's contribution is bigger. Use our Step-Up SIP Calculator to compare flat-SIP and step-up-SIP scenarios." },
      { q: "Is this calculator suitable for retirement planning?", a: "It can be used for retirement goals, but for the most accurate retirement planning use our dedicated Retirement Planning Calculator — it factors in inflation, post-retirement expenses, and the corpus needed to sustain your lifestyle in retirement." },
      { q: "Can I use this for ELSS tax-saving SIPs?", a: "Yes. ELSS works the same way mathematically. Note the ₹1.5 lakh annual cap under Section 80C and the 3-year lock-in that applies to each SIP instalment separately." },
      { q: "What is the difference between goal SIP and regular SIP?", a: "A regular SIP is a generic monthly investment in a fund. A goal SIP is the same thing but tagged to a specific outcome (e.g., 'retirement at 60', 'child's UG at 18') and the amount is calculated to reach that specific goal." },
      { q: "How accurate is the projected corpus?", a: "Exact for the assumed return, but actual mutual fund returns vary year to year. Use 10–12% as a conservative assumption for diversified equity over 7+ years and revisit the plan annually." },
      { q: "Should I run multiple goal SIPs in parallel?", a: "Yes, that's the right way to plan. Use separate SIPs for separate goals so each goal has its own fund choice, horizon, and contribution. This prevents 'goal cannibalisation' where you withdraw for one goal at the expense of another." },
    ],
  },

  time_onetime: {
    about:
      "The Time Duration Calculator for One-Time Investments tells you exactly how long your lumpsum will take to grow to your target goal. Enter the principal, target amount, and expected annual return, and the calculator reverses the compounding formula to compute the precise number of years (and remaining months) needed. This India-specific online tool is invaluable when you have a known starting capital — FD maturity proceeds, ESOP cash-out, property sale gains, or inheritance — and a clear end goal, and want to know if the timeline is realistic.\n\nFor most Indian investors, knowing 'when will my money grow to ₹X' is more useful than 'what will ₹X grow to in 10 years'. This calculator answers exactly that, in years and months, with no guesswork. Use it for car-goal planning, down-payment timelines, or simple 'rule of 72'-style return projections. Backed by AMFI Registered MFD Nithin Finserv.",
    whatIs:
      "Time-to-target is a financial-planning concept that reverses the standard compounding question. Instead of asking 'what will my investment grow to over N years?' it asks 'how many years until my investment reaches a specific target?'. The answer is in years and months and helps you confirm whether the goal timeline is feasible with current capital, or whether you need to top up via SIPs or accept a longer wait.",
    howItWorks:
      "Years = ln(Target / Principal) / ln(1 + r), where ln is the natural logarithm. The formula inverts the compound-interest equation to solve for time. The calculator displays the result in years and remaining months for ease of reading.",
    example:
      "Imagine you have ₹5 lakhs from an FD maturity and you want it to grow to ₹25 lakhs (a 5x target). At an assumed 12% annual return in equity mutual funds, the calculator computes that you'll reach the target in about 14 years and 6 months. At 10% return, the same target takes about 17 years. At 8%, almost 21 years. This illustrates how just 2–4 percentage points of additional return saves you 3–7 years of waiting time.",
    howToUse: [
      "Enter the lumpsum amount you have available today",
      "Enter your target goal amount in rupees",
      "Choose the expected annual return rate",
      "Read the time needed in years and months",
      "If the timeline is unrealistically long, add a monthly SIP top-up or revise the target",
      "Compare different return assumptions to see how fund choice impacts the timeline",
    ],
    keyFeatures: [
      "Inverse compounding calculation — solves for time, not value",
      "Output in years and months for practical use",
      "Works for any principal, target, and rate combination",
      "Useful for both ambitious and conservative goal planning",
      "Free, mobile-friendly, no signup",
    ],
    benefits: [
      "Quick reality check on whether a goal is achievable with current capital alone",
      "Useful for planning FD reinvestment timelines",
      "Helps decide between lumpsum-only and lumpsum-plus-SIP strategies",
      "Surfaces the cost of low-return choices in years, not just rupees",
      "Free, instant calculation",
    ],
    useCases: [
      "Calculating time until a car-goal corpus is ready",
      "Estimating retirement-corpus timeline given current EPF balance",
      "Planning when to switch from equity to debt as a goal approaches",
      "Demonstrating the cost of low returns to family or yourself",
    ],
    tips:
      "Use the Rule of 72 for quick mental maths: 72 ÷ rate = approximate years for money to double. At 12% return, money doubles every 6 years. At 8%, every 9 years. At 6% (FD), every 12 years. This rule helps you quickly compare 'safe' vs 'growth' assets in terms of compounding speed. Always assume a conservative return — 10% rather than 12% — for goals you cannot afford to miss.",
    faqs: [
      { q: "How long does it take to double money in India?", a: "Use the Rule of 72: divide 72 by your annual return rate. At 12%, money doubles in about 6 years; at 8%, in about 9 years; at 6% (FD), in about 12 years; at 4% (savings account), in 18 years." },
      { q: "What if my target is below my principal?", a: "You've already crossed the goal — the calculator flags it. You can withdraw, switch to a debt fund to lock the gains, or stay invested for further growth." },
      { q: "What return rate should I assume for long horizons?", a: "For 10+ year horizons in diversified equity mutual funds, 11–12% is a reasonable assumption based on historical Indian market returns. For debt instruments, 6–8%. Use conservative assumptions for goals you can't miss." },
      { q: "Can I use this for FD planning?", a: "Yes — enter the FD rate as the expected return. Use compound interest mode for the FD's actual compounding frequency (quarterly is standard for Indian banks)." },
      { q: "Does the calculator account for taxes?", a: "No — the output is pre-tax. Equity LTCG above ₹1.25L/year is taxed at 12.5%; FD interest is taxed at slab. For an after-tax timeline, reduce the assumed return slightly." },
      { q: "What if I want a faster timeline?", a: "Three options: increase the principal (top-up), increase the return (riskier asset class), or accept a smaller target. The calculator shows how each choice shrinks the timeline." },
      { q: "Is this useful for retirement planning?", a: "Partially — it tells you when your current corpus will hit a target. For full retirement planning (inflation-adjusted), use our dedicated Retirement Planning Calculator." },
    ],
  },

  time_sip: {
    about:
      "The Time Duration SIP Calculator tells you exactly how many months your monthly SIP will take to reach a chosen target corpus. This is the ideal Indian SIP planner when your monthly investment amount is fixed — often by salary capacity — and you want to know how long until you hit your wealth goal. Common use cases include figuring out when you'll save up for a car, when your education corpus will be ready, when your wealth target will be achieved at the current SIP rate, or when you can afford early retirement at your current savings pace.\n\nUnlike a Goal SIP Calculator (which solves for monthly amount), this tool fixes the SIP amount and solves for time. Enter the monthly SIP, target corpus, and expected return — the calculator iterates month by month until the corpus crosses the target, returning the precise duration in years and months. Powered by Nithin Finserv, AMFI Registered Mutual Fund Distributor in Bengaluru.",
    whatIs:
      "Time-to-target SIP is a financial planning concept that fixes your monthly SIP amount and solves for the duration needed to reach a goal. This is particularly useful when your monthly investing capacity is constrained (e.g., maximum ₹15,000/month after EMI and rent) and you want a realistic timeline rather than a 'required' amount you can't afford.",
    howItWorks:
      "The calculator iterates month by month, accumulating each SIP instalment with monthly compounding at the assumed rate, and stops the moment the corpus crosses the target. The result is expressed in years and remaining months. The underlying maths is the standard SIP future-value formula solved iteratively for n.",
    example:
      "Say you commit to a ₹10,000 monthly SIP in equity mutual funds and target a ₹35 lakh corpus. At an assumed 12% annual return, the calculator says you'll reach the target in about 13 years and 8 months. Drop the assumed return to 10%, and the timeline extends to about 15 years 3 months. Push the SIP up to ₹15,000/month at 12%, and you reach the same target in about 10 years 9 months. Small changes in either lever (SIP amount or return) noticeably shift the timeline.",
    howToUse: [
      "Enter your monthly SIP amount in rupees",
      "Enter the target corpus you want to accumulate",
      "Choose your expected annual return rate",
      "Read the duration in years and months plus your total contribution",
      "If the duration is too long, increase the SIP, switch to step-up, or pick a higher-return fund category",
      "Compare different return assumptions to see how fund choice impacts timeline",
    ],
    keyFeatures: [
      "Iterative month-by-month calculation",
      "Output in years and months",
      "Works for any SIP amount, target, and rate",
      "Helps balance affordability with timeline",
      "Mobile-friendly, no signup",
    ],
    benefits: [
      "Realistic SIP timeline when monthly amount is fixed",
      "Highlights how small return changes shift timelines dramatically",
      "Useful for medium-to-long-term SIP goal planning",
      "Works for any open-ended mutual fund SIP",
      "Free, real-time, India-specific",
    ],
    useCases: [
      "Affordable SIP duration calculation given salary constraints",
      "Planning when a car or down-payment fund will be ready",
      "Estimating financial-independence timeline at current SIP",
      "Comparing flat vs step-up SIP timelines",
    ],
    tips:
      "If the timeline is uncomfortably long, two levers help most: increase the SIP amount yearly (step-up by 10%) or accept a slightly higher-equity portfolio (which historically gives 1–2% extra return long-term). Don't make the SIP too aggressive at the cost of your emergency fund or insurance — those have to come first. And remember the timeline calculator assumes constant monthly SIP; in real life, step-ups will shorten it significantly.",
    faqs: [
      { q: "Why does a small change in return rate move the timeline so much?", a: "Compounding is exponential — a 2% lower return over a long horizon can push the timeline by years. That's why low-cost index funds (with smaller expense ratios eating into returns) often beat actively managed funds on net returns over decades." },
      { q: "Can I shorten the duration by increasing the SIP later?", a: "Yes. Step-up SIPs (annual increment of 10–15%) reach the same target meaningfully faster. Try our dedicated Step-Up SIP Calculator to see the comparison." },
      { q: "What if I stop the SIP for a few months?", a: "Pausing the SIP doesn't reset progress, but the corpus stops growing from contributions during the pause. Restart as soon as possible — every missed instalment delays the timeline." },
      { q: "Does this account for partial withdrawals mid-SIP?", a: "No. The calculator assumes you stay invested until the corpus crosses the target. Partial withdrawals would extend the timeline." },
      { q: "Can I use this for retirement timeline planning?", a: "It tells you when a target corpus will be hit at the current SIP, but for full retirement planning use our Retirement Calculator which factors in inflation and post-retirement expenses." },
      { q: "Is the timeline before or after tax?", a: "Pre-tax. For an after-tax timeline, reduce your assumed return slightly (e.g., assume 11% net instead of 12% gross)." },
    ],
  },

  retirement: {
    about:
      "The Retirement Planning Calculator is the most important financial tool a salaried Indian will use in their lifetime. It helps you estimate the retirement corpus you'll need to maintain your current lifestyle and the monthly SIP required today to build that corpus. The calculator accounts for inflation — so today's ₹50,000 monthly expense becomes far larger after 25–30 years — expected post-retirement investment returns, and your years remaining until retirement.\n\nWhether you're starting retirement planning in your 20s or 30s, recalibrating in your 40s, or playing catch-up in your 50s, this free Indian retirement calculator gives you a clear, inflation-adjusted picture of what you need to invest each month. The earlier you start, the smaller the monthly SIP — a 30-year-old needs ~₹15,000/month for a ₹5 crore corpus, while a 40-year-old needs ~₹50,000/month for the same goal. Backed by AMFI Registered MFD Nithin Finserv, ARN: 307760.",
    whatIs:
      "Retirement planning is the process of estimating how much money you'll need to fund your lifestyle after you stop earning, and structuring a monthly investment plan to build that corpus during your working years. It accounts for inflation (which erodes purchasing power), longevity (Indians today live 75+ years on average), post-retirement asset returns, and existing retirement assets like EPF, NPS, PPF, and gratuity. Good retirement planning is the single most consequential financial decision most people make.",
    howItWorks:
      "Step 1: Future monthly expense = Today's expense × (1 + inflation)^years_to_retire. Step 2: Corpus needed at retirement = Future monthly expense × 12 / post-retirement return rate (this assumes you live off the returns without depleting the corpus). Step 3: Required monthly SIP = Corpus × r / [(1 + r)^n − 1], where r is the monthly working-years return and n is the months until retirement.",
    example:
      "Consider a 30-year-old earning enough to support ₹50,000 monthly household expenses, planning to retire at 60. Assuming 6% inflation, those same expenses inflate to ~₹2.87 lakh/month after 30 years. To sustain that lifestyle indefinitely at a 7% post-retirement return, you need a corpus of ~₹4.92 crores. Building that corpus over 30 years at a 12% pre-retirement return requires a monthly SIP of approximately ₹14,000. Start the same plan at age 40 instead — and the required monthly SIP balloons to ~₹49,000/month for the same lifestyle outcome.",
    howToUse: [
      "Enter your current age and planned retirement age",
      "Enter your current monthly household expenses in today's rupees",
      "Set the expected inflation rate — 6% is the long-term India CPI average; use 7% to be conservative",
      "Set the post-retirement return rate — 7% is conservative for a debt-heavy retiree portfolio",
      "Read the retirement corpus needed and the monthly SIP required today",
      "Adjust assumptions to test 'what-if' scenarios — earlier retirement, higher lifestyle, etc.",
    ],
    keyFeatures: [
      "Two-stage modelling: accumulation phase + post-retirement withdrawal phase",
      "Inflation-adjusted future expense calculation",
      "Shows both corpus needed and monthly SIP required today",
      "Works for any age, retirement age, and lifestyle level",
      "Mobile-friendly, no signup",
    ],
    benefits: [
      "Inflation-adjusted — uses future rupees, not today's misleading numbers",
      "Surfaces the brutal cost of starting retirement planning late",
      "Works alongside EPF, NPS, PPF, and mutual fund SIP combinations",
      "Helps decide between standard SIP and step-up SIP for retirement",
      "Free, no registration, India-specific assumptions and tax law context",
      "Useful for family financial conversations about retirement readiness",
    ],
    useCases: [
      "Early-career retirement planning (ages 22–35)",
      "Mid-career corpus recalibration (ages 35–50)",
      "Catch-up planning (ages 50+)",
      "Early-retirement / FIRE planning",
      "NRI retirement planning with India-based corpus targets",
      "Pre-retirement allocation shift planning",
    ],
    tips:
      "The single most powerful retirement-planning insight: every year of delay roughly doubles your required monthly SIP. A 30-year-old needs ~₹14K/month; a 40-year-old needs ~₹49K/month; a 50-year-old needs ~₹2 lakh/month for the same outcome. Start now, even with a small SIP. As you near retirement (5–7 years before), gradually shift the corpus from equity to debt to protect against drawdown risk. Don't shift 100% to FDs — you'll need some equity to combat inflation across a 25–30 year retired life. And always include a separate health-insurance budget — medical inflation runs higher than general CPI.",
    faqs: [
      { q: "How much retirement corpus do I need in India?", a: "Depends on lifestyle, inflation, and longevity. A common rule: 30× your annual expenses at retirement. For ₹6L annual expenses today, growing at 6% inflation over 30 years, you'd need ₹3.5–5 crores. Wealthier lifestyles need 5–10 crores." },
      { q: "When should I start retirement planning?", a: "As early as possible — ideally in your 20s. A 25-year-old SIP at ₹10K/month builds a ₹6.4 crore corpus by 60 at 12% returns. The same target needs ~₹50K/month if you start at 40." },
      { q: "Does NPS count towards my retirement corpus?", a: "Yes. Add your expected NPS maturity value to mutual fund SIPs, EPF, PPF, and gratuity balances to estimate total retirement readiness. NPS also offers an additional ₹50,000 deduction under Section 80CCD(1B) on top of 80C." },
      { q: "What inflation rate should I assume for retirement planning?", a: "6% is the long-term India CPI average. Use 7% to be conservative — medical and education inflation often runs higher than headline CPI, and households retire with above-average healthcare needs." },
      { q: "Should I move my retirement corpus to FDs near retirement?", a: "Gradually rebalance from equity to debt 5–7 years before retirement to reduce drawdown risk. Don't move 100% to FDs — you'll need some equity (20–30%) for inflation-beating returns across a 25–30 year retired life." },
      { q: "How long should my retirement corpus last?", a: "Plan for life expectancy plus 5–10 years buffer. Indians today live 75+ on average, so a 60-year-old retiree should plan for 25–30 years of post-retirement life." },
      { q: "What is the 4% rule and does it apply in India?", a: "The 4% rule says you can withdraw 4% of your corpus annually with low risk of running out in 30 years. In India, with higher inflation, the safer withdrawal rate is 3–3.5% — meaning you need a slightly larger corpus." },
      { q: "Can I retire early in India using FIRE?", a: "Yes, but it requires aggressive savings (40–60% of income), inflation-adjusted lifestyle targeting, and a sizeable equity-heavy corpus. The retirement age in the calculator can be set lower (e.g., 45) to model FIRE scenarios." },
      { q: "Does the calculator account for medical expenses?", a: "Indirectly — through inflation. Medical inflation runs higher than general CPI, so consider keeping a separate health-insurance plan and a ₹10–20L medical buffer in liquid assets outside the corpus." },
    ],
  },

  investment_planner: {
    about:
      "The Investment Planner Calculator answers the most common question in personal finance: 'what percentage of my salary should I be investing?' Based on your monthly salary, current age, expected equity return, and investment horizon, the calculator suggests an ideal equity SIP percentage and projects the corpus you'll build over time. The recommendation follows the well-known age-based asset allocation rule of thumb — younger investors with longer horizons can afford higher equity allocations, while older investors should taper down.\n\nThis free Indian investment planning tool helps first-time investors, salaried professionals, and young families anchor their financial planning around a sensible salary-to-investment ratio rather than guessing rupee amounts. It is a starting point — not personalised advice — but the framework helps build the right investing habits. Backed by AMFI Registered MFD Nithin Finserv, Bengaluru.",
    whatIs:
      "Investment planning is the process of deciding how much of your income to invest, in what asset classes, and for how long. A salary-to-investment heuristic ('what % of my income should I invest?') provides a quick anchor point for the rupee decision. Personal finance experts generally recommend 20–30% of take-home for investments at most career stages, scaling higher with age and lower for early-career professionals with high rent/EMI/dependents.",
    howItWorks:
      "The calculator uses a heuristic of (35 − age) × 1.2, clamped between 10% and 40%, to suggest an equity allocation as a percentage of monthly salary. The recommended rupee amount = salary × recommended %. The future-corpus projection then runs that monthly amount through the standard SIP compounding formula over your chosen horizon at the assumed return rate.",
    example:
      "Take a 30-year-old earning ₹80,000/month. The age-based rule suggests a 36% equity SIP allocation = ₹28,800/month. Projected over 25 years at 12% return, this builds a corpus of approximately ₹4.8 crores. The same person delaying to age 35 with the same SIP builds only ~₹2.7 crores in the remaining 20 years. This illustrates the dual cost of low allocation and delayed start.",
    howToUse: [
      "Enter your monthly salary or take-home income",
      "Enter your current age",
      "Set the expected equity return rate (12% is a fair long-term assumption)",
      "Choose your investment horizon — typically until retirement",
      "Read the recommended investment percentage, rupee amount, and projected corpus",
      "Adjust the inputs to test alternative scenarios (higher allocation, longer horizon, etc.)",
    ],
    keyFeatures: [
      "Age-based heuristic recommendation",
      "Rupee allocation calculated from salary",
      "Long-term corpus projection via SIP formula",
      "Adjustable for any age, salary, return, and horizon",
      "Free, mobile-friendly, no signup",
    ],
    benefits: [
      "Quick anchor for salary-to-investment percentage decisions",
      "Reframes the investing conversation around income share, not just rupees",
      "Useful for first-time investors and young professionals",
      "Highlights the cost of delaying SIP investments",
      "Free, instant, mobile-friendly",
    ],
    useCases: [
      "First-job investment planning for new graduates",
      "Mid-career salary-hike redirection to investing",
      "Family financial planning conversations",
      "Anchor for SIP vs lifestyle-spend trade-offs",
      "Allocating performance bonuses or windfalls",
    ],
    tips:
      "Use this calculator as a starting point, not personalised advice. Always build a 6-month emergency fund and adequate term + health insurance cover before scaling up SIPs. If 20–30% of salary feels unrealistic, start with 10% and step up by 2% every year — within 5 years you'll be at the recommended level without feeling the squeeze. And don't include EMIs or expenses as 'investments' — those are commitments, not assets.",
    faqs: [
      { q: "What percentage of salary should I invest in India?", a: "Most personal finance frameworks recommend 20–30% of take-home for investments, scaling higher with age and lower for early-career professionals with high rent/EMI. Always invest at least enough to cover retirement plus one major life goal." },
      { q: "Is this calculator a substitute for financial advice?", a: "No — it's a heuristic for illustration. A real financial plan considers liabilities, dependents, risk tolerance, insurance cover, and existing assets. Talk to a SEBI-registered investment adviser for personalised advice." },
      { q: "Does this account for emergency fund and insurance?", a: "No. Always build a 6-month emergency fund (in a liquid fund or savings account) and adequate term + health insurance cover before scaling up SIPs significantly." },
      { q: "Should the % include EPF contributions?", a: "EPF is part of total long-term savings but it's typically debt-only. The age-based heuristic in this calculator targets equity allocation specifically. Treat EPF as the debt component of your overall portfolio." },
      { q: "What if I have a large home loan EMI?", a: "Reduce the equity allocation slightly — perhaps to 60% of the heuristic value — and prioritise prepaying the home loan if the loan rate is higher than your expected debt-fund returns." },
      { q: "Can this work for self-employed people?", a: "Yes, treat 'salary' as average monthly take-home income. Self-employed individuals typically need higher emergency funds (12 months instead of 6) due to income variability." },
      { q: "Should young investors go 100% equity?", a: "A 25-year-old with no dependents could go 90%+ equity. The age-based heuristic is conservative — actual allocations should reflect personal risk tolerance, dependents, and horizon." },
    ],
  },

  mf_vs_fd: {
    about:
      "The MF vs FD Calculator is one of the most-searched financial comparison tools in India because the gap between mutual fund and fixed deposit returns over long horizons is enormous — yet most Indian savers still default to FDs out of familiarity or perceived safety. This free online calculator compares the maturity value of the same lumpsum invested in a mutual fund (at an assumed return rate) versus a fixed deposit (with quarterly compounding) over the same period.\n\nUse this calculator to see in absolute rupees how much wealth a 'safe FD' choice can quietly cost over 10, 15, or 20 years. It is especially useful for long-horizon money — retirement corpus, child's higher education fund, or financial-independence goals — where the difference between 7% (FD) and 12% (equity MF) compounds to lakhs or crores. Calculator backed by AMFI Registered MFD Nithin Finserv.",
    whatIs:
      "MF vs FD comparison is a wealth-planning exercise where you quantify the trade-off between guaranteed FD returns and market-linked mutual fund returns over the same time period. The comparison is rarely about whether one is universally 'better' — it's about matching the right instrument to the right horizon and risk profile. Short-term safety money belongs in FDs; long-term wealth money belongs in equity mutual funds.",
    howItWorks:
      "Mutual fund side: Maturity = P × (1 + r)^years (annual compounding at the assumed equity/debt fund return). FD side: Maturity = P × (1 + r/4)^(4 × years) (quarterly compounding, standard bank convention in India). The MF advantage is the difference in absolute rupees between the two maturity values.",
    example:
      "Imagine a ₹5 lakh investment over 15 years. In an equity mutual fund at 12% assumed return, the maturity would be approximately ₹27.4 lakhs. In a fixed deposit at 7%, the same principal compounds to approximately ₹14 lakhs. The MF advantage is ₹13.4 lakhs — more than 2.5x the original principal earned purely from choosing the higher-return asset. Over 25 years, the gap balloons to over ₹70 lakhs on the same starting capital.",
    howToUse: [
      "Enter the investment amount you're comparing",
      "Choose the investment period in years",
      "Set the expected mutual fund return (10–14% for diversified equity)",
      "Set the FD interest rate (currently 6.5–7.5% for most banks in India)",
      "Compare the two maturity values and the absolute MF advantage in rupees",
      "Use the result to inform allocation between safety (FD) and growth (MF) buckets",
    ],
    keyFeatures: [
      "Side-by-side comparison of MF and FD maturity values",
      "Quarterly compounding for FD, annual for MF — matches Indian convention",
      "Shows the MF advantage in absolute rupees",
      "Works for any principal, tenure, and rates",
      "Free, mobile-friendly, no signup",
    ],
    benefits: [
      "Concrete rupee comparison — no abstract percentages",
      "Useful for FD-to-MF switch decisions on long-horizon money",
      "Shows the long-term opportunity cost of preferring 'safe' but low-yield FDs",
      "Helps with retirement, child-education, and FIRE allocation choices",
      "Counters the cultural FD-default bias with hard numbers",
    ],
    useCases: [
      "FD-maturity reinvestment decisions (FD → MF switch)",
      "Long-term retirement corpus allocation",
      "Child-education fund allocation across MF and FD",
      "Senior-citizen safe vs growth allocation balancing",
      "Demonstrating wealth-creation gap to family members",
    ],
    tips:
      "The MF vs FD trade-off is fundamentally about horizon, not safety. For money you need within 1–2 years (rent, fees, near-term goals), FDs are right — capital safety matters more than returns. For 5+ year horizons, equity mutual funds have almost always beaten FDs on inflation-adjusted, post-tax basis. A balanced approach: keep 6 months of expenses + near-term goals in FDs/savings, push the rest into goal-tagged mutual fund SIPs and lumpsums. Don't fall for the 'FD is safe, MF is risky' framing — long-term FDs are also risky because they lose to inflation.",
    faqs: [
      { q: "Are mutual fund returns guaranteed in India?", a: "No. The 'MF return' in this comparison is your own assumption. FD returns are guaranteed (and DICGC-insured up to ₹5L per bank), but MF returns are market-linked and can be lower — or even negative — in short time windows." },
      { q: "What about tax — does MF advantage shrink after tax?", a: "Even after tax, equity MFs typically beat FDs on long horizons. Equity LTCG is 12.5% above ₹1.25L/year; FD interest is taxed at your slab (often 20–30%). The calculator shows pre-tax figures." },
      { q: "When should I prefer an FD over a mutual fund?", a: "For money you'll need within 1–2 years, for an emergency fund (6 months of expenses), or when you genuinely cannot tolerate any drawdown. For 5+ year horizons, mutual funds almost always win in real (inflation-adjusted) terms." },
      { q: "What's the safest mutual fund category?", a: "Liquid funds and ultra-short duration debt funds are FD-like in risk — minimal credit risk and stable returns. Diversified equity index funds are the most accessible long-horizon growth category." },
      { q: "Is bank FD safer than corporate FD?", a: "Bank FDs are DICGC-insured up to ₹5L per bank, making them very safe. Corporate FDs offer slightly higher rates but carry credit risk — only invest if the company has AAA rating and stick within manageable amounts." },
      { q: "Can I redeem mutual funds anytime like FDs?", a: "Open-ended mutual funds allow redemption on any business day. Exit loads (typically 1%) may apply within 1 year. FDs allow premature withdrawal with a small rate-reduction penalty." },
      { q: "What about tax-saver FDs vs ELSS for 80C?", a: "ELSS has a 3-year lock-in vs 5 for tax-saver FDs, AND historically delivers much higher returns. For 80C tax saving alone, ELSS usually beats tax-saver FDs comprehensively." },
      { q: "Does this calculator account for FD reinvestment?", a: "Yes — the quarterly compounding formula reinvests interest within the FD. If your FD is non-cumulative (paid out), the formula slightly overstates the maturity value." },
    ],
  },

  child_education: {
    about:
      "The Child Education Planner Calculator estimates the monthly SIP you need to start today to fund your child's higher education in the future. Education inflation in India runs 8–10% annually — significantly higher than general CPI inflation — which means a college programme that costs ₹15 lakhs today could cost ₹35–45 lakhs in 15 years. This free education planning calculator factors in education-specific inflation, your investment horizon, and expected mutual fund returns to surface the realistic monthly SIP figure.\n\nWhether you're saving for an engineering or MBBS programme in India, an MBA at IIM or ISB, or an overseas Bachelor's/Master's degree, education planning is among the highest-priority financial goals for Indian parents — and one of the easiest to underestimate. Use this calculator to convert vague education aspirations into a concrete monthly SIP plan, backed by AMFI Registered MFD Nithin Finserv.",
    whatIs:
      "Child education planning is the personal-finance discipline of saving for a child's future higher-education costs through systematic monthly investments. It differs from generic wealth planning because education costs inflate faster than general prices, the goal date is fixed (typically when the child turns 18), and the corpus must be large enough to cover tuition, hostel, books, travel, and living expenses. Most Indian parents under-fund this goal, leading to last-minute education loans or compromise on the chosen institution.",
    howItWorks:
      "Step 1: Future education cost = Today's cost × (1 + education inflation)^years. Step 2: Required monthly SIP = Future cost × monthly_r / [(1 + monthly_r)^n − 1], where n is the number of months until the child needs the money. The result is the disciplined monthly contribution required from today.",
    example:
      "Imagine an MBA programme that currently costs ₹20 lakhs and your child needs the money in 15 years. At 8% education inflation, the future cost grows to approximately ₹63.4 lakhs. Building that corpus over 15 years at a 12% expected return needs a monthly SIP of about ₹12,500. Add a 10% annual step-up to match your salary growth and the starting SIP can be lower — around ₹8,000/month — making the goal more affordable.",
    howToUse: [
      "Enter the current cost of the education programme (in today's prices)",
      "Set the years until your child will actually need the funds",
      "Choose the education inflation rate (8–10% is realistic for premium institutions)",
      "Choose the expected investment return rate",
      "Read the inflated future cost and the monthly SIP required today",
      "Combine with our Goal Planning Lumpsum Calculator if you have a windfall to deploy",
    ],
    keyFeatures: [
      "Education-specific inflation modelling",
      "Future cost calculation and SIP requirement in one tool",
      "Adjustable for India / overseas education scenarios",
      "Works alongside Sukanya Samriddhi Yojana planning for daughters",
      "Free, mobile-friendly, no signup",
    ],
    benefits: [
      "Accounts for fast-rising tuition and living costs",
      "Long horizons let modest SIPs build large corpuses",
      "Pairs well with Sukanya Samriddhi or tax-free instruments",
      "Helps prioritise child-fund SIPs alongside retirement SIPs",
      "Free, India-focused, transparent assumptions",
      "Surfaces the gap between current savings pace and goal",
    ],
    useCases: [
      "Saving for engineering / MBBS in India over 12–18 years",
      "MBA at IIM / ISB / overseas planning over 7–15 years",
      "Foreign undergraduate education in USA / UK / Canada / Australia",
      "Sports / arts / specialised training corpus planning",
      "Building backup education fund alongside scholarship hopes",
    ],
    tips:
      "Start your child's education SIP as early as possible — ideally the year the child is born. A ₹10,000/month SIP at 12% over 18 years builds ~₹76 lakhs, enough for most domestic UG/PG programmes and a sizeable chunk of overseas. Pair the SIP with PPF or Sukanya Samriddhi (for daughters) for the safe debt component. As the goal date approaches (5 years out), gradually shift the equity corpus to debt to protect against drawdown. And review the plan every 2–3 years to update for actual education cost inflation and the child's evolving plans.",
    faqs: [
      { q: "Why is education inflation higher than general inflation?", a: "Tuition fees, hostel costs, and overseas-education expenses have risen 8–12% annually in India, well above the 5–6% CPI inflation. Top institutions raise fees aggressively year-on-year, and exchange-rate depreciation amplifies overseas costs." },
      { q: "When should I start a child education SIP?", a: "Ideally the same year your child is born. A ₹10K/month SIP at 12% over 18 years builds ~₹76 lakhs. Starting at age 5 instead leaves only 13 years and needs ~₹16,000/month for the same target." },
      { q: "Sukanya Samriddhi or mutual fund SIP for my daughter?", a: "Sukanya offers ~8% guaranteed, tax-free returns and 80C benefit, but has restrictions and is debt-only. Equity SIPs offer higher (~12%) returns with market risk. Many parents use both — Sukanya for safe core, equity SIP for growth." },
      { q: "Should I take an education loan instead of saving for years?", a: "Loans come with 9–11% interest. If your SIP returns are higher than the loan rate, you're better off investing. Most parents use a mix — SIP corpus covers part, loan funds the rest, and child's eventual earnings repay the loan with 80E tax benefit." },
      { q: "How much should I budget for an MBA from IIM?", a: "Currently around ₹25–30 lakhs all-in (fees + living). At 8% education inflation over 18 years, that grows to ₹100–120 lakhs. Plan accordingly." },
      { q: "What about saving for overseas education?", a: "Overseas costs inflate at general inflation plus rupee depreciation — effectively 10–12%/year. A current $50K/year UG programme in the USA could cost the rupee equivalent of ₹2 crore+ in 15 years." },
      { q: "Should I keep the corpus in equity till the end?", a: "No. Start shifting from equity to debt 3–5 years before the goal date to protect against market drawdown right when you need the money." },
      { q: "Is the education SIP locked in?", a: "Regular open-ended mutual fund SIPs are not locked in — you can pause or redeem any time. Only ELSS instalments are locked in for 3 years each. Use a regular equity fund (not ELSS) for child education goals." },
    ],
  },

  stepup: {
    about:
      "The Step-Up SIP Calculator estimates the maturity corpus when your monthly SIP increases by a fixed percentage every year — typically matching your annual salary increment. Step-up SIPs (also called top-up SIPs or booster SIPs) are one of the most powerful wealth-building tools available to Indian salaried investors because the contribution grows in line with income, dramatically outpacing a flat SIP over long horizons. Most major AMCs in India offer auto-step-up registration at the time of SIP setup.\n\nUse this online step-up SIP calculator to see how much extra corpus a 10%, 15%, or 20% annual step-up builds compared to a constant monthly SIP. The maths is striking — a ₹10,000 SIP with 10% step-up over 20 years builds ~56% more wealth than a flat ₹10,000 SIP for the same period. Backed by AMFI Registered MFD Nithin Finserv, Bengaluru.",
    whatIs:
      "A Step-Up SIP is a Systematic Investment Plan where the monthly contribution automatically increases by a fixed percentage (or rupee amount) every year. It's designed to match the natural growth in your salary, ensuring your investment pace keeps up with lifestyle inflation. Step-ups can be percentage-based (e.g., 10% increase per year) or absolute (e.g., ₹2,000 extra per year). Most AMCs in India support both modes via online auto-registration.",
    howItWorks:
      "Year by year, the calculator contributes the current monthly amount × 12 (compounded monthly at the chosen rate), then increments the monthly amount by the step-up percentage for the next year. This iterative calculation accumulates the total corpus, total invested, and step-up gains compared to a flat SIP baseline.",
    example:
      "Consider a ₹10,000 starting SIP with 10% annual step-up over 20 years at an assumed 12% return. The final monthly SIP at year 20 reaches ~₹61,000. Total invested = ~₹68.7 lakhs. Final corpus = ~₹1.56 crores. By contrast, a flat ₹10,000 monthly SIP for the same 20 years invests ₹24 lakhs and builds ~₹99.9 lakhs. The step-up adds ~₹56 lakhs of extra wealth — a 56% boost — for the cost of matching your salary growth in your SIP.",
    howToUse: [
      "Enter your starting monthly SIP amount",
      "Set the annual step-up percentage (10% matches typical Indian salary hikes)",
      "Choose the expected annual return rate",
      "Set the total investment tenure in years",
      "Compare the step-up corpus to a flat SIP of the same starting amount",
      "Register for auto step-up via your AMC or distributor to automate the increases",
    ],
    keyFeatures: [
      "Year-by-year iterative SIP compounding",
      "Auto-projection of final monthly SIP at end of horizon",
      "Donut chart for invested vs returns breakup",
      "Adjustable starting amount, step-up rate, return rate, and horizon",
      "Free, mobile-friendly, no signup",
    ],
    benefits: [
      "Matches investment growth to salary growth — minimal lifestyle impact",
      "Builds dramatically larger corpus vs flat SIP — often 50–80% more",
      "Most AMCs support auto step-up registration",
      "Ideal for long-horizon goals: retirement, child education, wealth",
      "Counteracts inflation in your investing pace, not just your asset growth",
      "Recommended by financial planners as a default SIP setup",
    ],
    useCases: [
      "Retirement SIP planning with salary-linked growth",
      "Child education fund matched to parent's salary growth",
      "Long-horizon wealth creation over 15+ years",
      "Replacing a static SIP with a growth-matched plan",
      "Couples with anticipated income increases (promotions, dual income)",
    ],
    tips:
      "10% is the most popular step-up rate because it matches average annual salary hikes in India. Aggressive savers go to 15% or 20% — but make sure your cash flow can sustain it. The first 5 years of a step-up SIP feel modest; the back-end 10 years are where the magic happens as your SIP grows large enough that compounding accelerates dramatically. Most importantly: register the step-up at SIP setup time. Manual step-ups every year are rarely done — automation wins.",
    faqs: [
      { q: "What is a step-up SIP?", a: "A step-up SIP automatically increases your monthly SIP contribution by a fixed percentage or rupee amount every year. If you start at ₹10,000 with 10% step-up, year 2 becomes ₹11,000, year 3 ₹12,100, and so on." },
      { q: "What step-up percentage should I choose?", a: "10% is a reasonable default — most Indian salaries grow at least that much annually. If you're early in your career with steeper hikes, go for 15%. Aggressive savers use 20%, but stress-test the cash flow first." },
      { q: "Do all mutual fund houses offer step-up SIPs?", a: "Most major AMCs do, sometimes called 'top-up SIP' or 'booster SIP'. If your fund doesn't offer auto step-up, you can manually increase the SIP every year via your distributor or AMC app." },
      { q: "Is step-up SIP better than starting with a higher fixed SIP?", a: "Generally yes if you can't afford the higher amount today. Starting smaller and growing keeps the habit intact while inflation in your income funds the increases — practically more sustainable." },
      { q: "Can I cap the step-up SIP at a maximum amount?", a: "Yes. Most AMCs allow you to set both the annual step-up rate and a maximum cap (e.g., 'don't go above ₹50,000/month'). This is useful if you want to commit only to a known affordable ceiling." },
      { q: "Does step-up apply to ELSS SIPs?", a: "Yes, ELSS supports step-up. Note that each step-up instalment is locked in for 3 years separately, and the ₹1.5L annual 80C cap applies across all 80C contributions combined." },
      { q: "Can I reduce or stop a step-up SIP later?", a: "Yes. You can modify the SIP (reduce the monthly amount or remove the step-up) any time through your AMC or distributor. You can also pause or stop the SIP entirely without penalty for non-ELSS schemes." },
      { q: "Does step-up SIP work with index funds?", a: "Yes. Step-up works with any open-ended mutual fund — equity, debt, hybrid, or index. Index funds are popular for step-up SIPs due to their low expense ratios and predictable benchmark returns." },
    ],
  },

  dcf: {
    about:
      "The Discounted Cash Flow (DCF) Calculator estimates the intrinsic value of a stock by projecting future earnings and discounting them back to today. DCF analysis is the gold standard in fundamental equity analysis and stock valuation — used by professional analysts, value investors, CFAs, and portfolio managers to decide whether a share is undervalued or overvalued relative to its current market price. This free online DCF calculator accepts current EPS, expected growth rate, growth period, discount rate, and terminal growth rate to compute fair value per share.\n\nWhile DCF is mostly used by direct stock investors, mutual fund investors benefit indirectly because fund managers use DCF along with many other valuation frameworks to pick stocks. Use this calculator to understand fundamental valuation, evaluate individual stocks, or test 'what-if' scenarios on growth and discount assumptions. Backed by AMFI Registered MFD Nithin Finserv, Bengaluru.",
    whatIs:
      "Discounted Cash Flow (DCF) is a valuation technique that estimates the intrinsic value of an asset (typically a company or stock) by projecting its future cash flows and discounting them back to present value at a chosen discount rate. The underlying principle: a rupee tomorrow is worth less than a rupee today, because of the time value of money and risk. DCF is widely used by investment banks, equity analysts, and value investors when picking stocks.",
    howItWorks:
      "Intrinsic value = Σ (EPS × (1 + g)^t / (1 + d)^t) for t = 1 to growth period + present value of terminal value. Terminal value = EPS × (1 + g)^t × (1 + tv) / (d − tv), where g is the explicit-period growth, d is the discount rate (cost of equity), and tv is the terminal growth rate (assumed beyond the explicit period). The intrinsic value is then compared to current market price to assess over- or undervaluation.",
    example:
      "Consider a stock with current EPS of ₹50, expected to grow at 15% for 10 years, then perpetually at 3%, with a discount rate of 10%. The sum of discounted EPS over years 1–10 totals approximately ₹728. The terminal value (after year 10) discounted back is approximately ₹4,378. The intrinsic value per share is therefore ~₹5,106. If the current market price is ₹3,500, the stock is undervalued; if ₹7,000, overvalued. Note: results are extremely sensitive to growth and discount-rate assumptions.",
    howToUse: [
      "Enter the company's current EPS (earnings per share)",
      "Estimate the expected EPS growth rate over the growth period",
      "Set the growth period (typically 5–10 years)",
      "Set the discount rate (10–12% reflects cost of equity for Indian stocks)",
      "Set the terminal growth rate (2–4% is a common long-term assumption)",
      "Compare the calculated intrinsic value to the current share price",
      "Run sensitivity tests by changing growth and discount inputs",
    ],
    keyFeatures: [
      "Two-stage DCF model (explicit growth + terminal value)",
      "Adjustable EPS, growth, discount, and terminal rates",
      "Per-share intrinsic value output",
      "Sensitivity-test friendly with instant re-calculation",
      "Free, mobile-friendly, no signup",
    ],
    benefits: [
      "Forces explicit assumptions about growth, risk, and time",
      "Anchors investment decisions to fundamentals, not market sentiment",
      "Useful for long-term equity investors and value investors",
      "Identifies overvalued and undervalued stocks objectively",
      "Helps with margin-of-safety thinking",
    ],
    useCases: [
      "Stock-picking for long-term portfolios",
      "Pre-investment valuation of individual equity holdings",
      "Sensitivity testing of bull / base / bear case assumptions",
      "Comparing two competitor stocks on intrinsic value",
      "Educational tool for understanding fundamental analysis",
    ],
    tips:
      "DCF is only as good as your inputs — small changes in growth or discount rate dramatically shift the intrinsic value. Always run three scenarios: bear (conservative growth, high discount), base (realistic), and bull (optimistic) — and only invest if even the bear case looks attractive. Use DCF alongside P/E ratio, ROE, debt-to-equity, and qualitative analysis (management quality, moat). For most retail investors, equity mutual fund SIPs are more accessible than direct stock-picking; let professional fund managers run the DCF math at scale.",
    faqs: [
      { q: "How accurate is DCF analysis?", a: "DCF is only as good as your inputs. Small changes in growth or discount rate dramatically shift the intrinsic value. Use it as one input among many — alongside P/E, ROE, debt levels, and qualitative analysis of management and moats." },
      { q: "What discount rate should I use for Indian stocks?", a: "10–12% reflects cost of equity for established Indian large-cap companies. Use higher (13–15%) for smaller, riskier businesses with volatile earnings; lower (9–10%) for blue chips with predictable cash flows." },
      { q: "What is a reasonable terminal growth rate?", a: "2–4% is standard — roughly the long-term GDP or inflation rate. Higher than 5% is generally unrealistic and inflates the valuation significantly. Some analysts use 0% to be ultra-conservative." },
      { q: "Is DCF used in mutual fund investing?", a: "Fund managers use DCF along with many other valuation frameworks. As a mutual fund SIP investor you don't need to run DCF yourself — the fund manager does. DCF is most useful if you pick individual stocks." },
      { q: "What's the difference between DCF and DDM?", a: "DCF projects free cash flow (or earnings); DDM (Dividend Discount Model) projects dividends specifically. DDM works only for dividend-paying companies; DCF works for any company. Both discount future flows to present value." },
      { q: "Does DCF account for debt?", a: "This simple two-stage DCF uses EPS, which is post-interest. A fuller enterprise-value DCF would project free cash flow to firm (FCFF) and adjust separately for debt. The simple version is sufficient for retail screening." },
      { q: "What is margin of safety in DCF?", a: "The discount between intrinsic value and market price. Value investors typically demand a 20–30% margin of safety — i.e., they only buy if the stock trades at a 20–30% discount to their calculated intrinsic value." },
      { q: "Should I use DCF or just P/E ratio?", a: "Both — they complement each other. P/E is a quick screen; DCF is a deeper valuation. A stock can have a low P/E but still be overvalued on DCF if earnings are about to collapse." },
    ],
  },

  emi: {
    about:
      "The EMI Calculator computes the monthly Equated Monthly Instalment on any home loan, car loan, personal loan, gold loan, or business loan in India. Enter the loan amount, annual interest rate, and tenure to instantly see the EMI, total interest payable over the loan period, and the principal-plus-interest breakup. This free online EMI calculator is mobile-friendly, gives instant results as you change inputs, and is ideal for comparing offers from different banks and NBFCs before committing to a loan.\n\nIndia has one of the largest retail-loan markets in the world, with home loans alone crossing ₹30 lakh crores in outstanding portfolio. Knowing your EMI before you sign helps you plan affordability, compare offers, and understand the real total interest cost — which is often a multiple of the loan amount itself. Backed by AMFI Registered MFD Nithin Finserv, Bengaluru.",
    whatIs:
      "An Equated Monthly Instalment (EMI) is the fixed amount you pay every month to your lender — bank or NBFC — covering both principal repayment and interest. The EMI remains constant throughout the loan tenure (for fixed-rate loans), but the principal-vs-interest split changes: early EMIs are mostly interest, late EMIs are mostly principal. EMI structure is used for home loans, auto loans, personal loans, education loans, gold loans, and business loans across India.",
    howItWorks:
      "EMI = P × r × (1 + r)^n / ((1 + r)^n − 1), where P is the principal loan amount, r is the monthly interest rate (annual rate ÷ 12 ÷ 100), and n is the loan tenure in months. The formula reflects the time value of money and ensures that the lender recovers the full principal plus interest at the chosen rate over the agreed tenure.",
    example:
      "Consider a ₹50 lakh home loan at 8.5% annual interest for 20 years (240 months). The calculator gives an EMI of approximately ₹43,391. Over the 20-year tenure, you'll pay ~₹1.04 crores total — meaning ~₹54.1 lakhs is pure interest, more than the original loan principal. Shorten the tenure to 15 years and the EMI rises to ~₹49,237 but total interest drops to ~₹38.6 lakhs, saving you ~₹15.5 lakhs in interest.",
    howToUse: [
      "Enter the loan amount you're borrowing",
      "Enter the annual interest rate offered by the lender",
      "Set the loan tenure in years",
      "Read the monthly EMI, total interest payable, and total payment",
      "Compare offers by toggling rate and tenure — small rate differences add up to lakhs",
      "Use the savings calculator alongside to redirect EMI surplus into SIPs",
    ],
    keyFeatures: [
      "Standard EMI formula matching Indian banks and NBFCs",
      "Donut visualisation of principal vs interest",
      "Adjustable loan amount, rate, and tenure",
      "Works for home, car, personal, gold, and business loans",
      "Mobile-friendly, no signup",
    ],
    benefits: [
      "Plan loan affordability before committing to the EMI",
      "Reveals the true total interest cost — often more than the loan itself",
      "Helps compare offers from multiple banks instantly",
      "Useful for prepayment planning — see how much interest you save with each prepayment",
      "Tenure-vs-rate trade-off becomes visible",
    ],
    useCases: [
      "Home loan EMI calculation before pre-approval",
      "Car loan affordability check",
      "Personal loan comparison between banks and NBFCs",
      "Gold loan EMI vs upfront repayment trade-off",
      "Business loan repayment planning",
      "Education loan EMI (also see our dedicated Education Loan EMI Calculator)",
    ],
    tips:
      "Avoid stretching loan tenure just to get a lower EMI — a ₹50L home loan at 8.5% over 30 years costs ~₹85L in interest vs ~₹54L over 20 years. Always pick the shortest tenure your cash flow can comfortably sustain. Make prepayments whenever you have a windfall (bonus, ESOP, FD maturity) — early prepayments save the most interest because they reduce the principal during the high-interest early years. For floating-rate home loans, RBI rules let you prepay without penalty. Pair home-loan tax benefits (Section 24, 80C, 80EEA) with strategic prepayment.",
    faqs: [
      { q: "How is EMI calculated in India?", a: "Indian banks use the standard EMI formula: EMI = P × r × (1+r)^n / ((1+r)^n − 1). The same formula applies whether it's a home loan, car loan, personal loan, or any other amortising loan — only rate and tenure differ across loan types." },
      { q: "Should I take a longer loan tenure for a lower EMI?", a: "Longer tenure means lower EMI but much higher total interest. A ₹50L home loan over 30 years costs ~₹85L in interest; over 20 years, ~₹54L. Pick the shortest tenure your cash flow can sustain. Lower EMI is not the same as cheaper loan." },
      { q: "Does prepayment reduce EMI or tenure?", a: "Most banks default to reducing tenure (keeping EMI same), which saves more total interest. You can request a reduced EMI instead — banks must allow this on floating-rate home loans without penalty under RBI regulations." },
      { q: "What is the difference between EMI principal and interest?", a: "EMI is the fixed monthly payment combining both. Early EMIs are mostly interest (because the outstanding principal is largest); later EMIs are mostly principal. Banks must provide an amortisation schedule on request — review it for tax-deduction planning." },
      { q: "Can I use this for student loan EMI?", a: "Use our dedicated Education Loan EMI Calculator instead — it accounts for the moratorium (grace) period during the course, which materially affects the post-moratorium principal." },
      { q: "Are home loan EMIs tax-deductible?", a: "Yes. Interest paid on home loan EMI qualifies for Section 24 deduction up to ₹2L/year (self-occupied) or unlimited (let-out). Principal qualifies for 80C up to ₹1.5L/year. First-time buyers may also get 80EEA benefit." },
      { q: "Can I switch from fixed-rate to floating-rate EMI?", a: "Yes, most banks allow conversion. There may be a small conversion fee. Floating rates have generally been lower than fixed historically, but they fluctuate with RBI policy rates." },
      { q: "What is EMI moratorium?", a: "A grace period during which EMIs are paused but interest continues to accrue. Common in education loans (during course duration) and was offered during Covid-19. Moratorium doesn't waive the loan — interest simply accumulates." },
    ],
  },

  emi_edu: {
    about:
      "The Education Loan EMI Calculator computes the monthly EMI on a student loan, factoring in the moratorium period — the grace window after course completion before EMI repayment begins. During the moratorium, simple interest accrues on the disbursed loan and is added to the principal, inflating your post-course liability. This India-specific student loan calculator helps you plan realistic post-study cash flows and compare loan offers from public-sector banks, private banks, and NBFCs.\n\nWith higher education costs rising 8–10% annually in India and overseas costs amplified by rupee depreciation, education loans have become a near-universal tool for Indian families funding professional and overseas programmes. Use this calculator to see the true post-course EMI burden, plan your first job's take-home accordingly, and evaluate offers from multiple lenders. Backed by AMFI Registered MFD Nithin Finserv.",
    whatIs:
      "An education loan EMI is the monthly repayment owed by a student (or co-borrower parent) on a study loan after the course-plus-moratorium period ends. Unlike a home or car loan where EMI starts immediately after disbursement, education loans grant a grace period — typically course duration + 6 to 12 months — during which interest accrues but no EMI is paid. The capitalised interest is then added to the principal for EMI calculation.",
    howItWorks:
      "Moratorium interest = Principal × monthly rate × moratorium months (simple interest accrued during the grace period). New principal = Original principal + moratorium interest. EMI is then calculated on this inflated principal over the repayment tenure using the standard EMI formula. Total payment = (EMI × repayment months) + moratorium interest.",
    example:
      "Consider a ₹5 lakh education loan at 10% interest, with a 12-month moratorium and 5-year repayment tenure after course completion. Moratorium interest = ₹5L × 10% × 1 year = ₹50,000. New principal = ₹5.5 lakhs. The EMI on ₹5.5L over 5 years at 10% comes to approximately ₹11,683/month. Total post-moratorium payment = ~₹7.01 lakhs. Paying interest during the moratorium would save ~₹50,000 of capitalised principal.",
    howToUse: [
      "Enter the total education loan amount (or estimate if you're early in the application)",
      "Set the annual interest rate offered by the lender",
      "Choose the repayment tenure in years (post-course-completion)",
      "Enter the moratorium period in months (typically 6–12 months after course-end)",
      "Read the post-moratorium EMI and total payment over the loan life",
      "Compare with multiple lenders to find the best rate and most flexible terms",
    ],
    keyFeatures: [
      "Moratorium-period interest capitalisation",
      "Post-course EMI calculation",
      "Adjustable principal, rate, tenure, and moratorium",
      "Works for PSU banks, private banks, and NBFC education loans",
      "Mobile-friendly, no signup",
    ],
    benefits: [
      "Realistic post-study liability — not just the disbursed amount",
      "Helps compare PSU bank, private bank, and NBFC offers",
      "Useful for budgeting first-job income against EMI",
      "Surfaces the cost of moratorium interest capitalisation",
      "Free, India-specific, instant results",
    ],
    useCases: [
      "Pre-application loan affordability check for the student or parent",
      "Comparing PSU vs private vs NBFC loan offers",
      "First-job salary negotiation context (EMI vs take-home)",
      "Choosing between paying simple interest during moratorium or letting it capitalise",
      "Comparing loan + scholarship vs full loan scenarios",
    ],
    tips:
      "If your family can afford it, paying simple interest during the moratorium period saves significant total interest because the principal doesn't balloon. Some lenders also offer a 0.25–0.5% rate concession for borrowers who pay during the course. PSU banks (SBI, BoB, BoI) typically offer lower rates than NBFCs but slower approval and stricter documentation. For overseas study, evaluate cross-border NBFCs like Avanse, Auxilo, HDFC Credila — sometimes they're faster but the rate spread vs PSU is 1–2.5%. And remember Section 80E — interest paid on education loan is tax-deductible for up to 8 years from EMI start, with no upper cap on the deduction.",
    faqs: [
      { q: "What is the moratorium period in an education loan?", a: "It's the grace window between disbursement and EMI start — typically course duration + 6 to 12 months. Interest still accrues during this period unless you choose to pay it. The accrued interest is added to the principal at moratorium end." },
      { q: "Should I pay simple interest during the moratorium?", a: "If you can, yes. Paying simple interest during the course keeps the principal flat and saves significant total interest. Some banks also give a small rate concession (0.25–0.5%) for borrowers who pay during the course." },
      { q: "Are education loans tax-deductible?", a: "Yes — interest paid on an education loan qualifies for tax deduction under Section 80E for up to 8 years from when EMIs start, with no upper cap on the deduction amount. Principal is not deductible." },
      { q: "Can parents take an education loan in their name?", a: "Usually the loan is in the student's name with a parent or guardian as co-borrower. Some banks offer parent-as-applicant variants for younger students or specific courses (e.g., school-level study)." },
      { q: "Is there a maximum education loan limit?", a: "PSU banks typically cap at ₹10L for domestic and ₹20L for overseas, but may go higher for premier institutions. Private banks and NBFCs offer up to ₹1 crore+ for top institutions. Collateral is usually required above ₹7.5L." },
      { q: "What if I can't find a job after the course?", a: "Most banks allow an extended moratorium of 6–12 months on request. Keep communication open with the lender — silent defaults damage credit score permanently. Some loans also allow restructuring to lower EMI." },
      { q: "Can I prepay an education loan?", a: "Yes, most education loans allow prepayment without penalty. Use any windfall (signing bonus, ESOP) to prepay — every rupee prepaid saves multiple rupees of future interest." },
      { q: "PSU bank or NBFC for education loan?", a: "PSU banks offer lower rates (typically 8.5–10%) but require collateral above ₹7.5L. NBFCs offer faster approval and unsecured loans at higher rates (11–13%). Choose based on speed, collateral availability, and total cost." },
    ],
  },

  ppf: {
    about:
      "The PPF Calculator estimates the maturity value of your Public Provident Fund contributions over the 15-year tenure (or extended period). PPF is one of the most popular safe investment options in India — government-backed, EEE-status (contribution, interest, and maturity all tax-free), with deduction up to ₹1.5 lakh per financial year under Section 80C. Enter your annual PPF contribution, current PPF interest rate, and tenure to see the corpus at maturity, total interest earned, and total invested.\n\nPPF is the cornerstone of every salaried Indian's tax-saving and safe-debt allocation because it offers sovereign guarantee, tax-free interest, and a 15-year compounding window. This online PPF maturity calculator is ideal for planning 80C contributions, comparing PPF with ELSS, and modelling long-horizon retirement savings. Backed by AMFI Registered MFD Nithin Finserv, ARN: 307760.",
    whatIs:
      "Public Provident Fund (PPF) is a long-term, government-backed savings scheme available to every Indian resident citizen, launched in 1968 under the National Savings Organisation. It has a 15-year tenure (extendable in 5-year blocks), pays a quarterly-set interest rate (currently around 7.1%), and is one of the few EEE-status (Exempt-Exempt-Exempt) instruments left in India — meaning contributions get tax deduction, interest is tax-free, and maturity is tax-free. PPF accounts can be opened at banks or post offices.",
    howItWorks:
      "Maturity = P × ((1 + r)^n − 1) / r × (1 + r), assuming annual compounding and one annual deposit. The interest rate is set quarterly by the Government of India — currently around 7.1%. To maximise PPF returns, contributions should ideally be made before April 5 of each financial year so the full balance earns interest for the entire year.",
    example:
      "Suppose you contribute the maximum ₹1.5 lakh per year to PPF for the full 15-year tenure at the current 7.1% rate. Total invested = ₹22.5 lakhs. Maturity corpus = approximately ₹40.7 lakhs, with ~₹18.2 lakhs of interest earned — all tax-free. Extend the account by another 5 years (extension with contribution) and the corpus grows to ~₹66.6 lakhs at the same rate. PPF is one of the most reliable long-term tax-free wealth builders available to Indian investors.",
    howToUse: [
      "Enter your annual PPF contribution (₹500 minimum to ₹1.5 lakh maximum per financial year)",
      "Set the current PPF interest rate (check the latest govt-notified rate; ~7.1% as of 2026)",
      "Choose the tenure — 15 years standard, extendable in 5-year blocks",
      "Read the maturity amount, total invested, and tax-free interest earned",
      "Use the results to compare PPF against ELSS for your 80C allocation",
      "Plan to contribute before April 5 each year for maximum interest accrual",
    ],
    keyFeatures: [
      "Annual compounding (matching govt PPF rules)",
      "Adjustable for any contribution from ₹500 to ₹1.5L",
      "Adjustable interest rate as govt revises quarterly",
      "Tenure projection from 15 to 35 years (with extensions)",
      "Tax-free maturity output",
      "Mobile-friendly, no signup",
    ],
    benefits: [
      "Sovereign-guaranteed returns — zero credit risk",
      "Tax-free interest AND tax-free maturity (full EEE status)",
      "Up to ₹1.5 lakh annual deduction under Section 80C",
      "Extendable beyond 15 years in 5-year blocks",
      "Partial withdrawals allowed from year 7 onwards",
      "Loan facility available against PPF from year 3 to year 6",
      "Best 'safe debt' option for salaried Indians' long-horizon savings",
    ],
    useCases: [
      "80C tax saving alongside ELSS and other instruments",
      "Long-term debt allocation in a balanced portfolio",
      "Retirement supplementary corpus",
      "Child PPF account for long-horizon wealth transfer",
      "Risk-free portion of an emergency fund or sinking fund",
    ],
    tips:
      "Contribute before April 5 of each financial year — PPF interest is calculated on the minimum monthly balance between the 5th and end of month, so deposits after the 5th lose a month of interest. Open a PPF account early in your career — by the time you're 40, you'll have a sizeable tax-free corpus building quietly in the background. Use PPF for the safe debt portion of your portfolio and ELSS / equity mutual funds for growth. Don't break the 15-year lock-in via premature closure unless absolutely necessary — partial withdrawals from year 7 are usually sufficient.",
    faqs: [
      { q: "What is the current PPF interest rate in India?", a: "The Government of India revises PPF rates quarterly. The rate has been ~7.1% for several quarters as of 2026. Always check the latest official notification before computing maturity values." },
      { q: "What is the PPF lock-in period?", a: "15 financial years from the year of the first contribution. After that, you can withdraw the full corpus, or extend in 5-year blocks with or without further contribution." },
      { q: "PPF or ELSS — which is better for Section 80C?", a: "PPF for guaranteed, tax-free returns and zero risk. ELSS for higher (market-linked) returns and a much shorter 3-year lock-in. Most investors use a mix — PPF for the safe core, ELSS for growth." },
      { q: "Can I have a PPF account for my child?", a: "Yes. A parent or legal guardian can open a PPF account for a minor child. The ₹1.5 lakh annual limit is combined across the parent's own and the minor's accounts (not separate)." },
      { q: "What happens after the 15-year PPF maturity?", a: "Three options: (1) Withdraw the entire corpus tax-free. (2) Extend the account in 5-year blocks with fresh contributions. (3) Extend without contributions and continue earning interest on the existing balance." },
      { q: "Can I withdraw partially from PPF before 15 years?", a: "Yes. Partial withdrawals are allowed once a financial year from the start of year 7 onwards. The withdrawal amount is capped — generally 50% of the balance at the end of year 4 preceding the withdrawal year." },
      { q: "Can I take a loan against my PPF?", a: "Yes, from year 3 to year 6. The loan can be up to 25% of the balance at the end of year 2 preceding the loan year. Interest charged is 1% above the PPF rate. Repayable within 36 months." },
      { q: "Is PPF better than EPF for retirement?", a: "EPF for salaried — employer matches your contribution (12% of basic) and EPF rates have historically been slightly higher. PPF supplements EPF, especially for self-employed people who don't have EPF. Most salaried Indians have both." },
      { q: "Can NRIs invest in PPF?", a: "NRIs cannot open new PPF accounts. Existing PPF accounts opened while resident continue till maturity but cannot be extended after maturity. Check the latest RBI notification — rules have changed over the years." },
    ],
  },

  fd: {
    about:
      "The Fixed Deposit Calculator estimates the maturity value of any FD across banks, NBFCs, small finance banks, and post offices in India. Enter the deposit amount, annual interest rate, and tenure to see the maturity value, total interest earned, and the donut breakup of principal vs interest. FDs are India's most popular safe-investment instrument, offering capital safety with DICGC insurance up to ₹5 lakhs per bank, guaranteed returns locked at the deposit rate, and predictable maturity values.\n\nThis free online FD maturity calculator works for cumulative FDs (quarterly compounding, default for most banks), tax-saver FDs (5-year lock-in with 80C benefit), senior citizen FDs (with rate premium), and corporate FDs. Use it to compare offers before locking in, plan reinvestment timelines, or evaluate FD-vs-mutual-fund trade-offs. Backed by AMFI Registered MFD Nithin Finserv, Bengaluru.",
    whatIs:
      "A Fixed Deposit (FD) is a savings instrument offered by banks, NBFCs, and small finance banks where you lock a lumpsum amount for a fixed tenure (typically 7 days to 10 years) at a fixed interest rate agreed at the time of deposit. Interest can be paid out periodically (non-cumulative) or compounded and paid at maturity (cumulative). FDs are the cornerstone of conservative Indian savings — DICGC-insured, capital-safe, and tax-deductible under Section 80C for 5-year tax-saver FDs (up to ₹1.5L/year).",
    howItWorks:
      "Maturity = P × (1 + r/4)^(4 × years), assuming quarterly compounding — the standard convention for most Indian banks. The effective annualised return is slightly higher than the nominal rate due to compounding. The calculator instantly shows the maturity value and total interest earned.",
    example:
      "Consider a ₹5 lakh FD at 7% annual interest for 5 years. Quarterly compounding gives a maturity value of approximately ₹7.08 lakhs, with ~₹2.08 lakhs of interest earned. If you're a senior citizen at 7.5% (0.5% premium), the same FD matures at ~₹7.27 lakhs. Compare this to a ₹5L equity mutual fund SIP at 12% over the same 5 years, which would reach ~₹4.13 lakhs in invested capital but with ~₹6.83 lakhs of FV — meaning ~₹1.05 lakhs less return than the FD for the same 5-year window. Over 15+ years, mutual funds typically pull ahead by ₹10–20 lakhs.",
    howToUse: [
      "Enter your FD amount in rupees",
      "Enter the annual interest rate offered (check senior-citizen rates if applicable)",
      "Choose the tenure in years",
      "Read the maturity value, total interest earned, and donut breakup",
      "Compare offers from multiple banks — even 0.25% difference adds up over 5 years",
      "Use our MF vs FD Calculator for long-horizon comparisons",
    ],
    keyFeatures: [
      "Quarterly compounding (Indian bank convention)",
      "Adjustable for principal, rate, and tenure",
      "Works for cumulative, tax-saver, senior citizen, and corporate FDs",
      "Donut chart visualisation",
      "Free, mobile-friendly, no signup",
    ],
    benefits: [
      "Capital safety with DICGC insurance up to ₹5L per bank",
      "Guaranteed, predictable returns — locked at the time of deposit",
      "Senior citizens get 0.25–0.75% higher rates from most banks",
      "Loan-against-FD facility for emergency liquidity (typically 75–90% of FD value)",
      "Tax-saver FDs (5-year lock-in) qualify for 80C deduction up to ₹1.5L",
      "Easy to open online with most banks — 5 minutes through net banking",
    ],
    useCases: [
      "Short-term safety money (1–3 years)",
      "Emergency fund parking",
      "Tax-saver FD for 80C deduction",
      "Senior citizen retirement income generation",
      "FD-laddering for staggered maturity strategy",
      "Corporate FD for slightly higher rates (with credit risk)",
    ],
    tips:
      "Don't put your entire long-horizon savings in FDs — inflation slowly erodes the real value. For money you'll need within 1–3 years, FDs are appropriate. For 5+ year wealth goals, mutual funds typically outperform FDs significantly in real terms. Consider FD-laddering: split a lumpsum across 1Y, 2Y, 3Y, 4Y, 5Y FDs so one matures every year and you can reinvest at then-prevailing rates. For senior citizens, the 0.5% rate premium plus SCSS (Senior Citizen Savings Scheme) at ~8.2% are essential safe-yield tools. And spread FDs across multiple banks if your total exceeds ₹5 lakhs to stay within DICGC insurance cover.",
    faqs: [
      { q: "Is FD interest taxable in India?", a: "Yes. FD interest is taxed at your income slab rate. Banks deduct 10% TDS if interest exceeds ₹40,000/year (₹50,000 for senior citizens). Submit Form 15G/15H if your total income is below the taxable threshold." },
      { q: "What is the maximum FD insurance under DICGC?", a: "Up to ₹5 lakh per depositor per bank (combined across all branches of the same bank). For larger amounts, spread FDs across multiple banks to maximise insurance coverage." },
      { q: "Should I park my retirement corpus entirely in FDs?", a: "Generally no — inflation erodes FD returns. Use FDs for short-term safety needs (1–3 years). For long-term retirement money, a mix of equity and debt mutual funds typically delivers significantly better post-tax, inflation-adjusted returns." },
      { q: "Can I break an FD before maturity?", a: "Yes — premature withdrawal is allowed with a small penalty (typically 0.5–1% reduction in the applicable rate). Some sweep-in FDs allow penalty-free withdrawal of partial amounts when linked to a savings account." },
      { q: "FD or PPF for tax saving?", a: "Tax-saver FDs offer guaranteed returns (5-year lock-in) but the interest is taxable. PPF offers tax-free interest and maturity (15-year lock-in). For pure 80C tax saving, PPF usually wins after-tax — but PPF has a longer lock-in." },
      { q: "What is the difference between cumulative and non-cumulative FD?", a: "Cumulative FD reinvests interest until maturity (pay-out is one lumpsum). Non-cumulative pays interest periodically (monthly/quarterly/yearly) — useful for retirees who need regular income but slightly lower maturity value." },
      { q: "Is corporate FD safer than bank FD?", a: "No. Bank FDs are DICGC-insured up to ₹5L per bank. Corporate FDs (NBFC, manufacturing companies) offer higher rates but carry credit risk — only invest if the company has AAA rating and stick within manageable amounts." },
      { q: "Can senior citizens get higher FD rates?", a: "Yes. Most Indian banks offer 0.25–0.75% premium for senior citizens (60+). Many banks also have special schemes like SBI WeCare with even higher rates for 5-year+ tenures." },
      { q: "What is FD laddering?", a: "Splitting a lumpsum across multiple FDs with staggered tenures (1Y, 2Y, 3Y, 4Y, 5Y) so one FD matures every year. Provides regular liquidity, locks in different rates over time, and is a popular conservative strategy for retirees." },
    ],
  },

  rd: {
    about:
      "The Recurring Deposit (RD) Calculator estimates the maturity value of your monthly RD deposits over the chosen tenure. RDs are ideal for short-to-medium-term savings goals (1–5 years) where you want guaranteed returns with no market risk — popular for first-time savers, gift fund accumulation, festival fund building, and small-ticket goal saving. Enter the monthly deposit amount, interest rate, and tenure to see the maturity value, total deposited, and interest earned.\n\nThis free Indian RD maturity calculator works with bank RDs, post office RDs, and small finance bank RDs. RDs are conceptually similar to SIPs in mutual funds — both involve fixed monthly contributions — but RDs offer guaranteed returns at a bank-set rate while SIPs offer market-linked returns. Use this calculator to compare RD maturity values across tenures and banks, and consider our SIP Calculator for comparing RD vs SIP for the same monthly contribution. Backed by AMFI Registered MFD Nithin Finserv.",
    whatIs:
      "A Recurring Deposit (RD) is a savings scheme offered by banks and post offices where you commit to depositing a fixed amount every month for a chosen tenure (typically 6 months to 10 years) at a fixed interest rate. Interest compounds quarterly. At maturity, you get back the total deposited plus accumulated compound interest. RDs are popular for inculcating monthly saving discipline, especially for first-time savers, students, and households building specific short-to-medium-term goal funds.",
    howItWorks:
      "Maturity = M × ((1 + r)^n − 1) / r × (1 + r), where M is the monthly deposit, r is the monthly rate of interest, and n is the total number of months. Quarterly compounding is the standard convention for Indian RDs. The calculator shows maturity value, total monthly deposits made, and interest earned.",
    example:
      "Consider a ₹5,000 monthly RD at 7% interest for 3 years (36 months). The maturity value would be approximately ₹2.0 lakhs. Of this, ₹1.8 lakhs is your own contribution (₹5,000 × 36) and ~₹20,000 is interest earned over the tenure. Compare with the same ₹5,000 monthly SIP at 12% in equity mutual funds, which would build approximately ₹2.16 lakhs — slightly higher but with market risk. For risk-averse investors with a 3-year goal, RD is the safer choice.",
    howToUse: [
      "Enter your monthly RD amount (most banks allow ₹100 to ₹1L+ per month)",
      "Enter the annual interest rate offered (check senior-citizen rates if applicable)",
      "Set the RD tenure in years",
      "Read the maturity amount, total deposited, and interest earned",
      "Compare with our SIP Calculator for the same monthly amount over the same tenure",
      "Choose RD for guaranteed returns, SIP for higher potential (but market-linked) returns",
    ],
    keyFeatures: [
      "Quarterly compounding (Indian bank standard)",
      "Adjustable monthly deposit, rate, and tenure",
      "Works with bank, post office, and SFB RDs",
      "Comparison-ready with our SIP Calculator",
      "Free, mobile-friendly, no signup",
    ],
    benefits: [
      "Forced monthly saving habit — automated from your bank account",
      "Guaranteed, predictable returns — no market risk",
      "Low minimums — start with ₹100/month at most banks",
      "Useful for short-term goals: travel, gift fund, electronics, festival",
      "Loan-against-RD facility available at most banks",
      "Senior citizens get rate premium",
    ],
    useCases: [
      "First-time savers building monthly discipline",
      "Short-term goals (1–3 years): travel, gifts, festivals, electronics",
      "Children's pocket money or allowance accumulation",
      "Down-payment fund for a small-ticket item",
      "Conservative-investor alternative to SIPs",
      "Senior citizens looking for monthly-deposit safe yield",
    ],
    tips:
      "For 5+ year horizons, consider switching from RD to equity SIP — historical returns favour SIPs significantly over long tenures. For 1–3 year horizons, RD is the safer choice. Most banks now offer 'flexi RD' where you can vary the monthly amount — useful if your cash flow is irregular. Don't keep all your savings in RDs alone — they provide capital safety but barely beat inflation post-tax. Pair RDs with debt mutual funds (for slightly higher returns at similar risk) and equity SIPs (for long-horizon growth).",
    faqs: [
      { q: "RD or SIP — which is better?", a: "RD for short horizons (1–3 years), guaranteed returns, and risk-averse savers. SIP in mutual funds for 5+ year horizons and higher (but variable) returns. Many investors use both — RD for near-term goals, SIP for long-term wealth." },
      { q: "Is RD interest taxable in India?", a: "Yes — RD interest is taxed at your slab rate. Banks deduct TDS at 10% if interest exceeds ₹40,000/year (₹50,000 for senior citizens). Below that threshold, no TDS but interest must still be self-declared in your ITR." },
      { q: "Can I increase my RD instalment later?", a: "Most banks don't allow changing the monthly RD amount mid-tenure. You'd need to open a new RD for the additional amount, or close and reopen with a higher monthly figure. 'Flexi RDs' are an exception — they allow variable monthly amounts." },
      { q: "What happens if I miss an RD instalment?", a: "Banks typically charge a small penalty (₹1–2 per ₹100 of instalment). If you miss too many consecutive instalments, the RD may be closed prematurely with penalty interest deductions." },
      { q: "Can I break an RD before maturity?", a: "Yes, with a penalty — typically 0.5–1% reduction in the applicable rate, and you forfeit the eligibility for higher-rate slabs. Banks vary in their premature-closure rules; check before opening." },
      { q: "Post office RD vs bank RD?", a: "Post office RD (currently 6.7%) is government-guaranteed but rates revise quarterly. Bank RD rates are bank-set and vary widely (6–7.5%). Post office RDs have a 5-year tenure; bank RDs are flexible (6 months to 10 years)." },
      { q: "Can senior citizens get higher RD rates?", a: "Yes. Most banks offer 0.25–0.5% premium on RD rates for senior citizens (60+), similar to FDs." },
      { q: "Is RD better than savings account?", a: "Yes for committed monthly saving — RD rates (6–7%) are much higher than savings account rates (3–4%). For unpredictable money, savings account offers full liquidity; for predictable monthly surplus, RD wins on yield." },
    ],
  },

  compound: {
    about:
      "The Compound Interest Calculator computes the future value of any investment at any rate, tenure, and compounding frequency — yearly, quarterly, or monthly. Compound interest is the single most powerful concept in personal finance — Albert Einstein supposedly called it the eighth wonder of the world. Use this free online compound interest calculator to project returns on fixed deposits, bonds, savings accounts, mutual funds (at assumed return rates), or any other compounding instrument.\n\nWhether you're modelling FD maturity, projecting EPF balance growth, comparing the impact of monthly vs quarterly compounding, or simply understanding how a one-time deposit grows over decades, this versatile online tool gives you instant, accurate results. Backed by AMFI Registered MFD Nithin Finserv, Bengaluru.",
    whatIs:
      "Compound interest is interest earned not just on the original principal but also on the accumulated interest from previous periods. Unlike simple interest (which only pays on the original principal), compounding causes the balance to grow exponentially over time. The frequency of compounding — yearly, quarterly, or monthly — matters: more frequent compounding produces slightly higher effective returns. Compound interest is the underlying principle behind FDs, bonds, savings accounts, and long-horizon mutual fund growth.",
    howItWorks:
      "Maturity = P × (1 + r/f)^(f × n), where P is the principal, r is the annual rate of return, f is the compounding frequency per year (1 = yearly, 4 = quarterly, 12 = monthly), and n is the tenure in years. The calculator computes the maturity instantly and shows the breakdown between principal and compound interest earned.",
    example:
      "Consider a ₹1 lakh principal at 12% annual interest for 10 years. With yearly compounding, the maturity is approximately ₹3.11 lakhs. With quarterly compounding, ₹3.26 lakhs. With monthly compounding, ₹3.30 lakhs. The difference between yearly and monthly compounding is approximately ₹19,000 — small but non-trivial. Over 30 years with monthly compounding at 12%, the same ₹1 lakh grows to ~₹35.95 lakhs versus ~₹29.96 lakhs with yearly compounding — a ₹6 lakh difference purely from compounding frequency.",
    howToUse: [
      "Enter the principal amount you're investing",
      "Set the annual rate of return or interest",
      "Choose the tenure in years",
      "Pick the compounding frequency — yearly, quarterly, or monthly",
      "Read the maturity value and total compound interest earned",
      "Compare different frequencies to see the impact of compounding cycles",
    ],
    keyFeatures: [
      "Three compounding frequencies — yearly, quarterly, monthly",
      "Universal — works for FDs, bonds, savings, MFs",
      "Adjustable principal, rate, and tenure",
      "Frequency toggle for apples-to-apples comparison",
      "Free, mobile-friendly, no signup",
    ],
    benefits: [
      "Universal tool — works for FDs, bonds, savings, and mutual funds",
      "Frequency toggle shows the impact of compounding cycles",
      "Demonstrates the exponential nature of long-term compounding",
      "Useful for goal planning, 'what if' scenarios, and education",
      "Free, instant, and accurate to standard finance maths",
    ],
    useCases: [
      "FD maturity projection at different bank rates",
      "EPF/PF balance growth modelling over career",
      "Bond and debenture return calculations",
      "Education / financial-literacy demonstrations",
      "Long-horizon savings projections (20–30 years)",
    ],
    tips:
      "Compound interest's magic shows up most over long horizons — for short tenures the difference between simple and compound interest is small. Always prefer monthly or quarterly compounding over yearly when comparing financial products. And remember: low rates compounding over long periods still produce large outcomes — ₹1 lakh at 5% compounded monthly over 40 years becomes ~₹7.4 lakhs. Time is the most underrated financial superpower; start as early as possible.",
    faqs: [
      { q: "What is compound interest?", a: "Interest earned on both the original principal and the accumulated interest from previous periods. Unlike simple interest, compounding causes the balance to grow exponentially over time — the longer the tenure, the more dramatic the effect." },
      { q: "Does compounding frequency matter much?", a: "At high rates and long tenures, yes — monthly compounding noticeably beats yearly. At low rates or short tenures, the difference is small but measurable. Always prefer the higher-frequency option when available." },
      { q: "How does this relate to mutual fund returns?", a: "Mutual fund returns are typically expressed as CAGR — the annualised compound growth rate. This calculator can project a mutual fund's growth if you assume a constant compounding rate, but real MF returns vary year to year." },
      { q: "What is the difference between simple and compound interest?", a: "Simple interest only pays on the original principal each year. Compound interest pays on principal plus accumulated interest. Over 20 years at 10%, ₹1 lakh becomes ₹3 lakh simple, ₹6.7 lakh compound — more than 2x difference." },
      { q: "What is the Rule of 72?", a: "A quick mental-maths shortcut: divide 72 by your annual interest rate to estimate years to double money. At 12%, money doubles in ~6 years; at 8%, in ~9 years; at 6%, in ~12 years." },
      { q: "Can I use this for crypto or other speculative returns?", a: "Mathematically yes, but crypto returns are highly variable and not 'compound' in the traditional sense. The calculator works for any assumed constant return rate, but actual results in volatile assets diverge significantly from constant-rate projections." },
      { q: "Does compound interest apply to savings accounts?", a: "Yes. Indian savings accounts typically pay 3–4% interest compounded quarterly. While the rate is low, the interest is added to your balance and starts earning interest itself." },
    ],
  },

  cagr: {
    about:
      "The CAGR (Compound Annual Growth Rate) Calculator computes the smoothed annual growth rate of any investment over a period. CAGR is the standard return metric in India and globally for comparing investments of different sizes, durations, and asset classes — mutual funds, stocks, real estate, business revenue, anything that grows over time. Enter your initial value, final value, and the holding period to see the effective annual return rate, accurate to two decimal places.\n\nMutual fund factsheets, stock analyst reports, real-estate price-growth comparisons, and personal-portfolio benchmarking all use CAGR. Use this free online CAGR calculator to compare actual fund returns against the Sensex/Nifty benchmark, evaluate whether your real estate has actually beaten inflation, or compute the annualised growth of any investment. Backed by AMFI Registered MFD Nithin Finserv.",
    whatIs:
      "CAGR (Compound Annual Growth Rate) is the constant rate at which an investment would have grown if it had compounded steadily over a period — even if actual year-by-year returns were uneven. It is the standard return metric used by mutual funds, stocks, real estate, and any growth-comparable investment. CAGR strips out volatility and shows the effective annual return.",
    howItWorks:
      "CAGR = (Final Value / Initial Value)^(1 / years) − 1, expressed as a percentage. The calculator takes the nth root of the value ratio and subtracts 1. This produces the constant annual rate that would have transformed your initial value into the final value over the period — irrespective of how uneven the actual journey was.",
    example:
      "Consider an investment that grew from ₹1 lakh to ₹2.5 lakhs over 5 years. The CAGR is (2.5)^(1/5) − 1 = 20.11% per year — meaning a constant 20.11% annual return would have produced the same final value. Compare this to a mutual fund that returned 35% in year 1, −10% in year 2, 25% in year 3, 5% in year 4, and 30% in year 5: the simple average is 17% but the CAGR (the true annualised return) is closer to 16% because of how negative years drag the compounded result.",
    howToUse: [
      "Enter the initial investment value in rupees",
      "Enter the final or current value of the investment",
      "Enter the holding period in years (or fractional years)",
      "Read the CAGR percentage — the constant annual rate equivalent to your actual gain",
      "Compare your portfolio CAGR with Nifty 50 / Sensex CAGR to benchmark performance",
    ],
    keyFeatures: [
      "Exact CAGR maths matching mutual fund disclosure standards",
      "Adjustable initial value, final value, and tenure",
      "Works for any asset class — MFs, stocks, real estate, business",
      "Comparable across timeframes and amounts",
      "Free, mobile-friendly, no signup",
    ],
    benefits: [
      "Standardised return metric — comparable across investments",
      "Strips out year-to-year volatility, shows the effective rate",
      "Used by mutual funds, stocks, real estate, and business analyses",
      "Helps compare your portfolio against benchmarks (Nifty, Sensex)",
      "Quick way to evaluate whether real estate has beaten inflation",
    ],
    useCases: [
      "Mutual fund portfolio performance review",
      "Stock investment annualised return",
      "Real estate appreciation comparison vs inflation",
      "Business or revenue growth evaluation",
      "Cross-investment performance comparison",
    ],
    tips:
      "CAGR is great for comparing single-investment, single-redemption scenarios. For SIPs (multiple cash flows over time), use XIRR instead — CAGR will mis-state SIP returns because it doesn't account for the timing of each instalment. When comparing mutual funds, always use 5-year and 10-year CAGR over 1-year (which can be skewed by recent market moves). And remember: past CAGR is not a guarantee of future returns — it's a measurement, not a prediction.",
    faqs: [
      { q: "What's a good CAGR for mutual funds in India?", a: "Equity mutual funds have historically delivered 10–14% CAGR over 10+ year horizons. Anything consistently beating the index (after costs) is considered good. Debt funds typically deliver 6–8% CAGR." },
      { q: "Is CAGR the same as average return?", a: "No. Average return is the simple mean of yearly returns and ignores compounding. CAGR is the constant rate that would take you from start to end value — it accounts for compounding and is the more accurate metric for comparison." },
      { q: "What's the difference between CAGR and XIRR?", a: "CAGR works when there's a single investment and a single redemption. XIRR is used when there are multiple cash flows over time (e.g., SIPs, additional lumpsums) — it accounts for the timing of each instalment, giving a true money-weighted annualised return." },
      { q: "Can CAGR be negative?", a: "Yes. If the final value is less than the initial value, CAGR is negative — reflecting a net annualised loss. Useful for identifying underperforming investments." },
      { q: "What CAGR do top Indian mutual funds achieve?", a: "Top diversified equity funds have historically delivered 14–18% CAGR over 10–15 year periods, though past performance is not a guarantee. The Nifty 50 total-return CAGR has been ~12% over the last 20 years." },
      { q: "Should I use 1-year, 3-year, or 5-year CAGR for fund comparison?", a: "Use 5-year and 10-year CAGR for serious comparison. 1-year and 3-year CAGR can be skewed by recent market conditions. SEBI mandates that mutual funds disclose 1Y, 3Y, 5Y, and since-inception CAGR." },
      { q: "How does CAGR differ from simple return?", a: "Simple return = (Final − Initial)/Initial. It doesn't account for time. A 100% simple return in 2 years vs 10 years are very different — the 2-year case has 41% CAGR, the 10-year case only 7% CAGR. Always use CAGR for time-comparable analysis." },
      { q: "Is CAGR taxed in India?", a: "CAGR is a measurement, not an income. The underlying capital gains (Final − Initial) are taxable based on holding period and asset class — equity LTCG at 12.5% above ₹1.25L/year, etc." },
    ],
  },

  gst: {
    about:
      "The GST Calculator helps you compute Goods and Services Tax on any amount at any GST rate (5%, 12%, 18%, 28%) — whether you have the GST-inclusive total or the base (exclusive) amount. The calculator also splits the GST into CGST and SGST automatically for intra-state invoices, and instantly shows the net price, tax amount, and total. Ideal for small business owners, freelancers, traders, accountants, chartered accountants, GST consultants, and consumers reconciling everyday invoices.\n\nGST replaced India's earlier patchwork of central and state taxes (VAT, service tax, excise) when it rolled out in 2017, and now applies to almost every B2B and B2C transaction in India. This free online GST calculator is mobile-friendly and works for both exclusive and inclusive scenarios with one click. Backed by AMFI Registered MFD Nithin Finserv.",
    whatIs:
      "Goods and Services Tax (GST) is India's unified indirect tax on the supply of goods and services. It replaced multiple central and state taxes in 2017 and is governed by the GST Council. GST has a multi-slab structure — 0%, 5%, 12%, 18%, 28% — plus cess on luxury and sin goods. Intra-state transactions split GST into CGST (Central) + SGST (State); inter-state transactions are taxed as IGST (Integrated). Exports are zero-rated, imports are charged IGST.",
    howItWorks:
      "Exclusive (you have the base amount): GST = amount × rate / 100; Total = amount + GST. Inclusive (you have the total): Base = amount × 100 / (100 + rate); GST = amount − base. For intra-state supplies, CGST = SGST = GST / 2. For inter-state or imports, the full GST is IGST instead.",
    example:
      "Suppose you have an invoice of ₹11,800 inclusive of 18% GST. The base amount = ₹11,800 × 100/118 = ₹10,000. GST = ₹1,800. CGST = SGST = ₹900 each (for intra-state). For an exclusive scenario: ₹10,000 base + 18% GST = ₹1,800 GST + ₹10,000 = ₹11,800 total. Both scenarios reconcile to the same numbers but from different starting points — exactly what most invoicing workflows need.",
    howToUse: [
      "Enter the amount in rupees",
      "Pick the GST rate — 5%, 12%, 18%, or 28%",
      "Choose whether the amount is exclusive or inclusive of GST",
      "Read the base price, GST amount, CGST, SGST, and total",
      "Use the output directly in invoices, books of accounts, or tax filings",
    ],
    keyFeatures: [
      "Handles both inclusive and exclusive GST calculations",
      "Auto-splits into CGST and SGST",
      "All four standard GST slabs supported (5/12/18/28)",
      "Instant calculation with no rounding errors",
      "Free, mobile-friendly, no signup",
    ],
    benefits: [
      "Quick invoice generation and reconciliation",
      "Handles both inclusive and exclusive GST scenarios",
      "Auto-splits CGST/SGST for intra-state invoices",
      "All four standard GST rates supported (5/12/18/28)",
      "Useful for businesses, freelancers, and consumers",
      "Free, no signup — just instant results",
    ],
    useCases: [
      "Invoice generation for small business and freelancers",
      "GST reconciliation in books of accounts",
      "Verifying GST on retail purchases",
      "GST return filing preparation",
      "Quick mental-maths verification of e-commerce invoices",
    ],
    tips:
      "For e-commerce sellers, GST handling is typically automated by the platform but always verify the rates applied. If you're a service provider with turnover below ₹20 lakhs (₹10L in special category states), GST registration is not mandatory — but voluntary registration helps when claiming input tax credit. Composition scheme is available for small businesses with turnover up to ₹1.5 crores (₹75L for services) at simpler 1–6% GST rates without input credit. Always keep digital records of all invoices for at least 6 years per GST law.",
    faqs: [
      { q: "What are the GST rates in India?", a: "India has a multi-slab GST structure with rates of 0%, 5%, 12%, 18%, and 28%. Most goods and services fall in the 5–18% range. Luxury and sin goods are at 28% plus cess. Essentials like fresh food are at 0%." },
      { q: "What is the difference between CGST, SGST, and IGST?", a: "CGST is collected by the Centre, SGST by the State — both apply on intra-state (same-state) supplies, each at half the total GST rate. IGST is collected by the Centre on inter-state supplies and imports, at the full GST rate. All three reach the same total tax on the buyer." },
      { q: "How do I calculate reverse GST (exclude GST from a total)?", a: "Use this calculator's 'Inclusive of GST' option. The formula is base = amount × 100 / (100 + rate). For a ₹118 inclusive amount at 18% GST, the base is ₹100 and GST is ₹18." },
      { q: "Is GST applicable on mutual fund investments?", a: "GST is applicable on the management fees and TER (Total Expense Ratio) charged by mutual fund houses, not on the principal or returns. The fund's TER already accounts for GST, so you don't pay GST separately on your investment amount." },
      { q: "What is the GST threshold for small businesses?", a: "GST registration is mandatory if your annual turnover exceeds ₹40 lakhs for goods (₹20L for services). Special category states have lower thresholds (₹20L for goods, ₹10L for services). Voluntary registration is allowed below these thresholds." },
      { q: "What is the GST composition scheme?", a: "A simplified scheme for small businesses with turnover up to ₹1.5 crores (₹75L for services), where you pay GST at concessional rates (1–6%) without claiming input tax credit. Reduces compliance burden but limits B2B sales." },
      { q: "Can I claim GST refund?", a: "Yes — in specific cases like exports (zero-rated), inverted duty structure, excess input tax credit, or tax paid in error. Refund applications must be filed within 2 years from the relevant date." },
      { q: "What is e-invoicing under GST?", a: "Mandatory electronic invoicing for businesses with turnover above ₹5 crores (as of 2024). Invoices must be reported on the IRP portal before issue and carry an Invoice Reference Number (IRN). Smaller businesses may opt in voluntarily." },
    ],
  },

  gratuity: {
    about:
      "The Gratuity Calculator computes the gratuity amount payable to a salaried employee on resignation, retirement, or death after 5 or more years of continuous service. Gratuity is governed by the Payment of Gratuity Act, 1972, and is tax-free up to ₹20 lakhs cumulative across all employers in your lifetime. This India-specific gratuity calculator handles both employees covered under the Act (most private companies with 10+ employees) and those not covered, and shows the exact formula used so you can verify the calculation against your HR's number.\n\nKnowing your gratuity before resignation or retirement helps you negotiate exit timing, plan reinvestment of the lumpsum (often ₹5–20 lakhs for mid-career employees), and avoid surprises. Backed by AMFI Registered MFD Nithin Finserv, ARN: 307760.",
    whatIs:
      "Gratuity is a one-time lumpsum payment by an employer to an employee on completion of 5 or more years of continuous service, on resignation, retirement, death, or disablement. It's a statutory benefit under the Payment of Gratuity Act, 1972, applicable to establishments with 10 or more employees. The amount is based on the employee's last drawn salary (basic + DA) and years of service. Up to ₹20 lakhs cumulative across employers is tax-free in your lifetime.",
    howItWorks:
      "Covered under the Gratuity Act: Gratuity = (Last drawn monthly salary × 15 × Years of service) / 26 — the 26 reflects 26 working days per month. Not covered: Gratuity = (Last drawn salary × 15 × Years of service) / 30 — 30 calendar days per month. 'Salary' here means basic + DA only (not full CTC). Service years rounded up if the final year crosses 6 months.",
    example:
      "Consider an employee with ₹60,000 basic + DA salary after 12 years of continuous service in a company covered under the Gratuity Act. Gratuity = (60,000 × 15 × 12) / 26 = ₹4.15 lakhs. The entire ₹4.15L is tax-free since it's well below the ₹20L lifetime limit. If the same employee was at a company not covered under the Act, gratuity = (60,000 × 15 × 12) / 30 = ₹3.6 lakhs — about 13.5% less, illustrating the importance of being at a covered employer.",
    howToUse: [
      "Enter your last drawn monthly salary (basic + DA, not full CTC)",
      "Enter total completed years of continuous service",
      "Choose whether your employer is covered under the Gratuity Act",
      "Read the gratuity payable and the tax-free portion",
      "Plan reinvestment of the lumpsum — equity SIPs, FDs, or balanced funds",
    ],
    keyFeatures: [
      "Act-covered and non-covered formula support",
      "Salary-and-tenure-based instant calculation",
      "Tax-free limit awareness (₹20L lifetime)",
      "Compliant with Payment of Gratuity Act 1972",
      "Free, mobile-friendly, no signup",
    ],
    benefits: [
      "Know your exact entitlement before negotiating exit or retirement",
      "Plan reinvestment of the gratuity lumpsum (often ₹5–20 lakhs at mid-career)",
      "Helps decide between switching jobs (resetting the 5-year clock) and staying",
      "Useful for HR professionals and finance teams for payroll calculations",
      "Tax-free portion identification",
    ],
    useCases: [
      "Pre-retirement exit planning",
      "Mid-career job-switch decision (vs staying for gratuity)",
      "Resignation timing and notice period planning",
      "Estate planning for family in case of unfortunate death of employee",
      "Reinvestment planning for the gratuity lumpsum",
    ],
    tips:
      "If you're close to completing 5 years at your current employer (e.g., 4.5 years), it almost always pays to stay till 5 years — the gratuity payout from year 5 is significantly more than what you'd save with an earlier exit. The 5-year clock resets when you switch employers, so frequent job-hopping costs you cumulative gratuity entitlements. For high-paying roles, gratuity often exceeds the ₹20L tax-free limit — the excess is taxed at slab rate. Plan reinvestment of the gratuity lumpsum thoughtfully — equity mutual fund SIPs are a strong choice for long horizons, debt funds for shorter ones.",
    faqs: [
      { q: "Is gratuity taxable in India?", a: "Tax-free up to ₹20 lakhs cumulative across all employers in your lifetime. Anything above ₹20L is taxed at your slab rate. For government employees, the entire gratuity is fully tax-free without any limit." },
      { q: "What if I leave my job before 5 years?", a: "Generally no gratuity is payable. Exception: in case of death or disablement during service, the 5-year minimum is waived and the family/employee receives gratuity proportionate to years served." },
      { q: "Does part-year service count?", a: "Yes, but only if you've served more than 6 months in the final year — that gets rounded up to a full year. Under 6 months in the final year, it's ignored. Example: 4 years 7 months = 5 years for gratuity calculation." },
      { q: "How can I check if my employer is covered under the Gratuity Act?", a: "The Act applies to establishments with 10+ employees (current or at any time in the past 12 months). Most private companies, factories, mines, plantations, and ports are covered. If unsure, ask HR or check your offer letter / employee handbook." },
      { q: "Where should I invest my gratuity lumpsum?", a: "Depends on age and existing portfolio. Near retirement: split between debt mutual funds, Senior Citizen Savings Scheme, and balanced advantage funds. Mid-career: equity mutual fund SIP-on-lumpsum for long-horizon growth. Consult an AMFI Registered MFD for personalised allocation." },
      { q: "When is gratuity paid out?", a: "Within 30 days from the date it becomes payable (i.e., last working day). If the employer delays, simple interest at govt-notified rate is payable on the delayed amount." },
      { q: "Does gratuity include bonus or commissions?", a: "No. Gratuity is computed only on basic + DA, not on bonus, commissions, HRA, or other allowances. This is why salary structuring with high basic boosts gratuity entitlement." },
      { q: "Can the company refuse to pay gratuity?", a: "Only in specific circumstances — termination for misconduct involving moral turpitude, riotous conduct, or financial loss to the company (and even then, only the portion proportionate to the loss can be withheld). Most disputes go to the Labour Commissioner for resolution." },
      { q: "What if I die during service?", a: "Gratuity is paid to the nominee or legal heirs even if 5 years aren't completed. The amount is calculated on the same formula, with the years of completed service used as-is." },
    ],
  },
};
