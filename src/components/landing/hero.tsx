"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Check } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { RainbowButton } from "@/components/ui/rainbow-button";
import Text3DFlip from "@/components/ui/text-3d-flip";

const content = {
  ar: {
    eyebrow: "عمليات النادي الرياضي / 01",
    title: "نظام واحد، تحكم كامل.",
    description:
      "أدر العضويات، المدفوعات، الحصص، نقاط البيع والمدربين من لوحة تشغيل واحدة صُممت للنمو.",
    primary: "ابدأ تجربة 7 يوماً",
    secondary: "احجز عرضاً توضيحياً",
    live: "النظام يعمل الآن",
    proof: "مصمم لفرق الأندية متعددة الفروع",
    preview: "معاينة لوحة التحكم",
  },
  en: {
    eyebrow: "GYM OPERATIONS / 01",
    title: "One System , Total Control.",
    description:
      "Manage memberships, payments, classes, retail, and trainers from one operating layer built for growth.",
    primary: "Start 7-day trial",
    secondary: "Book a demo",
    live: "System operational",
    proof: "Built for multi-branch teams",
    preview: "Dashboard preview",
  },
} as const;

export function Hero({ locale }: { locale: "ar" | "en" }) {
  const text = content[locale];

  return (
    <main
      id="hero"
      className="relative min-h-screen isolate overflow-hidden bg-[#071312] pt-20"
    >
      <video
        className="pointer-events-none absolute inset-0 h-full w-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        aria-hidden="true"
      >
        <source src="/media/hero/hero-bg.mp4" type="video/mp4" />
      </video>
      {/* <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(4,15,14,0.94)_0%,rgba(4,15,14,0.68)_10%,rgba(4,15,14,0.36)_100%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_75%_30%,rgba(16,185,129,0.18),transparent_33%)]" /> */}

      <div className="relative mx-auto grid min-h-[100vh] max-w-7xl px-6 items-center gap-14 py-16 md:py-24 lg:grid-cols-[0.82fr_1.18fr] lg:gap-25">
        <motion.section
          className="max-w-[620px]"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="mb-6 flex items-center gap-3 font-[var(--font-mono)] text-[10px] tracking-[0.14em] text-emerald-200/70">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-300 shadow-[0_0_14px_#4edea3]" />
            {text.eyebrow}
          </div>
          <Text3DFlip
            as="h1"
            className="max-w-[800px] text-3xl italic font-semibold leading-[1.08] tracking-[-0.04em] text-white sm:text-4xl md:text-5xl lg:text-[72px]"
            textClassName="text-white"
            flipTextClassName="text-emerald-300"
            staggerDuration={0.03}
            rotateDirection="top"
            splitMode={locale === "ar" ? "words" : "characters"}
            dir={locale === "ar" ? "rtl" : "ltr"}
          >
            {text.title}
          </Text3DFlip>
          <p className="mt-7 max-w-[540px] text-base leading-7 text-white/65 sm:text-lg sm:leading-8">
            {text.description}
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <RainbowButton
              asChild
              size="lg"
              className="w-full font-[var(--font-mono)] text-[10px] tracking-[0.06em] sm:w-auto"
            >
              <Link href="#demo">
                {text.primary}
                <ArrowUpRight size={17} />
              </Link>
            </RainbowButton>
          </div>
          <div className="mt-9 flex flex-wrap gap-x-6 gap-y-3 font-[var(--font-mono)] text-[9px] tracking-[0.05em] text-white/45">
            <span className="inline-flex items-center gap-2 text-lime-300">
              <Check size={13} />
              {text.live}
            </span>
            <span>{text.proof}</span>
          </div>
        </motion.section>

        <motion.section
          className="relative w-full max-w-[600px] mx-auto "
          aria-label={text.preview}
          initial={{ opacity: 0, scale: 0.96, y: 28 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.12 }}
        >
          <div className="relative overflow-hidden transition-all duration-300 hover:scale-[1.01]">
            <Image
              src="/media/dashboard/dashboard-image3.png"
              alt={text.preview}
              width={1899}
              height={1080}
              className="block w-full"
              priority
            />
          </div>
        </motion.section>
      </div>
    </main>
  );
}
