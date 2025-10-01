
'use client';

import { motion } from 'framer-motion';
import { GraduationCap, LinkIcon, List } from 'lucide-react';
import { education } from '@/lib/data';
import { ScrollReveal } from './scroll-reveal';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

export function EducationTimeline() {
  return (
    <div className="relative">
      <div className="absolute left-9 top-0 h-full w-0.5 bg-border -ml-px" />
      {education.map((edu, index) => (
        <ScrollReveal key={edu.id} delay={index * 0.2}>
          <div className="relative mb-8 flex items-start pl-20">
            <div className="absolute left-0 top-1 flex h-16 items-center">
              <div className="absolute left-9 -ml-[11px] h-[calc(1.375rem+2px)] w-[calc(1.375rem+2px)]">
                <motion.div
                  className="flex h-full w-full items-center justify-center rounded-full bg-primary ring-8 ring-background"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1, transition: { duration: 0.5, delay: 0.2 } }}
                  viewport={{ once: true }}
                >
                  <GraduationCap className="h-5 w-5 text-primary-foreground" />
                </motion.div>
              </div>
            </div>
            <Card className="ml-4 w-full bg-card/80 backdrop-blur-sm transition-all duration-300 hover:shadow-primary/20 hover:shadow-lg hover:bg-card">
              <CardHeader>
                  <p className="text-sm font-semibold text-primary">{edu.date}</p>
                  <CardTitle className="text-xl font-bold text-foreground">{edu.degree}</CardTitle>
                  <div className="flex items-center gap-2">
                    <p className="text-md font-medium text-muted-foreground">{edu.school}</p>
                    {edu.website && (
                      <a href={`https://${edu.website}`} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label={`Visit ${edu.school} website`}>
                        <LinkIcon className="h-4 w-4" />
                      </a>
                    )}
                  </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-foreground/80 mb-4">{edu.location}, {edu.country}</p>
                {Array.isArray(edu.description) ? (
                  <ul className="space-y-2">
                    {edu.description.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-foreground/80">
                        <List className="h-4 w-4 mt-1 flex-shrink-0 text-primary/80" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-sm text-foreground/80">{edu.description}</p>
                )}
              </CardContent>
            </Card>
          </div>
        </ScrollReveal>
      ))}
    </div>
  );
}
