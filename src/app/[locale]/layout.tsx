import { notFound } from 'next/navigation';
import { Providers } from '@/components/Providers';
import { getDictionary, isLocale, locales, type Locale } from '@/lib/i18n';

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  return (
    <Providers initialLanguage={locale as Locale} initialTranslations={getDictionary(locale as Locale)}>
      {children}
    </Providers>
  );
}
