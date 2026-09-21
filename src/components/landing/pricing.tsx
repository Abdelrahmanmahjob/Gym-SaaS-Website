"use client";

import React, { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Check, Sparkles, Zap, ShieldCheck, Crown } from "lucide-react";
import { RainbowButton } from "@/components/ui/rainbow-button";

const content = {
  ar: {
    eyebrow: "الخطط والأسعار / 05",
    title: "اختر الباقة المناسبة لناديك وابدأ النمو",
    description:
      "خطط واضحة، مرنة، وشاملة مصممة لتسريع نمو صالتك الرياضية وأتمتة عملياتك.",
    month: "شهريًا",
    popularBadge: "الأكثر طلباً 🔥",
    cta: "اشترك الآن",
    plans: [
      {
        name: "Basic",
        price: "199",
        classes: "8 حصص شهرياً",
        icon: Zap,
        features: ["خزانة للنادي", "حصص جماعية", "خيار التجميد", "خطة غذائية"],
        popular: false,
      },
      {
        name: "Advance",
        price: "399",
        classes: "10 حصص شهرياً",
        icon: Crown,
        features: [
          "خزانة للنادي",
          "حصص جماعية",
          "خيار التجميد",
          "خطة غذائية",
          "دش ومرفق استحمام",
        ],
        popular: true,
      },
      {
        name: "Pro",
        price: "499",
        classes: "12 حصة شهرياً",
        icon: ShieldCheck,
        features: [
          "خزانة للنادي",
          "حصص جماعية",
          "خيار التجميد",
          "خطة غذائية",
          "حصص خاصة مع مدرب",
          "دش وسبا فاخر",
          "جاكوزي استرخاء",
        ],
        popular: false,
      },
    ],
  },
  en: {
    eyebrow: "PLANS & PRICING / 05",
    title: "Choose the perfect package and start growing",
    description:
      "Transparent and scalable pricing tailored for modern gym operations.",
    month: "month",
    popularBadge: "MOST POPULAR 🔥",
    cta: "Get Started",
    plans: [
      {
        name: "Basic",
        price: "199",
        classes: "8 classes / mo",
        icon: Zap,
        features: ["Gym Locker", "Group Classes", "Freeze Option", "Diet Plan"],
        popular: false,
      },
      {
        name: "Advance",
        price: "399",
        classes: "10 classes / mo",
        icon: Crown,
        features: [
          "Gym Locker",
          "Group Classes",
          "Freeze Option",
          "Diet Plan",
          "Shower & Locker Rooms",
        ],
        popular: true,
      },
      {
        name: "Pro",
        price: "499",
        classes: "12 classes / mo",
        icon: ShieldCheck,
        features: [
          "Gym Locker",
          "Group Classes",
          "Freeze Option",
          "Diet Plan",
          "Private PT Classes",
          "Luxury Shower & SPA",
          "Jacuzzi Access",
        ],
        popular: false,
      },
    ],
  },
} as const;

export function Pricing({ locale = "en" }: { locale?: "ar" | "en" }) {
  const text = content[locale];
  const shouldReduceMotion = useReducedMotion();
  const [mousePos, setMousePos] = useState<{
    [key: number]: { x: number; y: number };
  }>({});

  const handleMouseMove = (
    index: number,
    e: React.MouseEvent<HTMLDivElement>,
  ) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos((prev) => ({
      ...prev,
      [index]: {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      },
    }));
  };

  return (
    <section
      id="pricing"
      dir={locale === "ar" ? "rtl" : "ltr"}
      className="relative overflow-hidden bg-[#09090b] py-24 sm:py-32"
      aria-labelledby="pricing-title"
    >
      {/* 🔮 Futuristic Mesh Background Glows */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#1f293712_1px,transparent_1px),linear-gradient(to_bottom,#1f293712_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      <div className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-full -translate-x-1/2 bg-[radial-gradient(ellipse_at_top,rgba(16,185,129,0.18),transparent_70%)] blur-2xl" />
      <div className="pointer-events-none absolute -left-40 top-1/2 size-96 rounded-full bg-emerald-500/10 blur-[140px]" />
      <div className="pointer-events-none absolute -right-40 bottom-10 size-96 rounded-full bg-cyan-500/10 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-6 sm:px-6 lg:px-8">
        {/* 🎯 Section Header */}
        <motion.header
          initial={shouldReduceMotion ? false : { opacity: 0, y: 30 }}
          whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto mb-16 max-w-3xl text-center sm:mb-20"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3.5 py-1 backdrop-blur-md">
            <Sparkles className="size-3.5 text-emerald-400 animate-pulse" />
            <span className="font-mono text-xs font-semibold uppercase tracking-widest text-emerald-300">
              {text.eyebrow}
            </span>
          </div>

          <h2
            id="pricing-title"
            className="text-4xl font-extrabold tracking-tight text-white sm:text-6xl"
          >
            <span className="bg-gradient-to-b from-white via-white/90 to-white/50 bg-clip-text text-transparent">
              {text.title}
            </span>
          </h2>

          <p className="mt-5 text-lg leading-relaxed text-zinc-400 sm:text-xl">
            {text.description}
          </p>
        </motion.header>

        {/* 💳 Pricing Cards Grid */}
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-3 lg:items-stretch">
          {text.plans.map((plan, index) => {
            const Icon = plan.icon;
            const isPopular = plan.popular;
            const currentMouse = mousePos[index] || { x: 0, y: 0 };

            return (
              <motion.div
                key={plan.name}
                initial={shouldReduceMotion ? false : { opacity: 0, y: 40 }}
                whileInView={
                  shouldReduceMotion ? undefined : { opacity: 1, y: 0 }
                }
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.7,
                  delay: shouldReduceMotion ? 0 : index * 0.15,
                  ease: [0.21, 0.47, 0.32, 0.98],
                }}
                onMouseMove={(e) => handleMouseMove(index, e)}
                className={`group relative flex flex-col justify-between overflow-hidden rounded-3xl border bg-zinc-950/80 p-8 backdrop-blur-xl transition-all duration-500 ${
                  isPopular
                    ? "border-emerald-500/50 shadow-[0_0_50px_-12px_rgba(16,185,129,0.25)] lg:-translate-y-2"
                    : "border-zinc-800/80 hover:border-emerald-500/30 hover:shadow-[0_0_30px_-10px_rgba(16,185,129,0.15)]"
                }`}
              >
                {/* Spotlight Interactive Hover Effect */}
                <div
                  className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  style={{
                    background: `radial-gradient(600px circle at ${currentMouse.x}px ${currentMouse.y}px, rgba(16,185,129,0.08), transparent 40%)`,
                  }}
                />

                {/* Popular Glow Effect Top Bar */}
                {isPopular && (
                  <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-emerald-400 to-transparent" />
                )}

                <div>
                  {/* Card Header & Badge */}
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className="flex size-10 items-center justify-center rounded-2xl border border-emerald-500/20 bg-emerald-500/10 text-emerald-400 transition-transform duration-300 group-hover:scale-110">
                        <Icon className="size-5" />
                      </div>
                      <h3 className="text-xl font-bold text-white">
                        {plan.name}
                      </h3>
                    </div>

                    {isPopular && (
                      <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-bold text-emerald-300 backdrop-blur-md shadow-[0_0_15px_rgba(16,185,129,0.2)]">
                        {text.popularBadge}
                      </span>
                    )}
                  </div>

                  {/* Pricing Display */}
                  <div className="my-8 flex items-baseline gap-2">
                    <span className="text-xs font-semibold text-emerald-400 uppercase tracking-widest">
                      SAR
                    </span>
                    <span className="text-5xl font-black tracking-tight text-white sm:text-6xl">
                      {plan.price}
                    </span>
                    <span className="text-sm font-medium text-zinc-400">
                      / {text.month}
                    </span>
                  </div>

                  {/* Class Badge */}
                  <div className="mb-8 rounded-xl border border-zinc-800/80 bg-zinc-900/60 py-2.5 px-4 text-center font-mono text-xs font-medium text-emerald-300/90 backdrop-blur-sm">
                    {plan.classes}
                  </div>

                  {/* Feature List */}
                  <ul className="space-y-4 text-sm text-zinc-300">
                    {plan.features.map((feature, featureIdx) => (
                      <motion.li
                        key={feature}
                        initial={
                          shouldReduceMotion
                            ? false
                            : { opacity: 0, x: locale === "ar" ? 12 : -12 }
                        }
                        whileInView={
                          shouldReduceMotion ? undefined : { opacity: 1, x: 0 }
                        }
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.4,
                          delay: shouldReduceMotion
                            ? 0
                            : index * 0.1 + featureIdx * 0.05,
                        }}
                        className="flex items-center gap-3 text-zinc-300"
                      >
                        <div className="flex size-5 shrink-0 items-center justify-center rounded-full border border-emerald-500/30 bg-emerald-500/20 text-emerald-400">
                          <Check className="size-3 stroke-[3]" />
                        </div>
                        <span className="font-medium">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* CTA Action with RainbowButton */}
                <div className="mt-10 pt-4">
                  <RainbowButton
                    size="lg"
                    className="w-full text-base font-bold shadow-lg transition-transform duration-300 hover:scale-[1.02] active:scale-[0.98]"
                    onClick={() => {
                      const element = document.getElementById("demo");
                      element?.scrollIntoView({ behavior: "smooth" });
                    }}
                  >
                    <Sparkles className="size-4 text-emerald-300" />
                    <span>{text.cta}</span>
                  </RainbowButton>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Pricing;
