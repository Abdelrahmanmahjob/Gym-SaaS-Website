"use client";

import { useEffect, useState, type ReactNode } from "react";
import { createPortal } from "react-dom";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

import { CalendarDays, Clock3, Globe2, Video, X } from "lucide-react";

import type { Locale } from "@/components/content/hero-content";

type DemoPopupProps = {
  locale?: Locale;
  children: ReactNode;
};

const content = {
  ar: {
    eyebrow: "احجز عرضًا توضيحيًا",

    title: "اكتشف كيف تعمل أنان مع نشاطك.",

    description:
      "اختر الوقت المناسب لك وسنلتقي عبر Google Meet لعرض المنصة ومناقشة احتياجات نشاطك.",

    duration: "60 دقيقة",

    meeting: "Google Meet",

    timezone: "توقيت الرياض · GMT+3",

    close: "إغلاق",

    bookingPage: "هل لا تظهر صفحة الحجز؟ افتحها مباشرة",
  },

  en: {
    eyebrow: "SCHEDULE A DEMO",

    title: "See how ANAN can work for your business.",

    description:
      "Choose a time that works for you and meet our team on Google Meet for a focused product walkthrough.",

    duration: "60 minutes",

    meeting: "Google Meet",

    timezone: "Riyadh Time · GMT+3",

    close: "Close",

    bookingPage: "Booking page not loading? Open it directly",
  },
} as const;

export function DemoPopup({ locale = "en", children }: DemoPopupProps) {
  const text = content[locale];

  const reducedMotion = Boolean(useReducedMotion());

  const [open, setOpen] = useState(false);

  const bookingUrl = process.env.NEXT_PUBLIC_GOOGLE_BOOKING_URL;

  const modal = (
    <AnimatePresence>
      {open && (
        <motion.div
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
            duration: reducedMotion ? 0.1 : 0.3,
          }}
          className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto bg-black/75 px-3 py-4 backdrop-blur-xl sm:px-5 sm:py-8 lg:px-8"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              setOpen(false);
            }
          }}
        >
          {/* ==================================================
                MODAL
            =================================================== */}

          <motion.div
            dir={locale === "ar" ? "rtl" : "ltr"}
            role="dialog"
            aria-modal="true"
            aria-labelledby="demo-title"
            initial={
              reducedMotion
                ? {
                    opacity: 0,
                  }
                : {
                    opacity: 0,
                    y: 20,
                    scale: 0.985,
                  }
            }
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            exit={
              reducedMotion
                ? {
                    opacity: 0,
                  }
                : {
                    opacity: 0,
                    y: 12,
                    scale: 0.99,
                  }
            }
            transition={{
              duration: reducedMotion ? 0.12 : 0.45,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative z-50 flex w-full max-h-[95vh] rounded-3xl max-w-[1180px] flex-col overflow-hidden border border-[#3f3f46] bg-[#111113] shadow-[0_30px_120px_rgba(0,0,0,0.55)]"
          >
            {/* =================================================
                  ATMOSPHERE
              ================================================== */}

            <div className="pointer-events-none absolute -right-32 -top-32 h-[420px] w-[420px] rounded-full bg-[#10b981]/[0.055] blur-[130px]" />

            <div className="pointer-events-none absolute -bottom-32 -left-32 h-[420px] w-[420px] rounded-full bg-[#84cc16]/[0.02] blur-[130px]" />

            {/* =================================================
                  HEADER
              ================================================== */}

            <header className="relative z-10 border-b border-[#27272a] px-5 py-5 sm:px-7 sm:py-6 lg:px-8">
              <div className="flex items-start justify-between gap-6">
                <div className="min-w-0">
                  {/* Eyebrow */}

                  <div className="mb-3 flex items-center gap-2 font-[var(--font-mono)] text-[8px] tracking-[0.15em] text-[#4edea3]/70 sm:text-[9px]">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#4edea3] shadow-[0_0_10px_rgba(78,222,163,0.65)]" />

                    {text.eyebrow}
                  </div>

                  {/* Title */}

                  <h2
                    id="demo-title"
                    className="max-w-3xl font-[var(--font-display)] text-2xl font-medium leading-[1.08] tracking-[-0.03em] text-[#fafafa] sm:text-3xl lg:text-4xl"
                  >
                    {text.title}
                  </h2>

                  <p className="mt-3 max-w-2xl text-sm leading-6 text-[#a1a1aa]">
                    {text.description}
                  </p>
                </div>

                {/* Close */}

                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  aria-label={text.close}
                  className="flex size-9 shrink-0 rounded-full cursor-pointer items-center justify-center border border-[#27272a] bg-[#09090b] text-white/40 transition-all duration-300 hover:border-[#3f3f46] hover:text-white"
                >
                  <X size={17} strokeWidth={1.5} />
                </button>
              </div>

              {/* Meeting info */}

              <div className="mt-5 flex flex-wrap gap-2">
                <InfoChip icon={<Clock3 size={13} />} text={text.duration} />

                <InfoChip icon={<Video size={13} />} text={text.meeting} />

                <InfoChip icon={<Globe2 size={13} />} text={text.timezone} />
              </div>
            </header>

            {/* =================================================
                  GOOGLE BOOKING AREA
              ================================================== */}

            <div className="relative z-10 min-h-0 flex-1 overflow-auto bg-[#09090b]">
              {bookingUrl ? (
                <iframe
                  title={
                    locale === "ar"
                      ? "حجز موعد مع أنان Sustainability"
                      : "Book a meeting with ANAN Sustainability"
                  }
                  src={bookingUrl}
                  className="h-[680px] w-full border-0 bg-white sm:h-[720px] lg:h-[760px]"
                  loading="eager"
                  allow="camera; microphone"
                />
              ) : (
                <MissingBookingUrl locale={locale} />
              )}
            </div>

            {/* =================================================
                  FOOTER
              ================================================== */}

            <footer className="relative z-10 border-t border-[#27272a] px-5 py-4 sm:px-7">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-2">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="absolute inset-0 animate-ping rounded-full bg-[#4edea3]/30" />

                    <span className="relative h-1.5 w-1.5 rounded-full bg-[#4edea3]" />
                  </span>

                  <span className="font-[var(--font-mono)] text-[8px] tracking-[0.08em] text-white/25">
                    {text.bookingPage}
                  </span>
                </div>

                {bookingUrl && (
                  <a
                    href={bookingUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 font-[var(--font-mono)] text-[8px] tracking-[0.08em] text-[#4edea3]/70 transition-colors hover:text-[#6ffbbe]"
                  >
                    <CalendarDays size={13} />

                    {locale === "ar" ? "فتح صفحة الحجز" : "Open booking page"}
                  </a>
                )}
              </div>
            </footer>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );

  /* ============================================================
     BODY LOCK
  ============================================================ */

  useEffect(() => {
    if (!open) return;

    const previous = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previous;
    };
  }, [open]);

  /* ============================================================
     ESCAPE
  ============================================================ */

  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [open]);

  return (
    <>
      {/* ======================================================
          TRIGGER
      ======================================================= */}

      <span className="contents" onClick={() => setOpen(true)}>
        {children}
      </span>

      {/* ======================================================
          MODAL
      ======================================================= */}
      {typeof document !== "undefined" && createPortal(modal, document.body)}
    </>
  );
}

/* ================================================================
   INFO CHIP
================================================================ */

function InfoChip({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="flex items-center gap-2 border border-[#27272a] bg-[#09090b]/80 px-3 py-2">
      <span className="text-[#4edea3]">{icon}</span>

      <span className="font-[var(--font-mono)] text-[8px] tracking-[0.05em] text-white/35">
        {text}
      </span>
    </div>
  );
}

/* ================================================================
   FALLBACK
================================================================ */

function MissingBookingUrl({ locale }: { locale: Locale }) {
  return (
    <div className="flex h-[500px] items-center justify-center p-8 text-center">
      <div className="max-w-md">
        <div className="mx-auto flex size-12 items-center justify-center border border-[#27272a] bg-[#111113]">
          <CalendarDays size={19} className="text-[#4edea3]" />
        </div>

        <h3 className="mt-5 font-[var(--font-display)] text-xl font-medium text-white">
          {locale === "ar"
            ? "رابط الحجز غير مهيأ"
            : "Booking URL is not configured"}
        </h3>

        <p className="mt-3 text-sm leading-6 text-white/35">
          {locale === "ar"
            ? "أضف NEXT_PUBLIC_GOOGLE_BOOKING_URL إلى ملف البيئة."
            : "Add NEXT_PUBLIC_GOOGLE_BOOKING_URL to your environment variables."}
        </p>
      </div>
    </div>
  );
}
