"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpLeft, ArrowUpRight } from "lucide-react";
import { RainbowButton } from "@/components/ui/rainbow-button";

const content = {
  ar: {
    eyebrow: "( كلمة أخيرة )",
    title: "ابنِ مستقبل ناديك اليوم مع أنان للاستدامة.",
    description:
      "لا تعقيدات، لا ملفات مبعثرة، شاشة واحدة تمنحك التحكم الكامل في تشغيل ونمو ناديك الرياضي.",
    subText: "ابدأ تجربتك المجانية اليوم وانضم لأحدث منصة SaaS لإدارة الأندية.",
    cta: "ابدأ محادثتك معنا",
  },
  en: {
    eyebrow: "( LAST WORD )",
    title: "Let's build the future of your gym together.",
    description:
      "No decks, no detours, one dashboard to run, scale, and automate your entire fitness center.",
    subText: "Start your 14-day free trial today. No credit card required.",
    cta: "Start the conversation",
  },
} as const;

export function CtaSection({ locale = "ar" }: { locale?: "ar" | "en" }) {
  const text = content[locale];
  const isRtl = locale === "ar";
  const shouldReduceMotion = useReducedMotion();
  const ArrowIcon = isRtl ? ArrowUpLeft : ArrowUpRight;

  return (
    <section
      id="section-cta"
      dir={isRtl ? "rtl" : "ltr"}
      className="relative flex min-h-[680px] w-full flex-col items-center justify-center overflow-hidden bg-[#09090b] py-28 text-white"
    >
      {/* 🌌 Massive Background Kinetic Typography (مثل النص الخلفي الضخم في الفيديو) */}
      <div className="pointer-events-none absolute inset-0 flex select-none items-center justify-center opacity-[0.03]">
        <motion.span
          initial={{ x: isRtl ? -100 : 100 }}
          animate={{ x: isRtl ? 100 : -100 }}
          transition={{
            duration: 25,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "linear",
          }}
          className="whitespace-nowrap font-black uppercase text-[18vw] tracking-tighter text-white"
        >
          ANAN SUSTAINABILITY GYM SAAS
        </motion.span>
      </div>

      {/* 🔮 Background Glow Effects */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[500px] rounded-full bg-emerald-500/10 blur-[150px]" />

      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        {/* Eyebrow Label */}
        <motion.p
          initial={shouldReduceMotion ? false : { opacity: 0, y: 15 }}
          whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-6 font-mono text-xs uppercase tracking-[0.25em] text-emerald-400/80"
        >
          {text.eyebrow}
        </motion.p>

        {/* Main Headline */}
        <motion.h2
          initial={shouldReduceMotion ? false : { opacity: 0, y: 25 }}
          whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-4xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl"
        >
          <span className="bg-gradient-to-b from-white via-white/90 to-white/60 bg-clip-text text-transparent">
            {text.title}
          </span>
        </motion.h2>

        {/* Subtitle / Description */}
        <motion.p
          initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mx-auto mt-6 max-w-xl text-base text-zinc-400 sm:text-lg"
        >
          {text.description}
        </motion.p>

        {/* Call To Action Button (Using RainbowButton) */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.95 }}
          whileInView={
            shouldReduceMotion ? undefined : { opacity: 1, scale: 1 }
          }
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 flex items-center justify-center"
        >
          <RainbowButton
            size="lg"
            className="group relative h-14 rounded-full px-8 text-base font-bold text-white shadow-2xl transition-transform duration-300 hover:scale-105 active:scale-95"
            onClick={() => {
              const element = document.getElementById("demo");
              element?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            <span>{text.cta}</span>
            <div className="flex size-7 items-center justify-center rounded-full bg-white/20 text-white transition-transform duration-300 group-hover:rotate-45">
              <ArrowIcon className="size-4" />
            </div>
          </RainbowButton>
        </motion.div>

        {/* Footer Micro-copy */}
        <motion.p
          initial={shouldReduceMotion ? false : { opacity: 0 }}
          whileInView={shouldReduceMotion ? undefined : { opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 font-mono text-xs text-zinc-500"
        >
          {text.subText}
        </motion.p>
      </div>
    </section>
  );
}

export default CtaSection;
