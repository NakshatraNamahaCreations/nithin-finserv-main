import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// NOTE: API routes are incompatible with `output: 'export'` in next.config.mjs.
// Remove that line before deploying anywhere that needs this endpoint to work.

export const runtime = "nodejs";

const CORS_HEADERS: Record<string, string> = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
  "Access-Control-Max-Age": "86400",
};

function jsonWithCors(body: unknown, init?: { status?: number }) {
  return NextResponse.json(body, { status: init?.status ?? 200, headers: CORS_HEADERS });
}

export async function OPTIONS() {
  return new NextResponse(null, { status: 204, headers: CORS_HEADERS });
}

interface ContactPayload {
  name?: string;
  mobile?: string;
  email?: string;
  interest?: string;
  budget?: string;
}

function escapeHtml(s: string): string {
  return s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);
}

export async function POST(req: Request) {
  let payload: ContactPayload;
  try {
    payload = (await req.json()) as ContactPayload;
  } catch {
    return jsonWithCors({ ok: false, error: "Invalid JSON" }, { status: 400 });
  }

  const name = (payload.name ?? "").trim();
  const mobile = (payload.mobile ?? "").trim();
  if (!name || !mobile) {
    return jsonWithCors({ ok: false, error: "Name and mobile are required" }, { status: 400 });
  }

  const {
    SMTP_HOST, SMTP_PORT, SMTP_SECURE, SMTP_USER, SMTP_PASS,
    CONTACT_FROM, CONTACT_TO,
  } = process.env;

  if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS || !CONTACT_TO) {
    console.error("Missing SMTP env vars. See .env.local.example for the full list.");
    return jsonWithCors({ ok: false, error: "Email service is not configured." }, { status: 500 });
  }

  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: Number(SMTP_PORT),
    secure: SMTP_SECURE === "true",
    auth: { user: SMTP_USER, pass: SMTP_PASS },
  });

  const safe = {
    name: escapeHtml(name),
    mobile: escapeHtml(mobile),
    email: escapeHtml(payload.email ?? ""),
    interest: escapeHtml(payload.interest ?? ""),
    budget: escapeHtml(payload.budget ?? ""),
  };

  const html = `
    <div style="font-family:DM Sans,Arial,sans-serif;color:#0d2137;max-width:560px">
      <h2 style="color:#10b981;font-family:'Playfair Display',serif">New consultation request</h2>
      <table style="width:100%;border-collapse:collapse;font-size:13px">
        <tr><td style="padding:6px 8px;color:#5f6b78;width:120px">Name</td><td style="padding:6px 8px;font-weight:600">${safe.name}</td></tr>
        <tr><td style="padding:6px 8px;color:#5f6b78">Mobile</td><td style="padding:6px 8px;font-weight:600">${safe.mobile}</td></tr>
        <tr><td style="padding:6px 8px;color:#5f6b78">Email</td><td style="padding:6px 8px">${safe.email || "—"}</td></tr>
        <tr><td style="padding:6px 8px;color:#5f6b78">Interested in</td><td style="padding:6px 8px">${safe.interest || "—"}</td></tr>
        <tr><td style="padding:6px 8px;color:#5f6b78">Monthly budget</td><td style="padding:6px 8px">${safe.budget || "—"}</td></tr>
      </table>
      <p style="font-size:11px;color:#5f6b78;margin-top:20px">Submitted via nithinfinserv.in contact form.</p>
    </div>
  `;

  const text = [
    "New consultation request",
    `Name: ${name}`,
    `Mobile: ${mobile}`,
    `Email: ${payload.email ?? "—"}`,
    `Interested in: ${payload.interest ?? "—"}`,
    `Monthly budget: ${payload.budget ?? "—"}`,
  ].join("\n");

  try {
    await transporter.sendMail({
      from: CONTACT_FROM || SMTP_USER,
      to: CONTACT_TO,
      replyTo: payload.email || undefined,
      subject: `New consultation: ${name}`,
      text,
      html,
    });
  } catch (err) {
    console.error("Nodemailer send failed:", err);
    return jsonWithCors({ ok: false, error: "Failed to send email." }, { status: 502 });
  }

  return jsonWithCors({ ok: true });
}
