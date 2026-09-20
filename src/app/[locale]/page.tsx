import { notFound } from "next/navigation";
import { Features } from "@/components/landing/features";
import { Hero } from "@/components/landing/hero";
import { Navbar } from "@/components/landing/navbar";
import { ProductShowcase } from "@/components/landing/product-showcase";
import { LightRays } from "@/components/ui/light-rays";
import { Testimonials } from "@/components/landing/testimonials";
import { WhyChooseAnan } from "@/components/landing/why-choose-anan";
import { Pricing } from "@/components/landing/pricing";
import FAQs from "@/components/ui/text-reveal-faqs";
import CtaSection from "@/components/landing/ctaSection";
import Contact from "@/components/landing/contact";
import Footer from "@/components/landing/footer";

const locales = ["ar", "en"] as const;

type Locale = (typeof locales)[number];

export default async function LandingPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!locales.includes(locale as Locale)) notFound();

  return (
    <div className="site-shell">
      <LightRays
        aria-hidden="true"
        className="z-0"
        color="rgba(78, 222, 163, 0.16)"
        count={8}
        blur={42}
        length="90vh"
      />
      <div className="relative z-10">
        <Navbar locale={locale as Locale} />
        <Hero locale={locale as Locale} />
        <ProductShowcase locale={locale as Locale} />
        <Features locale={locale as Locale} />
        <WhyChooseAnan locale={locale as Locale} />
        <Pricing locale={locale as Locale} />
        <Testimonials locale={locale as Locale} />
        <FAQs locale={locale as Locale} />
        <Contact locale={locale as Locale} />
        <CtaSection locale={locale as Locale} />
        <Footer locale={locale as Locale} />
      </div>
    </div>
  );
}
