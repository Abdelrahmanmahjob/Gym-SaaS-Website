"use client";

import { FormEvent, useEffect, useState } from "react";
import { ArrowUpRight, Check, X } from "lucide-react";

type DemoPopupProps = {
  locale?: "ar" | "en";
  salesEmail?: string;
  triggerLabel?: string;
  className?: string;
};

const copy = {
  en: {
    trigger: "Book a demo",
    eyebrow: "LET'S TALK",
    title: "See how ANAN can simplify your operations.",
    description:
      "Tell us a little about your business and our team will get back to you to arrange a suitable demo.",
    name: "Full name",
    email: "Work email",
    company: "Company name",
    message: "What would you like to improve?",
    namePlaceholder: "Your full name",
    emailPlaceholder: "you@company.com",
    companyPlaceholder: "Your company",
    messagePlaceholder: "Optional",
    submit: "Send demo request",
    close: "Close dialog",
    required: "Please complete the required fields.",
    successTitle: "Your request is ready.",
    successText:
      "Your email app should open now. Send the prepared message to complete the request.",
    back: "Send another request",
    privacy: "We only use these details to respond to your demo request.",
  },
  ar: {
    trigger: "احجز عرضًا توضيحيًا",
    eyebrow: "لنتحدث",
    title: "اكتشف كيف تساعدك أنان على تبسيط عملياتك.",
    description: "أخبرنا قليلًا عن نشاطك وسيتواصل معك فريقنا لترتيب عرض مناسب.",
    name: "الاسم الكامل",
    email: "البريد الإلكتروني للعمل",
    company: "اسم الشركة",
    message: "ما الذي ترغب في تحسينه؟",
    namePlaceholder: "اكتب اسمك الكامل",
    emailPlaceholder: "you@company.com",
    companyPlaceholder: "اسم الشركة",
    messagePlaceholder: "اختياري",
    submit: "إرسال طلب العرض",
    close: "إغلاق النافذة",
    required: "يرجى إكمال الحقول المطلوبة.",
    successTitle: "طلبك جاهز.",
    successText:
      "من المفترض أن يفتح تطبيق البريد الإلكتروني الآن. اضغط إرسال لإكمال الطلب.",
    back: "إرسال طلب آخر",
    privacy: "نستخدم هذه البيانات فقط للرد على طلب العرض.",
  },
} as const;

export function DemoPopup({
  locale = "en",
  salesEmail = "abdelrahmanmahjob@gmail.com",
  triggerLabel,
  className = "",
}: DemoPopupProps) {
  const text = copy[locale];
  const isRtl = locale === "ar";
  const [isOpen, setIsOpen] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen]);

  const openPopup = () => {
    setError("");
    setIsSent(false);
    setIsOpen(true);
  };

  const closePopup = () => setIsOpen(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") || "").trim();
    const email = String(form.get("email") || "").trim();
    const company = String(form.get("company") || "").trim();
    const message = String(form.get("message") || "").trim();

    if (!name || !email || !company) {
      setError(text.required);
      return;
    }

    const subject = encodeURIComponent(`Demo request from ${company}`);
    const body = encodeURIComponent(
      `Name: ${name}\nWork email: ${email}\nCompany: ${company}\n\nWhat they want to improve:\n${message || "Not provided"}`,
    );

    window.location.href = `mailto:${salesEmail}?subject=${subject}&body=${body}`;
    setIsSent(true);
  };

  return (
    <>
      <button
        type="button"
        onClick={openPopup}
        className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[#4edea3] px-5 py-3 font-[var(--font-mono)] text-xs font-semibold tracking-[0.06em] text-[#07110d] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#72efbd] focus:outline-none focus:ring-2 focus:ring-[#4edea3]/60 focus:ring-offset-2 focus:ring-offset-[#09090b] ${className}`}
      >
        {triggerLabel || text.trigger}
        <ArrowUpRight size={17} aria-hidden="true" />
      </button>

      {isOpen && (
        <div
          dir={isRtl ? "rtl" : "ltr"}
          className="fixed inset-0 z-[100] flex items-end justify-center overflow-y-auto bg-black/75 p-3 backdrop-blur-sm sm:items-center sm:p-6"
          role="presentation"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) closePopup();
          }}
        >
          <section
            role="dialog"
            aria-modal="true"
            aria-labelledby="demo-popup-title"
            className="relative my-auto max-h-[calc(100vh-1.5rem)] w-full max-w-xl overflow-y-auto rounded-3xl border border-white/10 bg-[#111113] p-5 text-white shadow-[0_24px_100px_rgba(0,0,0,0.65)] sm:max-h-[calc(100vh-3rem)] sm:p-8"
          >
            <button
              type="button"
              onClick={closePopup}
              aria-label={text.close}
              className="absolute right-4 top-4 inline-flex size-9 items-center justify-center rounded-full border border-white/10 text-white/55 transition-colors hover:border-[#4edea3]/40 hover:text-[#4edea3] rtl:left-4 rtl:right-auto"
            >
              <X size={18} aria-hidden="true" />
            </button>

            {!isSent ? (
              <>
                <div className="mb-7 max-w-[34rem] pr-8 rtl:pl-8 rtl:pr-0">
                  <p className="mb-3 font-[var(--font-mono)] text-[10px] uppercase tracking-[0.18em] text-[#4edea3]">
                    {text.eyebrow}
                  </p>
                  <h2
                    id="demo-popup-title"
                    className="text-2xl font-semibold leading-tight tracking-[-0.03em] sm:text-3xl"
                  >
                    {text.title}
                  </h2>
                  <p className="mt-3 text-sm leading-6 text-white/55">
                    {text.description}
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <label className="space-y-2 text-sm text-white/70">
                      <span>{text.name} *</span>
                      <input
                        name="name"
                        required
                        placeholder={text.namePlaceholder}
                        className="h-12 w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 text-sm text-white outline-none transition-colors placeholder:text-white/25 focus:border-[#4edea3]/70"
                      />
                    </label>
                    <label className="space-y-2 text-sm text-white/70">
                      <span>{text.email} *</span>
                      <input
                        name="email"
                        type="email"
                        required
                        placeholder={text.emailPlaceholder}
                        className="h-12 w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 text-sm text-white outline-none transition-colors placeholder:text-white/25 focus:border-[#4edea3]/70"
                      />
                    </label>
                  </div>

                  <label className="block space-y-2 text-sm text-white/70">
                    <span>{text.company} *</span>
                    <input
                      name="company"
                      required
                      placeholder={text.companyPlaceholder}
                      className="h-12 w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 text-sm text-white outline-none transition-colors placeholder:text-white/25 focus:border-[#4edea3]/70"
                    />
                  </label>

                  <label className="block space-y-2 text-sm text-white/70">
                    <span>{text.message}</span>
                    <textarea
                      name="message"
                      rows={4}
                      placeholder={text.messagePlaceholder}
                      className="w-full resize-y rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white outline-none transition-colors placeholder:text-white/25 focus:border-[#4edea3]/70"
                    />
                  </label>

                  {error && (
                    <p role="alert" className="text-sm text-red-300">
                      {error}
                    </p>
                  )}

                  <button
                    type="submit"
                    className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-[#4edea3] px-5 py-3 font-[var(--font-mono)] text-xs font-semibold tracking-[0.06em] text-[#07110d] transition-colors hover:bg-[#72efbd] focus:outline-none focus:ring-2 focus:ring-[#4edea3]/60"
                  >
                    {text.submit}
                    <ArrowUpRight size={17} aria-hidden="true" />
                  </button>

                  <p className="text-center text-[11px] leading-5 text-white/35">
                    {text.privacy}
                  </p>
                </form>
              </>
            ) : (
              <div className="flex min-h-[22rem] flex-col items-center justify-center text-center">
                <div className="mb-5 flex size-14 items-center justify-center rounded-full bg-[#4edea3]/10 text-[#4edea3]">
                  <Check size={28} aria-hidden="true" />
                </div>
                <h2 className="text-2xl font-semibold">{text.successTitle}</h2>
                <p className="mt-3 max-w-sm text-sm leading-6 text-white/55">
                  {text.successText}
                </p>
                <button
                  type="button"
                  onClick={() => setIsSent(false)}
                  className="mt-7 text-sm text-[#4edea3] underline underline-offset-4 hover:text-[#72efbd]"
                >
                  {text.back}
                </button>
              </div>
            )}
          </section>
        </div>
      )}
    </>
  );
}

export default DemoPopup;
