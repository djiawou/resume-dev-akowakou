
import type { Metadata } from 'next';
import { Inter, Poppins } from 'next/font/google';
import { cn } from '@/lib/utils';
import { Providers } from '@/components/providers';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Toaster } from '@/components/ui/toaster';
import { StructuredData } from '@/components/structured-data';
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
  metadataBase: new URL('https://resume-dev-akowakou.vercel.app'),
  title: {
    default: 'Amour Akowakou | Fullstack Developer & AI Engineer',
    template: '%s | Amour Akowakou',
  },
  description:
    'Experienced Fullstack Developer specializing in Django, FastAPI, Node.js, Laravel, React/Next.js, and AI automation. Building innovative web applications with n8n, ChatGPT, and modern technologies.',
  keywords: [
    'Fullstack Developer',
    'Django Developer',
    'FastAPI',
    'React Developer',
    'Next.js',
    'Node.js',
    'Laravel',
    'Python Developer',
    'AI Automation',
    'n8n',
    'ChatGPT Integration',
    'Web Development',
    'Software Engineer',
    'Amour Akowakou',
  ],
  authors: [{ name: 'Amour Akowakou', url: 'https://resume-dev-akowakou.vercel.app' }],
  creator: 'Amour Akowakou',
  publisher: 'Amour Akowakou',
  openGraph: {
    title: 'Amour Akowakou | Fullstack Developer & AI Engineer',
    description:
      'Experienced Fullstack Developer specializing in Django, FastAPI, Node.js, Laravel, React/Next.js, and AI automation.',
    url: 'https://resume-dev-akowakou.vercel.app', 
    siteName: 'Amour Akowakou Portfolio',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/images/professional-amour.png',
        width: 1200,
        height: 630,
        alt: 'Amour Akowakou - Fullstack Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Amour Akowakou | Fullstack Developer & AI Engineer',
    description:
      'Experienced Fullstack Developer specializing in Django, FastAPI, Node.js, Laravel, React/Next.js, and AI automation.',
    images: ['/images/professional-amour.png'],
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
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${poppins.variable}`}>
      <head>
        <StructuredData />
      </head>
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
