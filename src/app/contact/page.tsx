
import { Metadata } from 'next';
import { Mail, Phone, MapPin } from 'lucide-react';
import Image from 'next/image';
import { ContactForm } from '@/components/contact-form';
import { ScrollReveal } from '@/components/scroll-reveal';
import { author } from '@/lib/data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export const metadata: Metadata = {
  title: 'Contact Me',
  description: 'Get in touch with me for collaborations, questions, or just to say hi.',
};

const contactMethods = [
  {
    icon: <Mail className="h-6 w-6" style={{ color: '#25D366' }} />,
    title: 'Email',
    value: author.email,
    href: `mailto:${author.email}`,
  },
  {
    icon: <Image src="/icons/whatsapp.svg" alt="WhatsApp" width={24} height={24} />,
    title: 'WhatsApp',
    value: '+229 01 58 18 69',
    href: 'https://wa.me/22901581869',
  },
  {
    icon: <MapPin className="h-6 w-6" style={{ color: '#25D366' }} />,
    title: 'Location',
    value: 'Cotonou, Akpakpa',
    href: 'https://www.google.com/maps/search/?api=1&query=Cotonou+Akpakpa',
  },
];

export default function ContactPage() {
  return (
    <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
      <ScrollReveal>
        <h1 className="text-4xl font-headline font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl text-center">
          Let's Build Something Great
        </h1>
        <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground text-center">
          Have a project in mind, a question, or just want to connect? I'm always open to discussing new opportunities and creative ideas.
        </p>
      </ScrollReveal>
      
      <div className="mt-20 grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-16">
        <ScrollReveal className="lg:col-span-3">
          <Card className="h-full">
            <CardHeader>
              <CardTitle className="text-2xl">Send me a message</CardTitle>
            </CardHeader>
            <CardContent>
              <ContactForm />
            </CardContent>
          </Card>
        </ScrollReveal>

        <ScrollReveal delay={0.2} className="lg:col-span-2">
           <Card className="h-full">
            <CardHeader>
              <CardTitle className="text-2xl">Other Ways to Connect</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
                {contactMethods.map((method) => (
                  <div key={method.title} className="flex items-center gap-4">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary/10">
                      {method.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold">{method.title}</h4>
                      {method.href ? (
                        <a href={method.href} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                          {method.value}
                        </a>
                      ) : (
                        <p className="text-muted-foreground text-sm">{method.value}</p>
                      )}
                    </div>
                  </div>
                ))}
            </CardContent>
          </Card>
        </ScrollReveal>
      </div>
    </div>
  );
}
