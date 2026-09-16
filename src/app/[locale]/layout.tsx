import type { Metadata } from "next";
import { notFound } from "next/navigation";

const locales = ["ar", "en"] as const;

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!locales.includes(locale as (typeof locales)[number])) notFound();

  const isArabic = locale === "ar";
  return {
    title: isArabic
      ? "أنان للاستدامة | إدارة ناديك في مكان واحد"
      : "Anan Sustainability | Run your gym in one place",
    description: isArabic
      ? "منصة تشغيل ذكية للاشتراكات والمدفوعات والحصص ونمو الأندية الرياضية."
      : "A modern operations platform for memberships, payments, classes, and gym growth.",
    alternates: {
      languages: { ar: "/ar", en: "/en" },
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  if (!locales.includes(locale as (typeof locales)[number])) notFound();

  return (
    <div dir={locale === "ar" ? "rtl" : "ltr"} lang={locale}>
      {children}
    </div>
  );
}
