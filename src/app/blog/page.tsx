'use client';
import Link from 'next/link';
import { getPosts } from '@/lib/posts';
import { PostCard } from '@/components/blog/post-card';
import { CategoryFilter } from '@/components/blog/category-filter';
import { useLanguage } from '@/contexts/language-context';
import { useDictionary } from '@/hooks/use-dictionary';
import { useState, useEffect } from 'react';
import type { Post } from '@/types';

export default function BlogPage({
  searchParams,
}: {
  searchParams?: { category?: string };
}) {
  const { language } = useLanguage();
  const dictionary = useDictionary();
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    async function fetchPosts() {
      const fetchedPosts = await getPosts();
      setPosts(fetchedPosts);
    }
    fetchPosts();
  }, []);

  if (!dictionary) {
    return null; 
  }

  const categories = [...new Set(posts.map((post) => post.category[language]))];
  const currentCategory = searchParams?.category;

  const filteredPosts = currentCategory
    ? posts.filter((post) => post.category[language] === currentCategory)
    : posts;

  return (
    <div className={`container mx-auto max-w-4xl py-8 px-4 sm:px-6 lg:px-8 ${language === 'fa' ? 'rtl font-persian' : 'font-body'}`}>
      <header className="mb-8 text-center">
        <h1 className="text-4xl font-headline font-bold tracking-tight text-foreground sm:text-5xl">
          {dictionary.blog.title}
        </h1>
        <p className="mt-2 text-lg text-muted-foreground">
          {dictionary.blog.description}
        </p>
      </header>
      
      <CategoryFilter categories={categories} currentCategory={currentCategory} />

      <div className="mt-12 grid gap-8">
        {filteredPosts.length > 0 ? (
          filteredPosts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))
        ) : (
          <div className="text-center py-16">
            <h2 className="text-2xl font-headline font-semibold">{dictionary.home.noPosts}</h2>
            <p className="text-muted-foreground mt-2">
              {dictionary.home.noPostsInCategory.replace('{category}', currentCategory || '')}
            </p>
            <Link href="/blog" className="mt-4 inline-block text-accent hover:underline">
              {dictionary.home.viewAllPosts}
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
