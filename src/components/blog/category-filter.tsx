'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useLanguage } from '@/contexts/language-context';
import { useDictionary } from '@/hooks/use-dictionary';

interface CategoryFilterProps {
  categories: string[];
  currentCategory?: string;
}

export function CategoryFilter({ categories, currentCategory }: CategoryFilterProps) {
  const { language } = useLanguage();
  const dictionary = useDictionary();

  if (!dictionary) return null;

  return (
    <div className={`flex flex-wrap items-center justify-center gap-2 ${language === 'fa' ? 'font-persian' : ''}`}>
      <Button asChild variant={!currentCategory ? 'default' : 'outline'} size="sm">
        <Link href="/blog">{dictionary.categories.all}</Link>
      </Button>
      {categories.map((category) => (
        <Button
          asChild
          key={category}
          variant={currentCategory === category ? 'default' : 'outline'}
          size="sm"
          className="capitalize"
        >
          <Link href={`/blog?category=${category}`}>{category}</Link>
        </Button>
      ))}
    </div>
  );
}
