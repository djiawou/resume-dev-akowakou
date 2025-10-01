
import { Metadata } from 'next';
import { ExperienceTimeline } from '@/components/experience-timeline';
import { EducationTimeline } from '@/components/education-timeline';
import { CertificatesTimeline } from '@/components/certificates-timeline';
import { ScrollReveal } from '@/components/scroll-reveal';

export const metadata: Metadata = {
  title: 'My Experience',
  description: 'A timeline of my professional and educational journey.',
};

export default function ExperiencePage() {
  return (
    <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
      <ScrollReveal>
        <h1 className="text-4xl font-headline font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl text-center">
          My Journey
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground text-center">
          A timeline of my professional and educational background.
        </p>
      </ScrollReveal>
      
      <div className="mt-16">
        <ScrollReveal>
          <h2 className="text-3xl font-headline font-bold tracking-tight text-foreground mb-8 text-center">
            Work Experience
          </h2>
        </ScrollReveal>
        <ExperienceTimeline />
      </div>

      <div className="mt-20">
        <ScrollReveal>
          <h2 className="text-3xl font-headline font-bold tracking-tight text-foreground mb-12 text-center">
            Education & Training
          </h2>
        </ScrollReveal>
        <EducationTimeline />
      </div>

      <div className="mt-20">
        <ScrollReveal>
          <h2 className="text-3xl font-headline font-bold tracking-tight text-foreground mb-12 text-center">
            Certifications
          </h2>
        </ScrollReveal>
        <CertificatesTimeline />
      </div>
    </div>
  );
}
