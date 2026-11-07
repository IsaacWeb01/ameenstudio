export interface ProcessStage {
  id: string;
  number: string;
  title: string;
  description: string;
  deliverables: string[];
}

export const processStages: ProcessStage[] = [
  {
    id: 'discover',
    number: '01',
    title: 'Discover',
    description:
      'We start by understanding your brand, audience, goals and project requirements.',
    deliverables: [
      'Initial conversation',
      'Project discovery',
      'Business objectives',
      'Scope definition',
      'Creative direction',
    ],
  },
  {
    id: 'design',
    number: '02',
    title: 'Design',
    description:
      'We shape the visual direction and user experience, creating a clear foundation for the final website.',
    deliverables: [
      'Visual exploration',
      'Wireframes',
      'Layout design',
      'Typography & colour systems',
      'Design approval',
    ],
  },
  {
    id: 'develop-animate',
    number: '03',
    title: 'Develop & Animate',
    description:
      'We bring the design to life in Framer, adding thoughtful interactions, responsive layouts and purposeful motion.',
    deliverables: [
      'Framer development',
      'Responsive implementation',
      'Custom animations',
      'CMS configuration',
      'Interactive elements & forms',
      'Platform integrations',
    ],
  },
  {
    id: 'refine-launch',
    number: '04',
    title: 'Refine & Launch',
    description:
      'We test, refine and prepare everything for a smooth launch.',
    deliverables: [
      'Quality assurance',
      'Cross-device testing',
      'Performance review',
      'Final refinements',
      'Domain & launch setup',
      'Client handover session',
    ],
  },
];
