
'use server';

import { z } from 'zod';
import { Resend } from 'resend';
import { ContactEmailTemplate } from '@/components/emails/contact-email-template';

const contactSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters.' }),
});

export type ContactFormState = {
  message: string;
  errors?: {
    name?: string[];
    email?: string[];
    message?: string[];
  };
  success: boolean;
};

export async function submitContactForm(
  prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const validatedFields = contactSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    message: formData.get('message'),
  });

  if (!validatedFields.success) {
    return {
      message: 'Failed to send message. Please check the fields.',
      errors: validatedFields.error.flatten().fieldErrors,
      success: false,
    };
  }

  const { name, email, message } = validatedFields.data;
  const resend = new Resend(process.env.RESEND_API_KEY);
  const toEmail = process.env.CONTACT_EMAIL_TO;

  if (!toEmail) {
    console.error('CONTACT_EMAIL_TO environment variable is not set.');
    return {
      message: 'Server configuration error. Could not send email.',
      success: false,
    };
  }

  try {
    const { data, error } = await resend.emails.send({
      from: 'Portfolio Contact Form <onboarding@resend.dev>',
      to: [toEmail],
      subject: `New message from ${name} via your portfolio`,
      react: ContactEmailTemplate({ name, email, message })
    });

    if (error) {
      console.error('Resend error:', error);
      return { 
        message: 'There was an error sending your message.', 
        success: false 
      };
    }

    return {
      message: 'Thank you! Your message has been sent successfully.',
      success: true,
    };
  } catch (error) {
    console.error('Error submitting form:', error);
    return {
      message: 'Something went wrong. Please try again.',
      success: false,
    };
  }
}
