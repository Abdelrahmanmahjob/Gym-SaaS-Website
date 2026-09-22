"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Image from "next/image";

import type { HeroSlide } from "@/components/content/hero-content";
import { usePageTransition } from "@/components/ui/page-transition";

const AUTOPLAY_DELAY = 7000;

type HeroSliderProps = {
  slides: readonly HeroSlide[];

  activeIndex: number;

  direction: 1 | -1;

  isPaused: boolean;

  locale: "ar" | "en";

  onNext: () => void;

  onPrevious: () => void;

  onPause: () => void;

  onResume: () => void;

  onSelect: (index: number) => void;

  previousLabel: string;

  nextLabel: string;
};

export function HeroSlider({
  slides,
  activeIndex,
  direction,
  locale,
  isPaused,
  onNext,
  onPrevious,
  onPause,
  onResume,
  onSelect,
  previousLabel,
  nextLabel,
}: HeroSliderProps) {
  const shouldReduceMotion = useReducedMotion();
  const { isLoaded } = usePageTransition();
  const [isInitialReveal, setIsInitialReveal] = useState(true);

  const touchStartX = useRef<number | null>(null);

  const activeSlide = slides[activeIndex];

  useEffect(() => {
    if (!isLoaded) {
      return;
    }

    const timeout = window.setTimeout(() => {
      setIsInitialReveal(false);
    }, 1100);

    return () => window.clearTimeout(timeout);
  }, [isLoaded]);

  const handleTouchStart = (event: React.TouchEvent<HTMLDivElement>) => {
    touchStartX.current = event.touches[0]?.clientX ?? null;
  };

  const handleTouchEnd = (event: React.TouchEvent<HTMLDivElement>) => {
    if (touchStartX.current === null) {
      return;
    }

    const endX = event.changedTouches[0]?.clientX ?? 0;

    const distance = touchStartX.current - endX;

    if (Math.abs(distance) > 50) {
      if (distance > 0) {
        onNext();
      } else {
        onPrevious();
      }
    }

    touchStartX.current = null;
  };

  useEffect(() => {
    if (shouldReduceMotion || isPaused) {
      return;
    }

    const interval = window.setInterval(onNext, AUTOPLAY_DELAY);

    return () => window.clearInterval(interval);
  }, [isPaused, onNext, shouldReduceMotion]);

  if (!activeSlide) return null;

  const slideVariants = {
    initial: {
      opacity: 0,
      x: shouldReduceMotion ? 0 : direction * 90,
      scale: shouldReduceMotion ? 1 : 0.95,
    },

    animate: {
      opacity: 1,
      x: 0,
      scale: 1,
    },

    exit: {
      opacity: 0,
      x: shouldReduceMotion ? 0 : direction * -90,
      scale: shouldReduceMotion ? 1 : 0.97,
    },
  };

  return (
    <section
      aria-label={activeSlide.imageAlt}
      className="relative flex w-full max-w-[760px] items-center justify-center"
      onMouseEnter={onPause}
      onMouseLeave={onResume}
      onFocus={onPause}
      onBlur={onResume}
    >
      {/* ======================================================
          PRODUCT AREA
      ======================================================= */}

      <div
        className="relative flex min-h-[440px] w-full items-center justify-center touch-pan-y sm:min-h-[540px] lg:min-h-[620px]"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {/* Subtle product glow */}
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[280px] w-[280px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#10b981]/[0.05] blur-[110px] sm:h-[380px] sm:w-[380px]" />

        {/* ==================================================
            SLIDE
        =================================================== */}

        <AnimatePresence initial={false} mode="wait">
          <motion.div
            key={activeSlide.id}
            variants={slideVariants}
            initial="initial"
            animate={isLoaded ? "animate" : "initial"}
            exit="exit"
            transition={{
              delay: isInitialReveal ? 1.03 : 0,
              duration: shouldReduceMotion ? 0.15 : 0.7,

              ease: [0.22, 1, 0.36, 1],
            }}
            className={`relative flex w-full items-center justify-center h-[360px] sm:h-[460px] lg:h-[520px]
            
            `}
          >
            <Image
              src={activeSlide.image}
              alt={activeSlide.imageAlt}
              fill
              priority={activeIndex === 0}
              sizes="(max-width: 640px) 95vw, (max-width: 1024px) 75vw, 52vw"
              className={
                activeSlide.id === "mobile"
                  ? "object-contain object-center"
                  : "object-contain object-center "
              }
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* ======================================================
          SLIDE INDICATOR
      ======================================================= */}

      <div className="absolute bottom-3 right-4 hidden items-center gap-3 font-[var(--font-mono)] text-[9px] tracking-[0.08em] text-white/25 sm:flex">
        <span>0{activeIndex + 1}</span>

        <div className="flex gap-1.5">
          {slides.map((slide, index) => (
            <button
              key={slide.id}
              type="button"
              onClick={() => onSelect(index)}
              aria-label={slide.deviceLabel}
              className="relative h-px w-8 overflow-hidden bg-white/10 cursor-pointer"
            >
              {index === activeIndex && (
                <motion.span
                  className="absolute inset-y-0 left-0 bg-[#4edea3]"
                  initial={{
                    width: 0,
                  }}
                  animate={{
                    width: "100%",
                  }}
                  transition={{
                    duration: AUTOPLAY_DELAY / 1000,
                    ease: "linear",
                  }}
                />
              )}
            </button>
          ))}
        </div>

        <span>0{slides.length}</span>
      </div>

      {/* ======================================================
          MOBILE CONTROLS
      ======================================================= */}

      <div className="absolute bottom-0 left-1/2 z-30 flex -translate-x-1/2 items-center gap-2 xl:hidden">
        <button
          type="button"
          onClick={onPrevious}
          aria-label={previousLabel}
          className="flex h-10 w-10 items-center justify-center border border-[#27272a] bg-[#09090b] text-white transition-colors hover:border-[#3f3f46] hover:text-[#4edea3]"
        >
          {locale === "ar" ? "›" : "‹"}
        </button>

        <button
          type="button"
          onClick={onNext}
          aria-label={nextLabel}
          className="flex h-10 w-10 items-center justify-center border border-[#27272a] bg-[#09090b] text-white transition-colors hover:border-[#3f3f46] hover:text-[#4edea3]"
        >
          {locale === "ar" ? "‹" : "›"}
        </button>
      </div>
    </section>
  );
}

export { AUTOPLAY_DELAY };
