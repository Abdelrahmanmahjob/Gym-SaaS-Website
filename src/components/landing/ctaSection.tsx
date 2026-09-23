"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { ArrowUpLeft, ArrowUpRight } from "lucide-react";
import { StudioButton } from "@/components/ui/studio-button";

const content = {
  ar: {
    eyebrow: "( كلمة أخيرة )",
    title: "ابنِ مستقبل ناديك\nاليوم مع أنان للاستدامة.",
    description:
      "لا تعقيدات، لا ملفات مبعثرة، شاشة واحدة تمنحك التحكم الكامل في تشغيل ونمو ناديك الرياضي.",
    subText: "ابدأ تجربتك المجانية اليوم وانضم لأحدث منصة SaaS لإدارة الأندية.",
    cta: "ابدأ محادثتك معنا",
  },
  en: {
    eyebrow: "( LAST WORD )",
    title: "Build your gym's future\nwith Anan.",
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
      className="relative overflow-hidden bg-[#09090b] px-4 py-24 text-white sm:px-6 sm:py-32"
    >
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[1.35rem] border border-emerald-500/15 bg-[radial-gradient(circle_at_92%_10%,rgba(16,185,129,0.18),transparent_36%),linear-gradient(110deg,#111113_0%,#12221e_100%)] px-7 py-12 shadow-[0_24px_80px_rgba(0,0,0,0.34)] sm:px-10 sm:py-16 lg:min-h-[540px] lg:px-12 lg:py-20">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(78,222,163,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(78,222,163,0.05)_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-40" />
        <Image
          src="/media/cta/cta-bg.png"
          alt=""
          aria-hidden="true"
          width={2700}
          height={720}
          className="pointer-events-none absolute inset-x-0 -bottom-20 h-auto min-h-[42%] w-full object-cover object-bottom opacity-90"
        />

        <div className="relative z-10 grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-8">
          <div className={isRtl ? "text-right" : "text-left"}>
            <motion.p
              initial={shouldReduceMotion ? false : { opacity: 0, y: 15 }}
              whileInView={
                shouldReduceMotion ? undefined : { opacity: 1, y: 0 }
              }
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-5 font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-emerald-300"
            >
              {text.eyebrow}
            </motion.p>
            <motion.h2
              initial={shouldReduceMotion ? false : { opacity: 0, y: 25 }}
              whileInView={
                shouldReduceMotion ? undefined : { opacity: 1, y: 0 }
              }
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="max-w-2xl whitespace-pre-line text-3xl font-semibold leading-[1.08] tracking-tight text-white sm:text-4xl lg:text-5xl"
            >
              {text.title}
            </motion.h2>
            <motion.p
              initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
              whileInView={
                shouldReduceMotion ? undefined : { opacity: 1, y: 0 }
              }
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-6 max-w-xl text-base leading-7 text-zinc-400 sm:text-lg"
            >
              {text.description}
            </motion.p>
            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0, y: 15 }}
              whileInView={
                shouldReduceMotion ? undefined : { opacity: 1, y: 0 }
              }
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8 flex flex-wrap items-center gap-5"
            >
              <StudioButton
                size="sm"
                className="group text-white"
                onClick={() => {
                  document.getElementById("contact")?.scrollIntoView({
                    behavior: "smooth",
                  });
                }}
              >
                <span>{text.cta}</span>
                <ArrowIcon className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </StudioButton>
            </motion.div>
          </div>

          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.92 }}
            whileInView={
              shouldReduceMotion ? undefined : { opacity: 1, scale: 1 }
            }
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="relative mx-auto h-64 w-full max-w-md lg:h-80 md:-top-5 md:-right-10"
            aria-hidden="true"
          >
            <Image
              src="/media/cta/workflow-icons.svg"
              alt=""
              aria-hidden="true"
              width={352}
              height={300}
              className="h-full w-full object-contain"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default CtaSection;
