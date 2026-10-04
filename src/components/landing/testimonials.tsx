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
import { testimonialsContent } from "@/components/content/testimonials-content";

export type TestimonialItem = {
  name: string;
  role: string;
  company: string;
  avatar: string;
  rating: number;
  content: string;
};

export function Testimonials({ locale = "en" }: { locale?: "ar" | "en" }) {
  const text = testimonialsContent[locale];

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
            className="mt-5 text-4xl font-semibold leading-[1.05] tracking-tight bg-gradient-to-b from-white via-white/90 to-white/50 bg-clip-text text-transparent sm:text-6xl"
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
                <span className="text-lg font-bold text-white">
                  {text.rating}
                </span>
                <span className="text-base tracking-[0.12em] text-emerald-300">
                  ★★★★★
                </span>
              </div>
              <span className="font-mono text-[10px] uppercase tracking-wider text-zinc-500">
                {text.ratingLabel}
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
