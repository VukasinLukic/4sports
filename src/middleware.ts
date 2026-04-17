import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { isLocale, localizePath, locales, type Locale } from '@/lib/i18n';

function getPreferredLocale(request: NextRequest): Locale {
  const localeCookie = request.cookies.get('language')?.value;

  if (localeCookie && isLocale(localeCookie)) {
    return localeCookie;
  }

  const acceptLanguage = request.headers.get('accept-language')?.toLowerCase() || '';

  if (acceptLanguage.includes('sr')) {
    return 'sr';
  }

  return 'en';
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const pathLocale = pathname.split('/')[1];

  if (!pathLocale || !isLocale(pathLocale)) {
    const preferredLocale = getPreferredLocale(request);
    const redirectUrl = request.nextUrl.clone();
    redirectUrl.pathname = localizePath(preferredLocale, pathname);
    return NextResponse.redirect(redirectUrl, 308);
  }

  const requestHeaders = new Headers(request.headers);
  requestHeaders.set('x-locale', pathLocale);

  const response = NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });

  response.cookies.set('language', pathLocale, {
    path: '/',
    sameSite: 'lax',
    maxAge: 60 * 60 * 24 * 365,
  });

  return response;
}

export const config = {
  matcher: ['/((?!api|_next|assets|.*\\..*).*)'],
};
