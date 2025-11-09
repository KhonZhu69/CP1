'use client';

import { z } from 'zod';
import {
  contactFormSchema,
  type ContactFormData,
  type ChatMessage,
} from '@/lib/types';

// Simple client-side handler – no server, no Genkit.
// You can later change this to POST to a 3rd-party form API or your own backend.
export async function submitContactForm(
  data: ContactFormData
): Promise<{ success: boolean; message: string }> {
  try {
    contactFormSchema.parse(data);
    console.log('Contact form data (static demo):', data);
    return {
      success: true,
      message: 'Thank you for your message! We will get back to you soon.',
    };
  } catch (error) {
    if (error instanceof z.ZodError) {
      return {
        success: false,
        message: error.errors[0]?.message ?? 'Validation error.',
      };
    }
    console.error('Contact form error:', error);
    return {
      success: false,
      message: 'Something went wrong. Please try again.',
    };
  }
}

// Static “demo” chatbot – no Genkit/server.
// You can replace the logic with a real API call later.
export async function getChatbotResponse(
  userInput: string,
  history: ChatMessage[]
): Promise<string> {
  // Very basic rule-based reply just so the UI works on a static site
  const lower = userInput.toLowerCase();

  if (lower.includes('service') || lower.includes('services')) {
    return "We offer custom software development, cloud solutions, and AI-powered tools. Tell me a bit about your project and we’ll suggest the best fit.";
  }

  if (lower.includes('contact') || lower.includes('email')) {
    return "You can contact Certitude Professionals using the contact form on this page or by emailing us directly. We’ll get back to you as soon as possible.";
  }

  if (history.length > 4) {
    return "Thanks for the detailed questions! For a proper proposal, please send us a message through the contact form and we’ll prepare a tailored plan.";
  }

  return "This is a demo version of the Certitude Professionals assistant running on a static site. Share your project idea, and I’ll give you a high-level suggestion.";
}
