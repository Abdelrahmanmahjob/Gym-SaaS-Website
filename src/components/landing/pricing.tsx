"use client";

import React, { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Check, Minus, Sparkles, Zap, ShieldCheck, Crown } from "lucide-react";
import { StudioButton } from "@/components/ui/studio-button";
import { pricingContent } from "@/components/content/pricing-content";

const planIcons = [Zap, Crown, ShieldCheck];

export function Pricing({ locale = "en" }: { locale?: "ar" | "en" }) {
  const text = pricingContent[locale];
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
            className="max-w-2xl mx-auto text-4xl font-extrabold tracking-tight text-white sm:text-5xl"
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
            const Icon = planIcons[index];
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
                className="group relative flex flex-col justify-between overflow-hidden rounded-lg border border-zinc-800/80 bg-zinc-950/80 p-6 backdrop-blur-xl transition-all duration-500 hover:border-emerald-500/30 hover:shadow-[0_0_30px_-10px_rgba(16,185,129,0.15)] sm:p-8"
              >
                {/* Spotlight Interactive Hover Effect */}
                <div
                  className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  style={{
                    background: `radial-gradient(600px circle at ${currentMouse.x}px ${currentMouse.y}px, rgba(16,185,129,0.08), transparent 40%)`,
                  }}
                />

                <div>
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-3">
                      <div className="flex size-10 items-center justify-center rounded-md border border-emerald-500/20 bg-emerald-500/10 text-emerald-400 transition-transform duration-300 group-hover:scale-105">
                        <Icon className="size-5" />
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-white">
                      {plan.name}
                    </h3>
                  </div>

                  <p className="mt-3 min-h-10 text-sm leading-5 text-zinc-400">
                    {plan.audience}
                  </p>

                  <div className="my-6 flex flex-wrap items-baseline gap-x-2 gap-y-1">
                    <span className="text-xs font-semibold uppercase tracking-widest text-emerald-400">
                      SAR
                    </span>
                    <span className="text-4xl font-black tracking-tight text-white sm:text-5xl">
                      {plan.price}
                    </span>
                    <span className="text-sm font-medium text-zinc-400">
                      / {text.period}
                    </span>
                  </div>

                  <div className="space-y-5 border-t border-zinc-800 pt-5">
                    {plan.groups.map((group) => (
                      <div key={group.name}>
                        <h4 className="mb-2 font-mono text-[10px] font-semibold uppercase tracking-wider text-emerald-300/80">
                          {group.name}
                        </h4>
                        <ul className="space-y-2.5 text-sm text-zinc-300">
                          {group.features.map((feature) => (
                            <li
                              key={feature}
                              className="flex items-start gap-2.5"
                            >
                              <Check
                                className="mt-0.5 size-4 shrink-0 text-emerald-400"
                                aria-hidden="true"
                              />
                              <span className="min-w-0">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-10 pt-4">
                  <StudioButton
                    variant="pricing"
                    size="lg"
                    className="group/btn w-full"
                    onClick={() => {
                      const element = document.getElementById("demo");
                      element?.scrollIntoView({ behavior: "smooth" });
                    }}
                  >
                    {/* Animated Text Roll Container */}
                    <div className="relative flex h-6 w-full items-center justify-center overflow-hidden">
                      <span className="absolute inset-0 flex items-center justify-center transition-transform duration-300 ease-out group-hover/btn:-translate-y-full">
                        {plan.cta}
                      </span>
                      <span className="absolute inset-0 flex translate-y-full items-center justify-center transition-transform duration-300 ease-out group-hover/btn:translate-y-0">
                        {plan.cta}
                      </span>
                    </div>
                  </StudioButton>
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-16 border-t border-white/10 pt-10 sm:mt-20 sm:pt-12">
          <h3 className="mb-5 text-xl font-semibold text-white sm:text-2xl">
            {text.compare}
          </h3>
          <div
            role="region"
            aria-label={text.compare}
            tabIndex={0}
            className="overflow-x-auto rounded-md border border-zinc-700/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-emerald-400"
          >
            <table className="w-full min-w-[620px] border-collapse text-start text-sm">
              <thead>
                <tr className="bg-zinc-800/80 text-white">
                  <th
                    scope="col"
                    className="sticky start-0 z-10 min-w-56 border-b border-e border-zinc-600 bg-zinc-800 px-3 py-2 text-start font-medium sm:px-4"
                  >
                    {text.featureHeading}
                  </th>
                  {text.plans.map((plan) => (
                    <th
                      key={plan.name}
                      scope="col"
                      className="min-w-28 border-b border-e border-zinc-600 px-3 py-2 text-start font-medium sm:px-4"
                    >
                      {plan.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {text.comparison.map((row) => (
                  <tr
                    key={row.feature}
                    className="odd:bg-zinc-900/80 even:bg-zinc-950/70"
                  >
                    <th
                      scope="row"
                      className="sticky start-0 z-10 border-b border-e border-zinc-700 bg-zinc-900 px-3 py-2 text-start font-normal text-zinc-200 sm:px-4"
                    >
                      {row.feature}
                    </th>
                    {row.values.map((value, index) => (
                      <td
                        key={`${row.feature}-${index}`}
                        className="border-b border-e border-zinc-700 px-3 py-2 text-zinc-300 sm:px-4"
                      >
                        {typeof value === "boolean" ? (
                          value ? (
                            <Check
                              className="size-4 text-emerald-300"
                              aria-label={locale === "ar" ? "متاح" : "Included"}
                            />
                          ) : (
                            <Minus
                              className="size-4 text-zinc-600"
                              aria-label={
                                locale === "ar" ? "غير متاح" : "Not included"
                              }
                            />
                          )
                        ) : (
                          value
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Pricing;
