import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Al-Ameen Studio',
    short_name: 'Al-Ameen',
    description: 'Framer Developer & Motion Designer for Startups & Brands',
    start_url: '/',
    display: 'standalone',
    background_color: '#111110',
    theme_color: '#F06432',
    icons: [
      {
        src: '/icon.svg',
        sizes: 'any',
        type: 'image/svg+xml',
      },
    ],
  };
}

