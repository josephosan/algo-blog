'use client';
import { useLanguage } from '@/contexts/language-context';
import { useDictionary } from '@/hooks/use-dictionary';

export function Footer() {
  const { language } = useLanguage();
  const dictionary = useDictionary();

  if (!dictionary) return null;

  return (
    <footer className={`w-full border-t border-border/40 ${language === 'fa' ? 'rtl font-persian' : ''}`}>
      <div className="container flex h-16 items-center justify-center py-4">
        <p className="text-sm text-muted-foreground text-center">
          &copy; {new Date().getFullYear()} {dictionary.footer.rights} | {dictionary.footer.developedBy}{' '}
          <a
            href="https://josephosanlou.ir"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-primary underline-offset-4 hover:underline"
          >
            {dictionary.footer.developerName}
          </a>
        </p>
      </div>
    </footer>
  );
}
