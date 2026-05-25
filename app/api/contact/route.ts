import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    
    // Extract text fields
    const firstName = formData.get("firstName") as string || "";
    const lastName = formData.get("lastName") as string || "";
    const email = formData.get("email") as string || "";
    const userType = formData.get("userType") as string || "";
    const message = formData.get("message") as string || "";

    if (!firstName || !email) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // Configure Nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL,
      to: process.env.EMAIL, // Sending to yourself
      replyTo: email,
      subject: `New Contact Request: ${firstName} ${lastName}`,
      html: `
        <div style="font-family: 'Inter', Helvetica, Arial, sans-serif; background-color: #f8faff; padding: 40px; color: #0C2A92;">
          <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; padding: 40px; border: 1px solid #e2e8f0; border-top: 4px solid #0C2A92; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);">
            <h2 style="margin-top: 0; font-size: 24px; color: #0C2A92; letter-spacing: -0.5px;">New Contact Message</h2>
            <p style="color: #64748b; font-size: 14px; margin-bottom: 30px;">Received a new message from <strong>${firstName} ${lastName}</strong>.</p>
            
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9; width: 35%; color: #64748b; font-size: 13px; text-transform: uppercase; letter-spacing: 1px;">Email</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9; color: #0a0f24; font-weight: 500;">${email}</td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9; color: #64748b; font-size: 13px; text-transform: uppercase; letter-spacing: 1px;">User Type</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9; color: #0a0f24; font-weight: 500; text-transform: capitalize;">${userType}</td>
              </tr>
            </table>
            
            <div style="margin-top: 30px; background-color: #f8faff; padding: 20px; border-left: 3px solid #0C2A92;">
              <p style="margin: 0; color: #64748b; font-size: 13px; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 8px;">Message</p>
              <p style="margin: 0; color: #0a0f24; line-height: 1.6; font-size: 15px;">${message}</p>
            </div>
          </div>
        </div>
      `,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: "Contact request sent successfully" }, { status: 200 });
  } catch (error) {
    console.error("Error sending contact email:", error);
    return NextResponse.json({ error: "Failed to send message" }, { status: 500 });
  }
}
