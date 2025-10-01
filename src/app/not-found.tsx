
'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import './globals.css';


export default function NotFound() {
  return (
    <html>
      <body>
        <div className="flex min-h-screen items-center justify-center text-center">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <p className="text-base font-semibold text-primary">404</p>
            <h1 className="mt-2 text-4xl font-headline font-bold tracking-tight text-foreground sm:text-5xl">
              Page Not Found
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Sorry, we couldn’t find the page you’re looking for.
            </p>
            <div className="mt-10">
              <Button asChild>
                <Link href="/">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Go Back Home
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
