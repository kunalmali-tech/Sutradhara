import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const { name, email, phone, goal, message } = await request.json();

  const goalLabels: Record<string, string> = {
    "stress-relief": "Stress Relief & Relaxation",
    flexibility: "Flexibility & Strength",
    meditation: "Meditation & Mindfulness",
    weight: "Weight Management",
    spiritual: "Spiritual Growth",
    general: "General Wellness",
  };

  try {
    await resend.emails.send({
      from: "Sutradhara Contact Form <onboarding@resend.dev>",
      to: [process.env.CONTACT_EMAIL || "sutradhara@gmail.com"],
      subject: `New enquiry from ${name}`,
      html: `
        <div style="font-family:sans-serif;max-width:560px;margin:0 auto;color:#222;">
          <h2 style="border-bottom:2px solid #E8831A;padding-bottom:8px;color:#E8831A;">
            New Contact Form Submission — Sutradhara
          </h2>
          <table style="width:100%;border-collapse:collapse;margin-top:16px;">
            <tr><td style="padding:8px 0;font-weight:bold;width:120px;">Name</td><td>${name}</td></tr>
            <tr><td style="padding:8px 0;font-weight:bold;">Phone</td><td>${phone}</td></tr>
            <tr><td style="padding:8px 0;font-weight:bold;">Email</td><td>${email || "—"}</td></tr>
            <tr><td style="padding:8px 0;font-weight:bold;">Goal</td><td>${(goalLabels[goal] ?? goal) || "—"}</td></tr>
            <tr><td style="padding:8px 0;font-weight:bold;vertical-align:top;">Message</td><td>${message || "—"}</td></tr>
          </table>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Resend error:", err);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}
