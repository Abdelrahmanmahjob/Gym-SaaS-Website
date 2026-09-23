import { NextResponse } from "next/server";

type ContactPayload = {
  name?: unknown;
  email?: unknown;
  phone?: unknown;
  gymName?: unknown;
  message?: unknown;
};

function textValue(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function escapeHtml(value: string) {
  return value.replace(
    /[&<>'\"]/g,
    (character) =>
      ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        "'": "&#39;",
        '"': "&quot;",
      })[character] ?? character,
  );
}

export async function POST(request: Request) {
  try {
    const payload = (await request.json()) as ContactPayload;
    const name = textValue(payload.name);
    const email = textValue(payload.email);
    const phone = textValue(payload.phone);
    const gymName = textValue(payload.gymName);
    const message = textValue(payload.message);

    if (!name || !email || !phone || !message) {
      return NextResponse.json(
        { error: "Name, email, phone, and message are required." },
        { status: 400 },
      );
    }

    if (!process.env.RESEND_API_KEY || !process.env.CONTACT_EMAIL) {
      console.error("Contact form is missing Resend environment variables.");
      return NextResponse.json(
        { error: "Contact form is not configured." },
        { status: 503 },
      );
    }

    const emailResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from:
          process.env.CONTACT_FROM_EMAIL ??
          "Website Contact <onboarding@resend.dev>",
        to: [process.env.CONTACT_EMAIL],
        reply_to: email,
        subject: `رسالة تواصل جديدة من ${name}`,
        html: `
          <h2>رسالة تواصل جديدة</h2>
          <p><strong>الاسم:</strong> ${escapeHtml(name)}</p>
          <p><strong>البريد الإلكتروني:</strong> ${escapeHtml(email)}</p>
          <p><strong>رقم الجوال:</strong> ${escapeHtml(phone)}</p>
          <p><strong>اسم النادي:</strong> ${escapeHtml(gymName || "غير مذكور")}</p>
          <p><strong>الرسالة:</strong></p>
          <p>${escapeHtml(message).replace(/\n/g, "<br />")}</p>
        `,
      }),
    });

    if (!emailResponse.ok) {
      console.error(
        "Resend rejected contact form submission",
        await emailResponse.text(),
      );
      return NextResponse.json(
        { error: "Unable to send contact message." },
        { status: 502 },
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form request failed", error);
    return NextResponse.json(
      { error: "Invalid contact form request." },
      { status: 400 },
    );
  }
}
