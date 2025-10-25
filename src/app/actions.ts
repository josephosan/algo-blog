'use server';

import { suggestTagsForBlogPost } from '@/ai/flows/suggest-tags-for-blog-post';

interface SuggestTagsResult {
  tags?: string[];
  error?: string;
}

export async function handleSuggestTags(
  content: string
): Promise<SuggestTagsResult> {
  if (!content || content.trim().length < 50) {
    return { error: 'Please provide at least 50 characters of content to suggest tags.' };
  }
  try {
    const result = await suggestTagsForBlogPost({ blogPostContent: content });
    return { tags: result.tags };
  } catch (e) {
    console.error('AI tag suggestion failed:', e);
    return { error: 'Failed to suggest tags due to a server error.' };
  }
}

// In a real application, you would add a `createPost` action here.
// It would take form data, validate it, save it to a database,
// and then use `revalidatePath('/')` to update the blog list.
