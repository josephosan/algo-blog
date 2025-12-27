'use client';

import Link from 'next/link';
import { ThemeToggle } from './theme-toggle';
import { LanguageToggle } from './language-toggle';
import { useLanguage } from '@/contexts/language-context';
import { useDictionary } from '@/hooks/use-dictionary';
import { Button } from '../ui/button';

export function Header() {
  const { language } = useLanguage();
  const dictionary = useDictionary();

  if (!dictionary) {
    return (
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 max-w-4xl items-center"></div>
      </header>
    );
  }
  
  return (
    <header className={`sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 ${language === 'fa' ? 'rtl font-persian' : ''}`}>
      <div className="container flex h-14 max-w-4xl items-center">
        <div className="flex flex-1 items-center justify-start">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6 fill-primary"
            >
              <path d="M10 20.5 2 12l8-8.5" />
              <path d="M14 3.5 22 12l-8 8.5" />
            </svg>
            <span className="font-bold font-headline sm:inline-block">
              {dictionary.header.title}
            </span>
          </Link>
          <nav>
            <Button variant="link" asChild>
              <Link href="/blog">{dictionary.header.blogLink}</Link>
            </Button>
          </nav>
        </div>
        <div className="flex items-center justify-end space-x-2">
          <LanguageToggle />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
