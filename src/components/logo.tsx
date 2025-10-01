'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { cn } from '@/lib/utils';

const iconVariants = {
  hidden: {
    pathLength: 0,
    fill: 'rgba(255, 255, 255, 0)',
  },
  visible: {
    pathLength: 1,
    fill: 'rgba(79, 70, 229, 1)', // primary color
  },
};

export function Logo({ className }: { className?: string }) {
  return (
    <Link href="/" aria-label="Back to homepage">
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className={cn('h-8 w-auto text-primary', className)}
        initial="hidden"
        animate="visible"
        transition={{
          default: { duration: 2, ease: 'easeInOut' },
          fill: { duration: 2, ease: [1, 0, 0.8, 1] },
        }}
      >
        <motion.path
          d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          variants={iconVariants}
        />
        <title>PortfolioVerse Logo</title>
      </motion.svg>
    </Link>
  );
}
