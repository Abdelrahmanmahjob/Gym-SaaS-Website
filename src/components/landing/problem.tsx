"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  EyeOff,
  Files,
  LayoutGrid,
  //   ListTodo,
  MousePointer2,
  PanelsTopLeft,
  ReceiptText,
  Search,
  TimerReset,
  //   TrendingUp,
  UsersRound,
} from "lucide-react";

type Locale = "ar" | "en";

type ProblemId = "tools" | "manual" | "visibility";

type Problem = {
  id: ProblemId;
  index: string;
  label: string;
  title: string;
  description: string;
  visualLabel: string;
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
        visualLabel: "DISCONNECTED SYSTEMS",
      },
      {
        id: "manual",
        index: "02",
        label: "TOO MUCH MANUAL WORK",
        title: "عمل يدوي كثير",
        description:
          "يقضي فريقك وقتًا ثمينًا في إدارة مهام كان من المفترض أن تكون بسيطة وسريعة.",
        visualLabel: "REPETITIVE WORKFLOW",
      },
      {
        id: "visibility",
        index: "03",
        label: "HARD TO SEE THE FULL PICTURE",
        title: "صعوبة رؤية الصورة كاملة",
        description:
          "قد يصبح من الصعب معرفة ما يحدث فعليًا عبر نشاطك بالكامل، ومتى تحتاج إلى التدخل.",
        visualLabel: "LIMITED VISIBILITY",
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
        visualLabel: "DISCONNECTED SYSTEMS",
      },
      {
        id: "manual",
        index: "02",
        label: "TOO MUCH MANUAL WORK",
        title: "Too Much Manual Work",
        description:
          "Your team spends valuable time managing tasks that should be simple.",
        visualLabel: "REPETITIVE WORKFLOW",
      },
      {
        id: "visibility",
        index: "03",
        label: "HARD TO SEE THE FULL PICTURE",
        title: "Hard to See the Full Picture",
        description:
          "It can be difficult to know what’s happening across your business.",
        visualLabel: "LIMITED VISIBILITY",
      },
    ] satisfies Problem[],

    closing: "Bring everything together.",

    closingDescription:
      "Replace scattered tools and disconnected records with one clear operating system.",

    signal: "THE CHALLENGE",
  },
} as const;

function ToolsVisual() {
  const items = [
    {
      icon: UsersRound,
      label: "CUSTOMERS",
      value: "2,846",
      x: "8%",
      y: "17%",
      rotate: -4,
    },
    {
      icon: ReceiptText,
      label: "PAYMENTS",
      value: "184K",
      x: "50%",
      y: "9%",
      rotate: 3,
    },
    {
      icon: PanelsTopLeft,
      label: "BOOKINGS",
      value: "428",
      x: "18%",
      y: "52%",
      rotate: 2,
    },
    {
      icon: Files,
      label: "DATA",
      value: "12 SOURCES",
      x: "58%",
      y: "46%",
      rotate: -3,
    },
  ];

  return (
    <div className="relative h-full min-h-[290px] overflow-hidden bg-[#0b0b0d]">
      <div className="absolute inset-0 opacity-[0.055]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
      </div>

      <div className="absolute left-1/2 top-1/2 h-px w-[80%] -translate-x-1/2 -translate-y-1/2 bg-[#27272a]" />

      <div className="absolute left-1/2 top-1/2 h-[70%] w-px -translate-x-1/2 -translate-y-1/2 bg-[#27272a]" />

      <div className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center border border-[#3f3f46] bg-[#111113]">
        <LayoutGrid size={22} strokeWidth={1.3} className="text-[#4edea3]" />
      </div>

      {items.map((item, index) => {
        const Icon = item.icon;

        return (
          <motion.div
            key={item.label}
            initial={{
              opacity: 0,
              scale: 0.9,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            viewport={{
              once: true,
              amount: 0.3,
            }}
            transition={{
              duration: 0.45,
              delay: index * 0.08,
            }}
            style={{
              left: item.x,
              top: item.y,
              rotate: item.rotate,
            }}
            className="absolute w-[38%] border border-[#27272a] bg-[#111113]/95 p-3 backdrop-blur-md sm:w-[34%] sm:p-4"
          >
            <div className="flex items-center justify-between gap-2">
              <Icon size={15} strokeWidth={1.3} className="text-[#71717a]" />

              <span className="h-1.5 w-1.5 rounded-full bg-[#84cc16]/70" />
            </div>

            <div className="mt-3 font-[var(--font-mono)] text-[7px] tracking-[0.1em] text-[#71717a] sm:text-[8px]">
              {item.label}
            </div>

            <div className="mt-1 font-[var(--font-display)] text-sm text-[#e5e1e4] sm:text-base">
              {item.value}
            </div>
          </motion.div>
        );
      })}

      <motion.div
        animate={{
          opacity: [0.15, 0.45, 0.15],
        }}
        transition={{
          duration: 2.8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-6 left-1/2 h-24 w-24 -translate-x-1/2 rounded-full bg-[#10b981]/[0.07] blur-[45px]"
      />
    </div>
  );
}

function ManualWorkVisual() {
  const tasks = [
    "COPY CUSTOMER DATA",
    "UPDATE MEMBERSHIP",
    "CHECK PAYMENT",
    "SEND REMINDER",
    "UPDATE SCHEDULE",
  ];

  return (
    <div className="relative h-full min-h-[290px] overflow-hidden bg-[#0b0b0d]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(132,204,22,0.06),transparent_55%)]" />

      <div className="absolute left-[10%] top-[16%] w-[68%] border border-[#27272a] bg-[#111113] p-4 sm:p-5">
        <div className="flex items-center justify-between">
          <span className="font-[var(--font-mono)] text-[8px] tracking-[0.1em] text-[#71717a]">
            TASK QUEUE
          </span>

          <TimerReset size={15} strokeWidth={1.3} className="text-[#71717a]" />
        </div>

        <div className="mt-5 space-y-3">
          {tasks.map((task, index) => (
            <motion.div
              key={task}
              initial={{
                opacity: 0,
                x: -10,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
                amount: 0.3,
              }}
              transition={{
                delay: index * 0.07,
                duration: 0.4,
              }}
              className="flex items-center gap-3 border-b border-[#27272a] pb-3 last:border-0 last:pb-0"
            >
              <span className="flex h-5 w-5 shrink-0 items-center justify-center border border-[#3f3f46]">
                <span className="h-1.5 w-1.5 bg-[#71717a]" />
              </span>

              <span className="flex-1 font-[var(--font-mono)] text-[7px] tracking-[0.08em] text-[#a1a1aa] sm:text-[8px]">
                {task}
              </span>

              <span className="font-[var(--font-mono)] text-[7px] text-[#52525b]">
                MANUAL
              </span>
            </motion.div>
          ))}
        </div>
      </div>

      <motion.div
        animate={{
          y: [0, -6, 0],
          rotate: [0, -2, 0],
        }}
        transition={{
          duration: 3.6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-[10%] right-[8%] flex h-20 w-20 items-center justify-center border border-[#3f3f46] bg-[#18181b] shadow-[0_0_30px_rgba(16,185,129,0.06)] sm:h-24 sm:w-24"
      >
        <div className="text-center">
          <MousePointer2
            size={18}
            strokeWidth={1.3}
            className="mx-auto text-[#4edea3]"
          />

          <div className="mt-2 font-[var(--font-mono)] text-[7px] tracking-[0.08em] text-[#71717a]">
            REPEAT
          </div>
        </div>
      </motion.div>

      <div className="absolute bottom-5 left-5 flex items-center gap-2">
        <span className="h-1.5 w-1.5 animate-pulse bg-[#84cc16]" />

        <span className="font-[var(--font-mono)] text-[7px] tracking-[0.1em] text-[#52525b]">
          WORKFLOW LOOP
        </span>
      </div>
    </div>
  );
}

function VisibilityVisual() {
  return (
    <div className="relative h-full min-h-[290px] overflow-hidden bg-[#0b0b0d]">
      <div className="absolute inset-0 opacity-[0.05]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="absolute left-[8%] right-[8%] top-[12%] border border-[#27272a] bg-[#111113] p-4 sm:p-5">
        <div className="flex items-center justify-between">
          <div>
            <div className="h-2 w-20 bg-white/[0.08]" />
            <div className="mt-2 h-1.5 w-12 bg-white/[0.04]" />
          </div>

          <Search size={15} strokeWidth={1.3} className="text-[#71717a]" />
        </div>

        <div className="relative mt-7 h-[125px] overflow-hidden border-t border-[#27272a] pt-5">
          <svg
            viewBox="0 0 500 130"
            className="h-full w-full"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <motion.path
              d="M0 95 C35 86 65 101 96 76 S145 92 176 69 S220 62 255 75 S310 38 343 53 S395 18 420 36 S466 20 500 8"
              fill="none"
              stroke="#4edea3"
              strokeWidth="1.5"
              strokeDasharray="5 6"
              initial={{
                pathLength: 0,
                opacity: 0,
              }}
              whileInView={{
                pathLength: 1,
                opacity: 1,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 1.4,
              }}
            />

            {[0, 1, 2, 3].map((item) => (
              <line
                key={item}
                x1="0"
                x2="500"
                y1={25 + item * 24}
                y2={25 + item * 24}
                stroke="rgba(255,255,255,0.05)"
                strokeWidth="1"
              />
            ))}
          </svg>

          {/* Obscured layer */}
          <motion.div
            animate={{
              x: [0, 8, 0],
              opacity: [0.35, 0.5, 0.35],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute left-[18%] top-[34%] h-14 w-32 bg-[#18181b]/90 blur-[2px]"
          />

          <motion.div
            animate={{
              x: [0, -10, 0],
              opacity: [0.25, 0.45, 0.25],
            }}
            transition={{
              duration: 3.4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute right-[10%] top-[16%] h-8 w-24 bg-[#18181b]/90 blur-[2px]"
          />
        </div>
      </div>

      <div className="absolute bottom-[11%] left-[10%] flex items-center gap-3 border border-[#27272a] bg-[#111113] px-4 py-3">
        <EyeOff size={16} strokeWidth={1.3} className="text-[#71717a]" />

        <div>
          <div className="font-[var(--font-mono)] text-[7px] tracking-[0.1em] text-[#52525b]">
            SIGNAL
          </div>

          <div className="mt-1 text-xs text-[#a1a1aa]">PARTIAL VIEW</div>
        </div>
      </div>

      <motion.div
        animate={{
          opacity: [0.1, 0.45, 0.1],
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute right-[18%] top-[50%] h-20 w-20 rounded-full bg-[#10b981]/[0.07] blur-[40px]"
      />
    </div>
  );
}

function ProblemVisual({ problem }: { problem: Problem }) {
  if (problem.id === "tools") {
    return <ToolsVisual />;
  }

  if (problem.id === "manual") {
    return <ManualWorkVisual />;
  }

  return <VisibilityVisual />;
}

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
          <ProblemVisual problem={problem} />
        </motion.div>

        {/* Visual label */}
        <div className="absolute left-4 top-4 z-20 flex items-center gap-2 border border-[#3f3f46] bg-[#09090b]/85 px-2.5 py-1.5 backdrop-blur-md">
          <span className="h-1.5 w-1.5 bg-[#4edea3]" />

          <span className="font-[var(--font-mono)] text-[7px] tracking-[0.1em] text-[#71717a]">
            {problem.visualLabel}
          </span>
        </div>
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
