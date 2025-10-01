
import type { Metadata } from 'next';
import { Inter, Poppins } from 'next/font/google';
import { cn } from '@/lib/utils';
import { Providers } from '@/components/providers';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Toaster } from '@/components/ui/toaster';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-poppins',
});


export const metadata: Metadata = {
  title: {
    default: 'Amour Akowakou | Fullstack Developer',
    template: '%s | Amour Akowakou',
  },
  description:
    'Fullstack developer — Django, Node.js, Laravel, React/Next.js. Transforming visions into reality with code & design.',
  openGraph: {
    title: 'Amour Akowakou | Fullstack Developer',
    description:
      'Fullstack developer — Django, Node.js, Laravel, React/Next.js. Transforming visions into reality with code & design.',
    url: 'https://akowakou-amour.vercel.app', 
    siteName: 'Amour Akowakou Portfolio',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Amour Akowakou | Fullstack Developer',
    description:
      'Fullstack developer — Django, Node.js, Laravel, React/Next.js. Transforming visions into reality with code & design.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${poppins.variable}`}>
      <head />
      <body
        className={cn(
          'min-h-screen bg-background font-body antialiased',
          'selection:bg-primary selection:text-primary-foreground'
        )}
        suppressHydrationWarning
      >
        <Providers>
          <div className="relative flex min-h-dvh flex-col bg-background">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
          <Toaster />
        </Providers>
      </body>
    </html>
  );
}
