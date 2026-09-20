"use client";

import React, { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Sparkles,
  MessageSquare,
  Building2,
  User,
  Check,
  Copy,
} from "lucide-react";
import { RainbowButton } from "@/components/ui/rainbow-button";

const content = {
  ar: {
    eyebrow: "تواصل معنا / 07",
    title: "جاهز لتطوير ناديك الرياضي؟",
    description:
      "تواصل مع فريق خبراء منصة أنان اليوم للحصول على استشارة مجانية وعرض توضيحي مباشر.",
    formTitle: "أرسل لنا رسالة",
    formSubtitle: "سيتواصل معك فريق المبيعات خلال أقل من ساعتين.",
    labels: {
      name: "الاسم الكامل",
      email: "البريد الإلكتروني",
      phone: "رقم الجوال",
      gymName: "اسم النادي / الصالة الرياضية",
      message: "تفاصيل استفسارك",
    },
    placeholders: {
      name: "مثال: عبد الرحمن محمد",
      email: "name@gym.com",
      phone: "050XXXXXXX",
      gymName: "مثال: أنان للاستدامة جيم",
      message: "أخبرنا بعدد الفروع أو الخدمات التي ترغب بأتمتتها...",
    },
    submitBtn: "إرسال الطلب الآن",
    submitting: "جاري الإرسال...",
    successMessage: "تم إرسال طلبك بنجاح! سيتواصل معك فريقنا قريباً.",
    contactInfo: [
      {
        title: "المبيعات والدعم الفني",
        value: "sales@anan.com",
        icon: Mail,
      },
      {
        title: "واتساب المبيعات المباشر",
        value: "+966 50 000 0000",
        icon: Phone,
      },
      {
        title: "المقر الرئيسي",
        value: "الرياض، المملكة العربية السعودية",
        icon: MapPin,
      },
    ],
  },
  en: {
    eyebrow: "GET IN TOUCH / 07",
    title: "Ready to scale your gym operations?",
    description:
      "Connect with Anan experts today for a personalized consultation and live product walkthrough.",
    formTitle: "Send us a message",
    formSubtitle: "Our team usually responds in less than 2 hours.",
    labels: {
      name: "Full Name",
      email: "Work Email",
      phone: "Phone Number",
      gymName: "Gym / Club Name",
      message: "Your Message",
    },
    placeholders: {
      name: "e.g. John Doe",
      email: "name@gym.com",
      phone: "+966 50 XXX XXXX",
      gymName: "e.g. Anan Sustainability Gym",
      message: "Tell us about your branches or specific feature needs...",
    },
    submitBtn: "Submit Request",
    submitting: "Submitting...",
    successMessage: "Thank you! Our team will reach out shortly.",
    contactInfo: [
      {
        title: "Sales & Support",
        value: "sales@anan.com",
        icon: Mail,
      },
      {
        title: "Direct WhatsApp Sales",
        value: "+966 50 000 0000",
        icon: Phone,
      },
      {
        title: "Headquarters",
        value: "Riyadh, Kingdom of Saudi Arabia",
        icon: MapPin,
      },
    ],
  },
} as const;

export function Contact({ locale = "ar" }: { locale?: "ar" | "en" }) {
  const text = content[locale];
  const isRtl = locale === "ar";
  const shouldReduceMotion = useReducedMotion();
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    setMousePos({
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    });
  };

  const handleCopy = (value: string, index: number) => {
    void navigator.clipboard?.writeText(value);
    setCopiedIndex(index);
    window.setTimeout(() => setCopiedIndex(null), 2000);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    window.setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1200);
  };

  return (
    <section
      id="demo"
      dir={isRtl ? "rtl" : "ltr"}
      className="relative overflow-hidden bg-[#09090b] py-24 text-white sm:py-32"
    >
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#1f293712_1px,transparent_1px),linear-gradient(to_bottom,#1f293712_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      <div className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-full -translate-x-1/2 bg-[radial-gradient(ellipse_at_top,rgba(16,185,129,0.15),transparent_70%)] blur-2xl" />
      <div className="pointer-events-none absolute -right-32 top-1/3 size-96 rounded-full bg-emerald-500/10 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.header
          initial={shouldReduceMotion ? false : { opacity: 0, y: 30 }}
          whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3.5 py-1 backdrop-blur-md">
            <Sparkles className="size-3.5 animate-pulse text-emerald-400" />
            <span className="font-mono text-xs font-semibold uppercase tracking-widest text-emerald-300">
              {text.eyebrow}
            </span>
          </div>
          <h2 className="text-4xl font-extrabold tracking-tight sm:text-6xl">
            <span className="bg-gradient-to-b from-white via-white/90 to-white/50 bg-clip-text text-transparent">
              {text.title}
            </span>
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-zinc-400">
            {text.description}
          </p>
        </motion.header>

        <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
          <div className="space-y-6 lg:col-span-5">
            {text.contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <motion.div
                  key={info.title}
                  initial={
                    shouldReduceMotion
                      ? false
                      : { opacity: 0, x: isRtl ? 20 : -20 }
                  }
                  whileInView={
                    shouldReduceMotion ? undefined : { opacity: 1, x: 0 }
                  }
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative flex items-center justify-between overflow-hidden rounded-2xl border border-zinc-800/80 bg-zinc-950/80 p-6 backdrop-blur-xl transition-all duration-300 hover:border-emerald-500/40 hover:shadow-[0_0_25px_rgba(16,185,129,0.15)]"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex size-12 items-center justify-center rounded-xl border border-emerald-500/20 bg-emerald-500/10 text-emerald-400 transition-transform duration-300 group-hover:scale-110">
                      <Icon className="size-6" />
                    </div>
                    <div>
                      <p className="font-mono text-xs font-semibold uppercase tracking-wider text-zinc-400">
                        {info.title}
                      </p>
                      <p
                        className="mt-1 text-start font-semibold text-white"
                        dir="ltr"
                      >
                        {info.value}
                      </p>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleCopy(info.value, index)}
                    className="flex size-9 items-center justify-center rounded-lg border border-zinc-800 bg-zinc-900/60 text-zinc-400 transition-colors hover:border-emerald-500/40 hover:text-emerald-300"
                    title="Copy"
                  >
                    {copiedIndex === index ? (
                      <Check className="size-4 text-emerald-400" />
                    ) : (
                      <Copy className="size-4" />
                    )}
                  </button>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 30 }}
            whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            onMouseMove={handleMouseMove}
            className="relative overflow-hidden rounded-3xl border border-zinc-800/80 bg-zinc-950/90 p-8 backdrop-blur-xl sm:p-10 lg:col-span-7"
          >
            <div
              className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-300 hover:opacity-100"
              style={{
                background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(16,185,129,0.08), transparent 40%)`,
              }}
            />
            <div className="relative z-10 mb-8">
              <h3 className="text-2xl font-bold text-white">
                {text.formTitle}
              </h3>
              <p className="mt-2 text-sm text-zinc-400">{text.formSubtitle}</p>
            </div>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="relative z-10 flex flex-col items-center justify-center rounded-2xl border border-emerald-500/30 bg-emerald-500/10 px-6 py-12 text-center"
              >
                <div className="flex size-14 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400">
                  <Check className="size-8 stroke-[3]" />
                </div>
                <h4 className="mt-4 text-xl font-bold text-white">
                  {text.successMessage}
                </h4>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="relative z-10 space-y-6">
                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label className="mb-2 block font-mono text-xs font-semibold uppercase tracking-wider text-zinc-300">
                      {text.labels.name}
                    </label>
                    <div className="relative">
                      <User className="pointer-events-none absolute left-3.5 top-3.5 size-4 text-zinc-500 rtl:right-3.5 rtl:left-auto" />
                      <input
                        type="text"
                        required
                        placeholder={text.placeholders.name}
                        className="w-full rounded-xl border border-zinc-800 bg-zinc-900/60 px-10 py-3 text-sm text-white outline-none transition-all duration-300 placeholder:text-zinc-500 focus:border-emerald-500/60 focus:bg-zinc-900 focus:ring-1 focus:ring-emerald-500/60"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="mb-2 block font-mono text-xs font-semibold uppercase tracking-wider text-zinc-300">
                      {text.labels.email}
                    </label>
                    <div className="relative">
                      <Mail className="pointer-events-none absolute left-3.5 top-3.5 size-4 text-zinc-500 rtl:right-3.5 rtl:left-auto" />
                      <input
                        type="email"
                        required
                        placeholder={text.placeholders.email}
                        className="w-full rounded-xl border border-zinc-800 bg-zinc-900/60 px-10 py-3 text-sm text-white outline-none transition-all duration-300 placeholder:text-zinc-500 focus:border-emerald-500/60 focus:bg-zinc-900 focus:ring-1 focus:ring-emerald-500/60"
                      />
                    </div>
                  </div>
                </div>
                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label className="mb-2 block font-mono text-xs font-semibold uppercase tracking-wider text-zinc-300">
                      {text.labels.phone}
                    </label>
                    <div className="relative">
                      <Phone className="pointer-events-none absolute left-3.5 top-3.5 size-4 text-zinc-500 rtl:right-3.5 rtl:left-auto" />
                      <input
                        type="tel"
                        required
                        placeholder={text.placeholders.phone}
                        className="w-full rounded-xl border border-zinc-800 bg-zinc-900/60 px-10 py-3 text-sm text-white outline-none transition-all duration-300 placeholder:text-zinc-500 focus:border-emerald-500/60 focus:bg-zinc-900 focus:ring-1 focus:ring-emerald-500/60"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="mb-2 block font-mono text-xs font-semibold uppercase tracking-wider text-zinc-300">
                      {text.labels.gymName}
                    </label>
                    <div className="relative">
                      <Building2 className="pointer-events-none absolute left-3.5 top-3.5 size-4 text-zinc-500 rtl:right-3.5 rtl:left-auto" />
                      <input
                        type="text"
                        placeholder={text.placeholders.gymName}
                        className="w-full rounded-xl border border-zinc-800 bg-zinc-900/60 px-10 py-3 text-sm text-white outline-none transition-all duration-300 placeholder:text-zinc-500 focus:border-emerald-500/60 focus:bg-zinc-900 focus:ring-1 focus:ring-emerald-500/60"
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <label className="mb-2 block font-mono text-xs font-semibold uppercase tracking-wider text-zinc-300">
                    {text.labels.message}
                  </label>
                  <div className="relative">
                    <MessageSquare className="pointer-events-none absolute left-3.5 top-3.5 size-4 text-zinc-500 rtl:right-3.5 rtl:left-auto" />
                    <textarea
                      rows={4}
                      placeholder={text.placeholders.message}
                      className="w-full rounded-xl border border-zinc-800 bg-zinc-900/60 px-10 py-3 text-sm text-white outline-none transition-all duration-300 placeholder:text-zinc-500 focus:border-emerald-500/60 focus:bg-zinc-900 focus:ring-1 focus:ring-emerald-500/60"
                    />
                  </div>
                </div>
                <RainbowButton
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="h-12 w-full text-base font-bold shadow-lg transition-transform duration-300 hover:scale-[1.01]"
                >
                  <Send className="size-4 text-emerald-300" />
                  <span>{isSubmitting ? text.submitting : text.submitBtn}</span>
                </RainbowButton>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
