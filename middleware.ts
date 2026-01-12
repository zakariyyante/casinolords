import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const userAgent = request.headers.get('user-agent') || '';
  const referer = request.headers.get('referer') || '';
  const url = request.nextUrl.clone();

  // Check if smart routing is enabled via environment variable
  const isSmartRoutingEnabled = process.env.ENABLE_SMART_ROUTING === 'true';

  // If smart routing is disabled, everyone sees home1
  if (!isSmartRoutingEnabled) {
    // Block direct access to /home2 when feature is disabled
    if (url.pathname === '/home2') {
      url.pathname = '/';
      return NextResponse.rewrite(url);
    }
    return NextResponse.next();
  }

  // Smart routing is enabled - apply conditional logic

  // Check 1: Detect mobile devices
  const isMobile = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(
    userAgent.toLowerCase()
  );

  // Check 2: Check if referrer includes "google"
  const isFromGoogle = referer.toLowerCase().includes('google');

  // Check 3: Check if URL has gclid parameter
  const hasGclid = url.searchParams.has('gclid');

  // Determine if user should see home2
  const shouldShowHome2 = isMobile || isFromGoogle || hasGclid;

  // If user is on homepage (/)
  if (url.pathname === '/') {
    if (shouldShowHome2) {
      // Rewrite to home2 (URL stays as /)
      url.pathname = '/home2';
      return NextResponse.rewrite(url);
    }
    // Otherwise stay on home1 (page.tsx)
  }

  // Block direct access to /home2 - always rewrite to homepage
  if (url.pathname === '/home2') {
    url.pathname = '/';
    return NextResponse.rewrite(url);
  }

  return NextResponse.next();
}

// Configure which routes to run middleware on
export const config = {
  matcher: ['/', '/home2'],
};
