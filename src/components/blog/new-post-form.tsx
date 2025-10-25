'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { handleSuggestTags } from '@/app/actions';
import { Badge } from '@/components/ui/badge';
import { Bot, Loader2, Sparkles, X } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';

const formSchema = z.object({
  title: z.string().min(5, 'Title must be at least 5 characters long.'),
  category: z.string().min(3, 'Category must be at least 3 characters long.'),
  content: z.string().min(50, 'Content must be at least 50 characters long.'),
});

export function NewPostForm() {
  const [isSuggesting, setIsSuggesting] = useState(false);
  const [suggestedTags, setSuggestedTags] = useState<string[]>([]);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: '',
      category: '',
      content: '',
    },
  });

  const contentValue = form.watch('content');

  const onSuggestTags = async () => {
    setIsSuggesting(true);
    const result = await handleSuggestTags(contentValue);
    if (result.error) {
      toast({
        variant: 'destructive',
        title: 'Error',
        description: result.error,
      });
    } else if (result.tags) {
      setSuggestedTags(Array.from(new Set([...suggestedTags, ...result.tags])));
      toast({
        title: 'Tags Suggested!',
        description: 'New tags have been generated based on your content.',
      });
    }
    setIsSuggesting(false);
  };
  
  const removeTag = (tagToRemove: string) => {
    setSuggestedTags(suggestedTags.filter(tag => tag !== tagToRemove));
  };

  function onSubmit(values: z.infer<typeof formSchema>) {
    // In a real app, you would call a server action to save the post.
    // e.g., createPost({ ...values, tags: suggestedTags });
    console.log({ ...values, tags: suggestedTags });
    toast({
      title: 'Post Submitted (Simulation)',
      description: 'Check the browser console to see the post data.',
    });
    form.reset();
    setSuggestedTags([]);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <Card>
            <CardHeader>
                <CardTitle className='font-headline'>Post Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
                <FormField
                  control={form.control}
                  name="title"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Title</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g., A Guide to Binary Search" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="category"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Category</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g., Algorithms" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="content"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Content</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Write your post content here. Markdown is supported."
                          className="min-h-[300px] font-body"
                          {...field}
                        />
                      </FormControl>
                      <FormDescription>
                        You can use Markdown for formatting, including code blocks.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
            </CardContent>
        </Card>
        
        <Card>
            <CardHeader>
                <CardTitle className="font-headline flex items-center gap-2">
                    <Bot size={20} /> AI Tag Suggestions
                </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
                <div>
                  <Button
                      type="button"
                      onClick={onSuggestTags}
                      disabled={isSuggesting || contentValue.length < 50}
                      variant="outline"
                    >
                      {isSuggesting ? (
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      ) : (
                        <Sparkles className="mr-2 h-4 w-4" />
                      )}
                      Suggest Tags
                    </Button>
                    <p className="text-sm text-muted-foreground mt-2">
                        Requires at least 50 characters of content.
                    </p>
                </div>

                {suggestedTags.length > 0 && (
                  <div className="space-y-2">
                    <FormLabel>Suggested Tags</FormLabel>
                    <div className="flex flex-wrap gap-2 rounded-md border p-4">
                      {suggestedTags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-base">
                          {tag}
                          <button
                            type="button"
                            onClick={() => removeTag(tag)}
                            className="ml-2 rounded-full p-0.5 hover:bg-destructive/20"
                          >
                            <X className="h-3 w-3" />
                          </button>
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}
            </CardContent>
        </Card>

        <Button type="submit" size="lg">
          Publish Post
        </Button>
      </form>
    </Form>
  );
}
