"use client";

import { useRef, type MouseEvent } from "react";

import { motion, useMotionTemplate, useMotionValue } from "motion/react";

import {
  BarChart3,
  CalendarDays,
  CreditCard,
  UsersRound,
  type LucideIcon,
} from "lucide-react";

import { Floating3DParticles } from "@/components/ui/floating-3d-particles";

import StackingCards, {
  StackingCardItem,
} from "@/components/ui/stacking-cards";

const content = {
  ar: {
    eyebrow: "منظومة التشغيل / 03",

    title: "كل جزء من ناديك يعمل",

    highlight: "في منظومة واحدة.",

    description:
      "من العضويات والمدفوعات إلى الحضور والحصص والتقارير، اجمع عمليات النادي اليومية في منصة واحدة تمنح فريقك رؤية أوضح وتحكمًا أسرع.",

    signal: "منظومة إدارة النادي المباشرة",

    stepPrefix: "الخطوة",

    items: [
      {
        title: "إدارة العضويات والاشتراكات",

        shortTitle: "MEMBERSHIPS",

        description:
          "أدر الأعضاء والاشتراكات والتجديدات والتجميد والانتهاء من سجل موحد وواضح بمرونة فائقة.",
      },

      {
        title: "المدفوعات والعمليات المالية",

        shortTitle: "PAYMENTS",

        description:
          "تابع المدفوعات والفواتير والمبيعات والتجديدات مع رؤية مالية لحظية وتحليلات دقيقة.",
      },

      {
        title: "الحصص والحجوزات الذكية",

        shortTitle: "CLASSES & SLOTS",

        description:
          "أنشئ الجداول، حدّد السعة، وتابع الحجوزات والمدربين ومعدلات الحضور بكل سهولة.",
      },

      {
        title: "التحليلات واتخاذ القرار",

        shortTitle: "ANALYTICS & REPORTS",

        description:
          "حوّل بيانات النادي اليومية إلى مؤشرات وتقارير تفاعلية تساعد الإدارة على الاتخاذ السريع للقرار.",
      },
    ],
  },

  en: {
    eyebrow: "OPERATING SYSTEM / 03",

    title: "Every part of your gym works",

    highlight: "as one system.",

    description:
      "From memberships and payments to attendance, classes, and reporting, bring your daily gym operations into one unified workspace built for clarity and speed.",

    signal: "LIVE GYM MANAGEMENT SYSTEM",

    stepPrefix: "Step",

    items: [
      {
        title: "Memberships & Subscriptions",

        shortTitle: "MEMBERSHIPS",

        description:
          "Manage members, subscriptions, renewals, freezes, and expirations from one connected record.",
      },

      {
        title: "Payments & Financial Operations",

        shortTitle: "PAYMENTS",

        description:
          "Track payments, invoices, retail sales, and renewals with a clear real-time financial view.",
      },

      {
        title: "Classes & Smart Reservations",

        shortTitle: "CLASSES",

        description:
          "Build schedules, control capacity, and manage bookings, trainers, and attendance effortlessly.",
      },

      {
        title: "Analytics & Decision Insights",

        shortTitle: "ANALYTICS",

        description:
          "Turn daily gym activity into meaningful metrics and reports your management team can act on.",
      },
    ],
  },
} as const;

const icons: LucideIcon[] = [UsersRound, CreditCard, CalendarDays, BarChart3];

type FeatureItem = (typeof content)[keyof typeof content]["items"][number];

/* ============================================================================
   FEATURE CARD
============================================================================ */

function FeatureCard({
  item,
  index,
  stepPrefix,
}: {
  item: FeatureItem;
  index: number;
  stepPrefix: string;
}) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const Icon = icons[index % icons.length];

  function handleMouseMove({
    currentTarget,
    clientX,
    clientY,
  }: MouseEvent<HTMLElement>) {
    const { left, top } = currentTarget.getBoundingClientRect();

    mouseX.set(clientX - left);

    mouseY.set(clientY - top);
  }

  return (
    <motion.article
      initial={{
        opacity: 0,
        y: 25,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        margin: "-50px",
      }}
      transition={{
        duration: 0.6,
        delay: index * 0.05,
        ease: [0.22, 1, 0.36, 1],
      }}
      onMouseMove={handleMouseMove}
      className="
        group
        relative
        h-full
        min-h-[268px]
        overflow-hidden
        rounded-[4px]
        border
        border-[#27272a]
        bg-[#111113]/95
        p-5
        shadow-[0_-18px_70px_rgba(0,0,0,0.35)]
        backdrop-blur-2xl
        transition-[border-color,box-shadow]
        duration-500
        hover:border-emerald-400/45
        hover:shadow-[0_-20px_80px_rgba(16,185,129,0.08)]
        sm:p-5
      "
    >
      {/* ================================================================
          BACKGROUND GLOW
      ================================================================= */}

      <div
        className="
          pointer-events-none
          absolute
          -right-32
          -top-32
          h-72
          w-72
          rounded-full
          bg-emerald-500/[0.06]
          blur-[90px]
          transition-all
          duration-700
          group-hover:bg-emerald-400/[0.10]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -bottom-32
          -left-32
          h-72
          w-72
          rounded-full
          bg-teal-500/[0.035]
          blur-[100px]
        "
      />

      {/* ================================================================
          CURSOR SPOTLIGHT
      ================================================================= */}

      {/* <motion.div
        className="
          pointer-events-none
          absolute
          -inset-px
          rounded-[4px]
          opacity-0
          transition-opacity
          duration-300
          group-hover:opacity-100
        "
        style={{
          background: useMotionTemplate`
              radial-gradient(
                500px circle
                at ${mouseX}px ${mouseY}px,
                rgba(110, 231, 183, 0.11),
                transparent 70%
              )
            `,
        }}
      /> */}

      {/* ================================================================
          BORDER GLOW
      ================================================================= */}

      {/* <motion.div
        className="
          pointer-events-none
          absolute
          -inset-px
          rounded-[4px]
          opacity-0
          transition-opacity
          duration-300
          group-hover:opacity-100
        "
        style={{
          background: useMotionTemplate`
              radial-gradient(
                260px circle
                at ${mouseX}px ${mouseY}px,
                rgba(52, 211, 153, 0.25),
                transparent 75%
              )
            `,
        }}
      /> */}

      {/* ================================================================
          PARTICLES
      ================================================================= */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-0
          transition-opacity
          duration-700
          group-hover:opacity-100
        "
      >
        <Floating3DParticles
          color="#6ee7b7"
          quantity={45}
          size={2}
          opacity={0.22}
          drift={0.25}
          depth={0.5}
        />
      </div>

      {/* ================================================================
          CONTENT
      ================================================================= */}

      <div
        className="
          relative
          z-10
          flex
          min-h-[228px]
          flex-col
          justify-start
        "
      >
        {/* ============================================================
            TOP BAR
        ============================================================= */}

        <div
          className="
            flex
            items-center
            justify-between
          "
        >
          {/* Icon */}

          <div
            className="
              flex
              h-[42px]
              w-[42px]
              items-center
              justify-center
              rounded-[4px]
              border
              border-[#3f3f46]
              bg-[#18181b]
              text-emerald-400
              transition-all
              duration-500
              group-hover:scale-105
              group-hover:border-emerald-400/40
              group-hover:bg-emerald-500/10
              group-hover:text-emerald-300
              group-hover:shadow-[0_0_30px_rgba(110,231,183,0.18)]
            "
          >
            <Icon size={18} strokeWidth={1.7} />
          </div>

          {/* Step */}

          <div
            className="
              inline-flex
              items-center
              gap-1.5
              rounded-[2px]
              border
              border-[#3f3f46]
              bg-[#18181b]
              px-2.5
              py-1
              font-mono
              text-[10px]
              font-medium
              tracking-wide
              text-zinc-500
              backdrop-blur-md
              transition-colors
              duration-300
              group-hover:border-emerald-500/45
              group-hover:text-emerald-300
            "
          >
            <span>{stepPrefix}</span>

            <span
              className="
                font-bold
                text-white
              "
            >
              0{index + 1}
            </span>
          </div>
        </div>

        {/* ============================================================
            CONTENT
        ============================================================= */}

        <div
          className="
            mt-[30px]
            space-y-4
          "
        >
          <div
            className="
              font-mono
              text-[10px]
              uppercase
              tracking-[0.2em]
              text-emerald-400/75
            "
          >
            {item.shortTitle}
          </div>

          <h3
            className="
              max-w-xl
              text-[1.65rem]
              font-medium
              leading-tight
              tracking-tight
              text-white
              transition-colors
              duration-300
              group-hover:text-emerald-200
              sm:text-3xl
            "
          >
            {item.title}
          </h3>

          <div
            className="
              h-px
              w-full
              bg-gradient-to-r
              from-emerald-400/45
              via-emerald-300/15
              to-transparent
            "
          />

          <p
            className="
              max-w-xl
              text-[0.9rem]
              leading-relaxed
              text-zinc-400
              transition-colors
              duration-300
              group-hover:text-zinc-300
              sm:text-base
            "
          >
            {item.description}
          </p>
        </div>
      </div>

      {/* ================================================================
          LARGE NUMBER
      ================================================================= */}

      <div
        className="
          pointer-events-none
          absolute
          -bottom-8
          -right-2
          select-none
          font-mono
          text-[100px]
          font-bold
          leading-none
          text-white/[0.035]
          transition-all
          duration-700
          group-hover:text-emerald-400/[0.045]
        "
      >
        0{index + 1}
      </div>
    </motion.article>
  );
}

/* ============================================================================
   MAIN FEATURES
============================================================================ */

export function Features({ locale }: { locale: "ar" | "en" }) {
  const text = content[locale];

  const isAr = locale === "ar";

  return (
    <section
      id="features"
      dir={isAr ? "rtl" : "ltr"}
      aria-labelledby="features-title"
      className="
        relative
        overflow-hidden
        border-t
        border-white/[0.08]
        bg-[#080b10]
        py-20
        sm:py-28
        lg:py-32
      "
    >
      {/* ================================================================
          AMBIENT BACKGROUND
      ================================================================= */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          overflow-hidden
        "
      >
        <div
          className="
            absolute
            -top-40
            right-1/4
            h-[500px]
            w-[500px]
            rounded-full
            bg-emerald-500/[0.04]
            blur-[150px]
          "
        />

        <div
          className="
            absolute
            top-1/2
            -left-40
            h-[600px]
            w-[600px]
            rounded-full
            bg-teal-500/[0.03]
            blur-[160px]
          "
        />

        <div
          className="
            absolute
            bottom-0
            right-10
            h-[400px]
            w-[400px]
            rounded-full
            bg-cyan-500/[0.03]
            blur-[140px]
          "
        />
      </div>

      {/* ================================================================
          CONTAINER
      ================================================================= */}

      <div
        className="
          relative
          mx-auto
          max-w-7xl
          px-6
        "
      >
        <div
          className="
            grid
            items-start
            gap-16
            lg:grid-cols-12
            lg:gap-20
          "
        >
          {/* ============================================================
              LEFT SIDE
          ============================================================= */}

          <div
            className="
              lg:sticky
              lg:top-28
              lg:col-span-5
              lg:self-start
            "
          >
            <div
              className="
                space-y-6
              "
            >
              {/* Eyebrow */}

              <motion.div
                initial={{
                  opacity: 0,
                  x: isAr ? 20 : -20,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.6,
                }}
                className="
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  border
                  border-emerald-500/25
                  bg-emerald-500/10
                  px-4
                  py-1.5
                  font-mono
                  text-xs
                  font-semibold
                  uppercase
                  tracking-widest
                  text-emerald-300
                  backdrop-blur-md
                "
              >
                <span
                  className="
                    h-1.5
                    w-1.5
                    animate-pulse
                    rounded-full
                    bg-emerald-400
                  "
                />

                {text.eyebrow}
              </motion.div>

              {/* Title */}

              <motion.h2
                id="features-title"
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
                }}
                transition={{
                  duration: 0.7,
                  delay: 0.1,
                }}
                className="
                  text-3xl
                  font-extrabold
                  leading-[1.12]
                  tracking-tight
                  text-white
                  sm:text-4xl
                  lg:text-5xl
                "
              >
                {text.title}

                <span
                  className="
                    mt-2
                    block
                    bg-gradient-to-r
                    from-emerald-300
                    via-teal-200
                    to-cyan-300
                    bg-clip-text
                    text-transparent
                  "
                >
                  {text.highlight}
                </span>
              </motion.h2>

              {/* Description */}

              <motion.p
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
                }}
                transition={{
                  duration: 0.7,
                  delay: 0.2,
                }}
                className="
                  max-w-xl
                  text-base
                  leading-relaxed
                  text-zinc-400
                  sm:text-lg
                "
              >
                {text.description}
              </motion.p>

              {/* Live Indicator */}

              <motion.div
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
                }}
                transition={{
                  duration: 0.7,
                  delay: 0.3,
                }}
                className="
                  mt-8
                  flex
                  items-center
                  gap-3
                  border-t
                  border-white/10
                  pt-6
                "
              >
                <span
                  className="
                    relative
                    flex
                    h-3
                    w-3
                  "
                >
                  <span
                    className="
                      absolute
                      inline-flex
                      h-full
                      w-full
                      animate-ping
                      rounded-full
                      bg-emerald-400
                      opacity-75
                    "
                  />

                  <span
                    className="
                      relative
                      inline-flex
                      h-3
                      w-3
                      rounded-full
                      bg-emerald-400
                      shadow-[0_0_12px_rgba(52,211,153,0.8)]
                    "
                  />
                </span>

                <span
                  className="
                    font-mono
                    text-xs
                    uppercase
                    tracking-wider
                    text-zinc-400
                  "
                >
                  {text.signal}
                </span>
              </motion.div>
            </div>
          </div>

          {/* ============================================================
              RIGHT / STACKING CARDS
          ============================================================= */}

          <div
            className="
              relative
              lg:col-span-7
            "
          >
            <StackingCards
              totalCards={text.items.length}
              scaleMultiplier={0.025}
              className="
                relative
              "
            >
              {text.items.map((item, index) => (
                <StackingCardItem
                  key={item.title}
                  index={index}
                  className="
                      h-[330px]
                      sm:h-[350px]
                      lg:h-[365px]
                    "
                  /*
                   * Keep the cards very close to each other.
                   *
                   * The important part of the effect is still
                   * the scale driven by scroll progress.
                   */
                  topPosition={`calc(${index * 8}px)`}
                >
                  <FeatureCard
                    item={item}
                    index={index}
                    stepPrefix={text.stepPrefix}
                  />
                </StackingCardItem>
              ))}
            </StackingCards>
          </div>
        </div>
      </div>
    </section>
  );
}
