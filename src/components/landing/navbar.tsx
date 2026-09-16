"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { RainbowButton } from "@/components/ui/rainbow-button";

const copy = {
  ar: {
    links: ["المنتج", "المزايا", "الأسعار", "الأسئلة الشائعة"],
    demo: "احجز عرضاً",
    language: "EN",
    open: "فتح القائمة",
    close: "إغلاق القائمة",
  },
  en: {
    links: ["Product", "Features", "Pricing", "FAQ"],
    demo: "Book a demo",
    language: "AR",
    open: "Open menu",
    close: "Close menu",
  },
} as const;

export function Navbar({ locale }: { locale: "ar" | "en" }) {
  const [isOpen, setIsOpen] = useState(false);
  const text = copy[locale];
  const nextLocale = locale === "ar" ? "en" : "ar";

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#071312]/75 shadow-[0_12px_40px_rgba(0,0,0,0.2)] backdrop-blur-xl">
      <nav
        className="mx-auto flex min-h-[76px] w-[min(100%-32px,1440px)] items-center justify-between gap-6"
        aria-label={locale === "ar" ? "التنقل الرئيسي" : "Primary navigation"}
      >
        <Link
          className="group inline-flex shrink-0 items-center gap-3"
          href={`/${locale}`}
          aria-label="Anan Sustainability home"
        >
          <Image
            src="/brand/anan-sustainability-icon.svg"
            alt=""
            width={28}
            height={36}
            priority
            style={{ width: "28px", height: "36px" }}
          />
          <span className="font-[var(--font-display)] text-[13px] font-semibold tracking-[0.16em] text-white">
            ANAN{" "}
            <span className="block pt-0.5 font-[var(--font-mono)] text-[7px] tracking-[0.2em] text-emerald-300/60">
              SUSTAINABILITY
            </span>
          </span>
        </Link>

        <div
          className={`absolute left-4 right-4 top-[84px] flex-col overflow-hidden rounded-lg border border-white/10 bg-[#101d1c]/95 shadow-2xl backdrop-blur-xl md:static md:flex md:flex-row md:items-center md:gap-8 md:overflow-visible md:border-0 md:bg-transparent md:shadow-none ${isOpen ? "flex" : "hidden"}`}
        >
          {text.links.map((link, index) => (
            <a
              className="border-b border-white/10 px-5 py-4 font-[var(--font-mono)] text-[10px] tracking-[0.08em] text-white/60 transition-colors hover:text-white md:border-0 md:px-0 md:py-2"
              href={`#section-${index === 1 ? 3 : index + 1}`}
              key={link}
              onClick={() => setIsOpen(false)}
            >
              {link}
            </a>
          ))}
          <Link
            className="px-5 py-4 font-[var(--font-mono)] text-[10px] tracking-[0.08em] text-emerald-300 md:hidden"
            href="#demo"
            onClick={() => setIsOpen(false)}
          >
            {text.demo}
          </Link>
        </div>

        <div className="flex items-center gap-3 sm:gap-5">
          <Link
            className="inline-flex items-center gap-2 font-[var(--font-mono)] text-[10px] tracking-[0.08em] text-white/65 transition-colors hover:text-white"
            href={`/${nextLocale}`}
            aria-label={
              locale === "ar" ? "Switch to English" : "التبديل إلى العربية"
            }
          >
            <Image
              src={
                locale === "ar"
                  ? "/brand/flag-usa.svg"
                  : "/brand/flag-saudi.svg"
              }
              alt={locale === "ar" ? "United States flag" : "علم السعودية"}
              width={24}
              height={16}
              className="rounded-[2px] object-cover"
              style={{ width: "24px", height: "16px" }}
            />
            <span>{text.language}</span>
          </Link>
          <RainbowButton
            asChild
            size="sm"
            className="hidden font-[var(--font-mono)] text-[10px] tracking-[0.04em] md:inline-flex"
          >
            <Link href="#demo">
              {text.demo}
              <span aria-hidden="true">↗</span>
            </Link>
          </RainbowButton>
          <RainbowButton
            variant="outline"
            size="icon"
            className="md:hidden"
            type="button"
            onClick={() => setIsOpen((open) => !open)}
            aria-expanded={isOpen}
            aria-label={isOpen ? text.close : text.open}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </RainbowButton>
        </div>
      </nav>
    </header>
  );
}
