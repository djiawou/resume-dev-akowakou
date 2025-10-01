
import { EducationTimeline } from '@/components/education-timeline';
import { Metadata } from 'next';
import { ScrollReveal } from '@/components/scroll-reveal';

export const metadata: Metadata = {
    title: 'Education',
    description: 'A summary of my educational background and qualifications.',
};

export default function EducationPage() {
    return (
        <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
            <ScrollReveal>
                <h1 className="text-4xl font-headline font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl text-center">
                    Education & Training
                </h1>
                <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground text-center">
                    My academic journey and the foundations of my technical expertise.
                </p>
            </ScrollReveal>

            <div className="mt-16">
                <EducationTimeline />
            </div>
        </div>
    );
}
