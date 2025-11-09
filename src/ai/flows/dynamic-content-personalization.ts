'use server';
/**
 * @fileOverview A dynamic content personalization AI agent.
 *
 * - personalizeContent - A function that handles the content personalization process.
 * - PersonalizeContentInput - The input type for the personalizeContent function.
 * - PersonalizeContentOutput - The return type for the personalizeContent function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const PersonalizeContentInputSchema = z.object({
  interests: z
    .string()
    .describe("The user's interests, such as the referring URL or search keywords."),
  serviceDescription: z.string().describe('The service being described.'),
});
export type PersonalizeContentInput = z.infer<typeof PersonalizeContentInputSchema>;

const PersonalizeContentOutputSchema = z.object({
  personalizedSnippet: z
    .string()
    .describe('A personalized content snippet tailored to the user.'),
});
export type PersonalizeContentOutput = z.infer<typeof PersonalizeContentOutputSchema>;

export async function personalizeContent(input: PersonalizeContentInput): Promise<PersonalizeContentOutput> {
  return personalizeContentFlow(input);
}

const prompt = ai.definePrompt({
  name: 'personalizeContentPrompt',
  input: {schema: PersonalizeContentInputSchema},
  output: {schema: PersonalizeContentOutputSchema},
  prompt: `You are an AI assistant specializing in generating personalized content snippets for a software company's website.

  Based on the user's interests and the service description, create a personalized snippet that highlights the relevance of the service to the user's needs.

  Interests: {{{interests}}}
  Service Description: {{{serviceDescription}}}

  Personalized Snippet:`,
});

const personalizeContentFlow = ai.defineFlow(
  {
    name: 'personalizeContentFlow',
    inputSchema: PersonalizeContentInputSchema,
    outputSchema: PersonalizeContentOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
