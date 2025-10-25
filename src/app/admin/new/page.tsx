import { NewPostForm } from '@/components/blog/new-post-form';

export default function NewPostPage() {
  return (
    <div className="container mx-auto max-w-3xl py-8 px-4 sm:px-6 lg:py-12 lg:px-8">
      <div className="space-y-4">
        <header>
          <h1 className="text-4xl font-headline font-bold tracking-tight">
            Create a New Post
          </h1>
          <p className="text-muted-foreground mt-1">
            Fill out the details below to publish a new article on Algo Blog.
          </p>
        </header>
        <NewPostForm />
      </div>
    </div>
  );
}
