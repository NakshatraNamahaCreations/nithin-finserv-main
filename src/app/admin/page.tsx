import type { Metadata } from "next";
import AdminPanel from "@/components/AdminPanel";

export const metadata: Metadata = {
  alternates: { canonical: "/admin" },
  title: "Admin",
  robots: { index: false, follow: false },
};

export default function AdminPage() {
  return (
    <div className="bg-cream min-h-[calc(100vh-64px)] px-4 sm:px-6 lg:px-12 pt-12 pb-20">
      <AdminPanel />
    </div>
  );
}
