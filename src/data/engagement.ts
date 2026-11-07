export interface EngagementOption {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  scope: string[];
  recommendedFor: string;
  featured?: boolean;
}

export const engagementOptions: EngagementOption[] = [
  {
    id: 'website-experience',
    number: '01',
    title: 'Website Experience',
    subtitle: 'Distinctive Framer Build',
    description:
      'For brands that need a distinctive, professionally developed website built to convert and scale.',
    scope: [
      'Creative direction & art style',
      'Full website design in Figma',
      'Custom Framer development',
      'Fluid responsive layouts',
      'CMS integration where required',
      'Interactive components & states',
      'Core SEO & meta setup',
      'Launch & domain support',
    ],
    recommendedFor: 'Founders, startups, and modern brands looking to establish an authoritative online presence.',
    featured: false,
  },
  {
    id: 'motion-experience',
    number: '02',
    title: 'Motion Experience',
    subtitle: 'Dynamic Personality & Movement',
    description:
      'For brands looking to add movement, personality and visual distinction to their digital presence.',
    scope: [
      'Motion direction & storytelling',
      'Animated typography & hero reveals',
      'Fluid website animations (GSAP/Framer)',
      'UI micro-interactions & feedback',
      'Custom animated logo mark',
      'Scroll-triggered narrative pacing',
      'Interactive component transitions',
      'Performance & reduced-motion QA',
    ],
    recommendedFor: 'Existing products and brands wanting to elevate their visual engagement and stand apart.',
    featured: false,
  },
  {
    id: 'complete-digital-experience',
    number: '03',
    title: 'Complete Digital Experience',
    subtitle: 'Full Design, Development & Motion',
    description:
      'For ambitious brands that want a complete, seamless combination of design, development and bespoke motion.',
    scope: [
      'Complete creative strategy',
      'End-to-end website design system',
      'High-performance Framer development',
      'Custom bespoke motion design system',
      'Advanced interactive components',
      'Complete responsive optimisation',
      'CMS architecture & dynamic data',
      'Rigorous cross-device QA & launch',
    ],
    recommendedFor: 'Ambitious startups and high-growth brands wanting the ultimate digital flagship.',
    featured: true,
  },
];
