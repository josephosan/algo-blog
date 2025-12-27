'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { useDictionary } from '@/hooks/use-dictionary';
import { useLanguage } from '@/contexts/language-context';

export default function LandingPage() {
  const { language } = useLanguage();
  const dictionary = useDictionary();

  if (!dictionary) {
    return null;
  }
  
  return (
    <div className={`container mx-auto max-w-4xl py-12 px-4 sm:px-6 lg:px-8 ${language === 'fa' ? 'rtl font-persian' : 'font-body'}`}>
      <div className="text-center">
        <h1 className="text-4xl font-headline font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
          {dictionary.header.title}
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground sm:text-xl">
          {dictionary.home.description}
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Button asChild size="lg">
            <Link href="/blog">
              {dictionary.landing.browsePosts} <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>

      <div className="mt-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-center">
          <div className="p-6 border border-border/40 rounded-lg">
            <h3 className="text-xl font-headline font-semibold">{dictionary.landing.feature1.title}</h3>
            <p className="mt-2 text-muted-foreground">{dictionary.landing.feature1.description}</p>
          </div>
          <div className="p-6 border border-border/40 rounded-lg">
            <h3 className="text-xl font-headline font-semibold">{dictionary.landing.feature2.title}</h3>
            <p className="mt-2 text-muted-foreground">{dictionary.landing.feature2.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
