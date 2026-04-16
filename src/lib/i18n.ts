import en from '../../public/en.json';
import sr from '../../public/sr.json';

export const locales = ['en', 'sr'] as const;

export type Locale = (typeof locales)[number];
export type Dictionary = Record<string, any>;

const dictionaries: Record<Locale, Dictionary> = {
  en,
  sr,
};

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}

export function getAlternateLocale(locale: Locale): Locale {
  return locale === 'en' ? 'sr' : 'en';
}

export function stripLocaleFromPath(pathname: string) {
  const normalizedPath = pathname.startsWith('/') ? pathname : `/${pathname}`;
  const segments = normalizedPath.split('/');

  if (segments[1] && isLocale(segments[1])) {
    const strippedPath = `/${segments.slice(2).join('/')}`.replace(/\/+$/, '') || '/';
    return strippedPath === '' ? '/' : strippedPath;
  }

  return normalizedPath === '' ? '/' : normalizedPath;
}

export function localizePath(locale: Locale, pathname = '/') {
  const strippedPath = stripLocaleFromPath(pathname);

  if (strippedPath === '/') {
    return `/${locale}`;
  }

  return `/${locale}${strippedPath}`;
}

export function getTranslation(dictionary: Dictionary, key: string): string {
  const keys = key.split('.');
  let value: any = dictionary;

  for (const currentKey of keys) {
    if (value && typeof value === 'object' && currentKey in value) {
      value = value[currentKey];
    } else {
      return key;
    }
  }

  return typeof value === 'string' ? value : key;
}
