import Link from 'next/link';
import { Linkedin, Download } from 'lucide-react';
import { GitHubLogoIcon } from '@radix-ui/react-icons';
import { author } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { Logo } from '@/components/logo';

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-background/95">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-start gap-4">
            <Logo />
            <p className="text-sm text-muted-foreground">
              Fullstack developer transforming visions into reality with code and design.
            </p>
          </div>
          <div className="md:justify-self-center">
            <h3 className="text-sm font-semibold text-foreground">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              <li><Link href="/about" className="text-sm text-muted-foreground hover:text-primary">About</Link></li>
              <li><Link href="/projects" className="text-sm text-muted-foreground hover:text-primary">Projects</Link></li>
              <li><Link href="/contact" className="text-sm text-muted-foreground hover:text-primary">Contact</Link></li>
            </ul>
          </div>
          <div className="md:justify-self-end">
            <h3 className="text-sm font-semibold text-foreground">Connect</h3>
            <div className="mt-4 flex items-center space-x-4">
              <Button asChild variant="outline" size="icon">
                <a href={author.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <GitHubLogoIcon className="h-4 w-4" />
                </a>
              </Button>
              <Button asChild variant="outline" size="icon">
                <a href={author.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <Linkedin className="h-4 w-4" />
                </a>
              </Button>
              <Button asChild>
                <a href={author.cv} target="_blank" rel="noopener noreferrer" aria-label="Download CV">
                  <Download className="mr-2 h-4 w-4" />
                  Download CV
                </a>
              </Button>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} {author.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
