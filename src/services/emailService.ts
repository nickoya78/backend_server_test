import nodemailer from 'nodemailer';
import { EMAIL_CONFIG } from '../config/config';

export const sendVerificationEmail = async (email: string, token: string): Promise<void> => {
  try {
    const transporter = nodemailer.createTransport({
      host: EMAIL_CONFIG.host,
      port: 465,
      secure: true, // true for 465, false for other ports
      auth: {
        user: EMAIL_CONFIG.user,
        pass: EMAIL_CONFIG.pass,
      },
    });

    const mailOptions = {
      from: EMAIL_CONFIG.user,
      to: email,
      subject: 'Email Verification',
      html: `<p>Please verify your email by clicking <a href="http://localhost:3000/verify-email?token=${token}">here</a>.</p>`
    };

    await transporter.sendMail(mailOptions);
  } catch (error) {
    console.error('Error sending verification email:', error);
    throw error; // Or handle it as per your application's error handling strategy
  }
};

