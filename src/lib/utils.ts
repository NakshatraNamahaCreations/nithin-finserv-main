// ── Indian numbering helpers ──

export function fmt(n: number): string {
  if (Number.isNaN(n)) return "₹0";
  if (n >= 10000000) return "₹" + (n / 10000000).toFixed(2) + " Cr";
  if (n >= 100000) return "₹" + (n / 100000).toFixed(2) + " L";
  if (n >= 1000) return "₹" + (n / 1000).toFixed(1) + "K";
  return "₹" + Math.round(n).toLocaleString("en-IN");
}

export function fmtFull(n: number): string {
  if (!Number.isFinite(n)) return "₹0";
  return "₹" + Math.round(n).toLocaleString("en-IN");
}

export function fmtN(n: number): string {
  if (n >= 10000000) return (n / 10000000).toFixed(2) + " Cr";
  if (n >= 100000) return (n / 100000).toFixed(2) + " L";
  if (n >= 1000) return (n / 1000).toFixed(1) + "K";
  return Math.round(n).toLocaleString("en-IN");
}

// ── Number → Indian-system words (e.g. 1,25,000 → "One Lakh Twenty Five Thousand") ──

const ONES = ["", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"];
const TEENS = ["Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen"];
const TENS = ["", "", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"];

function below1000(n: number): string {
  if (n === 0) return "";
  if (n < 10) return ONES[n];
  if (n < 20) return TEENS[n - 10];
  if (n < 100) return TENS[Math.floor(n / 10)] + (n % 10 ? " " + ONES[n % 10] : "");
  return ONES[Math.floor(n / 100)] + " Hundred" + (n % 100 ? " " + below1000(n % 100) : "");
}

export function numberToIndianWords(num: number): string {
  if (!Number.isFinite(num)) return "";
  num = Math.round(num);
  if (num === 0) return "Zero";
  if (num < 0) return "Minus " + numberToIndianWords(-num);

  const crore = Math.floor(num / 10000000);
  const lakh = Math.floor((num % 10000000) / 100000);
  const thousand = Math.floor((num % 100000) / 1000);
  const rest = num % 1000;

  const parts: string[] = [];
  if (crore > 0) parts.push(below1000(crore) + " Crore");
  if (lakh > 0) parts.push(below1000(lakh) + " Lakh");
  if (thousand > 0) parts.push(below1000(thousand) + " Thousand");
  if (rest > 0) parts.push(below1000(rest));
  return parts.join(" ");
}
