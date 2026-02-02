import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: NextRequest) {
  try {
    // Check if Gmail credentials are configured
    if (!process.env.GMAIL_USER || !process.env.GMAIL_APP_PASSWORD) {
      console.error('Gmail credentials not configured')
      return NextResponse.json(
        { error: 'Email service not configured. Please contact support.' },
        { status: 500 }
      )
    }

    const body = await request.json()
    const { name, email, company, message } = body

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Create Gmail transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      host: 'smtp.gmail.com',
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD
      },
      tls: {
        // Handle self-signed certificates in development
        rejectUnauthorized: process.env.NODE_ENV === 'production'
      },
      // Additional options for better compatibility
      requireTLS: true
    })

    // Email content
    const htmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <h2 style="color: #2563eb; border-bottom: 2px solid #e5e7eb; padding-bottom: 10px;">
          New Contact Form Inquiry
        </h2>
        
        <div style="background-color: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #374151; margin-top: 0;">Contact Details</h3>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          ${company ? `<p><strong>Company:</strong> ${company}</p>` : ''}
        </div>
        
        <div style="background-color: #ffffff; padding: 20px; border: 1px solid #e5e7eb; border-radius: 8px;">
          <h3 style="color: #374151; margin-top: 0;">Message</h3>
          <p style="white-space: pre-wrap; line-height: 1.6;">${message}</p>
        </div>
        
        <div style="margin-top: 20px; padding: 15px; background-color: #f0f9ff; border-left: 4px solid #2563eb; border-radius: 4px;">
          <p style="margin: 0; color: #1e40af; font-size: 14px;">
            <strong>Note:</strong> This inquiry was submitted through the Ken McCoy Consulting website contact form.
          </p>
        </div>
      </div>
    `

    const textContent = `
New Contact Form Inquiry

Contact Details:
- Name: ${name}
- Email: ${email}
${company ? `- Company: ${company}` : ''}

Message:
${message}

---
This inquiry was submitted through the Ken McCoy Consulting website contact form.
    `

    // Send email using Gmail SMTP
    const result = await transporter.sendMail({
      from: `"Ken McCoy Consulting Website" <${process.env.GMAIL_USER}>`,
      to: 'info@kenmccoy.in',
      replyTo: email,
      subject: `New Contact Form Inquiry from ${name}`,
      text: textContent,
      html: htmlContent
    })

    return NextResponse.json(
      { 
        success: true, 
        message: 'Inquiry sent successfully',
        messageId: result.messageId 
      },
      { status: 200 }
    )

  } catch (error) {
    console.error('Error sending email:', error)
    console.error('Error details:', {
      message: error instanceof Error ? error.message : 'Unknown error',
      stack: error instanceof Error ? error.stack : undefined,
      gmailConfigured: !!(process.env.GMAIL_USER && process.env.GMAIL_APP_PASSWORD)
    })
    return NextResponse.json(
      { 
        error: 'Failed to send inquiry. Please try again later.',
        details: process.env.NODE_ENV === 'development' ? {
          message: error instanceof Error ? error.message : 'Unknown error',
          gmailConfigured: !!(process.env.GMAIL_USER && process.env.GMAIL_APP_PASSWORD)
        } : undefined
      },
      { status: 500 }
    )
  }
}
