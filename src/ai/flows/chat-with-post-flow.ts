'use server';
/**
 * @fileOverview A flow for chatting about a specific blog post.
 *
 * - chat - A function that takes post content and a question, and returns an AI-generated answer.
 * - ChatInput - The input type for the chat function.
 * - ChatOutput - The return type for the chat function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'zod';

export const ChatInputSchema = z.object({
  postContent: z.string().describe('The full content of the blog post.'),
  question: z.string().describe('The user\'s question about the post.'),
});
export type ChatInput = z.infer<typeof ChatInputSchema>;

export type ChatOutput = string;

const chatPrompt = ai.definePrompt({
  name: 'chatWithPostPrompt',
  input: { schema: ChatInputSchema },
  prompt: `You are an expert computer science tutor. Your job is to answer questions about a specific blog post.
  
You will be given the content of the post and a user's question. Your answer should be helpful, friendly, and directly related to the provided post content.
If the question is not related to the post, politely decline to answer and guide the user to ask a relevant question.

Post Content:
---
{{{postContent}}}
---

User's Question:
"{{{question}}}"

Your Answer:
`,
});

const chatWithPostFlow = ai.defineFlow(
  {
    name: 'chatWithPostFlow',
    inputSchema: ChatInputSchema,
    outputSchema: z.string(),
  },
  async (input) => {
    const { output } = await chatPrompt(input);
    return output || 'Sorry, I could not generate a response.';
  }
);

export async function chat(input: ChatInput): Promise<ChatOutput> {
  return chatWithPostFlow(input);
}
