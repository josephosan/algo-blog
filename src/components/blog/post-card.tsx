'use client';
import Link from 'next/link';
import type { Post } from '@/types';
import { format } from 'date-fns';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { useLanguage } from '@/contexts/language-context';
import { useDictionary } from '@/hooks/use-dictionary';

interface PostCardProps {
  post: Post;
}

export function PostCard({ post }: PostCardProps) {
  const { language } = useLanguage();
  const dictionary = useDictionary();

  if (!dictionary) return null;

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    if (language === 'fa') {
      return new Intl.DateTimeFormat('fa-IR', { year: 'numeric', month: 'long', day: 'numeric' }).format(date);
    }
    return format(date, 'MMMM d, yyyy');
  };

  const ReadMoreIcon = language === 'fa' ? ArrowLeft : ArrowRight;

  return (
    <Card className={`flex flex-col overflow-hidden transition-all duration-300 hover:shadow-lg ${language === 'fa' ? 'rtl font-persian' : 'font-body'}`}>
      <CardHeader>
        <CardTitle className="font-headline text-2xl">
          <Link href={`/posts/${post.slug}`} className="hover:text-primary transition-colors">
            {post.title[language]}
          </Link>
        </CardTitle>
        <CardDescription className="flex items-center gap-4 text-sm">
          <time dateTime={post.date}>
            {formatDate(post.date)}
          </time>
          <span>&bull;</span>
          <Badge variant="secondary">{post.category[language]}</Badge>
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-muted-foreground">{post.excerpt[language]}</p>
      </CardContent>
      <CardFooter className="flex justify-between items-center">
        <div className="flex flex-wrap gap-2">
            {post.tags[language].slice(0, 3).map((tag) => (
                <Badge key={tag} variant="outline" className="font-normal">
                    {tag}
                </Badge>
            ))}
        </div>
        <Button asChild variant="ghost" size="sm">
          <Link href={`/posts/${post.slug}`}>
            {dictionary.postCard.readMore} <ReadMoreIcon className={language === 'fa' ? 'mr-2 h-4 w-4' : 'ml-2 h-4 w-4'} />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
