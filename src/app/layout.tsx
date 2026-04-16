import type { Metadata, Viewport } from 'next';
import { headers } from 'next/headers';
import { SITE_NAME, SITE_URL } from '@/lib/seo';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  applicationName: SITE_NAME,
  authors: [{ name: SITE_NAME }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  icons: {
    icon: [
      { url: '/assets/Transparent/4sports.svg', type: 'image/svg+xml' },
      { url: '/assets/Transparent/4sports.png', type: 'image/png' },
    ],
    apple: '/assets/Transparent/4sports.png',
  },
  manifest: '/manifest.webmanifest',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#22c55e',
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const headerList = await headers();
  const locale = headerList.get('x-locale') || 'en';

  return (
    <html lang={locale}>
      <body>
        {children}
      </body>
    </html>
  );
}
