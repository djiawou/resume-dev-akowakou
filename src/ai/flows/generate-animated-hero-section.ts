'use server';

/**
 * @fileOverview Generates an animated hero section for a portfolio website.
 *
 * - generateAnimatedHeroSection - A function that generates the animated hero section content.
 * - AnimatedHeroSectionInput - The input type for the generateAnimatedHeroSection function.
 * - AnimatedHeroSectionOutput - The return type for the generateAnimatedHeroSection function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AnimatedHeroSectionInputSchema = z.object({
  userName: z.string().describe('The name of the portfolio owner.'),
  developerType: z.string().describe('Type of developer (e.g., Fullstack, Frontend, etc.)'),
  heroTitle: z.string().describe('The main title of the hero section.'),
  heroSubtext: z.string().describe('The subtext of the hero section.'),
});
export type AnimatedHeroSectionInput = z.infer<typeof AnimatedHeroSectionInputSchema>;

const AnimatedHeroSectionOutputSchema = z.object({
  heroSectionContent: z.string().describe('The generated HTML content for the animated hero section.'),
});
export type AnimatedHeroSectionOutput = z.infer<typeof AnimatedHeroSectionOutputSchema>;

export async function generateAnimatedHeroSection(input: AnimatedHeroSectionInput): Promise<AnimatedHeroSectionOutput> {
  return generateAnimatedHeroSectionFlow(input);
}

const prompt = ai.definePrompt({
  name: 'animatedHeroSectionPrompt',
  input: {schema: AnimatedHeroSectionInputSchema},
  output: {schema: AnimatedHeroSectionOutputSchema},
  prompt: `You are an expert UI/UX designer specializing in creating engaging and modern hero sections for developer portfolios. Use Tailwind CSS and Framer Motion for animations.

Generate the HTML code for a hero section with the following characteristics:

- The hero section should include a main title that reveals line by line with a stagger effect using Framer Motion.
- The hero section should include a subtext with a typing effect (optional) also using Framer Motion.
- The hero section should include call-to-action buttons with a subtle yoyo hover scale and shadow animation.
- Use the provided name, title and subtext in the hero section.

Here's the information you should use:

User Name: {{{userName}}}
Developer Type: {{{developerType}}}
Hero Title: {{{heroTitle}}}
Hero Subtext: {{{heroSubtext}}}

Ensure the generated HTML is compatible with Next.js and Tailwind CSS. Include necessary Framer Motion components and variants.

Output the complete HTML code for the hero section within a single string.
`,
});

const generateAnimatedHeroSectionFlow = ai.defineFlow(
  {
    name: 'generateAnimatedHeroSectionFlow',
    inputSchema: AnimatedHeroSectionInputSchema,
    outputSchema: AnimatedHeroSectionOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
