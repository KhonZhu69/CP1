import { z } from 'zod';
import type { LucideIcon } from 'lucide-react';

export const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters long." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  company: z.string().optional(),
  message: z.string().min(10, { message: "Message must be at least 10 characters long." }),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
}
export interface ChatMessage {
  role: 'user' | 'model';
  content: string;
}
