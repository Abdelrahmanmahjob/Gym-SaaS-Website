"use client";

import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";

import { cn } from "@/lib/utils";
import Image from "next/image";

const AUTO_PLAY_DURATION = 5000;

const content = {
  ar: {
    heading: "لماذا تختار أنان؟",
    subheading: "(لماذا نحن)",
    items: [
      {
        id: "01",
        title: "إدارة متكاملة",
        description:
          "من العضويات والمدفوعات إلى الحضور والتقارير، كل شيء في منصة واحدة ترفع من كفاءة التشغيل اليومي.",
        image:
          "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=80",
      },
      {
        id: "02",
        title: "تجربة مستخدم ذكية",
        description:
          "واجهة سريعة وواضحة تدعم المدراء والمدربين والموظفين في تنفيذ المهام بدون تعقيد.",
        image:
          "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1200&q=80",
      },
      {
        id: "03",
        title: "تقارير لحظية",
        description:
          "تابع الأداء عبر مؤشرات دقيقة تساعدك على اتخاذ قرارات أسرع وتنمية النادي بثقة أكبر.",
        image:
          "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=1200&q=80",
      },
    ],
  },
  en: {
    heading: "Why choose Anan?",
    subheading: "(WHY US)",
    items: [
      {
        id: "01",
        title: "Unified operations",
        description:
          "From memberships and payments to attendance and reporting, everything runs in a single system that improves daily performance.",
        image:
          "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=80",
      },
      {
        id: "02",
        title: "Smart user experience",
        description:
          "A fast, clear interface that helps managers, coaches, and staff carry out tasks without friction.",
        image:
          "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1200&q=80",
      },
      {
        id: "03",
        title: "Real-time reporting",
        description:
          "Monitor performance through precise metrics so your team can act faster and scale with confidence.",
        image:
          "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=1200&q=80",
      },
    ],
  },
} as const;

export function WhyChooseAnan({ locale = "en" }: { locale?: "ar" | "en" }) {
  const text = content[locale];
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const handleNext = useCallback(() => {
    setDirection(1);
    setActiveIndex((prev) => (prev + 1) % text.items.length);
  }, [text.items.length]);

  const handlePrev = useCallback(() => {
    setDirection(-1);
    setActiveIndex(
      (prev) => (prev - 1 + text.items.length) % text.items.length,
    );
  }, [text.items.length]);

  const handleTabClick = (index: number) => {
    if (index === activeIndex) return;
    setDirection(index > activeIndex ? 1 : -1);
    setActiveIndex(index);
    setIsPaused(false);
  };

  useEffect(() => {
    if (isPaused) return;

    const interval = window.setInterval(() => {
      handleNext();
    }, AUTO_PLAY_DURATION);

    return () => window.clearInterval(interval);
  }, [activeIndex, handleNext, isPaused]);

  const variants = {
    enter: (direction: number) => ({
      y: direction > 0 ? "-100%" : "100%",
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      y: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      y: direction > 0 ? "100%" : "-100%",
      opacity: 0,
    }),
  };

  return (
    <section
      id="section-4"
      dir={locale === "ar" ? "rtl" : "ltr"}
      className="relative overflow-hidden border-t border-white/[0.08] py-24 sm:py-28 lg:py-32"
      aria-labelledby="why-choose-us-title"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_70%_10%,rgba(16,185,129,0.08),transparent_35%)]" />

      <div className="relative mx-auto w-[min(100%-32px,1440px)]">
        <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="order-2 flex flex-col justify-center pt-4 lg:order-1 lg:col-span-5">
            <div className="mb-12 space-y-4">
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3.5 py-1 font-mono text-xs font-semibold uppercase tracking-widest text-emerald-300 backdrop-blur-md">
                {text.subheading}
              </div>
              <h2
                id="why-choose-us-title"
                className="text-3xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-5xl"
              >
                {text.heading}
              </h2>
            </div>

            <div className="flex flex-col">
              {text.items.map((service, index) => {
                const isActive = activeIndex === index;

                return (
                  <button
                    key={service.id}
                    type="button"
                    onClick={() => handleTabClick(index)}
                    className={cn(
                      "group relative flex items-start gap-4 border-t border-white/[0.08] py-6 text-left transition-all duration-500 first:border-0 md:py-8",
                      isActive
                        ? "text-white"
                        : "text-white/50 hover:text-white/80",
                    )}
                  >
                    <div className="absolute bottom-0 left-[-16px] top-0 w-[2px] bg-white/10 md:left-[-24px]">
                      {isActive && (
                        <motion.div
                          key={`progress-${index}-${isPaused}`}
                          className="absolute left-0 top-0 w-full origin-top bg-emerald-300"
                          initial={{ height: "0%" }}
                          animate={
                            isPaused ? { height: "0%" } : { height: "100%" }
                          }
                          transition={{
                            duration: AUTO_PLAY_DURATION / 1000,
                            ease: "linear",
                          }}
                        />
                      )}
                    </div>

                    <span className="mt-1 font-[var(--font-mono)] text-[9px] uppercase tracking-[0.16em] text-white/35 md:text-[10px]">
                      /{service.id}
                    </span>

                    <div className="flex flex-1 flex-col gap-2">
                      <span
                        className={cn(
                          "font-[var(--font-display)] text-2xl font-medium tracking-[-0.025em] transition-colors duration-500 md:text-3xl lg:text-[2.05rem]",
                          isActive ? "text-white" : "text-white/75",
                        )}
                      >
                        {service.title}
                      </span>

                      <AnimatePresence mode="wait">
                        {isActive && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{
                              duration: 0.3,
                              ease: [0.23, 1, 0.32, 1],
                            }}
                            className="overflow-hidden"
                          >
                            <p className="max-w-sm pb-2 text-sm leading-6 text-white/55 md:text-base">
                              {service.description}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="order-1 flex h-full flex-col justify-end lg:order-2 lg:col-span-7">
            <div
              className="relative group/gallery"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-white/[0.12] bg-[#111827] shadow-[0_30px_100px_rgba(0,0,0,0.45)] md:aspect-[4/3] lg:aspect-[16/11]">
                <AnimatePresence
                  initial={false}
                  custom={direction}
                  mode="popLayout"
                >
                  <motion.div
                    key={activeIndex}
                    custom={direction}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                      y: { type: "spring", stiffness: 260, damping: 32 },
                      opacity: { duration: 0.4 },
                    }}
                    className="absolute inset-0 h-full w-full cursor-pointer"
                    onClick={handleNext}
                  >
                    <Image
                      width={1200}
                      height={800}
                      src={text.items[activeIndex].image}
                      alt={text.items[activeIndex].title}
                      className="m-0 block h-full w-full object-cover p-0 transition-transform duration-700 hover:scale-105"
                    />

                    <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-70" />
                  </motion.div>
                </AnimatePresence>

                <div className="absolute bottom-6 right-6 z-20 flex gap-2 md:bottom-8 md:right-8 md:gap-3">
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      handlePrev();
                    }}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-black/55 text-white backdrop-blur-md transition-all hover:bg-black/70 active:scale-90 md:h-12 md:w-12"
                    aria-label="Previous"
                  >
                    <ArrowLeft size={18} />
                  </button>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleNext();
                    }}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-black/55 text-white backdrop-blur-md transition-all hover:bg-black/70 active:scale-90 md:h-12 md:w-12"
                    aria-label="Next"
                  >
                    <ArrowRight size={18} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyChooseAnan;
