"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export type TestimonialItem = {
  name: string;
  role: string;
  company: string;
  avatar: string;
  rating: number;
  content: string;
};

const content = {
  ar: {
    eyebrow: "الشهادات",
    title: "ماذا يقول أصحاب الأندية عن أنان؟",
    description:
      "من التحول الرقمي إلى تحسين تجربة العملاء، هذه هي النتائج التي يحققها فريقنا يوميًا.",
    items: [
      {
        name: "سارة أحمد",
        role: "مديرة النادي",
        company: "مركز إنجاز",
        avatar:
          "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80",
        rating: 5,
        content:
          "منصة أنان ساعدت فريقنا على تنظيم العضويات والمدفوعات والحجوزات في وقت قياسي دون أي تعقيد.",
      },
      {
        name: "أحمد السالم",
        role: "مدير التشغيل",
        company: "روتانا جيم",
        avatar:
          "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
        rating: 5,
        content:
          "التحليلات اللحظية والتقارير الواضحة جعلت اتخاذ القرار أسهل بكثير وأعطت الفريق رؤية كاملة للنشاط.",
      },
      {
        name: "ليلى النجار",
        role: "مديرة المبيعات",
        company: "فيرا فايبر",
        avatar:
          "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=200&q=80",
        rating: 4,
        content:
          "واجهتنا أصبحت أكثر تنظيمًا وسرعة، ومن خلال المنصة يمكن متابعة الأداء واحتفاظنا بالعملاء بسهولة.",
      },
      {
        name: "طارق رزق",
        role: "المدير التنفيذي",
        company: "نيو فورس",
        avatar:
          "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&q=80",
        rating: 5,
        content:
          "المنصة زادت من كفاءة الفريق وأعطتنا نظامًا موحدًا لكل العمليات، من المبيعات إلى الحضور إلى التقييم.",
      },
    ],
  },
  en: {
    eyebrow: "Testimonials",
    title: "What gym owners say about Anan",
    description:
      "From digital transformation to better customer experience, this is what teams see when they switch to our platform.",
    items: [
      {
        name: "Sarah Ahmed",
        role: "Club Manager",
        company: "Injaz Center",
        avatar:
          "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80",
        rating: 5,
        content:
          "Anan helped our team organize memberships, payments, and bookings in record time without adding operational complexity.",
      },
      {
        name: "Ahmed Al-Salem",
        role: "Operations Manager",
        company: "Rotana Gym",
        avatar:
          "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
        rating: 5,
        content:
          "The live analytics and clear reports made decisions faster and gave us a complete view of the business.",
      },
      {
        name: "Layla Al-Najjar",
        role: "Sales Manager",
        company: "Vera Fiber",
        avatar:
          "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=200&q=80",
        rating: 4,
        content:
          "Our operations became smoother and faster. The platform helps us track performance and retain members with ease.",
      },
      {
        name: "Tariq Rizk",
        role: "Executive Director",
        company: "New Force",
        avatar:
          "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&q=80",
        rating: 5,
        content:
          "The platform increased team efficiency and gave us one connected system across sales, attendance, and performance.",
      },
    ],
  },
} as const;

export function Testimonials({ locale = "en" }: { locale?: "ar" | "en" }) {
  const text = content[locale];

  return (
    <section
      id="section-5"
      dir={locale === "ar" ? "rtl" : "ltr"}
      className="relative overflow-hidden border-t border-white/[0.08] py-24 sm:py-28 lg:py-32"
      aria-labelledby="testimonials-title"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_28%_10%,rgba(16,185,129,0.08),transparent_28%)]" />

      <div className="relative mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
        <Carousel
          dir="ltr"
          className="mx-auto max-w-7xl"
          opts={{
            align: "start",
            slidesToScroll: 1,
          }}
        >
          <div
            dir={locale === "ar" ? "rtl" : "ltr"}
            className="grid grid-cols-1 items-center gap-11 md:grid-cols-2"
          >
            <div className="space-y-4 md:space-y-16">
              <div className="space-y-4">
                <Badge
                  variant="outline"
                  className="h-auto border-white/10 bg-white/3 px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.16em] text-emerald-200"
                >
                  {text.eyebrow}
                </Badge>
                <h2
                  id="testimonials-title"
                  className="max-w-xl font-[var(--font-display)] text-4xl font-medium tracking-[-0.035em] text-white sm:text-5xl lg:text-[3.5rem]"
                >
                  {text.title}
                </h2>
                <p className="max-w-lg text-base leading-7 text-white/60 sm:text-lg">
                  {text.description}
                </p>
              </div>

              <div
                className={cn(
                  "flex items-center gap-5",
                  locale === "ar" && "flex-row-reverse",
                )}
              >
                {locale === "ar" ? (
                  <>
                    <CarouselNext
                      size="icon"
                      variant="default"
                      className="disabled:bg-primary/10 disabled:text-primary static translate-y-0 border-white/10 bg-black/30 text-white disabled:opacity-100"
                    />
                    <CarouselPrevious
                      size="icon"
                      variant="default"
                      className="disabled:bg-primary/10 disabled:text-primary static translate-y-0 border-white/10 bg-black/30 text-white disabled:opacity-100"
                    />
                  </>
                ) : (
                  <>
                    <CarouselPrevious
                      size="icon"
                      variant="default"
                      className="disabled:bg-primary/10 disabled:text-primary static translate-y-0 border-white/10 bg-black/30 text-white disabled:opacity-100"
                    />
                    <CarouselNext
                      size="icon"
                      variant="default"
                      className="disabled:bg-primary/10 disabled:text-primary static translate-y-0 border-white/10 bg-black/30 text-white disabled:opacity-100"
                    />
                  </>
                )}
              </div>
            </div>

            <div className="relative" dir="ltr">
              <CarouselContent className="sm:-ml-6">
                {text.items.map((testimonial, index) => (
                  <CarouselItem
                    key={`${testimonial.name}-${index}`}
                    className="sm:pl-6"
                  >
                    <div className="flex min-h-[420px] flex-col justify-between gap-10 rounded-[1.75rem] border border-white/10 bg-[#111827]/60 p-6 shadow-[0_20px_80px_rgba(0,0,0,0.38)] backdrop-blur-sm sm:p-8">
                      <div className="space-y-3">
                        <p className="text-7xl leading-none text-emerald-300/80">
                          &ldquo;
                        </p>
                        <p className="text-lg font-medium leading-8 text-white/75 sm:text-2xl lg:text-[1.8rem]">
                          {testimonial.content}
                        </p>
                      </div>

                      <div className="space-y-4">
                        <div className="flex items-center gap-2 text-emerald-300">
                          {Array.from({ length: 5 }).map((_, starIndex) => (
                            <span
                              key={starIndex}
                              className={
                                starIndex < testimonial.rating
                                  ? "opacity-100"
                                  : "opacity-30"
                              }
                            >
                              ★
                            </span>
                          ))}
                        </div>

                        <div className="flex items-center gap-3">
                          <Avatar className="size-12 border border-emerald-400/20 bg-[#0d1720]">
                            <AvatarImage
                              src={testimonial.avatar}
                              alt={testimonial.name}
                            />
                            <AvatarFallback className="bg-[#0d1720] text-sm text-emerald-200">
                              {testimonial.name
                                .split(" ", 2)
                                .map((n) => n[0])
                                .join("")}
                            </AvatarFallback>
                          </Avatar>

                          <div className="flex-1">
                            <h4 className="text-lg font-medium text-white">
                              {testimonial.name}
                            </h4>
                            <p className="text-sm text-white/55">
                              {testimonial.role} • {testimonial.company}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </div>
          </div>
        </Carousel>
      </div>
    </section>
  );
}

export default Testimonials;
