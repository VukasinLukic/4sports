import type { Metadata } from 'next';
import TermsContent from '@/app/terms/TermsContent';
import { buildPageMetadata } from '@/lib/seo';
import { isLocale, type Locale } from '@/lib/i18n';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const safeLocale: Locale = isLocale(locale) ? locale : 'en';

  return buildPageMetadata(safeLocale, 'terms', '/terms');
}

export default function LocalizedTermsPage() {
  return <TermsContent />;
}
