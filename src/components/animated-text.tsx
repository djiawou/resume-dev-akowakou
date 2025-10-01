'use client';

import { motion, Variants } from 'framer-motion';
import { cn } from '@/lib/utils';

interface AnimatedTextProps {
  text: string | string[];
  el?: keyof JSX.IntrinsicElements;
  className?: string;
  once?: boolean;
  repeatDelay?: number;
  animation?: {
    hidden: Variants['hidden'];
    visible: Variants['visible'];
  };
  staggerChildren?: number;
}

export function AnimatedText({
  text,
  el: Wrapper = 'p',
  className,
  once,
  repeatDelay,
  staggerChildren = 0.1,
  animation = {
    hidden: {
      y: '200%',
      transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.85 },
    },
    visible: {
      y: 0,
      transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.75 },
    },
  },
}: AnimatedTextProps) {
  const textArray = Array.isArray(text) ? text : [text];
  const container: Variants = {
    hidden: { opacity: 0 },
    visible: (i: number = 1) => ({
      opacity: 1,
      transition: { staggerChildren, delayChildren: 0.04 * i },
    }),
  };

  return (
    <Wrapper className={cn('font-bold', className)}>
      {textArray.map((line, lineIndex) => (
        <motion.span
          key={`${line}-${lineIndex}`}
          className="block overflow-hidden"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          <motion.span className="block" variants={animation}>
            {line}
          </motion.span>
        </motion.span>
      ))}
    </Wrapper>
  );
}

export function AnimatedCharacters({
  text,
  el: Wrapper = 'p',
  className,
  once,
  repeatDelay,
  stagger = 0.03,
}: {
  text: string;
  el?: keyof JSX.IntrinsicElements;
  className?: string;
  once?: boolean;
  repeatDelay?: number;
  stagger?: number;
}) {
  const characters = text.split('');
  const container: Variants = {
    hidden: { opacity: 0 },
    visible: (i: number = 1) => ({
      opacity: 1,
      transition: { staggerChildren: stagger, delayChildren: 0.04 * i },
    }),
  };
  const child: Variants = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <Wrapper className={className}>
      <motion.span
        variants={container}
        initial="hidden"
        animate="visible"
        className="inline-block"
      >
        {characters.map((char, index) => (
          <motion.span key={index} variants={child} className="inline-block">
            {char === ' ' ? '\u00A0' : char}
          </motion.span>
        ))}
      </motion.span>
    </Wrapper>
  );
}
