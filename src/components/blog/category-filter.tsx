'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface CategoryFilterProps {
  categories: string[];
  currentCategory?: string;
}

export function CategoryFilter({ categories, currentCategory }: CategoryFilterProps) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-2">
      <Link href="/" passHref>
        <Button asChild variant={!currentCategory ? 'default' : 'outline'} size="sm">
          <a>All</a>
        </Button>
      </Link>
      {categories.map((category) => (
        <Link href={`/?category=${category}`} key={category} passHref>
          <Button
            asChild
            variant={currentCategory === category ? 'default' : 'outline'}
            size="sm"
            className="capitalize"
          >
            <a>{category}</a>
          </Button>
        </Link>
      ))}
    </div>
  );
}
