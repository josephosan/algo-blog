import Link from 'next/link';

export function Footer() {
  return (
    <footer className="w-full border-t border-border/40">
      <div className="container flex h-16 items-center justify-center py-4">
        <p className="text-sm text-muted-foreground text-center">
          &copy; {new Date().getFullYear()} Algo Blog. All rights reserved. | Developed by{' '}
          <a
            href="https://josephosanlou.ir"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-primary underline-offset-4 hover:underline"
          >
            Joseph O.
          </a>
        </p>
      </div>
    </footer>
  );
}
