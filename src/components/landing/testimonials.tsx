"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
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
    title: "ماذا يقول مستخدمونا السعداء عن أنان",
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
    title: "What Our Happy Users Say About Anan",
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

      <div className="relative mx-auto max-w-7xl px-6 sm:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <Badge
            variant="outline"
            className="h-auto border-emerald-500/20 bg-emerald-500/10 px-3.5 py-1 font-mono text-xs font-semibold uppercase tracking-widest text-emerald-300 backdrop-blur-md"
          >
            {text.eyebrow}
          </Badge>
          <h2
            id="testimonials-title"
            className="mt-5 text-4xl font-semibold leading-[1.05] tracking-tight text-white sm:text-6xl"
          >
            {text.title}
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-zinc-400 sm:text-lg">
            {text.description}
          </p>

          <div className="mt-8 flex items-center justify-center gap-4">
            <div className="flex -space-x-3" dir="ltr">
              {text.items.slice(0, 4).map((testimonial) => (
                <Avatar
                  key={testimonial.name}
                  className="size-10 border-2 border-[#09090b] bg-[#111113]"
                >
                  <AvatarImage
                    src={testimonial.avatar}
                    alt={testimonial.name}
                  />
                  <AvatarFallback className="bg-[#18181b] text-xs text-emerald-200">
                    {testimonial.name
                      .split(" ", 2)
                      .map((name) => name[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
              ))}
            </div>
            <div className="text-start">
              <div className="flex items-center gap-2">
                <span className="text-lg font-bold text-white">4.8/5</span>
                <span className="text-base tracking-[0.12em] text-emerald-300">
                  ★★★★★
                </span>
              </div>
              <span className="font-mono text-[10px] uppercase tracking-wider text-zinc-500">
                {locale === "ar" ? "تقييمات العملاء" : "Customer reviews"}
              </span>
            </div>
          </div>
        </div>

        <Carousel
          dir="ltr"
          className="mt-14"
          opts={{ align: "start", slidesToScroll: 1 }}
        >
          <CarouselContent className="-ml-4 sm:-ml-5">
            {text.items.map((testimonial, index) => (
              <CarouselItem
                key={`${testimonial.name}-${index}`}
                className="pl-4 sm:basis-1/2 sm:pl-5 lg:basis-1/3"
              >
                <article className="group flex min-h-[280px] flex-col justify-between rounded-[1.25rem] border border-[#3c4a42] bg-[#111113] p-6 shadow-[0_18px_45px_rgba(0,0,0,0.2)] transition-all duration-300 hover:-translate-y-1 hover:border-emerald-500/40 hover:bg-[#18181b] sm:p-7">
                  <div>
                    <div className="mb-5 flex items-center gap-3">
                      <Avatar className="size-10 border border-emerald-500/20 bg-[#18181b]">
                        <AvatarImage
                          src={testimonial.avatar}
                          alt={testimonial.name}
                        />
                        <AvatarFallback className="bg-[#18181b] text-xs text-emerald-200">
                          {testimonial.name
                            .split(" ", 2)
                            .map((name) => name[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div className="min-w-0 text-start">
                        <h3 className="truncate text-sm font-semibold text-white">
                          {testimonial.name}
                        </h3>
                        <p className="truncate text-xs text-zinc-500">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                    <div className="mb-5 h-px bg-emerald-500/20" />
                    <p className="text-sm leading-6 text-zinc-300 sm:text-base">
                      {testimonial.content}
                    </p>
                  </div>
                  <div className="mt-6 flex items-center gap-1 text-sm text-emerald-300">
                    {Array.from({ length: 5 }).map((_, starIndex) => (
                      <span
                        key={starIndex}
                        className={
                          starIndex < testimonial.rating ? "" : "opacity-30"
                        }
                      >
                        ★
                      </span>
                    ))}
                  </div>
                </article>
              </CarouselItem>
            ))}
          </CarouselContent>

          <div
            className="mt-10 flex items-center justify-center gap-3"
            dir={locale === "ar" ? "rtl" : "ltr"}
          >
            <CarouselPrevious
              size="icon"
              variant="outline"
              className="static size-10 translate-y-0 rounded-full border-[#86948a] bg-transparent text-white hover:border-emerald-300 hover:bg-emerald-500/10 hover:text-emerald-200 disabled:opacity-40"
            />
            <CarouselNext
              size="icon"
              variant="outline"
              className="static size-10 translate-y-0 rounded-full border-[#86948a] bg-transparent text-white hover:border-emerald-300 hover:bg-emerald-500/10 hover:text-emerald-200 disabled:opacity-40"
            />
          </div>
        </Carousel>
      </div>
    </section>
  );
}

export default Testimonials;
