'use client'
import Link from 'next/link';
import { useLanguage } from '@/context/language-context';

export function Footer() {
  const { dictionary } = useLanguage();
  return (
    <footer className="w-full border-t border-border/40">
      <div className="container flex h-16 items-center justify-center py-4">
        <p className="text-sm text-muted-foreground text-center" dangerouslySetInnerHTML={{ __html: dictionary.footer.text}}/>
      </div>
    </footer>
  );
}
