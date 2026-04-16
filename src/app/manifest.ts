import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: '4sports',
    short_name: '4sports',
    description: 'Sports club management platform for clubs, coaches and parents.',
    start_url: '/en',
    display: 'standalone',
    background_color: '#000000',
    theme_color: '#22c55e',
    icons: [
      {
        src: '/assets/Transparent/4sports.png',
        sizes: '512x512',
        type: 'image/png',
      },
      {
        src: '/assets/Transparent/4sports.svg',
        sizes: 'any',
        type: 'image/svg+xml',
      },
    ],
  };
}
