import { author } from '@/lib/data';

export function StructuredData() {
  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: author.name,
    jobTitle: 'Fullstack Developer & AI Engineer',
    url: 'https://akowakou-amour.vercel.app',
    sameAs: [
      author.github,
      author.linkedin,
    ],
    email: author.email,
    knowsAbout: [
      'Web Development',
      'Fullstack Development',
      'Django',
      'FastAPI',
      'Node.js',
      'React',
      'Next.js',
      'Laravel',
      'Python',
      'JavaScript',
      'TypeScript',
      'AI Automation',
      'n8n',
      'ChatGPT Integration',
      'Machine Learning',
    ],
    alumniOf: {
      '@type': 'EducationalOrganization',
      name: 'Your University',
    },
  };

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Amour Akowakou Portfolio',
    url: 'https://akowakou-amour.vercel.app',
    description: 'Professional portfolio of Amour Akowakou, Fullstack Developer specializing in Django, FastAPI, Node.js, Laravel, React/Next.js, and AI automation',
    author: {
      '@type': 'Person',
      name: author.name,
    },
  };

  const professionalServiceSchema = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Amour Akowakou - Fullstack Development Services',
    description: 'Professional fullstack development services including web application development, API development, AI automation, and consulting',
    provider: {
      '@type': 'Person',
      name: author.name,
    },
    areaServed: 'Worldwide',
    serviceType: [
      'Web Development',
      'API Development',
      'AI Automation',
      'Consulting',
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalServiceSchema) }}
      />
    </>
  );
}
