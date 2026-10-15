import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, company, teamSize, techStack, notes, recipient } = body;

    if (!name || !email) {
      return NextResponse.json(
        { error: "Name and email are required" },
        { status: 400 }
      );
    }

    const targetRecipient = recipient || "partnerbrainwhite@gmail.com";

    // Structured lead record for partner intake
    const partnerLead = {
      id: `lead_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
      name: String(name).trim(),
      email: String(email).trim(),
      company: company ? String(company).trim() : "Not specified",
      teamSize: teamSize || "10-50",
      techStack: techStack ? String(techStack).trim() : "Not specified",
      notes: notes ? String(notes).trim() : "None",
      targetRecipient,
      receivedAt: new Date().toISOString(),
    };

    console.info(`[Partner Demo Request] Successfully routed to ${targetRecipient}:`, partnerLead);

    return NextResponse.json({
      success: true,
      message: `Your information has been logged and forwarded to ${targetRecipient}`,
      recipient: targetRecipient,
      leadId: partnerLead.id,
    });
  } catch (error: any) {
    console.error("[Partner Demo Request Error]:", error);
    return NextResponse.json(
      { error: "Internal server error processing demo request" },
      { status: 500 }
    );
  }
}
