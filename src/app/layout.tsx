import type { Metadata, Viewport } from 'next';
import { Providers } from '@/components/Providers';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: '4sports - Complete Sports Club Management Platform',
    template: '%s | 4sports',
  },
  description: 'Manage your sports club without obstacles. Streamline operations, track attendance, handle payments, and communicate with parents - all in one place.',
  keywords: ['sports club management', 'attendance tracking', 'sports scheduling', 'membership management', 'sports club software', 'coaching app'],
  authors: [{ name: '4sports' }],
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    url: 'https://4sports.rs/',
    title: '4sports - Complete Sports Club Management Platform',
    description: 'Manage your sports club without obstacles. Streamline operations, track attendance, handle payments, and communicate with parents - all in one place.',
    images: ['https://4sports.rs/assets/Transparent/4sports.png'],
    siteName: '4sports',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: '4sports - Complete Sports Club Management Platform',
    description: 'Manage your sports club without obstacles. Streamline operations, track attendance, handle payments, and communicate with parents - all in one place.',
    images: ['https://4sports.rs/assets/Transparent/4sports.png'],
  },
  icons: {
    icon: [
      { url: '/assets/Transparent/4sports.svg', type: 'image/svg+xml' },
      { url: '/assets/Transparent/4sports.png', type: 'image/png' },
    ],
    apple: '/assets/Transparent/4sports.png',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#22c55e',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
