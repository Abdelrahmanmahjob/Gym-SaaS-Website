export type Locale = "ar" | "en";

export type HeroSlide = {
  id: "mobile" | "desktop";
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  deviceLabel: string;
};

export const heroContent = {
  ar: {
    heroEyebrow: "عمليات النادي الرياضي / 01",

    primary: "ابدأ تجربة 7 أيام",
    secondary: "احجز عرضًا توضيحيًا",

    live: "النظام يعمل الآن",
    proof: "مصمم للأندية متعددة الفروع",

    previous: "الشريحة السابقة",
    next: "الشريحة التالية",

    slides: [
      {
        id: "mobile",
        eyebrow: "تجربة الأعضاء / MOBILE",
        title: "امنح عملك قوة باستخدام نظام واحد.",
        description:
          "امنح أعضاء النادي تجربة رقمية متصلة للحجز والمتابعة وإدارة الاشتراك، بينما يبقى فريقك على اطلاع كامل بكل ما يحدث.",
        image: "/media/dashboard/dashboard-image3.png",
        imageAlt: "تطبيق الجوال الخاص بمنصة إدارة النادي الرياضي",
        deviceLabel: "تجربة الجوال",
      },

      {
        id: "desktop",
        eyebrow: "مركز القيادة / DESKTOP",
        title: "أدر ناديك من رؤية واحدة.",
        description:
          "تابع العضويات والمدفوعات والحضور والحصص والمبيعات والأداء من لوحة تشغيل واحدة صُممت للإدارة اليومية.",
        image: "/media/dashboard/dashboard-image2.jpeg",
        imageAlt: "لوحة التحكم الرئيسية لمنصة إدارة النادي الرياضي",
        deviceLabel: "لوحة الإدارة",
      },
    ] satisfies HeroSlide[],
  },

  en: {
    heroEyebrow: "GYM OPERATIONS / 01",

    primary: "Start 7-day trial",
    secondary: "Book a demo",

    live: "System operational",
    proof: "Built for multi-branch gyms",

    previous: "Previous slide",
    next: "Next slide",

    slides: [
      {
        id: "mobile",
        eyebrow: "MEMBER EXPERIENCE / MOBILE",
        title: "Empower Your Work with One System.",
        description:
          "Give members a connected digital experience for bookings, progress, and membership management while your team stays fully informed.",
        image: "/media/dashboard/dashboard-image3.png",
        imageAlt: "Mobile app experience for the gym management platform",
        deviceLabel: "Mobile experience",
      },

      {
        id: "desktop",
        eyebrow: "COMMAND CENTER / DESKTOP",
        title: "Run your gym from one view.",
        description:
          "Monitor memberships, payments, attendance, classes, retail, and performance from one operating dashboard built for daily management.",
        image: "/media/dashboard/dashboard-image2.jpeg",
        imageAlt: "Main gym management dashboard",
        deviceLabel: "Management dashboard",
      },
    ] satisfies HeroSlide[],
  },
} as const;
