import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Blog from "@/lib/models/Blog";

function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

export async function GET() {
  try {
    await connectDB();

    const blogs = await Blog.find().sort({
      createdAt: -1,
    });

    return NextResponse.json(blogs);
  } catch (error) {
    console.log(error);

    return NextResponse.json(
      { error: "Failed to fetch blogs" },
      { status: 500 }
    );
  }
}

export async function POST(req: Request) {
  try {
    await connectDB();

    const body = await req.json();

    // Auto-generate slug from title if not provided
    if (!body.slug && body.title) {
      body.slug = generateSlug(body.title);
    }

    // Ensure slug is unique by appending a number if needed
    let slug = body.slug;
    let count = 1;
    while (await Blog.findOne({ slug })) {
      slug = `${body.slug}-${count}`;
      count++;
    }
    body.slug = slug;

    const blog = await Blog.create(body);

    return NextResponse.json(blog);
  } catch (error) {
    console.log("MONGODB ERROR:", error);

    return NextResponse.json(
      {
        error: "Failed to create blog",
        details:
          error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}