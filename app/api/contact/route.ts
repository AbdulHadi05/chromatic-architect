// import { type NextRequest, NextResponse } from "next/server"

// export async function POST(request: NextRequest) {
//   try {
//     const body = await request.json()
//     const { name, email, message } = body

//     // Validate required fields
//     if (!name || !email || !message) {
//       return NextResponse.json({ error: "All fields are required" }, { status: 400 })
//     }

//     // Validate email format
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
//     if (!emailRegex.test(email)) {
//       return NextResponse.json({ error: "Invalid email format" }, { status: 400 })
//     }

//     // Here you would typically:
//     // 1. Save to database
//     // 2. Send email notification
//     // 3. Integrate with CRM

//     // For demo purposes, we'll just log and return success
//     console.log("Contact form submission:", { name, email, message })

//     return NextResponse.json({ message: "Message sent successfully" }, { status: 200 })
//   } catch (error) {
//     console.error("Contact form error:", error)
//     return NextResponse.json({ error: "Internal server error" }, { status: 500 })
//   }
// }





// -----------------------------------------------------


import { type NextRequest, NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, message } = body

    // ✅ Validate
    if (!name || !email || !message) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 })
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Invalid email format" }, { status: 400 })
    }

    // ✅ Nodemailer setup
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    })

    // ✅ Send the email
    await transporter.sendMail({
      from: `"Contact Form" <${process.env.GMAIL_USER}>`,
      to: "bnhaus.co@gmail.com", // Receiver (your email)
      subject: "New Contact Form Submission",
      html: `
        <h3>Contact Form Submission</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong><br>${message}</p>
      `,
    })

    return NextResponse.json({ message: "Message sent successfully" }, { status: 200 })
  } catch (error) {
    console.error("Contact form error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
