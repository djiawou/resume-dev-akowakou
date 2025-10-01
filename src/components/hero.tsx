'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Briefcase, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { AnimatedText, AnimatedCharacters } from './animated-text';

const heroTitle = ['Turning Vision Into', 'Reality With Code', 'And Design.'];
const heroSubtext =
  'As a skilled full-stack developer, I am dedicated to turning ideas into innovative web applications. Explore my latest projects, showcasing my expertise in Django, Node.js, Laravel, React.js and web development.';

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background via-secondary to-background">
      <div className="absolute inset-0 bg-background/80 backdrop-blur-sm"></div>
      <div className="container relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 sm:py-32 lg:py-40">
        <div className="text-center">
          <motion.h1
            className="text-4xl font-headline font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Turning Vision Into Reality With Code And Design.
          </motion.h1>
          <motion.p
            className="mt-6 text-lg max-w-3xl mx-auto text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {heroSubtext}
          </motion.p>
          <motion.div
            className="mt-10 flex items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Button asChild size="lg" className="group">
              <Link href="/projects">
                <Briefcase className="mr-2 h-4 w-4" />
                My Projects
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="group">
              <Link href="/contact">
                <Mail className="mr-2 h-4 w-4" />
                Contact Me
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
