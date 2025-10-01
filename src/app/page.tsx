
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Hero } from '@/components/hero';
import { ProjectCard } from '@/components/project-card';
import { ScrollReveal } from '@/components/scroll-reveal';
import { Button } from '@/components/ui/button';
import { projects, about, author } from '@/lib/data';
import { placeholderImages } from '@/lib/placeholder-images.json';

export default function Home() {
  const featuredProjects = projects.slice(0, 3);
  const aboutImage = placeholderImages.find(img => img.id === 'about-me')!;

  return (
    <div className="flex flex-col">
      <Hero />
      
      <section id="about" className="py-24 sm:py-32 bg-background">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal className="flex justify-center">
              <div className="relative h-80 w-80 lg:h-96 lg:w-96">
                <Image
                  src={aboutImage.imageUrl}
                  alt={`Portrait of ${author.name}`}
                  width={600}
                  height={600}
                  className="rounded-full object-cover shadow-lg"
                  data-ai-hint={aboutImage.imageHint}
                  priority
                />
                 <div className="absolute inset-0 rounded-full border-4 border-primary/50" />
                 <div className="absolute -bottom-4 -right-4 h-24 w-24 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm shadow-lg">
                    Hire Me
                 </div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <h2 className="text-4xl font-headline font-bold tracking-tight text-foreground sm:text-5xl">
                About Me
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                {about.intro}
              </p>
              <Button asChild size="lg" className="mt-6 group">
                <Link href="/about">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </ScrollReveal>
           </div>
        </div>
      </section>

      <section id="projects" className="py-24 sm:py-32 bg-secondary/30">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="text-4xl font-headline font-bold tracking-tight text-foreground sm:text-5xl text-center">
              Featured Projects
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground text-center">
              A selection of my work, from web applications to creative experiments.
            </p>
          </ScrollReveal>
          
          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {featuredProjects.map((project, index) => (
              <ScrollReveal key={project.id} delay={0.1 + index * 0.1}>
                <ProjectCard project={project} />
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal className="mt-16 text-center">
            <Button asChild size="lg" variant="outline" className="group">
              <Link href="/projects">
                View All Projects
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
