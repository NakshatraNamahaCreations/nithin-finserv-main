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

export default function BlogPage() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await fetch("/api/blogs");
        const data = await res.json();
        setPosts(Array.isArray(data) ? data : []);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <>
      <div className="subpage-hero">
        <div className="subpage-in">
          <div className="subpage-tag">Investment Insights</div>
          <h1 className="subpage-title">Nithin Finserv Blog</h1>
          <p className="subpage-sub">
            Practical investment guidance, market updates, and SIP tips from
            your AMFI-registered distributor in Bengaluru.
          </p>
        </div>
      </div>

      <section className="px-6 lg:px-12 pt-8 pb-16">
        <div className="max-w-[1200px] mx-auto">

          {loading ? (
            <p className="text-gray text-sm text-center py-12">Loading posts...</p>
          ) : posts.length === 0 ? (
            <p className="text-gray text-sm text-center py-12">No blog posts found.</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {posts.map((p) => (
                <Link
                  key={p._id}
                  href={`/blog/${p.slug}`}
                  className="bg-white border border-border rounded-[14px] overflow-hidden hover:border-teal hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(0,0,0,0.07)] transition-all block no-underline"
                >
                  <div className="h-[175px] bg-light flex items-center justify-center text-[3rem] relative overflow-hidden">
                    {p.image ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={p.image}
                        alt={p.title}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <span>{p.emoji || "📰"}</span>
                    )}
                    <span className="absolute top-3 left-3 bg-teal text-white text-[10px] font-medium px-2.5 py-0.5 rounded-full">
                      {p.cat}
                    </span>
                  </div>
                  <div className="p-5">
                    <div className="text-[10.5px] text-gray mb-1.5">
                      📅 {p.date} · ⏱ {p.readTime} min read
                    </div>
                    <div className="text-sm font-medium text-navy leading-[1.5] mb-2">
                      {p.title}
                    </div>
                    <div className="text-xs text-gray leading-[1.65]">
                      {p.excerpt}
                    </div>
                    <span className="inline-flex items-center gap-1 text-teal text-xs font-medium mt-3.5">
                      Read more →
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          )}

          <p className="text-[10.5px] text-gray mt-8 leading-[1.6] border-t border-border pt-4">
            ⚠️ Blog content is for educational and informational purposes only.
            It does not constitute investment advice. Nithin Finserv is a Mutual
            Fund Distributor — not a SEBI Registered Investment Adviser. Mutual
            Fund investments are subject to market risks. Read all scheme related
            documents carefully before investing.
          </p>
        </div>
      </section>
    </>
  );
}