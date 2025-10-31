'use client';
import Link from 'next/link';
import type { Post } from '@/types';
import { format } from 'date-fns';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { useLanguage } from '@/context/language-context';

interface PostCardProps {
  post: Post;
}

export function PostCard({ post }: PostCardProps) {
  const { language, dictionary } = useLanguage();
  
  const title = post.title[language];
  const excerpt = post.excerpt[language];
  const category = post.category[language];
  const tags = post.tags[language];
  const ReadMoreIcon = language === 'fa' ? ArrowLeft : ArrowRight;

  return (
    <Card 
      className="flex flex-col overflow-hidden transition-all duration-300 hover:shadow-lg"
      dir={language === 'fa' ? 'rtl' : 'ltr'}
    >
      <CardHeader>
        <CardTitle className="font-headline text-2xl">
          <Link href={`/posts/${post.slug}`} className="hover:text-primary transition-colors">
            {title}
          </Link>
        </CardTitle>
        <CardDescription className="flex items-center gap-4 text-sm">
          <time dateTime={post.date}>
            {format(new Date(post.date), 'MMMM d, yyyy')}
          </time>
          <span>&bull;</span>
          <Badge variant="secondary">{category}</Badge>
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-muted-foreground">{excerpt}</p>
      </CardContent>
      <CardFooter className="flex justify-between items-center">
        <div className="flex flex-wrap gap-2">
            {tags.slice(0, 3).map((tag) => (
                <Badge key={tag} variant="outline" className="font-normal">
                    {tag}
                </Badge>
            ))}
        </div>
        <Button asChild variant="ghost" size="sm">
          <Link href={`/posts/${post.slug}`}>
            {dictionary.postCard.readMore} <ReadMoreIcon className="mx-2 h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
