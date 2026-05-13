"use client";

import { Suspense, useEffect, useState } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { loadPosts, type BlogPost } from "@/lib/blog";

export default function BlogPage() {
  return (
    <Suspense fallback={<div className="px-6 lg:px-12 pt-28 pb-20 text-sm text-gray">Loading…</div>}>
      <BlogPageInner />
    </Suspense>
  );
}

function BlogPageInner() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const sp = useSearchParams();
  const id = sp.get("id");

  useEffect(() => setPosts(loadPosts()), []);

  if (id) return <SinglePost id={id} posts={posts} />;
  return <BlogList posts={posts} />;
}

function BlogList({ posts }: { posts: BlogPost[] }) {
  return (
    <>
      <div className="subpage-hero">
        <div className="subpage-in">
          <div className="subpage-tag">Investment Insights</div>
          <h1 className="subpage-title">Nithin Finserv Blog</h1>
          <p className="subpage-sub">Practical investment guidance, market updates, and SIP tips from your AMFI-registered distributor in Bengaluru.</p>
        </div>
      </div>

      <section className="px-6 lg:px-12 pt-8 pb-16">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {posts.map((p) => (
              <Link key={p.id} href={`/blog?id=${p.id}`} className="bg-white border border-border rounded-[14px] overflow-hidden hover:border-teal hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(0,0,0,0.07)] transition-all block no-underline">
                <div className="h-[175px] bg-light flex items-center justify-center text-[3rem] relative overflow-hidden">
                  {p.image ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={p.image} alt={p.title} className="w-full h-full object-cover" />
                  ) : (
                    <span>{p.emoji || "📰"}</span>
                  )}
                  <span className="absolute top-3 left-3 bg-teal text-white text-[10px] font-medium px-2.5 py-0.5 rounded-full">{p.cat}</span>
                </div>
                <div className="p-5">
                  <div className="text-[10.5px] text-gray mb-1.5">📅 {p.date} · ⏱ {p.readTime} min read</div>
                  <div className="text-sm font-medium text-navy leading-[1.5] mb-2">{p.title}</div>
                  <div className="text-xs text-gray leading-[1.65]">{p.excerpt}</div>
                  <span className="inline-flex items-center gap-1 text-teal text-xs font-medium mt-3.5">Read more →</span>
                </div>
              </Link>
            ))}
          </div>
          <p className="text-[10.5px] text-gray mt-8 leading-[1.6] border-t border-border pt-4">
            ⚠️ Blog content is for educational and informational purposes only. It does not constitute investment advice. Nithin Finserv is a Mutual Fund Distributor — not a SEBI Registered Investment Adviser. Mutual Fund investments are subject to market risks. Read all scheme related documents carefully before investing.
          </p>
        </div>
      </section>
    </>
  );
}

function SinglePost({ id, posts }: { id: string; posts: BlogPost[] }) {
  const router = useRouter();
  const post = posts.find((p) => String(p.id) === String(id));

  useEffect(() => {
    if (post) document.title = (post.metaTitle?.trim() || post.title) + " | Nithin Finserv";
  }, [post]);

  if (posts.length === 0) {
    return <div className="px-6 lg:px-12 pt-28 pb-20"><p className="text-sm text-gray">Loading…</p></div>;
  }

  if (!post) {
    return (
      <div className="px-6 lg:px-12 pt-28 pb-20 text-center">
        <h1 className="font-serif text-2xl text-navy mb-2">Post not found</h1>
        <p className="text-sm text-gray mb-6">The blog post you&apos;re looking for doesn&apos;t exist.</p>
        <Link href="/blog" className="btn-primary">Back to blog</Link>
      </div>
    );
  }

  return (
    <div className="bg-white px-6 lg:px-12 pt-28 pb-16">
      <div className="max-w-[800px] mx-auto">
        <button onClick={() => router.push("/blog")} className="bg-transparent border-0 text-teal text-[13px] cursor-pointer mb-6 flex items-center gap-1.5">← Back to blog</button>
        <div className="w-full h-[280px] rounded-[14px] mb-7 bg-light flex items-center justify-center text-[4rem] overflow-hidden">
          {post.image ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
          ) : (
            <span>{post.emoji || "📰"}</span>
          )}
        </div>
        <h1 className="font-serif text-[clamp(1.5rem,3vw,2rem)] font-bold text-navy mb-3 leading-[1.25]">{post.title}</h1>
        <div className="flex gap-4 flex-wrap text-xs text-gray mb-8 pb-5 border-b border-border">
          <span>📅 {post.date}</span>
          <span>📁 {post.cat}</span>
          <span>⏱ {post.readTime} min read</span>
        </div>
        <div className="text-[14.5px] text-gray leading-[1.9] prose-blog" dangerouslySetInnerHTML={{ __html: post.body }} />
        <div className="bg-cream border-l-4 border-teal rounded-r-lg px-5 py-4 text-xs text-navy mt-8 leading-[1.7]">
          <strong>Disclaimer:</strong> This article is for informational purposes only and does not constitute investment advice. Mutual Fund investments are subject to market risks. Read all scheme related documents carefully. Nithin Finserv is an AMFI Registered Mutual Fund Distributor — not a SEBI Registered Investment Adviser.
        </div>
      </div>
    </div>
  );
}
