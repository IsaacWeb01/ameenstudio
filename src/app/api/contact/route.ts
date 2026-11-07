import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // Check honeypot for anti-spam
    if (body.honeypot) {
      return NextResponse.json({ ok: false, error: 'Spam detected' }, { status: 400 });
    }

    const { fullName, email, company, website, projectType, budget, timeline, description, source } = body;

    if (!fullName || !email || !description) {
      return NextResponse.json(
        { ok: false, error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Log the contact inquiry for server observability
    console.log('[AL-AMEEN STUDIO INQUIRY]', {
      recipient: 'alameenworkss@outlook.com',
      date: new Date().toISOString(),
      fullName,
      email,
      company,
      website,
      projectType,
      budget,
      timeline,
      description,
      source,
    });

    return NextResponse.json({
      ok: true,
      message: 'Inquiry received successfully. Al-Ameen will get back to you soon!',
    });
  } catch (error) {
    console.error('Error handling contact form:', error);
    return NextResponse.json(
      { ok: false, error: 'Internal server error' },
      { status: 500 }
    );
  }
}
