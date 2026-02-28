import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(request: NextRequest) {
  const contactEmail = process.env.CONTACT_EMAIL;
  const apiKey = process.env.RESEND_API_KEY;

  if (!contactEmail || !apiKey) {
    return NextResponse.json(
      { error: 'Contact form is not configured.' },
      { status: 500 }
    );
  }

  const resend = new Resend(apiKey);
  const formData = await request.formData();
  const first_name = (formData.get('first_name') as string)?.trim() ?? '';
  const last_name = (formData.get('last_name') as string)?.trim() ?? '';
  const email = (formData.get('email') as string)?.trim() ?? '';
  const phone = (formData.get('phone') as string)?.trim() ?? '';
  const client_type = (formData.get('client_type') as string)?.trim() ?? '';
  const inquiry_type = (formData.get('inquiry_type') as string)?.trim() ?? '';
  const message = (formData.get('message') as string)?.trim() ?? '';

  if (!email || !message) {
    return NextResponse.json(
      { error: 'Please fill in all required fields.' },
      { status: 400 }
    );
  }

  const name = `${first_name} ${last_name}`.trim() || 'Unknown';
  const subject = `New Contact Form Submission from ${name}`;
  const body = `Name: ${name}
Email: ${email}
Phone: ${phone}
Type: ${client_type}
Inquiry: ${inquiry_type}

Message:
${message}`;

  try {
    const { error } = await resend.emails.send({
      from: 'Zach\'s Computer Services <onboarding@resend.dev>',
      to: contactEmail,
      replyTo: email,
      subject,
      text: body,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json(
        { error: 'Failed to send message. Please try again or call (813) 473-2334.' },
        { status: 500 }
      );
    }

    return NextResponse.json({
      message: "Thank you! We'll get back to you within 30 minutes during business hours.",
    });
  } catch (err) {
    console.error('Contact API error:', err);
    return NextResponse.json(
      { error: 'Failed to send message. Please try again or call (813) 473-2334.' },
      { status: 500 }
    );
  }
}
