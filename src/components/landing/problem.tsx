"use client";

import { motion, useReducedMotion } from "framer-motion";

import Image from "next/image";

type Locale = "ar" | "en";

type ProblemId = "tools" | "manual" | "visibility";

type Problem = {
  id: ProblemId;
  index: string;
  label: string;
  title: string;
  description: string;
  image: string;
};

const content = {
  ar: {
    eyebrow: "التحدي",
    title: "إدارة نشاط خدمي لا يجب أن تبدو معقدة.",
    description:
      "يجب ألا يمضي يومك بين أنظمة متعددة، والبحث عن المعلومات، وتنفيذ مهام متكررة يمكن أن تكون أبسط بكثير.",

    problems: [
      {
        id: "tools",
        index: "01",
        label: "TOO MANY TOOLS",
        title: "أدوات كثيرة",
        description:
          "معلومات العملاء، الحجوزات، العضويات، المدفوعات وبيانات النشاط موزعة بين أنظمة مختلفة.",
        image: "/media/problem/problems.png",
      },
      {
        id: "manual",
        index: "02",
        label: "TOO MUCH MANUAL WORK",
        title: "عمل يدوي كثير",
        description:
          "يقضي فريقك وقتًا ثمينًا في إدارة مهام كان من المفترض أن تكون بسيطة وسريعة.",
        image: "/media/problem/problem2.jpg",
      },
      {
        id: "visibility",
        index: "03",
        label: "HARD TO SEE THE FULL PICTURE",
        title: "صعوبة رؤية الصورة كاملة",
        description:
          "قد يصبح من الصعب معرفة ما يحدث فعليًا عبر نشاطك بالكامل، ومتى تحتاج إلى التدخل.",
        image: "/media/problem/problem3.png",
      },
    ] satisfies Problem[],

    closing: "اجمع كل شيء في منظومة تشغيل واحدة.",

    closingDescription:
      "بدل التنقل بين الأدوات والسجلات، اجعل العمليات اليومية متصلة وواضحة لفريقك.",

    signal: "THE CHALLENGE",
  },

  en: {
    eyebrow: "THE CHALLENGE",
    title: "Running a service business shouldn’t feel complicated.",
    description:
      "Your day shouldn’t be spent jumping between systems, chasing information, and managing repetitive tasks.",

    problems: [
      {
        id: "tools",
        index: "01",
        label: "TOO MANY TOOLS",
        title: "Too Many Tools",
        description:
          "Customer information, bookings, memberships, payments, and business data are spread across different systems.",
        image: "/media/problem/problems.png",
      },
      {
        id: "manual",
        index: "02",
        label: "TOO MUCH MANUAL WORK",
        title: "Too Much Manual Work",
        description:
          "Your team spends valuable time managing tasks that should be simple.",
        image: "/media/problem/problem2.jpg",
      },
      {
        id: "visibility",
        index: "03",
        label: "HARD TO SEE THE FULL PICTURE",
        title: "Hard to See the Full Picture",
        description:
          "It can be difficult to know what’s happening across your business.",
        image: "/media/problem/problem3.png",
      },
    ] satisfies Problem[],

    closing: "Bring everything together.",

    closingDescription:
      "Replace scattered tools and disconnected records with one clear operating system.",

    signal: "THE CHALLENGE",
  },
} as const;

function ProblemCard({
  problem,
  locale,
  index,
}: {
  problem: Problem;
  locale: Locale;
  index: number;
}) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.article
      initial={
        prefersReducedMotion
          ? { opacity: 0 }
          : {
              opacity: 0,
              y: 30,
            }
      }
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.18,
      }}
      transition={{
        duration: prefersReducedMotion ? 0.15 : 0.7,
        delay: prefersReducedMotion ? 0 : index * 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group relative overflow-hidden border border-[#27272a] bg-[#09090b] transition-colors duration-500 hover:border-[#3f3f46]"
    >
      {/* Top telemetry line */}
      <div className="absolute inset-x-0 top-0 z-20 h-px origin-left scale-x-0 bg-[#10b981] transition-transform duration-500 group-hover:scale-x-100" />

      {/* Visual */}
      <div className="relative overflow-hidden border-b border-[#27272a]">
        <motion.div
          whileHover={
            prefersReducedMotion
              ? undefined
              : {
                  scale: 1.025,
                }
          }
          transition={{
            duration: 0.6,
            ease: "easeOut",
          }}
        >
          <Image
            width={200}
            height={100}
            className="w-full h-full object-cover"
            src={problem.image}
            alt={problem.title}
          />
        </motion.div>
      </div>

      {/* Content */}
      <div className="relative p-6 sm:p-7">
        {/* Index */}
        <div className="flex items-start justify-between gap-4">
          <span className="font-[var(--font-mono)] text-[10px] tracking-[0.1em] text-[#52525b]">
            {problem.index}
          </span>

          <span className="font-[var(--font-mono)] text-[8px] tracking-[0.1em] text-[#71717a]">
            {problem.label}
          </span>
        </div>

        {/* Title */}
        <h3 className="mt-9 max-w-md font-[var(--font-display)] text-2xl font-medium leading-[1.1] tracking-[-0.025em] text-[#fafafa] sm:text-3xl">
          {problem.title}
        </h3>

        {/* Description */}
        <p className="mt-4 max-w-md text-sm leading-6 text-[#71717a] transition-colors duration-300 group-hover:text-[#a1a1aa] sm:text-[15px] sm:leading-7">
          {problem.description}
        </p>

        {/* Footer */}
        <div className="mt-8 flex tems-center justify-between border-t border-[#27272a] pt-4">
          <span className="font-[var(--font-mono)] text-[8px] tracking-[0.1em] text-[#52525b]">
            {locale === "ar" ? "نقطة احتكاك" : "FRICTION POINT"}
          </span>

          <motion.span
            initial={false}
            whileHover={{
              x: locale === "ar" ? -3 : 3,
            }}
            className="font-[var(--font-mono)] text-[8px] tracking-[0.1em] text-[#4edea3]/60"
          >
            0{index + 1}
          </motion.span>
        </div>
      </div>
    </motion.article>
  );
}

export function Problem({ locale }: { locale: Locale }) {
  const text = content[locale];

  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id="problem"
      dir={locale === "ar" ? "rtl" : "ltr"}
      className="relative overflow-hidden border-t border-[#27272a] bg-[#09090b] py-24 sm:py-28 lg:py-32"
      aria-labelledby="problem-title"
    >
      {/* =========================================================
          ATMOSPHERE
      ========================================================== */}

      <div className="pointer-events-none absolute left-[15%] top-0 h-[420px] w-[420px] rounded-full bg-[#10b981]/[0.018] blur-[140px]" />

      <div className="pointer-events-none absolute bottom-0 right-[10%] h-[360px] w-[360px] rounded-full bg-[#84cc16]/[0.012] blur-[130px]" />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* =====================================================
            HEADER
        ====================================================== */}

        <div className="grid gap-5">
          <motion.div
            initial={
              prefersReducedMotion
                ? { opacity: 0 }
                : {
                    opacity: 0,
                    y: 24,
                  }
            }
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
          >
            {/* Eyebrow */}
            <div className="flex items-center gap-3 font-[var(--font-mono)] text-[10px] font-medium tracking-[0.18em] text-[#4edea3]/70">
              <span className="h-1.5 w-1.5 bg-[#4edea3] shadow-[0_0_12px_rgba(78,222,163,0.55)]" />

              {text.eyebrow}
            </div>

            <h2
              id="problem-title"
              className="mt-6 max-w-2xl font-[var(--font-display)] text-4xl font-medium leading-[1.04] tracking-[-0.04em] text-[#fafafa] sm:text-5xl "
            >
              {text.title}
            </h2>
          </motion.div>

          <motion.div
            initial={
              prefersReducedMotion
                ? { opacity: 0 }
                : {
                    opacity: 0,
                    y: 24,
                  }
            }
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
              delay: 0.1,
            }}
            className="flex flex-col justify-end"
          >
            <p className="max-w-xl text-base leading-7 text-[#a1a1aa] sm:text-lg sm:leading-8">
              {text.description}
            </p>

            <div className="mt-8 flex items-center gap-4 border-t border-[#27272a] pt-5">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inset-0 animate-ping bg-[#4edea3]/40" />

                <span className="relative h-1.5 w-1.5 bg-[#4edea3]" />
              </span>

              <span className="font-[var(--font-mono)] text-[9px] tracking-[0.14em] text-[#71717a]">
                {text.signal}
              </span>
            </div>
          </motion.div>
        </div>

        {/* =====================================================
            PROBLEM GRID
        ====================================================== */}

        <div className="mt-14 grid gap-4 lg:mt-16 lg:grid-cols-3">
          {text.problems.map((problem, index) => (
            <ProblemCard
              key={problem.id}
              problem={problem}
              locale={locale}
              index={index}
            />
          ))}
        </div>

        {/* =====================================================
            CLOSING STATEMENT
        ====================================================== */}

        <motion.div
          initial={
            prefersReducedMotion
              ? { opacity: 0 }
              : {
                  opacity: 0,
                  y: 22,
                }
          }
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
            delay: 0.15,
          }}
          className="mt-16 border-t border-[#27272a] pt-10 sm:mt-20 sm:pt-12"
        >
          <div className="grid items-end gap-8 lg:grid-cols-[1.4fr_0.6fr] lg:gap-16">
            <div>
              <p className="font-[var(--font-mono)] text-[9px] tracking-[0.14em] text-[#71717a]">
                {locale === "ar" ? "الخطوة التالية" : "THE NEXT STEP"}
              </p>

              <h3 className="mt-4 max-w-4xl font-[var(--font-display)] text-3xl font-medium tracking-[-0.03em] text-[#fafafa] sm:text-4xl lg:text-5xl">
                {text.closing}
              </h3>
            </div>

            <div className="lg:text-end">
              <p className="max-w-md text-sm leading-6 text-[#71717a] lg:ms-auto">
                {text.closingDescription}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
