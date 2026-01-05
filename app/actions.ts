'use server'

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(prevState: any, formData: FormData) {
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const message = formData.get('message') as string;

    if (!name || !email || !message) {
        return { success: false, message: 'Please fill in all fields.' };
    }

    try {
        const data = await resend.emails.send({
            from: 'Contact Form <onboarding@resend.dev>', // Use verifiable domain later
            to: 'soniapgonzalez24@gmail.com', // Replace with user's email or env var
            replyTo: email,
            subject: `New Message from ${name} (${email})`,
            text: message,
        });

        if (data.error) {
            console.error("Resend Error:", data.error);
            return { success: false, message: data.error.message || 'Failed to send email.' };
        }

        return { success: true, message: 'Email sent successfully!' };
    } catch (error) {
        console.error("Server Error:", error);
        return { success: false, message: 'Something went wrong.' };
    }
}
