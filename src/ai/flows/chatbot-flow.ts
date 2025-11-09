
'use server';
/**
 * @fileOverview A simple chatbot AI flow for Certitude Professionals.
 *
 * - chatWithBot - A function that handles the chatbot conversation.
 * - ChatbotInput - The input type for the chatWithBot function.
 * - ChatbotOutput - The return type for the chatWithBot function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ChatMessageSchema = z.object({
  role: z.enum(['user', 'model']),
  content: z.string(),
});
export type ChatMessage = z.infer<typeof ChatMessageSchema>;

const ChatbotInputSchema = z.object({
  userInput: z.string().describe('The latest message from the user.'),
  history: z.array(ChatMessageSchema).optional().describe('The conversation history so far.'),
});
export type ChatbotInput = z.infer<typeof ChatbotInputSchema>;

const ChatbotOutputSchema = z.object({
  botResponse: z.string().describe('The AI assistant\'s response to the user.'),
});
export type ChatbotOutput = z.infer<typeof ChatbotOutputSchema>;

export async function chatWithBot(input: ChatbotInput): Promise<ChatbotOutput> {
  return chatbotFlow(input);
}

const prompt = ai.definePrompt({
  name: 'chatbotPrompt',
  input: {schema: ChatbotInputSchema},
  output: {schema: ChatbotOutputSchema},
  prompt: `You are a friendly and helpful AI assistant for Certitude Professionals, a company specializing in expert software solutions and POS system development.
Your goal is to answer user questions about Certitude Professionals, its services (such as Requirements Gathering, Solution Design, Software Development, POS Systems, QA, DevOps, etc.), and how to get in touch.

If the user asks about Saravanan Thangavel or Yeshan Randika, please state that they are the founders of Certitude Professionals.

Be concise and informative. If you don't know an answer, say so politely.

{{#if history}}
Here is the conversation history:
{{#each history}}
{{this.role}}: {{this.content}}
{{/each}}
{{/if}}

User: {{{userInput}}}
Assistant:`,
});

const chatbotFlow = ai.defineFlow(
  {
    name: 'chatbotFlow',
    inputSchema: ChatbotInputSchema,
    outputSchema: ChatbotOutputSchema,
  },
  async (input) => {
    const {output} = await prompt(input);
    return output!;
  }
);
