import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { legacyHostRedirect, requestHostname } from '@/lib/site-url';

// No matcher: this runs for every path, including sitemap, feed, and
// /_next/static, so a legacy host cannot keep serving a second origin.
// Preview hostnames are not in the redirect list and are served unchanged.
export function middleware(request: NextRequest) {
  const hostname = requestHostname(request.headers.get('host'), request.nextUrl.hostname);
  const destination = legacyHostRedirect(hostname, request.nextUrl);
  if (!destination) return NextResponse.next();
  return NextResponse.redirect(destination, 308);
}
