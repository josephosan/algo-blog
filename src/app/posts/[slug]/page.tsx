'use client';
import { notFound, useParams } from 'next/navigation';
import { getPostBySlug } from '@/lib/posts';
import { format } from 'date-fns';
import { Badge } from '@/components/ui/badge';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { CodeBlock } from '@/components/blog/code-block';
import { useLanguage } from '@/contexts/language-context';
import { useDictionary } from '@/hooks/use-dictionary';
import { useEffect, useState } from 'react';
import type { Post } from '@/types';
import { AiChat } from '@/components/blog/ai-chat';

export default function PostPage() {
  const { language } = useLanguage();
  const dictionary = useDictionary();
  const params = useParams();
  const slug = Array.isArray(params.slug) ? params.slug[0] : params.slug;

  const [post, setPost] = useState<Post | undefined>(undefined);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPost() {
      if (slug) {
        const foundPost = await getPostBySlug(slug);
        setPost(foundPost);
      }
      setLoading(false);
    }
    fetchPost();
  }, [slug]);

  if (loading || !dictionary) {
    return (
      <div className="container mx-auto max-w-3xl py-8 px-4 sm:px-6 lg:py-12 lg:px-8">
        <div className="space-y-4">
          <div className="h-8 bg-muted rounded w-1/4 mx-auto"></div>
          <div className="h-12 bg-muted rounded w-3/4 mx-auto"></div>
          <div className="h-6 bg-muted rounded w-1/2 mx-auto"></div>
        </div>
        <div className="mt-12 space-y-4">
          <div className="h-6 bg-muted rounded w-full"></div>
          <div className="h-6 bg-muted rounded w-full"></div>
          <div className="h-6 bg-muted rounded w-5/6"></div>
        </div>
      </div>
    );
  }

  if (!post) {
    notFound();
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    if (language === 'fa') {
      return new Intl.DateTimeFormat('fa-IR', { year: 'numeric', month: 'long', day: 'numeric' }).format(date);
    }
    return format(date, 'MMMM d, yyyy');
  };

  return (
    <>
      <article className={`container mx-auto max-w-3xl py-8 px-4 sm:px-6 lg:py-12 lg:px-8 ${language === 'fa' ? 'rtl font-persian' : 'font-body'}`}>
        <header className="mb-8">
          <div className="space-y-2 text-center">
              <Badge variant="secondary" className="text-sm">{post.category[language]}</Badge>
              <h1 className="text-4xl font-headline font-extrabold tracking-tight lg:text-5xl">
                  {post.title[language]}
              </h1>
              <p className="text-muted-foreground">
                  <time dateTime={post.date}>
                    {formatDate(post.date)}
                  </time>
              </p>
          </div>
        </header>

        <div
          className="prose prose-lg dark:prose-invert mx-auto max-w-none prose-p:text-foreground/80 prose-headings:font-headline prose-headings:text-foreground prose-a:text-primary hover:prose-a:text-primary/80 prose-strong:text-foreground prose-code:font-code prose-code:bg-muted prose-code:p-1 prose-code:rounded-md prose-code:text-foreground/80"
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
            {post.content[language]}
          </ReactMarkdown>
        </div>

        <footer className="mt-12">
          <div className="flex flex-wrap gap-2">
            <span className="font-semibold">{dictionary.post.tags}:</span>
            {post.tags[language].map((tag) => (
              <Badge key={tag} variant="outline">
                {tag}
              </Badge>
            ))}
          </div>
        </footer>

        <AiChat
          title={post.title[language]}
          content={post.content[language]}
          language={language}
        />
      </article>
    </>
  );
}
