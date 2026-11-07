import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://ameen.studio'),
  title: 'Ameen Studio | Framer Developer & Motion Designer',
  description:
    'Ameen Studio creates distinctive Framer websites, interactive digital experiences and purposeful motion design for startups and modern brands.',
  keywords: [
    'Framer Developer',
    'Motion Designer',
    'Ameen Studio',
    'Al-Ameen Tijani',
    'Creative Studio',
    'Web Design',
    'Interactive Experiences',
    'SaaS Websites',
    'Framer CMS',
  ],
  authors: [{ name: 'Al-Ameen Tijani', url: 'https://ameen.studio' }],
  creator: 'Al-Ameen Tijani',
  openGraph: {
    title: 'Ameen Studio | Framer Developer & Motion Designer',
    description:
      'Distinctive Framer websites, interactive digital experiences and purposeful motion design for startups and modern brands.',
    url: 'https://ameen.studio',
    siteName: 'Ameen Studio',
    images: [
      {
        url: '/images/portfolio/snapra.png',
        width: 1200,
        height: 630,
        alt: 'Ameen Studio — Framer Development & Motion Design',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ameen Studio | Framer Developer & Motion Designer',
    description:
      'Distinctive Framer websites, interactive digital experiences and purposeful motion design for startups and modern brands.',
    images: ['/images/portfolio/snapra.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=JetBrains+Mono:wght@400;500;600&family=Manrope:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[#111110] text-[#F5F1E9] antialiased selection:bg-brand-orange selection:text-[#111110] overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
