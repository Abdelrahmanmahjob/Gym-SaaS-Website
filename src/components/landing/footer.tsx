"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Globe } from "lucide-react";
import { BsTwitterX } from "react-icons/bs";
import { FaLinkedinIn, FaInstagram, FaFacebookF } from "react-icons/fa6";

const content = {
  ar: {
    description:
      "منصة تشغيل ذكية تساعد الأندية الرياضية ومراكز اللياقة على أتمتة الإدارة، العضويات، المدفوعات، والنمو من مكان واحد.",
    explore: "// 01. استكشف",
    company: "// 02. عن أنان",
    status: "جميع الأنظمة تعمل بكفاءة",
    links: [
      { label: "المنتج", href: "#product" },
      { label: "المزايا", href: "#features" },
      { label: "الأسعار", href: "#pricing" },
      { label: "الأسئلة الشائعة", href: "#faq" },
    ],
    companyLinks: [
      { label: "احجز عرضًا مجانياً", href: "#demo" },
      { label: "تواصل مع المبيعات", href: "#demo" },
    ],
    legal: "جميع الحقوق محفوظة.",
    privacy: "سياسة الخصوصية",
    terms: "الشروط والأحكام",
    backToTop: "العودة للأعلى",
  },
  en: {
    description:
      "A focused operating platform helping gyms manage memberships, payments, and growth from one place.",
    explore: "// 01. EXPLORE",
    company: "// 02. ANAN SUSTAINABILITY",
    status: "SYSTEMS OPERATIONAL",
    links: [
      { label: "Product", href: "#product" },
      { label: "Features", href: "#features" },
      { label: "Pricing", href: "#pricing" },
      { label: "FAQ", href: "#faq" },
    ],
    companyLinks: [
      { label: "Book a demo", href: "#demo" },
      { label: "Contact sales", href: "#demo" },
    ],
    legal: "All rights reserved.",
    privacy: "Privacy Policy",
    terms: "Terms of Service",
    backToTop: "Back to top",
  },
} as const;

const socialLinks = [
  { name: "X (Twitter)", href: "#", icon: BsTwitterX },
  { name: "Instagram", href: "#", icon: FaInstagram },
  { name: "LinkedIn", href: "#", icon: FaLinkedinIn },
  { name: "Facebook", href: "#", icon: FaFacebookF },
];

export function Footer({ locale = "ar" }: { locale?: "ar" | "en" }) {
  const text = content[locale];
  const nextLocale = locale === "ar" ? "en" : "ar";
  const isRtl = locale === "ar";

  return (
    <footer
      dir={isRtl ? "rtl" : "ltr"}
      className="relative z-10 mx-auto max-w-7xl px-6 py-12 font-['Geist'] text-[#e5e1e4]"
    >
      {/* 🔮 Obsidian Biosphere Outer Deck */}
      <div className="relative overflow-hidden rounded-3xl border border-[#27272a] bg-[#111113] p-8 sm:p-12 md:p-16 shadow-[0_20px_80px_rgba(0,0,0,0.8)] backdrop-blur-2xl">
        {/* Bio-Luminescent Atmospheric Glows */}
        <div className="pointer-events-none absolute -right-20 -top-20 size-96 rounded-full bg-[#10b981]/10 blur-[130px]" />
        <div className="pointer-events-none absolute -left-20 bottom-10 size-96 rounded-full bg-[#84cc16]/5 blur-[140px]" />

        {/* Top Architectural Grid Content */}
        <div className="relative z-10 grid gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Brand Info & Telemetry Badge */}
          <div className="space-y-6 lg:col-span-5">
            <Link
              href={`/${locale}`}
              className="group inline-flex items-center gap-3"
              aria-label="Anan Sustainability"
            >
              <div className="relative flex size-11 items-center justify-center rounded-xl border border-[#27272a] bg-[#18181b] p-2 transition-all duration-300 group-hover:border-[#10b981]/50 group-hover:shadow-[0_0_20px_rgba(16,185,129,0.2)]">
                <Image
                  src="/brand/anan-sustainability-icon.svg"
                  alt="Anan Logo"
                  width={28}
                  height={36}
                  className="h-auto w-6"
                />
              </div>
              <div>
                <span className="block font-['Space_Grotesk'] text-lg font-semibold tracking-wider text-[#fafafa]">
                  ANAN <span className="text-[#4edea3]">SUSTAINABILITY</span>
                </span>
                <span className="block font-['Kufam'] text-[9px] font-medium tracking-[0.2em] text-[#86948a] uppercase">
                  GYM OPERATIONS SAAS
                </span>
              </div>
            </Link>

            <p className="max-w-sm font-['Kufam'] text-sm leading-relaxed text-[#a1a1aa]">
              {text.description}
            </p>

            {/* JetBrains Mono Status Badge */}
            <div className="inline-flex items-center gap-2.5 rounded-full border border-[#27272a] bg-[#09090b] px-3.5 py-1.5 backdrop-blur-md">
              <span className="relative flex size-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#4edea3] opacity-75" />
                <span className="relative inline-flex size-2 rounded-full bg-[#10b981]" />
              </span>
              <span className="font-['Kufam'] text-[11px] font-medium tracking-wide text-[#4edea3]">
                {text.status}
              </span>
            </div>

            {/* Social Icons Row */}
            <div className="flex items-center gap-3 pt-2">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    aria-label={social.name}
                    className="group relative flex size-10 items-center justify-center rounded-lg border border-[#27272a] bg-[#09090b] text-[#a1a1aa] transition-all duration-300 hover:border-[#10b981]/40 hover:bg-[#18181b] hover:text-[#4edea3] hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(16,185,129,0.15)]"
                  >
                    <Icon className="size-4 transition-transform duration-300 group-hover:scale-110" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Navigation Columns */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-2 lg:col-span-7">
            {/* Explore Column */}
            <div>
              <h3 className="font-['Kufam'] text-xs font-semibold uppercase tracking-[0.12em] text-[#86948a]">
                {text.explore}
              </h3>
              <ul className="mt-5 space-y-3">
                {text.links.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="group relative inline-block font-['Kufam'] text-sm font-normal text-[#a1a1aa] transition-colors duration-200 hover:text-[#fafafa]"
                    >
                      {link.label}
                      <span className="absolute inset-x-0 -bottom-0.5 h-px scale-x-0 bg-[#4edea3] transition-transform duration-300 origin-left group-hover:scale-x-100" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Column & Language Switcher */}
            <div>
              <h3 className="font-['Kufam'] text-xs font-semibold uppercase tracking-[0.12em] text-[#86948a]">
                {text.company}
              </h3>
              <ul className="mt-5 space-y-3">
                {text.companyLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="group relative inline-block font-['Kufam'] text-sm font-normal text-[#a1a1aa] transition-colors duration-200 hover:text-[#fafafa]"
                    >
                      {link.label}
                      <span className="absolute inset-x-0 -bottom-0.5 h-px scale-x-0 bg-[#4edea3] transition-transform duration-300 origin-left group-hover:scale-x-100" />
                    </a>
                  </li>
                ))}

                <li className="pt-3">
                  <Link
                    href={`/${nextLocale}`}
                    className="inline-flex items-center gap-2 rounded-lg border border-[#27272a] bg-[#09090b] px-3.5 py-1.5 font-['Kufam'] text-xs font-medium text-[#a1a1aa] transition-all duration-300 hover:border-[#10b981]/40 hover:text-[#4edea3]"
                  >
                    <Globe className="size-3.5 text-[#10b981]" />
                    <span>{locale === "ar" ? "English" : "العربية"}</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Hairline Separator */}
        <div className="relative z-10 my-10 border-t border-[#27272a]" />

        {/* Bottom Legal & Metadata Bar */}
        <div className="relative z-10 flex flex-col items-center justify-between gap-4 font-['Kufam'] text-xs text-[#71717a] sm:flex-row">
          <p>
            © {new Date().getFullYear()} ANAN SUSTAINABILITY. {text.legal}
          </p>

          <div className="flex items-center gap-6">
            <a href="#" className="transition-colors hover:text-[#a1a1aa]">
              {text.privacy}
            </a>
            <span className="text-[#3f3f46]">•</span>
            <a href="#" className="transition-colors hover:text-[#a1a1aa]">
              {text.terms}
            </a>
          </div>
        </div>

        {/* 🎨 Giant Biosphere Watermark: Official Logo Icon + Brand Name */}
        <div className="pointer-events-none relative left-0 right-0 mt-12 flex select-none flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8  transition-opacity duration-500 hover:opacity-20">
          <Image
            src="/brand/anan-sustainability-icon.png"
            alt="Anan Logo Watermark"
            width={160}
            height={200}
            className="h-[clamp(4rem,10vw,8rem)] w-auto"
          />
          <h1 className="bg-gradient-to-b from-[#fafafa] via-[#a1a1aa] to-transparent bg-clip-text text-center font-['Kufam'] text-[1.5rem] sm:text-[2rem] md:text-[2.5rem] lg:text-[5rem] font-bold tracking-tighter text-transparent uppercase whitespace-nowrap">
            ANAN SUSTAINABILITY
          </h1>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
