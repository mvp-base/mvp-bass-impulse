import { match } from '@formatjs/intl-localematcher';
import Negotiator from 'negotiator';

const DEFAULT_LOCALE = 'en';
export const LOCALES = ['cs', 'en'];

// Get the preferred locale, similar to above or using a library
function getLocale(request) {
  const acceptedLanguage = request.headers.get('accept-language') ?? undefined;
  let headers = { 'accept-language': acceptedLanguage };
  let languages = new Negotiator({ headers }).languages();
  try {
    return match(languages, LOCALES, DEFAULT_LOCALE);
  } catch (error) {
    console.log(error);
    return DEFAULT_LOCALE;
  }
}

export function middleware(request) {
  // Check if there is any supported locale in the pathname
  const { pathname } = request.nextUrl;
  const pathnameHasLocale = LOCALES.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) return;

  // Redirect if there is no locale
  const locale = getLocale(request);
  request.nextUrl.pathname = `/${locale}${pathname}`;
  // e.g. incoming request is /products
  // The new URL is now /en-US/products
  return Response.redirect(request.nextUrl);
}

export const config = {
  matcher: '/((?!api|admin|stati|.*\\..*|_next).*)',
};
