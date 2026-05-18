"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";

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

export default function BlogPostPage() {
  const params = useParams<{ slug: string }>();
  const slug = params.slug;
  const router = useRouter();

  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    if (!slug) return;

    const fetchPost = async () => {
      try {
        const res = await fetch(`/api/blogs/slug/${slug}`);
        if (!res.ok) {
          setNotFound(true);
          return;
        }
        const data = await res.json();
        setPost(data);
      } catch (error) {
        console.log(error);
        setNotFound(true);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [slug]);

  const enhancedBody = post
    ? post.body.replace(/<a\b([^>]*)>/gi, (match, attrs) => {
        const hasTarget = /\btarget=/i.test(attrs);
        const hasRel = /\brel=/i.test(attrs);
        return `<a${attrs}${hasTarget ? "" : ' target="_blank"'}${hasRel ? "" : ' rel="noopener noreferrer"'}>`;
      })
    : "";

  useEffect(() => {
    if (post) {
      document.title = (post.metaTitle?.trim() || post.title) + " | Nithin Finserv";
    }
  }, [post]);

  if (loading) {
    return (
      <div className="px-6 lg:px-12 pt-28 pb-20">
        <p className="text-sm text-gray">Loading…</p>
      </div>
    );
  }

  if (notFound || !post) {
    return (
      <div className="px-6 lg:px-12 pt-28 pb-20 text-center">
        <h1 className="font-serif text-2xl text-navy mb-2">Post not found</h1>
        <p className="text-sm text-gray mb-6">
          The blog post you&apos;re looking for doesn&apos;t exist.
        </p>
        <Link href="/blog" className="btn-primary">
          Back to blog
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-white px-6 lg:px-12 pt-28 pb-16">
      <div className="max-w-[800px] mx-auto">
        <button
          onClick={() => router.push("/blog")}
          className="bg-transparent border-0 text-teal text-[13px] cursor-pointer mb-6 flex items-center gap-1.5"
        >
          ← Back to blog
        </button>
        <div className="w-full h-[280px] rounded-[14px] mb-7 bg-light flex items-center justify-center text-[4rem] overflow-hidden">
          {post.image ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover"
            />
          ) : (
            <span>{post.emoji || "📰"}</span>
          )}
        </div>
        <h1 className="font-serif text-[clamp(1.5rem,3vw,2rem)] font-bold text-navy mb-3 leading-[1.25]">
          {post.title}
        </h1>
        <div className="flex gap-4 flex-wrap text-xs text-gray mb-8 pb-5 border-b border-border">
          <span>📅 {post.date}</span>
          <span>📁 {post.cat}</span>
          <span>⏱ {post.readTime} min read</span>
        </div>
        <div
          className="text-[14.5px] text-gray leading-[1.9] prose-blog"
          dangerouslySetInnerHTML={{ __html: enhancedBody }}
        />
      </div>
    </div>
  );
}