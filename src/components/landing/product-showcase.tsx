"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowUpRight, BarChart3, Users, LayoutDashboard } from "lucide-react";
import Link from "next/link";
import { RainbowButton } from "@/components/ui/rainbow-button";

const content = {
  ar: {
    eyebrow: "نظرة على المنصة / 02",

    title: "أدر ناديك من لوحة تشغيل واحدة.",
    highlight: "كل شيء أمامك.",
    description:
      "تابع العضويات، المدفوعات، الحضور، المبيعات، الحصص، المدربين والتقارير من مكان واحد، مع رؤية لحظية تساعد فريقك على اتخاذ قرارات أسرع وإدارة التشغيل بكفاءة أكبر.",

    stats: [
      {
        value: 17,
        suffix: "+",
        label: "وحدة تشغيل",
        icon: LayoutDashboard,
      },
      {
        value: 4,
        suffix: "",
        label: "أدوار رئيسية",
        icon: Users,
      },
      {
        value: 1,
        suffix: "",
        label: "منصة موحدة",
        icon: BarChart3,
      },
    ],

    cta: "استكشف المنصة",
    preview: "معاينة لوحة إدارة النادي الرياضية",
  },

  en: {
    eyebrow: "PRODUCT PREVIEW / 02",

    title: "Run your gym from one operating view.",
    highlight: "Everything in one place.",
    description:
      "Manage memberships, payments, attendance, POS, classes, trainers, and reporting from one unified platform — giving your team the visibility they need to operate faster and smarter.",

    stats: [
      {
        value: 17,
        suffix: "+",
        label: "OPERATING MODULES",
        icon: LayoutDashboard,
      },
      {
        value: 4,
        suffix: "",
        label: "CORE ROLES",
        icon: Users,
      },
      {
        value: 1,
        suffix: "",
        label: "UNIFIED PLATFORM",
        icon: BarChart3,
      },
    ],

    cta: "Explore the platform",
    preview: "Gym management dashboard preview",
  },
} as const;

function NumberTicker({
  value,
  suffix = "",
  duration = 1.8,
  start = false,
}: {
  value: number;
  suffix?: string;
  duration?: number;
  start?: boolean;
}) {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (!start) return;

    let animationFrame: number;
    const startTime = performance.now();
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const update = (currentTime: number) => {
      if (reduceMotion) {
        setDisplayValue(value);
        return;
      }

      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / (duration * 1000), 1);

      // Smooth ease-out
      const easedProgress = 1 - Math.pow(1 - progress, 4);

      setDisplayValue(Math.floor(easedProgress * value));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(update);
      } else {
        setDisplayValue(value);
      }
    };

    animationFrame = requestAnimationFrame(update);

    return () => cancelAnimationFrame(animationFrame);
  }, [start, value, duration]);

  return (
    <span>
      {displayValue.toLocaleString()}
      {suffix}
    </span>
  );
}

export function ProductShowcase({ locale }: { locale: "ar" | "en" }) {
  const text = content[locale];

  const statsRef = useRef<HTMLDivElement>(null);
  const statsInView = useInView(statsRef, { amount: 0.2, once: true });

  return (
    <section
      id="product"
      dir={locale === "ar" ? "rtl" : "ltr"}
      className="relative overflow-hidden border-t border-white/10 py-24 sm:py-28 lg:py-32"
      aria-labelledby="product-showcase-title"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_65%_10%,rgba(16,185,129,0.08),transparent_40%)]" />

      <div className="relative mx-auto grid max-w-7xl px-6 items-center gap-12 lg:grid-cols-[0.98fr_1.02fr] lg:gap-16">
        {/* =========================================================
            DASHBOARD PREVIEW
        ========================================================== */}
        <motion.div
          initial={{
            opacity: 0,
            x: locale === "ar" ? 40 : -40,
            scale: 0.97,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
            scale: 1,
          }}
          viewport={{
            once: true,
            amount: 0.25,
          }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative"
        >
          {/* Main frame */}
          <div className="relative h-[600px] overflow-hidden rounded-[1.25rem] border border-white/[0.12] bg-[#111827] p-2 shadow-[0_30px_100px_rgba(0,0,0,0.45)] sm:p-3">
            {/* Top glow */}
            <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-[radial-gradient(circle_at_50%_0%,rgba(52,211,153,0.20),transparent_65%)]" />

            {/* Product media */}
            <div className="relative overflow-hidden h-full rounded-[0.9rem]">
              <video
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                className="block h-full w-full rounded-[0.9rem] object-cover object-top"
              >
                <source
                  src="/media/dashboard/dashboard-preview2.mp4"
                  type="video/mp4"
                />
              </video>

              {/* Glass overlay */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-white/[0.02]" />
            </div>

            {/* Floating top indicator */}
            {/* <motion.div
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="absolute left-6 top-6 flex items-center gap-2 rounded-full border border-white/10 bg-black/30 px-3 py-1.5 backdrop-blur-xl sm:left-7 sm:top-7"
            >
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />

              <span className="font-[var(--font-mono)] text-[9px] tracking-[0.12em] text-white/65">
                LIVE OPERATIONS
              </span>
            </motion.div> */}
          </div>

          {/* Outer decorative glow */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.2 }}
            className="pointer-events-none absolute -inset-4 -z-10 rounded-[2rem] bg-emerald-400/[0.035] blur-3xl"
          />
        </motion.div>

        {/* =========================================================
            CONTENT
        ========================================================== */}
        <motion.div
          initial={{
            opacity: 0,
            x: locale === "ar" ? -40 : 40,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{
            once: true,
            amount: 0.25,
          }}
          transition={{
            duration: 0.8,
            delay: 0.1,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="max-w-2xl"
        >
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3.5 py-1 font-mono text-xs font-semibold uppercase tracking-widest text-emerald-300 backdrop-blur-md"
          >
            {text.eyebrow}
          </motion.div>

          {/* Heading */}
          <motion.h2
            id="product-showcase-title"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="max-w-3xl text-3xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-4xl"
          >
            {text.title}{" "}
            <span className="text-emerald-300">{text.highlight}</span>
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="mt-5 max-w-xl text-md leading-relaxed text-zinc-400 sm:text-md"
          >
            {text.description}
          </motion.p>

          {/* Divider */}
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            whileInView={{ scaleX: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className={`mt-10 h-px w-full origin-${
              locale === "ar" ? "right" : "left"
            } bg-white/10`}
          />

          {/* =====================================================
              STAT CARDS
          ====================================================== */}
          <div ref={statsRef} className="mt-8 grid grid-cols-3 gap-2 sm:gap-3">
            {text.stats.map((stat, index) => {
              const Icon = stat.icon;

              return (
                <motion.div
                  key={stat.label}
                  initial={{
                    opacity: 0,
                    y: 20,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.4,
                  }}
                  transition={{
                    duration: 0.6,
                    delay: 0.5 + index * 0.1,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  whileHover={{
                    y: -4,
                    transition: {
                      duration: 0.2,
                    },
                  }}
                  className="group relative overflow-hidden rounded-md border border-white/10 bg-[#111113]/90 px-4 py-5 backdrop-blur-xl transition-colors duration-300 hover:border-emerald-300/30 hover:bg-[#18181b] sm:px-5 sm:py-6"
                >
                  {/* Hover glow */}
                  <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_100%_0%,rgba(16,185,129,0.12),transparent_55%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                  {/* Icon */}
                  <div className="relative mb-4">
                    <Icon
                      size={16}
                      strokeWidth={1.7}
                      className="text-white/35 transition-colors duration-300 group-hover:text-emerald-300/70"
                    />
                  </div>

                  {/* Number */}
                  <strong className="relative block font-[var(--font-display)] text-3xl font-medium tracking-[-0.03em] text-white sm:text-[2rem]">
                    <NumberTicker
                      value={stat.value}
                      suffix={stat.suffix}
                      start={statsInView}
                    />
                  </strong>

                  {/* Label */}
                  <span className="relative mt-2 block font-[var(--font-mono)] text-[8px] tracking-[0.08em] text-white/45 sm:text-[9px]">
                    {stat.label}
                  </span>
                </motion.div>
              );
            })}
          </div>

          {/* =====================================================
              CTA
          ====================================================== */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-8 border-t border-white/10 pt-7"
          >
            <RainbowButton
              asChild
              size="lg"
              className="font-[var(--font-mono)] text-[10px] tracking-[0.06em]"
            >
              <Link href="https://gym-saas-website.vercel.app/" target="_blank">
                {text.cta}
                <ArrowUpRight size={17} />
              </Link>
            </RainbowButton>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
