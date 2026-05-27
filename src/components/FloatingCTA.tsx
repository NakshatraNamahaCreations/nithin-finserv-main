"use client";

import { usePathname } from "next/navigation";

export default function FloatingCTA() {
  const pathname = usePathname();
  if (pathname?.startsWith("/admin")) return null;

  return (
    <>
      {/* Desktop floating CTAs */}
      <div className="hidden md:flex fixed bottom-6 right-6 z-[400] flex-col gap-2.5 items-end">
        <a
          href="https://wa.me/919060186197?text=Hi%20Nithin%20Finserv%2C%20I%20want%20to%20start%20investing.%20Please%20guide%20me."
          target="_blank"
          rel="noreferrer"
          className="relative overflow-visible flex items-center gap-2 px-6 py-3 rounded-full text-[12.5px] font-semibold shadow-[0_4px_18px_rgba(0,0,0,0.18)] transition-all bg-[#25D366] hover:bg-[#1ebd5a] hover:-translate-y-0.5 text-white no-underline whitespace-nowrap before:content-[''] before:absolute before:inset-0 before:rounded-full before:border-2 before:border-[#25D366] before:animate-pulse-ring"
        >
          <svg className="w-[18px] h-[18px] shrink-0" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
            <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.556 4.116 1.529 5.845L.057 23.571a.75.75 0 00.921.921l5.726-1.472A11.944 11.944 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75a9.71 9.71 0 01-4.964-1.361l-.356-.213-3.696.949.968-3.587-.233-.369A9.712 9.712 0 012.25 12C2.25 6.615 6.615 2.25 12 2.25S21.75 6.615 21.75 12 17.385 21.75 12 21.75z" />
          </svg>
          WhatsApp
        </a>
        <a
          href="tel:+919060186197"
          className="flex items-center gap-2 px-6 py-3 rounded-full text-[12.5px] font-semibold shadow-[0_4px_18px_rgba(0,0,0,0.18)] bg-navy hover:bg-navy-2 hover:-translate-y-0.5 text-white no-underline transition-all whitespace-nowrap"
        >
          <svg className="w-[18px] h-[18px] shrink-0" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
            <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.01 1.18 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z" />
          </svg>
          Call now
        </a>
      </div>

      {/* Mobile bottom bar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-[400] flex">
        <a href="tel:+919060186197" className="flex-1 bg-navy text-white text-center py-3.5 text-[13.5px] font-semibold flex items-center justify-center gap-2 no-underline">📞 9060186197</a>
        <a href="https://wa.me/919060186197" target="_blank" rel="noreferrer" className="flex-1 bg-[#25D366] text-white text-center py-3.5 text-[13.5px] font-semibold flex items-center justify-center gap-2 no-underline">💬 WhatsApp</a>
      </div>
      <div className="md:hidden h-[60px]" />
    </>
  );
}
