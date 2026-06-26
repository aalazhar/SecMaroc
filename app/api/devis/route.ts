import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const { name, email, phone, message } = body;

    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "anazalaz82@gmail.com",
      replyTo: email,
      subject: "Nouvelle demande de devis",
      html: `
        <h2>Nouvelle demande de devis</h2>

        <p><strong>Nom :</strong> ${name}</p>

        <p><strong>Email :</strong> ${email}</p>

        <p><strong>Téléphone :</strong> ${phone}</p>

        <p><strong>Message :</strong></p>

        <p>${message}</p>
      `,
    });

    return NextResponse.json({
      success: true,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
      },
      {
        status: 500,
      }
    );
  }
}