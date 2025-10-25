import type { Metadata } from 'next';
import { Toaster } from '@/components/ui/toaster';
import { Header } from '@/components/layout/header';
import { cn } from '@/lib/utils';
import { PageProgress } from '@/components/layout/page-progress';
import { Suspense } from 'react';
import { ThemeProvider } from '@/components/layout/theme-provider';
import './globals.css';

export const metadata: Metadata = {
  title: 'Algo Blog',
  description: 'A blog to explain some algorithms',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&family=Source+Code+Pro:ital,wght@0,400;0,700;1,400&family=Space+Grotesk:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <body className={cn('min-h-screen bg-background font-body antialiased')}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
          </div>
          <Toaster />
          <Suspense fallback={null}>
            <PageProgress />
          </Suspense>
        </ThemeProvider>
      </body>
    </html>
  );
}
