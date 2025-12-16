import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { firstName, lastName, email, phone, interest, message } = body;

        // Validate required fields
        if (!firstName || !lastName || !email || !message) {
            return NextResponse.json(
                { error: 'Please fill in all required fields' },
                { status: 400 }
            );
        }

        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return NextResponse.json(
                { error: 'Please provide a valid email address' },
                { status: 400 }
            );
        }

        // Create transporter
        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: parseInt(process.env.SMTP_PORT || '587'),
            secure: false,
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASSWORD,
            },
        });

        // Interest mapping
        const interestLabels: Record<string, string> = {
            residential: 'Residential Property',
            commercial: 'Commercial Property',
            investment: 'Real Estate Investment',
            'joint-venture': 'Joint Venture Partnership',
            consultancy: 'Development Consultancy',
            other: 'Other',
        };

        const fromEmail = process.env.SMTP_FROM || 'noreply@sinbadbdl.com';
        const companyEmail = process.env.COMPANY_EMAIL || 'info@sinbadbdl.com';

        // Email to the user (confirmation)
        const userMailOptions = {
            from: `"Sinbad Builders & Developers" <${fromEmail}>`,
            to: email,
            subject: 'Thank you for contacting Sinbad Builders & Developers',
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                    <div style="background-color: #0d5a2d; padding: 20px; text-align: center;">
                        <h1 style="color: #d4af37; margin: 0;">Sinbad Builders & Developers</h1>
                    </div>

                    <div style="padding: 30px; background-color: #f9f9f9;">
                        <h2 style="color: #0d5a2d; margin-top: 0;">Thank You for Reaching Out!</h2>

                        <p style="color: #333; line-height: 1.6;">
                            Dear ${firstName} ${lastName},
                        </p>

                        <p style="color: #666; line-height: 1.6;">
                            Thank you for contacting Sinbad Builders & Developers. We have received your inquiry and our team will get back to you shortly.
                        </p>

                        <div style="background-color: #ffffff; padding: 20px; border-left: 4px solid #d4af37; margin: 20px 0;">
                            <h3 style="color: #0d5a2d; margin-top: 0;">Your Message Details:</h3>
                            <p style="color: #666; margin: 5px 0;"><strong>Interest:</strong> ${interestLabels[interest] || 'Not specified'}</p>
                            <p style="color: #666; margin: 5px 0;"><strong>Message:</strong></p>
                            <p style="color: #666; margin: 5px 0; white-space: pre-wrap;">${message}</p>
                        </div>

                        <p style="color: #666; line-height: 1.6;">
                            If you have any urgent queries, feel free to call us at <strong>+880 1813-087877</strong>.
                        </p>

                        <p style="color: #666; line-height: 1.6;">
                            Best regards,<br/>
                            <strong style="color: #0d5a2d;">Sinbad Builders & Developers Team</strong>
                        </p>
                    </div>

                    <div style="background-color: #0d5a2d; padding: 15px; text-align: center;">
                        <p style="color: #ffffff; margin: 0; font-size: 12px;">
                            506, Omar-Shajahan Tower (3rd floor), Shah Kabir Mazar Road, Azampur Railgate, Uttara, Dhaka-1230
                        </p>
                        <p style="color: #d4af37; margin: 5px 0 0 0; font-size: 12px;">
                            www.sinbadbdl.com | +880 1813-087877
                        </p>
                    </div>
                </div>
            `,
            text: `
Dear ${firstName} ${lastName},

Thank you for contacting Sinbad Builders & Developers. We have received your inquiry and our team will get back to you shortly.

Your Message Details:
Interest: ${interestLabels[interest] || 'Not specified'}
Message: ${message}

If you have any urgent queries, feel free to call us at +880 1813-087877.

Best regards,
Sinbad Builders & Developers Team

---
506, Omar-Shajahan Tower (3rd floor), Shah Kabir Mazar Road, Azampur Railgate, Uttara, Dhaka-1230
www.sinbadbdl.com | +880 1813-087877
            `,
        };

        // Email to the company (notification)
        const companyMailOptions = {
            from: `"Website Contact Form" <${fromEmail}>`,
            to: companyEmail,
            replyTo: email,
            subject: `New Inquiry: ${interestLabels[interest] || 'General'} - ${firstName} ${lastName}`,
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                    <div style="background-color: #0d5a2d; padding: 20px; text-align: center;">
                        <h1 style="color: #d4af37; margin: 0;">New Contact Form Submission</h1>
                        <p style="color: #ffffff; margin: 5px 0 0 0;">sinbadbdl.com</p>
                    </div>

                    <div style="padding: 30px; background-color: #f9f9f9;">
                        <h2 style="color: #0d5a2d; border-bottom: 2px solid #d4af37; padding-bottom: 10px;">Contact Details</h2>

                        <table style="width: 100%; border-collapse: collapse;">
                            <tr>
                                <td style="padding: 10px 0; font-weight: bold; color: #333; width: 120px;">Name:</td>
                                <td style="padding: 10px 0; color: #666;">${firstName} ${lastName}</td>
                            </tr>
                            <tr>
                                <td style="padding: 10px 0; font-weight: bold; color: #333;">Email:</td>
                                <td style="padding: 10px 0; color: #666;"><a href="mailto:${email}" style="color: #0d5a2d;">${email}</a></td>
                            </tr>
                            <tr>
                                <td style="padding: 10px 0; font-weight: bold; color: #333;">Phone:</td>
                                <td style="padding: 10px 0; color: #666;">${phone ? `<a href="tel:${phone}" style="color: #0d5a2d;">${phone}</a>` : 'Not provided'}</td>
                            </tr>
                            <tr>
                                <td style="padding: 10px 0; font-weight: bold; color: #333;">Interest:</td>
                                <td style="padding: 10px 0; color: #666;">${interestLabels[interest] || 'Not specified'}</td>
                            </tr>
                        </table>

                        <h3 style="color: #0d5a2d; margin-top: 20px;">Message:</h3>
                        <div style="background-color: #ffffff; padding: 15px; border-left: 4px solid #d4af37; margin-top: 10px;">
                            <p style="color: #666; margin: 0; white-space: pre-wrap;">${message}</p>
                        </div>

                        <div style="margin-top: 20px; padding: 15px; background-color: #e8f5e9; border-radius: 8px;">
                            <p style="color: #0d5a2d; margin: 0; font-size: 14px;">
                                <strong>Quick Actions:</strong><br/>
                                Reply directly to this email to respond to the customer.
                            </p>
                        </div>
                    </div>

                    <div style="background-color: #0d5a2d; padding: 15px; text-align: center;">
                        <p style="color: #ffffff; margin: 0; font-size: 12px;">
                            This email was sent from the contact form on sinbadbdl.com
                        </p>
                    </div>
                </div>
            `,
            text: `
New Contact Form Submission
===========================

Name: ${firstName} ${lastName}
Email: ${email}
Phone: ${phone || 'Not provided'}
Interest: ${interestLabels[interest] || 'Not specified'}

Message:
${message}

---
Reply directly to this email to respond to the customer.
This email was sent from the contact form on sinbadbdl.com
            `,
        };

        // Send both emails
        await Promise.all([
            transporter.sendMail(userMailOptions),
            transporter.sendMail(companyMailOptions),
        ]);

        return NextResponse.json(
            { message: 'Your message has been sent successfully! Please check your email for confirmation.' },
            { status: 200 }
        );
    } catch (error) {
        console.error('Contact form error:', error);
        return NextResponse.json(
            { error: 'Failed to send message. Please try again later or contact us directly at +880 1813-087877.' },
            { status: 500 }
        );
    }
}
