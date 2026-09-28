"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqsContent } from "@/components/content/faqs-content";

function BlurredStagger({ text }: { text: string }) {
  return (
    <motion.p
      initial="hidden"
      animate="show"
      variants={{
        hidden: { opacity: 0, filter: "blur(8px)" },
        show: { opacity: 1, filter: "blur(0px)" },
      }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className="text-base leading-8 text-white/55"
    >
      {text}
    </motion.p>
  );
}

export default function FAQs({ locale = "en" }: { locale?: "ar" | "en" }) {
  const text = faqsContent[locale];

  return (
    <section
      id="faq"
      dir={locale === "ar" ? "rtl" : "ltr"}
      className="relative overflow-hidden border-t border-white/[0.08] py-20 sm:py-24 lg:py-28"
      aria-labelledby="faq-title"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[380px] bg-[radial-gradient(ellipse_at_top,rgba(16,185,129,0.09),transparent_68%)]" />

      <div className="relative mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 md:grid-cols-5 md:gap-14 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.65 }}
          className="md:col-span-2"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3.5 py-1 font-mono text-xs font-semibold uppercase tracking-widest text-emerald-300 backdrop-blur-md">
            {text.eyebrow}
          </div>
          <h2
            id="faq-title"
            className="text-3xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-5xl"
          >
            {text.title}
          </h2>
          <p className="mt-5 max-w-md text-lg leading-relaxed text-zinc-400 sm:text-xl">
            {text.description}
          </p>
          <p className="mt-8 hidden max-w-sm text-sm leading-7 text-white/45 md:block">
            {text.support}{" "}
            <Link
              href="#demo"
              className="font-medium text-emerald-300 transition-colors hover:text-emerald-200 hover:underline"
            >
              {text.supportLink}
            </Link>
            {text.supportEnd}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: locale === "ar" ? -18 : 18 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="md:col-span-3"
        >
          <Accordion type="single" collapsible>
            {text.questions.map((item, index) => (
              <AccordionItem
                key={item.question}
                value={`item-${index + 1}`}
                className="border-white/[0.12]"
              >
                <AccordionTrigger className="text-base text-white/85 hover:text-white sm:text-lg">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent>
                  <BlurredStagger text={item.answer} />
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        <p className="text-sm leading-7 text-white/45 md:hidden">
          {text.support}{" "}
          <Link
            href="#demo"
            className="font-medium text-emerald-300 hover:underline"
          >
            {text.supportLink}
          </Link>
          {text.supportEnd}
        </p>
      </div>
    </section>
  );
}
