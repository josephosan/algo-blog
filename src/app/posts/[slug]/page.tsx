import { notFound } from 'next/navigation';
import { getPostBySlug, getPosts } from '@/lib/posts';
import { format } from 'date-fns';
import { Badge } from '@/components/ui/badge';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { CodeBlock } from '@/components/blog/code-block';

interface PostPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const posts = await getPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function PostPage({ params }: PostPageProps) {
  const post = await getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="container mx-auto max-w-3xl py-8 px-4 sm:px-6 lg:py-12 lg:px-8">
      <header className="mb-8">
        <div className="space-y-2 text-center">
            <Badge variant="secondary" className="text-sm">{post.category}</Badge>
            <h1 className="text-4xl font-headline font-extrabold tracking-tight lg:text-5xl">
                {post.title}
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
          {post.content}
        </ReactMarkdown>
      </div>

      <footer className="mt-12">
        <div className="flex flex-wrap gap-2">
          <span className="font-semibold">Tags:</span>
          {post.tags.map((tag) => (
            <Badge key={tag} variant="outline">
              {tag}
            </Badge>
          ))}
        </div>
      </footer>
    </article>
  );
}
