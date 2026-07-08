// import { Resend } from "resend";
// import { NextResponse } from "next/server";

// const resend = new Resend(process.env.RESEND_API_KEY);

// export async function POST(request: Request) {
//   try {
//     const body = await request.json();

//     const { name, email, phone, message } = body;

//     await resend.emails.send({
//       from: "onboarding@resend.dev",
//       to: "anazalaz82@gmail.com",
//       replyTo: email,
//       subject: "Nouvelle demande de devis",
//       html: `
//         <h2>Nouvelle demande de devis</h2>

//         <p><strong>Nom :</strong> ${name}</p>

//         <p><strong>Email :</strong> ${email}</p>

//         <p><strong>Téléphone :</strong> ${phone}</p>

//         <p><strong>Message :</strong></p>

//         <p>${message}</p>
//       `,
//     });

//     return NextResponse.json({
//       success: true,
//     });
//   } catch (error) {
//     console.error(error);

//     return NextResponse.json(
//       {
//         success: false,
//       },
//       {
//         status: 500,
//       }
//     );
//   }
// }

import { Resend } from "resend";
import { NextResponse } from "next/server";
import { devisSchema } from "@/lib/validations";

const resend = new Resend(process.env.RESEND_API_KEY);

// very small in-memory rate limiter (per server instance — good enough for basic abuse protection)
const submissions = new Map<string, number[]>();
const RATE_LIMIT_WINDOW_MS = 60_000; // 1 minute
const RATE_LIMIT_MAX = 3;

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const timestamps = (submissions.get(ip) ?? []).filter(
    (t) => now - t < RATE_LIMIT_WINDOW_MS
  );

  if (timestamps.length >= RATE_LIMIT_MAX) {
    submissions.set(ip, timestamps);
    return true;
  }

  timestamps.push(now);
  submissions.set(ip, timestamps);
  return false;
}

function escapeHtml(input: string): string {
  return input
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function POST(request: Request) {
  try {
    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
      "unknown";

    if (isRateLimited(ip)) {
      return NextResponse.json(
        {
          success: false,
          error: "Trop de tentatives. Veuillez réessayer dans quelques instants.",
        },
        { status: 429 }
      );
    }

    let body: unknown;
    try {
      body = await request.json();
    } catch {
      return NextResponse.json(
        { success: false, error: "Requête invalide." },
        { status: 400 }
      );
    }

    const result = devisSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        {
          success: false,
          error: "Données invalides.",
          fieldErrors: result.error.flatten().fieldErrors,
        },
        { status: 400 }
      );
    }

    const { name, email, phone, message } = result.data;

    // escape everything before it ever touches the HTML string
    const safe = {
      name: escapeHtml(name),
      email: escapeHtml(email),
      phone: escapeHtml(phone),
      message: escapeHtml(message).replace(/\n/g, "<br />"),
    };

    const { error } = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "anazalaz82@gmail.com",
      replyTo: email,
      subject: "Nouvelle demande de devis",
      html: `
        <h2>Nouvelle demande de devis</h2>
        <p><strong>Nom :</strong> ${safe.name}</p>
        <p><strong>Email :</strong> ${safe.email}</p>
        <p><strong>Téléphone :</strong> ${safe.phone}</p>
        <p><strong>Message :</strong></p>
        <p>${safe.message}</p>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { success: false, error: "Échec de l'envoi de l'email." },
        { status: 502 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Devis route error:", error);
    return NextResponse.json(
      { success: false, error: "Une erreur interne est survenue." },
      { status: 500 }
    );
  }
}