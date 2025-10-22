
import { Metadata } from 'next';
import { projects } from '@/lib/data';
import { ProjectCard } from '@/components/project-card';
import { ScrollReveal } from '@/components/scroll-reveal';

export const metadata: Metadata = {
  title: 'My Projects',
  description: 'A collection of my projects, showcasing my skills in web development and design.',
};

export default function ProjectsPage() {
  return (
    <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
      <ScrollReveal>
        <h1 className="text-4xl font-headline font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
          My Projects
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
          Here&apos;s a selection of my work. Feel free to explore and check out the live demos or source code.
        </p>
      </ScrollReveal>

      <div className="mt-16 grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <ScrollReveal key={project.id} delay={index * 0.1}>
            <ProjectCard project={project} />
          </ScrollReveal>
        ))}
      </div>
    </div>
  );
}
