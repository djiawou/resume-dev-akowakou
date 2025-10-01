'use client';

import Image from 'next/image';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Eye } from 'lucide-react';
import { GitHubLogoIcon } from '@radix-ui/react-icons';
import type { Project } from '@/lib/types';
import { cn } from '@/lib/utils';
import { skillIcons } from '@/lib/skills';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

export function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="relative h-full w-full"
    >
      <div
        className="group relative flex h-full flex-col overflow-hidden rounded-lg border bg-card shadow-lg [transform:translateZ(75px)] [transform-style:preserve-3d]"
      >
        <div className="relative h-48 w-full overflow-hidden">
          <Image
            src={project.imageUrl}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            data-ai-hint={project.imageHint}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-0 left-0 p-4">
            <h3 className="text-xl font-bold text-white">{project.title}</h3>
          </div>
        </div>
        <div className="flex flex-1 flex-col p-4">
          <p className="flex-1 text-sm text-muted-foreground">{project.description}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="flex items-center gap-1.5">
                {skillIcons[tag] && (
                   <Image
                      src={skillIcons[tag]}
                      alt={`${tag} icon`}
                      width={14}
                      height={14}
                      className="h-3.5 w-3.5"
                    />
                )}
                <span>{tag}</span>
              </Badge>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-2 border-t p-4">
          {project.demoUrl && (
            <Dialog>
              <DialogTrigger asChild>
                <Button className="w-full">
                  <Eye className="mr-2 h-4 w-4" /> View Demo
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-4xl p-0">
                <DialogHeader className="p-4 pb-0">
                  <DialogTitle>{project.title}</DialogTitle>
                  <DialogDescription>
                    Live demo of the project.
                  </DialogDescription>
                </DialogHeader>
                <div className="aspect-video w-full">
                  <iframe
                    src={project.demoUrl}
                    title={project.title}
                    className="h-full w-full"
                    sandbox="allow-scripts allow-same-origin allow-forms"
                  />
                </div>
              </DialogContent>
            </Dialog>
          )}
          {project.repoUrl && (
            <Button asChild variant="outline" className={cn(!project.demoUrl && 'w-full')}>
              <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">
                <GitHubLogoIcon className="mr-2 h-4 w-4" />
                Source
              </a>
            </Button>
          )}
        </div>
      </div>
    </motion.div>
  );
}
