import type { Metadata } from 'next';
import type { Dictionary, Locale } from '@/lib/i18n';

export const SITE_NAME = '4sports';
export const SITE_URL = 'https://4sports.rs';
export const DEFAULT_OG_IMAGE = '/assets/Transparent/4sports.png';

type SeoPageKey = 'home' | 'privacy' | 'terms' | 'support';

const seoCopy: Record<Locale, Record<SeoPageKey, { title: string; description: string; keywords: string[] }>> = {
  en: {
    home: {
      title: 'Sports Club Management Software for Clubs, Coaches and Parents',
      description:
        '4sports helps sports clubs manage members, attendance, payments, schedules and parent communication in one platform.',
      keywords: [
        'sports club management software',
        'club management app',
        'attendance tracking for sports clubs',
        'sports membership management',
        'sports payment tracking',
        'coach parent communication app',
      ],
    },
    privacy: {
      title: 'Privacy Policy',
      description:
        'Read how 4sports collects, uses and protects personal data across the sports club management platform.',
      keywords: ['4sports privacy policy', 'sports app privacy policy', 'data protection sports software'],
    },
    terms: {
      title: 'Terms of Service',
      description:
        'Review the terms that govern the use of the 4sports platform for sports clubs, coaches, parents and administrators.',
      keywords: ['4sports terms of service', 'sports software terms', 'club management platform terms'],
    },
    support: {
      title: 'Support',
      description:
        'Contact 4sports support for general help, onboarding questions and account deletion requests.',
      keywords: ['4sports support', 'sports club software support', 'account deletion request 4sports'],
    },
  },
  sr: {
    home: {
      title: 'Softver za upravljanje sportskim klubovima, trenerima i roditeljima',
      description:
        '4sports pomaže sportskim klubovima da na jednom mestu vode članove, prisustvo, članarine, rasporede i komunikaciju sa roditeljima.',
      keywords: [
        'softver za sportske klubove',
        'upravljanje sportskim klubom',
        'evidencija prisustva treninga',
        'upravljanje članarinama',
        'aplikacija za sportske klubove',
        'komunikacija sa roditeljima u klubu',
      ],
    },
    privacy: {
      title: 'Politika privatnosti',
      description:
        'Pročitajte kako 4sports prikuplja, koristi i štiti lične podatke na platformi za upravljanje sportskim klubovima.',
      keywords: ['4sports politika privatnosti', 'privatnost sportska aplikacija', 'zaštita podataka sportski klub'],
    },
    terms: {
      title: 'Uslovi korišćenja',
      description:
        'Pogledajte uslove koji uređuju korišćenje 4sports platforme za klubove, trenere, roditelje i administratore.',
      keywords: ['4sports uslovi korišćenja', 'uslovi sportski softver', 'platforma za sportske klubove uslovi'],
    },
    support: {
      title: 'Podrška',
      description:
        'Kontaktirajte 4sports podršku za opštu pomoć, uvođenje u sistem i zahteve za brisanje naloga.',
      keywords: ['4sports podrška', 'podrška za sportske klubove', 'brisanje naloga 4sports'],
    },
  },
};

export function getLocalizedUrl(locale: Locale, pathname = '/') {
  if (pathname === '/') {
    return `${SITE_URL}/${locale}`;
  }

  return `${SITE_URL}/${locale}${pathname.startsWith('/') ? pathname : `/${pathname}`}`;
}

function getPathAlternates(pathname = '/') {
  return {
    canonical: pathname === '/' ? './' : `.${pathname}`,
    languages: {
      en: getLocalizedUrl('en', pathname),
      sr: getLocalizedUrl('sr', pathname),
      'x-default': getLocalizedUrl('en', pathname),
    },
  };
}

export function buildPageMetadata(locale: Locale, page: SeoPageKey, pathname = '/', extra?: Partial<Metadata>): Metadata {
  const copy = seoCopy[locale][page];
  const localeCode = locale === 'sr' ? 'sr_RS' : 'en_US';
  const otherLocale = locale === 'sr' ? 'en_US' : 'sr_RS';

  return {
    title: copy.title,
    description: copy.description,
    keywords: copy.keywords,
    alternates: getPathAlternates(pathname),
    openGraph: {
      type: 'website',
      url: getLocalizedUrl(locale, pathname),
      siteName: SITE_NAME,
      locale: localeCode,
      alternateLocale: [otherLocale],
      title: copy.title,
      description: copy.description,
      images: [
        {
          url: DEFAULT_OG_IMAGE,
          width: 1200,
          height: 630,
          alt: `${SITE_NAME} logo`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: copy.title,
      description: copy.description,
      images: [DEFAULT_OG_IMAGE],
    },
    ...extra,
  };
}

export function buildOrganizationJsonLd(locale: Locale) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}${DEFAULT_OG_IMAGE}`,
    sameAs: ['https://www.linkedin.com/company/4sports-app/'],
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: '+38166493368',
        contactType: 'sales',
        areaServed: ['RS', 'BA', 'HR', 'ME', 'EU'],
        availableLanguage: locale === 'sr' ? ['sr', 'en'] : ['en', 'sr'],
      },
    ],
  };
}

export function buildWebsiteJsonLd(locale: Locale) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE_NAME,
    url: SITE_URL,
    inLanguage: locale,
    potentialAction: {
      '@type': 'SearchAction',
      target: `${SITE_URL}/${locale}`,
      'query-input': 'required name=search_term_string',
    },
  };
}

export function buildSoftwareApplicationJsonLd(locale: Locale, dictionary: Dictionary) {
  const title =
    locale === 'sr'
      ? 'Platforma za upravljanje sportskim klubovima'
      : 'Sports club management platform';

  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: SITE_NAME,
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'iOS, Android, Web',
    url: getLocalizedUrl(locale),
    inLanguage: locale,
    headline: title,
    description: dictionary.contact.description,
    image: `${SITE_URL}${DEFAULT_OG_IMAGE}`,
    publisher: {
      '@type': 'Organization',
      name: SITE_NAME,
      url: SITE_URL,
    },
  };
}

export function buildFaqJsonLd(locale: Locale, dictionary: Dictionary) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    inLanguage: locale,
    mainEntity: dictionary.faq.questions.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };
}
