"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  BarChart3,
  CalendarDays,
  CreditCard,
  UsersRound,
  ArrowUpRight,
  type LucideIcon,
} from "lucide-react";

import { Floating3DParticles } from "@/components/ui/floating-3d-particles";

const content = {
  ar: {
    eyebrow: "منظومة التشغيل / 03",

    title: "كل جزء من ناديك يعمل.",
    highlight: "في منظومة واحدة.",

    description:
      "من العضويات والمدفوعات إلى الحضور والحصص والتقارير، اجمع عمليات النادي اليومية في منصة واحدة تمنح فريقك رؤية أوضح وتحكمًا أسرع.",

    signal: "منظومة إدارة النادي",

    items: [
      {
        title: "العضويات",
        shortTitle: "MEMBERSHIPS",
        description:
          "أدر الأعضاء والاشتراكات والتجديدات والتجميد والانتهاء من سجل موحد وواضح.",
      },

      {
        title: "المدفوعات",
        shortTitle: "PAYMENTS",
        description:
          "تابع المدفوعات والفواتير والمبيعات والتجديدات مع رؤية مالية لحظية.",
      },

      {
        title: "الحصص والحجوزات",
        shortTitle: "CLASSES",
        description:
          "أنشئ الجداول، حدّد السعة، وتابع الحجوزات والمدربين ومعدلات الحضور.",
      },

      {
        title: "التحليلات",
        shortTitle: "ANALYTICS",
        description:
          "حوّل بيانات النادي اليومية إلى مؤشرات وتقارير تساعد الإدارة على اتخاذ القرار.",
      },
    ],

    explore: "استكشف الوحدة",
  },

  en: {
    eyebrow: "OPERATING SYSTEM / 03",

    title: "Every part of your gym works.",
    highlight: "As one system.",

    description:
      "From memberships and payments to attendance, classes, and reporting, bring your daily gym operations into one unified workspace built for clarity and speed.",

    signal: "GYM MANAGEMENT SYSTEM",

    items: [
      {
        title: "Memberships",
        shortTitle: "MEMBERSHIPS",
        description:
          "Manage members, subscriptions, renewals, freezes, and expirations from one connected record.",
      },

      {
        title: "Payments",
        shortTitle: "PAYMENTS",
        description:
          "Track payments, invoices, retail sales, and renewals with a clear real-time financial view.",
      },

      {
        title: "Classes & Reservations",
        shortTitle: "CLASSES",
        description:
          "Build schedules, control capacity, and manage bookings, trainers, and attendance.",
      },

      {
        title: "Analytics",
        shortTitle: "ANALYTICS",
        description:
          "Turn daily gym activity into meaningful metrics and reports your management team can act on.",
      },
    ],

    explore: "Explore module",
  },
} as const;

const icons: LucideIcon[] = [UsersRound, CreditCard, CalendarDays, BarChart3];

type FeatureItem = (typeof content)[keyof typeof content]["items"][number];

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 24,
  },

  visible: {
    opacity: 1,
    y: 0,
  },
};

function FeatureCard({
  item,
  index,
  locale,
}: {
  item: FeatureItem;
  index: number;
  locale: "ar" | "en";
}) {
  const [isHovered, setIsHovered] = useState(false);

  const Icon = icons[index];

  return (
    <motion.article
      variants={cardVariants}
      transition={{
        duration: 0.65,
        delay: index * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{
        y: -6,
        transition: {
          duration: 0.25,
          ease: "easeOut",
        },
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="group relative min-h-[300px] overflow-hidden rounded-[1.25rem] border border-white/[0.08] bg-[#10151d] p-6 transition-colors duration-500 sm:p-7 lg:min-h-[330px]"
    >
      {/* =========================================================
          PARTICLE BACKGROUND
      ========================================================== */}

      <div
        className={`pointer-events-none absolute inset-0 transition-opacity duration-700 ${
          isHovered ? "opacity-100" : "opacity-0"
        }`}
      >
        {isHovered && (
          <Floating3DParticles
            color="#6ee7b7"
            quantity={220}
            size={3}
            opacity={0.22}
            drift={0.45}
            depth={0.65}
          />
        )}
      </div>

      {/* =========================================================
          HOVER RADIAL GLOW
      ========================================================== */}

      <motion.div
        className="pointer-events-none absolute -right-24 -top-24 h-56 w-56 rounded-full bg-emerald-400/[0.10] blur-[90px]"
        animate={{
          scale: isHovered ? 1.25 : 1,
          opacity: isHovered ? 1 : 0,
        }}
        transition={{
          duration: 0.5,
        }}
      />

      <motion.div
        className="pointer-events-none absolute -bottom-24 -left-24 h-52 w-52 rounded-full bg-cyan-400/[0.06] blur-[85px]"
        animate={{
          scale: isHovered ? 1.2 : 1,
          opacity: isHovered ? 1 : 0,
        }}
        transition={{
          duration: 0.6,
        }}
      />

      {/* =========================================================
          TOP BORDER LIGHT
      ========================================================== */}

      <motion.div
        className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-emerald-300/70 to-transparent"
        initial={{
          scaleX: 0,
          opacity: 0,
        }}
        animate={{
          scaleX: isHovered ? 1 : 0,
          opacity: isHovered ? 1 : 0,
        }}
        transition={{
          duration: 0.45,
        }}
      />

      {/* =========================================================
          CONTENT
      ========================================================== */}

      <div className="relative z-10 flex h-full flex-col">
        {/* Top row */}
        <div className="flex items-start justify-between">
          {/* Icon */}
          <motion.div
            animate={{
              y: isHovered ? -3 : 0,
              rotate: isHovered ? -4 : 0,
              scale: isHovered ? 1.05 : 1,
            }}
            transition={{
              duration: 0.3,
            }}
            className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.035]"
          >
            <Icon
              size={20}
              strokeWidth={1.5}
              className="text-emerald-300 transition-colors duration-300 group-hover:text-emerald-200"
            />
          </motion.div>

          {/* Index */}
          <span className="font-[var(--font-mono)] text-[9px] tracking-[0.15em] text-white/25">
            0{index + 1}
          </span>
        </div>

        {/* Content */}
        <div className="mt-auto">
          {/* Label */}
          <div className="mb-4 font-[var(--font-mono)] text-[9px] tracking-[0.16em] text-emerald-300/50">
            {item.shortTitle}
          </div>

          {/* Title */}
          <motion.h3
            animate={{
              x: isHovered ? (locale === "ar" ? -2 : 2) : 0,
            }}
            transition={{
              duration: 0.25,
            }}
            className="font-[var(--font-display)] text-2xl font-medium tracking-[-0.025em] text-white"
          >
            {item.title}
          </motion.h3>

          {/* Description */}
          <p className="mt-3 max-w-[380px] text-sm leading-6 text-white/45 transition-colors duration-300 group-hover:text-white/60">
            {item.description}
          </p>

          {/* Bottom interaction */}
          <motion.div
            animate={{
              opacity: isHovered ? 1 : 0.45,
              x: isHovered ? 0 : locale === "ar" ? 4 : -4,
            }}
            transition={{
              duration: 0.3,
            }}
            className="mt-7 flex items-center gap-2 border-t border-white/[0.07] pt-4 font-[var(--font-mono)] text-[9px] tracking-[0.12em] text-white/45"
          >
            <span>{content[locale].explore}</span>

            <ArrowUpRight
              size={13}
              className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </motion.div>
        </div>
      </div>
    </motion.article>
  );
}

export function Features({ locale }: { locale: "ar" | "en" }) {
  const text = content[locale];

  return (
    <section
      id="section-3"
      dir={locale === "ar" ? "rtl" : "ltr"}
      className="relative overflow-hidden border-t border-white/[0.08] py-24 sm:py-28 lg:py-32"
      aria-labelledby="features-title"
    >
      {/* =========================================================
          SECTION BACKGROUND
      ========================================================== */}

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[10%] top-0 h-[500px] w-[500px] rounded-full bg-emerald-400/[0.035] blur-[140px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_65%_10%,rgba(16,185,129,0.06),transparent_40%)]" />
      </div>

      <div className="relative mx-auto w-[min(100%-32px,1440px)]">
        {/* =========================================================
            HEADER
        ========================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 22,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20"
        >
          {/* Left */}
          <div className="max-w-xl">
            {/* Eyebrow */}
            <p className="font-[var(--font-mono)] text-[10px] tracking-[0.16em] text-emerald-300/70">
              {text.eyebrow}
            </p>

            {/* Title */}
            <h2
              id="features-title"
              className="mt-6 max-w-[680px] font-[var(--font-display)] text-4xl font-medium leading-[1.05] tracking-[-0.035em] text-white sm:text-5xl lg:text-[3.8rem]"
            >
              {text.title}{" "}
              <span className="bg-gradient-to-r from-emerald-200 via-teal-200 to-cyan-300 bg-clip-text text-transparent">
                {text.highlight}
              </span>
            </h2>
          </div>

          {/* Right */}
          <div className="flex items-end">
            <div className="max-w-xl">
              <p className="text-base leading-7 text-white/55 sm:text-lg sm:leading-8">
                {text.description}
              </p>

              {/* System signal */}
              <div className="mt-8 flex items-center gap-4 border-t border-white/[0.08] pt-5">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-300/50" />

                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-300 shadow-[0_0_14px_rgba(110,231,183,0.75)]" />
                </span>

                <span className="font-[var(--font-mono)] text-[9px] tracking-[0.14em] text-white/35">
                  {text.signal}
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* =========================================================
            FEATURE GRID
        ========================================================== */}

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.15,
          }}
          className="mt-14 grid gap-4 sm:grid-cols-2 lg:mt-16"
        >
          {text.items.map((item, index) => (
            <FeatureCard
              key={item.title}
              item={item}
              index={index}
              locale={locale}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
