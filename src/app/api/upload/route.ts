import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";
import { randomBytes } from "crypto";

export const runtime = "nodejs";

const MAX_BYTES = 5 * 1024 * 1024;
const ALLOWED_EXT: Record<string, true> = {
  png: true, jpg: true, jpeg: true, gif: true, webp: true, svg: true, avif: true,
};

function safeExt(filename: string, mime: string): string | null {
  const fromName = filename.split(".").pop()?.toLowerCase() ?? "";
  if (fromName && ALLOWED_EXT[fromName]) return fromName === "jpeg" ? "jpg" : fromName;
  const fromMime = (mime.split("/")[1] ?? "").toLowerCase();
  if (ALLOWED_EXT[fromMime]) return fromMime === "jpeg" ? "jpg" : fromMime;
  return null;
}

export async function POST(req: Request) {
  let form: FormData;
  try {
    form = await req.formData();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid form data" }, { status: 400 });
  }

  const file = form.get("file");
  if (!(file instanceof File)) {
    return NextResponse.json({ ok: false, error: "Missing file" }, { status: 400 });
  }

  if (!file.type.startsWith("image/")) {
    return NextResponse.json({ ok: false, error: "Only image uploads allowed" }, { status: 415 });
  }

  if (file.size > MAX_BYTES) {
    return NextResponse.json({ ok: false, error: "File exceeds 5MB" }, { status: 413 });
  }

  const ext = safeExt(file.name, file.type);
  if (!ext) {
    return NextResponse.json({ ok: false, error: "Unsupported image format" }, { status: 415 });
  }

  const uploadDir = path.join(process.cwd(), "public", "uploads");
  await fs.mkdir(uploadDir, { recursive: true });

  const name = `${Date.now()}-${randomBytes(6).toString("hex")}.${ext}`;
  const fullPath = path.join(uploadDir, name);

  const buf = Buffer.from(await file.arrayBuffer());
  await fs.writeFile(fullPath, buf);

  return NextResponse.json({ ok: true, url: `/uploads/${name}` });
}
