"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  DEFAULT_ADMIN_PASS,
  loadPosts,
  loadSettings,
  savePosts,
  saveSettings,
  type AdminSettings,
  type BlogPost,
} from "@/lib/blog";

type Tab = "new" | "manage" | "seo";

const CATS = ["SIP & Investing", "Tax Saving", "Market Update", "Insurance", "Retirement", "Beginners Guide"];

const emptyDraft = (): Omit<BlogPost, "id" | "date"> => ({
  title: "",
  cat: CATS[0],
  excerpt: "",
  body: "",
  emoji: "📰",
  readTime: 5,
  metaDesc: "",
  keywords: "",
});

export default function AdminPanel() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [pwd, setPwd] = useState("");
  const [pwdError, setPwdError] = useState(false);

  const [tab, setTab] = useState<Tab>("new");
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [settings, setSettings] = useState<AdminSettings>({});

  const [draft, setDraft] = useState<Omit<BlogPost, "id" | "date">>(emptyDraft());
  const [status, setStatus] = useState("");

  useEffect(() => {
    setPosts(loadPosts());
    setSettings(loadSettings());
  }, []);

  const tryLogin = () => {
    const stored = settings.adminPass || DEFAULT_ADMIN_PASS;
    if (pwd === stored) {
      setLoggedIn(true);
      setPwdError(false);
    } else {
      setPwdError(true);
    }
  };

  const publish = () => {
    if (!draft.title.trim()) {
      setStatus("⚠️ Title is required");
      return;
    }
    const post: BlogPost = {
      id: Date.now(),
      date: new Date().toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" }),
      ...draft,
      emoji: draft.emoji || "📰",
      readTime: Number(draft.readTime) || 5,
    };
    const next = [post, ...posts];
    setPosts(next);
    savePosts(next);
    setDraft(emptyDraft());
    setStatus("✅ Published!");
    setTimeout(() => setStatus(""), 3000);
  };

  const remove = (id: number) => {
    if (!confirm("Delete this post?")) return;
    const next = posts.filter((p) => p.id !== id);
    setPosts(next);
    savePosts(next);
  };

  const edit = (id: number) => {
    const p = posts.find((x) => x.id === id);
    if (!p) return;
    const next = posts.filter((x) => x.id !== id);
    setPosts(next);
    savePosts(next);
    setDraft({
      title: p.title, cat: p.cat, excerpt: p.excerpt, body: p.body,
      emoji: p.emoji, readTime: p.readTime,
      metaDesc: p.metaDesc ?? "", keywords: p.keywords ?? "",
    });
    setTab("new");
  };

  const persistSettings = () => {
    saveSettings(settings);
    if (settings.seoTitle) document.title = settings.seoTitle;
    setStatus("✅ Saved!");
    setTimeout(() => setStatus(""), 2500);
  };

  return (
    <div className="bg-white rounded-[18px] p-8 sm:p-10 w-full max-w-[760px] mx-auto border border-border shadow-[0_4px_24px_rgba(0,0,0,0.04)]">
      <div className="flex items-center justify-between mb-7">
        <div className="font-serif text-[1.35rem] font-bold text-navy">🔐 Blog Admin Panel</div>
        <Link href="/" className="text-[12px] text-gray hover:text-teal transition-colors no-underline">← Back to site</Link>
      </div>

      {!loggedIn ? (
        <div className="max-w-[340px] mx-auto text-center py-4">
          <div className="font-serif text-[1.3rem] font-bold text-navy mb-1.5">Admin Login</div>
          <p className="text-xs text-gray mb-6">Enter your admin password to access the blog management panel.</p>

          <Field label="Password">
            <input
              type="password"
              value={pwd}
              onChange={(e) => { setPwd(e.target.value); setPwdError(false); }}
              onKeyDown={(e) => { if (e.key === "Enter") tryLogin(); }}
              placeholder="Enter admin password"
              className={`w-full px-3.5 py-2.5 border rounded-[7px] text-[13px] text-navy outline-none transition-colors ${pwdError ? "border-red focus:border-red" : "border-border focus:border-teal"}`}
              autoFocus
            />
            {pwdError && <p className="text-[11px] text-red mt-1.5">Incorrect password. Try the default below.</p>}
          </Field>

          <button onClick={tryLogin} className="w-full bg-teal hover:bg-teal-2 text-white py-3 rounded-[7px] text-[13px] font-medium transition-colors mt-2">Login →</button>
          {/* <p className="text-[11px] text-gray mt-3">Default password: <strong className="text-navy">{DEFAULT_ADMIN_PASS}</strong></p> */}
        </div>
      ) : (
        <>
          <div className="flex gap-2 mb-6 border-b border-border pb-3 flex-wrap">
            <TabBtn active={tab === "new"} onClick={() => setTab("new")}>✏️ New post</TabBtn>
            <TabBtn active={tab === "manage"} onClick={() => setTab("manage")}>📋 Manage posts</TabBtn>
            <TabBtn active={tab === "seo"} onClick={() => setTab("seo")}>🔍 SEO settings</TabBtn>
          </div>

          {tab === "new" && (
            <div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Field label="Post title *">
                  <Input value={draft.title} onChange={(v) => setDraft({ ...draft, title: v })} placeholder="e.g. Why SIP is better than FD in 2026" />
                </Field>
                <Field label="Category">
                  <select value={draft.cat} onChange={(e) => setDraft({ ...draft, cat: e.target.value })} className="w-full px-3.5 py-2.5 border border-border focus:border-teal rounded-[7px] text-[13px] text-navy outline-none transition-colors bg-white">
                    {CATS.map((c) => <option key={c}>{c}</option>)}
                  </select>
                </Field>
              </div>
              <Field label="Short excerpt (for listing)">
                <Input value={draft.excerpt} onChange={(v) => setDraft({ ...draft, excerpt: v })} placeholder="A 1-2 line summary of the post" />
              </Field>
              <Field label="Post body (HTML supported)">
                <textarea
                  value={draft.body}
                  onChange={(e) => setDraft({ ...draft, body: e.target.value })}
                  placeholder="Write your full blog post here. You can use <h2>, <p>, <ul>, <li> tags."
                  className="w-full px-3.5 py-2.5 border border-border focus:border-teal rounded-[7px] text-[13px] text-navy outline-none transition-colors min-h-[130px] resize-y font-sans"
                />
              </Field>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Field label="Post emoji / icon">
                  <Input value={draft.emoji} onChange={(v) => setDraft({ ...draft, emoji: v })} placeholder="e.g. 📈" />
                </Field>
                <Field label="Read time (mins)">
                  <input type="number" value={draft.readTime} min={1} max={30} onChange={(e) => setDraft({ ...draft, readTime: Number(e.target.value) })} className="w-full px-3.5 py-2.5 border border-border focus:border-teal rounded-[7px] text-[13px] text-navy outline-none transition-colors" />
                </Field>
              </div>
              <Field label="SEO Meta description (160 chars max)">
                <Input value={draft.metaDesc ?? ""} onChange={(v) => setDraft({ ...draft, metaDesc: v })} placeholder="SEO description for this post — shown in Google search results" maxLength={160} />
              </Field>
              <Field label="SEO Keywords (comma separated)">
                <Input value={draft.keywords ?? ""} onChange={(v) => setDraft({ ...draft, keywords: v })} placeholder="SIP calculator, mutual fund Bengaluru, ELSS 2026" />
              </Field>
              <div className="flex gap-3 items-center mt-2">
                <button onClick={publish} className="bg-teal hover:bg-teal-2 text-white py-3 px-7 rounded-[7px] text-[13px] font-medium transition-colors">🚀 Publish post</button>
                <span className="text-xs text-gray">{status}</span>
              </div>
            </div>
          )}

          {tab === "manage" && (
            <div className="flex flex-col gap-3">
              {posts.length === 0 ? (
                <p className="text-[13px] text-gray">No posts yet. Create your first post.</p>
              ) : (
                posts.map((p) => (
                  <div key={p.id} className="bg-cream rounded-[9px] px-5 py-4 flex items-center justify-between gap-4">
                    <div>
                      <div className="text-[13px] font-medium text-navy">{p.emoji} {p.title}</div>
                      <div className="text-[11px] text-gray mt-0.5">{p.cat} · {p.date}</div>
                    </div>
                    <div className="flex gap-2 shrink-0">
                      <button onClick={() => edit(p.id)} className="bg-light text-teal border border-teal text-[11px] px-3 py-1.5 rounded-[5px] cursor-pointer hover:bg-teal hover:text-white transition-colors">Edit</button>
                      <button onClick={() => remove(p.id)} className="bg-red/10 text-red border border-red/40 text-[11px] px-3 py-1.5 rounded-[5px] cursor-pointer hover:bg-red hover:text-white transition-colors">Delete</button>
                    </div>
                  </div>
                ))
              )}
            </div>
          )}

          {tab === "seo" && (
            <div>
              <Field label="Homepage meta title">
                <Input value={settings.seoTitle ?? ""} onChange={(v) => setSettings({ ...settings, seoTitle: v })} placeholder="Nithin Finserv | AMFI Registered MFD…" />
              </Field>
              <Field label="Homepage meta description">
                <textarea value={settings.seoDesc ?? ""} onChange={(e) => setSettings({ ...settings, seoDesc: e.target.value })} className="w-full px-3.5 py-2.5 border border-border focus:border-teal rounded-[7px] text-[13px] text-navy outline-none transition-colors min-h-[80px] resize-y font-sans" />
              </Field>
              <Field label="Your ARN number">
                <Input value={settings.arn ?? ""} onChange={(v) => setSettings({ ...settings, arn: v })} placeholder="e.g. ARN-123456" />
              </Field>
              <Field label="Phone number">
                <Input value={settings.phone ?? ""} onChange={(v) => setSettings({ ...settings, phone: v })} placeholder="+91 98XXX XXXXX" />
              </Field>
              <Field label="Email address">
                <Input value={settings.email ?? ""} onChange={(v) => setSettings({ ...settings, email: v })} placeholder="asnithin30@gmail.com" />
              </Field>
              <div className="flex gap-3 items-center mt-2">
                <button onClick={persistSettings} className="bg-teal hover:bg-teal-2 text-white py-3 px-7 rounded-[7px] text-[13px] font-medium transition-colors">💾 Save SEO settings</button>
                <span className="text-xs text-gray">{status}</span>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
}

function TabBtn({ active, onClick, children }: { active: boolean; onClick: () => void; children: React.ReactNode }) {
  return (
    <button onClick={onClick} className={`px-3.5 py-1.5 rounded-md text-[12.5px] font-medium cursor-pointer transition-all ${active ? "bg-teal text-white" : "bg-transparent text-gray hover:text-navy"}`}>
      {children}
    </button>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block mb-4">
      <span className="block text-xs font-medium text-navy mb-1.5">{label}</span>
      {children}
    </label>
  );
}

function Input({ value, onChange, placeholder, maxLength }: { value: string; onChange: (v: string) => void; placeholder?: string; maxLength?: number }) {
  return (
    <input
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      maxLength={maxLength}
      className="w-full px-3.5 py-2.5 border border-border focus:border-teal rounded-[7px] text-[13px] text-navy outline-none transition-colors"
    />
  );
}
