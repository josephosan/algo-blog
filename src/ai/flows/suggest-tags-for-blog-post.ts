'use server';

/**
 * @fileOverview AI-powered tag suggestion for blog posts.
 *
 * - suggestTagsForBlogPost - A function that suggests tags for a blog post based on its content.
 * - SuggestTagsForBlogPostInput - The input type for the suggestTagsForBlogPost function.
 * - SuggestTagsForBlogPostOutput - The return type for the suggestTagsForBlogPost function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SuggestTagsForBlogPostInputSchema = z.object({
  blogPostContent: z
    .string()
    .describe('The content of the blog post for which tags are to be suggested.'),
});
export type SuggestTagsForBlogPostInput = z.infer<
  typeof SuggestTagsForBlogPostInputSchema
>;

const SuggestTagsForBlogPostOutputSchema = z.object({
  tags: z
    .array(z.string())
    .describe('An array of suggested tags for the blog post.'),
});
export type SuggestTagsForBlogPostOutput = z.infer<
  typeof SuggestTagsForBlogPostOutputSchema
>;

export async function suggestTagsForBlogPost(
  input: SuggestTagsForBlogPostInput
): Promise<SuggestTagsForBlogPostOutput> {
  return suggestTagsForBlogPostFlow(input);
}

const suggestTagsForBlogPostPrompt = ai.definePrompt({
  name: 'suggestTagsForBlogPostPrompt',
  input: {schema: SuggestTagsForBlogPostInputSchema},
  output: {schema: SuggestTagsForBlogPostOutputSchema},
  prompt: `You are an expert blog post tag suggestion assistant.

  Given the content of a blog post, suggest a list of relevant tags that can be used to categorize the post and improve its discoverability.

  Blog Post Content: {{{blogPostContent}}}

  Tags:`,
});

const suggestTagsForBlogPostFlow = ai.defineFlow(
  {
    name: 'suggestTagsForBlogPostFlow',
    inputSchema: SuggestTagsForBlogPostInputSchema,
    outputSchema: SuggestTagsForBlogPostOutputSchema,
  },
  async input => {
    const {output} = await suggestTagsForBlogPostPrompt(input);
    return output!;
  }
);
