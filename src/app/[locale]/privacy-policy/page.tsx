import type { Metadata } from 'next';
import PrivacyPolicyContent from '@/app/privacy-policy/PrivacyPolicyContent';
import { buildPageMetadata } from '@/lib/seo';
import { isLocale, type Locale } from '@/lib/i18n';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const safeLocale: Locale = isLocale(locale) ? locale : 'en';

  return buildPageMetadata(safeLocale, 'privacy', '/privacy-policy');
}

export default function LocalizedPrivacyPolicyPage() {
  return <PrivacyPolicyContent />;
}
