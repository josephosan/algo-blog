'use server';
/**
 * @fileOverview An AI flow to execute code snippets.
 * 
 * - runCode - A server action that executes code using an AI model.
 * - RunCodeInput - The input type for the runCode function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const RunCodeInputSchema = z.object({
  code: z.string().describe('The code snippet to execute.'),
  language: z.string().describe('The programming language of the code.'),
});
export type RunCodeInput = z.infer<typeof RunCodeInputSchema>;

const RunCodeOutputSchema = z.object({
  output: z.string().describe('The simulated output of the code execution.'),
});

const prompt = ai.definePrompt({
  name: 'runCodePrompt',
  input: { schema: RunCodeInputSchema },
  output: { schema: RunCodeOutputSchema },
  prompt: `You are a code interpreter. Execute the following {{{language}}} code and provide only the standard output. Do not provide any explanation or analysis. If the code has no output, return an empty string.

Code:
\'\'\'{{{language}}}
{{{code}}}
\'\'\'`,
});

const runCodeFlow = ai.defineFlow(
  {
    name: 'runCodeFlow',
    inputSchema: RunCodeInputSchema,
    outputSchema: RunCodeOutputSchema,
  },
  async (input) => {
    const { output } = await prompt(input);
    return output!;
  }
);

export async function runCode(input: RunCodeInput): Promise<string> {
    const result = await runCodeFlow(input);
    return result.output;
}
