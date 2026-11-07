export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  description: string;
  capabilities: string[];
}

export const servicesData: ServiceItem[] = [
  {
    id: 'framer-development',
    number: '01',
    title: 'Framer Development',
    description:
      'We build visually distinctive, high-performing websites in Framer, combining thoughtful design with seamless functionality.',
    capabilities: [
      'Custom Framer websites',
      'Framer animations',
      'Responsive development',
      'CMS integration',
      'Interactive components',
      'Website redesigns',
      'Landing pages',
      'Website migration',
      'SEO foundations',
      'Performance optimisation',
    ],
  },
  {
    id: 'motion-design',
    number: '02',
    title: 'Motion Design',
    description:
      'We use movement to communicate ideas, create visual interest and bring digital experiences to life.',
    capabilities: [
      'Website motion design',
      'UI animations',
      'Micro-interactions',
      'Scroll-triggered animations',
      'Hero animations',
      'Logo animations',
      'Motion graphics',
      'Interactive transitions',
      'Product animations',
    ],
  },
  {
    id: 'website-design',
    number: '03',
    title: 'Website Design',
    description:
      'Beautifully structured websites built around clear communication, intuitive user experiences and distinctive visual direction.',
    capabilities: [
      'Website art direction',
      'Landing page design',
      'UI/UX design',
      'Website wireframes',
      'Visual systems',
      'Responsive layouts',
      'Conversion-focused design',
      'Website redesign strategy',
    ],
  },
  {
    id: 'digital-experiences',
    number: '04',
    title: 'Digital Experiences',
    description:
      'From interactive product experiences to immersive brand websites, we create digital environments that make brands stand out.',
    capabilities: [
      'Interactive websites',
      'Product storytelling',
      'Creative development',
      'Interactive prototypes',
      'Digital campaigns',
      'Experimental web experiences',
    ],
  },
  {
    id: 'brand-motion-identity',
    number: '05',
    title: 'Brand Motion & Identity',
    description:
      'Visual identities become more expressive when design and movement work together.',
    capabilities: [
      'Animated logos',
      'Brand motion systems',
      'Motion identity',
      'Animated typography',
      'Social media motion graphics',
      'Brand presentation',
    ],
  },
];
