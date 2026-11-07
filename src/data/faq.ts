export interface FAQItem {
  id: string;
  number: string;
  question: string;
  answer: string;
}

export const faqData: FAQItem[] = [
  {
    id: 'faq-1',
    number: '01',
    question: 'What kind of projects do you work on?',
    answer:
      'I work with startups, founders, established businesses and creative brands looking to build or improve their digital presence through Framer websites and motion design.',
  },
  {
    id: 'faq-2',
    number: '02',
    question: 'Why Framer?',
    answer:
      'Framer makes it possible to combine powerful visual design with responsive development, interactive experiences and an intuitive content management workflow.',
  },
  {
    id: 'faq-3',
    number: '03',
    question: 'Can you redesign my existing website?',
    answer:
      'Absolutely. I can help transform an existing website into a more modern, engaging and visually distinctive digital experience.',
  },
  {
    id: 'faq-4',
    number: '04',
    question: 'Do you create custom animations?',
    answer:
      'Yes. I create purposeful animations, transitions, micro-interactions and motion systems that improve how a website communicates and feels.',
  },
  {
    id: 'faq-5',
    number: '05',
    question: 'Do you work with international clients?',
    answer:
      'Yes. Ameen Studio works remotely with clients across different countries and time zones.',
  },
  {
    id: 'faq-6',
    number: '06',
    question: 'How long does a project take?',
    answer:
      "Project timelines depend on the scope, complexity and requirements. Once we've discussed your project, I'll provide a realistic timeline.",
  },
  {
    id: 'faq-7',
    number: '07',
    question: 'Can you handle the complete website project?',
    answer:
      'Yes. From creative direction and design to Framer development, interactions and launch, I can manage the entire process.',
  },
  {
    id: 'faq-8',
    number: '08',
    question: 'How do we get started?',
    answer:
      "Simply send a project inquiry through the website. Share a little about your idea and I'll get back to you to discuss the next steps.",
  },
  {
    id: 'faq-9',
    number: '09',
    question: 'Do you offer ongoing support?',
    answer:
      'Project-dependent support and maintenance arrangements can be discussed during the initial conversation.',
  },
];
