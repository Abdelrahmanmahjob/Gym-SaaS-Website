"use client";

import { useRef, useState, type KeyboardEvent } from "react";

import {
  ArrowLeft,
  ArrowRight,
  BriefcaseBusiness,
  CalendarDays,
  Check,
  CreditCard,
  Globe2,
  Megaphone,
  Package,
  UsersRound,
  UserRound,
} from "lucide-react";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

import Image from "next/image";

import {
  PlatformArea,
  platformContent,
} from "@/components/content/platform-content";

import type { Locale } from "@/components/content/hero-content";

/* ================================================================
   TYPES
================================================================ */

type VisualType = "mobile" | "laptop";

type AreaPresentation = {
  type: VisualType;
  image: string;
};

type PlatformSectionProps = {
  locale: Locale;
};

/* ================================================================
   ICONS
================================================================ */

const areaIcons = [
  UserRound,
  CalendarDays,
  Package,
  UsersRound,
  CreditCard,
  Globe2,
  Megaphone,
  BriefcaseBusiness,
];

/* ================================================================
   PRESENTATION CONFIG
================================================================ */

const areaPresentation: Record<string, AreaPresentation> = {
  customers: {
    type: "mobile",
    image: "/media/platform/customers2.png",
  },

  bookings: {
    type: "laptop",
    image: "/media/platform/bookings-laptop3.png",
  },

  memberships: {
    type: "mobile",
    image: "/media/platform/memberships.png",
  },

  team: {
    type: "mobile",
    image: "/media/platform/team.png",
  },

  payments: {
    type: "laptop",
    image: "/media/platform/payments-laptop2.png",
  },

  tools: {
    type: "mobile",
    image: "/media/platform/tools3.png",
  },
};

/* ================================================================
   MOBILE MOCKUP
================================================================ */

function MobileMockup({
  image,
  alt,
  shouldReduceMotion,
}: {
  image: string;
  alt: string;
  locale: Locale;
  shouldReduceMotion: boolean;
}) {
  return (
    <motion.div
      initial={
        shouldReduceMotion
          ? false
          : {
              opacity: 0,
              y: 28,
              rotate: 3,
            }
      }
      animate={{
        opacity: 1,
        y: 0,
        rotate: 0,
      }}
      transition={{
        duration: shouldReduceMotion ? 0 : 0.65,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="relative mx-auto w-full max-w-[320px]"
    >
      {/* Device glow */}
      <div className="pointer-events-none absolute -inset-8 rounded-[4rem] bg-emerald-400/[0.06] blur-[42px]" />

      {/* Phone shell */}
      <div className="relative rounded-[2.5rem] border-[5px] border-[#27272a] bg-[#030303] p-1.5 shadow-[0_30px_80px_rgba(0,0,0,0.45)]">
        {/* Top speaker / Dynamic island */}
        <div className="absolute left-1/2 top-3 z-30 h-5 w-20 -translate-x-1/2 rounded-full bg-black sm:h-6 sm:w-24" />

        {/* Screen */}
        <div className="relative aspect-[9/19] overflow-hidden rounded-[2rem] bg-[#111113]">
          <Image
            src={image}
            alt={alt}
            fill
            sizes="320px"
            className="object-cover object-top"
          />

          {/* Screen atmosphere */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#09090b]/30 via-transparent to-transparent" />
        </div>

        {/* Side buttons */}
        <div className="absolute -left-[7px] top-[28%] h-10 w-1 rounded-full bg-[#3f3f46]" />

        <div className="absolute -left-[7px] top-[38%] h-7 w-1 rounded-full bg-[#3f3f46]" />
      </div>
    </motion.div>
  );
}

/* ================================================================
   LAPTOP MOCKUP
================================================================ */

function LaptopMockup({
  image,
  alt,
  shouldReduceMotion,
}: {
  image: string;
  alt: string;
  locale: Locale;
  shouldReduceMotion: boolean;
}) {
  return (
    <motion.div
      initial={
        shouldReduceMotion
          ? false
          : {
              opacity: 0,
              y: 28,
              scale: 0.97,
            }
      }
      animate={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}
      transition={{
        duration: shouldReduceMotion ? 0 : 0.7,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="relative mx-auto w-full"
    >
      {/* Laptop atmosphere */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[260px] w-[70%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#10b981]/[0.055] blur-[100px]" />

      {/* ========================================================
          LAPTOP SCREEN
      ======================================================== */}

      <div className="relative mx-auto w-full max-w-[900px]">
        {/* Screen */}
        <div className="relative overflow-hidden rounded-[8px] border border-[#3f3f46] bg-[#111113] p-[5px] shadow-[0_30px_80px_rgba(0,0,0,0.42)] sm:p-1.5">
          {/* Browser top bar */}
          <div className="flex h-9 items-center justify-between border-b border-[#27272a] bg-[#18181b] px-3 sm:h-10 sm:px-4">
            {/* Browser dots */}
            <div className="flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-white/20" />
              <span className="h-1.5 w-1.5 rounded-full bg-white/20" />
              <span className="h-1.5 w-1.5 rounded-full bg-white/20" />
            </div>

            {/* Address */}
            <div className="absolute left-1/2 flex h-5 w-[38%] -translate-x-1/2 items-center justify-center bg-[#27272a]">
              <span className="font-[var(--font-mono)] text-[7px] tracking-[0.05em] text-white/25 sm:text-[8px]">
                app.anan-sustainability.com
              </span>
            </div>

            <div className="font-[var(--font-mono)] text-[7px] tracking-[0.08em] text-white/20">
              DESKTOP
            </div>
          </div>

          {/* Dashboard screen */}
          <div className="relative aspect-[16/9] overflow-hidden bg-[#09090b] rounded-2xl">
            <Image
              src={image}
              alt={alt}
              fill
              sizes="(max-width: 1024px) 90vw, 900px"
              className="object-cover object-top object-left"
            />

            {/* Very subtle screen tint */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#09090b]/10" />
          </div>
        </div>

        {/* ======================================================
            LAPTOP BASE
        ======================================================= */}

        <div className="relative mx-auto h-3 w-[88%] bg-gradient-to-b from-[#3f3f46] to-[#18181b] sm:h-4">
          <div className="absolute left-1/2 top-0 h-1 w-16 -translate-x-1/2 bg-[#71717a]/30" />
        </div>

        <div className="mx-auto h-2 w-[72%] rounded-b-[4px] bg-[#18181b] sm:h-2.5" />
      </div>
    </motion.div>
  );
}

/* ================================================================
   MOBILE / LAPTOP VISUAL
================================================================ */

function AreaVisual({
  activeArea,
  locale,
  shouldReduceMotion,
}: {
  activeArea: PlatformArea;
  locale: Locale;
  shouldReduceMotion: boolean;
}) {
  const presentation = areaPresentation[activeArea.id];

  if (!presentation) {
    return null;
  }

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={activeArea.id}
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        exit={{
          opacity: 0,
        }}
        transition={{
          duration: shouldReduceMotion ? 0.1 : 0.25,
        }}
        className="w-full"
      >
        {presentation.type === "laptop" ? (
          <LaptopMockup
            image={presentation.image}
            alt={activeArea.heading}
            locale={locale}
            shouldReduceMotion={shouldReduceMotion}
          />
        ) : (
          <MobileMockup
            image={presentation.image}
            alt={activeArea.heading}
            locale={locale}
            shouldReduceMotion={shouldReduceMotion}
          />
        )}
      </motion.div>
    </AnimatePresence>
  );
}

/* ================================================================
   MAIN COMPONENT
================================================================ */

export function PlatformSection({ locale }: PlatformSectionProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const shouldReduceMotion = Boolean(useReducedMotion());

  const content = platformContent[locale];

  const activeArea = content.areas[activeIndex];

  const sectionId = `platform-${locale}`;

  const presentation = areaPresentation[activeArea.id];

  const isLaptop = presentation?.type === "laptop";

  /* ============================================================
     ACCESSIBLE TAB NAVIGATION
  ============================================================ */

  const handleTabKeyDown = (
    event: KeyboardEvent<HTMLButtonElement>,
    currentIndex: number,
  ) => {
    let nextIndex = currentIndex;

    if (event.key === "ArrowDown" || event.key === "ArrowRight") {
      nextIndex = (currentIndex + 1) % content.areas.length;
    } else if (event.key === "ArrowUp" || event.key === "ArrowLeft") {
      nextIndex =
        (currentIndex - 1 + content.areas.length) % content.areas.length;
    } else if (event.key === "Home") {
      nextIndex = 0;
    } else if (event.key === "End") {
      nextIndex = content.areas.length - 1;
    } else {
      return;
    }

    event.preventDefault();

    setActiveIndex(nextIndex);

    tabRefs.current[nextIndex]?.focus();
  };

  return (
    <section
      id="platform"
      dir={locale === "ar" ? "rtl" : "ltr"}
      aria-labelledby={`${sectionId}-title`}
      className="relative overflow-hidden border-t border-white/[0.08] bg-[#09090b] py-20 sm:py-24 lg:py-28"
    >
      {/* =========================================================
          BACKGROUND
      ========================================================== */}

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[75%] top-[5%] h-[420px] w-[420px] rounded-full bg-[#10b981]/[0.035] blur-[130px]" />

        <div className="absolute bottom-[10%] left-[5%] h-[320px] w-[320px] rounded-full bg-[#84cc16]/[0.018] blur-[120px]" />
      </div>

      {/* =========================================================
          CONTAINER
      ========================================================== */}

      <div className="relative mx-auto max-w-7xl px-6">
        {/* =======================================================
            HEADER
        ======================================================== */}

        <motion.header
          initial={
            shouldReduceMotion
              ? false
              : {
                  opacity: 0,
                  y: 18,
                }
          }
          whileInView={
            shouldReduceMotion
              ? undefined
              : {
                  opacity: 1,
                  y: 0,
                }
          }
          viewport={{
            once: true,
            amount: 0.25,
          }}
          transition={{
            duration: shouldReduceMotion ? 0 : 0.6,
          }}
          className="max-w-3xl"
        >
          <div className="mb-5 inline-flex items-center gap-2 font-[var(--font-mono)] text-[10px] font-medium uppercase tracking-[0.12em] text-emerald-300/80">
            <span className="size-1.5 rounded-full bg-emerald-300 shadow-[0_0_10px_rgba(78,222,163,0.6)]" />

            {content.eyebrow}
          </div>

          <h2
            id={`${sectionId}-title`}
            className="max-w-3xl font-[var(--font-display)] text-3xl font-medium leading-[1.08] tracking-[-0.035em] text-white sm:text-4xl lg:text-5xl"
          >
            {content.title}
          </h2>

          <p className="mt-4 max-w-2xl text-sm leading-6 text-white/55 sm:text-base sm:leading-7">
            {content.description}
          </p>
        </motion.header>

        {/* =======================================================
            TABS + CONTENT
        ======================================================== */}

        <div className="mt-10 grid gap-4 lg:mt-14 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-8 xl:grid-cols-[260px_minmax(0,1fr)]">
          {/* =====================================================
              TAB LIST
          ====================================================== */}

          <div
            role="tablist"
            aria-label={content.eyebrow}
            className="flex gap-2 overflow-x-auto pb-1 scrollbar-none lg:flex-col lg:gap-1 lg:overflow-visible lg:pb-0"
          >
            {content.areas.map((area, index) => {
              const Icon = areaIcons[index];

              const isActive = index === activeIndex;

              return (
                <button
                  key={area.id}
                  ref={(element) => {
                    tabRefs.current[index] = element;
                  }}
                  type="button"
                  id={`${sectionId}-tab-${area.id}`}
                  role="tab"
                  aria-selected={isActive}
                  aria-controls={`${sectionId}-panel`}
                  tabIndex={isActive ? 0 : -1}
                  onClick={() => setActiveIndex(index)}
                  onKeyDown={(event) => handleTabKeyDown(event, index)}
                  className={`group relative my-1.5 min-h-12 shrink-0 cursor-pointer items-center gap-3 border px-4 text-start transition-all duration-300 lg:w-full lg:border-transparent lg:px-6 lg:py-4 ${
                    isActive
                      ? "border-emerald-300/20 bg-emerald-300/[0.07] text-white"
                      : "border-white/[0.06] bg-white/[0.012] text-white/45 hover:border-white/15 hover:bg-white/[0.03] hover:text-white/80 lg:bg-transparent"
                  }`}
                >
                  {/* Active indicator */}
                  {isActive && (
                    <motion.span
                      layoutId="platform-active-tab"
                      className="absolute bottom-0 left-0 top-0 w-px bg-[#4edea3] shadow-[0_0_12px_rgba(78,222,163,0.6)]"
                    />
                  )}

                  <span className="relative z-10 flex items-center gap-3">
                    {/* Number */}
                    <span className="font-[var(--font-mono)] text-[9px] text-white/25">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    {/* Icon */}
                    <Icon
                      size={15}
                      strokeWidth={1.5}
                      className={
                        isActive ? "text-emerald-200" : "text-white/30"
                      }
                      aria-hidden="true"
                    />

                    {/* Title */}
                    <span className="whitespace-nowrap text-xs font-medium sm:text-sm">
                      {area.title}
                    </span>
                  </span>

                  {/* Desktop heading */}
                  {isActive && (
                    <motion.div
                      initial={
                        shouldReduceMotion
                          ? false
                          : {
                              opacity: 0,
                              y: 10,
                            }
                      }
                      animate={
                        shouldReduceMotion
                          ? undefined
                          : {
                              opacity: 1,
                              y: 0,
                            }
                      }
                      transition={{
                        duration: shouldReduceMotion ? 0 : 0.45,
                      }}
                    >
                      <span className="mt-3 hidden ps-[31px] text-[13px] leading-snug text-white/45 lg:block">
                        {area.heading}
                      </span>
                    </motion.div>
                  )}
                </button>
              );
            })}
          </div>

          {/* =====================================================
              ACTIVE PANEL
          ====================================================== */}

          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={`${locale}-${activeArea.id}`}
              id={`${sectionId}-panel`}
              role="tabpanel"
              aria-labelledby={`${sectionId}-tab-${activeArea.id}`}
              tabIndex={0}
              initial={
                shouldReduceMotion
                  ? {
                      opacity: 0,
                    }
                  : {
                      opacity: 0,
                      y: 14,
                    }
              }
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={
                shouldReduceMotion
                  ? {
                      opacity: 0,
                    }
                  : {
                      opacity: 0,
                      y: -8,
                    }
              }
              transition={{
                duration: shouldReduceMotion ? 0.12 : 0.35,
              }}
              className={`relative min-w-0 overflow-hidden border border-white/[0.09] bg-[#111113] ${
                isLaptop ? "p-4 sm:p-6 lg:p-8" : "p-4 sm:p-5 lg:p-7"
              }`}
            >
              {/* =================================================
                  PANEL ATMOSPHERE
              ================================================== */}

              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_15%,rgba(78,222,163,0.055),transparent_38%)]" />

              <div
                className="pointer-events-none absolute inset-0 opacity-[0.045]"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(78,222,163,0.10) 1px, transparent 1px), linear-gradient(90deg, rgba(78,222,163,0.10) 1px, transparent 1px)",
                  backgroundSize: "30px 30px",
                }}
              />

              {/* =================================================
                  LAPTOP LAYOUT
              ================================================== */}

              {isLaptop ? (
                <div className="relative grid grid-cols-1 gap-10 lg:gap-12">
                  {/* -------------------------------------------
                      CONTENT TOP
                  -------------------------------------------- */}

                  <div className="max-w-4xl">
                    {/* Index */}
                    <p className="font-[var(--font-mono)] text-[9px] tracking-[0.12em] text-emerald-300/60">
                      {String(activeIndex + 1).padStart(2, "0")} /{" "}
                      {String(content.areas.length).padStart(2, "0")}
                    </p>

                    {/* Heading */}
                    <h3 className="mt-4 max-w-4xl font-[var(--font-display)] text-3xl font-medium leading-[1.06] tracking-[-0.035em] text-white sm:text-4xl lg:text-5xl">
                      {activeArea.heading}
                    </h3>

                    {/* Description */}
                    <p className="mt-5 max-w-3xl text-sm leading-6 text-white/50 sm:text-base sm:leading-7">
                      {activeArea.description}
                    </p>

                    {/* Features */}
                    <div className="mt-7 grid gap-x-10 gap-y-4 sm:grid-cols-2 lg:max-w-3xl">
                      {activeArea.features.map((feature, index) => (
                        <motion.div
                          key={feature}
                          initial={
                            shouldReduceMotion
                              ? false
                              : {
                                  opacity: 0,
                                  y: 8,
                                }
                          }
                          animate={
                            shouldReduceMotion
                              ? undefined
                              : {
                                  opacity: 1,
                                  y: 0,
                                }
                          }
                          transition={{
                            duration: shouldReduceMotion ? 0 : 0.35,
                            delay: shouldReduceMotion ? 0 : index * 0.06,
                          }}
                          className="flex min-w-0 items-start gap-2.5 text-xs leading-5 text-white/65 sm:text-sm"
                        >
                          <Check
                            size={15}
                            strokeWidth={3}
                            className="mt-0.5 size-4 shrink-0 rounded-full border border-emerald-300/35 bg-emerald-300/[0.08] p-[2px] text-emerald-200"
                            aria-hidden="true"
                          />

                          <span>{feature}</span>
                        </motion.div>
                      ))}
                    </div>

                    {/* Meta */}
                    <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-white/[0.07] pt-5">
                      <div className="flex items-center gap-2 text-[9px] text-white/30">
                        <span className="size-1.5 rounded-full bg-emerald-300/80 shadow-[0_0_8px_rgba(78,222,163,0.5)]" />

                        <span className="font-[var(--font-mono)] uppercase tracking-[0.08em]">
                          {content.sampleLabel}
                        </span>
                      </div>

                      <div className="font-[var(--font-mono)] text-[8px] tracking-[0.08em] text-white/20">
                        DESKTOP EXPERIENCE
                      </div>
                    </div>
                  </div>

                  {/* -------------------------------------------
                      LAPTOP BELOW CONTENT
                  -------------------------------------------- */}

                  <div className="relative">
                    <AreaVisual
                      activeArea={activeArea}
                      locale={locale}
                      shouldReduceMotion={shouldReduceMotion}
                    />
                  </div>

                  {/* -------------------------------------------
                      BOTTOM CONNECTION
                  -------------------------------------------- */}

                  <div className="flex items-center gap-3 border-t border-white/[0.07] pt-5">
                    <span className="font-[var(--font-mono)] text-[8px] text-white/25">
                      0{activeIndex + 1}
                    </span>

                    <span className="h-px w-10 bg-emerald-300/40" />

                    <span className="font-[var(--font-mono)] text-[8px] text-white/25">
                      {String(
                        activeIndex === content.areas.length - 1
                          ? 1
                          : activeIndex + 2,
                      ).padStart(2, "0")}
                    </span>

                    <span className="text-[10px] text-white/25">
                      {locale === "ar"
                        ? "مرتبط بباقي عملياتك"
                        : "Connected to the rest of your workflow"}
                    </span>
                  </div>
                </div>
              ) : (
                /* =================================================
                   MOBILE LAYOUT
                ================================================== */

                <div className="relative grid items-center gap-7 lg:grid-cols-[minmax(0,1.75fr)_minmax(250px,0.8fr)] xl:gap-10">
                  {/* -------------------------------------------
                      CONTENT
                  -------------------------------------------- */}

                  <div className="min-w-0 py-1 sm:py-3">
                    <p className="font-[var(--font-mono)] text-[9px] tracking-[0.12em] text-emerald-300/60">
                      {String(activeIndex + 1).padStart(2, "0")} /{" "}
                      {String(content.areas.length).padStart(2, "0")}
                    </p>

                    <h3 className="mt-3 text-2xl font-medium leading-tight text-white sm:text-3xl">
                      {activeArea.heading}
                    </h3>

                    <p className="mt-3 max-w-md text-sm leading-6 text-white/55 sm:text-[15px] sm:leading-7">
                      {activeArea.description}
                    </p>

                    <ul className="mt-5 space-y-2.5">
                      {activeArea.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex min-w-0 items-start gap-2.5 text-xs leading-5 text-white/65 sm:text-sm"
                        >
                          <Check
                            size={15}
                            strokeWidth={3}
                            className="mt-0.5 size-4 shrink-0 rounded-full border border-emerald-300/35 bg-emerald-300/[0.08] p-[2px] text-emerald-200"
                            aria-hidden="true"
                          />

                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-6 flex items-center gap-2 text-[10px] text-white/35">
                      <span className="size-1.5 rounded-full bg-emerald-300/80" />

                      <span className="font-[var(--font-mono)] uppercase tracking-[0.08em]">
                        {content.sampleLabel}
                      </span>
                    </div>
                  </div>

                  {/* -------------------------------------------
                      MOBILE MOCKUP
                  -------------------------------------------- */}

                  <div className="min-w-0">
                    <AreaVisual
                      activeArea={activeArea}
                      locale={locale}
                      shouldReduceMotion={shouldReduceMotion}
                    />
                  </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* =======================================================
            CONNECTED WORKFLOW
        ======================================================== */}

        <div className="mt-5 border-t border-white/[0.07] pt-4">
          <p className="font-[var(--font-mono)] text-[9px] uppercase tracking-[0.1em] text-white/30">
            {locale === "ar"
              ? "تسلسل عمليات الأعمال"
              : "CONNECTED BUSINESS WORKFLOW"}
          </p>

          <ol className="mt-3 flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none sm:gap-3 lg:justify-between">
            {content.areas.map((area, index) => {
              const FlowArrow = locale === "ar" ? ArrowLeft : ArrowRight;

              const isActive = index === activeIndex;

              return (
                <li
                  key={`flow-${area.id}`}
                  aria-current={isActive ? "step" : undefined}
                  className="flex shrink-0 items-center gap-2"
                >
                  <button
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    className="flex items-center gap-2"
                  >
                    <span
                      className={`font-[var(--font-mono)] text-[8px] ${
                        isActive ? "text-emerald-200" : "text-white/30"
                      }`}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span
                      className={`whitespace-nowrap text-[10px] transition-colors ${
                        isActive
                          ? "text-white/85"
                          : "text-white/40 hover:text-white/65"
                      }`}
                    >
                      {area.title}
                    </span>
                  </button>

                  {index < content.areas.length - 1 && (
                    <FlowArrow
                      size={12}
                      className="ms-1 text-emerald-300/25"
                      aria-hidden="true"
                    />
                  )}
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
