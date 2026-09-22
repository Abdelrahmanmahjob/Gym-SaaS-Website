"use client";

import { useCallback, useState } from "react";

import { motion, useReducedMotion } from "framer-motion";

import { ArrowUpRight, Check, ChevronLeft, ChevronRight } from "lucide-react";

import Link from "next/link";

import { RainbowButton } from "@/components/ui/rainbow-button";

import Text3DFlip from "@/components/ui/text-3d-flip";

import { heroContent, type Locale } from "@/components/content/hero-content";

import { HeroSlider } from "@/components/ui/hero-slider";
import { usePageTransition } from "@/components/ui/page-transition";

export function Hero({ locale }: { locale: Locale }) {
  const text = heroContent[locale];

  const isArabic = locale === "ar";

  const shouldReduceMotion = useReducedMotion();
  const { isLoaded } = usePageTransition();

  const [activeIndex, setActiveIndex] = useState(0);

  const [direction, setDirection] = useState<1 | -1>(1);

  const [isPaused, setIsPaused] = useState(false);

  const activeSlide = text.slides[activeIndex];

  /* ============================================================
     SLIDER CONTROL
  ============================================================ */

  const nextSlide = useCallback(() => {
    setDirection(1);

    setActiveIndex((current) => (current + 1) % text.slides.length);
  }, [text.slides.length]);

  const previousSlide = useCallback(() => {
    setDirection(-1);

    setActiveIndex(
      (current) => (current - 1 + text.slides.length) % text.slides.length,
    );
  }, [text.slides.length]);

  const selectSlide = useCallback(
    (index: number) => {
      setDirection(index > activeIndex ? 1 : -1);

      setActiveIndex(index);
    },
    [activeIndex],
  );

  return (
    <main
      id="hero"
      dir={isArabic ? "rtl" : "ltr"}
      className="relative isolate min-h-screen overflow-hidden bg-[#09090b] pt-10"
    >
      {/* =========================================================
          BACKGROUND VIDEO
      ========================================================== */}

      <motion.video
        className="pointer-events-none absolute inset-0 h-full w-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        aria-hidden="true"
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoaded ? 1 : 0 }}
        transition={{ duration: 0.65, ease: "easeOut" }}
      >
        <source src="/media/hero/hero-bg.mp4" type="video/mp4" />
      </motion.video>

      {/* =========================================================
          MAIN CONTAINER
      ========================================================== */}

      <div className="relative z-10 mx-auto flex min-h-[100vh] max-w-7xl items-center px-6 py-16 sm:py-20 lg:py-24">
        <div className="grid w-full items-center gap-10 lg:grid-cols-[2fr_1.5fr]">
          {/* ======================================================
              HERO CONTENT
          ======================================================= */}

          <motion.section
            initial={{
              opacity: 0,
              y: 24,
            }}
            animate={{
              opacity: isLoaded ? 1 : 0,
              y: isLoaded ? 0 : 24,
            }}
            transition={{
              delay: 0.38,
              duration: 0.75,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative z-20 max-w-[650px]"
          >
            {/* Main eyebrow */}
            <div className="mb-6 flex items-center gap-3 font-[var(--font-mono)] text-[10px] tracking-[0.14em] text-white/45">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inset-0 animate-ping rounded-full bg-[#4edea3]/40" />

                <span className="relative h-1.5 w-1.5 rounded-full bg-[#4edea3] shadow-[0_0_12px_rgba(78,222,163,0.7)]" />
              </span>

              {text.heroEyebrow}
            </div>

            {/* Dynamic eyebrow */}
            <motion.div
              key={activeSlide.id}
              initial={{
                opacity: 0,
                y: 8,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.3,
              }}
              className="mb-5 font-[var(--font-mono)] text-[9px] tracking-[0.15em] text-[#4edea3]/65"
            >
              {activeSlide.eyebrow}
            </motion.div>

            {/* =================================================
                TITLE
            ================================================== */}

            <motion.div
              key={`title-${activeSlide.id}`}
              initial={{
                opacity: 0,
                y: 18,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: shouldReduceMotion ? 0.15 : 0.45,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <Text3DFlip
                as="h1"
                className="max-w-[820px] text-4xl font-semibold leading-[1.04] tracking-[-0.045em] text-white sm:text-5xl md:text-6xl lg:text-[62px]"
                textClassName="text-white"
                flipTextClassName="text-[#4edea3]"
                staggerDuration={0.025}
                rotateDirection="top"
                splitMode={isArabic ? "words" : "characters"}
                dir={isArabic ? "rtl" : "ltr"}
              >
                {activeSlide.title}
              </Text3DFlip>
            </motion.div>

            {/* Description */}
            <motion.p
              key={`description-${activeSlide.id}`}
              initial={{
                opacity: 0,
                y: 12,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: shouldReduceMotion ? 0.15 : 0.4,
                delay: 0.05,
              }}
              className="mt-7 max-w-[560px] text-base leading-7 text-white/60 sm:text-lg sm:leading-8"
            >
              {activeSlide.description}
            </motion.p>

            {/* CTA */}
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <RainbowButton
                asChild
                size="lg"
                className="w-full font-[var(--font-mono)] text-[10px] tracking-[0.06em] sm:w-auto"
              >
                <Link href="#demo">
                  {text.primary}

                  <ArrowUpRight size={17} />
                </Link>
              </RainbowButton>
            </div>

            {/* Status */}
            <div className="mt-9 flex flex-wrap gap-x-6 gap-y-3 font-[var(--font-mono)] text-[9px] tracking-[0.05em] text-white/40">
              <span className="inline-flex items-center gap-2 text-[#91db2a]">
                <Check size={13} />

                {text.live}
              </span>

              <span>{text.proof}</span>
            </div>
          </motion.section>

          {/* ======================================================
              PRODUCT SLIDER
          ======================================================= */}

          <HeroSlider
            slides={text.slides}
            activeIndex={activeIndex}
            direction={direction}
            locale={locale}
            isPaused={isPaused}
            onNext={nextSlide}
            onPrevious={previousSlide}
            onPause={() => setIsPaused(true)}
            onResume={() => setIsPaused(false)}
            onSelect={selectSlide}
            previousLabel={text.previous}
            nextLabel={text.next}
          />
        </div>
      </div>

      {/* =========================================================
          SECTION-WIDE ARROWS
      ========================================================== */}

      <div className="pointer-events-none absolute inset-y-0 left-0 right-0 z-30 hidden items-center justify-between px-5 2xl:flex">
        {/* Previous */}
        <button
          type="button"
          onClick={previousSlide}
          aria-label={text.previous}
          className="pointer-events-auto cursor-pointer flex h-12 w-12 items-center justify-center border border-white/10 rounded-xl bg-black/80 text-white/35 backdrop-blur-[2px] transition-all duration-300 hover:border-[#3f3f46] hover:bg-[#111113]/40 hover:text-[#4edea3]"
        >
          {isArabic ? (
            <ChevronRight size={23} strokeWidth={1.2} />
          ) : (
            <ChevronLeft size={23} strokeWidth={1.2} />
          )}
        </button>

        {/* Next */}
        <button
          type="button"
          onClick={nextSlide}
          aria-label={text.next}
          className="pointer-events-auto cursor-pointer flex h-12 w-12 items-center justify-center border border-white/10 rounded-xl bg-black/80 text-white/35 backdrop-blur-[2px] transition-all duration-300 hover:border-[#3f3f46] hover:bg-[#111113]/40 hover:text-[#4edea3]"
        >
          {isArabic ? (
            <ChevronLeft size={23} strokeWidth={1.2} />
          ) : (
            <ChevronRight size={23} strokeWidth={1.2} />
          )}
        </button>
      </div>
    </main>
  );
}
