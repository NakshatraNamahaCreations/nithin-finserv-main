"use client";

import { useEffect, useRef, useState } from "react";
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

const CATS = [
  "SIP & Investing",
  "Mutual Funds",
  "Tax Saving",
  "Retirement",
  "Insurance",
  "Personal Finance",
  "Goal Planning",
  "Loans & EMI",
  "Market Update",
  "Beginners Guide",
];

type Draft = Omit<BlogPost, "id" | "date">;

const emptyDraft = (): Draft => ({
  title: "",
  cat: CATS[0],
  excerpt: "",
  body: "",
  emoji: "📰",
  readTime: 5,
  image: "",
  metaTitle: "",
  metaDesc: "",
  keywords: "",
});

const stripHtml = (html: string) =>
  html.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();

const estimateReadTime = (html: string) => {
  const words = stripHtml(html).split(" ").filter(Boolean).length;
  return Math.max(1, Math.round(words / 200));
};

async function uploadImage(file: File): Promise<string> {
  const fd = new FormData();
  fd.append("file", file);
  const res = await fetch("/api/upload", { method: "POST", body: fd });
  const data = await res.json().catch(() => ({}));
  if (!res.ok || !data?.url) {
    throw new Error(data?.error || "Upload failed");
  }
  return data.url as string;
}

export default function AdminPanel() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [pwd, setPwd] = useState("");
  const [pwdError, setPwdError] = useState(false);

  const [tab, setTab] = useState<Tab>("new");
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [settings, setSettings] = useState<AdminSettings>({});

  const [draft, setDraft] = useState<Draft>(emptyDraft());
  const [editingId, setEditingId] = useState<number | null>(null);
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

  const resetForm = () => {
    setDraft(emptyDraft());
    setEditingId(null);
  };

  const publish = () => {
    if (!draft.title.trim()) {
      setStatus("⚠️ Title is required");
      return;
    }
    const today = new Date().toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" });
    const excerpt = draft.excerpt?.trim() || stripHtml(draft.body).slice(0, 160);
    const post: BlogPost = {
      id: editingId ?? Date.now(),
      date: editingId ? (posts.find((p) => p.id === editingId)?.date ?? today) : today,
      ...draft,
      excerpt,
      emoji: draft.emoji || "📰",
      readTime: Number(draft.readTime) || estimateReadTime(draft.body),
    };

    const next = editingId
      ? posts.map((p) => (p.id === editingId ? post : p))
      : [post, ...posts];

    setPosts(next);
    savePosts(next);
    resetForm();
    setStatus(editingId ? "✅ Updated!" : "✅ Published!");
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
    setDraft({
      title: p.title, cat: p.cat, excerpt: p.excerpt, body: p.body,
      emoji: p.emoji, readTime: p.readTime,
      image: p.image ?? "",
      metaTitle: p.metaTitle ?? "",
      metaDesc: p.metaDesc ?? "",
      keywords: p.keywords ?? "",
    });
    setEditingId(id);
    setTab("new");
  };

  const persistSettings = () => {
    saveSettings(settings);
    if (settings.seoTitle) document.title = settings.seoTitle;
    setStatus("✅ Saved!");
    setTimeout(() => setStatus(""), 2500);
  };

  return (
    <div className="bg-white rounded-[18px] p-8 sm:p-10 w-full max-w-[1100px] mx-auto border border-border shadow-[0_4px_24px_rgba(0,0,0,0.04)]">
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
        </div>
      ) : (
        <>
          <div className="flex gap-2 mb-6 border-b border-border pb-3 flex-wrap">
            <TabBtn active={tab === "new"} onClick={() => { setTab("new"); resetForm(); }}>✏️ New post</TabBtn>
            <TabBtn active={tab === "manage"} onClick={() => setTab("manage")}>📋 Manage posts</TabBtn>
            <TabBtn active={tab === "seo"} onClick={() => setTab("seo")}>🔍 SEO settings</TabBtn>
          </div>

          {tab === "new" && (
            <BlogForm
              draft={draft}
              setDraft={setDraft}
              editing={editingId !== null}
              onCancel={() => { resetForm(); setTab("manage"); }}
              onSubmit={publish}
              status={status}
            />
          )}

          {tab === "manage" && (
            <div className="flex flex-col gap-3">
              {posts.length === 0 ? (
                <p className="text-[13px] text-gray">No posts yet. Create your first post.</p>
              ) : (
                posts.map((p) => (
                  <div key={p.id} className="bg-cream rounded-[9px] px-5 py-4 flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3 min-w-0">
                      {p.image ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img src={p.image} alt="" className="w-12 h-12 rounded-md object-cover shrink-0" />
                      ) : (
                        <div className="w-12 h-12 rounded-md bg-light flex items-center justify-center text-[1.4rem] shrink-0">{p.emoji}</div>
                      )}
                      <div className="min-w-0">
                        <div className="text-[13px] font-medium text-navy truncate">{p.title}</div>
                        <div className="text-[11px] text-gray mt-0.5">{p.cat} · {p.date}</div>
                      </div>
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

function BlogForm({
  draft, setDraft, editing, onCancel, onSubmit, status,
}: {
  draft: Draft;
  setDraft: (d: Draft) => void;
  editing: boolean;
  onCancel: () => void;
  onSubmit: () => void;
  status: string;
}) {
  const fileRef = useRef<HTMLInputElement>(null);
  const [fileName, setFileName] = useState<string>(draft.image ? "Image selected" : "");
  const [uploading, setUploading] = useState(false);
  const [uploadError, setUploadError] = useState("");

  useEffect(() => {
    setFileName(draft.image ? "Image selected" : "");
  }, [draft.image]);

  const handleFile = async (file: File | null) => {
    if (!file) {
      setDraft({ ...draft, image: "" });
      setFileName("");
      setUploadError("");
      return;
    }
    setUploading(true);
    setUploadError("");
    try {
      const url = await uploadImage(file);
      setDraft({ ...draft, image: url });
      setFileName(file.name);
    } catch (err) {
      setUploadError(err instanceof Error ? err.message : "Upload failed");
    } finally {
      setUploading(false);
    }
  };

  return (
    <div>
      <button
        onClick={onCancel}
        type="button"
        className="flex items-center gap-2 font-serif text-[1.4rem] font-bold text-navy mb-6 hover:text-teal transition-colors"
      >
        <span className="inline-flex items-center justify-center w-6 h-6">←</span>
        {editing ? "Edit Blog" : "Create Blog"}
      </button>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
        <div>
          <div className="text-[13px] font-semibold text-navy mb-2">Title</div>
          <input
            type="text"
            value={draft.title}
            onChange={(e) => setDraft({ ...draft, title: e.target.value })}
            className="w-full px-3.5 py-2.5 border border-border focus:border-teal rounded-[7px] text-[13px] text-navy outline-none transition-colors"
          />
        </div>
        <div>
          <div className="text-[13px] font-semibold text-navy mb-2">Image</div>
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => fileRef.current?.click()}
              disabled={uploading}
              className="bg-white border border-border hover:border-teal text-[12.5px] text-navy px-3.5 py-2 rounded-[6px] cursor-pointer transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
            >
              Choose file
            </button>
            <span className="text-[12px] text-gray truncate">
              {uploading ? "Uploading…" : (fileName || "No file chosen")}
            </span>
            {draft.image && !uploading && (
              <button
                type="button"
                onClick={() => handleFile(null)}
                className="text-[11px] text-red hover:underline ml-auto"
              >
                Remove
              </button>
            )}
            <input
              ref={fileRef}
              type="file"
              accept="image/*"
              onChange={(e) => { handleFile(e.target.files?.[0] ?? null); e.target.value = ""; }}
              className="hidden"
            />
          </div>
          {uploadError && <p className="text-[11px] text-red mt-1.5">{uploadError}</p>}
          {draft.image && (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={draft.image} alt="preview" className="mt-3 w-32 h-20 object-cover rounded-md border border-border" />
          )}
        </div>
      </div>

      <div className="mb-5 max-w-[340px]">
        <div className="text-[13px] font-semibold text-navy mb-2">Category</div>
        <select
          value={draft.cat}
          onChange={(e) => setDraft({ ...draft, cat: e.target.value })}
          className="w-full px-3.5 py-2.5 border border-border focus:border-teal rounded-[7px] text-[13px] text-navy outline-none transition-colors bg-white"
        >
          {CATS.map((c) => <option key={c} value={c}>{c}</option>)}
        </select>
      </div>

      <div className="mb-5">
        <div className="text-[13px] font-semibold text-navy mb-2">Excerpt</div>
        <textarea
          value={draft.excerpt}
          onChange={(e) => setDraft({ ...draft, excerpt: e.target.value })}
          placeholder="A (1-2) line summary of the post"
          className="w-full px-3.5 py-2.5 border border-border focus:border-teal rounded-[7px] text-[13px] text-navy outline-none transition-colors min-h-[60px] resize-y font-sans"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
        <div>
          <div className="text-[13px] font-semibold text-navy mb-2">Meta Title</div>
          <input
            type="text"
            value={draft.metaTitle ?? ""}
            onChange={(e) => setDraft({ ...draft, metaTitle: e.target.value })}
            className="w-full px-3.5 py-2.5 border border-border focus:border-teal rounded-[7px] text-[13px] text-navy outline-none transition-colors"
          />
        </div>
        <div>
          <div className="text-[13px] font-semibold text-navy mb-2">Meta Description</div>
          <textarea
            value={draft.metaDesc ?? ""}
            onChange={(e) => setDraft({ ...draft, metaDesc: e.target.value })}
            maxLength={300}
            className="w-full px-3.5 py-2.5 border border-border focus:border-teal rounded-[7px] text-[13px] text-navy outline-none transition-colors min-h-[80px] resize-y font-sans"
          />
        </div>
      </div>

      <div className="mb-5">
        <div className="text-[13px] font-semibold text-navy mb-2">Description</div>
        <RichTextEditor
          value={draft.body}
          onChange={(html) => setDraft({ ...draft, body: html })}
        />
      </div>

      <div className="flex gap-3 items-center mt-2">
        <button
          onClick={onSubmit}
          className="bg-teal hover:bg-teal-2 text-white py-2.5 px-6 rounded-[7px] text-[13px] font-medium transition-colors"
        >
          {editing ? "Update Blog" : "Create Blog"}
        </button>
        {editing && (
          <button
            type="button"
            onClick={onCancel}
            className="text-[13px] text-gray hover:text-navy transition-colors"
          >
            Cancel
          </button>
        )}
        <span className="text-xs text-gray">{status}</span>
      </div>
    </div>
  );
}

function RichTextEditor({ value, onChange }: { value: string; onChange: (html: string) => void }) {
  const ref = useRef<HTMLDivElement>(null);
  const imageInputRef = useRef<HTMLInputElement>(null);
  const initial = useRef(value);

  // Set initial content only once; further updates come from contentEditable events.
  useEffect(() => {
    if (ref.current && ref.current.innerHTML !== initial.current) {
      ref.current.innerHTML = initial.current;
    }
  }, []);

  // If parent resets value to "" (after publish) or swaps post (editing different post),
  // sync the DOM. Skip when current DOM already matches.
  useEffect(() => {
    if (ref.current && ref.current.innerHTML !== value) {
      ref.current.innerHTML = value;
    }
  }, [value]);

  const focusEditor = () => ref.current?.focus();

  const exec = (cmd: string, arg?: string) => {
    focusEditor();
    document.execCommand(cmd, false, arg);
    if (ref.current) onChange(ref.current.innerHTML);
  };

  const setBlock = (tag: string) => {
    focusEditor();
    document.execCommand("formatBlock", false, tag);
    if (ref.current) onChange(ref.current.innerHTML);
  };

  const insertLink = () => {
    const url = window.prompt("Enter URL");
    if (url) exec("createLink", url);
  };

  const insertImageUrl = () => {
    const url = window.prompt("Image URL (or cancel to upload file)");
    if (url) {
      exec("insertImage", url);
    } else {
      imageInputRef.current?.click();
    }
  };

  const insertImageFile = async (file: File | null) => {
    if (!file) return;
    try {
      const url = await uploadImage(file);
      exec("insertImage", url);
    } catch (err) {
      window.alert(err instanceof Error ? err.message : "Image upload failed");
    }
  };

  return (
    <div className="border border-border rounded-[7px] overflow-hidden bg-white">
      <div className="flex flex-wrap items-center gap-0.5 px-2 py-1.5 border-b border-border bg-cream">
        <select
          onChange={(e) => { setBlock(e.target.value); e.target.value = "p"; }}
          defaultValue="p"
          className="text-[12.5px] text-navy bg-white border border-border rounded px-2 py-1 mr-1 outline-none"
        >
          <option value="p">Paragraph</option>
          <option value="h2">Heading 2</option>
          <option value="h3">Heading 3</option>
          <option value="h4">Heading 4</option>
        </select>
        <ToolBtn title="Bold" onClick={() => exec("bold")}><strong>B</strong></ToolBtn>
        <ToolBtn title="Italic" onClick={() => exec("italic")}><em>I</em></ToolBtn>
        <ToolBtn title="Link" onClick={insertLink}>
          <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
            <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.72-1.71" />
          </svg>
        </ToolBtn>
        <Divider />
        <ToolBtn title="Bulleted list" onClick={() => exec("insertUnorderedList")}>
          <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="8" y1="6" x2="21" y2="6" /><line x1="8" y1="12" x2="21" y2="12" /><line x1="8" y1="18" x2="21" y2="18" />
            <circle cx="3.5" cy="6" r="1" /><circle cx="3.5" cy="12" r="1" /><circle cx="3.5" cy="18" r="1" />
          </svg>
        </ToolBtn>
        <ToolBtn title="Numbered list" onClick={() => exec("insertOrderedList")}>
          <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="10" y1="6" x2="21" y2="6" /><line x1="10" y1="12" x2="21" y2="12" /><line x1="10" y1="18" x2="21" y2="18" />
            <path d="M4 6h1v4" /><path d="M4 10h2" /><path d="M6 18H4c0-1 2-2 2-3s-1-1.5-2-1" />
          </svg>
        </ToolBtn>
        <ToolBtn title="Decrease indent" onClick={() => exec("outdent")}>
          <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="21" y1="6" x2="11" y2="6" /><line x1="21" y1="12" x2="11" y2="12" /><line x1="21" y1="18" x2="11" y2="18" />
            <polyline points="7 8 3 12 7 16" />
          </svg>
        </ToolBtn>
        <ToolBtn title="Increase indent" onClick={() => exec("indent")}>
          <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="3" y1="6" x2="13" y2="6" /><line x1="3" y1="12" x2="13" y2="12" /><line x1="3" y1="18" x2="13" y2="18" />
            <polyline points="17 8 21 12 17 16" />
          </svg>
        </ToolBtn>
        <Divider />
        <ToolBtn title="Image" onClick={insertImageUrl}>
          <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="3" width="18" height="18" rx="2" /><circle cx="8.5" cy="8.5" r="1.5" /><polyline points="21 15 16 10 5 21" />
          </svg>
        </ToolBtn>
        <ToolBtn title="Quote" onClick={() => setBlock("blockquote")}>
          <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 21c0-6 2-9 6-10" /><path d="M14 21c0-6 2-9 6-10" />
            <path d="M3 9V5h6v6H5" /><path d="M14 9V5h6v6h-4" />
          </svg>
        </ToolBtn>
        <Divider />
        <ToolBtn title="Undo" onClick={() => exec("undo")}>
          <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 14 4 9 9 4" /><path d="M20 20v-7a4 4 0 0 0-4-4H4" />
          </svg>
        </ToolBtn>
        <ToolBtn title="Redo" onClick={() => exec("redo")}>
          <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 14 20 9 15 4" /><path d="M4 20v-7a4 4 0 0 1 4-4h12" />
          </svg>
        </ToolBtn>

        <input
          ref={imageInputRef}
          type="file"
          accept="image/*"
          onChange={(e) => { insertImageFile(e.target.files?.[0] ?? null); e.target.value = ""; }}
          className="hidden"
        />
      </div>

      <div
        ref={ref}
        contentEditable
        suppressContentEditableWarning
        onInput={(e) => onChange((e.currentTarget as HTMLDivElement).innerHTML)}
        className="rt-editor min-h-[260px] px-4 py-3 text-[14px] text-navy leading-[1.7] outline-none focus:ring-2 focus:ring-teal/30"
      />
    </div>
  );
}

function ToolBtn({ title, onClick, children }: { title: string; onClick: () => void; children: React.ReactNode }) {
  return (
    <button
      type="button"
      title={title}
      onClick={onClick}
      className="w-7 h-7 inline-flex items-center justify-center rounded text-navy hover:bg-white hover:text-teal transition-colors text-[12.5px]"
    >
      {children}
    </button>
  );
}

function Divider() {
  return <div className="w-px h-5 bg-border mx-1" />;
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
