import Script from 'next/script';
import type { Metadata } from 'next';
import LandingPage from '@/components/LandingPage';
import { buildFaqJsonLd, buildOrganizationJsonLd, buildPageMetadata, buildSoftwareApplicationJsonLd, buildWebsiteJsonLd } from '@/lib/seo';
import { getDictionary, isLocale, locales, type Locale } from '@/lib/i18n';

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const safeLocale: Locale = isLocale(locale) ? locale : 'en';

  return buildPageMetadata(safeLocale, 'home');
}

export default async function LocalizedHomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const safeLocale: Locale = isLocale(locale) ? locale : 'en';
  const dictionary = getDictionary(safeLocale);

  const structuredData = [
    buildOrganizationJsonLd(safeLocale),
    buildWebsiteJsonLd(safeLocale),
    buildSoftwareApplicationJsonLd(safeLocale, dictionary),
    buildFaqJsonLd(safeLocale, dictionary),
  ];

  return (
    <>
      {structuredData.map((item, index) => (
        <Script
          key={`${safeLocale}-seo-${index}`}
          id={`${safeLocale}-seo-${index}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(item) }}
        />
      ))}
      <LandingPage />
    </>
  );
}
