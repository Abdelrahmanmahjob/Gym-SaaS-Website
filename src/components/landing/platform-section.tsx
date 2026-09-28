"use client";

import { useRef, useState, type KeyboardEvent } from "react";
import {
  ArrowLeft,
  ArrowDownLeft,
  ArrowDownRight,
  ArrowRight,
  BatteryFull,
  BriefcaseBusiness,
  CalendarDays,
  Check,
  CreditCard,
  Globe2,
  Megaphone,
  Package,
  Signal,
  UsersRound,
  UserRound,
  Wifi,
} from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { platformContent } from "@/components/content/platform-content";
import type { Locale } from "@/components/content/hero-content";
import Image from "next/image";

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

const areaImages: Record<string, string> = {
  customers: "/media/platform/customers.png",
  bookings: "/media/platform/bookings.png",
  memberships: "/media/platform/memberships2.png",
  team: "/media/platform/team.png",
  payments: "/media/platform/payments.png",
  website: "/media/platform/website.png",
  marketing: "/media/platform/marketing.png",
  tools: "/media/platform/tools.png",
};

export function PlatformSection({ locale }: { locale: Locale }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const shouldReduceMotion = useReducedMotion();
  const content = platformContent[locale];
  const activeArea = content.areas[activeIndex];
  const sectionId = `platform-${locale}`;

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
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_78%_20%,rgba(16,185,129,0.07),transparent_38%)]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <motion.header
          initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
          whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.6 }}
          className="max-w-3xl"
        >
          <div className="mb-5 inline-flex items-center gap-2 font-[var(--font-mono)] text-[10px] font-medium uppercase tracking-[0.12em] text-emerald-300/80">
            <span className="size-1.5 rounded-full bg-emerald-300" />
            {content.eyebrow}
          </div>
          <h2
            id={`${sectionId}-title`}
            className="max-w-3xl text-3xl font-semibold leading-[1.12] text-white sm:text-4xl lg:text-5xl"
          >
            {content.title}
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-6 text-white/55 sm:text-base sm:leading-7">
            {content.description}
          </p>
        </motion.header>

        <div className="mt-10 grid gap-4 lg:mt-14 lg:grid-cols-[230px_minmax(0,1fr)] lg:gap-7 xl:grid-cols-[260px_minmax(0,1fr)]">
          <div
            role="tablist"
            aria-label={content.eyebrow}
            className="flex gap-2 overflow-x-auto pb-1 lg:flex-col lg:gap-1 lg:overflow-visible lg:pb-0"
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
                  className={`group relative flex min-h-12 shrink-0 items-center gap-3 rounded-sm border px-3 text-start transition-colors duration-200 lg:w-full lg:border-transparent lg:px-3.5 ${
                    isActive
                      ? "border-emerald-300/20 bg-emerald-300/[0.07] text-white lg:border-emerald-300/20"
                      : "border-white/[0.07] bg-white/[0.015] text-white/48 hover:border-white/15 hover:bg-white/[0.035] hover:text-white/80 lg:bg-transparent"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId={`${sectionId}-active-tab`}
                      className="absolute inset-y-2 start-0 w-[2px] rounded-full bg-emerald-300"
                      transition={{
                        duration: shouldReduceMotion ? 0 : 0.25,
                        ease: "easeOut",
                      }}
                    />
                  )}
                  <span className="font-[var(--font-mono)] text-[9px] text-white/30">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <Icon
                    size={15}
                    strokeWidth={1.7}
                    className={isActive ? "text-emerald-200" : "text-white/40"}
                    aria-hidden="true"
                  />
                  <span className="whitespace-nowrap text-xs font-medium sm:text-sm">
                    {area.title}
                  </span>
                  {isActive && (
                    <span className="ms-auto hidden text-emerald-200/70 lg:block">
                      {locale === "ar" ? (
                        <ArrowDownLeft size={14} />
                      ) : (
                        <ArrowDownRight size={14} />
                      )}
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={`${locale}-${activeArea.id}`}
              id={`${sectionId}-panel`}
              role="tabpanel"
              aria-labelledby={`${sectionId}-tab-${activeArea.id}`}
              tabIndex={0}
              initial={
                shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 12 }
              }
              animate={{ opacity: 1, y: 0 }}
              exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: -8 }}
              transition={{ duration: shouldReduceMotion ? 0.12 : 0.28 }}
              className="relative min-w-0 overflow-hidden rounded-md border border-white/[0.09] bg-[#111113] p-4 sm:p-6 lg:p-7"
            >
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(78,222,163,0.025)_1px,transparent_1px),linear-gradient(to_bottom,rgba(78,222,163,0.025)_1px,transparent_1px)] bg-[size:28px_28px]" />
              <div className="relative grid items-center gap-6 lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)] xl:gap-8">
                <div className="min-w-0 py-1 sm:py-3">
                  <p className="font-[var(--font-mono)] text-[9px] uppercase tracking-[0.12em] text-emerald-300/65">
                    {String(activeIndex + 1).padStart(2, "0")} /{" "}
                    {content.areas.length.toString().padStart(2, "0")}
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

                  <div className="mt-7 hidden items-center gap-2 lg:flex">
                    <span className="font-[var(--font-mono)] text-[9px] text-white/30">
                      {String(activeIndex + 1).padStart(2, "0")}
                    </span>
                    <span className="h-px w-10 bg-emerald-300/45" />
                    <span className="font-[var(--font-mono)] text-[9px] text-white/30">
                      {String(
                        activeIndex === content.areas.length - 1
                          ? 1
                          : activeIndex + 2,
                      ).padStart(2, "0")}
                    </span>
                    <span className="text-[10px] text-white/35">
                      {locale === "ar"
                        ? "مرتبط بباقي عملياتك"
                        : "Connected to the rest of your workflow"}
                    </span>
                  </div>
                </div>

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
                    rotate: 0,
                  }}
                  transition={{
                    duration: 0.3,
                    delay: 0.18,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="relative mx-auto w-full min-w-0 max-w-[345px] lg:mx-0"
                >
                  {/* Device glow */}
                  <div className="pointer-events-none absolute -inset-5 rounded-[3rem] bg-[#10b981]/[0.06] blur-[35px]" />

                  {/* Phone */}
                  <div className="relative rounded-[2.3rem] border-[5px] border-[#27272a] bg-[#030303] p-1.5 shadow-[0_30px_80px_rgba(0,0,0,0.45)] sm:rounded-[2.7rem]">
                    {/* Screen */}
                    <div className="relative aspect-[9/19] overflow-hidden rounded-[1.9rem] bg-[#111113] sm:rounded-[2.2rem]">
                      {/* Video placeholder */}
                      {/* <video
                        key={activeArea.id}
                        className="absolute inset-0 h-full w-full object-cover object-top"
                        autoPlay
                        loop
                        muted
                        playsInline
                        preload="metadata"
                        aria-label={activeArea.title}
                      >
                        <source
                          src={areaVideos[activeArea.id]}
                          type="video/mp4"
                        />
                      </video> */}
                      <Image
                        width={1200}
                        height={800}
                        src={areaImages[activeArea.id]}
                        alt={activeArea.title}
                        className="absolute left-0 top-2 h-full w-full object-cover object-left object-top"
                      />
                      <div
                        dir="ltr"
                        className="absolute inset-x-0 top-0 z-10 flex h-12 items-center justify-between bg-transparent px-[7%] text-white sm:h-14"
                      >
                        <span className="text-[13px] font-semibold leading-none">
                          9:41
                        </span>
                        <span className="absolute left-1/2 top-1/2 h-7 w-[35%] max-w-[108px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-black sm:h-8" />
                        <span
                          className="flex items-center gap-1.5"
                          aria-hidden="true"
                        >
                          <Signal size={14} strokeWidth={2.4} />
                          <Wifi size={15} strokeWidth={2.4} />
                          <BatteryFull size={16} strokeWidth={2.2} />
                        </span>
                      </div>

                      {/* Very subtle screen tint */}
                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#09090b]/35 via-transparent to-transparent" />
                    </div>

                    {/* Side button */}
                    <div className="absolute -left-[7px] top-[28%] h-10 w-1 rounded-full bg-[#3f3f46]" />

                    <div className="absolute -left-[7px] top-[38%] h-7 w-1 rounded-full bg-[#3f3f46]" />
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-5 border-t border-white/[0.07] pt-4">
          <p className="font-[var(--font-mono)] text-[9px] uppercase tracking-[0.1em] text-white/30">
            {locale === "ar"
              ? "تسلسل عمليات الأعمال"
              : "CONNECTED BUSINESS WORKFLOW"}
          </p>
          <ol className="mt-3 flex items-center gap-2 overflow-x-auto pb-1 sm:gap-3 lg:justify-between">
            {content.areas.map((area, index) => {
              const FlowArrow = locale === "ar" ? ArrowLeft : ArrowRight;

              return (
                <li
                  key={`flow-${area.id}`}
                  aria-current={index === activeIndex ? "step" : undefined}
                  className="flex shrink-0 items-center gap-2"
                >
                  <span
                    className={`font-[var(--font-mono)] text-[8px] ${
                      index === activeIndex
                        ? "text-emerald-200"
                        : "text-white/30"
                    }`}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span
                    className={`whitespace-nowrap text-[10px] ${
                      index === activeIndex ? "text-white/85" : "text-white/40"
                    }`}
                  >
                    {area.title}
                  </span>
                  {index < content.areas.length - 1 && (
                    <FlowArrow
                      size={12}
                      className="ms-1 text-emerald-300/35"
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
