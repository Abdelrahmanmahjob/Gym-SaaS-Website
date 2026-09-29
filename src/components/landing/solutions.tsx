"use client";

import { useEffect, useMemo, useState } from "react";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

import {
  ArrowUpRight,
  Check,
  // ChevronDown,
  Dumbbell,
  GraduationCap,
  HeartPulse,
  Scissors,
  Trophy,
  // UsersRound,
  type LucideIcon,
} from "lucide-react";

import Link from "next/link";

import { LightRays } from "@/components/ui/light-rays";
import { StudioButton } from "../ui/studio-button";
import Image from "next/image";

type Locale = "ar" | "en";

type IndustryId =
  | "gyms"
  | "padel"
  | "studios"
  | "salons"
  | "clinics"
  | "training";

type Industry = {
  id: IndustryId;
  tabLabel: string;
  eyebrow: string;
  title: string;
  description: string;
  features: string[];
  visualLabel: string;
  visualMeta: string;
  icon: LucideIcon;
  image: string;
};

const content = {
  ar: {
    eyebrow: "الحلول",

    headline: "مصممة لطريقة عمل",
    highlight: "كل نشاط خدمي.",

    description:
      "أيًا كان نوع نشاطك، تساعدك ANAN Sustainability على إدارة العمل الذي يقف خلف الخدمة — من العملاء والحجوزات إلى الاشتراكات والمدفوعات وفريق العمل.",

    industries: [
      {
        id: "gyms",
        tabLabel: "الأندية الرياضية",
        eyebrow: "GYMS & FITNESS CENTERS",
        title: "أدر ناديك من مكان واحد.",
        description:
          "أدر العضويات والحجوزات والعملاء وفريق النادي ضمن منظومة تشغيل واحدة.",
        features: [
          "إدارة العضويات والاشتراكات",
          "الحجوزات والحصص الجماعية",
          "الحضور ونقاط البيع",
          "إدارة المدربين والعملاء",
        ],
        visualLabel: "GYM OPERATIONS",
        visualMeta: "MEMBERSHIPS / CLASSES / POS",
        icon: Dumbbell,
        image: "/media/industries/gym2.jpeg",
      },

      {
        id: "padel",
        tabLabel: "أندية البادل",
        eyebrow: "PADEL CLUBS",
        title: "املأ ملاعبك. نظّم كل حجز.",
        description:
          "أدر الحجوزات والعملاء والاشتراكات والمدفوعات من مساحة تشغيل واحدة.",
        features: [
          "حجز الملاعب والمواعيد",
          "إدارة العملاء والاشتراكات",
          "المدفوعات والفواتير",
          "متابعة الإشغال والحجوزات",
        ],
        visualLabel: "PADEL OPERATIONS",
        visualMeta: "BOOKINGS / CUSTOMERS / PAYMENTS",
        icon: Trophy,
        image: "/media/industries/padel.jpg",
      },

      {
        id: "studios",
        tabLabel: "الاستوديوهات",
        eyebrow: "STUDIOS",
        title: "نسّق كل حصة وكل عميل.",
        description:
          "أدر الحصص والحجوزات والعضويات والعملاء من تدفق عمل مصمم للاستوديوهات.",
        features: [
          "إدارة الحصص والجداول",
          "الحجوزات والمقاعد",
          "العضويات والاشتراكات",
          "إدارة العملاء والمدربين",
        ],
        visualLabel: "STUDIO OPERATIONS",
        visualMeta: "CLASSES / BOOKINGS / MEMBERS",
        icon: HeartPulse,
        image: "/media/industries/studio.webp",
      },

      {
        id: "salons",
        tabLabel: "الصالونات",
        eyebrow: "SALONS",
        title: "كل موعد. كل عميل. تحت السيطرة.",
        description:
          "نظّم العملاء والمواعيد والموظفين والمدفوعات في تجربة تشغيل بسيطة وواضحة.",
        features: [
          "المواعيد والحجوزات",
          "إدارة العملاء",
          "إدارة الموظفين",
          "المدفوعات والفواتير",
        ],
        visualLabel: "SALON OPERATIONS",
        visualMeta: "APPOINTMENTS / STAFF / PAYMENTS",
        icon: Scissors,
        image: "/media/industries/salon.jpeg",
      },

      {
        id: "clinics",
        tabLabel: "العيادات",
        eyebrow: "CLINICS",
        title: "نظّم المواعيد والعمليات اليومية.",
        description:
          "أدر المواعيد والعملاء والموظفين والمدفوعات ضمن بيئة تشغيل مترابطة.",
        features: [
          "إدارة المواعيد",
          "إدارة العملاء",
          "إدارة الموظفين",
          "المدفوعات والفواتير",
        ],
        visualLabel: "CLINIC OPERATIONS",
        visualMeta: "APPOINTMENTS / CUSTOMERS / STAFF",
        icon: HeartPulse,
        image: "/media/industries/clinic.jpeg",
      },

      {
        id: "training",
        tabLabel: "مراكز التدريب",
        eyebrow: "TRAINING CENTERS",
        title: "كل طالب. كل جدول. في مكان واحد.",
        description:
          "أدر الطلاب والجداول والاشتراكات والمدفوعات من منظومة تشغيل مصممة لمراكز التدريب.",
        features: [
          "إدارة الطلاب",
          "الجداول والحصص",
          "الاشتراكات",
          "المدفوعات والفواتير",
        ],
        visualLabel: "TRAINING OPERATIONS",
        visualMeta: "STUDENTS / SCHEDULES / PAYMENTS",
        icon: GraduationCap,
        image: "/media/industries/training-center.jpg",
      },
    ] satisfies Industry[],

    explore: "استكشف الحل",
    videoLabel: "تجربة الجوال",
    live: "LIVE EXPERIENCE",
    replaceVideo: "ضع فيديو المنتج هنا",
    nextIndustry: "الحل التالي",
  },

  en: {
    eyebrow: "SOLUTIONS",

    headline: "Built for the way",
    highlight: "your service business works.",

    description:
      "Whatever your service, ANAN Sustainability helps you manage the business behind it — from customers and bookings to memberships, payments, and your team.",

    industries: [
      {
        id: "gyms",
        tabLabel: "Gyms & Fitness",
        eyebrow: "GYMS & FITNESS CENTERS",
        title: "Run your gym from one place.",
        description:
          "Manage memberships, bookings, customers, and your team in one connected operating system.",
        features: [
          "Membership & subscription management",
          "Class and booking management",
          "Attendance & point of sale",
          "Trainer and customer management",
        ],
        visualLabel: "GYM OPERATIONS",
        visualMeta: "MEMBERSHIPS / CLASSES / POS",
        icon: Dumbbell,
        image: "/media/industries/gym2.jpeg",
      },

      {
        id: "padel",
        tabLabel: "Padel Clubs",
        eyebrow: "PADEL CLUBS",
        title: "Keep every court moving.",
        description:
          "Manage bookings, customers, memberships, and payments from one operating workspace.",
        features: [
          "Court and schedule bookings",
          "Customer & membership management",
          "Payments and invoices",
          "Occupancy and booking visibility",
        ],
        visualLabel: "PADEL OPERATIONS",
        visualMeta: "BOOKINGS / CUSTOMERS / PAYMENTS",
        icon: Trophy,
        image: "/media/industries/padel.jpg",
      },

      {
        id: "studios",
        tabLabel: "Studios",
        eyebrow: "STUDIOS",
        title: "Coordinate every class and customer.",
        description:
          "Manage classes, bookings, memberships, and customers from a workflow designed for studios.",
        features: [
          "Class and schedule management",
          "Bookings and capacity",
          "Memberships and subscriptions",
          "Customer and trainer management",
        ],
        visualLabel: "STUDIO OPERATIONS",
        visualMeta: "CLASSES / BOOKINGS / MEMBERS",
        icon: HeartPulse,
        image: "/media/industries/studio.webp",
      },

      {
        id: "salons",
        tabLabel: "Salons",
        eyebrow: "SALONS",
        title: "Every appointment. Every customer. In control.",
        description:
          "Organize customers, appointments, staff, and payments in one clear operating experience.",
        features: [
          "Appointments and bookings",
          "Customer management",
          "Staff management",
          "Payments and invoices",
        ],
        visualLabel: "SALON OPERATIONS",
        visualMeta: "APPOINTMENTS / STAFF / PAYMENTS",
        icon: Scissors,
        image: "/media/industries/salon.jpeg",
      },

      {
        id: "clinics",
        tabLabel: "Clinics",
        eyebrow: "CLINICS",
        title: "Organize your daily operations.",
        description:
          "Manage appointments, customers, staff, and payments through one connected workspace.",
        features: [
          "Appointment management",
          "Customer management",
          "Staff management",
          "Payments and invoices",
        ],
        visualLabel: "CLINIC OPERATIONS",
        visualMeta: "APPOINTMENTS / CUSTOMERS / STAFF",
        icon: HeartPulse,
        image: "/media/industries/clinic.jpeg",
      },

      {
        id: "training",
        tabLabel: "Training Centers",
        eyebrow: "TRAINING CENTERS",
        title: "Every student. Every schedule. One place.",
        description:
          "Manage students, schedules, subscriptions, and payments from one training operations platform.",
        features: [
          "Student management",
          "Schedule and class management",
          "Subscriptions",
          "Payments and invoices",
        ],
        visualLabel: "TRAINING OPERATIONS",
        visualMeta: "STUDENTS / SCHEDULES / PAYMENTS",
        icon: GraduationCap,
        image: "/media/industries/training-center.jpg",
      },
    ] satisfies Industry[],

    explore: "Explore solution",
    videoLabel: "MOBILE EXPERIENCE",
    live: "LIVE EXPERIENCE",
    replaceVideo: "Place your product video here",
    nextIndustry: "Next solution",
  },
} as const;

/* ================================================================
   INDUSTRY VISUAL DATA
================================================================ */

const visualAccents: Record<
  IndustryId,
  {
    glow: string;
    secondaryGlow: string;
    code: string;
  }
> = {
  gyms: {
    glow: "rgba(16,185,129,0.14)",
    secondaryGlow: "rgba(132,204,22,0.08)",
    code: "GYM",
  },

  padel: {
    glow: "rgba(34,197,94,0.13)",
    secondaryGlow: "rgba(78,222,163,0.07)",
    code: "PADEL",
  },

  studios: {
    glow: "rgba(78,222,163,0.13)",
    secondaryGlow: "rgba(16,185,129,0.07)",
    code: "STUDIO",
  },

  salons: {
    glow: "rgba(132,204,22,0.12)",
    secondaryGlow: "rgba(34,197,94,0.07)",
    code: "SALON",
  },

  clinics: {
    glow: "rgba(16,185,129,0.12)",
    secondaryGlow: "rgba(78,222,163,0.08)",
    code: "CLINIC",
  },

  training: {
    glow: "rgba(34,197,94,0.12)",
    secondaryGlow: "rgba(132,204,22,0.08)",
    code: "TRAIN",
  },
};

/* ================================================================
   SOLUTION VISUAL
================================================================ */

function SolutionVisual({
  industry,
  locale,
  prefersReducedMotion,
}: {
  industry: Industry;
  locale: Locale;
  prefersReducedMotion: boolean;
}) {
  const accent = visualAccents[industry.id];

  return (
    <div className="relative min-h-[540px] w-full overflow-hidden bg-[#09090b] sm:min-h-[620px] lg:min-h-[680px]">
      {/* ==========================================================
          ATMOSPHERE
      =========================================================== */}

      <div
        className="pointer-events-none absolute -left-20 top-0 h-[420px] w-[420px] rounded-full blur-[130px]"
        style={{
          background: accent.glow,
        }}
      />

      <div
        className="pointer-events-none absolute -bottom-20 right-0 h-[360px] w-[360px] rounded-full blur-[120px]"
        style={{
          background: accent.secondaryGlow,
        }}
      />

      {/* Light rays stay subtle */}
      <LightRays
        count={4}
        color={accent.glow}
        blur={48}
        speed={20}
        length="70%"
        className="opacity-40"
      />

      {/* ==========================================================
          TECHNICAL GRID
      =========================================================== */}

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* ==========================================================
          TOP METADATA
      =========================================================== */}

      <div className="absolute left-5 right-5 top-5 z-20 flex items-center justify-between border-b border-[#27272a] pb-4 sm:left-7 sm:right-7 sm:top-7">
        <div className="font-[var(--font-mono)] text-[9px] tracking-[0.13em] text-white/30">
          {industry.visualLabel}
        </div>

        <div className="flex items-center gap-2 font-[var(--font-mono)] text-[8px] tracking-[0.1em] text-white/20">
          <span className="h-1.5 w-1.5 rounded-full bg-[#4edea3] shadow-[0_0_10px_rgba(78,222,163,0.7)]" />

          {locale === "ar" ? "نشط" : "ACTIVE"}
        </div>
      </div>

      {/* ==========================================================
          ABSTRACT SYSTEM PANEL
      =========================================================== */}

      <div className="absolute inset-0 rounded-4xl overflow-hidden">
        {/* Main panel */}
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: prefersReducedMotion ? 0.15 : 0.7,
          }}
          className="absolute inset-0 w-full h-full"
        >
          {/* Panel header */}
          {/* <div className="flex items-center justify-between border-b border-[#27272a] px-4 py-3 sm:px-5">
            <div>
              <div className="h-2.5 w-24 bg-white/[0.08]" />

              <div className="mt-2 h-1.5 w-16 bg-white/[0.04]" />
            </div>

            <div className="h-6 w-20 border border-[#27272a] bg-[#18181b]" />
          </div> */}

          {/* Fake dashboard blocks */}
          {/* <div className="grid grid-cols-2 gap-3 p-4 sm:p-5">
            {[0, 1, 2, 3].map((item) => (
              <motion.div
                key={item}
                initial={{
                  opacity: 0,
                  y: 10,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 0.15 + item * 0.07,
                  duration: 0.45,
                }}
                className="border border-[#27272a] bg-[#09090b]/70 p-3 sm:p-4"
              >
                <div className="flex items-center justify-between">
                  <div className="h-1.5 w-12 bg-white/[0.05]" />

                  <div className="h-1.5 w-1.5 rounded-full bg-[#4edea3]/70" />
                </div>

                <div className="mt-5 h-5 w-20 bg-white/[0.08]" />

                <div className="mt-3 h-1.5 w-12 bg-white/[0.04]" />
              </motion.div>
            ))}
          </div> */}

          {/* Chart */}
          {/* <div className="absolute bottom-5 left-4 right-4 top-[44%] border border-[#27272a] bg-[#09090b]/60 p-4 sm:left-5 sm:right-5">
            <div className="flex items-center justify-between">
              <div className="h-1.5 w-20 bg-white/[0.06]" />

              <div className="font-[var(--font-mono)] text-[7px] text-white/20">
                30D
              </div>
            </div>

            <svg
              viewBox="0 0 420 130"
              className="mt-6 h-[75%] w-full"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <defs>
                <linearGradient
                  id={`solution-gradient-${industry.id}`}
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="1"
                >
                  <stop offset="0%" stopColor="#4edea3" stopOpacity="0.2" />

                  <stop offset="100%" stopColor="#4edea3" stopOpacity="0" />
                </linearGradient>
              </defs>

              <path
                d="M0 96 C40 82 63 90 95 72 S145 90 178 62 S235 65 267 45 S318 65 350 42 S392 35 420 21 V130 H0 Z"
                fill={`url(#solution-gradient-${industry.id})`}
              />

              <motion.path
                d="M0 96 C40 82 63 90 95 72 S145 90 178 62 S235 65 267 45 S318 65 350 42 S392 35 420 21"
                fill="none"
                stroke="#4edea3"
                strokeWidth="1.5"
                strokeLinecap="round"
                initial={{
                  pathLength: 0,
                }}
                animate={{
                  pathLength: 1,
                }}
                transition={{
                  duration: prefersReducedMotion ? 0.15 : 1.3,
                  ease: "easeOut",
                }}
              />
            </svg>
          </div> */}
          {industry.image && (
            <Image
              width={120}
              height={100}
              src={industry.image}
              alt={industry.title}
              className="absolute inset-0 h-full w-full object-cover"
            />
          )}
        </motion.div>

        {/* Floating telemetry block */}
        {/* <motion.div
          initial={{
            opacity: 0,
            x: 20,
            y: 20,
          }}
          animate={{
            opacity: 1,
            x: 0,
            y: 0,
          }}
          transition={{
            duration: prefersReducedMotion ? 0.15 : 0.7,
            delay: 0.2,
          }}
          className="absolute right-0 top-[23%] z-10 w-[42%] max-w-[260px] border border-[#3f3f46] bg-[#18181b]/90 p-4 backdrop-blur-xl sm:p-5"
        >
          <div className="flex items-center justify-between">
            <span className="font-[var(--font-mono)] text-[8px] tracking-[0.1em] text-white/30">
              TELEMETRY
            </span>

            <span className="font-[var(--font-mono)] text-[8px] text-[#91db2a]">
              +ACTIVE
            </span>
          </div>

          <div className="mt-6 font-[var(--font-display)] text-3xl tracking-[-0.04em] text-white sm:text-4xl">
            24/7
          </div>

          <div className="mt-2 text-[9px] text-white/30">
            {locale === "ar" ? "رؤية تشغيلية" : "OPERATING VISIBILITY"}
          </div>

          <div className="mt-5 flex items-end gap-1">
            {[35, 52, 40, 68, 58, 78, 92].map((height, index) => (
              <motion.span
                key={index}
                initial={{
                  height: 0,
                }}
                animate={{
                  height,
                }}
                transition={{
                  delay: 0.25 + index * 0.05,
                  duration: 0.4,
                }}
                className="flex-1 bg-[#4edea3]/40"
                style={{
                  maxHeight: "38px",
                }}
              />
            ))}
          </div>
        </motion.div> */}

        {/* ======================================================
            MOBILE PHONE MOCKUP
        ======================================================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 35,
            rotate: 4,
          }}
          animate={{
            opacity: 1,
            y: 0,
            rotate: 3,
          }}
          transition={{
            duration: prefersReducedMotion ? 0.15 : 0.8,
            delay: 0.18,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="absolute hidden bottom-[5%] right-[4%] z-20 w-[38%] min-w-[160px] max-w-[245px] sm:right-[8%] sm:w-[34%] lg:right-[9%]"
        >
          {/* Device glow */}
          <div className="pointer-events-none absolute -inset-5 rounded-[3rem] bg-[#10b981]/[0.06] blur-[35px]" />

          {/* Phone */}
          <div className="relative rounded-[2.3rem] border-[5px] border-[#27272a] bg-[#030303] p-1.5 shadow-[0_30px_80px_rgba(0,0,0,0.45)] sm:rounded-[2.7rem]">
            {/* Top speaker */}
            <div className="absolute left-1/2 top-2 z-30 h-5 w-20 -translate-x-1/2 rounded-full bg-black sm:h-6 sm:w-24" />

            {/* Screen */}
            <div className="relative aspect-[9/19] overflow-hidden rounded-[1.9rem] bg-[#111113] sm:rounded-[2.2rem]">
              {/* Video placeholder */}
              {/* <video
                className="absolute inset-0 h-full w-full object-cover"
                autoPlay
                loop
                muted
                playsInline
                preload="metadata"
                aria-label={industry.title}
              >
                <source
                  src="/media/solutions/mobile-demo.mp4"
                  type="video/mp4"
                />
              </video> */}

              {/* Very subtle screen tint */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#09090b]/35 via-transparent to-transparent" />

              {/* Video replacement note */}
              {/* <div className="pointer-events-none absolute bottom-3 left-1/2 z-20 -translate-x-1/2 whitespace-nowrap border border-white/10 bg-black/45 px-2.5 py-1.5 backdrop-blur-md">
                <span className="font-[var(--font-mono)] text-[6px] tracking-[0.1em] text-white/45">
                  {locale === "ar" ? "MOBILE DEMO" : "MOBILE DEMO"}
                </span>
              </div> */}
            </div>

            {/* Side button */}
            <div className="absolute -left-[7px] top-[28%] h-10 w-1 rounded-full bg-[#3f3f46]" />

            <div className="absolute -left-[7px] top-[38%] h-7 w-1 rounded-full bg-[#3f3f46]" />
          </div>

          {/* Pause/status chip */}
          {/* <motion.div
            animate={
              prefersReducedMotion
                ? undefined
                : {
                    y: [0, -4, 0],
                  }
            }
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -right-4 top-[18%] flex items-center gap-2 border border-[#3f3f46] bg-[#111113]/90 px-2.5 py-2 backdrop-blur-xl sm:-right-6 sm:px-3"
          >
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#91db2a]" />

            <span className="font-[var(--font-mono)] text-[7px] tracking-[0.08em] text-white/45 sm:text-[8px]">
              {locale === "ar" ? "LIVE" : "LIVE"}
            </span>
          </motion.div> */}
        </motion.div>

        {/* Bottom module strip */}
        <div className="absolute bottom-0 left-0 right-[45%] z-10 border-t border-[#27272a] pt-3 sm:pt-4">
          <div className="font-[var(--font-mono)] text-[7px] tracking-[0.1em] text-white/20 sm:text-[8px]">
            {industry.visualMeta}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ================================================================
   MAIN SOLUTIONS COMPONENT
================================================================ */

export function Solutions({ locale }: { locale: Locale }) {
  const text = content[locale];

  const prefersReducedMotion = useReducedMotion();

  const [activeId, setActiveId] = useState<IndustryId>("gyms");

  const activeIndustry = useMemo(
    () =>
      text.industries.find((industry) => industry.id === activeId) ??
      text.industries[0],
    [activeId, text.industries],
  );

  const activeIndex = text.industries.findIndex(
    (industry) => industry.id === activeId,
  );

  /* ============================================================
     AUTO ROTATION
  ============================================================ */

  useEffect(() => {
    if (prefersReducedMotion) return;

    const timeout = window.setTimeout(() => {
      const nextIndex = (activeIndex + 1) % text.industries.length;

      setActiveId(text.industries[nextIndex].id);
    }, 8000);

    return () => window.clearTimeout(timeout);
  }, [activeIndex, prefersReducedMotion, text.industries]);

  return (
    <section
      id="industries"
      dir={locale === "ar" ? "rtl" : "ltr"}
      className="relative overflow-hidden border-t border-[#27272a] bg-[#09090b] py-24 sm:py-28 lg:py-32"
      aria-labelledby="industries-title"
    >
      {/* ==========================================================
          SECTION ATMOSPHERE
      =========================================================== */}

      <div className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-[#10b981]/[0.025] blur-[150px]" />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* ========================================================
            HEADER
        ========================================================= */}

        <motion.header
          initial={{
            opacity: 0,
            y: 24,
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
            duration: prefersReducedMotion ? 0.15 : 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mx-auto max-w-4xl text-center"
        >
          <p className="font-[var(--font-mono)] text-[10px] font-medium tracking-[0.18em] text-[#4edea3]/70">
            {text.eyebrow}
          </p>

          <h2
            id="solutions-title"
            className="mt-6 font-[var(--font-display)] text-4xl font-medium leading-[1.05] tracking-[-0.04em] text-[#fafafa] sm:text-5xl"
          >
            {text.headline} <span>{text.highlight}</span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-[#a1a1aa] sm:text-lg sm:leading-8">
            {text.description}
          </p>
        </motion.header>

        {/* ========================================================
            INDUSTRY SELECTOR
        ========================================================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 18,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.25,
          }}
          transition={{
            duration: 0.65,
            delay: 0.1,
          }}
          className="mx-auto mt-10 max-w-6xl"
        >
          <div className="overflow-x-auto pb-2 scrollbar-none">
            <div className="flex min-w-max items-center gap-1 border border-[#27272a] bg-[#111113]/80 p-1 backdrop-blur-xl lg:min-w-0 lg:justify-between">
              {text.industries.map((industry) => {
                const Icon = industry.icon;

                const isActive = industry.id === activeId;

                return (
                  <button
                    key={industry.id}
                    type="button"
                    onClick={() => setActiveId(industry.id)}
                    className="relative flex min-h-11 items-center gap-2 px-4 font-[var(--font-mono)] text-[8px] tracking-[0.06em] text-white/40 outline-none transition-colors duration-300 hover:text-white/75 focus-visible:ring-1 focus-visible:ring-[#4edea3] sm:px-5 sm:text-[9px]"
                  >
                    {isActive && (
                      <motion.span
                        layoutId="active-solution-tab"
                        className="absolute inset-0 border border-[#3f3f46] bg-[#18181b]"
                        transition={{
                          type: "spring",
                          stiffness: 380,
                          damping: 32,
                        }}
                      />
                    )}

                    <span className="relative z-10 flex items-center gap-2">
                      <Icon
                        size={14}
                        strokeWidth={1.4}
                        className={
                          isActive ? "text-[#4edea3]" : "text-white/25"
                        }
                      />

                      {industry.tabLabel}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* ========================================================
            ACTIVE SOLUTION
        ========================================================= */}

        <div className="mt-10 grid items-center gap-12 lg:grid-cols-[0.88fr_1.12fr] lg:gap-16">
          {/* ======================================================
              COPY
          ======================================================= */}

          <div className="relative max-w-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={`${activeIndustry.id}-${locale}`}
                initial={
                  prefersReducedMotion
                    ? { opacity: 0 }
                    : {
                        opacity: 0,
                        x: locale === "ar" ? 25 : -25,
                      }
                }
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                exit={
                  prefersReducedMotion
                    ? { opacity: 0 }
                    : {
                        opacity: 0,
                        x: locale === "ar" ? -25 : 25,
                      }
                }
                transition={{
                  duration: prefersReducedMotion ? 0.15 : 0.5,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                {/* Industry eyebrow */}
                <div className="flex items-center gap-3 font-[var(--font-mono)] text-[9px] tracking-[0.15em] text-[#4edea3]/65">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#4edea3] shadow-[0_0_12px_rgba(78,222,163,0.65)]" />

                  {activeIndustry.eyebrow}
                </div>

                {/* Title */}
                <h3 className="mt-6 max-w-xl font-[var(--font-display)] text-4xl font-medium leading-[1.06] tracking-[-0.035em] text-[#fafafa] sm:text-5xl ">
                  {activeIndustry.title}
                </h3>

                {/* Description */}
                <p className="mt-6 max-w-xl text-base leading-7 text-[#a1a1aa] sm:text-lg sm:leading-8">
                  {activeIndustry.description}
                </p>

                {/* Features */}
                <div className="mt-9 grid gap-x-8 gap-y-5 sm:grid-cols-2">
                  {activeIndustry.features.map((feature, index) => (
                    <motion.div
                      key={feature}
                      initial={{
                        opacity: 0,
                        y: 10,
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                      }}
                      transition={{
                        delay: 0.08 + index * 0.07,
                        duration: prefersReducedMotion ? 0.15 : 0.4,
                      }}
                      className="flex items-start gap-3"
                    >
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center border border-[#3f3f46] bg-[#111113]">
                        <Check
                          size={11}
                          strokeWidth={2}
                          className="text-[#4edea3]"
                        />
                      </span>

                      <span className="text-sm leading-5 text-[#d4d4d8]">
                        {feature}
                      </span>
                    </motion.div>
                  ))}
                </div>

                {/* CTA */}
                <div className="mt-10 flex flex-wrap items-center gap-4">
                  <StudioButton
                    asChild
                    variant="default"
                    size="lg"
                    className="font-[var(--font-mono)] text-[9px] tracking-[0.08em]"
                  >
                    <Link href="#demo">
                      {text.explore}

                      <ArrowUpRight size={15} />
                    </Link>
                  </StudioButton>

                  <span className="font-[var(--font-mono)] text-[8px] tracking-[0.1em] text-white/20">
                    {activeIndustry.visualMeta}
                  </span>
                </div>

                {/* Progress */}
                <div className="mt-10 border-t border-[#27272a] pt-5">
                  <div className="flex items-center justify-between">
                    <span className="font-[var(--font-mono)] text-[8px] tracking-[0.1em] text-white/25">
                      {text.live}
                    </span>

                    <span className="font-[var(--font-mono)] text-[8px] tracking-[0.1em] text-white/20">
                      0{activeIndex + 1} / 0{text.industries.length}
                    </span>
                  </div>

                  <div className="mt-3 flex gap-1">
                    {text.industries.map((industry) => (
                      <button
                        key={industry.id}
                        type="button"
                        aria-label={industry.tabLabel}
                        onClick={() => setActiveId(industry.id)}
                        className="group relative h-px flex-1 bg-[#27272a]"
                      >
                        {industry.id === activeId && (
                          <motion.span
                            layoutId="solution-progress"
                            className="absolute inset-y-0 left-0 bg-[#4edea3]"
                          />
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* ======================================================
              VISUAL
          ======================================================= */}

          <AnimatePresence mode="wait">
            <motion.div
              key={`${activeIndustry.id}-visual`}
              initial={
                prefersReducedMotion
                  ? { opacity: 0 }
                  : {
                      opacity: 0,
                      scale: 0.97,
                      x: locale === "ar" ? -25 : 25,
                    }
              }
              animate={{
                opacity: 1,
                scale: 1,
                x: 0,
              }}
              exit={
                prefersReducedMotion
                  ? { opacity: 0 }
                  : {
                      opacity: 0,
                      scale: 0.98,
                      x: locale === "ar" ? 25 : -25,
                    }
              }
              transition={{
                duration: prefersReducedMotion ? 0.15 : 0.65,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <SolutionVisual
                industry={activeIndustry}
                locale={locale}
                prefersReducedMotion={Boolean(prefersReducedMotion)}
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
