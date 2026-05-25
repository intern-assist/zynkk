import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    
    // Extract text fields
    const firstName = formData.get("firstName") as string || "";
    const lastName = formData.get("lastName") as string || "";
    const email = formData.get("email") as string || "";
    const phone = formData.get("phone") as string || "";
    const age = formData.get("age") as string || "";
    const city = formData.get("city") as string || "";
    const college = formData.get("college") as string || "";
    const yearOfStudy = formData.get("yearOfStudy") as string || "";
    const role = formData.get("role") as string || "";
    const portfolio = formData.get("portfolio") as string || "";
    const whyZynkk = formData.get("whyZynkk") as string || "";
    
    // Extract file
    const resumeFile = formData.get("resume") as File | null;

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

    // Prepare email attachments
    const attachments = [];
    if (resumeFile) {
      const buffer = Buffer.from(await resumeFile.arrayBuffer());
      attachments.push({
        filename: resumeFile.name,
        content: buffer,
      });
    }

    const mailOptions = {
      from: process.env.EMAIL,
      to: process.env.EMAIL, // Sending to yourself
      replyTo: email,
      subject: `New Internship Application: ${firstName} ${lastName}`,
      html: `
        <div style="font-family: 'Inter', Helvetica, Arial, sans-serif; background-color: #faf9f6; padding: 40px; color: #0a0f24;">
          <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; padding: 40px; border: 1px solid #e2e8f0; border-top: 4px solid #0a0f24; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);">
            <h2 style="margin-top: 0; font-size: 24px; color: #0a0f24; letter-spacing: -0.5px;">New Internship Application</h2>
            <p style="color: #64748b; font-size: 14px; margin-bottom: 30px;">Received a new application from <strong>${firstName} ${lastName}</strong>.</p>
            
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9; width: 35%; color: #64748b; font-size: 13px; text-transform: uppercase; letter-spacing: 1px;">Email</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9; color: #0a0f24; font-weight: 500;">${email}</td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9; color: #64748b; font-size: 13px; text-transform: uppercase; letter-spacing: 1px;">Phone</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9; color: #0a0f24; font-weight: 500;">${phone}</td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9; color: #64748b; font-size: 13px; text-transform: uppercase; letter-spacing: 1px;">Age / City</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9; color: #0a0f24; font-weight: 500;">${age} / ${city}</td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9; color: #64748b; font-size: 13px; text-transform: uppercase; letter-spacing: 1px;">College</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9; color: #0a0f24; font-weight: 500;">${college} (${yearOfStudy})</td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9; color: #64748b; font-size: 13px; text-transform: uppercase; letter-spacing: 1px;">Target Role</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9; color: #0a0f24; font-weight: 500; text-transform: capitalize;">${role}</td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9; color: #64748b; font-size: 13px; text-transform: uppercase; letter-spacing: 1px;">Portfolio</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9; color: #0C2A92; font-weight: 500;"><a href="${portfolio}" style="color: #0C2A92; text-decoration: none;">${portfolio}</a></td>
              </tr>
            </table>
            
            <div style="margin-top: 30px; background-color: #f8fafc; padding: 20px; border-left: 3px solid #cbd5e1;">
              <p style="margin: 0; color: #64748b; font-size: 13px; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 8px;">Why Zynkk?</p>
              <p style="margin: 0; color: #0a0f24; line-height: 1.6; font-size: 15px;">${whyZynkk}</p>
            </div>
            
            <p style="margin-top: 30px; color: #94a3b8; font-size: 12px; text-align: center;">Resume is attached to this email.</p>
          </div>
        </div>
      `,
      attachments,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: "Application submitted successfully" }, { status: 200 });
  } catch (error) {
    console.error("Error sending application email:", error);
    return NextResponse.json({ error: "Failed to send application" }, { status: 500 });
  }
}
