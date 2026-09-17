"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const content = {
  ar: {
    eyebrow: "الأسئلة الشائعة / 06",
    title: "كل ما تحتاج معرفته قبل أن تبدأ.",
    description:
      "إجابات واضحة عن منصة أنان، طريقة العمل، وما يحتاجه فريقك لتشغيل النادي بكفاءة.",
    support: "لم تجد إجابة سؤالك؟ تواصل مع",
    supportLink: "فريق الدعم",
    questions: [
      {
        question: "ما هي منصة أنان؟",
        answer:
          "أنان منصة تشغيل متكاملة للأندية الرياضية تجمع العضويات والمدفوعات والحصص والحضور والتقارير في مساحة عمل واحدة واضحة.",
      },
      {
        question: "هل تناسب المنصة الأندية بمختلف أحجامها؟",
        answer:
          "نعم. صُممت أنان لتخدم الأندية الناشئة والفروع المتعددة، مع أدوات تساعد فريقك على إدارة العمليات اليومية والتوسع بثقة.",
      },
      {
        question: "هل يمكن إدارة الاشتراكات والمدفوعات من مكان واحد؟",
        answer:
          "يمكنك متابعة العضويات والتجديدات والتجميد والمدفوعات والفواتير من سجل موحد، مع رؤية أوضح لحالة النادي المالية.",
      },
      {
        question: "هل توفر أنان تقارير وتحليلات للنادي؟",
        answer:
          "توفر المنصة تقارير ومؤشرات عن العضويات والحضور والمبيعات والأداء، لتساعد الإدارة على اتخاذ قرارات أسرع مبنية على البيانات.",
      },
      {
        question: "كيف أبدأ استخدام أنان؟",
        answer:
          "ابدأ بالتواصل مع فريقنا لتحديد احتياجات ناديك، وسنساعدك على اختيار الإعداد المناسب وتهيئة فريقك للانطلاق.",
      },
    ],
  },
  en: {
    eyebrow: "FREQUENTLY ASKED / 06",
    title: "Everything you need to know before you start.",
    description:
      "Clear answers about Anan, how it works, and what your team needs to run the gym with confidence.",
    support: "Can’t find what you’re looking for? Reach out to our",
    supportLink: "support team",
    questions: [
      {
        question: "What is Anan?",
        answer:
          "Anan is an operating platform for gyms that brings memberships, payments, classes, attendance, and reporting into one clear workspace.",
      },
      {
        question: "Does Anan work for gyms of different sizes?",
        answer:
          "Yes. Anan is built for growing gyms and multi-location operations, giving your team the tools to manage daily work and scale with confidence.",
      },
      {
        question: "Can I manage memberships and payments in one place?",
        answer:
          "You can track memberships, renewals, freezes, payments, and invoices from one connected record with a clearer view of your gym’s finances.",
      },
      {
        question: "Does Anan include reporting and analytics?",
        answer:
          "The platform provides useful metrics and reports for memberships, attendance, sales, and performance so managers can make faster, informed decisions.",
      },
      {
        question: "How do I get started with Anan?",
        answer:
          "Reach out to our team to discuss your gym’s needs. We will help you choose the right setup and get your team ready to launch.",
      },
    ],
  },
} as const;

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
  const text = content[locale];

  return (
    <section
      id="faq"
      dir={locale === "ar" ? "rtl" : "ltr"}
      className="relative overflow-hidden border-t border-white/[0.08] py-20 sm:py-24 lg:py-28"
      aria-labelledby="faq-title"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[380px] bg-[radial-gradient(ellipse_at_top,rgba(16,185,129,0.09),transparent_68%)]" />

      <div className="relative mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 md:grid-cols-5 md:gap-14 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.65 }}
          className="md:col-span-2"
        >
          <p className="font-[var(--font-mono)] text-[10px] tracking-[0.16em] text-emerald-300/80">
            {text.eyebrow}
          </p>
          <h2
            id="faq-title"
            className="mt-4 font-[var(--font-display)] text-3xl font-medium leading-tight tracking-[-0.03em] text-white sm:text-5xl"
          >
            {text.title}
          </h2>
          <p className="mt-5 max-w-md text-base leading-7 text-white/55 sm:text-lg">
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
            .
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
          .
        </p>
      </div>
    </section>
  );
}
