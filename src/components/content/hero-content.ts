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
    heroEyebrow: "المنصة للشركات الخدمية",

    primary: "احجز عرضًا توضيحيًا",
    secondary: "شاهد كيف تعمل المنصة",
    industriesLabel: "القطاعات التي نخدمها",
    industries: [
      "الأندية الرياضية",
      "أندية البادل",
      "الاستوديوهات",
      "الصالونات",
      "العيادات",
      "مراكز التدريب",
    ],

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
        title: "منصة واحدة لتشغيل أعمالك الخدمية.",
        description:
          "قم بإدارة عملائك، الحجوزات، الاشتراكات، الفريق، المدفوعات، والعمليات اليومية — كل ذلك في مكان واحد.",
        image: "/media/dashboard/dashboard-image2.jpeg",
        imageAlt: "لوحة التحكم الرئيسية لمنصة إدارة النادي الرياضي",
        deviceLabel: "لوحة الإدارة",
      },
    ] satisfies HeroSlide[],
  },

  en: {
    heroEyebrow: "THE PLATFORM FOR SERVICE BUSINESSES",

    primary: "Book a Demo",
    secondary: "See How It Works",
    industriesLabel: "Industries we serve",
    industries: [
      "Gyms & Fitness",
      "Padel Clubs",
      "Studios",
      "Salons",
      "Clinics",
      "Training Centers",
    ],

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
        title: "One platform to run your service business.",
        description:
          "Manage your customers, bookings, memberships, team, payments, and daily operations — all in one place.",
        image: "/media/dashboard/dashboard-image2.jpeg",
        imageAlt: "Main gym management dashboard",
        deviceLabel: "Management dashboard",
      },
    ] satisfies HeroSlide[],
  },
} as const;
