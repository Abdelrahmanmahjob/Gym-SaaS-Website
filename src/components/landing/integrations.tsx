"use client";

import { useEffect, useMemo, useState } from "react";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

import { Sparkles } from "lucide-react";
import Image from "next/image";

type Locale = "ar" | "en";

type IntegrationCategory =
  | "payments"
  | "business"
  | "compliance"
  | "calendar"
  | "marketing"
  | "advanced";

type IntegrationItem = {
  id: string;
  logo: string;
  accent?: string;
};

type Category = {
  id: IntegrationCategory;
  label: string;
  description: string;
};

const content = {
  ar: {
    eyebrow: "التكاملات",

    title: "تعامل مع الأدوات",
    highlight: "التي تستخدمها بالفعل.",

    description:
      "اربط ANAN Sustainability مع بوابات الدفع والمحاسبة والتسويق والتقويم وأدوات الأعمال التي تناسب طريقة تشغيلك.",

    keyMessage: "اربط بوابة الدفع المفضلة لديك.",

    cta: "استكشف التكاملات",

    status: "READY TO CONNECT",

    categories: [
      {
        id: "payments",
        label: "بوابات الدفع",
        description: "اربط مزود الدفع الذي يناسب عملياتك.",
      },
      {
        id: "business",
        label: "الأعمال والمحاسبة",
        description: "حافظ على تدفق مالي وبيانات أعمال مترابطة.",
      },
      {
        id: "compliance",
        label: "الضريبة والامتثال",
        description: "أدوات تساعدك على إدارة المتطلبات التشغيلية.",
      },
      {
        id: "calendar",
        label: "التقويم",
        description: "زامن المواعيد والجداول بسهولة.",
      },
      {
        id: "marketing",
        label: "التسويق والتواصل",
        description: "اربط قنوات التواصل والتتبع التسويقي.",
      },
      {
        id: "advanced",
        label: "متقدم",
        description: "اربط الأنظمة والأجهزة الخاصة بك.",
      },
    ] satisfies Category[],

    integrations: [
      {
        id: "geidea",
        logo: "/media/integrations/geidea.jpg",
      },
      {
        id: "tabby",
        logo: "/media/integrations/tabby.png",
      },
      {
        id: "paytabs",
        logo: "/media/integrations/paytabs.png",
      },
      {
        id: "moyasar",
        logo: "/media/integrations/moyasar.png",
      },
      {
        id: "streampay",
        logo: "/media/integrations/streampay.png",
      },
      {
        id: "qoyod",
        logo: "/media/integrations/qoyod.webp",
      },
      {
        id: "zatca",
        logo: "/media/integrations/zatca.jpg",
      },
      {
        id: "google-calendar",
        logo: "/media/integrations/google-calendar.png",
      },
      {
        id: "whatsapp",
        logo: "/media/integrations/whatsapp.webp",
      },
      {
        id: "meta-pixel",
        logo: "/media/integrations/meta.png",
      },
      {
        id: "google-tag-manager",
        logo: "/media/integrations/google-tag-manager2.jpg",
      },
    ] satisfies IntegrationItem[],
  },

  en: {
    eyebrow: "INTEGRATIONS",

    title: "Works With the Tools",
    highlight: "You Already Use.",

    description:
      "Connect ANAN Sustainability with the payment, accounting, marketing, calendar, and business tools that fit your operation.",

    keyMessage: "Connect your preferred payment provider.",

    cta: "Explore integrations",

    status: "READY TO CONNECT",

    categories: [
      {
        id: "payments",
        label: "Payment Providers",
        description: "Connect the payment provider that fits your operation.",
      },
      {
        id: "business",
        label: "Business & Accounting",
        description: "Keep your operational and financial data connected.",
      },
      {
        id: "compliance",
        label: "Tax & Compliance",
        description: "Support your operational compliance workflows.",
      },
      {
        id: "calendar",
        label: "Calendar",
        description: "Keep schedules and appointments synchronized.",
      },
      {
        id: "marketing",
        label: "Marketing & Communication",
        description: "Connect communication and marketing tracking tools.",
      },
      {
        id: "advanced",
        label: "Advanced",
        description: "Connect custom systems and operational devices.",
      },
    ] satisfies Category[],

    integrations: [
      {
        id: "geidea",
        logo: "/media/integrations/geidea.jpg",
      },
      {
        id: "tabby",
        logo: "/media/integrations/tabby.png",
      },
      {
        id: "paytabs",
        logo: "/media/integrations/paytabs.png",
      },
      {
        id: "moyasar",
        logo: "/media/integrations/moyasar.png",
      },
      {
        id: "streampay",
        logo: "/media/integrations/streampay.png",
      },
      {
        id: "qoyod",
        logo: "/media/integrations/qoyod.webp",
      },
      {
        id: "zatca",
        logo: "/media/integrations/zatca.jpg",
      },
      {
        id: "google-calendar",
        logo: "/media/integrations/google-calendar.png",
      },
      {
        id: "whatsapp",
        logo: "/media/integrations/whatsapp.webp",
      },
      {
        id: "meta-pixel",
        logo: "/media/integrations/meta.png",
      },
      {
        id: "google-tag-manager",
        logo: "/media/integrations/google-tag-manager2.jpg",
      },
    ] satisfies IntegrationItem[],
  },
} as const;

const laneLayouts = [
  {
    speed: 34,
    direction: -1,
    offset: 0,
  },
  {
    speed: 42,
    direction: 1,
    offset: 2,
  },
  {
    speed: 38,
    direction: -1,
    offset: 1,
  },
];

function IntegrationLogo({ item }: { item: IntegrationItem }) {
  return (
    <div className="flex h-[60px] w-[200px] p-1 bg-white shrink-0 items-center rounded-xl overflow-hidden justify-center border border-[#27272a] bg-[#111113]">
      <Image
        src={item.logo}
        alt=""
        width={120}
        height={30}
        loading="lazy"
        className="h-full w-full object-cover"
      />
    </div>
  );
}

function IntegrationCard({ item }: { item: IntegrationItem }) {
  return (
    <motion.div
      whileHover={{
        y: -4,
      }}
      transition={{
        duration: 0.25,
      }}
      className="group relative flex items-center gap-3 px-4 py-3 backdrop-blur-md"
    >
      {/* Active edge */}
      <motion.span
        className="absolute inset-y-0 left-0 w-px"
        initial={{
          scaleY: 0,
          opacity: 0,
        }}
        whileHover={{
          scaleY: 1,
          opacity: 1,
        }}
        transition={{
          duration: 0.25,
        }}
      />

      <IntegrationLogo item={item} />
    </motion.div>
  );
}

function IntegrationLane({
  items,
  direction,
  speed,
  reducedMotion,
}: {
  items: IntegrationItem[];
  direction: 1 | -1;
  speed: number;
  reducedMotion: boolean;
}) {
  const duplicatedItems = [...items, ...items];

  return (
    <div className="relative overflow-hidden">
      <motion.div
        animate={
          reducedMotion
            ? undefined
            : {
                x: direction === 1 ? ["0%", "-50%"] : ["-50%", "0%"],
              }
        }
        transition={{
          duration: speed,
          repeat: Infinity,
          repeatType: "loop",
          ease: "linear",
        }}
        className="flex w-max gap-3 py-1"
      >
        {duplicatedItems.map((item, index) => (
          <IntegrationCard key={`${item.id}-${index}`} item={item} />
        ))}
      </motion.div>
    </div>
  );
}

export function Integrations({ locale }: { locale: Locale }) {
  const text = content[locale];

  const prefersReducedMotion = useReducedMotion();

  const [activeCategory, setActiveCategory] =
    useState<IntegrationCategory>("payments");

  const lanes = useMemo(() => {
    const result: IntegrationItem[][] = [[], [], []];

    text.integrations.forEach((item, index) => {
      result[index % 3].push(item);
    });

    return result;
  }, [text.integrations]);

  useEffect(() => {
    if (prefersReducedMotion) return;

    const interval = window.setInterval(() => {
      setActiveCategory((current) => {
        const currentIndex = text.categories.findIndex(
          (category) => category.id === current,
        );

        const nextIndex = (currentIndex + 1) % text.categories.length;

        return text.categories[nextIndex].id;
      });
    }, 6000);

    return () => window.clearInterval(interval);
  }, [prefersReducedMotion, text.categories]);

  return (
    <section
      id="integrations"
      dir={locale === "ar" ? "rtl" : "ltr"}
      className="relative overflow-hidden border-t border-[#27272a] bg-[#09090b] py-24 sm:py-28 lg:py-32"
      aria-labelledby="integrations-title"
    >
      {/* =========================================================
          ATMOSPHERE
      ========================================================== */}

      <div className="pointer-events-none absolute left-1/2 top-0 h-[430px] w-[850px] -translate-x-1/2 rounded-full bg-[#10b981]/[0.025] blur-[150px]" />

      <div className="pointer-events-none absolute bottom-0 left-1/2 h-[250px] w-[650px] -translate-x-1/2 bg-[#84cc16]/[0.012] blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* ========================================================
            HEADER
        ========================================================= */}

        <motion.header
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
            duration: prefersReducedMotion ? 0.15 : 0.7,
          }}
          className="mx-auto max-w-4xl text-center"
        >
          <div className="flex items-center justify-center gap-3 font-[var(--font-mono)] text-[10px] font-medium tracking-[0.18em] text-[#4edea3]/70">
            <span className="h-1.5 w-1.5 bg-[#4edea3] shadow-[0_0_12px_rgba(78,222,163,0.6)]" />

            {text.eyebrow}
          </div>

          <h2
            id="integrations-title"
            className="mt-6 font-[var(--font-display)] text-4xl font-medium leading-[1.05] tracking-[-0.04em] bg-gradient-to-b from-white via-white/90 to-white/50 bg-clip-text text-transparent sm:text-5xl lg:text-[4.25rem]"
          >
            {text.title} <span>{text.highlight}</span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-[#a1a1aa] sm:text-lg sm:leading-8">
            {text.description}
          </p>
        </motion.header>

        {/* ========================================================
            ACTIVE CATEGORY DESCRIPTION
        ========================================================= */}

        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{
              opacity: 0,
              y: 8,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -8,
            }}
            transition={{
              duration: prefersReducedMotion ? 0.15 : 0.3,
            }}
            className="mx-auto mt-7 flex max-w-xl items-center justify-center gap-3 text-center"
          >
            <Sparkles
              size={14}
              strokeWidth={1.4}
              className="shrink-0 text-[#4edea3]/60"
            />

            <p className="text-sm leading-6 text-[#71717a]">
              {
                text.categories.find(
                  (category) => category.id === activeCategory,
                )?.description
              }
            </p>
          </motion.div>
        </AnimatePresence>

        {/* ========================================================
            MOVING INTEGRATION WALL
        ========================================================= */}

        <motion.div
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
            amount: 0.15,
          }}
          transition={{
            duration: prefersReducedMotion ? 0.15 : 0.7,
            delay: 0.1,
          }}
          className="relative mt-10"
        >
          {/* Top fade */}
          <div className="pointer-events-none absolute inset-x-0 top-0 z-20 h-20 bg-gradient-to-b from-[#09090b] via-[#09090b]/70 to-transparent" />

          {/* Bottom fade */}
          <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-20 bg-gradient-to-t from-[#09090b] via-[#09090b]/70 to-transparent" />

          {/* Left fade */}
          <div className="pointer-events-none absolute bottom-0 left-0 top-0 z-20 w-20 bg-gradient-to-r from-[#09090b] to-transparent" />

          {/* Right fade */}
          <div className="pointer-events-none absolute bottom-0 right-0 top-0 z-20 w-20 bg-gradient-to-l from-[#09090b] to-transparent" />

          <div className="space-y-3 overflow-hidden py-8">
            {lanes.map((lane, index) => (
              <IntegrationLane
                key={index}
                items={lane}
                direction={index % 2 === 0 ? -1 : 1}
                speed={laneLayouts[index].speed}
                reducedMotion={Boolean(prefersReducedMotion)}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
