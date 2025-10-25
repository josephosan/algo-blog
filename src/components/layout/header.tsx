'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { ThemeToggle } from './theme-toggle';

export function Header() {
  const pathname = usePathname();
  
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-4xl items-center">
        <div className="mr-4 flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 256 256"
              className="h-6 w-6"
            >
              <rect width="256" height="256" fill="none" />
              <path
                d="M48.2,128.2,128,48.5l79.8,79.7a8,8,0,0,1-11.3,11.3L128,71.3,59.5,139.5a8,8,0,0,1-11.3-11.3Z"
                className="fill-primary"
              />
              <path
                d="M196.5,116.5,128,185,59.5,116.5a8,8,0,0,0-11.3,11.3L128,207.8l79.8-79.7a8,8,0,1,0-11.3-11.3Z"
                className="fill-primary opacity-70"
              />
            </svg>
            <span className="font-bold font-headline sm:inline-block">
              Algo Blog
            </span>
          </Link>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-2">
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
