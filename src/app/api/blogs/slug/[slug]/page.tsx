// src/app/blog/[slug]/page.tsx
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

type BlogPost = {
  _id?: string;
  title: string;
  slug: string;
  cat: string;
  excerpt: string;
  body: string;
  emoji: string;
  readTime: number;
  image?: string;
  metaTitle?: string;
  metaDesc?: string;
  keywords?: string;
  date: string;
};

export default function BlogDetailPage({ params }: { params: { slug: string } }) {
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const res = await fetch(`/api/blogs/slug/${params.slug}`);
        if (!res.ok) throw new Error("Not found");
        const data = await res.json();
        setPost(data);
      } catch {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [params.slug]);

  if (loading) return <div className="text-center py-20 text-gray-500">Loading...</div>;
  if (error || !post) return <div className="text-center py-20 text-red-500">Post not found.</div>;

  return (
    <>
      {/* Hero */}
      <div className="subpage-hero">
        <div className="subpage-in">
          <div className="subpage-tag">{post.cat}</div>
          <h1 className="subpage-title">{post.title}</h1>
          <p className="subpage-sub">
            📅 {post.date} · ⏱ {post.readTime} min read
          </p>
        </div>
      </div>

      <section className="px-6 lg:px-12 pt-8 pb-16">
        <div className="max-w-[780px] mx-auto">

          {/* Back link */}
          <Link href="/blog" className="text-teal text-sm font-medium inline-flex items-center gap-1 mb-6 hover:underline">
            ← Back to Blog
          </Link>

          {/* Cover image or emoji */}
          <div className="w-full h-[260px] bg-light rounded-[14px] overflow-hidden flex items-center justify-center text-[5rem] mb-8">
            {post.image ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
            ) : (
              <span>{post.emoji || "📰"}</span>
            )}
          </div>

          {/* Body */}
          <article
            className="prose prose-sm max-w-none text-navy leading-[1.8]"
            dangerouslySetInnerHTML={{ __html: post.body }}
          />

         
        </div>
      </section>
    </>
  );
}