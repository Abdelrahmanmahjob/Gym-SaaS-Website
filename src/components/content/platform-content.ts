import type { Locale } from "@/components/content/hero-content";

export type PlatformArea = {
  id: string;
  title: string;
  heading: string;
  description: string;
  features: string[];
  metricLabel: string;
  metricValue: string;
  metricChange: string;
  activityTitle: string;
  records: { name: string; detail: string; state: string }[];
};

type PlatformCopy = {
  eyebrow: string;
  title: string;
  description: string;
  sampleLabel: string;
  appName: string;
  search: string;
  overview: string;
  period: string;
  activity: string;
  areas: PlatformArea[];
};

export const platformContent: Record<Locale, PlatformCopy> = {
  en: {
    eyebrow: "ONE PLATFORM",
    title: "Everything You Need to Run Your Business",
    description:
      "ANAN Sustainability brings the core activities of your service business together in one simple platform.",
    sampleLabel: "SAMPLE WORKSPACE",
    appName: "Anan workspace",
    search: "Search workspace",
    overview: "Overview",
    period: "Last 30 days",
    activity: "Recent activity",
    areas: [
      {
        id: "customers",
        title: "Customers",
        heading: "A clearer view of every customer",
        description:
          "Manage customer profiles, activity, memberships, and history.",
        features: [
          "Keep every customer profile in one place",
          "Review membership and visit history",
          "See recent activity at a glance",
        ],
        metricLabel: "Active customers",
        metricValue: "1,284",
        metricChange: "+8.2%",
        activityTitle: "Customer records",
        records: [
          { name: "Customer 0248", detail: "Joined today", state: "Active" },
          { name: "Customer 0247", detail: "Updated profile", state: "Active" },
          { name: "Customer 0246", detail: "Membership renewed", state: "New" },
        ],
      },
      {
        id: "bookings",
        title: "Bookings",
        heading: "Keep every class and appointment on track",
        description:
          "Manage appointments, schedules, availability, and bookings.",
        features: [
          "View the full schedule by day or class",
          "Track availability across coaches and spaces",
          "Keep booking changes up to date",
        ],
        metricLabel: "Upcoming bookings",
        metricValue: "42",
        metricChange: "+6.4%",
        activityTitle: "Today's schedule",
        records: [
          {
            name: "Strength session",
            detail: "09:30 · Studio 01",
            state: "Confirmed",
          },
          {
            name: "Personal training",
            detail: "10:15 · Coach 04",
            state: "Confirmed",
          },
          {
            name: "Mobility class",
            detail: "11:00 · Studio 02",
            state: "Pending",
          },
        ],
      },
      {
        id: "memberships",
        title: "Memberships",
        heading: "Memberships that are easy to manage",
        description:
          "Create memberships, packages, renewals, and customer plans.",
        features: [
          "Set up recurring and fixed-term plans",
          "Track renewals and membership status",
          "Manage class packs alongside memberships",
        ],
        metricLabel: "Active memberships",
        metricValue: "846",
        metricChange: "+4.1%",
        activityTitle: "Membership plans",
        records: [
          {
            name: "Monthly access",
            detail: "Renews in 4 days",
            state: "Active",
          },
          {
            name: "All-access annual",
            detail: "Renews in 12 days",
            state: "Active",
          },
          { name: "Class package", detail: "Created today", state: "New" },
        ],
      },
      {
        id: "team",
        title: "Team",
        heading: "Give your team a smoother day",
        description:
          "Manage service providers, schedules, responsibilities, and access.",
        features: [
          "Coordinate shifts and team schedules",
          "Assign roles and workspace access",
          "See who's working at a glance",
        ],
        metricLabel: "Team members",
        metricValue: "18",
        metricChange: "4 on shift",
        activityTitle: "Team schedule",
        records: [
          {
            name: "Coach 04",
            detail: "Personal training · 09:00",
            state: "On shift",
          },
          { name: "Coach 02", detail: "Strength · 10:00", state: "On shift" },
          {
            name: "Front desk",
            detail: "Reception · 08:00",
            state: "On shift",
          },
        ],
      },
      {
        id: "payments",
        title: "Payments",
        heading: "See every payment in context",
        description:
          "Connect your preferred payment provider and keep payment activity connected to your business.",
        features: [
          "Review payments alongside customer records",
          "Track renewals and payment activity",
          "Keep online and in-person sales together",
        ],
        metricLabel: "Payment activity",
        metricValue: "SAR 64.6k",
        metricChange: "+5.7%",
        activityTitle: "Recent payments",
        records: [
          { name: "Membership renewal", detail: "Today · Card", state: "Paid" },
          { name: "Class package", detail: "Today · Online", state: "Paid" },
          { name: "Monthly plan", detail: "Yesterday · Card", state: "Paid" },
        ],
      },
      {
        id: "tools",
        title: "Business Tools",
        heading: "Keep your business tools working together",
        description:
          "Connect accounting, tax, calendar, analytics, and other business tools.",
        features: [
          "Connect calendars and accounting tools",
          "Keep schedules and transactions in sync",
          "Bring reporting tools into your workflow",
        ],
        metricLabel: "Connected tools",
        metricValue: "08",
        metricChange: "All synced",
        activityTitle: "Your connections",
        records: [
          {
            name: "Calendar",
            detail: "Schedule sync · 2 min ago",
            state: "Connected",
          },
          {
            name: "Accounting",
            detail: "Transactions · 8 min ago",
            state: "Connected",
          },
          {
            name: "Analytics",
            detail: "Reports · 12 min ago",
            state: "Connected",
          },
        ],
      },
    ],
  },
  ar: {
    eyebrow: "منصة واحدة",
    title: "كل ما تحتاجه لإدارة أعمالك",
    description:
      "تجمع أنان للاستدامة الأنشطة الأساسية لنشاطك الخدمي في منصة واحدة بسيطة.",
    sampleLabel: "مساحة تجريبية",
    appName: "مساحة أنان",
    search: "ابحث في المساحة",
    overview: "نظرة عامة",
    period: "آخر 30 يومًا",
    activity: "النشاط الأخير",
    areas: [
      {
        id: "customers",
        title: "العملاء",
        heading: "رؤية أوضح لكل عميل",
        description: "أدر ملفات العملاء ونشاطهم وعضوياتهم وسجل تعاملاتهم.",
        features: [
          "اجمع ملفات العملاء في مكان واحد",
          "راجع سجل العضويات والزيارات",
          "تابع أحدث الأنشطة بسهولة",
        ],
        metricLabel: "العملاء النشطون",
        metricValue: "1,284",
        metricChange: "+8.2%",
        activityTitle: "سجلات العملاء",
        records: [
          { name: "عميل 0248", detail: "انضم اليوم", state: "نشط" },
          { name: "عميل 0247", detail: "تم تحديث الملف", state: "نشط" },
          { name: "عميل 0246", detail: "تم تجديد العضوية", state: "جديد" },
        ],
      },
      {
        id: "bookings",
        title: "الحجوزات",
        heading: "نظّم كل حصة وموعد بسهولة",
        description: "أدر المواعيد والجداول والتوافر والحجوزات.",
        features: [
          "استعرض جدول الحصص والمواعيد",
          "تابع توافر المدربين والمساحات",
          "حدّث تغييرات الحجوزات أولًا بأول",
        ],
        metricLabel: "الحجوزات القادمة",
        metricValue: "42",
        metricChange: "+6.4%",
        activityTitle: "جدول اليوم",
        records: [
          { name: "حصة قوة", detail: "09:30 · استوديو 01", state: "مؤكد" },
          { name: "تدريب شخصي", detail: "10:15 · مدرب 04", state: "مؤكد" },
          { name: "حصة مرونة", detail: "11:00 · استوديو 02", state: "معلّق" },
        ],
      },
      {
        id: "memberships",
        title: "العضويات",
        heading: "إدارة أسهل لعضوياتك وباقاتك",
        description: "أنشئ العضويات والباقات والتجديدات وخطط العملاء.",
        features: [
          "أنشئ خططًا متجددة أو محددة المدة",
          "تابع التجديدات وحالة العضوية",
          "أدر باقات الحصص والعضويات معًا",
        ],
        metricLabel: "العضويات النشطة",
        metricValue: "846",
        metricChange: "+4.1%",
        activityTitle: "خطط العضوية",
        records: [
          { name: "دخول شهري", detail: "التجديد خلال 4 أيام", state: "نشط" },
          { name: "سنوي شامل", detail: "التجديد خلال 12 يومًا", state: "نشط" },
          { name: "باقة حصص", detail: "أُنشئت اليوم", state: "جديد" },
        ],
      },
      {
        id: "team",
        title: "الفريق",
        heading: "يوم عمل أكثر سلاسة لفريقك",
        description: "أدر مقدمي الخدمات وجداولهم ومسؤولياتهم وصلاحياتهم.",
        features: [
          "نسّق المناوبات وجداول الفريق",
          "حدّد الأدوار وصلاحيات الوصول",
          "اعرف أعضاء الفريق المناوبين بسهولة",
        ],
        metricLabel: "أعضاء الفريق",
        metricValue: "18",
        metricChange: "4 على رأس العمل",
        activityTitle: "جدول الفريق",
        records: [
          { name: "مدرب 04", detail: "تدريب شخصي · 09:00", state: "مناوب" },
          { name: "مدرب 02", detail: "قوة · 10:00", state: "مناوب" },
          {
            name: "الاستقبال",
            detail: "مكتب الاستقبال · 08:00",
            state: "مناوب",
          },
        ],
      },
      {
        id: "payments",
        title: "المدفوعات",
        heading: "تابع كل دفعة ضمن سياقها",
        description:
          "اربط مزود الدفع الذي تفضله واجمع نشاط المدفوعات ضمن أعمالك.",
        features: [
          "راجع المدفوعات مع سجلات العملاء",
          "تابع التجديدات وحركة الدفع",
          "اجمع المبيعات الإلكترونية والحضورية",
        ],
        metricLabel: "نشاط المدفوعات",
        metricValue: "64.6 ألف",
        metricChange: "+5.7%",
        activityTitle: "المدفوعات الأخيرة",
        records: [
          { name: "تجديد عضوية", detail: "اليوم · بطاقة", state: "مدفوع" },
          { name: "باقة حصص", detail: "اليوم · إلكتروني", state: "مدفوع" },
          { name: "خطة شهرية", detail: "أمس · بطاقة", state: "مدفوع" },
        ],
      },
      {
        id: "tools",
        title: "أدوات الأعمال",
        heading: "اجعل أدوات عملك تعمل معًا",
        description:
          "اربط المحاسبة والضرائب والتقويم والتحليلات وغيرها من أدوات الأعمال.",
        features: [
          "اربط التقويم وأدوات المحاسبة",
          "زامن الجداول والمعاملات باستمرار",
          "اجمع أدوات التقارير ضمن سير عملك",
        ],
        metricLabel: "الأدوات المتصلة",
        metricValue: "08",
        metricChange: "متزامنة بالكامل",
        activityTitle: "الاتصالات",
        records: [
          {
            name: "التقويم",
            detail: "مزامنة الجدول · قبل دقيقتين",
            state: "متصل",
          },
          {
            name: "المحاسبة",
            detail: "المعاملات · قبل 8 دقائق",
            state: "متصل",
          },
          {
            name: "التحليلات",
            detail: "التقارير · قبل 12 دقيقة",
            state: "متصل",
          },
        ],
      },
    ],
  },
};
