export const contactContent = {
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
    errorMessage: "تعذر إرسال الرسالة حالياً. حاول مرة أخرى بعد قليل.",
    contactInfo: [
      { title: "المبيعات والدعم الفني", value: "sales@anan.com" },
      { title: "واتساب المبيعات المباشر", value: "+966 50 000 0000" },
      { title: "المقر الرئيسي", value: "الرياض، المملكة العربية السعودية" },
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
    errorMessage: "We couldn't send your message right now. Please try again.",
    contactInfo: [
      { title: "Sales & Support", value: "sales@anan.com" },
      { title: "Direct WhatsApp Sales", value: "+966 50 000 0000" },
      { title: "Headquarters", value: "Riyadh, Kingdom of Saudi Arabia" },
    ],
  },
} as const;
