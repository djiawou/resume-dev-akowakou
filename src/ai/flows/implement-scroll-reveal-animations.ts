'use server';

/**
 * @fileOverview This file defines a Genkit flow for automatically generating scroll reveal animations for web page elements.
 *
 * The flow uses a prompt to instruct the model to create animation variants for Framer Motion, which can then be applied to
 * React components to achieve smooth reveal effects as the user scrolls.
 *
 * - `generateScrollRevealAnimations` - A function that accepts element details and returns animation variants.
 * - `ScrollRevealAnimationsInput` - The input type for the `generateScrollRevealAnimations` function.
 * - `ScrollRevealAnimationsOutput` - The return type for the `generateScrollRevealAnimations` function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ScrollRevealAnimationsInputSchema = z.object({
  elementDescription: z.string().describe('A description of the element to be animated, including its type (e.g., card, section), purpose, and any specific design characteristics.'),
  staggerChildren: z.boolean().optional().describe('Whether child elements should appear with a staggered animation effect.'),
});

export type ScrollRevealAnimationsInput = z.infer<typeof ScrollRevealAnimationsInputSchema>;

const ScrollRevealAnimationsOutputSchema = z.object({
  variants: z.record(z.string(), z.any()).describe('A set of Framer Motion variants defining the animation effects for the element.'),
});

export type ScrollRevealAnimationsOutput = z.infer<typeof ScrollRevealAnimationsOutputSchema>;

export async function generateScrollRevealAnimations(input: ScrollRevealAnimationsInput): Promise<ScrollRevealAnimationsOutput> {
  return scrollRevealAnimationsFlow(input);
}

const scrollRevealPrompt = ai.definePrompt({
  name: 'scrollRevealPrompt',
  input: {schema: ScrollRevealAnimationsInputSchema},
  output: {schema: ScrollRevealAnimationsOutputSchema},
  prompt: `You are an expert in UI animations using Framer Motion. Your task is to generate animation variants for a given web page element that will be used to create a scroll reveal effect.

  The element is described as: {{{elementDescription}}}

  Here's how to create the animation variants:

  1.  **Initial State:** The element should start slightly out of view (e.g., slightly below the visible area) and transparent.
  2.  **Animated State:** When the element comes into view, it should smoothly slide up and fade in.

  If staggerChildren is true, then implement the staggerChildren and staggerDelay variants as well.  The staggerDelay variant should be 0.1.

  Return the variants as a JavaScript object that can be directly used in a React component with Framer Motion.

  Example:
  \{
  hidden: \{ opacity: 0, y: 20 \},
  visible: \{ opacity: 1, y: 0, transition: \{ duration: 0.5 \} \},
  staggerChildren: \{
    staggerChildren: 0.1
  \}
  \}
  `,
});

const scrollRevealAnimationsFlow = ai.defineFlow(
  {
    name: 'scrollRevealAnimationsFlow',
    inputSchema: ScrollRevealAnimationsInputSchema,
    outputSchema: ScrollRevealAnimationsOutputSchema,
  },
  async input => {
    const {output} = await scrollRevealPrompt(input);
    return output!;
  }
);
