import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { name, email, phone, service, message } = body

    if (!email || !message) {
      return NextResponse.json(
        { message: 'Email and message are required.' },
        { status: 400 }
      )
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { message: 'Please provide a valid email address.' },
        { status: 400 }
      )
    }

    /*
     * TODO: Connect an email provider here.
     * Options: Resend (resend.com), SendGrid, Nodemailer + SMTP, Postmark.
     * Example with Resend:
     *
     * import { Resend } from 'resend'
     * const resend = new Resend(process.env.RESEND_API_KEY)
     * await resend.emails.send({
     *   from: 'noreply@oakandolivewellness.com',
     *   to: 'hello@oakandolivewellness.com',
     *   subject: `New inquiry from ${name || email}`,
     *   html: `<p><strong>Name:</strong> ${name}</p>
     *          <p><strong>Email:</strong> ${email}</p>
     *          <p><strong>Phone:</strong> ${phone || 'N/A'}</p>
     *          <p><strong>Service:</strong> ${service || 'N/A'}</p>
     *          <p><strong>Message:</strong><br>${message}</p>`,
     * })
     */

    console.log('[Contact Form]', { name, email, phone, service, message })

    return NextResponse.json(
      { message: 'Message received. We will be in touch shortly.' },
      { status: 200 }
    )
  } catch {
    return NextResponse.json(
      { message: 'An unexpected error occurred.' },
      { status: 500 }
    )
  }
}
