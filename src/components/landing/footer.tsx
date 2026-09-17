"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, ArrowUp, Globe, Sparkles } from "lucide-react";
import { BsTwitterX } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa6";

const content = {
  ar: {
    description:
      "منصة تشغيل ذكية تساعد الأندية الرياضية ومراكز اللياقة على أتمتة الإدارة، العضويات، المدفوعات، والنمو من مكان واحد.",
    explore: "استكشف",
    company: "عن أنان",
    status: "جميع الأنظمة تعمل بكفاءة",
    tickerItems: [
      "إدارة الاشتراكات والعضويات",
      "نقاط البيع الذكية POS",
      "ربط معتمد مع الفلترة الإلكترونية",
      "أتمتة الأنظمة الغذائية والحصص",
      "تطبيق جوال مخصص للأعضاء",
      "تقارير مالية ولحظية",
    ],
    links: [
      { label: "المنتج", href: "#section-2" },
      { label: "المزايا", href: "#section-3" },
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
    explore: "Explore",
    company: "Anan Sustainability",
    status: "All Systems Operational",
    tickerItems: [
      "Membership Management",
      "Smart POS System",
      "E-Invoicing Compliant",
      "Automated Class & Diet Plans",
      "Custom Gym Member App",
      "Real-time Financial Analytics",
    ],
    links: [
      { label: "Product", href: "#section-2" },
      { label: "Features", href: "#section-3" },
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

export function Footer({ locale = "en" }: { locale?: "ar" | "en" }) {
  const text = content[locale];
  const nextLocale = locale === "ar" ? "en" : "ar";
  const isRtl = locale === "ar";

  const scrollToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      dir={isRtl ? "rtl" : "ltr"}
      className="relative overflow-hidden border-t border-zinc-800/80 bg-[#060709] pt-12 pb-8 text-white"
    >
      {/* 🔮 Ambient Background Mesh Glows */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#1f29370f_1px,transparent_1px),linear-gradient(to_bottom,#1f29370f_1px,transparent_1px)] bg-[size:3rem_3rem]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-[radial-gradient(ellipse_at_top,rgba(16,185,129,0.12),transparent_75%)] blur-xl" />

      {/* 🚀 Kinetic Infinite Scroll Ticker */}
      <div className="relative mb-16 overflow-hidden border-y border-zinc-800/60 bg-zinc-950/60 py-3.5 backdrop-blur-md">
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-20 bg-gradient-to-r from-[#060709] to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-20 bg-gradient-to-l from-[#060709] to-transparent" />

        <motion.div
          animate={{ x: isRtl ? [0, 1000] : [0, -1000] }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="flex whitespace-nowrap gap-12 text-xs font-mono font-medium text-emerald-400/90 uppercase tracking-widest"
        >
          {[...text.tickerItems, ...text.tickerItems, ...text.tickerItems].map(
            (item, index) => (
              <div key={index} className="flex items-center gap-3">
                <Sparkles className="size-3.5 text-emerald-500 animate-pulse" />
                <span>{item}</span>
              </div>
            ),
          )}
        </motion.div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 border-b border-zinc-800/80 pb-16 md:grid-cols-[2fr_1fr_1fr] lg:gap-20">
          {/* Brand Info, System Status & Social Icons */}
          <div className="max-w-md space-y-6">
            <Link
              href={`/${locale}`}
              className="inline-flex items-center gap-3 group"
              aria-label={
                isRtl ? "العودة إلى الصفحة الرئيسية" : "Back to Anan home"
              }
            >
              <div className="relative flex size-10 items-center justify-center rounded-xl border border-emerald-500/20 bg-emerald-500/10 p-2 backdrop-blur-md transition-transform duration-300 group-hover:scale-105">
                <Image
                  src="/brand/anan-sustainability-icon.svg"
                  alt="Anan Logo"
                  width={28}
                  height={36}
                  className="h-auto w-6"
                />
              </div>
              <div>
                <span className="font-bold text-lg tracking-wider text-white block">
                  ANAN <span className="text-emerald-400">Sustainability</span>
                </span>
                <span className="block font-mono text-[9px] tracking-[0.25em] text-emerald-400/70 uppercase">
                  GYM OPERATIONS SAAS
                </span>
              </div>
            </Link>

            <p className="text-sm leading-relaxed text-zinc-400">
              {text.description}
            </p>

            {/* Live System Status Badge */}
            <div className="inline-flex items-center gap-2.5 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3.5 py-1.5 backdrop-blur-md">
              <span className="relative flex size-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
              </span>
              <span className="font-mono text-xs font-semibold text-emerald-300">
                {text.status}
              </span>
            </div>

            {/* 🌐 Social Media Icons Grid */}
            <div className="pt-2">
              <p className="mb-3 font-mono text-[11px] font-semibold text-zinc-500 uppercase tracking-widest">
                {isRtl ? "تابعنا على" : "Connect with us"}
              </p>
              <div className="flex items-center gap-2.5">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      aria-label={social.name}
                      className="group relative flex size-9 items-center justify-center rounded-xl border border-zinc-800 bg-zinc-900/60 text-zinc-400 transition-all duration-300 hover:border-emerald-500/40 hover:bg-emerald-500/10 hover:text-emerald-300 hover:shadow-[0_0_15px_rgba(16,185,129,0.2)] hover:-translate-y-0.5"
                    >
                      <Icon className="size-4 transition-transform duration-300 group-hover:scale-110" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Navigation Links (Explore) */}
          <div>
            <h3 className="font-mono text-xs font-bold uppercase tracking-widest text-emerald-400">
              {text.explore}
            </h3>
            <ul className="mt-6 space-y-3.5">
              {text.links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="group inline-flex items-center gap-1 text-sm font-medium text-zinc-400 transition-colors hover:text-emerald-300"
                  >
                    <span>{link.label}</span>
                    <ArrowUpRight className="size-3.5 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 text-emerald-400" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links & Language Switcher */}
          <div>
            <h3 className="font-mono text-xs font-bold uppercase tracking-widest text-emerald-400">
              {text.company}
            </h3>
            <ul className="mt-6 space-y-3.5">
              {text.companyLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="group inline-flex items-center gap-1.5 text-sm font-medium text-zinc-400 transition-colors hover:text-emerald-300"
                  >
                    <span>{link.label}</span>
                    <ArrowUpRight className="size-3.5 text-zinc-500 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-emerald-400" />
                  </a>
                </li>
              ))}

              <li className="pt-2">
                <Link
                  href={`/${nextLocale}`}
                  className="inline-flex items-center gap-2 rounded-lg border border-zinc-800 bg-zinc-900/60 px-3 py-1.5 text-xs font-semibold text-zinc-300 transition-all duration-300 hover:border-emerald-500/40 hover:bg-emerald-500/10 hover:text-emerald-300"
                >
                  <Globe className="size-3.5 text-emerald-400" />
                  <span>{locale === "ar" ? "English" : "العربية"}</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar (Legal & Scroll Top) */}
        <div className="flex flex-col gap-4 pt-8 text-xs text-zinc-500 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} Anan Sky Gym. {text.legal}
          </p>

          <div className="flex items-center gap-6">
            <a href="#" className="transition-colors hover:text-zinc-300">
              {text.privacy}
            </a>
            <a href="#" className="transition-colors hover:text-zinc-300">
              {text.terms}
            </a>

            <a
              href="#"
              onClick={scrollToTop}
              className="group inline-flex items-center gap-1.5 font-semibold text-emerald-400 transition-colors hover:text-emerald-300"
            >
              <span>{text.backToTop}</span>
              <div className="flex size-6 items-center justify-center rounded-full border border-emerald-500/20 bg-emerald-500/10 transition-transform duration-300 group-hover:-translate-y-1">
                <ArrowUp className="size-3" />
              </div>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
