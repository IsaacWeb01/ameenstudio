export interface NavigationLink {
  label: string;
  href: string;
  number: string;
}

export interface StudioInfo {
  name: string;
  founder: string;
  title: string;
  tagline: string;
  heroHeadline: string;
  heroSubheadline: string;
  availability: string;
  location: string;
  email: string;
  socials: {
    contra: string;
    instagram: string;
    email: string;
  };
  navigation: NavigationLink[];
}

export const studioInfo: StudioInfo = {
  name: 'AL-AMEEN STUDIO',
  founder: 'Al-Ameen Tijani',
  title: 'Framer Developer & Motion Designer for Startups & Brands',
  tagline: 'Digital experiences designed to move.',
  heroHeadline: 'Digital experiences\ndesigned to move.',
  heroSubheadline:
    'We design and develop distinctive websites and motion experiences for ambitious startups and modern brands.',
  availability: 'Available for select projects',
  location: 'Canada · Working worldwide',
  email: 'alameenworkss@outlook.com',
  socials: {
    contra:
      'https://contra.com/ayoola_ishola_24ckw0vd?referralExperimentNid=DEFAULT_REFERRAL_PROGRAM&referrerUsername=ayoola_ishola_24ckw0vd',
    instagram:
      'https://www.instagram.com/al.ameentijani/?utm_source=ig_web_button_share_sheet',
    email: 'mailto:alameenworkss@outlook.com',
  },
  navigation: [
    { label: 'Work', href: '#work', number: '01' },
    { label: 'Reviews', href: '#reviews', number: '02' },
    { label: 'Services', href: '#services', number: '03' },
    { label: 'Studio', href: '#about', number: '04' },
    { label: 'Process', href: '#process', number: '05' },
    { label: 'Options', href: '#options', number: '06' },
    { label: 'FAQ', href: '#faq', number: '07' },
    { label: 'Contact', href: '#contact', number: '08' },
  ],
};

export interface ToolItem {
  name: string;
  category: string;
  badge?: string;
}

export const toolkitList: ToolItem[] = [
  { name: 'Framer', category: 'Development & CMS', badge: 'Core' },
  { name: 'Figma', category: 'UI/UX & Systems', badge: 'Design' },
  { name: 'GSAP', category: 'Advanced Motion', badge: 'Code' },
  { name: 'After Effects', category: 'Motion Design', badge: 'Motion' },
  { name: 'Photoshop', category: 'Art Direction', badge: 'Visual' },
  { name: 'Illustrator', category: 'Vector & Brand', badge: 'Brand' },
  { name: 'Lottie', category: 'Vector Animation', badge: 'Web' },
  { name: 'HTML5', category: 'Semantic Structure', badge: 'Code' },
  { name: 'CSS3 / Tailwind', category: 'Responsive Styling', badge: 'Code' },
  { name: 'JavaScript / TS', category: 'Interactive Logic', badge: 'Code' },
];
