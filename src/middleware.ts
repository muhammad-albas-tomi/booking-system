import { NextRequest, NextResponse } from 'next/server';
import { ROLES } from './constants/roles';
import { auth } from './utils/auth';

const protectRoute = ['/hotels', '/bookings', '/admin', '/my-reservations'];
const publicRoutes = ['/', '/login'];

export async function middleware(req: NextRequest) {
  const session = await auth();
  const isLoggedIn = !!session?.user;
  const role = session?.user?.role;
  const { pathname } = req.nextUrl;

  // Redirect logged-in users away from login page
  if (isLoggedIn && pathname === '/login') {
    return NextResponse.redirect(new URL('/', req.url));
  }

  // Check if user is not logged in and trying to access protected routes
  if (!isLoggedIn && !publicRoutes.includes(pathname)) {
    // Allow access to room detail pages (assuming pattern like /room/[id] or /hotel/[id])
    const isRoomDetail = pathname.match(/^\/(room|hotel)\/\w+/);

    if (!isRoomDetail) {
      return NextResponse.redirect(new URL('/login', req.url));
    }
  }

  // Existing protection logic for specific routes
  if (!isLoggedIn && protectRoute.some((route) => pathname.startsWith(route))) {
    return NextResponse.redirect(new URL('/login', req.url));
  }

  // Admin route protection
  if (isLoggedIn && pathname.startsWith('/admin')) {
    if (role !== ROLES.ADMIN) {
      return NextResponse.redirect(new URL('/', req.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
