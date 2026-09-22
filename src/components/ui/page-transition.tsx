"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

type PageTransitionContextValue = {
  isLoaded: boolean;
};

const PageTransitionContext = createContext<PageTransitionContextValue>({
  isLoaded: false,
});

export function usePageTransition() {
  return useContext(PageTransitionContext);
}

export function PageTransition({ children }: { children: React.ReactNode }) {
  const shouldReduceMotion = useReducedMotion();
  const [progress, setProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const duration = shouldReduceMotion ? 600 : 2000;
    const startTime = performance.now();
    let frameId: number;

    // Advanced Cubic Easing for realistic organic progress simulation
    const easeOutQuart = (x: number): number => 1 - Math.pow(1 - x, 4);

    const updateProgress = (now: number) => {
      const elapsedTime = now - startTime;
      const rawProgress = Math.min(elapsedTime / duration, 1);
      const easedProgress = easeOutQuart(rawProgress) * 100;

      setProgress(easedProgress);

      if (rawProgress < 1) {
        frameId = requestAnimationFrame(updateProgress);
      } else {
        document.body.style.overflow = "";
        setIsLoaded(true);
      }
    };

    document.body.style.overflow = "hidden";
    frameId = requestAnimationFrame(updateProgress);

    return () => {
      cancelAnimationFrame(frameId);
      document.body.style.overflow = "";
    };
  }, [shouldReduceMotion]);

  const roundedProgress = Math.min(Math.round(progress), 100);

  // High-precision SVG Geometry
  const radius = 118;
  const circumference = 2 * Math.PI * radius;
  const strokeOffset = circumference - (progress / 100) * circumference;

  return (
    <PageTransitionContext.Provider value={{ isLoaded }}>
      <AnimatePresence mode="wait">
        {!isLoaded && (
          <motion.div
            key="page-loader"
            initial={{ opacity: 1 }}
            exit={{
              opacity: 0,
              scale: 1.05,
              filter: "blur(12px)",
            }}
            transition={{
              duration: 0.85,
              ease: [0.16, 1, 0.3, 1], // Obsidian Precision Curve
            }}
            className="fixed inset-0 z-[9999] flex flex-col items-center justify-center overflow-hidden bg-[#09090b] text-[#e5e1e4] select-none"
            role="status"
            aria-live="polite"
            aria-label="Loading Anan Sustainability Experience"
          >
            {/* 🌌 Architectural Background Grid Lines & Bio Glows */}
            <div
              className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#27272a_1px,transparent_1px),linear-gradient(to_bottom,#27272a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-20"
              aria-hidden="true"
            />
            <div
              className="pointer-events-none absolute size-[500px] rounded-full bg-[#10b981]/10 blur-[150px]"
              aria-hidden="true"
            />

            {/* 🎯 Central Dial & Logo Container */}
            <div className="relative z-10 flex flex-col items-center">
              {/* Circular Telemetry Ring */}
              <motion.div
                initial={{ scale: 0.88, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="relative flex size-44 items-center justify-center rounded-full border border-[#27272a] bg-[#111113]/90 p-4 shadow-[0_0_60px_rgba(0,0,0,0.8)] backdrop-blur-2xl sm:size-52"
              >
                {/* SVG Progress Circle */}
                <svg
                  className="absolute inset-0 size-full -rotate-90"
                  viewBox="0 0 256 256"
                  fill="none"
                  aria-hidden="true"
                >
                  {/* Subtle Background Track */}
                  <circle
                    cx="128"
                    cy="128"
                    r={radius}
                    stroke="#27272a"
                    strokeWidth="1.5"
                  />
                  {/* Bio-Luminescent Dynamic Stroke */}
                  <circle
                    cx="128"
                    cy="128"
                    r={radius}
                    stroke="#4edea3"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeDasharray={circumference}
                    strokeDashoffset={strokeOffset}
                    className="transition-[stroke-dashoffset] duration-200 ease-out"
                    style={{
                      filter: "drop-shadow(0 0 10px rgba(78,222,163,0.85))",
                    }}
                  />
                </svg>

                {/* Central Brand Icon with Atmospheric Pulsing */}
                <div className="relative flex items-center justify-center">
                  <div className="absolute size-16 rounded-full bg-[#4edea3]/10 blur-md animate-pulse" />
                  <Image
                    src="/brand/anan-sustainability-icon.svg"
                    alt="Anan Sustainability Icon"
                    width={56}
                    height={72}
                    priority
                    className="relative z-10 h-14 w-auto sm:h-16"
                  />
                </div>
              </motion.div>

              {/* 🏷️ Brand Identification & Telemetry Metadata */}
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15, duration: 0.6 }}
                className="mt-8 text-center"
              >
                <h1 className="font-['Space_Grotesk'] text-base font-semibold tracking-[0.32em] text-[#fafafa] uppercase">
                  ANAN
                </h1>
                <p className="mt-1 font-['JetBrains_Mono'] text-[9px] font-medium tracking-[0.28em] text-[#4edea3] uppercase">
                  SUSTAINABILITY
                </p>
              </motion.div>

              {/* 📊 High-Precision Percentage Display */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="mt-6 flex items-center gap-2 rounded-full border border-[#27272a] bg-[#09090b]/80 px-4 py-1.5 backdrop-blur-md"
              >
                <span className="relative flex size-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#4edea3] opacity-75" />
                  <span className="relative inline-flex size-2 rounded-full bg-[#10b981]" />
                </span>
                <div className="flex items-baseline gap-1 font-['JetBrains_Mono'] text-xs font-semibold">
                  <span className="tabular-nums text-[#fafafa] text-sm">
                    {roundedProgress.toString().padStart(2, "0")}
                  </span>
                  <span className="text-[10px] text-[#86948a]">%</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Render Application Content */}
      <div className={!isLoaded ? "pointer-events-none" : ""}>{children}</div>
    </PageTransitionContext.Provider>
  );
}

export default PageTransition;
