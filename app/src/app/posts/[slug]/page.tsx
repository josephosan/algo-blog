'use client'

import { notFound } from 'next/navigation';
import { getPostBySlug, getPosts } from '@/lib/posts';
import { format } from 'date-fns';
import { Badge } from '@/components/ui/badge';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { CodeBlock } from '@/components/blog/code-block';
import { useLanguage } from '@/context/language-context';
import { useEffect, useState } from 'react';
import type { Post } from '@/types';

interface PostPageProps {
  params: {
    slug: string;
  };
}

export default function PostPage({ params }: PostPageProps) {
  const { language, dictionary } = useLanguage();
  const [post, setPost] = useState<Post | undefined>(undefined);

  useEffect(() => {
    async function fetchPost() {
      const fetchedPost = await getPostBySlug(params.slug);
      setPost(fetchedPost);
    }
    fetchPost();
  }, [params.slug]);


  if (!post) {
    // Post not found or still loading
    return (
      <article className="container mx-auto max-w-3xl py-8 px-4 sm:px-6 lg:py-12 lg:px-8">
        <div className="text-center">{dictionary.post.loading}</div>
      </article>
    );
  }

  const postContent = post.content[language];
  const postTitle = post.title[language];
  const postCategory = post.category[language];
  const postTags = post.tags[language];

  return (
    <article className="container mx-auto max-w-3xl py-8 px-4 sm:px-6 lg:py-12 lg:px-8">
      <header className="mb-8">
        <div className="space-y-2 text-center">
            <Badge variant="secondary" className="text-sm">{postCategory}</Badge>
            <h1 className="text-4xl font-headline font-extrabold tracking-tight lg:text-5xl">
                {postTitle}
            </h1>
            <p className="text-muted-foreground">
                <time dateTime={post.date}>
                {format(new Date(post.date), 'MMMM d, yyyy')}
                </time>
            </p>
        </div>
      </header>

      <div
        className="prose prose-lg dark:prose-invert mx-auto max-w-none prose-p:text-foreground/80 prose-headings:font-headline prose-headings:text-foreground prose-a:text-primary hover:prose-a:text-primary/80 prose-strong:text-foreground prose-code:font-code prose-code:bg-muted prose-code:p-1 prose-code:rounded-md prose-code:text-foreground/80"
        dir={language === 'fa' ? 'rtl' : 'ltr'}
      >
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          components={{
            code(props) {
              const {children, className, node, ...rest} = props
              const match = /language-(\w+)/.exec(className || '')
              return match ? (
                <CodeBlock language={match[1]} value={String(children).replace(/\n$/, '')} />
              ) : (
                <code {...rest} className={className}>
                  {children}
                </code>
              )
            }
          }}
        >
          {postContent}
        </ReactMarkdown>
      </div>

      <footer className="mt-12">
        <div className="flex flex-wrap gap-2" dir={language === 'fa' ? 'rtl' : 'ltr'}>
          <span className="font-semibold">{dictionary.post.tags}:</span>
          {postTags.map((tag) => (
            <Badge key={tag} variant="outline">
              {tag}
            </Badge>
          ))}
        </div>
      </footer>
    </article>
  );
}
