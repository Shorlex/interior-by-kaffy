import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request) {
  try {
    const { fullname, email, mobile, subject, message } = await request.json();

    const user = process.env.user;
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: user,
        pass: process.env.pass,
      },
    });

    const mailOption = {
      from: user,
      to: user,
      subject: `Enqury from ${fullname}`,
      html: `
                  <h1>${subject}</h1><br>
                  <h6>Name: ${fullname}</h6>
                  <h6>Email: ${email}</h6>
                  <h6>Mobile: ${mobile}</h6>
                  <h6>Message: ${message}</h6>
              `,
    };

    await transporter.sendMail(mailOption);

    return NextResponse.json(
      { message: "Message Sent Successfully" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to send Mail" },
      { status: 500 }
    );
  }
}
