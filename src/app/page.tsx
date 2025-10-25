import Link from 'next/link';
import { getPosts } from '@/lib/posts';
import { PostCard } from '@/components/blog/post-card';
import { CategoryFilter } from '@/components/blog/category-filter';

export default async function Home({
  searchParams,
}: {
  searchParams?: { category?: string };
}) {
  const posts = await getPosts();
  const categories = [...new Set(posts.map((post) => post.category))];
  const currentCategory = searchParams?.category;

  const filteredPosts = currentCategory
    ? posts.filter((post) => post.category === currentCategory)
    : posts;

  return (
    <div className="container mx-auto max-w-4xl py-8 px-4 sm:px-6 lg:px-8">
      <header className="mb-8 text-center">
        <h1 className="text-4xl font-headline font-bold tracking-tight text-foreground sm:text-5xl">
          Algo Blog
        </h1>
        <p className="mt-2 text-lg text-muted-foreground">
          Deconstructing complex algorithms into simple, digestible posts.
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
            <h2 className="text-2xl font-headline font-semibold">No Posts Found</h2>
            <p className="text-muted-foreground mt-2">
              There are no posts in the "{currentCategory}" category.
            </p>
            <Link href="/" className="mt-4 inline-block text-accent hover:underline">
              View all posts
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
