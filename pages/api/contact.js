import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, phone, subject, message } = req.body;

    // Проверяем только обязательные поля
    if (!name || !email || !phone || !message) {
      return res.status(400).json({ error: 'All fields except subject are required.' });
    }

    try {
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.EMAIL_USER, 
          pass: process.env.EMAIL_PASS, 
        },
      });

      const mailOptions = {
        from: process.env.EMAIL_USER,
        to: 'gabroshvilispartak@gmail.com',
        subject: `New Form Submission: ${name || 'No subject provided'}`,
        html: `
          <div style="font-family: 'Arial', sans-serif; font-size: 24px; max-width: 1200px; margin: auto; padding: 20px; border-radius: 10px; background-color: #1A1C39; color: #ffffff;">
            <h2 style="text-align: center; color: #D1B06B; margin-bottom: 20px;">New Contact Form Submission</h2>
            <table style="width: 100%; border-collapse: collapse; margin-top: 10px;">
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #3A4553; text-align: right; color: #D1B06B; font-weight: bold; width: 30%;">Full Name:</td>
                <td style="padding: 10px; border-bottom: 1px solid #3A4553; text-align: left;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #3A4553; text-align: right; color: #D1B06B; font-weight: bold;">Email Address:</td>
                <td style="padding: 10px; border-bottom: 1px solid #3A4553; text-align: left;">${email}</td>
              </tr>
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #3A4553; text-align: right; color: #D1B06B; font-weight: bold;">Phone Number:</td>
                <td style="padding: 10px; border-bottom: 1px solid #3A4553; text-align: left;">${phone}</td>
              </tr>
              ${
                subject
                  ? `<tr>
                      <td style="padding: 10px; border-bottom: 1px solid #3A4553; text-align: right; color: #D1B06B; font-weight: bold;">Subject:</td>
                      <td style="padding: 10px; border-bottom: 1px solid #3A4553; text-align: left;">${subject}</td>
                    </tr>`
                  : ''
              }
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #3A4553; text-align: right; color: #D1B06B; font-weight: bold;">Message:</td>
                <td style="padding: 10px; border-bottom: 1px solid #3A4553; text-align: left;">${message}</td>
              </tr>
            </table>
            <p style="text-align: center; margin-top: 20px; font-size: 14px; color: #D1B06B;">
              Please respond to this message as soon as possible.
            </p>
          </div>
        `,
      };

      await transporter.sendMail(mailOptions);
      return res.status(200).json({ message: 'Email sent successfully!' });
    } catch (error) {
      console.error('Error sending email:', error);
      return res.status(500).json({ error: 'Error sending email. Please try again.' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).json({ error: `Method ${req.method} Not Allowed` });
  }
}
