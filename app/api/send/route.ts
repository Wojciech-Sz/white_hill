"use server";
import EmailTemplate from "@/components/emails/EmailTemplate";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const emailData = await req.json();
    const {
      firstName,
      lastName,
      phoneNumber,
      email,
      subject,
      message,
    } = emailData;
    const { data, error } = await resend.emails.send({
      from: "Formularz <onboarding@resend.dev>",
      to: [String(process.env.NEXT_PUBLIC_EMAIL)],
      subject,
      react: EmailTemplate({
        firstName,
        lastName,
        phoneNumber,
        message,
        email,
      }),
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
