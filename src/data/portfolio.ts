export interface Project {
  id: string;
  number: string;
  name: string;
  category: string;
  industry: string;
  shortDescription: string;
  description: string;
  services: string[];
  platform: string;
  image: string;
  previewImageAlt: string;
  url: string;
  year: string;
  featured: boolean;
  accentColor: string;
  tags: string[];
}

export const portfolioProjects: Project[] = [
  {
    id: 'virelloai',
    number: '01',
    name: 'Virello',
    category: 'AI SaaS & Analytics',
    industry: 'Technology / AI',
    shortDescription: 'Conversion-focused SaaS landing page with real-time analytics visualization.',
    description:
      'Design and development of a modern, conversion-optimised SaaS landing page and mobile app showcase. Built using CRO best practices with interactive metric charts, fluid card interactions, and responsive design systems.',
    services: ['Framer Development', 'UI/UX Design', 'Interactive Motion'],
    platform: 'Framer',
    image: '/images/portfolio/virelloai.png',
    previewImageAlt: 'Virello AI Social Analytics SaaS Platform',
    url: 'https://virelloai.framer.website/',
    year: '2026',
    featured: true,
    accentColor: '#6366F1',
    tags: ['SaaS', 'Framer', 'AI', 'Analytics'],
  },
  {
    id: 'rialta',
    number: '02',
    name: 'Rialta',
    category: 'Real Estate & Property',
    industry: 'Real Estate',
    shortDescription: 'Editorial realtor platform designed to build trust and drive premium sales.',
    description:
      'A purpose-built Framer website for realtors and luxury property specialists. Designed to showcase premier listings, past transactions, and regional market authority with clarity and confidence.',
    services: ['Framer Development', 'Editorial Layout', 'CMS Integration'],
    platform: 'Framer',
    image: '/images/portfolio/rialta_og.png',
    previewImageAlt: 'Rialta Luxury Realtor Platform',
    url: 'https://rialta.framer.website/',
    year: '2025',
    featured: true,
    accentColor: '#D97706',
    tags: ['Real Estate', 'Framer', 'Editorial', 'CMS'],
  },
  {
    id: 'horizone-visuvate',
    number: '03',
    name: 'Horizone',
    category: 'Mobility & Travel Tech',
    industry: 'Travel & Mobility',
    shortDescription: 'Modern vehicle booking experience spanning 14 cities with intuitive fleet filtering.',
    description:
      'A seamless digital car rental experience covering 14 metropolitan cities. Features dynamic vehicle filtering, transparent rate schedules, and fluid booking interactions crafted in Framer.',
    services: ['Framer Development', 'Interactive Filtering', 'Responsive UX'],
    platform: 'Framer',
    image: '/images/portfolio/horizone-visuvate.png',
    previewImageAlt: 'Horizone Car Rental Experience',
    url: 'https://horizone-visuvate.framer.website/',
    year: '2026',
    featured: true,
    accentColor: '#2563EB',
    tags: ['Mobility', 'Framer', 'Booking', 'Travel'],
  },
  {
    id: 'orveli-skin-care',
    number: '04',
    name: 'Orvéli',
    category: 'Botanical Skincare',
    industry: 'Beauty & Wellness',
    shortDescription: 'Plant-based botanical skincare store with gentle earth tones and refined aesthetics.',
    description:
      'Small-batch botanical skincare brand website. Built around soothing earthy palettes, refined editorial typography, and delicate micro-interactions that communicate natural craftsmanship.',
    services: ['Website Design', 'Framer Development', 'Art Direction'],
    platform: 'Framer',
    image: '/images/portfolio/orveli-skin-care.png',
    previewImageAlt: 'Orvéli Botanical Skincare Website',
    url: 'https://orveli-skin-care.framer.website/',
    year: '2025',
    featured: true,
    accentColor: '#059669',
    tags: ['E-Commerce', 'Framer', 'Beauty', 'Organic'],
  },
  {
    id: 'aestheticmatch',
    number: '05',
    name: 'AestheticMatch',
    category: 'Beauty & Cosmetics',
    industry: 'Cosmetics',
    shortDescription: 'Warm, glowing beauty brand store with catalog and integrated editorial blog.',
    description:
      'An elegant Framer store for cosmetics and beauty brands. Featuring warm lighting aesthetics, curated product grids, verified review highlights, and an integrated beauty journal.',
    services: ['Framer Development', 'E-Commerce Architecture', 'Motion Systems'],
    platform: 'Framer',
    image: '/images/portfolio/aestheticmatch.png',
    previewImageAlt: 'AestheticMatch Cosmetics Showcase',
    url: 'https://aestheticmatch.framer.website/',
    year: '2026',
    featured: true,
    accentColor: '#E11D48',
    tags: ['Cosmetics', 'Framer', 'Shop', 'Blog'],
  },
  {
    id: 'sarofinance',
    number: '06',
    name: 'Saro',
    category: 'FinTech & Payments SaaS',
    industry: 'FinTech',
    shortDescription: 'Enterprise fintech platform spanning 17 pages with interactive pricing calculator.',
    description:
      'Comprehensive fintech Framer platform designed for banking and payment startups. Includes 17 bespoke responsive pages, CMS-driven case studies, dynamic pricing toggles, and compliance architecture.',
    services: ['Framer Development', 'Interactive Components', 'CMS Architecture'],
    platform: 'Framer',
    image: '/images/portfolio/sarofinance.png',
    previewImageAlt: 'Saro Fintech and Banking SaaS',
    url: 'https://sarofinance.framer.website/',
    year: '2026',
    featured: true,
    accentColor: '#10B981',
    tags: ['FinTech', 'Framer', 'SaaS', '17 Pages'],
  },
  {
    id: 'clario',
    number: '07',
    name: 'Clario',
    category: 'Personal Finance Dashboard',
    industry: 'Personal Finance',
    shortDescription: 'Modern financial clarity web app interface with budget tracking and bank sync previews.',
    description:
      'Modern web experience for personal money management. Combines account sync visualization, real-time budget tracking, and intuitive financial clarity into a polished digital product.',
    services: ['UI/UX Design', 'Framer Development', 'Micro-Interactions'],
    platform: 'Framer',
    image: '/images/portfolio/clario.png',
    previewImageAlt: 'Clario Personal Finance Platform',
    url: 'https://clario.framer.website/',
    year: '2025',
    featured: false,
    accentColor: '#8B5CF6',
    tags: ['Finance', 'Framer', 'Dashboard', 'UI/UX'],
  },
  {
    id: 'arqvolt',
    number: '08',
    name: 'ARQVOLT',
    category: 'Clean Energy & Infrastructure',
    industry: 'CleanTech',
    shortDescription: 'Cinematic power engineering website for grid storage and data center electrification.',
    description:
      'High-impact clean energy infrastructure platform showcasing battery storage, grid modernization, and data center power solutions with bold technical precision and cinematic dark mode aesthetics.',
    services: ['Creative Direction', 'Framer Development', 'Motion Graphics'],
    platform: 'Framer',
    image: '/images/portfolio/arqvolt.png',
    previewImageAlt: 'ARQVOLT Clean Energy Infrastructure',
    url: 'https://arqvolt.framer.website/',
    year: '2026',
    featured: false,
    accentColor: '#F59E0B',
    tags: ['CleanTech', 'Framer', 'Energy', 'Dark Mode'],
  },
  {
    id: 'norfolk',
    number: '09',
    name: 'Norfolk',
    category: 'Architecture & Craft',
    industry: 'Construction / Architecture',
    shortDescription: 'High-end Long Island architectural fencing and custom outdoor woodworking showcase.',
    description:
      'Premium digital presence for Long Island residential and commercial fence installation. Highlights custom cedar craft, pergolas, material catalogs, and instant project consultation workflows.',
    services: ['Website Redesign', 'Framer Development', 'Responsive Design'],
    platform: 'Framer',
    image: '/images/portfolio/norfolk.png',
    previewImageAlt: 'Norfolk Architectural Fencing',
    url: 'https://norfolk.framer.website/',
    year: '2025',
    featured: false,
    accentColor: '#78716C',
    tags: ['Architecture', 'Framer', 'Craft', 'Showcase'],
  },
];
