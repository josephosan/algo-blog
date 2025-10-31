'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useLanguage } from '@/context/language-context';

interface CategoryFilterProps {
  categories: string[];
  currentCategory?: string;
}

export function CategoryFilter({ categories, currentCategory }: CategoryFilterProps) {
  const { dictionary } = useLanguage();
  return (
    <div className="flex flex-wrap items-center justify-center gap-2">
      <Button asChild variant={!currentCategory ? 'default' : 'outline'} size="sm">
        <Link href="/">{dictionary.categories.all}</Link>
      </Button>
      {categories.map((category) => (
        <Button
          asChild
          key={category}
          variant={currentCategory === category ? 'default' : 'outline'}
          size="sm"
          className="capitalize"
        >
          <Link href={`/?category=${category}`}>{category}</Link>
        </Button>
      ))}
    </div>
  );
}
