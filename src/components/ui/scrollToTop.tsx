"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { ArrowUp } from "lucide-react";

export function ScrollToTop({ isRtl = true }: { isRtl?: boolean }) {
  const [isVisible, setIsVisible] = useState(false);
  const { scrollY, scrollYProgress } = useScroll();

  // تحسين حركة الدائرة لتكون سلسة جداً أثناء التمرير
  const scalePath = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    // إظهار الزر فقط عند التمرير لأسفل أكثر من 300 بكسل
    return scrollY.on("change", (latest) => {
      if (latest > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    });
  }, [scrollY]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className={`fixed bottom-8 z-50 ${isRtl ? "left-8" : "right-8"}`}
        >
          <button
            onClick={scrollToTop}
            aria-label="العودة إلى الأعلى"
            className="group relative cursor-pointer flex size-12 items-center justify-center rounded-full border border-emerald-500/20 bg-zinc-950/80 text-emerald-400 backdrop-blur-xl transition-all duration-300 hover:border-emerald-500/50 hover:bg-emerald-500/10 hover:shadow-[0_0_25px_rgba(16,185,129,0.3)] active:scale-90"
          >
            {/* ⭕ Circular Scroll Progress Bar */}
            <svg
              className="pointer-events-none absolute inset-0 size-full -rotate-90 p-0.5"
              viewBox="0 0 36 36"
            >
              <path
                className="text-zinc-800/60"
                strokeWidth="2.5"
                stroke="currentColor"
                fill="none"
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
              />
              <motion.path
                className="text-emerald-400"
                strokeWidth="2.5"
                strokeDasharray="100, 100"
                style={{
                  pathLength: scalePath,
                }}
                strokeLinecap="round"
                stroke="currentColor"
                fill="none"
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
              />
            </svg>

            {/* ⬆️ Arrow Icon with Spring Animation */}
            <ArrowUp className="size-5 transition-transform duration-300 group-hover:-translate-y-1" />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default ScrollToTop;
