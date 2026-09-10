import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

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

    const gmailUser = process.env.GMAIL_USER
    const gmailAppPassword = process.env.GMAIL_APP_PASSWORD
    const contactToEmail = process.env.CONTACT_TO_EMAIL || gmailUser

    if (!gmailUser || !gmailAppPassword) {
      console.error('[Contact Form] Missing GMAIL_USER or GMAIL_APP_PASSWORD env vars — email not sent.')
      return NextResponse.json(
        { message: 'Unable to send your message right now. Please call us directly.' },
        { status: 500 }
      )
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: gmailUser,
        pass: gmailAppPassword,
      },
    })

    await transporter.sendMail({
      from: `"Oak & Olive Website" <${gmailUser}>`,
      to: contactToEmail,
      replyTo: email,
      subject: `New inquiry from ${name || email}`,
      html: `<p><strong>Name:</strong> ${escapeHtml(name || 'N/A')}</p>
             <p><strong>Email:</strong> ${escapeHtml(email)}</p>
             <p><strong>Phone:</strong> ${escapeHtml(phone || 'N/A')}</p>
             <p><strong>Service:</strong> ${escapeHtml(service || 'N/A')}</p>
             <p><strong>Message:</strong><br>${escapeHtml(message).replace(/\n/g, '<br>')}</p>`,
    })

    return NextResponse.json(
      { message: 'Message received. We will be in touch shortly.' },
      { status: 200 }
    )
  } catch (err) {
    console.error('[Contact Form] Failed to send email:', err)
    return NextResponse.json(
      { message: 'An unexpected error occurred. Please call us directly.' },
      { status: 500 }
    )
  }
}
