'use server';

import nodemailer from 'nodemailer';

interface ConsultationInput {
  name: string;
  phone: string;
  email: string;
  service: string;
  destination: string;
  message?: string;
}

export async function submitConsultationAction(data: ConsultationInput) {
  try {
    const { name, phone, email, service, destination, message = '' } = data;

    // Validate input fields
    if (!name || !phone || !email || !service || !destination) {
      return { success: false, error: 'All fields except message are required.' };
    }

    // 1. Configure Nodemailer for Gmail SMTP
    const gmailUser = process.env.GMAIL_USER;
    const gmailPass = process.env.GMAIL_PASS;
    const receiverEmail = process.env.EMAIL_RECEIVER || gmailUser;

    if (!gmailUser || !gmailPass) {
      console.warn('Gmail credentials not configured in environment variables.');
      return { 
        success: false, 
        error: 'Email configuration is missing. Please set GMAIL_USER and GMAIL_PASS.' 
      };
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: gmailUser,
        pass: gmailPass,
      },
    });

    const mailOptions = {
      from: `"True Visa Services" <${gmailUser}>`,
      to: receiverEmail,
      subject: `New Consultation Request: ${name} (${service})`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #e2e8f0; border-radius: 8px;">
          <h2 style="color: #1e3a8a; border-bottom: 2px solid #fbbf24; padding-bottom: 10px;">New Consultation Query</h2>
          <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
            <tr>
              <td style="padding: 8px 0; font-weight: bold; width: 150px; color: #475569;">Name:</td>
              <td style="padding: 8px 0; color: #1e293b;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #475569;">Phone Number:</td>
              <td style="padding: 8px 0; color: #1e293b;">${phone}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #475569;">Email Address:</td>
              <td style="padding: 8px 0; color: #1e293b;"><a href="mailto:${email}">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #475569;">Service:</td>
              <td style="padding: 8px 0; color: #1e293b;">${service}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #475569;">Destination:</td>
              <td style="padding: 8px 0; color: #1e293b;">${destination}</td>
            </tr>
          </table>
          <div style="margin-top: 20px; padding: 15px; background: #f8fafc; border-left: 4px solid #fbbf24; border-radius: 4px;">
            <h4 style="margin: 0 0 8px 0; color: #475569;">Message:</h4>
            <p style="margin: 0; color: #334155; white-space: pre-wrap;">${message || 'No additional message provided.'}</p>
          </div>
          <hr style="border: 0; border-top: 1px solid #e2e8f0; margin: 30px 0;" />
          <p style="font-size: 12px; color: #64748b; text-align: center;">This is an automated message sent from the True Visa Services website.</p>
        </div>
      `,
    };

    transporter.sendMail(mailOptions).then(() => console.log('Email sent successfully')).catch(error => console.error('Error sending email:', error));

    return { success: true };
  } catch (error: any) {
    console.error('Error submitting consultation action:', error);
    return { success: false, error: error.message || 'Failed to submit query.' };
  }
}
