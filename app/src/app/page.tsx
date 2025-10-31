'use client';

import Link from 'next/link';
import { getPosts } from '@/lib/posts';
import { PostCard } from '@/components/blog/post-card';
import { CategoryFilter } from '@/components/blog/category-filter';
import { useLanguage } from '@/context/language-context';
import { useEffect, useState } from 'react';
import type { Post } from '@/types';

export default function Home({
  searchParams,
}: {
  searchParams?: { category?: string };
}) {
  const { dictionary } = useLanguage();
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    async function fetchPosts() {
      const fetchedPosts = await getPosts();
      setPosts(fetchedPosts);
    }
    fetchPosts();
  }, []);

  const categories = [...new Set(posts.map((post) => post.category.en))];
  const currentCategory = searchParams?.category;

  const filteredPosts = currentCategory
    ? posts.filter((post) => post.category.en === currentCategory)
    : posts;

  return (
    <div className="container mx-auto max-w-4xl py-8 px-4 sm:px-6 lg:px-8">
      <header className="mb-8 text-center">
        <h1 className="text-4xl font-headline font-bold tracking-tight text-foreground sm:text-5xl">
          {dictionary.home.title}
        </h1>
        <p className="mt-2 text-lg text-muted-foreground">
          {dictionary.home.subtitle}
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
            <h2 className="text-2xl font-headline font-semibold">{dictionary.home.noPostsTitle}</h2>
            <p className="text-muted-foreground mt-2">
              {dictionary.home.noPostsDescription.replace('{category}', currentCategory || '')}
            </p>
            <Link href="/" className="mt-4 inline-block text-accent hover:underline">
              {dictionary.home.viewAllPosts}
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
