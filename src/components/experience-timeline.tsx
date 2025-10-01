
'use client';

import { motion } from 'framer-motion';
import { Briefcase, List } from 'lucide-react';
import Image from 'next/image';
import { experiences } from '@/lib/data';
import { skillIcons } from '@/lib/skills';
import { ScrollReveal } from './scroll-reveal';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from './ui/tooltip';

export function ExperienceTimeline() {
  return (
    <div className="relative">
      <div className="absolute left-9 top-0 h-full w-0.5 bg-border -ml-px" />
      {experiences.map((exp, index) => (
        <ScrollReveal key={exp.id} delay={index * 0.2}>
          <div className="relative mb-8 flex items-start pl-20">
            <div className="absolute left-0 top-1 flex h-16 items-center">
              <div className="absolute left-9 -ml-[11px] h-[calc(1.375rem+2px)] w-[calc(1.375rem+2px)]">
                <motion.div
                  className="flex h-full w-full items-center justify-center rounded-full bg-primary ring-8 ring-background"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1, transition: { duration: 0.5, delay: 0.2 } }}
                  viewport={{ once: true }}
                >
                  <Briefcase className="h-5 w-5 text-primary-foreground" />
                </motion.div>
              </div>
            </div>
            <Card className="ml-4 w-full bg-card/80 backdrop-blur-sm transition-all duration-300 hover:shadow-primary/20 hover:shadow-lg hover:bg-card">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <p className="text-sm font-semibold text-primary">{exp.date}</p>
                </div>
                <CardTitle className="text-xl font-bold text-foreground">{exp.role}</CardTitle>
                <p className="text-md font-medium text-muted-foreground">{exp.company}</p>
              </CardHeader>
              <CardContent>
                {Array.isArray(exp.description) ? (
                  <ul className="space-y-2">
                    {exp.description.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-foreground/80">
                        <List className="h-4 w-4 mt-1 flex-shrink-0 text-primary/80" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-sm text-foreground/80">{exp.description}</p>
                )}
                
                {exp.technologies && exp.technologies.length > 0 && (
                  <div className="mt-4 pt-4 border-t border-border/50">
                    <p className="text-xs font-semibold text-muted-foreground mb-3">Technologies Used:</p>
                    <TooltipProvider>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <Tooltip key={tech}>
                            <TooltipTrigger>
                              <div className="group relative flex items-center justify-center gap-1.5 rounded-md bg-background/50 px-2.5 py-1.5 transition-all duration-300 hover:scale-105 hover:bg-primary/10 border border-border/50">
                                {skillIcons[tech] ? (
                                  <Image
                                    src={skillIcons[tech]}
                                    alt={`${tech} icon`}
                                    width={16}
                                    height={16}
                                    className="h-4 w-4 object-contain"
                                  />
                                ) : (
                                  <div className="h-4 w-4 flex items-center justify-center">
                                    <span className="text-xs font-bold">?</span>
                                  </div>
                                )}
                                <span className="text-xs font-medium">{tech}</span>
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>{tech}</p>
                            </TooltipContent>
                          </Tooltip>
                        ))}
                      </div>
                    </TooltipProvider>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </ScrollReveal>
      ))}
    </div>
  );
}
