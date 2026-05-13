import { NextResponse } from "next/server";
import { v2 as cloudinary, type UploadApiResponse } from "cloudinary";

export const runtime = "nodejs";

const MAX_BYTES = 5 * 1024 * 1024;

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true,
});

export async function POST(req: Request) {
  if (!process.env.CLOUDINARY_CLOUD_NAME || !process.env.CLOUDINARY_API_KEY || !process.env.CLOUDINARY_API_SECRET) {
    return NextResponse.json(
      { ok: false, error: "Cloudinary is not configured. Set CLOUDINARY_CLOUD_NAME / CLOUDINARY_API_KEY / CLOUDINARY_API_SECRET." },
      { status: 500 }
    );
  }

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

  const buf = Buffer.from(await file.arrayBuffer());

  try {
    const result = await new Promise<UploadApiResponse>((resolve, reject) => {
      cloudinary.uploader
        .upload_stream(
          { folder: "nithin-finserv/blog", resource_type: "image" },
          (err, res) => {
            if (err || !res) reject(err ?? new Error("Cloudinary returned no response"));
            else resolve(res);
          }
        )
        .end(buf);
    });

    return NextResponse.json({ ok: true, url: result.secure_url });
  } catch (err) {
    console.error("Cloudinary upload failed:", err);
    const msg = err instanceof Error ? err.message : "Upload failed";
    return NextResponse.json({ ok: false, error: msg }, { status: 502 });
  }
}
