'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Award, LinkIcon } from 'lucide-react';
import { certificates } from '@/lib/data';
import { skillIcons } from '@/lib/skills';
import { ScrollReveal } from './scroll-reveal';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';

const isDataUri = (src: string) => src.startsWith('data:image');

export function CertificatesTimeline() {
  return (
    <div className="relative">
      <div className="absolute left-9 top-0 h-full w-0.5 bg-border -ml-px" />
      {certificates.map((cert, index) => (
        <ScrollReveal key={cert.id} delay={index * 0.2}>
          <div className="relative mb-8 flex items-start pl-20">
            <div className="absolute left-0 top-1 flex h-16 items-center">
              <div className="absolute left-9 -ml-[11px] h-[calc(1.375rem+2px)] w-[calc(1.375rem+2px)]">
                <motion.div
                  className="flex h-full w-full items-center justify-center rounded-full bg-primary ring-8 ring-background"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1, transition: { duration: 0.5, delay: 0.2 } }}
                  viewport={{ once: true }}
                >
                  <Award className="h-5 w-5 text-primary-foreground" />
                </motion.div>
              </div>
            </div>
            <Card className="ml-4 w-full bg-card/80 backdrop-blur-sm transition-all duration-300 hover:shadow-primary/20 hover:shadow-lg hover:bg-card">
              <CardHeader>
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-semibold text-primary">{cert.date}</p>
                    <a href={cert.url} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label={`View ${cert.title} certificate`}>
                      <LinkIcon className="h-4 w-4" />
                    </a>
                  </div>
                  <CardTitle className="text-xl font-bold text-foreground">{cert.title}</CardTitle>
                  <p className="text-md font-medium text-muted-foreground">{cert.issuer}</p>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {cert.skills.map((skill) => {
                    const iconSrc = skillIcons[skill];
                    return (
                      <Badge key={skill} variant="secondary" className="flex items-center gap-1.5">
                        {iconSrc ? (
                          isDataUri(iconSrc) ? (
                            <img
                              src={iconSrc}
                              alt={`${skill} icon`}
                              className="h-3.5 w-3.5"
                            />
                          ) : (
                            <Image
                              src={iconSrc}
                              alt={`${skill} icon`}
                              width={14}
                              height={14}
                              className="h-3.5 w-3.5"
                            />
                          )
                        ) : null}
                        <span>{skill}</span>
                      </Badge>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </div>
        </ScrollReveal>
      ))}
    </div>
  );
}
