"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const copy = {
  ar: {
    links: [
      { label: "المنتج", href: "#product" },
      { label: "المزايا", href: "#features" },
      { label: "الأسعار", href: "#pricing" },
      { label: "الأسئلة الشائعة", href: "#faq" },
    ],
    language: "EN",
    open: "فتح القائمة",
    close: "إغلاق القائمة",
  },
  en: {
    links: [
      { label: "Product", href: "#product" },
      { label: "Features", href: "#features" },
      { label: "Pricing", href: "#pricing" },
      { label: "FAQ", href: "#faq" },
    ],
    language: "AR",
    open: "Open menu",
    close: "Close menu",
  },
} as const;

export function Navbar({ locale = "ar" }: { locale?: "ar" | "en" }) {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const text = copy[locale];
  const nextLocale = locale === "ar" ? "en" : "ar";
  const isRtl = locale === "ar";
  const [prevScrollY, setPrevScrollY] = useState(0);
  const [scrollY, setScrollY] = useState(0);

  React.useEffect(() => {
    const handleScroll = () => {
      setPrevScrollY(scrollY);
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollY]);

  return (
    <header
      className={`fixed  ${scrollY > prevScrollY ? "-top-25" : "top-5"} transition-all duration-300 inset-x-0 z-50 mx-auto max-w-7xl px-4`}
    >
      {/* 🚀 Floating Pill Navigation Bar */}
      <nav
        dir={isRtl ? "rtl" : "ltr"}
        className="relative flex items-center justify-between rounded-2xl border border-white/10 bg-[var(--accent-emerald)]/10 px-6 py-3 shadow-[0_12px_40px_rgba(0,0,0,0.4)] backdrop-blur-xl transition-all duration-300 hover:border-emerald-500/30"
        aria-label={isRtl ? "التنقل الرئيسي" : "Primary navigation"}
      >
        {/* Brand Logo */}
        <Link
          className="group flex items-center gap-3 transition-transform duration-300 hover:scale-105"
          href={`/${locale}`}
          aria-label="Anan Sustainability home"
        >
          <div className="relative flex size-10 items-center justify-center rounded-full border border-emerald-500/20 bg-emerald-500/10 p-1.5 backdrop-blur-md">
            <Image
              src="/brand/anan-sustainability-icon.svg"
              alt="Anan Logo"
              width={28}
              height={36}
              priority
              className="h-auto w-5"
            />
          </div>
          <span className="font-[var(--font-display)] text-x font-bold tracking-[0.16em] text-white">
            ANAN{" "}
            <span className="block pt-0.3 font-[var(--font-mono)] text-[8px] tracking-[0.2em] text-emerald-400">
              SUSTAINABILITY
            </span>
          </span>
        </Link>

        {/* Desktop Links with Kinetic Hover Pill */}
        <div className="hidden items-center gap-4 md:flex">
          {text.links.map((link, idx) => (
            <a
              key={link.href}
              href={link.href}
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="relative px-4 py-2 font-[var(--font-mono)] text-x font-medium tracking-wider text-zinc-300 transition-colors duration-200 hover:text-white"
            >
              {hoveredIndex === idx && (
                <motion.span
                  layoutId="navbar-hover"
                  className="absolute inset-0 z-0 rounded-full bg-emerald-500/15 border border-emerald-500/30"
                  transition={{ type: "spring", stiffness: 350, damping: 30 }}
                />
              )}
              <span className="relative z-10">{link.label}</span>
            </a>
          ))}
        </div>

        {/* Right Section: Language Switcher & Mobile Menu Trigger */}
        <div className="flex items-center gap-3">
          <Link
            className="group flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 font-[var(--font-mono)] text-xs font-medium text-zinc-300 transition-all duration-300 hover:border-emerald-500/40 hover:bg-emerald-500/10 hover:text-emerald-300"
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
              width={20}
              height={14}
              className="rounded-[2px] object-cover"
            />
            <span>{text.language}</span>
          </Link>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            onClick={() => setIsOpen((open) => !open)}
            className="flex size-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-zinc-300 transition-colors hover:border-emerald-500/40 hover:text-emerald-400 md:hidden"
            aria-expanded={isOpen}
            aria-label={isOpen ? text.close : text.open}
          >
            {isOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {/* 📱 Mobile Menu Dropdown Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -15, scale: 0.95 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            dir={isRtl ? "rtl" : "ltr"}
            className="mt-3 overflow-hidden rounded-3xl border border-emerald-500/20 bg-[#071312]/95 p-6 shadow-2xl backdrop-blur-2xl md:hidden"
          >
            <motion.div
              initial="closed"
              animate="open"
              exit="closed"
              variants={{
                open: { transition: { staggerChildren: 0.08 } },
                closed: {
                  transition: { staggerChildren: 0.05, staggerDirection: -1 },
                },
              }}
              className="flex flex-col space-y-3"
            >
              {text.links.map((link) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  variants={{
                    open: { opacity: 1, x: 0 },
                    closed: { opacity: 0, x: isRtl ? 20 : -20 },
                  }}
                  className="rounded-2xl border border-white/5 bg-white/[0.02] px-5 py-3.5 font-[var(--font-mono)] text-sm font-semibold tracking-wide text-zinc-200 transition-colors hover:border-emerald-500/40 hover:bg-emerald-500/10 hover:text-emerald-300"
                >
                  {link.label}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Navbar;
